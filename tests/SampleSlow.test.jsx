import { describe, expect, it } from "vitest";
import { waitFor, render } from "@testing-library/react";

import MasterParameter from "../src/";

describe("Sample Slow Test", () => {
  it.concurrent("should pass 1", async () => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    expect(1).toBe(1);
  });

  it.concurrent("should pass 2", async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    expect(1).toBe(1);
  });

  it.concurrent("should pass 3", async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    expect(1).toBe(1);
  });

  it('should displaying text "No data" if table is Empty', async () => {
    await waitFor(() => render(<MasterParameter />));

    expect(screen.getByText("No data")).toBeInTheDocument();
  });
});
