import { render, screen, fireEvent } from "@testing-library/react";
import Banner from "../pages/Home/Banner";

test("renders Banner component after hover", () => {
  render(<Banner />);

  fireEvent.mouseEnter(screen.getByPlaceholderText(/Enter your email/i));

  const inputElement = screen.getByPlaceholderText(/Enter your email/i);
  expect(inputElement);
});
