# Introduction (done)

- Writing ui and logic in component. Once the UI and logic of the component changed, all the instance will be automatically updated
  - e.g. the icon and text of the sidebar list element
- Virtual DOM: Think of it like changing just one page of a book instead of rewriting the entire book.
  - Compares the old and new versions of itself to figure out exactly what changed.
  - Updates only that part of the real UI (DOM) instead of reloading everything.

# Dev Environment (done)

- npx create-react-app@latest install-tutorial

# React Fundamentals (done)

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
- index.html <- main.jsx(index.js) <- App.jsx(root component)<-Component.jsx
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

# Backroads Application (done)

- App.jsx is the root component
- The component.css will replace index.css
- Font awesome (current example)
  - <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  - <i class="fa fa-car" style="font-size:60px;color:red;"></i>
  - style={{ color: '#617d98', fontSize: '0.75rem', marginTop: '0.5rem' }}
- Great thinking: Define data, iterate it and render by component using map. For future updating, we just need to update the component code (since html is hard-coding, no template exists)
- the data above can be whatever you thought. e.g. link, title, subtitle, text, icon ...

  ```
  export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
  ];

  ```

- Directly or wrap it

  ```
  <PageLinks parentClass="nav-links" itemClass="nav-link" />

  vs

  <ul className="nav-icons">
    {socialLinks.map((link) => {
      return <SocialLink {...link} key={link.id} itemClass="nav-icon" />;
    })}
  </ul>
  ```

- the loaded data is not loaded in the root component, it actually loads in the component

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

# React Hooks and Advance topics (done)

## Side Effects and State Updates

### Side Effects

- Occur when you interact with the "outside world" (e.g., API calls, logging to the console, timers, or DOM manipulation).

### State Updates

- Not considered side effects because they are part of React's internal rendering logic and do not interact with the outside world.

## Types of Events

### Lifecycle Events

- Dependent on the component's lifecycle, such as when the component mounts, updates, or unmounts.
- Suitable for handling side effects triggered by these events using `useEffect`.
- **Example**: Fetching data when a component mounts or recalculating something when state/props change.

### Manual Events

- Triggered by user actions, such as clicking a button, submitting a form, or typing in an input field.
- Independent of the lifecycle and tied to user interactions.
- **Example**: Fetching data when a button is clicked.

#### Example: Button Clicks

- If clicking a button only updates state (e.g., `setCount`), it's not a side effect.
- If it also performs external actions (e.g., logging or fetching data), those are side effects.
- `console.log()` is a side effect that logs information to the console but does not change anything in the component’s state or props.

## When to Use `useEffect`

- Click handlers are synchronous, meaning they execute immediately when triggered. This can cause issues if you rely on state changes that haven’t yet occurred.
- `useEffect` runs asynchronously after the render cycle, allowing you to safely perform side effects based on state or props changes after the DOM has been updated.

  ```
  // doesn't immediately show the updated state
  const handleClick = () => {
  setCount(count + 1);  // Updates the state
  console.log(count);    // Logs to the console (side effect)
  };

  useEffect(() => {
  console.log(count);  // Logs count when it changes
  }, [count]);

  ```

- Summary

  - Events can be categorized into manual (user-triggered) and lifecycle (component lifecycle-triggered).
  - Both types of events can trigger side effects.
  - Use useEffect for lifecycle side effects based on state or props changes after the DOM has been updated.

- When does react rerender

  - state change
  - props change
  - parent update

- General rules of hooks

  - Start with use
  - Components must be uppercase
  - Inside function body
  - Do not call hooks conditionally
  - set function does not update state immediately

- - rerender due to state change
  - preserve all the state before
  - auto batching for optimization
  - be aware of closure (use callbacks)
  - if three seconds click five times, there are actually five setTimeout

  ```
    const handleClick = () => {
    // setTimeout(() => {
    //   console.log("clicked the button");
    //   setValue(value + 1);
    // }, 3000);
    setTimeout(() => {
      console.log("clicked the button");
      setValue((currentState) => {
        return currentState + 1;
      });
    }, 3000);
    // setValue((currentState) => {
    //   return currentState + 1;
    // });
  };
  ```

