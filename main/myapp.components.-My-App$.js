'use strict';
import * as $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6 from "./internal-3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.js";
import * as $j_myapp$002e$002dReact$0024 from "./myapp.-React$.js";
import * as $j_myapp$002ecomponents$002e$002dCounter from "./myapp.components.-Counter.js";
import * as $j_myapp$002ecomponents$002e$002dCounter$0024 from "./myapp.components.-Counter$.js";
import * as $j_myapp$002ecomponents$002e$002dGreeting$0024 from "./myapp.components.-Greeting$.js";
import * as $j_myapp$002ecomponents$002e$002dText$002dInput$0024 from "./myapp.components.-Text-Input$.js";
import * as $j_myapp$002ecomponents$002e$002dTheme$002dContext$0024 from "./myapp.components.-Theme-Context$.js";
import * as $j_myapp$002efunction$002dComponent$0024package$0024 from "./myapp.function-Component$package$.js";
import * as $j_myapp$002etags$0024 from "./myapp.tags$.js";
function $p_Lmyapp_components_MyApp$__handleClick$1__F1__T__V($thiz, setTheme$1, theme$1) {
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(setTheme$1).apply__O__O(((theme$1 === "dark") ? "light" : "dark"));
}
export { $p_Lmyapp_components_MyApp$__handleClick$1__F1__T__V as $p_Lmyapp_components_MyApp$__handleClick$1__F1__T__V };
/** @constructor */
function $c_Lmyapp_components_MyApp$() {
  this.Lmyapp_components_MyApp$__f_component = null;
  $n_Lmyapp_components_MyApp$ = this;
  this.Lmyapp_components_MyApp$__f_component = $j_myapp$002efunction$002dComponent$0024package$0024.$m_Lmyapp_functionComponent$package$().functionComponent__T__sjs_js_Function1__sjs_js_Any("MyApp", ((_$1) => {
    matchResult1: {
      var \u03b42$;
      var x1 = $j_myapp$002e$002dReact$0024.$m_Lmyapp_React$().useState__O__T2("dark");
      if ((x1 !== null)) {
        var \u03b42$ = x1;
        break matchResult1;
      }
      throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x1);
    }
    var theme = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(\u03b42$).T2__f__1);
    var setTheme = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_F1($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(\u03b42$).T2__f__2);
    var $x_10 = $j_myapp$002ecomponents$002e$002dTheme$002dContext$0024.$m_Lmyapp_components_ThemeContext$();
    var $x_9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
    var $x_8 = $j_myapp$002etags$0024.$m_Lmyapp_tags$();
    var $x_7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
    var _2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_Any$().fromFunction0__F0__sjs_js_Function0(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => {
      $p_Lmyapp_components_MyApp$__handleClick$1__F1__T__V(this, setTheme, theme);
    })));
    var fields = $x_7.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.getArrayOf().constr)([new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("onClick", _2)]));
    var $x_6 = $x_8.button__sjs_js_Object__sci_Seq__Lmyapp_ReactElement($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_sjs_js_Any.getArrayOf().constr)(["Switch Themeeee"])));
    var $x_5 = $j_myapp$002etags$0024.$m_Lmyapp_tags$().h3__sjs_js_Object__sci_Seq__Lmyapp_ReactElement(null, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_sjs_js_Any.getArrayOf().constr)(["Updated from Scala!"])));
    var $x_4 = $j_myapp$002ecomponents$002e$002dGreeting$0024.$m_Lmyapp_components_Greeting$().apply__T__Lmyapp_ReactElement("Taylor");
    $j_myapp$002ecomponents$002e$002dCounter$0024.$m_Lmyapp_components_Counter$();
    var this$7 = new $j_myapp$002ecomponents$002e$002dCounter.$c_Lmyapp_components_Counter(5);
    var $x_3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_myapp$002ecomponents$002e$002dCounter$0024.$m_Lmyapp_components_Counter$().Lmyapp_components_Counter$__f_component).apply__O__Lmyapp_ReactElement(this$7);
    var $x_2 = $j_myapp$002etags$0024.$m_Lmyapp_tags$();
    var $x_1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
    var fields$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.getArrayOf().constr)([new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("marginTop", "20px")]));
    var _2$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields$1);
    var fields$2 = $x_1.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.getArrayOf().constr)([new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("style", _2$1)]));
    return $x_10.apply__T__sci_Seq__Lmyapp_ReactElement(theme, $x_9.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_sjs_js_Any.getArrayOf().constr)([$x_6, $x_5, $x_4, $x_3, $x_2.div__sjs_js_Object__sci_Seq__Lmyapp_ReactElement($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields$2), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_sjs_js_Any.getArrayOf().constr)([$j_myapp$002ecomponents$002e$002dText$002dInput$0024.$m_Lmyapp_components_TextInput$().apply__Lmyapp_ReactElement()])))])));
  }));
}
export { $c_Lmyapp_components_MyApp$ as $c_Lmyapp_components_MyApp$ };
$c_Lmyapp_components_MyApp$.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lmyapp_components_MyApp$.prototype.constructor = $c_Lmyapp_components_MyApp$;
/** @constructor */
function $h_Lmyapp_components_MyApp$() {
}
export { $h_Lmyapp_components_MyApp$ as $h_Lmyapp_components_MyApp$ };
$h_Lmyapp_components_MyApp$.prototype = $c_Lmyapp_components_MyApp$.prototype;
$c_Lmyapp_components_MyApp$.prototype.apply__Lmyapp_ReactElement = (function() {
  return $j_myapp$002e$002dReact$0024.$m_Lmyapp_React$().createElement__sjs_js_Any__sjs_js_Object__sci_Seq__Lmyapp_ReactElement(this.Lmyapp_components_MyApp$__f_component, null, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_sjs_js_Any.getArrayOf().constr)([])));
});
var $d_Lmyapp_components_MyApp$ = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Lmyapp_components_MyApp$, "myapp.components.MyApp$", ({
  Lmyapp_components_MyApp$: 1
}));
export { $d_Lmyapp_components_MyApp$ as $d_Lmyapp_components_MyApp$ };
var $n_Lmyapp_components_MyApp$;
function $m_Lmyapp_components_MyApp$() {
  if ((!$n_Lmyapp_components_MyApp$)) {
    $n_Lmyapp_components_MyApp$ = new $c_Lmyapp_components_MyApp$();
  }
  return $n_Lmyapp_components_MyApp$;
}
export { $m_Lmyapp_components_MyApp$ as $m_Lmyapp_components_MyApp$ };
