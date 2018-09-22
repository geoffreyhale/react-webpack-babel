import BlogStore from './BlogStore';

export default class AppStore {
    constructor() {
        this.blog = new BlogStore();
    }
}