- UseEffect

  - by default, runs on each render (intial render and re-render)
  - [] => runs only on initial render
  - contains two arguments: callback and dependency array
  - callback cannot return promise (cannot return async)

    - React doesn’t care about what happens inside the callback; it only cares about whether the callback returns:nothing or cleanup function
    - React doesn't know how to handle Promise

    ```
    // wrong example
    useEffect(async () => {
      const response = await fetch("https://api.example.com/people");
      const data = await response.json();
      setPeople(data);
    }, []);

    // correct examples
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch("https://api.example.com/people");
          const data = await response.json();
          setPeople(data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      fetchData(); // Call the async function inside the effect
    }, []);

    or

    () => {
      fetch("https://api.example.com/people")
        .then((response) => response.json())
        .then((data) => setPeople(data))
        .catch((error) => console.error("Error fetching data:", error));
    };
    ```

  - useEffect can be used multiple times but not suggested

- Conditional Rendering and Data Fetching
- Do not add react hooks in conditional statment also has the below example meaning

  ```
  const Example = () => {
  const [condition, setCondition] = useState(true);
  // if (condition) {
  //   // won't work
  //   const [state, setState] = useState(false);
  // }

  if (condition) {
    return <h2>Hello There</h2>;
  }
  // it is not recommend since it runs conditionally
  //   useEffect(() => {
  //     console.log("hello there");
  //   }, []);
  return <h2>example</h2>;
  };
  ```

- why use short circuit:
  - since conditional statement cannot be used in jsx
- examples

```
  // tag content to display
  <h2>{text || "default value"}</h2>

  // content to display
  {text && (
    <div>
      <h2> whatever return</h2>
      <h2>{name}</h2>
    </div>
  )}

  // content to display
  // examples (if user exist show the component otherwise not displaying)
  {user && <SomeComponent name={user.name} />}

```

- useEffect

  - the useEffect initial render will always work when mounting the component e.g. toogle child component
  - cleanup function runs after the render but before the useEffect
  - useEffect is used in data fetch a lot , some alternatives such as react query can help us

  ```
  {toggle && <RandomComponent />}

  const RandomComponent = () => {
  useEffect(() => {
    console.log("hmm, this is interesting");
  }, []);
  ```

- project structure

  - sol1 (default export): setting up every component as folder and create a index.jsx file (not scoped, the last component will override)
  - sol2 (name export): create a index.jsx file
  - sol3: create a another component to export

- form example

  - multiple inputs: use object for multiple inputs in useState
  - radio: single answer, checkbox:multiple selection
  - e.target.checked

  ```
    <select
    name="framework"
    id="framework"
    value={framework}
    onChange={handleFramework}
  >
    {frameworks.map((framework) => {
      return <option key={framework}>{framework}</option>;
    })}
  </select>
  ```

  - e.target vs e.currentTarget
  - uncontrolled input using form api (without using useState)

- useRef

  - updating useRef does not trigger re-render
  - preserve the value between renders which is same as useState
  - use case: skip initial render functionalities

- custom hook

  - it does not need to return set function e.g. useFetch.js

- context api
  - step1: createContext: outputs provider and consumer(not used since we have useContext hook)
  - example
  ```
  export const NavbarContext = createContext();
  <NavbarContext.Provider value={{ user, logout }}></NavbarContext.Provider>
  ```
  - step2: create hooks
  ```
  export const useAppContext = (context) => useContext(context);
  ```
  - step3: use the created hooks in children component
  ```
  const { user, logout } = useAppContext(NavbarContext);
  ```
- global context api
  - step1: create a AppContext Wrapper component with createContext, value and props.children
  - step2: main.jsx
    ```
    <React.StrictMode>
      <AppContext>
        <App/>
      </AppContext>
    </React.StrictMode>
    ```
  - step3: create hooks
  ```
  export const useAppContext = (context) => useContext(context);
  ```
  - step3: use the created hooks in children component
  ```
  const {name} = useAppContext(GlobalContext);
  ```
- useReducer (lite version of redux)

  ```
  UseReducer fits best when:
  You have related state that can be grouped together for simplicity.
  Or you have dependent state that shares the same logic for updates.
  ```

  - we use reducer function to manipulate the state
  - compare useReducer vs useState

  ```
  const [state, dispatch] = useReducer(reducer, defaultState);
  const [state, setState] = useState(defaultState);
  ```

  - reducer function returns state and action parameter is the object of disptach content

