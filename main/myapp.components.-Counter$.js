'use strict';
import * as $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6 from "./internal-3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.js";
import * as $j_myapp$002e$002dReact$0024 from "./myapp.-React$.js";
import * as $j_myapp$002ecomponents$002e$002dCounter from "./myapp.components.-Counter.js";
import * as $j_myapp$002etags$0024 from "./myapp.tags$.js";
/** @constructor */
function $c_Lmyapp_components_Counter$() {
  this.Lmyapp_components_Counter$__f_component = null;
  $n_Lmyapp_components_Counter$ = this;
  var f = ((box) => {
    var p = $j_myapp$002ecomponents$002e$002dCounter.$as_Lmyapp_components_Counter(box.a);
    matchResult4: {
      var \u03b42$;
      var x5 = $j_myapp$002e$002dReact$0024.$m_Lmyapp_React$().useState__O__T2($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(p).Lmyapp_components_Counter__f_initialCount);
      if ((x5 !== null)) {
        var \u03b42$ = x5;
        break matchResult4;
      }
      throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x5);
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
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(setCount).apply__O__O($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(p).Lmyapp_components_Counter__f_initialCount);
    })));
    var fields$2 = $x_4.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.getArrayOf().constr)([new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("onClick", _2$2)]));
    var $x_3 = $x_5.button__sjs_js_Object__sci_Seq__Lmyapp_ReactElement($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields$2), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_sjs_js_Any.getArrayOf().constr)(["reset"])));
    var $x_2 = $j_myapp$002etags$0024.$m_Lmyapp_tags$();
    var $x_1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
    var s = ("Count: " + count);
    return $x_13.div__sjs_js_Object__sci_Seq__Lmyapp_ReactElement(null, $x_12.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_sjs_js_Any.getArrayOf().constr)([$x_9, $x_6, $x_3, $x_2.span__sjs_js_Object__sci_Seq__Lmyapp_ReactElement(null, $x_1.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_sjs_js_Any.getArrayOf().constr)([s])))])));
  });
  f.displayName = "Counter";
  var renderFunc = ((props) => {
    var props$1 = $j_myapp$002ecomponents$002e$002dCounter.$as_Lmyapp_components_Counter(props);
    var $x_27 = $j_myapp$002e$002dReact$0024.$m_Lmyapp_React$();
    var f$1 = ((box$1) => {
      var p$1 = $j_myapp$002ecomponents$002e$002dCounter.$as_Lmyapp_components_Counter(box$1.a);
      matchResult5: {
        var \u03b42$$1;
        var x8 = $j_myapp$002e$002dReact$0024.$m_Lmyapp_React$().useState__O__T2($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(p$1).Lmyapp_components_Counter__f_initialCount);
        if ((x8 !== null)) {
          var \u03b42$$1 = x8;
          break matchResult5;
        }
        throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x8);
      }
      var count$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(\u03b42$$1).T2__f__1);
      var setCount$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_F1($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(\u03b42$$1).T2__f__2);
      var $x_26 = $j_myapp$002etags$0024.$m_Lmyapp_tags$();
      var $x_25 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
      var $x_24 = $j_myapp$002etags$0024.$m_Lmyapp_tags$();
      var $x_23 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
      var _2$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_Any$().fromFunction0__F0__sjs_js_Function0(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => {
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(setCount$1).apply__O__O(((1 + count$1) | 0));
      })));
      var fields$3 = $x_23.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.getArrayOf().constr)([new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("onClick", _2$3)]));
      var $x_22 = $x_24.button__sjs_js_Object__sci_Seq__Lmyapp_ReactElement($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields$3), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_sjs_js_Any.getArrayOf().constr)(["+"])));
      var $x_21 = $j_myapp$002etags$0024.$m_Lmyapp_tags$();
      var $x_20 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
      var _2$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_Any$().fromFunction0__F0__sjs_js_Function0(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => {
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(setCount$1).apply__O__O((((-1) + count$1) | 0));
      })));
      var fields$4 = $x_20.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.getArrayOf().constr)([new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("onClick", _2$4)]));
      var $x_19 = $x_21.button__sjs_js_Object__sci_Seq__Lmyapp_ReactElement($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields$4), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_sjs_js_Any.getArrayOf().constr)(["-"])));
      var $x_18 = $j_myapp$002etags$0024.$m_Lmyapp_tags$();
      var $x_17 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
      var _2$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_Any$().fromFunction0__F0__sjs_js_Function0(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => {
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(setCount$1).apply__O__O($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(p$1).Lmyapp_components_Counter__f_initialCount);
      })));
      var fields$5 = $x_17.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.getArrayOf().constr)([new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("onClick", _2$5)]));
      var $x_16 = $x_18.button__sjs_js_Object__sci_Seq__Lmyapp_ReactElement($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields$5), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_sjs_js_Any.getArrayOf().constr)(["reset"])));
      var $x_15 = $j_myapp$002etags$0024.$m_Lmyapp_tags$();
      var $x_14 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
      var s$1 = ("Count: " + count$1);
      return $x_26.div__sjs_js_Object__sci_Seq__Lmyapp_ReactElement(null, $x_25.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_sjs_js_Any.getArrayOf().constr)([$x_22, $x_19, $x_16, $x_15.span__sjs_js_Object__sci_Seq__Lmyapp_ReactElement(null, $x_14.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_sjs_js_Any.getArrayOf().constr)([s$1])))])));
    });
    f$1.displayName = "Counter";
    var fields$6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.getArrayOf().constr)([new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("a", props$1)]));
    return $x_27.createElement__sjs_js_Any__sjs_js_Object__sci_Seq__Lmyapp_ReactElement(f$1, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields$6), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_sjs_js_Any.getArrayOf().constr)([])));
  });
  this.Lmyapp_components_Counter$__f_component = renderFunc;
}
export { $c_Lmyapp_components_Counter$ as $c_Lmyapp_components_Counter$ };
$c_Lmyapp_components_Counter$.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lmyapp_components_Counter$.prototype.constructor = $c_Lmyapp_components_Counter$;
/** @constructor */
function $h_Lmyapp_components_Counter$() {
}
export { $h_Lmyapp_components_Counter$ as $h_Lmyapp_components_Counter$ };
$h_Lmyapp_components_Counter$.prototype = $c_Lmyapp_components_Counter$.prototype;
var $d_Lmyapp_components_Counter$ = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Lmyapp_components_Counter$, "myapp.components.Counter$", ({
  Lmyapp_components_Counter$: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Product: 1
}));
export { $d_Lmyapp_components_Counter$ as $d_Lmyapp_components_Counter$ };
var $n_Lmyapp_components_Counter$;
function $m_Lmyapp_components_Counter$() {
  if ((!$n_Lmyapp_components_Counter$)) {
    $n_Lmyapp_components_Counter$ = new $c_Lmyapp_components_Counter$();
  }
  return $n_Lmyapp_components_Counter$;
}
export { $m_Lmyapp_components_Counter$ as $m_Lmyapp_components_Counter$ };
