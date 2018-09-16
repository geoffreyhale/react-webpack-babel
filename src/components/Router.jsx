import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';

import Home from './Home/index';
import About from './About/index';

const Router = () => (
    <BrowserRouter>
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>

            <hr />

            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
        </div>
    </BrowserRouter>
);
export default Router;
