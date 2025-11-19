import * as runtime from "react-refresh/runtime";

// Inject the runtime into the global hook
runtime.injectIntoGlobalHook(window);

// Setup the global $RefreshReg$ and $RefreshSig$ functions
window.$RefreshReg$ = (type, id) => {
  runtime.register(type, id);
};
window.$RefreshSig$ = runtime.createSignatureFunctionForTransform;

import { createRoot, renderApp } from "./main.js";

let root = createRoot("app");
renderApp(root);

if (import.meta.hot) {
  import.meta.hot.accept("./main.js", (newModule) => {
    // Important: Do NOT call renderApp(root) here.
    // Calling renderApp would force a re-render using the new component references,
    // which would cause React to unmount the old components (losing state) and mount the new ones.
    //
    // Instead, we rely on react-refresh to:
    // 1. Detect that the component with ID "MyApp" (etc.) has been re-registered (during main.js execution).
    // 2. Patch the existing components in the tree to use the new implementation.
    // 3. Force a re-render via performReactRefresh().
    
    runtime.performReactRefresh();
  });
}
