
import { Suspense, useState } from 'react';
import './App.css';
import AvailablePlayers from './Components/AvailablePlayers/AvailablePlayers';
import Navbar from './Components/Navbar/Navbar';
import SelectedPlayers from './Components/SelectedPlayers/SelectedPlayers';

const fetchPlayers = async () => {
    const res = await fetch('/Players.json');
    return res.json();
  }

  const fetchPlayersPromise = fetchPlayers();


function App() {

  const [toggle, setToggle] = useState(true);
  const [availableBalance, setAvailableBalance] = useState(6000000000);
  

  return (
    <>
    <Navbar availableBalance={availableBalance}></Navbar>
    <div className='mt-[30px] mb-[32px] max-w-[1200px] mx-auto flex justify-between items-center'>
      <div className='font-bold text-[28px]'>Available Players</div>
      <div>
        <button onClick={() => setToggle(true)} className={`px-5 py-4 border-gray-200 border-[2px] border-r-0 font-bold rounded-l-2xl ${toggle === true ? "bg-[#E7FE29]" : " "}`}>Available</button>
        <button onClick={() => setToggle(false)} className={`px-5 py-4 border-gray-200 border-[2px] border-l-0 font-bold rounded-r-2xl ${toggle === false ? "bg-[#E7FE29]" : " "}`}>Selected <span>(0)</span></button>
      </div>
    </div>

    {
      toggle === true ?  <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
      <AvailablePlayers availableBalance={availableBalance} setAvailableBalance={setAvailableBalance} fetchPlayersPromise={fetchPlayersPromise}></AvailablePlayers>
    </Suspense> : <SelectedPlayers></SelectedPlayers>
    }
    </>
  )
}

export default App
