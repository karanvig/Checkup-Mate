/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import OpenAi from '../OpenAI';

const TestResultsGPT = ({ testName, testValue,category }) => {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (testName && testValue) {
      handleSearch();
    }
  }, [testName, testValue]);

  const handleSearch = async () => {
    setLoading(true);
    const gptQuery = `Act as a health recommendation system. The test name is ${testName} and the readings of the test are: ${testValue} and category is ${category}. Give 5 tips  in the form of sentences on the basis of the values `;

    try {
      const chatCompletion = await OpenAi.chat.completions.create({
        messages: [{ role: 'user', content: gptQuery }],
        model: 'gpt-3.5-turbo',
      });

    

      const gptResponse = chatCompletion.choices?.[0]?.message?.content;
      

      if (gptResponse) {
        const gptResults = gptResponse.split('\n').filter(item => item);
        setResults(gptResults);
      } else {
        console.error('No recommendations returned from GPT.');
      }
    } catch (error) {
      console.error('Error during the search process:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto rounded-xl dark:bg-neutral-600 space-y-4">
      <h2 className="text-2xl font-bold dark:text-neutral-100 ">Test Results for {testName}</h2>
      {loading ? (
        <p className="dark:text-neutral-50 pl-3">Loading...</p>
      ) : (
        <div className="list-disc pl-3">
          {results.map((result, index) => (
            <p key={index} className="text-black dark:text-neutral-50">
              {result}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default TestResultsGPT;
