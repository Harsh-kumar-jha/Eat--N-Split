import Button from "./Button";
import FormAddFriends from "./FormAddFriends";
import FormSplitBill from "./FormSplitBill";
import FriendsList from "./FriendsList";
function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList />
        <FormAddFriends />
        <Button>Add Friend</Button>
      </div>
      <FormSplitBill />
    </div>
  );
}

export default App;
