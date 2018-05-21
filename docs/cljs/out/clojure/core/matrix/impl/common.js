// Compiled by ClojureScript 1.10.238 {}
goog.provide('clojure.core.matrix.impl.common');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.core.matrix.protocols');
goog.require('clojure.core.matrix.utils');
goog.require('clojure.core.matrix.implementations');
/**
 * Returns a list of available implementations' objects
 */
clojure.core.matrix.impl.common.get_impl_objs = (function clojure$core$matrix$impl$common$get_impl_objs(){
return cljs.core.filter.call(null,cljs.core.second,(function (){var iter__4292__auto__ = (function clojure$core$matrix$impl$common$get_impl_objs_$_iter__22158(s__22159){
return (new cljs.core.LazySeq(null,(function (){
var s__22159__$1 = s__22159;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__22159__$1);
if(temp__5457__auto__){
var s__22159__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22159__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__22159__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__22161 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__22160 = (0);
while(true){
if((i__22160 < size__4291__auto__)){
var vec__22162 = cljs.core._nth.call(null,c__4290__auto__,i__22160);
var name = cljs.core.nth.call(null,vec__22162,(0),null);
var ns = cljs.core.nth.call(null,vec__22162,(1),null);
if(cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"persistent-vector","persistent-vector",2032618025),null,new cljs.core.Keyword(null,"TODO","TODO",-523795145),null], null), null).call(null,ns))){
cljs.core.chunk_append.call(null,b__22161,(function (){try{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"obj","obj",981763962),clojure.core.matrix.implementations.get_canonical_object.call(null,name)], null);
}catch (e22165){if((e22165 instanceof Error)){
var t = e22165;
return null;
} else {
throw e22165;

}
}})());

var G__22170 = (i__22160 + (1));
i__22160 = G__22170;
continue;
} else {
var G__22171 = (i__22160 + (1));
i__22160 = G__22171;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22161),clojure$core$matrix$impl$common$get_impl_objs_$_iter__22158.call(null,cljs.core.chunk_rest.call(null,s__22159__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22161),null);
}
} else {
var vec__22166 = cljs.core.first.call(null,s__22159__$2);
var name = cljs.core.nth.call(null,vec__22166,(0),null);
var ns = cljs.core.nth.call(null,vec__22166,(1),null);
if(cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"persistent-vector","persistent-vector",2032618025),null,new cljs.core.Keyword(null,"TODO","TODO",-523795145),null], null), null).call(null,ns))){
return cljs.core.cons.call(null,(function (){try{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"obj","obj",981763962),clojure.core.matrix.implementations.get_canonical_object.call(null,name)], null);
}catch (e22169){if((e22169 instanceof Error)){
var t = e22169;
return null;
} else {
throw e22169;

}
}})(),clojure$core$matrix$impl$common$get_impl_objs_$_iter__22158.call(null,cljs.core.rest.call(null,s__22159__$2)));
} else {
var G__22172 = cljs.core.rest.call(null,s__22159__$2);
s__22159__$1 = G__22172;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,clojure.core.matrix.implementations.KNOWN_IMPLEMENTATIONS);
})());
});
/**
 * Constructs an array from the provided data, attempting to use the given implementation.
 * Uses a default implementation if needed
 */
clojure.core.matrix.impl.common.construct_matrix = (function clojure$core$matrix$impl$common$construct_matrix(impl,data){
var or__3922__auto__ = clojure.core.matrix.protocols.construct_matrix.call(null,impl,data);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = (function (){try{return clojure.core.matrix.protocols.construct_matrix.call(null,clojure.core.matrix.implementations._STAR_matrix_implementation_STAR_,data);
}catch (e22175){if((e22175 instanceof clojure.core.matrix.impl.common.ClassCastException)){
var t = e22175;
return null;
} else {
throw e22175;

}
}})();
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
return clojure.core.matrix.protocols.construct_matrix.call(null,cljs.core.PersistentVector.EMPTY,data);
}
}
});
/**
 * Maps a function over all components of a persistent vector matrix. Like mapv but for matrices.
 * Assumes correct dimensionality / shape.
 * 
 * First array argument must be nested persistent vectors. Others may be
 * any arrays of the same shape.
 * 
 * Returns a nested persistent vector matrix or a scalar value.
 */
