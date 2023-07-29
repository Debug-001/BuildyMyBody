import React, { useState } from 'react';
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'

function BMI() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [bmi, setBMI] = useState(null);

  const calculateBMI = (e) => {
    e.preventDefault();

    const weightInKg = parseFloat(weight);
    const heightInMeters = parseFloat(height) / 100;
    const bmiValue = weightInKg / (heightInMeters * heightInMeters);
    setBMI(bmiValue.toFixed(2));
  };

  return (
    <>
    <Navbar/>
    <div className='container'>
      <h1 className='d-flex justify-content-center'><em>BMI Calculator</em></h1>
      <form onSubmit={calculateBMI}>
        <div className='d-flex justify-content-start'>
          <label>Weight (kg):</label>
          <input
            type="number"
            step="0.01"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div className='
        ' >
          <label>Height (cm):</label>
          <input
            type="number"
            step="0.01"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <div>
          <label>Age:</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <button className='btn btn-warning border-radius-4' type="submit">Calculate BMI</button>
      </form>
      {bmi && <p>Your BMI is: {bmi}</p>}
    </div>
    <Footer/>

    </>
  );
}

export default BMI;
