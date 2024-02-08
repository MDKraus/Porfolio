import React, {useState} from 'react';
import '../App.css';



export default function Home() {

  return (
    <div className='highlight-box-container'>
      <div className="highlight-box">
        <h2>About</h2>
        <p className='highlight-box-content'>
          My Name is Maxfield Kraus, I am striving to be a Frontend Web Developer
        </p>
      </div>
      <div className="highlight-box">
        <h2>Contact</h2>
        <p className='highlight-box-content'>
        <a href="https://github.com/MDKraus">Github</a><br/>
        <a href="https://www.linkedin.com/in/maxfield-kraus/">Linkedin</a><br/>
        <a href="mailto: maxfield.kraus@gmail.com">maxfield.kraus@gmail.com</a>
        </p>
      </div>
      <div className="highlight-box">
        <h2>Employment</h2>
        <p className='highlight-box-content'>
          
        </p>
      </div>
      <div className="highlight-box">
        <h2>Projects</h2>
        <p className='highlight-box-content'>
          I made this Portfolio Website as well
        </p>
      </div>
    </div>
  );
}
