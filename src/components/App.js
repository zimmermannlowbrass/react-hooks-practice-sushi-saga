import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [money, setCurrentMoney] = useState(100)
  const [sushiList, setSushiList] = useState([])
  const [plates, setPlates] = useState([])

  useEffect(() => {
    fetch(API)
    .then(r=> r.json())
    .then(data => {setSushiList(data)})
  }, [])

  function handleFiguringOutEatenCost(sushi) {
    setCurrentMoney(money - sushi.price)
    setPlates([...plates, sushi])
  }

  return (
    <div className="app">
      <SushiContainer 
      fullSushiList = {sushiList}
      grabTheEaten = {handleFiguringOutEatenCost} 
      currentMoney = {money}
      />
      <Table 
      money = {money}
      plates = {plates}
      />
    </div>
  );
}

export default App;
