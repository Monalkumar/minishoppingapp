import styles from "./Navbar.module.scss";
import { useCart } from "../../stores/CartContext";

const Navbar = ({ onCartClick }) => {
  const { cartItems } = useCart();

  const totalItems = cartItems.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>MiniShop</div>

      <div className={styles.links}>
        <a href="/">Home</a>
      </div>

      <div className={styles.cart} onClick={onCartClick}>
        🛒
        {totalItems > 0 && (
          <span className={styles.badge}>{totalItems}</span>
        )}
      </div>
    </nav>
  );
};

export default Navbar;