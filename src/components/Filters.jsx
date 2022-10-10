import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onSorting, selectAllItems } from "../store/dataSlice";

const Filters = () => {
  const dispatch = useDispatch();
  const allItems = useSelector(selectAllItems);
  //This function is for reduce items to find how many items has the same tag
  var reduceItems = function (items) {
    let reducedItems = Object.entries(
      items.reduce((r, c) => ((r[c] = (r[c] || 0) + 1), r), {})
    ).map(([k, v]) => {
      return { name: k, count: v };
    });
    return reducedItems;
  };
  //First we put all tags in an array
  let allTag = allItems.flatMap((x) => x.tags);
  let allBrand = allItems.flatMap((x) => x.tags);
  const tagResult = reduceItems(allTag);
  const brandResult = reduceItems(allBrand);
  const TagFilterComponent = () => {
    return (
      <div className="filtering-wrapper">
        <p className="filter-title"> Tags</p>
        <div className="input-group">
          <input className="search-box" type="text" placeholder="Search tag" />
          <div className="checkbox-group">
            {tagResult.map((tag, index) => {
              return (
                <label key={index}>
                  <input
                    type="checkbox"
                    name={`checkbox-${index}`}
                    value={tag.name}
                  />
                  {tag.name} ({tag.count})
                </label>
              );
            })}
          </div>
        </div>
      </div>
    );
  };
  const BrandFilterComponent = () => {
    return (
      <div className="filtering-wrapper">
        <p className="filter-title"> Brands</p>
        <div className="input-group">
          <input
            className="search-box"
            type="text"
            placeholder="Search brand"
          />
          <div className="checkbox-group">
            {brandResult.map((brand, index) => {
              return (
                <label key={index}>
                  <input
                    type="checkbox"
                    name={`checkbox-${index}`}
                    value={brand.name}
                  />
                  {brand.name} ({brand.count})
                </label>
              );
            })}
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      <BrandFilterComponent />
      <TagFilterComponent />
    </>
  );
};
export default Filters;
