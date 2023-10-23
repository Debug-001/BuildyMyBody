import {
  ProductCard
} from "/build/_shared/chunk-JTXMU6CP.js";
import "/build/_shared/chunk-72EPCV5I.js";
import {
  Footer_default
} from "/build/_shared/chunk-UYY7B6H7.js";
import {
  Navbar_default
} from "/build/_shared/chunk-Z2C7QERV.js";
import "/build/_shared/chunk-ILUR2CXR.js";
import {
  At
} from "/build/_shared/chunk-VAI2PXO3.js";
import {
  Form,
  Link,
  useLoaderData
} from "/build/_shared/chunk-3DYM7AG2.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-4VTZQJYZ.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/Components/Search.jsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function SearchForm({ searchTerm }) {
  const inputRef = (0, import_react2.useRef)(null);
  (0, import_react2.useEffect)(() => {
    function handleKeyDown(event) {
      if (event.key === "k" && event.metaKey) {
        event.preventDefault();
        inputRef.current?.focus();
      }
      if (event.key === "Escape") {
        inputRef.current?.blur();
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "get", className: "d-flex justify-content-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "input",
      {
        defaultValue: searchTerm,
        name: "q",
        placeholder: "Search\u2026",
        ref: inputRef,
        type: "search",
        className: "search-box"
      },
      void 0,
      false,
      {
        fileName: "app/Components/Search.jsx",
        lineNumber: 40,
        columnNumber: 7
      },
      this
    ),
    "\xA0",
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "btn shop-nav-btn ", children: "Search" }, void 0, false, {
      fileName: "app/Components/Search.jsx",
      lineNumber: 49,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/Components/Search.jsx",
    lineNumber: 39,
    columnNumber: 5
  }, this);
}
function SearchResults({ results }) {
  if (!results) {
    return null;
  }
  const keys = Object.keys(results);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: results && keys.map((type) => {
    const resourceResults = results[type];
    if (resourceResults.nodes[0]?.__typename === "Page") {
      const pageResults = resourceResults;
      return resourceResults.nodes.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SearchResultPageGrid, { pages: pageResults }, "pages", false, {
        fileName: "app/Components/Search.jsx",
        lineNumber: 70,
        columnNumber: 15
      }, this) : null;
    }
    if (resourceResults.nodes[0]?.__typename === "Product") {
      const productResults = resourceResults;
      return resourceResults.nodes.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        SearchResultsProductsGrid,
        {
          products: productResults
        },
        "products",
        false,
        {
          fileName: "app/Components/Search.jsx",
          lineNumber: 77,
          columnNumber: 15
        },
        this
      ) : null;
    }
    if (resourceResults.nodes[0]?.__typename === "Article") {
      const articleResults = resourceResults;
      return resourceResults.nodes.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        SearchResultArticleGrid,
        {
          articles: articleResults
        },
        "articles",
        false,
        {
          fileName: "app/Components/Search.jsx",
          lineNumber: 87,
          columnNumber: 15
        },
        this
      ) : null;
    }
    return null;
  }) }, void 0, false, {
    fileName: "app/Components/Search.jsx",
    lineNumber: 62,
    columnNumber: 5
  }, this);
}
function SearchResultsProductsGrid({ products }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "search-result", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: "Products" }, void 0, false, {
      fileName: "app/Components/Search.jsx",
      lineNumber: 103,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(At, { connection: products, children: ({ nodes, isLoading, NextLink, PreviousLink }) => {
      const itemsMarkup = nodes.map((product) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProductCard, { product }, product.title, false, {
        fileName: "app/Components/Search.jsx",
        lineNumber: 107,
        columnNumber: 13
      }, this));
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PreviousLink, { children: isLoading ? "Loading..." : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "\u2191 Load previous" }, void 0, false, {
          fileName: "app/Components/Search.jsx",
          lineNumber: 113,
          columnNumber: 47
        }, this) }, void 0, false, {
          fileName: "app/Components/Search.jsx",
          lineNumber: 112,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/Components/Search.jsx",
          lineNumber: 111,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          itemsMarkup,
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
            fileName: "app/Components/Search.jsx",
            lineNumber: 118,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/Components/Search.jsx",
          lineNumber: 116,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NextLink, { children: isLoading ? "Loading..." : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Load more \u2193" }, void 0, false, {
          fileName: "app/Components/Search.jsx",
          lineNumber: 122,
          columnNumber: 47
        }, this) }, void 0, false, {
          fileName: "app/Components/Search.jsx",
          lineNumber: 121,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/Components/Search.jsx",
          lineNumber: 120,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/Components/Search.jsx",
        lineNumber: 110,
        columnNumber: 13
      }, this);
    } }, void 0, false, {
      fileName: "app/Components/Search.jsx",
      lineNumber: 104,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/Components/Search.jsx",
      lineNumber: 129,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/Components/Search.jsx",
    lineNumber: 102,
    columnNumber: 5
  }, this);
}
function SearchResultPageGrid({ pages }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "search-result", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "Pages" }, void 0, false, {
      fileName: "app/Components/Search.jsx",
      lineNumber: 137,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: pages?.nodes?.map((page) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "search-results-item", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { prefetch: "intent", to: `/pages/${page.handle}`, children: page.title }, void 0, false, {
      fileName: "app/Components/Search.jsx",
      lineNumber: 141,
      columnNumber: 13
    }, this) }, page.id, false, {
      fileName: "app/Components/Search.jsx",
      lineNumber: 140,
      columnNumber: 11
    }, this)) }, void 0, false, {
      fileName: "app/Components/Search.jsx",
      lineNumber: 138,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/Components/Search.jsx",
      lineNumber: 147,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/Components/Search.jsx",
    lineNumber: 136,
    columnNumber: 5
  }, this);
}
function SearchResultArticleGrid({ articles }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "search-result", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "Articles" }, void 0, false, {
      fileName: "app/Components/Search.jsx",
      lineNumber: 155,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: articles?.nodes?.map((article) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "search-results-item", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { prefetch: "intent", to: `/blog/${article.handle}`, children: article.title }, void 0, false, {
      fileName: "app/Components/Search.jsx",
      lineNumber: 159,
      columnNumber: 13
    }, this) }, article.id, false, {
      fileName: "app/Components/Search.jsx",
      lineNumber: 158,
      columnNumber: 11
    }, this)) }, void 0, false, {
      fileName: "app/Components/Search.jsx",
      lineNumber: 156,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/Components/Search.jsx",
      lineNumber: 165,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/Components/Search.jsx",
    lineNumber: 154,
    columnNumber: 5
  }, this);
}
function NoSearchResults() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "No results, try a different search." }, void 0, false, {
    fileName: "app/Components/Search.jsx",
    lineNumber: 171,
    columnNumber: 10
  }, this);
}

