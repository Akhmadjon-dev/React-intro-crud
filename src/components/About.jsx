import React, { Component } from 'react';
import { Routes, Route, Link } from "react-router-dom";

class About extends Component {
    render() {
        return (
            <div>
                About Page
                <div>
                    <Link to="/about/about-1">About-1</Link> <br />
                    <Link to="/about/about-2">About-2</Link>
                </div>
                <Routes>
                    <Route path="/about-1" element={<h3>About 1</h3>} />
                    <Route path="/about-2" element={<h3>About 2</h3>} />
                </Routes>
            </div>
        );
    }
}

export default About;