import { useState } from "react";
import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";
import Form from "./component/form/Form";
import Display from "./component/display/Display";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [response, setResponse] = useState("");

  //HANDLE CHANGE
  function handleChange(e) {
    console.log(e.target.value);
    setInputValue(e.target.value);
  }

  //HANDLE SUBMIT
  function handleSubmit(e) {
    e.preventDefault();
    try {
      fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputValue}`
      )
        .then((response) => response.json())
        .then((data) => setResponse(data));
    } catch (error) {
      console.error(error);
    }
    console.log(response);
  }

  return (
    <div className="App">
      <Header title={"Sam's Bar"} />
      <Form onSubmit={handleSubmit} onChange={handleChange} />
      {response.drinks &&
        response.drinks.map((cocktail) => (
          <Display
            key={cocktail.idDrink}
            title={cocktail.strDrink}
            // src={cocktail.strDrinkThumb}
            alt={cocktail.strDrink}
            ingredient1={cocktail.strIngredient1}
            ingredient2={cocktail.strIngredient2}
          />
        ))}
      <Footer text={"paowered by thecocktaildb"} />
    </div>
  );
}

export default App;
