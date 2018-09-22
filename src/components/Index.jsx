import React from 'react';
import { Provider } from 'mobx-react';
import Router from './Router';
import AppStore from '../stores';
import BlogStore from '../stores/BlogStore';

const Index = () => (
    <Provider appStore={new AppStore()} blog={new BlogStore()}>
        <Router />
    </Provider>
);
export default Index;
