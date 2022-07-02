import { Card, CardContent, CardMedia, Grid } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { getDividers } from '../helpers/generatorCards'

export const Cards = ({
    numOfCards,
    handleChangeActive,
    card
}) => {
  return (
    <Grid item xs={12 / Math.max.apply(null, getDividers(numOfCards))}>
              <Card
                sx={{ width: 100, height: 150, margin:1, padding:0}}
              >
                <CardContent
                  sx={{
                    padding: 0
                  }}
                >
                  <Box
                    sx={{ height: '100vh' }}
                  >
                    {
                      card.active
                        ?
                        <Box
                          // className="animate__animated animate__flipInY animate__faster"
                        >
                          <CardMedia
                            component="img"
                            height="auto"
                            image={`../../dist/heroes/${card.numRand}.jpg`}
                            alt={`${card.numRand}`}
                            sx={{ padding: 0 }}
                          />

                        </Box>
                        :

                        <Box
                          sx={{ height: '100%', width: 'max_content', margin: 0 }}
                          // className="animate__animated animate__rubberBand"
                          onClick={() => handleChangeActive(card.id, card.numRand)}
                        >
                          <CardMedia
                            component="img"
                            height="auto"
                            image="https://i.pinimg.com/474x/e3/d1/04/e3d104d24a4a474c83d1964f78925015.jpg"
                            alt="Paella dish"
                            sx={{ padding: 0 }}
                          />
                        </Box>
                    }
                  </Box>

                </CardContent>

              </Card>
            </Grid>
  )
}
