import { render, screen } from "@testing-library/react";
import type { ArtPiece } from "../types/ArtPiece";
import ArtCard from "../components/ArtCard";
import { describe, it, vi } from "vitest";

describe("ArtCard", () => {
  const mockArt: ArtPiece = {
    id: 1,
    title: "Juiced",
    size: '16" x20"',
    price: 950,
    image: "/test.jpg",
    medium: "Acrylic on Canvas",
    category: "paintings",
    clickCount: 0,
  };

  const mockOnSelect = vi.fn();
  const mockOnAddToCart = vi.fn();

  it("renders art details correctly", () => {
    render(
      <ArtCard
        art={mockArt}
        onSelect={mockOnSelect}
        onAddToCart={mockOnAddToCart}
      />
    );

    expect(screen.getByRole("img")).toHaveAttribute("src", "/test.jpg");
    expect(screen.getByText("Juiced")).toBeInTheDocument();
    expect(screen.getByText("Acrylic on Canvas")).toBeInTheDocument();
    expect(screen.getByText(/\$?950/)).toBeInTheDocument();
  });
});