import React from 'react';
import { Provider } from 'mobx-react';
import Router from './Router';
import appStore from '../stores';

const Index = () => (
    <Provider store={appStore}>
        <Router />
    </Provider>
);
export default Index;
