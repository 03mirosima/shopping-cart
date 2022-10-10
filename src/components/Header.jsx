import marketLogo from "../images/market-logo.png";
import BagIcon from "../images/cart-icon.svg";

const Header = () => {
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
          <span>39,97</span>
        </p>
      </div>
    </header>
  );
};
export default Header;
