package myapp.components

import scala.scalajs.js
import myapp.React
import myapp.ReactElement

object ThemeContext {
  val Context = React.createContext[String]("dark")

  def apply(value: String)(children: js.Any*): ReactElement =
    React.createElement(
      Context.Provider,
      js.Dynamic.literal(value = value),
      children*
    )
}
