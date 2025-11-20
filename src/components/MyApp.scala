package myapp.components

import scala.scalajs.js
import myapp.functionComponent
import myapp.React
import myapp.ReactElement
import myapp.tags.button
import myapp.tags.h3
import myapp.tags.div
import myapp.components.ThemeContext
import myapp.components.Greeting
import myapp.components.Counter
import scala.scalajs.js.annotation.JSExportTopLevel

object MyApp {

  val component = functionComponent("MyApp") { _ =>
    Greeting("Hello World")()
  }

  def apply(): ReactElement = React.createElement(component, null)
}
