import React from 'react';
import { Link } from 'react-router-dom';

// Accept data via props
const Post = ({ postData }) => {
    // Destructure properties from postData
    const { id, title, category, image_url, date, readTime, author_username } = postData;

    const publishDate = date ? new Date(date).toLocaleDateString() : 'Date Unknown';
    const timeToRead = readTime || '6 min read';

    const safeImageUrl = image_url && !image_url.startsWith('/') ? '/' + image_url : image_url;
    return (
        <Link to={`/post/${id}`} className="article older-posts-article-layout-custom">
          <div className="older-posts-article-image-wrapper">
            <img src={safeImageUrl} alt={title} className="article-image"/>
            {category && <span className="article-category">{category.name}</span>}
          </div>
          
          <div className="article-data-container">
            <div className="article-data">
                <span>{publishDate}</span>
                <span className="article-data-spacer"></span>
                <span>{timeToRead}</span>
            </div>
            <h3 className="post-title">{title}</h3>
            <p className="post-author">By **{author_username || 'Unknown'}**</p>
          </div>
        </Link>
      
    );
};

export default Post;