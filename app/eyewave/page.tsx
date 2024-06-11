// app/solarsearch/page.tsx
import React from 'react';

const EyeWavePage: React.FC = () => {
  return (
    <div>
      <h1>SolarSearch</h1>
      <p>Welcome to EyeWave</p>
      <input type="text" placeholder="Search for a band..." />
      <button>Search</button>
      <div>
        <h2>Results</h2>
        <p>No results found. Please try a different search.</p>
      </div>
    </div>
  );
};

export default EyeWavePage;