# Scala.js React App

## The Box Pattern for Props

In Scala.js, when interoping with React, components expect `props` to be a JavaScript object (`js.Object`). However, idiomatic Scala uses `case class`es for immutable data structures, which do not inherit from `js.Object`.

To bridge this gap, we use the **Box Pattern**.

### How it works

1.  **The Box**: We define a wrapper trait `Box[T]` that extends `js.Object`.
    ```scala
    trait Box[+T] extends js.Object {
      val value: T
    }
    ```

2.  **Wrapping**: When we pass props to a component, we wrap our Scala `case class` inside this `Box`.
    ```scala
    // Inside the component's apply method
    React.createElement(component, Box(Props(name = "World")))
    ```
    Under the hood, `Box(v)` creates a literal JS object: `{ value: v }`.

3.  **Unwrapping**: Inside the component, we receive the `Box` and extract the `value`.
    To make this ergonomic, we use a helper `scalaFunctionComponent`:
    ```scala
    def scalaFunctionComponent[P](name: String)(render: P => ReactElement)
    ```
    This helper creates a React component that accepts `Box[P]`, extracts `P`, and passes it to your `render` function.

### Usage Example

```scala
// 1. Define Props as a case class
case class Props(name: String)

// 2. Define component using scalaFunctionComponent
val component = scalaFunctionComponent[Props]("Greeting") { props =>
  // props is of type Props (not Box[Props])
  div(null, s"Hello, ${props.name}")
}

// 3. Usage
Greeting(name = "Alice")
```

This allows us to keep our component logic pure Scala while satisfying React's requirement for JS object props.
