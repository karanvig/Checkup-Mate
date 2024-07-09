/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Tests from './Components/Tests';
import BodyFatCalculator from './Components/BodyFatCalculator';
import BpCalculator from './Components/BpCalculator';
import HrCalulator from './Components/HrCalulator';
import SleepQualityCalculator from './Components/SleepQualityCalculator';
import BMRcalculator from './Components/BMRcalculator';
import BmiCalculator from './Components/BmiCalculator';
import TestResultsGPT from './Components/TestResultsGPT';


function App() {
  const [darkmode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkmode);
  };

  return (
    <BrowserRouter>
      <div className={`${darkmode ? 'dark' : ''}`}>
        <div className="min-h-screen dark:bg-neutral-600">
          <div className="py-4 px-5">
            <div className="container mx-auto flex justify-between items-center">
              <Header />
              <button
                className="h-16 w-20 bg-neutral-900 dark:bg-neutral-100 rounded-md text-neutral-100 dark:text-black"
                onClick={toggleDarkMode}
              >
                {darkmode ? 'Light' : 'Dark'}
              </button>
            </div>

            <Routes>
              <Route path="/" element={<Tests />} />
              <Route path="/bmi-calculator" element={<BmiCalculator />} />
              <Route path="/bmr-calculator" element={<BMRcalculator />} />
              <Route path="/body-fat-calculator" element={<BodyFatCalculator />} />
              <Route path="/blood-pressure-monitoring" element={<BpCalculator />} />
              <Route path="/heart-rate-monitoring" element={<HrCalulator />} />
              <Route path="/sleep-quality-monitoring" element={<SleepQualityCalculator />} />
              {/* Add more routes for additional tests */}
            </Routes>

          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
