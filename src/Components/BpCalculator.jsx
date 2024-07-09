/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import gpt from '../assets/gpt.svg';
import TestResultsGPT from './TestResultsGPT';

const BpCalculator = () => {
  const [systolic, setSystolic] = useState('');
  const [diastolic, setDiastolic] = useState('');
  const [category, setCategory] = useState('');
  const [showGptResults, setShowGptResults] = useState(false);

  const categorizeBloodPressure = () => {
    const sys = parseInt(systolic);
    const dia = parseInt(diastolic);

    let bpCategory = '';
    if (sys < 120 && dia < 80) {
      bpCategory = 'Normal';
    } else if (sys >= 120 && sys < 130 && dia < 80) {
      bpCategory = 'Elevated';
    } else if ((sys >= 130 && sys < 140) || (dia >= 80 && dia < 90)) {
      bpCategory = 'Hypertension Stage 1';
    } else if (sys >= 140 || dia >= 90) {
      bpCategory = 'Hypertension Stage 2';
    } else if (sys > 180 || dia > 120) {
      bpCategory = 'Hypertensive Crisis';
    } else {
      bpCategory = 'Invalid Values';
    }

    setCategory(bpCategory);
  };

  const handleGptClick = () => {
    setShowGptResults(true);
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white dark:bg-neutral-200 rounded-xl shadow-md space-y-4">
      <h2 className="text-2xl font-bold dark:text-neutral-600">Blood Pressure Monitoring</h2>
      <input
        type="number"
        placeholder="Systolic (mm Hg)"
        value={systolic}
        onChange={(e) => setSystolic(e.target.value)}
        className="border p-2 w-full"
      />
      <input
        type="number"
        placeholder="Diastolic (mm Hg)"
        value={diastolic}
        onChange={(e) => setDiastolic(e.target.value)}
        className="border p-2 w-full"
      />

      <div className="flex gap-5">
        <button onClick={categorizeBloodPressure} className="bg-blue-500 text-white p-2 rounded">
          Categorize Blood Pressure
        </button>


        <img
          src={gpt}
          alt="GPT"
          className="cursor-pointer w-8 h-8"
          style={{ filter: 'invert(50%)' }}
          onClick={handleGptClick}
        />

      </div>

      {category && (
        <div className="mt-4 dark:text-neutral-600">
          <p>Category: {category}</p>
        </div>
      )}

      {showGptResults && category && (
        <TestResultsGPT testName="Blood Pressure Monitoring" testValue={category} />
      )}
    </div>
  );
};

export default BpCalculator;
