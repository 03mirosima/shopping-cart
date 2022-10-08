import Filters from "./Filters";
import Header from "./Header";
import ItemListing from "./ItemListing";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Filters />

        <ItemListing />

        <section>ddd</section>
      </main>
    </>
  );
};
export default App;
