package myapp.components

import scala.scalajs.js
import myapp.functionComponent
import myapp.{Box, scalaFunctionComponentWithChildren}
import myapp.React
import myapp.ReactElement
import myapp.tags.button
import scala.scalajs.js.annotation.JSExportTopLevel

object Button {
  case class Props(onClick: js.Function0[Unit])

  val component = scalaFunctionComponentWithChildren[Props]("Button") {
    (p, children) =>
      button(
        js.Dynamic.literal(onClick =
          if (!js.isUndefined(p.onClick)) p.onClick
          else null
        ),
        children
      )
  }

  def apply(onClick: js.Function0[Unit])(children: js.Any*): ReactElement =
    React.createElement(
      component,
      Box(Props(onClick)),
      children*
    )
}
