import { useEffect, useState } from "react";
import { useLocalStorageContext } from "../context/LocalStorageContext";

function Filters({ setFilteredProducts }) {
  const { categories, products } = useLocalStorageContext();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [sort, setSort] = useState("latest");

  useEffect(() => {
    let filtered = [...products];
    // filter by category first
    if (selectedCategory !== "ALL") {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory
      );
    }
    // filtering by search term
    if (searchTerm !== "") {
      filtered = filtered.filter((product) =>
        product.title.includes(searchTerm)
      );
    }
    // sorting
    if (sort === "latest") {
      filtered = filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else {
      filtered = filtered.sort((a, b) => new Date(a.date) - new Date(b.date));
    }

    setFilteredProducts(filtered);
  }, [products, selectedCategory, searchTerm, sort, setFilteredProducts]);

  const handleCategory = (e) => setSelectedCategory(e.target.value);
  const handleSort = (e) => setSort(e.target.value);
  const handleSearch = (e) =>
    setSearchTerm(e.target.value.trim().toLowerCase());

  return (
    <div className="pb-8">
      <h2 className="font-semibold text-lg text-secondary-700">Filters</h2>
      <div>
        <div>
          <label htmlFor="search">Search</label>
          <input type="text" id="search" onChange={handleSearch} />
        </div>

        <label htmlFor="categoryFilter">Category</label>
        <select
          onChange={handleCategory}
          id="categoryFilter"
          value={selectedCategory}
        >
          <option value="ALL">All</option>
          {categories.map((category) => (
            <option key={category.title}>{category.title}</option>
          ))}
        </select>

        <label htmlFor="sort">Sort</label>
        <select onChange={handleSort} id="sort" value={sort}>
          <option value="latest">latest</option>
          <option value="earliest">earliest</option>
        </select>
      </div>
    </div>
  );
}

export default Filters;
