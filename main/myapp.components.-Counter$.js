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
  var f$4 = ((box) => {
    var p = $j_myapp$002ecomponents$002e$002dCounter.$as_Lmyapp_components_Counter(box.a);
    var res = $i_react.useState($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(p).Lmyapp_components_Counter__f_initialCount);
    var _1 = res[0];
    var _2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_Any$().toFunction1__sjs_js_Function1__F1(res[1]);
    var \u03b42$___1 = _1;
    var \u03b42$___2 = _2;
    var count = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(\u03b42$___1);
    var setCount = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_F1(\u03b42$___2);
    var f = (() => {
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(setCount).apply__O__O(((1 + count) | 0));
    });
    var increase = new $j_myapp$002e$002dCallback.$c_Lmyapp_Callback(f);
    var f$1 = (() => {
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(setCount).apply__O__O((((-1) + count) | 0));
    });
    var decrease = new $j_myapp$002e$002dCallback.$c_Lmyapp_Callback(f$1);
    var f$2 = (() => {
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(setCount).apply__O__O($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(p).Lmyapp_components_Counter__f_initialCount);
    });
    var reset = new $j_myapp$002e$002dCallback.$c_Lmyapp_Callback(f$2);
    var f$3 = (() => {
      console.log("Mouse entered!");
    });
    var logEnter = new $j_myapp$002e$002dCallback.$c_Lmyapp_Callback(f$3);
    var $x_8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
    var Event_this = $j_myapp$002e$002dModifier$0024package$0024.$m_Lmyapp_Modifier$package$().Lmyapp_Modifier$package$__f_onMouseEnter;
    var name = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(Event_this).Lmyapp_Event__f_name;
    var value = logEnter.Lmyapp_Callback__f_toJs;
    var $x_7 = new $j_myapp$002e$002dProp$002dModifier.$c_Lmyapp_PropModifier(name, value);
    var $x_5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
    var Event_this$2 = $j_myapp$002e$002dModifier$0024package$0024.$m_Lmyapp_Modifier$package$().Lmyapp_Modifier$package$__f_onClick;
    var name$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(Event_this$2).Lmyapp_Event__f_name;
    var value$1 = increase.Lmyapp_Callback__f_toJs;
    var modifiers$proxy1 = $x_5.wrapRefArray__AO__sci_ArraySeq(new ($j_myapp$002e$002dModifier.$d_Lmyapp_Modifier.getArrayOf().constr)([new $j_myapp$002e$002dProp$002dModifier.$c_Lmyapp_PropModifier(name$1, value$1), $j_myapp$002e$002dModifier$0024.$m_Lmyapp_Modifier$().stringToModifier__T__Lmyapp_Modifier("+")]));
    var fields = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.getArrayOf().constr)([]));
    var props = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields);
    var fields$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.getArrayOf().constr)([]));
    var style = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields$1);
    var children = [];
    var this$11 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(modifiers$proxy1);
    var it = this$11.iterator__sc_Iterator();
    while ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(it).hasNext__Z()) {
      var x0 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(it).next__O();
      var x$1 = $j_myapp$002e$002dModifier.$as_Lmyapp_Modifier(x0);
      matchResult5: {
        if (false) {
          var x16 = $j_myapp$002e$002dStyle$002dModifier.$as_Lmyapp_StyleModifier(x$1);
          var x18 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x16)._1__T();
          var x19 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x16)._2__T();
          style[x18] = x19;
          break matchResult5;
        }
        if ((x$1 instanceof $j_myapp$002e$002dProp$002dModifier.$c_Lmyapp_PropModifier)) {
          var x12 = $j_myapp$002e$002dProp$002dModifier.$as_Lmyapp_PropModifier(x$1);
          var this$15 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x12);
          var x14 = this$15.Lmyapp_PropModifier__f_name;
          var this$16 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x12);
          var x15 = this$16.Lmyapp_PropModifier__f_value;
          props[x14] = x15;
          break matchResult5;
        }
        if ((x$1 instanceof $j_myapp$002e$002dChild$002dModifier.$c_Lmyapp_ChildModifier)) {
          var x9 = $j_myapp$002e$002dChild$002dModifier.$as_Lmyapp_ChildModifier(x$1);
          var this$18 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x9);
          var x11 = this$18.Lmyapp_ChildModifier__f_child;
          $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(children.push(x11));
          break matchResult5;
        }
        throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1);
      }
    }
    if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(Object.keys(style).length) > 0)) {
      props.style = style;
    }
    var element = $j_myapp$002e$002dReact$0024.$m_Lmyapp_React$().createElement__sjs_js_Any__sjs_js_Object__sci_Seq__Lmyapp_ReactElement("button", props, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_IndexedSeq$().from__sc_IterableOnce__sci_IndexedSeq($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_sjs_js_WrappedArray__sjs_js_Array__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjs_js_WrappedArray(), children)));
    var $x_6 = new $j_myapp$002e$002dChild$002dModifier.$c_Lmyapp_ChildModifier(element);
    var $x_3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
    var Event_this$3 = $j_myapp$002e$002dModifier$0024package$0024.$m_Lmyapp_Modifier$package$().Lmyapp_Modifier$package$__f_onClick;
    var name$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(Event_this$3).Lmyapp_Event__f_name;
    var value$2 = decrease.Lmyapp_Callback__f_toJs;
    var modifiers$proxy2 = $x_3.wrapRefArray__AO__sci_ArraySeq(new ($j_myapp$002e$002dModifier.$d_Lmyapp_Modifier.getArrayOf().constr)([new $j_myapp$002e$002dProp$002dModifier.$c_Lmyapp_PropModifier(name$2, value$2), $j_myapp$002e$002dModifier$0024.$m_Lmyapp_Modifier$().stringToModifier__T__Lmyapp_Modifier("-")]));
    var fields$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.getArrayOf().constr)([]));
    var props$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields$2);
    var fields$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.getArrayOf().constr)([]));
    var style$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields$3);
    var children$3 = [];
    var this$29 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(modifiers$proxy2);
    var it$1 = this$29.iterator__sc_Iterator();
    while ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(it$1).hasNext__Z()) {
      var x0$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(it$1).next__O();
      var x$1$1 = $j_myapp$002e$002dModifier.$as_Lmyapp_Modifier(x0$1);
      matchResult6: {
        if (false) {
          var x28 = $j_myapp$002e$002dStyle$002dModifier.$as_Lmyapp_StyleModifier(x$1$1);
          var x30 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x28)._1__T();
          var x31 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x28)._2__T();
          style$3[x30] = x31;
          break matchResult6;
        }
        if ((x$1$1 instanceof $j_myapp$002e$002dProp$002dModifier.$c_Lmyapp_PropModifier)) {
          var x24 = $j_myapp$002e$002dProp$002dModifier.$as_Lmyapp_PropModifier(x$1$1);
          var this$33 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x24);
          var x26 = this$33.Lmyapp_PropModifier__f_name;
          var this$34 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x24);
          var x27 = this$34.Lmyapp_PropModifier__f_value;
          props$3[x26] = x27;
          break matchResult6;
        }
        if ((x$1$1 instanceof $j_myapp$002e$002dChild$002dModifier.$c_Lmyapp_ChildModifier)) {
          var x21 = $j_myapp$002e$002dChild$002dModifier.$as_Lmyapp_ChildModifier(x$1$1);
          var this$36 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x21);
          var x23 = this$36.Lmyapp_ChildModifier__f_child;
          $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(children$3.push(x23));
          break matchResult6;
        }
        throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1$1);
      }
    }
    if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(Object.keys(style$3).length) > 0)) {
      props$3.style = style$3;
    }
    var element$1 = $j_myapp$002e$002dReact$0024.$m_Lmyapp_React$().createElement__sjs_js_Any__sjs_js_Object__sci_Seq__Lmyapp_ReactElement("button", props$3, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_IndexedSeq$().from__sc_IterableOnce__sci_IndexedSeq($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_sjs_js_WrappedArray__sjs_js_Array__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjs_js_WrappedArray(), children$3)));
    var $x_4 = new $j_myapp$002e$002dChild$002dModifier.$c_Lmyapp_ChildModifier(element$1);
    var $x_1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
    var Event_this$4 = $j_myapp$002e$002dModifier$0024package$0024.$m_Lmyapp_Modifier$package$().Lmyapp_Modifier$package$__f_onClick;
    var name$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(Event_this$4).Lmyapp_Event__f_name;
    var value$3 = reset.Lmyapp_Callback__f_toJs;
    var modifiers$proxy3 = $x_1.wrapRefArray__AO__sci_ArraySeq(new ($j_myapp$002e$002dModifier.$d_Lmyapp_Modifier.getArrayOf().constr)([new $j_myapp$002e$002dProp$002dModifier.$c_Lmyapp_PropModifier(name$3, value$3), $j_myapp$002e$002dModifier$0024.$m_Lmyapp_Modifier$().stringToModifier__T__Lmyapp_Modifier("reset")]));
    var fields$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.getArrayOf().constr)([]));
    var props$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields$4);
    var fields$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.getArrayOf().constr)([]));
    var style$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields$5);
    var children$5 = [];
    var this$47 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(modifiers$proxy3);
    var it$2 = this$47.iterator__sc_Iterator();
    while ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(it$2).hasNext__Z()) {
      var x0$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(it$2).next__O();
      var x$1$2 = $j_myapp$002e$002dModifier.$as_Lmyapp_Modifier(x0$2);
      matchResult7: {
        if (false) {
          var x40 = $j_myapp$002e$002dStyle$002dModifier.$as_Lmyapp_StyleModifier(x$1$2);
          var x42 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x40)._1__T();
          var x43 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x40)._2__T();
          style$5[x42] = x43;
          break matchResult7;
        }
        if ((x$1$2 instanceof $j_myapp$002e$002dProp$002dModifier.$c_Lmyapp_PropModifier)) {
          var x36 = $j_myapp$002e$002dProp$002dModifier.$as_Lmyapp_PropModifier(x$1$2);
          var this$51 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x36);
          var x38 = this$51.Lmyapp_PropModifier__f_name;
          var this$52 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x36);
          var x39 = this$52.Lmyapp_PropModifier__f_value;
          props$5[x38] = x39;
          break matchResult7;
        }
        if ((x$1$2 instanceof $j_myapp$002e$002dChild$002dModifier.$c_Lmyapp_ChildModifier)) {
          var x33 = $j_myapp$002e$002dChild$002dModifier.$as_Lmyapp_ChildModifier(x$1$2);
          var this$54 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x33);
          var x35 = this$54.Lmyapp_ChildModifier__f_child;
          $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(children$5.push(x35));
          break matchResult7;
        }
        throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1$2);
      }
    }
    if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(Object.keys(style$5).length) > 0)) {
      props$5.style = style$5;
    }
    var element$2 = $j_myapp$002e$002dReact$0024.$m_Lmyapp_React$().createElement__sjs_js_Any__sjs_js_Object__sci_Seq__Lmyapp_ReactElement("button", props$5, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_IndexedSeq$().from__sc_IterableOnce__sci_IndexedSeq($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_sjs_js_WrappedArray__sjs_js_Array__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjs_js_WrappedArray(), children$5)));
    var $x_2 = new $j_myapp$002e$002dChild$002dModifier.$c_Lmyapp_ChildModifier(element$2);
    var modifiers$proxy4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_myapp$002e$002dModifier.$d_Lmyapp_Modifier.getArrayOf().constr)([$j_myapp$002e$002dModifier$0024.$m_Lmyapp_Modifier$().stringToModifier__T__Lmyapp_Modifier(("Count: " + count))]));
    var fields$6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.getArrayOf().constr)([]));
    var props$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields$6);
    var fields$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.getArrayOf().constr)([]));
    var style$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields$7);
    var children$7 = [];
    var this$64 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(modifiers$proxy4);
    var it$3 = this$64.iterator__sc_Iterator();
    while ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(it$3).hasNext__Z()) {
      var x0$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(it$3).next__O();
      var x$1$3 = $j_myapp$002e$002dModifier.$as_Lmyapp_Modifier(x0$3);
      matchResult8: {
        if (false) {
          var x52 = $j_myapp$002e$002dStyle$002dModifier.$as_Lmyapp_StyleModifier(x$1$3);
          var x54 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x52)._1__T();
          var x55 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x52)._2__T();
          style$7[x54] = x55;
          break matchResult8;
        }
        if ((x$1$3 instanceof $j_myapp$002e$002dProp$002dModifier.$c_Lmyapp_PropModifier)) {
          var x48 = $j_myapp$002e$002dProp$002dModifier.$as_Lmyapp_PropModifier(x$1$3);
          var this$68 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x48);
          var x50 = this$68.Lmyapp_PropModifier__f_name;
          var this$69 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x48);
          var x51 = this$69.Lmyapp_PropModifier__f_value;
          props$7[x50] = x51;
          break matchResult8;
        }
        if ((x$1$3 instanceof $j_myapp$002e$002dChild$002dModifier.$c_Lmyapp_ChildModifier)) {
          var x45 = $j_myapp$002e$002dChild$002dModifier.$as_Lmyapp_ChildModifier(x$1$3);
          var this$71 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x45);
          var x47 = this$71.Lmyapp_ChildModifier__f_child;
          $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(children$7.push(x47));
          break matchResult8;
        }
        throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1$3);
      }
    }
    if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(Object.keys(style$7).length) > 0)) {
      props$7.style = style$7;
    }
    var element$3 = $j_myapp$002e$002dReact$0024.$m_Lmyapp_React$().createElement__sjs_js_Any__sjs_js_Object__sci_Seq__Lmyapp_ReactElement("div", props$7, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_IndexedSeq$().from__sc_IterableOnce__sci_IndexedSeq($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_sjs_js_WrappedArray__sjs_js_Array__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjs_js_WrappedArray(), children$7)));
    var modifiers$proxy5 = $x_8.wrapRefArray__AO__sci_ArraySeq(new ($j_myapp$002e$002dModifier.$d_Lmyapp_Modifier.getArrayOf().constr)([$x_7, $x_6, $x_4, $x_2, new $j_myapp$002e$002dChild$002dModifier.$c_Lmyapp_ChildModifier(element$3)]));
    var fields$8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.getArrayOf().constr)([]));
    var props$9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields$8);
    var fields$9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.getArrayOf().constr)([]));
    var style$9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields$9);
    var children$9 = [];
    var this$81 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(modifiers$proxy5);
    var it$4 = this$81.iterator__sc_Iterator();
    while ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(it$4).hasNext__Z()) {
      var x0$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(it$4).next__O();
      var x$1$4 = $j_myapp$002e$002dModifier.$as_Lmyapp_Modifier(x0$4);
      matchResult9: {
        if (false) {
          var x64 = $j_myapp$002e$002dStyle$002dModifier.$as_Lmyapp_StyleModifier(x$1$4);
          var x66 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x64)._1__T();
          var x67 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x64)._2__T();
          style$9[x66] = x67;
          break matchResult9;
        }
        if ((x$1$4 instanceof $j_myapp$002e$002dProp$002dModifier.$c_Lmyapp_PropModifier)) {
          var x60 = $j_myapp$002e$002dProp$002dModifier.$as_Lmyapp_PropModifier(x$1$4);
          var this$85 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x60);
          var x62 = this$85.Lmyapp_PropModifier__f_name;
          var this$86 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x60);
          var x63 = this$86.Lmyapp_PropModifier__f_value;
          props$9[x62] = x63;
          break matchResult9;
        }
        if ((x$1$4 instanceof $j_myapp$002e$002dChild$002dModifier.$c_Lmyapp_ChildModifier)) {
          var x57 = $j_myapp$002e$002dChild$002dModifier.$as_Lmyapp_ChildModifier(x$1$4);
          var this$88 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x57);
          var x59 = this$88.Lmyapp_ChildModifier__f_child;
          $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(children$9.push(x59));
          break matchResult9;
        }
        throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1$4);
      }
    }
    if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(Object.keys(style$9).length) > 0)) {
      props$9.style = style$9;
    }
    return $j_myapp$002e$002dReact$0024.$m_Lmyapp_React$().createElement__sjs_js_Any__sjs_js_Object__sci_Seq__Lmyapp_ReactElement("div", props$9, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_IndexedSeq$().from__sc_IterableOnce__sci_IndexedSeq($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_sjs_js_WrappedArray__sjs_js_Array__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjs_js_WrappedArray(), children$9)));
  });
  f$4.displayName = "Counter";
  var renderFunc = ((props$1) => {
    var props$2 = $j_myapp$002ecomponents$002e$002dCounter.$as_Lmyapp_components_Counter(props$1);
    var $x_17 = $j_myapp$002e$002dReact$0024.$m_Lmyapp_React$();
    var f$9 = ((box$1) => {
      var p$1 = $j_myapp$002ecomponents$002e$002dCounter.$as_Lmyapp_components_Counter(box$1.a);
      var res$1 = $i_react.useState($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(p$1).Lmyapp_components_Counter__f_initialCount);
      var _1$1 = res$1[0];
      var _2$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_Any$().toFunction1__sjs_js_Function1__F1(res$1[1]);
      var \u03b42$$1___1 = _1$1;
      var \u03b42$$1___2 = _2$1;
      var count$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(\u03b42$$1___1);
      var setCount$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_F1(\u03b42$$1___2);
      var f$5 = (() => {
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(setCount$1).apply__O__O(((1 + count$1) | 0));
      });
      var increase$1 = new $j_myapp$002e$002dCallback.$c_Lmyapp_Callback(f$5);
      var f$6 = (() => {
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(setCount$1).apply__O__O((((-1) + count$1) | 0));
      });
      var decrease$1 = new $j_myapp$002e$002dCallback.$c_Lmyapp_Callback(f$6);
      var f$7 = (() => {
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(setCount$1).apply__O__O($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(p$1).Lmyapp_components_Counter__f_initialCount);
      });
      var reset$1 = new $j_myapp$002e$002dCallback.$c_Lmyapp_Callback(f$7);
      var f$8 = (() => {
        console.log("Mouse entered!");
      });
      var logEnter$1 = new $j_myapp$002e$002dCallback.$c_Lmyapp_Callback(f$8);
      var $x_16 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
      var Event_this$1 = $j_myapp$002e$002dModifier$0024package$0024.$m_Lmyapp_Modifier$package$().Lmyapp_Modifier$package$__f_onMouseEnter;
      var name$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(Event_this$1).Lmyapp_Event__f_name;
      var value$4 = logEnter$1.Lmyapp_Callback__f_toJs;
      var $x_15 = new $j_myapp$002e$002dProp$002dModifier.$c_Lmyapp_PropModifier(name$4, value$4);
      var $x_13 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
      var Event_this$2$1 = $j_myapp$002e$002dModifier$0024package$0024.$m_Lmyapp_Modifier$package$().Lmyapp_Modifier$package$__f_onClick;
      var name$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(Event_this$2$1).Lmyapp_Event__f_name;
      var value$5 = increase$1.Lmyapp_Callback__f_toJs;
      var modifiers$proxy1$1 = $x_13.wrapRefArray__AO__sci_ArraySeq(new ($j_myapp$002e$002dModifier.$d_Lmyapp_Modifier.getArrayOf().constr)([new $j_myapp$002e$002dProp$002dModifier.$c_Lmyapp_PropModifier(name$5, value$5), $j_myapp$002e$002dModifier$0024.$m_Lmyapp_Modifier$().stringToModifier__T__Lmyapp_Modifier("+")]));
      var fields$10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.getArrayOf().constr)([]));
      var props$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields$10);
      var fields$11 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.getArrayOf().constr)([]));
      var style$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields$11);
      var children$1 = [];
      var this$104 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(modifiers$proxy1$1);
      var it$5 = this$104.iterator__sc_Iterator();
      while ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(it$5).hasNext__Z()) {
        var x0$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(it$5).next__O();
        var x$1$5 = $j_myapp$002e$002dModifier.$as_Lmyapp_Modifier(x0$5);
        matchResult11: {
          if (false) {
            var x79 = $j_myapp$002e$002dStyle$002dModifier.$as_Lmyapp_StyleModifier(x$1$5);
            var x81 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x79)._1__T();
            var x82 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x79)._2__T();
            style$1[x81] = x82;
            break matchResult11;
          }
          if ((x$1$5 instanceof $j_myapp$002e$002dProp$002dModifier.$c_Lmyapp_PropModifier)) {
            var x75 = $j_myapp$002e$002dProp$002dModifier.$as_Lmyapp_PropModifier(x$1$5);
            var this$108 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x75);
            var x77 = this$108.Lmyapp_PropModifier__f_name;
            var this$109 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x75);
            var x78 = this$109.Lmyapp_PropModifier__f_value;
            props$4[x77] = x78;
            break matchResult11;
          }
          if ((x$1$5 instanceof $j_myapp$002e$002dChild$002dModifier.$c_Lmyapp_ChildModifier)) {
            var x72 = $j_myapp$002e$002dChild$002dModifier.$as_Lmyapp_ChildModifier(x$1$5);
            var this$111 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x72);
            var x74 = this$111.Lmyapp_ChildModifier__f_child;
            $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(children$1.push(x74));
            break matchResult11;
          }
          throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1$5);
        }
      }
      if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(Object.keys(style$1).length) > 0)) {
        props$4.style = style$1;
      }
      var element$4 = $j_myapp$002e$002dReact$0024.$m_Lmyapp_React$().createElement__sjs_js_Any__sjs_js_Object__sci_Seq__Lmyapp_ReactElement("button", props$4, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_IndexedSeq$().from__sc_IterableOnce__sci_IndexedSeq($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_sjs_js_WrappedArray__sjs_js_Array__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjs_js_WrappedArray(), children$1)));
      var $x_14 = new $j_myapp$002e$002dChild$002dModifier.$c_Lmyapp_ChildModifier(element$4);
      var $x_11 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
      var Event_this$3$1 = $j_myapp$002e$002dModifier$0024package$0024.$m_Lmyapp_Modifier$package$().Lmyapp_Modifier$package$__f_onClick;
      var name$6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(Event_this$3$1).Lmyapp_Event__f_name;
      var value$6 = decrease$1.Lmyapp_Callback__f_toJs;
      var modifiers$proxy2$1 = $x_11.wrapRefArray__AO__sci_ArraySeq(new ($j_myapp$002e$002dModifier.$d_Lmyapp_Modifier.getArrayOf().constr)([new $j_myapp$002e$002dProp$002dModifier.$c_Lmyapp_PropModifier(name$6, value$6), $j_myapp$002e$002dModifier$0024.$m_Lmyapp_Modifier$().stringToModifier__T__Lmyapp_Modifier("-")]));
      var fields$12 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.getArrayOf().constr)([]));
      var props$3$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields$12);
      var fields$13 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.getArrayOf().constr)([]));
      var style$3$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields$13);
      var children$3$1 = [];
      var this$122 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(modifiers$proxy2$1);
      var it$6 = this$122.iterator__sc_Iterator();
      while ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(it$6).hasNext__Z()) {
        var x0$6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(it$6).next__O();
        var x$1$6 = $j_myapp$002e$002dModifier.$as_Lmyapp_Modifier(x0$6);
        matchResult12: {
          if (false) {
            var x91 = $j_myapp$002e$002dStyle$002dModifier.$as_Lmyapp_StyleModifier(x$1$6);
            var x93 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x91)._1__T();
            var x94 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x91)._2__T();
            style$3$1[x93] = x94;
            break matchResult12;
          }
          if ((x$1$6 instanceof $j_myapp$002e$002dProp$002dModifier.$c_Lmyapp_PropModifier)) {
            var x87 = $j_myapp$002e$002dProp$002dModifier.$as_Lmyapp_PropModifier(x$1$6);
            var this$126 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x87);
            var x89 = this$126.Lmyapp_PropModifier__f_name;
            var this$127 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x87);
            var x90 = this$127.Lmyapp_PropModifier__f_value;
            props$3$1[x89] = x90;
            break matchResult12;
          }
          if ((x$1$6 instanceof $j_myapp$002e$002dChild$002dModifier.$c_Lmyapp_ChildModifier)) {
            var x84 = $j_myapp$002e$002dChild$002dModifier.$as_Lmyapp_ChildModifier(x$1$6);
            var this$129 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x84);
            var x86 = this$129.Lmyapp_ChildModifier__f_child;
            $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(children$3$1.push(x86));
            break matchResult12;
          }
          throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1$6);
        }
      }
      if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(Object.keys(style$3$1).length) > 0)) {
        props$3$1.style = style$3$1;
      }
      var element$5 = $j_myapp$002e$002dReact$0024.$m_Lmyapp_React$().createElement__sjs_js_Any__sjs_js_Object__sci_Seq__Lmyapp_ReactElement("button", props$3$1, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_IndexedSeq$().from__sc_IterableOnce__sci_IndexedSeq($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_sjs_js_WrappedArray__sjs_js_Array__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjs_js_WrappedArray(), children$3$1)));
      var $x_12 = new $j_myapp$002e$002dChild$002dModifier.$c_Lmyapp_ChildModifier(element$5);
      var $x_9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
      var Event_this$4$1 = $j_myapp$002e$002dModifier$0024package$0024.$m_Lmyapp_Modifier$package$().Lmyapp_Modifier$package$__f_onClick;
      var name$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(Event_this$4$1).Lmyapp_Event__f_name;
      var value$7 = reset$1.Lmyapp_Callback__f_toJs;
      var modifiers$proxy3$1 = $x_9.wrapRefArray__AO__sci_ArraySeq(new ($j_myapp$002e$002dModifier.$d_Lmyapp_Modifier.getArrayOf().constr)([new $j_myapp$002e$002dProp$002dModifier.$c_Lmyapp_PropModifier(name$7, value$7), $j_myapp$002e$002dModifier$0024.$m_Lmyapp_Modifier$().stringToModifier__T__Lmyapp_Modifier("reset")]));
      var fields$14 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.getArrayOf().constr)([]));
      var props$5$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields$14);
      var fields$15 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.getArrayOf().constr)([]));
      var style$5$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields$15);
      var children$5$1 = [];
      var this$140 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(modifiers$proxy3$1);
      var it$7 = this$140.iterator__sc_Iterator();
      while ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(it$7).hasNext__Z()) {
        var x0$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(it$7).next__O();
        var x$1$7 = $j_myapp$002e$002dModifier.$as_Lmyapp_Modifier(x0$7);
        matchResult13: {
          if (false) {
            var x103 = $j_myapp$002e$002dStyle$002dModifier.$as_Lmyapp_StyleModifier(x$1$7);
            var x105 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x103)._1__T();
            var x106 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x103)._2__T();
            style$5$1[x105] = x106;
            break matchResult13;
          }
          if ((x$1$7 instanceof $j_myapp$002e$002dProp$002dModifier.$c_Lmyapp_PropModifier)) {
            var x99 = $j_myapp$002e$002dProp$002dModifier.$as_Lmyapp_PropModifier(x$1$7);
            var this$144 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x99);
            var x101 = this$144.Lmyapp_PropModifier__f_name;
            var this$145 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x99);
            var x102 = this$145.Lmyapp_PropModifier__f_value;
            props$5$1[x101] = x102;
            break matchResult13;
          }
          if ((x$1$7 instanceof $j_myapp$002e$002dChild$002dModifier.$c_Lmyapp_ChildModifier)) {
            var x96 = $j_myapp$002e$002dChild$002dModifier.$as_Lmyapp_ChildModifier(x$1$7);
            var this$147 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x96);
            var x98 = this$147.Lmyapp_ChildModifier__f_child;
            $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(children$5$1.push(x98));
            break matchResult13;
          }
          throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1$7);
        }
      }
      if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(Object.keys(style$5$1).length) > 0)) {
        props$5$1.style = style$5$1;
      }
      var element$6 = $j_myapp$002e$002dReact$0024.$m_Lmyapp_React$().createElement__sjs_js_Any__sjs_js_Object__sci_Seq__Lmyapp_ReactElement("button", props$5$1, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_IndexedSeq$().from__sc_IterableOnce__sci_IndexedSeq($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_sjs_js_WrappedArray__sjs_js_Array__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjs_js_WrappedArray(), children$5$1)));
      var $x_10 = new $j_myapp$002e$002dChild$002dModifier.$c_Lmyapp_ChildModifier(element$6);
      var modifiers$proxy4$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_myapp$002e$002dModifier.$d_Lmyapp_Modifier.getArrayOf().constr)([$j_myapp$002e$002dModifier$0024.$m_Lmyapp_Modifier$().stringToModifier__T__Lmyapp_Modifier(("Count: " + count$1))]));
      var fields$16 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.getArrayOf().constr)([]));
      var props$7$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields$16);
      var fields$17 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.getArrayOf().constr)([]));
      var style$7$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields$17);
      var children$7$1 = [];
      var this$157 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(modifiers$proxy4$1);
      var it$8 = this$157.iterator__sc_Iterator();
      while ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(it$8).hasNext__Z()) {
        var x0$8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(it$8).next__O();
        var x$1$8 = $j_myapp$002e$002dModifier.$as_Lmyapp_Modifier(x0$8);
        matchResult14: {
          if (false) {
            var x115 = $j_myapp$002e$002dStyle$002dModifier.$as_Lmyapp_StyleModifier(x$1$8);
            var x117 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x115)._1__T();
            var x118 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x115)._2__T();
            style$7$1[x117] = x118;
            break matchResult14;
          }
          if ((x$1$8 instanceof $j_myapp$002e$002dProp$002dModifier.$c_Lmyapp_PropModifier)) {
            var x111 = $j_myapp$002e$002dProp$002dModifier.$as_Lmyapp_PropModifier(x$1$8);
            var this$161 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x111);
            var x113 = this$161.Lmyapp_PropModifier__f_name;
            var this$162 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x111);
            var x114 = this$162.Lmyapp_PropModifier__f_value;
            props$7$1[x113] = x114;
            break matchResult14;
          }
          if ((x$1$8 instanceof $j_myapp$002e$002dChild$002dModifier.$c_Lmyapp_ChildModifier)) {
            var x108 = $j_myapp$002e$002dChild$002dModifier.$as_Lmyapp_ChildModifier(x$1$8);
            var this$164 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x108);
            var x110 = this$164.Lmyapp_ChildModifier__f_child;
            $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(children$7$1.push(x110));
            break matchResult14;
          }
          throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1$8);
        }
      }
      if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(Object.keys(style$7$1).length) > 0)) {
        props$7$1.style = style$7$1;
      }
      var element$7 = $j_myapp$002e$002dReact$0024.$m_Lmyapp_React$().createElement__sjs_js_Any__sjs_js_Object__sci_Seq__Lmyapp_ReactElement("div", props$7$1, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_IndexedSeq$().from__sc_IterableOnce__sci_IndexedSeq($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_sjs_js_WrappedArray__sjs_js_Array__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjs_js_WrappedArray(), children$7$1)));
      var modifiers$proxy5$1 = $x_16.wrapRefArray__AO__sci_ArraySeq(new ($j_myapp$002e$002dModifier.$d_Lmyapp_Modifier.getArrayOf().constr)([$x_15, $x_14, $x_12, $x_10, new $j_myapp$002e$002dChild$002dModifier.$c_Lmyapp_ChildModifier(element$7)]));
      var fields$18 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.getArrayOf().constr)([]));
      var props$9$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields$18);
      var fields$19 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.getArrayOf().constr)([]));
      var style$9$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields$19);
      var children$9$1 = [];
      var this$174 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(modifiers$proxy5$1);
      var it$9 = this$174.iterator__sc_Iterator();
      while ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(it$9).hasNext__Z()) {
        var x0$9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(it$9).next__O();
        var x$1$9 = $j_myapp$002e$002dModifier.$as_Lmyapp_Modifier(x0$9);
        matchResult15: {
          if (false) {
            var x127 = $j_myapp$002e$002dStyle$002dModifier.$as_Lmyapp_StyleModifier(x$1$9);
            var x129 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x127)._1__T();
            var x130 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x127)._2__T();
            style$9$1[x129] = x130;
            break matchResult15;
          }
          if ((x$1$9 instanceof $j_myapp$002e$002dProp$002dModifier.$c_Lmyapp_PropModifier)) {
            var x123 = $j_myapp$002e$002dProp$002dModifier.$as_Lmyapp_PropModifier(x$1$9);
            var this$178 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x123);
            var x125 = this$178.Lmyapp_PropModifier__f_name;
            var this$179 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x123);
            var x126 = this$179.Lmyapp_PropModifier__f_value;
            props$9$1[x125] = x126;
            break matchResult15;
          }
          if ((x$1$9 instanceof $j_myapp$002e$002dChild$002dModifier.$c_Lmyapp_ChildModifier)) {
            var x120 = $j_myapp$002e$002dChild$002dModifier.$as_Lmyapp_ChildModifier(x$1$9);
            var this$181 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x120);
            var x122 = this$181.Lmyapp_ChildModifier__f_child;
            $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(children$9$1.push(x122));
            break matchResult15;
          }
          throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1$9);
        }
      }
      if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(Object.keys(style$9$1).length) > 0)) {
        props$9$1.style = style$9$1;
      }
      return $j_myapp$002e$002dReact$0024.$m_Lmyapp_React$().createElement__sjs_js_Any__sjs_js_Object__sci_Seq__Lmyapp_ReactElement("div", props$9$1, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_IndexedSeq$().from__sc_IterableOnce__sci_IndexedSeq($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_sjs_js_WrappedArray__sjs_js_Array__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjs_js_WrappedArray(), children$9$1)));
    });
    f$9.displayName = "Counter";
    var fields$20 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.getArrayOf().constr)([new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("a", props$2)]));
    return $x_17.createElement__sjs_js_Any__sjs_js_Object__sci_Seq__Lmyapp_ReactElement(f$9, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields$20), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_sjs_js_Any.getArrayOf().constr)([])));
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
