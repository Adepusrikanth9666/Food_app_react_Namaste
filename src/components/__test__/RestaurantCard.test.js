import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import { withPromotedLabel } from "../RestaurantCard";
import MOCK_DATA from "../mocks/RestCardmock.json";
import MOCK_DATA_PROMOTED from "../mocks/RestaurauntPromotedCardMock.json";
import "@testing-library/jest-dom";
test("Should render the Restaurant card with Props data", () => {
  // render(<RestaurantCard resData={MOCK_DATA} />);
  // const restName = screen.getByText("4.2Stars");
  // expect(restName).toBeInTheDocument();
});
test("Should render the Restaurant card component with Promoted ", () => {
  // const RestaurauntPromotedCard = withPromotedLabel(RestaurantCard);
  // render(<RestaurauntPromotedCard resData={MOCK_DATA_PROMOTED} />);
  // const restPromoted = screen.getByText("promoted");
  // expect(restPromoted).toBeInTheDocument();
});
