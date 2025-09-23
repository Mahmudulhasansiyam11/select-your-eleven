
import { Suspense, useState } from 'react';
import './App.css';
import AvailablePlayers from './Components/AvailablePlayers/AvailablePlayers';
import SelectedPlayers from './Components/SelectedPlayers/SelectedPlayers';
import Navbar from './Components/Navbar/Navbar';



const fetchPlayers = async () => {
    const res = await fetch('/Players.json');
    return res.json();
  }

  const fetchPlayersPromise = fetchPlayers();


function App() {

  const [toggle, setToggle] = useState(true);
  const [availableBalance, setAvailableBalance] = useState(6000000000);
  const [purchasedPlayers, setPurchasedPlayers] = useState([]);
  
  // console.log(purchasedPlayers);

  const removePlayer = (p) => {
    const removePurchasedPlayers = purchasedPlayers.filter(ply => ply.player_name !== p.player_name);
    // console.log(removePurchasedPlayers);
    setPurchasedPlayers(removePurchasedPlayers);
    setAvailableBalance(availableBalance + parseInt(p.price.split("USD").join("")));
  }

  return (
    <>
    <Navbar availableBalance={availableBalance}></Navbar>
    <div className='mt-[30px] mb-[32px] max-w-[1200px] mx-auto flex justify-between items-center'>
      <div className='font-bold text-[28px]'>{toggle === true ? "Available Players" : `Selected Player (${purchasedPlayers.length}/6)`}</div>
      <div>
        <button onClick={() => setToggle(true)} className={`px-5 py-4 border-gray-200 border-[2px] border-r-0 font-bold rounded-l-2xl ${toggle === true ? "bg-[#E7FE29]" : " "}`}>Available</button>
        <button onClick={() => setToggle(false)} className={`px-5 py-4 border-gray-200 border-[2px] border-l-0 font-bold rounded-r-2xl ${toggle === false ? "bg-[#E7FE29]" : " "}`}>Selected <span>({purchasedPlayers.length})</span></button>
      </div>
    </div>

    {
      toggle === true ?  <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
      <AvailablePlayers availableBalance={availableBalance} setAvailableBalance={setAvailableBalance} 
      purchasedPlayers={purchasedPlayers} setPurchasedPlayers={setPurchasedPlayers} fetchPlayersPromise={fetchPlayersPromise}></AvailablePlayers>
    </Suspense> : <SelectedPlayers purchasedPlayers={purchasedPlayers} removePlayer={removePlayer}></SelectedPlayers>
    };
    </>
  )
}

export default App
