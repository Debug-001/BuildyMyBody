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

// app/routes/account.addresses.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var meta = () => {
  return [{ title: "Addresses" }];
};
function Addresses() {
  const { customer } = useOutletContext();
  const { defaultAddress, addresses } = customer;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "account-card profile-clr pt-5 pb-5", style: { border: "2px solid grey" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "account-addresses container ", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "Addresses" }, void 0, false, {
      fileName: "app/routes/account.addresses.jsx",
      lineNumber: 209,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/routes/account.addresses.jsx",
      lineNumber: 210,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("legend", {}, void 0, false, {
        fileName: "app/routes/account.addresses.jsx",
        lineNumber: 212,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        ExistingAddresses,
        {
          addresses,
          defaultAddress
        },
        void 0,
        false,
        {
          fileName: "app/routes/account.addresses.jsx",
          lineNumber: 213,
          columnNumber: 13
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/routes/account.addresses.jsx",
      lineNumber: 211,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/routes/account.addresses.jsx",
      lineNumber: 218,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hr", { className: "add-hr" }, void 0, false, {
      fileName: "app/routes/account.addresses.jsx",
      lineNumber: 219,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/routes/account.addresses.jsx",
      lineNumber: 220,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("legend", { children: "Create address" }, void 0, false, {
        fileName: "app/routes/account.addresses.jsx",
        lineNumber: 222,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NewAddressForm, {}, void 0, false, {
        fileName: "app/routes/account.addresses.jsx",
        lineNumber: 223,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/account.addresses.jsx",
      lineNumber: 221,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/account.addresses.jsx",
    lineNumber: 208,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/account.addresses.jsx",
    lineNumber: 207,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/account.addresses.jsx",
    lineNumber: 206,
    columnNumber: 5
  }, this) }, void 0, false, {
    fileName: "app/routes/account.addresses.jsx",
    lineNumber: 205,
    columnNumber: 5
  }, this);
}
function NewAddressForm() {
  const newAddress = {
    address1: "",
    address2: "",
    city: "",
    company: "",
    country: "",
    firstName: "",
    id: "new",
    lastName: "",
    phone: "",
    province: "",
    zip: ""
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AddressForm, { address: newAddress, defaultAddress: null, children: ({ stateForMethod }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    "button",
    {
      disabled: stateForMethod("POST") !== "idle",
      formMethod: "POST",
      type: "submit",
      className: "w-25 profile-btn",
      children: stateForMethod("POST") !== "idle" ? "Creating" : "Create"
    },
    void 0,
    false,
    {
      fileName: "app/routes/account.addresses.jsx",
      lineNumber: 251,
      columnNumber: 11
    },
    this
  ) }, void 0, false, {
    fileName: "app/routes/account.addresses.jsx",
    lineNumber: 250,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/account.addresses.jsx",
    lineNumber: 248,
    columnNumber: 5
  }, this);
}
function ExistingAddresses({ addresses, defaultAddress }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("legend", { children: "Existing addresses" }, void 0, false, {
      fileName: "app/routes/account.addresses.jsx",
      lineNumber: 268,
      columnNumber: 7
    }, this),
    addresses.nodes.map((address) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      AddressForm,
      {
        address,
        defaultAddress,
        children: ({ stateForMethod }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "button",
            {
              disabled: stateForMethod("PUT") !== "idle",
              formMethod: "PUT",
              type: "submit",
              className: "w-25 profile-btn",
              children: stateForMethod("PUT") !== "idle" ? "Saving" : "Save"
            },
            void 0,
            false,
            {
              fileName: "app/routes/account.addresses.jsx",
              lineNumber: 277,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "button",
            {
              disabled: stateForMethod("DELETE") !== "idle",
              formMethod: "DELETE",
              type: "submit",
              className: "w-25 ml-5 profile-btn",
              children: stateForMethod("DELETE") !== "idle" ? "Deleting" : "Delete"
            },
            void 0,
            false,
            {
              fileName: "app/routes/account.addresses.jsx",
              lineNumber: 285,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/routes/account.addresses.jsx",
          lineNumber: 276,
          columnNumber: 13
        }, this)
      },
      address.id,
      false,
      {
        fileName: "app/routes/account.addresses.jsx",
        lineNumber: 270,
        columnNumber: 9
      },
      this
    ))
  ] }, void 0, true, {
    fileName: "app/routes/account.addresses.jsx",
    lineNumber: 267,
    columnNumber: 5
  }, this);
}
function AddressForm({ address, defaultAddress, children }) {
  const { state, formMethod } = useNavigation();
  const action = useActionData();
  const error = action?.error?.[address.id];
  const isDefaultAddress = defaultAddress?.id === address.id;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { id: address.id, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "row", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "col-lg-6 col-md-6 col-sm-12", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("fieldset", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "addressId", defaultValue: address.id }, void 0, false, {
        fileName: "app/routes/account.addresses.jsx",
        lineNumber: 315,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "firstName", children: "First name*" }, void 0, false, {
        fileName: "app/routes/account.addresses.jsx",
        lineNumber: 316,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/routes/account.addresses.jsx",
        lineNumber: 317,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "input",
        {
          className: "w-75 profile-input",
          "aria-label": "First name",
          autoComplete: "given-name",
          defaultValue: address?.firstName ?? "",
          id: "firstName",
          name: "firstName",
          placeholder: "First name",
          required: true,
          type: "text"
        },
        void 0,
        false,
        {
          fileName: "app/routes/account.addresses.jsx",
          lineNumber: 318,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/routes/account.addresses.jsx",
        lineNumber: 329,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "lastName", children: "Last name*" }, void 0, false, {
        fileName: "app/routes/account.addresses.jsx",
        lineNumber: 330,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/routes/account.addresses.jsx",
        lineNumber: 331,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "input",
        {
          className: "w-75 profile-input",
          "aria-label": "Last name",
          autoComplete: "family-name",
          defaultValue: address?.lastName ?? "",
          id: "lastName",
          name: "lastName",
          placeholder: "Last name",
          required: true,
          type: "text"
        },
        void 0,
        false,
        {
          fileName: "app/routes/account.addresses.jsx",
          lineNumber: 332,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/routes/account.addresses.jsx",
        lineNumber: 343,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "company", children: "Company" }, void 0, false, {
        fileName: "app/routes/account.addresses.jsx",
        lineNumber: 344,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/routes/account.addresses.jsx",
        lineNumber: 345,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "input",
        {
          className: "w-75 profile-input",
          "aria-label": "Company",
          autoComplete: "organization",
          defaultValue: address?.company ?? "",
          id: "company",
          name: "company",
          placeholder: "Company",
          type: "text"
        },
        void 0,
        false,
        {
          fileName: "app/routes/account.addresses.jsx",
          lineNumber: 346,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/routes/account.addresses.jsx",
        lineNumber: 356,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "address1", children: "Address line*" }, void 0, false, {
        fileName: "app/routes/account.addresses.jsx",
        lineNumber: 357,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/routes/account.addresses.jsx",
        lineNumber: 358,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "input",
        {
          className: "w-75 profile-input",
          "aria-label": "Address line 1",
          autoComplete: "address-line1",
          defaultValue: address?.address1 ?? "",
          id: "address1",
          name: "address1",
          placeholder: "Address line 1*",
          required: true,
          type: "text"
        },
        void 0,
        false,
        {
          fileName: "app/routes/account.addresses.jsx",
          lineNumber: 359,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/routes/account.addresses.jsx",
        lineNumber: 370,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "address2", children: "Address line 2" }, void 0, false, {
        fileName: "app/routes/account.addresses.jsx",
        lineNumber: 371,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/routes/account.addresses.jsx",
        lineNumber: 372,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "input",
        {
          className: "w-75 profile-input",
          "aria-label": "Address line 2",
          autoComplete: "address-line2",
          defaultValue: address?.address2 ?? "",
          id: "address2",
          name: "address2",
          placeholder: "Address line 2",
          type: "text"
        },
        void 0,
        false,
        {
          fileName: "app/routes/account.addresses.jsx",
          lineNumber: 373,
          columnNumber: 17
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/routes/account.addresses.jsx",
      lineNumber: 314,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/routes/account.addresses.jsx",
      lineNumber: 313,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "col", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("fieldset", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "city", children: "City*" }, void 0, false, {
        fileName: "app/routes/account.addresses.jsx",
        lineNumber: 387,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/routes/account.addresses.jsx",
        lineNumber: 388,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "input",
        {
          className: "w-75 profile-input",
          "aria-label": "City",
          autoComplete: "address-level2",
          defaultValue: address?.city ?? "",
          id: "city",
          name: "city",
          placeholder: "City",
          required: true,
          type: "text"
        },
        void 0,
        false,
        {
          fileName: "app/routes/account.addresses.jsx",
          lineNumber: 389,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/routes/account.addresses.jsx",
        lineNumber: 400,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "province", children: "State / Province*" }, void 0, false, {
        fileName: "app/routes/account.addresses.jsx",
        lineNumber: 401,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/routes/account.addresses.jsx",
        lineNumber: 402,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "input",
        {
          className: "w-75 profile-input",
          "aria-label": "State",
          autoComplete: "address-level1",
          defaultValue: address?.province ?? "",
          id: "province",
          name: "province",
          placeholder: "State / Province",
          required: true,
          type: "text"
        },
        void 0,
        false,
        {
          fileName: "app/routes/account.addresses.jsx",
          lineNumber: 403,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/routes/account.addresses.jsx",
        lineNumber: 414,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "zip", children: "Zip / Postal Code*" }, void 0, false, {
        fileName: "app/routes/account.addresses.jsx",
        lineNumber: 415,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/routes/account.addresses.jsx",
        lineNumber: 416,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "input",
        {
          className: "w-75 profile-input",
          "aria-label": "Zip",
          autoComplete: "postal-code",
          defaultValue: address?.zip ?? "",
          id: "zip",
          name: "zip",
          placeholder: "Zip / Postal Code",
          required: true,
          type: "text"
        },
        void 0,
        false,
        {
          fileName: "app/routes/account.addresses.jsx",
          lineNumber: 417,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/routes/account.addresses.jsx",
        lineNumber: 428,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "country", children: "Country*" }, void 0, false, {
        fileName: "app/routes/account.addresses.jsx",
        lineNumber: 429,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/routes/account.addresses.jsx",
        lineNumber: 430,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "input",
        {
          className: "w-75 profile-input",
          "aria-label": "Country",
          autoComplete: "country-name",
          defaultValue: address?.country ?? "",
          id: "country",
          name: "country",
          placeholder: "Country",
          required: true,
          type: "text"
        },
        void 0,
        false,
        {
          fileName: "app/routes/account.addresses.jsx",
          lineNumber: 431,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/routes/account.addresses.jsx",
        lineNumber: 442,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "phone", children: "Phone" }, void 0, false, {
        fileName: "app/routes/account.addresses.jsx",
        lineNumber: 443,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/routes/account.addresses.jsx",
        lineNumber: 444,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "input",
        {
          className: "w-75 profile-input",
          "aria-label": "Phone",
          autoComplete: "tel",
          defaultValue: address?.phone ?? "",
          id: "phone",
          name: "phone",
          placeholder: "+16135551111",
          pattern: "^\\+?[1-9]\\d{3,14}$",
          type: "tel"
        },
        void 0,
        false,
        {
          fileName: "app/routes/account.addresses.jsx",
          lineNumber: 445,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "input",
          {
            defaultChecked: isDefaultAddress,
            id: "defaultAddress",
            name: "defaultAddress",
            type: "checkbox"
          },
          void 0,
          false,
          {
            fileName: "app/routes/account.addresses.jsx",
            lineNumber: 457,
            columnNumber: 19
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "defaultAddress", className: "px-2", children: "Set as default address" }, void 0, false, {
          fileName: "app/routes/account.addresses.jsx",
          lineNumber: 463,
          columnNumber: 19
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/account.addresses.jsx",
        lineNumber: 456,
        columnNumber: 17
      }, this),
      error ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("mark", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("small", { children: error }, void 0, false, {
        fileName: "app/routes/account.addresses.jsx",
        lineNumber: 470,
        columnNumber: 23
      }, this) }, void 0, false, {
        fileName: "app/routes/account.addresses.jsx",
        lineNumber: 469,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/account.addresses.jsx",
        lineNumber: 468,
        columnNumber: 19
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/routes/account.addresses.jsx",
        lineNumber: 474,
        columnNumber: 19
      }, this),
      children({
        stateForMethod: (method) => formMethod === method ? state : "idle"
      })
    ] }, void 0, true, {
      fileName: "app/routes/account.addresses.jsx",
      lineNumber: 386,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/routes/account.addresses.jsx",
      lineNumber: 385,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/account.addresses.jsx",
    lineNumber: 312,
    columnNumber: 11
  }, this) }, void 0, false, {
    fileName: "app/routes/account.addresses.jsx",
    lineNumber: 311,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/account.addresses.jsx",
    lineNumber: 309,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/account.addresses.jsx",
    lineNumber: 307,
    columnNumber: 5
  }, this);
}
export {
  Addresses as default,
  meta
};
//# sourceMappingURL=/build/routes/account.addresses-ZF75Q2FE.js.map
