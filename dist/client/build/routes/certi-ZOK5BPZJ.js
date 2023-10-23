import {
  Try_default
} from "/build/_shared/chunk-METWPYA5.js";
import {
  data_default
} from "/build/_shared/chunk-QQR23WLR.js";
import "/build/_shared/chunk-AZ5RRHEV.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-4VTZQJYZ.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/certi.jsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Certi = () => {
  const [selectedCategory, setSelectedCategory] = (0, import_react.useState)("Category1");
  const uniqueCategories = [...new Set(data_default.map((item) => item.category))];
  (0, import_react.useEffect)(() => {
    const btn = document.getElementById("certi-btn");
    btn.addEventListener("click", (event) => {
      document.body.style.backgroundColor = "blue";
    });
    return () => {
      btn.removeEventListener("click", onClick);
    };
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "row", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "col-4 d-flex flex-column", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "button",
        {
          onClick: () => setSelectedCategory("Category1"),
          className: "p-2",
          id: "certi-btn",
          style: { background: "black", color: "white", cursor: "pointer" },
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-left", children: "Kar Enterprises" }, void 0, false, {
            fileName: "app/routes/certi.jsx",
            lineNumber: 40,
            columnNumber: 15
          }, this)
        },
        void 0,
        false,
        {
          fileName: "app/routes/certi.jsx",
          lineNumber: 34,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "button",
        {
          onClick: () => setSelectedCategory("Category2"),
          className: "p-2",
          style: { background: "black", color: "white", cursor: "pointer" },
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-left", children: "MusclePro Nutrition(MPN)" }, void 0, false, {
            fileName: "app/routes/certi.jsx",
            lineNumber: 47,
            columnNumber: 15
          }, this)
        },
        void 0,
        false,
        {
          fileName: "app/routes/certi.jsx",
          lineNumber: 42,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "button",
        {
          onClick: () => setSelectedCategory("Category3"),
          className: "p-2",
          style: { background: "black", color: "white", cursor: "pointer" },
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-left", children: "Bright Comodities" }, void 0, false, {
            fileName: "app/routes/certi.jsx",
            lineNumber: 54,
            columnNumber: 15
          }, this)
        },
        void 0,
        false,
        {
          fileName: "app/routes/certi.jsx",
          lineNumber: 49,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "button",
        {
          onClick: () => setSelectedCategory("Category4"),
          className: "p-2",
          style: { background: "black", color: "white", cursor: "pointer" },
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-left", children: "Pearl International" }, void 0, false, {
            fileName: "app/routes/certi.jsx",
            lineNumber: 61,
            columnNumber: 15
          }, this)
        },
        void 0,
        false,
        {
          fileName: "app/routes/certi.jsx",
          lineNumber: 56,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "button",
        {
          onClick: () => setSelectedCategory("Category5"),
          className: "p-2",
          style: { background: "black", color: "white", cursor: "pointer" },
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-left", children: "ARC Distributors" }, void 0, false, {
            fileName: "app/routes/certi.jsx",
            lineNumber: 68,
            columnNumber: 15
          }, this)
        },
        void 0,
        false,
        {
          fileName: "app/routes/certi.jsx",
          lineNumber: 63,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "button",
        {
          onClick: () => setSelectedCategory("Category6"),
          className: "p-2",
          style: { background: "black", color: "white", cursor: "pointer" },
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-left", children: "Shree Balaji Overseas" }, void 0, false, {
            fileName: "app/routes/certi.jsx",
            lineNumber: 75,
            columnNumber: 15
          }, this)
        },
        void 0,
        false,
        {
          fileName: "app/routes/certi.jsx",
          lineNumber: 70,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "button",
        {
          onClick: () => setSelectedCategory("Category7"),
          className: "p-2",
          style: { background: "black", color: "white", cursor: "pointer" },
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-left", children: "Paradise Nutrition" }, void 0, false, {
            fileName: "app/routes/certi.jsx",
            lineNumber: 82,
            columnNumber: 15
          }, this)
        },
        void 0,
        false,
        {
          fileName: "app/routes/certi.jsx",
          lineNumber: 77,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "button",
        {
          onClick: () => setSelectedCategory("Category8"),
          className: "p-2",
          style: { background: "black", color: "white", cursor: "pointer" },
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-left", children: "Unlimited Nutrition" }, void 0, false, {
            fileName: "app/routes/certi.jsx",
            lineNumber: 89,
            columnNumber: 15
          }, this)
        },
        void 0,
        false,
        {
          fileName: "app/routes/certi.jsx",
          lineNumber: 84,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "button",
        {
          onClick: () => setSelectedCategory("Category9"),
          className: "p-2",
          style: { background: "black", color: "white", cursor: "pointer" },
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-left", children: "Musclehouse" }, void 0, false, {
            fileName: "app/routes/certi.jsx",
            lineNumber: 96,
            columnNumber: 15
          }, this)
        },
        void 0,
        false,
        {
          fileName: "app/routes/certi.jsx",
          lineNumber: 91,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "button",
        {
          onClick: () => setSelectedCategory("Category10"),
          className: "p-2",
          style: { background: "black", color: "white", cursor: "pointer" },
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-left", children: "Molecule Hub" }, void 0, false, {
            fileName: "app/routes/certi.jsx",
            lineNumber: 103,
            columnNumber: 15
          }, this)
        },
        void 0,
        false,
        {
          fileName: "app/routes/certi.jsx",
          lineNumber: 98,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "button",
        {
          onClick: () => setSelectedCategory("Category11"),
          className: "p-2",
          style: { background: "black", color: "white", cursor: "pointer" },
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-left", children: "SSNC" }, void 0, false, {
            fileName: "app/routes/certi.jsx",
            lineNumber: 110,
            columnNumber: 15
          }, this)
        },
        void 0,
        false,
        {
          fileName: "app/routes/certi.jsx",
          lineNumber: 105,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "button",
        {
          onClick: () => setSelectedCategory("Category12"),
          className: "p-2",
          style: { background: "black", color: "white", cursor: "pointer" },
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-left", children: "AM Lifestyle" }, void 0, false, {
            fileName: "app/routes/certi.jsx",
            lineNumber: 117,
            columnNumber: 15
          }, this)
        },
        void 0,
        false,
        {
          fileName: "app/routes/certi.jsx",
          lineNumber: 112,
          columnNumber: 13
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/routes/certi.jsx",
      lineNumber: 32,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "col", children: data_default.filter(
      (item) => selectedCategory === "All" || item.category === selectedCategory
    ).map((item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      Try_default,
      {
        img: item.img,
        email: item.email,
        aboutUs: item.aboutUs,
        website: item.website,
        phone: item.phone
      },
      index,
      false,
      {
        fileName: "app/routes/certi.jsx",
        lineNumber: 128,
        columnNumber: 17
      },
      this
    )) }, void 0, false, {
      fileName: "app/routes/certi.jsx",
      lineNumber: 120,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/certi.jsx",
    lineNumber: 31,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/certi.jsx",
    lineNumber: 30,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/certi.jsx",
    lineNumber: 29,
    columnNumber: 5
  }, this);
};
var certi_default = Certi;
export {
  certi_default as default
};
//# sourceMappingURL=/build/routes/certi-ZOK5BPZJ.js.map
