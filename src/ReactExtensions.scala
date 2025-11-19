package myapp

import scala.scalajs.js

trait Box[+T] extends js.Object {
  val value: T
}

object Box {
  def apply[T](v: T): Box[T] =
    js.Dynamic.literal(value = v.asInstanceOf[js.Any]).asInstanceOf[Box[T]]
}

def scalaFunctionComponent[P](
    displayName: String
)(render: P => ReactElement): js.Function1[Box[P], ReactElement] = {
  val f = (box: Box[P]) => render(box.value)
  val component = f
  component.asInstanceOf[js.Dynamic].displayName = displayName
  component
}
