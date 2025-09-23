import SelectedCard from "../SelectedCard/SelectedCard";

const SelectedPlayers = ({purchasedPlayers, removePlayer}) => {
    console.log(purchasedPlayers);
    return (
        purchasedPlayers.map(player => <SelectedCard key={player.player_name} player={player} removePlayer={removePlayer}></SelectedCard>)
    );
};

export default SelectedPlayers;