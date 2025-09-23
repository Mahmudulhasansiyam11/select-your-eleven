import React from 'react';
import deleteImg from '../../assets/delete.png'
const SelectedCard = ({player, removePlayer}) => {
    const handleRemove = () => {
        removePlayer(player);
    }
    return (
        <div className='max-w-[1200px] mx-auto flex justify-between items-center bg-yellow-50 p-5 rounded-4xl mt-5'>
           <div className="flex items-center gap-5">
             <div>
                <img className='w-[50px] h-[50px] rounded-2xl' src={player.player_image} alt="" />
            </div>
            <div>
                <p className="font-bold text-[24px]">{player.player_name}</p>
                <p className="font-[300] text-[16px]">{player.batting_style}</p>
            </div>
           </div>
           <div>
            <img onClick={handleRemove} src={deleteImg}></img>
           </div>
        </div>
    );
};

export default SelectedCard;