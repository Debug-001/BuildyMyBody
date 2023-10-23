import {
  ProductCarousal_default
} from "/build/_shared/chunk-4TOYJCYD.js";
import "/build/_shared/chunk-ODNHVWOZ.js";
import {
  ProductForm
} from "/build/_shared/chunk-7ZFEEKZF.js";
import {
  Footer_default
} from "/build/_shared/chunk-XOI35JXB.js";
import {
  Navbar_default,
  protien_default
} from "/build/_shared/chunk-SFU7YTWE.js";
import "/build/_shared/chunk-K4GQNGL6.js";
import {
  Money,
  ShopPayButton
} from "/build/_shared/chunk-VAI2PXO3.js";
import {
  Link,
  useLoaderData,
  useLocation,
  useNavigation,
  useSearchParams
} from "/build/_shared/chunk-3DYM7AG2.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-4VTZQJYZ.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/Components/Product/index.jsx
var import_react2 = __toESM(require_react());

// app/Components/Product/ProductOptions.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function ProductOptions({ options, selectedVariant }) {
  const { pathname, search } = useLocation();
  const [currentSearchParams] = useSearchParams();
  const navigation = useNavigation();
  const paramsWithDefaults = (() => {
    const defaultParams = new URLSearchParams(currentSearchParams);
    if (!selectedVariant) {
      return defaultParams;
    }
    for (const { name, value } of selectedVariant.selectedOptions) {
      if (!currentSearchParams.has(name)) {
        defaultParams.set(name, value);
      }
    }
    return defaultParams;
  })();
  const searchParams = navigation.location ? new URLSearchParams(navigation.location.search) : paramsWithDefaults;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-4 mb-6", children: options.map((option) => {
    if (!option.values.length) {
      return;
    }
    const currentOptionVal = searchParams.get(option.name);
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "mt-4 mb-4", children: option.name }, void 0, false, {
        fileName: "app/Components/Product/ProductOptions.jsx",
        lineNumber: 46,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "dropdown flavor", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "button",
          {
            className: "btn btn-primary dropdown-toggle",
            type: "button",
            "data-toggle": "dropdown",
            "aria-expanded": "false",
            children: currentOptionVal
          },
          void 0,
          false,
          {
            fileName: "app/Components/Product/ProductOptions.jsx",
            lineNumber: 48,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "dropdown-menu", children: option.values.map((value) => {
          const linkParams = new URLSearchParams(searchParams);
          const isSelected = currentOptionVal === value;
          linkParams.set(option.name, value);
          return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            Link,
            {
              to: `${pathname}?${linkParams.toString()}`,
              preventScrollReset: true,
              replace: true,
              className: "dropdown-item",
              children: value
            },
            value,
            false,
            {
              fileName: "app/Components/Product/ProductOptions.jsx",
              lineNumber: 62,
              columnNumber: 21
            },
            this
          );
        }) }, void 0, false, {
          fileName: "app/Components/Product/ProductOptions.jsx",
          lineNumber: 56,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/Components/Product/ProductOptions.jsx",
        lineNumber: 47,
        columnNumber: 13
      }, this)
    ] }, option.name, true, {
      fileName: "app/Components/Product/ProductOptions.jsx",
      lineNumber: 45,
      columnNumber: 11
    }, this);
  }) }, void 0, false, {
    fileName: "app/Components/Product/ProductOptions.jsx",
    lineNumber: 36,
    columnNumber: 5
  }, this);
}

