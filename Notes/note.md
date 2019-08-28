# background color
```
body {
  background: rgb();
}

/* use an image as background, tiling by default*/
background: url(link);

/* disable tiling, original size*/
background-repeat: no-repeat;

/* strech the image to cover the whole screen*/
background-size: cover;
```
# border
A border must have three porperties in order to display (color, width, and style)
```
border-color: purple;
border-width: 5px;
border-style: solid;

/* or use a shortcut, can be in any order*/
border: 5px dashed purple;
```
# selector
1. element selector

2. id
id is used to single out an element
An id name should only be used once per page

3. class
Use classes when you want your styling to apply to a group of elements. 
a class name can occur many times in a page

# text styles
1. 
2. text decoration


# checkbox 
checked attribute


# fonts
font-family: 

font-size: px em

font-weight: bold normal certain fonts allows numeric width, ranging from 100 - 800 incremented by 100

line-height: 2 (times of default spacing)

text-align: right center

text -decoration: underline line-through


# multiple class


# center a heading
for block elements that already takes the whole line, we can center the content by using text-align

differenc between margin for inline element and block element

image inline block

max-width 
width 80%

text-transform: uppercase
letter-spacing: 

rem, root element

hr horizontal rule

much faster

https://www.youtube.com/watch?v=NHHh0sj1uKY

lego pieces

what is bootstrap

a hosted version 

nested grid
lg the width of the view/browser, not its parent element

# h1, h3


background url
background center
background cover 

html {
    height: 100%
}


justifty content start end center between around
align start end center baseline strecth 


container-fluid
img-fluid

media query 

@media (max-width: 1200px) {
  body {

  }
}
if screen width is less than 1200px, do xxx

order-2

css transition: background

if don't want select option to be the value that is sent, add attribute value 

width: 100px 50% (percentage of the parent body)

padding: 10px

padding-left:

margin: top right bottom left;

margin: 0 auto 0 auto; center

margin: top&bottom left&right

px is needed unless 0

prompt saves input as string instead of number

typeof method

typeof guess 

Number(string)

string.indexOf("")
-1

for loops 
for(var i=0; i<6; i++) {
    console.log(i);
}

function funcName(par1, par2) {
    //do something;
}

run a function
funcName();

argument

//if funcName is runned without the parentheisis, 
if will show the whole function

if there are multiple parameters and parameters are not all given, the value for the remaining parameters will be undefined

if no return statement in a function, it will return undefined

string.toUpperCase()
string.slice(1) //every character from index 1
string.charAt(0)

typeof is an operator, it is not a function thus does not require (), it returns a string indicating the type

function declaration vs function expression


*= shortcut

child scope has access to parent scope

console.log(a1, a2) //output: a1 a2

anonymous function 

function() {
  reset();
}

css: opacity: 0.5;