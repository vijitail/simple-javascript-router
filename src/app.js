import router from "./router";
import Route from "./router/Route";

import homeView from "./views/home";
import contactView from "./views/contact";
import aboutView from "./views/about";
import profileView from "./views/profile";

import "./style.css";

const routes = [
  new Route("home", "/", homeView),
  new Route("contact", "/contact", contactView),
  new Route("about", "/about", aboutView),
  new Route("profile", "/profile/:name", profileView),
];

router(routes);
