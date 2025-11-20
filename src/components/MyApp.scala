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
import myapp.components.Counter
import scala.scalajs.js.annotation.JSExportTopLevel
import myapp.FunctionComponent

case class MyApp() {
  def apply(): ReactElement = MyApp.component(this)
}

object MyApp {
  type Props = MyApp

  val component = FunctionComponent[Props]("MyApp") { _ =>
    div(
      null,
      Greeting("Hello Worldddd")(),
      Counter(0)(),
      Button(() => println("Button clicked!"))("Click me!")
    )
  }

}
