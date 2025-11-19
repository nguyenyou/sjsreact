//> using scala 3.7.3
//> using platform scala-js

//> using dep "org.scala-js::scalajs-dom::2.8.1"

//> using jsModuleKind es

import org.scalajs.dom

import scala.scalajs.js
import scala.scalajs.js.annotation.JSImport

@js.native
@JSImport("react", JSImport.Namespace)
object React extends js.Object {
  val StrictMode: js.Any = js.native
  def createElement(
      tag: js.Any,
      props: js.Object | Null,
      children: js.Any*
  ): ReactElement = js.native
  def useState[T](initialState: T): js.Tuple2[T, js.Function1[T, Unit]] =
    js.native
}

object tags {
  def div(props: js.Object | Null, children: js.Any*): ReactElement =
    React.createElement("div", props, children*)
  def button(props: js.Object | Null, children: js.Any*): ReactElement =
    React.createElement("button", props, children*)
  def span(props: js.Object | Null, children: js.Any*): ReactElement =
    React.createElement("span", props, children*)
}

import tags.*

@js.native
trait ReactElement extends js.Object

@js.native
@JSImport("react-dom/client", JSImport.Namespace)
object ReactDOM extends js.Object {
  def createRoot(container: dom.Element): ReactRoot = js.native
}

@js.native
trait ReactRoot extends js.Object {
  def render(element: ReactElement): Unit = js.native
}

def functionalComponent(
    displayName: String
)(render: js.Function1[js.Object, ReactElement]): js.Any = {
  val component = render
  component.asInstanceOf[js.Dynamic].displayName = displayName
  component
}

val HelloWorld = functionalComponent("HelloWorld") { _ =>
  div(null, "Hello World")
}

val Counter = functionalComponent("Counter") { _ =>
  val state = React.useState(0)
  val count = state._1
  val setCount = state._2

  div(
    null,
    button(
      new js.Object {
        val onClick: js.Function0[Unit] = () => setCount(count + 1)
      },
      "+"
    ),
    button(
      new js.Object {
        val onClick: js.Function0[Unit] = () => setCount(count - 1)
      },
      "-"
    ),
    span(null, s"Count: $count")
  )
}

@main
def run(): Unit = {
  val container = dom.document.getElementById("app")
  val root = ReactDOM.createRoot(container)
  root.render(
    React.createElement(
      React.StrictMode,
      null,
      div(
        null,
        React.createElement(HelloWorld, null),
        React.createElement(Counter, null)
      )
    )
  )
}
