export default function Form(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <label htmlFor="cocktail-input">Cocktail name:</label>
      <input
        type="text"
        id="cocktail-input"
        value={props.inputValue}
        onChange={props.onChange}
      ></input>
      <input type="submit" value="serch"></input>
    </form>
  );
}
