import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Filters = () => {
  //States for input values
  const [searchedBrand, setBrand] = useState("");
  const [searchedTag, setTag] = useState("");
  //This function is for reduce items to find how many items has the same tag
  var reduceItems = function (items) {
    let reducedItems = Object.entries(
      items.reduce((r, c) => ((r[c] = (r[c] || 0) + 1), r), {})
    ).map(([k, v]) => {
      return { name: k, count: v };
    });
    return reducedItems;
  };
  const allTag = useSelector(({ data }) => data.tags);
  const allBrand = useSelector(({ data }) => data.brands);
  //First we put all tags in an array
  const tagResult = reduceItems(allTag);
  const brandResult = reduceItems(allBrand);
  //States for filtered brand and tag values
  const [filteredBrands, setBrands] = useState(brandResult);
  const [filteredTags, setTags] = useState(tagResult);
  useEffect(() => {
    setBrands(brandResult);
    setTags(tagResult);
  }, [allBrand, allTag]);
  //handle tag and brand searching
  const handleSearch = (e) => {
    const value = e.target.value;
    let filteredBrands = [];
    let filteredTags = [];
    [e.target.name] == "brand-search"
      ? ((filteredBrands = brandResult.filter((item) => {
          return item.name.toLowerCase().includes(value.toLowerCase());
        })),
        setBrand(value),
        setBrands(filteredBrands))
      : ((filteredTags = tagResult.filter((item) => {
          return item.name.toLowerCase().includes(value.toLowerCase());
        })),
        setTag(value),
        setTags(filteredTags));
  };
  return (
    <>
      <div className="filtering-wrapper">
        <p className="filter-title"> Brands</p>
        <div className="input-group">
          <input
            name="brand-search"
            className="search-box"
            type="text"
            value={searchedBrand}
            placeholder="Search brand"
            onChange={(e) => handleSearch(e)}
          />
          <div className="checkbox-group">
            {filteredBrands.map((brand, index) => {
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
      <div className="filtering-wrapper">
        <p className="filter-title"> Tags</p>
        <div className="input-group">
          <input
            name="tag-search"
            className="search-box"
            type="text"
            value={searchedTag}
            onChange={(e) => {
              handleSearch(e);
            }}
            placeholder="Search tag"
          />
          <div className="checkbox-group">
            {filteredTags.map((tag, index) => {
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
    </>
  );
};
export default Filters;
