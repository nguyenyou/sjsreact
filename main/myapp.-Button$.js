'use strict';
import * as $i_react$002ddom$002fclient from "react-dom/client";
import * as $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6 from "./internal-3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.js";
import * as $j_myapp$002e$002dGreeting$0024$002dProps$0024 from "./myapp.-Greeting$-Props$.js";
import * as $j_myapp$002e$002dReact$0024 from "./myapp.-React$.js";
import * as $j_myapp$002e$002dTheme$002dContext$0024 from "./myapp.-Theme-Context$.js";
import * as $j_myapp$002etags$0024 from "./myapp.tags$.js";
/** @constructor */
function $c_Lmyapp_Button$() {
  this.Lmyapp_Button$__f_component = null;
  $n_Lmyapp_Button$ = this;
  this.Lmyapp_Button$__f_component = $m_Lmyapp_main$package$().functionalComponent__T__sjs_js_Function1__sjs_js_Any("Button", ((props) => {
    var $x_2 = $j_myapp$002etags$0024.$m_Lmyapp_tags$();
    var $x_1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
    var v = props.onClick;
    if ((!(v === (void 0)))) {
      var _2 = props.onClick;
    } else {
      var _2 = null;
    }
    var fields = $x_1.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.getArrayOf().constr)([new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("onClick", _2)]));
    return $x_2.button__sjs_js_Object__sci_Seq__Lmyapp_ReactElement($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_sjs_js_Any.getArrayOf().constr)([props.children])));
  }));
}
export { $c_Lmyapp_Button$ as $c_Lmyapp_Button$ };
$c_Lmyapp_Button$.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lmyapp_Button$.prototype.constructor = $c_Lmyapp_Button$;
/** @constructor */
function $h_Lmyapp_Button$() {
}
export { $h_Lmyapp_Button$ as $h_Lmyapp_Button$ };
$h_Lmyapp_Button$.prototype = $c_Lmyapp_Button$.prototype;
var $d_Lmyapp_Button$ = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Lmyapp_Button$, "myapp.Button$", ({
  Lmyapp_Button$: 1
}));
export { $d_Lmyapp_Button$ as $d_Lmyapp_Button$ };
var $n_Lmyapp_Button$;
function $m_Lmyapp_Button$() {
  if ((!$n_Lmyapp_Button$)) {
    $n_Lmyapp_Button$ = new $c_Lmyapp_Button$();
  }
  return $n_Lmyapp_Button$;
}
export { $m_Lmyapp_Button$ as $m_Lmyapp_Button$ };
/** @constructor */
function $c_Lmyapp_Counter$() {
  this.Lmyapp_Counter$__f_component = null;
  $n_Lmyapp_Counter$ = this;
  this.Lmyapp_Counter$__f_component = $m_Lmyapp_main$package$().functionalComponent__T__sjs_js_Function1__sjs_js_Any("Counter", ((props) => {
    matchResult1: {
      var \u03b42$;
      var x1 = $j_myapp$002e$002dReact$0024.$m_Lmyapp_React$().useState__O__T2($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(props.initialCount));
      if ((x1 !== null)) {
        var \u03b42$ = x1;
        break matchResult1;
      }
      throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x1);
    }
    var count = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(\u03b42$).T2__f__1);
    var setCount = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_F1($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(\u03b42$).T2__f__2);
    var $x_13 = $j_myapp$002etags$0024.$m_Lmyapp_tags$();
    var $x_12 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
    var $x_11 = $j_myapp$002etags$0024.$m_Lmyapp_tags$();
    var $x_10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
    var _2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_Any$().fromFunction0__F0__sjs_js_Function0(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => {
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(setCount).apply__O__O(((1 + count) | 0));
    })));
    var fields = $x_10.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.getArrayOf().constr)([new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("onClick", _2)]));
    var $x_9 = $x_11.button__sjs_js_Object__sci_Seq__Lmyapp_ReactElement($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_sjs_js_Any.getArrayOf().constr)(["+"])));
    var $x_8 = $j_myapp$002etags$0024.$m_Lmyapp_tags$();
    var $x_7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
    var _2$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_Any$().fromFunction0__F0__sjs_js_Function0(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => {
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(setCount).apply__O__O((((-1) + count) | 0));
    })));
    var fields$1 = $x_7.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.getArrayOf().constr)([new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("onClick", _2$1)]));
    var $x_6 = $x_8.button__sjs_js_Object__sci_Seq__Lmyapp_ReactElement($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields$1), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_sjs_js_Any.getArrayOf().constr)(["-"])));
    var $x_5 = $j_myapp$002etags$0024.$m_Lmyapp_tags$();
    var $x_4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
    var _2$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_Any$().fromFunction0__F0__sjs_js_Function0(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => {
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(setCount).apply__O__O($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(props.initialCount));
    })));
    var fields$2 = $x_4.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.getArrayOf().constr)([new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("onClick", _2$2)]));
    var $x_3 = $x_5.button__sjs_js_Object__sci_Seq__Lmyapp_ReactElement($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields$2), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_sjs_js_Any.getArrayOf().constr)(["reset"])));
    var $x_2 = $j_myapp$002etags$0024.$m_Lmyapp_tags$();
    var $x_1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
    var s = ("Count: " + count);
    return $x_13.div__sjs_js_Object__sci_Seq__Lmyapp_ReactElement(null, $x_12.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_sjs_js_Any.getArrayOf().constr)([$x_9, $x_6, $x_3, $x_2.span__sjs_js_Object__sci_Seq__Lmyapp_ReactElement(null, $x_1.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_sjs_js_Any.getArrayOf().constr)([s])))])));
  }));
}
export { $c_Lmyapp_Counter$ as $c_Lmyapp_Counter$ };
$c_Lmyapp_Counter$.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lmyapp_Counter$.prototype.constructor = $c_Lmyapp_Counter$;
/** @constructor */
function $h_Lmyapp_Counter$() {
}
export { $h_Lmyapp_Counter$ as $h_Lmyapp_Counter$ };
$h_Lmyapp_Counter$.prototype = $c_Lmyapp_Counter$.prototype;
var $d_Lmyapp_Counter$ = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Lmyapp_Counter$, "myapp.Counter$", ({
  Lmyapp_Counter$: 1
}));
export { $d_Lmyapp_Counter$ as $d_Lmyapp_Counter$ };
var $n_Lmyapp_Counter$;
function $m_Lmyapp_Counter$() {
  if ((!$n_Lmyapp_Counter$)) {
    $n_Lmyapp_Counter$ = new $c_Lmyapp_Counter$();
  }
  return $n_Lmyapp_Counter$;
}
export { $m_Lmyapp_Counter$ as $m_Lmyapp_Counter$ };
/** @constructor */
function $c_Lmyapp_Greeting$() {
  this.Lmyapp_Greeting$__f_component = null;
  $n_Lmyapp_Greeting$ = this;
  this.Lmyapp_Greeting$__f_component = $j_myapp$002e$002dReact$0024.$m_Lmyapp_React$().memo__sjs_js_Any__sjs_js_Any($m_Lmyapp_main$package$().functionalComponent__T__sjs_js_Function1__sjs_js_Any("Greeting", ((props) => {
    var x = ("Greeting was rendered at " + $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(new Date().toLocaleTimeString()));
    var this$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_Console$();
    var this$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$3.out__Ljava_io_PrintStream());
    this$4.java$lang$JSConsoleBasedPrintStream$$printString__T__V((x + "\n"));
    var theme = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T($j_myapp$002e$002dReact$0024.$m_Lmyapp_React$().useContext__Lmyapp_ReactRaw$Context__O($j_myapp$002e$002dTheme$002dContext$0024.$m_Lmyapp_ThemeContext$().Lmyapp_ThemeContext$__f_Context));
    var $x_3 = $j_myapp$002etags$0024.$m_Lmyapp_tags$();
    var fields = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.getArrayOf().constr)([new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("className", theme)]));
    var $x_2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields);
    var $x_1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
    var s = (("Hello, " + $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(props.name)) + "!");
    return $x_3.h3__sjs_js_Object__sci_Seq__Lmyapp_ReactElement($x_2, $x_1.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_sjs_js_Any.getArrayOf().constr)([s])));
  })));
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
/** @constructor */
function $c_Lmyapp_GreetingSelector$() {
  this.Lmyapp_GreetingSelector$__f_component = null;
  $n_Lmyapp_GreetingSelector$ = this;
  this.Lmyapp_GreetingSelector$__f_component = $m_Lmyapp_main$package$().functionalComponent__T__sjs_js_Function1__sjs_js_Any("GreetingSelector", ((props) => {
    var $x_14 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
    var $x_13 = $j_myapp$002etags$0024.$m_Lmyapp_tags$();
    var $x_12 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
    var $x_11 = $j_myapp$002etags$0024.$m_Lmyapp_tags$();
    var $x_10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
    var $x_9 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("type", "radio");
    var value = ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(props.value) === "Hello");
    var $x_8 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("checked", value);
    var _2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_Any$().fromFunction1__F1__sjs_js_Function1(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((_$2) => {
      (0, props.onChange)("Hello");
    })));
    var fields = $x_10.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.getArrayOf().constr)([$x_9, $x_8, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("onChange", _2)]));
    var $x_7 = $x_13.label__sjs_js_Object__sci_Seq__Lmyapp_ReactElement(null, $x_12.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_sjs_js_Any.getArrayOf().constr)([$x_11.input__sjs_js_Object__sci_Seq__Lmyapp_ReactElement($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_sjs_js_Any.getArrayOf().constr)([]))), "Regular greeting"])));
    var $x_6 = $j_myapp$002etags$0024.$m_Lmyapp_tags$();
    var $x_5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
    var $x_4 = $j_myapp$002etags$0024.$m_Lmyapp_tags$();
    var $x_3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
    var $x_2 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("type", "radio");
    var value$1 = ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(props.value) === "Hello and welcome");
    var $x_1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("checked", value$1);
    var _2$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_Any$().fromFunction1__F1__sjs_js_Function1(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((_$3) => {
      (0, props.onChange)("Hello and welcome");
    })));
    var fields$1 = $x_3.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.getArrayOf().constr)([$x_2, $x_1, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("onChange", _2$1)]));
    var children = $x_14.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_sjs_js_Any.getArrayOf().constr)([$x_7, $x_6.label__sjs_js_Object__sci_Seq__Lmyapp_ReactElement(null, $x_5.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_sjs_js_Any.getArrayOf().constr)([$x_4.input__sjs_js_Object__sci_Seq__Lmyapp_ReactElement($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields$1), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_sjs_js_Any.getArrayOf().constr)([]))), "Enthusiastic greeting"])))]));
    return $j_myapp$002e$002dReact$0024.$m_Lmyapp_React$().createElement__sjs_js_Any__sjs_js_Object__sci_Seq__Lmyapp_ReactElement($j_myapp$002e$002dReact$0024.$m_Lmyapp_React$().Fragment__sjs_js_Any(), null, children);
  }));
}
export { $c_Lmyapp_GreetingSelector$ as $c_Lmyapp_GreetingSelector$ };
$c_Lmyapp_GreetingSelector$.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lmyapp_GreetingSelector$.prototype.constructor = $c_Lmyapp_GreetingSelector$;
/** @constructor */
function $h_Lmyapp_GreetingSelector$() {
}
export { $h_Lmyapp_GreetingSelector$ as $h_Lmyapp_GreetingSelector$ };
$h_Lmyapp_GreetingSelector$.prototype = $c_Lmyapp_GreetingSelector$.prototype;
var $d_Lmyapp_GreetingSelector$ = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Lmyapp_GreetingSelector$, "myapp.GreetingSelector$", ({
  Lmyapp_GreetingSelector$: 1
}));
export { $d_Lmyapp_GreetingSelector$ as $d_Lmyapp_GreetingSelector$ };
var $n_Lmyapp_GreetingSelector$;
function $m_Lmyapp_GreetingSelector$() {
  if ((!$n_Lmyapp_GreetingSelector$)) {
    $n_Lmyapp_GreetingSelector$ = new $c_Lmyapp_GreetingSelector$();
  }
  return $n_Lmyapp_GreetingSelector$;
}
export { $m_Lmyapp_GreetingSelector$ as $m_Lmyapp_GreetingSelector$ };
/** @constructor */
function $c_Lmyapp_HelloWorld$() {
  this.Lmyapp_HelloWorld$__f_component = null;
  $n_Lmyapp_HelloWorld$ = this;
  this.Lmyapp_HelloWorld$__f_component = $m_Lmyapp_main$package$().functionalComponent__T__sjs_js_Function1__sjs_js_Any("HelloWorld", ((_$1) => $j_myapp$002etags$0024.$m_Lmyapp_tags$().div__sjs_js_Object__sci_Seq__Lmyapp_ReactElement(null, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_sjs_js_Any.getArrayOf().constr)(["Hello Worldddd"])))));
}
export { $c_Lmyapp_HelloWorld$ as $c_Lmyapp_HelloWorld$ };
$c_Lmyapp_HelloWorld$.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lmyapp_HelloWorld$.prototype.constructor = $c_Lmyapp_HelloWorld$;
/** @constructor */
function $h_Lmyapp_HelloWorld$() {
}
export { $h_Lmyapp_HelloWorld$ as $h_Lmyapp_HelloWorld$ };
$h_Lmyapp_HelloWorld$.prototype = $c_Lmyapp_HelloWorld$.prototype;
var $d_Lmyapp_HelloWorld$ = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Lmyapp_HelloWorld$, "myapp.HelloWorld$", ({
  Lmyapp_HelloWorld$: 1
}));
export { $d_Lmyapp_HelloWorld$ as $d_Lmyapp_HelloWorld$ };
var $n_Lmyapp_HelloWorld$;
function $m_Lmyapp_HelloWorld$() {
  if ((!$n_Lmyapp_HelloWorld$)) {
    $n_Lmyapp_HelloWorld$ = new $c_Lmyapp_HelloWorld$();
  }
  return $n_Lmyapp_HelloWorld$;
}
export { $m_Lmyapp_HelloWorld$ as $m_Lmyapp_HelloWorld$ };
function $p_Lmyapp_MyApp$__handleClick$1__F1__T__V($thiz, setTheme$1, theme$1) {
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(setTheme$1).apply__O__O(((theme$1 === "dark") ? "light" : "dark"));
}
export { $p_Lmyapp_MyApp$__handleClick$1__F1__T__V as $p_Lmyapp_MyApp$__handleClick$1__F1__T__V };
/** @constructor */
function $c_Lmyapp_MyApp$() {
  this.Lmyapp_MyApp$__f_component = null;
  $n_Lmyapp_MyApp$ = this;
  this.Lmyapp_MyApp$__f_component = $m_Lmyapp_main$package$().functionalComponent__T__sjs_js_Function1__sjs_js_Any("MyApp", ((_$5) => {
    matchResult3: {
      var \u03b46$;
      var x7 = $j_myapp$002e$002dReact$0024.$m_Lmyapp_React$().useState__O__T2("dark");
      if ((x7 !== null)) {
        var \u03b46$ = x7;
        break matchResult3;
      }
      throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x7);
    }
    var theme = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(\u03b46$).T2__f__1);
    var setTheme = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_F1($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(\u03b46$).T2__f__2);
    var $x_9 = $j_myapp$002e$002dTheme$002dContext$0024.$m_Lmyapp_ThemeContext$();
    var $x_8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
    var $x_7 = $j_myapp$002etags$0024.$m_Lmyapp_tags$();
    var $x_6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
    var _2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_Any$().fromFunction0__F0__sjs_js_Function0(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => {
      $p_Lmyapp_MyApp$__handleClick$1__F1__T__V(this, setTheme, theme);
    })));
    var fields = $x_6.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.getArrayOf().constr)([new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("onClick", _2)]));
    var $x_5 = $x_7.button__sjs_js_Object__sci_Seq__Lmyapp_ReactElement($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_sjs_js_Any.getArrayOf().constr)(["Switch Theme"])));
    var $x_4 = $j_myapp$002etags$0024.$m_Lmyapp_tags$().h3__sjs_js_Object__sci_Seq__Lmyapp_ReactElement(null, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_sjs_js_Any.getArrayOf().constr)(["Updated from Scala!"])));
    var $x_3 = $m_Lmyapp_Greeting$().apply__T__Lmyapp_ReactElement("Taylor");
    var $x_2 = $j_myapp$002etags$0024.$m_Lmyapp_tags$();
    var $x_1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
    var fields$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.getArrayOf().constr)([new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("marginTop", "20px")]));
    var _2$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields$1);
    var fields$2 = $x_1.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.getArrayOf().constr)([new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("style", _2$1)]));
    return $x_9.apply__T__sci_Seq__Lmyapp_ReactElement(theme, $x_8.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_sjs_js_Any.getArrayOf().constr)([$x_5, $x_4, $x_3, $x_2.div__sjs_js_Object__sci_Seq__Lmyapp_ReactElement($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields$2), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_sjs_js_Any.getArrayOf().constr)([$m_Lmyapp_TextInput$().apply__Lmyapp_ReactElement()])))])));
  }));
}
export { $c_Lmyapp_MyApp$ as $c_Lmyapp_MyApp$ };
$c_Lmyapp_MyApp$.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lmyapp_MyApp$.prototype.constructor = $c_Lmyapp_MyApp$;
/** @constructor */
function $h_Lmyapp_MyApp$() {
}
export { $h_Lmyapp_MyApp$ as $h_Lmyapp_MyApp$ };
$h_Lmyapp_MyApp$.prototype = $c_Lmyapp_MyApp$.prototype;
$c_Lmyapp_MyApp$.prototype.apply__Lmyapp_ReactElement = (function() {
  return $j_myapp$002e$002dReact$0024.$m_Lmyapp_React$().createElement__sjs_js_Any__sjs_js_Object__sci_Seq__Lmyapp_ReactElement(this.Lmyapp_MyApp$__f_component, null, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_sjs_js_Any.getArrayOf().constr)([])));
});
var $d_Lmyapp_MyApp$ = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Lmyapp_MyApp$, "myapp.MyApp$", ({
  Lmyapp_MyApp$: 1
}));
export { $d_Lmyapp_MyApp$ as $d_Lmyapp_MyApp$ };
var $n_Lmyapp_MyApp$;
function $m_Lmyapp_MyApp$() {
  if ((!$n_Lmyapp_MyApp$)) {
    $n_Lmyapp_MyApp$ = new $c_Lmyapp_MyApp$();
  }
  return $n_Lmyapp_MyApp$;
}
export { $m_Lmyapp_MyApp$ as $m_Lmyapp_MyApp$ };
/** @constructor */
function $c_Lmyapp_TextInput$() {
  this.Lmyapp_TextInput$__f_component = null;
  $n_Lmyapp_TextInput$ = this;
  this.Lmyapp_TextInput$__f_component = $m_Lmyapp_main$package$().functionalComponent__T__sjs_js_Function1__sjs_js_Any("TextInput", ((_$4) => {
    matchResult2: {
      var \u03b44$;
      var x4 = $j_myapp$002e$002dReact$0024.$m_Lmyapp_React$().useState__O__T2("");
      if ((x4 !== null)) {
        var \u03b44$ = x4;
        break matchResult2;
      }
      throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x4);
    }
    var text = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(\u03b44$).T2__f__1);
    var setText = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_F1($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(\u03b44$).T2__f__2);
    var $x_10 = $j_myapp$002etags$0024.$m_Lmyapp_tags$();
    var $x_9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
    var $x_8 = $j_myapp$002etags$0024.$m_Lmyapp_tags$();
    var $x_7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
    var $x_6 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("value", text);
    var _2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_Any$().fromFunction1__F1__sjs_js_Function1(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((e) => {
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(setText).apply__O__O($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(e.target.value));
    })));
    var fields = $x_7.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.getArrayOf().constr)([$x_6, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("onChange", _2), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("placeholder", "Type something...")]));
    var $x_5 = $x_8.input__sjs_js_Object__sci_Seq__Lmyapp_ReactElement($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_sjs_js_Any.getArrayOf().constr)([])));
    var $x_4 = $j_myapp$002etags$0024.$m_Lmyapp_tags$();
    var $x_2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
    var fields$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.getArrayOf().constr)([new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("marginLeft", "10px")]));
    var _2$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields$1);
    var fields$2 = $x_2.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.getArrayOf().constr)([new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("style", _2$1)]));
    var $x_3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields$2);
    var $x_1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
    var s = ("You typed: " + text);
    return $x_10.div__sjs_js_Object__sci_Seq__Lmyapp_ReactElement(null, $x_9.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_sjs_js_Any.getArrayOf().constr)([$x_5, $x_4.span__sjs_js_Object__sci_Seq__Lmyapp_ReactElement($x_3, $x_1.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_sjs_js_Any.getArrayOf().constr)([s])))])));
  }));
}
export { $c_Lmyapp_TextInput$ as $c_Lmyapp_TextInput$ };
$c_Lmyapp_TextInput$.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lmyapp_TextInput$.prototype.constructor = $c_Lmyapp_TextInput$;
/** @constructor */
function $h_Lmyapp_TextInput$() {
}
export { $h_Lmyapp_TextInput$ as $h_Lmyapp_TextInput$ };
$h_Lmyapp_TextInput$.prototype = $c_Lmyapp_TextInput$.prototype;
$c_Lmyapp_TextInput$.prototype.apply__Lmyapp_ReactElement = (function() {
  return $j_myapp$002e$002dReact$0024.$m_Lmyapp_React$().createElement__sjs_js_Any__sjs_js_Object__sci_Seq__Lmyapp_ReactElement(this.Lmyapp_TextInput$__f_component, null, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_sjs_js_Any.getArrayOf().constr)([])));
});
var $d_Lmyapp_TextInput$ = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Lmyapp_TextInput$, "myapp.TextInput$", ({
  Lmyapp_TextInput$: 1
}));
export { $d_Lmyapp_TextInput$ as $d_Lmyapp_TextInput$ };
var $n_Lmyapp_TextInput$;
function $m_Lmyapp_TextInput$() {
  if ((!$n_Lmyapp_TextInput$)) {
    $n_Lmyapp_TextInput$ = new $c_Lmyapp_TextInput$();
  }
  return $n_Lmyapp_TextInput$;
}
export { $m_Lmyapp_TextInput$ as $m_Lmyapp_TextInput$ };
function $sct_Lmyapp_main$package$__stinit__() {
  $m_Lmyapp_main$package$();
}
export { $sct_Lmyapp_main$package$__stinit__ as $sct_Lmyapp_main$package$__stinit__ };
/** @constructor */
function $c_Lmyapp_main$package$() {
  $n_Lmyapp_main$package$ = this;
  $t_Lmyapp_main$package$__MyAppComp = $m_Lmyapp_MyApp$().Lmyapp_MyApp$__f_component;
  $t_Lmyapp_main$package$__HelloWorldComp = $m_Lmyapp_HelloWorld$().Lmyapp_HelloWorld$__f_component;
  $t_Lmyapp_main$package$__CounterComp = $m_Lmyapp_Counter$().Lmyapp_Counter$__f_component;
  $t_Lmyapp_main$package$__GreetingSelectorComp = $m_Lmyapp_GreetingSelector$().Lmyapp_GreetingSelector$__f_component;
  $t_Lmyapp_main$package$__GreetingComp = $m_Lmyapp_Greeting$().Lmyapp_Greeting$__f_component;
  $t_Lmyapp_main$package$__TextInputComp = $m_Lmyapp_TextInput$().Lmyapp_TextInput$__f_component;
  $t_Lmyapp_main$package$__ButtonComp = $m_Lmyapp_Button$().Lmyapp_Button$__f_component;
}
export { $c_Lmyapp_main$package$ as $c_Lmyapp_main$package$ };
$c_Lmyapp_main$package$.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lmyapp_main$package$.prototype.constructor = $c_Lmyapp_main$package$;
/** @constructor */
function $h_Lmyapp_main$package$() {
}
export { $h_Lmyapp_main$package$ as $h_Lmyapp_main$package$ };
$h_Lmyapp_main$package$.prototype = $c_Lmyapp_main$package$.prototype;
$c_Lmyapp_main$package$.prototype.functionalComponent__T__sjs_js_Function1__sjs_js_Any = (function(displayName, render) {
  render.displayName = displayName;
  return render;
});
$c_Lmyapp_main$package$.prototype.createRoot__T__Lmyapp_ReactRoot = (function(containerId) {
  var container = document.getElementById(containerId);
  return $i_react$002ddom$002fclient.createRoot(container);
});
$c_Lmyapp_main$package$.prototype.renderApp__Lmyapp_ReactRoot__V = (function(root) {
  root.render($j_myapp$002e$002dReact$0024.$m_Lmyapp_React$().createElement__sjs_js_Any__sjs_js_Object__sci_Seq__Lmyapp_ReactElement($j_myapp$002e$002dReact$0024.$m_Lmyapp_React$().StrictMode__sjs_js_Any(), null, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_sjs_js_Any.getArrayOf().constr)([$m_Lmyapp_MyApp$().apply__Lmyapp_ReactElement()]))));
});
var $d_Lmyapp_main$package$ = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Lmyapp_main$package$, "myapp.main$package$", ({
  Lmyapp_main$package$: 1
}));
export { $d_Lmyapp_main$package$ as $d_Lmyapp_main$package$ };
var $n_Lmyapp_main$package$;
function $m_Lmyapp_main$package$() {
  if ((!$n_Lmyapp_main$package$)) {
    $n_Lmyapp_main$package$ = new $c_Lmyapp_main$package$();
  }
  return $n_Lmyapp_main$package$;
}
export { $m_Lmyapp_main$package$ as $m_Lmyapp_main$package$ };
var $t_Lmyapp_main$package$__MyAppComp = null;
function $u_Lmyapp_main$package$__MyAppComp(x) {
  $t_Lmyapp_main$package$__MyAppComp = x;
}
export { $t_Lmyapp_main$package$__MyAppComp as $t_Lmyapp_main$package$__MyAppComp, $u_Lmyapp_main$package$__MyAppComp as $u_Lmyapp_main$package$__MyAppComp };
var $t_Lmyapp_main$package$__HelloWorldComp = null;
function $u_Lmyapp_main$package$__HelloWorldComp(x) {
  $t_Lmyapp_main$package$__HelloWorldComp = x;
}
export { $t_Lmyapp_main$package$__HelloWorldComp as $t_Lmyapp_main$package$__HelloWorldComp, $u_Lmyapp_main$package$__HelloWorldComp as $u_Lmyapp_main$package$__HelloWorldComp };
var $t_Lmyapp_main$package$__CounterComp = null;
function $u_Lmyapp_main$package$__CounterComp(x) {
  $t_Lmyapp_main$package$__CounterComp = x;
}
export { $t_Lmyapp_main$package$__CounterComp as $t_Lmyapp_main$package$__CounterComp, $u_Lmyapp_main$package$__CounterComp as $u_Lmyapp_main$package$__CounterComp };
var $t_Lmyapp_main$package$__GreetingSelectorComp = null;
function $u_Lmyapp_main$package$__GreetingSelectorComp(x) {
  $t_Lmyapp_main$package$__GreetingSelectorComp = x;
}
export { $t_Lmyapp_main$package$__GreetingSelectorComp as $t_Lmyapp_main$package$__GreetingSelectorComp, $u_Lmyapp_main$package$__GreetingSelectorComp as $u_Lmyapp_main$package$__GreetingSelectorComp };
var $t_Lmyapp_main$package$__GreetingComp = null;
function $u_Lmyapp_main$package$__GreetingComp(x) {
  $t_Lmyapp_main$package$__GreetingComp = x;
}
export { $t_Lmyapp_main$package$__GreetingComp as $t_Lmyapp_main$package$__GreetingComp, $u_Lmyapp_main$package$__GreetingComp as $u_Lmyapp_main$package$__GreetingComp };
var $t_Lmyapp_main$package$__TextInputComp = null;
function $u_Lmyapp_main$package$__TextInputComp(x) {
  $t_Lmyapp_main$package$__TextInputComp = x;
}
export { $t_Lmyapp_main$package$__TextInputComp as $t_Lmyapp_main$package$__TextInputComp, $u_Lmyapp_main$package$__TextInputComp as $u_Lmyapp_main$package$__TextInputComp };
var $t_Lmyapp_main$package$__ButtonComp = null;
function $u_Lmyapp_main$package$__ButtonComp(x) {
  $t_Lmyapp_main$package$__ButtonComp = x;
}
export { $t_Lmyapp_main$package$__ButtonComp as $t_Lmyapp_main$package$__ButtonComp, $u_Lmyapp_main$package$__ButtonComp as $u_Lmyapp_main$package$__ButtonComp };
$sct_Lmyapp_main$package$__stinit__();
