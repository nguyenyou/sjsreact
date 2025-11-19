'use strict';
import * as $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6 from "./internal-3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.js";
/** @constructor */
function $c_Lmyapp_components_Greeting(name) {
  this.Lmyapp_components_Greeting__f_name = null;
  this.Lmyapp_components_Greeting__f_name = name;
}
export { $c_Lmyapp_components_Greeting as $c_Lmyapp_components_Greeting };
$c_Lmyapp_components_Greeting.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lmyapp_components_Greeting.prototype.constructor = $c_Lmyapp_components_Greeting;
/** @constructor */
function $h_Lmyapp_components_Greeting() {
}
export { $h_Lmyapp_components_Greeting as $h_Lmyapp_components_Greeting };
$h_Lmyapp_components_Greeting.prototype = $c_Lmyapp_components_Greeting.prototype;
$c_Lmyapp_components_Greeting.prototype.productIterator__sc_Iterator = (function() {
  return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Product$$anon$1(this);
});
$c_Lmyapp_components_Greeting.prototype.hashCode__I = (function() {
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_util_hashing_MurmurHash3$().productHash__s_Product__I__Z__I(this, 1756016332, true);
});
$c_Lmyapp_components_Greeting.prototype.toString__T = (function() {
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$()._toString__s_Product__T(this);
});
$c_Lmyapp_components_Greeting.prototype.productArity__I = (function() {
  return 1;
});
$c_Lmyapp_components_Greeting.prototype.productPrefix__T = (function() {
  return "Greeting";
});
$c_Lmyapp_components_Greeting.prototype.productElement__I__O = (function(n) {
  if ((n === 0)) {
    return this.Lmyapp_components_Greeting__f_name;
  }
  throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_IndexOutOfBoundsException__T__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_IndexOutOfBoundsException(), ("" + n));
});
function $as_Lmyapp_components_Greeting(obj) {
  return (((obj instanceof $c_Lmyapp_components_Greeting) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwClassCastException(obj, "myapp.components.Greeting"));
}
export { $as_Lmyapp_components_Greeting as $as_Lmyapp_components_Greeting };
function $isArrayOf_Lmyapp_components_Greeting(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lmyapp_components_Greeting)));
}
export { $isArrayOf_Lmyapp_components_Greeting as $isArrayOf_Lmyapp_components_Greeting };
function $asArrayOf_Lmyapp_components_Greeting(obj, depth) {
  return (($isArrayOf_Lmyapp_components_Greeting(obj, depth) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwArrayCastException(obj, "Lmyapp.components.Greeting;", depth));
}
export { $asArrayOf_Lmyapp_components_Greeting as $asArrayOf_Lmyapp_components_Greeting };
var $d_Lmyapp_components_Greeting = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Lmyapp_components_Greeting, "myapp.components.Greeting", ({
  Lmyapp_components_Greeting: 1,
  s_Equals: 1,
  s_Product: 1,
  Ljava_io_Serializable: 1
}));
export { $d_Lmyapp_components_Greeting as $d_Lmyapp_components_Greeting };
