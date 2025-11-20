'use strict';
import * as $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6 from "./internal-3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.js";
/** @constructor */
function $c_Lmyapp_ChildModifier(child) {
  this.Lmyapp_ChildModifier__f_child = null;
  this.Lmyapp_ChildModifier__f_child = child;
}
export { $c_Lmyapp_ChildModifier as $c_Lmyapp_ChildModifier };
$c_Lmyapp_ChildModifier.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lmyapp_ChildModifier.prototype.constructor = $c_Lmyapp_ChildModifier;
/** @constructor */
function $h_Lmyapp_ChildModifier() {
}
export { $h_Lmyapp_ChildModifier as $h_Lmyapp_ChildModifier };
$h_Lmyapp_ChildModifier.prototype = $c_Lmyapp_ChildModifier.prototype;
$c_Lmyapp_ChildModifier.prototype.productIterator__sc_Iterator = (function() {
  return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Product$$anon$1(this);
});
$c_Lmyapp_ChildModifier.prototype.hashCode__I = (function() {
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_util_hashing_MurmurHash3$().productHash__s_Product__I__Z__I(this, 70822939, true);
});
$c_Lmyapp_ChildModifier.prototype.toString__T = (function() {
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$()._toString__s_Product__T(this);
});
$c_Lmyapp_ChildModifier.prototype.productArity__I = (function() {
  return 1;
});
$c_Lmyapp_ChildModifier.prototype.productPrefix__T = (function() {
  return "ChildModifier";
});
$c_Lmyapp_ChildModifier.prototype.productElement__I__O = (function(n) {
  if ((n === 0)) {
    return this.Lmyapp_ChildModifier__f_child;
  }
  throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_IndexOutOfBoundsException__T__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_IndexOutOfBoundsException(), ("" + n));
});
function $as_Lmyapp_ChildModifier(obj) {
  return (((obj instanceof $c_Lmyapp_ChildModifier) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwClassCastException(obj, "myapp.ChildModifier"));
}
export { $as_Lmyapp_ChildModifier as $as_Lmyapp_ChildModifier };
function $isArrayOf_Lmyapp_ChildModifier(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lmyapp_ChildModifier)));
}
export { $isArrayOf_Lmyapp_ChildModifier as $isArrayOf_Lmyapp_ChildModifier };
function $asArrayOf_Lmyapp_ChildModifier(obj, depth) {
  return (($isArrayOf_Lmyapp_ChildModifier(obj, depth) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwArrayCastException(obj, "Lmyapp.ChildModifier;", depth));
}
export { $asArrayOf_Lmyapp_ChildModifier as $asArrayOf_Lmyapp_ChildModifier };
var $d_Lmyapp_ChildModifier = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Lmyapp_ChildModifier, "myapp.ChildModifier", ({
  Lmyapp_ChildModifier: 1,
  Lmyapp_Modifier: 1,
  s_Equals: 1,
  s_Product: 1,
  Ljava_io_Serializable: 1
}));
export { $d_Lmyapp_ChildModifier as $d_Lmyapp_ChildModifier };
