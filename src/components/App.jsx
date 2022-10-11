import Filters from "./Filters";
import Header from "./Header";
import ItemListing from "./ItemListing";
import ShoppingCart from "./ShoppingCart";
import SortingComponent from "./SortingComponent";
import Footer from "./Footer";
import styled from "styled-components";
import { useSelector } from "react-redux";

const App = () => {
  const isOpen = useSelector(({ toggle }) => toggle.toggle);
  const LeftSideMobilMenu = styled.div`
    display: none;
    @media (max-width: 991px) {
      align-items: center;
      position: absolute;
      background: #fafafa;
      width: 100%;
      top: 50px;
      display: ${isOpen ? "flex" : "none"};
      overflow: hidden;
      transition: all 0.3s;
    }
  `;
  return (
    <main className="wrapper">
      <Header />
      <LeftSideMobilMenu className="left-side-wrapper-mobile">
        <SortingComponent />
        <Filters />
      </LeftSideMobilMenu>
      <section className="section left-side-wrapper">
        <SortingComponent />
        <Filters />
      </section>
      <section className="middle-section">
        <ItemListing />
      </section>
      <section className="section right-side-wrapper">
        <ShoppingCart />
      </section>
      <footer className="footer">
        <Footer />
      </footer>
    </main>
  );
};
export default App;
