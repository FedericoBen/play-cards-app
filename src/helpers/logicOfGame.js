
export const logicOfGame = (idCard, numRandCard, cards=[], lastCard, setLastCard) => {
    

    const newCards = cards.map(element => {

      if (element.id === idCard && lastCard.length == 0) {

        element.active = true
        setLastCard([element])
        return element;

      } else {
        
        if (numRandCard == lastCard[0]?.numRand) {
          // console.log('caso2');
          if (element.id === idCard) {
            // console.log('caso2.1', lastCard);
            element.active = true
            setLastCard([])
            return element;
          } else {
            return element;
          }
        } else {
          // console.log('caso3');
          if (element.numRand == lastCard[0]?.numRand && element.id != idCard) {
            // console.log('caso3.1');
            setTimeout(() => {
              element.active = false
            }, 250);
            setLastCard([])
            return element;
          } else if (element.id == idCard && lastCard.length !== 0) {
            // console.log('caso3.2');
            element.active = true
            setTimeout(() => {
              element.active = false
            }, 250);
            return element;
          } else {
            return element;
          }
        }
      }


    })

    return newCards;
  }