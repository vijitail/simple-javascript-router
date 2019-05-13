export default class Route {
    constructor(name, path, props, view) {
        this.name = name;
        this.path = path;
        this.props = props;
        this.view = view;
    }

    set props(newProps) {
        console.log(this.props);
        this._props = newProps;
    }

    renderView() {
        console.log(this.props);
        return this.view(this.props);
    }
}