clojure.core.matrix.impl.common.mapmatrix = (function clojure$core$matrix$impl$common$mapmatrix(var_args){
var G__22182 = arguments.length;
switch (G__22182) {
case 2:
return clojure.core.matrix.impl.common.mapmatrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.impl.common.mapmatrix.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.core.matrix.impl.common.mapmatrix.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4514__auto__ = [];
var len__4499__auto___22184 = arguments.length;
var i__4500__auto___22185 = (0);
while(true){
if((i__4500__auto___22185 < len__4499__auto___22184)){
args_arr__4514__auto__.push((arguments[i__4500__auto___22185]));

var G__22186 = (i__4500__auto___22185 + (1));
i__4500__auto___22185 = G__22186;
continue;
} else {
}
break;
}

var argseq__4515__auto__ = (new cljs.core.IndexedSeq(args_arr__4514__auto__.slice((4)),(0),null));
return clojure.core.matrix.impl.common.mapmatrix.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4515__auto__);

}
});

clojure.core.matrix.impl.common.mapmatrix.cljs$core$IFn$_invoke$arity$2 = (function (f,m){
var dims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m));
if(((0) === dims)){
return f.call(null,(function (){var x__21930__auto__ = m;
if(typeof x__21930__auto__ === 'number'){
return x__21930__auto__;
} else {
return clojure.core.matrix.protocols.get_0d.call(null,x__21930__auto__);

}
})());
} else {
if(((1) === dims)){
return clojure.core.matrix.impl.common.construct_matrix.call(null,m,cljs.core.map.call(null,f,clojure.core.matrix.protocols.element_seq.call(null,m)));
} else {
var res = cljs.core.map.call(null,cljs.core.partial.call(null,clojure.core.matrix.impl.common.mapmatrix,f),clojure.core.matrix.protocols.get_major_slice_seq.call(null,m));
return clojure.core.matrix.protocols.reshape.call(null,clojure.core.matrix.protocols.coerce_param.call(null,m,res),cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,clojure.core.matrix.protocols.get_shape.call(null,m))], null),cljs.core.next.call(null,clojure.core.matrix.protocols.get_shape.call(null,res)))));

}
}
});

clojure.core.matrix.impl.common.mapmatrix.cljs$core$IFn$_invoke$arity$3 = (function (f,m1,m2){
var dims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m1));
if(((0) === dims)){
return f.call(null,(function (){var x__21930__auto__ = m1;
if(typeof x__21930__auto__ === 'number'){
return x__21930__auto__;
} else {
return clojure.core.matrix.protocols.get_0d.call(null,x__21930__auto__);

}
})(),(function (){var x__21930__auto__ = m2;
if(typeof x__21930__auto__ === 'number'){
return x__21930__auto__;
} else {
return clojure.core.matrix.protocols.get_0d.call(null,x__21930__auto__);

}
})());
} else {
if(((1) === dims)){
return clojure.core.matrix.impl.common.construct_matrix.call(null,m1,cljs.core.map.call(null,f,clojure.core.matrix.protocols.element_seq.call(null,m1),clojure.core.matrix.protocols.element_seq.call(null,m2)));
} else {
var res = cljs.core.map.call(null,cljs.core.partial.call(null,clojure.core.matrix.impl.common.mapmatrix,f),clojure.core.matrix.protocols.get_major_slice_seq.call(null,m1),clojure.core.matrix.protocols.get_major_slice_seq.call(null,m2));
return clojure.core.matrix.protocols.reshape.call(null,clojure.core.matrix.protocols.coerce_param.call(null,m1,res),cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,clojure.core.matrix.protocols.get_shape.call(null,m1))], null),cljs.core.next.call(null,clojure.core.matrix.protocols.get_shape.call(null,res)))));

}
}
});

