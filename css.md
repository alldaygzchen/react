- universal selector \*: all elements
  ```
    {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }
  ```
- max-width: highest boundary
- min-width: lowest boundary
- box-sizing: border-box; (content + padding + border)
- 1rem: 16px
- text-align: center;(letting text and button being the middle)
- design method: small to big
- position:static (default)
  - relative and absolute: An element with position: absolute; is positioned relative to the nearest positioned ancestor
  - fixed: stays in the same place even if the page is scrolled:
  - relative: positioned relative to its normal position.
  - sticky:relative and fixed
  - top: Sets the top margin edge for a positioned box
  - bottom: Sets the bottom margin edge for a positioned box
  - left: Sets the left margin edge for a positioned box
  - right:Sets the right margin edge for a positioned box
- grid
  - container
    - display: grid, display: inline-grid;
    - row-gap: 50px, column-gap: 50px;
    - gap: 50px 100px;(row-gap,column-gap)
    - grid-template-columns: auto auto auto auto; grid-template-rows: 80px 200px;
    - justify-content: start, end, space-evenly; space-around; (x -axis)
    - align-content: start, end (y-axis)
    - place-content: center center; (align-content,justify-content)
    - grid-template-areas: 'myArea myArea . . .';
  - item
    - grid-column-start: 1; grid-column-end: 3; grid-row-start: 1; grid-row-end: 3;
    - grid-column: 1 / 5;(grid-column-start: 1; grid-column-end: 5;)
    - grid-area: myArea;
    - justify-self: right;center;
    - align-self: start;center;
