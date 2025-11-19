//> using scala 3.7.3
//> using platform scala-js

//> using dep "org.scala-js::scalajs-dom::2.8.1"

//> using jsModuleKind es

import org.scalajs.dom

import scala.scalajs.js
import scala.scalajs.js.annotation.JSImport
import scala.scalajs.js.annotation.JSExportTopLevel

@js.native
@JSImport("react", JSImport.Namespace)
object ReactRaw extends js.Object {
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

  def createContext[T](defaultValue: T): Context[T] = js.native
  def useContext[T](context: Context[T]): T = js.native

  @js.native
  trait Context[T] extends js.Object {
    val Provider: js.Any = js.native
  }
}

object React {
  export ReactRaw.{useState as _, *}

  def useState[T](initialState: T): (T, T => Unit) = {
    val res = ReactRaw.useState(initialState)
    (res._1, res._2)
  }
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
  def unmount(): Unit = js.native
}

def functionalComponent(
    displayName: String
)(render: js.Function1[js.Object, ReactElement]): js.Any = {
  val component = render
  component.asInstanceOf[js.Dynamic].displayName = displayName

  if (js.typeOf(js.Dynamic.global.$RefreshReg$) != "undefined") {
    js.Dynamic.global.$RefreshReg$(component, displayName)
  }

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
    val (count, setCount) = React.useState(p.initialCount)

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

val ThemeContext = React.createContext[String]("dark")

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

    val theme = React.useContext(ThemeContext)

    h3(
      js.Dynamic.literal(className = theme),
      s"Hello, ${p.name}!"
    )
  })

  def apply(name: String): ReactElement =
    React.createElement(component, Props(name = name))
}

object TextInput {
  val component = functionalComponent("TextInput") { _ =>
    val (text, setText) = React.useState("")

    div(
      null,
      input(
        js.Dynamic.literal(
          value = text,
          onChange = (e: js.Dynamic) => setText(e.target.value.asInstanceOf[String]),
          placeholder = "Type something..."
        )
      ),
      span(js.Dynamic.literal(style = js.Dynamic.literal(marginLeft = "10px")), s"You typed: $text")
    )
  }

  def apply(): ReactElement = React.createElement(component, null)
}

object MyApp {
  val component = functionalComponent("MyApp") { _ =>
    val (theme, setTheme) = React.useState("dark")

    def handleClick(): Unit = {
      setTheme(if (theme == "dark") "light" else "dark")
    }

    React.createElement(
      ThemeContext.Provider,
      js.Dynamic.literal(value = theme),
      fragment(
        button(
          js.Dynamic.literal(onClick = () => handleClick()),
          "Switch eeee"
        ),
        Greeting(name = "Taylor"),
        div(js.Dynamic.literal(style = js.Dynamic.literal(marginTop = "20px")), TextInput())
      )
    )
  }

  def apply(): ReactElement = React.createElement(component, null)
}

@JSExportTopLevel("createRoot")
def createRoot(containerId: String): ReactRoot = {
  val container = dom.document.getElementById(containerId)
  ReactDOM.createRoot(container)
}

@JSExportTopLevel("renderApp")
def renderApp(root: ReactRoot): Unit = {
  root.render(
    React.createElement(
      React.StrictMode,
      null,
      MyApp()
    )
  )
}
