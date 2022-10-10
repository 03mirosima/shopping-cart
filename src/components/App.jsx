import Filters from "./Filters";
import Header from "./Header";
import ItemListing from "./ItemListing";
import ShoppingCart from "./ShoppingCart";
import SortingComponent from "./SortingComponent";
import Footer from "./Footer";

const App = () => {
  return (
    <main className="wrapper">
      <Header />

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
