import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import { PageHeader } from 'react-bootstrap';

import HelloWorld from '../../shared/HelloWorld';
import MyButton from '../../shared/MyButton';

@inject('appStore')
@observer
class Home extends React.Component {
    static propTypes = {
        appStore: PropTypes.object
    };

    render() {
        const { appStore } = this.props;

        return (
            <div>
                <PageHeader>Home</PageHeader>
                <HelloWorld />
                <MyButton />
                <div>
                    <h3>appStore keys</h3>
                    <ul>
                        {Object.keys(appStore).map(k => (
                            <li>{k}</li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Home;
