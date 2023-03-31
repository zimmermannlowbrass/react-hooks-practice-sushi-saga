import React, { useState }from "react";

function Sushi( { sushi, grabTheEaten, currentMoney }) {
  const [hasBeenEaten, setEatenStatus] = useState(false)

  function handleBeingEaten() {
    if (sushi.price <= currentMoney && !hasBeenEaten) {
      setEatenStatus(true)
      grabTheEaten(sushi)
    } else {
      console.log('you are broke')
    }
  }
  

  return (
    <div className="sushi">
      <div className="plate" onClick={handleBeingEaten}>
        {/* Tell me if this sushi has been eaten! */}
        {hasBeenEaten ? null : (
          <img
            src={sushi.img_url}
            alt={sushi.name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  );
}

export default Sushi;
