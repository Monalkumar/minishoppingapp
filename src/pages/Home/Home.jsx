import { useState } from "react";
import useProducts from "../../hooks/useProducts";
import ProductCards from "../../components/ProductCards/ProductCards";
import Navbar from "../../components/Navbar/Navbar";
import CartDrawer from "../../components/CartDrawer/CartDrawer";
import styles from "./Home.module.scss";

const Home = () => {
  console.log("hello checks");

  const { products, loading, error } = useProducts();

  const [isCartOpen, setIsCartOpen] = useState(false);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <>
      <Navbar onCartClick={() => setIsCartOpen(true)} />

      <div className={styles.page}>
        <h1>Products</h1>

        <div className={styles.container}>
          {products.map((product) => (
            <ProductCards key={product.id} product={product} />
          ))}
        </div>
      </div>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Home;
