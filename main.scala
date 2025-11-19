//> using scala 3.7.3
//> using platform scala-js

//> using dep "org.scala-js::scalajs-dom::2.8.1"

//> using jsModuleKind es

import org.scalajs.dom

import scala.scalajs.js
import scala.scalajs.js.annotation.JSImport

@main
def run(): Unit = {
  val container = dom.document.getElementById("app")
}