// app/Components/Product/index.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var Product = ({ data }) => {
  const { product, selectedVariant, storeDomain, orderable } = data;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Navbar_default, {}, void 0, false, {
      fileName: "app/Components/Product/index.jsx",
      lineNumber: 14,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "product ", style: { background: "black" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "container-fluid", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "row ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "col-sm-12 col-md-12 col-lg-3 mt-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ProductCarousal_default, { media: product.media.nodes }, void 0, false, {
          fileName: "app/Components/Product/index.jsx",
          lineNumber: 20,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/Components/Product/index.jsx",
          lineNumber: 19,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "col-sm-12 col-lg-5 col-md-12 mt-5", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { className: "text-lg-left text-md-center text-sm-center m-lg-0 ml-md-5 mr-md-5 ml-sm-5 mr-sm-5 text-light", children: product.title }, void 0, false, {
            fileName: "app/Components/Product/index.jsx",
            lineNumber: 24,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "off m-lg-0 ml-md-5 mr-md-5 ml-sm-5 mr-sm-5", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "knowmore text-light", children: " Know More" }, void 0, false, {
              fileName: "app/Components/Product/index.jsx",
              lineNumber: 29,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/Components/Product/index.jsx",
              lineNumber: 28,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "offers", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "row p-3", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "col-sm-3 mx-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "front text-light", children: "OFFERS" }, void 0, false, {
                fileName: "app/Components/Product/index.jsx",
                lineNumber: 34,
                columnNumber: 23
              }, this) }, void 0, false, {
                fileName: "app/Components/Product/index.jsx",
                lineNumber: 33,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "vl" }, void 0, false, {
                fileName: "app/Components/Product/index.jsx",
                lineNumber: 36,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "col-sm-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "en text-light", children: "Extra 30% off site wide Use Code: Om30 Terms and Condtions Applied." }, void 0, false, {
                fileName: "app/Components/Product/index.jsx",
                lineNumber: 38,
                columnNumber: 23
              }, this) }, void 0, false, {
                fileName: "app/Components/Product/index.jsx",
                lineNumber: 37,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/Components/Product/index.jsx",
              lineNumber: 32,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/Components/Product/index.jsx",
              lineNumber: 31,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/Components/Product/index.jsx",
            lineNumber: 27,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "row mt-5 m-lg-0 ml-md-5 mr-md-5 ml-sm-5 mr-sm-5 ", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "col-md-5 col-lg-6 title text-light", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              ProductOptions,
              {
                options: product.options,
                selectedVariant
              },
              void 0,
              false,
              {
                fileName: "app/Components/Product/index.jsx",
                lineNumber: 49,
                columnNumber: 19
              },
              this
            ) }, void 0, false, {
              fileName: "app/Components/Product/index.jsx",
              lineNumber: 48,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "col ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "title text-light", children: [
                "MRP:",
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("del", { children: "\u20B95,999" }, void 0, false, {
                  fileName: "app/Components/Product/index.jsx",
                  lineNumber: 58,
                  columnNumber: 25
                }, this)
              ] }, void 0, true, {
                fileName: "app/Components/Product/index.jsx",
                lineNumber: 57,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { className: "d-flex title text-light", children: [
                "Price:",
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Money, { withoutTrailingZeros: true, data: selectedVariant.price }, void 0, false, {
                  fileName: "app/Components/Product/index.jsx",
                  lineNumber: 62,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { className: "btn btn-primary title text-light ml-2", children: "25% off" }, void 0, false, {
                  fileName: "app/Components/Product/index.jsx",
                  lineNumber: 63,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "app/Components/Product/index.jsx",
                lineNumber: 60,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "title text-light", children: [
                "(EMI starts from \u20B9211.45) | Earn BMB Cash \u20B990",
                " ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "", children: " Free Shipping" }, void 0, false, {
                  fileName: "app/Components/Product/index.jsx",
                  lineNumber: 69,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "app/Components/Product/index.jsx",
                lineNumber: 67,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "shopbtn mt-4 d-flex row ", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "col-md-12 col-lg-5 text-light", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ProductForm, { variantId: selectedVariant?.id }, void 0, false, {
                  fileName: "app/Components/Product/index.jsx",
                  lineNumber: 74,
                  columnNumber: 23
                }, this) }, void 0, false, {
                  fileName: "app/Components/Product/index.jsx",
                  lineNumber: 73,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "col", children: orderable && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                  ShopPayButton,
                  {
                    storeDomain,
                    variantIds: [selectedVariant?.id],
                    className: "btn  "
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/Components/Product/index.jsx",
                    lineNumber: 78,
                    columnNumber: 25
                  },
                  this
                ) }, void 0, false, {
                  fileName: "app/Components/Product/index.jsx",
                  lineNumber: 76,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "app/Components/Product/index.jsx",
                lineNumber: 72,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/Components/Product/index.jsx",
              lineNumber: 56,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/Components/Product/index.jsx",
            lineNumber: 46,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("hr", {}, void 0, false, {
            fileName: "app/Components/Product/index.jsx",
            lineNumber: 88,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h4", { className: "mt-4 m-lg-0 ml-md-5 mr-md-5 ml-sm-5 mr-sm-5 title text-light", children: "Check Delivery" }, void 0, false, {
            fileName: "app/Components/Product/index.jsx",
            lineNumber: 89,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "input-group mb-3 m-lg-0 ml-md-5 mr-md-5 ml-sm-5 mr-sm-5 title", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              "input",
              {
                type: "number",
                className: "form-control",
                placeholder: "Enter Pincode",
                "aria-describedby": "basic-addon2"
              },
              void 0,
              false,
              {
                fileName: "app/Components/Product/index.jsx",
                lineNumber: 93,
                columnNumber: 17
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "input-group-append", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              "button",
              {
                className: "btn btn-outline-secondary text-light",
                type: "button",
                children: "Check"
              },
              void 0,
              false,
              {
                fileName: "app/Components/Product/index.jsx",
                lineNumber: 100,
                columnNumber: 19
              },
              this
            ) }, void 0, false, {
              fileName: "app/Components/Product/index.jsx",
              lineNumber: 99,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/Components/Product/index.jsx",
            lineNumber: 92,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/Components/Product/index.jsx",
          lineNumber: 23,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "col-lg-8  d-lg-none", id: "product-tabs", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            "ul",
            {
              className: "nav nav-tabs mt-4 d-flex justify-content-center w-100",
              style: { background: "black" },
              id: "myTab",
              role: "tablist",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "nav-item", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                "a",
                {
                  className: "nav-link active text-light ",
                  id: "descr-tab",
                  "data-toggle": "tab",
                  href: "#home",
                  role: "tab",
                  "aria-controls": "home",
                  "aria-selected": "true",
                  children: "Description"
                },
                void 0,
                false,
                {
                  fileName: "app/Components/Product/index.jsx",
                  lineNumber: 118,
                  columnNumber: 19
                },
                this
              ) }, void 0, false, {
                fileName: "app/Components/Product/index.jsx",
                lineNumber: 117,
                columnNumber: 17
              }, this)
            },
            void 0,
            false,
            {
              fileName: "app/Components/Product/index.jsx",
              lineNumber: 111,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "tab-content mt-3", id: "myTabContent", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            "div",
            {
              className: "tab-pane fade show active",
              id: "home",
              role: "tabpanel",
              "aria-labelledby": "descr-tab",
              dangerouslySetInnerHTML: {
                __html: product.descriptionHtml
              }
            },
            void 0,
            false,
            {
              fileName: "app/Components/Product/index.jsx",
              lineNumber: 133,
              columnNumber: 17
            },
            this
          ) }, void 0, false, {
            fileName: "app/Components/Product/index.jsx",
            lineNumber: 132,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/Components/Product/index.jsx",
          lineNumber: 110,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { id: "third", className: "col-lg-4 flex-lg-column mt-5", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h4", { className: "d-flex justify-content-center font-weight-bolder ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("em", { className: "text-light", children: "FEATURED PRODUCTS" }, void 0, false, {
            fileName: "app/Components/Product/index.jsx",
            lineNumber: 148,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/Components/Product/index.jsx",
            lineNumber: 147,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "custom-fl-product d-md-flex flex-lg-column", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "d-flex mt-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-100", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                "img",
                {
                  src: protien_default,
                  style: { objectFit: "contain" },
                  alt: "side bar product"
                },
                void 0,
                false,
                {
                  fileName: "app/Components/Product/index.jsx",
                  lineNumber: 153,
                  columnNumber: 21
                },
                this
              ) }, void 0, false, {
                fileName: "app/Components/Product/index.jsx",
                lineNumber: 152,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h6", { className: "font-weight-bold mt-4 text-light", children: "Syntha-6 Protein Matrix" }, void 0, false, {
                  fileName: "app/Components/Product/index.jsx",
                  lineNumber: 160,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h6", { className: "mt-3 font-weight-bold text-light", children: "\u20B96906.90" }, void 0, false, {
                  fileName: "app/Components/Product/index.jsx",
                  lineNumber: 163,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "/carts", className: "btn btn-primary text-light", children: "Add to Cart" }, void 0, false, {
                  fileName: "app/Components/Product/index.jsx",
                  lineNumber: 166,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "app/Components/Product/index.jsx",
                lineNumber: 159,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/Components/Product/index.jsx",
              lineNumber: 151,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "d-flex mt-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-100", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                "img",
                {
                  src: protien_default,
                  style: { objectFit: "contain" },
                  alt: "side bar product"
                },
                void 0,
                false,
                {
                  fileName: "app/Components/Product/index.jsx",
                  lineNumber: 173,
                  columnNumber: 21
                },
                this
              ) }, void 0, false, {
                fileName: "app/Components/Product/index.jsx",
                lineNumber: 172,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h6", { className: "font-weight-bold mt-4 text-light", children: "Syntha-6 Protein Matrix" }, void 0, false, {
                  fileName: "app/Components/Product/index.jsx",
                  lineNumber: 180,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h6", { className: "mt-3 font-weight-bold text-light", children: "\u20B96906.90" }, void 0, false, {
                  fileName: "app/Components/Product/index.jsx",
                  lineNumber: 183,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "/carts", className: "btn btn-primary text-light", children: "Add to Cart" }, void 0, false, {
                  fileName: "app/Components/Product/index.jsx",
                  lineNumber: 186,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "app/Components/Product/index.jsx",
                lineNumber: 179,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/Components/Product/index.jsx",
              lineNumber: 171,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/Components/Product/index.jsx",
            lineNumber: 150,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/Components/Product/index.jsx",
          lineNumber: 146,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/Components/Product/index.jsx",
        lineNumber: 17,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "container-fluid ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("hr", {}, void 0, false, {
          fileName: "app/Components/Product/index.jsx",
          lineNumber: 196,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "row", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            "div",
            {
              className: "col-lg-8 d-lg-block d-md-none d-sm-none pro-none",
              id: "product-tabs",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                  "ul",
                  {
                    className: "nav nav-tabs mt-4 d-flex justify-content-center w-100",
                    style: { background: "black" },
                    id: "myTab",
                    role: "tablist",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "nav-item", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                      "a",
                      {
                        className: "nav-link active text-light ",
                        id: "descr-tab",
                        "data-toggle": "tab",
                        href: "#home",
                        role: "tab",
                        "aria-controls": "home",
                        "aria-selected": "true",
                        children: "Description"
                      },
                      void 0,
                      false,
                      {
                        fileName: "app/Components/Product/index.jsx",
                        lineNumber: 209,
                        columnNumber: 21
                      },
                      this
                    ) }, void 0, false, {
                      fileName: "app/Components/Product/index.jsx",
                      lineNumber: 208,
                      columnNumber: 19
                    }, this)
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/Components/Product/index.jsx",
                    lineNumber: 202,
                    columnNumber: 17
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "tab-content mt-3", id: "myTabContent", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                  "div",
                  {
                    className: "tab-pane fade show active",
                    id: "home",
                    role: "tabpanel",
                    "aria-labelledby": "descr-tab",
                    dangerouslySetInnerHTML: {
                      __html: product.descriptionHtml
                    }
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/Components/Product/index.jsx",
                    lineNumber: 252,
                    columnNumber: 19
                  },
                  this
                ) }, void 0, false, {
                  fileName: "app/Components/Product/index.jsx",
                  lineNumber: 251,
                  columnNumber: 17
                }, this)
              ]
            },
            void 0,
            true,
            {
              fileName: "app/Components/Product/index.jsx",
              lineNumber: 198,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { id: "third", className: "col-lg-4 flex-lg-column  ", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h4", { className: "d-flex justify-content-center font-weight-bolder text-light", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("em", { children: "RELATED PRODUCTS" }, void 0, false, {
              fileName: "app/Components/Product/index.jsx",
              lineNumber: 303,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/Components/Product/index.jsx",
              lineNumber: 302,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "custom-fl-product d-md-flex flex-lg-column", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "d-flex mt-4", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-100", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                  "img",
                  {
                    src: protien_default,
                    style: { objectFit: "contain" },
                    alt: "side bar product"
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/Components/Product/index.jsx",
                    lineNumber: 308,
                    columnNumber: 23
                  },
                  this
                ) }, void 0, false, {
                  fileName: "app/Components/Product/index.jsx",
                  lineNumber: 307,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h6", { className: "font-weight-bold mt-4 text-light", children: "Syntha-6 Protein Matrix" }, void 0, false, {
                    fileName: "app/Components/Product/index.jsx",
                    lineNumber: 315,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h6", { className: "mt-3 font-weight-bold text-light", children: "\u20B96906.90" }, void 0, false, {
                    fileName: "app/Components/Product/index.jsx",
                    lineNumber: 318,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "/carts", className: "btn btn-primary text-light", children: "Add to Cart" }, void 0, false, {
                    fileName: "app/Components/Product/index.jsx",
                    lineNumber: 321,
                    columnNumber: 23
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/Components/Product/index.jsx",
                  lineNumber: 314,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "app/Components/Product/index.jsx",
                lineNumber: 306,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "d-flex mt-4", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-100", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                  "img",
                  {
                    src: protien_default,
                    style: { objectFit: "contain" },
                    alt: "side bar product"
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/Components/Product/index.jsx",
                    lineNumber: 328,
                    columnNumber: 23
                  },
                  this
                ) }, void 0, false, {
                  fileName: "app/Components/Product/index.jsx",
                  lineNumber: 327,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h6", { className: "font-weight-bold mt-4 text-light", children: "Syntha-6 Protein Matrix" }, void 0, false, {
                    fileName: "app/Components/Product/index.jsx",
                    lineNumber: 335,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h6", { className: "mt-3 font-weight-bold text-light", children: "\u20B96906.90" }, void 0, false, {
                    fileName: "app/Components/Product/index.jsx",
                    lineNumber: 338,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "/carts", className: "btn btn-primary text-light", children: "Add to Cart" }, void 0, false, {
                    fileName: "app/Components/Product/index.jsx",
                    lineNumber: 341,
                    columnNumber: 23
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/Components/Product/index.jsx",
                  lineNumber: 334,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "app/Components/Product/index.jsx",
                lineNumber: 326,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/Components/Product/index.jsx",
              lineNumber: 305,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/Components/Product/index.jsx",
            lineNumber: 301,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/Components/Product/index.jsx",
          lineNumber: 197,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/Components/Product/index.jsx",
        lineNumber: 195,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/Components/Product/index.jsx",
      lineNumber: 16,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/Components/Product/index.jsx",
      lineNumber: 15,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Footer_default, {}, void 0, false, {
      fileName: "app/Components/Product/index.jsx",
      lineNumber: 353,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/Components/Product/index.jsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
};
var Product_default = Product;

// app/routes/product.$handle.jsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
function ProductHandle() {
  const data = useLoaderData();
  const orderable = data.selectedVariant?.availableForSale || false;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Product_default, { data: { ...data, orderable } }, void 0, false, {
    fileName: "app/routes/product.$handle.jsx",
    lineNumber: 129,
    columnNumber: 10
  }, this);
}
export {
  ProductHandle as default
};
//# sourceMappingURL=/build/routes/product.$handle-IEJSPHMF.js.map
