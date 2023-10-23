import {
  BsSearch,
  FiShoppingCart,
  GenIcon,
  RiAccountCircleLine
} from "/build/_shared/chunk-K4GQNGL6.js";
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

// dist/client/img/protien.png
var protien_default = "/build/_assets/protien-UWPUG44O.png";

// app/Components/Navbar.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Navbar = () => {
  const [menuItems, setMenuItems] = (0, import_react.useState)([
    // {
    //   text: 'Home',
    //   link: '/',
    //   active: true,
    // },
    {
      text: "Products",
      link: "/products/all",
      active: true
    },
    {
      text: "Blog",
      link: "/blog",
      active: true
    },
    {
      text: "Contact Us",
      link: "/contact",
      active: true
    },
    {
      text: "About Us",
      link: "/aboutus",
      active: true
    },
    {
      text: "Certification",
      link: "/certificates",
      active: true
    },
    {
      text: "Authenticity",
      link: "/authenticity",
      active: true
    },
    {
      text: "filter",
      link: "/filter",
      active: true
    }
    // {
    //   text: 'certi',
    //   link: '/certi',
    //   active: true,
    // },
  ]);
  const showSearchBar = () => {
    setSearchBarVisible(true);
  };
  const hideSearchBar = () => {
    setSearchBarVisible(false);
  };
  const [isSubMenuVisible, setSubMenuVisible] = (0, import_react.useState)(false);
  const showSubMenu = () => {
    setSubMenuVisible(true);
  };
  const hideSubMenu = () => {
    setSubMenuVisible(false);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { class: "navbar navbar-expand-lg navbar-light ", style: { background: "black" }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { className: "navbar-brand ml-4", to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { className: "logo_img w-75", src: "/img/logo.png", alt: "" }, void 0, false, {
        fileName: "app/Components/Navbar.jsx",
        lineNumber: 80,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/Components/Navbar.jsx",
        lineNumber: 79,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { class: "navbar-toggler", style: { backgroundColor: "white" }, type: "button", "data-toggle": "collapse", "data-target": "#navbarNav", "aria-controls": "navbarNav", "aria-expanded": "false", "aria-label": "Toggle navigation", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { class: "navbar-toggler-icon" }, void 0, false, {
        fileName: "app/Components/Navbar.jsx",
        lineNumber: 83,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/Components/Navbar.jsx",
        lineNumber: 82,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { class: "collapse navbar-collapse justify-content-center", id: "navbarNav", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { class: "navbar-nav ", children: menuItems.map((menuItem, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "li",
          {
            className: `nav-item mx-lg-1 mx-md-0 mx-sm-0 ${menuItem.active ? "active" : ""}`,
            onMouseEnter: showSubMenu,
            onMouseLeave: hideSubMenu,
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                NavLink,
                {
                  className: "nav-link",
                  style: { color: "white" },
                  to: menuItem.link,
                  children: [
                    menuItem.text,
                    menuItem.active && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "sr-only", children: "(current)" }, void 0, false, {
                      fileName: "app/Components/Navbar.jsx",
                      lineNumber: 102,
                      columnNumber: 21
                    }, this)
                  ]
                },
                void 0,
                true,
                {
                  fileName: "app/Components/Navbar.jsx",
                  lineNumber: 95,
                  columnNumber: 17
                },
                this
              ),
              menuItem.text === "Products" && isSubMenuVisible && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "div",
                {
                  className: "submenu",
                  style: { background: "black", color: "white" },
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "submenu-content", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "row p-4", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "col mt-2", children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                        "h4",
                        {
                          className: "text-center   ",
                          style: { color: "white" },
                          children: "Protein"
                        },
                        void 0,
                        false,
                        {
                          fileName: "app/Components/Navbar.jsx",
                          lineNumber: 115,
                          columnNumber: 29
                        },
                        this
                      ) }, void 0, false, {
                        fileName: "app/Components/Navbar.jsx",
                        lineNumber: 114,
                        columnNumber: 27
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-center  ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: protien_default, className: "w-50", alt: "" }, void 0, false, {
                        fileName: "app/Components/Navbar.jsx",
                        lineNumber: 124,
                        columnNumber: 31
                      }, this) }, void 0, false, {
                        fileName: "app/Components/Navbar.jsx",
                        lineNumber: 123,
                        columnNumber: 29
                      }, this) }, void 0, false, {
                        fileName: "app/Components/Navbar.jsx",
                        lineNumber: 122,
                        columnNumber: 27
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                        "p",
                        {
                          className: "mt-2 text-center  ",
                          style: { color: "white" },
                          children: "Whey Protein"
                        },
                        void 0,
                        false,
                        {
                          fileName: "app/Components/Navbar.jsx",
                          lineNumber: 128,
                          columnNumber: 29
                        },
                        this
                      ) }, void 0, false, {
                        fileName: "app/Components/Navbar.jsx",
                        lineNumber: 127,
                        columnNumber: 27
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                        "p",
                        {
                          className: "mt-1 text-center  ",
                          style: { color: "white" },
                          children: "Whey Blend"
                        },
                        void 0,
                        false,
                        {
                          fileName: "app/Components/Navbar.jsx",
                          lineNumber: 136,
                          columnNumber: 29
                        },
                        this
                      ) }, void 0, false, {
                        fileName: "app/Components/Navbar.jsx",
                        lineNumber: 135,
                        columnNumber: 27
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                        "p",
                        {
                          className: "mt-1 text-center  ",
                          style: { color: "white" },
                          children: "Whey Protein Isolate"
                        },
                        void 0,
                        false,
                        {
                          fileName: "app/Components/Navbar.jsx",
                          lineNumber: 144,
                          columnNumber: 29
                        },
                        this
                      ) }, void 0, false, {
                        fileName: "app/Components/Navbar.jsx",
                        lineNumber: 143,
                        columnNumber: 27
                      }, this)
                    ] }, void 0, true, {
                      fileName: "app/Components/Navbar.jsx",
                      lineNumber: 113,
                      columnNumber: 25
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "col mt-2", children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                        "h4",
                        {
                          className: "text-center  ",
                          style: { color: "white" },
                          children: "Gainer"
                        },
                        void 0,
                        false,
                        {
                          fileName: "app/Components/Navbar.jsx",
                          lineNumber: 154,
                          columnNumber: 29
                        },
                        this
                      ) }, void 0, false, {
                        fileName: "app/Components/Navbar.jsx",
                        lineNumber: 153,
                        columnNumber: 27
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                        "p",
                        {
                          className: "text-center  ",
                          style: { color: "white" },
                          children: [
                            " ",
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: protien_default, className: "w-50", alt: "" }, void 0, false, {
                              fileName: "app/Components/Navbar.jsx",
                              lineNumber: 167,
                              columnNumber: 31
                            }, this)
                          ]
                        },
                        void 0,
                        true,
                        {
                          fileName: "app/Components/Navbar.jsx",
                          lineNumber: 162,
                          columnNumber: 29
                        },
                        this
                      ) }, void 0, false, {
                        fileName: "app/Components/Navbar.jsx",
                        lineNumber: 161,
                        columnNumber: 27
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                        "p",
                        {
                          className: "mt-2 text-center  ",
                          style: { color: "white" },
                          children: "Mass Gainer"
                        },
                        void 0,
                        false,
                        {
                          fileName: "app/Components/Navbar.jsx",
                          lineNumber: 171,
                          columnNumber: 29
                        },
                        this
                      ) }, void 0, false, {
                        fileName: "app/Components/Navbar.jsx",
                        lineNumber: 170,
                        columnNumber: 27
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                        "p",
                        {
                          className: "mt-1 text-center  ",
                          style: { color: "white" },
                          children: "Weight Gainer"
                        },
                        void 0,
                        false,
                        {
                          fileName: "app/Components/Navbar.jsx",
                          lineNumber: 179,
                          columnNumber: 29
                        },
                        this
                      ) }, void 0, false, {
                        fileName: "app/Components/Navbar.jsx",
                        lineNumber: 178,
                        columnNumber: 27
                      }, this)
                    ] }, void 0, true, {
                      fileName: "app/Components/Navbar.jsx",
                      lineNumber: 152,
                      columnNumber: 25
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "col mt-2", children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "", children: [
                        " ",
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                          "h4",
                          {
                            className: "text-center  ",
                            style: { color: "white" },
                            children: "Pre/Post Workout"
                          },
                          void 0,
                          false,
                          {
                            fileName: "app/Components/Navbar.jsx",
                            lineNumber: 191,
                            columnNumber: 31
                          },
                          this
                        )
                      ] }, void 0, true, {
                        fileName: "app/Components/Navbar.jsx",
                        lineNumber: 189,
                        columnNumber: 29
                      }, this) }, void 0, false, {
                        fileName: "app/Components/Navbar.jsx",
                        lineNumber: 188,
                        columnNumber: 27
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-center  ", children: [
                        " ",
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: protien_default, className: "w-50", alt: "" }, void 0, false, {
                          fileName: "app/Components/Navbar.jsx",
                          lineNumber: 202,
                          columnNumber: 31
                        }, this)
                      ] }, void 0, true, {
                        fileName: "app/Components/Navbar.jsx",
                        lineNumber: 200,
                        columnNumber: 29
                      }, this) }, void 0, false, {
                        fileName: "app/Components/Navbar.jsx",
                        lineNumber: 199,
                        columnNumber: 27
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                        "p",
                        {
                          className: "mt-2 text-center  ",
                          style: { color: "white" },
                          children: "Pre-Workout"
                        },
                        void 0,
                        false,
                        {
                          fileName: "app/Components/Navbar.jsx",
                          lineNumber: 206,
                          columnNumber: 29
                        },
                        this
                      ) }, void 0, false, {
                        fileName: "app/Components/Navbar.jsx",
                        lineNumber: 205,
                        columnNumber: 27
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                        "p",
                        {
                          className: "mt-1 text-center  ",
                          style: { color: "white" },
                          children: "Amino Acids && BCAAs"
                        },
                        void 0,
                        false,
                        {
                          fileName: "app/Components/Navbar.jsx",
                          lineNumber: 214,
                          columnNumber: 29
                        },
                        this
                      ) }, void 0, false, {
                        fileName: "app/Components/Navbar.jsx",
                        lineNumber: 213,
                        columnNumber: 27
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                        "p",
                        {
                          className: "mt-1 text-center  ",
                          style: { color: "white" },
                          children: "Glutamine"
                        },
                        void 0,
                        false,
                        {
                          fileName: "app/Components/Navbar.jsx",
                          lineNumber: 222,
                          columnNumber: 29
                        },
                        this
                      ) }, void 0, false, {
                        fileName: "app/Components/Navbar.jsx",
                        lineNumber: 221,
                        columnNumber: 27
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                        "p",
                        {
                          className: "mt-1 text-center  ",
                          style: { color: "white" },
                          children: "Carnitine"
                        },
                        void 0,
                        false,
                        {
                          fileName: "app/Components/Navbar.jsx",
                          lineNumber: 230,
                          columnNumber: 29
                        },
                        this
                      ) }, void 0, false, {
                        fileName: "app/Components/Navbar.jsx",
                        lineNumber: 229,
                        columnNumber: 27
                      }, this)
                    ] }, void 0, true, {
                      fileName: "app/Components/Navbar.jsx",
                      lineNumber: 187,
                      columnNumber: 25
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "col mt-2", children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                        "h4",
                        {
                          className: "text-center  ",
                          style: { color: "white" },
                          children: "Workout Essentials"
                        },
                        void 0,
                        false,
                        {
                          fileName: "app/Components/Navbar.jsx",
                          lineNumber: 240,
                          columnNumber: 29
                        },
                        this
                      ) }, void 0, false, {
                        fileName: "app/Components/Navbar.jsx",
                        lineNumber: 239,
                        columnNumber: 27
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-center  ", children: [
                        " ",
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: protien_default, className: "w-50", alt: "" }, void 0, false, {
                          fileName: "app/Components/Navbar.jsx",
                          lineNumber: 250,
                          columnNumber: 31
                        }, this)
                      ] }, void 0, true, {
                        fileName: "app/Components/Navbar.jsx",
                        lineNumber: 248,
                        columnNumber: 29
                      }, this) }, void 0, false, {
                        fileName: "app/Components/Navbar.jsx",
                        lineNumber: 247,
                        columnNumber: 27
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                        "p",
                        {
                          className: "mt-2 text-center  ",
                          style: { color: "white" },
                          children: "Testosterone Support"
                        },
                        void 0,
                        false,
                        {
                          fileName: "app/Components/Navbar.jsx",
                          lineNumber: 254,
                          columnNumber: 29
                        },
                        this
                      ) }, void 0, false, {
                        fileName: "app/Components/Navbar.jsx",
                        lineNumber: 253,
                        columnNumber: 27
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                        "p",
                        {
                          className: "mt-1 text-center  ",
                          style: { color: "white" },
                          children: "Multivitamins"
                        },
                        void 0,
                        false,
                        {
                          fileName: "app/Components/Navbar.jsx",
                          lineNumber: 262,
                          columnNumber: 29
                        },
                        this
                      ) }, void 0, false, {
                        fileName: "app/Components/Navbar.jsx",
                        lineNumber: 261,
                        columnNumber: 27
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                        "p",
                        {
                          className: "mt-1 text-center  ",
                          style: { color: "white" },
                          children: "Fat Burner"
                        },
                        void 0,
                        false,
                        {
                          fileName: "app/Components/Navbar.jsx",
                          lineNumber: 270,
                          columnNumber: 29
                        },
                        this
                      ) }, void 0, false, {
                        fileName: "app/Components/Navbar.jsx",
                        lineNumber: 269,
                        columnNumber: 27
                      }, this)
                    ] }, void 0, true, {
                      fileName: "app/Components/Navbar.jsx",
                      lineNumber: 238,
                      columnNumber: 25
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/Components/Navbar.jsx",
                    lineNumber: 112,
                    columnNumber: 23
                  }, this) }, void 0, false, {
                    fileName: "app/Components/Navbar.jsx",
                    lineNumber: 111,
                    columnNumber: 21
                  }, this)
                },
                void 0,
                false,
                {
                  fileName: "app/Components/Navbar.jsx",
                  lineNumber: 107,
                  columnNumber: 19
                },
                this
              ),
              menuItem.text === "Contact Us" && isSubMenuVisible && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "div",
                {
                  className: " sub2",
                  style: { background: "black", color: "white" },
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "submenu-content", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "row p-2  ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "col mt-2 ", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                      "h4",
                      {
                        className: "text-center",
                        style: { color: "white" },
                        children: "Contact Us"
                      },
                      void 0,
                      false,
                      {
                        fileName: "app/Components/Navbar.jsx",
                        lineNumber: 291,
                        columnNumber: 29
                      },
                      this
                    ) }, void 0, false, {
                      fileName: "app/Components/Navbar.jsx",
                      lineNumber: 290,
                      columnNumber: 27
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                      "p",
                      {
                        className: "mt-2 text-center",
                        style: { color: "white" },
                        children: "Email : care@buildmybody.in"
                      },
                      void 0,
                      false,
                      {
                        fileName: "app/Components/Navbar.jsx",
                        lineNumber: 300,
                        columnNumber: 29
                      },
                      this
                    ) }, void 0, false, {
                      fileName: "app/Components/Navbar.jsx",
                      lineNumber: 299,
                      columnNumber: 27
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                      "p",
                      {
                        className: "mt-1 text-center",
                        style: { color: "white" },
                        children: "Phone Number: +919494979191"
                      },
                      void 0,
                      false,
                      {
                        fileName: "app/Components/Navbar.jsx",
                        lineNumber: 308,
                        columnNumber: 29
                      },
                      this
                    ) }, void 0, false, {
                      fileName: "app/Components/Navbar.jsx",
                      lineNumber: 307,
                      columnNumber: 27
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/Components/Navbar.jsx",
                    lineNumber: 289,
                    columnNumber: 25
                  }, this) }, void 0, false, {
                    fileName: "app/Components/Navbar.jsx",
                    lineNumber: 288,
                    columnNumber: 23
                  }, this) }, void 0, false, {
                    fileName: "app/Components/Navbar.jsx",
                    lineNumber: 287,
                    columnNumber: 21
                  }, this)
                },
                void 0,
                false,
                {
                  fileName: "app/Components/Navbar.jsx",
                  lineNumber: 283,
                  columnNumber: 19
                },
                this
              )
            ]
          },
          index,
          true,
          {
            fileName: "app/Components/Navbar.jsx",
            lineNumber: 88,
            columnNumber: 15
          },
          this
        )) }, void 0, false, {
          fileName: "app/Components/Navbar.jsx",
          lineNumber: 86,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "navbar-nav  d-lg-none d-md-flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "d-flex ", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "icon-search ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/search", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BsSearch, { size: 18 }, void 0, false, {
            fileName: "app/Components/Navbar.jsx",
            lineNumber: 330,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/Components/Navbar.jsx",
            lineNumber: 329,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/Components/Navbar.jsx",
            lineNumber: 328,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/Components/Navbar.jsx",
            lineNumber: 327,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "icon-cart", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/cart", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FiShoppingCart, { size: 18 }, void 0, false, {
            fileName: "app/Components/Navbar.jsx",
            lineNumber: 338,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/Components/Navbar.jsx",
            lineNumber: 337,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/Components/Navbar.jsx",
            lineNumber: 336,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/Components/Navbar.jsx",
            lineNumber: 335,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "icon-cart", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/account", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RiAccountCircleLine, { size: 18 }, void 0, false, {
            fileName: "app/Components/Navbar.jsx",
            lineNumber: 345,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/Components/Navbar.jsx",
            lineNumber: 344,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/Components/Navbar.jsx",
            lineNumber: 343,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/Components/Navbar.jsx",
            lineNumber: 342,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/Components/Navbar.jsx",
          lineNumber: 326,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/Components/Navbar.jsx",
          lineNumber: 325,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/Components/Navbar.jsx",
        lineNumber: 85,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "navbar-nav ml-auto d-md-none d-sm-none d-lg-flex custom-icons", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "d-flex", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "icon-search", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/search", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BsSearch, { size: 18 }, void 0, false, {
          fileName: "app/Components/Navbar.jsx",
          lineNumber: 358,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/Components/Navbar.jsx",
          lineNumber: 357,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/Components/Navbar.jsx",
          lineNumber: 356,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/Components/Navbar.jsx",
          lineNumber: 355,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "icon-cart", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/cart", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FiShoppingCart, { size: 18 }, void 0, false, {
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
        }, this) }, void 0, false, {
          fileName: "app/Components/Navbar.jsx",
          lineNumber: 363,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "icon-cart", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/account", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RiAccountCircleLine, { size: 18 }, void 0, false, {
          fileName: "app/Components/Navbar.jsx",
          lineNumber: 373,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/Components/Navbar.jsx",
          lineNumber: 372,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/Components/Navbar.jsx",
          lineNumber: 371,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/Components/Navbar.jsx",
          lineNumber: 370,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/Components/Navbar.jsx",
        lineNumber: 354,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/Components/Navbar.jsx",
        lineNumber: 353,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/Components/Navbar.jsx",
      lineNumber: 78,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container-fluid", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h6", { className: "text-center font-weight-bolder", style: { paddingTop: "10px", fontSize: "17px" }, children: [
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GiBodyBalance, { size: 30, style: { color: "#ff2828" } }, void 0, false, {
        fileName: "app/Components/Navbar.jsx",
        lineNumber: 382,
        columnNumber: 102
      }, this),
      " Elevate your Fitness Journey with",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: { color: "#ff2828" }, children: "\xA0 BuildMyBody" }, void 0, false, {
        fileName: "app/Components/Navbar.jsx",
        lineNumber: 383,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/Components/Navbar.jsx",
      lineNumber: 382,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/Components/Navbar.jsx",
      lineNumber: 381,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/Components/Navbar.jsx",
    lineNumber: 77,
    columnNumber: 5
  }, this);
};
var Navbar_default = Navbar;

export {
  protien_default,
  Navbar_default
};
//# sourceMappingURL=/build/_shared/chunk-SFU7YTWE.js.map
