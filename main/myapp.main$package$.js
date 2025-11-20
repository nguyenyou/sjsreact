'use strict';
import * as $i_react$002ddom$002fclient from "react-dom/client";
import * as $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6 from "./internal-3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.js";
import * as $j_myapp$002e$002dReact$0024 from "./myapp.-React$.js";
import * as $j_myapp$002ecomponents$002e$002dCounter from "./myapp.components.-Counter.js";
import * as $j_myapp$002ecomponents$002e$002dCounter$0024 from "./myapp.components.-Counter$.js";
/** @constructor */
function $c_Lmyapp_main$package$() {
}
export { $c_Lmyapp_main$package$ as $c_Lmyapp_main$package$ };
$c_Lmyapp_main$package$.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lmyapp_main$package$.prototype.constructor = $c_Lmyapp_main$package$;
/** @constructor */
function $h_Lmyapp_main$package$() {
}
export { $h_Lmyapp_main$package$ as $h_Lmyapp_main$package$ };
$h_Lmyapp_main$package$.prototype = $c_Lmyapp_main$package$.prototype;
$c_Lmyapp_main$package$.prototype.createRoot__T__Lmyapp_ReactRoot = (function(containerId) {
  var container = document.getElementById(containerId);
  return $i_react$002ddom$002fclient.createRoot(container);
});
$c_Lmyapp_main$package$.prototype.renderApp__Lmyapp_ReactRoot__V = (function(root) {
  var $x_3 = $j_myapp$002e$002dReact$0024.$m_Lmyapp_React$();
  var $x_2 = $j_myapp$002e$002dReact$0024.$m_Lmyapp_React$().StrictMode__sjs_js_Any();
  var $x_1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  $j_myapp$002ecomponents$002e$002dCounter$0024.$m_Lmyapp_components_Counter$();
  var this$2 = new $j_myapp$002ecomponents$002e$002dCounter.$c_Lmyapp_components_Counter(1);
  root.render($x_3.createElement__sjs_js_Any__sjs_js_Object__sci_Seq__Lmyapp_ReactElement($x_2, null, $x_1.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_sjs_js_Any.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_myapp$002ecomponents$002e$002dCounter$0024.$m_Lmyapp_components_Counter$().Lmyapp_components_Counter$__f_component).apply__O__Lmyapp_ReactElement(this$2)]))));
});
$c_Lmyapp_main$package$.prototype.run__V = (function() {
  var root = $m_Lmyapp_main$package$().createRoot__T__Lmyapp_ReactRoot("app");
  $m_Lmyapp_main$package$().renderApp__Lmyapp_ReactRoot__V(root);
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
