import React, { useState, useEffect} from 'react';
import Header from './components/Header';
import FeaturedArticlesSection from './components/FeaturedArticlesSection.jsx';
import CategoriesSection from './components/CategoriesSection.jsx';
import Footer from './components/Footer.jsx';
import './App.css'

function App() {
  // Initialize state
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
  return (
    <div className="App">
      <Header toggleTheme={toggleTheme} isLightMode={isLightMode}/>,
      <FeaturedArticlesSection/>
      <CategoriesSection/>
      <Footer />
    </div>
  );
}



export default App;
