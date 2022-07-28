import { useEffect, useState } from "react";
import { productsData } from "../../data/products";
import styles from "../../styles/Store.module.css";
import Cart from "../components/Cart/Cart";
import Filter from "../components/Filter/Filter";
import ProductPreview from "../components/ProductPreview/ProductPreview";
import Products from "../components/Products/Products";
import { loadProductsFromCart } from "../utils/cartHandlers";

const store = () => {
  const [productPreview, setProductPreview] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});
  const [cartProducts, setCartProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    setAllProducts(productsData);
    setFilteredProducts(productsData);
    setCartProducts(loadProductsFromCart());
  }, []);

  return (
    <div className={styles.container}>
      {productPreview ? (
        <div className={styles.previewArea}>
          <ProductPreview
            setProductPreview={setProductPreview}
            product={selectedProduct}
            setCartProducts={setCartProducts}
          />
        </div>
      ) : (
        <>
          <div className={styles.filterArea}>
            <Filter
              allProducts={allProducts}
              filteredProducts={filteredProducts}
              setFilteredProducts={setFilteredProducts}
            />
          </div>
          <div className={styles.productsArea}>
            <Products
              filteredProducts={filteredProducts}
              setProductPreview={setProductPreview}
              setSelectedProduct={setSelectedProduct}
            />
          </div>
        </>
      )}
      <div className={styles.cartArea}>
        <Cart cartProducts={cartProducts} setCartProducts={setCartProducts} />
      </div>
    </div>
  );
};

export default store;
