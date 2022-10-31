import { LocalOffer } from "@mui/icons-material";
import React from "react";
import "./css/emaillist.css";
import InboxIcon from '@mui/icons-material/Inbox';
import PeopleIcon from '@mui/icons-material/People';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
function Emailtype(){
 return(
    <div className="emailtype">
        <div className="emailtype_options--active">
            <InboxIcon></InboxIcon>
             <p>Primary</p>
        </div>  
        <div className="emailtype_options">
            <PeopleIcon></PeopleIcon>
            <p>Social</p>
        </div>
        <div className="emailtype_options">
            <LocalOfferIcon></LocalOfferIcon>
            <p>Promotions</p>
        </div>
    </div>
 );
}
export default Emailtype;