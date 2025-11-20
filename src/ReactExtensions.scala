package myapp

import scala.scalajs.js
import org.scalajs.dom

import scala.scalajs.js.annotation._

@js.native
trait Box[+A] extends js.Object {
  @JSName("a") val unbox: A = js.native
}

object Box {
  inline def apply[A](value: A): Box[A] =
    js.Dynamic.literal(a = value.asInstanceOf[js.Any]).asInstanceOf[Box[A]]

  val Unit: Box[Unit] =
    Box(())
}

class Callback(val toJs: js.Function)

object Callback {
  def apply(f: js.Function0[Unit]): Callback = new Callback(f)
  def apply[A](f: js.Function1[A, Unit]): Callback = new Callback(f)
  def apply[A, B](f: js.Function2[A, B, Unit]): Callback = new Callback(f)
}

@js.native
trait SyntheticEvent[+T, +E] extends js.Object {
  val bubbles: Boolean = js.native
  val cancelable: Boolean = js.native
  val currentTarget: T = js.native
  val defaultPrevented: Boolean = js.native
  val eventPhase: Double = js.native
  val isTrusted: Boolean = js.native
  val nativeEvent: E = js.native
  def preventDefault(): Unit = js.native
  def isDefaultPrevented(): Boolean = js.native
  def stopPropagation(): Unit = js.native
  def isPropagationStopped(): Boolean = js.native
  def persist(): Unit = js.native
  val target: dom.EventTarget = js.native
  val timeStamp: Double = js.native
  val `type`: String = js.native
  val _reactName: String = js.native
}

@js.native
trait UIEvent[+T, +E] extends SyntheticEvent[T, E] {
  val detail: Double = js.native
  val view: js.Object = js.native
}

@js.native
trait MouseEvent[+T, +E] extends UIEvent[T, E] {
  val altKey: Boolean = js.native
  val button: Double = js.native
  val buttons: Double = js.native
  val clientX: Double = js.native
  val clientY: Double = js.native
  val ctrlKey: Boolean = js.native
  def getModifierState(key: String): Boolean = js.native
  val metaKey: Boolean = js.native
  val movementX: Double = js.native
  val movementY: Double = js.native
  val pageX: Double = js.native
  val pageY: Double = js.native
  val relatedTarget: dom.EventTarget = js.native
  val screenX: Double = js.native
  val screenY: Double = js.native
  val shiftKey: Boolean = js.native
}

type EventHandler[E <: SyntheticEvent[?, ?]] = js.Function1[E, Unit]

type MouseEventHandler[T] = EventHandler[MouseEvent[T, dom.MouseEvent]]

@js.native
trait PropsWithChildren extends js.Object {
  val children: js.Any
}

def scalaFunctionComponentWithChildren[P](
    displayName: String
)(
    render: (P, js.Any) => ReactElement
): js.Function1[Box[P] & PropsWithChildren, ReactElement] = {
  val f: js.Function1[Box[P] & PropsWithChildren, ReactElement] =
    (props: Box[P] & PropsWithChildren) => render(props.unbox, props.children)
  val component = f
  component.asInstanceOf[js.Dynamic].displayName = displayName
  component
}

inline def scalaFunctionComponent[P](
    displayName: String
)(inline render: P => ReactElement): js.Function1[Box[P], ReactElement] = {
  val f: js.Function1[Box[P], ReactElement] = (box: Box[P]) => render(box.unbox)
  val component = f
  component.asInstanceOf[js.Dynamic].displayName = displayName
  component
}

inline def FunctionComponent[P](displayName: String)(
    inline render: P => ReactElement
) = {
  val component = scalaFunctionComponent[P](displayName)(render)

  val renderFunc: js.Function1[P, ReactElement] = (props: P) => {
    React.createElement(
      scalaFunctionComponent[P](displayName)(render),
      Box(props)
    )
  }

  renderFunc
}

case class FunctionComponentWithChildren[P](displayName: String)(
    render: (P, js.Any) => ReactElement
) {
  private val component =
    scalaFunctionComponentWithChildren[P](displayName)(render)
  def apply(props: P)(children: js.Any*): ReactElement =
    React.createElement(component, Box(props), children*)
}
