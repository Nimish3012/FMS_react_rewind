# Episode 03 - Laying the Foundation

## Topics

- `JSX`
- `React.createElement` vs `JSX`
- `Benefits of JSX`
- `Behind the Scenes of JSX`
- `Babel` & `parcel` role in JSX
- `Components`
- `Functional Components`
- `Composing Components`

## Coding :

- Create a `Nested header Element` using `React.createElement`(h1,h2,h3 inside a div with class "title")

  - Create the `same element using JSX`
  - Create a `functional component of the same with JSX`
  - `Pass attribute` into the tag in `JSX`
  - `Composition of Component` (Add a component inside another)
  - `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in JSX.

- Create a `Header Component` from scratch using `Functional Component` with JSX
  - Add a `Logo on Left`
  - Add a `search bar in middle`
  - Add `User icon on right`
  - Add `CSS to make it look nice`



# Episode 04 - Talk is Cheap, show me the code

## Theory:

- Is `JSX` mandatory for React?
- Is `ES6` mandatory for React?
- `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in `JSX`.
- How can I write `comments` in JSX?
- What is `<React.Fragment></React.Fragment>` and `<></>`?
- What is `Reconciliation` in React?
- What is `React Fiber`?
- Why do we need `keys` in React?
- Can we use `index as keys` in React?
- What is `props in React`? Ways to.
- What is `Config Driven UI`?

## Coding:

- Build a `Food Ordering App`
  - Think of a `cool name` for your app
  - Build an `AppLayout`
  - Build a `Header Component` with `Logo` & `Nav Items` & `Cart`
  - Build a `Body Component`
    - Build `RestaurantList Component`
    - Build `RestaurantCard Component`
      - Use `static data initially`
      - Make your `card dynamic`(pass in props)
        - `Props` - passing arguments to a function - `Use Destructuring` & `Spread operator`
      - `Render` your cards with `dynamic data of restaurants`
      - Use `Array.map` to render all the restaurants in the body component

### PS. Basically do everything that I did in the class, in the `same sequence`. `Don't skip small things`.