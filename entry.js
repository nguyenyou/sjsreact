// import { createRoot, renderApp } from "./main.js";

// let root = createRoot("app");
// renderApp(root);

import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("app"));
root.render(<div>hello</div>);
