package myapp

import org.scalajs.dom

import scala.scalajs.js
import scala.scalajs.js.annotation.JSImport
import scala.scalajs.js.annotation.JSExportTopLevel
import myapp.components.Greeting
import myapp.components.TextInput
import myapp.components.MyApp
import myapp.components.Counter

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

  inline def useState[T](initialState: T): (T, T => Unit) = {
    val res = ReactRaw.useState(initialState)
    (res._1, res._2)
  }
}

object html {
  def div(modifiers: Modifier*): ReactElement = {
    val props = js.Dynamic.literal()
    val style = js.Dynamic.literal()
    val children = js.Array[ReactElement]()

    modifiers.foreach {
      case StyleModifier(name, value) =>
        style.updateDynamic(name)(value)
      case PropModifier(name, value) =>
        props.updateDynamic(name)(value)
      case ChildModifier(child) =>
        children.push(child)
    }

    // Only attach style if it has properties
    if (js.Object.keys(style).length > 0) {
      props.updateDynamic("style")(style)
    }

    React.createElement("div", props, children.toSeq*)
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

def createRoot(containerId: String): ReactRoot = {
  val container = dom.document.getElementById(containerId)
  ReactDOM.createRoot(container)
}

def renderApp(root: ReactRoot): Unit = {
  root.render(
    React.createElement(
      React.StrictMode,
      null,
      Counter(initialCount = 5)()
    )
  )
}

@main
def run(): Unit = {
  val root = createRoot("app")
  renderApp(root)
}
