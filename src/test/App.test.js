import React from "react";
import { render, act, fireEvent } from "@testing-library/react";
import App from "../App";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, MemoryRouter } from "react-router-dom";

const mockHistoryPush = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe("Application ", () => {
  let container = null;
  beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    // cleanup on exiting
    ReactDOM.unmountComponentAtNode(container);
    container.remove();
    container = null;
    global.fetch.mockRestore();
  });
  test("Should render App when loaded", async () => {
    await act(async () => {
      render(
        <MemoryRouter>
          <App />
        </MemoryRouter>,
        container
      );
    });
    const applicationRoot = document.querySelector(
      "[data-testid=applicationRoot]"
    );
    expect(container).toBeDefined();
    expect(applicationRoot).toBeDefined();
  });
});
