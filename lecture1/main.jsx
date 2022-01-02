import React from 'react';
import ReactDOM from 'react-dom';
const name ="Adrain";

const paragraphs = (
  <div id="i-am-the-outermost-element">
    <p>I am a {4+2}.</p>
    <p>I, too, am a paragraph.</p>
  </div>
)
ReactDOM.render(paragraphs,document.getElementById('root'))
