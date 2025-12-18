import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import FeaturedArticlesSection from '../components/FeaturedArticlesSection';
import CategoriesSection from '../components/CategoriesSection';
import Post from '../components/Post';
import NewsletterSection from '../components/NewsletterSection';
//import { useOutletContext } from 'react-router-dom';

const HomePage = () => {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const location = useLocation();

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('http://localhost:4000/api/posts');
                if(!response.ok) throw new Error(`HTTP Error! status:${response.status}`);
                const data = await response.json();
                setPosts(data);
                setIsLoading(false);
            } catch (error) {
                setError(error.message);
                setIsLoading(false);
            }
        };
        fetchPosts();
    }, []);
    useEffect(() => {
         if(location.hash) {
        const element = document.getElementById(location.hash.substring(1));

        if (element) {
            element.scrollIntoView({behavior: 'smooth'});
        }
    } else {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }  
 }, [location]);
   

    if (isLoading) return <div className="loading-message">Loading Blog Posts...</div>;
    if (error) return <div className="error-message"> Error:{error}</div>;

    const categoriesMap = new Map();
    posts.forEach(post => {
        if (post.category && !categoriesMap.has(post.category.name)) {
            categoriesMap.set(post.category.name, post.category);
        }
    });

    const uniqueCategories = Array.from(categoriesMap.values());
    const olderPosts = posts.slice(2);


    return (
        <>
            <FeaturedArticlesSection posts={posts}/>
            <section id="categories-section">
                <CategoriesSection categories={uniqueCategories}/>
            </section>
            <section id="older-posts" className="older-posts section">
                <div className="container">
                    <h2 className="title section-title" data-name="Older Posts">Older Posts</h2>
                    <div className="older-posts-grid-wrapper d-grid">
                        {olderPosts.map(post => (
                            <Post key={post.id} postData={post}/>
                        ))}
                    </div>
                </div>
            </section>
            <NewsletterSection/>
        </>
    );
};

export default HomePage;

