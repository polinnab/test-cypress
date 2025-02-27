"use client";
import {  Box, Button, Stack, Typography } from "@mui/material"
import { useState } from "react";
import { Dialog } from "./Dialog";

export const DialogPage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClickOpen = () =>  setIsOpen(true);
    
    const handleClose = () => setIsOpen(false);

    return(
    <Stack my={4} mx={3} justifyContent='center'>
    <Typography variant="h1" textAlign='center'>Dialog page</Typography>
    <Box margin='64px auto'>
     <Button variant="outlined" onClick={handleClickOpen}>
        Open dialog
      </Button>
      </Box>
      <Dialog isOpen={isOpen} close={handleClose}/>
    </Stack>)
}
