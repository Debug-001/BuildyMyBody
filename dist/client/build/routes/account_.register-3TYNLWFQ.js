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

// app/routes/account_.register.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Register() {
  const data = useActionData();
  const error = data?.error || null;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Navbar_default, {}, void 0, false, {
      fileName: "app/routes/account_.register.jsx",
      lineNumber: 100,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "main-div pt-2 pb-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "row m-5 no-gutters shadow-lg", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "col d-none col-lg-5 d-lg-block  ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "/img/buildbody.jpg", className: "img-fluid login-img" }, void 0, false, {
        fileName: "app/routes/account_.register.jsx",
        lineNumber: 105,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/account_.register.jsx",
        lineNumber: 104,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "col-md-12 col-lg-7 bg-white p-5 border border-dark login-border", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "pb-3 text-center login-name", children: "Welcome To BMB!" }, void 0, false, {
          fileName: "app/routes/account_.register.jsx",
          lineNumber: 108,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "form-style", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "POST", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("fieldset", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "form-group pb-3 pt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "input",
                {
                  className: "w-100",
                  id: "email",
                  name: "email",
                  type: "email",
                  autoComplete: "email",
                  required: true,
                  placeholder: "Email address",
                  "aria-label": "Email address",
                  autoFocus: true
                },
                void 0,
                false,
                {
                  fileName: "app/routes/account_.register.jsx",
                  lineNumber: 113,
                  columnNumber: 23
                },
                this
              ) }, void 0, false, {
                fileName: "app/routes/account_.register.jsx",
                lineNumber: 112,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "form-group pb-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "input",
                {
                  className: "w-100",
                  id: "password",
                  name: "password",
                  type: "password",
                  autoComplete: "current-password",
                  placeholder: "Password",
                  "aria-label": "Password",
                  minLength: 8,
                  required: true
                },
                void 0,
                false,
                {
                  fileName: "app/routes/account_.register.jsx",
                  lineNumber: 126,
                  columnNumber: 23
                },
                this
              ) }, void 0, false, {
                fileName: "app/routes/account_.register.jsx",
                lineNumber: 125,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "form-group pb-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "input",
                {
                  className: "w-100",
                  id: "passwordConfirm",
                  name: "passwordConfirm",
                  type: "password",
                  autoComplete: "current-password",
                  placeholder: "Re-enter password",
                  "aria-label": "Re-enter password",
                  minLength: 8,
                  required: true
                },
                void 0,
                false,
                {
                  fileName: "app/routes/account_.register.jsx",
                  lineNumber: 140,
                  columnNumber: 23
                },
                this
              ) }, void 0, false, {
                fileName: "app/routes/account_.register.jsx",
                lineNumber: 139,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/account_.register.jsx",
              lineNumber: 111,
              columnNumber: 19
            }, this),
            error ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("mark", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("small", { children: error }, void 0, false, {
              fileName: "app/routes/account_.register.jsx",
              lineNumber: 156,
              columnNumber: 25
            }, this) }, void 0, false, {
              fileName: "app/routes/account_.register.jsx",
              lineNumber: 155,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "app/routes/account_.register.jsx",
              lineNumber: 154,
              columnNumber: 21
            }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
              fileName: "app/routes/account_.register.jsx",
              lineNumber: 160,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "d-flex align-items-center justify-content-between" }, void 0, false, {
              fileName: "app/routes/account_.register.jsx",
              lineNumber: 162,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pb-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "button",
              {
                type: "submit",
                className: "btn text-light w-100 font-weight-bold mt-2 login-btn ",
                children: "Register"
              },
              void 0,
              false,
              {
                fileName: "app/routes/account_.register.jsx",
                lineNumber: 165,
                columnNumber: 21
              },
              this
            ) }, void 0, false, {
              fileName: "app/routes/account_.register.jsx",
              lineNumber: 164,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/account_.register.jsx",
            lineNumber: 110,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pt-4 text-center", children: [
            "Already a member? ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/account/login", children: "Login \u2192" }, void 0, false, {
              fileName: "app/routes/account_.register.jsx",
              lineNumber: 174,
              columnNumber: 36
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/account_.register.jsx",
            lineNumber: 173,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/account_.register.jsx",
          lineNumber: 109,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/account_.register.jsx",
        lineNumber: 107,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/account_.register.jsx",
      lineNumber: 103,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/account_.register.jsx",
      lineNumber: 102,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/account_.register.jsx",
      lineNumber: 101,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Footer_default, {}, void 0, false, {
      fileName: "app/routes/account_.register.jsx",
      lineNumber: 237,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/account_.register.jsx",
    lineNumber: 99,
    columnNumber: 5
  }, this);
}
export {
  Register as default
};
//# sourceMappingURL=/build/routes/account_.register-3TYNLWFQ.js.map
