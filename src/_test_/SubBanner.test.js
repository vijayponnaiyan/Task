import { render, screen, fireEvent } from "@testing-library/react";
import SubBanner from "../pages/Home/SubBanner";

test("renders p tag after hover", () => {
  render(<SubBanner />);

  fireEvent.mouseEnter(screen.getByPlaceholderText(/p/i));

  const pElement = screen.getByText(/Your desired text here/i);
  expect(pElement).toBeInTheDocument();
});
