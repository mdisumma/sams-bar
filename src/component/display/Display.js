export default function Display({ title, src, alt, ingredient1, ingredient2 }) {
  return (
    <section className="cocktail-display">
      <h2>{title}</h2>
      <img src={src} alt={alt} />
      <ul>
        <li>{ingredient1}</li>
        <li>{ingredient2}</li>
      </ul>
    </section>
  );
}
