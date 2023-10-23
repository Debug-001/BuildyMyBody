import {
  Footer_default
} from "/build/_shared/chunk-XOI35JXB.js";
import {
  Navbar_default
} from "/build/_shared/chunk-SFU7YTWE.js";
import "/build/_shared/chunk-K4GQNGL6.js";
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "get", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "input",
      {
        defaultValue: searchTerm,
        name: "q",
        placeholder: "Search\u2026",
        ref: inputRef,
        type: "search"
      },
      void 0,
      false,
      {
        fileName: "app/Components/Search.jsx",
        lineNumber: 38,
        columnNumber: 7
      },
      this
    ),
    "\xA0",
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", children: "Search" }, void 0, false, {
      fileName: "app/Components/Search.jsx",
      lineNumber: 46,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/Components/Search.jsx",
    lineNumber: 37,
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
        lineNumber: 65,
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
          lineNumber: 72,
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
          lineNumber: 82,
          columnNumber: 15
        },
        this
      ) : null;
    }
    return null;
  }) }, void 0, false, {
    fileName: "app/Components/Search.jsx",
    lineNumber: 57,
    columnNumber: 5
  }, this);
}
function SearchResultsProductsGrid({ products }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "search-result", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: "Products" }, void 0, false, {
      fileName: "app/Components/Search.jsx",
      lineNumber: 98,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(At, { connection: products, children: ({ nodes, isLoading, NextLink, PreviousLink }) => {
      const itemsMarkup = nodes.map((product) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "search-results-item", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { prefetch: "intent", to: `/products/${product.handle}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: product.title }, void 0, false, {
        fileName: "app/Components/Search.jsx",
        lineNumber: 104,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/Components/Search.jsx",
        lineNumber: 103,
        columnNumber: 15
      }, this) }, product.id, false, {
        fileName: "app/Components/Search.jsx",
        lineNumber: 102,
        columnNumber: 13
      }, this));
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PreviousLink, { children: isLoading ? "Loading..." : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "\u2191 Load previous" }, void 0, false, {
          fileName: "app/Components/Search.jsx",
          lineNumber: 112,
          columnNumber: 47
        }, this) }, void 0, false, {
          fileName: "app/Components/Search.jsx",
          lineNumber: 111,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/Components/Search.jsx",
          lineNumber: 110,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          itemsMarkup,
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
            fileName: "app/Components/Search.jsx",
            lineNumber: 117,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/Components/Search.jsx",
          lineNumber: 115,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NextLink, { children: isLoading ? "Loading..." : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Load more \u2193" }, void 0, false, {
          fileName: "app/Components/Search.jsx",
          lineNumber: 121,
          columnNumber: 47
        }, this) }, void 0, false, {
          fileName: "app/Components/Search.jsx",
          lineNumber: 120,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/Components/Search.jsx",
          lineNumber: 119,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/Components/Search.jsx",
        lineNumber: 109,
        columnNumber: 13
      }, this);
    } }, void 0, false, {
      fileName: "app/Components/Search.jsx",
      lineNumber: 99,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/Components/Search.jsx",
      lineNumber: 128,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/Components/Search.jsx",
    lineNumber: 97,
    columnNumber: 5
  }, this);
}
function SearchResultPageGrid({ pages }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "search-result", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "Pages" }, void 0, false, {
      fileName: "app/Components/Search.jsx",
      lineNumber: 136,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: pages?.nodes?.map((page) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "search-results-item", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { prefetch: "intent", to: `/pages/${page.handle}`, children: page.title }, void 0, false, {
      fileName: "app/Components/Search.jsx",
      lineNumber: 140,
      columnNumber: 13
    }, this) }, page.id, false, {
      fileName: "app/Components/Search.jsx",
      lineNumber: 139,
      columnNumber: 11
    }, this)) }, void 0, false, {
      fileName: "app/Components/Search.jsx",
      lineNumber: 137,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/Components/Search.jsx",
      lineNumber: 146,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/Components/Search.jsx",
    lineNumber: 135,
    columnNumber: 5
  }, this);
}
function SearchResultArticleGrid({ articles }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "search-result", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "Articles" }, void 0, false, {
      fileName: "app/Components/Search.jsx",
      lineNumber: 154,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: articles?.nodes?.map((article) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "search-results-item", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { prefetch: "intent", to: `/blog/${article.handle}`, children: article.title }, void 0, false, {
      fileName: "app/Components/Search.jsx",
      lineNumber: 158,
      columnNumber: 13
    }, this) }, article.id, false, {
      fileName: "app/Components/Search.jsx",
      lineNumber: 157,
      columnNumber: 11
    }, this)) }, void 0, false, {
      fileName: "app/Components/Search.jsx",
      lineNumber: 155,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/Components/Search.jsx",
      lineNumber: 164,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/Components/Search.jsx",
    lineNumber: 153,
    columnNumber: 5
  }, this);
}
function NoSearchResults() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "No results, try a different search." }, void 0, false, {
    fileName: "app/Components/Search.jsx",
    lineNumber: 170,
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "search", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Navbar_default, {}, void 0, false, {
      fileName: "app/routes/search.jsx",
      lineNumber: 53,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { children: "Search" }, void 0, false, {
      fileName: "app/routes/search.jsx",
      lineNumber: 54,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SearchForm, { searchTerm }, void 0, false, {
      fileName: "app/routes/search.jsx",
      lineNumber: 55,
      columnNumber: 7
    }, this),
    !searchTerm || !searchResults.totalResults ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(NoSearchResults, {}, void 0, false, {
      fileName: "app/routes/search.jsx",
      lineNumber: 57,
      columnNumber: 9
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SearchResults, { results: searchResults.results }, void 0, false, {
      fileName: "app/routes/search.jsx",
      lineNumber: 59,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Footer_default, {}, void 0, false, {
      fileName: "app/routes/search.jsx",
      lineNumber: 61,
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
//# sourceMappingURL=/build/routes/search-R6HXUS3T.js.map
