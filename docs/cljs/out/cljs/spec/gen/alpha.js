// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.spec.gen.alpha/LazyVar");
});

/**
 * Positional factory function for cljs.spec.gen.alpha/LazyVar.
 */
cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined'))){
return clojure.test.check.quick_check;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)))," never required"].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42505 = arguments.length;
var i__4500__auto___42506 = (0);
while(true){
if((i__4500__auto___42506 < len__4499__auto___42505)){
args__4502__auto__.push((arguments[i__4500__auto___42506]));

var G__42507 = (i__4500__auto___42506 + (1));
i__4500__auto___42506 = G__42507;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq42504){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42504));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined'))){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)))," never required"].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42509 = arguments.length;
var i__4500__auto___42510 = (0);
while(true){
if((i__4500__auto___42510 < len__4499__auto___42509)){
args__4502__auto__.push((arguments[i__4500__auto___42510]));

var G__42511 = (i__4500__auto___42510 + (1));
i__4500__auto___42510 = G__42511;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq42508){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42508));
});

var g_QMARK__42512 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined'))){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)))," never required"].join('')));
}
}),null));
var g_42513 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__42512){
return (function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined'))){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)))," never required"].join('')));
}
});})(g_QMARK__42512))
,null));
var mkg_42514 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__42512,g_42513){
return (function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined'))){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)))," never required"].join('')));
}
});})(g_QMARK__42512,g_42513))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__42512,g_42513,mkg_42514){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__42512).call(null,x);
});})(g_QMARK__42512,g_42513,mkg_42514))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__42512,g_42513,mkg_42514){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_42514).call(null,gfn);
});})(g_QMARK__42512,g_42513,mkg_42514))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__42512,g_42513,mkg_42514){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_42513).call(null,generator);
});})(g_QMARK__42512,g_42513,mkg_42514))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__21449__auto___42534 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined'))){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__21449__auto___42534){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42535 = arguments.length;
var i__4500__auto___42536 = (0);
while(true){
if((i__4500__auto___42536 < len__4499__auto___42535)){
args__4502__auto__.push((arguments[i__4500__auto___42536]));

var G__42537 = (i__4500__auto___42536 + (1));
i__4500__auto___42536 = G__42537;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__21449__auto___42534))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21449__auto___42534){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21449__auto___42534),args);
});})(g__21449__auto___42534))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__21449__auto___42534){
return (function (seq42515){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42515));
});})(g__21449__auto___42534))
;


var g__21449__auto___42538 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined'))){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__21449__auto___42538){
return (function cljs$spec$gen$alpha$list(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42539 = arguments.length;
var i__4500__auto___42540 = (0);
while(true){
if((i__4500__auto___42540 < len__4499__auto___42539)){
args__4502__auto__.push((arguments[i__4500__auto___42540]));

var G__42541 = (i__4500__auto___42540 + (1));
i__4500__auto___42540 = G__42541;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__21449__auto___42538))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21449__auto___42538){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21449__auto___42538),args);
});})(g__21449__auto___42538))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__21449__auto___42538){
return (function (seq42516){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42516));
});})(g__21449__auto___42538))
;


var g__21449__auto___42542 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined'))){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__21449__auto___42542){
return (function cljs$spec$gen$alpha$map(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42543 = arguments.length;
var i__4500__auto___42544 = (0);
while(true){
if((i__4500__auto___42544 < len__4499__auto___42543)){
args__4502__auto__.push((arguments[i__4500__auto___42544]));

var G__42545 = (i__4500__auto___42544 + (1));
i__4500__auto___42544 = G__42545;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__21449__auto___42542))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21449__auto___42542){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21449__auto___42542),args);
});})(g__21449__auto___42542))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__21449__auto___42542){
return (function (seq42517){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42517));
});})(g__21449__auto___42542))
;


var g__21449__auto___42546 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined'))){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__21449__auto___42546){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42547 = arguments.length;
var i__4500__auto___42548 = (0);
while(true){
if((i__4500__auto___42548 < len__4499__auto___42547)){
args__4502__auto__.push((arguments[i__4500__auto___42548]));

var G__42549 = (i__4500__auto___42548 + (1));
i__4500__auto___42548 = G__42549;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__21449__auto___42546))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21449__auto___42546){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21449__auto___42546),args);
});})(g__21449__auto___42546))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__21449__auto___42546){
return (function (seq42518){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42518));
});})(g__21449__auto___42546))
;


