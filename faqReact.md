- Github reference

  - https://github.com/john-smilga/react-course-v3

- Npm vs Npx

  - Npm: npm install -g create-react-app & create-react-app my-app
  - Npx: npx create-react-app my-app

- Statement and Expression

  - statement: Do something (x=1)
  - Expression: Produces something (x+1)

- {} in jsx are used to write js expression with jsx

- regular function and arrow function in events

  ```
  const button = document.querySelector('button')
  button.addEventListener('click',event=>console.log(event)) [works]
  button.addEventListener('click',function(event){console.log(event)}) [works]

  ```

- When do react re-render?

  - State changes
  - Prop changes

- Difference between primitive value and reference value

  - Compares value directly in primitive value
  - Check by reference in reference value

- Functional updates with set function preventing race condition

  - React uses batch updates to update all set functions at once, instead of repeating multiple times.

- Spread Operator

  - Parent Components

  ```
    <SocialLink {...link} />

    is equivalent to

    <SocialLink id={link.id}  href={link.href} name={link.name}/>
  ```

  - Child Components

  ```
  const SocialLink = () => {
     ...
     return(...)
  }
  ```

- Side effects are operations that affect something outside the current scope of the function being executed (e.g fetch)

- Multiple return contains at least three states e.g. isLoading, isError, data

- onChange, OnSubmit, OnClick

- useState passing objects vs useState passes value

  - Use objects for more complex state that involves multiple related values.

- Acheiving Sibling Communication with global state at React
  - Parent component
    - When handlers are called in the child components, they trigger the state update functions in the parent component. The state is updated in the parent component even though the handlers are executed in the child components.
  - React context API
- useRef: try it not yet
- useContext:
- useReducer:
- useCallback
- useMemo:
- custom hook: useFetch, useToogle
- lifecycle:
