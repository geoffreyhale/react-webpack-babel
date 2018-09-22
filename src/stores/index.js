import { decorate, observable } from 'mobx';

class Store {
    constructor() {
        this.blog = {
            name: 'My Blog Name',
            description: 'My blog description',
            posts: [
                {
                    id: 1,
                    title: 'Hello World',
                    body: 'This is my first post.'
                },
                {
                    id: 2,
                    title: 'Another Post Title',
                    body:
                        '<p>This is another post body.</p><p>This is a second paragraph.</p><script>dontletmehappen</script>'
                }
            ]
        };
    }
}

decorate(Store, {
    posts: observable
});

const appStore = new Store();

export default appStore;
