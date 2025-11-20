package myapp.components

import scala.scalajs.js
import myapp.functionComponent
import myapp.React
import myapp.ReactElement

import myapp.tags.h3
import myapp.html.div
import myapp.html.button
import myapp.components.ThemeContext
import myapp.components.Greeting
import myapp.components.Counter
import scala.scalajs.js.annotation.JSExportTopLevel
import myapp.FunctionComponent
import myapp.Callback
import myapp.onClick
import myapp.onMouseEnter
import myapp.marginLeft
import myapp.background
import myapp.color
import myapp.height
import myapp.border
import myapp.SyntheticBaseEvent
import org.scalajs.dom

case class MyApp() {
  def apply(): ReactElement = MyApp.component(this)
}

object MyApp {
  type Props = MyApp

  val handleClick = Callback((x: js.Any) => {
    org.scalajs.dom.console.log(x)
  })

  val component = FunctionComponent[Props]("MyApp") { _ =>
    val (count, setCount) = React.useState(1)

    val handleClickContainer = Callback(() => {
      org.scalajs.dom.console.log("Clickkkkkk")
      setCount(count + 1)
    })

    val handleMouseEnter = Callback((e: SyntheticBaseEvent[dom.MouseEvent]) => {
      org.scalajs.dom.console.log(e._reactName)
      org.scalajs.dom.console.log(e.`type`)
      org.scalajs.dom.console.log(e.clientX)
      org.scalajs.dom.console.log(e.clientY)
    })

    div(
      onClick --> handleClickContainer,
      onMouseEnter --> handleMouseEnter,
      marginLeft := "20px",
      background := "#fff",
      color := "#000",
      height := "200px",
      border := "1px solid #000",
      div(s"Lorem ipsum: ${count}"),
      button(
        onClick --> handleClickContainer,
        "Click me"
      )
    )
  }

}
