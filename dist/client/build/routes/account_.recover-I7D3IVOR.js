import {
  Footer_default
} from "/build/_shared/chunk-HV6WZVQ3.js";
import {
  Navbar_default
} from "/build/_shared/chunk-Z2C7QERV.js";
import "/build/_shared/chunk-ILUR2CXR.js";
import {
  Form,
  Link,
  useActionData
} from "/build/_shared/chunk-3DYM7AG2.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-4VTZQJYZ.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/account_.recover.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Recover() {
  const action = useActionData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Navbar_default, {}, void 0, false, {
      fileName: "app/routes/account_.recover.jsx",
      lineNumber: 47,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "account-recover pt-5 pb-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "card-recover", children: action?.resetRequested ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Request Sent." }, void 0, false, {
        fileName: "app/routes/account_.recover.jsx",
        lineNumber: 53,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "If that email address is in our system, you will receive an email with instructions about how to reset your password in a few minutes." }, void 0, false, {
        fileName: "app/routes/account_.recover.jsx",
        lineNumber: 54,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/routes/account_.recover.jsx",
        lineNumber: 59,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/account/login", children: "Return to Login" }, void 0, false, {
        fileName: "app/routes/account_.recover.jsx",
        lineNumber: 60,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/account_.recover.jsx",
      lineNumber: 52,
      columnNumber: 15
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Forgot Password." }, void 0, false, {
        fileName: "app/routes/account_.recover.jsx",
        lineNumber: 64,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Enter the email address associated with your account to receive a link to reset your password." }, void 0, false, {
        fileName: "app/routes/account_.recover.jsx",
        lineNumber: 65,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/routes/account_.recover.jsx",
        lineNumber: 69,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "POST", className: "d-flex", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("fieldset", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "input",
          {
            "aria-label": "Email address",
            autoComplete: "email",
            autoFocus: true,
            id: "email",
            name: "email",
            placeholder: "Email address",
            required: true,
            type: "email"
          },
          void 0,
          false,
          {
            fileName: "app/routes/account_.recover.jsx",
            lineNumber: 72,
            columnNumber: 21
          },
          this
        ) }, void 0, false, {
          fileName: "app/routes/account_.recover.jsx",
          lineNumber: 71,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "recover-btn", type: "submit", children: "Request Reset Link" }, void 0, false, {
          fileName: "app/routes/account_.recover.jsx",
          lineNumber: 84,
          columnNumber: 19
        }, this),
        action?.error ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("mark", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("small", { children: action.error }, void 0, false, {
          fileName: "app/routes/account_.recover.jsx",
          lineNumber: 88,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/routes/account_.recover.jsx",
          lineNumber: 87,
          columnNumber: 23
        }, this) }, void 0, false, {
          fileName: "app/routes/account_.recover.jsx",
          lineNumber: 86,
          columnNumber: 21
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
          fileName: "app/routes/account_.recover.jsx",
          lineNumber: 92,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/account_.recover.jsx",
        lineNumber: 70,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "login-back", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
          fileName: "app/routes/account_.recover.jsx",
          lineNumber: 97,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/account/login", children: "Back to Login" }, void 0, false, {
          fileName: "app/routes/account_.recover.jsx",
          lineNumber: 99,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/routes/account_.recover.jsx",
          lineNumber: 98,
          columnNumber: 19
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/account_.recover.jsx",
        lineNumber: 96,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/account_.recover.jsx",
      lineNumber: 63,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/routes/account_.recover.jsx",
      lineNumber: 50,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/account_.recover.jsx",
      lineNumber: 49,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/account_.recover.jsx",
      lineNumber: 48,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Footer_default, {}, void 0, false, {
      fileName: "app/routes/account_.recover.jsx",
      lineNumber: 107,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/account_.recover.jsx",
    lineNumber: 46,
    columnNumber: 5
  }, this);
}
export {
  Recover as default
};
//# sourceMappingURL=/build/routes/account_.recover-I7D3IVOR.js.map
