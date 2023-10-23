import {
  ProductForm
} from "/build/_shared/chunk-RNFRYLZS.js";
import {
  Image,
  Money
} from "/build/_shared/chunk-VAI2PXO3.js";
import {
  Link
} from "/build/_shared/chunk-3DYM7AG2.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-4VTZQJYZ.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/ProductCard.jsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function ProductCard({ product }) {
  const { price, compareAtPrice } = product.variants?.nodes[0] || {};
  const isDiscounted = compareAtPrice?.amount > price?.amount;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "col productCard", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/product/${product.handle}`, className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "card", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "card-img-all d-flex justify-content-center mt-3 ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          Image,
          {
            data: product.variants.nodes[0].image,
            alt: product.title,
            className: "all-img"
          },
          void 0,
          false,
          {
            fileName: "app/routes/ProductCard.jsx",
            lineNumber: 14,
            columnNumber: 13
          },
          this
        ),
        " "
      ] }, void 0, true, {
        fileName: "app/routes/ProductCard.jsx",
        lineNumber: 13,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "card-content-all mt-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: " text-center", style: { fontSize: "1.3rem" }, children: [
          " ",
          product.title
        ] }, void 0, true, {
          fileName: "app/routes/ProductCard.jsx",
          lineNumber: 21,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "card-text mt-3 text-center", children: [
          isDiscounted && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            Money,
            {
              style: { color: "#ff2828", textDecoration: "dashed" },
              className: "line-through opacity-50",
              withoutTrailingZeros: true,
              data: compareAtPrice
            },
            void 0,
            false,
            {
              fileName: "app/routes/ProductCard.jsx",
              lineNumber: 27,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Money, { withoutTrailingZeros: true, data: price }, void 0, false, {
            fileName: "app/routes/ProductCard.jsx",
            lineNumber: 34,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/ProductCard.jsx",
          lineNumber: 25,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/ProductCard.jsx",
        lineNumber: 20,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/ProductCard.jsx",
      lineNumber: 12,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/ProductCard.jsx",
      lineNumber: 11,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "all-btn mt-3 d-flex flex-lg-column pro-clr ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProductForm, { variantId: product.variants?.nodes[0].id }, void 0, false, {
      fileName: "app/routes/ProductCard.jsx",
      lineNumber: 40,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/ProductCard.jsx",
      lineNumber: 39,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/ProductCard.jsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

export {
  ProductCard
};
//# sourceMappingURL=/build/_shared/chunk-BVOQMUFD.js.map
