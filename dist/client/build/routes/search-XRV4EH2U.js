import {
  ProductCard
} from "/build/_shared/chunk-BVOQMUFD.js";
import "/build/_shared/chunk-RNFRYLZS.js";
import {
  Footer_default
} from "/build/_shared/chunk-HV6WZVQ3.js";
import {
  Navbar_default
} from "/build/_shared/chunk-SSJQVUWG.js";
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
        className: "search-box w-50"
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container-fluid", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "search-result", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-center mt-3", children: "Products" }, void 0, false, {
      fileName: "app/Components/Search.jsx",
      lineNumber: 104,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(At, { connection: products, children: ({ nodes, isLoading, NextLink, PreviousLink }) => {
      const itemsMarkup = nodes.map((product) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "col-12 col-lg-4 col-md-6 col-sm-12", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProductCard, { product }, void 0, false, {
        fileName: "app/Components/Search.jsx",
        lineNumber: 109,
        columnNumber: 17
      }, this) }, product.title, false, {
        fileName: "app/Components/Search.jsx",
        lineNumber: 108,
        columnNumber: 15
      }, this));
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PreviousLink, { children: isLoading ? "Loading..." : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "\u2191 Load previous" }, void 0, false, {
          fileName: "app/Components/Search.jsx",
          lineNumber: 117,
          columnNumber: 49
        }, this) }, void 0, false, {
          fileName: "app/Components/Search.jsx",
          lineNumber: 116,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/Components/Search.jsx",
          lineNumber: 115,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "row", children: itemsMarkup }, void 0, false, {
          fileName: "app/Components/Search.jsx",
          lineNumber: 120,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NextLink, { children: isLoading ? "Loading..." : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Load more \u2193" }, void 0, false, {
          fileName: "app/Components/Search.jsx",
          lineNumber: 125,
          columnNumber: 49
        }, this) }, void 0, false, {
          fileName: "app/Components/Search.jsx",
          lineNumber: 124,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/Components/Search.jsx",
          lineNumber: 123,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/Components/Search.jsx",
        lineNumber: 114,
        columnNumber: 15
      }, this);
    } }, void 0, false, {
      fileName: "app/Components/Search.jsx",
      lineNumber: 105,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/Components/Search.jsx",
      lineNumber: 132,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/Components/Search.jsx",
    lineNumber: 103,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/Components/Search.jsx",
    lineNumber: 102,
    columnNumber: 5
  }, this);
}
function SearchResultPageGrid({ pages }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "search-result", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "Pages" }, void 0, false, {
      fileName: "app/Components/Search.jsx",
      lineNumber: 144,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: pages?.nodes?.map((page) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "search-results-item", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { prefetch: "intent", to: `/pages/${page.handle}`, children: page.title }, void 0, false, {
      fileName: "app/Components/Search.jsx",
      lineNumber: 148,
      columnNumber: 13
    }, this) }, page.id, false, {
      fileName: "app/Components/Search.jsx",
      lineNumber: 147,
      columnNumber: 11
    }, this)) }, void 0, false, {
      fileName: "app/Components/Search.jsx",
      lineNumber: 145,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/Components/Search.jsx",
      lineNumber: 154,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/Components/Search.jsx",
    lineNumber: 143,
    columnNumber: 5
  }, this);
}
function SearchResultArticleGrid({ articles }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "search-result", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "Articles" }, void 0, false, {
      fileName: "app/Components/Search.jsx",
      lineNumber: 162,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: articles?.nodes?.map((article) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "search-results-item", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { prefetch: "intent", to: `/blog/${article.handle}`, children: article.title }, void 0, false, {
      fileName: "app/Components/Search.jsx",
      lineNumber: 166,
      columnNumber: 13
    }, this) }, article.id, false, {
      fileName: "app/Components/Search.jsx",
      lineNumber: 165,
      columnNumber: 11
    }, this)) }, void 0, false, {
      fileName: "app/Components/Search.jsx",
      lineNumber: 163,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/Components/Search.jsx",
      lineNumber: 172,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/Components/Search.jsx",
    lineNumber: 161,
    columnNumber: 5
  }, this);
}
function NoSearchResults() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-center mt-3", style: { fontSize: "1.2rem" }, children: "No results, try a different search." }, void 0, false, {
    fileName: "app/Components/Search.jsx",
    lineNumber: 178,
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
      !searchTerm || !searchResults.totalResults ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: !searchTerm ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "text-center mt-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { style: { fontSize: "1.2rem" }, children: "Search from our wide range of products" }, void 0, false, {
        fileName: "app/routes/search.jsx",
        lineNumber: 61,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/search.jsx",
        lineNumber: 60,
        columnNumber: 15
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(NoSearchResults, {}, void 0, false, {
        fileName: "app/routes/search.jsx",
        lineNumber: 65,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/search.jsx",
        lineNumber: 58,
        columnNumber: 11
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SearchResults, { results: searchResults.results }, void 0, false, {
        fileName: "app/routes/search.jsx",
        lineNumber: 69,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/search.jsx",
      lineNumber: 54,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Footer_default, {}, void 0, false, {
      fileName: "app/routes/search.jsx",
      lineNumber: 72,
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
//# sourceMappingURL=/build/routes/search-XRV4EH2U.js.map
