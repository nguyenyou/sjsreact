'use strict';
import * as $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6 from "./internal-3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.js";
import * as $j_myapp$002e$002dChild$002dModifier from "./myapp.-Child-Modifier.js";
import * as $j_myapp$002e$002dModifier from "./myapp.-Modifier.js";
import * as $j_myapp$002e$002dProp$002dModifier from "./myapp.-Prop-Modifier.js";
import * as $j_myapp$002e$002dReact$0024 from "./myapp.-React$.js";
import * as $j_myapp$002e$002dStyle$002dModifier from "./myapp.-Style-Modifier.js";
/** @constructor */
function $c_Lmyapp_html$() {
}
export { $c_Lmyapp_html$ as $c_Lmyapp_html$ };
$c_Lmyapp_html$.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lmyapp_html$.prototype.constructor = $c_Lmyapp_html$;
/** @constructor */
function $h_Lmyapp_html$() {
}
export { $h_Lmyapp_html$ as $h_Lmyapp_html$ };
$h_Lmyapp_html$.prototype = $c_Lmyapp_html$.prototype;
$c_Lmyapp_html$.prototype.div__sci_Seq__Lmyapp_ReactElement = (function(modifiers) {
  var fields = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.getArrayOf().constr)([]));
  var props = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields);
  var fields$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.getArrayOf().constr)([]));
  var style = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields$1);
  var children = [];
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(modifiers).foreach__F1__V(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$1) => {
    var x$1$1 = $j_myapp$002e$002dModifier.$as_Lmyapp_Modifier(x$1);
    if ((x$1$1 instanceof $j_myapp$002e$002dStyle$002dModifier.$c_Lmyapp_StyleModifier)) {
      var x9 = $j_myapp$002e$002dStyle$002dModifier.$as_Lmyapp_StyleModifier(x$1$1);
      var this$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x9);
      var x11 = this$4.Lmyapp_StyleModifier__f_name;
      var this$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x9);
      var x12 = this$5.Lmyapp_StyleModifier__f_value;
      style[x11] = x12;
      return (void 0);
    }
    if ((x$1$1 instanceof $j_myapp$002e$002dProp$002dModifier.$c_Lmyapp_PropModifier)) {
      var x5 = $j_myapp$002e$002dProp$002dModifier.$as_Lmyapp_PropModifier(x$1$1);
      var this$8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x5);
      var x7 = this$8.Lmyapp_PropModifier__f_name;
      var this$9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x5);
      var x8 = this$9.Lmyapp_PropModifier__f_value;
      props[x7] = x8;
      return (void 0);
    }
    if ((x$1$1 instanceof $j_myapp$002e$002dChild$002dModifier.$c_Lmyapp_ChildModifier)) {
      var x2 = $j_myapp$002e$002dChild$002dModifier.$as_Lmyapp_ChildModifier(x$1$1);
      var this$11 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x2);
      var x4 = this$11.Lmyapp_ChildModifier__f_child;
      return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(children.push(x4));
    }
    throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1$1);
  })));
  if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(Object.keys(style).length) > 0)) {
    props.style = style;
  }
  return $j_myapp$002e$002dReact$0024.$m_Lmyapp_React$().createElement__sjs_js_Any__sjs_js_Object__sci_Seq__Lmyapp_ReactElement("div", props, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_IndexedSeq$().from__sc_IterableOnce__sci_IndexedSeq($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_sjs_js_WrappedArray__sjs_js_Array__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjs_js_WrappedArray(), children)));
});
var $d_Lmyapp_html$ = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Lmyapp_html$, "myapp.html$", ({
  Lmyapp_html$: 1
}));
export { $d_Lmyapp_html$ as $d_Lmyapp_html$ };
var $n_Lmyapp_html$;
function $m_Lmyapp_html$() {
  if ((!$n_Lmyapp_html$)) {
    $n_Lmyapp_html$ = new $c_Lmyapp_html$();
  }
  return $n_Lmyapp_html$;
}
export { $m_Lmyapp_html$ as $m_Lmyapp_html$ };
