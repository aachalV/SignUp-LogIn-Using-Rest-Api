import { render, fireEvent } from "@testing-library/react";
import SignUp from "../Sigup";

it("signupButtonRenderCheck", () => {
  const { queryByTestId } = render(<SignUp />);
  const btn = queryByTestId("signup-btn");
  expect(btn).toBeTruthy();
});

it("first-Signup-Button-Click-Check", () => {
  const { queryByTestId } = render(<SignUp />);
  const btn = queryByTestId("signup-btn");
  const optField = queryByTestId("otp-field");

  //expect(optField).toBeFalsy();
  fireEvent.click(btn);
  //expect(optField).toBeTruthy();
});
