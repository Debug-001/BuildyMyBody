import {
  F
} from "/build/_shared/chunk-VAI2PXO3.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-4VTZQJYZ.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/Components/Product/ProductForm.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function ProductForm({ variantId, custom = false, button }) {
  const lines = [{ merchandiseId: variantId, quantity: 1 }];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(F, { route: "/cart", action: F.ACTIONS.LinesAdd, inputs: { lines }, children: custom ? button : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "btn", children: "Add to Cart" }, void 0, false, {
    fileName: "app/Components/Product/ProductForm.jsx",
    lineNumber: 8,
    columnNumber: 26
  }, this) }, void 0, false, {
    fileName: "app/Components/Product/ProductForm.jsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

export {
  ProductForm
};
//# sourceMappingURL=/build/_shared/chunk-72EPCV5I.js.map
