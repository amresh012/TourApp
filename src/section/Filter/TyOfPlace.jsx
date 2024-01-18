// import React from 'react'

import { Stack,InputLabel,RadioGroup,FormControlLabel,Radio, Typography } from "@mui/material"

function TyOfPlace() {
  return (
    <Stack spacing={1}>
        <InputLabel>
        Type of Place
        </InputLabel>
        <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="Any Type" control={<Radio />} label={
          <Typography variant="subtitle2" sx={{fontSize:13 , fontWeight:500}}>
            Any Type
          </Typography>
        } />
        <FormControlLabel value="Room" control={<Radio />} label={
          <Typography variant="subtitle2" sx={{fontSize:13 , fontWeight:500}}>
            Room
          </Typography>
        } />
        <FormControlLabel value="Villas" control={<Radio />} label={
          <Typography variant="subtitle2" sx={{fontSize:13 , fontWeight:500}}>
            Villas
          </Typography>
        } />
      </RadioGroup>

    </Stack>
  )
}

export default TyOfPlace