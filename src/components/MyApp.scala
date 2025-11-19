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
import scala.scalajs.js.annotation.JSExportTopLevel

object MyApp {

  val component = functionComponent("MyApp") { _ =>
    val (theme, setTheme) = React.useState("dark")

    def handleClick(): Unit = {
      setTheme(if (theme == "dark") "light" else "dark")
    }

    ThemeContext(value = theme)(
      button(
        js.Dynamic.literal(onClick = () => handleClick()),
        "Switch Themeeee"
      ),
      h3(null, "Updated from Scala!"),
      Greeting(name = "Taylor")(),
      div(
        js.Dynamic.literal(style = js.Dynamic.literal(marginTop = "20px")),
        TextInput()
      )
    )
  }
}
