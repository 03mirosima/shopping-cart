const Filters = () => {
  const SortingComponent = () => {
    const values = [
      { value: "lowest", name: "Price low to high" },
      { value: "highest", name: "Price high to low" },
      { value: "newest", name: "New to old" },
      { value: "oldest", name: "Old to new" },
    ];

    return (
      <div className="sorting-wrapper">
        <p className="filter-title">Sorting</p>
        <div className="radio-button-group">
          {values.map((value, index) => {
            return (
              <label key={index}>
                <input type="radio" value={value.value} name={value.name} />
                {value.name}
              </label>
            );
          })}
        </div>
      </div>
    );
  };
  const FilteringComponent = () => {
    return <div className="">aa</div>;
  };
  return (
    <section className="left-side-wrapper">
      <SortingComponent />
      <FilteringComponent />
    </section>
  );
};
export default Filters;
