import {useState} from 'react';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';

const BMI = () => {
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmiResult, setBMIResult] = useState(null);

  const handleInputChange = (e) => {
    const {name, value} = e.target;

    switch (name) {
      case 'age':
        setAge(value);
        break;
      case 'height':
        setHeight(value);
        break;
      case 'weight':
        setWeight(value);
        break;
      default:
        break;
    }
  };

  const handleReset = () => {
    if (age || height || weight) {
      setAge('');
      setHeight('');
      setWeight('');
      setBMIResult(null);
      setDietChart('');
    } else {
      alert('Fields are already empty. Nothing to reset.');
    }
  };

  const calculateBMI = () => {
    if (!age || !height || !weight) {
      alert('Please fill all the fields.');
      return;
    }

    const heightInMeters = height / 100; // Convert height to meters
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    setBMIResult(bmi);
  };

  const getDietChart = (bmi) => {
    if (bmi < 18.5) {
      return 'Underweight Diet Chart: Eat a balanced diet with more calories and nutrient-rich foods. Increase intake of proteins, carbohydrates, and healthy fats.';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      return 'Normal Weight Diet Chart: Maintain a balanced diet with a variety of foods. Include fruits, vegetables, whole grains, and lean proteins.';
    } else if (bmi >= 25 && bmi <= 29.9) {
      return 'Overweight Diet Chart: Focus on portion control and reduce the intake of high-calorie and processed foods. Increase physical activity.';
    } else if (bmi >= 30 && bmi <= 34.9) {
      return 'Obesity Class 1 Diet Chart: Adopt a well-balanced diet and increase physical activity. Consult a healthcare professional for personalized guidance.';
    } else if (bmi >= 35 && bmi <= 39.9) {
      return 'Obesity Class 2 Diet Chart: Seek medical supervision and make significant lifestyle changes. Consult a healthcare professional for personalized guidance.';
    } else {
      return 'BMI indicates Extreme Obesity: Consult a healthcare professional for personalized diet and exercise advice.';
    }
  };

  return (
    <>
      <Navbar />
      <section id="bmi">
        <div className="container pb-5">
          <div className="row">
            <div className="col-md-8 col-10">
              <h1 className="d-flex justify-content-start pt-5">
                <em>
                  <u className="underline">BMI CAL</u>CULATOR
                </em>
              </h1>
              <div className="calc mt-5">
                <div className="place-text">
                  <input
                    type="number"
                    name="age"
                    placeholder="Age"
                    value={age}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <input
                    type="number"
                    name="height"
                    placeholder="Height (cm)"
                    value={height}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <input
                    type="number"
                    name="weight"
                    placeholder="Weight (kg)"
                    value={weight}
                    onChange={handleInputChange}
                  />
                </div>
                <button className="btn-reset" onClick={calculateBMI}>
                  Check
                </button>
              </div>
              <hr className="line-hr" />
              <div className="analysis flex-lg-column ">
                <div className="bmi-result" style={{textAlign: 'center'}}>
                  {' '}
                  Your Bmi is {bmiResult}
                </div>
                {/* {bmiResult && <div className='result'>Your BMI: {bmiResult}</div>} */}
                {bmiResult && (
                  <div className="result">
                    <p>Diet Infomation:</p>
                    {getDietChart(bmiResult)}
                  </div>
                )}
              </div>
              <div className="container-fullwidth mb-5">
                <hr className="line-hr" />
                <div id="bmi-tabs">
                  <ul className="nav nav-tabs mt-4" id="bmi-tab" role="tablist">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        id="recom-tab"
                        data-toggle="tab"
                        href="#recom"
                        role="tab"
                        aria-controls="recom"
                        aria-selected="true"
                      >
                        RECOMMENDATIONS
                      </a>
                    </li>
                    {/* <div className="vl mt-2 py-3 mx-2"></div> */}
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="diet-tab"
                        data-toggle="tab"
                        href="#diet"
                        role="tab"
                        aria-controls="diet"
                        aria-selected="false"
                      >
                        DIET CHART
                      </a>
                    </li>
                    {/* <div className="vl mt-2 py-3 mx-2"></div> */}
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="work-tab"
                        data-toggle="tab"
                        href="#work"
                        role="tab"
                        aria-controls="work"
                        aria-selected="false"
                      >
                        WORKOUT PLANS
                      </a>
                    </li>
                  </ul>

                  <div className="tab-content mt-3" id="myTabContent">
                    <div
                      className="tab-pane fade show active"
                      id="recom"
                      role="tabpanel"
                      aria-labelledby="recom-tab"
                    >
                      To Gain Weight: Increase your calorie intake, focus on
                      nutrient-rich foods, eat consistently throughout the day,
                      include strength training in your routine, make sure to
                      get enough protein, consider incorporating healthy fats,
                      and keep track of your progress. &nbsp; &nbsp; &nbsp;
                      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                      &nbsp; To Lose Weight: Decrease your calorie intake,
                      maintain a balanced diet, be mindful of portion sizes,
                      engage in regular exercise, stay hydrated, manage stress,
                      listen to your body's hunger cues, and seek professional
                      guidance if needed.
                    </div>
                    <div
                      className="tab-pane fade"
                      id="diet"
                      role="tabpanel"
                      aria-labelledby="diet-tab"
                    >
                      Diet charts are very important for beneficial results, you
                      can get your customized diet charts from your personal
                      trainer or you can dm our contacts for getting your
                      personalized diet charts.
                    </div>
                    <div
                      className="tab-pane fade"
                      id="work"
                      role="tabpanel"
                      aria-labelledby="work-tab"
                    >
                      For Weight Loss: Combine cardio exercises like running or
                      cycling with strength training 2-3 times weekly. Aim for
                      around 150 minutes of moderate-intensity cardio or 75
                      minutes of vigorous-intensity cardio per week. Include
                      stretching for flexibility and gradually increase exercise
                      intensity. For Muscle Gain: Emphasize strength training
                      using resistance exercises like weightlifting. Target
                      major muscle groups 2-3 times a week, allowing adequate
                      rest between workouts. Focus on progressive overload to
                      increase strength and muscle mass over time.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-4" id="bmi-blogs">
              <h1 className="d-flex justify-content-start pt-5">
                <em>
                  <u className="underline">BLOGS</u>
                </em>
              </h1>

              <a href="/blog" className="blog-img">
                <img src="../img/blog-4.jpg" alt="" />
                <p>Increase Lifting Capacity</p>
              </a>
              <a href="/blog" className="blog-img">
                <img src="../img/blog-6.jpg" alt="" />
                <p>Rice vs Chapati</p>
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default BMI;
