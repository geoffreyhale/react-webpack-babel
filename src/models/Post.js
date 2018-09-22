export default class Post {
    id = null;

    title = '';

    body = '';

    constructor(json) {
        this.update(json);
    }

    update(json) {
        this.id = json.id;
        this.title = json.title;
        this.body = json.body;
    }
}
