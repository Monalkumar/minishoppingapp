import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/${id}`
        );

        const data = await response.json();

        setProduct(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <img
        src={product.image}
        alt={product.title}
        width="300"
      />

      <h1>{product.title}</h1>

      <h2>${product.price}</h2>

      <p>{product.description}</p>

      <button>Add To Cart</button>
    </div>
  );
};

export default ProductDetail;