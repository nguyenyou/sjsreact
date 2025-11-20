package myapp

import scala.scalajs.js
import scala.language.implicitConversions

sealed trait Modifier

case class StyleModifier(name: String, value: String) extends Modifier
case class PropModifier(name: String, value: js.Any) extends Modifier
case class ChildModifier(child: ReactElement) extends Modifier

object Modifier {
  implicit def elementToModifier(element: ReactElement): Modifier =
    ChildModifier(element)
  implicit def stringToModifier(text: String): Modifier = ChildModifier(
    tags.span(null, text)
  )
}

import org.scalajs.dom

class Event[E <: js.Any](name: String) {
  inline def -->(v: Callback): Modifier = PropModifier(name, v.toJs)
  inline def -->(f: E => Unit): Modifier = PropModifier(name, Callback(f).toJs)
}

lazy val onClick = new Event[MouseEvent[dom.Element, dom.MouseEvent]]("onClick")
lazy val onMouseEnter =
  new Event[MouseEvent[dom.Element, dom.MouseEvent]]("onMouseEnter")

object marginLeft {
  def :=(v: String): Modifier = StyleModifier("marginLeft", v)
}

object background {
  def :=(v: String): Modifier = StyleModifier("background", v)
}

object color {
  def :=(v: String): Modifier = StyleModifier("color", v)
}

object height {
  def :=(v: String): Modifier = StyleModifier("height", v)
}

object border {
  def :=(v: String): Modifier = StyleModifier("border", v)
}