var g__21449__auto___42550 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined'))){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__21449__auto___42550){
return (function cljs$spec$gen$alpha$set(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42551 = arguments.length;
var i__4500__auto___42552 = (0);
while(true){
if((i__4500__auto___42552 < len__4499__auto___42551)){
args__4502__auto__.push((arguments[i__4500__auto___42552]));

var G__42553 = (i__4500__auto___42552 + (1));
i__4500__auto___42552 = G__42553;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__21449__auto___42550))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21449__auto___42550){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21449__auto___42550),args);
});})(g__21449__auto___42550))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__21449__auto___42550){
return (function (seq42519){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42519));
});})(g__21449__auto___42550))
;


var g__21449__auto___42554 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined'))){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__21449__auto___42554){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42555 = arguments.length;
var i__4500__auto___42556 = (0);
while(true){
if((i__4500__auto___42556 < len__4499__auto___42555)){
args__4502__auto__.push((arguments[i__4500__auto___42556]));

var G__42557 = (i__4500__auto___42556 + (1));
i__4500__auto___42556 = G__42557;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__21449__auto___42554))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21449__auto___42554){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21449__auto___42554),args);
});})(g__21449__auto___42554))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__21449__auto___42554){
return (function (seq42520){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42520));
});})(g__21449__auto___42554))
;


var g__21449__auto___42558 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined'))){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__21449__auto___42558){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42559 = arguments.length;
var i__4500__auto___42560 = (0);
while(true){
if((i__4500__auto___42560 < len__4499__auto___42559)){
args__4502__auto__.push((arguments[i__4500__auto___42560]));

var G__42561 = (i__4500__auto___42560 + (1));
i__4500__auto___42560 = G__42561;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__21449__auto___42558))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21449__auto___42558){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21449__auto___42558),args);
});})(g__21449__auto___42558))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__21449__auto___42558){
return (function (seq42521){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42521));
});})(g__21449__auto___42558))
;


var g__21449__auto___42562 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined'))){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__21449__auto___42562){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42563 = arguments.length;
var i__4500__auto___42564 = (0);
while(true){
if((i__4500__auto___42564 < len__4499__auto___42563)){
args__4502__auto__.push((arguments[i__4500__auto___42564]));

var G__42565 = (i__4500__auto___42564 + (1));
i__4500__auto___42564 = G__42565;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__21449__auto___42562))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21449__auto___42562){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21449__auto___42562),args);
});})(g__21449__auto___42562))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__21449__auto___42562){
return (function (seq42522){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42522));
});})(g__21449__auto___42562))
;


var g__21449__auto___42566 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined'))){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__21449__auto___42566){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42567 = arguments.length;
var i__4500__auto___42568 = (0);
while(true){
if((i__4500__auto___42568 < len__4499__auto___42567)){
args__4502__auto__.push((arguments[i__4500__auto___42568]));

var G__42569 = (i__4500__auto___42568 + (1));
i__4500__auto___42568 = G__42569;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__21449__auto___42566))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21449__auto___42566){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21449__auto___42566),args);
});})(g__21449__auto___42566))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__21449__auto___42566){
return (function (seq42523){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42523));
});})(g__21449__auto___42566))
;


var g__21449__auto___42570 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined'))){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__21449__auto___42570){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42571 = arguments.length;
var i__4500__auto___42572 = (0);
while(true){
if((i__4500__auto___42572 < len__4499__auto___42571)){
args__4502__auto__.push((arguments[i__4500__auto___42572]));

var G__42573 = (i__4500__auto___42572 + (1));
i__4500__auto___42572 = G__42573;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__21449__auto___42570))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21449__auto___42570){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21449__auto___42570),args);
});})(g__21449__auto___42570))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__21449__auto___42570){
return (function (seq42524){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42524));
});})(g__21449__auto___42570))
;


