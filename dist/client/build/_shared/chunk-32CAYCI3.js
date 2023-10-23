import {
  require_lib
} from "/build/_shared/chunk-ODNHVWOZ.js";
import {
  ProductForm
} from "/build/_shared/chunk-72EPCV5I.js";
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

// app/Components/Home/BrandCaraousel.jsx
var React = __toESM(require_react());
var import_react2 = __toESM(require_react());
var import_react_slick = __toESM(require_lib());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var BrandCaraousel = () => {
  const [nav1, setNav1] = (0, import_react2.useState)();
  const [nav2, setNav2] = (0, import_react2.useState)();
  const slider1 = (0, import_react2.useRef)(null);
  const slider2 = (0, import_react2.useRef)(null);
  (0, import_react2.useEffect)(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { id: "fitness-car", style: { background: "#f8f8f8" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container-fluid pt-5 pb-5", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "d-flex justify-content-center mb-5", style: { flexDirection: "column", alignItems: "center" }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "custom-heading3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("em", { children: "Fitness Articles" }, void 0, false, {
          fileName: "app/Components/Home/BrandCaraousel.jsx",
          lineNumber: 23,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/Components/Home/BrandCaraousel.jsx",
          lineNumber: 22,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hr", { className: "h1-hr" }, void 0, false, {
          fileName: "app/Components/Home/BrandCaraousel.jsx",
          lineNumber: 25,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/Components/Home/BrandCaraousel.jsx",
        lineNumber: 21,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "fitness-slider", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react_slick.default,
        {
          className: "ml-lg-5 mr-lg-5",
          asNavFor: nav1,
          ref: slider2,
          slidesToShow: 3,
          swipeToSlide: true,
          focusOnSelect: true,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2,
                dots: true,
                nextArrow: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {}, void 0, false, {
                  fileName: "app/Components/Home/BrandCaraousel.jsx",
                  lineNumber: 52,
                  columnNumber: 32
                }, this),
                prevArrow: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {}, void 0, false, {
                  fileName: "app/Components/Home/BrandCaraousel.jsx",
                  lineNumber: 53,
                  columnNumber: 32
                }, this)
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1,
                dots: true,
                nextArrow: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {}, void 0, false, {
                  fileName: "app/Components/Home/BrandCaraousel.jsx",
                  lineNumber: 63,
                  columnNumber: 32
                }, this),
                prevArrow: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {}, void 0, false, {
                  fileName: "app/Components/Home/BrandCaraousel.jsx",
                  lineNumber: 64,
                  columnNumber: 32
                }, this)
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                nextArrow: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {}, void 0, false, {
                  fileName: "app/Components/Home/BrandCaraousel.jsx",
                  lineNumber: 73,
                  columnNumber: 32
                }, this),
                prevArrow: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {}, void 0, false, {
                  fileName: "app/Components/Home/BrandCaraousel.jsx",
                  lineNumber: 74,
                  columnNumber: 32
                }, this)
              }
            }
          ],
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "card", id: "articles-card", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "img",
                {
                  className: "card-img-articles",
                  src: "/img/article1.jpg",
                  alt: "Card image cap"
                },
                void 0,
                false,
                {
                  fileName: "app/Components/Home/BrandCaraousel.jsx",
                  lineNumber: 80,
                  columnNumber: 17
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/blog", className: "card-content2", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-3", children: [
                  " ",
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("em", { style: { color: "#474544 " }, children: "10th June, 2019" }, void 0, false, {
                    fileName: "app/Components/Home/BrandCaraousel.jsx",
                    lineNumber: 88,
                    columnNumber: 21
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/Components/Home/BrandCaraousel.jsx",
                  lineNumber: 86,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  "h2",
                  {
                    className: "font-weight-bold mt-2",
                    style: { color: "#474544 " },
                    children: "Fitness Hacks During Navratri"
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/Components/Home/BrandCaraousel.jsx",
                    lineNumber: 90,
                    columnNumber: 19
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  Link,
                  {
                    to: "#",
                    className: " btn category-btn  d-flex justify-content-center mt-4",
                    children: "Read More"
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/Components/Home/BrandCaraousel.jsx",
                    lineNumber: 97,
                    columnNumber: 19
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "app/Components/Home/BrandCaraousel.jsx",
                lineNumber: 85,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/Components/Home/BrandCaraousel.jsx",
              lineNumber: 79,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "card", id: "articles-card", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "img",
                {
                  className: "card-img-articles",
                  src: "/img/article2.jpg",
                  alt: "Card image cap"
                },
                void 0,
                false,
                {
                  fileName: "app/Components/Home/BrandCaraousel.jsx",
                  lineNumber: 106,
                  columnNumber: 17
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/blog", className: "card-content2", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-3 ", children: [
                  " ",
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("em", { style: { color: "#474544 " }, children: "10th June, 2019" }, void 0, false, {
                    fileName: "app/Components/Home/BrandCaraousel.jsx",
                    lineNumber: 114,
                    columnNumber: 21
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/Components/Home/BrandCaraousel.jsx",
                  lineNumber: 112,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  "h2",
                  {
                    className: "font-weight-bold mt-2",
                    style: { color: "#474544 " },
                    children: "Fitness Hacks During Navratri"
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/Components/Home/BrandCaraousel.jsx",
                    lineNumber: 116,
                    columnNumber: 19
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  Link,
                  {
                    to: "#",
                    className: " btn category-btn  d-flex justify-content-center mt-4",
                    children: "Read More"
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/Components/Home/BrandCaraousel.jsx",
                    lineNumber: 122,
                    columnNumber: 19
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "app/Components/Home/BrandCaraousel.jsx",
                lineNumber: 111,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/Components/Home/BrandCaraousel.jsx",
              lineNumber: 105,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "card", id: "articles-card", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "img",
                {
                  className: "card-img-articles",
                  src: "/img/article3.jpg",
                  alt: "Card image cap"
                },
                void 0,
                false,
                {
                  fileName: "app/Components/Home/BrandCaraousel.jsx",
                  lineNumber: 131,
                  columnNumber: 17
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/blog", className: "card-content2", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-3", children: [
                  " ",
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("em", { style: { color: "#474544 " }, children: "10th June, 2019" }, void 0, false, {
                    fileName: "app/Components/Home/BrandCaraousel.jsx",
                    lineNumber: 139,
                    columnNumber: 21
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/Components/Home/BrandCaraousel.jsx",
                  lineNumber: 137,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  "h2",
                  {
                    className: "font-weight-bold mt-2",
                    style: { color: "#474544 " },
                    children: "Fitness Hacks During Navratri"
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/Components/Home/BrandCaraousel.jsx",
                    lineNumber: 141,
                    columnNumber: 19
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  Link,
                  {
                    to: "#",
                    className: " btn category-btn  d-flex justify-content-center mt-4",
                    children: "Read More"
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/Components/Home/BrandCaraousel.jsx",
                    lineNumber: 147,
                    columnNumber: 19
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "app/Components/Home/BrandCaraousel.jsx",
                lineNumber: 136,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/Components/Home/BrandCaraousel.jsx",
              lineNumber: 130,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "card", id: "articles-card", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "img",
                {
                  className: "card-img-articles",
                  src: "/img/article4.jpg",
                  alt: "Card image cap"
                },
                void 0,
                false,
                {
                  fileName: "app/Components/Home/BrandCaraousel.jsx",
                  lineNumber: 156,
                  columnNumber: 17
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/blog", className: "card-content2", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-3", children: [
                  " ",
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("em", { style: { color: "#474544 " }, children: "10th June, 2019" }, void 0, false, {
                    fileName: "app/Components/Home/BrandCaraousel.jsx",
                    lineNumber: 164,
                    columnNumber: 21
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/Components/Home/BrandCaraousel.jsx",
                  lineNumber: 162,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  "h2",
                  {
                    className: "font-weight-bold mt-2",
                    style: { color: "#474544 " },
                    children: "Fitness Hacks During Navratri"
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/Components/Home/BrandCaraousel.jsx",
                    lineNumber: 166,
                    columnNumber: 19
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  Link,
                  {
                    to: "#",
                    className: " btn category-btn  d-flex justify-content-center mt-4",
                    children: "Read More"
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/Components/Home/BrandCaraousel.jsx",
                    lineNumber: 172,
                    columnNumber: 19
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "app/Components/Home/BrandCaraousel.jsx",
                lineNumber: 161,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/Components/Home/BrandCaraousel.jsx",
              lineNumber: 155,
              columnNumber: 15
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "app/Components/Home/BrandCaraousel.jsx",
          lineNumber: 28,
          columnNumber: 13
        },
        this
      ) }, void 0, false, {
        fileName: "app/Components/Home/BrandCaraousel.jsx",
        lineNumber: 27,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/Components/Home/BrandCaraousel.jsx",
      lineNumber: 20,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/Components/Home/BrandCaraousel.jsx",
      lineNumber: 19,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { id: "brand-car", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container-fluid", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "d-flex justify-content-center", style: { flexDirection: "column", alignItems: "center" }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "font-weight-bold custom-heading3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("em", { children: "Brands" }, void 0, false, {
          fileName: "app/Components/Home/BrandCaraousel.jsx",
          lineNumber: 189,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/Components/Home/BrandCaraousel.jsx",
          lineNumber: 188,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hr", { className: "h1-hr" }, void 0, false, {
          fileName: "app/Components/Home/BrandCaraousel.jsx",
          lineNumber: 191,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/Components/Home/BrandCaraousel.jsx",
        lineNumber: 187,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "brands-slider", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react_slick.default,
        {
          className: "ml-lg-5 mr-lg-5",
          asNavFor: nav1,
          ref: slider2,
          slidesToShow: 3,
          swipeToSlide: true,
          focusOnSelect: true,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2,
                dots: true
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true
              }
            }
          ],
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "card  d-flex justify-content-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "img",
              {
                className: "card-img-brand	  ",
                src: "/img/bc1.jpg",
                alt: "Card image cap"
              },
              void 0,
              false,
              {
                fileName: "app/Components/Home/BrandCaraousel.jsx",
                lineNumber: 231,
                columnNumber: 17
              },
              this
            ) }, void 0, false, {
              fileName: "app/Components/Home/BrandCaraousel.jsx",
              lineNumber: 230,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "card  d-flex justify-content-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "img",
              {
                className: "card-img-brand  ",
                src: "/img/bc2.jpg",
                alt: "Card image cap"
              },
              void 0,
              false,
              {
                fileName: "app/Components/Home/BrandCaraousel.jsx",
                lineNumber: 238,
                columnNumber: 17
              },
              this
            ) }, void 0, false, {
              fileName: "app/Components/Home/BrandCaraousel.jsx",
              lineNumber: 237,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "card   d-flex justify-content-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "img",
              {
                className: "card-img-brand  ",
                src: "/img/bc3.jpg",
                alt: "Card image cap"
              },
              void 0,
              false,
              {
                fileName: "app/Components/Home/BrandCaraousel.jsx",
                lineNumber: 245,
                columnNumber: 17
              },
              this
            ) }, void 0, false, {
              fileName: "app/Components/Home/BrandCaraousel.jsx",
              lineNumber: 244,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "card   d-flex justify-content-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "img",
              {
                className: "card-img-brand  ",
                src: "/img/bc4.jpg",
                alt: "Card image cap"
              },
              void 0,
              false,
              {
                fileName: "app/Components/Home/BrandCaraousel.jsx",
                lineNumber: 252,
                columnNumber: 17
              },
              this
            ) }, void 0, false, {
              fileName: "app/Components/Home/BrandCaraousel.jsx",
              lineNumber: 251,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "card   d-flex justify-content-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "img",
              {
                className: "card-img-brand  ",
                src: "/img/bc5.jpg",
                alt: "Card image cap"
              },
              void 0,
              false,
              {
                fileName: "app/Components/Home/BrandCaraousel.jsx",
                lineNumber: 259,
                columnNumber: 17
              },
              this
            ) }, void 0, false, {
              fileName: "app/Components/Home/BrandCaraousel.jsx",
              lineNumber: 258,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "card  d-flex justify-content-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "img",
              {
                className: "card-img-brand  ",
                src: "/img/bc6.jpg",
                alt: "Card image cap"
              },
              void 0,
              false,
              {
                fileName: "app/Components/Home/BrandCaraousel.jsx",
                lineNumber: 266,
                columnNumber: 17
              },
              this
            ) }, void 0, false, {
              fileName: "app/Components/Home/BrandCaraousel.jsx",
              lineNumber: 265,
              columnNumber: 15
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "app/Components/Home/BrandCaraousel.jsx",
          lineNumber: 194,
          columnNumber: 13
        },
        this
      ) }, void 0, false, {
        fileName: "app/Components/Home/BrandCaraousel.jsx",
        lineNumber: 193,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/Components/Home/BrandCaraousel.jsx",
      lineNumber: 186,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/Components/Home/BrandCaraousel.jsx",
      lineNumber: 185,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/Components/Home/BrandCaraousel.jsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
};
var BrandCaraousel_default = BrandCaraousel;

// app/Components/Home/TopSelling.jsx
var import_react3 = __toESM(require_react());
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var TopSelling = ({ collection }) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("section", { id: "featured-section", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
    "div",
    {
      id: "carouselExampleControls1",
      className: "carousel slide mt-3",
      "data-ride": "carousel",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          "div",
          {
            className: "d-flex justify-content-center mb-5",
            style: { flexDirection: "column", alignItems: "center" },
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "font-weight-bold custom-heading3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("em", { children: "Featured Products" }, void 0, false, {
                fileName: "app/Components/Home/TopSelling.jsx",
                lineNumber: 21,
                columnNumber: 15
              }, this) }, void 0, false, {
                fileName: "app/Components/Home/TopSelling.jsx",
                lineNumber: 20,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("hr", { className: "h1-hr" }, void 0, false, {
                fileName: "app/Components/Home/TopSelling.jsx",
                lineNumber: 23,
                columnNumber: 13
              }, this)
            ]
          },
          void 0,
          true,
          {
            fileName: "app/Components/Home/TopSelling.jsx",
            lineNumber: 16,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "carousel-inner", id: "featured-carousel", children: collection.products.nodes.map((product, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          "div",
          {
            className: index === 0 ? "carousel-item active" : "carousel-item",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "row ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "col-md-5 col-lg-6 d-flex justify-content-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                "img",
                {
                  className: "featured-img",
                  src: product.variants.nodes[0].image?.url || "",
                  alt: product.variants.nodes[0].image?.altText || ""
                },
                void 0,
                false,
                {
                  fileName: "app/Components/Home/TopSelling.jsx",
                  lineNumber: 34,
                  columnNumber: 21
                },
                this
              ) }, void 0, false, {
                fileName: "app/Components/Home/TopSelling.jsx",
                lineNumber: 33,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "col featured-details ", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { className: "w-lg-75", children: product.title }, void 0, false, {
                  fileName: "app/Components/Home/TopSelling.jsx",
                  lineNumber: 41,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h4", { children: [
                  product.variants.nodes[0].compareAtPrice && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("del", { className: "discount-text", children: [
                    "\u20B9",
                    product.variants.nodes[0].compareAtPrice.amount
                  ] }, void 0, true, {
                    fileName: "app/Components/Home/TopSelling.jsx",
                    lineNumber: 44,
                    columnNumber: 25
                  }, this),
                  " ",
                  "\u20B9 ",
                  product.variants.nodes[0].price.amount
                ] }, void 0, true, {
                  fileName: "app/Components/Home/TopSelling.jsx",
                  lineNumber: 42,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "featured-btn", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ProductForm, { variantId: product.variants.nodes[0].id }, void 0, false, {
                  fileName: "app/Components/Home/TopSelling.jsx",
                  lineNumber: 54,
                  columnNumber: 23
                }, this) }, void 0, false, {
                  fileName: "app/Components/Home/TopSelling.jsx",
                  lineNumber: 53,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "app/Components/Home/TopSelling.jsx",
                lineNumber: 40,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/Components/Home/TopSelling.jsx",
              lineNumber: 32,
              columnNumber: 17
            }, this)
          },
          void 0,
          false,
          {
            fileName: "app/Components/Home/TopSelling.jsx",
            lineNumber: 27,
            columnNumber: 15
          },
          this
        )) }, void 0, false, {
          fileName: "app/Components/Home/TopSelling.jsx",
          lineNumber: 25,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          "a",
          {
            className: "carousel-control-prev",
            href: "#carouselExampleControls1",
            id: "carousel-controls",
            role: "button",
            "data-slide": "prev",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                "span",
                {
                  className: "carousel-control-prev-icon",
                  "aria-hidden": "true"
                },
                void 0,
                false,
                {
                  fileName: "app/Components/Home/TopSelling.jsx",
                  lineNumber: 68,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "sr-only", children: "Previous" }, void 0, false, {
                fileName: "app/Components/Home/TopSelling.jsx",
                lineNumber: 72,
                columnNumber: 13
              }, this)
            ]
          },
          void 0,
          true,
          {
            fileName: "app/Components/Home/TopSelling.jsx",
            lineNumber: 61,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          "a",
          {
            className: "carousel-control-next",
            href: "#carouselExampleControls1",
            id: "carousel-controls",
            role: "button",
            "data-slide": "next",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                "span",
                {
                  className: "carousel-control-next-icon",
                  "aria-hidden": "true"
                },
                void 0,
                false,
                {
                  fileName: "app/Components/Home/TopSelling.jsx",
                  lineNumber: 81,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "sr-only", children: "Next" }, void 0, false, {
                fileName: "app/Components/Home/TopSelling.jsx",
                lineNumber: 85,
                columnNumber: 13
              }, this)
            ]
          },
          void 0,
          true,
          {
            fileName: "app/Components/Home/TopSelling.jsx",
            lineNumber: 74,
            columnNumber: 11
          },
          this
        )
      ]
    },
    void 0,
    true,
    {
      fileName: "app/Components/Home/TopSelling.jsx",
      lineNumber: 11,
      columnNumber: 9
    },
    this
  ) }, void 0, false, {
    fileName: "app/Components/Home/TopSelling.jsx",
    lineNumber: 9,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/Components/Home/TopSelling.jsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
};
var TopSelling_default = TopSelling;

// app/Components/Home/FeaturedProducts.jsx
var React2 = __toESM(require_react());
var import_react5 = __toESM(require_react());
var import_react_slick2 = __toESM(require_lib());
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
var FeaturedProducts = ({ collections }) => {
  const [nav1, setNav1] = (0, import_react5.useState)();
  const [nav2, setNav2] = (0, import_react5.useState)();
  const slider1 = (0, import_react5.useRef)(null);
  const slider2 = (0, import_react5.useRef)(null);
  (0, import_react5.useEffect)(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("section", { id: "product-card ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "container-fluid", id: "cgap", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "d-flex justify-content-center mb-5", style: { flexDirection: "column", alignItems: "center" }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { className: "font-weight-bold custom-heading3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("em", { children: "Shop By Categories" }, void 0, false, {
        fileName: "app/Components/Home/FeaturedProducts.jsx",
        lineNumber: 22,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/Components/Home/FeaturedProducts.jsx",
        lineNumber: 21,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("hr", { className: "h1-hr" }, void 0, false, {
        fileName: "app/Components/Home/FeaturedProducts.jsx",
        lineNumber: 24,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/Components/Home/FeaturedProducts.jsx",
      lineNumber: 20,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      import_react_slick2.default,
      {
        className: "ml-lg-5 mr-lg-5",
        asNavFor: nav1,
        ref: slider2,
        slidesToShow: 3,
        swipeToSlide: true,
        focusOnSelect: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
              dots: true,
              nextArrow: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, {}, void 0, false, {
                fileName: "app/Components/Home/FeaturedProducts.jsx",
                lineNumber: 52,
                columnNumber: 28
              }, this),
              prevArrow: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, {}, void 0, false, {
                fileName: "app/Components/Home/FeaturedProducts.jsx",
                lineNumber: 53,
                columnNumber: 28
              }, this)
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true,
              nextArrow: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, {}, void 0, false, {
                fileName: "app/Components/Home/FeaturedProducts.jsx",
                lineNumber: 62,
                columnNumber: 28
              }, this),
              prevArrow: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, {}, void 0, false, {
                fileName: "app/Components/Home/FeaturedProducts.jsx",
                lineNumber: 63,
                columnNumber: 28
              }, this)
            }
          }
        ],
        children: collections.nodes.map((collection) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          "div",
          {
            className: "card",
            style: { width: "18rem", paddingBottom: "" },
            id: "cgap",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                "img",
                {
                  className: "card-img-top",
                  src: "/img/ds1.jpg",
                  alt: "Card image cap"
                },
                void 0,
                false,
                {
                  fileName: "app/Components/Home/FeaturedProducts.jsx",
                  lineNumber: 75,
                  columnNumber: 15
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "card-content", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                Link,
                {
                  to: `/products/${collection.handle}`,
                  className: " btn category-btn  d-flex justify-content-center mt-4",
                  children: "Shop now"
                },
                void 0,
                false,
                {
                  fileName: "app/Components/Home/FeaturedProducts.jsx",
                  lineNumber: 81,
                  columnNumber: 17
                },
                this
              ) }, void 0, false, {
                fileName: "app/Components/Home/FeaturedProducts.jsx",
                lineNumber: 80,
                columnNumber: 15
              }, this)
            ]
          },
          collection.id,
          true,
          {
            fileName: "app/Components/Home/FeaturedProducts.jsx",
            lineNumber: 69,
            columnNumber: 13
          },
          this
        ))
      },
      void 0,
      false,
      {
        fileName: "app/Components/Home/FeaturedProducts.jsx",
        lineNumber: 27,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/Components/Home/FeaturedProducts.jsx",
    lineNumber: 19,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/Components/Home/FeaturedProducts.jsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
};
var FeaturedProducts_default = FeaturedProducts;

export {
  BrandCaraousel_default,
  TopSelling_default,
  FeaturedProducts_default
};
//# sourceMappingURL=/build/_shared/chunk-32CAYCI3.js.map
