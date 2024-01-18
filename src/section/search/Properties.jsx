/* eslint-disable react/prop-types */
// import React from 'react'

import { useTheme, alpha } from "@mui/material/styles";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Divider,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { Star, Heart } from "@phosphor-icons/react";
import { Bathtub, Bed, MapPin } from "phosphor-react";

const images = [
  "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/53610/large-home-residential-house-architecture-53610.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/9482132/pexels-photo-9482132.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/7031407/pexels-photo-7031407.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/8082332/pexels-photo-8082332.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/8134821/pexels-photo-8134821.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/208732/pexels-photo-208732.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/7535007/pexels-photo-7535007.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/8069319/pexels-photo-8069319.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600"

];

// const rating = () => {
//   for (let i = 0; i < 5; i++) {
//     let rate = Math.floor(Math.random() * 5 + 1);
//     console.log(rate);
//   }
// };
// rating();

function Properties({ view }) {
  const theme = useTheme();
  return (
    <Box>
      <Grid container spacing={2}>
        {[...Array(12)].map((elem, index) => (
          <Grid xs={12} md={view === "map" ? 12 :6} item key={index}>
            <Card>
              <Box sx={{ position: "relative" }}>
                <CardMedia
                  sx={{ height: 320 }}
                  title="Villa"
                  image={images[index]}
                />
                <Chip
                  sx={{
                    position: "absolute",
                    top: 10,
                    left: 10,
                    color: theme.palette.common.white,
                    bgcolor: alpha(theme.palette.common.black, 0.4),
                  }}
                  icon={
                    <Star
                      weight="fill"
                      style={{ color: theme.palette.warning.dark }}
                    />
                  }
                  label={4.5}
                />
                <IconButton
                  sx={{
                    position: "absolute",
                    top: 10,
                    right: 10,
                  }}
                >
                  <Heart style={{ color: theme.palette.error.main }} />
                </IconButton>
              </Box>
              <CardContent>
                <Stack spacing={1}>
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Typography
                      variant="subtitle2"
                      sx={{
                        fontWeight: 600,
                        fontSize: 16,
                        color: "text.secondary",
                      }}
                    >
                      Place To Stay
                    </Typography>
                    <Stack
                      direction="row"
                      spacing={0.5}
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Typography
                        variant="subtitle2"
                        sx={{
                          fontWeight: 600,
                          fontSize: 16,
                          color: "text.secondary",
                          textDecoration: "line-through",
                        }}
                      >
                        $80
                      </Typography>
                      <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Typography
                          sx={{
                            fontWeight: 500,
                            fontSize: 16,
                            color: "text.primary",
                          }}
                        >
                          $67/
                        </Typography>
                        <Typography
                          style={{
                            fontSize: 12,
                            color: "white",
                          }}
                        >
                          Night
                        </Typography>
                      </Stack>
                      <Divider orientation="vertical" sx={{ height: 20 }} />
                      <Typography>$111 Total</Typography>
                    </Stack>
                  </Stack>
                  <Stack spacing={1}  direction="row" alignItems="center">
                     <MapPin size={15} weight="bold"/>
                     <Typography>Toranto ,Canada</Typography>
                  </Stack>
                  <Divider orientation="horizontal"/>
                  <Stack spacing={2} direction="row" alignItems="center" justifyContent="flex-start">
                    <Stack spacing={1} direction="row" alignItems="center" justifyContent="center">
                        <Bed size={20}  weight="bold" style={{color:theme.palette.grey[600],}}/>
                        <Typography variant="subtitle2" sx={{color:"text.secondary"}}>6 Beds</Typography>
                    </Stack>
                     <Divider orientation="vertical" style={{height:20}}/>
                     <Stack spacing={1} direction="row" alignItems="center" justifyContent="center">
                        <Bathtub size={20} weight="bold" style={{color:theme.palette.grey[600],}}/>
                        <Typography variant="subtitle2" sx={{color:"text.secondary"}}>1 Baths</Typography>
                    </Stack>
                     <Divider orientation="vertical" style={{height:20}}/>
                     <Stack spacing={1} direction="row" alignItems="center" justifyContent="center">
                        <Bed size={20} weight="bold" style={{color:theme.palette.grey[600],}}/>
                        <Typography variant="subtitle2" sx={{color:"text.secondary"}}>3 Bed Rooms</Typography>
                    </Stack>
                  </Stack>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Properties;
