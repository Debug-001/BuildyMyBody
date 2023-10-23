import {
  BiCategoryAlt
} from "/build/_shared/chunk-CJOFJLOH.js";
import {
  BsSearch,
  FiShoppingCart
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

// app/routes/filter.jsx
var import_react = __toESM(require_react());

// dist/client/img/protien2.png
var protien2_default = "/build/_assets/protien2-BAWQNU37.png";

// app/routes/filter.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Filter = () => {
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: "navbar navbar-expand-lg navbar-light ", style: { background: "black" }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { className: "navbar-brand ml-lg-4", to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { className: "logo_img w-75", src: "/img/logo.png", alt: "" }, void 0, false, {
        fileName: "app/routes/filter.jsx",
        lineNumber: 33,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/filter.jsx",
        lineNumber: 32,
        columnNumber: 17
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
              fileName: "app/routes/filter.jsx",
              lineNumber: 46,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "bar" }, void 0, false, {
              fileName: "app/routes/filter.jsx",
              lineNumber: 47,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "bar" }, void 0, false, {
              fileName: "app/routes/filter.jsx",
              lineNumber: 48,
              columnNumber: 25
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/filter.jsx",
            lineNumber: 45,
            columnNumber: 21
          }, this)
        },
        void 0,
        false,
        {
          fileName: "app/routes/filter.jsx",
          lineNumber: 35,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `collapse navbar-collapse ${isNavbarCollapsed ? "show" : ""}`, id: "navbarNav", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "navbar-nav ml-auto mr-auto", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { class: "dropdown show", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { class: "btn btn-secondary dropdown-toggle", href: "#", role: "button", id: "dropdownMenuLink", "data-toggle": "dropdown", "aria-haspopup": "true", "aria-expanded": "false", children: "Dropdown link" }, void 0, false, {
              fileName: "app/routes/filter.jsx",
              lineNumber: 54,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { class: "dropdown-menu drop-custom", "aria-labelledby": "dropdownMenuLink", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "row", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "col d-flex", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "  ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "d-flex flex-column align-items-center", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BiCategoryAlt, {}, void 0, false, {
                    fileName: "app/routes/filter.jsx",
                    lineNumber: 63,
                    columnNumber: 49
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "hello" }, void 0, false, {
                    fileName: "app/routes/filter.jsx",
                    lineNumber: 64,
                    columnNumber: 49
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/filter.jsx",
                  lineNumber: 62,
                  columnNumber: 45
                }, this) }, void 0, false, {
                  fileName: "app/routes/filter.jsx",
                  lineNumber: 61,
                  columnNumber: 41
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "  ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "d-flex flex-column align-items-center", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: protien2_default, alt: "", style: { width: "5rem" } }, void 0, false, {
                    fileName: "app/routes/filter.jsx",
                    lineNumber: 69,
                    columnNumber: 49
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "hello" }, void 0, false, {
                    fileName: "app/routes/filter.jsx",
                    lineNumber: 70,
                    columnNumber: 49
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/filter.jsx",
                  lineNumber: 68,
                  columnNumber: 45
                }, this) }, void 0, false, {
                  fileName: "app/routes/filter.jsx",
                  lineNumber: 67,
                  columnNumber: 41
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "  ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "d-flex flex-column align-items-center", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: protien2_default, alt: "", style: { width: "5rem" } }, void 0, false, {
                    fileName: "app/routes/filter.jsx",
                    lineNumber: 75,
                    columnNumber: 49
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "hello" }, void 0, false, {
                    fileName: "app/routes/filter.jsx",
                    lineNumber: 76,
                    columnNumber: 49
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/filter.jsx",
                  lineNumber: 74,
                  columnNumber: 45
                }, this) }, void 0, false, {
                  fileName: "app/routes/filter.jsx",
                  lineNumber: 73,
                  columnNumber: 41
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/filter.jsx",
                lineNumber: 60,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "col d-flex", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "  ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "d-flex flex-column align-items-center", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: protien2_default, alt: "", style: { width: "5rem" } }, void 0, false, {
                    fileName: "app/routes/filter.jsx",
                    lineNumber: 85,
                    columnNumber: 49
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "hello" }, void 0, false, {
                    fileName: "app/routes/filter.jsx",
                    lineNumber: 86,
                    columnNumber: 49
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/filter.jsx",
                  lineNumber: 84,
                  columnNumber: 45
                }, this) }, void 0, false, {
                  fileName: "app/routes/filter.jsx",
                  lineNumber: 83,
                  columnNumber: 41
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "  ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "d-flex flex-column align-items-center", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: protien2_default, alt: "", style: { width: "5rem" } }, void 0, false, {
                    fileName: "app/routes/filter.jsx",
                    lineNumber: 91,
                    columnNumber: 49
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "hello" }, void 0, false, {
                    fileName: "app/routes/filter.jsx",
                    lineNumber: 92,
                    columnNumber: 49
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/filter.jsx",
                  lineNumber: 90,
                  columnNumber: 45
                }, this) }, void 0, false, {
                  fileName: "app/routes/filter.jsx",
                  lineNumber: 89,
                  columnNumber: 41
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/filter.jsx",
                lineNumber: 82,
                columnNumber: 37
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/filter.jsx",
              lineNumber: 59,
              columnNumber: 33
            }, this) }, void 0, false, {
              fileName: "app/routes/filter.jsx",
              lineNumber: 58,
              columnNumber: 29
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/filter.jsx",
            lineNumber: 53,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "nav-item", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            NavLink,
            {
              className: `nav-link cus-1 text-light ${selectedCategory === "Protein" ? "active" : ""}`,
              to: "#",
              onClick: () => handleFeaturesClick("Protein"),
              children: "All Products"
            },
            void 0,
            false,
            {
              fileName: "app/routes/filter.jsx",
              lineNumber: 108,
              columnNumber: 29
            },
            this
          ) }, void 0, false, {
            fileName: "app/routes/filter.jsx",
            lineNumber: 107,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "nav-item", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { className: "nav-link active text-light", to: "/blog", children: "Blog" }, void 0, false, {
            fileName: "app/routes/filter.jsx",
            lineNumber: 117,
            columnNumber: 29
          }, this) }, void 0, false, {
            fileName: "app/routes/filter.jsx",
            lineNumber: 116,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "nav-item", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { className: "nav-link active text-light", to: "/contact", children: "Contact Us" }, void 0, false, {
            fileName: "app/routes/filter.jsx",
            lineNumber: 120,
            columnNumber: 29
          }, this) }, void 0, false, {
            fileName: "app/routes/filter.jsx",
            lineNumber: 119,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "nav-item", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { className: "nav-link active text-light", to: "/certificates", children: "Certifications" }, void 0, false, {
            fileName: "app/routes/filter.jsx",
            lineNumber: 123,
            columnNumber: 29
          }, this) }, void 0, false, {
            fileName: "app/routes/filter.jsx",
            lineNumber: 122,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "nav-item", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { className: "nav-link active text-light", to: "/authenticity", children: "Authenticity" }, void 0, false, {
            fileName: "app/routes/filter.jsx",
            lineNumber: 126,
            columnNumber: 29
          }, this) }, void 0, false, {
            fileName: "app/routes/filter.jsx",
            lineNumber: 125,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "nav-item", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { className: "nav-link active text-light", to: "/filter", children: "Filter" }, void 0, false, {
            fileName: "app/routes/filter.jsx",
            lineNumber: 129,
            columnNumber: 29
          }, this) }, void 0, false, {
            fileName: "app/routes/filter.jsx",
            lineNumber: 128,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/filter.jsx",
          lineNumber: 52,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "navbar-nav  ml-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "d-flex ", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "icon-search ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/search", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BsSearch, { size: 18 }, void 0, false, {
            fileName: "app/routes/filter.jsx",
            lineNumber: 138,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/filter.jsx",
            lineNumber: 137,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/filter.jsx",
            lineNumber: 136,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "app/routes/filter.jsx",
            lineNumber: 135,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "icon-cart ml-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/cart", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FiShoppingCart, { size: 18 }, void 0, false, {
            fileName: "app/routes/filter.jsx",
            lineNumber: 146,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/filter.jsx",
            lineNumber: 145,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/filter.jsx",
            lineNumber: 144,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "app/routes/filter.jsx",
            lineNumber: 143,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "icon-cart ml-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/account", className: "border border-light p-2", children: "Account" }, void 0, false, {
            fileName: "app/routes/filter.jsx",
            lineNumber: 152,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/filter.jsx",
            lineNumber: 151,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "app/routes/filter.jsx",
            lineNumber: 150,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/filter.jsx",
          lineNumber: 134,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/routes/filter.jsx",
          lineNumber: 133,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/filter.jsx",
        lineNumber: 51,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/filter.jsx",
      lineNumber: 31,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container-fluid", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `row cus ${selectedCategory ? "show" : ""}`, id: "features-column", onMouseLeave: handleSubMenuLeave, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "col-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "p",
          {
            onClick: () => handleFeaturesClick("Protein"),
            style: {
              fontSize: "1.6rem",
              cursor: "pointer",
              fontWeight: selectedCategory === "Protein" ? "bold" : "normal"
              // Conditional fontWeight
            },
            className: `filter-hover ${selectedCategory === "Protein" ? "active" : ""}`,
            children: "Protein"
          },
          void 0,
          false,
          {
            fileName: "app/routes/filter.jsx",
            lineNumber: 164,
            columnNumber: 25
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { onClick: () => handleFeaturesClick("Gainers"), style: { fontSize: "1.6rem", cursor: "pointer" }, className: "mt-3 filter-hover", children: "Gainers" }, void 0, false, {
          fileName: "app/routes/filter.jsx",
          lineNumber: 175,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { onClick: () => handleFeaturesClick("PrePostWorkout"), style: { fontSize: "1.6rem", cursor: "pointer" }, className: "mt-3 filter-hover", children: "Pre/Post Workout" }, void 0, false, {
          fileName: "app/routes/filter.jsx",
          lineNumber: 176,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { onClick: () => handleFeaturesClick("WorkoutEssentials"), style: { fontSize: "1.6rem", cursor: "pointer" }, className: "mt-3 filter-hover", children: "Workout Essentials" }, void 0, false, {
          fileName: "app/routes/filter.jsx",
          lineNumber: 177,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "category-btn btn w-100 mt-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/products/all", children: "Shop All" }, void 0, false, {
          fileName: "app/routes/filter.jsx",
          lineNumber: 179,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/filter.jsx",
          lineNumber: 178,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/filter.jsx",
        lineNumber: 163,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "vl-2" }, void 0, false, {
        fileName: "app/routes/filter.jsx",
        lineNumber: 182,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "col filter-size submenuuuu", children: [
        selectedCategory === "Protein" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "content row", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "col-lg-6 col-md-12", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "ml-5", children: "Whey Protein" }, void 0, false, {
              fileName: "app/routes/filter.jsx",
              lineNumber: 188,
              columnNumber: 41
            }, this) }, void 0, false, {
              fileName: "app/routes/filter.jsx",
              lineNumber: 187,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "ml-5", children: "Whey Blend" }, void 0, false, {
              fileName: "app/routes/filter.jsx",
              lineNumber: 191,
              columnNumber: 41
            }, this) }, void 0, false, {
              fileName: "app/routes/filter.jsx",
              lineNumber: 190,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "ml-5", children: "Whey Protein Isolate" }, void 0, false, {
              fileName: "app/routes/filter.jsx",
              lineNumber: 194,
              columnNumber: 41
            }, this) }, void 0, false, {
              fileName: "app/routes/filter.jsx",
              lineNumber: 193,
              columnNumber: 37
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/filter.jsx",
            lineNumber: 186,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "col-lg-6 col-md-12", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: Protein, className: "w-50", alt: "" }, void 0, false, {
            fileName: "app/routes/filter.jsx",
            lineNumber: 198,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/filter.jsx",
            lineNumber: 197,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/filter.jsx",
          lineNumber: 185,
          columnNumber: 29
        }, this),
        selectedCategory === "Gainers" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "content row", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "col-lg-6 col-md-12", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "p",
              {
                className: "ml-5",
                children: "Mass Gainer"
              },
              void 0,
              false,
              {
                fileName: "app/routes/filter.jsx",
                lineNumber: 206,
                columnNumber: 41
              },
              this
            ) }, void 0, false, {
              fileName: "app/routes/filter.jsx",
              lineNumber: 205,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "p",
              {
                className: "ml-5",
                children: "Weight Gainer"
              },
              void 0,
              false,
              {
                fileName: "app/routes/filter.jsx",
                lineNumber: 214,
                columnNumber: 41
              },
              this
            ) }, void 0, false, {
              fileName: "app/routes/filter.jsx",
              lineNumber: 213,
              columnNumber: 37
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/filter.jsx",
            lineNumber: 204,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "col-lg-6 col-md-12", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: Protein, className: "w-50", alt: "" }, void 0, false, {
            fileName: "app/routes/filter.jsx",
            lineNumber: 225,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/filter.jsx",
            lineNumber: 223,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/filter.jsx",
          lineNumber: 203,
          columnNumber: 29
        }, this),
        selectedCategory === "PrePostWorkout" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "content row", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "col-lg-6 col-md-12", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "p",
              {
                className: "ml-5",
                children: "Pre-Workout Pre-Workout"
              },
              void 0,
              false,
              {
                fileName: "app/routes/filter.jsx",
                lineNumber: 235,
                columnNumber: 41
              },
              this
            ) }, void 0, false, {
              fileName: "app/routes/filter.jsx",
              lineNumber: 234,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "p",
              {
                className: "ml-5",
                children: "Amino Acids && BCAAs"
              },
              void 0,
              false,
              {
                fileName: "app/routes/filter.jsx",
                lineNumber: 243,
                columnNumber: 41
              },
              this
            ) }, void 0, false, {
              fileName: "app/routes/filter.jsx",
              lineNumber: 242,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "p",
              {
                className: "ml-5",
                children: "Glutamine"
              },
              void 0,
              false,
              {
                fileName: "app/routes/filter.jsx",
                lineNumber: 251,
                columnNumber: 41
              },
              this
            ) }, void 0, false, {
              fileName: "app/routes/filter.jsx",
              lineNumber: 250,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "p",
              {
                className: "ml-5",
                children: "Carnitine"
              },
              void 0,
              false,
              {
                fileName: "app/routes/filter.jsx",
                lineNumber: 259,
                columnNumber: 41
              },
              this
            ) }, void 0, false, {
              fileName: "app/routes/filter.jsx",
              lineNumber: 258,
              columnNumber: 37
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/filter.jsx",
            lineNumber: 233,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "col-lg-6 col-md-12", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: Protein, className: "w-50", alt: "" }, void 0, false, {
            fileName: "app/routes/filter.jsx",
            lineNumber: 270,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/filter.jsx",
            lineNumber: 268,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/filter.jsx",
          lineNumber: 232,
          columnNumber: 29
        }, this),
        selectedCategory === "WorkoutEssentials" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "content row", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "col-lg-6 col-md-12", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "p",
              {
                className: "ml-5",
                children: "Testosterone Support"
              },
              void 0,
              false,
              {
                fileName: "app/routes/filter.jsx",
                lineNumber: 280,
                columnNumber: 41
              },
              this
            ) }, void 0, false, {
              fileName: "app/routes/filter.jsx",
              lineNumber: 279,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "p",
              {
                className: "ml-5",
                children: "Multivitamins"
              },
              void 0,
              false,
              {
                fileName: "app/routes/filter.jsx",
                lineNumber: 288,
                columnNumber: 41
              },
              this
            ) }, void 0, false, {
              fileName: "app/routes/filter.jsx",
              lineNumber: 287,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "p",
              {
                className: "ml-5",
                children: "Fat Burner"
              },
              void 0,
              false,
              {
                fileName: "app/routes/filter.jsx",
                lineNumber: 296,
                columnNumber: 41
              },
              this
            ) }, void 0, false, {
              fileName: "app/routes/filter.jsx",
              lineNumber: 295,
              columnNumber: 37
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/filter.jsx",
            lineNumber: 278,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "col-lg-6 col-md-12", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: Protein, className: "w-50", alt: "" }, void 0, false, {
            fileName: "app/routes/filter.jsx",
            lineNumber: 307,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/filter.jsx",
            lineNumber: 305,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/filter.jsx",
          lineNumber: 277,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/filter.jsx",
        lineNumber: 183,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/filter.jsx",
      lineNumber: 162,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/filter.jsx",
      lineNumber: 161,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/filter.jsx",
    lineNumber: 30,
    columnNumber: 9
  }, this);
};
var filter_default = Filter;
export {
  filter_default as default
};
//# sourceMappingURL=/build/routes/filter-ZDZX5XGK.js.map
