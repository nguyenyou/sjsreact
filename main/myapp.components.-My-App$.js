'use strict';
import * as $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6 from "./internal-3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.js";
import * as $j_myapp$002e$002dChild$002dModifier from "./myapp.-Child-Modifier.js";
import * as $j_myapp$002e$002dFunction$002dComponent from "./myapp.-Function-Component.js";
import * as $j_myapp$002e$002dModifier from "./myapp.-Modifier.js";
import * as $j_myapp$002e$002dModifier$0024 from "./myapp.-Modifier$.js";
import * as $j_myapp$002e$002dProp$002dModifier from "./myapp.-Prop-Modifier.js";
import * as $j_myapp$002e$002dStyle$002dModifier from "./myapp.-Style-Modifier.js";
import * as $j_myapp$002ecomponents$002e$002dMy$002dApp from "./myapp.components.-My-App.js";
import * as $j_myapp$002ehtml$0024 from "./myapp.html$.js";
/** @constructor */
function $c_Lmyapp_components_MyApp$() {
  this.Lmyapp_components_MyApp$__f_handleClickContainer = null;
  this.Lmyapp_components_MyApp$__f_component = null;
  $n_Lmyapp_components_MyApp$ = this;
  var f$proxy2 = (() => {
    console.log("Clickkkkkk");
  });
  this.Lmyapp_components_MyApp$__f_handleClickContainer = f$proxy2;
  var render = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((_$1) => {
    $j_myapp$002ecomponents$002e$002dMy$002dApp.$as_Lmyapp_components_MyApp(_$1);
    var $x_8 = $j_myapp$002ehtml$0024.$m_Lmyapp_html$();
    var $x_7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
    var v = this.Lmyapp_components_MyApp$__f_handleClickContainer;
    var $x_6 = new $j_myapp$002e$002dProp$002dModifier.$c_Lmyapp_PropModifier("onClick", v);
    var $x_5 = new $j_myapp$002e$002dStyle$002dModifier.$c_Lmyapp_StyleModifier("marginLeft", "20px");
    var $x_4 = new $j_myapp$002e$002dStyle$002dModifier.$c_Lmyapp_StyleModifier("background", "#fff");
    var $x_3 = new $j_myapp$002e$002dStyle$002dModifier.$c_Lmyapp_StyleModifier("color", "#000");
    var $x_2 = new $j_myapp$002e$002dStyle$002dModifier.$c_Lmyapp_StyleModifier("height", "200px");
    var $x_1 = new $j_myapp$002e$002dStyle$002dModifier.$c_Lmyapp_StyleModifier("border", "1px solid #000");
    var element = $j_myapp$002ehtml$0024.$m_Lmyapp_html$().div__sci_Seq__Lmyapp_ReactElement($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_myapp$002e$002dModifier.$d_Lmyapp_Modifier.getArrayOf().constr)([$j_myapp$002e$002dModifier$0024.$m_Lmyapp_Modifier$().stringToModifier__T__Lmyapp_Modifier("Hello world")])));
    return $x_8.div__sci_Seq__Lmyapp_ReactElement($x_7.wrapRefArray__AO__sci_ArraySeq(new ($j_myapp$002e$002dModifier.$d_Lmyapp_Modifier.getArrayOf().constr)([$x_6, $x_5, $x_4, $x_3, $x_2, $x_1, new $j_myapp$002e$002dChild$002dModifier.$c_Lmyapp_ChildModifier(element)])));
  }));
  this.Lmyapp_components_MyApp$__f_component = new $j_myapp$002e$002dFunction$002dComponent.$c_Lmyapp_FunctionComponent("MyApp", render);
}
export { $c_Lmyapp_components_MyApp$ as $c_Lmyapp_components_MyApp$ };
$c_Lmyapp_components_MyApp$.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lmyapp_components_MyApp$.prototype.constructor = $c_Lmyapp_components_MyApp$;
/** @constructor */
function $h_Lmyapp_components_MyApp$() {
}
export { $h_Lmyapp_components_MyApp$ as $h_Lmyapp_components_MyApp$ };
$h_Lmyapp_components_MyApp$.prototype = $c_Lmyapp_components_MyApp$.prototype;
var $d_Lmyapp_components_MyApp$ = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Lmyapp_components_MyApp$, "myapp.components.MyApp$", ({
  Lmyapp_components_MyApp$: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Product: 1
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
