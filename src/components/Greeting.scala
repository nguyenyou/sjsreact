package myapp.components

import scala.scalajs.js
import myapp.functionComponent
import myapp.{Box, scalaFunctionComponent}
import myapp.React
import myapp.ReactElement
import myapp.tags.h3
import myapp.components.ThemeContext
import scala.scalajs.js.annotation.JSExportTopLevel

object Greeting {

  case class Props(name: String)

  val component = scalaFunctionComponent[Props]("Greeting") { p =>
    val theme = React.useContext(ThemeContext.Context)

    h3(
      js.Dynamic.literal(className = theme),
      s"Hello, ${p.name}!"
    )
  }

  def apply(name: String): ReactElement =
    React.createElement(component, Box(Props(name)))
}

@JSExportTopLevel("Greeting")
val GreetingComp = Greeting.component
