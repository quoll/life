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
var G__13133 = arguments.length;
switch (G__13133) {
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
var G__13135__delegate = function (idx){
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.map.call(null,cljs.core._LT_,idx,src_shape))){
return cljs.core.apply.call(null,clojure.core.matrix.mget,a,idx);
} else {
return default$;
}
};
var G__13135 = function (var_args){
var idx = null;
if (arguments.length > 0) {
var G__13136__i = 0, G__13136__a = new Array(arguments.length -  0);
while (G__13136__i < G__13136__a.length) {G__13136__a[G__13136__i] = arguments[G__13136__i + 0]; ++G__13136__i;}
  idx = new cljs.core.IndexedSeq(G__13136__a,0,null);
} 
return G__13135__delegate.call(this,idx);};
G__13135.cljs$lang$maxFixedArity = 0;
G__13135.cljs$lang$applyTo = (function (arglist__13137){
var idx = cljs.core.seq(arglist__13137);
return G__13135__delegate(idx);
});
G__13135.cljs$core$IFn$_invoke$arity$variadic = G__13135__delegate;
return G__13135;
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
return clojure.core.matrix.emap.call(null,life.matrix.nbool.call(null,(function (p1__13138_SHARP_){
return cljs.core._EQ_.call(null,(2),p1__13138_SHARP_);
})),clojure.core.matrix.add.call(null,a,b));
});
/**
 * Performs an element-wise boolean OR operation on matrices
 * using numerical boolean values (0/1)
 */
life.matrix.or_STAR_ = (function life$matrix$or_STAR_(a,b){
return clojure.core.matrix.emap.call(null,life.matrix.nbool.call(null,(function (p1__13139_SHARP_){
return !((p1__13139_SHARP_ === (0)));
})),clojure.core.matrix.add.call(null,a,b));
});
/**
 * Creates an outer product of 2 sequences. The elements of the product
 * are stored in a record with keys :a :b. Ideally these would be a
 * 2-element vector, but matrix operations treat such vectors as a new
 * dimension.
 */
