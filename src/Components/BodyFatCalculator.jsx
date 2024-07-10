/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import gpt from '../assets/gpt.svg';
import TestResultsGPT from './TestResultsGPT';

const BodyFatCalculator = () => {
  const [waist, setWaist] = useState('');
  const [neck, setNeck] = useState('');
  const [hip, setHip] = useState('');
  const [height, setHeight] = useState('');
  const [gender, setGender] = useState('');
  const [bodyFat, setBodyFat] = useState(null);
  const [showGptResults, setShowGptResults] = useState(false);
  const [error, setError] = useState('');

  const calculateBodyFat = () => {
    if (waist <= 0 || neck <= 0 || height <= 0 || (gender === 'female' && hip <= 0) || !gender) {
      setError('Please enter valid values for all fields');
      setBodyFat(null);
      return;
    }

    let bodyFatValue;
    if (gender === 'male') {
      bodyFatValue = 86.01 * Math.log10(waist - neck) - 70.041 * Math.log10(height) + 36.76;
    } else if (gender === 'female') {
      bodyFatValue = 163.205 * Math.log10(waist + hip - neck) - 97.684 * Math.log10(height) - 78.387;
    }
    setBodyFat(bodyFatValue.toFixed(2));
    setError('');
  };

  const handleGptClick = () => {
    setShowGptResults(true);
  };

  const resetCalculator = () => {
    setWaist('');
    setNeck('');
    setHip('');
    setHeight('');
    setGender('');
    setBodyFat(null);
    setShowGptResults(false);
    setError('');
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white dark:bg-neutral-200 rounded-xl shadow-md space-y-4">
      <h2 className="text-2xl dark:text-neutral-600 font-bold">Body Fat Calculator</h2>
      <input
        type="number"
        placeholder="Waist (cm)"
        value={waist}
        onChange={(e) => setWaist(e.target.value)}
        className="border p-2 w-full"
      />
      <input
        type="number"
        placeholder="Neck (cm)"
        value={neck}
        onChange={(e) => setNeck(e.target.value)}
        className="border p-2 w-full"
      />
      <input
        type="number"
        placeholder="Hip (cm)"
        value={hip}
        onChange={(e) => setHip(e.target.value)}
        className="border p-2 w-full"
        disabled={gender !== 'female'}
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
        <button onClick={calculateBodyFat} className="bg-blue-500 text-white p-2 rounded">
          Calculate Body Fat
        </button>
        <button onClick={resetCalculator} className="bg-gray-500 text-white p-2 rounded">
          Reset
        </button>
        <img
          src={gpt}
          alt="GPT"
          className="cursor-pointer w-8 h-8"
          style={{ filter: 'invert(50%)' }}
          onClick={handleGptClick}
        />
      </div>

      {error && (
        <p className="text-red-500 mt-2">{error}</p>
      )}

      {bodyFat && !error && (
        <div className="mt-4 dark:text-neutral-600">
          <p>Body Fat: {bodyFat} %</p>
        </div>
      )}

      {showGptResults && bodyFat && !error && (
        <TestResultsGPT testName="Body Fat Percentage" testValue={bodyFat} />
      )}
    </div>
  );
};

export default BodyFatCalculator;