var g__21449__auto___42574 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined'))){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__21449__auto___42574){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42575 = arguments.length;
var i__4500__auto___42576 = (0);
while(true){
if((i__4500__auto___42576 < len__4499__auto___42575)){
args__4502__auto__.push((arguments[i__4500__auto___42576]));

var G__42577 = (i__4500__auto___42576 + (1));
i__4500__auto___42576 = G__42577;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__21449__auto___42574))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21449__auto___42574){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21449__auto___42574),args);
});})(g__21449__auto___42574))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__21449__auto___42574){
return (function (seq42525){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42525));
});})(g__21449__auto___42574))
;


var g__21449__auto___42578 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined'))){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__21449__auto___42578){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42579 = arguments.length;
var i__4500__auto___42580 = (0);
while(true){
if((i__4500__auto___42580 < len__4499__auto___42579)){
args__4502__auto__.push((arguments[i__4500__auto___42580]));

var G__42581 = (i__4500__auto___42580 + (1));
i__4500__auto___42580 = G__42581;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__21449__auto___42578))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21449__auto___42578){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21449__auto___42578),args);
});})(g__21449__auto___42578))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__21449__auto___42578){
return (function (seq42526){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42526));
});})(g__21449__auto___42578))
;


var g__21449__auto___42582 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined'))){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__21449__auto___42582){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42583 = arguments.length;
var i__4500__auto___42584 = (0);
while(true){
if((i__4500__auto___42584 < len__4499__auto___42583)){
args__4502__auto__.push((arguments[i__4500__auto___42584]));

var G__42585 = (i__4500__auto___42584 + (1));
i__4500__auto___42584 = G__42585;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__21449__auto___42582))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21449__auto___42582){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21449__auto___42582),args);
});})(g__21449__auto___42582))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__21449__auto___42582){
return (function (seq42527){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42527));
});})(g__21449__auto___42582))
;


var g__21449__auto___42586 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined'))){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__21449__auto___42586){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42587 = arguments.length;
var i__4500__auto___42588 = (0);
while(true){
if((i__4500__auto___42588 < len__4499__auto___42587)){
args__4502__auto__.push((arguments[i__4500__auto___42588]));

var G__42589 = (i__4500__auto___42588 + (1));
i__4500__auto___42588 = G__42589;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__21449__auto___42586))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21449__auto___42586){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21449__auto___42586),args);
});})(g__21449__auto___42586))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__21449__auto___42586){
return (function (seq42528){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42528));
});})(g__21449__auto___42586))
;


var g__21449__auto___42590 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined'))){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__21449__auto___42590){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42591 = arguments.length;
var i__4500__auto___42592 = (0);
while(true){
if((i__4500__auto___42592 < len__4499__auto___42591)){
args__4502__auto__.push((arguments[i__4500__auto___42592]));

var G__42593 = (i__4500__auto___42592 + (1));
i__4500__auto___42592 = G__42593;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__21449__auto___42590))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21449__auto___42590){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21449__auto___42590),args);
});})(g__21449__auto___42590))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__21449__auto___42590){
return (function (seq42529){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42529));
});})(g__21449__auto___42590))
;


var g__21449__auto___42594 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined'))){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__21449__auto___42594){
return (function cljs$spec$gen$alpha$return(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42595 = arguments.length;
var i__4500__auto___42596 = (0);
while(true){
if((i__4500__auto___42596 < len__4499__auto___42595)){
args__4502__auto__.push((arguments[i__4500__auto___42596]));

var G__42597 = (i__4500__auto___42596 + (1));
i__4500__auto___42596 = G__42597;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__21449__auto___42594))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21449__auto___42594){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21449__auto___42594),args);
});})(g__21449__auto___42594))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__21449__auto___42594){
return (function (seq42530){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42530));
});})(g__21449__auto___42594))
;


var g__21449__auto___42598 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined'))){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__21449__auto___42598){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42599 = arguments.length;
var i__4500__auto___42600 = (0);
while(true){
if((i__4500__auto___42600 < len__4499__auto___42599)){
args__4502__auto__.push((arguments[i__4500__auto___42600]));

var G__42601 = (i__4500__auto___42600 + (1));
i__4500__auto___42600 = G__42601;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__21449__auto___42598))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21449__auto___42598){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21449__auto___42598),args);
});})(g__21449__auto___42598))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__21449__auto___42598){
return (function (seq42531){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42531));
});})(g__21449__auto___42598))
;


