import {
  Footer_default
} from "/build/_shared/chunk-XOI35JXB.js";
import {
  Navbar_default
} from "/build/_shared/chunk-SFU7YTWE.js";
import "/build/_shared/chunk-K4GQNGL6.js";
import {
  Form,
  Link,
  useActionData
} from "/build/_shared/chunk-3DYM7AG2.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-4VTZQJYZ.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/account_.login.jsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var meta = () => {
  return [{ title: "Login" }];
};
function Login() {
  const data = useActionData();
  const error = data?.error || null;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Navbar_default, {}, void 0, false, {
      fileName: "app/routes/account_.login.jsx",
      lineNumber: 70,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "main-div mt-5 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "row m-5 no-gutters shadow-lg ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "col d-none col-lg-5 d-lg-block  ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "/img/buildbody.jpg", className: "img-fluid login-img" }, void 0, false, {
        fileName: "app/routes/account_.login.jsx",
        lineNumber: 75,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/account_.login.jsx",
        lineNumber: 74,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "col-md-12 col-lg-7 bg-white p-5 border border-dark login-border", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "pb-3 text-center login-name", children: "Welcome To BMB!" }, void 0, false, {
          fileName: "app/routes/account_.login.jsx",
          lineNumber: 78,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "form-style", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "POST", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("fieldset", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "form-group pb-3 mt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "input",
                {
                  id: "email",
                  className: "w-100",
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
                  fileName: "app/routes/account_.login.jsx",
                  lineNumber: 83,
                  columnNumber: 23
                },
                this
              ) }, void 0, false, {
                fileName: "app/routes/account_.login.jsx",
                lineNumber: 82,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "form-group pb-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "input",
                {
                  id: "password",
                  className: "w-100",
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
                  fileName: "app/routes/account_.login.jsx",
                  lineNumber: 96,
                  columnNumber: 23
                },
                this
              ) }, void 0, false, {
                fileName: "app/routes/account_.login.jsx",
                lineNumber: 95,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/account_.login.jsx",
              lineNumber: 81,
              columnNumber: 19
            }, this),
            error ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("mark", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("small", { children: error }, void 0, false, {
              fileName: "app/routes/account_.login.jsx",
              lineNumber: 112,
              columnNumber: 25
            }, this) }, void 0, false, {
              fileName: "app/routes/account_.login.jsx",
              lineNumber: 111,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "app/routes/account_.login.jsx",
              lineNumber: 110,
              columnNumber: 21
            }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
              fileName: "app/routes/account_.login.jsx",
              lineNumber: 116,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "d-flex align-items-center justify-content-between", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "d-flex align-items-center", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "", type: "checkbox", value: "" }, void 0, false, {
                  fileName: "app/routes/account_.login.jsx",
                  lineNumber: 120,
                  columnNumber: 23
                }, this),
                " ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "pl-2 font-weight-bold", children: "Remember Me" }, void 0, false, {
                  fileName: "app/routes/account_.login.jsx",
                  lineNumber: 121,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/account_.login.jsx",
                lineNumber: 119,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/account/recover", children: "Forgot password \u2192" }, void 0, false, {
                fileName: "app/routes/account_.login.jsx",
                lineNumber: 124,
                columnNumber: 23
              }, this) }, void 0, false, {
                fileName: "app/routes/account_.login.jsx",
                lineNumber: 123,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/account_.login.jsx",
              lineNumber: 118,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pb-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "button",
              {
                type: "submit",
                className: "btn text-light w-100 font-weight-bold mt-2 login-btn ",
                children: "Sign in"
              },
              void 0,
              false,
              {
                fileName: "app/routes/account_.login.jsx",
                lineNumber: 128,
                columnNumber: 21
              },
              this
            ) }, void 0, false, {
              fileName: "app/routes/account_.login.jsx",
              lineNumber: 127,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/account_.login.jsx",
            lineNumber: 80,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "sideline", children: "OR" }, void 0, false, {
            fileName: "app/routes/account_.login.jsx",
            lineNumber: 136,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "button",
            {
              type: "submit",
              className: "btn text-light w-100 font-weight-bold mt-2 ",
              style: { height: "50px", background: "red" },
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/account/register", style: { color: "white" }, children: "Sign Up \u2192" }, void 0, false, {
                fileName: "app/routes/account_.login.jsx",
                lineNumber: 143,
                columnNumber: 21
              }, this)
            },
            void 0,
            false,
            {
              fileName: "app/routes/account_.login.jsx",
              lineNumber: 138,
              columnNumber: 19
            },
            this
          ) }, void 0, false, {
            fileName: "app/routes/account_.login.jsx",
            lineNumber: 137,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pt-4 text-center", children: [
            "Get Members Benefit. ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/account/register", children: "Sign Up\u2192" }, void 0, false, {
              fileName: "app/routes/account_.login.jsx",
              lineNumber: 147,
              columnNumber: 40
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/account_.login.jsx",
            lineNumber: 146,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/account_.login.jsx",
          lineNumber: 79,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/account_.login.jsx",
        lineNumber: 77,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/account_.login.jsx",
      lineNumber: 73,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/account_.login.jsx",
      lineNumber: 72,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/account_.login.jsx",
      lineNumber: 71,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Footer_default, {}, void 0, false, {
      fileName: "app/routes/account_.login.jsx",
      lineNumber: 156,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/account_.login.jsx",
    lineNumber: 69,
    columnNumber: 5
  }, this);
}
export {
  Login as default,
  meta
};
//# sourceMappingURL=/build/routes/account_.login-EJLMCXU7.js.map
