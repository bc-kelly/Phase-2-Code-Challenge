import React from "react";
import BotCard from './BotCard'

function YourBotArmy({onBotArmy, setOnBotArmy, dischargeBot}) {

  const showArmy = onBotArmy.map((bot)=> {

    function handleClick() {
      const armyWithBotRemoved = onBotArmy.filter((item) => item !== bot)
      setOnBotArmy(armyWithBotRemoved)
    }

    return (
      <BotCard 
      key={bot.id}
      bot={bot}
      handleClick={handleClick}
      dischargeBot={dischargeBot}
      />
    )
  })

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {showArmy}
          Your Bot Army
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
