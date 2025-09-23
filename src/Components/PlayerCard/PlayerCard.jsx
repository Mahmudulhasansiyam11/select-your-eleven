import { useState } from "react";
import flagImg from "../../assets/flag.png";
import userImg from "../../assets/user.png";

const PlayerCard = ({ player, availableBalance, setAvailableBalance }) => {
  const [isSelected, setIsSelected] = useState(false);



  const handleSelected = (playerData) => {
    const playerPrice = parseInt(playerData.price.split("USD").join(""));
    if(availableBalance < playerPrice){
        alert("Not enough coins!!");
        return;
    }
    setIsSelected(true);
    setAvailableBalance(
      availableBalance - playerPrice
    );
  };

  

  return (
    <div>
      <div className="card bg-base-100  shadow-sm p-4">
        <figure>
          <img
            className="w-full rounded-3xl object-cover"
            src={player.player_image}
            alt={player.player_name}
          />
        </figure>
        <div className="mt-[24px] flex items-center gap-[16px]">
          <img src={userImg}></img>
          <p className="font-semibold text-[20px]">{player.player_name}</p>
        </div>
        <div className="mt-[16px] flex justify-between items-center pb-4 border-b-2 border-b-gray-200">
          <div className="flex items-center gap-3">
            <img src={flagImg}></img>
            <p className="font-[300]">{player.player_country}</p>
          </div>
          <div className="btn rounded-[10px] bg-gray-100">
            {player.playing_role}
          </div>
        </div>
        <div className="flex justify-between items-center font-bold mt-[16px]">
          <p>Rating</p>
          <p>{player.ratting}</p>
        </div>
        <div className="mt-[16px] flex justify-between items-center">
          <p className="font-bold">{player.batting_style}</p>
          <p className="font-[300]">{player.bowling_style}</p>
        </div>
        <div className="mt-[16px] flex justify-between items-center">
          <p className="font-bold">
            Price: $<span>{player.price}</span>
          </p>
          <button
            disabled={isSelected}
            onClick={() => {
              handleSelected(player);
            }}
            className="btn rounded-[10px] bg-gray-100"
          >
            {isSelected ? "Selected" : "Choose Player"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
