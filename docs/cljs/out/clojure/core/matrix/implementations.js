// Compiled by ClojureScript 1.10.238 {}
goog.provide('clojure.core.matrix.implementations');
goog.require('cljs.core');
goog.require('clojure.core.matrix.protocols');
goog.require('clojure.core.matrix.macros');
/**
 * A map of known core.matrix implementation namespaces.
 * 
 * core.matrix will attempt to load these namespaces when an array of the specified
 * keyword type is requested.
 */
clojure.core.matrix.implementations.KNOWN_IMPLEMENTATIONS = (new cljs.core.PersistentArrayMap(null,(26),[new cljs.core.Keyword(null,"vectorz","vectorz",1550942815),new cljs.core.Symbol(null,"mikera.vectorz.matrix-api","mikera.vectorz.matrix-api",-1304124502,null),new cljs.core.Keyword(null,"vectorz-opencl","vectorz-opencl",-1227300990),new cljs.core.Symbol(null,"mikera.vectorz.opencl-api","mikera.vectorz.opencl-api",929622627,null),new cljs.core.Keyword(null,"neanderthal","neanderthal",133200757),new cljs.core.Symbol(null,"uncomplicate.neanderthal.impl.matrix-api","uncomplicate.neanderthal.impl.matrix-api",522937898,null),new cljs.core.Keyword(null,"clojure","clojure",438975815),new cljs.core.Symbol(null,"clojure.core.matrix.impl.clojure","clojure.core.matrix.impl.clojure",503611357,null),new cljs.core.Keyword(null,"ndarray","ndarray",1659822393),new cljs.core.Symbol(null,"clojure.core.matrix.impl.ndarray-object","clojure.core.matrix.impl.ndarray-object",-213967717,null),new cljs.core.Keyword(null,"ndarray-double","ndarray-double",-159242597),new cljs.core.Symbol(null,"clojure.core.matrix.impl.ndarray-double","clojure.core.matrix.impl.ndarray-double",-2055462494,null),new cljs.core.Keyword(null,"ndarray-float","ndarray-float",440096342),new cljs.core.Symbol(null,"clojure.core.matrix.impl.ndarray","clojure.core.matrix.impl.ndarray",-1263457743,null),new cljs.core.Keyword(null,"ndarray-long","ndarray-long",-219375229),new cljs.core.Symbol(null,"clojure.core.matrix.impl.ndarray","clojure.core.matrix.impl.ndarray",-1263457743,null),new cljs.core.Keyword(null,"persistent-vector","persistent-vector",2032618025),new cljs.core.Symbol(null,"clojure.core.matrix.impl.persistent-vector","clojure.core.matrix.impl.persistent-vector",-1383679619,null),new cljs.core.Keyword(null,"persistent-map","persistent-map",1676752549),new cljs.core.Symbol(null,"clojure.core.matrix.impl.sparse-map","clojure.core.matrix.impl.sparse-map",-680801962,null),new cljs.core.Keyword(null,"sequence","sequence",926807414),new cljs.core.Symbol(null,"clojure.core.matrix.impl.sequence","clojure.core.matrix.impl.sequence",-188268595,null),new cljs.core.Keyword(null,"double-array","double-array",-1383495801),new cljs.core.Symbol(null,"clojure.core.matrix.impl.double-array","clojure.core.matrix.impl.double-array",1708458108,null),new cljs.core.Keyword(null,"scalar-wrapper","scalar-wrapper",-1626299275),new cljs.core.Symbol(null,"clojure.core.matrix.impl.wrappers","clojure.core.matrix.impl.wrappers",1214427365,null),new cljs.core.Keyword(null,"slice-wrapper","slice-wrapper",449772415),new cljs.core.Symbol(null,"clojure.core.matrix.impl.wrappers","clojure.core.matrix.impl.wrappers",1214427365,null),new cljs.core.Keyword(null,"nd-wrapper","nd-wrapper",563497943),new cljs.core.Symbol(null,"clojure.core.matrix.impl.wrappers","clojure.core.matrix.impl.wrappers",1214427365,null),new cljs.core.Keyword(null,"dataset","dataset",1159262238),new cljs.core.Symbol(null,"clojure.core.matrix.impl.dataset","clojure.core.matrix.impl.dataset",750993460,null),new cljs.core.Keyword(null,"jblas","jblas",609262767),new cljs.core.Keyword(null,"TODO","TODO",-523795145),new cljs.core.Keyword(null,"clatrix","clatrix",-547812428),new cljs.core.Symbol(null,"clatrix.core","clatrix.core",972957352,null),new cljs.core.Keyword(null,"parallel-colt","parallel-colt",629381018),new cljs.core.Keyword(null,"TODO","TODO",-523795145),new cljs.core.Keyword(null,"ejml","ejml",964957572),new cljs.core.Keyword(null,"TODO","TODO",-523795145),new cljs.core.Keyword(null,"nd4j","nd4j",-1907957110),new cljs.core.Symbol(null,"nd4clj.kiw","nd4clj.kiw",-1874915324,null),new cljs.core.Keyword(null,"ujmp","ujmp",-838348489),new cljs.core.Keyword(null,"TODO","TODO",-523795145),new cljs.core.Keyword(null,"weka","weka",195496388),new cljs.core.Symbol(null,"clj-ml.matrix-api","clj-ml.matrix-api",-1914744527,null),new cljs.core.Keyword(null,"commons-math","commons-math",-1283490548),new cljs.core.Symbol(null,"apache-commons-matrix.core","apache-commons-matrix.core",1260886815,null),new cljs.core.Keyword(null,"mtj","mtj",1143798319),new cljs.core.Symbol(null,"cav.mtj.core.matrix","cav.mtj.core.matrix",349644007,null),new cljs.core.Keyword(null,"aljabr","aljabr",1424034715),new cljs.core.Symbol(null,"thinktopic.aljabr.core","thinktopic.aljabr.core",-1050414454,null)],null));
/**
 * The default implementation used in core.matrix. Currently set to `:persistent-vector` for maximum
 * compatibility with regular Clojure code.
 */
