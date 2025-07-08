import React from 'react';

const SIZE = 128;

const UserCard = ({ name }) => {
  return (
    <div className="user-card">
      <img
        src={`https://avatars.githubusercontent.com/${name}?size=${SIZE}`}
        alt={name}
      />
      <span>{name}</span>
    </div>
  );
};

export default UserCard;
