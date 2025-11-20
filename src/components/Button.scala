package myapp.components

import scala.scalajs.js
import myapp.functionComponent
import myapp.{
  Box,
  scalaFunctionComponentWithChildren,
  FunctionComponentWithChildren
}
import myapp.React
import myapp.ReactElement
import myapp.tags.button
import myapp.EventHandler
import myapp.MouseEvent
import org.scalajs.dom
import scala.scalajs.js.annotation.JSExportTopLevel

case class Button(
    onClick: EventHandler[MouseEvent[dom.Element, dom.PointerEvent]]
) {
  def apply(children: js.Any*): ReactElement = Button.component(this)(children*)
}

object Button {
  type Props = Button

  private val component =
    FunctionComponentWithChildren[Props]("Button")((p, children) =>
      button(
        js.Dynamic.literal(onClick =
          if (!js.isUndefined(p.onClick)) p.onClick
          else null
        ),
        children
      )
    )

}
