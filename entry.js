import { mount } from "./main.js";

let root = mount("app");

if (import.meta.hot) {
  import.meta.hot.accept("./main.js", (newModule) => {
    if (root) {
      root.unmount();
    }
    root = newModule.mount("app");
  });
}

