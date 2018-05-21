// Compiled by ClojureScript 1.10.238 {}
goog.provide('clojure.core.matrix.macros');
goog.require('cljs.core');
var ret__4533__auto___21736 = (function (){
/**
 * Throws an error with the provided message(s)
 */
clojure.core.matrix.macros.error = (function clojure$core$matrix$macros$error(var_args){
var args__4502__auto__ = [];
var len__4499__auto___21737 = arguments.length;
var i__4500__auto___21738 = (0);
while(true){
if((i__4500__auto___21738 < len__4499__auto___21737)){
args__4502__auto__.push((arguments[i__4500__auto___21738]));

var G__21739 = (i__4500__auto___21738 + (1));
i__4500__auto___21738 = G__21739;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return clojure.core.matrix.macros.error.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

clojure.core.matrix.macros.error.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,vals){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","ex-info","cljs.core/ex-info",-409744395,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),vals))),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null))))),null,(1),null)))));
});

clojure.core.matrix.macros.error.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
clojure.core.matrix.macros.error.cljs$lang$applyTo = (function (seq21733){
var G__21734 = cljs.core.first.call(null,seq21733);
var seq21733__$1 = cljs.core.next.call(null,seq21733);
var G__21735 = cljs.core.first.call(null,seq21733__$1);
var seq21733__$2 = cljs.core.next.call(null,seq21733__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21734,G__21735,seq21733__$2);
});

return null;
})()
;
clojure.core.matrix.macros.error.cljs$lang$macro = true;

var ret__4533__auto___21745 = (function (){
clojure.core.matrix.macros.TODO = (function clojure$core$matrix$macros$TODO(var_args){
var G__21744 = arguments.length;
switch (G__21744) {
case 2:
return clojure.core.matrix.macros.TODO.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4514__auto__ = [];
var len__4499__auto___21747 = arguments.length;
var i__4500__auto___21748 = (0);
while(true){
if((i__4500__auto___21748 < len__4499__auto___21747)){
args_arr__4514__auto__.push((arguments[i__4500__auto___21748]));

var G__21749 = (i__4500__auto___21748 + (1));
i__4500__auto___21748 = G__21749;
continue;
} else {
}
break;
}

var argseq__4515__auto__ = (new cljs.core.IndexedSeq(args_arr__4514__auto__.slice((2)),(0),null));
return clojure.core.matrix.macros.TODO.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4515__auto__);

}
});

clojure.core.matrix.macros.TODO.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("clojure.core.matrix.macros","error","clojure.core.matrix.macros/error",-1013616626,null),null,(1),null)),(new cljs.core.List(null,"TODO: not yet implemented",null,(1),null)))));
});

clojure.core.matrix.macros.TODO.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,vals){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("clojure.core.matrix.macros","error","clojure.core.matrix.macros/error",-1013616626,null),null,(1),null)),(new cljs.core.List(null,"TODO: ",null,(1),null)),vals)));
});

/** @this {Function} */
clojure.core.matrix.macros.TODO.cljs$lang$applyTo = (function (seq21741){
var G__21742 = cljs.core.first.call(null,seq21741);
var seq21741__$1 = cljs.core.next.call(null,seq21741);
var G__21743 = cljs.core.first.call(null,seq21741__$1);
var seq21741__$2 = cljs.core.next.call(null,seq21741__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21742,G__21743,seq21741__$2);
});

clojure.core.matrix.macros.TODO.cljs$lang$maxFixedArity = (2);

return null;
})()
;
clojure.core.matrix.macros.TODO.cljs$lang$macro = true;

var ret__4533__auto___21750 = /**
 * Throws IllegalArgumentException with provided string
 */
clojure.core.matrix.macros.iae = (function clojure$core$matrix$macros$iae(_AMPERSAND_form,_AMPERSAND_env,exception_str){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"IllegalArgumentException.","IllegalArgumentException.",-1885081185,null),null,(1),null)),(new cljs.core.List(null,exception_str,null,(1),null))))),null,(1),null)))));
});
clojure.core.matrix.macros.iae.cljs$lang$macro = true;

var ret__4533__auto___21751 = /**
 * Throws an IllegalArgumentException when the predicate is not satisfied
 */
