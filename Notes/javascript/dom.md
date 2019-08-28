

DOM stands for Document Object Model, it is the interface between Javascript and HTML+CSS

## Select an element 

**`document.getElementById()`** 
returns the object represtation of the selected element
```javascript
var hightlight = document.getElementById("highlight");

//returns the object represtation of the selected element
```

**`document.getElementsByClassName()`** 
**`document.getElementsByTagName()`**
```javascript
var boldeds = document.getElementsByClassName("bolded");
var lis = document.getElementsByTagName("li");

//selects all the elements in the HTML, not just body
//returns an array-like HTML collection object
//even if there is only one object

//to access a single element
var liOne = lis[0];

//has length property, but does not have forEach method
lis.length;
```

**`document.querySelector()`**
```javascript
var highlight = document.querySelector("#highlight");

//takes a css style selector
//returns the first matched element
```

**`document.querySelectorAll()`**
```javascript
var liBolded = document.querySelectorAll("li.bolded");

//returns an array-like NodeList object
```

## Manipulation
### Style manipulation
Directly manipulate with JS
```javascript
object.style.color = "blue";
object.style.border = "10px solid red";
object.style.fontSize = "30px";
object.style.background = "yellow";
object.style.marginTop = "20px";
```

Rather than directly manipulating style with JS, it is better to define a CSS class and then toggle it on or off using JS.
- `object.classList.add("className")` 
- `object.classList.remove("className")`
- `object.classList.toggle("className")`

```css
/*define a class in css in advance*/
.some-class {
    color: blue;
    border: 10px solid red;
}
```
```javascript
var target = document.querySelector("#targetID"); 
//add the new class to the selected element

target.classList.add("some-class");
```

### Content manipulation
`object.textContent` returns a string of all the text contained within a given element, it excludes any tag inside it.
```html
<P>
  This is an <strong>awesome</strong> paragraph.
</p>
```
```javascript
var par = document.querySelector("p");

par.textContent //"This is an awesome paragraph."
```
`object.innerHTML` includes all the content inside it, including the structure.

textContent treats the tag inside the given value as pure text, not HTML tag.

### Attribute manipulation
```html
<a href="www.google.com">Link to Google</a>
```
```javascript
var link = document.querySelector("a");

//retrive attribute value
link.getAttribute("href");  //"www.google.com"

//change attribute value
link.setAttribute("href", "www.bing.com"); 
// <a href="www.bing.com">Link to Google</a>
```

## DOM Events
`object.addEventListener(type, functionToCall);`

Event types:
`"click"`
`"change"`
`"mouseover"`
'"mouseout"`

inside a listener, this refers the object to which the listener is added
the element that the listener is listening on 

retrieve input value
 var input = 
 input //string