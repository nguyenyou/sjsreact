package myapp.components

import scala.scalajs.js
import myapp.functionComponent
import myapp.{Box, scalaFunctionComponent}
import myapp.React
import myapp.ReactElement
import myapp.tags.h3
import myapp.components.ThemeContext
import scala.scalajs.js.annotation.JSExportTopLevel

case class Greeting(name: String) {
  def apply() =
    React.createElement(Greeting.component, Box(this))
}

object Greeting {
  type Props = Greeting

  val component = scalaFunctionComponent[Props]("Greeting") { p =>
    val theme = React.useContext(ThemeContext.Context)

    h3(
      js.Dynamic.literal(className = theme),
      s"Hellooooooo, ${p.name}!"
    )
  }
}

@JSExportTopLevel("Greeting")
val GreetingComp = Greeting.component
