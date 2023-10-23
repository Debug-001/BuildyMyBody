import {
  At,
  Image
} from "/build/_shared/chunk-VAI2PXO3.js";
import {
  Link,
  useLoaderData
} from "/build/_shared/chunk-3DYM7AG2.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-4VTZQJYZ.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/blogs.$blogHandle._index.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var meta = ({ data }) => {
  return [{ title: `Hydrogen | ${data.blog.title} blog` }];
};
function Blog() {
  const { blog } = useLoaderData();
  const { articles } = blog;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "blog", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: blog.title }, void 0, false, {
      fileName: "app/routes/blogs.$blogHandle._index.jsx",
      lineNumber: 38,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "blog-grid", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(At, { connection: articles, children: ({ nodes, isLoading, PreviousLink, NextLink }) => {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PreviousLink, { children: isLoading ? "Loading..." : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "\u2191 Load previous" }, void 0, false, {
          fileName: "app/routes/blogs.$blogHandle._index.jsx",
          lineNumber: 45,
          columnNumber: 47
        }, this) }, void 0, false, {
          fileName: "app/routes/blogs.$blogHandle._index.jsx",
          lineNumber: 44,
          columnNumber: 17
        }, this),
        nodes.map((article, index) => {
          return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            ArticleItem,
            {
              article,
              loading: index < 2 ? "eager" : "lazy"
            },
            article.id,
            false,
            {
              fileName: "app/routes/blogs.$blogHandle._index.jsx",
              lineNumber: 49,
              columnNumber: 21
            },
            this
          );
        }),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NextLink, { children: isLoading ? "Loading..." : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Load more \u2193" }, void 0, false, {
          fileName: "app/routes/blogs.$blogHandle._index.jsx",
          lineNumber: 57,
          columnNumber: 47
        }, this) }, void 0, false, {
          fileName: "app/routes/blogs.$blogHandle._index.jsx",
          lineNumber: 56,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/blogs.$blogHandle._index.jsx",
        lineNumber: 43,
        columnNumber: 15
      }, this);
    } }, void 0, false, {
      fileName: "app/routes/blogs.$blogHandle._index.jsx",
      lineNumber: 40,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/blogs.$blogHandle._index.jsx",
      lineNumber: 39,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/blogs.$blogHandle._index.jsx",
    lineNumber: 37,
    columnNumber: 5
  }, this);
}
function ArticleItem({ article, loading }) {
  const publishedAt = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  }).format(new Date(article.publishedAt));
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "blog-article", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/blogs/${article.blog.handle}/${article.handle}`, children: [
    article.image && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "blog-article-image", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      Image,
      {
        alt: article.image.altText || article.title,
        aspectRatio: "3/2",
        data: article.image,
        loading,
        sizes: "(min-width: 768px) 50vw, 100vw"
      },
      void 0,
      false,
      {
        fileName: "app/routes/blogs.$blogHandle._index.jsx",
        lineNumber: 79,
        columnNumber: 13
      },
      this
    ) }, void 0, false, {
      fileName: "app/routes/blogs.$blogHandle._index.jsx",
      lineNumber: 78,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: article.title }, void 0, false, {
      fileName: "app/routes/blogs.$blogHandle._index.jsx",
      lineNumber: 88,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("small", { children: publishedAt }, void 0, false, {
      fileName: "app/routes/blogs.$blogHandle._index.jsx",
      lineNumber: 89,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/blogs.$blogHandle._index.jsx",
    lineNumber: 76,
    columnNumber: 7
  }, this) }, article.id, false, {
    fileName: "app/routes/blogs.$blogHandle._index.jsx",
    lineNumber: 75,
    columnNumber: 5
  }, this);
}
export {
  Blog as default,
  meta
};
//# sourceMappingURL=/build/routes/blogs.$blogHandle._index-AXIL6XUM.js.map
