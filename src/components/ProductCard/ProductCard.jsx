import styles from "./ProductCard.module.css";
import Image from "next/image";
import ProductRating from "../Rating";

const ProductCard = ({
  data,
  darkbg,
  setProductPreview,
  setSelectedProduct,
}) => {
  const { imageUrl, name, price, rating } = data;
  return (
    <div
      onClick={() => {
        setProductPreview(true);
        setSelectedProduct(data);
      }}
      className={styles.container}
      style={{
        backgroundColor: darkbg ? "black" : "",
        color: darkbg ? "white" : "",
      }}
    >
      <div className={styles.image}>
        <Image src={imageUrl} height="80px" width="150x" alt={name} />
      </div>
      <div className={styles.productDetails}>
        <div className={styles.productName}>{name}</div>
        <div className={styles.priceRating}>
          <text>Rs. {price}/-</text>
          <ProductRating rating={rating} darkbg={darkbg} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
