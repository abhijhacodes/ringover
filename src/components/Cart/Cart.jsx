import styles from "./Cart.module.css";
import { FiShoppingBag } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import { MdDateRange } from "react-icons/md";
import CartProduct from "../CartProduct/CartProduct";

const Cart = ({ cartProducts, setCartProducts }) => {
  return (
    <div className={styles.container}>
      <div className={styles.cartTop}>
        <text>CART</text>
        <FiShoppingBag size={24} />
      </div>
      <div
        className={styles.cartItems}
        style={{
          justifyContent: cartProducts?.length == 0 ? "center" : "flex-start",
        }}
      >
        {cartProducts?.length > 0 ? (
          <div className={cartProducts?.length >= 5 ? `${styles}.padTop` : ""}>
            {cartProducts.map((product, index) => (
              <CartProduct
                product={product}
                setCartProducts={setCartProducts}
                key={index}
              />
            ))}
          </div>
        ) : (
          <div>
            <text>What&apos;s stopping you, designer ?</text>
          </div>
        )}
      </div>
      <div className={styles.cartBottom}>
        <div className={styles.iconText}>
          <div>
            <GrLocation /> Home
          </div>
          <div>
            <MdDateRange /> Select date
          </div>
        </div>
        <button className={styles.btn}>order now</button>
      </div>
    </div>
  );
};

export default Cart;
