import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import CommentSection from '../components/CommentSection';

const API_BASE_URL = "https://newsdrop-backend.onrender.com";

const formatContent = (text) => {
    if (!text) return '';

    let cleanedText = text.replace(/\|/g, '\n\n').replace(/, ->/g, '\n\n');

    const paragraphs = cleanedText.split(/\n\s*\n/g).map((paragraph) =>{
        const trimmed = paragraph.trim();
        if (trimmed.length === 0) return '';
        return `<p>${trimmed}</p>`;
    }).join('');

    return paragraphs;
};

const PostPage = () => {
    // Fetch post details using ID
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const[error, setError] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
               const response = await fetch(`${API_BASE_URL}/api/posts/${id}`);
               
               if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
               }
               const data = await response.json();
               console.log("Single Post Data Received:", data);
               setPost(data);
               setIsLoading(false);
            } catch (err) {
                setError(err.message);
                setIsLoading(false);
            }
        };
        fetchPost();
    }, [id]);

    if(isLoading) {
        return <div className="container">Loading Post...</div>;
    }
    if (error) {
        return <div className="container">Error: {error}</div>;
    }
    if (!post) {
        return <div className="container">Post not found</div>;
    }

    let imageUrl = post.image_url || post.imageUrl || post.image || (post.category ? post.category.imageUrl : null);

    if (imageUrl && !imageUrl.startsWith('/')) {
        // If the path exists and doesn't start with '/', prepend one.
        imageUrl = '/' + imageUrl;
    }

    const readTime = post.readTime || '6 min read';

    const formattedContent = post.content ? formatContent(post.content): '';


    return (
        <section className="blog-post section" >
            <div className="container">
                {/* Post Metadata and Hero Image section */}
                <div className="blog-post-data">
                    <div className="article-data">
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                        <span className="article-data-spacer"></span>
                        <span>{readTime}</span>
                    </div>
                    <h1 className="title blog-post-title">{post.title}</h1>
                    <p className="article-author">By **{post.author_username || 'Unknown Author'}**</p>
                   
                </div>
                  {imageUrl &&  
                    <img 
                        src={imageUrl} 
                        alt={post.title} 
                        className="post-hero-image"/>}
               
                 <div className="blog-post-container">
                    
                        {formattedContent && <div className="post-content" dangerouslySetInnerHTML={{__html: formattedContent}}></div> }
                        
                </div>
            </div>
            <CommentSection postId={id}/>
        </section>
    );
};

export default PostPage;