// Compiled by ClojureScript 1.10.238 {}
goog.provide('life.matrix');
goog.require('cljs.core');
goog.require('clojure.core.matrix');
/**
 * Create a function from a boolean function, mapping a truthy value to 1 or 0.
 * e.g. ((nbool not) false) => 1
 *      ((nbool not) true) => 0
 */
life.matrix.nbool = (function life$matrix$nbool(f){
return (function (v){
if(cljs.core.truth_(f.call(null,v))){
return (1);
} else {
return (0);
}
});
});
/**
 * Creates a matrix of a given shape that contains a given matrix 'a'.
 * If the new matrix is smaller than the source matrix, then the source
 * matrix is truncated.
 * If the new matrix is larger than the source matrix in any dimension,
 * then it is padded out using the 'default' value, or 0 if not provided.
 */
life.matrix.takeof = (function life$matrix$takeof(var_args){
var G__15012 = arguments.length;
switch (G__15012) {
case 2:
return life.matrix.takeof.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return life.matrix.takeof.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

life.matrix.takeof.cljs$core$IFn$_invoke$arity$2 = (function (sh,a){
return life.matrix.takeof.call(null,sh,a,(0));
});

life.matrix.takeof.cljs$core$IFn$_invoke$arity$3 = (function (sh,a,default$){
var src_shape = clojure.core.matrix.shape.call(null,a);
return clojure.core.matrix.compute_matrix.call(null,sh,((function (src_shape){
return (function() { 
var G__15014__delegate = function (idx){
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.map.call(null,cljs.core._LT_,idx,src_shape))){
return cljs.core.apply.call(null,clojure.core.matrix.mget,a,idx);
} else {
return default$;
}
};
var G__15014 = function (var_args){
var idx = null;
if (arguments.length > 0) {
var G__15015__i = 0, G__15015__a = new Array(arguments.length -  0);
while (G__15015__i < G__15015__a.length) {G__15015__a[G__15015__i] = arguments[G__15015__i + 0]; ++G__15015__i;}
  idx = new cljs.core.IndexedSeq(G__15015__a,0,null);
} 
return G__15014__delegate.call(this,idx);};
G__15014.cljs$lang$maxFixedArity = 0;
G__15014.cljs$lang$applyTo = (function (arglist__15016){
var idx = cljs.core.seq(arglist__15016);
return G__15014__delegate(idx);
});
G__15014.cljs$core$IFn$_invoke$arity$variadic = G__15014__delegate;
return G__15014;
})()
;})(src_shape))
);
});

life.matrix.takeof.cljs$lang$maxFixedArity = 3;

/**
 * Performs an element-wise boolean AND operation on matrices
 * using numerical boolean values (0/1)
 */
life.matrix.and_STAR_ = (function life$matrix$and_STAR_(a,b){
return clojure.core.matrix.emap.call(null,life.matrix.nbool.call(null,(function (p1__15017_SHARP_){
return cljs.core._EQ_.call(null,(2),p1__15017_SHARP_);
})),clojure.core.matrix.add.call(null,a,b));
});
/**
 * Performs an element-wise boolean OR operation on matrices
 * using numerical boolean values (0/1)
 */
life.matrix.or_STAR_ = (function life$matrix$or_STAR_(a,b){
return clojure.core.matrix.emap.call(null,life.matrix.nbool.call(null,(function (p1__15018_SHARP_){
return !((p1__15018_SHARP_ === (0)));
})),clojure.core.matrix.add.call(null,a,b));
});
/**
 * Creates an outer product of 2 sequences. The elements of the product
 * are stored in a record with keys :a :b. Ideally these would be a
 * 2-element vector, but matrix operations treat such vectors as a new
 * dimension.
 */
life.matrix.outer = (function life$matrix$outer(a,b){
return clojure.core.matrix.array.call(null,(function (){var iter__4292__auto__ = (function life$matrix$outer_$_iter__15019(s__15020){
return (new cljs.core.LazySeq(null,(function (){
var s__15020__$1 = s__15020;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__15020__$1);
if(temp__5457__auto__){
var s__15020__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15020__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__15020__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__15022 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__15021 = (0);
while(true){
if((i__15021 < size__4291__auto__)){
var x = cljs.core._nth.call(null,c__4290__auto__,i__15021);
cljs.core.chunk_append.call(null,b__15022,(function (){var iter__4292__auto__ = ((function (i__15021,x,c__4290__auto__,size__4291__auto__,b__15022,s__15020__$2,temp__5457__auto__){
return (function life$matrix$outer_$_iter__15019_$_iter__15023(s__15024){
return (new cljs.core.LazySeq(null,((function (i__15021,x,c__4290__auto__,size__4291__auto__,b__15022,s__15020__$2,temp__5457__auto__){
return (function (){
var s__15024__$1 = s__15024;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__15024__$1);
if(temp__5457__auto____$1){
var s__15024__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15024__$2)){
var c__4290__auto____$1 = cljs.core.chunk_first.call(null,s__15024__$2);
var size__4291__auto____$1 = cljs.core.count.call(null,c__4290__auto____$1);
var b__15026 = cljs.core.chunk_buffer.call(null,size__4291__auto____$1);
if((function (){var i__15025 = (0);
while(true){
if((i__15025 < size__4291__auto____$1)){
var y = cljs.core._nth.call(null,c__4290__auto____$1,i__15025);
cljs.core.chunk_append.call(null,b__15026,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"a","a",-2123407586),x,new cljs.core.Keyword(null,"b","b",1482224470),y], null));

var G__15031 = (i__15025 + (1));
i__15025 = G__15031;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15026),life$matrix$outer_$_iter__15019_$_iter__15023.call(null,cljs.core.chunk_rest.call(null,s__15024__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15026),null);
}
} else {
var y = cljs.core.first.call(null,s__15024__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"a","a",-2123407586),x,new cljs.core.Keyword(null,"b","b",1482224470),y], null),life$matrix$outer_$_iter__15019_$_iter__15023.call(null,cljs.core.rest.call(null,s__15024__$2)));
}
} else {
return null;
}
break;
}
});})(i__15021,x,c__4290__auto__,size__4291__auto__,b__15022,s__15020__$2,temp__5457__auto__))
,null,null));
});})(i__15021,x,c__4290__auto__,size__4291__auto__,b__15022,s__15020__$2,temp__5457__auto__))
;
return iter__4292__auto__.call(null,b);
})());

var G__15032 = (i__15021 + (1));
i__15021 = G__15032;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15022),life$matrix$outer_$_iter__15019.call(null,cljs.core.chunk_rest.call(null,s__15020__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15022),null);
}
} else {
var x = cljs.core.first.call(null,s__15020__$2);
return cljs.core.cons.call(null,(function (){var iter__4292__auto__ = ((function (x,s__15020__$2,temp__5457__auto__){
return (function life$matrix$outer_$_iter__15019_$_iter__15027(s__15028){
return (new cljs.core.LazySeq(null,((function (x,s__15020__$2,temp__5457__auto__){
return (function (){
var s__15028__$1 = s__15028;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__15028__$1);
if(temp__5457__auto____$1){
var s__15028__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15028__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__15028__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__15030 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__15029 = (0);
while(true){
if((i__15029 < size__4291__auto__)){
var y = cljs.core._nth.call(null,c__4290__auto__,i__15029);
cljs.core.chunk_append.call(null,b__15030,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"a","a",-2123407586),x,new cljs.core.Keyword(null,"b","b",1482224470),y], null));

var G__15033 = (i__15029 + (1));
i__15029 = G__15033;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15030),life$matrix$outer_$_iter__15019_$_iter__15027.call(null,cljs.core.chunk_rest.call(null,s__15028__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15030),null);
}
} else {
var y = cljs.core.first.call(null,s__15028__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"a","a",-2123407586),x,new cljs.core.Keyword(null,"b","b",1482224470),y], null),life$matrix$outer_$_iter__15019_$_iter__15027.call(null,cljs.core.rest.call(null,s__15028__$2)));
}
} else {
return null;
}
break;
}
});})(x,s__15020__$2,temp__5457__auto__))
,null,null));
});})(x,s__15020__$2,temp__5457__auto__))
;
return iter__4292__auto__.call(null,b);
})(),life$matrix$outer_$_iter__15019.call(null,cljs.core.rest.call(null,s__15020__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,a);
})());
});
/**
 * Creates a function based on applying f bound to a single argument,
 * across remaining arguments that are the outer product of x and y.
 */
