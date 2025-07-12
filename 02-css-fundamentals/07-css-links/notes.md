# CSS Pseudo Classes Notes

## Link Color
Sets the default color of links.
```css
a { color: blue; }
```

## Visited Pseudo Class
Styles links that have been visited.
```css
a:visited { color: purple; }
```

## Hover Pseudo Class
Styles element when mouse hovers over it.
```css
a:hover { color: red; }
```

## Active Pseudo Class
Styles element when it's being clicked.
```css
a:active { color: orange; }
```

## Focus Pseudo Class
Styles element when it receives focus (keyboard navigation).
```css
a:focus { outline: 2px solid blue; }
```

## Pseudo Class Specificity
Pseudo classes have the same specificity as regular classes (0,0,1,0).
```css
a:hover { color: red; } /* Specificity: 0,0,1,1 */
```

## Cascade Order of Pseudo Classes
Follow LVHFA order: Link, Visited, Hover, Focus, Active.
```css
a:link { color: blue; }
a:visited { color: purple; }
a:hover { color: red; }
a:focus { outline: 2px solid blue; }
a:active { color: orange; }
```

## Using Transparency for Hover
Apply transparency effect on hover.
```css
img:hover { opacity: 0.7; }
```

## Changing Background Color on Hover
Changes background color when hovering.
```css
button:hover { background-color: gold; }
```