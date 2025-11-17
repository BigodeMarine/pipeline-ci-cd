/* eslint-disable no-unused-vars */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../pages/index";

describe("Página Home", () => {
  test("renderiza o título principal", () => {
    render(<Home />);
    const heading = screen.getByRole("heading", { name: /Guia Básico de RPG/i });
    expect(heading).toBeInTheDocument();
  });
});