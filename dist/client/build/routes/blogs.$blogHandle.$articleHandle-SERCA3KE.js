import {
  Image
} from "/build/_shared/chunk-VAI2PXO3.js";
import {
  useLoaderData
} from "/build/_shared/chunk-3DYM7AG2.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-4VTZQJYZ.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/blogs.$blogHandle.$articleHandle.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var meta = ({ data }) => {
  return [{ title: `Hydrogen | ${data.article.title} article` }];
};
function Article() {
  const { article } = useLoaderData();
  const { title, image, contentHtml, author } = article;
  const publishedDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  }).format(new Date(article.publishedAt));
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "article", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: [
      title,
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
        publishedDate,
        " \xB7 ",
        author?.name
      ] }, void 0, true, {
        fileName: "app/routes/blogs.$blogHandle.$articleHandle.jsx",
        lineNumber: 43,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/blogs.$blogHandle.$articleHandle.jsx",
      lineNumber: 41,
      columnNumber: 7
    }, this),
    image && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { data: image, sizes: "90vw", loading: "eager" }, void 0, false, {
      fileName: "app/routes/blogs.$blogHandle.$articleHandle.jsx",
      lineNumber: 48,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "div",
      {
        dangerouslySetInnerHTML: { __html: contentHtml },
        className: "article"
      },
      void 0,
      false,
      {
        fileName: "app/routes/blogs.$blogHandle.$articleHandle.jsx",
        lineNumber: 49,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/routes/blogs.$blogHandle.$articleHandle.jsx",
    lineNumber: 40,
    columnNumber: 5
  }, this);
}
export {
  Article as default,
  meta
};
//# sourceMappingURL=/build/routes/blogs.$blogHandle.$articleHandle-SERCA3KE.js.map
