import React from "react";
import Button from "./Button";

const Friends = ({ friend }) => {
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} ${Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          Your Friend {friend.name} owe you ${Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance === 0 && (
        <p className="">You and your friend is even...</p>
      )}
      <Button>Select</Button>
    </li>
  );
};

export default Friends;
