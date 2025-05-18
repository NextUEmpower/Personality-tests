// components/TestPage.js
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import QuestionCard from './QuestionCard';
import { supabase } from '../supaBaseClient'; // Adjust the import path as necessary

const TestPage = ({ title, questions }) => {
  const [allResponses, setAllResponses] = useState({});
  const [currentPage, setCurrentPage] = useState(0);
  const location = useLocation();
  const testType = location.pathname.slice(1);

  useEffect(() => {
    const savedAllResponses = localStorage.getItem('all_test_responses');
    if (savedAllResponses) {
      setAllResponses(JSON.parse(savedAllResponses));
    }
  }, []);

  const handleResponse = (questionIndex, selectedOption) => {
    const newAllResponses = {
      ...allResponses,
      [testType]: {
        ...(allResponses[testType] || {}),
        [questionIndex]: selectedOption,
      },
    };
    setAllResponses(newAllResponses);
    localStorage.setItem('all_test_responses', JSON.stringify(newAllResponses));
  };

  const currentQuestion = questions[currentPage];
  const isLastQuestion = currentPage === questions.length - 1;
  const currentTestResponses = allResponses[testType] || {};

  const handleSubmitTest = async () => {
    console.log(`Submitting ${testType} test responses:`, currentTestResponses);

    const { data, error } = await supabase.from('responses').insert([
      {
        section: testType,
        answers: currentTestResponses,
      },
    ]);

    if (error) {
      console.error('Submission failed:', error);
      alert('❌ Failed to save responses. Please try again.');
    } else {
      console.log('✅ Submission successful:', data);
      alert('🎉 Test submitted successfully!');
      localStorage.removeItem('all_test_responses');
      setAllResponses({});
    }
  };

  return (
    <div className="flex">
      {/* Left Section: Current Question */}
      <div className="w-2/3 p-4">
        <h1 className="text-2xl font-bold mb-4">{title}</h1>
        <QuestionCard
          question={currentQuestion}
          index={currentPage}
          selectedOption={currentTestResponses[currentPage]}
          onResponse={handleResponse}
          testType={testType}
        />
        <div className="flex justify-between mt-4">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
            disabled={currentPage === 0}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-50"
          >
            Previous
          </button>
          {!isLastQuestion ? (
            <button
              onClick={() => setCurrentPage((prev) => prev + 1)}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Next
            </button>
          ) : (
            <button
              onClick={handleSubmitTest}
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              Submit Test
            </button>
          )}
        </div>
      </div>

      {/* Right Section: Question Grid */}
      <div className="w-1/3 p-4 border-l">
        <h2 className="text-lg font-bold mb-4">Question Grid ({testType})</h2>
        <div className="grid grid-cols-4 gap-2">
          {questions.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i)}
              className={`p-2 rounded border ${
                i === currentPage
                  ? 'bg-blue-600 text-white'
                  : currentTestResponses[i]
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-200'
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestPage;