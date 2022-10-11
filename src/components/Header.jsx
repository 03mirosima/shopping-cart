import { useDispatch } from "react-redux";
import marketLogo from "../images/market-logo.png";
import BagIcon from "../images/cart-icon.svg";
import HamburgerIcon from "../images/hamburger-menu.svg";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectCartTotal } from "../store/shoppingCartSlice";
import { toggleSide } from "../store/toggleSlice";

const Svg = styled(HamburgerIcon)`
  fill: white;
  @media only screen and (min-width: 600px) {
    display: none;
  }
`;

const Header = () => {
  const dispatch = useDispatch();
  const totalPrice = useSelector(selectCartTotal);
  return (
    <header className="header">
      <Svg
        onClick={() => {
          dispatch(toggleSide());
        }}
      />
      <div className="market-logo-wrapper">
        <img src={marketLogo} />
      </div>
      <div className="total-price-wrapper">
        <div>
          <BagIcon />
        </div>
        <p className="total-price">
          <span className="turkish-lira">₺</span>
          <span>{totalPrice.toFixed(2)}</span>
        </p>
      </div>
    </header>
  );
};
export default Header;
