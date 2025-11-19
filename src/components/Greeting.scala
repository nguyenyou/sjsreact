package myapp.components

import scala.scalajs.js
import myapp.functionComponent
import myapp.{Box, scalaFunctionComponent, FunctionalComponent}
import myapp.React
import myapp.ReactElement
import myapp.tags.h3
import myapp.components.ThemeContext
import scala.scalajs.js.annotation.JSExportTopLevel

case class Greeting(name: String)

object Greeting {
  private val component = new FunctionalComponent[Greeting]("Greeting")(p => {
    val theme = React.useContext(ThemeContext.Context)

    h3(
      js.Dynamic.literal(className = theme),
      s"Hellooooooo, ${p.name}!"
    )
  })

  def apply(name: String): ReactElement = component(new Greeting(name))
}
