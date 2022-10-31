import React from 'react';
 import Header from './Header';
 import Sidebar from './Sidebar'; 
import Emaillist from './Emaillist';
import Compose from './Compose';
import { useSelector } from 'react-redux';
import {selectSendMessageIsOpen} from './features/mailSlice';

 

function App() {
  const isMessageOpen=useSelector(selectSendMessageIsOpen);
   
  return (
    <div className="App">
        <Header/>
        <div className='app_body'>
        <Sidebar/>
        <Emaillist/>
        {
           isMessageOpen && <Compose/>
        }
       
        </div>
        
       
        
    </div>
  );
}

export default App;
