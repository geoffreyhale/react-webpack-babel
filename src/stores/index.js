import { decorate, observable } from 'mobx';

class Store {
    constructor() {
        this.posts = [
            {
                title: 'Hello World',
                body: 'This is my first post.'
            },
            {
                title: 'Another Post Title',
                body: 'This is another post body.'
            }
        ];
    }
}

decorate(Store, {
    posts: observable
});

const appStore = new Store();

export default appStore;
