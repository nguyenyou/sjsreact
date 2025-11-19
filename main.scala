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
  def createElement(
      tag: String,
      props: js.Object | Null,
      children: js.Any*
  ): ReactElement = js.native
}

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

val HelloWorld: js.Function0[ReactElement] = {
  val component: js.Function0[ReactElement] = () => {
    React.createElement("div", null, "Hello World")
  }
  component.asInstanceOf[js.Dynamic].displayName = "HelloWorld"
  component
}

@main
def run(): Unit = {
  println(
    s"HelloWorld displayName: ${HelloWorld.asInstanceOf[js.Dynamic].displayName}"
  )
  val container = dom.document.getElementById("app")
  val root = ReactDOM.createRoot(container)
  root.render(HelloWorld())
}
