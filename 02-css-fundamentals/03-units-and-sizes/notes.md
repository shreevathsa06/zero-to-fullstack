# CSS Units - Study Notes

## Pixels (px)
Absolute unit - fixed size regardless of other elements.

```css
/* Pixels - absolute unit */
.container {
    width: 300px;
    height: 200px;
    font-size: 16px;
}

/* Use for: borders, small fixed elements */
.border {
    border: 1px solid #ccc;
}
```

## Percentage (%)
Relative to parent element's size.

```css
/* Percentage - relative to parent */
.parent {
    width: 800px;
}

.child {
    width: 50%;        /* 400px (50% of 800px) */
    height: 100%;      /* Full height of parent */
}

/* Use for: responsive layouts, flexible sizing */
.responsive-grid {
    width: 100%;
    max-width: 1200px;
}
```

## REM Units
Relative to root element's font size (html element).

```css
/* REM - relative to root font size */
html {
    font-size: 16px;   /* Root font size */
}

.heading {
    font-size: 2rem;   /* 32px (2 × 16px) */
    margin: 1rem;      /* 16px */
}

.text {
    font-size: 1.5rem; /* 24px (1.5 × 16px) */
}

/* Use for: consistent scaling, typography */
```

## REM vs EM
- **REM**: Relative to root font size (predictable)
- **EM**: Relative to parent font size (can compound)

```css
/* REM - always relative to root */
.rem-example {
    font-size: 1.2rem;  /* Always 1.2 × root font size */
}

/* EM - relative to parent */
.parent {
    font-size: 18px;
}

.child {
    font-size: 1.5em;   /* 27px (1.5 × 18px) */
}

.grandchild {
    font-size: 1.2em;   /* 32.4px (1.2 × 27px) - compounds! */
}
```

## When to Use EM Units
Perfect for spacing that should scale with text size.

```css
/* Use EM for spacing relative to text */
.button {
    font-size: 1rem;
    padding: 0.5em 1em;  /* Padding scales with font size */
    margin: 0.25em;      /* Margin scales with font size */
}

.card {
    font-size: 1.2rem;
    padding: 1em;        /* Scales with card's font size */
}

/* Use EM for: padding, margins, spacing that should scale with text */
```

## CH Units
Width of the "0" character in the current font.

```css
/* CH - character width */
.monospace-container {
    font-family: 'Courier New', monospace;
    width: 80ch;         /* Width of 80 characters */
}

.input-field {
    width: 20ch;         /* Fits about 20 characters */
}

/* Use for: form inputs, text containers, monospace layouts */
```

## Viewport Units (vw and vh)
Relative to viewport (browser window) size.

```css
/* Viewport units */
.full-screen {
    width: 100vw;        /* 100% of viewport width */
    height: 100vh;       /* 100% of viewport height */
}

.hero-section {
    height: 50vh;        /* Half of viewport height */
}

.responsive-text {
    font-size: 4vw;      /* 4% of viewport width */
}

/* Other viewport units */
.element {
    width: 50vmin;       /* 50% of smaller viewport dimension */
    height: 50vmax;      /* 50% of larger viewport dimension */
}

/* Use for: full-screen sections, responsive typography */
```

## Unit Comparison Summary
```css
/* Quick reference */
.unit-examples {
    /* Absolute */
    border: 1px solid #ccc;        /* Pixels */
    
    /* Relative to parent */
    width: 50%;                    /* Percentage */
    
    /* Relative to root font */
    font-size: 1.5rem;            /* REM */
    
    /* Relative to element font */
    padding: 1em;                  /* EM */
    
    /* Relative to character width */
    max-width: 60ch;               /* CH */
    
    /* Relative to viewport */
    height: 100vh;                 /* Viewport height */
    width: 100vw;                  /* Viewport width */
}
```

## Best Practices
- **Use px** for borders, small fixed elements
- **Use %** for flexible layouts and containers
- **Use rem** for font sizes and consistent spacing
- **Use em** for padding/margins that should scale with text
- **Use ch** for text-based width constraints
- **Use vw/vh** for full-screen elements and responsive design

## Common Patterns
```css
/* Responsive container */
.container {
    width: 100%;
    max-width: 1200px;
    padding: 0 1rem;
}

/* Scalable component */
.card {
    font-size: 1rem;
    padding: 1.5em;
    border: 1px solid #ddd;
}

/* Full-screen hero */
.hero {
    height: 100vh;
    width: 100vw;
}

/* Readable text width */
.article {
    max-width: 65ch;
    line-height: 1.6;
}
```