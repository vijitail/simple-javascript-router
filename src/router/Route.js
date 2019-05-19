export default class Route {
    constructor(name, path, view) {
        this.name = name;
        this.path = path;
        this.view = view;
    }

    setProps(newProps) {
        this.props = newProps;
    }

    renderView() {
        return this.view(this.props);
    }
}