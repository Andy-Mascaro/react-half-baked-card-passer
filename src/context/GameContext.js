import { createContext, useState, useContext } from 'react';
import initialCards from '../cards-data';


const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [selectedCard, setSelectedCard] = useState(); 
  const [deck, setDeck] = useState(initialCards);
  const [playerOneHand, setPlayerOneHand] = useState([]);
  const [playerTwoHand, setPlayerTwoHand] = useState([]);
  const [playerThreeHand, setPlayerThreeHand] = useState([]);
  const [from, setFrom] = useState('deck');
  const [to, setTo] = useState(1);

 




  return (
    <GameContext.Provider value={{ selectedCard, setSelectedCard, deck, setDeck, playerOneHand, setPlayerOneHand, playerTwoHand, setPlayerTwoHand, setPlayerThreeHand, playerThreeHand, from, setFrom, to, setTo, }}>
      {children}
    </GameContext.Provider>  
  );
};
const useGameContext = () => {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error('useGame must be used within a GameProvider'); 
  }
  return context;
};
export { useGameContext, GameProvider };