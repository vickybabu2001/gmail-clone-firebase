import React from "react";
import "./css/emaillist.css";
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
function Emailbody(){
 return(
    <div className="emailbody">
        <div className="emailbody_left">
          <CheckBoxOutlineBlankIcon/>
          <StarBorderIcon/>
          <LabelImportantIcon/>
          <h4>Mahadev Ji</h4>
        </div>
        <div className="emailbody_middle">
            <div className="emailbody_middle_msg">
                <p><b>Subject</b>This is msg body</p>
            </div>
        </div>
        <div className="emailbody_right">
            <p>2:40pm</p>
        </div>
    </div>
 );
}
export default Emailbody;