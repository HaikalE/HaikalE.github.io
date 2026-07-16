import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the portfolio introduction", () => {
  render(<App />);
  expect(
    screen.getByRole("heading", { name: /I build across software, data, and applied research/i })
  ).toBeTruthy();
});
