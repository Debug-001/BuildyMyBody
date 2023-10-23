import {
  At,
  Money
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

// app/routes/account.orders._index.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var meta = () => {
  return [{ title: "Orders" }];
};
function Orders() {
  const { customer } = useLoaderData();
  const { orders, numberOfOrders } = customer;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-5 mr-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "parent-orders container-fluid ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "card-orders", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "orders", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-center", children: [
      "Orders ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("small", { children: [
        "[",
        numberOfOrders,
        "]"
      ] }, void 0, true, {
        fileName: "app/routes/account.orders._index.jsx",
        lineNumber: 56,
        columnNumber: 24
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/account.orders._index.jsx",
      lineNumber: 55,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/routes/account.orders._index.jsx",
      lineNumber: 62,
      columnNumber: 15
    }, this),
    orders.nodes.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(OrdersTable, { orders }, void 0, false, {
      fileName: "app/routes/account.orders._index.jsx",
      lineNumber: 64,
      columnNumber: 17
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EmptyOrders, {}, void 0, false, {
      fileName: "app/routes/account.orders._index.jsx",
      lineNumber: 66,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/account.orders._index.jsx",
    lineNumber: 53,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/account.orders._index.jsx",
    lineNumber: 52,
    columnNumber: 11
  }, this) }, void 0, false, {
    fileName: "app/routes/account.orders._index.jsx",
    lineNumber: 51,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/account.orders._index.jsx",
    lineNumber: 50,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/account.orders._index.jsx",
    lineNumber: 49,
    columnNumber: 5
  }, this);
}
function OrdersTable({ orders }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "acccount-orders", children: orders?.nodes.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(At, { connection: orders, children: ({ nodes, isLoading, PreviousLink, NextLink }) => {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PreviousLink, { children: isLoading ? "Loading..." : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "\u2191 Load previous" }, void 0, false, {
        fileName: "app/routes/account.orders._index.jsx",
        lineNumber: 86,
        columnNumber: 49
      }, this) }, void 0, false, {
        fileName: "app/routes/account.orders._index.jsx",
        lineNumber: 85,
        columnNumber: 19
      }, this),
      nodes.map((order) => {
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(OrderItem, { order }, order.id, false, {
          fileName: "app/routes/account.orders._index.jsx",
          lineNumber: 89,
          columnNumber: 28
        }, this);
      }),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NextLink, { children: isLoading ? "Loading..." : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Load more \u2193" }, void 0, false, {
        fileName: "app/routes/account.orders._index.jsx",
        lineNumber: 92,
        columnNumber: 49
      }, this) }, void 0, false, {
        fileName: "app/routes/account.orders._index.jsx",
        lineNumber: 91,
        columnNumber: 19
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/account.orders._index.jsx",
      lineNumber: 84,
      columnNumber: 17
    }, this);
  } }, void 0, false, {
    fileName: "app/routes/account.orders._index.jsx",
    lineNumber: 81,
    columnNumber: 11
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EmptyOrders, {}, void 0, false, {
    fileName: "app/routes/account.orders._index.jsx",
    lineNumber: 99,
    columnNumber: 11
  }, this) }, void 0, false, {
    fileName: "app/routes/account.orders._index.jsx",
    lineNumber: 79,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/account.orders._index.jsx",
    lineNumber: 78,
    columnNumber: 5
  }, this);
}
function EmptyOrders() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "empty-orders", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "You haven't placed any orders yet." }, void 0, false, {
      fileName: "app/routes/account.orders._index.jsx",
      lineNumber: 110,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/routes/account.orders._index.jsx",
      lineNumber: 111,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { className: "btn-shopping", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/collections", children: "Start Shopping \u2192" }, void 0, false, {
      fileName: "app/routes/account.orders._index.jsx",
      lineNumber: 113,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/account.orders._index.jsx",
      lineNumber: 112,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/account.orders._index.jsx",
    lineNumber: 109,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/account.orders._index.jsx",
    lineNumber: 108,
    columnNumber: 5
  }, this);
}
function OrderItem({ order }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("fieldset", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "row", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "col-lg-3 col-md-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h5", { style: { fontWeight: "bold" }, children: "Orders" }, void 0, false, {
            fileName: "app/routes/account.orders._index.jsx",
            lineNumber: 126,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/account/orders/${order.id}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: { fontSize: "1.2rem", color: "black" }, children: [
            "#",
            order.orderNumber
          ] }, void 0, true, {
            fileName: "app/routes/account.orders._index.jsx",
            lineNumber: 129,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/routes/account.orders._index.jsx",
            lineNumber: 128,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/account.orders._index.jsx",
          lineNumber: 125,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "col-lg-3 col-md-6 mt-3 mt-lg-0 mt-md-0", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h5", { style: { fontWeight: "bold" }, children: "Date" }, void 0, false, {
            fileName: "app/routes/account.orders._index.jsx",
            lineNumber: 134,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: { fontSize: "1.2rem" }, children: new Date(order.processedAt).toDateString() }, void 0, false, {
            fileName: "app/routes/account.orders._index.jsx",
            lineNumber: 135,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/account.orders._index.jsx",
          lineNumber: 133,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "col-lg-3 col-md-6 mt-3 mt-lg-0 ", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h5", { style: { fontWeight: "bold" }, children: "Payment Status" }, void 0, false, {
            fileName: "app/routes/account.orders._index.jsx",
            lineNumber: 138,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: { fontSize: "1.2rem" }, children: order.financialStatus }, void 0, false, {
            fileName: "app/routes/account.orders._index.jsx",
            lineNumber: 139,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/account.orders._index.jsx",
          lineNumber: 137,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "col-lg-3 col-md-6 mt-3 mt-lg-0", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h5", { style: { fontWeight: "bold" }, children: "Fulfillment Status" }, void 0, false, {
            fileName: "app/routes/account.orders._index.jsx",
            lineNumber: 142,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: { fontSize: "1.2rem" }, children: order.fulfillmentStatus }, void 0, false, {
            fileName: "app/routes/account.orders._index.jsx",
            lineNumber: 143,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/account.orders._index.jsx",
          lineNumber: 141,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/account.orders._index.jsx",
        lineNumber: 124,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "row mt-5", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "col-lg-6 col-md-6 col-sm-12 d-flex justify-content-lg-center ", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h5", { style: { fontWeight: "bold" }, children: "Total" }, void 0, false, {
            fileName: "app/routes/account.orders._index.jsx",
            lineNumber: 149,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: { fontSize: "1.2rem" }, className: "ml-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Money, { data: order.currentTotalPrice }, void 0, false, {
            fileName: "app/routes/account.orders._index.jsx",
            lineNumber: 150,
            columnNumber: 68
          }, this) }, void 0, false, {
            fileName: "app/routes/account.orders._index.jsx",
            lineNumber: 150,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/account.orders._index.jsx",
          lineNumber: 148,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "col-lg-6 col-md-6 col-sm-12  d-flex justify-content-lg-center mt-3 mt-lg-0 mt-md-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/account/orders/${btoa(order.id)}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "btn shop-nav-btn p-2", style: { fontSize: "1.2rem" }, children: "View Order" }, void 0, false, {
          fileName: "app/routes/account.orders._index.jsx",
          lineNumber: 156,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/account.orders._index.jsx",
          lineNumber: 155,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/account.orders._index.jsx",
          lineNumber: 153,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/account.orders._index.jsx",
        lineNumber: 147,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/account.orders._index.jsx",
      lineNumber: 123,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/routes/account.orders._index.jsx",
      lineNumber: 170,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/account.orders._index.jsx",
    lineNumber: 122,
    columnNumber: 5
  }, this);
}
var ORDER_ITEM_FRAGMENT = `#graphql
  fragment OrderItem on Order {
    currentTotalPrice {
      amount
      currencyCode
    }
    financialStatus
    fulfillmentStatus
    id
    lineItems(first: 10) {
      nodes {
        title
        variant {
          image {
            url
            altText
            height
            width
          }
        }
      }
    }
    orderNumber
    customerUrl
    statusUrl
    processedAt
  }
`;
var CUSTOMER_FRAGMENT = `#graphql
  fragment CustomerOrders on Customer {
    numberOfOrders
    orders(
      sortKey: PROCESSED_AT,
      reverse: true,
      first: $first,
      last: $last,
      before: $startCursor,
      after: $endCursor
    ) {
      nodes {
        ...OrderItem
      }
      pageInfo {
        hasPreviousPage
        hasNextPage
        hasNextPage
        endCursor
      }
    }
  }
  ${ORDER_ITEM_FRAGMENT}
`;
var CUSTOMER_ORDERS_QUERY = `#graphql
  ${CUSTOMER_FRAGMENT}
  query CustomerOrders(
    $country: CountryCode
    $customerAccessToken: String!
    $endCursor: String
    $first: Int
    $language: LanguageCode
    $last: Int
    $startCursor: String
  ) @inContext(country: $country, language: $language) {
    customer(customerAccessToken: $customerAccessToken) {
      ...CustomerOrders
    }
  }
`;
export {
  Orders as default,
  meta
};
//# sourceMappingURL=/build/routes/account.orders._index-SV2FRAVX.js.map
