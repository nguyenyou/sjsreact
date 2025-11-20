package myapp

import org.scalajs.dom

import scala.scalajs.js
import scala.scalajs.js.annotation.JSImport
import scala.scalajs.js.annotation.JSExportTopLevel
import myapp.components.Greeting
import myapp.components.TextInput
import myapp.components.MyApp

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

object html {
  def div(children: ReactElement*) = {
    React.createElement("div", null, children*)
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
      MyApp()()
    )
  )
}

@main
def run(): Unit = {
  val root = createRoot("app")
  renderApp(root)
}
