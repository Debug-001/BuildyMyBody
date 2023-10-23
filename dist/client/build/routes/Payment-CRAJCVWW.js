import {
  FaHandHolding
} from "/build/_shared/chunk-3E5QXTOA.js";
import {
  FcGoogle
} from "/build/_shared/chunk-SMDSSKGN.js";
import {
  Footer_default
} from "/build/_shared/chunk-GKGMXBQP.js";
import {
  Navbar_default
} from "/build/_shared/chunk-SOVGPGBS.js";
import {
  BiInfoCircle,
  BsChevronDown,
  GenIcon
} from "/build/_shared/chunk-7NHAI5LA.js";
import "/build/_shared/chunk-3DYM7AG2.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-4VTZQJYZ.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/Payment/index.jsx
var import_react = __toESM(require_react());

// node_modules/react-icons/md/index.esm.js
function MdOutlineLocalOffer(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24" }, "child": [{ "tag": "path", "attr": { "fill": "none", "d": "M0 0h24v24H0V0z" } }, { "tag": "path", "attr": { "d": "M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58s1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41s-.23-1.06-.59-1.42zM13 20.01L4 11V4h7v-.01l9 9-7 7.02z" } }, { "tag": "circle", "attr": { "cx": "6.5", "cy": "6.5", "r": "1.5" } }] })(props);
}

