import React from "react";
// import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { NotFound } from "../NotFound";

describe("check component heading", () => {
  it("render content", () => {
    render(<NotFound />);
    expect(screen.getByRole("heading", { name: /h2/i }));
    expect(screen.getByRole("heading", { name: /description/i }));
    expect(screen.getByRole("heading", { name: /link/i }));
  });
});
// test("no puede fallar >>>>>>>>>>>>>", ()=>{
//     console.log("joder");
// })