var g__21449__auto___42602 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined'))){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__21449__auto___42602){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42603 = arguments.length;
var i__4500__auto___42604 = (0);
while(true){
if((i__4500__auto___42604 < len__4499__auto___42603)){
args__4502__auto__.push((arguments[i__4500__auto___42604]));

var G__42605 = (i__4500__auto___42604 + (1));
i__4500__auto___42604 = G__42605;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__21449__auto___42602))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21449__auto___42602){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21449__auto___42602),args);
});})(g__21449__auto___42602))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__21449__auto___42602){
return (function (seq42532){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42532));
});})(g__21449__auto___42602))
;


var g__21449__auto___42606 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined'))){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__21449__auto___42606){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42607 = arguments.length;
var i__4500__auto___42608 = (0);
while(true){
if((i__4500__auto___42608 < len__4499__auto___42607)){
args__4502__auto__.push((arguments[i__4500__auto___42608]));

var G__42609 = (i__4500__auto___42608 + (1));
i__4500__auto___42608 = G__42609;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__21449__auto___42606))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21449__auto___42606){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21449__auto___42606),args);
});})(g__21449__auto___42606))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__21449__auto___42606){
return (function (seq42533){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42533));
});})(g__21449__auto___42606))
;

var g__21462__auto___42631 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined'))){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__21462__auto___42631){
return (function cljs$spec$gen$alpha$any(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42632 = arguments.length;
var i__4500__auto___42633 = (0);
while(true){
if((i__4500__auto___42633 < len__4499__auto___42632)){
args__4502__auto__.push((arguments[i__4500__auto___42633]));

var G__42634 = (i__4500__auto___42633 + (1));
i__4500__auto___42633 = G__42634;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__21462__auto___42631))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21462__auto___42631){
return (function (args){
return cljs.core.deref.call(null,g__21462__auto___42631);
});})(g__21462__auto___42631))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__21462__auto___42631){
return (function (seq42610){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42610));
});})(g__21462__auto___42631))
;


var g__21462__auto___42635 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined'))){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__21462__auto___42635){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42636 = arguments.length;
var i__4500__auto___42637 = (0);
while(true){
if((i__4500__auto___42637 < len__4499__auto___42636)){
args__4502__auto__.push((arguments[i__4500__auto___42637]));

var G__42638 = (i__4500__auto___42637 + (1));
i__4500__auto___42637 = G__42638;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__21462__auto___42635))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21462__auto___42635){
return (function (args){
return cljs.core.deref.call(null,g__21462__auto___42635);
});})(g__21462__auto___42635))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__21462__auto___42635){
return (function (seq42611){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42611));
});})(g__21462__auto___42635))
;


var g__21462__auto___42639 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined'))){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__21462__auto___42639){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42640 = arguments.length;
var i__4500__auto___42641 = (0);
while(true){
if((i__4500__auto___42641 < len__4499__auto___42640)){
args__4502__auto__.push((arguments[i__4500__auto___42641]));

var G__42642 = (i__4500__auto___42641 + (1));
i__4500__auto___42641 = G__42642;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__21462__auto___42639))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21462__auto___42639){
return (function (args){
return cljs.core.deref.call(null,g__21462__auto___42639);
});})(g__21462__auto___42639))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__21462__auto___42639){
return (function (seq42612){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42612));
});})(g__21462__auto___42639))
;


var g__21462__auto___42643 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined'))){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__21462__auto___42643){
return (function cljs$spec$gen$alpha$char(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42644 = arguments.length;
var i__4500__auto___42645 = (0);
while(true){
if((i__4500__auto___42645 < len__4499__auto___42644)){
args__4502__auto__.push((arguments[i__4500__auto___42645]));

var G__42646 = (i__4500__auto___42645 + (1));
i__4500__auto___42645 = G__42646;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__21462__auto___42643))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21462__auto___42643){
return (function (args){
return cljs.core.deref.call(null,g__21462__auto___42643);
});})(g__21462__auto___42643))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__21462__auto___42643){
return (function (seq42613){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42613));
});})(g__21462__auto___42643))
;


