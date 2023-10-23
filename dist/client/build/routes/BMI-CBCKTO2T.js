import {
  Footer_default
} from "/build/_shared/chunk-GKGMXBQP.js";
import {
  Navbar_default
} from "/build/_shared/chunk-SOVGPGBS.js";
import "/build/_shared/chunk-7NHAI5LA.js";
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
            " ",
            "Your Bmi is ",
            bmiResult
          ] }, void 0, true, {
            fileName: "app/routes/BMI/index.jsx",
            lineNumber: 114,
            columnNumber: 17
          }, this),
          bmiResult && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "result", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Diet Infomation:" }, void 0, false, {
              fileName: "app/routes/BMI/index.jsx",
              lineNumber: 121,
              columnNumber: 21
            }, this),
            getDietChart(bmiResult)
          ] }, void 0, true, {
            fileName: "app/routes/BMI/index.jsx",
            lineNumber: 120,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/BMI/index.jsx",
          lineNumber: 113,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container-fullwidth mb-5", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hr", { className: "line-hr" }, void 0, false, {
            fileName: "app/routes/BMI/index.jsx",
            lineNumber: 127,
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
                  lineNumber: 131,
                  columnNumber: 23
                },
                this
              ) }, void 0, false, {
                fileName: "app/routes/BMI/index.jsx",
                lineNumber: 130,
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
                  lineNumber: 145,
                  columnNumber: 23
                },
                this
              ) }, void 0, false, {
                fileName: "app/routes/BMI/index.jsx",
                lineNumber: 144,
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
                  lineNumber: 159,
                  columnNumber: 23
                },
                this
              ) }, void 0, false, {
                fileName: "app/routes/BMI/index.jsx",
                lineNumber: 158,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/BMI/index.jsx",
              lineNumber: 129,
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
                  children: "To Gain Weight: Increase your calorie intake, focus on nutrient-rich foods, eat consistently throughout the day, include strength training in your routine, make sure to get enough protein, consider incorporating healthy fats, and keep track of your progress. \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 To Lose Weight: Decrease your calorie intake, maintain a balanced diet, be mindful of portion sizes, engage in regular exercise, stay hydrated, manage stress, listen to your body's hunger cues, and seek professional guidance if needed."
                },
                void 0,
                false,
                {
                  fileName: "app/routes/BMI/index.jsx",
                  lineNumber: 174,
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
                  children: "Diet charts are very important for beneficial results, you can get your customized diet charts from your personal trainer or you can dm our contacts for getting your personalized diet charts."
                },
                void 0,
                false,
                {
                  fileName: "app/routes/BMI/index.jsx",
                  lineNumber: 192,
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
                  children: "For Weight Loss: Combine cardio exercises like running or cycling with strength training 2-3 times weekly. Aim for around 150 minutes of moderate-intensity cardio or 75 minutes of vigorous-intensity cardio per week. Include stretching for flexibility and gradually increase exercise intensity. For Muscle Gain: Emphasize strength training using resistance exercises like weightlifting. Target major muscle groups 2-3 times a week, allowing adequate rest between workouts. Focus on progressive overload to increase strength and muscle mass over time."
                },
                void 0,
                false,
                {
                  fileName: "app/routes/BMI/index.jsx",
                  lineNumber: 203,
                  columnNumber: 21
                },
                this
              )
            ] }, void 0, true, {
              fileName: "app/routes/BMI/index.jsx",
              lineNumber: 173,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/BMI/index.jsx",
            lineNumber: 128,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/BMI/index.jsx",
          lineNumber: 126,
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
          lineNumber: 227,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/BMI/index.jsx",
          lineNumber: 226,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/BMI/index.jsx",
          lineNumber: 225,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/blog", className: "blog-img", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "../img/blog-4.jpg", alt: "" }, void 0, false, {
            fileName: "app/routes/BMI/index.jsx",
            lineNumber: 232,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Increase Lifting Capacity" }, void 0, false, {
            fileName: "app/routes/BMI/index.jsx",
            lineNumber: 233,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/BMI/index.jsx",
          lineNumber: 231,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/blog", className: "blog-img", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "../img/blog-6.jpg", alt: "" }, void 0, false, {
            fileName: "app/routes/BMI/index.jsx",
            lineNumber: 236,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Rice vs Chapati" }, void 0, false, {
            fileName: "app/routes/BMI/index.jsx",
            lineNumber: 237,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/BMI/index.jsx",
          lineNumber: 235,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/BMI/index.jsx",
        lineNumber: 224,
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
      lineNumber: 243,
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
//# sourceMappingURL=/build/routes/BMI-CBCKTO2T.js.map
