import React from 'react';
import { TypeAnimation } from 'react-type-animation';

export default function Ghumi() {
  return (
    <div>
         <TypeAnimation
      sequence={[
        'Web-Designer', // Types 'One'
        2000, // Waits 1s
        'Web-Developer', // Deletes 'One' and types 'Two'
        2000, // Waits 2s
        'Graphics Designer', // Types 'Three' without deleting 'Two'
        2000,
        'Music Composer',
        2000,
        'Music Producer',
        2000,
        () => {
        
        },
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '2em', display: 'inline-block' }}
    />
    </div>
  )
}
