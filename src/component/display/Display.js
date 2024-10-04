export default function Display(props) {
  return (
    <section className="cocktail-display">
      <h2>{props.title}</h2>
      <img src={props.src} alt={props.alt} />
      <ul>
        {props.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </section>
  );
}
