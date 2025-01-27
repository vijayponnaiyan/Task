import { render, screen, fireEvent } from "@testing-library/react";
import MainSection from "../pages/Home/MainSection"; // Ensure the path is correct

test("renders p tag after hover", () => {
  render(<MainSection />);

  // Simulate hover over the element that triggers the visibility of the p tag
  fireEvent.mouseEnter(screen.getByPlaceholderText(/p/i));

  // Check if the p tag (or text inside the p tag) is rendered after hover
  const pElement = screen.getByText(/Your desired text here/i); // Replace with actual text in the p tag
  expect(pElement).toBeInTheDocument();
});
import { render, screen, fireEvent } from "@testing-library/react";
import MainSection from "../pages/Home/MainSection"; // Ensure the path is correct

test("renders button after hover", () => {
  render(<MainSection />);

  // Simulate hover over the element
  fireEvent.mouseEnter(screen.getByText(/Your desired hover trigger text/i)); // Adjust this to match the element that triggers the hover

  // Check if the button is rendered
  const buttonElement = screen.getByRole("button", {
    name: /Your button text here/i,
  }); // Replace with the text on the button
  expect(buttonElement).toBeInTheDocument();
});
