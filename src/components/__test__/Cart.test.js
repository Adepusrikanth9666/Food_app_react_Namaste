import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../utils/appStore";
import RestMenu from "../RestMenu";
import Cart from "../Cart";
import { fireEvent, render, screen } from "@testing-library/react";
import MOCk_DATA_CARD from "../mocks/RestCardmock.json";
import { act } from "react-dom/test-utils";
import Header from "../Header";

global.fetch = jest.fn(() => {
  Promise.resolve({
    json: () => Promise.resolve(MOCk_DATA_CARD),
  });
});

test("Should Load Restaurant Menu Componet", async () => {
  await act(() =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  // const accoridain = screen.getByText("Biriyani (5)");
  // fireEvent.click(accoridain);
  // expect(screen.getAllByTestId("foodItems").length).toBe(5);
  // expect(screen.getByText("CartItems - 0")).toBeInTheDocument();

  // const addBtns = screen.getAllByRole("button", { name: "Add +" });
  // fireEvent.click(addBtns[0]);
  // expect(screen.getByText("cartItems-1")).toBeInTheDocument();
  // fireEvent.click(addBtns[1]);
});
