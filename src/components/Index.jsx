import React from 'react';
import { Provider } from 'mobx-react';
import Router from './Router';
import blogStore from '../stores/Blog';

const Index = () => (
    <Provider blog={blogStore}>
        <Router />
    </Provider>
);
export default Index;
