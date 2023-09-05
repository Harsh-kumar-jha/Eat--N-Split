import { useState } from "react";
import Button from "./Button";
import FormAddFriends from "./FormAddFriends";
import FormSplitBill from "./FormSplitBill";
import FriendsList from "./FriendsList";
import initialFriends from "./FriendsData";
function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  const handleAddFriend = () => {
    setShowAddFriend((show) => !show);
  };
  const handleAddFriends = (friend) => {
    setFriends((friends) => [...friends, friend]);
    setShowAddFriend(false);
  };
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList friends={friends} />
        {showAddFriend && <FormAddFriends onAddFriend={handleAddFriends} />}
        <Button onClick={handleAddFriend}>
          {showAddFriend ? "Close" : "Add Friend"}
        </Button>
      </div>
      <FormSplitBill />
    </div>
  );
}

export default App;
