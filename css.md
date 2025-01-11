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
    - grid-template-columns: 1fr 1fr (divides the space into equal parts) vs grid-template-columns: auto auto (The column will be as wide as the content inside it.)
  - item
    - grid-column-start: 1; grid-column-end: 3; grid-row-start: 1; grid-row-end: 3;
    - grid-column: 1 / 5;(grid-column-start: 1; grid-column-end: 5;)
    - grid-area: myArea;
    - justify-self: right;center;
    - align-self: start;center;
- rwd

  - add the new content after 992px
    '''
    .nav-center {
    width: 90vw;
    max-width: 1170px;
    margin: 0 auto;
    }

    @media screen and (min-width: 992px) {
    .nav-center {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    } }
    '''

  - --same-- (min-width) (max-width)--same--
  - --same-- rwd-> <-rwd --same--

- scroll

  ```
  <!-- link -->
  <a href="#services"> services </a>
  <!-- element -->
  <section id="services"></section>

  html {
  scroll-behavior: smooth;
  }
  .section {
  /* navbar height */
  scroll-margin-top: 4rem;
  }
  ```

- design

  - the outer scope does not define margin
  - the inner scope may be define
    ```
    .section-center {
      width: 90vw;
      margin: 0 auto;
      max-width: 1170px;
    }
    ```
  - if rwd, combine with above

    ```
    @media screen and (min-width: 992px) {
      .about-center {
          display: grid;
          grid-template-columns: 1fr 1fr;
          column-gap: 2rem;
      }
    }
    ```

  - Better to use a grid, if the layout is two dimensional
