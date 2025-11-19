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

object HelloWorld {
  val component = functionalComponent("HelloWorld") { _ =>
    div(null, "Hello Worldddd")
  }
  def apply(): ReactElement = React.createElement(component, null)
}

trait CounterProps extends js.Object {
  val initialCount: Int
}

object Counter {
  val component = functionalComponent("Counter") { props =>
    val p = props.asInstanceOf[CounterProps]
    val state = React.useState(p.initialCount)
    val count = state._1
    val setCount = state._2

    div(
      null,
      button(
        js.Dynamic.literal(onClick = () => setCount(count + 1)),
        "+"
      ),
      button(
        js.Dynamic.literal(onClick = () => setCount(count - 1)),
        "-"
      ),
      button(
        js.Dynamic.literal(onClick = () => setCount(p.initialCount)),
        "reset"
      ),
      span(null, s"Count: $count")
    )
  }

  def apply(iCount: Int): ReactElement =
    React.createElement(
      component,
      js.Dynamic.literal(initialCount = iCount)
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
        HelloWorld(),
        Counter(iCount = 10),
        Counter(iCount = 5)
      )
    )
  )
}
