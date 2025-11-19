package myapp.components

import scala.scalajs.js
import myapp.functionComponent
import myapp.React
import myapp.ReactElement
import myapp.tags.div
import myapp.tags.button
import myapp.tags.span
import scala.scalajs.js.annotation.JSExportTopLevel

object Counter {
  trait Props extends js.Object {
    val initialCount: Int
  }

  object Props {
    def apply(initialCount: Int): Props =
      js.Dynamic.literal(initialCount = initialCount).asInstanceOf[Props]
  }

  val component = functionComponent[Props]("Counter") { p =>
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
  }

  def apply(iCount: Int): ReactElement =
    React.createElement(
      component,
      Props(initialCount = iCount)
    )
}

@JSExportTopLevel("Counter")
val CounterComp = Counter.component