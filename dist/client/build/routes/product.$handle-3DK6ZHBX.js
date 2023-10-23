import {
  ProductCarousal_default
} from "/build/_shared/chunk-PPVTZU7S.js";
import "/build/_shared/chunk-ODNHVWOZ.js";
import {
  ProductForm
} from "/build/_shared/chunk-72EPCV5I.js";
import {
  Footer_default
} from "/build/_shared/chunk-HV6WZVQ3.js";
import {
  Navbar_default
} from "/build/_shared/chunk-Z2C7QERV.js";
import "/build/_shared/chunk-ILUR2CXR.js";
import {
  Image,
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "d-flex ", children: options.map((option) => {
    if (!option.values.length) {
      return;
    }
    const currentOptionVal = searchParams.get(option.name);
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `second-div ${options.indexOf(option) === 1 ? "move-left" : ""}`, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: " mb-3", children: option.name }, void 0, false, {
        fileName: "app/Components/Product/ProductOptions.jsx",
        lineNumber: 46,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "dropdown flavor", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "button",
          {
            className: "btn product-btn dropdown-toggle ",
            type: "button",
            "data-toggle": "dropdown",
            "aria-expanded": "false",
            style: { fontWeight: "500", fontSize: "1.1rem" },
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
              lineNumber: 63,
              columnNumber: 21
            },
            this
          );
        }) }, void 0, false, {
          fileName: "app/Components/Product/ProductOptions.jsx",
          lineNumber: 57,
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
  const {
    product,
    selectedVariant,
    FeaturedProductsCollection,
    TrendingProductsCollection,
    storeDomain,
    orderable
  } = data;
  const [isOpen1, setIsOpen1] = (0, import_react2.useState)(false);
  const [isOpen2, setIsOpen2] = (0, import_react2.useState)(false);
  const [isOpen3, setIsOpen3] = (0, import_react2.useState)(false);
  const toggleDropdown1 = () => {
    setIsOpen1(!isOpen1);
    setIsOpen2(false);
    setIsOpen3(false);
  };
  const toggleDropdown2 = () => {
    setIsOpen2(!isOpen2);
    setIsOpen1(false);
    setIsOpen3(false);
  };
  const toggleDropdown3 = () => {
    setIsOpen3(!isOpen3);
    setIsOpen1(false);
    setIsOpen2(false);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Navbar_default, {}, void 0, false, {
      fileName: "app/Components/Product/index.jsx",
      lineNumber: 44,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "product ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "container-fluid", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "row ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "col-sm-12 col-md-12 col-lg-3 mt-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ProductCarousal_default, { media: product.media.nodes }, void 0, false, {
          fileName: "app/Components/Product/index.jsx",
          lineNumber: 50,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/Components/Product/index.jsx",
          lineNumber: 49,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "col-sm-12 col-lg-6 col-md-12 mt-5", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            "h2",
            {
              className: "text-lg-left text-md-center text-sm-center m-lg-0 ml-md-5 mr-md-5 ml-sm-5 mr-sm-5  ",
              style: { fontSize: "30px", fontWeight: "800" },
              children: product.title
            },
            void 0,
            false,
            {
              fileName: "app/Components/Product/index.jsx",
              lineNumber: 54,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "off m-lg-0 ml-md-5 mr-md-5 ml-sm-5 mr-sm-5", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "knowmore  ", children: " Know More" }, void 0, false, {
              fileName: "app/Components/Product/index.jsx",
              lineNumber: 62,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/Components/Product/index.jsx",
              lineNumber: 61,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "offers d-flex justify-content-md-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "d-flex p-3 ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                "p",
                {
                  className: "front  p-2",
                  style: {
                    border: "1px dashed",
                    fontWeight: "700",
                    fontSize: "28px"
                  },
                  children: "OFFERS"
                },
                void 0,
                false,
                {
                  fileName: "app/Components/Product/index.jsx",
                  lineNumber: 67,
                  columnNumber: 23
                },
                this
              ) }, void 0, false, {
                fileName: "app/Components/Product/index.jsx",
                lineNumber: 66,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                "p",
                {
                  className: "front  p-2 ",
                  style: { border: "1px dashed", fontSize: "15px" },
                  children: "Extra 30% off site wide Use Code: Om30 Terms and Condtions Applied."
                },
                void 0,
                false,
                {
                  fileName: "app/Components/Product/index.jsx",
                  lineNumber: 79,
                  columnNumber: 23
                },
                this
              ) }, void 0, false, {
                fileName: "app/Components/Product/index.jsx",
                lineNumber: 78,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/Components/Product/index.jsx",
              lineNumber: 65,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/Components/Product/index.jsx",
              lineNumber: 64,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/Components/Product/index.jsx",
            lineNumber: 60,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "row mt-5 d-flex flex-column", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "col ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "title  ", children: [
                "MRP:",
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("del", { children: "\u20B95,999" }, void 0, false, {
                  fileName: "app/Components/Product/index.jsx",
                  lineNumber: 94,
                  columnNumber: 25
                }, this)
              ] }, void 0, true, {
                fileName: "app/Components/Product/index.jsx",
                lineNumber: 93,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { className: "d-flex title  ", children: [
                "Price:",
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                  Money,
                  {
                    withoutTrailingZeros: true,
                    data: selectedVariant.price,
                    className: "ml-2",
                    style: { fontSize: "38px" }
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/Components/Product/index.jsx",
                    lineNumber: 98,
                    columnNumber: 21
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "ml-3 d-flex align-items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { style: { color: "#ff2828" }, className: "product-btn p-2", children: [
                  " ",
                  "25% off"
                ] }, void 0, true, {
                  fileName: "app/Components/Product/index.jsx",
                  lineNumber: 105,
                  columnNumber: 23
                }, this) }, void 0, false, {
                  fileName: "app/Components/Product/index.jsx",
                  lineNumber: 104,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "app/Components/Product/index.jsx",
                lineNumber: 96,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                "p",
                {
                  className: "title  ",
                  style: { fontSize: "14px", opacity: ".7" },
                  children: [
                    "(EMI starts from \u20B9211.45) | Earn BMB Cash \u20B990",
                    " ",
                    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "", children: " Free Shipping" }, void 0, false, {
                      fileName: "app/Components/Product/index.jsx",
                      lineNumber: 116,
                      columnNumber: 21
                    }, this)
                  ]
                },
                void 0,
                true,
                {
                  fileName: "app/Components/Product/index.jsx",
                  lineNumber: 111,
                  columnNumber: 19
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: " mt-4 d-flex row ", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "col  ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ProductForm, { variantId: selectedVariant?.id }, void 0, false, {
                  fileName: "app/Components/Product/index.jsx",
                  lineNumber: 121,
                  columnNumber: 23
                }, this) }, void 0, false, {
                  fileName: "app/Components/Product/index.jsx",
                  lineNumber: 120,
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
                    lineNumber: 125,
                    columnNumber: 25
                  },
                  this
                ) }, void 0, false, {
                  fileName: "app/Components/Product/index.jsx",
                  lineNumber: 123,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "app/Components/Product/index.jsx",
                lineNumber: 119,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/Components/Product/index.jsx",
              lineNumber: 92,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "col title  mt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              ProductOptions,
              {
                options: product.options,
                selectedVariant
              },
              void 0,
              false,
              {
                fileName: "app/Components/Product/index.jsx",
                lineNumber: 135,
                columnNumber: 19
              },
              this
            ) }, void 0, false, {
              fileName: "app/Components/Product/index.jsx",
              lineNumber: 134,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/Components/Product/index.jsx",
            lineNumber: 90,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("hr", { className: "w-100" }, void 0, false, {
            fileName: "app/Components/Product/index.jsx",
            lineNumber: 143,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h4", { className: "mt-5 title  ", children: "Check Delivery" }, void 0, false, {
            fileName: "app/Components/Product/index.jsx",
            lineNumber: 144,
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
                lineNumber: 146,
                columnNumber: 17
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "input-group-append", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { className: "btn btn-outline-secondary  ", type: "button", children: "Check" }, void 0, false, {
              fileName: "app/Components/Product/index.jsx",
              lineNumber: 153,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/Components/Product/index.jsx",
              lineNumber: 152,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/Components/Product/index.jsx",
            lineNumber: 145,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/Components/Product/index.jsx",
          lineNumber: 53,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "col-lg-8  d-lg-none", id: "product-tabs", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            "ul",
            {
              className: "nav nav-tabs mt-4 d-flex justify-content-start justify-content-lg-around justify-content-md-around w-100",
              style: { background: "black" },
              id: "myTab",
              role: "tablist",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "nav-item", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                  "a",
                  {
                    className: "nav-link active   ",
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
                    lineNumber: 168,
                    columnNumber: 19
                  },
                  this
                ) }, void 0, false, {
                  fileName: "app/Components/Product/index.jsx",
                  lineNumber: 167,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "vl mt-2 py-3 mx-2" }, void 0, false, {
                  fileName: "app/Components/Product/index.jsx",
                  lineNumber: 181,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "nav-item", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                  "a",
                  {
                    className: "nav-link",
                    id: "howto-tab",
                    "data-toggle": "tab",
                    href: "#profile",
                    role: "tab",
                    "aria-controls": "profile",
                    "aria-selected": "false",
                    children: "Directions To Use"
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/Components/Product/index.jsx",
                    lineNumber: 183,
                    columnNumber: 19
                  },
                  this
                ) }, void 0, false, {
                  fileName: "app/Components/Product/index.jsx",
                  lineNumber: 182,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "vl mt-2 py-3 mx-2" }, void 0, false, {
                  fileName: "app/Components/Product/index.jsx",
                  lineNumber: 196,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "nav-item", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                  "a",
                  {
                    className: "nav-link",
                    id: "reviews-tab",
                    "data-toggle": "tab",
                    href: "#contact",
                    role: "tab",
                    "aria-controls": "contact",
                    "aria-selected": "false",
                    children: "Reviews"
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/Components/Product/index.jsx",
                    lineNumber: 198,
                    columnNumber: 19
                  },
                  this
                ) }, void 0, false, {
                  fileName: "app/Components/Product/index.jsx",
                  lineNumber: 197,
                  columnNumber: 17
                }, this)
              ]
            },
            void 0,
            true,
            {
              fileName: "app/Components/Product/index.jsx",
              lineNumber: 161,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "tab-content mt-3", id: "myTabContent", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
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
                lineNumber: 213,
                columnNumber: 17
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              "div",
              {
                className: "tab-pane fade",
                id: "profile",
                role: "tabpanel",
                "aria-labelledby": "howto-tab",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                      "button",
                      {
                        onClick: toggleDropdown1,
                        className: "w-100 text-left p-3",
                        style: { border: "1px solid transparent" },
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "ques-product", children: "Question" }, void 0, false, {
                            fileName: "app/Components/Product/index.jsx",
                            lineNumber: 236,
                            columnNumber: 25
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                            "span",
                            {
                              "data-title": "Question",
                              className: "ml-5",
                              "data-show": "",
                              children: "What should I do if I receive a Damaged item, wrong product or missing units in my order?"
                            },
                            void 0,
                            false,
                            {
                              fileName: "app/Components/Product/index.jsx",
                              lineNumber: 237,
                              columnNumber: 25
                            },
                            this
                          )
                        ]
                      },
                      void 0,
                      true,
                      {
                        fileName: "app/Components/Product/index.jsx",
                        lineNumber: 231,
                        columnNumber: 23
                      },
                      this
                    ),
                    isOpen1 && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { style: { fontSize: "14px" }, children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("br", {}, void 0, false, {
                        fileName: "app/Components/Product/index.jsx",
                        lineNumber: 248,
                        columnNumber: 27
                      }, this),
                      " ",
                      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("br", {}, void 0, false, {
                        fileName: "app/Components/Product/index.jsx",
                        lineNumber: 248,
                        columnNumber: 34
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "answer-product", children: "Answer" }, void 0, false, {
                        fileName: "app/Components/Product/index.jsx",
                        lineNumber: 249,
                        columnNumber: 27
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { "data-title": "Answer", className: "", "data-show": "", children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "mt-4", children: "If an item is found damaged or incorrect as per description on our website or units are missing as per ordered quantity, please send a snapshot of the outer packaging, MRP Hologram, Batch Number and images of products received with invoice copy to our customer care at care@buildmybody.in or call us on +91 9494 979191." }, void 0, false, {
                          fileName: "app/Components/Product/index.jsx",
                          lineNumber: 251,
                          columnNumber: 29
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "mt-4", children: "Once you raise the concern we will investigate for same you will get revert in 24-48 hrs. If we need we might raise the concern to brand or importer and in those situations, we need to wait for the revert from same." }, void 0, false, {
                          fileName: "app/Components/Product/index.jsx",
                          lineNumber: 261,
                          columnNumber: 29
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "mt-5", children: "Once the investigation is over if we arrange a reverse pickup then below will be the process:" }, void 0, false, {
                          fileName: "app/Components/Product/index.jsx",
                          lineNumber: 268,
                          columnNumber: 29
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "mt-4", children: [
                          "1/ Our courier partner will take 1-2 working days to pick up the product/item from you.",
                          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("br", {}, void 0, false, {
                            fileName: "app/Components/Product/index.jsx",
                            lineNumber: 275,
                            columnNumber: 31
                          }, this),
                          " ",
                          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("br", {}, void 0, false, {
                            fileName: "app/Components/Product/index.jsx",
                            lineNumber: 275,
                            columnNumber: 38
                          }, this),
                          "2/As reverse pick up is done by standard delivery it takes minimum 5-7 working days to get back to our warehouse.",
                          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("br", {}, void 0, false, {
                            fileName: "app/Components/Product/index.jsx",
                            lineNumber: 279,
                            columnNumber: 31
                          }, this),
                          " ",
                          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("br", {}, void 0, false, {
                            fileName: "app/Components/Product/index.jsx",
                            lineNumber: 279,
                            columnNumber: 38
                          }, this),
                          "3/Once the product is received back to us quality team check it and give update related to the product condition, as we need the product in the same condition as delivered to you.",
                          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("br", {}, void 0, false, {
                            fileName: "app/Components/Product/index.jsx",
                            lineNumber: 284,
                            columnNumber: 31
                          }, this),
                          " ",
                          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("br", {}, void 0, false, {
                            fileName: "app/Components/Product/index.jsx",
                            lineNumber: 284,
                            columnNumber: 38
                          }, this),
                          "4/On receiving a positive response we will get back to you and as per your request we will replace or refund you for the order (replacement are subject to availability of the particular product.",
                          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("br", {}, void 0, false, {
                            fileName: "app/Components/Product/index.jsx",
                            lineNumber: 290,
                            columnNumber: 31
                          }, this),
                          " ",
                          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("br", {}, void 0, false, {
                            fileName: "app/Components/Product/index.jsx",
                            lineNumber: 290,
                            columnNumber: 38
                          }, this),
                          "5/ In case we receive a negative response the product would be sent back to you in the same condition."
                        ] }, void 0, true, {
                          fileName: "app/Components/Product/index.jsx",
                          lineNumber: 272,
                          columnNumber: 29
                        }, this)
                      ] }, void 0, true, {
                        fileName: "app/Components/Product/index.jsx",
                        lineNumber: 250,
                        columnNumber: 27
                      }, this)
                    ] }, void 0, true, {
                      fileName: "app/Components/Product/index.jsx",
                      lineNumber: 247,
                      columnNumber: 25
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/Components/Product/index.jsx",
                    lineNumber: 230,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                      "button",
                      {
                        onClick: toggleDropdown2,
                        className: "w-100 text-left p-3 mt-4",
                        style: { border: "1px solid transparent" },
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "ques-product", children: "Question" }, void 0, false, {
                            fileName: "app/Components/Product/index.jsx",
                            lineNumber: 305,
                            columnNumber: 25
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                            "span",
                            {
                              "data-title": "Question",
                              className: "ml-5",
                              "data-show": "",
                              children: "Is there a policy for returns?"
                            },
                            void 0,
                            false,
                            {
                              fileName: "app/Components/Product/index.jsx",
                              lineNumber: 306,
                              columnNumber: 25
                            },
                            this
                          )
                        ]
                      },
                      void 0,
                      true,
                      {
                        fileName: "app/Components/Product/index.jsx",
                        lineNumber: 300,
                        columnNumber: 23
                      },
                      this
                    ),
                    isOpen2 && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { style: { fontSize: "14px" }, children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("br", {}, void 0, false, {
                        fileName: "app/Components/Product/index.jsx",
                        lineNumber: 316,
                        columnNumber: 27
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("br", {}, void 0, false, {
                        fileName: "app/Components/Product/index.jsx",
                        lineNumber: 317,
                        columnNumber: 27
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "answer-product", children: "Answer" }, void 0, false, {
                        fileName: "app/Components/Product/index.jsx",
                        lineNumber: 318,
                        columnNumber: 27
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { "data-title": "Answer", className: "", "data-show": "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "mt-4", children: [
                        "Yes. Products should be received in original packaging and sealed condition. ",
                        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("br", {}, void 0, false, {
                          fileName: "app/Components/Product/index.jsx",
                          lineNumber: 322,
                          columnNumber: 63
                        }, this),
                        " Opened or used boxes will not be accepted as returns. For issues like rashes, stomach upset, headache, flavor like/dislike, flavor difference from one brand to other etc. products would not be applicable for return. Please consult with the doctor before buying the product"
                      ] }, void 0, true, {
                        fileName: "app/Components/Product/index.jsx",
                        lineNumber: 320,
                        columnNumber: 29
                      }, this) }, void 0, false, {
                        fileName: "app/Components/Product/index.jsx",
                        lineNumber: 319,
                        columnNumber: 27
                      }, this)
                    ] }, void 0, true, {
                      fileName: "app/Components/Product/index.jsx",
                      lineNumber: 315,
                      columnNumber: 25
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/Components/Product/index.jsx",
                    lineNumber: 299,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                      "button",
                      {
                        onClick: toggleDropdown3,
                        className: "w-100 text-left p-3 mt-4",
                        style: { border: "1px solid transparent" },
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "ques-product", children: "Question" }, void 0, false, {
                            fileName: "app/Components/Product/index.jsx",
                            lineNumber: 340,
                            columnNumber: 25
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                            "span",
                            {
                              "data-title": "Question",
                              className: "ml-5",
                              "data-show": "",
                              children: "What are the modes of refund available after cancellation?"
                            },
                            void 0,
                            false,
                            {
                              fileName: "app/Components/Product/index.jsx",
                              lineNumber: 341,
                              columnNumber: 25
                            },
                            this
                          )
                        ]
                      },
                      void 0,
                      true,
                      {
                        fileName: "app/Components/Product/index.jsx",
                        lineNumber: 335,
                        columnNumber: 23
                      },
                      this
                    ),
                    isOpen3 && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { style: { fontSize: "14px" }, children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("br", {}, void 0, false, {
                        fileName: "app/Components/Product/index.jsx",
                        lineNumber: 352,
                        columnNumber: 27
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("br", {}, void 0, false, {
                        fileName: "app/Components/Product/index.jsx",
                        lineNumber: 353,
                        columnNumber: 27
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "answer-product", children: "Answer" }, void 0, false, {
                        fileName: "app/Components/Product/index.jsx",
                        lineNumber: 354,
                        columnNumber: 27
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { "data-title": "Answer", className: "", "data-show": "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "mt-4", children: [
                        "In order to confirm cancellation of item(s) in your order, you need to indicate your refund preference. ",
                        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("br", {}, void 0, false, {
                          fileName: "app/Components/Product/index.jsx",
                          lineNumber: 359,
                          columnNumber: 43
                        }, this),
                        " The money will be refunded back to the payment mode/account that was originally used to make the transaction. Once you have requested the cancellation of item(s) in your order, BuildMyBody will complete the cancellation and initiate the refund, depending on your preference."
                      ] }, void 0, true, {
                        fileName: "app/Components/Product/index.jsx",
                        lineNumber: 356,
                        columnNumber: 29
                      }, this) }, void 0, false, {
                        fileName: "app/Components/Product/index.jsx",
                        lineNumber: 355,
                        columnNumber: 27
                      }, this)
                    ] }, void 0, true, {
                      fileName: "app/Components/Product/index.jsx",
                      lineNumber: 351,
                      columnNumber: 25
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/Components/Product/index.jsx",
                    lineNumber: 334,
                    columnNumber: 21
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/Components/Product/index.jsx",
                  lineNumber: 229,
                  columnNumber: 19
                }, this)
              },
              void 0,
              false,
              {
                fileName: "app/Components/Product/index.jsx",
                lineNumber: 223,
                columnNumber: 17
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              "div",
              {
                className: "tab-pane fade",
                id: "contact",
                role: "tabpanel",
                "aria-labelledby": "reviews-tab",
                children: "Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr."
              },
              void 0,
              false,
              {
                fileName: "app/Components/Product/index.jsx",
                lineNumber: 374,
                columnNumber: 17
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/Components/Product/index.jsx",
            lineNumber: 212,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/Components/Product/index.jsx",
          lineNumber: 160,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { id: "third", className: "col-lg-3 flex-lg-column mt-0 mt-lg-5 mt-md-5 mt-sm-0 ", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h4", { className: "d-flex justify-content-center font-weight-bolder ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("em", { className: " ", children: "FEATURED PRODUCTS" }, void 0, false, {
            fileName: "app/Components/Product/index.jsx",
            lineNumber: 397,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/Components/Product/index.jsx",
            lineNumber: 396,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "custom-fl-product d-md-flex flex-lg-column justify-content-around", children: FeaturedProductsCollection.collection.products.nodes.map(
            (product2) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              Link,
              {
                to: `/product/${product2.handle}`,
                className: "d-flex mt-4 flex-column",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-100", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                    Image,
                    {
                      data: product2.variants.nodes[0].image,
                      style: { objectFit: "contain", height: "115px" },
                      alt: product2.title
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/Components/Product/index.jsx",
                      lineNumber: 407,
                      columnNumber: 25
                    },
                    this
                  ) }, void 0, false, {
                    fileName: "app/Components/Product/index.jsx",
                    lineNumber: 406,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h6", { className: "font-weight-bold mt-4  text-center text-dark", children: product2.title }, void 0, false, {
                      fileName: "app/Components/Product/index.jsx",
                      lineNumber: 414,
                      columnNumber: 25
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h6", { className: "mt-3 font-weight-bold  text-center text-dark", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                      Money,
                      {
                        withoutTrailingZeros: true,
                        data: product2.variants?.nodes[0].price
                      },
                      void 0,
                      false,
                      {
                        fileName: "app/Components/Product/index.jsx",
                        lineNumber: 418,
                        columnNumber: 27
                      },
                      this
                    ) }, void 0, false, {
                      fileName: "app/Components/Product/index.jsx",
                      lineNumber: 417,
                      columnNumber: 25
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "text-center ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                      ProductForm,
                      {
                        variantId: product2.variants?.nodes[0].id
                      },
                      void 0,
                      false,
                      {
                        fileName: "app/Components/Product/index.jsx",
                        lineNumber: 424,
                        columnNumber: 27
                      },
                      this
                    ) }, void 0, false, {
                      fileName: "app/Components/Product/index.jsx",
                      lineNumber: 423,
                      columnNumber: 25
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/Components/Product/index.jsx",
                    lineNumber: 413,
                    columnNumber: 23
                  }, this)
                ]
              },
              void 0,
              true,
              {
                fileName: "app/Components/Product/index.jsx",
                lineNumber: 402,
                columnNumber: 21
              },
              this
            )
          ) }, void 0, false, {
            fileName: "app/Components/Product/index.jsx",
            lineNumber: 399,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/Components/Product/index.jsx",
          lineNumber: 395,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/Components/Product/index.jsx",
        lineNumber: 47,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "container-fluid ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "row", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          "div",
          {
            className: "col-lg-9 d-lg-block d-md-none d-sm-none pro-none",
            id: "product-tabs",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                "ul",
                {
                  className: "nav nav-tabs mt-4 d-flex justify-content-start justify-content-lg-around justify-content-md-around w-100",
                  style: { background: "black" },
                  id: "myTab",
                  role: "tablist",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "nav-item", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                      "a",
                      {
                        className: "nav-link active   ",
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
                        lineNumber: 450,
                        columnNumber: 21
                      },
                      this
                    ) }, void 0, false, {
                      fileName: "app/Components/Product/index.jsx",
                      lineNumber: 449,
                      columnNumber: 19
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "vl mt-2 py-3 mx-2" }, void 0, false, {
                      fileName: "app/Components/Product/index.jsx",
                      lineNumber: 463,
                      columnNumber: 19
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "nav-item", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                      "a",
                      {
                        className: "nav-link",
                        id: "howto-tab",
                        "data-toggle": "tab",
                        href: "#profile",
                        role: "tab",
                        "aria-controls": "profile",
                        "aria-selected": "false",
                        children: "Directions To Use"
                      },
                      void 0,
                      false,
                      {
                        fileName: "app/Components/Product/index.jsx",
                        lineNumber: 465,
                        columnNumber: 21
                      },
                      this
                    ) }, void 0, false, {
                      fileName: "app/Components/Product/index.jsx",
                      lineNumber: 464,
                      columnNumber: 19
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "vl mt-2 py-3 mx-2" }, void 0, false, {
                      fileName: "app/Components/Product/index.jsx",
                      lineNumber: 478,
                      columnNumber: 19
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "nav-item", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                      "a",
                      {
                        className: "nav-link",
                        id: "reviews-tab",
                        "data-toggle": "tab",
                        href: "#contact",
                        role: "tab",
                        "aria-controls": "contact",
                        "aria-selected": "false",
                        children: "Reviews"
                      },
                      void 0,
                      false,
                      {
                        fileName: "app/Components/Product/index.jsx",
                        lineNumber: 480,
                        columnNumber: 21
                      },
                      this
                    ) }, void 0, false, {
                      fileName: "app/Components/Product/index.jsx",
                      lineNumber: 479,
                      columnNumber: 19
                    }, this)
                  ]
                },
                void 0,
                true,
                {
                  fileName: "app/Components/Product/index.jsx",
                  lineNumber: 443,
                  columnNumber: 17
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "tab-content mt-3", id: "myTabContent", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
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
                    lineNumber: 495,
                    columnNumber: 19
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                  "div",
                  {
                    className: "tab-pane fade",
                    id: "profile",
                    role: "tabpanel",
                    "aria-labelledby": "howto-tab",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                          "button",
                          {
                            onClick: toggleDropdown1,
                            className: "w-100 text-left p-3",
                            style: { border: "1px solid transparent" },
                            children: [
                              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "ques-product", children: "Question" }, void 0, false, {
                                fileName: "app/Components/Product/index.jsx",
                                lineNumber: 518,
                                columnNumber: 27
                              }, this),
                              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                                "span",
                                {
                                  "data-title": "Question",
                                  className: "ml-5",
                                  "data-show": "",
                                  children: "What should I do if I receive a Damaged item, wrong product or missing units in my order?"
                                },
                                void 0,
                                false,
                                {
                                  fileName: "app/Components/Product/index.jsx",
                                  lineNumber: 519,
                                  columnNumber: 27
                                },
                                this
                              )
                            ]
                          },
                          void 0,
                          true,
                          {
                            fileName: "app/Components/Product/index.jsx",
                            lineNumber: 513,
                            columnNumber: 25
                          },
                          this
                        ),
                        isOpen1 && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { style: { fontSize: "14px" }, children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("br", {}, void 0, false, {
                            fileName: "app/Components/Product/index.jsx",
                            lineNumber: 530,
                            columnNumber: 29
                          }, this),
                          " ",
                          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("br", {}, void 0, false, {
                            fileName: "app/Components/Product/index.jsx",
                            lineNumber: 530,
                            columnNumber: 36
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "answer-product", children: "Answer" }, void 0, false, {
                            fileName: "app/Components/Product/index.jsx",
                            lineNumber: 531,
                            columnNumber: 29
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { "data-title": "Answer", className: "", "data-show": "", children: [
                            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "mt-4", children: "If an item is found damaged or incorrect as per description on our website or units are missing as per ordered quantity, please send a snapshot of the outer packaging, MRP Hologram, Batch Number and images of products received with invoice copy to our customer care at care@buildmybody.in or call us on +91 9494 979191." }, void 0, false, {
                              fileName: "app/Components/Product/index.jsx",
                              lineNumber: 533,
                              columnNumber: 31
                            }, this),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "mt-4", children: "Once you raise the concern we will investigate for same you will get revert in 24-48 hrs. If we need we might raise the concern to brand or importer and in those situations, we need to wait for the revert from same." }, void 0, false, {
                              fileName: "app/Components/Product/index.jsx",
                              lineNumber: 543,
                              columnNumber: 31
                            }, this),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "mt-5", children: "Once the investigation is over if we arrange a reverse pickup then below will be the process:" }, void 0, false, {
                              fileName: "app/Components/Product/index.jsx",
                              lineNumber: 550,
                              columnNumber: 31
                            }, this),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "mt-4", children: [
                              "1/ Our courier partner will take 1-2 working days to pick up the product/item from you.",
                              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("br", {}, void 0, false, {
                                fileName: "app/Components/Product/index.jsx",
                                lineNumber: 557,
                                columnNumber: 33
                              }, this),
                              " ",
                              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("br", {}, void 0, false, {
                                fileName: "app/Components/Product/index.jsx",
                                lineNumber: 557,
                                columnNumber: 40
                              }, this),
                              "2/As reverse pick up is done by standard delivery it takes minimum 5-7 working days to get back to our warehouse.",
                              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("br", {}, void 0, false, {
                                fileName: "app/Components/Product/index.jsx",
                                lineNumber: 561,
                                columnNumber: 33
                              }, this),
                              " ",
                              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("br", {}, void 0, false, {
                                fileName: "app/Components/Product/index.jsx",
                                lineNumber: 561,
                                columnNumber: 40
                              }, this),
                              "3/Once the product is received back to us quality team check it and give update related to the product condition, as we need the product in the same condition as delivered to you.",
                              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("br", {}, void 0, false, {
                                fileName: "app/Components/Product/index.jsx",
                                lineNumber: 566,
                                columnNumber: 33
                              }, this),
                              " ",
                              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("br", {}, void 0, false, {
                                fileName: "app/Components/Product/index.jsx",
                                lineNumber: 566,
                                columnNumber: 40
                              }, this),
                              "4/On receiving a positive response we will get back to you and as per your request we will replace or refund you for the order (replacement are subject to availability of the particular product.",
                              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("br", {}, void 0, false, {
                                fileName: "app/Components/Product/index.jsx",
                                lineNumber: 572,
                                columnNumber: 33
                              }, this),
                              " ",
                              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("br", {}, void 0, false, {
                                fileName: "app/Components/Product/index.jsx",
                                lineNumber: 572,
                                columnNumber: 40
                              }, this),
                              "5/ In case we receive a negative response the product would be sent back to you in the same condition."
                            ] }, void 0, true, {
                              fileName: "app/Components/Product/index.jsx",
                              lineNumber: 554,
                              columnNumber: 31
                            }, this)
                          ] }, void 0, true, {
                            fileName: "app/Components/Product/index.jsx",
                            lineNumber: 532,
                            columnNumber: 29
                          }, this)
                        ] }, void 0, true, {
                          fileName: "app/Components/Product/index.jsx",
                          lineNumber: 529,
                          columnNumber: 27
                        }, this)
                      ] }, void 0, true, {
                        fileName: "app/Components/Product/index.jsx",
                        lineNumber: 512,
                        columnNumber: 23
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                          "button",
                          {
                            onClick: toggleDropdown2,
                            className: "w-100 text-left p-3 mt-4",
                            style: { border: "1px solid transparent" },
                            children: [
                              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "ques-product", children: "Question" }, void 0, false, {
                                fileName: "app/Components/Product/index.jsx",
                                lineNumber: 587,
                                columnNumber: 27
                              }, this),
                              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                                "span",
                                {
                                  "data-title": "Question",
                                  className: "ml-5",
                                  "data-show": "",
                                  children: "Is there a policy for returns?"
                                },
                                void 0,
                                false,
                                {
                                  fileName: "app/Components/Product/index.jsx",
                                  lineNumber: 588,
                                  columnNumber: 27
                                },
                                this
                              )
                            ]
                          },
                          void 0,
                          true,
                          {
                            fileName: "app/Components/Product/index.jsx",
                            lineNumber: 582,
                            columnNumber: 25
                          },
                          this
                        ),
                        isOpen2 && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { style: { fontSize: "14px" }, children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("br", {}, void 0, false, {
                            fileName: "app/Components/Product/index.jsx",
                            lineNumber: 598,
                            columnNumber: 29
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("br", {}, void 0, false, {
                            fileName: "app/Components/Product/index.jsx",
                            lineNumber: 599,
                            columnNumber: 29
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "answer-product", children: "Answer" }, void 0, false, {
                            fileName: "app/Components/Product/index.jsx",
                            lineNumber: 600,
                            columnNumber: 29
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { "data-title": "Answer", className: "", "data-show": "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "mt-4", children: [
                            "Yes. Products should be received in original packaging and sealed condition. ",
                            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("br", {}, void 0, false, {
                              fileName: "app/Components/Product/index.jsx",
                              lineNumber: 604,
                              columnNumber: 65
                            }, this),
                            " Opened or used boxes will not be accepted as returns. For issues like rashes, stomach upset, headache, flavor like/dislike, flavor difference from one brand to other etc. products would not be applicable for return. Please consult with the doctor before buying the product"
                          ] }, void 0, true, {
                            fileName: "app/Components/Product/index.jsx",
                            lineNumber: 602,
                            columnNumber: 31
                          }, this) }, void 0, false, {
                            fileName: "app/Components/Product/index.jsx",
                            lineNumber: 601,
                            columnNumber: 29
                          }, this)
                        ] }, void 0, true, {
                          fileName: "app/Components/Product/index.jsx",
                          lineNumber: 597,
                          columnNumber: 27
                        }, this)
                      ] }, void 0, true, {
                        fileName: "app/Components/Product/index.jsx",
                        lineNumber: 581,
                        columnNumber: 23
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                          "button",
                          {
                            onClick: toggleDropdown3,
                            className: "w-100 text-left p-3 mt-4",
                            style: { border: "1px solid transparent" },
                            children: [
                              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "ques-product", children: "Question" }, void 0, false, {
                                fileName: "app/Components/Product/index.jsx",
                                lineNumber: 622,
                                columnNumber: 27
                              }, this),
                              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                                "span",
                                {
                                  "data-title": "Question",
                                  className: "ml-5",
                                  "data-show": "",
                                  children: "What are the modes of refund available after cancellation?"
                                },
                                void 0,
                                false,
                                {
                                  fileName: "app/Components/Product/index.jsx",
                                  lineNumber: 623,
                                  columnNumber: 27
                                },
                                this
                              )
                            ]
                          },
                          void 0,
                          true,
                          {
                            fileName: "app/Components/Product/index.jsx",
                            lineNumber: 617,
                            columnNumber: 25
                          },
                          this
                        ),
                        isOpen3 && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { style: { fontSize: "14px" }, children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("br", {}, void 0, false, {
                            fileName: "app/Components/Product/index.jsx",
                            lineNumber: 634,
                            columnNumber: 29
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("br", {}, void 0, false, {
                            fileName: "app/Components/Product/index.jsx",
                            lineNumber: 635,
                            columnNumber: 29
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "answer-product", children: "Answer" }, void 0, false, {
                            fileName: "app/Components/Product/index.jsx",
                            lineNumber: 636,
                            columnNumber: 29
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { "data-title": "Answer", className: "", "data-show": "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "mt-4", children: [
                            "In order to confirm cancellation of item(s) in your order, you need to indicate your refund preference. ",
                            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("br", {}, void 0, false, {
                              fileName: "app/Components/Product/index.jsx",
                              lineNumber: 641,
                              columnNumber: 45
                            }, this),
                            " The money will be refunded back to the payment mode/account that was originally used to make the transaction. Once you have requested the cancellation of item(s) in your order, BuildMyBody will complete the cancellation and initiate the refund, depending on your preference."
                          ] }, void 0, true, {
                            fileName: "app/Components/Product/index.jsx",
                            lineNumber: 638,
                            columnNumber: 31
                          }, this) }, void 0, false, {
                            fileName: "app/Components/Product/index.jsx",
                            lineNumber: 637,
                            columnNumber: 29
                          }, this)
                        ] }, void 0, true, {
                          fileName: "app/Components/Product/index.jsx",
                          lineNumber: 633,
                          columnNumber: 27
                        }, this)
                      ] }, void 0, true, {
                        fileName: "app/Components/Product/index.jsx",
                        lineNumber: 616,
                        columnNumber: 23
                      }, this)
                    ] }, void 0, true, {
                      fileName: "app/Components/Product/index.jsx",
                      lineNumber: 511,
                      columnNumber: 21
                    }, this)
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/Components/Product/index.jsx",
                    lineNumber: 505,
                    columnNumber: 19
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                  "div",
                  {
                    className: "tab-pane fade",
                    id: "contact",
                    role: "tabpanel",
                    "aria-labelledby": "reviews-tab",
                    children: "Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr."
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/Components/Product/index.jsx",
                    lineNumber: 656,
                    columnNumber: 19
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "app/Components/Product/index.jsx",
                lineNumber: 494,
                columnNumber: 17
              }, this)
            ]
          },
          void 0,
          true,
          {
            fileName: "app/Components/Product/index.jsx",
            lineNumber: 439,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { id: "third", className: "col-lg-3 flex-lg-column mt-5 mt-lg-4 mt-md-4 mt-sm-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h4", { className: "d-flex justify-content-center font-weight-bolder  ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("em", { children: "RELATED PRODUCTS" }, void 0, false, {
            fileName: "app/Components/Product/index.jsx",
            lineNumber: 677,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/Components/Product/index.jsx",
            lineNumber: 676,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "custom-fl-product d-md-flex flex-lg-column justify-content-around", children: TrendingProductsCollection.collection.products.nodes.map(
            (product2) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              Link,
              {
                to: `/product/${product2.handle}`,
                className: "d-flex mt-4 flex-column",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-100", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                    Image,
                    {
                      data: product2.variants.nodes[0].image,
                      style: { objectFit: "contain", height: "115px" },
                      alt: product2.title
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/Components/Product/index.jsx",
                      lineNumber: 687,
                      columnNumber: 27
                    },
                    this
                  ) }, void 0, false, {
                    fileName: "app/Components/Product/index.jsx",
                    lineNumber: 686,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h6", { className: "font-weight-bold mt-4  text-center text-dark", children: product2.title }, void 0, false, {
                      fileName: "app/Components/Product/index.jsx",
                      lineNumber: 694,
                      columnNumber: 27
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h6", { className: "mt-3 font-weight-bold  text-center text-dark", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                      Money,
                      {
                        withoutTrailingZeros: true,
                        data: product2.variants?.nodes[0].price
                      },
                      void 0,
                      false,
                      {
                        fileName: "app/Components/Product/index.jsx",
                        lineNumber: 698,
                        columnNumber: 29
                      },
                      this
                    ) }, void 0, false, {
                      fileName: "app/Components/Product/index.jsx",
                      lineNumber: 697,
                      columnNumber: 27
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                      ProductForm,
                      {
                        variantId: product2.variants?.nodes[0].id
                      },
                      void 0,
                      false,
                      {
                        fileName: "app/Components/Product/index.jsx",
                        lineNumber: 704,
                        columnNumber: 29
                      },
                      this
                    ) }, void 0, false, {
                      fileName: "app/Components/Product/index.jsx",
                      lineNumber: 703,
                      columnNumber: 27
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/Components/Product/index.jsx",
                    lineNumber: 693,
                    columnNumber: 25
                  }, this)
                ]
              },
              void 0,
              true,
              {
                fileName: "app/Components/Product/index.jsx",
                lineNumber: 682,
                columnNumber: 23
              },
              this
            )
          ) }, void 0, false, {
            fileName: "app/Components/Product/index.jsx",
            lineNumber: 679,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/Components/Product/index.jsx",
          lineNumber: 675,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/Components/Product/index.jsx",
        lineNumber: 438,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/Components/Product/index.jsx",
        lineNumber: 436,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/Components/Product/index.jsx",
      lineNumber: 46,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/Components/Product/index.jsx",
      lineNumber: 45,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Footer_default, {}, void 0, false, {
      fileName: "app/Components/Product/index.jsx",
      lineNumber: 719,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/Components/Product/index.jsx",
    lineNumber: 43,
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
    lineNumber: 205,
    columnNumber: 10
  }, this);
}
export {
  ProductHandle as default
};
//# sourceMappingURL=/build/routes/product.$handle-3DK6ZHBX.js.map
