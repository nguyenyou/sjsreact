'use strict';
import * as $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6 from "./internal-3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.js";
/** @constructor */
function $c_Lmyapp_components_Counter$Props(initialCount) {
  this.Lmyapp_components_Counter$Props__f_initialCount = 0;
  this.Lmyapp_components_Counter$Props__f_initialCount = initialCount;
}
export { $c_Lmyapp_components_Counter$Props as $c_Lmyapp_components_Counter$Props };
$c_Lmyapp_components_Counter$Props.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lmyapp_components_Counter$Props.prototype.constructor = $c_Lmyapp_components_Counter$Props;
/** @constructor */
function $h_Lmyapp_components_Counter$Props() {
}
export { $h_Lmyapp_components_Counter$Props as $h_Lmyapp_components_Counter$Props };
$h_Lmyapp_components_Counter$Props.prototype = $c_Lmyapp_components_Counter$Props.prototype;
$c_Lmyapp_components_Counter$Props.prototype.productIterator__sc_Iterator = (function() {
  return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Product$$anon$1(this);
});
$c_Lmyapp_components_Counter$Props.prototype.hashCode__I = (function() {
  var acc = (-889275714);
  var hash = acc;
  acc = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().mix__I__I__I(hash, 77388112);
  var hash$1 = acc;
  var data = this.Lmyapp_components_Counter$Props__f_initialCount;
  acc = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().mix__I__I__I(hash$1, data);
  var hash$2 = acc;
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().finalizeHash__I__I__I(hash$2, 1);
});
$c_Lmyapp_components_Counter$Props.prototype.toString__T = (function() {
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$()._toString__s_Product__T(this);
});
$c_Lmyapp_components_Counter$Props.prototype.productArity__I = (function() {
  return 1;
});
$c_Lmyapp_components_Counter$Props.prototype.productPrefix__T = (function() {
  return "Props";
});
$c_Lmyapp_components_Counter$Props.prototype.productElement__I__O = (function(n) {
  if ((n === 0)) {
    return this.Lmyapp_components_Counter$Props__f_initialCount;
  }
  throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_IndexOutOfBoundsException__T__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_IndexOutOfBoundsException(), ("" + n));
});
function $as_Lmyapp_components_Counter$Props(obj) {
  return (((obj instanceof $c_Lmyapp_components_Counter$Props) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwClassCastException(obj, "myapp.components.Counter$Props"));
}
export { $as_Lmyapp_components_Counter$Props as $as_Lmyapp_components_Counter$Props };
function $isArrayOf_Lmyapp_components_Counter$Props(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lmyapp_components_Counter$Props)));
}
export { $isArrayOf_Lmyapp_components_Counter$Props as $isArrayOf_Lmyapp_components_Counter$Props };
function $asArrayOf_Lmyapp_components_Counter$Props(obj, depth) {
  return (($isArrayOf_Lmyapp_components_Counter$Props(obj, depth) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwArrayCastException(obj, "Lmyapp.components.Counter$Props;", depth));
}
export { $asArrayOf_Lmyapp_components_Counter$Props as $asArrayOf_Lmyapp_components_Counter$Props };
var $d_Lmyapp_components_Counter$Props = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Lmyapp_components_Counter$Props, "myapp.components.Counter$Props", ({
  Lmyapp_components_Counter$Props: 1,
  s_Equals: 1,
  s_Product: 1,
  Ljava_io_Serializable: 1
}));
export { $d_Lmyapp_components_Counter$Props as $d_Lmyapp_components_Counter$Props };