clojure.core.matrix.macros.iae_when_not = (function clojure$core$matrix$macros$iae_when_not(_AMPERSAND_form,_AMPERSAND_env,pred_QMARK_,exception_str){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,pred_QMARK_,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("clojure.core.matrix.macros","iae","clojure.core.matrix.macros/iae",926591908,null),null,(1),null)),(new cljs.core.List(null,exception_str,null,(1),null))))),null,(1),null)))));
});
clojure.core.matrix.macros.iae_when_not.cljs$lang$macro = true;

var ret__4533__auto___21761 = (function (){
/**
 * loops over a set of values, binding index-sym to the 0-based index of each value
 */
clojure.core.matrix.macros.doseq_indexed = (function clojure$core$matrix$macros$doseq_indexed(var_args){
var args__4502__auto__ = [];
var len__4499__auto___21762 = arguments.length;
var i__4500__auto___21763 = (0);
while(true){
if((i__4500__auto___21763 < len__4499__auto___21762)){
args__4502__auto__.push((arguments[i__4500__auto___21763]));

var G__21764 = (i__4500__auto___21763 + (1));
i__4500__auto___21763 = G__21764;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return clojure.core.matrix.macros.doseq_indexed.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

clojure.core.matrix.macros.doseq_indexed.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__21757,code){
var vec__21758 = p__21757;
var val_sym = cljs.core.nth.call(null,vec__21758,(0),null);
var values = cljs.core.nth.call(null,vec__21758,(1),null);
var index_sym = cljs.core.nth.call(null,vec__21758,(2),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","loop","cljs.core/loop",-1829423021,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"vals__21752__auto__","vals__21752__auto__",1846565508,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null),null,(1),null)),(new cljs.core.List(null,values,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,index_sym,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","long","cljs.core/long",241154833,null),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"vals__21752__auto__","vals__21752__auto__",1846565508,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,val_sym,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"vals__21752__auto__","vals__21752__auto__",1846565508,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),code,(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"vals__21752__auto__","vals__21752__auto__",1846565508,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","inc","cljs.core/inc",-879172610,null),null,(1),null)),(new cljs.core.List(null,index_sym,null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,null,null,(1),null))))),null,(1),null)))));
});

clojure.core.matrix.macros.doseq_indexed.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
clojure.core.matrix.macros.doseq_indexed.cljs$lang$applyTo = (function (seq21753){
var G__21754 = cljs.core.first.call(null,seq21753);
var seq21753__$1 = cljs.core.next.call(null,seq21753);
var G__21755 = cljs.core.first.call(null,seq21753__$1);
var seq21753__$2 = cljs.core.next.call(null,seq21753__$1);
var G__21756 = cljs.core.first.call(null,seq21753__$2);
var seq21753__$3 = cljs.core.next.call(null,seq21753__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21754,G__21755,G__21756,seq21753__$3);
});

return null;
})()
;
clojure.core.matrix.macros.doseq_indexed.cljs$lang$macro = true;

var ret__4533__auto___21765 = clojure.core.matrix.macros.is_object_array_QMARK_ = (function clojure$core$matrix$macros$is_object_array_QMARK_(_AMPERSAND_form,_AMPERSAND_env,m){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("js","Array","js/Array",-423508366,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","type","cljs.core/type",-821761154,null),null,(1),null)),(new cljs.core.List(null,m,null,(1),null))))),null,(1),null)))));
});
clojure.core.matrix.macros.is_object_array_QMARK_.cljs$lang$macro = true;

var ret__4533__auto___21766 = clojure.core.matrix.macros.is_long_array_QMARK_ = (function clojure$core$matrix$macros$is_long_array_QMARK_(_AMPERSAND_form,_AMPERSAND_env,m){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("js","Array","js/Array",-423508366,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","type","cljs.core/type",-821761154,null),null,(1),null)),(new cljs.core.List(null,m,null,(1),null))))),null,(1),null)))));
});
clojure.core.matrix.macros.is_long_array_QMARK_.cljs$lang$macro = true;

var ret__4533__auto___21767 = clojure.core.matrix.macros.is_double_array_QMARK_ = (function clojure$core$matrix$macros$is_double_array_QMARK_(_AMPERSAND_form,_AMPERSAND_env,m){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("js","Array","js/Array",-423508366,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","type","cljs.core/type",-821761154,null),null,(1),null)),(new cljs.core.List(null,m,null,(1),null))))),null,(1),null)))));
});
clojure.core.matrix.macros.is_double_array_QMARK_.cljs$lang$macro = true;

var ret__4533__auto___21778 = (function (){
/**
 * C-like loop with nested loops support
 */
clojure.core.matrix.macros.c_for = (function clojure$core$matrix$macros$c_for(var_args){
var args__4502__auto__ = [];
var len__4499__auto___21779 = arguments.length;
var i__4500__auto___21780 = (0);
while(true){
if((i__4500__auto___21780 < len__4499__auto___21779)){
args__4502__auto__.push((arguments[i__4500__auto___21780]));

var G__21781 = (i__4500__auto___21780 + (1));
i__4500__auto___21780 = G__21781;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return clojure.core.matrix.macros.c_for.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

clojure.core.matrix.macros.c_for.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,loops,body){
var c_for_rec = (function clojure$core$matrix$macros$c_for_rec(loops__$1,body_stmts){
if(cljs.core.seq.call(null,loops__$1)){
var vec__21775 = cljs.core.take.call(null,(4),loops__$1);
var var$ = cljs.core.nth.call(null,vec__21775,(0),null);
var init = cljs.core.nth.call(null,vec__21775,(1),null);
var check = cljs.core.nth.call(null,vec__21775,(2),null);
var next = cljs.core.nth.call(null,vec__21775,(3),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","loop","cljs.core/loop",-1829423021,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,var$,null,(1),null)),(new cljs.core.List(null,init,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,check,null,(1),null)),clojure$core$matrix$macros$c_for_rec.call(null,cljs.core.nthrest.call(null,loops__$1,(4)),body_stmts),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),null,(1),null)),(new cljs.core.List(null,next,null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
} else {
return body_stmts;
}
});
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),c_for_rec.call(null,loops,body),(new cljs.core.List(null,null,null,(1),null)))));
});

clojure.core.matrix.macros.c_for.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
clojure.core.matrix.macros.c_for.cljs$lang$applyTo = (function (seq21768){
var G__21769 = cljs.core.first.call(null,seq21768);
var seq21768__$1 = cljs.core.next.call(null,seq21768);
var G__21770 = cljs.core.first.call(null,seq21768__$1);
var seq21768__$2 = cljs.core.next.call(null,seq21768__$1);
var G__21771 = cljs.core.first.call(null,seq21768__$2);
var seq21768__$3 = cljs.core.next.call(null,seq21768__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21769,G__21770,G__21771,seq21768__$3);
});

return null;
})()
;
clojure.core.matrix.macros.c_for.cljs$lang$macro = true;

var ret__4533__auto___21783 = /**
 * Macro to coerce to scalar value with an efficient dispatch sequence
 */
clojure.core.matrix.macros.scalar_coerce = (function clojure$core$matrix$macros$scalar_coerce(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"x__21782__auto__","x__21782__auto__",695188510,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__21782__auto__","x__21782__auto__",695188510,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__21782__auto__","x__21782__auto__",695188510,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"else","else",-1508377146),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("clojure.core.matrix.protocols","get-0d","clojure.core.matrix.protocols/get-0d",1926949216,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__21782__auto__","x__21782__auto__",695188510,null),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
clojure.core.matrix.macros.scalar_coerce.cljs$lang$macro = true;

var ret__4533__auto___21784 = /**
 * Returns true if the parameter is an N-dimensional array of any type
 */
clojure.core.matrix.macros.array_QMARK_ = (function clojure$core$matrix$macros$array_QMARK_(_AMPERSAND_form,_AMPERSAND_env,m){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("clojure.core.matrix.protocols","is-scalar?","clojure.core.matrix.protocols/is-scalar?",-355472862,null),null,(1),null)),(new cljs.core.List(null,m,null,(1),null))))),null,(1),null)))));
});
clojure.core.matrix.macros.array_QMARK_.cljs$lang$macro = true;


//# sourceMappingURL=macros.js.map?rel=1526826983287
