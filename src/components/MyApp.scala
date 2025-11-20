package myapp.components

import scala.scalajs.js
import myapp.functionComponent
import myapp.React
import myapp.ReactElement
import myapp.tags.button
import myapp.tags.h3
import myapp.tags.div
import myapp.html
import myapp.components.ThemeContext
import myapp.components.Greeting
import myapp.components.Counter
import scala.scalajs.js.annotation.JSExportTopLevel
import myapp.FunctionComponent
import myapp.Callback
import myapp.onClick
import myapp.marginLeft
import myapp.background
import myapp.color
import myapp.height
import myapp.border

case class MyApp() {
  def apply(): ReactElement = MyApp.component(this)
}

object MyApp {
  type Props = MyApp

  val handleClick = Callback((x: js.Any) => {
    org.scalajs.dom.console.log(x)
  })

  val handleClickContainer = Callback(() => {
    org.scalajs.dom.console.log("Clickkkkkk")
  })

  val component = FunctionComponent[Props]("MyApp") { _ =>
    html.div(
      onClick := handleClickContainer,
      marginLeft := "20px",
      background := "#fff",
      color := "#000",
      height := "200px",
      border := "1px solid #000",
      html.div()
    )
  }

}
