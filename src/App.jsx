
import { Suspense } from 'react';
import './App.css'
import AvailablePlayers from './Components/AvailablePlayers/AvailablePlayers'
import Navbar from './Components/Navbar/Navbar'

function App() {
  
  const fetchPlayers = async () => {
    const res = await fetch('/Players.json');
    return res.json();
  }

  const fetchPlayersPromise = fetchPlayers();

  return (
    <>
    <Navbar></Navbar>
    <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
      <AvailablePlayers fetchPlayersPromise={fetchPlayersPromise}></AvailablePlayers>
    </Suspense>
    </>
  )
}

export default App
