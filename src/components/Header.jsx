import marketLogo from "../images/market-logo.png";
import BagIcon from "../images/cart-icon.svg";
import { useSelector } from "react-redux";
import { selectCartTotal } from "../store/shoppingCartSlice";

const Header = () => {
  const totalPrice = useSelector(selectCartTotal);
  return (
    <header className="header">
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
