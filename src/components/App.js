import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";



function App() {
    const [isOn, setIsOn] = useState(false);
    const [category, setCategory] = useState("All");  
    function handleClick() {
      setIsOn((isOn) => !isOn);
    }
    
    const displayFoods = itemData.filter((item) => {
      if (category === "All") {
        return true;
      } else {
        return item.category === category;
      }
    });
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = isOn ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>{isOn ? "Light Mode" : "Dark Mode"}</button>
      </header>
      <ShoppingList items={displayFoods} setCategory={setCategory}/>
    </div>
  );
}

export default App;
