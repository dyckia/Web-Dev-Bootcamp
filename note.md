#inline css
```
<h1 style="color: blue;">Blue Text</h1>
```

#style tag
```
<head>
  <style type="text/css">
    h1 {
        color: blue;
    }
  </style>

</head>
```

# separate CSS file
```
<head>
  <link rel="stylesheet" type="text/css" href="app.css">
</head>
```


# syntax
selector
{
    porperty: value;
    another: value;
}

another selector
{
    porperty: value;
    another: value;
}

#comment in css
```
/* this is a comment in css */
```

#color in CSS
1. hexadecimal
6 digit hexadecimal value(R-G-B)
```
color: #FFFFFF;
```

2. rgb color
3 channels: Red, Green, and Blue. Each ranges from 0 - 255
```
color: rgb(0, 255, 0);
```

3. rgba
Just like RGB, but with an alpha(transparency) channel. Ranges from 0.0 - 1.0 (1 means no transparency)
```
color: rgba(0, 255, 100, .6)
```

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

html 100%