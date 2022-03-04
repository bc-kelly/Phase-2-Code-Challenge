import React from "react";
import BotCard from './BotCard'

function BotCollection({onBots, onBotArmy, setOnBotArmy, dischargeBot}) {

  const showBots = onBots.map((bot) => {

    function handleClick(item) {
      if (!onBotArmy.includes(item)) {
        setOnBotArmy([...onBotArmy, item])
      }
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
 

  // Your code here
  return (
    <div className="ui four column grid">
      <div className="row">
        {showBots}
        Collection of all bots
      </div>
    </div>
  );
}

export default BotCollection;
