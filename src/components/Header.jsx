import marketLogo from "../images/market-logo.png";
import bagIcon from "../images/cart-icon.svg";

const Header = () => {
  return (
    <header>
      <div className="market-logo-wrapper">
        <img src={marketLogo} />
      </div>
      <div className="total-price-wrapper">
        <img src={bagIcon} />
        <p className="total-price">
          <span>₺</span>
          <span>39,97</span>
        </p>
      </div>
    </header>
  );
};
export default Header;
