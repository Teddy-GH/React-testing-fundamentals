import { render, screen } from "@testing-library/react";
import Greet from "./greet";

describe("Greet component", () => {
 //fit - to run only this test
  it("Greet renders correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText(/hello/i);
    expect(textElement).toBeInTheDocument();
  });
});

describe("Nested", () => {
//xit - to skip this test
  it("Greet renders with a name", () => {
    render(<Greet name="Teddy" />);
    const textElement = screen.getByText(/Hello Teddy/i);
    expect(textElement).toBeInTheDocument();
  });
});
