import {
  Form,
  useActionData,
  useNavigation,
  useOutletContext
} from "/build/_shared/chunk-3DYM7AG2.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-4VTZQJYZ.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/account.profile.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var meta = () => {
  return [{ title: "Profile" }];
};
function AccountProfile() {
  const account = useOutletContext();
  const { state } = useNavigation();
  const action = useActionData();
  const customer = action?.customer ?? account?.customer;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "profile-clr pb-5 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "account-profile", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { style: { color: "#ff2828" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("em", { className: "", children: "My Profile" }, void 0, false, {
      fileName: "app/routes/account.profile.jsx",
      lineNumber: 113,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/routes/account.profile.jsx",
      lineNumber: 112,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hr", { style: { width: "30%" }, className: "bg-dark" }, void 0, false, {
      fileName: "app/routes/account.profile.jsx",
      lineNumber: 115,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "PUT", className: "mt-5", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "row", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "col ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("legend", { className: "", children: "Personal information" }, void 0, false, {
        fileName: "app/routes/account.profile.jsx",
        lineNumber: 120,
        columnNumber: 19
      }, this) }, void 0, false, {
        fileName: "app/routes/account.profile.jsx",
        lineNumber: 119,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/account.profile.jsx",
        lineNumber: 118,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "row", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "col-sm-12 col-md-6 col-lg-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("fieldset", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "firstName", className: "profile-name ", children: "First name" }, void 0, false, {
            fileName: "app/routes/account.profile.jsx",
            lineNumber: 126,
            columnNumber: 21
          }, this),
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
            fileName: "app/routes/account.profile.jsx",
            lineNumber: 126,
            columnNumber: 93
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "input",
            {
              className: " profile-input w-100",
              id: "firstName",
              name: "firstName",
              type: "text",
              autoComplete: "given-name",
              placeholder: "First name",
              "aria-label": "First name",
              defaultValue: customer.firstName ?? "",
              minLength: 2
            },
            void 0,
            false,
            {
              fileName: "app/routes/account.profile.jsx",
              lineNumber: 127,
              columnNumber: 21
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
            fileName: "app/routes/account.profile.jsx",
            lineNumber: 138,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "lastName", className: "profile-name ", children: "Last name" }, void 0, false, {
            fileName: "app/routes/account.profile.jsx",
            lineNumber: 139,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
            fileName: "app/routes/account.profile.jsx",
            lineNumber: 140,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "input",
            {
              className: " profile-input w-100",
              id: "lastName",
              name: "lastName",
              type: "text",
              autoComplete: "family-name",
              placeholder: "Last name",
              "aria-label": "Last name",
              defaultValue: customer.lastName ?? "",
              minLength: 2
            },
            void 0,
            false,
            {
              fileName: "app/routes/account.profile.jsx",
              lineNumber: 141,
              columnNumber: 21
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/routes/account.profile.jsx",
          lineNumber: 125,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/account.profile.jsx",
          lineNumber: 124,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "col ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("fieldset", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "phone", className: "profile-name ", children: "Mobile" }, void 0, false, {
            fileName: "app/routes/account.profile.jsx",
            lineNumber: 156,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
            fileName: "app/routes/account.profile.jsx",
            lineNumber: 157,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "input",
            {
              className: " profile-input w-100",
              id: "phone",
              name: "phone",
              type: "tel",
              autoComplete: "tel",
              placeholder: "Mobile",
              "aria-label": "Mobile",
              defaultValue: customer.phone ?? ""
            },
            void 0,
            false,
            {
              fileName: "app/routes/account.profile.jsx",
              lineNumber: 158,
              columnNumber: 21
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
            fileName: "app/routes/account.profile.jsx",
            lineNumber: 168,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "email", className: "profile-name ", children: "Email address" }, void 0, false, {
            fileName: "app/routes/account.profile.jsx",
            lineNumber: 169,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
            fileName: "app/routes/account.profile.jsx",
            lineNumber: 170,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "input",
            {
              className: " profile-input w-100",
              id: "email",
              name: "email",
              type: "email",
              autoComplete: "email",
              required: true,
              placeholder: "Email address",
              "aria-label": "Email address",
              defaultValue: customer.email ?? ""
            },
            void 0,
            false,
            {
              fileName: "app/routes/account.profile.jsx",
              lineNumber: 171,
              columnNumber: 21
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "account-profile-marketing", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "input",
              {
                id: "acceptsMarketing",
                name: "acceptsMarketing",
                type: "checkbox",
                placeholder: "Accept marketing",
                "aria-label": "Accept marketing",
                defaultChecked: customer.acceptsMarketing
              },
              void 0,
              false,
              {
                fileName: "app/routes/account.profile.jsx",
                lineNumber: 183,
                columnNumber: 23
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "acceptsMarketing", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "ml-2 ", children: "Subscribed to marketing communications" }, void 0, false, {
              fileName: "app/routes/account.profile.jsx",
              lineNumber: 192,
              columnNumber: 25
            }, this) }, void 0, false, {
              fileName: "app/routes/account.profile.jsx",
              lineNumber: 191,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/account.profile.jsx",
            lineNumber: 182,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "w-25 p-1 profile-btn-display2 profile-btn", children: "Edit" }, void 0, false, {
            fileName: "app/routes/account.profile.jsx",
            lineNumber: 199,
            columnNumber: 23
          }, this) }, void 0, false, {
            fileName: "app/routes/account.profile.jsx",
            lineNumber: 198,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/account.profile.jsx",
          lineNumber: 155,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/account.profile.jsx",
          lineNumber: 154,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/account.profile.jsx",
        lineNumber: 123,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/routes/account.profile.jsx",
        lineNumber: 208,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "row", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "col ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("legend", { className: "", children: "Change password (optional)" }, void 0, false, {
          fileName: "app/routes/account.profile.jsx",
          lineNumber: 211,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/account.profile.jsx",
          lineNumber: 210,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "col-sm-12 col-lg-6 col-md-6 d-flex justify-content-lg-end justify-content-md-end  ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "w-25 text-center p-1 profile-btn-display3 profile-btn", disabled: state !== "idle", children: state !== "idle" ? "Updating" : "Update" }, void 0, false, {
          fileName: "app/routes/account.profile.jsx",
          lineNumber: 214,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/account.profile.jsx",
          lineNumber: 213,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/account.profile.jsx",
        lineNumber: 209,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "row", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "col-lg-8 col-sm-12", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("fieldset", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "row", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "col", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "currentPassword", className: "profile-name ", children: "Current password" }, void 0, false, {
              fileName: "app/routes/account.profile.jsx",
              lineNumber: 225,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "input",
              {
                className: " profile-input w-100",
                id: "currentPassword",
                name: "currentPassword",
                type: "password",
                autoComplete: "current-password",
                placeholder: "Current password",
                "aria-label": "Current password",
                minLength: 8
              },
              void 0,
              false,
              {
                fileName: "app/routes/account.profile.jsx",
                lineNumber: 226,
                columnNumber: 25
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "newPassword", className: "profile-name ", children: "New password" }, void 0, false, {
              fileName: "app/routes/account.profile.jsx",
              lineNumber: 237,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "input",
              {
                className: "  profile-input w-100",
                id: "newPassword",
                name: "newPassword",
                type: "password",
                placeholder: "New password",
                "aria-label": "New password",
                minLength: 8
              },
              void 0,
              false,
              {
                fileName: "app/routes/account.profile.jsx",
                lineNumber: 238,
                columnNumber: 25
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "newPasswordConfirm", className: "profile-name ", children: "New password (confirm)" }, void 0, false, {
              fileName: "app/routes/account.profile.jsx",
              lineNumber: 249,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "input",
              {
                className: "  profile-input w-100",
                id: "newPasswordConfirm",
                name: "newPasswordConfirm",
                type: "password",
                placeholder: "New password (confirm)",
                "aria-label": "New password confirm",
                minLength: 8
              },
              void 0,
              false,
              {
                fileName: "app/routes/account.profile.jsx",
                lineNumber: 251,
                columnNumber: 25
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
              fileName: "app/routes/account.profile.jsx",
              lineNumber: 260,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("small", { className: "", style: { color: "blue" }, children: "Passwords must be at least 8 characters." }, void 0, false, {
              fileName: "app/routes/account.profile.jsx",
              lineNumber: 261,
              columnNumber: 25
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/account.profile.jsx",
            lineNumber: 224,
            columnNumber: 23
          }, this) }, void 0, false, {
            fileName: "app/routes/account.profile.jsx",
            lineNumber: 223,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: " profile-btn-display4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "w-25 text-center p-1 profile-btn", disabled: state !== "idle", children: state !== "idle" ? "Updating" : "Update" }, void 0, false, {
            fileName: "app/routes/account.profile.jsx",
            lineNumber: 268,
            columnNumber: 23
          }, this) }, void 0, false, {
            fileName: "app/routes/account.profile.jsx",
            lineNumber: 267,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/account.profile.jsx",
          lineNumber: 222,
          columnNumber: 19
        }, this),
        action?.error ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("mark", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("small", { children: action.error }, void 0, false, {
          fileName: "app/routes/account.profile.jsx",
          lineNumber: 277,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/routes/account.profile.jsx",
          lineNumber: 276,
          columnNumber: 23
        }, this) }, void 0, false, {
          fileName: "app/routes/account.profile.jsx",
          lineNumber: 275,
          columnNumber: 21
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
          fileName: "app/routes/account.profile.jsx",
          lineNumber: 281,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/account.profile.jsx",
        lineNumber: 220,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/account.profile.jsx",
        lineNumber: 219,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/account.profile.jsx",
      lineNumber: 117,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/account.profile.jsx",
    lineNumber: 111,
    columnNumber: 11
  }, this) }, void 0, false, {
    fileName: "app/routes/account.profile.jsx",
    lineNumber: 110,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/account.profile.jsx",
    lineNumber: 109,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/account.profile.jsx",
    lineNumber: 108,
    columnNumber: 5
  }, this);
}
{
}
export {
  AccountProfile as default,
  meta
};
//# sourceMappingURL=/build/routes/account.profile-PJU7QVYG.js.map