life.matrix.outer_fn = (function life$matrix$outer_fn(f,x,y){
return (function (m){
return clojure.core.matrix.emap.call(null,(function (p__15034){
var map__15035 = p__15034;
var map__15035__$1 = ((((!((map__15035 == null)))?(((((map__15035.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15035.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15035):map__15035);
var a = cljs.core.get.call(null,map__15035__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
var b = cljs.core.get.call(null,map__15035__$1,new cljs.core.Keyword(null,"b","b",1482224470));
return f.call(null,f.call(null,m,(0),a),(1),b);
}),life.matrix.outer.call(null,x,y));
});
});
/**
 * Creates a function from a matrix, that when a applied to a scalar will
 * return a boolean matrix where every matrix element that matches the
 * scalar will be true (1) in the result.
 * e.g. ((=x [1 2 3]) 2) => [0 1 0]
 *      ((=x [1 2 3]) 3) => [0 0 1]
 */
life.matrix._EQ_x = (function life$matrix$_EQ_x(a){
return (function (x){
return clojure.core.matrix.emap.call(null,life.matrix.nbool.call(null,(function (p1__15037_SHARP_){
return cljs.core._EQ_.call(null,x,p1__15037_SHARP_);
})),a);
});
});
life.matrix.power = (function life$matrix$power(f,n){

return (function (p1__15038_SHARP_){
return cljs.core.nth.call(null,cljs.core.iterate.call(null,f,p1__15038_SHARP_),n);
});
});
/**
 * Finds the fixpoint of a function starting at a given argument.
 * The function is repeatedly applied to the result of the previous application
 * until the result from the function is the same as the argument that led to it.
 * e.g. (power-limit #(min (inc %) 10) 1) => 10
 */
life.matrix.power_limit = (function life$matrix$power_limit(f,a){
var s = cljs.core.iterate.call(null,f,a);
return cljs.core.ffirst.call(null,cljs.core.drop_while.call(null,((function (s){
return (function (p__15039){
var vec__15040 = p__15039;
var x = cljs.core.nth.call(null,vec__15040,(0),null);
var y = cljs.core.nth.call(null,vec__15040,(1),null);
return cljs.core.not_EQ_.call(null,x,y);
});})(s))
,cljs.core.map.call(null,cljs.core.vector,s,cljs.core.rest.call(null,s))));
});

//# sourceMappingURL=matrix.js.map
