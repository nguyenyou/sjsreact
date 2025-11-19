# Scala.js React App

## The Box Pattern for Props

In Scala.js, when interoping with React, components expect `props` to be a JavaScript object (`js.Object`). However, idiomatic Scala uses `case class`es for immutable data structures, which do not inherit from `js.Object`.

To bridge this gap, we use the **Box Pattern**.

### How it works

1.  **The Box**: We define a wrapper trait `Box[A]` that extends `js.Object`. We use `@js.native` and `@JSName("a")` to define a lightweight facade.
    ```scala
    @js.native
    trait Box[+A] extends js.Object {
      @JSName("a") val unbox: A = js.native
    }
    ```

2.  **Wrapping**: When we pass props to a component, we wrap our Scala `case class` inside this `Box`.
    ```scala
    object Box {
      @inline def apply[A](value: A): Box[A] =
        js.Dynamic.literal(a = value.asInstanceOf[js.Any]).asInstanceOf[Box[A]]
    }
    ```
    Under the hood, `Box(v)` creates a literal JS object: `{ a: v }`. We use the property name `a` for minification purposes, but expose it as `unbox` in Scala for readability.

3.  **Unwrapping**: Inside the component, we receive the `Box` and extract the value using `unbox`.
    To make this ergonomic, we use a helper `scalaFunctionComponent`:
    ```scala
    def scalaFunctionComponent[P](name: String)(render: P => ReactElement)
    ```
    This helper creates a React component that accepts `Box[P]`, extracts `P` via `.unbox`, and passes it to your `render` function.

### Comparison with scalajs-react

We have adopted the `Box` implementation from `scalajs-react` (specifically `japgolly.scalajs.react.internal.Box`).

**Why?**
1.  **Correctness**: Using `@js.native` with `val` is the standard way to define a facade for a JS object structure in Scala.js.
2.  **Performance**: The `@inline` annotation on `apply` helps reduce overhead.
3.  **Minification**: Mapping the property to `a` (via `@JSName("a")`) saves bytes in the generated JavaScript compared to using a longer name like `value`.
4.  **Readability**: The Scala field is named `unbox`, which clearly indicates its purpose (extracting the value from the box).


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

### Components with Children

For components that accept children (like a wrapper or a button), use `scalaFunctionComponentWithChildren`.

```scala
// 1. Define Props
case class Props(onClick: js.Function0[Unit])

// 2. Define component
val component = scalaFunctionComponentWithChildren[Props]("Button") { (props, children) =>
  button(
    js.Dynamic.literal(onClick = props.onClick),
    children // Pass children through
  )
}

// 3. Usage
Button(onClick = () => println("Clicked!"))("Click Me")
```

This allows us to keep our component logic pure Scala while satisfying React's requirement for JS object props.