- performance
  - children component will always be re-rendering after initial render (06-hooks\src\tutorial\11-performance\01-lower-state\Person.jsx)
  - lower the state to prevent trigger re-rendering
  - memo(Component), the component will not re-render if the prop don't change
  - usecallback
    - A hook that allows you to memoize a function
    - be aware of closure
    ```
      const removePerson = useCallback(
    (id) => {
      console.log("removePerson");
      console.log(people);
      const newPeople = people.filter((person) => person.id !== id);
      setPeople(newPeople);
    },
    [people]
    );
    ```
  - useMemo
    - Memoizes a value
    - Avoid recalculating values
  - useCallback
    - Memoizes a function
    - The function itself
  - useTransition
    - This part of the update can wait, so prioritize other things first and the transition will work in the background.
  - react suspense
    - Lazy loading in React means loading components only when they are needed instead of all at once. This helps your app load faster and improves performance.
    - With lazy loading, React loads only the components the user is viewing, saving time and resources.
    ```
    import { useState, useTransition, lazy, Suspense } from "react";
    <Suspense fallback={<h4>Loading...</h4>}>
        <button onClick={() => setShow(!show)} className="btn">
          toggle
        </button>
        {show && <SlowComponent />}
    </Suspense>
    ```

# 07-fundamental-projects

### https://react-projects.netlify.app/

### css module

- Scoped Styles: CSS Modules automatically scope styles to the specific component, avoiding class name collisions.
- Class Composition: You can compose multiple classes:
  ```
    <div className={`${styles.container} ${styles.additionalClass}`}></div>
  ```
- Dynamic Classes: For conditional styling, use JavaScript:

  ```
    <button className={isActive ? styles.activeButton : styles.inactiveButton}>
      Click Me
    </button>
  ```

### react icons

- https://react-icons.github.io/react-icons/

### recommend component

- accordion (accordion vs accordionalt component state)
  - the child component is individual vs the global state is shared each other
- menu
  - categories are static value
  - only items are changed, we can use function set to trigger, no need to use useState for specfic category
- tabs
  - similar to accordionAlt (filter)
  - good css (make good use of grid and flex)
- slider
  - slider vs tabs (filter first)
- color generator
  - onclick can use async function
- groceryBud

```
    - By default, a child's local state does not reset when the parent updates. However:
    If the child gets props from the parent, it will react to changes.
    If you want to reset the child's state, you can use the key prop.

    - it only runs once when the component mounts and does not run again when the parent re-renders.
```

# Additional React

```
import React, { useState } from 'react';

const ManualEventWithFetch = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('https://api.example.com/data');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      setData(result);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClick = () => {
    fetchData();
  };

  return (
    <div>
      <h1>Fetch Data on Button Click</h1>
      <button onClick={handleClick}>Fetch Data</button>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && (
        <div>
          <h2>Data:</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default ManualEventWithFetch;
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

```
function examplePromise() {
  console.log('Promise')
  return new Promise((resolve, reject) => {
    // Simulate an asynchronous operation
    setTimeout(() => {
      const success = true; // Change to `false` to simulate an error
      if (success) {
        resolve("Operation successful!");
      } else {
        reject("Operation failed!");
      }
    }, 6000);
  });
}

/////////////////////////////////////////////////////////////////////////

examplePromise()
  .then((result) => console.log(result)) // Logs: Operation successful!
  .catch((error) => console.error(error)); // Logs: Operation failed! (if rejected)

console.log("This logs before the promise resolves!");

/////////////////////////////////////////////////////////////////////////

async function exampleAsync() {
  try {
    console.log("Starting async function...");
    const result = await examplePromise(); // Waits for the promise to resolve
    console.log(result); // Logs: Operation successful!
  } catch (error) {
    console.error(error); // Logs: Operation failed! (if rejected)
  }
}

// Call the async function
exampleAsync();
console.log("This logs before the promise resolves!");

/////////////////////////////////////////////////////////////////////////
// Optional Chaining
 object?.property?.subProperty

 is equivalent to below statement

 if (object && object.property && object.property.subProperty) {
  // Do something
}

/////////////////////////////////////////////////////////////////////////

// falsy values in js
0, "", null, undefined, NaN
// Short Circuit Evaluation
&&, ||
```
