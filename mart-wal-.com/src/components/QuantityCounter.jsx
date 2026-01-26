import { useCartContext } from "../Context/CartContext";

function QuantityCounter({ item }) {
  const { updateQuantity } = useCartContext();
  return (
    <div className="quantity-counter-body">
      <button
        className="quantity-btn"
        onClick={() => updateQuantity(item.id, -1)}
      >
        -
      </button>
      <p className="quantity-amount">{item.quantity}</p>
      <button
        className="quantity-btn"
        onClick={() => updateQuantity(item.id, 1)}
      >
        +
      </button>
    </div>
  );
}

export { QuantityCounter };