var g__21462__auto___42647 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined'))){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__21462__auto___42647){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42648 = arguments.length;
var i__4500__auto___42649 = (0);
while(true){
if((i__4500__auto___42649 < len__4499__auto___42648)){
args__4502__auto__.push((arguments[i__4500__auto___42649]));

var G__42650 = (i__4500__auto___42649 + (1));
i__4500__auto___42649 = G__42650;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__21462__auto___42647))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21462__auto___42647){
return (function (args){
return cljs.core.deref.call(null,g__21462__auto___42647);
});})(g__21462__auto___42647))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__21462__auto___42647){
return (function (seq42614){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42614));
});})(g__21462__auto___42647))
;


var g__21462__auto___42651 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined'))){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__21462__auto___42651){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42652 = arguments.length;
var i__4500__auto___42653 = (0);
while(true){
if((i__4500__auto___42653 < len__4499__auto___42652)){
args__4502__auto__.push((arguments[i__4500__auto___42653]));

var G__42654 = (i__4500__auto___42653 + (1));
i__4500__auto___42653 = G__42654;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__21462__auto___42651))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21462__auto___42651){
return (function (args){
return cljs.core.deref.call(null,g__21462__auto___42651);
});})(g__21462__auto___42651))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__21462__auto___42651){
return (function (seq42615){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42615));
});})(g__21462__auto___42651))
;


var g__21462__auto___42655 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined'))){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__21462__auto___42655){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42656 = arguments.length;
var i__4500__auto___42657 = (0);
while(true){
if((i__4500__auto___42657 < len__4499__auto___42656)){
args__4502__auto__.push((arguments[i__4500__auto___42657]));

var G__42658 = (i__4500__auto___42657 + (1));
i__4500__auto___42657 = G__42658;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__21462__auto___42655))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21462__auto___42655){
return (function (args){
return cljs.core.deref.call(null,g__21462__auto___42655);
});})(g__21462__auto___42655))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__21462__auto___42655){
return (function (seq42616){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42616));
});})(g__21462__auto___42655))
;


var g__21462__auto___42659 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined'))){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__21462__auto___42659){
return (function cljs$spec$gen$alpha$double(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42660 = arguments.length;
var i__4500__auto___42661 = (0);
while(true){
if((i__4500__auto___42661 < len__4499__auto___42660)){
args__4502__auto__.push((arguments[i__4500__auto___42661]));

var G__42662 = (i__4500__auto___42661 + (1));
i__4500__auto___42661 = G__42662;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__21462__auto___42659))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21462__auto___42659){
return (function (args){
return cljs.core.deref.call(null,g__21462__auto___42659);
});})(g__21462__auto___42659))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__21462__auto___42659){
return (function (seq42617){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42617));
});})(g__21462__auto___42659))
;


var g__21462__auto___42663 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined'))){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__21462__auto___42663){
return (function cljs$spec$gen$alpha$int(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42664 = arguments.length;
var i__4500__auto___42665 = (0);
while(true){
if((i__4500__auto___42665 < len__4499__auto___42664)){
args__4502__auto__.push((arguments[i__4500__auto___42665]));

var G__42666 = (i__4500__auto___42665 + (1));
i__4500__auto___42665 = G__42666;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__21462__auto___42663))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21462__auto___42663){
return (function (args){
return cljs.core.deref.call(null,g__21462__auto___42663);
});})(g__21462__auto___42663))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__21462__auto___42663){
return (function (seq42618){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42618));
});})(g__21462__auto___42663))
;


var g__21462__auto___42667 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined'))){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__21462__auto___42667){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42668 = arguments.length;
var i__4500__auto___42669 = (0);
while(true){
if((i__4500__auto___42669 < len__4499__auto___42668)){
args__4502__auto__.push((arguments[i__4500__auto___42669]));

var G__42670 = (i__4500__auto___42669 + (1));
i__4500__auto___42669 = G__42670;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__21462__auto___42667))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21462__auto___42667){
return (function (args){
return cljs.core.deref.call(null,g__21462__auto___42667);
});})(g__21462__auto___42667))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__21462__auto___42667){
return (function (seq42619){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42619));
});})(g__21462__auto___42667))
;


