import React, { useEffect, useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {

  const [onBots, setOnBots] = useState([]);
  const [onBotArmy, setOnBotArmy] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8002/bots')
    .then(resp => resp.json())
    .then(botData => {
      // console.log(botData);
      setOnBots(botData)
    })
  }, [])

  function dischargeBot(id) {
      fetch('http://localhost:8002/bots/' + id, {
        method: 'DELETE',
      })
      .then(res => res.text()) 
      .then(res => {
        const listWithBotRemoved = onBotArmy.filter((item) => item.id !== id);
        setOnBotArmy(listWithBotRemoved);
        const collectionWithBotRemoved = onBots.filter((item) => item.id !== id);
        setOnBots(collectionWithBotRemoved);
        
      })
  }

  return (
    <div>
      <YourBotArmy 
        onBotArmy={onBotArmy}
        setOnBotArmy={setOnBotArmy}
        dischargeBot={dischargeBot}
      />
      <BotCollection 
        onBots={onBots}
        onBotArmy={onBotArmy}
        setOnBotArmy={setOnBotArmy}
      />
    </div>
  )
}

export default BotsPage;
