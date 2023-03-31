import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer({ fullSushiList, grabTheEaten, currentMoney }) {
  const[sushiCount, setSushiCount] = useState(0)

  const currentSushis = fullSushiList.filter(sushi => 
    (sushi.id > sushiCount && sushi.id <= (sushiCount + 4))
  )
  
  const currentDisplayOfSushis = currentSushis.map(sushi => {
    return (
      <Sushi
      currentMoney = {currentMoney}
      key = {sushi.id}
      sushi = {sushi}
      grabTheEaten = {grabTheEaten}
      />
    )
  })

  function setToMoreSushi() {
    setSushiCount(sushiCount + 4)
  }
  
  return (
    <div className="belt">
      {currentDisplayOfSushis}
      <MoreButton onMoreButtonClick = {setToMoreSushi}/>
    </div>
  );
}

export default SushiContainer;
