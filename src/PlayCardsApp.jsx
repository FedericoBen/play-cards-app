
import { useState } from 'react'
import { useMemo } from 'react';
import { ConfigGame } from './components/ConfigGame';
import { DisplayGame } from './components/DisplayGame';
import { calcDisplayCards } from './helpers/generatorCards';
import { logicOfGame } from './helpers/logicOfGame';
import { useChronometer } from './hooks/useChronometer';




export const PlayCardsApp = () => {

  const [numOfCards, setNumOfCards] = useState(12)

  const [startPlay, setStartPlay] = useState({
    play: 'Start to play',
    active: false,
  })

  const [lastTime, setLastTime] = useState('');

  const [cards, setCards] = useState([])

  const [lastCard, setLastCard] = useState([])

  const [activeChronometer, restart, secondsString] = useChronometer();


  const handleSliderChange = (e, newValue) => {
    setNumOfCards(newValue);
  };

  const handleStartPlay = () => {

    if (!startPlay.active) {

      setStartPlay({
        play: 'Reset',
        active: true,
      });

      setCards(calcDisplayCards(numOfCards));

      restart();
      activeChronometer(true);

    } else {

      setStartPlay({
        play: 'Start to play',
        active: false,
      });
      
      setCards([]);

      restart();
      activeChronometer(false);

      setNumOfCards(12)
    }

  }

  useMemo(() => {
    let count = 0;

    cards.map((item, index) => {
      if (item.active) {
        count++;
      }
    });
    if (count === numOfCards) {

      setCards([]);
      setNumOfCards(12);
      setStartPlay({
        play: 'Start to play',
        active: false,
      });

      setLastTime(secondsString)

    }

  }, [cards])


  const handleChangeActive = (idCard, numRandCard) =>{
    setCards(logicOfGame(idCard, numRandCard, cards, lastCard, setLastCard))
  }

  return (
    <>

      <ConfigGame
        active={startPlay.active}
        numOfCards={numOfCards}
        lastTime={lastTime}
        correctTimerNumStri={secondsString}
        handleStartPlay={handleStartPlay}
        play={startPlay.play}
        handleSliderChange={handleSliderChange}
      />

      <DisplayGame
          cards={cards}
          numOfCards={numOfCards}
          handleChangeActive={handleChangeActive}
      />

    </>


  )
}
