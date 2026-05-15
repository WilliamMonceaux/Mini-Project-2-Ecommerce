import "../index.css";

function PromoContainer(props) {
  return (
    <section>
      <div className="promo-container">
        {props.children}
      </div>
    </section>
  );
}

export { PromoContainer };
