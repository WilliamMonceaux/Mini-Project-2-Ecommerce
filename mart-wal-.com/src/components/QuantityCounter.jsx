
function QuantityCounter() {
  return (
    <div className="quantity-display-flex">
      <button className="quantity-btn">-</button>
      <p className='quantity-amount'>2</p>
      <button className="quantity-btn">+</button>
    </div>
  );
}

export { QuantityCounter };
