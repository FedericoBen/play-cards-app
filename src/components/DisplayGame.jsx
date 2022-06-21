import { Grid } from '@mui/material'

import React from 'react'
import { CardDisplay } from './CardDisplay'

export const DisplayGame = ({
    cards,
    numOfCards,
    handleChangeActive
}) => {
  return (
    <Grid container
        direction='row'
        sx={{paddingInline:45}}   
      >
        {
          cards.map((card) => (
            <CardDisplay
            key={card.id}
            numOfCards={numOfCards}
            handleChangeActive={handleChangeActive}
            card={card}
            />
          ))
        }

      </Grid>
  )
}
