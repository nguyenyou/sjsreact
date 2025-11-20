'use strict';
import * as $i_react from "react";
import * as $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6 from "./internal-3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.js";
import * as $j_myapp$002e$002dCallback from "./myapp.-Callback.js";
import * as $j_myapp$002e$002dChild$002dModifier from "./myapp.-Child-Modifier.js";
import * as $j_myapp$002e$002dModifier from "./myapp.-Modifier.js";
import * as $j_myapp$002e$002dModifier$0024 from "./myapp.-Modifier$.js";
import * as $j_myapp$002e$002dModifier$0024package$0024 from "./myapp.-Modifier$package$.js";
import * as $j_myapp$002e$002dProp$002dModifier from "./myapp.-Prop-Modifier.js";
import * as $j_myapp$002e$002dReact$0024 from "./myapp.-React$.js";
import * as $j_myapp$002e$002dStyle$002dModifier from "./myapp.-Style-Modifier.js";
import * as $j_myapp$002ecomponents$002e$002dCounter from "./myapp.components.-Counter.js";
/** @constructor */
function $c_Lmyapp_components_Counter$() {
  this.Lmyapp_components_Counter$__f_component = null;
  $n_Lmyapp_components_Counter$ = this;
  var displayName$proxy1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$objectGetClass(this).getSimpleName__T();
  var f$6 = ((box) => {
    var p = $j_myapp$002ecomponents$002e$002dCounter.$as_Lmyapp_components_Counter(box.a);
    var res = $i_react.useState($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(p).Lmyapp_components_Counter__f_initialCount);
    var _1 = res[0];
    var _2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_Any$().toFunction1__sjs_js_Function1__F1(res[1]);
    var \u03b42$___1 = _1;
    var \u03b42$___2 = _2;
    var count = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(\u03b42$___1);
    var setCount = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_F1(\u03b42$___2);
    var res$2 = $i_react.useState($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(p).Lmyapp_components_Counter__f_initialCount);
    var _1$1 = res$2[0];
    var _2$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_Any$().toFunction1__sjs_js_Function1__F1(res$2[1]);
    var \u03b44$___1 = _1$1;
    var \u03b44$___2 = _2$1;
    var anotherCount = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(\u03b44$___1);
    var setAnotherCount = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_F1(\u03b44$___2);
    var handleMouseEnter = ((e) => {
      console.log($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(e._reactName));
      console.log($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(e.type));
      console.log(e);
    });
    var $x_9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
    var Event_this = $j_myapp$002e$002dModifier$0024package$0024.$m_Lmyapp_Modifier$package$().onMouseEnter__Lmyapp_Event();
    var f$proxy1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_Any$().toFunction1__sjs_js_Function1__F1(handleMouseEnter);
    var name = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(Event_this).Lmyapp_Event__f_name;
    var f$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_Any$().fromFunction1__F1__sjs_js_Function1(f$proxy1);
    var value = new $j_myapp$002e$002dCallback.$c_Lmyapp_Callback(f$3).Lmyapp_Callback__f_toJs;
    var $x_8 = new $j_myapp$002e$002dProp$002dModifier.$c_Lmyapp_PropModifier(name, value);
    var $x_6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
    var Event_this$2 = $j_myapp$002e$002dModifier$0024package$0024.$m_Lmyapp_Modifier$package$().onClick__Lmyapp_Event();
    var f$proxy2 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((e$2) => {
      console.log(e$2);
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(setCount).apply__O__O(((1 + count) | 0));
    }));
    var name$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(Event_this$2).Lmyapp_Event__f_name;
    var f$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_Any$().fromFunction1__F1__sjs_js_Function1(f$proxy2);
    var value$1 = new $j_myapp$002e$002dCallback.$c_Lmyapp_Callback(f$4).Lmyapp_Callback__f_toJs;
    var modifiers$proxy1 = $x_6.wrapRefArray__AO__sci_ArraySeq(new ($j_myapp$002e$002dModifier.$d_Lmyapp_Modifier.getArrayOf().constr)([new $j_myapp$002e$002dProp$002dModifier.$c_Lmyapp_PropModifier(name$1, value$1), $j_myapp$002e$002dModifier$0024.$m_Lmyapp_Modifier$().stringToModifier__T__Lmyapp_Modifier("+1")]));
    var fields = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.getArrayOf().constr)([]));
    var props = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields);
    var fields$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.getArrayOf().constr)([]));
    var style = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields$1);
    var children = [];
    var this$13 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(modifiers$proxy1);
    var it = this$13.iterator__sc_Iterator();
    while ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(it).hasNext__Z()) {
      var x0 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(it).next__O();
      var x$1 = $j_myapp$002e$002dModifier.$as_Lmyapp_Modifier(x0);
      matchResult6: {
        if (false) {
          var x19 = $j_myapp$002e$002dStyle$002dModifier.$as_Lmyapp_StyleModifier(x$1);
          var x21 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x19)._1__T();
          var x22 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x19)._2__T();
          style[x21] = x22;
          break matchResult6;
        }
        if ((x$1 instanceof $j_myapp$002e$002dProp$002dModifier.$c_Lmyapp_PropModifier)) {
          var x15 = $j_myapp$002e$002dProp$002dModifier.$as_Lmyapp_PropModifier(x$1);
          var this$17 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x15);
          var x17 = this$17.Lmyapp_PropModifier__f_name;
          var this$18 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x15);
          var x18 = this$18.Lmyapp_PropModifier__f_value;
          props[x17] = x18;
          break matchResult6;
        }
        if ((x$1 instanceof $j_myapp$002e$002dChild$002dModifier.$c_Lmyapp_ChildModifier)) {
          var x12 = $j_myapp$002e$002dChild$002dModifier.$as_Lmyapp_ChildModifier(x$1);
          var this$20 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x12);
          var x14 = this$20.Lmyapp_ChildModifier__f_child;
          $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(children.push(x14));
          break matchResult6;
        }
        throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1);
      }
    }
    if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(Object.keys(style).length) > 0)) {
      props.style = style;
    }
    var element = $j_myapp$002e$002dReact$0024.$m_Lmyapp_React$().createElement__sjs_js_Any__sjs_js_Object__sci_Seq__Lmyapp_ReactElement("button", props, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_IndexedSeq$().from__sc_IterableOnce__sci_IndexedSeq($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_sjs_js_WrappedArray__sjs_js_Array__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjs_js_WrappedArray(), children)));
    var $x_7 = new $j_myapp$002e$002dChild$002dModifier.$c_Lmyapp_ChildModifier(element);
    var $x_4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
    var Event_this$3 = $j_myapp$002e$002dModifier$0024package$0024.$m_Lmyapp_Modifier$package$().onClick__Lmyapp_Event();
    var f$proxy3 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((e$3) => {
      console.log(e$3);
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(setAnotherCount).apply__O__O(((1 + anotherCount) | 0));
    }));
    var name$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(Event_this$3).Lmyapp_Event__f_name;
    var f$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_Any$().fromFunction1__F1__sjs_js_Function1(f$proxy3);
    var value$2 = new $j_myapp$002e$002dCallback.$c_Lmyapp_Callback(f$5).Lmyapp_Callback__f_toJs;
    var modifiers$proxy2 = $x_4.wrapRefArray__AO__sci_ArraySeq(new ($j_myapp$002e$002dModifier.$d_Lmyapp_Modifier.getArrayOf().constr)([new $j_myapp$002e$002dProp$002dModifier.$c_Lmyapp_PropModifier(name$2, value$2), $j_myapp$002e$002dModifier$0024.$m_Lmyapp_Modifier$().stringToModifier__T__Lmyapp_Modifier("+1 another count")]));
    var fields$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.getArrayOf().constr)([]));
    var props$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields$2);
    var fields$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.getArrayOf().constr)([]));
    var style$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields$3);
    var children$3 = [];
    var this$32 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(modifiers$proxy2);
    var it$1 = this$32.iterator__sc_Iterator();
    while ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(it$1).hasNext__Z()) {
      var x0$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(it$1).next__O();
      var x$1$1 = $j_myapp$002e$002dModifier.$as_Lmyapp_Modifier(x0$1);
      matchResult7: {
        if (false) {
          var x31 = $j_myapp$002e$002dStyle$002dModifier.$as_Lmyapp_StyleModifier(x$1$1);
          var x33 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x31)._1__T();
          var x34 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x31)._2__T();
          style$3[x33] = x34;
          break matchResult7;
        }
        if ((x$1$1 instanceof $j_myapp$002e$002dProp$002dModifier.$c_Lmyapp_PropModifier)) {
          var x27 = $j_myapp$002e$002dProp$002dModifier.$as_Lmyapp_PropModifier(x$1$1);
          var this$36 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x27);
          var x29 = this$36.Lmyapp_PropModifier__f_name;
          var this$37 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x27);
          var x30 = this$37.Lmyapp_PropModifier__f_value;
          props$3[x29] = x30;
          break matchResult7;
        }
        if ((x$1$1 instanceof $j_myapp$002e$002dChild$002dModifier.$c_Lmyapp_ChildModifier)) {
          var x24 = $j_myapp$002e$002dChild$002dModifier.$as_Lmyapp_ChildModifier(x$1$1);
          var this$39 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x24);
          var x26 = this$39.Lmyapp_ChildModifier__f_child;
          $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(children$3.push(x26));
          break matchResult7;
        }
        throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1$1);
      }
    }
    if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(Object.keys(style$3).length) > 0)) {
      props$3.style = style$3;
    }
    var element$1 = $j_myapp$002e$002dReact$0024.$m_Lmyapp_React$().createElement__sjs_js_Any__sjs_js_Object__sci_Seq__Lmyapp_ReactElement("button", props$3, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_IndexedSeq$().from__sc_IterableOnce__sci_IndexedSeq($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_sjs_js_WrappedArray__sjs_js_Array__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjs_js_WrappedArray(), children$3)));
    var $x_5 = new $j_myapp$002e$002dChild$002dModifier.$c_Lmyapp_ChildModifier(element$1);
    var modifiers$proxy3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_myapp$002e$002dModifier.$d_Lmyapp_Modifier.getArrayOf().constr)([$j_myapp$002e$002dModifier$0024.$m_Lmyapp_Modifier$().stringToModifier__T__Lmyapp_Modifier("-")]));
    var fields$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.getArrayOf().constr)([]));
    var props$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields$4);
    var fields$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.getArrayOf().constr)([]));
    var style$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields$5);
    var children$5 = [];
    var this$49 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(modifiers$proxy3);
    var it$2 = this$49.iterator__sc_Iterator();
    while ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(it$2).hasNext__Z()) {
      var x0$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(it$2).next__O();
      var x$1$2 = $j_myapp$002e$002dModifier.$as_Lmyapp_Modifier(x0$2);
      matchResult8: {
        if (false) {
          var x43 = $j_myapp$002e$002dStyle$002dModifier.$as_Lmyapp_StyleModifier(x$1$2);
          var x45 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x43)._1__T();
          var x46 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x43)._2__T();
          style$5[x45] = x46;
          break matchResult8;
        }
        if ((x$1$2 instanceof $j_myapp$002e$002dProp$002dModifier.$c_Lmyapp_PropModifier)) {
          var x39 = $j_myapp$002e$002dProp$002dModifier.$as_Lmyapp_PropModifier(x$1$2);
          var this$53 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x39);
          var x41 = this$53.Lmyapp_PropModifier__f_name;
          var this$54 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x39);
          var x42 = this$54.Lmyapp_PropModifier__f_value;
          props$5[x41] = x42;
          break matchResult8;
        }
        if ((x$1$2 instanceof $j_myapp$002e$002dChild$002dModifier.$c_Lmyapp_ChildModifier)) {
          var x36 = $j_myapp$002e$002dChild$002dModifier.$as_Lmyapp_ChildModifier(x$1$2);
          var this$56 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x36);
          var x38 = this$56.Lmyapp_ChildModifier__f_child;
          $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(children$5.push(x38));
          break matchResult8;
        }
        throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1$2);
      }
    }
    if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(Object.keys(style$5).length) > 0)) {
      props$5.style = style$5;
    }
    var element$2 = $j_myapp$002e$002dReact$0024.$m_Lmyapp_React$().createElement__sjs_js_Any__sjs_js_Object__sci_Seq__Lmyapp_ReactElement("button", props$5, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_IndexedSeq$().from__sc_IterableOnce__sci_IndexedSeq($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_sjs_js_WrappedArray__sjs_js_Array__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjs_js_WrappedArray(), children$5)));
    var $x_3 = new $j_myapp$002e$002dChild$002dModifier.$c_Lmyapp_ChildModifier(element$2);
    var modifiers$proxy4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_myapp$002e$002dModifier.$d_Lmyapp_Modifier.getArrayOf().constr)([$j_myapp$002e$002dModifier$0024.$m_Lmyapp_Modifier$().stringToModifier__T__Lmyapp_Modifier("reset")]));
    var fields$6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.getArrayOf().constr)([]));
    var props$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields$6);
    var fields$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.getArrayOf().constr)([]));
    var style$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields$7);
    var children$7 = [];
    var this$66 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(modifiers$proxy4);
    var it$3 = this$66.iterator__sc_Iterator();
    while ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(it$3).hasNext__Z()) {
      var x0$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(it$3).next__O();
      var x$1$3 = $j_myapp$002e$002dModifier.$as_Lmyapp_Modifier(x0$3);
      matchResult9: {
        if (false) {
          var x55 = $j_myapp$002e$002dStyle$002dModifier.$as_Lmyapp_StyleModifier(x$1$3);
          var x57 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x55)._1__T();
          var x58 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x55)._2__T();
          style$7[x57] = x58;
          break matchResult9;
        }
        if ((x$1$3 instanceof $j_myapp$002e$002dProp$002dModifier.$c_Lmyapp_PropModifier)) {
          var x51 = $j_myapp$002e$002dProp$002dModifier.$as_Lmyapp_PropModifier(x$1$3);
          var this$70 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x51);
          var x53 = this$70.Lmyapp_PropModifier__f_name;
          var this$71 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x51);
          var x54 = this$71.Lmyapp_PropModifier__f_value;
          props$7[x53] = x54;
          break matchResult9;
        }
        if ((x$1$3 instanceof $j_myapp$002e$002dChild$002dModifier.$c_Lmyapp_ChildModifier)) {
          var x48 = $j_myapp$002e$002dChild$002dModifier.$as_Lmyapp_ChildModifier(x$1$3);
          var this$73 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x48);
          var x50 = this$73.Lmyapp_ChildModifier__f_child;
          $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(children$7.push(x50));
          break matchResult9;
        }
        throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1$3);
      }
    }
    if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(Object.keys(style$7).length) > 0)) {
      props$7.style = style$7;
    }
    var element$3 = $j_myapp$002e$002dReact$0024.$m_Lmyapp_React$().createElement__sjs_js_Any__sjs_js_Object__sci_Seq__Lmyapp_ReactElement("button", props$7, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_IndexedSeq$().from__sc_IterableOnce__sci_IndexedSeq($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_sjs_js_WrappedArray__sjs_js_Array__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjs_js_WrappedArray(), children$7)));
    var $x_2 = new $j_myapp$002e$002dChild$002dModifier.$c_Lmyapp_ChildModifier(element$3);
    var modifiers$proxy5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_myapp$002e$002dModifier.$d_Lmyapp_Modifier.getArrayOf().constr)([$j_myapp$002e$002dModifier$0024.$m_Lmyapp_Modifier$().stringToModifier__T__Lmyapp_Modifier(("Count: " + count))]));
    var fields$8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.getArrayOf().constr)([]));
    var props$9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields$8);
    var fields$9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.getArrayOf().constr)([]));
    var style$9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields$9);
    var children$9 = [];
    var this$83 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(modifiers$proxy5);
    var it$4 = this$83.iterator__sc_Iterator();
    while ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(it$4).hasNext__Z()) {
      var x0$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(it$4).next__O();
      var x$1$4 = $j_myapp$002e$002dModifier.$as_Lmyapp_Modifier(x0$4);
      matchResult10: {
        if (false) {
          var x67 = $j_myapp$002e$002dStyle$002dModifier.$as_Lmyapp_StyleModifier(x$1$4);
          var x69 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x67)._1__T();
          var x70 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x67)._2__T();
          style$9[x69] = x70;
          break matchResult10;
        }
        if ((x$1$4 instanceof $j_myapp$002e$002dProp$002dModifier.$c_Lmyapp_PropModifier)) {
          var x63 = $j_myapp$002e$002dProp$002dModifier.$as_Lmyapp_PropModifier(x$1$4);
          var this$87 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x63);
          var x65 = this$87.Lmyapp_PropModifier__f_name;
          var this$88 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x63);
          var x66 = this$88.Lmyapp_PropModifier__f_value;
          props$9[x65] = x66;
          break matchResult10;
        }
        if ((x$1$4 instanceof $j_myapp$002e$002dChild$002dModifier.$c_Lmyapp_ChildModifier)) {
          var x60 = $j_myapp$002e$002dChild$002dModifier.$as_Lmyapp_ChildModifier(x$1$4);
          var this$90 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x60);
          var x62 = this$90.Lmyapp_ChildModifier__f_child;
          $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(children$9.push(x62));
          break matchResult10;
        }
        throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1$4);
      }
    }
    if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(Object.keys(style$9).length) > 0)) {
      props$9.style = style$9;
    }
    var element$4 = $j_myapp$002e$002dReact$0024.$m_Lmyapp_React$().createElement__sjs_js_Any__sjs_js_Object__sci_Seq__Lmyapp_ReactElement("div", props$9, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_IndexedSeq$().from__sc_IterableOnce__sci_IndexedSeq($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_sjs_js_WrappedArray__sjs_js_Array__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjs_js_WrappedArray(), children$9)));
    var $x_1 = new $j_myapp$002e$002dChild$002dModifier.$c_Lmyapp_ChildModifier(element$4);
    var modifiers$proxy6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_myapp$002e$002dModifier.$d_Lmyapp_Modifier.getArrayOf().constr)([$j_myapp$002e$002dModifier$0024.$m_Lmyapp_Modifier$().stringToModifier__T__Lmyapp_Modifier(("Another Count: " + anotherCount))]));
    var fields$10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.getArrayOf().constr)([]));
    var props$11 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields$10);
    var fields$11 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.getArrayOf().constr)([]));
    var style$11 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields$11);
    var children$11 = [];
    var this$100 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(modifiers$proxy6);
    var it$5 = this$100.iterator__sc_Iterator();
    while ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(it$5).hasNext__Z()) {
      var x0$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(it$5).next__O();
      var x$1$5 = $j_myapp$002e$002dModifier.$as_Lmyapp_Modifier(x0$5);
      matchResult11: {
        if (false) {
          var x79 = $j_myapp$002e$002dStyle$002dModifier.$as_Lmyapp_StyleModifier(x$1$5);
          var x81 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x79)._1__T();
          var x82 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x79)._2__T();
          style$11[x81] = x82;
          break matchResult11;
        }
        if ((x$1$5 instanceof $j_myapp$002e$002dProp$002dModifier.$c_Lmyapp_PropModifier)) {
          var x75 = $j_myapp$002e$002dProp$002dModifier.$as_Lmyapp_PropModifier(x$1$5);
          var this$104 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x75);
          var x77 = this$104.Lmyapp_PropModifier__f_name;
          var this$105 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x75);
          var x78 = this$105.Lmyapp_PropModifier__f_value;
          props$11[x77] = x78;
          break matchResult11;
        }
        if ((x$1$5 instanceof $j_myapp$002e$002dChild$002dModifier.$c_Lmyapp_ChildModifier)) {
          var x72 = $j_myapp$002e$002dChild$002dModifier.$as_Lmyapp_ChildModifier(x$1$5);
          var this$107 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x72);
          var x74 = this$107.Lmyapp_ChildModifier__f_child;
          $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(children$11.push(x74));
          break matchResult11;
        }
        throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1$5);
      }
    }
    if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(Object.keys(style$11).length) > 0)) {
      props$11.style = style$11;
    }
    var element$5 = $j_myapp$002e$002dReact$0024.$m_Lmyapp_React$().createElement__sjs_js_Any__sjs_js_Object__sci_Seq__Lmyapp_ReactElement("div", props$11, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_IndexedSeq$().from__sc_IterableOnce__sci_IndexedSeq($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_sjs_js_WrappedArray__sjs_js_Array__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjs_js_WrappedArray(), children$11)));
    var modifiers$proxy7 = $x_9.wrapRefArray__AO__sci_ArraySeq(new ($j_myapp$002e$002dModifier.$d_Lmyapp_Modifier.getArrayOf().constr)([$x_8, $x_7, $x_5, $x_3, $x_2, $x_1, new $j_myapp$002e$002dChild$002dModifier.$c_Lmyapp_ChildModifier(element$5)]));
    var fields$12 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.getArrayOf().constr)([]));
    var props$13 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields$12);
    var fields$13 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.getArrayOf().constr)([]));
    var style$13 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields$13);
    var children$13 = [];
    var this$117 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(modifiers$proxy7);
    var it$6 = this$117.iterator__sc_Iterator();
    while ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(it$6).hasNext__Z()) {
      var x0$6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(it$6).next__O();
      var x$1$6 = $j_myapp$002e$002dModifier.$as_Lmyapp_Modifier(x0$6);
      matchResult12: {
        if (false) {
          var x91 = $j_myapp$002e$002dStyle$002dModifier.$as_Lmyapp_StyleModifier(x$1$6);
          var x93 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x91)._1__T();
          var x94 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x91)._2__T();
          style$13[x93] = x94;
          break matchResult12;
        }
        if ((x$1$6 instanceof $j_myapp$002e$002dProp$002dModifier.$c_Lmyapp_PropModifier)) {
          var x87 = $j_myapp$002e$002dProp$002dModifier.$as_Lmyapp_PropModifier(x$1$6);
          var this$121 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x87);
          var x89 = this$121.Lmyapp_PropModifier__f_name;
          var this$122 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x87);
          var x90 = this$122.Lmyapp_PropModifier__f_value;
          props$13[x89] = x90;
          break matchResult12;
        }
        if ((x$1$6 instanceof $j_myapp$002e$002dChild$002dModifier.$c_Lmyapp_ChildModifier)) {
          var x84 = $j_myapp$002e$002dChild$002dModifier.$as_Lmyapp_ChildModifier(x$1$6);
          var this$124 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x84);
          var x86 = this$124.Lmyapp_ChildModifier__f_child;
          $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(children$13.push(x86));
          break matchResult12;
        }
        throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1$6);
      }
    }
    if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(Object.keys(style$13).length) > 0)) {
      props$13.style = style$13;
    }
    return $j_myapp$002e$002dReact$0024.$m_Lmyapp_React$().createElement__sjs_js_Any__sjs_js_Object__sci_Seq__Lmyapp_ReactElement("div", props$13, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_IndexedSeq$().from__sc_IterableOnce__sci_IndexedSeq($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_sjs_js_WrappedArray__sjs_js_Array__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjs_js_WrappedArray(), children$13)));
  });
  f$6.displayName = displayName$proxy1;
  var renderFunc = ((props$1) => {
    var props$2 = $j_myapp$002ecomponents$002e$002dCounter.$as_Lmyapp_components_Counter(props$1);
    var $x_19 = $j_myapp$002e$002dReact$0024.$m_Lmyapp_React$();
    var f$13 = ((box$1) => {
      var p$1 = $j_myapp$002ecomponents$002e$002dCounter.$as_Lmyapp_components_Counter(box$1.a);
      var res$1 = $i_react.useState($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(p$1).Lmyapp_components_Counter__f_initialCount);
      var _1$2 = res$1[0];
      var _2$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_Any$().toFunction1__sjs_js_Function1__F1(res$1[1]);
      var \u03b42$$1___1 = _1$2;
      var \u03b42$$1___2 = _2$2;
      var count$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(\u03b42$$1___1);
      var setCount$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_F1(\u03b42$$1___2);
      var res$2$1 = $i_react.useState($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(p$1).Lmyapp_components_Counter__f_initialCount);
      var _1$3 = res$2$1[0];
      var _2$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_Any$().toFunction1__sjs_js_Function1__F1(res$2$1[1]);
      var \u03b44$$1___1 = _1$3;
      var \u03b44$$1___2 = _2$3;
      var anotherCount$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(\u03b44$$1___1);
      var setAnotherCount$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_F1(\u03b44$$1___2);
      var handleMouseEnter$1 = ((e$1) => {
        console.log($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(e$1._reactName));
        console.log($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(e$1.type));
        console.log(e$1);
      });
      var $x_18 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
      var Event_this$1 = $j_myapp$002e$002dModifier$0024package$0024.$m_Lmyapp_Modifier$package$().onMouseEnter__Lmyapp_Event();
      var f$proxy1$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_Any$().toFunction1__sjs_js_Function1__F1(handleMouseEnter$1);
      var name$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(Event_this$1).Lmyapp_Event__f_name;
      var f$10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_Any$().fromFunction1__F1__sjs_js_Function1(f$proxy1$1);
      var value$3 = new $j_myapp$002e$002dCallback.$c_Lmyapp_Callback(f$10).Lmyapp_Callback__f_toJs;
      var $x_17 = new $j_myapp$002e$002dProp$002dModifier.$c_Lmyapp_PropModifier(name$3, value$3);
      var $x_15 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
      var Event_this$2$1 = $j_myapp$002e$002dModifier$0024package$0024.$m_Lmyapp_Modifier$package$().onClick__Lmyapp_Event();
      var f$proxy2$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((e$2$1) => {
        console.log(e$2$1);
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(setCount$1).apply__O__O(((1 + count$1) | 0));
      }));
      var name$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(Event_this$2$1).Lmyapp_Event__f_name;
      var f$11 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_Any$().fromFunction1__F1__sjs_js_Function1(f$proxy2$1);
      var value$4 = new $j_myapp$002e$002dCallback.$c_Lmyapp_Callback(f$11).Lmyapp_Callback__f_toJs;
      var modifiers$proxy1$1 = $x_15.wrapRefArray__AO__sci_ArraySeq(new ($j_myapp$002e$002dModifier.$d_Lmyapp_Modifier.getArrayOf().constr)([new $j_myapp$002e$002dProp$002dModifier.$c_Lmyapp_PropModifier(name$4, value$4), $j_myapp$002e$002dModifier$0024.$m_Lmyapp_Modifier$().stringToModifier__T__Lmyapp_Modifier("+1")]));
      var fields$14 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.getArrayOf().constr)([]));
      var props$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields$14);
      var fields$15 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.getArrayOf().constr)([]));
      var style$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields$15);
      var children$1 = [];
      var this$142 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(modifiers$proxy1$1);
      var it$7 = this$142.iterator__sc_Iterator();
      while ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(it$7).hasNext__Z()) {
        var x0$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(it$7).next__O();
        var x$1$7 = $j_myapp$002e$002dModifier.$as_Lmyapp_Modifier(x0$7);
        matchResult15: {
          if (false) {
            var x109 = $j_myapp$002e$002dStyle$002dModifier.$as_Lmyapp_StyleModifier(x$1$7);
            var x111 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x109)._1__T();
            var x112 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x109)._2__T();
            style$1[x111] = x112;
            break matchResult15;
          }
          if ((x$1$7 instanceof $j_myapp$002e$002dProp$002dModifier.$c_Lmyapp_PropModifier)) {
            var x105 = $j_myapp$002e$002dProp$002dModifier.$as_Lmyapp_PropModifier(x$1$7);
            var this$146 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x105);
            var x107 = this$146.Lmyapp_PropModifier__f_name;
            var this$147 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x105);
            var x108 = this$147.Lmyapp_PropModifier__f_value;
            props$4[x107] = x108;
            break matchResult15;
          }
          if ((x$1$7 instanceof $j_myapp$002e$002dChild$002dModifier.$c_Lmyapp_ChildModifier)) {
            var x102 = $j_myapp$002e$002dChild$002dModifier.$as_Lmyapp_ChildModifier(x$1$7);
            var this$149 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x102);
            var x104 = this$149.Lmyapp_ChildModifier__f_child;
            $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(children$1.push(x104));
            break matchResult15;
          }
          throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1$7);
        }
      }
      if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(Object.keys(style$1).length) > 0)) {
        props$4.style = style$1;
      }
      var element$6 = $j_myapp$002e$002dReact$0024.$m_Lmyapp_React$().createElement__sjs_js_Any__sjs_js_Object__sci_Seq__Lmyapp_ReactElement("button", props$4, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_IndexedSeq$().from__sc_IterableOnce__sci_IndexedSeq($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_sjs_js_WrappedArray__sjs_js_Array__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjs_js_WrappedArray(), children$1)));
      var $x_16 = new $j_myapp$002e$002dChild$002dModifier.$c_Lmyapp_ChildModifier(element$6);
      var $x_13 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
      var Event_this$3$1 = $j_myapp$002e$002dModifier$0024package$0024.$m_Lmyapp_Modifier$package$().onClick__Lmyapp_Event();
      var f$proxy3$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((e$3$1) => {
        console.log(e$3$1);
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(setAnotherCount$1).apply__O__O(((1 + anotherCount$1) | 0));
      }));
      var name$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(Event_this$3$1).Lmyapp_Event__f_name;
      var f$12 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_Any$().fromFunction1__F1__sjs_js_Function1(f$proxy3$1);
      var value$5 = new $j_myapp$002e$002dCallback.$c_Lmyapp_Callback(f$12).Lmyapp_Callback__f_toJs;
      var modifiers$proxy2$1 = $x_13.wrapRefArray__AO__sci_ArraySeq(new ($j_myapp$002e$002dModifier.$d_Lmyapp_Modifier.getArrayOf().constr)([new $j_myapp$002e$002dProp$002dModifier.$c_Lmyapp_PropModifier(name$5, value$5), $j_myapp$002e$002dModifier$0024.$m_Lmyapp_Modifier$().stringToModifier__T__Lmyapp_Modifier("+1 another count")]));
      var fields$16 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.getArrayOf().constr)([]));
      var props$3$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields$16);
      var fields$17 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.getArrayOf().constr)([]));
      var style$3$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields$17);
      var children$3$1 = [];
      var this$161 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(modifiers$proxy2$1);
      var it$8 = this$161.iterator__sc_Iterator();
      while ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(it$8).hasNext__Z()) {
        var x0$8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(it$8).next__O();
        var x$1$8 = $j_myapp$002e$002dModifier.$as_Lmyapp_Modifier(x0$8);
        matchResult16: {
          if (false) {
            var x121 = $j_myapp$002e$002dStyle$002dModifier.$as_Lmyapp_StyleModifier(x$1$8);
            var x123 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x121)._1__T();
            var x124 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x121)._2__T();
            style$3$1[x123] = x124;
            break matchResult16;
          }
          if ((x$1$8 instanceof $j_myapp$002e$002dProp$002dModifier.$c_Lmyapp_PropModifier)) {
            var x117 = $j_myapp$002e$002dProp$002dModifier.$as_Lmyapp_PropModifier(x$1$8);
            var this$165 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x117);
            var x119 = this$165.Lmyapp_PropModifier__f_name;
            var this$166 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x117);
            var x120 = this$166.Lmyapp_PropModifier__f_value;
            props$3$1[x119] = x120;
            break matchResult16;
          }
          if ((x$1$8 instanceof $j_myapp$002e$002dChild$002dModifier.$c_Lmyapp_ChildModifier)) {
            var x114 = $j_myapp$002e$002dChild$002dModifier.$as_Lmyapp_ChildModifier(x$1$8);
            var this$168 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x114);
            var x116 = this$168.Lmyapp_ChildModifier__f_child;
            $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(children$3$1.push(x116));
            break matchResult16;
          }
          throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1$8);
        }
      }
      if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(Object.keys(style$3$1).length) > 0)) {
        props$3$1.style = style$3$1;
      }
      var element$7 = $j_myapp$002e$002dReact$0024.$m_Lmyapp_React$().createElement__sjs_js_Any__sjs_js_Object__sci_Seq__Lmyapp_ReactElement("button", props$3$1, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_IndexedSeq$().from__sc_IterableOnce__sci_IndexedSeq($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_sjs_js_WrappedArray__sjs_js_Array__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjs_js_WrappedArray(), children$3$1)));
      var $x_14 = new $j_myapp$002e$002dChild$002dModifier.$c_Lmyapp_ChildModifier(element$7);
      var modifiers$proxy3$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_myapp$002e$002dModifier.$d_Lmyapp_Modifier.getArrayOf().constr)([$j_myapp$002e$002dModifier$0024.$m_Lmyapp_Modifier$().stringToModifier__T__Lmyapp_Modifier("-")]));
      var fields$18 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.getArrayOf().constr)([]));
      var props$5$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields$18);
      var fields$19 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.getArrayOf().constr)([]));
      var style$5$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields$19);
      var children$5$1 = [];
      var this$178 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(modifiers$proxy3$1);
      var it$9 = this$178.iterator__sc_Iterator();
      while ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(it$9).hasNext__Z()) {
        var x0$9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(it$9).next__O();
        var x$1$9 = $j_myapp$002e$002dModifier.$as_Lmyapp_Modifier(x0$9);
        matchResult17: {
          if (false) {
            var x133 = $j_myapp$002e$002dStyle$002dModifier.$as_Lmyapp_StyleModifier(x$1$9);
            var x135 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x133)._1__T();
            var x136 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x133)._2__T();
            style$5$1[x135] = x136;
            break matchResult17;
          }
          if ((x$1$9 instanceof $j_myapp$002e$002dProp$002dModifier.$c_Lmyapp_PropModifier)) {
            var x129 = $j_myapp$002e$002dProp$002dModifier.$as_Lmyapp_PropModifier(x$1$9);
            var this$182 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x129);
            var x131 = this$182.Lmyapp_PropModifier__f_name;
            var this$183 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x129);
            var x132 = this$183.Lmyapp_PropModifier__f_value;
            props$5$1[x131] = x132;
            break matchResult17;
          }
          if ((x$1$9 instanceof $j_myapp$002e$002dChild$002dModifier.$c_Lmyapp_ChildModifier)) {
            var x126 = $j_myapp$002e$002dChild$002dModifier.$as_Lmyapp_ChildModifier(x$1$9);
            var this$185 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x126);
            var x128 = this$185.Lmyapp_ChildModifier__f_child;
            $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(children$5$1.push(x128));
            break matchResult17;
          }
          throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1$9);
        }
      }
      if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(Object.keys(style$5$1).length) > 0)) {
        props$5$1.style = style$5$1;
      }
      var element$8 = $j_myapp$002e$002dReact$0024.$m_Lmyapp_React$().createElement__sjs_js_Any__sjs_js_Object__sci_Seq__Lmyapp_ReactElement("button", props$5$1, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_IndexedSeq$().from__sc_IterableOnce__sci_IndexedSeq($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_sjs_js_WrappedArray__sjs_js_Array__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjs_js_WrappedArray(), children$5$1)));
      var $x_12 = new $j_myapp$002e$002dChild$002dModifier.$c_Lmyapp_ChildModifier(element$8);
      var modifiers$proxy4$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_myapp$002e$002dModifier.$d_Lmyapp_Modifier.getArrayOf().constr)([$j_myapp$002e$002dModifier$0024.$m_Lmyapp_Modifier$().stringToModifier__T__Lmyapp_Modifier("reset")]));
      var fields$20 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.getArrayOf().constr)([]));
      var props$7$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields$20);
      var fields$21 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.getArrayOf().constr)([]));
      var style$7$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields$21);
      var children$7$1 = [];
      var this$195 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(modifiers$proxy4$1);
      var it$10 = this$195.iterator__sc_Iterator();
      while ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(it$10).hasNext__Z()) {
        var x0$10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(it$10).next__O();
        var x$1$10 = $j_myapp$002e$002dModifier.$as_Lmyapp_Modifier(x0$10);
        matchResult18: {
          if (false) {
            var x145 = $j_myapp$002e$002dStyle$002dModifier.$as_Lmyapp_StyleModifier(x$1$10);
            var x147 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x145)._1__T();
            var x148 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x145)._2__T();
            style$7$1[x147] = x148;
            break matchResult18;
          }
          if ((x$1$10 instanceof $j_myapp$002e$002dProp$002dModifier.$c_Lmyapp_PropModifier)) {
            var x141 = $j_myapp$002e$002dProp$002dModifier.$as_Lmyapp_PropModifier(x$1$10);
            var this$199 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x141);
            var x143 = this$199.Lmyapp_PropModifier__f_name;
            var this$200 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x141);
            var x144 = this$200.Lmyapp_PropModifier__f_value;
            props$7$1[x143] = x144;
            break matchResult18;
          }
          if ((x$1$10 instanceof $j_myapp$002e$002dChild$002dModifier.$c_Lmyapp_ChildModifier)) {
            var x138 = $j_myapp$002e$002dChild$002dModifier.$as_Lmyapp_ChildModifier(x$1$10);
            var this$202 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x138);
            var x140 = this$202.Lmyapp_ChildModifier__f_child;
            $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(children$7$1.push(x140));
            break matchResult18;
          }
          throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1$10);
        }
      }
      if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(Object.keys(style$7$1).length) > 0)) {
        props$7$1.style = style$7$1;
      }
      var element$9 = $j_myapp$002e$002dReact$0024.$m_Lmyapp_React$().createElement__sjs_js_Any__sjs_js_Object__sci_Seq__Lmyapp_ReactElement("button", props$7$1, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_IndexedSeq$().from__sc_IterableOnce__sci_IndexedSeq($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_sjs_js_WrappedArray__sjs_js_Array__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjs_js_WrappedArray(), children$7$1)));
      var $x_11 = new $j_myapp$002e$002dChild$002dModifier.$c_Lmyapp_ChildModifier(element$9);
      var modifiers$proxy5$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_myapp$002e$002dModifier.$d_Lmyapp_Modifier.getArrayOf().constr)([$j_myapp$002e$002dModifier$0024.$m_Lmyapp_Modifier$().stringToModifier__T__Lmyapp_Modifier(("Count: " + count$1))]));
      var fields$22 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.getArrayOf().constr)([]));
      var props$9$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields$22);
      var fields$23 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.getArrayOf().constr)([]));
      var style$9$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields$23);
      var children$9$1 = [];
      var this$212 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(modifiers$proxy5$1);
      var it$11 = this$212.iterator__sc_Iterator();
      while ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(it$11).hasNext__Z()) {
        var x0$11 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(it$11).next__O();
        var x$1$11 = $j_myapp$002e$002dModifier.$as_Lmyapp_Modifier(x0$11);
        matchResult19: {
          if (false) {
            var x157 = $j_myapp$002e$002dStyle$002dModifier.$as_Lmyapp_StyleModifier(x$1$11);
            var x159 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x157)._1__T();
            var x160 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x157)._2__T();
            style$9$1[x159] = x160;
            break matchResult19;
          }
          if ((x$1$11 instanceof $j_myapp$002e$002dProp$002dModifier.$c_Lmyapp_PropModifier)) {
            var x153 = $j_myapp$002e$002dProp$002dModifier.$as_Lmyapp_PropModifier(x$1$11);
            var this$216 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x153);
            var x155 = this$216.Lmyapp_PropModifier__f_name;
            var this$217 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x153);
            var x156 = this$217.Lmyapp_PropModifier__f_value;
            props$9$1[x155] = x156;
            break matchResult19;
          }
          if ((x$1$11 instanceof $j_myapp$002e$002dChild$002dModifier.$c_Lmyapp_ChildModifier)) {
            var x150 = $j_myapp$002e$002dChild$002dModifier.$as_Lmyapp_ChildModifier(x$1$11);
            var this$219 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x150);
            var x152 = this$219.Lmyapp_ChildModifier__f_child;
            $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(children$9$1.push(x152));
            break matchResult19;
          }
          throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1$11);
        }
      }
      if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(Object.keys(style$9$1).length) > 0)) {
        props$9$1.style = style$9$1;
      }
      var element$10 = $j_myapp$002e$002dReact$0024.$m_Lmyapp_React$().createElement__sjs_js_Any__sjs_js_Object__sci_Seq__Lmyapp_ReactElement("div", props$9$1, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_IndexedSeq$().from__sc_IterableOnce__sci_IndexedSeq($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_sjs_js_WrappedArray__sjs_js_Array__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjs_js_WrappedArray(), children$9$1)));
      var $x_10 = new $j_myapp$002e$002dChild$002dModifier.$c_Lmyapp_ChildModifier(element$10);
      var modifiers$proxy6$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_myapp$002e$002dModifier.$d_Lmyapp_Modifier.getArrayOf().constr)([$j_myapp$002e$002dModifier$0024.$m_Lmyapp_Modifier$().stringToModifier__T__Lmyapp_Modifier(("Another Count: " + anotherCount$1))]));
      var fields$24 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.getArrayOf().constr)([]));
      var props$11$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields$24);
      var fields$25 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.getArrayOf().constr)([]));
      var style$11$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields$25);
      var children$11$1 = [];
      var this$229 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(modifiers$proxy6$1);
      var it$12 = this$229.iterator__sc_Iterator();
      while ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(it$12).hasNext__Z()) {
        var x0$12 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(it$12).next__O();
        var x$1$12 = $j_myapp$002e$002dModifier.$as_Lmyapp_Modifier(x0$12);
        matchResult20: {
          if (false) {
            var x169 = $j_myapp$002e$002dStyle$002dModifier.$as_Lmyapp_StyleModifier(x$1$12);
            var x171 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x169)._1__T();
            var x172 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x169)._2__T();
            style$11$1[x171] = x172;
            break matchResult20;
          }
          if ((x$1$12 instanceof $j_myapp$002e$002dProp$002dModifier.$c_Lmyapp_PropModifier)) {
            var x165 = $j_myapp$002e$002dProp$002dModifier.$as_Lmyapp_PropModifier(x$1$12);
            var this$233 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x165);
            var x167 = this$233.Lmyapp_PropModifier__f_name;
            var this$234 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x165);
            var x168 = this$234.Lmyapp_PropModifier__f_value;
            props$11$1[x167] = x168;
            break matchResult20;
          }
          if ((x$1$12 instanceof $j_myapp$002e$002dChild$002dModifier.$c_Lmyapp_ChildModifier)) {
            var x162 = $j_myapp$002e$002dChild$002dModifier.$as_Lmyapp_ChildModifier(x$1$12);
            var this$236 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x162);
            var x164 = this$236.Lmyapp_ChildModifier__f_child;
            $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(children$11$1.push(x164));
            break matchResult20;
          }
          throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1$12);
        }
      }
      if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(Object.keys(style$11$1).length) > 0)) {
        props$11$1.style = style$11$1;
      }
      var element$11 = $j_myapp$002e$002dReact$0024.$m_Lmyapp_React$().createElement__sjs_js_Any__sjs_js_Object__sci_Seq__Lmyapp_ReactElement("div", props$11$1, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_IndexedSeq$().from__sc_IterableOnce__sci_IndexedSeq($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_sjs_js_WrappedArray__sjs_js_Array__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjs_js_WrappedArray(), children$11$1)));
      var modifiers$proxy7$1 = $x_18.wrapRefArray__AO__sci_ArraySeq(new ($j_myapp$002e$002dModifier.$d_Lmyapp_Modifier.getArrayOf().constr)([$x_17, $x_16, $x_14, $x_12, $x_11, $x_10, new $j_myapp$002e$002dChild$002dModifier.$c_Lmyapp_ChildModifier(element$11)]));
      var fields$26 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.getArrayOf().constr)([]));
      var props$13$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields$26);
      var fields$27 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.getArrayOf().constr)([]));
      var style$13$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields$27);
      var children$13$1 = [];
      var this$246 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(modifiers$proxy7$1);
      var it$13 = this$246.iterator__sc_Iterator();
      while ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(it$13).hasNext__Z()) {
        var x0$13 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(it$13).next__O();
        var x$1$13 = $j_myapp$002e$002dModifier.$as_Lmyapp_Modifier(x0$13);
        matchResult21: {
          if (false) {
            var x181 = $j_myapp$002e$002dStyle$002dModifier.$as_Lmyapp_StyleModifier(x$1$13);
            var x183 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x181)._1__T();
            var x184 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x181)._2__T();
            style$13$1[x183] = x184;
            break matchResult21;
          }
          if ((x$1$13 instanceof $j_myapp$002e$002dProp$002dModifier.$c_Lmyapp_PropModifier)) {
            var x177 = $j_myapp$002e$002dProp$002dModifier.$as_Lmyapp_PropModifier(x$1$13);
            var this$250 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x177);
            var x179 = this$250.Lmyapp_PropModifier__f_name;
            var this$251 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x177);
            var x180 = this$251.Lmyapp_PropModifier__f_value;
            props$13$1[x179] = x180;
            break matchResult21;
          }
          if ((x$1$13 instanceof $j_myapp$002e$002dChild$002dModifier.$c_Lmyapp_ChildModifier)) {
            var x174 = $j_myapp$002e$002dChild$002dModifier.$as_Lmyapp_ChildModifier(x$1$13);
            var this$253 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x174);
            var x176 = this$253.Lmyapp_ChildModifier__f_child;
            $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(children$13$1.push(x176));
            break matchResult21;
          }
          throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1$13);
        }
      }
      if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(Object.keys(style$13$1).length) > 0)) {
        props$13$1.style = style$13$1;
      }
      return $j_myapp$002e$002dReact$0024.$m_Lmyapp_React$().createElement__sjs_js_Any__sjs_js_Object__sci_Seq__Lmyapp_ReactElement("div", props$13$1, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_IndexedSeq$().from__sc_IterableOnce__sci_IndexedSeq($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_sjs_js_WrappedArray__sjs_js_Array__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjs_js_WrappedArray(), children$13$1)));
    });
    f$13.displayName = displayName$proxy1;
    var fields$28 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.getArrayOf().constr)([new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("a", props$2)]));
    return $x_19.createElement__sjs_js_Any__sjs_js_Object__sci_Seq__Lmyapp_ReactElement(f$13, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields$28), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_sjs_js_Any.getArrayOf().constr)([])));
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
