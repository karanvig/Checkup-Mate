/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import gpt from '../assets/gpt.svg';
import TestResultsGPT from './TestResultsGPT';

const SleepQualityCalculator = () => {
  const [hoursSlept, setHoursSlept] = useState('');
  const [quality, setQuality] = useState('');
  const [showGptResults, setShowGptResults] = useState(false);

  const categorizeSleepQuality = () => {
    const hours = parseFloat(hoursSlept);

    let sleepQuality = '';
    if (hours < 4) {
      sleepQuality = 'Poor';
    } else if (hours >= 4 && hours < 6) {
      sleepQuality = 'Below Average';
    } else if (hours >= 6 && hours < 8) {
      sleepQuality = 'Average';
    } else if (hours >= 8 && hours <= 10) {
      sleepQuality = 'Good';
    } else if (hours > 10) {
      sleepQuality = 'Oversleep';
    } else {
      sleepQuality = 'Invalid Value';
    }

    setQuality(sleepQuality);
  };

  const handleGptClick = () => {
    setShowGptResults(true);
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white  dark:bg-neutral-200 rounded-xl shadow-md space-y-4">
      <h2 className="dark:text-neutral-600 text-2xl font-bold">Sleep Quality Monitoring</h2>
      <input
        type="number"
        placeholder="Hours Slept"
        value={hoursSlept}
        onChange={(e) => setHoursSlept(e.target.value)}
        className="border p-2 w-full"
      />

      <div className="flex gap-5">
        <button onClick={categorizeSleepQuality} className="bg-blue-500 text-white p-2 rounded ">
          Categorize Sleep Quality
        </button>


        <img
          src={gpt}
          alt="GPT"
          className="cursor-pointer w-8 h-8"
          style={{ filter: 'invert(50%)' }}
          onClick={handleGptClick}
        />

      </div>

      {quality && (
        <div className="mt-4 dark:text-neutral-600">
          <p>Sleep Quality: {quality}</p>
        </div>
      )}

      {showGptResults && quality && (
        <TestResultsGPT testName="Sleep Quality" testValue={quality} />
      )}

    </div>
  );
};

export default SleepQualityCalculator;