clojure.core.matrix.implementations.DEFAULT_IMPLEMENTATION = new cljs.core.Keyword(null,"persistent-vector","persistent-vector",2032618025);
/**
 * A dynamic var specifying the current core.matrix implementation in use.
 * 
 * May be re-bound to temporarily use a different core.matrix implementation.
 */
clojure.core.matrix.implementations._STAR_matrix_implementation_STAR_ = clojure.core.matrix.implementations.DEFAULT_IMPLEMENTATION;
/**
 * A dynamic var specifying the current core.matrix numeric implementation in use.
 * 
 * May be re-bound to temporarily use a different core.matrix implementation.
 */
clojure.core.matrix.implementations._STAR_numeric_implementation_STAR_ = new cljs.core.Keyword(null,"ndarray-double","ndarray-double",-159242597);
if(typeof clojure.core.matrix.implementations._STAR_debug_options_STAR_ !== 'undefined'){
} else {
/**
 * A dynamic var supporting debugging option for core.matrix implementers.
 * 
 * Currently supported values:
 *   :print-registrations  - print when core.matrix implementations are registered
 *   :reload-namespaces  - require :reload implementation namespaces when setting the current implementation
 */
clojure.core.matrix.implementations._STAR_debug_options_STAR_ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"print-registrations","print-registrations",64241995),false,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134),false], null);
}
if(typeof clojure.core.matrix.implementations.canonical_objects !== 'undefined'){
} else {
/**
 * An atom holding a map of canonical objects for each loaded core.matrix implementation.
 * 
 * Canonical objects may be used to invoke protocol methods on an instance of the correct
 * type to get implementation-specific behaviour. Canonical objects are required to support
 * all mandatory core.matrix protocols.
 */
clojure.core.matrix.implementations.canonical_objects = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
/**
 * Returns the implementation keyword  for a given object
 */
clojure.core.matrix.implementations.get_implementation_key = (function clojure$core$matrix$implementations$get_implementation_key(m){
if((m instanceof cljs.core.Keyword)){
return m;
} else {
if(cljs.core.truth_(clojure.core.matrix.protocols.is_scalar_QMARK_.call(null,m))){
return null;
} else {
return clojure.core.matrix.protocols.implementation_key.call(null,m);

}
}
});
/**
 * Registers a matrix implementation for use. Should be called by all implementations
 * when they are loaded, once for each implementation keyword registered. Safe to call multiple times.
 */
clojure.core.matrix.implementations.register_implementation = (function clojure$core$matrix$implementations$register_implementation(var_args){
var G__22080 = arguments.length;
switch (G__22080) {
case 1:
return clojure.core.matrix.implementations.register_implementation.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.implementations.register_implementation.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.core.matrix.implementations.register_implementation.cljs$core$IFn$_invoke$arity$1 = (function (canonical_object){
return clojure.core.matrix.implementations.register_implementation.call(null,clojure.core.matrix.protocols.implementation_key.call(null,canonical_object),canonical_object);
});

clojure.core.matrix.implementations.register_implementation.cljs$core$IFn$_invoke$arity$2 = (function (key,canonical_object){
if((key instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.call(null,["Implementation key must be a Clojure keyword but got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,key))].join(''),cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"print-registrations","print-registrations",64241995).cljs$core$IFn$_invoke$arity$1(clojure.core.matrix.implementations._STAR_debug_options_STAR_))){
cljs.core.println.call(null,["Registering core.matrix implementation [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),"] with canonical object [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,canonical_object)),"]"].join(''));
} else {
}

return cljs.core.swap_BANG_.call(null,clojure.core.matrix.implementations.canonical_objects,cljs.core.assoc,key,canonical_object);
});

clojure.core.matrix.implementations.register_implementation.cljs$lang$maxFixedArity = 2;

/**
 * Attempts to load an implementation for the given keyword.
 * Returns nil if not possible, a non-nil matrix value of the correct implementation otherwise.
 */
clojure.core.matrix.implementations.try_load_implementation = (function clojure$core$matrix$implementations$try_load_implementation(k){
return cljs.core.println.call(null,"INFO: No dynamic loading of implementations in Clojurescript.\nYou must require an implementation explicitly in a namespace, for example thinktopic.aljabr.core");
});
/**
 * Attempts to load the implementation for a given keyword or matrix object.
 * Returns nil if not possible, a non-nil matrix value of the correct implementation otherwise.
 */
clojure.core.matrix.implementations.load_implementation = (function clojure$core$matrix$implementations$load_implementation(korm){
if((korm instanceof cljs.core.Keyword)){
return clojure.core.matrix.implementations.try_load_implementation.call(null,korm);
} else {
return clojure.core.matrix.implementations.try_load_implementation.call(null,clojure.core.matrix.protocols.implementation_key.call(null,korm));
}
});
/**
 * Gets the canonical object for a specific implementation. The canonical object is used
 * to call implementation-specific protocol functions where required (e.g. creation of new
 * arrays of the correct type for the implementation).
 * 
 * Returns nil if the implementation cannot be found.
 */
clojure.core.matrix.implementations.get_canonical_object = (function clojure$core$matrix$implementations$get_canonical_object(var_args){
var G__22083 = arguments.length;
switch (G__22083) {
case 0:
return clojure.core.matrix.implementations.get_canonical_object.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.core.matrix.implementations.get_canonical_object.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.core.matrix.implementations.get_canonical_object.cljs$core$IFn$_invoke$arity$0 = (function (){
return clojure.core.matrix.implementations.get_canonical_object.call(null,clojure.core.matrix.implementations._STAR_matrix_implementation_STAR_);
});

clojure.core.matrix.implementations.get_canonical_object.cljs$core$IFn$_invoke$arity$1 = (function (m){
var k = clojure.core.matrix.implementations.get_implementation_key.call(null,m);
var obj = cljs.core.deref.call(null,clojure.core.matrix.implementations.canonical_objects).call(null,k);
if(cljs.core.truth_(k)){
var or__3922__auto__ = obj;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = (cljs.core.truth_(clojure.core.matrix.implementations.try_load_implementation.call(null,k))?cljs.core.deref.call(null,clojure.core.matrix.implementations.canonical_objects).call(null,k):null);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
var or__3922__auto____$2 = (((m instanceof cljs.core.Keyword))?null:m);
if(cljs.core.truth_(or__3922__auto____$2)){
return or__3922__auto____$2;
} else {
return null;
}
}
}
} else {
return null;
}
});

clojure.core.matrix.implementations.get_canonical_object.cljs$lang$maxFixedArity = 1;

/**
 * Like get-canonical-object, except it throws an exception if the implementation cannot be found
 */
clojure.core.matrix.implementations.get_canonical_object_or_throw = (function clojure$core$matrix$implementations$get_canonical_object_or_throw(mk){
var or__3922__auto__ = clojure.core.matrix.implementations.get_canonical_object.call(null,mk);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
throw cljs.core.ex_info.call(null,["Cannot find implementation for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mk)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});
/**
 * Attempts to construct an array according to the type of array m. If not possible,
 * returns another array type.
 */
clojure.core.matrix.implementations.construct = (function clojure$core$matrix$implementations$construct(m,data){
var or__3922__auto__ = clojure.core.matrix.protocols.construct_matrix.call(null,m,data);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = clojure.core.matrix.protocols.coerce_param.call(null,m,data);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
return clojure.core.matrix.protocols.coerce_param.call(null,cljs.core.PersistentVector.EMPTY,data);
}
}
});
/**
 * Sets the currently active core.matrix implementation.
 * 
 * Parameter may be
 *  - A known keyword for the implementation e.g. :vectorz
 *  - An existing instance from the implementation
 * 
 * Throws an exception if the implementation cannot be loaded.
 * 
 * This is used primarily for functions that construct new matrices, i.e. it determines the
 * implementation used for expressions like: (matrix [[1 2] [3 4]])
 */
clojure.core.matrix.implementations.set_current_implementation = (function clojure$core$matrix$implementations$set_current_implementation(m){
if((m instanceof cljs.core.Keyword)){
var or__3922__auto___22085 = clojure.core.matrix.implementations.try_load_implementation.call(null,m);
if(cljs.core.truth_(or__3922__auto___22085)){
} else {
throw cljs.core.ex_info.call(null,["Unable to load matrix implementation: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
} else {
}

return clojure.core.matrix.implementations._STAR_matrix_implementation_STAR_ = clojure.core.matrix.implementations.get_implementation_key.call(null,m);
});

//# sourceMappingURL=implementations.js.map?rel=1526826985133
