// import { createRoot, renderApp } from "./main.js";

// let root = createRoot("app");
// renderApp(root);

import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { MyApp, HelloWorld, Counter } from "./main.js";

const root = createRoot(document.getElementById("app"));
root.render(
  <StrictMode>
    <div>
      <h1>React App</h1>
      <MyApp />
      <div style={{ marginTop: 20 }}>
        <HelloWorld />
      </div>
      <Counter initialCount={5} />
    </div>
  </StrictMode>
);
