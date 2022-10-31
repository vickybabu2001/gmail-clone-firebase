import React from 'react';
import {Button} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Sidebaroptions from './Sidebaroptions';
import InboxIcon from '@mui/icons-material/Inbox';
import "./css/Sidebar.css";
import StarRateIcon from '@mui/icons-material/StarRate';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import SendIcon from '@mui/icons-material/Send';
import DraftsIcon from '@mui/icons-material/Drafts';
import LabelIcon from '@mui/icons-material/Label';
import DeleteIcon from '@mui/icons-material/Delete';
import FindInPageIcon from '@mui/icons-material/FindInPage'; 
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import VideocamIcon from '@mui/icons-material/Videocam';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import { useDispatch } from 'react-redux';
import { openSendMessage } from './features/mailSlice';
function Sidebar(){
  const dispatch=useDispatch();
    return(
        <div className='sidebar'>
          <Button  className="compose_btn" onClick = {() => dispatch(openSendMessage())}  startIcon={<AddIcon/>}>Compose</Button>
          <Sidebaroptions Icon={InboxIcon} title='Inbox' number='224' isactive={true}/>
          <Sidebaroptions Icon={StarRateIcon} title='Starred'/>
          <Sidebaroptions Icon={WatchLaterIcon} title='Snoozed' />
          <Sidebaroptions Icon={LabelImportantIcon} title='Important' />
          <Sidebaroptions Icon={SendIcon} title='Sent' />
          <Sidebaroptions Icon={DraftsIcon} title='Draft' />
          <Sidebaroptions Icon={LabelIcon} title='Category' />
          <Sidebaroptions Icon={DeleteIcon} title='[Map]/Trash' />
          <Sidebaroptions Icon={FindInPageIcon} title='Documents'/>
          <Sidebaroptions Icon={ExpandMoreIcon} title='More'/>
          <hr/>
          <h3 className='option_heading'>Meet</h3>
          <Sidebaroptions Icon={VideocamIcon} title='New meeting'/>
          <Sidebaroptions Icon={KeyboardIcon} title='Join a meeting'/>

      </div>

    );
}
export default Sidebar;