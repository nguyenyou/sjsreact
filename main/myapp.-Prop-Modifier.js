'use strict';
import * as $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6 from "./internal-3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.js";
/** @constructor */
function $c_Lmyapp_PropModifier(name, value) {
  this.Lmyapp_PropModifier__f_name = null;
  this.Lmyapp_PropModifier__f_value = null;
  this.Lmyapp_PropModifier__f_name = name;
  this.Lmyapp_PropModifier__f_value = value;
}
export { $c_Lmyapp_PropModifier as $c_Lmyapp_PropModifier };
$c_Lmyapp_PropModifier.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lmyapp_PropModifier.prototype.constructor = $c_Lmyapp_PropModifier;
/** @constructor */
function $h_Lmyapp_PropModifier() {
}
export { $h_Lmyapp_PropModifier as $h_Lmyapp_PropModifier };
$h_Lmyapp_PropModifier.prototype = $c_Lmyapp_PropModifier.prototype;
$c_Lmyapp_PropModifier.prototype.productIterator__sc_Iterator = (function() {
  return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Product$$anon$1(this);
});
$c_Lmyapp_PropModifier.prototype.hashCode__I = (function() {
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_util_hashing_MurmurHash3$().productHash__s_Product__I__Z__I(this, (-1884433327), true);
});
$c_Lmyapp_PropModifier.prototype.toString__T = (function() {
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$()._toString__s_Product__T(this);
});
$c_Lmyapp_PropModifier.prototype.productArity__I = (function() {
  return 2;
});
$c_Lmyapp_PropModifier.prototype.productPrefix__T = (function() {
  return "PropModifier";
});
$c_Lmyapp_PropModifier.prototype.productElement__I__O = (function(n) {
  if ((n === 0)) {
    return this.Lmyapp_PropModifier__f_name;
  }
  if ((n === 1)) {
    return this.Lmyapp_PropModifier__f_value;
  }
  throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_IndexOutOfBoundsException__T__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_IndexOutOfBoundsException(), ("" + n));
});
function $as_Lmyapp_PropModifier(obj) {
  return (((obj instanceof $c_Lmyapp_PropModifier) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwClassCastException(obj, "myapp.PropModifier"));
}
export { $as_Lmyapp_PropModifier as $as_Lmyapp_PropModifier };
function $isArrayOf_Lmyapp_PropModifier(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lmyapp_PropModifier)));
}
export { $isArrayOf_Lmyapp_PropModifier as $isArrayOf_Lmyapp_PropModifier };
function $asArrayOf_Lmyapp_PropModifier(obj, depth) {
  return (($isArrayOf_Lmyapp_PropModifier(obj, depth) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwArrayCastException(obj, "Lmyapp.PropModifier;", depth));
}
export { $asArrayOf_Lmyapp_PropModifier as $asArrayOf_Lmyapp_PropModifier };
var $d_Lmyapp_PropModifier = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Lmyapp_PropModifier, "myapp.PropModifier", ({
  Lmyapp_PropModifier: 1,
  Lmyapp_Modifier: 1,
  s_Equals: 1,
  s_Product: 1,
  Ljava_io_Serializable: 1
}));
export { $d_Lmyapp_PropModifier as $d_Lmyapp_PropModifier };
