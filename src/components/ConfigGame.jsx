import { Button, Grid, Slider, Typography } from '@mui/material'
import React from 'react'

export const ConfigGame = ({
    active,
    numOfCards,
    lastTime,
    correctTimerNumStri,
    handleStartPlay,
    handleSliderChange,
    play
}) => {

  return (
    <Grid container direction='row' alignItems='center' >

        <Grid container direction='column' alignItems='center' sx={{ padding: 4 }}>
          {
            !active ?
              (
                <>
                  <Grid item sx={{ marginTop: 5 }} >
                    <Slider
                      defaultValue={12}
                      step={2}
                      marks
                      min={12}
                      max={40}
                      disabled={active}
                      sx={{ width: 300 }}
                      onChange={handleSliderChange}
                    />
                  </Grid>
                  <Grid item sx={{ marginTop: 5 }}>
                    <Typography
                      variant="h3"
                      component="div">
                      How many cards you want ? : {numOfCards}
                    </Typography>
                  </Grid>
                  <Grid item sx={{ marginTop: 5 }} >
                    <Typography
                      variant="h3"
                      component="div"
                      display={lastTime === '' ? 'none' : true}
                    >
                      Last Mark : {lastTime}
                    </Typography>
                  </Grid>

                </>
              ) : (
                <Grid item sx={{ marginTop: 0}}>
                  <Typography
                    variant="h1"
                    component="div">
                    {correctTimerNumStri}
                  </Typography>
                </Grid>
              )
          }

          <Grid item sx={{ marginTop: 5 }}>
            <Button
              variant="outlined"
              onClick={handleStartPlay}
              sx={{ 
                height: 100, 
                width: 100,
                marginBottom:5 
             }}
            >
              <Typography
                variant="h5"
              >
                {play}
              </Typography>
            </Button>
          </Grid>

        </Grid>

      </Grid>
  )
}
