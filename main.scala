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
  val Fragment: js.Any = js.native
  def createElement(
      tag: js.Any,
      props: js.Object | Null,
      children: js.Any*
  ): ReactElement = js.native
  def useState[T](initialState: T): js.Tuple2[T, js.Function1[T, Unit]] =
    js.native
  def memo(component: js.Any): js.Any = js.native
}

object tags {
  def div(props: js.Object | Null, children: js.Any*): ReactElement =
    React.createElement("div", props, children*)
  def button(props: js.Object | Null, children: js.Any*): ReactElement =
    React.createElement("button", props, children*)
  def span(props: js.Object | Null, children: js.Any*): ReactElement =
    React.createElement("span", props, children*)
  def label(props: js.Object | Null, children: js.Any*): ReactElement =
    React.createElement("label", props, children*)
  def input(props: js.Object | Null, children: js.Any*): ReactElement =
    React.createElement("input", props, children*)
  def h3(props: js.Object | Null, children: js.Any*): ReactElement =
    React.createElement("h3", props, children*)
  def fragment(children: js.Any*): ReactElement =
    React.createElement(React.Fragment, null, children*)
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

object Counter {
  trait Props extends js.Object {
    val initialCount: Int
  }

  object Props {
    def apply(initialCount: Int): Props =
      js.Dynamic.literal(initialCount = initialCount).asInstanceOf[Props]
  }

  val component = functionalComponent("Counter") { props =>
    val p = props.asInstanceOf[Props]
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
      Props(initialCount = iCount)
    )
}

object GreetingSelector {
  trait Props extends js.Object {
    val value: String
    val onChange: js.Function1[String, Unit]
  }

  object Props {
    def apply(value: String, onChange: String => Unit): Props =
      js.Dynamic.literal(value = value, onChange = onChange).asInstanceOf[Props]
  }

  val component = functionalComponent("GreetingSelector") { props =>
    val p = props.asInstanceOf[Props]
    fragment(
      label(
        null,
        input(
          js.Dynamic.literal(
            `type` = "radio",
            checked = p.value == "Hello",
            onChange = (_: js.Dynamic) => p.onChange("Hello")
          )
        ),
        "Regular greeting"
      ),
      label(
        null,
        input(
          js.Dynamic.literal(
            `type` = "radio",
            checked = p.value == "Hello and welcome",
            onChange = (_: js.Dynamic) => p.onChange("Hello and welcome")
          )
        ),
        "Enthusiastic greeting"
      )
    )
  }

  def apply(value: String, onChange: String => Unit): ReactElement =
    React.createElement(component, Props(value, onChange))
}

object Greeting {
  trait Props extends js.Object {
    val name: String
  }

  object Props {
    def apply(name: String): Props =
      js.Dynamic.literal(name = name).asInstanceOf[Props]
  }

  val component = React.memo(functionalComponent("Greeting") { props =>
    val p = props.asInstanceOf[Props]
    println(s"Greeting was rendered at ${new js.Date().toLocaleTimeString()}")

    val greetingState = React.useState("Hello")
    val greeting = greetingState._1
    val setGreeting = greetingState._2

    fragment(
      h3(null, s"$greeting${if (p.name.nonEmpty) ", " else ""}${p.name}!"),
      GreetingSelector(greeting, setGreeting)
    )
  })

  def apply(name: String): ReactElement =
    React.createElement(component, Props(name = name))
}

object MyApp {
  val component = functionalComponent("MyApp") { _ =>
    val nameState = React.useState("")
    val name = nameState._1
    val setName = nameState._2

    val addressState = React.useState("")
    val address = addressState._1
    val setAddress = addressState._2

    fragment(
      label(
        null,
        "Name: ",
        input(
          js.Dynamic.literal(
            value = name,
            onChange =
              (e: js.Dynamic) => setName(e.target.value.asInstanceOf[String])
          )
        )
      ),
      label(
        null,
        "Address: ",
        input(
          js.Dynamic.literal(
            value = address,
            onChange =
              (e: js.Dynamic) => setAddress(e.target.value.asInstanceOf[String])
          )
        )
      ),
      Greeting(name = name)
    )
  }

  def apply(): ReactElement = React.createElement(component, null)
}

@main
def run(): Unit = {
  val container = dom.document.getElementById("app")
  val root = ReactDOM.createRoot(container)
  root.render(
    React.createElement(
      React.StrictMode,
      null,
      MyApp()
    )
  )
}
