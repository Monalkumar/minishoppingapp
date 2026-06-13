import styles from "./CartDrawer.module.scss";
import { useCart } from "../../stores/CartContext";

const CartDrawer = ({ isOpen, onClose }) => {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();


  const subtotal = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );


  return (
    <>
      {isOpen && (
        <div
          className={styles.overlay}
          onClick={onClose}
        />
      )}


      <div
        className={`${styles.drawer} ${
          isOpen ? styles.open : ""
        }`}
      >

        <div className={styles.header}>

          <h2>
            Your Cart
          </h2>

          <button
            onClick={onClose}
            className={styles.closeBtn}
          >
            ✕
          </button>

        </div>


        {
          cartItems.length === 0 ? (

            <p className={styles.empty}>
              Cart is Empty
            </p>

          ) : (

            <>

            <div className={styles.items}>

              {
                cartItems.map((item)=>(
                  
                  <div
                    key={item.id}
                    className={styles.cartItem}
                  >

                    <img
                      src={item.image}
                      alt={item.title}
                    />


                    <div className={styles.details}>

                      <h4>
                        {item.title}
                      </h4>


                      <p>
                        ${item.price}
                      </p>


                      <div className={styles.quantity}>

                        <button
                          onClick={() =>
                            decreaseQuantity(item.id)
                          }
                        >
                          -
                        </button>


                        <span>
                          {item.quantity}
                        </span>


                        <button
                          onClick={() =>
                            increaseQuantity(item.id)
                          }
                        >
                          +
                        </button>

                      </div>


                      <button
                        className={styles.remove}
                        onClick={() =>
                          removeFromCart(item.id)
                        }
                      >
                        Remove
                      </button>


                    </div>


                  </div>

                ))
              }

            </div>



            <div className={styles.summary}>

              <div>
                <span>
                  Subtotal
                </span>

                <strong>
                  ${subtotal.toFixed(2)}
                </strong>
              </div>



              <div>
                <span>
                  Grand Total
                </span>

                <strong>
                  ${subtotal.toFixed(2)}
                </strong>
              </div>


            </div>


            </>

          )
        }


      </div>
    </>
  );
};


export default CartDrawer;