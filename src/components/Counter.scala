package myapp.components

import scala.scalajs.js
import myapp.functionComponent
import myapp.{Box, scalaFunctionComponent, FunctionComponent}
import myapp.React
import myapp.ReactElement
import myapp.html.{div, button}
import myapp.tags.span
import myapp.Callback
import myapp.onClick
import scala.scalajs.js.annotation.JSExportTopLevel

case class Counter(initialCount: Int) {
  inline def apply(): ReactElement = Counter.component(this)
}

object Counter {
  val component = FunctionComponent[Counter]("Counter")(p => {
    val (count, setCount) = React.useState(p.initialCount)

    val increase = Callback(() => setCount(count + 1))
    val decrease = Callback(() => setCount(count - 1))
    val reset = Callback(() => setCount(p.initialCount))

    div(
      button(
        onClick := increase,
        "+"
      ),
      button(
        onClick := decrease,
        "-"
      ),
      button(
        onClick := reset,
        "reset"
      ),
      div(s"Count: $count")
    )
  })
}
