/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import gpt from '../assets/gpt.svg';
import TestResultsGPT from './TestResultsGPT';

const HrCalulator = () => {
  const [heartRate, setHeartRate] = useState('');
  const [category, setCategory] = useState('');
  const [showGptResults, setShowGptResults] = useState(false);
  const [error, setError] = useState('');

  const categorizeHeartRate = () => {
    const hr = parseInt(heartRate);

    if (isNaN(hr) || hr <= 0) {
      setError('Please enter a valid heart rate value');
      setCategory('');
      return;
    }

    let hrCategory = '';
    if (hr < 60) {
      hrCategory = 'Bradycardia (Low)';
    } else if (hr >= 60 && hr <= 100) {
      hrCategory = 'Normal';
    } else if (hr > 100) {
      hrCategory = 'Tachycardia (High)';
    } else {
      hrCategory = 'Invalid Value';
    }

    setCategory(hrCategory);
    setError('');
  };

  const handleGptClick = () => {
    setShowGptResults(true);
  };

  const resetCalculator = () => {
    setHeartRate('');
    setCategory('');
    setShowGptResults(false);
    setError('');
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white dark:bg-neutral-200 rounded-xl shadow-md space-y-4">
      <h2 className="text-2xl dark:text-neutral-600 font-bold">Heart Rate Monitoring</h2>
      <input
        type="number"
        placeholder="Heart Rate (bpm)"
        value={heartRate}
        onChange={(e) => setHeartRate(e.target.value)}
        className="border p-2 w-full"
      />

      <div className="flex gap-5">
        <button onClick={categorizeHeartRate} className="bg-blue-500 text-white p-2 rounded">
          Categorize Heart Rate
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

      {category && !error && (
        <div className="mt-4 dark:text-neutral-600">
          <p>Category: {category}</p>
        </div>
      )}

      {showGptResults && category && !error && (
        <TestResultsGPT testName="Heart Rate Monitoring" testValue={category} />
      )}
    </div>
  );
};

export default HrCalulator;