// app/routes/Payment/index.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Payment = () => {
  const [isActive, setIsActive] = (0, import_react.useState)(false);
  const [isButtonVisible, setIsButtonVisible] = (0, import_react.useState)(false);
  const handleClick = () => {
    setIsActive(!isActive);
    setIsButtonVisible(!isButtonVisible);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Navbar_default, {}, void 0, false, {
      fileName: "app/routes/Payment/index.jsx",
      lineNumber: 21,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container mt-5 mb-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "row", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { id: "firstrow", className: "col-sm-5 ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h5", { children: "My Order Summary" }, void 0, false, {
          fileName: "app/routes/Payment/index.jsx",
          lineNumber: 26,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h6", { className: "font-weight-bold mt-5", children: [
          "Deliver to:",
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "badge badge-info", children: "Change" }, void 0, false, {
            fileName: "app/routes/Payment/index.jsx",
            lineNumber: 30,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/Payment/index.jsx",
            lineNumber: 29,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/Payment/index.jsx",
          lineNumber: 27,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-weight-bold mt-4", children: "Om Bhatt" }, void 0, false, {
          fileName: "app/routes/Payment/index.jsx",
          lineNumber: 33,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "address", children: "803,A-Block, Rajnagar residency, Rajnagar extension, Ghaziabad, Uttar Pradesh" }, void 0, false, {
          fileName: "app/routes/Payment/index.jsx",
          lineNumber: 34,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "address", children: "201017" }, void 0, false, {
          fileName: "app/routes/Payment/index.jsx",
          lineNumber: 38,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hr", {}, void 0, false, {
          fileName: "app/routes/Payment/index.jsx",
          lineNumber: 39,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mrp", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "totalmrp mt-4", children: [
            "Total MRP",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mrpprice", children: "\u20B916,067" }, void 0, false, {
              fileName: "app/routes/Payment/index.jsx",
              lineNumber: 43,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/Payment/index.jsx",
            lineNumber: 41,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "totalmrp", children: [
            "Total Discount",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BiInfoCircle, { className: "picon mx-2" }, void 0, false, {
              fileName: "app/routes/Payment/index.jsx",
              lineNumber: 47,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "discount", children: "-\u20B94,333" }, void 0, false, {
              fileName: "app/routes/Payment/index.jsx",
              lineNumber: 48,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/Payment/index.jsx",
            lineNumber: 45,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/Payment/index.jsx",
          lineNumber: 40,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hr", {}, void 0, false, {
          fileName: "app/routes/Payment/index.jsx",
          lineNumber: 51,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "total", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Total" }, void 0, false, {
            fileName: "app/routes/Payment/index.jsx",
            lineNumber: 53,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "price", children: "\u20B911,609" }, void 0, false, {
            fileName: "app/routes/Payment/index.jsx",
            lineNumber: 54,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/Payment/index.jsx",
          lineNumber: 52,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hr", {}, void 0, false, {
          fileName: "app/routes/Payment/index.jsx",
          lineNumber: 56,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "card1", style: { width: "26.7rem" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "card-body", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "card-text", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FaHandHolding, {}, void 0, false, {
            fileName: "app/routes/Payment/index.jsx",
            lineNumber: 61,
            columnNumber: 21
          }, this),
          "You have saved",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-weight-bold mx-2", children: "\u20B94,333" }, void 0, false, {
            fileName: "app/routes/Payment/index.jsx",
            lineNumber: 63,
            columnNumber: 21
          }, this),
          "and will earn ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-weight-bold", children: " \u20B9233" }, void 0, false, {
            fileName: "app/routes/Payment/index.jsx",
            lineNumber: 64,
            columnNumber: 31
          }, this),
          " ",
          "BMB coins."
        ] }, void 0, true, {
          fileName: "app/routes/Payment/index.jsx",
          lineNumber: 60,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/Payment/index.jsx",
          lineNumber: 59,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/Payment/index.jsx",
          lineNumber: 58,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "card2", style: { width: "26.7rem" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "card2-body", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h6", { className: "card-subtitle mb-2 text-muted", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MdOutlineLocalOffer, {}, void 0, false, {
              fileName: "app/routes/Payment/index.jsx",
              lineNumber: 73,
              columnNumber: 21
            }, this),
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "mx-2", children: "Available Offers" }, void 0, false, {
              fileName: "app/routes/Payment/index.jsx",
              lineNumber: 74,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/Payment/index.jsx",
            lineNumber: 72,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "card2-text mt-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FcGoogle, { size: 16 }, void 0, false, {
              fileName: "app/routes/Payment/index.jsx",
              lineNumber: 77,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "gpay font-weight-bold mx-2 ", children: "Wallet" }, void 0, false, {
              fileName: "app/routes/Payment/index.jsx",
              lineNumber: 78,
              columnNumber: 21
            }, this),
            " ",
            ": Get Rs.500 Cashback on BuildMyBody on payment via GPay Wallet ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-weight-bold", children: "T&C" }, void 0, false, {
              fileName: "app/routes/Payment/index.jsx",
              lineNumber: 82,
              columnNumber: 28
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/Payment/index.jsx",
            lineNumber: 76,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "show-more mt-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "a",
              {
                "data-toggle": "collapse",
                href: "#collapseExample",
                role: "button",
                "aria-expanded": "false",
                "aria-controls": "collapseExample",
                children: [
                  "Show More",
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BsChevronDown, { className: "icona" }, void 0, false, {
                    fileName: "app/routes/Payment/index.jsx",
                    lineNumber: 94,
                    columnNumber: 25
                  }, this)
                ]
              },
              void 0,
              true,
              {
                fileName: "app/routes/Payment/index.jsx",
                lineNumber: 86,
                columnNumber: 23
              },
              this
            ) }, void 0, false, {
              fileName: "app/routes/Payment/index.jsx",
              lineNumber: 85,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "collapse", id: "collapseExample", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "card3 card-body", children: "No offers present for selected item at the moment." }, void 0, false, {
              fileName: "app/routes/Payment/index.jsx",
              lineNumber: 98,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "app/routes/Payment/index.jsx",
              lineNumber: 97,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/Payment/index.jsx",
            lineNumber: 84,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/Payment/index.jsx",
          lineNumber: 71,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/Payment/index.jsx",
          lineNumber: 70,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/Payment/index.jsx",
        lineNumber: 25,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "col-sm-7", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "card mx-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "row d-flex justify-content-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "col-12", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { id: "progressbar", className: "text-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "step0" }, void 0, false, {
              fileName: "app/routes/Payment/index.jsx",
              lineNumber: 112,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "step0" }, void 0, false, {
              fileName: "app/routes/Payment/index.jsx",
              lineNumber: 113,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "step0" }, void 0, false, {
              fileName: "app/routes/Payment/index.jsx",
              lineNumber: 114,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/Payment/index.jsx",
            lineNumber: 111,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/routes/Payment/index.jsx",
            lineNumber: 110,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/Payment/index.jsx",
            lineNumber: 109,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "row mt-5 mx-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "btn", children: [
              "Pay using UPI",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
                " ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  "img",
                  {
                    src: "https://img2.hkrtcdn.com/mb/static/media/common/SecurePayment/upi.svg",
                    alt: "upi"
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/Payment/index.jsx",
                    lineNumber: 123,
                    columnNumber: 23
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "app/routes/Payment/index.jsx",
                lineNumber: 121,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/Payment/index.jsx",
              lineNumber: 119,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "btn", children: [
              "Debit/Credit Card",
              " ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
                " ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  "img",
                  {
                    className: "mx-1",
                    src: "https://img10.hkrtcdn.com/mb/static/media/common/SecurePayment/visa.svg",
                    alt: "visa"
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/Payment/index.jsx",
                    lineNumber: 133,
                    columnNumber: 23
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  "img",
                  {
                    className: "mx-1",
                    src: "https://img10.hkrtcdn.com/mb/static/media/common/SecurePayment/rupay.svg",
                    alt: "rupay"
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/Payment/index.jsx",
                    lineNumber: 138,
                    columnNumber: 23
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  "img",
                  {
                    src: "https://img10.hkrtcdn.com/mb/static/media/common/SecurePayment/master.svg",
                    alt: "master"
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/Payment/index.jsx",
                    lineNumber: 143,
                    columnNumber: 23
                  },
                  this
                ),
                " "
              ] }, void 0, true, {
                fileName: "app/routes/Payment/index.jsx",
                lineNumber: 131,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/Payment/index.jsx",
              lineNumber: 129,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "btn ", children: [
              "CRED Pay",
              " ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
                " ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  "img",
                  {
                    src: "https://img10.hkrtcdn.com/mb/static/media/common/SecurePayment/crednew.svg",
                    alt: "Cred"
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/Payment/index.jsx",
                    lineNumber: 153,
                    columnNumber: 23
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "app/routes/Payment/index.jsx",
                lineNumber: 151,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/Payment/index.jsx",
              lineNumber: 149,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "btn mt-3", children: [
              "Wallets",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
                " ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  "img",
                  {
                    className: "mx-2",
                    src: "https://img10.hkrtcdn.com/mb/static/media/common/SecurePayment/phonepa.svg",
                    alt: "phonePa"
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/Payment/index.jsx",
                    lineNumber: 163,
                    columnNumber: 23
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  "img",
                  {
                    src: "https://img10.hkrtcdn.com/mb/static/media/common/SecurePayment/paytm.svg",
                    alt: "paytm"
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/Payment/index.jsx",
                    lineNumber: 168,
                    columnNumber: 23
                  },
                  this
                ),
                " "
              ] }, void 0, true, {
                fileName: "app/routes/Payment/index.jsx",
                lineNumber: 161,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/Payment/index.jsx",
              lineNumber: 159,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "btn mt-3", children: "Internet Banking" }, void 0, false, {
              fileName: "app/routes/Payment/index.jsx",
              lineNumber: 174,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "btn mt-3", children: "Cassh On Delivery" }, void 0, false, {
              fileName: "app/routes/Payment/index.jsx",
              lineNumber: 177,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "btn mt-3", children: "EMI" }, void 0, false, {
              fileName: "app/routes/Payment/index.jsx",
              lineNumber: 180,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/Payment/index.jsx",
            lineNumber: 118,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hr", { className: "fhr" }, void 0, false, {
            fileName: "app/routes/Payment/index.jsx",
            lineNumber: 184,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/Payment/index.jsx",
          lineNumber: 108,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "card4 mx-4", style: { width: "24rem" }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "card4-body", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "card4-text", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "img",
              {
                src: "https://img10.hkrtcdn.com/mb/static/media/common/utilities/radio/in-active-new.svg",
                className: isActive ? "activeimg" : "",
                onClick: handleClick,
                alt: "xda"
              },
              void 0,
              false,
              {
                fileName: "app/routes/Payment/index.jsx",
                lineNumber: 189,
                columnNumber: 21
              },
              this
            ),
            "ombhatt1158@oksbi"
          ] }, void 0, true, {
            fileName: "app/routes/Payment/index.jsx",
            lineNumber: 188,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/Payment/index.jsx",
            lineNumber: 187,
            columnNumber: 17
          }, this),
          isButtonVisible && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { id: "securepay", href: "/", className: "btn btn-secondary", children: "Pay Now" }, void 0, false, {
            fileName: "app/routes/Payment/index.jsx",
            lineNumber: 199,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/Payment/index.jsx",
          lineNumber: 186,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "accordion mx-4 mt-4", style: { width: "24rem" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "card", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "card-header", id: "headingOne", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h5", { className: "mb-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "button",
          {
            className: "btn btn-link",
            "data-toggle": "collapse",
            "data-target": "#collapseOne",
            "aria-expanded": "true",
            "aria-controls": "collapseOne",
            children: "Add a new UPI ID"
          },
          void 0,
          false,
          {
            fileName: "app/routes/Payment/index.jsx",
            lineNumber: 208,
            columnNumber: 23
          },
          this
        ) }, void 0, false, {
          fileName: "app/routes/Payment/index.jsx",
          lineNumber: 207,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/routes/Payment/index.jsx",
          lineNumber: 206,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/Payment/index.jsx",
          lineNumber: 205,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/Payment/index.jsx",
          lineNumber: 204,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "div",
          {
            id: "collapseOne",
            className: "collapse show mx-4",
            "aria-labelledby": "headingOne",
            "data-parent": "#accordion",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { className: "form-inline", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "form-group", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "input",
                {
                  type: "password",
                  className: "form-control",
                  id: "inputPassword2",
                  placeholder: "Enter your UPI ID"
                },
                void 0,
                false,
                {
                  fileName: "app/routes/Payment/index.jsx",
                  lineNumber: 229,
                  columnNumber: 21
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "btn btn-dark", children: "Verify" }, void 0, false, {
                fileName: "app/routes/Payment/index.jsx",
                lineNumber: 235,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/Payment/index.jsx",
              lineNumber: 228,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/routes/Payment/index.jsx",
              lineNumber: 227,
              columnNumber: 17
            }, this)
          },
          void 0,
          false,
          {
            fileName: "app/routes/Payment/index.jsx",
            lineNumber: 221,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/routes/Payment/index.jsx",
        lineNumber: 107,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/Payment/index.jsx",
      lineNumber: 24,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/Payment/index.jsx",
      lineNumber: 23,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/Payment/index.jsx",
      lineNumber: 22,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Footer_default, {}, void 0, false, {
      fileName: "app/routes/Payment/index.jsx",
      lineNumber: 246,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/Payment/index.jsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
};
var Payment_default = Payment;
export {
  Payment_default as default
};
//# sourceMappingURL=/build/routes/Payment-CRAJCVWW.js.map
