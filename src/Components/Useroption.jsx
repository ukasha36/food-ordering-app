import React from 'react';

const UserOptions = ({ isMultiUser, setIsMultiUser, numUsers, setNumUsers }) => {
  return (
    <div className="user-options-container">
      <label>
        <input
          type="checkbox"
          checked={isMultiUser}
          onChange={() => setIsMultiUser(!isMultiUser)}
        />
        Multi-User
      </label>
      {isMultiUser && (
        <div>
          <input
            type="number"
            value={numUsers}
            min="1"
            onChange={(e) => setNumUsers(parseInt(e.target.value))}
            placeholder="Number of users"
          />
        </div>
      )}
    </div>
  );
};

export default UserOptions;
