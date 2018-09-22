import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Menu from './Menu';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';

const Router = () => (
    <BrowserRouter>
        <div>
            <Menu />

            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/blog" component={Blog} />
        </div>
    </BrowserRouter>
);
export default Router;
