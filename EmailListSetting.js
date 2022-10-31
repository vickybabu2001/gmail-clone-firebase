import React from "react";
import {IconButton} from '@mui/material';
import "./css/emaillist.css";
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RefreshIcon from '@mui/icons-material/Refresh';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
function EmailListSetting(){
    return(
    <div className="emaillist_setting">
     
        <div className="emaillist_setting_left">
         <IconButton>
         <CheckBoxOutlineBlankIcon/>
         </IconButton>
         <IconButton>
         <ArrowDropDownIcon/>
         </IconButton>
         <IconButton>
         <RefreshIcon/>
         </IconButton> 
         <IconButton>
         <MoreVertIcon/>
         </IconButton> 
         <br/>
         <hr></hr>          
        </div>
     <div className="emaillist_setting_right">
        <p>1-50 of 10,22</p>
        <IconButton>
        <ChevronLeftIcon/>
         </IconButton> 
         <IconButton>
         <ChevronRightIcon/>
         </IconButton> 
        
     </div>
    </div>
    );
}
export default EmailListSetting;