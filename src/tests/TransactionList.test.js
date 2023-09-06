import React from "react";
import renderer from "react-test-renderer";
import TransactionList from "../components/TransactionList";

const transactions = [
  {
    isModeSend: true,
    executed: true,
    selectedName: "Barshan",
    amount: 10,
    newBalance: 990,
    date: "Feb 7",
    note: "lunch"
  },
  {
    isModeSend: false,
    executed: true,
    selectedName: "Devdulal",
    amount: 10,
    newBalance: 990,
    date: "Feb 2",
    note: "beer"
  },
  {
    isModeSend: true,
    executed: true,
    selectedName: "Shreya",
    amount: 10,
    newBalance: 990,
    date: "Jan 20",
    note: "cab share"
  },
  {
    isModeSend: false,
    executed: true,
    selectedName: "Manasij",
    amount: 10,
    newBalance: 990,
    date: "Jan 18",
    note: "cinema"
  }
];

it("renders correctly", () => {
  const tree = renderer
    .create(<TransactionList transactions={transactions} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
