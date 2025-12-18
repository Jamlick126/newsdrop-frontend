import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Post from '../components/Post';

const CategoryPage = () => {
    // Get category slug from the url parameters
    const { slug } = useParams();
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPostsByCategory = async () => {
            setIsLoading(true);
            setError(null);
            try {
                const response = await fetch(`http://localhost:4000/api/posts?categorySlug=${slug}`);

                if(!response.ok) {
                    throw new Error(`HTTP Error! Status: ${response.status}`);
                }
                const data = await response.json();
                setPosts(data);
                setIsLoading(false);
            } catch (err) {
                setError(err.message);
                setIsLoading(false);
            }
        };
        fetchPostsByCategory();
    }, [slug]);

    if(isLoading) return <div className="container loading-message">Loading Posts for {slug}...</div>;
    if (error) return <div className="container error-message">Error: {error}</div>;

    if(posts.length === 0) {
        return(
            <section className="section">
                <div className="container">
                    <h1 className="title section-title">Category: {slug}</h1>
                    <p>No posts found in this category.</p>
                </div>
            </section>
        );
    }

    return (
        <section className="older-posts section section-header-offset">
            <div className="container">
                <h1 className="title section-title" data-name={slug}>Category: {slug.charAt(0).toUpperCase() + slug.slice(1)}</h1>
                <div className="older-posts-grid-wrapper d-grid">
                    {posts.map(post => (
                        <Post key={post.id} postData={post}/>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CategoryPage;

