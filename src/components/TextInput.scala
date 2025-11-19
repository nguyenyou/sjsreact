package myapp.components

import scala.scalajs.js
import myapp.functionComponent
import myapp.React
import myapp.ReactElement
import myapp.tags.div
import myapp.tags.input
import myapp.tags.span
import scala.scalajs.js.annotation.JSExportTopLevel

object TextInput {
  val component = functionComponent("TextInput") { _ =>
    val (text, setText) = React.useState("")

    div(
      null,
      input(
        js.Dynamic.literal(
          value = text,
          onChange =
            (e: js.Dynamic) => setText(e.target.value.asInstanceOf[String]),
          placeholder = "Type something..."
        )
      ),
      span(
        js.Dynamic.literal(style = js.Dynamic.literal(marginLeft = "10px")),
        s"You typed: $text"
      )
    )
  }

  def apply(): ReactElement = React.createElement(component, null)
}
