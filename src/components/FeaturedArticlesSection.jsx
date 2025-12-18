import React from 'react';
import ArticleCard from './ArticleCard';

const FeaturedArticlesSection = ({ posts }) => {
    //Filter posts for the main layout and sidebar
    const featuredPosts = posts.slice(0, 3);
    const trendingPosts = posts.filter(p => p.type === 'trending').slice(0, 5);

    return (
        <section className="featured-articles section-header-offset">
            <div className="featured-articles-container container d-grid">
                <div className="featured-content d-grid">
                    {/* Banner remains static for now */}
                    <div className="headline-banner">
                        <h3 className="headline fancy-border">
                            <span className="place-items-center">Breaking News!</span>
                        </h3>
                        <span className="headline-description">Apple announces iPhone 17 pro!!</span>
                    </div>
                    {/* Map through featured posts and render ArticleCards */}
                    {featuredPosts.map((post, index) => (
                        <ArticleCard key={post.id} post={post} index={index}/>
                    ))}
                </div>

                {/* Sidebar Section */}
                <div className="sidebar d-grid" id="news">
                    <h3 className="title featured-content-title">Latest News</h3>
                    {/* Map through trending posts and render Articles */}
                    {trendingPosts.map((post, index) =>(
                        // Pass the index so we can use it for the numbered list
                        <ArticleCard key={post.id} post={post} index={index}/>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedArticlesSection;