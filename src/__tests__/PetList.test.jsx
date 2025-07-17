/// src/__tests__/PetList.test.jsx
import { render, screen } from "@testing-library/react";
import PetList from "../components/PetList";
import "@testing-library/jest-dom";
describe("PetList Component", () => {
  test("renders heading correctly", () => {
    render(<PetList />);
    expect(screen.getByText("Available Pets")).toBeInTheDocument();
  });

  test("displays pets when provided", () => {
    const mockPets = [
      { name: "Buddy", type: "Dog" },
      { name: "Mittens", type: "Cat" },
    ];
    render(<PetList pets={mockPets} />);
    expect(screen.getByText("Buddy")).toBeInTheDocument();
    expect(screen.getByText("Mittens")).toBeInTheDocument();
  });

  test("shows fallback message when no pets available", () => {
    render(<PetList pets={[]} />);
    expect(screen.getByText("No pets available")).toBeInTheDocument();
  });
});