import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ( { category }) => {
    let categoryImageUrl = category.imageUrl || category.image_url;
    //Remove /public if it exists
    if (categoryImageUrl && categoryImageUrl.startsWith('/public')) {
        categoryImageUrl = categoryImageUrl.replace('/public', '');
    }
    // Ensure it starts with a single /
    if (categoryImageUrl && !categoryImageUrl.startsWith('/')) {
        categoryImageUrl = '/' + categoryImageUrl;
    }

    if (!categoryImageUrl) {
        categoryImageUrl = '/img/picsum.photos';
    }
    return (
        <Link to={`/category/${category.slug}`} className="article category-card-link" >
            <div className="category-image-box">
                <img src={categoryImageUrl} alt={category.name} 
                className="article-image"/>
            </div>
            <div className="category-data">
                <span className="tag-name">#{category.name}</span>
            </div>    
        </Link>
    );
};

export default CategoryCard;