clojure.core.matrix.impl.common.mapmatrix.cljs$core$IFn$_invoke$arity$4 = (function (f,m1,m2,m3){
var dims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m1));
if(((0) === dims)){
return f.call(null,(function (){var x__21930__auto__ = m1;
if(typeof x__21930__auto__ === 'number'){
return x__21930__auto__;
} else {
return clojure.core.matrix.protocols.get_0d.call(null,x__21930__auto__);

}
})(),(function (){var x__21930__auto__ = m2;
if(typeof x__21930__auto__ === 'number'){
return x__21930__auto__;
} else {
return clojure.core.matrix.protocols.get_0d.call(null,x__21930__auto__);

}
})(),(function (){var x__21930__auto__ = m3;
if(typeof x__21930__auto__ === 'number'){
return x__21930__auto__;
} else {
return clojure.core.matrix.protocols.get_0d.call(null,x__21930__auto__);

}
})());
} else {
if(((1) === dims)){
return clojure.core.matrix.impl.common.construct_matrix.call(null,m1,cljs.core.map.call(null,f,clojure.core.matrix.protocols.element_seq.call(null,m1),clojure.core.matrix.protocols.element_seq.call(null,m2),clojure.core.matrix.protocols.element_seq.call(null,m3)));
} else {
var res = cljs.core.mapv.call(null,cljs.core.partial.call(null,clojure.core.matrix.impl.common.mapmatrix,f),clojure.core.matrix.protocols.get_major_slice_seq.call(null,m1),clojure.core.matrix.protocols.get_major_slice_seq.call(null,m2),clojure.core.matrix.protocols.get_major_slice_seq.call(null,m3));
return clojure.core.matrix.protocols.reshape.call(null,clojure.core.matrix.protocols.coerce_param.call(null,m1,res),cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,clojure.core.matrix.protocols.get_shape.call(null,m1))], null),cljs.core.next.call(null,clojure.core.matrix.protocols.get_shape.call(null,res)))));

}
}
});

clojure.core.matrix.impl.common.mapmatrix.cljs$core$IFn$_invoke$arity$variadic = (function (f,m1,m2,m3,more){
var dims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m1));
if(((0) === dims)){
return cljs.core.apply.call(null,f,(function (){var x__21930__auto__ = m1;
if(typeof x__21930__auto__ === 'number'){
return x__21930__auto__;
} else {
return clojure.core.matrix.protocols.get_0d.call(null,x__21930__auto__);

}
})(),(function (){var x__21930__auto__ = m2;
if(typeof x__21930__auto__ === 'number'){
return x__21930__auto__;
} else {
return clojure.core.matrix.protocols.get_0d.call(null,x__21930__auto__);

}
})(),(function (){var x__21930__auto__ = m3;
if(typeof x__21930__auto__ === 'number'){
return x__21930__auto__;
} else {
return clojure.core.matrix.protocols.get_0d.call(null,x__21930__auto__);

}
})(),cljs.core.map.call(null,clojure.core.matrix.protocols.get_0d,more));
} else {
if(((1) === dims)){
return clojure.core.matrix.impl.common.construct_matrix.call(null,m1,cljs.core.apply.call(null,cljs.core.map,f,clojure.core.matrix.protocols.element_seq.call(null,m1),clojure.core.matrix.protocols.element_seq.call(null,m2),clojure.core.matrix.protocols.element_seq.call(null,m3),cljs.core.map.call(null,clojure.core.matrix.protocols.element_seq,more)));
} else {
var res = cljs.core.apply.call(null,cljs.core.map,cljs.core.partial.call(null,clojure.core.matrix.impl.common.mapmatrix,f),clojure.core.matrix.protocols.get_major_slice_seq.call(null,m1),clojure.core.matrix.protocols.get_major_slice_seq.call(null,m2),clojure.core.matrix.protocols.get_major_slice_seq.call(null,m3),cljs.core.map.call(null,clojure.core.matrix.protocols.get_major_slice_seq,more));
return clojure.core.matrix.protocols.reshape.call(null,clojure.core.matrix.protocols.coerce_param.call(null,m1,res),cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,clojure.core.matrix.protocols.get_shape.call(null,m1))], null),cljs.core.next.call(null,clojure.core.matrix.protocols.get_shape.call(null,res)))));

}
}
});

