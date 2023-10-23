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
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "main-div mt-5 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "row m-5 no-gutters shadow-lg", children: [
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
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "form-group pb-3 mt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "input",
                {
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
                  lineNumber: 125,
                  columnNumber: 23
                },
                this
              ) }, void 0, false, {
                fileName: "app/routes/account_.register.jsx",
                lineNumber: 124,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "form-group pb-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "input",
                {
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
                  lineNumber: 138,
                  columnNumber: 23
                },
                this
              ) }, void 0, false, {
                fileName: "app/routes/account_.register.jsx",
                lineNumber: 137,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/account_.register.jsx",
              lineNumber: 111,
              columnNumber: 19
            }, this),
            error ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("mark", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("small", { children: error }, void 0, false, {
              fileName: "app/routes/account_.register.jsx",
              lineNumber: 153,
              columnNumber: 25
            }, this) }, void 0, false, {
              fileName: "app/routes/account_.register.jsx",
              lineNumber: 152,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "app/routes/account_.register.jsx",
              lineNumber: 151,
              columnNumber: 21
            }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
              fileName: "app/routes/account_.register.jsx",
              lineNumber: 157,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "d-flex align-items-center justify-content-between" }, void 0, false, {
              fileName: "app/routes/account_.register.jsx",
              lineNumber: 159,
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
                lineNumber: 162,
                columnNumber: 21
              },
              this
            ) }, void 0, false, {
              fileName: "app/routes/account_.register.jsx",
              lineNumber: 161,
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
              lineNumber: 171,
              columnNumber: 36
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/account_.register.jsx",
            lineNumber: 170,
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "login", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Register." }, void 0, false, {
        fileName: "app/routes/account_.register.jsx",
        lineNumber: 180,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "POST", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("fieldset", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "email", children: "Email address" }, void 0, false, {
            fileName: "app/routes/account_.register.jsx",
            lineNumber: 183,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "input",
            {
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
              lineNumber: 184,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "password", children: "Password" }, void 0, false, {
            fileName: "app/routes/account_.register.jsx",
            lineNumber: 195,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "input",
            {
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
              lineNumber: 196,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "passwordConfirm", children: "Re-enter password" }, void 0, false, {
            fileName: "app/routes/account_.register.jsx",
            lineNumber: 206,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "input",
            {
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
              lineNumber: 207,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/routes/account_.register.jsx",
          lineNumber: 182,
          columnNumber: 11
        }, this),
        error ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("mark", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("small", { children: error }, void 0, false, {
          fileName: "app/routes/account_.register.jsx",
          lineNumber: 221,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/account_.register.jsx",
          lineNumber: 220,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/account_.register.jsx",
          lineNumber: 219,
          columnNumber: 13
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
          fileName: "app/routes/account_.register.jsx",
          lineNumber: 225,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", children: "Register" }, void 0, false, {
          fileName: "app/routes/account_.register.jsx",
          lineNumber: 227,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/account_.register.jsx",
        lineNumber: 181,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/routes/account_.register.jsx",
        lineNumber: 229,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/account/login", children: "Login \u2192" }, void 0, false, {
        fileName: "app/routes/account_.register.jsx",
        lineNumber: 231,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/account_.register.jsx",
        lineNumber: 230,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/account_.register.jsx",
      lineNumber: 179,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Footer_default, {}, void 0, false, {
      fileName: "app/routes/account_.register.jsx",
      lineNumber: 234,
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
//# sourceMappingURL=/build/routes/account_.register-KI4XV4OB.js.map
