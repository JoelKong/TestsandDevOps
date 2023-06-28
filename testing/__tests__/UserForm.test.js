import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import UserForm from "../components/UserForm";

test("It shows two inputs and a button", () => {
  // render the component
  render(<UserForm />);

  // Manipulate the component or find an element in it
  const inputs = screen.getAllByRole("textbox");
  const button = screen.getByRole("button");

  // Assertion - make sure component is doing what it is expected to do
  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});
