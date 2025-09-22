import React, { use } from 'react';

const AvailablePlayers = ({fetchPlayersPromise}) => {

    const players = use(fetchPlayersPromise);
    console.log(players)

    return (
        <div className='max-w-[1200px] mx-auto'>
            <h3>Available Players</h3>
        </div>
    );
};

export default AvailablePlayers;