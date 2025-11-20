package myapp.components

import scala.scalajs.js
import myapp.functionComponent
import myapp.{Box, scalaFunctionComponent, FunctionComponent}
import myapp.React
import myapp.ReactElement
import myapp.tags.label
import myapp.tags.input
import myapp.tags.fragment
import scala.scalajs.js.annotation.JSExportTopLevel

object GreetingSelector {
  case class Props(value: String, onChange: String => Unit)

  private val component =
    FunctionComponent[Props]("GreetingSelector")(p => {
      fragment(
        label(
          null,
          input(
            js.Dynamic.literal(
              `type` = "radio",
              checked = p.value == "Hello",
              onChange = (_: js.Dynamic) => p.onChange("Hello")
            )
          ),
          "Regular greeting"
        ),
        label(
          null,
          input(
            js.Dynamic.literal(
              `type` = "radio",
              checked = p.value == "Hello and welcome",
              onChange = (_: js.Dynamic) => p.onChange("Hello and welcome")
            )
          ),
          "Enthusiastic greeting"
        )
      )
    })

  def apply(value: String, onChange: String => Unit): ReactElement =
    component(Props(value, onChange))
}
