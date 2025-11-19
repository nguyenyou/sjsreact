package myapp.components


import scala.scalajs.js
import myapp.functionComponent
import myapp.React
import myapp.ReactElement
import myapp.tags.button
import scala.scalajs.js.annotation.JSExportTopLevel

object Button {
  val component = functionComponent("Button") { props =>
    val dynamicProps = props.asInstanceOf[js.Dynamic]
    button(
      js.Dynamic.literal(onClick =
        if (!js.isUndefined(dynamicProps.onClick)) dynamicProps.onClick
        else null
      ),
      dynamicProps.children
    )
  }
  def apply(onClick: js.Function0[Unit])(children: js.Any*): ReactElement =
    React.createElement(
      component,
      js.Dynamic.literal(onClick = onClick),
      children*
    )
}

@JSExportTopLevel("Button")
val ButtonComp = Button.component
