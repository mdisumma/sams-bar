export default function Cocktail(props) {
  return (
    <section className="cocktail" onClick={props.onClick}>
      <h2>{props.title}</h2>
      <div className={props.displayClassName}>
        <img src={props.src} alt={props.alt} />
        <div>
          <ul>
            {props.getIngredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <p>{props.instruction}</p>
        </div>
      </div>
    </section>
  );
}
