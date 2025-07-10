# CSS Colors - Study Notes

## Background Color
```css
/* Set background color */
body {
    background-color: lightblue;
}

.container {
    background-color: #f0f0f0;
}
```

## Text Color
```css
/* Set text color */
h1 {
    color: red;
}

p {
    color: #333333;
}
```

## RGB Color Values
RGB stands for Red, Green, Blue. Each value ranges from 0-255.

```css
/* RGB syntax */
.element {
    color: rgb(255, 0, 0);        /* Pure red */
    background-color: rgb(0, 255, 0);  /* Pure green */
    border-color: rgb(0, 0, 255);      /* Pure blue */
}

/* Common RGB values */
rgb(0, 0, 0)       /* Black */
rgb(255, 255, 255) /* White */
rgb(128, 128, 128) /* Gray */
```

## Alpha Channel - RGBA
RGBA adds transparency. Alpha value ranges from 0 (transparent) to 1 (opaque).

```css
/* RGBA syntax */
.transparent-bg {
    background-color: rgba(255, 0, 0, 0.5);  /* 50% transparent red */
}

.semi-transparent {
    color: rgba(0, 0, 0, 0.7);  /* 70% opaque black text */
}

/* Alpha examples */
rgba(255, 0, 0, 0)    /* Fully transparent red */
rgba(255, 0, 0, 0.25) /* 25% opaque red */
rgba(255, 0, 0, 1)    /* Fully opaque red */
```

## Hex Color Values
Hexadecimal color codes use # followed by 6 digits (or 3 for shorthand).

```css
/* Hex syntax */
.hex-colors {
    color: #FF0000;           /* Red */
    background-color: #00FF00; /* Green */
    border-color: #0000FF;     /* Blue */
}

/* Shorthand hex */
.shorthand {
    color: #F00;    /* Same as #FF0000 */
    background: #0F0; /* Same as #00FF00 */
}

/* Common hex values */
#000000 or #000  /* Black */
#FFFFFF or #FFF  /* White */
#FF0000 or #F00  /* Red */
#00FF00 or #0F0  /* Green */
#0000FF or #00F  /* Blue */
```

## VS Code Color Picker
- Click on any color value in VS Code to open color picker
- Visual interface to select colors
- Automatically converts between different formats
- Shows color preview and accessibility information

## HSL Color Values
HSL stands for Hue, Saturation, Lightness.

```css
/* HSL syntax */
.hsl-colors {
    color: hsl(0, 100%, 50%);     /* Red */
    background: hsl(120, 100%, 50%); /* Green */
    border: hsl(240, 100%, 50%);     /* Blue */
}

/* HSL breakdown */
hsl(hue, saturation%, lightness%)
/* 
- Hue: 0-360 degrees (color wheel)
- Saturation: 0-100% (color intensity)
- Lightness: 0-100% (darkness to lightness)
*/

/* HSLA with alpha */
.hsla-example {
    background: hsla(0, 100%, 50%, 0.5); /* 50% transparent red */
}
```

## Color Value Comparison
```css
/* Same red color in different formats */
.red-element {
    /* Choose any one format */
    color: red;                    /* Named color */
    color: #FF0000;               /* Hex */
    color: rgb(255, 0, 0);        /* RGB */
    color: hsl(0, 100%, 50%);     /* HSL */
}
```

## Best Practices
- **Use hex** for solid colors in most cases
- **Use RGBA/HSLA** when transparency is needed
- **Use HSL** for color variations (same hue, different lightness)
- **Use named colors** for quick prototyping
- Always consider color contrast for accessibility

## Tools for Color Selection
- **VS Code Color Picker** - Built-in tool
- **Color Contrast Checkers** - Ensure accessibility (WCAG compliance)
- **Palette Generators** - Create harmonious color schemes
- **Browser DevTools** - Inspect and modify colors live

## Quick Reference
```css
/* Most common color formats */
.color-examples {
    /* Named colors */
    color: red;
    color: blue;
    color: green;
    
    /* Hex colors */
    background: #FF5733;
    border: #333;
    
    /* RGB with transparency */
    box-shadow: rgba(0, 0, 0, 0.3);
    
    /* HSL for color variations */
    background: hsl(200, 50%, 60%);
}
```

## Useful links: 

 color paletts: https://coolors.co/
