import React, { useState } from "react";

const FormSplitBill = ({ selectedFriend }) => {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const paidByFriend = bill ? bill - paidByUser : "";
  const [whoPaidBill, setWhoPaidBill] = useState("user");
  return (
    <form className="form-split-bill">
      <h2>Split a bill with {selectedFriend.name}</h2>
      <label>💵 Bill Value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />
      <label>🙎‍♂️ Your Expenses: </label>
      <input
        type="text"
        value={paidByUser}
        onChange={(e) =>
          setPaidByUser(
            Number(e.target.value) > bill ? paidByUser : Number(e.target.value)
          )
        }
      />
      <label>🧑‍🤝‍🧑 {selectedFriend.name}'s Expenses</label>
      <input type="text" disabled value={paidByFriend} />
      <label>👀 Who's is paying the bill?</label>
      <select
        value={whoPaidBill}
        onChange={(e) => setWhoPaidBill(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}'s</option>
      </select>
    </form>
  );
};

export default FormSplitBill;
