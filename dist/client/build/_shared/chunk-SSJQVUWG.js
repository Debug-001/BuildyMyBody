import {
  BsSearch,
  FiShoppingCart,
  GenIcon,
  cl_default,
  gainer_default,
  mt_default,
  on_default,
  pre_default,
  uni_default,
  whey_default,
  workout_default
} from "/build/_shared/chunk-ILUR2CXR.js";
import {
  NavLink
} from "/build/_shared/chunk-3DYM7AG2.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-4VTZQJYZ.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/Components/Navbar.jsx
var import_react = __toESM(require_react());

// node_modules/react-icons/gi/index.esm.js
function GiBodyBalance(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M134.924 42.201c-8.034.11-27.397 3.323-49.424 6.893l7.604 22.027c43.938-5.873 43.678-7.054 46.89-2.572 32.14 44.839 59.603 88.148 74.676 135.023 32.603 2.41 71.533 9.14 98.31 23.852 34.083-36.34 89.673-55.812 135.497-71.701 12.157-4.216 25.246 7.4 42.47 10.068l4.848-17.264c-4.872-6.815-27.807-16.587-37.338-16.718-4.035-.056-15.496 3.15-18.969 4.341-56.98 11.002-103.367 13.182-162.199 32.575-37.228-37.914-76.205-75.414-120.932-113.803-9.238-7.93-9.691-12.88-21.433-12.72zm83.87 179.617c-14.884 26.18-24.332 32.5-44.718 46.17-17.912-4.68-35.784-9.45-56.758-6.986-21.017-2.805-29.586 4.975-55.086 13.9-7.727-2.6-16.961.997-22.898 3.528-9.757 4.976-21.342 12.282-18.766 24.588 3.949 12.712 20.223 8.898 27.655 5.703 6.245-2.98 12.055-8.777 16.357-13.34 21.38.569 30.874-.128 52.988-9.912 16.743 6.801 37.917 9.505 56.895 9.972a57.14 57.14 0 0 1 3.607-2.476c10.976-6.9 24.287-9.537 36.313-4.77 12.025 4.768 19.744 15.743 22.773 28.196 1.789 7.352 2.081 15.356.856 23.539 4.75 13.328 8.36 25.571 16.906 41.912-5.193 22.78-3.544 45.283-2.262 68.342l-22.781 8.55-4.34 11.069h70.213l-8.137-11.903-16.369-8.257c3.504-23.007 9.628-45.75 6.246-69.446.55-17.704-5.289-35.407-8.748-53.111 21.304-26.239 10.374-44.741 25.3-73.287a112.733 112.733 0 0 1 7.216-11.918c-27.363-11.34-54.484-18.839-82.461-20.063zm-18.15 81.842c-4.054.12-8.442 1.56-12.992 4.42-7.278 4.576-14.383 12.805-18.76 23.463-4.376 10.658-5.073 21.43-3.064 29.687 2.009 8.258 6.29 13.613 12.037 15.891 5.747 2.278 12.612 1.343 19.89-3.232 7.28-4.576 14.386-12.807 18.763-23.465 4.376-10.658 5.071-21.428 3.062-29.686s-6.289-13.614-12.035-15.892c-2.155-.855-4.468-1.258-6.9-1.186z" } }] })(props);
}