/** @this {Function} */
clojure.core.matrix.impl.common.mapmatrix.cljs$lang$applyTo = (function (seq22177){
var G__22178 = cljs.core.first.call(null,seq22177);
var seq22177__$1 = cljs.core.next.call(null,seq22177);
var G__22179 = cljs.core.first.call(null,seq22177__$1);
var seq22177__$2 = cljs.core.next.call(null,seq22177__$1);
var G__22180 = cljs.core.first.call(null,seq22177__$2);
var seq22177__$3 = cljs.core.next.call(null,seq22177__$2);
var G__22181 = cljs.core.first.call(null,seq22177__$3);
var seq22177__$4 = cljs.core.next.call(null,seq22177__$3);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22178,G__22179,G__22180,G__22181,seq22177__$4);
});

clojure.core.matrix.impl.common.mapmatrix.cljs$lang$maxFixedArity = (4);

/**
 * Logistic function, with primitive type hints
 */
clojure.core.matrix.impl.common.logistic_fn = (function clojure$core$matrix$impl$common$logistic_fn(t){
var e_t = Math.exp((- t));
return (1.0 / (1.0 + e_t));
});
/**
 * Softplus function, with primitive type hints
 */
clojure.core.matrix.impl.common.softplus_fn = (function clojure$core$matrix$impl$common$softplus_fn(t){
if((t > 100.0)){
return t;
} else {
var et = Math.exp(t);
return Math.log((1.0 + et));
}
});
/**
 * ReLU function, with primitive type hints
 */
clojure.core.matrix.impl.common.relu_fn = (function clojure$core$matrix$impl$common$relu_fn(t){
return Math.max(0.0,t);
});
/**
 * Returns true if matrix is square (2D with same number of rows and columns)
 */
clojure.core.matrix.impl.common.square_QMARK_ = (function clojure$core$matrix$impl$common$square_QMARK_(m){
return ((((2) === cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m)))) && ((cljs.core.long$.call(null,clojure.core.matrix.protocols.dimension_count.call(null,m,(0))) === cljs.core.long$.call(null,clojure.core.matrix.protocols.dimension_count.call(null,m,(1))))));
});
/**
 * Returns true iff square matrix m is symmetric.
 */
clojure.core.matrix.impl.common.symmetric_matrix_entries_QMARK_ = (function clojure$core$matrix$impl$common$symmetric_matrix_entries_QMARK_(m){
var dim = cljs.core.long$.call(null,cljs.core.first.call(null,clojure.core.matrix.protocols.get_shape.call(null,m)));
var f = ((function (dim){
return (function clojure$core$matrix$impl$common$symmetric_matrix_entries_QMARK__$_f(i,j){
while(true){
if((i >= dim)){
return true;
} else {
if((j >= dim)){
var G__22187 = ((1) + i);
var G__22188 = ((2) + i);
i = G__22187;
j = G__22188;
continue;
} else {
if(cljs.core._EQ_.call(null,clojure.core.matrix.protocols.get_2d.call(null,m,i,j),clojure.core.matrix.protocols.get_2d.call(null,m,j,i))){
var G__22189 = i;
var G__22190 = (j + (1));
i = G__22189;
j = G__22190;
continue;
} else {
return false;

}
}
}
break;
}
});})(dim))
;
return f.call(null,(0),(1));
});

//# sourceMappingURL=common.js.map?rel=1526826985407
