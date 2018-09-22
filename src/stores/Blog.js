import { decorate, observable } from 'mobx';
import Post from '../models/Post';

class BlogStore {
    name = 'My Blog Name';

    description = 'My blog description';

    posts = [
        new Post({
            id: 1,
            title: 'Hello World',
            body: 'This is my first post.'
        }),
        new Post({
            id: 2,
            title: 'Another Post Title',
            body:
                '<p>This is another post body.</p><p>This is a second paragraph.</p><script>dontletmehappen</script>'
        })
    ];
}

decorate(BlogStore, {
    posts: observable
});

const blogStore = new BlogStore();

export default blogStore;
