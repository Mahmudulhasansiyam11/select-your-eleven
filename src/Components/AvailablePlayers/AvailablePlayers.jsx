import { use } from "react";
import PlayerCard from "../PlayerCard/PlayerCard";


const AvailablePlayers = ({ fetchPlayersPromise, availableBalance, setAvailableBalance, purchasedPlayers, setPurchasedPlayers }) => {
  const players = use(fetchPlayersPromise);
//   console.log(players);

  return (
    <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
      {players.map((player) => (
        <PlayerCard key={player.player_name} availableBalance={availableBalance} setAvailableBalance={setAvailableBalance} purchasedPlayers={purchasedPlayers} setPurchasedPlayers={setPurchasedPlayers} player={player}></PlayerCard>
      ))}
    </div>
  );
};

export default AvailablePlayers;
