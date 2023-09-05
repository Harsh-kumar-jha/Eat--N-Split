import React from "react";
import initialFriends from "./FriendsData";
import Friends from "./Friends";
const FriendsList = () => {
  return (
    <ul>
      {initialFriends.map((friend) => (
        <Friends friend={friend} key={friend.id} />
      ))}
    </ul>
  );
};

export default FriendsList;
