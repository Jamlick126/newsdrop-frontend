import React from 'react';
import { Link } from 'react-router-dom';


const ArticleCard = ({ post, index}) => {
    const { title, category, image_url, publishDate, readTime, type, layout, author_username} = post;
    if (type ==='trending') {
        return (
                <Link to={`/post/${post.id}`} className="trending-news-box">
                <div className="trending-news-image-box">
                    <span className="trending-number place-items-center">{String(index + 1).padStart(2, '0')}</span>
                    <img src={image_url} alt={title} className="article-image"/>
                </div>
                
                <div className="trending-news-data">
                    <div className="article-data">
                        <span>{publishDate}</span>
                        <span className="article-data-spacer"></span>
                        <span>{readTime}</span>
                    </div>
                    <h3 to={`/post/${post.id}`} className="title article-title">{title}</h3>
                    <span className="article-author">By **{author_username || 'Unknown'}**</span>
                </div>
                </Link>
        );
    }
    return (
        <Link to={`/post/${post.id}`} className={`article featured-article featured-article-${layout}`}>
            <img src={image_url} alt={title} className="article-image" />
            <span className="article-category">{category.name}</span>
            <div className="article-data-container">
                <div className="article-data">
                    <span>{publishDate}</span>
                    <span className="article-data-spacer"></span>
                    <span>{readTime}</span>
                </div>
                <h3 className="title article-title">{title}</h3>
                <span className="article-author">By **{author_username || 'Unknown'}**</span>
            </div>
        </Link>
    );
};

export default ArticleCard;