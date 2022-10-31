import React from 'react';
import "./css/option.css";
function Sidebaroptions({Icon,title,number,isactive}){
 return(
    <div className={`option ${isactive && 
    'option--active'} `}>
      <Icon/>
      <h4>{title}</h4>
       <p>{number}</p>
     </div>
 );
}
export default Sidebaroptions;