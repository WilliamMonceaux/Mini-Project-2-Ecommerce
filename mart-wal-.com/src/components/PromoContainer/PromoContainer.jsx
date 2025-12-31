import "./promo-container.css";

function PromoContainer(props) {
  return (
    <section className="flex-container">
      <div className="promo-container">
        <header className="promo-header">
          <h2> Featured Products: </h2>
        </header>
        {props.children}
      </div>
    </section>
  );
}

export { PromoContainer };
