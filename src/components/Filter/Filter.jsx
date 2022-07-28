import React, { useState } from "react";
import styles from "./Filter.module.css";
import { FiFilter } from "react-icons/fi";
import { applyFilters } from "../../utils/filters";
import { filterData } from "../../../data/filters";

const colors = ["red", "skyblue", "yellow", "lightgreen", "#CFB53B"];

const FilterSelector = ({ label, value, name, setFilter }) => {
  return (
    <label className={styles.selector}>
      <input
        type="radio"
        value={value}
        name={name}
        onChange={(e) => {
          setFilter(e.target.value);
        }}
      />
      {label}
    </label>
  );
};

const Filter = ({ allProducts, filteredProducts, setFilteredProducts }) => {
  const [priceFilter, setPriceFilter] = useState(null);
  const [templateFilter, setTemplateFilter] = useState(null);
  const [typeFilter, setTypeFilter] = useState(null);

  return (
    <div className={styles.container}>
      <div className={styles.filterTop}>
        <text>FILTERS</text>
        <FiFilter size={24} />
      </div>
      <div className={styles.filterContainer}>
        <text>Cost</text>
        {filterData.priceFilters.map((filter) => (
          <FilterSelector
            label={filter.label}
            value={filter.value}
            name="price"
            setFilter={setPriceFilter}
          />
        ))}
      </div>
      <div className={styles.colorContainer}>
        <text>Colour</text>
        <div className={styles.colorBoxContainer}>
          {colors.map((color, index) => (
            <div
              className={styles.colorBox}
              style={{ backgroundColor: color }}
              key={index}
            ></div>
          ))}
        </div>
      </div>
      <div className={styles.filterContainer}>
        <text>Design Templates</text>
        {filterData.templateFilters.map((filter) => (
          <FilterSelector
            label={filter.label}
            value={filter.value}
            name="template"
            setFilter={setTemplateFilter}
          />
        ))}
      </div>
      <div className={styles.filterContainer}>
        <text>Type</text>
        {filterData.typeFilters.map((filter) => (
          <FilterSelector
            label={filter.label}
            value={filter.value}
            name="type"
            setFilter={setTypeFilter}
          />
        ))}
      </div>
      <div className={styles.filterBottom}>
        <button
          className={styles.btn1}
          onClick={() =>
            applyFilters(
              priceFilter,
              templateFilter,
              typeFilter,
              allProducts,
              filteredProducts,
              setFilteredProducts
            )
          }
        >
          apply
        </button>
        <button
          className={styles.btn2}
          onClick={() => {
            setFilteredProducts([...allProducts]);
          }}
        >
          clear
        </button>
      </div>
    </div>
  );
};

export default Filter;
