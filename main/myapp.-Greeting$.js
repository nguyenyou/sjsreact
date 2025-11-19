'use strict';
import * as $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6 from "./internal-3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.js";
import * as $j_myapp$002e$002dGreeting$0024$002dProps$0024 from "./myapp.-Greeting$-Props$.js";
import * as $j_myapp$002e$002dReact$0024 from "./myapp.-React$.js";
import * as $j_myapp$002e$002dTheme$002dContext$0024 from "./myapp.-Theme-Context$.js";
import * as $j_myapp$002efunction$002dComponent$0024package$0024 from "./myapp.function-Component$package$.js";
import * as $j_myapp$002etags$0024 from "./myapp.tags$.js";
/** @constructor */
function $c_Lmyapp_Greeting$() {
  this.Lmyapp_Greeting$__f_component = null;
  $n_Lmyapp_Greeting$ = this;
  this.Lmyapp_Greeting$__f_component = $j_myapp$002efunction$002dComponent$0024package$0024.$m_Lmyapp_functionComponent$package$().functionComponent__T__sjs_js_Function1__sjs_js_Any("Greeting", ((p) => {
    var x = ("Greeting was rendered at " + $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(new Date().toLocaleTimeString()));
    var this$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_Console$();
    var this$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$3.out__Ljava_io_PrintStream());
    this$4.java$lang$JSConsoleBasedPrintStream$$printString__T__V((x + "\n"));
    var theme = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T($j_myapp$002e$002dReact$0024.$m_Lmyapp_React$().useContext__Lmyapp_ReactRaw$Context__O($j_myapp$002e$002dTheme$002dContext$0024.$m_Lmyapp_ThemeContext$().Lmyapp_ThemeContext$__f_Context));
    var $x_3 = $j_myapp$002etags$0024.$m_Lmyapp_tags$();
    var fields = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.getArrayOf().constr)([new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("className", theme)]));
    var $x_2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields);
    var $x_1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
    var s = (("Hello, " + $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(p.name)) + "!");
    return $x_3.h3__sjs_js_Object__sci_Seq__Lmyapp_ReactElement($x_2, $x_1.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_sjs_js_Any.getArrayOf().constr)([s])));
  }));
}
export { $c_Lmyapp_Greeting$ as $c_Lmyapp_Greeting$ };
$c_Lmyapp_Greeting$.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lmyapp_Greeting$.prototype.constructor = $c_Lmyapp_Greeting$;
/** @constructor */
function $h_Lmyapp_Greeting$() {
}
export { $h_Lmyapp_Greeting$ as $h_Lmyapp_Greeting$ };
$h_Lmyapp_Greeting$.prototype = $c_Lmyapp_Greeting$.prototype;
$c_Lmyapp_Greeting$.prototype.apply__T__Lmyapp_ReactElement = (function(name) {
  return $j_myapp$002e$002dReact$0024.$m_Lmyapp_React$().createElement__sjs_js_Any__sjs_js_Object__sci_Seq__Lmyapp_ReactElement(this.Lmyapp_Greeting$__f_component, $j_myapp$002e$002dGreeting$0024$002dProps$0024.$m_Lmyapp_Greeting$Props$().apply__T__Lmyapp_Greeting$Props(name), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_sjs_js_Any.getArrayOf().constr)([])));
});
var $d_Lmyapp_Greeting$ = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Lmyapp_Greeting$, "myapp.Greeting$", ({
  Lmyapp_Greeting$: 1
}));
export { $d_Lmyapp_Greeting$ as $d_Lmyapp_Greeting$ };
var $n_Lmyapp_Greeting$;
function $m_Lmyapp_Greeting$() {
  if ((!$n_Lmyapp_Greeting$)) {
    $n_Lmyapp_Greeting$ = new $c_Lmyapp_Greeting$();
  }
  return $n_Lmyapp_Greeting$;
}
export { $m_Lmyapp_Greeting$ as $m_Lmyapp_Greeting$ };
