const opencascade = require("opencascade.js/dist/release/dynamic_node.js");

const dlModules = [
  "TKernel",
  "TKMath",
  "TKG2d",
  "TKV3d",
  "TKService",
  "TKMesh",
  "TKSTEP",
  "TKSTEP209",
  "TKSTEPAttr",
  "TKSTEPBase",
  "TKXSBase",
  "TKShHealing",
  "TKGeomAlgo",
  "TKBRep",
  "TKGeomBase",
  "TKG3d",
  "TKTopAlgo",
].map(l => "node_modules/opencascade.js/dist/release/modules/" + l + ".wasm");

console.log("starting opencascade.js...");
const start = Date.now();
new opencascade({
  onRuntimeInitialized: () => {
    console.log("runtime initialized")
  },
  locateFile(path) {
    if(path.endsWith('.wasm')) {
      return "node_modules/opencascade.js/dist/release/dynamic_node.wasm";
    }
    return path;
  },
  dynamicLibraries: dlModules,
}).then(oc => {
  console.log("opencascade.js started");
  const end = Date.now();
  console.log("Elapsed time (ms): " + (end-start));
});
