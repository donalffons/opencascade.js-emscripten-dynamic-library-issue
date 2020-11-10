import opencascade from "opencascade.js/dist/opencascade.wasm.js";

console.log("starting opencascade.js...");
const start = Date.now();
new opencascade({
  onRuntimeInitialized: () => {
    console.log("runtime initialized")
  },
  locateFile(path) {
    if(path.endsWith('.wasm')) {
      return "node_modules/opencascade.js/dist/opencascade.wasm.wasm";
    }
    return path;
  },
  dynamicLibraries: [],
}).then(oc => {
  console.log("opencascade.js started");
  const end = Date.now();
  console.log("Elapsed time (ms): " + (end-start));
});
