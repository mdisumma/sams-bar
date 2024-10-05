import { useState } from "react";
import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";
import Form from "./component/form/Form";
import Cocktail from "./component/cocktail/Cocktail";
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

  //GET INGREDIENTS FROM OBJECT
  function getIngredient(cocktail) {
    return Object.keys(cocktail).reduce((acc, key) => {
      if (key.includes("Ingredient") && cocktail[key] !== null) {
        acc.push(cocktail[key]);
      }
      return acc;
    }, []);
  }

  return (
    <div className="App">
      <Header title={"Sam's Bar"} />
      <Form onSubmit={handleSubmit} onChange={handleChange} />
      <div className="cocktail-container">
        {response.drinks &&
          response.drinks.map((cocktail, index) => (
            <Cocktail
              key={index}
              title={cocktail.strDrink}
              src={cocktail.strDrinkThumb}
              alt={cocktail.strDrink}
              ingredients={getIngredient(cocktail)}
            />
          ))}
      </div>
      <Footer text={"powered by thecocktaildb"} />
    </div>
  );
}

export default App;