// app/Components/Navbar.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Navbar = () => {
  const [selectedCategory, setSelectedCategory] = (0, import_react.useState)(null);
  const [isNavbarCollapsed, setIsNavbarCollapsed] = (0, import_react.useState)(false);
  const handleFeaturesClick = (category) => {
    setSelectedCategory(category === selectedCategory ? null : category);
  };
  const handleSubMenuLeave = () => {
    if (!isNavbarCollapsed) {
      setSelectedCategory(null);
    }
  };
  const handleNavbarToggle = () => {
    setIsNavbarCollapsed(!isNavbarCollapsed);
    setSelectedCategory(null);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "nav",
      {
        className: "navbar navbar-expand-lg navbar-light ",
        style: { background: "black" },
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { className: "navbar-brand ml-lg-4", to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { className: "logo_img w-75", src: "/img/logo.png", alt: "" }, void 0, false, {
            fileName: "app/Components/Navbar.jsx",
            lineNumber: 44,
            columnNumber: 11
          }, this) }, void 0, false, {
            fileName: "app/Components/Navbar.jsx",
            lineNumber: 43,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "button",
            {
              className: "navbar-toggler",
              type: "button",
              "data-toggle": "collapse",
              "data-target": "#navbarNav",
              "aria-controls": "navbarNav",
              "aria-expanded": "false",
              "aria-label": "Toggle navigation",
              onClick: handleNavbarToggle,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "navbar-toggler-icon ", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "bar" }, void 0, false, {
                  fileName: "app/Components/Navbar.jsx",
                  lineNumber: 60,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "bar" }, void 0, false, {
                  fileName: "app/Components/Navbar.jsx",
                  lineNumber: 61,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "bar" }, void 0, false, {
                  fileName: "app/Components/Navbar.jsx",
                  lineNumber: 62,
                  columnNumber: 13
                }, this)
              ] }, void 0, true, {
                fileName: "app/Components/Navbar.jsx",
                lineNumber: 59,
                columnNumber: 11
              }, this)
            },
            void 0,
            false,
            {
              fileName: "app/Components/Navbar.jsx",
              lineNumber: 48,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "div",
            {
              className: `collapse navbar-collapse mx-3 mx-lg-0    ${isNavbarCollapsed ? "show" : ""}`,
              id: "navbarNav",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "navbar-nav ml-auto mr-auto", style: { gap: ".8rem" }, children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "nav-item", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    NavLink,
                    {
                      className: "nav-link active text-light",
                      to: "/",
                      style: { fontSize: "1rem" },
                      children: "Home"
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/Components/Navbar.jsx",
                      lineNumber: 76,
                      columnNumber: 15
                    },
                    this
                  ) }, void 0, false, {
                    fileName: "app/Components/Navbar.jsx",
                    lineNumber: 75,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    "div",
                    {
                      className: "dropdown show mt-2",
                      style: { marginBottom: "0", marginRight: "0" },
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                          "a",
                          {
                            className: " dropdown-toggle",
                            style: {
                              background: "none",
                              color: "white",
                              padding: "0px",
                              fontWeight: "400",
                              fontSize: "1rem"
                            },
                            href: "#",
                            role: "button",
                            id: "dropdownMenuLink",
                            "data-toggle": "dropdown",
                            "aria-haspopup": "true",
                            "aria-expanded": "false",
                            children: "All Products"
                          },
                          void 0,
                          false,
                          {
                            fileName: "app/Components/Navbar.jsx",
                            lineNumber: 88,
                            columnNumber: 15
                          },
                          this
                        ),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                          "div",
                          {
                            className: "dropdown-menu drop-custom",
                            "aria-labelledby": "dropdownMenuLink",
                            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "row", children: [
                              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "col-lg-12 col-md-6 d-flex justify-content-around", children: [
                                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { className: "  ", href: "/products/protein", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "d-flex flex-column align-items-center ", children: [
                                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                                    "img",
                                    {
                                      src: whey_default,
                                      alt: "",
                                      style: {
                                        width: "5rem",
                                        border: "1px solid transparent",
                                        borderRadius: "62px"
                                      }
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName: "app/Components/Navbar.jsx",
                                      lineNumber: 115,
                                      columnNumber: 25
                                    },
                                    this
                                  ),
                                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                                    "span",
                                    {
                                      style: { fontWeight: "bold", fontSize: "1rem" },
                                      className: "mt-2 text-center text-dark",
                                      children: "Whey Protein"
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName: "app/Components/Navbar.jsx",
                                      lineNumber: 124,
                                      columnNumber: 25
                                    },
                                    this
                                  )
                                ] }, void 0, true, {
                                  fileName: "app/Components/Navbar.jsx",
                                  lineNumber: 114,
                                  columnNumber: 23
                                }, this) }, void 0, false, {
                                  fileName: "app/Components/Navbar.jsx",
                                  lineNumber: 113,
                                  columnNumber: 21
                                }, this),
                                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/products/gainers", className: "  ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "d-flex flex-column align-items-center ml-lg-5 ", children: [
                                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                                    "img",
                                    {
                                      src: gainer_default,
                                      alt: "",
                                      style: {
                                        width: "5rem",
                                        border: "1px solid transparent",
                                        borderRadius: "62px"
                                      }
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName: "app/Components/Navbar.jsx",
                                      lineNumber: 134,
                                      columnNumber: 25
                                    },
                                    this
                                  ),
                                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                                    "span",
                                    {
                                      style: { fontWeight: "bold", fontSize: "1rem" },
                                      className: "mt-2 text-center text-dark",
                                      children: "Mass Gainer"
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName: "app/Components/Navbar.jsx",
                                      lineNumber: 143,
                                      columnNumber: 25
                                    },
                                    this
                                  )
                                ] }, void 0, true, {
                                  fileName: "app/Components/Navbar.jsx",
                                  lineNumber: 133,
                                  columnNumber: 23
                                }, this) }, void 0, false, {
                                  fileName: "app/Components/Navbar.jsx",
                                  lineNumber: 132,
                                  columnNumber: 21
                                }, this)
                              ] }, void 0, true, {
                                fileName: "app/Components/Navbar.jsx",
                                lineNumber: 112,
                                columnNumber: 19
                              }, this),
                              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "col-lg-12 col-md-6 d-flex mt-lg-2 justify-content-around", children: [
                                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/products/pre-post-workout", className: "  ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "d-flex flex-column align-items-center  ", children: [
                                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                                    "img",
                                    {
                                      src: pre_default,
                                      alt: "",
                                      style: {
                                        width: "5rem",
                                        border: "1px solid transparent",
                                        borderRadius: "62px"
                                      }
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName: "app/Components/Navbar.jsx",
                                      lineNumber: 156,
                                      columnNumber: 25
                                    },
                                    this
                                  ),
                                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                                    "span",
                                    {
                                      className: "text-center mt-2 text-dark",
                                      style: { fontWeight: "bold", fontSize: "1rem" },
                                      children: "Pre/Post Workout"
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName: "app/Components/Navbar.jsx",
                                      lineNumber: 165,
                                      columnNumber: 25
                                    },
                                    this
                                  )
                                ] }, void 0, true, {
                                  fileName: "app/Components/Navbar.jsx",
                                  lineNumber: 155,
                                  columnNumber: 23
                                }, this) }, void 0, false, {
                                  fileName: "app/Components/Navbar.jsx",
                                  lineNumber: 154,
                                  columnNumber: 21
                                }, this),
                                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/products/workout-essentials", className: "  ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "d-flex flex-column align-items-center ml-lg-5", children: [
                                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                                    "img",
                                    {
                                      src: workout_default,
                                      alt: "",
                                      style: {
                                        width: "5rem",
                                        border: "1px solid transparent",
                                        borderRadius: "62px"
                                      }
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName: "app/Components/Navbar.jsx",
                                      lineNumber: 175,
                                      columnNumber: 25
                                    },
                                    this
                                  ),
                                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                                    "span",
                                    {
                                      className: "text-center mt-2 text-dark",
                                      style: { fontWeight: "bold", fontSize: "1rem" },
                                      children: "Workout Essentials"
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName: "app/Components/Navbar.jsx",
                                      lineNumber: 184,
                                      columnNumber: 25
                                    },
                                    this
                                  )
                                ] }, void 0, true, {
                                  fileName: "app/Components/Navbar.jsx",
                                  lineNumber: 174,
                                  columnNumber: 23
                                }, this) }, void 0, false, {
                                  fileName: "app/Components/Navbar.jsx",
                                  lineNumber: 173,
                                  columnNumber: 21
                                }, this)
                              ] }, void 0, true, {
                                fileName: "app/Components/Navbar.jsx",
                                lineNumber: 153,
                                columnNumber: 19
                              }, this),
                              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "col-lg-12 mt-4 mb-2 text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/products/all", id: "shop-nav-btn2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "btn w-50 shop-nav-btn ", children: "Shop All" }, void 0, false, {
                                fileName: "app/Components/Navbar.jsx",
                                lineNumber: 195,
                                columnNumber: 23
                              }, this) }, void 0, false, {
                                fileName: "app/Components/Navbar.jsx",
                                lineNumber: 194,
                                columnNumber: 21
                              }, this) }, void 0, false, {
                                fileName: "app/Components/Navbar.jsx",
                                lineNumber: 193,
                                columnNumber: 19
                              }, this)
                            ] }, void 0, true, {
                              fileName: "app/Components/Navbar.jsx",
                              lineNumber: 111,
                              columnNumber: 17
                            }, this)
                          },
                          void 0,
                          false,
                          {
                            fileName: "app/Components/Navbar.jsx",
                            lineNumber: 107,
                            columnNumber: 15
                          },
                          this
                        )
                      ]
                    },
                    void 0,
                    true,
                    {
                      fileName: "app/Components/Navbar.jsx",
                      lineNumber: 84,
                      columnNumber: 13
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "nav-item", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    NavLink,
                    {
                      className: "nav-link active text-light",
                      style: { fontSize: "1rem" },
                      to: "/blog",
                      children: "Blogs"
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/Components/Navbar.jsx",
                      lineNumber: 202,
                      columnNumber: 15
                    },
                    this
                  ) }, void 0, false, {
                    fileName: "app/Components/Navbar.jsx",
                    lineNumber: 201,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    "div",
                    {
                      className: "dropdown show mt-2",
                      style: { marginBottom: "0", marginRight: "0" },
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                          "a",
                          {
                            className: " dropdown-toggle",
                            style: {
                              background: "none",
                              color: "white",
                              padding: "0px",
                              fontWeight: "400",
                              fontSize: "1rem"
                            },
                            href: "#",
                            role: "button",
                            id: "dropdownMenuLink",
                            "data-toggle": "dropdown",
                            "aria-haspopup": "true",
                            "aria-expanded": "false",
                            children: "Store"
                          },
                          void 0,
                          false,
                          {
                            fileName: "app/Components/Navbar.jsx",
                            lineNumber: 214,
                            columnNumber: 15
                          },
                          this
                        ),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                          "div",
                          {
                            className: "dropdown-menu drop-custom",
                            "aria-labelledby": "dropdownMenuLink",
                            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "row", children: [
                              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "col-lg-12 col-md-6 d-flex justify-content-around", children: [
                                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "", className: "  ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "d-flex flex-column align-items-center ", children: [
                                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                                    "img",
                                    {
                                      src: on_default,
                                      alt: "",
                                      style: {
                                        width: "5rem",
                                        border: "1px solid transparent",
                                        borderRadius: "62px"
                                      }
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName: "app/Components/Navbar.jsx",
                                      lineNumber: 240,
                                      columnNumber: 25
                                    },
                                    this
                                  ),
                                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                                    "span",
                                    {
                                      style: { fontWeight: "bold", fontSize: "1rem" },
                                      className: "mt-2 text-center text-dark",
                                      children: [
                                        " ",
                                        "ON Nutrition"
                                      ]
                                    },
                                    void 0,
                                    true,
                                    {
                                      fileName: "app/Components/Navbar.jsx",
                                      lineNumber: 249,
                                      columnNumber: 25
                                    },
                                    this
                                  )
                                ] }, void 0, true, {
                                  fileName: "app/Components/Navbar.jsx",
                                  lineNumber: 239,
                                  columnNumber: 23
                                }, this) }, void 0, false, {
                                  fileName: "app/Components/Navbar.jsx",
                                  lineNumber: 238,
                                  columnNumber: 21
                                }, this),
                                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "", className: "  ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "d-flex flex-column align-items-center ml-lg-5 ", children: [
                                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                                    "img",
                                    {
                                      src: mt_default,
                                      alt: "",
                                      style: {
                                        width: "5rem",
                                        border: "1px solid transparent",
                                        borderRadius: "62px"
                                      }
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName: "app/Components/Navbar.jsx",
                                      lineNumber: 260,
                                      columnNumber: 25
                                    },
                                    this
                                  ),
                                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                                    "span",
                                    {
                                      style: { fontWeight: "bold", fontSize: "1rem" },
                                      className: "mt-2 text-center text-dark",
                                      children: "MuscleTech"
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName: "app/Components/Navbar.jsx",
                                      lineNumber: 269,
                                      columnNumber: 25
                                    },
                                    this
                                  )
                                ] }, void 0, true, {
                                  fileName: "app/Components/Navbar.jsx",
                                  lineNumber: 259,
                                  columnNumber: 23
                                }, this) }, void 0, false, {
                                  fileName: "app/Components/Navbar.jsx",
                                  lineNumber: 258,
                                  columnNumber: 21
                                }, this)
                              ] }, void 0, true, {
                                fileName: "app/Components/Navbar.jsx",
                                lineNumber: 237,
                                columnNumber: 19
                              }, this),
                              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "col-lg-12 col-md-6 d-flex mt-lg-2 justify-content-around", children: [
                                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "", className: "  ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "d-flex flex-column align-items-center  ", children: [
                                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                                    "img",
                                    {
                                      src: uni_default,
                                      alt: "",
                                      style: {
                                        width: "5rem",
                                        border: "1px solid transparent",
                                        borderRadius: "62px"
                                      }
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName: "app/Components/Navbar.jsx",
                                      lineNumber: 282,
                                      columnNumber: 25
                                    },
                                    this
                                  ),
                                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                                    "span",
                                    {
                                      className: "text-center mt-2 text-dark",
                                      style: { fontWeight: "bold", fontSize: "1rem" },
                                      children: "Universal"
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName: "app/Components/Navbar.jsx",
                                      lineNumber: 291,
                                      columnNumber: 25
                                    },
                                    this
                                  )
                                ] }, void 0, true, {
                                  fileName: "app/Components/Navbar.jsx",
                                  lineNumber: 281,
                                  columnNumber: 23
                                }, this) }, void 0, false, {
                                  fileName: "app/Components/Navbar.jsx",
                                  lineNumber: 280,
                                  columnNumber: 21
                                }, this),
                                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "", className: "  ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "d-flex flex-column align-items-center ml-lg-5", children: [
                                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                                    "img",
                                    {
                                      src: cl_default,
                                      alt: "",
                                      style: {
                                        width: "5rem",
                                        border: "1px solid transparent",
                                        borderRadius: "62px"
                                      }
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName: "app/Components/Navbar.jsx",
                                      lineNumber: 301,
                                      columnNumber: 25
                                    },
                                    this
                                  ),
                                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                                    "span",
                                    {
                                      className: "text-center mt-2 text-dark",
                                      style: { fontWeight: "bold", fontSize: "1rem" },
                                      children: "Cellucor"
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName: "app/Components/Navbar.jsx",
                                      lineNumber: 310,
                                      columnNumber: 25
                                    },
                                    this
                                  )
                                ] }, void 0, true, {
                                  fileName: "app/Components/Navbar.jsx",
                                  lineNumber: 300,
                                  columnNumber: 23
                                }, this) }, void 0, false, {
                                  fileName: "app/Components/Navbar.jsx",
                                  lineNumber: 299,
                                  columnNumber: 21
                                }, this)
                              ] }, void 0, true, {
                                fileName: "app/Components/Navbar.jsx",
                                lineNumber: 279,
                                columnNumber: 19
                              }, this),
                              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "col-lg-12 mt-4 mb-2 text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/products/all", id: "shop-nav-btn2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "btn w-50 shop-nav-btn", children: "Shop All" }, void 0, false, {
                                fileName: "app/Components/Navbar.jsx",
                                lineNumber: 321,
                                columnNumber: 23
                              }, this) }, void 0, false, {
                                fileName: "app/Components/Navbar.jsx",
                                lineNumber: 320,
                                columnNumber: 21
                              }, this) }, void 0, false, {
                                fileName: "app/Components/Navbar.jsx",
                                lineNumber: 319,
                                columnNumber: 19
                              }, this)
                            ] }, void 0, true, {
                              fileName: "app/Components/Navbar.jsx",
                              lineNumber: 236,
                              columnNumber: 17
                            }, this)
                          },
                          void 0,
                          false,
                          {
                            fileName: "app/Components/Navbar.jsx",
                            lineNumber: 232,
                            columnNumber: 15
                          },
                          this
                        )
                      ]
                    },
                    void 0,
                    true,
                    {
                      fileName: "app/Components/Navbar.jsx",
                      lineNumber: 210,
                      columnNumber: 13
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "nav-item", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    NavLink,
                    {
                      className: "nav-link active text-light",
                      to: "/contact",
                      style: { fontSize: "1rem" },
                      children: "Contact Us"
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/Components/Navbar.jsx",
                      lineNumber: 328,
                      columnNumber: 15
                    },
                    this
                  ) }, void 0, false, {
                    fileName: "app/Components/Navbar.jsx",
                    lineNumber: 327,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "nav-item", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    NavLink,
                    {
                      className: "nav-link active text-light",
                      to: "/bmi",
                      style: { fontSize: "1rem" },
                      children: "BMI Check"
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/Components/Navbar.jsx",
                      lineNumber: 337,
                      columnNumber: 15
                    },
                    this
                  ) }, void 0, false, {
                    fileName: "app/Components/Navbar.jsx",
                    lineNumber: 336,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "nav-item", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    NavLink,
                    {
                      className: "nav-link active text-light",
                      to: "/certificates",
                      style: { fontSize: "1rem" },
                      children: "Authenticity"
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/Components/Navbar.jsx",
                      lineNumber: 346,
                      columnNumber: 15
                    },
                    this
                  ) }, void 0, false, {
                    fileName: "app/Components/Navbar.jsx",
                    lineNumber: 345,
                    columnNumber: 13
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/Components/Navbar.jsx",
                  lineNumber: 74,
                  columnNumber: 11
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "navbar-nav nav-icon  ml-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "d-flex ", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "icon-search ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/search", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BsSearch, { size: 25 }, void 0, false, {
                    fileName: "app/Components/Navbar.jsx",
                    lineNumber: 360,
                    columnNumber: 21
                  }, this) }, void 0, false, {
                    fileName: "app/Components/Navbar.jsx",
                    lineNumber: 359,
                    columnNumber: 19
                  }, this) }, void 0, false, {
                    fileName: "app/Components/Navbar.jsx",
                    lineNumber: 358,
                    columnNumber: 17
                  }, this) }, void 0, false, {
                    fileName: "app/Components/Navbar.jsx",
                    lineNumber: 357,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "icon-cart ml-lg-3 ml-md-4 ml-sm-5 ml-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/cart", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FiShoppingCart, { size: 25 }, void 0, false, {
                    fileName: "app/Components/Navbar.jsx",
                    lineNumber: 367,
                    columnNumber: 21
                  }, this) }, void 0, false, {
                    fileName: "app/Components/Navbar.jsx",
                    lineNumber: 366,
                    columnNumber: 19
                  }, this) }, void 0, false, {
                    fileName: "app/Components/Navbar.jsx",
                    lineNumber: 365,
                    columnNumber: 17
                  }, this) }, void 0, false, {
                    fileName: "app/Components/Navbar.jsx",
                    lineNumber: 364,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "icon-cart ml-lg-3 ml-md-4 ml-sm-5 ml-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    NavLink,
                    {
                      to: "/account",
                      className: "border border-light p-2",
                      id: "acc-icon",
                      children: "Account"
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/Components/Navbar.jsx",
                      lineNumber: 373,
                      columnNumber: 19
                    },
                    this
                  ) }, void 0, false, {
                    fileName: "app/Components/Navbar.jsx",
                    lineNumber: 372,
                    columnNumber: 17
                  }, this) }, void 0, false, {
                    fileName: "app/Components/Navbar.jsx",
                    lineNumber: 371,
                    columnNumber: 15
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/Components/Navbar.jsx",
                  lineNumber: 356,
                  columnNumber: 13
                }, this) }, void 0, false, {
                  fileName: "app/Components/Navbar.jsx",
                  lineNumber: 355,
                  columnNumber: 11
                }, this)
              ]
            },
            void 0,
            true,
            {
              fileName: "app/Components/Navbar.jsx",
              lineNumber: 68,
              columnNumber: 9
            },
            this
          )
        ]
      },
      void 0,
      true,
      {
        fileName: "app/Components/Navbar.jsx",
        lineNumber: 39,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container-fluid", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "h6",
      {
        className: "text-center font-weight-bolder",
        style: { paddingTop: "10px", fontSize: "17px" },
        children: [
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GiBodyBalance, { size: 30, style: { color: "#ff2828" } }, void 0, false, {
            fileName: "app/Components/Navbar.jsx",
            lineNumber: 393,
            columnNumber: 11
          }, this),
          " Elevate your Fitness Journey with",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: { color: "#ff2828" }, children: "\xA0 BuildMyBody" }, void 0, false, {
            fileName: "app/Components/Navbar.jsx",
            lineNumber: 395,
            columnNumber: 11
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "app/Components/Navbar.jsx",
        lineNumber: 388,
        columnNumber: 9
      },
      this
    ) }, void 0, false, {
      fileName: "app/Components/Navbar.jsx",
      lineNumber: 387,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/Components/Navbar.jsx",
    lineNumber: 38,
    columnNumber: 5
  }, this);
};
var Navbar_default = Navbar;

export {
  Navbar_default
};
//# sourceMappingURL=/build/_shared/chunk-SSJQVUWG.js.map
