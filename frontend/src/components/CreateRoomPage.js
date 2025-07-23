import React from 'react'

import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import FormHelperText from '@mui/material/FormHelperText'
import FormControl from '@mui/material/FormControl'
import { Form, Link } from 'react-router-dom'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'



function CreateRoomPage() {
  const default_votes = 2
  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs={12} align="center">
          <Typography variant="h4" component="h4">
            Create a Room
          </Typography>
        </Grid>

        <Grid item xs={12} align="center">
          <FormControl component='fieldset'>
             <FormHelperText>
              <div align="center">Guests Controle PlayBack state</div>
             </FormHelperText>
            <RadioGroup row defaultValue="true">
              <FormControlLabel
                value="true"
                control={<Radio color="primary" />}
                label="True"
                labelPlacement="bottom"
              />
              <FormControlLabel
                value="false"
                control={<Radio color="secondary" />}
                label="False"
                labelPlacement="bottom"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        
      </Grid>
    </div>
  )
}

export default CreateRoomPage
