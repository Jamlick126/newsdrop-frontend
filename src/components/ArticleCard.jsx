import React from 'react';

const ArticleCard = ({ post, index}) => {
    const { title, category, imageUrl, publishDate, readTime, type, layout} = post;
    if (type ==='trending') {
        return (
            <a href={`/post/${post.id}`} className="trending-news-box">
                <div className="trending-news-image-box">
                    <span className="trending-number place-items-center">{String(index + 1).padStart(2, '0')}</span>
                    <img src={imageUrl} alt={title} className="article-image"/>
                </div>
                <div className="trending-news-data">
                    <div className="article-data">
                        <span>{publishDate}</span>
                        <span className="article-data-spacer"></span>
                        <span>{readTime}</span>
                    </div>
                    <h3 className="title article-title">{title}</h3>
                </div>
            </a>
        );
    }
    return (
        <a href={`/post/${post.id}`} className={`article featured-article featured-article-${layout}`}>
            <img src={imageUrl} alt={title} className="article-image" />
            <span className="article-category">{category}</span>
            <div className="article-data-container">
                <div className="article-data">
                    <span>{publishDate}</span>
                    <span className="article-data-spacer"></span>
                    <span>{readTime}</span>
                </div>
                <h3 className="title article-title">{title}</h3>
            </div>
        </a>
    );
};

export default ArticleCard;