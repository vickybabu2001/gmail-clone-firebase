// import { InsertEmoticon, MoreVert, PhonelinkLock } from "@mui/icons-material";
import React, { useState } from "react";
import RemoveIcon from '@mui/icons-material/Remove';
import HeightIcon from '@mui/icons-material/Height';
import CloseIcon from '@mui/icons-material/Close';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import LinkIcon from '@mui/icons-material/Link';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import PhotoIcon from '@mui/icons-material/Photo';
import PhonelinkLockIcon from '@mui/icons-material/PhonelinkLock';
import CreateIcon from '@mui/icons-material/Create';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { closeSendMessage } from './features/mailSlice';
import "./css/compose.css";
import firebase from "./firebase";
 
import {db} from "./firebase";
// import { db }  from './firebase-firebaseconfig';
// import firebase from './firebase-firebaseconfig';

function Compose(){
  const[to,setTo]=useState("");
  const[subject,setSubject]=useState("");
  const[message,setMessage]=useState("");
  const dispatch=useDispatch();
  const formSubmit=(e)=>{
     e.preventDefault();
     if(to===""){
      return alert("Reciever email is required");
     }
     else if(subject===""){
      return alert("Subject is required");
     }
      else if(message===""){
        return alert("Message  is required");
     }
     firestore.collection("emails").add({
      to,
      subject,
      message,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
     });
     
     alert("Message Sent Succesfully");
  }
  return (
    <div className="compose">
      <div className="compose_header">
        <div className="compose_header_left">
          <span>New Message</span>

        </div>
        <div className="compose_header_right">
          <RemoveIcon onClick={()=>dispatch(closeSendMessage())}/>
          <HeightIcon />
          <CloseIcon onClick={()=>dispatch(closeSendMessage())}/>
        </div>
      </div>
      <form onSubmit={formSubmit}>
      <div className="compose_body">
        <div className="compose_bodyForm">
          <input type="email" placeholder="Reciepents" value={to} onChange={(e)=>setTo(e.target.value)} className="cre" />

          <input type="text" placeholder="Subject" className="cred" value={subject} onChange={(e)=>setSubject(e.target.value)} />

          <textarea rows="20" onChange={(e)=>setMessage(e.target.value)}>{message}</textarea>
        </div>
      </div>
      <div className="compose_footer">
        <div className="compose_footerleft">
          <button type="sumbit">Send
            <ArrowDropDownIcon/>
          </button>
        </div>
        <div className="compose_footerright">
          <FormatColorTextIcon/>
          <AttachFileIcon/>
          <LinkIcon/>
          <InsertEmoticonIcon/>
          <NoteAddIcon/>
          <PhotoIcon/>
          <PhonelinkLockIcon/>
          <CreateIcon/>
          <MoreVertIcon/>
          <DeleteIcon/>
        </div>
      </div>
      </form>
    </div>
  );
}
export default Compose;