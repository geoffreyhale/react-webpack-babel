import React from 'react';
import { inject, observer } from 'mobx-react';

@inject('store')
@observer
class Blog extends React.Component {
    render() {
        return (
            <div>
                <h1>Blog</h1>
                <ul>
                    {this.props.store.posts.map(post => {
                        return (
                            <li key={post.id}>
                                <a>{post.title}</a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default Blog;
