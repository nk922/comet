import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Modal from "./Modal";

describe("Modal", () => {
  test("should render with given props", () => {
    render(
      <Modal id="modal" show={true}>
        test
      </Modal>
    );

    expect(screen.getByText("test")).toBeVisible();
    expect(screen.getByTestId("modal")).toHaveClass("show");
  });

  test("should render invisible when show is false", () => {
    render(
      <Modal id="modal" show={false}>
        Yellow
      </Modal>
    );

    expect(screen.getByTestId("modal")).toHaveClass("hide");
  });

  test("should close func is called when overlay clicked", () => {
    const spy = jest.fn();
    render(<Modal id="modal" onClose={spy} />);
    fireEvent.click(screen.getByTestId("modal-overlay"));
    expect(spy).toHaveBeenCalled();
  });

  test("should overlay click without close func does nothing", () => {
    render(<Modal id="modal" />);
    fireEvent.click(screen.getByTestId("modal-overlay"));
  });
});
