import './App.css';
import React, {useState} from 'react'
import Header from './mycomponents/Header'
import Calender from './mycomponents/Calender';
import Event from './mycomponents/Event'

function App() {
  const [ClickedDate, setClickedDate] = useState(new Date()); 
  /** callback fuction on click date calender */ 
  const onclickDate = (value)=>{
    setClickedDate(value)
  }
  return (
    <div className="App">
      <Header/>
      <div className="main-container">
        <div className="main-container-left">
          <Calender setdate= {onclickDate}/>
          <div>Current Event Date: {ClickedDate.toLocaleDateString()}</div>        
        </div>
        <div className="main-container-right">
          <Event date = {ClickedDate.getDate().toString()}/>
        </div>     
      </div>    
    </div>
  );
}

export default App;
