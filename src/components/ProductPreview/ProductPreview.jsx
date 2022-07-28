import styles from "./ProductPreview.module.css";
import { IoChevronBack } from "react-icons/io5";
import ProductRating from "../Rating";
import Image from "next/image";
import ColorSelector from "../ColorSelector/ColorSelector";
import {
  addProductToCart,
  loadProductsFromCart,
} from "../../utils/cartHandlers";
import toast from "react-hot-toast";

const ProductPreview = ({ setProductPreview, product, setCartProducts }) => {
  return (
    <div className={styles.container}>
      <div className={styles.previewTop}>
        <div
          onClick={() => setProductPreview(false)}
          className={styles.backButton}
        >
          <IoChevronBack size={32} />
          <text>your design space</text>
        </div>
      </div>
      <div className={styles.previewMain}>
        <div className={styles.previewLeft}>
          <Image
            src={product.imageUrl}
            height="270px"
            width="340px"
            alt={product.name}
          />
        </div>
        <div className={styles.previewRight}>
          <div className={styles.imageGroup}>
            {[...Array(product.templates)].map((index) => (
              <div className={styles.imageBox} key={index}>
                <Image
                  src={product.imageUrl}
                  height="90px"
                  width="135px"
                  alt={product.name}
                />
              </div>
            ))}
          </div>
          <div className={styles.tweaks}>
            <text>{product.name}</text>
            <text>by KICKSUP</text>
            <ProductRating rating={product.rating} />
            <text>{product.reviews} reviews</text>
            <text>Rs. {product.price}/-</text>
            <text>Get an exclusive 20% off shopping with HDFC bank</text>
            {["Front", "Middle", "Back", "Sole"].map((label, index) => (
              <ColorSelector label={label} key={index} />
            ))}
            <div className={styles.sizeBox}>
              <text>Size</text>
              {[7, 8, 9, 10].map((num, index) => (
                <div key={index} className={styles.numBox}>
                  {num}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.previewBottom}>
        <div className={styles.rating}>
          <text>Rate Product </text>
          <ProductRating readonly={false} large={true} />
        </div>
        <div className={styles.buttonGroup}>
          <button className={styles.shareBtn}>share design</button>
          <button
            className={styles.cartBtn}
            onClick={() => {
              addProductToCart(product, () => {
                toast.success(`${product.name} added to cart 🚀`, {
                  style: {
                    background: "#333",
                    color: "#fff",
                  },
                });
              });
              setCartProducts(loadProductsFromCart());
            }}
          >
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPreview;
