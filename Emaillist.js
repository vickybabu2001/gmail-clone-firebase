import React from "react";
import "./css/emaillist.css";
import EmailListSetting from "./EmailListSetting";
import Emailtype from "./Emailtype";
import Emailbody from "./Emailbody";
function Emaillist(){
    return(
    <div className="emaillist">
       <EmailListSetting/>
       <Emailtype/>
       <Emailbody/>
    </div>
    );
}
export default Emaillist;