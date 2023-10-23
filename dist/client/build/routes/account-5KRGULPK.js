import {
  Footer_default
} from "/build/_shared/chunk-XOI35JXB.js";
import {
  Navbar_default
} from "/build/_shared/chunk-SFU7YTWE.js";
import "/build/_shared/chunk-K4GQNGL6.js";
import {
  Form,
  NavLink,
  Outlet,
  useLoaderData
} from "/build/_shared/chunk-3DYM7AG2.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-4VTZQJYZ.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/account.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function shouldRevalidate() {
  return true;
}
function Acccount() {
  const { customer, isPrivateRoute, isAccountHome } = useLoaderData();
  if (!isPrivateRoute && !isAccountHome) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, { context: { customer } }, void 0, false, {
      fileName: "app/routes/account.jsx",
      lineNumber: 83,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AccountLayout, { customer, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/routes/account.jsx",
      lineNumber: 88,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/routes/account.jsx",
      lineNumber: 89,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, { context: { customer } }, void 0, false, {
      fileName: "app/routes/account.jsx",
      lineNumber: 90,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/account.jsx",
    lineNumber: 87,
    columnNumber: 5
  }, this);
}
function AccountLayout({ customer, children }) {
  const heading = customer ? customer.firstName ? `Welcome, ${customer.firstName}` : `Welcome to your account.` : "Account Details";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Navbar_default, {}, void 0, false, {
      fileName: "app/routes/account.jsx",
      lineNumber: 104,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "account pt-5 pb-5", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "div",
        {
          className: "d-flex justify-content-center mb-5",
          style: { flexDirection: "column", alignItems: "center" },
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "font-weight-bold custom-heading3", style: { color: "#ff2828" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("em", { children: heading }, void 0, false, {
              fileName: "app/routes/account.jsx",
              lineNumber: 111,
              columnNumber: 15
            }, this) }, void 0, false, {
              fileName: "app/routes/account.jsx",
              lineNumber: 110,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hr", { className: "h1-hr" }, void 0, false, {
              fileName: "app/routes/account.jsx",
              lineNumber: 113,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "app/routes/account.jsx",
          lineNumber: 106,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/routes/account.jsx",
        lineNumber: 115,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AcccountMenu, {}, void 0, false, {
        fileName: "app/routes/account.jsx",
        lineNumber: 116,
        columnNumber: 9
      }, this),
      children
    ] }, void 0, true, {
      fileName: "app/routes/account.jsx",
      lineNumber: 105,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Footer_default, {}, void 0, false, {
      fileName: "app/routes/account.jsx",
      lineNumber: 119,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/account.jsx",
    lineNumber: 103,
    columnNumber: 5
  }, this);
}
function AcccountMenu() {
  function isActiveStyle({ isActive, isPending }) {
    return {
      fontWeight: isActive ? "bold" : "",
      color: isPending ? "grey" : "white"
    };
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "account_menu", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "card-acc d-flex justify-content-center ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { role: "navigation", style: { display: "flex", gap: "2rem", fontSize: "1.4rem" }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/account/orders", style: isActiveStyle, children: "My Orders \xA0" }, void 0, false, {
      fileName: "app/routes/account.jsx",
      lineNumber: 136,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/account/profile", style: isActiveStyle, children: "\xA0Profile \xA0" }, void 0, false, {
      fileName: "app/routes/account.jsx",
      lineNumber: 139,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/account/addresses", style: isActiveStyle, children: "\xA0Saved Addresses \xA0" }, void 0, false, {
      fileName: "app/routes/account.jsx",
      lineNumber: 142,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Logout, {}, void 0, false, {
      fileName: "app/routes/account.jsx",
      lineNumber: 145,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/account.jsx",
    lineNumber: 135,
    columnNumber: 11
  }, this) }, void 0, false, {
    fileName: "app/routes/account.jsx",
    lineNumber: 134,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/account.jsx",
    lineNumber: 133,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/account.jsx",
    lineNumber: 132,
    columnNumber: 5
  }, this);
}
function Logout() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { className: "account-logout", method: "POST", action: "/account/logout", children: [
    "\xA0",
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "btn-logout", children: "Sign out" }, void 0, false, {
      fileName: "app/routes/account.jsx",
      lineNumber: 159,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/account.jsx",
    lineNumber: 157,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/account.jsx",
    lineNumber: 156,
    columnNumber: 5
  }, this);
}
var CUSTOMER_FRAGMENT = `#graphql
  fragment Customer on Customer {
    acceptsMarketing
    addresses(first: 6) {
      nodes {
        ...Address
      }
    }
    defaultAddress {
      ...Address
    }
    email
    firstName
    lastName
    numberOfOrders
    phone
  }
  fragment Address on MailingAddress {
    id
    formatted
    firstName
    lastName
    company
    address1
    address2
    country
    province
    city
    zip
    phone
  }
`;
var CUSTOMER_QUERY = `#graphql
  query Customer(
    $customerAccessToken: String!
    $country: CountryCode
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    customer(customerAccessToken: $customerAccessToken) {
      ...Customer
    }
  }
  ${CUSTOMER_FRAGMENT}
`;
export {
  Acccount as default,
  shouldRevalidate
};
//# sourceMappingURL=/build/routes/account-5KRGULPK.js.map
