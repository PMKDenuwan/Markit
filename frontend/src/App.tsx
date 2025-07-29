import React from 'react';
import './index.css';

function App() {
  return (
    <div>
      {/* Test 1: Basic Colors */}
      <div className="bg-red-500 text-white p-4">
        <h1>RED BACKGROUND - If you see this in red, Tailwind is working!</h1>
      </div>
      
      {/* Test 2: Blue Background */}
      <div className="bg-blue-500 text-white p-8 text-center">
        <h2 className="text-4xl font-bold">BLUE BACKGROUND with BIG TEXT</h2>
      </div>
      
      {/* Test 3: Gradient */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-8 text-center">
        <h2 className="text-6xl font-bold">GRADIENT BACKGROUND</h2>
        <p className="text-xl mt-4">If you see colors, Tailwind is working!</p>
      </div>

      {/* Test 4: Flexbox and spacing */}
      <div className="flex justify-center items-center h-64 bg-gray-100">
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          GREEN BUTTON - Hover me!
        </button>
      </div>
    </div>
  );
}

export default App;


