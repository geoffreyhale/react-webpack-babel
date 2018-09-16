import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './components/HelloWorld';
import MyButton from './components/MyButton';

const Index = () => {
    return (
        <div>
            <HelloWorld />
            <MyButton />
        </div>
    );
};

ReactDOM.render(<Index />, document.getElementById('index'));
