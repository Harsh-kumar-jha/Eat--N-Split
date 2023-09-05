import React from "react";

const FormSplitBill = () => {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with X</h2>
      <label>💵 Bill Value</label>
      <input type="text" />
      <label>🙎‍♂️ Your Expenses: </label>
      <input type="text" />
      <label>🧑‍🤝‍🧑 X's Expenses</label>
      <input type="text" disabled />
      <label>👀 Who's is paying the bill?</label>
      <select>
        <option value="user">You</option>
        <option value="friend">X's</option>
      </select>
    </form>
  );
};

export default FormSplitBill;