var g__21462__auto___42671 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined'))){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__21462__auto___42671){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42672 = arguments.length;
var i__4500__auto___42673 = (0);
while(true){
if((i__4500__auto___42673 < len__4499__auto___42672)){
args__4502__auto__.push((arguments[i__4500__auto___42673]));

var G__42674 = (i__4500__auto___42673 + (1));
i__4500__auto___42673 = G__42674;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__21462__auto___42671))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21462__auto___42671){
return (function (args){
return cljs.core.deref.call(null,g__21462__auto___42671);
});})(g__21462__auto___42671))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__21462__auto___42671){
return (function (seq42620){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42620));
});})(g__21462__auto___42671))
;


var g__21462__auto___42675 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined'))){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__21462__auto___42675){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42676 = arguments.length;
var i__4500__auto___42677 = (0);
while(true){
if((i__4500__auto___42677 < len__4499__auto___42676)){
args__4502__auto__.push((arguments[i__4500__auto___42677]));

var G__42678 = (i__4500__auto___42677 + (1));
i__4500__auto___42677 = G__42678;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__21462__auto___42675))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21462__auto___42675){
return (function (args){
return cljs.core.deref.call(null,g__21462__auto___42675);
});})(g__21462__auto___42675))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__21462__auto___42675){
return (function (seq42621){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42621));
});})(g__21462__auto___42675))
;


var g__21462__auto___42679 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined'))){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__21462__auto___42679){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42680 = arguments.length;
var i__4500__auto___42681 = (0);
while(true){
if((i__4500__auto___42681 < len__4499__auto___42680)){
args__4502__auto__.push((arguments[i__4500__auto___42681]));

var G__42682 = (i__4500__auto___42681 + (1));
i__4500__auto___42681 = G__42682;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__21462__auto___42679))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21462__auto___42679){
return (function (args){
return cljs.core.deref.call(null,g__21462__auto___42679);
});})(g__21462__auto___42679))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__21462__auto___42679){
return (function (seq42622){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42622));
});})(g__21462__auto___42679))
;


var g__21462__auto___42683 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined'))){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__21462__auto___42683){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42684 = arguments.length;
var i__4500__auto___42685 = (0);
while(true){
if((i__4500__auto___42685 < len__4499__auto___42684)){
args__4502__auto__.push((arguments[i__4500__auto___42685]));

var G__42686 = (i__4500__auto___42685 + (1));
i__4500__auto___42685 = G__42686;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__21462__auto___42683))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21462__auto___42683){
return (function (args){
return cljs.core.deref.call(null,g__21462__auto___42683);
});})(g__21462__auto___42683))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__21462__auto___42683){
return (function (seq42623){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42623));
});})(g__21462__auto___42683))
;


var g__21462__auto___42687 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined'))){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__21462__auto___42687){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42688 = arguments.length;
var i__4500__auto___42689 = (0);
while(true){
if((i__4500__auto___42689 < len__4499__auto___42688)){
args__4502__auto__.push((arguments[i__4500__auto___42689]));

var G__42690 = (i__4500__auto___42689 + (1));
i__4500__auto___42689 = G__42690;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__21462__auto___42687))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21462__auto___42687){
return (function (args){
return cljs.core.deref.call(null,g__21462__auto___42687);
});})(g__21462__auto___42687))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__21462__auto___42687){
return (function (seq42624){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42624));
});})(g__21462__auto___42687))
;


var g__21462__auto___42691 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined'))){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__21462__auto___42691){
return (function cljs$spec$gen$alpha$string(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42692 = arguments.length;
var i__4500__auto___42693 = (0);
while(true){
if((i__4500__auto___42693 < len__4499__auto___42692)){
args__4502__auto__.push((arguments[i__4500__auto___42693]));

var G__42694 = (i__4500__auto___42693 + (1));
i__4500__auto___42693 = G__42694;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__21462__auto___42691))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21462__auto___42691){
return (function (args){
return cljs.core.deref.call(null,g__21462__auto___42691);
});})(g__21462__auto___42691))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__21462__auto___42691){
return (function (seq42625){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42625));
});})(g__21462__auto___42691))
;


