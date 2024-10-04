export default function Form({ onSubmit, onChange }) {
  return (
    <main className="header">
      <form onSubmit={onSubmit}>
        <label htmlFor="cocktail-input">Cocktail name:</label>
        <input type="text" id="cocktail-input" onChange={onChange}></input>
        <input type="submit" value="serch"></input>
      </form>
    </main>
  );
}
