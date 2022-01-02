/* 
- we can have event listeners inside JSX, just like HTML elemet can. 
- note: programming in React means constantly working with event listeners

-we can create an event listeners by giving a JSX element a special attribute.

``` example
<img onClick={myFunc} />
```
- an event listeners attribute's name should be something like onClick or onMouseOver: the word on, plus the type of event yorue listening for.

- the  event listener names are written in camelCase such as onClick or onMouseOver
 */

import React from 'react';
import ReactDOM from 'react-dom';

function makeDoggy(e) {
  // Call this extremely useful function on an <img>.
  // The <img> will become a picture of a doggy.
  e.target.setAttribute('src', 'https://content.codecademy.com/courses/React/react_photo-puppy.jpeg');
  e.target.setAttribute('alt', 'doggy');
}

const kitty = (
	<img 
		src="https://content.codecademy.com/courses/React/react_photo-kitty.jpg" 
		alt="kitty" />
);

ReactDOM.render(null, null);