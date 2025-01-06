# Introduction (done)

- Writing ui and logic in component. Once the UI and logic of the component changed, all the instance will be automatically updated
  - e.g. the icon and text of the sidebar list element
- Virtual DOM: Think of it like changing just one page of a book instead of rewriting the entire book.
  - Compares the old and new versions of itself to figure out exactly what changed.
  - Updates only that part of the real UI (DOM) instead of reloading everything.

# Dev Environment (done)

- npx create-react-app@latest install-tutorial

# React Fundamentals (ongoing)

- package.json: Flexible → It’s okay if someone uses slightly different versions.
- package-lock.json: Consistent → Everyone gets the exact same setup.
- extensions for vscode: auto-remame tag(Jun Han), prettier:code formatting, emmet(default), ES7+ React/Redux/React-Native snippets(dsznajder)
- ES7+ React/Redux/React-Native snippets: rafce (shortcut to create arrow function with exports)
- settings.json
  ```
    "emmet.includeLanguages": {
      "javascript": "javascriptreact"
    },
  ```
- chrome extensions: react developer tools
- index.html <- main.jsx(index.js) (root component) <- Component.jsx
- React Component must be capital letter
- Always return single component otherwise use <React.Fragment></React.Fragement> or <></>
- ()=> xxx is equivalent to ()=>{return xxx}
- jsx output are html.
- if jsx return contains multiple line then paranthesis is needed
- compare jsx vs html
  ```
  return (
  <div tabIndex={1}>
    <button onClick={myFunction}>click me</button>
    <label htmlFor='name'>Name</label>
    <input readOnly={true} id='name' />
  </div>
  )
  // in html
  <div tabindex="1">
    <button onclick="myFunction()">click me</button>
    <label for='name'>Name</label>
    <input readonly id='name' />
  </div>
  ```
- class to className
- inline vs external css
  - inline has higher priority
- <Book title='random title' number={22}/> curly brace for numbers and expressions
- paramter(defined in function) vs arguments (calling the function)
- children prop: the children prop in React can be considered an input to the parent component and passed to the child component just like any other prop. It allows you to pass nested elements or components from the parent to the child.
- react curly braces reads list not objects
- key is not a passed prop
  ```
  // it is actually a list
  {books.map((book) => {
    return (
      <Book {...book} key={book.id}>
        <button>click me</button>
      </Book>
    );
  })}
  ```
- most common event: onClick, onSubmit, onChange
- ```
  <form onSubmit={handleFormSubmission}>
    <button type="submit">Click me</button>
    <button type="button" onclick={handleButtonClick}>Click me</button>
  </form>

  <form>
    <button type="submit" onclick={handleFormSubmission}>Click me</button>
    <button type="button" onclick={handleButtonClick}>Click me</button>
  </form>
  ```

- components are independent, even in event it triggers independently
- prop drilling includes function reference
- nice example (beware of paranthesis)

  ```
  const Book = (props) => {
  const { img, title, author, getBook, id } = props;
  // console.log(props);
  const getSingleBook = () => {
    getBook(id);
  };
  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>

      <button onClick={() => getBook(id)}>display title</button>
      <h4>{author}</h4>
    </article>
  );
  };
  ```

- 47

# Backroads Application

# VITE (done)

- npm create vite@latest my-react-app-vite -- --template react
- npm install
- additionals
  ```
  - need to use .jsx extension
  - index.html in the src not public
  - assets in the src
  - instead of index.js, need to use main.jsx
  ```

# Additional JS

```
const obj = {
  a: 1,
  b: 2,
  c: 3
};

// Destructuring only specific keys (a and b)
const { a, b } = obj;

console.log(a); // 1
console.log(b); // 2
```
