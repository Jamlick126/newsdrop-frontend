import React from 'react';
import CategoryCard from './CategoryCard';

const CategoriesSection = ({ categories}) => {
    return (
        <section className="popular-tags section" id="categories">
            <div className="container">
                <h2 className="title section-title" data-name="Categories">Categories</h2>
                
                <div className="popular-tags-container d-grid">
                    {categories.map((category) => (
                        <CategoryCard key={category.name} category={category}/>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CategoriesSection;