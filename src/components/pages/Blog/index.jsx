import React from 'react';
import { inject, observer } from 'mobx-react';
import { PageHeader } from 'react-bootstrap';
import './style.css';

@inject('store')
@observer
class Blog extends React.Component {
    render() {
        const { name, description, posts } = this.props.store.blog;

        return (
            <div>
                <PageHeader>
                    {name} <small>{description}</small>
                </PageHeader>
                <ul className="posts-list">
                    {posts.reverse().map(post => {
                        return (
                            <li key={post.id}>
                                <article>
                                    <h2>
                                        <a>{post.title}</a>
                                    </h2>
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: post.body.replace(
                                                /(<? *script)/gi,
                                                'illegalscript'
                                            )
                                        }}
                                    />
                                </article>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default Blog;
