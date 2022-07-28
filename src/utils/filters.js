export const applyFilters = (
  priceFilter,
  templateFilter,
  typeFilter,
  allProducts,
  filteredProducts,
  setFilteredProducts
) => {
  let filtered = false;
  if (priceFilter) {
    if (priceFilter === "15to40") {
      filteredProducts = allProducts.filter((product) => {
        if (product.price >= 1500 && product.price <= 4000) return product;
      });
    } else if (priceFilter === "41to70") {
      filteredProducts = allProducts.filter((product) => {
        if (product.price >= 4001 && product.price <= 7000) return product;
      });
    } else if (priceFilter === "gt70") {
      filteredProducts = allProducts.filter((product) => {
        if (product.price >= 7001) return product;
      });
    }
    filtered = true;
    setFilteredProducts([...filteredProducts]);
  }
  if (templateFilter) {
    if (filtered) {
      if (templateFilter == 2) {
        filteredProducts = filteredProducts.filter((product) => {
          if (product.templates === 2) return product;
        });
      } else if (templateFilter == 3) {
        filteredProducts = filteredProducts.filter((product) => {
          if (product.templates === 3) return product;
        });
      } else {
        filteredProducts = filteredProducts.filter((product) => {
          if (product.templates > 3) return product;
        });
      }
    } else {
      if (templateFilter == 2) {
        filteredProducts = allProducts.filter((product) => {
          if (product.templates === 2) return product;
        });
      } else if (templateFilter == 3) {
        filteredProducts = allProducts.filter((product) => {
          if (product.templates === 3) return product;
        });
      } else {
        filteredProducts = allProducts.filter((product) => {
          if (product.templates > 3) return product;
        });
      }
    }
    filtered = true;
    setFilteredProducts([...filteredProducts]);
  }
  if (typeFilter) {
    if (filtered) {
      filteredProducts = filteredProducts.filter((product) => {
        if (product.type === typeFilter) return product;
      });
    } else {
      filteredProducts = allProducts.filter((product) => {
        if (product.type === typeFilter) return product;
      });
    }
    setFilteredProducts([...filteredProducts]);
  }
};
