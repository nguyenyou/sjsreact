package myapp

import scala.scalajs.js

def functionComponent[P <: js.Object](
    displayName: String
)(render: js.Function1[P, ReactElement]): js.Any = {
  val component = render
  component.asInstanceOf[js.Dynamic].displayName = displayName
  component
}