// app/routes/search.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var meta = () => {
  return [{ title: `Hydrogen | Search` }];
};
function SearchPage() {
  const { searchTerm, searchResults } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Navbar_default, {}, void 0, false, {
      fileName: "app/routes/search.jsx",
      lineNumber: 53,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "search", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "text-center", children: "Search" }, void 0, false, {
        fileName: "app/routes/search.jsx",
        lineNumber: 55,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SearchForm, { searchTerm }, void 0, false, {
        fileName: "app/routes/search.jsx",
        lineNumber: 56,
        columnNumber: 9
      }, this),
      !searchTerm || !searchResults.totalResults ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: !searchTerm ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "", children: "Search from our wide range of products" }, void 0, false, {
        fileName: "app/routes/search.jsx",
        lineNumber: 60,
        columnNumber: 15
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(NoSearchResults, {}, void 0, false, {
        fileName: "app/routes/search.jsx",
        lineNumber: 62,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/search.jsx",
        lineNumber: 58,
        columnNumber: 11
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SearchResults, { results: searchResults.results }, void 0, false, {
        fileName: "app/routes/search.jsx",
        lineNumber: 66,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/search.jsx",
      lineNumber: 54,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Footer_default, {}, void 0, false, {
      fileName: "app/routes/search.jsx",
      lineNumber: 69,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/search.jsx",
    lineNumber: 52,
    columnNumber: 5
  }, this);
}
export {
  SearchPage as default,
  meta
};
//# sourceMappingURL=/build/routes/search-WWQ45YWM.js.map
