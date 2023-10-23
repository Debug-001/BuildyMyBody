import {
  Footer_default
} from "/build/_shared/chunk-XOI35JXB.js";
import {
  Navbar_default
} from "/build/_shared/chunk-SFU7YTWE.js";
import "/build/_shared/chunk-K4GQNGL6.js";
import "/build/_shared/chunk-3DYM7AG2.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-4VTZQJYZ.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/BMI/index.jsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var BMI = () => {
  const [age, setAge] = (0, import_react.useState)("");
  const [height, setHeight] = (0, import_react.useState)("");
  const [weight, setWeight] = (0, import_react.useState)("");
  const [bmiResult, setBMIResult] = (0, import_react.useState)(null);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "age":
        setAge(value);
        break;
      case "height":
        setHeight(value);
        break;
      case "weight":
        setWeight(value);
        break;
      default:
        break;
    }
  };
  const handleReset = () => {
    if (age || height || weight) {
      setAge("");
      setHeight("");
      setWeight("");
      setBMIResult(null);
      setDietChart("");
    } else {
      alert("Fields are already empty. Nothing to reset.");
    }
  };
  const calculateBMI = () => {
    if (!age || !height || !weight) {
      alert("Please fill all the fields.");
      return;
    }
    const heightInMeters = height / 100;
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    setBMIResult(bmi);
  };
  const getDietChart = (bmi) => {
    if (bmi < 18.5) {
      return "Underweight Diet Chart: Eat a balanced diet with more calories and nutrient-rich foods. Increase intake of proteins, carbohydrates, and healthy fats.";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      return "Normal Weight Diet Chart: Maintain a balanced diet with a variety of foods. Include fruits, vegetables, whole grains, and lean proteins.";
    } else if (bmi >= 25 && bmi <= 29.9) {
      return "Overweight Diet Chart: Focus on portion control and reduce the intake of high-calorie and processed foods. Increase physical activity.";
    } else if (bmi >= 30 && bmi <= 34.9) {
      return "Obesity Class 1 Diet Chart: Adopt a well-balanced diet and increase physical activity. Consult a healthcare professional for personalized guidance.";
    } else if (bmi >= 35 && bmi <= 39.9) {
      return "Obesity Class 2 Diet Chart: Seek medical supervision and make significant lifestyle changes. Consult a healthcare professional for personalized guidance.";
    } else {
      return "BMI indicates Extreme Obesity: Consult a healthcare professional for personalized diet and exercise advice.";
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Navbar_default, {}, void 0, false, {
      fileName: "app/routes/BMI/index.jsx",
      lineNumber: 70,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { id: "bmi", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container pb-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "row", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "col-md-8 col-10", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "d-flex justify-content-start pt-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("em", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("u", { className: "underline", children: "BMI CAL" }, void 0, false, {
            fileName: "app/routes/BMI/index.jsx",
            lineNumber: 77,
            columnNumber: 19
          }, this),
          "CULATOR"
        ] }, void 0, true, {
          fileName: "app/routes/BMI/index.jsx",
          lineNumber: 76,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/BMI/index.jsx",
          lineNumber: 75,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "calc mt-5", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "place-text", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "input",
            {
              type: "number",
              name: "age",
              placeholder: "Age",
              value: age,
              onChange: handleInputChange
            },
            void 0,
            false,
            {
              fileName: "app/routes/BMI/index.jsx",
              lineNumber: 82,
              columnNumber: 19
            },
            this
          ) }, void 0, false, {
            fileName: "app/routes/BMI/index.jsx",
            lineNumber: 81,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "input",
            {
              type: "number",
              name: "height",
              placeholder: "Height (cm)",
              value: height,
              onChange: handleInputChange
            },
            void 0,
            false,
            {
              fileName: "app/routes/BMI/index.jsx",
              lineNumber: 91,
              columnNumber: 19
            },
            this
          ) }, void 0, false, {
            fileName: "app/routes/BMI/index.jsx",
            lineNumber: 90,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "input",
            {
              type: "number",
              name: "weight",
              placeholder: "Weight (kg)",
              value: weight,
              onChange: handleInputChange
            },
            void 0,
            false,
            {
              fileName: "app/routes/BMI/index.jsx",
              lineNumber: 100,
              columnNumber: 19
            },
            this
          ) }, void 0, false, {
            fileName: "app/routes/BMI/index.jsx",
            lineNumber: 99,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "btn-reset", onClick: calculateBMI, children: "Check" }, void 0, false, {
            fileName: "app/routes/BMI/index.jsx",
            lineNumber: 108,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/BMI/index.jsx",
          lineNumber: 80,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hr", { className: "line-hr" }, void 0, false, {
          fileName: "app/routes/BMI/index.jsx",
          lineNumber: 112,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "analysis flex-lg-column ", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bmi-result", style: { textAlign: "center" }, children: [
            " Your Bmi is ",
            bmiResult
          ] }, void 0, true, {
            fileName: "app/routes/BMI/index.jsx",
            lineNumber: 114,
            columnNumber: 17
          }, this),
          bmiResult && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "result", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Diet Infomation:" }, void 0, false, {
              fileName: "app/routes/BMI/index.jsx",
              lineNumber: 118,
              columnNumber: 21
            }, this),
            getDietChart(bmiResult)
          ] }, void 0, true, {
            fileName: "app/routes/BMI/index.jsx",
            lineNumber: 117,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/BMI/index.jsx",
          lineNumber: 113,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container-fullwidth mb-5", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hr", {}, void 0, false, {
            fileName: "app/routes/BMI/index.jsx",
            lineNumber: 124,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { id: "bmi-tabs", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "nav nav-tabs mt-4", id: "bmi-tab", role: "tablist", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "nav-item", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "a",
                {
                  className: "nav-link active",
                  id: "recom-tab",
                  "data-toggle": "tab",
                  href: "#recom",
                  role: "tab",
                  "aria-controls": "recom",
                  "aria-selected": "true",
                  children: "RECOMMENDATIONS"
                },
                void 0,
                false,
                {
                  fileName: "app/routes/BMI/index.jsx",
                  lineNumber: 128,
                  columnNumber: 23
                },
                this
              ) }, void 0, false, {
                fileName: "app/routes/BMI/index.jsx",
                lineNumber: 127,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "nav-item", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "a",
                {
                  className: "nav-link",
                  id: "diet-tab",
                  "data-toggle": "tab",
                  href: "#diet",
                  role: "tab",
                  "aria-controls": "diet",
                  "aria-selected": "false",
                  children: "DIET CHART"
                },
                void 0,
                false,
                {
                  fileName: "app/routes/BMI/index.jsx",
                  lineNumber: 142,
                  columnNumber: 23
                },
                this
              ) }, void 0, false, {
                fileName: "app/routes/BMI/index.jsx",
                lineNumber: 141,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "nav-item", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "a",
                {
                  className: "nav-link",
                  id: "work-tab",
                  "data-toggle": "tab",
                  href: "#work",
                  role: "tab",
                  "aria-controls": "work",
                  "aria-selected": "false",
                  children: "WORKOUT PLANS"
                },
                void 0,
                false,
                {
                  fileName: "app/routes/BMI/index.jsx",
                  lineNumber: 156,
                  columnNumber: 23
                },
                this
              ) }, void 0, false, {
                fileName: "app/routes/BMI/index.jsx",
                lineNumber: 155,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/BMI/index.jsx",
              lineNumber: 126,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "tab-content mt-3", id: "myTabContent", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "div",
                {
                  className: "tab-pane fade show active",
                  id: "recom",
                  role: "tabpanel",
                  "aria-labelledby": "recom-tab",
                  children: "Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui."
                },
                void 0,
                false,
                {
                  fileName: "app/routes/BMI/index.jsx",
                  lineNumber: 171,
                  columnNumber: 21
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "div",
                {
                  className: "tab-pane fade",
                  id: "diet",
                  role: "tabpanel",
                  "aria-labelledby": "diet-tab",
                  children: "Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park."
                },
                void 0,
                false,
                {
                  fileName: "app/routes/BMI/index.jsx",
                  lineNumber: 186,
                  columnNumber: 21
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "div",
                {
                  className: "tab-pane fade",
                  id: "work",
                  role: "tabpanel",
                  "aria-labelledby": "work-tab",
                  children: "Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr."
                },
                void 0,
                false,
                {
                  fileName: "app/routes/BMI/index.jsx",
                  lineNumber: 206,
                  columnNumber: 21
                },
                this
              )
            ] }, void 0, true, {
              fileName: "app/routes/BMI/index.jsx",
              lineNumber: 170,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/BMI/index.jsx",
            lineNumber: 125,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/BMI/index.jsx",
          lineNumber: 123,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/BMI/index.jsx",
        lineNumber: 74,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "col-md-4 col-4", id: "bmi-blogs", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "d-flex justify-content-start pt-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("em", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("u", { className: "underline", children: "BLOGS" }, void 0, false, {
          fileName: "app/routes/BMI/index.jsx",
          lineNumber: 231,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/BMI/index.jsx",
          lineNumber: 230,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/BMI/index.jsx",
          lineNumber: 229,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/blog", className: "blog-img", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "../img/blog-4.jpg", alt: "" }, void 0, false, {
            fileName: "app/routes/BMI/index.jsx",
            lineNumber: 236,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Increase Lifting Capacity" }, void 0, false, {
            fileName: "app/routes/BMI/index.jsx",
            lineNumber: 237,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/BMI/index.jsx",
          lineNumber: 235,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/blog", className: "blog-img", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "../img/blog-6.jpg", alt: "" }, void 0, false, {
            fileName: "app/routes/BMI/index.jsx",
            lineNumber: 240,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Rice vs Chapati" }, void 0, false, {
            fileName: "app/routes/BMI/index.jsx",
            lineNumber: 241,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/BMI/index.jsx",
          lineNumber: 239,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/BMI/index.jsx",
        lineNumber: 228,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/BMI/index.jsx",
      lineNumber: 73,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/BMI/index.jsx",
      lineNumber: 72,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/BMI/index.jsx",
      lineNumber: 71,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Footer_default, {}, void 0, false, {
      fileName: "app/routes/BMI/index.jsx",
      lineNumber: 247,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/BMI/index.jsx",
    lineNumber: 69,
    columnNumber: 5
  }, this);
};
var BMI_default = BMI;
export {
  BMI_default as default
};
//# sourceMappingURL=/build/routes/BMI-RJLA3C37.js.map
