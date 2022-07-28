import styles from "./CartProduct.module.css";
import Image from "next/image";
import { MdOutlineCancel } from "react-icons/md";
import { removeProductFromCart } from "../../utils/cartHandlers";
import toast from "react-hot-toast";

const CartProduct = ({ product, setCartProducts }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageBox}>
        <MdOutlineCancel
          size={16}
          color="red"
          className={styles.closeIcon}
          onClick={() => {
            setCartProducts(removeProductFromCart(product.id));
            toast.success(`${product.name} removed from cart!`, {
              style: {
                background: "#333",
                color: "#fff",
              },
            });
          }}
        />
        <Image
          src={product.imageUrl}
          height="90px"
          width="135px"
          alt={product.name}
        />
      </div>
      <div className={styles.details}>
        <div className={styles.description}>
          <text>{product.name}</text>
          <text className={styles.smallText}>by KICKSUP and you</text>
        </div>
        <text>Rs. {product.price}/-</text>
      </div>
    </div>
  );
};

export default CartProduct;
