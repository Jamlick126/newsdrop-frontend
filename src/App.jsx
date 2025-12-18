import React, { useState, useEffect} from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PostPage from './pages/PostPage';
import CategoryPage from './pages/CategoryPage';
import Footer from './components/Footer';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ProfilePage from './pages/ProfilePage';
import './App.css'

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:10000";

const AppLayout = ({ isLightMode, toggleTheme }) => {
  const [categories, setCategories] = useState([]);
  //Fetch categories on component mount for footer
  useEffect(() => {
    const fetchCategories = async() => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/categories`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Footer data:", data);
        setCategories(data);
      } catch (err) {
        console.error("Failed to fetch categories:", err);
      }
    };
    fetchCategories();
  }, []);
  return (
    <div className="App">
      <Header toggleTheme={toggleTheme} isLightMode={isLightMode}/>
      <main className="section-header-offset">
        <Outlet context={{categories}}/>
      </main>
      <Footer categories={categories}/>

    </div>
  )
}

function App() {
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
  return (
    <Routes>
     {/* Define the main layout route */}
      <Route path="/" element={<AppLayout isLightMode={isLightMode} toggleTheme={toggleTheme}/>}>
        
        {/* Nest the individual page routes inside the main layout route */}
        {/* The 'index' route renders when the parent path (i.e., "/") matches exactly */}
        <Route index element={<HomePage/>}/>
        
        {/* Other pages also use the AppLayout */}
        <Route path="post/:id" 
               element={<PostPage/>}/>
        <Route path="category/:slug" 
               element={
                <ProtectedRoute>
                    <CategoryPage />
                </ProtectedRoute>
               } />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage/>}/>
        {/* Add a catch-all route for 404s if needed */}
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      
      </Route>
      {/* --- NEW AUTH ROUTES --- */}
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignupPage />} />
        <Route path="profile" 
              element={
                <ProtectedRoute>
                  <ProfilePage />
                </ProtectedRoute>}/>
    </Routes>
  );
}



export default App;
