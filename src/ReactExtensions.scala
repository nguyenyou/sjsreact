package myapp

import scala.scalajs.js

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
