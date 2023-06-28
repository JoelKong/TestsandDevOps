import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import user from "@testing-library/user-event";
import UserForm from "../components/UserForm";

test("It shows two inputs and a button", async () => {
  // render the component
  render(<UserForm />);

  // Manipulate the component or find an element in it
  const inputs = screen.getAllByRole("textbox");
  const button = screen.getByRole("button");

  // Assertion - make sure component is doing what it is expected to do
  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});

test("It calls onUserAdd function when the form is submitted", async () => {
  const mock = jest.fn();
  render(<UserForm onUserAdd={mock} />);

  const [nameInput, emailInput] = screen.getAllByRole("textbox");
  const button = screen.getByRole("button");

  await user.click(nameInput);
  await user.keyboard("Joel");
  await user.click(emailInput);
  await user.keyboard("joelkong2001@gmail.com");
  await user.click(button);

  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledWith({
    name: "Joel",
    email: "joelkong2001@gmail.com",
  });
});
