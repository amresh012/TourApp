// import React from 'react'

import { Box, Card ,Typography, Button,Stack, Divider } from "@mui/material";
import TyOfPlace from "./TyOfPlace";
import PriceRange from "./PriceRange";
import RoomBed from "./Room&Bed";

const Filter = () => {
  return (
    <Box
      sx={{
        py: 1,
        px: 1,
      }}
    >
      <Card sx={{width:1 , pb:3}}>
        <Box
          sx={{
            mb: 2,
            py: 2,
            px: 3,
            bgcolor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[200]
                : theme.palette.grey[900],
          }}
        >
          <Stack
            direction="row"
            alignitems="center"
            justifyContent="space-between"
          >
            <Typography>Filters</Typography>
            <Button size="small" >Clear All Filters</Button>
          </Stack>
        </Box>
        <Stack spacing={2} sx={{px:3}}>
          <TyOfPlace/>
          <Divider orientation="horizontal" />
          <PriceRange/>
          <Divider orientation="horizontal" />
          <RoomBed/>
          <Divider orientation="horizontal" />

        </Stack>
      </Card>
    </Box>
  );
};

export default Filter;
