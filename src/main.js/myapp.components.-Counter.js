'use strict';
import * as $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6 from "./internal-3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.js";
/** @constructor */
function $c_Lmyapp_components_Counter(initialCount) {
  this.Lmyapp_components_Counter__f_initialCount = 0;
  this.Lmyapp_components_Counter__f_initialCount = initialCount;
}
export { $c_Lmyapp_components_Counter as $c_Lmyapp_components_Counter };
$c_Lmyapp_components_Counter.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lmyapp_components_Counter.prototype.constructor = $c_Lmyapp_components_Counter;
/** @constructor */
function $h_Lmyapp_components_Counter() {
}
export { $h_Lmyapp_components_Counter as $h_Lmyapp_components_Counter };
$h_Lmyapp_components_Counter.prototype = $c_Lmyapp_components_Counter.prototype;
$c_Lmyapp_components_Counter.prototype.productIterator__sc_Iterator = (function() {
  return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Product$$anon$1(this);
});
$c_Lmyapp_components_Counter.prototype.hashCode__I = (function() {
  var acc = (-889275714);
  var hash = acc;
  acc = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().mix__I__I__I(hash, (-1672483364));
  var hash$1 = acc;
  var data = this.Lmyapp_components_Counter__f_initialCount;
  acc = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().mix__I__I__I(hash$1, data);
  var hash$2 = acc;
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().finalizeHash__I__I__I(hash$2, 1);
});
$c_Lmyapp_components_Counter.prototype.toString__T = (function() {
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$()._toString__s_Product__T(this);
});
$c_Lmyapp_components_Counter.prototype.productArity__I = (function() {
  return 1;
});
$c_Lmyapp_components_Counter.prototype.productPrefix__T = (function() {
  return "Counter";
});
$c_Lmyapp_components_Counter.prototype.productElement__I__O = (function(n) {
  if ((n === 0)) {
    return this.Lmyapp_components_Counter__f_initialCount;
  }
  throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_IndexOutOfBoundsException__T__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_IndexOutOfBoundsException(), ("" + n));
});
function $as_Lmyapp_components_Counter(obj) {
  return (((obj instanceof $c_Lmyapp_components_Counter) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwClassCastException(obj, "myapp.components.Counter"));
}
export { $as_Lmyapp_components_Counter as $as_Lmyapp_components_Counter };
function $isArrayOf_Lmyapp_components_Counter(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lmyapp_components_Counter)));
}
export { $isArrayOf_Lmyapp_components_Counter as $isArrayOf_Lmyapp_components_Counter };
function $asArrayOf_Lmyapp_components_Counter(obj, depth) {
  return (($isArrayOf_Lmyapp_components_Counter(obj, depth) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwArrayCastException(obj, "Lmyapp.components.Counter;", depth));
}
export { $asArrayOf_Lmyapp_components_Counter as $asArrayOf_Lmyapp_components_Counter };
var $d_Lmyapp_components_Counter = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Lmyapp_components_Counter, "myapp.components.Counter", ({
  Lmyapp_components_Counter: 1,
  s_Equals: 1,
  s_Product: 1,
  Ljava_io_Serializable: 1
}));
export { $d_Lmyapp_components_Counter as $d_Lmyapp_components_Counter };