life.matrix.outer = (function life$matrix$outer(a,b){
return clojure.core.matrix.array.call(null,(function (){var iter__4292__auto__ = (function life$matrix$outer_$_iter__13140(s__13141){
return (new cljs.core.LazySeq(null,(function (){
var s__13141__$1 = s__13141;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__13141__$1);
if(temp__5457__auto__){
var s__13141__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13141__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__13141__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__13143 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__13142 = (0);
while(true){
if((i__13142 < size__4291__auto__)){
var x = cljs.core._nth.call(null,c__4290__auto__,i__13142);
cljs.core.chunk_append.call(null,b__13143,(function (){var iter__4292__auto__ = ((function (i__13142,x,c__4290__auto__,size__4291__auto__,b__13143,s__13141__$2,temp__5457__auto__){
return (function life$matrix$outer_$_iter__13140_$_iter__13144(s__13145){
return (new cljs.core.LazySeq(null,((function (i__13142,x,c__4290__auto__,size__4291__auto__,b__13143,s__13141__$2,temp__5457__auto__){
return (function (){
var s__13145__$1 = s__13145;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__13145__$1);
if(temp__5457__auto____$1){
var s__13145__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13145__$2)){
var c__4290__auto____$1 = cljs.core.chunk_first.call(null,s__13145__$2);
var size__4291__auto____$1 = cljs.core.count.call(null,c__4290__auto____$1);
var b__13147 = cljs.core.chunk_buffer.call(null,size__4291__auto____$1);
if((function (){var i__13146 = (0);
while(true){
if((i__13146 < size__4291__auto____$1)){
var y = cljs.core._nth.call(null,c__4290__auto____$1,i__13146);
cljs.core.chunk_append.call(null,b__13147,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"a","a",-2123407586),x,new cljs.core.Keyword(null,"b","b",1482224470),y], null));

var G__13152 = (i__13146 + (1));
i__13146 = G__13152;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13147),life$matrix$outer_$_iter__13140_$_iter__13144.call(null,cljs.core.chunk_rest.call(null,s__13145__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13147),null);
}
} else {
var y = cljs.core.first.call(null,s__13145__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"a","a",-2123407586),x,new cljs.core.Keyword(null,"b","b",1482224470),y], null),life$matrix$outer_$_iter__13140_$_iter__13144.call(null,cljs.core.rest.call(null,s__13145__$2)));
}
} else {
return null;
}
break;
}
});})(i__13142,x,c__4290__auto__,size__4291__auto__,b__13143,s__13141__$2,temp__5457__auto__))
,null,null));
});})(i__13142,x,c__4290__auto__,size__4291__auto__,b__13143,s__13141__$2,temp__5457__auto__))
;
return iter__4292__auto__.call(null,b);
})());

var G__13153 = (i__13142 + (1));
i__13142 = G__13153;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13143),life$matrix$outer_$_iter__13140.call(null,cljs.core.chunk_rest.call(null,s__13141__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13143),null);
}
} else {
var x = cljs.core.first.call(null,s__13141__$2);
return cljs.core.cons.call(null,(function (){var iter__4292__auto__ = ((function (x,s__13141__$2,temp__5457__auto__){
return (function life$matrix$outer_$_iter__13140_$_iter__13148(s__13149){
return (new cljs.core.LazySeq(null,((function (x,s__13141__$2,temp__5457__auto__){
return (function (){
var s__13149__$1 = s__13149;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__13149__$1);
if(temp__5457__auto____$1){
var s__13149__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13149__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__13149__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__13151 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__13150 = (0);
while(true){
if((i__13150 < size__4291__auto__)){
var y = cljs.core._nth.call(null,c__4290__auto__,i__13150);
cljs.core.chunk_append.call(null,b__13151,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"a","a",-2123407586),x,new cljs.core.Keyword(null,"b","b",1482224470),y], null));

var G__13154 = (i__13150 + (1));
i__13150 = G__13154;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13151),life$matrix$outer_$_iter__13140_$_iter__13148.call(null,cljs.core.chunk_rest.call(null,s__13149__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13151),null);
}
} else {
var y = cljs.core.first.call(null,s__13149__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"a","a",-2123407586),x,new cljs.core.Keyword(null,"b","b",1482224470),y], null),life$matrix$outer_$_iter__13140_$_iter__13148.call(null,cljs.core.rest.call(null,s__13149__$2)));
}
} else {
return null;
}
break;
}
});})(x,s__13141__$2,temp__5457__auto__))
,null,null));
});})(x,s__13141__$2,temp__5457__auto__))
;
return iter__4292__auto__.call(null,b);
})(),life$matrix$outer_$_iter__13140.call(null,cljs.core.rest.call(null,s__13141__$2)));
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
return clojure.core.matrix.emap.call(null,(function (p__13155){
var map__13156 = p__13155;
var map__13156__$1 = ((((!((map__13156 == null)))?(((((map__13156.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13156.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13156):map__13156);
var a = cljs.core.get.call(null,map__13156__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
var b = cljs.core.get.call(null,map__13156__$1,new cljs.core.Keyword(null,"b","b",1482224470));
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
return clojure.core.matrix.emap.call(null,life.matrix.nbool.call(null,(function (p1__13158_SHARP_){
return cljs.core._EQ_.call(null,x,p1__13158_SHARP_);
})),a);
});
});
life.matrix.power = (function life$matrix$power(f,n){

return (function (p1__13159_SHARP_){
return cljs.core.nth.call(null,cljs.core.iterate.call(null,f,p1__13159_SHARP_),n);
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
return (function (p__13160){
var vec__13161 = p__13160;
var x = cljs.core.nth.call(null,vec__13161,(0),null);
var y = cljs.core.nth.call(null,vec__13161,(1),null);
return cljs.core.not_EQ_.call(null,x,y);
});})(s))
,cljs.core.map.call(null,cljs.core.vector,s,cljs.core.rest.call(null,s))));
});

//# sourceMappingURL=matrix.js.map
