import styles from "./Products.module.css";
import { FiSearch } from "react-icons/fi";
import ProductCard from "../ProductCard/ProductCard";

const Products = ({
  filteredProducts,
  setProductPreview,
  setSelectedProduct,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.productsTop}>
        <text>SHOES</text>
        <div className={styles.icons}>
          <FiSearch size={19} />
          <button>sort by</button>
        </div>
      </div>
      <div className={styles.productsList}>
        {filteredProducts.length > 0 ? (
          <>
            {filteredProducts.map((product, index) => (
              <ProductCard
                data={product}
                setProductPreview={setProductPreview}
                setSelectedProduct={setSelectedProduct}
                key={index}
                darkbg={(index + 1) % 2 == 0}
              />
            ))}
          </>
        ) : (
          <text className={styles.noProduct}>
            OOPS! No products found for these filters.
          </text>
        )}
      </div>
    </div>
  );
};

export default Products;
