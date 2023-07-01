import { render, screen } from "@testing-library/react";
import Greet from "../components/greet/greet";

describe("Greet component", () => {
  test("Greet renders correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText(/hello/i);
    expect(textElement).toBeInTheDocument();
  });
});

describe("Nested", () => {
  test("Greet renders with a name", () => {
    render(<Greet name="Teddy" />);
    const textElement = screen.getByText(/Hello Teddy/i);
    expect(textElement).toBeInTheDocument();
  });
});
