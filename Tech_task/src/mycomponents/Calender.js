import React, { useState } from 'react';
import Calendar from 'react-calendar';
export default function Calender(props) {
    const [value, onChange] = useState(new Date());   
    //callback on date click
    props.setdate(value);
    return (       
      <Calendar
        onChange={onChange}
        value={value}
      />  
    )
}
