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

### Performance & Re-rendering

You raised a valid concern: **Does the Box pattern break React's shallow comparison?**

**The short answer:** Yes, for `React.memo`.

**The detailed explanation:**

1.  **Standard Components**: By default, React function components re-render whenever their parent re-renders, regardless of props. So, for standard components, the `Box` pattern **does not** negatively affect performance (beyond the tiny allocation cost).

2.  **React.memo**: If you use `React.memo` to optimize performance, React does a **shallow comparison** of props.
    *   Without Box: `props` is a JS object. React compares `prevProps.x === nextProps.x`.
    *   With Box: `props` is the `Box` object itself.
    *   Since we create a **new Box instance** every time we call `apply` (e.g., `Box(Props(...))`), the reference is always different (`prevBox !== nextBox`).
    *   Therefore, `React.memo` will **always re-render**, defeating its purpose.

**The Solution:**

When using `React.memo` with the Box pattern, you must provide a custom comparison function that unboxes the values and compares them using Scala equality.

```scala
val component = scalaFunctionComponent[Props]("MyComponent") { p => ... }

// Create a memoized version with custom comparison
val memoizedComponent = React.memo(
  component,
  (prev: Box[Props], next: Box[Props]) => prev.unbox == next.unbox
)
```

Since `Props` is a `case class`, `==` performs a structural comparison (checking if all fields are equal), which is exactly what we want for correct and efficient re-renders.

## IMPORTANT DOCS

### js.FunctionN <–> scala.FunctionN

Functions from JavaScript and Scala are not exactly the same thing, therefore they have different types. However, implicit conversions are available by default to go from one to the other, which means the following snippets compile out of the box:

```scala
import scala.scalajs.js

val scalaFun: Int => Int = (x: Int) => x * x
val jsFun: js.Function1[Int, Int] = scalaFun
val scalaFunAgain: Int => Int = jsFun
```

Most of the time, you don’t even need to worry about those, **except** if you write facade types for JavaScript APIs, in which case **you have to use** the JS function types.

### js.UndefOr[T] <–> Option[T]

```scala
import scala.scalajs.js

val jsUndefOr: js.UndefOr[Int] = 1

// Convert to scala.Option
val x: Option[Int] = jsUndefOr.toOption

import js.JSConverters._

val opt = Some(1)

// Convert to js.Undefined
val y: js.UndefOr[Int] = opt.orUndefined
```

## Pre-defined JavaScript types

Primitive JavaScript types (number, boolean, string, null and undefined) are represented by their natural equivalent in Scala, as shown above.

For other pre-defined JavaScript types, such as arrays and functions, the package scala.scalajs.js (ScalaDoc) provides dedicated definitions.

The class hierarchy for these standard types is as follows:

```scala
js.Any
 +- js.Object
 |   +- js.Date
 |   +- js.RegExp
 |   +- js.Array[A]
 |   +- js.Function
 |   |   +- js.Function0[+R]
 |   |   +- js.Function1[-T1, +R]
 |   |   +- ...
 |   |   +- js.Function22[-T1, ..., -T22, +R]
 |   |   +- js.ThisFunction
 |   |       +- js.ThisFunction0[-T0, +R]
 |   |       +- js.ThisFunction1[-T0, -T1, +R]
 |   |       +- ...
 |   |       +- js.ThisFunction21[-T0, ..., -T21, +R]
 |   +- js.Iterable[+A]
 |   +- js.Iterator[+A]
 |   +- js.Promise[+A]
 |   +- js.Thenable[+A]
 +- js.Dictionary[A]
 +- js.Symbol
```

Note that most of these types are similar to standard Scala types. For example, js.Array[A] is similar to scala.Array[A], and js.FunctionN is similar to scala.FunctionN. However, they are not completely equivalent, and must not be confused.

With the exception of js.Array[A] and js.Dictionary[A], these types have all the fields and methods available in the JavaScript API. The collection types feature the standard Scala collection API instead, so that they can be used idiomatically in Scala code.

### Function types

#### js.Function and its subtypes

js.FunctionN[T1, ..., TN, R] is, as expected, the type of a JavaScript function taking N parameters of types T1 to TN, and returning a value of type R.

There are implicit conversions from scala.FunctionN to js.FunctionN and back, with the obvious meaning. These conversions are the only way to create a js.FunctionN in Scala.js. For example:

```scala
val f: js.Function1[Double, Double] = { (x: Double) => x*x }
```

defines a JavaScript function object which squares its argument. This corresponds to the following JavaScript code:

```js
var f = function(x) {
  return x*x;
};
```

You can call a js.FunctionN in Scala.js with the usual syntax:

```scala
val y = f(5)
```

#### JS functions with varargs

In order to capture varargs from a JS function, create your own trait that extends js.Function or js.ThisFunction.

```scala
trait JsVarargsFn extends js.Function {
  def apply(args: Any*): Unit
}

val f: JsVarargsFn = { args =>
  println(s"This method was called with ${args.size} args.")
}
```

### Dynamically typed interface: js.Dynamic

Because JavaScript is dynamically typed, it is not often practical, sometimes impossible, to give sensible type definitions for JavaScript APIs.

Scala.js lets you call JavaScript in a dynamically typed fashion if you want to. The basic entry point is js.Dynamic.global, which is a dynamically typed view of the JavaScript global scope. You can select any global variable of JavaScript as a a member of js.Dynamic.global, e.g., js.Dynamic.global.Math, which will be typed as a js.Dynamic.

You can read and write any field of a js.Dynamic, as well as call any method with any number of arguments, and you always receive back a js.Dynamic.

For example, this snippet taken from the Hello World example uses the dynamically typed interface to manipulate the DOM model.

```scala
val document = js.Dynamic.global.document
val playground = document.getElementById("playground")

val newP = document.createElement("p")
newP.innerHTML = "Hello world! <i>-- DOM</i>"
playground.appendChild(newP)
```

In this example, document, playground and newP are all inferred to be of type js.Dynamic.

### Literal object construction

Scala.js provides two syntaxes for creating JavaScript objects in a literal way. The following JavaScript object

```js
{foo: 42, bar: "foobar"}
```

can be written in Scala.js either as

```scala
js.Dynamic.literal(foo = 42, bar = "foobar")
```

or as

```scala
js.Dynamic.literal("foo" -> 42, "bar" -> "foobar")
```

### Literal object construction using an Scala object interface

Sometimes for a nicer interface, literal objects can be implemented using a trait interface. The above JavaScript code can be implemented using following code:

```scala
trait MyObject extends js.Object {
  val foo: Int = js.native
  val bar: String = js.native
}
```

A Scala object should be added for typesafe creation, it would help the readability of the code by removing lots of js.Dynamic.literal all over the code.

```scala
object MyObject {
  def apply(foo: Int, bar: String): MyObject =
    js.Dynamic.literal(foo = foo, bar = bar).asInstanceOf[MyObject]
}
```

Alternatively, you can use anonymous classes extending js.Object or a Scala.js-defined JS trait.


```scala
val myObject = new js.Object {
  val foo = 42
  val bar = "foobar"
}
```

