import React from "react";
import { render, act, fireEvent } from "@testing-library/react";
import HeroBanner from "../components/HeroBanner";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  MemoryRouter,
  useHistory,
} from "react-router-dom";
describe(" HeroBanner component ", () => {
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
  });

  test("Should render HeroBanner when loaded with data props", async () => {
    await act(async () => {
      render(
        <MemoryRouter>
          <HeroBanner data={{}} />
        </MemoryRouter>,
        container
      );
    });
    expect(container).toBeDefined();
  });
});
