import styles from "./ProductCard.module.scss";
import { Link } from "react-router-dom";
import { useCart } from "../../stores/CartContext";

const ProductCards = ({ product }) => {

  const { addToCart } = useCart();

  return (
    <div className={styles.card}>
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.title}
          className={styles.image}
        />
      </Link>

      <Link
        to={`/product/${product.id}`}
        className={styles.title}
      >
        {product.title}
      </Link>

      <p className={styles.price}>
        ${product.price}
      </p>

      <button onClick={() => addToCart(product)}>
        Quick Add
      </button>
    </div>
  );
};

export default ProductCards;