/* 
- we’re going to add something new: regular JavaScript, written inside of a JSX expression, written inside of a JavaScript file.
carefully write the following code. What do you think will appear in the browser?
```jsx
ReactDOM.render(
  <h1>2 + 3</h1>,
  document.getElementById('app')
); 
```
 */











/* 

- The code in the last exercise didn’t behave as one might expect. Instead of adding 2 and 3, it printed out “2 + 3” as a string of text. Why?

- Add a pair of curly braces to the code from last exercise, so that your JSX expression looks like this:
```jsx
<h1>{2 + 3}</h1>
```
Everything inside of the curly braces will be treated as regular JavaScript.

 */



/* 
Declare a new variable named `math`. Set `math` equal to a JSX `<h1></h1>` element.

Put the following text inside of the `<h1>`:

```jsx
2 + 3 = 2 + 3
```

and render the output
 */





/* 
- in jsx also we can inject variables  like from the outside
- also we can access the attribute that we declared outside the jsx 
When writing JSX, it’s common to use variables to set *attributes*.

Here’s an example of how that might work:

```jsx
// Use a variable to set the `height` and `width` attributes:

const sideLength = "200px";

const panda = (
  <img
    src="images/panda.jpg"
    alt="panda"
    height={sideLength}
    width={sideLength} />
);
```

Notice how in this example, the `<img />`‘s attributes each get their own line. This can make your code more readable if you have a lot of attributes on one element.

*Object properties* are also often used to set attributes:

```jsx
const pics = {
  panda: "http://bit.ly/1Tqltv5",
  owl: "http://bit.ly/1XGtkM3",
  owlCat: "http://bit.ly/1Upbczi"
};

const panda = (
  <img
    src={pics.panda}
    alt="Lazy Panda" />
);

const owl = (
  <img
    src={pics.owl}
    alt="Unimpressed Owl" />
);

const owlCat = (
  <img
    src={pics.owlCat}
    alt="Ghastly Abomination" />
);

```



 */