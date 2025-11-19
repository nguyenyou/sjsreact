package myapp.components

import scala.scalajs.js
import myapp.functionComponent
import myapp.React
import myapp.ReactElement
import myapp.tags.h3
import myapp.ThemeContext
import scala.scalajs.js.annotation.JSExportTopLevel

object Greeting {

  trait Props extends js.Object {
    val name: String
  }

  object Props {
    def apply(name: String): Props =
      js.Dynamic.literal(name = name).asInstanceOf[Props]
  }

  val component = functionComponent[Props]("Greeting") { p =>
    val theme = React.useContext(ThemeContext.Context)

    h3(
      js.Dynamic.literal(className = theme),
      s"Hello, ${p.name}!"
    )
  }

  def apply(name: String): ReactElement =
    React.createElement(component, Props(name = name))
}

@JSExportTopLevel("Greeting")
val GreetingComp = Greeting.component
