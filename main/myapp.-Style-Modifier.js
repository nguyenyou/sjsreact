'use strict';
import * as $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6 from "./internal-3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.js";
/** @constructor */
function $c_Lmyapp_StyleModifier(name, value) {
  this.Lmyapp_StyleModifier__f_name = null;
  this.Lmyapp_StyleModifier__f_value = null;
  this.Lmyapp_StyleModifier__f_name = name;
  this.Lmyapp_StyleModifier__f_value = value;
}
export { $c_Lmyapp_StyleModifier as $c_Lmyapp_StyleModifier };
$c_Lmyapp_StyleModifier.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lmyapp_StyleModifier.prototype.constructor = $c_Lmyapp_StyleModifier;
/** @constructor */
function $h_Lmyapp_StyleModifier() {
}
export { $h_Lmyapp_StyleModifier as $h_Lmyapp_StyleModifier };
$h_Lmyapp_StyleModifier.prototype = $c_Lmyapp_StyleModifier.prototype;
$c_Lmyapp_StyleModifier.prototype.productIterator__sc_Iterator = (function() {
  return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Product$$anon$1(this);
});
$c_Lmyapp_StyleModifier.prototype.hashCode__I = (function() {
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_util_hashing_MurmurHash3$().productHash__s_Product__I__Z__I(this, 754072137, true);
});
$c_Lmyapp_StyleModifier.prototype.toString__T = (function() {
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$()._toString__s_Product__T(this);
});
$c_Lmyapp_StyleModifier.prototype.productArity__I = (function() {
  return 2;
});
$c_Lmyapp_StyleModifier.prototype.productPrefix__T = (function() {
  return "StyleModifier";
});
$c_Lmyapp_StyleModifier.prototype.productElement__I__O = (function(n) {
  if ((n === 0)) {
    return this.Lmyapp_StyleModifier__f_name;
  }
  if ((n === 1)) {
    return this.Lmyapp_StyleModifier__f_value;
  }
  throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_IndexOutOfBoundsException__T__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_IndexOutOfBoundsException(), ("" + n));
});
function $as_Lmyapp_StyleModifier(obj) {
  return (((obj instanceof $c_Lmyapp_StyleModifier) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwClassCastException(obj, "myapp.StyleModifier"));
}
export { $as_Lmyapp_StyleModifier as $as_Lmyapp_StyleModifier };
function $isArrayOf_Lmyapp_StyleModifier(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lmyapp_StyleModifier)));
}
export { $isArrayOf_Lmyapp_StyleModifier as $isArrayOf_Lmyapp_StyleModifier };
function $asArrayOf_Lmyapp_StyleModifier(obj, depth) {
  return (($isArrayOf_Lmyapp_StyleModifier(obj, depth) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwArrayCastException(obj, "Lmyapp.StyleModifier;", depth));
}
export { $asArrayOf_Lmyapp_StyleModifier as $asArrayOf_Lmyapp_StyleModifier };
var $d_Lmyapp_StyleModifier = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Lmyapp_StyleModifier, "myapp.StyleModifier", ({
  Lmyapp_StyleModifier: 1,
  Lmyapp_Modifier: 1,
  s_Equals: 1,
  s_Product: 1,
  Ljava_io_Serializable: 1
}));
export { $d_Lmyapp_StyleModifier as $d_Lmyapp_StyleModifier };
