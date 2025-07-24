import React from 'react'
import Box from '@mui/material/Box'


const Positions = () => {
  return (
    <Box sx={{
        height: "100%",
        display:"flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: 'center',

    }}>
        <div className="text-3xl">⚓</div>
    <p className="text-gray-500 text-sm mt-2">You don't have any positions yet</p>
    </Box>
  )
}

export default Positions