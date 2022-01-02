const app=document.getElementById('app')
const el=document.createElement('h1')
const newContent = document.createTextNode("Hi there this before react");
el.appendChild(newContent);
const currentDiv = document.getElementById("div1");
document.body.insertBefore(el, currentDiv);