import { use } from "react";
import flagImg from "../../assets/flag.png";
import userImg from "../../assets/user.png";

const AvailablePlayers = ({ fetchPlayersPromise }) => {
  const players = use(fetchPlayersPromise);
  console.log(players);

  return (
    <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
      {players.map((player) => (
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
            <div className="btn rounded-[10px] bg-gray-100">Choose Player</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AvailablePlayers;
