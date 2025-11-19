package myapp.components

import scala.scalajs.js
import myapp.functionComponent
import myapp.{Box, scalaFunctionComponent, FunctionalComponent}
import myapp.React
import myapp.ReactElement
import myapp.tags.div
import myapp.tags.button
import myapp.tags.span
import scala.scalajs.js.annotation.JSExportTopLevel

object Counter {
  case class Props(initialCount: Int)

  private val component = new FunctionalComponent[Props]("Counter")(p => {
    val (count, setCount) = React.useState(p.initialCount)

    div(
      null,
      button(
        js.Dynamic.literal(onClick = () => setCount(count + 1)),
        "+"
      ),
      button(
        js.Dynamic.literal(onClick = () => setCount(count - 1)),
        "-"
      ),
      button(
        js.Dynamic.literal(onClick = () => setCount(p.initialCount)),
        "reset"
      ),
      span(null, s"Count: $count")
    )
  })

  def apply(iCount: Int): ReactElement =
    component(Props(initialCount = iCount))
}
