// import React from 'react'
import { Box, Tabs ,Tab } from "@mui/material"
import {Park, CastleTurret, SwimmingPool, TreePalm } from "@phosphor-icons/react"
import { Bed, Umbrella } from "phosphor-react"
import { PropTypes } from 'prop-types'
import Properties from './Properties'

Cardview.propTypes={
    value:PropTypes.number,
    handleChangeTab:PropTypes.func,
    view:PropTypes.string
}
function CustomTabPanel(props){
    const {children , value , index , ...other} = props;

    return (
        <div role="tabpanel" hidden={value !== index} {...other}>
            {
                value === index && (
                    <Box sx={{py:3}}>
                        {children}
                    </Box>
                )
            }

        </div>
    )
}
CustomTabPanel.propTypes={
    children: PropTypes.node,
    value:PropTypes.number.isRequired,
    index:PropTypes.number.isRequired,
}
function Cardview(props) {
  return (
    <Box sx={{width:"100%"}}>
        <Box sx={{borderBottom:1 , borderColor:"dimgray"}}>
            <Tabs
             value={props.value}
             onChange={props.handleChangeTab}
              variant="scrollable" 
              scrollButtons="auto" 
              allowScrollButtonsMobile>
            <Tab  label="National Parks"  icon={<Park size={20}/>}/> 
            <Tab  label="Castle"  icon={<CastleTurret size={20}/>}/> 
            <Tab  label="Beach"  icon={<Umbrella size={20}/>}/> 
            <Tab  label="Tropical"  icon={<TreePalm size={20}/>}/> 
            <Tab  label="Rooms"  icon={<Bed size={20}/>}/> 
            <Tab  label="Amazing Pools"  icon={<SwimmingPool size={20}/>}/> 
            </Tabs>
        </Box>
          <CustomTabPanel value={props.value} index={0}>
             <Properties view={props.view}/>
            </CustomTabPanel> 

             <CustomTabPanel value={props.value} index={1}>
             <Properties/>
            </CustomTabPanel> 

            <CustomTabPanel value={props.value} index={2}>
             <Properties/>
            </CustomTabPanel>  

            <CustomTabPanel value={props.value} index={3}>
             <Properties/>
            </CustomTabPanel> 

            <CustomTabPanel value={props.value} index={4}>
             <Properties/>
            </CustomTabPanel> 

            <CustomTabPanel value={props.value} index={5}>
             <Properties/>
            </CustomTabPanel> 

    </Box>
  )
}

export default Cardview