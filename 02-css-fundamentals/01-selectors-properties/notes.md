# CSS Selectors

 ## Basic Selectors
1. Universal Selector (*)

Selects all elements on the page
Example: * { margin: 0; }

2. Type Selector (Element)

Selects all elements of a specific HTML tag
Example: p { color: blue; } (selects all paragraphs)

3. Class Selector (.)

Selects elements with a specific class attribute
Example: .highlight { background: yellow; }

4. ID Selector (#)

Selects the element with a specific ID attribute
Example: #header { font-size: 24px; }

 ## The CSS Cascade
The cascade is the algorithm that determines which styles take precedence. It follows this order of importance:

(CSS works like a waterfall i.e from top to bottom 
any selectors which is read last will we applied to the webpage and override the previous selectors.)

 ## Specificity Calculation
Specificity is calculated as a four-part value: (inline, IDs, classes, elements)
Specificity Values:

Inline styles: 1000 points
IDs: 100 points each
Classes, attributes, pseudo-classes: 10 points each
Elements and pseudo-elements: 1 point each

Ids > class > elements

Higher specificity always wins, if the specificity is equal then the last rule wins.

### Useful links:
 
 CSS validator: https://jigsaw.w3.org/css-validator/

 Specificity Claculator: https://specificity.keegan.st/