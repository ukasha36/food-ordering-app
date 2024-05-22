import React from 'react';

const SplitOptions = ({ splitMethod, setSplitMethod, customSplits, setCustomSplits, numUsers }) => {
  const handleCustomSplitChange = (index, value) => {
    const updatedSplits = [...customSplits];
    updatedSplits[index] = parseFloat(value);
    setCustomSplits(updatedSplits);
  };

  return (
    <div className="split-options-container">
      <label>
        <input
          type="radio"
          value="equal"
          checked={splitMethod === 'equal'}
          onChange={() => setSplitMethod('equal')}
        />
        Divide Equally
      </label>
      <label>
        <input
          type="radio"
          value="custom"
          checked={splitMethod === 'custom'}
          onChange={() => setSplitMethod('custom')}
        />
        Custom Split
      </label>
      {splitMethod === 'custom' &&
        Array.from({ length: numUsers }).map((_, index) => (
          <div key={index}>
            <input
              type="number"
              value={customSplits[index] || ''}
              min="0"
              onChange={(e) => handleCustomSplitChange(index, e.target.value)}
              placeholder={`User ${index + 1} amount`}
            />
          </div>
        ))}
    </div>
  );
};

export default SplitOptions;
