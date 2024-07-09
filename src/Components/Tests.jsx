/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const Tests = () => {
  // Test data
  const tests = [
    { id: 1, name: "BMI (Body Mass Index)", description: "Calculate your Body Mass Index.", link: "/bmi-calculator" },
    { id: 2, name: "BMR (Basal Metabolic Rate)", description: "Estimate your Basal Metabolic Rate.", link: "/bmr-calculator" },
    { id: 3, name: "Body Fat Percentage", description: "Measure your Body Fat Percentage.", link: "/body-fat-calculator" },
    { id: 4, name: "Blood Pressure Monitoring", description: "Monitor your Blood Pressure levels.", link: "/blood-pressure-monitoring" },
    { id: 5, name: "Heart Rate Monitoring", description: "Track your Heart Rate over time.", link: "/heart-rate-monitoring" },
    { id: 6, name: "Sleep Quality", description: "Track your Sleep Quality over time.", link: "/sleep-quality-monitoring" },
  ];

  return (
    <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {tests.map((test) => (
        <Link
          key={test.id}
          to={test.link}
          className="text-black dark:text-neutral-100 shadow-md rounded-lg overflow-hidden border hover:border-blue-500 hover:shadow-lg cursor-pointer"
        >
          <div className="p-4 dark:bg-neutral-400">
            <h3 className="text-black dark:text-neutral-100 text-lg font-semibold mb-2">{test.name}</h3>
            <p className="text-black dark:text-neutral-50">{test.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Tests;
