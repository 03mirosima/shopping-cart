import Filters from "./Filters";
import Header from "./Header";
import ItemListing from "./ItemListing";
import ShoppingCart from "./ShoppingCart";
import SortingComponent from "./SortingComponent";

const App = () => {
  return (
    <main class="wrapper">
      <Header />
      <section class="middle-section">
        <ItemListing />
      </section>
      <secton class="section left-side-wrapper">
        <SortingComponent />
        <Filters />
      </secton>
      <section class="section right-side-wrapper">
        <ShoppingCart />
      </section>
      <footer class="footer">Footer</footer>
    </main>
  );
};
export default App;
