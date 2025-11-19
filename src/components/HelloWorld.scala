package myapp.components

import scala.scalajs.js
import myapp.functionComponent
import myapp.React
import myapp.ReactElement
import myapp.tags.div
import scala.scalajs.js.annotation.JSExportTopLevel

object HelloWorld {
  val component = functionComponent("HelloWorld") { _ =>
    div(null, "Hello Worldddd")
  }
}
