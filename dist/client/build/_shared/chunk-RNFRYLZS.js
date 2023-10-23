import {
  F
} from "/build/_shared/chunk-VAI2PXO3.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-4VTZQJYZ.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/Components/Product/ProductForm.jsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function ProductForm({ variantId, custom = false, button }) {
  const lines = [{ merchandiseId: variantId, quantity: 1 }];
  const [showAlert, setShowAlert] = (0, import_react.useState)(false);
  const showAlertAndDismiss = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3e3);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(F, { route: "/cart", action: F.ACTIONS.LinesAdd, inputs: { lines }, children: [
    custom ? button : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "btn", onClick: showAlertAndDismiss, children: "Add to Cart" }, void 0, false, {
      fileName: "app/Components/Product/ProductForm.jsx",
      lineNumber: 20,
      columnNumber: 9
    }, this),
    showAlert && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "fixed-bottom", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "div",
      {
        className: "alert alert-success alert-dismissible fade show",
        style: { maxWidth: "300px" },
        role: "alert",
        children: [
          "Added To the Cart!",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "button",
            {
              type: "button",
              className: "close",
              "data-dismiss": "alert",
              "aria-label": "Close",
              onClick: () => setShowAlert(false),
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { "aria-hidden": "true", children: "\xD7" }, void 0, false, {
                fileName: "app/Components/Product/ProductForm.jsx",
                lineNumber: 40,
                columnNumber: 15
              }, this)
            },
            void 0,
            false,
            {
              fileName: "app/Components/Product/ProductForm.jsx",
              lineNumber: 33,
              columnNumber: 13
            },
            this
          )
        ]
      },
      void 0,
      true,
      {
        fileName: "app/Components/Product/ProductForm.jsx",
        lineNumber: 27,
        columnNumber: 11
      },
      this
    ) }, void 0, false, {
      fileName: "app/Components/Product/ProductForm.jsx",
      lineNumber: 26,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/Components/Product/ProductForm.jsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
}

export {
  ProductForm
};
//# sourceMappingURL=/build/_shared/chunk-RNFRYLZS.js.map
