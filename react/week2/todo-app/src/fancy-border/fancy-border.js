import React from 'react';
import './fancy-border.css';

export default function FancyBorder(props) {
  return (
    <div className="fancy-border"> 
      {props.children}
    </div>    
  )
}