import React from 'react';
import ReorderIcon from '@mui/icons-material/Reorder';
import {IconButton,Avatar} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import "./css/Header.css";

const Header=()=>{
    return(
     <div className='Header'>
        <div className='Header_left'>
         <IconButton>
          <ReorderIcon/>
         </IconButton>
         <img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png" alt="logo"/>
        </div>
        <div className='Header_middle'>
         <div className='Search'>
          <IconButton>
           <SearchIcon/>
         </IconButton>
         <input type="text" placeholder='search mail'/>
         
         <IconButton>
           <ExpandMoreIcon/>
         </IconButton>
         
          </div>
        </div>
        <div className='Middle_right'>
        <IconButton>
           <HelpOutlineIcon/>
         </IconButton>
         <IconButton>
           <SettingsIcon />
         </IconButton>
         <IconButton>
           <AppsIcon />
         </IconButton>
         <Avatar src="https://rukminim1.flixcart.com/image/416/416/l27wtjk0/poster/x/6/m/small-shiv-ji-multicolour-photo-paper-print-poster-shiv-ji-original-imagdhcqexksttth.jpeg?q=70.png"> </Avatar>
        </div>
        
        
       </div>
    );
}
export default Header;