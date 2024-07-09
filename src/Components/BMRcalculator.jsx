/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import gpt from '../assets/gpt.svg';
import TestResultsGPT from './TestResultsGPT';

const BMRCalculator = () => {
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [gender, setGender] = useState('');
  const [bmr, setBmr] = useState(null);
  const [showGptResults, setShowGptResults] = useState(false);

  const calculateBMR = () => {
    let bmrValue;
    if (gender === 'male') {
      bmrValue = 88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age);
    } else if (gender === 'female') {
      bmrValue = 447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age);
    }
    setBmr(bmrValue.toFixed(2));
  };

  const handleGptClick = () => {
    setShowGptResults(true);
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white dark:bg-neutral-200 rounded-xl shadow-md space-y-4">
      <h2 className="text-2xl dark:text-neutral-600 font-bold">BMR Calculator</h2>
      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        className="border p-2 w-full"
      />
      <input
        type="number"
        placeholder="Weight (kg)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        className="border p-2 w-full"
      />
      <input
        type="number"
        placeholder="Height (cm)"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
        className="border p-2 w-full"
      />
      <select
        value={gender}
        onChange={(e) => setGender(e.target.value)}
        className="border p-2 w-full"
      >
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <div className="flex gap-5">
        <button onClick={calculateBMR} className="bg-blue-500 text-white p-2 rounded">
          Calculate BMR
        </button>


        <img
          src={gpt}
          alt="GPT"
          className="cursor-pointer w-8 h-8"
          style={{ filter: 'invert(50%)' }}
          onClick={handleGptClick}
        />

      </div>

      {bmr && (
        <div className="mt-4 dark:text-neutral-600">
          <p>BMR: {bmr} kcal/day</p>
        </div>
      )}

      {showGptResults && bmr && (
        <TestResultsGPT testName="BMR (Basal Metabolic Rate)" testValue={bmr} />
      )}
    </div>
  );
};

export default BMRCalculator;
