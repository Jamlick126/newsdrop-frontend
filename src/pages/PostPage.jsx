import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

const PostPage = () => {
    // Fetch post details using ID
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const[error, setError] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
               const response = await fetch(`http://localhost:4000/api/posts/${id}`);
               
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
                    <div className="container">
                        {post.content && <div className="post-content" dangerouslySetInnerHTML={{__html: post.content}}></div> }
                        
                        {post.category && (
                            <div className="tags">
                                <span className="article-category">#{post.category.name}</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PostPage;