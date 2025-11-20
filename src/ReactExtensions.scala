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

def scalaFunctionComponent[P](
    displayName: String
)(render: P => ReactElement): js.Function1[Box[P], ReactElement] = {
  val f: js.Function1[Box[P], ReactElement] = (box: Box[P]) => render(box.unbox)
  val component = f
  component.asInstanceOf[js.Dynamic].displayName = displayName
  component
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

case class FunctionComponent[P](displayName: String)(
    render: P => ReactElement
) {
  private val component = scalaFunctionComponent[P](displayName)(render)
  def apply(props: P): ReactElement =
    React.createElement(component, Box(props))
}

class FunctionComponentWithChildren[P](displayName: String)(
    render: (P, js.Any) => ReactElement
) {
  private val component =
    scalaFunctionComponentWithChildren[P](displayName)(render)
  def apply(props: P)(children: js.Any*): ReactElement =
    React.createElement(component, Box(props), children*)
}
