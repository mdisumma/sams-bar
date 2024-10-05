import { useState } from "react";
import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";
import Form from "./component/form/Form";
import Cocktail from "./component/cocktail/Cocktail";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [response, setResponse] = useState("");
  const [cocktailDisplay, setCocktailDisplay] = useState("Garibaldi Negroni");

  //HANDLE INPUT CHANGE
  function handleChange(e) {
    console.log(e.target.value);
    setInputValue(e.target.value);
  }

  //HANDLE SUBMIT (fetch)
  function handleSubmit(e) {
    e.preventDefault();
    if (inputValue) {
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
      setInputValue("");
    }
  }

  //RETURN INGREDIENTS !== NULL
  function getIngredient(cocktail) {
    return Object.keys(cocktail).reduce((acc, key) => {
      if (key.includes("Ingredient") && cocktail[key] !== null) {
        const measureKey = key.replace("Ingredient", "Measure");
        const measure = cocktail[measureKey] || "";
        acc.push(`${cocktail[key]} ${measure}`.trim());
      }
      return acc;
    }, []);
  }

  return (
    <div className="App">
      <Header title={"Sam's Bar"} />
      <main className="main">
        <Form
          inputValue={inputValue}
          onSubmit={handleSubmit}
          onChange={handleChange}
        />
        <div className="cocktail-container">
          {response.drinks &&
            response.drinks.map((cocktail, index) => (
              <Cocktail
                onClick={() =>
                  cocktailDisplay === cocktail.strDrink
                    ? setCocktailDisplay("cocktail.strDrink")
                    : setCocktailDisplay(cocktail.strDrink)
                }
                key={index}
                title={cocktail.strDrink}
                src={cocktail.strDrinkThumb}
                alt={cocktail.strDrink}
                getIngredients={getIngredient(cocktail, cocktail)}
                displayClassName={
                  cocktailDisplay === cocktail.strDrink
                    ? "display-open"
                    : "display-close"
                }
                instruction={cocktail.strInstructions}
              />
            ))}
        </div>
      </main>
      <Footer text={"powered by thecocktailDB"} />
    </div>
  );
}

export default App;
