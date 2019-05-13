export default class Route {
    constructor(name, path, props, view) {
        this.name = name;
        this.path = path;
        this.props = props;
        this.view = view;
    }
}