import {
  require_lib
} from "/build/_shared/chunk-ODNHVWOZ.js";
import {
  MediaFile
} from "/build/_shared/chunk-VAI2PXO3.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-4VTZQJYZ.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/Components/Product/ProductCarousal.jsx
var import_react = __toESM(require_react());
var import_react_slick = __toESM(require_lib());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var ProductCarousal = ({ media }) => {
  if (!media.length) {
    return null;
  }
  const [nav1, setNav1] = (0, import_react.useState)();
  const [nav2, setNav2] = (0, import_react.useState)();
  const slider1 = (0, import_react.useRef)(null);
  const slider2 = (0, import_react.useRef)(null);
  const typeNameMap = {
    MODEL_3D: "Model3d",
    VIDEO: "Video",
    IMAGE: "MediaImage",
    EXTERNAL_VIDEO: "ExternalVideo"
  };
  (0, import_react.useEffect)(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: { padding: "0 30px", maxWidth: "500px" }, className: "mx-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_slick.default, { className: "mainSlider", asNavFor: nav2, ref: slider1, children: media.map((med, i) => {
    let extraProps = {};
    if (med.mediaContentType === "MODEL_3D") {
      extraProps = {
        interactionPromptThreshold: "0",
        ar: true,
        loading: "eager",
        disableZoom: true
      };
    }
    const data = {
      ...med,
      __typename: typeNameMap[med.mediaContentType] || typeNameMap["IMAGE"],
      image: {
        ...med.image,
        altText: med.alt || "Product image"
      }
    };
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      MediaFile,
      {
        tabIndex: "0",
        data,
        style: {
          margin: "0 auto",
          width: "100%"
        },
        ...extraProps
      },
      void 0,
      false,
      {
        fileName: "app/Components/Product/ProductCarousal.jsx",
        lineNumber: 52,
        columnNumber: 15
      },
      this
    ) }, i, false, {
      fileName: "app/Components/Product/ProductCarousal.jsx",
      lineNumber: 51,
      columnNumber: 13
    }, this);
  }) }, void 0, false, {
    fileName: "app/Components/Product/ProductCarousal.jsx",
    lineNumber: 28,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/Components/Product/ProductCarousal.jsx",
    lineNumber: 27,
    columnNumber: 5
  }, this);
};
var ProductCarousal_default = ProductCarousal;

export {
  ProductCarousal_default
};
//# sourceMappingURL=/build/_shared/chunk-4TOYJCYD.js.map
