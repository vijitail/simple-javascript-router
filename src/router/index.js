import Router from "./Router";

export const link = (path) => {
  const pushStateEvent = new CustomEvent("_pushstate", { detail: path });
  history.pushState({}, "", path);
  dispatchEvent(pushStateEvent);
};

export default (routes) => {
  const router = new Router(routes, document.getElementById("app"));

  document.addEventListener("DOMContentLoaded", (e) => {
    document.querySelectorAll("[route]").forEach((route) =>
      route.addEventListener(
        "click",
        (e) => {
          e.preventDefault();
          router.navigate(e.target.getAttribute("route"));
        },
        false
      )
    );
  });

  window.addEventListener("_pushstate", (e) => router.navigate(e.detail));
};
