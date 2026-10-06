import React from "react";
import NavBar from "./NavBar.jsx";
import Home from "./Home.jsx";
import About from "./About.jsx";
import News from "./News.jsx";
import Login from "./Login.jsx";
import Contact from "./Contact.jsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

class App extends React.Component {
  render() {


    return (
      <BrowserRouter>
        <h1>Welcome to the React Application</h1>
        
        <hr />
        <NavBar />
        <hr />

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<News />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    );
  }
} 

export default App;