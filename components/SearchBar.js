import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState , useContext} from 'react';
import { dataContext } from '../pages';

export default function SearchBar() {
    const {searchTerm, setSearchTerm} = useContext(dataContext);

    const SeaerchHandler = (e) =>{
        var lowerCase = e.target.value.toLowerCase();
    setSearchTerm(lowerCase);
    }

  return (
    <Box
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
      style ={{margin :20}}
    >
      <TextField fullWidth label="Search" id="fullWidth"  onChange={SeaerchHandler} />
    </Box>
  );
}