var g__21462__auto___42695 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined'))){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__21462__auto___42695){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42696 = arguments.length;
var i__4500__auto___42697 = (0);
while(true){
if((i__4500__auto___42697 < len__4499__auto___42696)){
args__4502__auto__.push((arguments[i__4500__auto___42697]));

var G__42698 = (i__4500__auto___42697 + (1));
i__4500__auto___42697 = G__42698;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__21462__auto___42695))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21462__auto___42695){
return (function (args){
return cljs.core.deref.call(null,g__21462__auto___42695);
});})(g__21462__auto___42695))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__21462__auto___42695){
return (function (seq42626){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42626));
});})(g__21462__auto___42695))
;


var g__21462__auto___42699 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined'))){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__21462__auto___42699){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42700 = arguments.length;
var i__4500__auto___42701 = (0);
while(true){
if((i__4500__auto___42701 < len__4499__auto___42700)){
args__4502__auto__.push((arguments[i__4500__auto___42701]));

var G__42702 = (i__4500__auto___42701 + (1));
i__4500__auto___42701 = G__42702;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__21462__auto___42699))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21462__auto___42699){
return (function (args){
return cljs.core.deref.call(null,g__21462__auto___42699);
});})(g__21462__auto___42699))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__21462__auto___42699){
return (function (seq42627){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42627));
});})(g__21462__auto___42699))
;


var g__21462__auto___42703 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined'))){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__21462__auto___42703){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42704 = arguments.length;
var i__4500__auto___42705 = (0);
while(true){
if((i__4500__auto___42705 < len__4499__auto___42704)){
args__4502__auto__.push((arguments[i__4500__auto___42705]));

var G__42706 = (i__4500__auto___42705 + (1));
i__4500__auto___42705 = G__42706;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__21462__auto___42703))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21462__auto___42703){
return (function (args){
return cljs.core.deref.call(null,g__21462__auto___42703);
});})(g__21462__auto___42703))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__21462__auto___42703){
return (function (seq42628){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42628));
});})(g__21462__auto___42703))
;


var g__21462__auto___42707 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined'))){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__21462__auto___42707){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42708 = arguments.length;
var i__4500__auto___42709 = (0);
while(true){
if((i__4500__auto___42709 < len__4499__auto___42708)){
args__4502__auto__.push((arguments[i__4500__auto___42709]));

var G__42710 = (i__4500__auto___42709 + (1));
i__4500__auto___42709 = G__42710;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__21462__auto___42707))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21462__auto___42707){
return (function (args){
return cljs.core.deref.call(null,g__21462__auto___42707);
});})(g__21462__auto___42707))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__21462__auto___42707){
return (function (seq42629){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42629));
});})(g__21462__auto___42707))
;


var g__21462__auto___42711 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined'))){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__21462__auto___42711){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42712 = arguments.length;
var i__4500__auto___42713 = (0);
while(true){
if((i__4500__auto___42713 < len__4499__auto___42712)){
args__4502__auto__.push((arguments[i__4500__auto___42713]));

var G__42714 = (i__4500__auto___42713 + (1));
i__4500__auto___42713 = G__42714;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__21462__auto___42711))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21462__auto___42711){
return (function (args){
return cljs.core.deref.call(null,g__21462__auto___42711);
});})(g__21462__auto___42711))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__21462__auto___42711){
return (function (seq42630){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42630));
});})(g__21462__auto___42711))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42717 = arguments.length;
var i__4500__auto___42718 = (0);
while(true){
if((i__4500__auto___42718 < len__4499__auto___42717)){
args__4502__auto__.push((arguments[i__4500__auto___42718]));

var G__42719 = (i__4500__auto___42718 + (1));
i__4500__auto___42718 = G__42719;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__42715_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__42715_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq42716){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42716));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__42720_SHARP_){
return (new Date(p1__42720_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer.call(null)),cljs.spec.gen.alpha.symbol.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.gen.alpha.string_alphanumeric.call(null),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.return$.call(null,(0)),cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null))),cljs.spec.gen.alpha.return$.call(null,true),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.gen.alpha.uuid.call(null),cljs.spec.gen.alpha.return$.call(null,false),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.symbol.call(null)], null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.double$.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns.call(null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.string_alphanumeric.call(null)], null)),cljs.spec.gen.alpha.symbol_ns.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.gen.alpha.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.gen_builtins),pred);
}
});

//# sourceMappingURL=alpha.js.map?rel=1526826997817
