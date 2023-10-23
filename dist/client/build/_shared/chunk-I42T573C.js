import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-4VTZQJYZ.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/StateProvider.jsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var StateContext = (0, import_react.createContext)();
var StateProvider = ({ reducer, initialState, children }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StateContext.Provider, { value: (0, import_react.useReducer)(reducer, initialState), children }, void 0, false, {
  fileName: "app/StateProvider.jsx",
  lineNumber: 5,
  columnNumber: 5
}, this);

export {
  StateProvider
};
//# sourceMappingURL=/build/_shared/chunk-I42T573C.js.map
