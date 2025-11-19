'use strict';
import * as $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6 from "./internal-3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.js";
import * as $j_myapp$002e$002dReact$0024 from "./myapp.-React$.js";
/** @constructor */
function $c_Lmyapp_ThemeContext$() {
  this.Lmyapp_ThemeContext$__f_Context = null;
  $n_Lmyapp_ThemeContext$ = this;
  this.Lmyapp_ThemeContext$__f_Context = $j_myapp$002e$002dReact$0024.$m_Lmyapp_React$().createContext__O__Lmyapp_ReactRaw$Context("dark");
}
export { $c_Lmyapp_ThemeContext$ as $c_Lmyapp_ThemeContext$ };
$c_Lmyapp_ThemeContext$.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lmyapp_ThemeContext$.prototype.constructor = $c_Lmyapp_ThemeContext$;
/** @constructor */
function $h_Lmyapp_ThemeContext$() {
}
export { $h_Lmyapp_ThemeContext$ as $h_Lmyapp_ThemeContext$ };
$h_Lmyapp_ThemeContext$.prototype = $c_Lmyapp_ThemeContext$.prototype;
$c_Lmyapp_ThemeContext$.prototype.apply__T__sci_Seq__Lmyapp_ReactElement = (function(value, children) {
  var $x_2 = $j_myapp$002e$002dReact$0024.$m_Lmyapp_React$();
  var $x_1 = this.Lmyapp_ThemeContext$__f_Context.Provider;
  var fields = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.getArrayOf().constr)([new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("value", value)]));
  return $x_2.createElement__sjs_js_Any__sjs_js_Object__sci_Seq__Lmyapp_ReactElement($x_1, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields), children);
});
var $d_Lmyapp_ThemeContext$ = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Lmyapp_ThemeContext$, "myapp.ThemeContext$", ({
  Lmyapp_ThemeContext$: 1
}));
export { $d_Lmyapp_ThemeContext$ as $d_Lmyapp_ThemeContext$ };
var $n_Lmyapp_ThemeContext$;
function $m_Lmyapp_ThemeContext$() {
  if ((!$n_Lmyapp_ThemeContext$)) {
    $n_Lmyapp_ThemeContext$ = new $c_Lmyapp_ThemeContext$();
  }
  return $n_Lmyapp_ThemeContext$;
}
export { $m_Lmyapp_ThemeContext$ as $m_Lmyapp_ThemeContext$ };
