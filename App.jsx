import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // Assuming Navbar.jsx is inside the components folder
import HeroSection from "./components/Hero";
import ArticlePage from "./components/Article"; // Assuming Article.jsx is
import Layout from "./components/Layout"; 
import SubscriptionSection from "./components/SubscriptionSection"; // Assuming Subscription.jsx is
import DigitalServices from "./components/DigitalServices"; // Assuming DigitalServices.jsx is
import LatestArticle from "./components/LatestArticle"; // Assuming LatestArticle.jsx is
//import img 1 from "../assets/img 1.jpg"; // Assuming img 1.jpg is
import "./App.css"; 


function App() {
  return (
    <div className="app-container">
    <Router>
      <Navbar />
       <HeroSection />
      <ArticlePage />
      <Layout />
      <SubscriptionSection />

      <DigitalServices />
      <LatestArticle /> 
      
      <Routes>
        
        {/* <Route path="/" element={<HeroSection />} />
        <Route path="/" element={<ArticlePage />} />
        <Route path="/" element={<Layout />} />
        <Route path="/" element={<SubscriptionSection />} />
        <Route path="/" element={<DigitalServices />} />
        <Route path="/" element={<LatestArticle />} /> */}
      </Routes>
    </Router>
    </div>
  );
}

export default App;
