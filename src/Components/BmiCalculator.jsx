/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import gpt from '../assets/gpt.svg';
import TestResultsGPT from './TestResultsGPT';

const BmiCalculator = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState('');
  const [showGptResults, setShowGptResults] = useState(false);

  const calculateBMI = () => {
    const heightInMeters = height / 100;
    const bmiValue = weight / (heightInMeters * heightInMeters);
    setBmi(bmiValue.toFixed(2));
    if (bmiValue < 18.5) setCategory('Underweight');
    else if (bmiValue < 24.9) setCategory('Normal weight');
    else if (bmiValue < 29.9) setCategory('Overweight');
    else setCategory('Obese');
  };

  const handleGptClick = () => {
    setShowGptResults(true);
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white dark:bg-neutral-200  rounded-xl shadow-md space-y-4">
      <h2 className="text-2xl dark:text-neutral-600 font-bold">BMI Calculator</h2>
      <input
        type="number"
        placeholder="Height (cm)"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
        className="border p-2 w-full"
      />
      <input
        type="number"
        placeholder="Weight (kg)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        className="border p-2 w-full"
      />

      <div className="flex gap-5">
        <button onClick={calculateBMI} className="bg-blue-500 text-white p-2 rounded">
          Calculate BMI
        </button>

        <img
          src={gpt}
          alt="GPT"
          className="cursor-pointer w-8 h-8"
          style={{ filter: 'invert(50%)' }}
          onClick={handleGptClick}
        />
      </div>

      {bmi && (
        <div className="mt-4 dark:text-neutral-600">
          <p>BMI: {bmi}</p>
          <p>Category: {category}</p>
        </div>
      )}

      {showGptResults && bmi && (
        <TestResultsGPT testName="BMI (Body Mass Index)" testValue={bmi}  category={category}  />
      )}
    </div>
  );
};

export default BmiCalculator;
