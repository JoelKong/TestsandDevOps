import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import user from "@testing-library/user-event";
import UserList from "../components/UserList";

test("Render one row per user", () => {
  const users = [
    { name: "joel", email: "joelkong2001@gmail.com" },
    { name: "jane", email: "jane@jane.com" },
  ];
  render(<UserList users={users} />);

  const rows = screen.getAllByRole("row");

  screen.logTestingPlaygroundURL();

  expect(rows).toHaveLength(3);
});

// test("Render the email and name of each user", () => {});
