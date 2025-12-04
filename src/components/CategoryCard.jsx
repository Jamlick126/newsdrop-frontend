import React from 'react';

const CategoryCard = ( { category }) => {
    return (
        <a href={`/category/${category.slug}`} className="article">
            <span className="tag-name">#{category.name}</span>
            <img src={category.imageUrl} alt={category.name} className="article-image"/>
        </a>
    );
};

export default CategoryCard;