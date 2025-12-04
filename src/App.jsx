import React, { useState, useEffect} from 'react';
import Header from './components/Header';
import FeaturedArticlesSection from './components/FeaturedArticlesSection.jsx';
import CategoriesSection from './components/CategoriesSection.jsx';
import Footer from './components/Footer.jsx';
import './App.css'

function App() {
  // State for blog posts and loading status
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  // Initialize state for theme toggle
  const [isLightMode, setIsLightMode] = useState (
    localStorage.getItem('currentTheme') === 'themeActive'
  );
  // Use useEffect to apply CSS to body element
  useEffect(() => {
    if (isLightMode) {
      document.body.classList.add('light-theme');
    } else {
      document.body.classList.remove('light-theme');
    }
  }, [isLightMode]);
  // Function to toggle theme and update localStorage
  const toggleTheme = () => {
    const newMode = !isLightMode;
    setIsLightMode(newMode);
    if (newMode) {
      localStorage.setItem('currentTheme', 'themeActive');
    } else {
      localStorage.removeItem('currentTheme');
    }
  };
  //Data fetching useEffect
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('api/posts');
        if (!response.ok) {
          throw new Error(`HTTP Error! status:${response.status}`);
        }
        const data = await response.json();
        setPosts(data);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };
    fetchPosts();
  }, []); // empty array to ensure it runs only once on mount

  // New render Logic based on data status
  if (isLoading) {
    return <div className="App">Loading Blog Post</div>;
  }
  if (error) {
    return <div className="App"> Error:{error}</div>;
  }

  const uniqueCategories = [... new Set(posts.map(item => item.category))].map(name => ({ name }));

  return (
    <div className="App">
      <Header toggleTheme={toggleTheme} isLightMode={isLightMode}/>,
      <FeaturedArticlesSection posts={posts}/>
      <CategoriesSection  categories={uniqueCategories}/>
      <Footer />
    </div>
  );
}



export default App;
