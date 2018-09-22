import React from 'react';
import { PageHeader } from 'react-bootstrap';

import HelloWorld from '../../shared/HelloWorld';
import MyButton from '../../shared/MyButton';

const Home = () => {
    return (
        <div>
            <PageHeader>Home</PageHeader>
            <HelloWorld />
            <MyButton />
        </div>
    );
};

export default Home;
