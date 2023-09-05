import React from "react";
import initialFriends from "./FriendsData";
import Friends from "./Friends";
const FriendsList = ({ friends }) => {
  return (
    <ul>
      {friends.map((friend) => (
        <Friends friend={friend} key={friend.id} />
      ))}
    </ul>
  );
};

export default FriendsList;
