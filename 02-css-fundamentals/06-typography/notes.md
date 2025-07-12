# CSS Typography Notes

## What is Typography?
Typography is the art and technique of arranging text to make it readable and visually appealing. In CSS, typography involves styling text elements like fonts, sizes, colors, and spacing.

## Text Styling Options
```css
/* Font Properties */
font-family: Arial, sans-serif;
font-size: 16px;
font-weight: bold;
font-style: italic;

/* Text Styling */
color: #333;
text-align: center;
text-decoration: underline;
text-transform: uppercase;
line-height: 1.5;
letter-spacing: 2px;
```

## How to Import Fonts

### Google Fonts
```css
/* Method 1: CSS Import */
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');

/* Method 2: HTML Link (in head tag) */
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet">

/* Usage */
font-family: 'Roboto', sans-serif;
```

### Local Fonts
```css
@font-face {
  font-family: 'MyCustomFont';
  src: url('fonts/mycustomfont.woff2') format('woff2'),
       url('fonts/mycustomfont.woff') format('woff');
}

font-family: 'MyCustomFont', Arial, sans-serif;
```

## Font Stack (Multiple Fonts)
When more than three fonts are declared in a font-family, it creates a **font stack** or **fallback system**:

```css
font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
```

This indicates:
- **Fallback mechanism**: If the first font fails to load, the browser tries the next one
- **Cross-platform compatibility**: Different operating systems have different default fonts
- **Performance safety**: Ensures text is always displayed even if custom fonts fail
- **Progressive enhancement**: Starts with preferred font, falls back to more common ones