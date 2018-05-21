// Compiled by ClojureScript 1.10.238 {}
goog.provide('clojure.core.matrix.impl.persistent_vector');
goog.require('cljs.core');
goog.require('clojure.core.matrix.protocols');
goog.require('clojure.core.matrix.implementations');
goog.require('clojure.core.matrix.impl.common');
goog.require('clojure.core.matrix.impl.mathsops');
/**
 * Ensures a vector is fully coerced to nested persistent vectors
 */
clojure.core.matrix.impl.persistent_vector.coerce_nested = (function clojure$core$matrix$impl$persistent_vector$coerce_nested(v){
return cljs.core.mapv.call(null,clojure.core.matrix.impl.persistent_vector.persistent_vector_coerce,v);
});
/**
 * Maps a function over a persistent vector, only modifying the vector if the function
 * returns a different value
 */
clojure.core.matrix.impl.persistent_vector.mapv_identity_check = (function clojure$core$matrix$impl$persistent_vector$mapv_identity_check(f,v){
var n = cljs.core.count.call(null,v);
var i = (0);
var v__$1 = v;
while(true){
if((i < n)){
var x = cljs.core.nth.call(null,v__$1,i);
var y = f.call(null,x);
var G__29490 = (i + (1));
var G__29491 = (((x === y))?v__$1:cljs.core.assoc.call(null,v__$1,i,y));
i = G__29490;
v__$1 = G__29491;
continue;
} else {
return v__$1;
}
break;
}
});
clojure.core.matrix.impl.persistent_vector.check_vector_shape = (function clojure$core$matrix$impl$persistent_vector$check_vector_shape(v,shape){
var and__3911__auto__ = (v instanceof cljs.core.PersistentVector);
if(and__3911__auto__){
var and__3911__auto____$1 = (cljs.core.count.call(null,v) === cljs.core.long$.call(null,cljs.core.first.call(null,shape)));
if(and__3911__auto____$1){
var temp__5455__auto__ = cljs.core.next.call(null,shape);
if(temp__5455__auto__){
var ns = temp__5455__auto__;
return cljs.core.every_QMARK_.call(null,((function (ns,temp__5455__auto__,and__3911__auto____$1,and__3911__auto__){
return (function (p1__29492_SHARP_){
return clojure.core.matrix.impl.persistent_vector.check_vector_shape.call(null,p1__29492_SHARP_,ns);
});})(ns,temp__5455__auto__,and__3911__auto____$1,and__3911__auto__))
,v);
} else {
return cljs.core.every_QMARK_.call(null,((function (temp__5455__auto__,and__3911__auto____$1,and__3911__auto__){
return (function (p1__29493_SHARP_){
return !((p1__29493_SHARP_ instanceof cljs.core.PersistentVector));
});})(temp__5455__auto__,and__3911__auto____$1,and__3911__auto__))
,v);
}
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
});
/**
 * Test if array is already in nested persistent vector array format.
 */
clojure.core.matrix.impl.persistent_vector.is_nested_persistent_vectors_QMARK_ = (function clojure$core$matrix$impl$persistent_vector$is_nested_persistent_vectors_QMARK_(x){
if(typeof x === 'number'){
return true;
} else {
if(cljs.core.truth_(clojure.core.matrix.protocols.is_scalar_QMARK_.call(null,x))){
return true;
} else {
if(!((x instanceof cljs.core.PersistentVector))){
return false;
} else {
var and__3911__auto__ = cljs.core.every_QMARK_.call(null,clojure.core.matrix.impl.persistent_vector.is_nested_persistent_vectors_QMARK_,x);
if(and__3911__auto__){
return clojure.core.matrix.impl.persistent_vector.check_vector_shape.call(null,x,clojure.core.matrix.protocols.get_shape.call(null,x));
} else {
return and__3911__auto__;
}

}
}
}
});
/**
 * Coerces to nested persistent vectors
 */
clojure.core.matrix.impl.persistent_vector.persistent_vector_coerce = (function clojure$core$matrix$impl$persistent_vector$persistent_vector_coerce(x){
var dims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,x));
if((dims > (0))){
return clojure.core.matrix.protocols.convert_to_nested_vectors.call(null,x);
} else {
if((((dims === (0))) && (cljs.core.not.call(null,clojure.core.matrix.protocols.is_scalar_QMARK_.call(null,x))))){
return clojure.core.matrix.protocols.get_0d.call(null,x);
} else {
if((x == null)){
return x;
} else {
if((x instanceof cljs.core.IIterable)){
return clojure.core.matrix.impl.persistent_vector.coerce_nested.call(null,x);
} else {
if(cljs.core.sequential_QMARK_.call(null,x)){
return clojure.core.matrix.impl.persistent_vector.coerce_nested.call(null,x);
} else {
return x;

}
}
}
}
}
});
/**
 * Calculates the dimensionality (== nesting depth) of nested persistent vectors
 */
clojure.core.matrix.impl.persistent_vector.vector_dimensionality = (function clojure$core$matrix$impl$persistent_vector$vector_dimensionality(m){
if(cljs.core.vector_QMARK_.call(null,m)){
if((cljs.core.count.call(null,m) > (0))){
return ((1) + clojure.core.matrix.impl.persistent_vector.vector_dimensionality.call(null,cljs.core.nth.call(null,m,(0))));
} else {
return (1);
}
} else {
return cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m));

}
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PImplementation$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PImplementation$implementation_key$arity$1 = (function (m){
var m__$1 = this;
return new cljs.core.Keyword(null,"persistent-vector","persistent-vector",2032618025);
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PImplementation$meta_info$arity$1 = (function (m){
var m__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Implementation for nested Clojure persistent vectors\n             used as matrices"], null);
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PImplementation$new_vector$arity$2 = (function (m,length){
var m__$1 = this;
return cljs.core.vec.call(null,cljs.core.repeat.call(null,length,0.0));
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PImplementation$new_matrix$arity$3 = (function (m,rows,columns){
var m__$1 = this;
return cljs.core.vec.call(null,cljs.core.repeat.call(null,rows,clojure.core.matrix.protocols.new_vector.call(null,m__$1,columns)));
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PImplementation$new_matrix_nd$arity$2 = (function (m,dims){
var m__$1 = this;
var temp__5455__auto__ = cljs.core.seq.call(null,dims);
if(temp__5455__auto__){
var dims__$1 = temp__5455__auto__;
return cljs.core.vec.call(null,cljs.core.repeat.call(null,cljs.core.first.call(null,dims__$1),clojure.core.matrix.protocols.new_matrix_nd.call(null,m__$1,cljs.core.next.call(null,dims__$1))));
} else {
return 0.0;
}
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PImplementation$construct_matrix$arity$2 = (function (m,data){
var m__$1 = this;
return clojure.core.matrix.impl.persistent_vector.persistent_vector_coerce.call(null,data);
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PImplementation$supports_dimensionality_QMARK_$arity$2 = (function (m,dims){
var m__$1 = this;
return true;
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PBroadcast$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PBroadcast$broadcast$arity$2 = (function (m,target_shape){
var m__$1 = this;
var mshape = clojure.core.matrix.protocols.get_shape.call(null,m__$1);
var dims = cljs.core.long$.call(null,cljs.core.count.call(null,mshape));
var tdims = cljs.core.long$.call(null,cljs.core.count.call(null,target_shape));
if((dims > tdims)){
throw cljs.core.ex_info.call(null,["Can't broadcast to a lower dimensional shape"].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
if(!(cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.map.call(null,cljs.core._EQ__EQ_,mshape,cljs.core.take_last.call(null,dims,target_shape))))){
throw cljs.core.ex_info.call(null,["Incompatible shapes, cannot broadcast shape ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.vec.call(null,mshape))," to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.vec.call(null,target_shape))].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
return cljs.core.reduce.call(null,((function (mshape,dims,tdims,m__$1){
return (function (m__$2,dup){
return cljs.core.vec.call(null,cljs.core.repeat.call(null,dup,m__$2));
});})(mshape,dims,tdims,m__$1))
,m__$1,cljs.core.reverse.call(null,cljs.core.drop_last.call(null,dims,target_shape)));

}
}
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PBroadcastLike$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PBroadcastLike$broadcast_like$arity$2 = (function (m,a){
var m__$1 = this;
return clojure.core.matrix.protocols.broadcast.call(null,a,clojure.core.matrix.protocols.get_shape.call(null,m__$1));
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PBroadcastCoerce$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PBroadcastCoerce$broadcast_coerce$arity$2 = (function (m,a){
var m__$1 = this;
return clojure.core.matrix.protocols.broadcast.call(null,clojure.core.matrix.impl.persistent_vector.persistent_vector_coerce.call(null,a),clojure.core.matrix.protocols.get_shape.call(null,m__$1));
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PIndexedAccess$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PIndexedAccess$get_1d$arity$2 = (function (m,x){
var m__$1 = this;
var r = cljs.core.nth.call(null,m__$1,(x | (0)));
var x__21930__auto__ = r;
if(typeof x__21930__auto__ === 'number'){
return x__21930__auto__;
} else {
return clojure.core.matrix.protocols.get_0d.call(null,x__21930__auto__);

}
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PIndexedAccess$get_2d$arity$3 = (function (m,x,y){
var m__$1 = this;
var row = cljs.core.nth.call(null,m__$1,(x | (0)));
return clojure.core.matrix.protocols.get_1d.call(null,row,y);
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PIndexedAccess$get_nd$arity$2 = (function (m,indexes){
var m__$1 = this;
var temp__5455__auto__ = cljs.core.seq.call(null,indexes);
if(temp__5455__auto__){
var indexes__$1 = temp__5455__auto__;
var temp__5455__auto____$1 = cljs.core.next.call(null,indexes__$1);
if(temp__5455__auto____$1){
var next_indexes = temp__5455__auto____$1;
var m__$2 = cljs.core.nth.call(null,m__$1,(cljs.core.first.call(null,indexes__$1) | (0)));
return clojure.core.matrix.protocols.get_nd.call(null,m__$2,next_indexes);
} else {
return cljs.core.nth.call(null,m__$1,(cljs.core.first.call(null,indexes__$1) | (0)));
}
} else {
return m__$1;
}
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PIndexedSetting$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PIndexedSetting$set_1d$arity$3 = (function (m,row,v){
var m__$1 = this;
return cljs.core.assoc.call(null,m__$1,row,v);
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PIndexedSetting$set_2d$arity$4 = (function (m,row,column,v){
var m__$1 = this;
return cljs.core.assoc.call(null,m__$1,row,clojure.core.matrix.protocols.set_1d.call(null,m__$1.call(null,row),column,v));
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PIndexedSetting$set_nd$arity$3 = (function (m,indexes,v){
var m__$1 = this;
var temp__5455__auto__ = cljs.core.seq.call(null,indexes);
if(temp__5455__auto__){
var indexes__$1 = temp__5455__auto__;
var fi = cljs.core.first.call(null,indexes__$1);
if(((1) === cljs.core.count.call(null,indexes__$1))){
return cljs.core.assoc.call(null,m__$1,fi,v);
} else {
return cljs.core.assoc.call(null,m__$1,fi,clojure.core.matrix.protocols.set_nd.call(null,m__$1.call(null,fi),cljs.core.next.call(null,indexes__$1),v));
}
} else {
throw cljs.core.ex_info.call(null,["Trying to set on a persistent vector with insufficient indexes?"].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PIndexedSetting$is_mutable_QMARK_$arity$1 = (function (m){
var m__$1 = this;
return false;
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixSlices$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixSlices$get_row$arity$2 = (function (m,i){
var m__$1 = this;
return cljs.core.nth.call(null,m__$1,cljs.core.long$.call(null,i));
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixSlices$get_column$arity$2 = (function (m,i){
var m__$1 = this;
return clojure.core.matrix.protocols.get_slice.call(null,m__$1,(1),i);
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixSlices$get_major_slice$arity$2 = (function (m,i){
var m__$1 = this;
var sl = cljs.core.nth.call(null,m__$1,cljs.core.long$.call(null,i));
return sl;
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixSlices$get_slice$arity$3 = (function (m,dimension,i){
var m__$1 = this;
var dimension__$1 = cljs.core.long$.call(null,dimension);
if((dimension__$1 === (0))){
return clojure.core.matrix.protocols.get_major_slice.call(null,m__$1,i);
} else {
var sd = (dimension__$1 - (1));
return cljs.core.mapv.call(null,((function (sd,dimension__$1,m__$1){
return (function (p1__29494_SHARP_){
return clojure.core.matrix.protocols.get_slice.call(null,p1__29494_SHARP_,sd,i);
});})(sd,dimension__$1,m__$1))
,m__$1);
}
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixRows$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixRows$get_rows$arity$1 = (function (m){
var m__$1 = this;
return m__$1;
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixColumns$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixColumns$get_columns$arity$1 = (function (m){
var m__$1 = this;
return cljs.core.vec.call(null,(function (){var iter__4292__auto__ = ((function (m__$1){
return (function clojure$core$matrix$impl$persistent_vector$iter__29496(s__29497){
return (new cljs.core.LazySeq(null,((function (m__$1){
return (function (){
var s__29497__$1 = s__29497;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__29497__$1);
if(temp__5457__auto__){
var s__29497__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29497__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__29497__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__29499 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__29498 = (0);
while(true){
if((i__29498 < size__4291__auto__)){
var j = cljs.core._nth.call(null,c__4290__auto__,i__29498);
cljs.core.chunk_append.call(null,b__29499,cljs.core.mapv.call(null,((function (i__29498,j,c__4290__auto__,size__4291__auto__,b__29499,s__29497__$2,temp__5457__auto__,m__$1){
return (function (p1__29495_SHARP_){
return clojure.core.matrix.protocols.get_1d.call(null,p1__29495_SHARP_,j);
});})(i__29498,j,c__4290__auto__,size__4291__auto__,b__29499,s__29497__$2,temp__5457__auto__,m__$1))
,m__$1));

var G__29500 = (i__29498 + (1));
i__29498 = G__29500;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29499),clojure$core$matrix$impl$persistent_vector$iter__29496.call(null,cljs.core.chunk_rest.call(null,s__29497__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29499),null);
}
} else {
var j = cljs.core.first.call(null,s__29497__$2);
return cljs.core.cons.call(null,cljs.core.mapv.call(null,((function (j,s__29497__$2,temp__5457__auto__,m__$1){
return (function (p1__29495_SHARP_){
return clojure.core.matrix.protocols.get_1d.call(null,p1__29495_SHARP_,j);
});})(j,s__29497__$2,temp__5457__auto__,m__$1))
,m__$1),clojure$core$matrix$impl$persistent_vector$iter__29496.call(null,cljs.core.rest.call(null,s__29497__$2)));
}
} else {
return null;
}
break;
}
});})(m__$1))
,null,null));
});})(m__$1))
;
return iter__4292__auto__.call(null,cljs.core.range.call(null,clojure.core.matrix.protocols.dimension_count.call(null,m__$1,(1))));
})());
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSliceView$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSliceView$get_major_slice_view$arity$2 = (function (m,i){
var m__$1 = this;
return cljs.core.nth.call(null,m__$1,i);
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSliceView2$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSliceView2$get_slice_view$arity$3 = (function (m,dimension,i){
var m__$1 = this;
return clojure.core.matrix.protocols.get_slice.call(null,m__$1,dimension,i);
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSliceSeq$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSliceSeq$get_major_slice_seq$arity$1 = (function (m){
var m__$1 = this;
return m__$1;
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSliceJoin$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSliceJoin$join$arity$2 = (function (m,a){
var m__$1 = this;
var dims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m__$1));
var adims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,a));
if((dims === adims)){
return cljs.core.vec.call(null,cljs.core.concat.call(null,clojure.core.matrix.protocols.get_major_slice_seq.call(null,m__$1),clojure.core.matrix.protocols.get_major_slice_seq.call(null,a)));
} else {
if((dims === (adims + (1)))){
return cljs.core.conj.call(null,m__$1,a);
} else {
throw cljs.core.ex_info.call(null,["Joining with array of incompatible size"].join(''),cljs.core.PersistentArrayMap.EMPTY);

}
}
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PRotate$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PRotate$rotate$arity$3 = (function (m,dim,places){
var m__$1 = this;
var dim__$1 = cljs.core.long$.call(null,dim);
var places__$1 = cljs.core.long$.call(null,places);
if(((0) === dim__$1)){
var c = cljs.core.long$.call(null,cljs.core.count.call(null,m__$1));
var sh = cljs.core.long$.call(null,(((c > (0)))?cljs.core.mod.call(null,places__$1,c):(0)));
if((sh === (0))){
return m__$1;
} else {
return cljs.core.vec.call(null,cljs.core.concat.call(null,cljs.core.subvec.call(null,m__$1,sh,c),cljs.core.subvec.call(null,m__$1,(0),sh)));
}
} else {
return cljs.core.mapv.call(null,((function (dim__$1,places__$1,m__$1){
return (function (s){
return clojure.core.matrix.protocols.rotate.call(null,s,(dim__$1 - (1)),places__$1);
});})(dim__$1,places__$1,m__$1))
,m__$1);
}
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PTransposeDims$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PTransposeDims$transpose_dims$arity$2 = (function (m,ordering){
var m__$1 = this;
var temp__5455__auto__ = cljs.core.seq.call(null,ordering);
if(temp__5455__auto__){
var ordering__$1 = temp__5455__auto__;
var dim = cljs.core.long$.call(null,cljs.core.first.call(null,ordering__$1));
var next_ordering = cljs.core.map.call(null,((function (dim,ordering__$1,temp__5455__auto__,m__$1){
return (function (i){
if((i < dim)){
return i;
} else {
return (i - (1));
}
});})(dim,ordering__$1,temp__5455__auto__,m__$1))
,cljs.core.next.call(null,ordering__$1));
var slice_range = cljs.core.range.call(null,clojure.core.matrix.protocols.dimension_count.call(null,m__$1,dim));
return cljs.core.mapv.call(null,((function (dim,next_ordering,slice_range,ordering__$1,temp__5455__auto__,m__$1){
return (function (si){
return clojure.core.matrix.protocols.transpose_dims.call(null,clojure.core.matrix.protocols.get_slice.call(null,m__$1,dim,si),next_ordering);
});})(dim,next_ordering,slice_range,ordering__$1,temp__5455__auto__,m__$1))
,slice_range);
} else {
return m__$1;
}
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$POrder$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$POrder$order$arity$2 = (function (m,indices){
var m__$1 = this;
return cljs.core.mapv.call(null,((function (m__$1){
return (function (p1__29501_SHARP_){
return cljs.core.nth.call(null,m__$1,p1__29501_SHARP_);
});})(m__$1))
,clojure.core.matrix.protocols.element_seq.call(null,indices));
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$POrder$order$arity$3 = (function (m,dimension,indices){
var m__$1 = this;
var dimension__$1 = cljs.core.long$.call(null,dimension);
if((dimension__$1 === (0))){
return clojure.core.matrix.protocols.order.call(null,m__$1,indices);
} else {
return cljs.core.mapv.call(null,((function (dimension__$1,m__$1){
return (function (p1__29502_SHARP_){
return clojure.core.matrix.protocols.order.call(null,p1__29502_SHARP_,(dimension__$1 - (1)),indices);
});})(dimension__$1,m__$1))
,m__$1);
}
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSubVector$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSubVector$subvector$arity$3 = (function (m,start,length){
var m__$1 = this;
return cljs.core.subvec.call(null,m__$1,start,(cljs.core.long$.call(null,start) + cljs.core.long$.call(null,length)));
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PValidateShape$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PValidateShape$validate_shape$arity$1 = (function (m){
var m__$1 = this;
if(cljs.core.truth_(clojure.core.matrix.protocols.same_shapes_QMARK_.call(null,m__$1))){
return clojure.core.matrix.protocols.get_shape.call(null,m__$1);
} else {
throw cljs.core.ex_info.call(null,["Inconsistent shape for persistent vector array."].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PValidateShape$validate_shape$arity$2 = (function (m,shape){
var m__$1 = this;
if(cljs.core.empty_QMARK_.call(null,shape)){
throw cljs.core.ex_info.call(null,["Expected empty shape for persistent vector: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m__$1)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

if(cljs.core.truth_(cljs.core.apply.call(null,cljs.core._EQ_,cljs.core.next.call(null,shape),cljs.core.map.call(null,clojure.core.matrix.protocols.validate_shape,m__$1)))){
return shape;
} else {
throw cljs.core.ex_info.call(null,["Inconsistent shape for persistent vector array, expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shape)," on array ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m__$1)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixAdd$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixAdd$matrix_add$arity$2 = (function (m,a){
var m__$1 = this;
var vec__29503 = clojure.core.matrix.protocols.broadcast_compatible.call(null,m__$1,a);
var m__$2 = cljs.core.nth.call(null,vec__29503,(0),null);
var a__$1 = cljs.core.nth.call(null,vec__29503,(1),null);
return clojure.core.matrix.impl.common.mapmatrix.call(null,cljs.core._PLUS_,m__$2,clojure.core.matrix.impl.persistent_vector.persistent_vector_coerce.call(null,a__$1));
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixAdd$matrix_sub$arity$2 = (function (m,a){
var m__$1 = this;
var vec__29506 = clojure.core.matrix.protocols.broadcast_compatible.call(null,m__$1,a);
var m__$2 = cljs.core.nth.call(null,vec__29506,(0),null);
var a__$1 = cljs.core.nth.call(null,vec__29506,(1),null);
return clojure.core.matrix.impl.common.mapmatrix.call(null,cljs.core._,m__$2,clojure.core.matrix.impl.persistent_vector.persistent_vector_coerce.call(null,a__$1));
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PVectorOps$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PVectorOps$vector_dot$arity$2 = (function (a,b){
var a__$1 = this;
var dims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,b));
if((((dims === (1))) && (((1) === cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,b)))))){
var n = cljs.core.long$.call(null,cljs.core.count.call(null,a__$1));
if(cljs.core.not_EQ_.call(null,n,cljs.core.long$.call(null,cljs.core.long$.call(null,clojure.core.matrix.protocols.dimension_count.call(null,b,(0)))))){
throw cljs.core.ex_info.call(null,["Mismatched vector sizes"].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
if((b instanceof cljs.core.List)){
var b__$1 = b;
var i = (0);
var res = 0.0;
while(true){
if((i >= n)){
return res;
} else {
var G__29509 = (i + (1));
var G__29510 = (res + (cljs.core.nth.call(null,a__$1,(i | (0))) * b__$1.get((i | (0)))));
i = G__29509;
res = G__29510;
continue;
}
break;
}
} else {
if((Array === b.constructor)){
var i = (0);
var res = 0.0;
while(true){
if((i >= n)){
return res;
} else {
var G__29511 = (i + (1));
var G__29512 = (res + (cljs.core.nth.call(null,a__$1,(i | (0))) * cljs.core.nth.call(null,b,i)));
i = G__29511;
res = G__29512;
continue;
}
break;
}
} else {
return cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,cljs.core._STAR_,a__$1,clojure.core.matrix.protocols.element_seq.call(null,b)));

}
}
}
} else {
return clojure.core.matrix.protocols.inner_product.call(null,a__$1,b);

}
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PVectorOps$length$arity$1 = (function (a){
var a__$1 = this;
if(typeof cljs.core.first.call(null,a__$1) === 'number'){
var n = cljs.core.long$.call(null,cljs.core.count.call(null,a__$1));
var i = (0);
var res = 0.0;
while(true){
if((i < n)){
var x = cljs.core.nth.call(null,a__$1,i);
var G__29513 = (i + (1));
var G__29514 = (res + (x * x));
i = G__29513;
res = G__29514;
continue;
} else {
return Math.sqrt(res);
}
break;
}
} else {
return Math.sqrt(clojure.core.matrix.protocols.length_squared.call(null,a__$1));
}
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PVectorOps$length_squared$arity$1 = (function (a){
var a__$1 = this;
if(typeof cljs.core.first.call(null,a__$1) === 'number'){
var n = cljs.core.long$.call(null,cljs.core.count.call(null,a__$1));
var i = (0);
var res = 0.0;
while(true){
if((i < n)){
var x = cljs.core.nth.call(null,a__$1,i);
var G__29515 = (i + (1));
var G__29516 = (res + (x * x));
i = G__29515;
res = G__29516;
continue;
} else {
return res;
}
break;
}
} else {
return clojure.core.matrix.protocols.element_reduce.call(null,a__$1,((function (a__$1){
return (function (r,x){
return (r + (x * x));
});})(a__$1))
,0.0);
}
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PVectorOps$normalise$arity$1 = (function (a){
var a__$1 = this;
return clojure.core.matrix.protocols.scale.call(null,a__$1,(1.0 / Math.sqrt(clojure.core.matrix.protocols.length_squared.call(null,a__$1))));
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMutableMatrixConstruction$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMutableMatrixConstruction$mutable_matrix$arity$1 = (function (m){
var m__$1 = this;
return null;
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PImmutableMatrixConstruction$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PImmutableMatrixConstruction$immutable_matrix$arity$1 = (function (m){
var m__$1 = this;
return m__$1;
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PVectorDistance$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PVectorDistance$distance$arity$2 = (function (a,b){
var a__$1 = this;
return clojure.core.matrix.protocols.length.call(null,clojure.core.matrix.protocols.matrix_sub.call(null,b,a__$1));
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSummable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSummable$element_sum$arity$1 = (function (a){
var a__$1 = this;
return clojure.core.matrix.protocols.element_reduce.call(null,a__$1,cljs.core._PLUS_);
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PCoercion$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PCoercion$coerce_param$arity$2 = (function (m,param){
var m__$1 = this;
return clojure.core.matrix.impl.persistent_vector.persistent_vector_coerce.call(null,param);
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixEquality$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixEquality$matrix_equals$arity$2 = (function (a,b){
var a__$1 = this;
var bdims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,b));
var acount = cljs.core.long$.call(null,cljs.core.count.call(null,a__$1));
if((bdims <= (0))){
return false;
} else {
if(cljs.core.not_EQ_.call(null,acount,clojure.core.matrix.protocols.dimension_count.call(null,b,(0)))){
return false;
} else {
if(((1) === bdims)){
var and__3911__auto__ = ((1) === cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,a__$1)));
if(and__3911__auto__){
var i = (0);
while(true){
if((i < acount)){
if(cljs.core.truth_(clojure.core.matrix.protocols.matrix_equals.call(null,cljs.core.nth.call(null,a__$1,i),clojure.core.matrix.protocols.get_1d.call(null,b,i)))){
var G__29517 = (i + (1));
i = G__29517;
continue;
} else {
return false;
}
} else {
return true;
}
break;
}
} else {
return and__3911__auto__;
}
} else {
if(cljs.core.vector_QMARK_.call(null,b)){
var n = acount;
var i = (0);
while(true){
if((i < n)){
if(cljs.core.truth_(clojure.core.matrix.protocols.matrix_equals.call(null,cljs.core.nth.call(null,a__$1,i),b.call(null,i)))){
var G__29518 = (i + (1));
i = G__29518;
continue;
} else {
return false;
}
} else {
return true;
}
break;
}
} else {
var sa = cljs.core.seq.call(null,a__$1);
var sb = clojure.core.matrix.protocols.get_major_slice_seq.call(null,b);
while(true){
if(sa){
if(cljs.core.truth_(clojure.core.matrix.protocols.matrix_equals.call(null,cljs.core.first.call(null,sa),cljs.core.first.call(null,sb)))){
var G__29519 = cljs.core.next.call(null,sa);
var G__29520 = cljs.core.next.call(null,sb);
sa = G__29519;
sb = G__29520;
continue;
} else {
return false;
}
} else {
return true;
}
break;
}

}
}
}
}
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixMultiply$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixMultiply$element_multiply$arity$2 = (function (m,a){
var m__$1 = this;
if(typeof a === 'number'){
return clojure.core.matrix.protocols.scale.call(null,m__$1,a);
} else {
var vec__29522 = clojure.core.matrix.protocols.broadcast_compatible.call(null,m__$1,a);
var m__$2 = cljs.core.nth.call(null,vec__29522,(0),null);
var a__$1 = cljs.core.nth.call(null,vec__29522,(1),null);
return clojure.core.matrix.protocols.element_map.call(null,m__$2,cljs.core._STAR_,a__$1);
}
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixMultiply$matrix_multiply$arity$2 = (function (m,a){
var m__$1 = this;
var mdims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m__$1));
var adims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,a));
if((adims === (0))){
return clojure.core.matrix.protocols.scale.call(null,m__$1,a);
} else {
if((((mdims === (1))) && ((adims === (2))))){
return cljs.core.vec.call(null,(function (){var iter__4292__auto__ = ((function (mdims,adims,m__$1){
return (function clojure$core$matrix$impl$persistent_vector$iter__29525(s__29526){
return (new cljs.core.LazySeq(null,((function (mdims,adims,m__$1){
return (function (){
var s__29526__$1 = s__29526;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__29526__$1);
if(temp__5457__auto__){
var s__29526__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29526__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__29526__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__29528 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__29527 = (0);
while(true){
if((i__29527 < size__4291__auto__)){
var i = cljs.core._nth.call(null,c__4290__auto__,i__29527);
cljs.core.chunk_append.call(null,b__29528,(function (){var r = clojure.core.matrix.protocols.get_column.call(null,a,i);
return clojure.core.matrix.protocols.vector_dot.call(null,m__$1,r);
})());

var G__29533 = (i__29527 + (1));
i__29527 = G__29533;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29528),clojure$core$matrix$impl$persistent_vector$iter__29525.call(null,cljs.core.chunk_rest.call(null,s__29526__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29528),null);
}
} else {
var i = cljs.core.first.call(null,s__29526__$2);
return cljs.core.cons.call(null,(function (){var r = clojure.core.matrix.protocols.get_column.call(null,a,i);
return clojure.core.matrix.protocols.vector_dot.call(null,m__$1,r);
})(),clojure$core$matrix$impl$persistent_vector$iter__29525.call(null,cljs.core.rest.call(null,s__29526__$2)));
}
} else {
return null;
}
break;
}
});})(mdims,adims,m__$1))
,null,null));
});})(mdims,adims,m__$1))
;
return iter__4292__auto__.call(null,cljs.core.range.call(null,clojure.core.matrix.protocols.dimension_count.call(null,a,(1))));
})());
} else {
if((((mdims === (1))) && ((adims === (1))))){
return clojure.core.matrix.protocols.vector_dot.call(null,m__$1,a);
} else {
if((((mdims === (2))) && ((adims === (1))))){
return cljs.core.mapv.call(null,((function (mdims,adims,m__$1){
return (function (p1__29521_SHARP_){
return clojure.core.matrix.protocols.vector_dot.call(null,p1__29521_SHARP_,a);
});})(mdims,adims,m__$1))
,m__$1);
} else {
if((((mdims === (2))) && ((adims === (2))))){
return cljs.core.mapv.call(null,((function (mdims,adims,m__$1){
return (function (r){
return cljs.core.vec.call(null,(function (){var iter__4292__auto__ = ((function (mdims,adims,m__$1){
return (function clojure$core$matrix$impl$persistent_vector$iter__29529(s__29530){
return (new cljs.core.LazySeq(null,((function (mdims,adims,m__$1){
return (function (){
var s__29530__$1 = s__29530;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__29530__$1);
if(temp__5457__auto__){
var s__29530__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29530__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__29530__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__29532 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__29531 = (0);
while(true){
if((i__29531 < size__4291__auto__)){
var j = cljs.core._nth.call(null,c__4290__auto__,i__29531);
cljs.core.chunk_append.call(null,b__29532,clojure.core.matrix.protocols.vector_dot.call(null,r,clojure.core.matrix.protocols.get_column.call(null,a,j)));

var G__29534 = (i__29531 + (1));
i__29531 = G__29534;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29532),clojure$core$matrix$impl$persistent_vector$iter__29529.call(null,cljs.core.chunk_rest.call(null,s__29530__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29532),null);
}
} else {
var j = cljs.core.first.call(null,s__29530__$2);
return cljs.core.cons.call(null,clojure.core.matrix.protocols.vector_dot.call(null,r,clojure.core.matrix.protocols.get_column.call(null,a,j)),clojure$core$matrix$impl$persistent_vector$iter__29529.call(null,cljs.core.rest.call(null,s__29530__$2)));
}
} else {
return null;
}
break;
}
});})(mdims,adims,m__$1))
,null,null));
});})(mdims,adims,m__$1))
;
return iter__4292__auto__.call(null,cljs.core.range.call(null,clojure.core.matrix.protocols.dimension_count.call(null,a,(1))));
})());
});})(mdims,adims,m__$1))
,m__$1);
} else {
return clojure.core.matrix.protocols.inner_product.call(null,m__$1,a);

}
}
}
}
}
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixProducts$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixProducts$inner_product$arity$2 = (function (m,a){
var m__$1 = this;
var adims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,a));
var mdims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m__$1));
if(((0) === adims)){
return clojure.core.matrix.protocols.scale.call(null,m__$1,clojure.core.matrix.protocols.get_0d.call(null,a));
} else {
if(!((cljs.core.long$.call(null,cljs.core.last.call(null,clojure.core.matrix.protocols.get_shape.call(null,m__$1))) === cljs.core.long$.call(null,cljs.core.first.call(null,clojure.core.matrix.protocols.get_shape.call(null,a)))))){
throw cljs.core.ex_info.call(null,["Incompatible shapes for inner product: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.core.matrix.protocols.get_shape.call(null,m__$1))," and ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.core.matrix.protocols.get_shape.call(null,a))].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
if(((1) === mdims)){
if(((1) === adims)){
return clojure.core.matrix.protocols.element_sum.call(null,clojure.core.matrix.protocols.element_multiply.call(null,m__$1,a));
} else {
return cljs.core.reduce.call(null,clojure.core.matrix.protocols.matrix_add,cljs.core.map.call(null,((function (adims,mdims,m__$1){
return (function (sl,x){
return clojure.core.matrix.protocols.scale.call(null,sl,x);
});})(adims,mdims,m__$1))
,clojure.core.matrix.protocols.get_major_slice_seq.call(null,a),clojure.core.matrix.protocols.get_major_slice_seq.call(null,m__$1)));
}
} else {
return cljs.core.mapv.call(null,((function (adims,mdims,m__$1){
return (function (p1__29535_SHARP_){
return clojure.core.matrix.protocols.inner_product.call(null,p1__29535_SHARP_,a);
});})(adims,mdims,m__$1))
,clojure.core.matrix.protocols.get_major_slice_seq.call(null,m__$1));

}
}
}
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixProducts$outer_product$arity$2 = (function (m,a){
var m__$1 = this;
return clojure.core.matrix.protocols.element_map.call(null,m__$1,((function (m__$1){
return (function (v){
return clojure.core.matrix.protocols.pre_scale.call(null,a,v);
});})(m__$1))
);
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PVectorTransform$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PVectorTransform$vector_transform$arity$2 = (function (m,a){
var m__$1 = this;
return clojure.core.matrix.protocols.matrix_multiply.call(null,m__$1,a);
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PVectorTransform$vector_transform_BANG_$arity$2 = (function (m,a){
var m__$1 = this;
return clojure.core.matrix.protocols.assign_BANG_.call(null,a,clojure.core.matrix.protocols.matrix_multiply.call(null,m__$1,a));
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixScaling$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixScaling$scale$arity$2 = (function (m,a){
var m__$1 = this;
return clojure.core.matrix.impl.common.mapmatrix.call(null,((function (m__$1){
return (function (p1__29536_SHARP_){
return (p1__29536_SHARP_ * a);
});})(m__$1))
,m__$1);
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixScaling$pre_scale$arity$2 = (function (m,a){
var m__$1 = this;
return clojure.core.matrix.impl.common.mapmatrix.call(null,((function (m__$1){
return (function (p1__29537_SHARP_){
return (a * p1__29537_SHARP_);
});})(m__$1))
,m__$1);
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSquare$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSquare$square$arity$1 = (function (m){
var m__$1 = this;
return clojure.core.matrix.impl.common.mapmatrix.call(null,cljs.core._STAR_,m__$1,m__$1);
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PRowOperations$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PRowOperations$swap_rows$arity$3 = (function (m,i,j){
var m__$1 = this;
var i__$1 = cljs.core.long$.call(null,i);
var j__$1 = cljs.core.long$.call(null,j);
if((i__$1 === j__$1)){
return m__$1;
} else {
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,m__$1,i__$1,m__$1.call(null,j__$1)),j__$1,m__$1.call(null,i__$1));
}
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PRowOperations$multiply_row$arity$3 = (function (m,i,factor){
var m__$1 = this;
return cljs.core.assoc.call(null,m__$1,i,clojure.core.matrix.protocols.scale.call(null,m__$1.call(null,i),factor));
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PRowOperations$add_row$arity$4 = (function (m,i,j,factor){
var m__$1 = this;
return cljs.core.assoc.call(null,m__$1,i,clojure.core.matrix.protocols.matrix_add.call(null,m__$1.call(null,i),clojure.core.matrix.protocols.matrix_multiply.call(null,m__$1.call(null,j),factor)));
});
clojure.core.matrix.impl.persistent_vector.build_maths_function = (function clojure$core$matrix$impl$persistent_vector$build_maths_function(p__29539){
var vec__29540 = p__29539;
var name = cljs.core.nth.call(null,vec__29540,(0),null);
var func = cljs.core.nth.call(null,vec__29540,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"m","m",-1021758608,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("clojure.core.matrix.impl.common","mapmatrix","clojure.core.matrix.impl.common/mapmatrix",1588740294,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"x__29538__auto__","x__29538__auto__",-540367062,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","double","cljs.core/double",-1119390159,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,func,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","double","cljs.core/double",-1119390159,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__29538__auto__","x__29538__auto__",-540367062,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"m","m",-1021758608,null),null,(1),null))))),null,(1),null)))));
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PDimensionInfo$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimensionality$arity$1 = (function (m){
var m__$1 = this;
if(((0) === cljs.core.count.call(null,m__$1))){
return (1);
} else {
return (cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,cljs.core.nth.call(null,m__$1,(0)))) + (1));
}
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_vector_QMARK_$arity$1 = (function (m){
var m__$1 = this;
var pv__28701__auto__ = m__$1;
return ((((0) === cljs.core.count.call(null,pv__28701__auto__))) || (((0) === cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,cljs.core.nth.call(null,pv__28701__auto__,(0)))))));
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_scalar_QMARK_$arity$1 = (function (m){
var m__$1 = this;
return false;
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PDimensionInfo$get_shape$arity$1 = (function (m){
var m__$1 = this;
var c = cljs.core.count.call(null,m__$1);
return cljs.core.cons.call(null,c,(((c > (0)))?clojure.core.matrix.protocols.get_shape.call(null,cljs.core.nth.call(null,m__$1,(0))):null));
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimension_count$arity$2 = (function (m,x){
var m__$1 = this;
var x__$1 = cljs.core.long$.call(null,x);
if((x__$1 === (0))){
return cljs.core.count.call(null,m__$1);
} else {
return clojure.core.matrix.protocols.dimension_count.call(null,cljs.core.nth.call(null,m__$1,(0)),(x__$1 - (1)));
}
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PElementCount$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PElementCount$element_count$arity$1 = (function (m){
var m__$1 = this;
var c = cljs.core.long$.call(null,cljs.core.count.call(null,m__$1));
if((c === (0))){
return (0);
} else {
return (c * clojure.core.matrix.protocols.element_count.call(null,cljs.core.nth.call(null,m__$1,(0))));
}
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PConversion$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PConversion$convert_to_nested_vectors$arity$1 = (function (m){
var m__$1 = this;
if(cljs.core.truth_(clojure.core.matrix.impl.persistent_vector.is_nested_persistent_vectors_QMARK_.call(null,m__$1))){
return m__$1;
} else {
var m__$2 = clojure.core.matrix.impl.persistent_vector.mapv_identity_check.call(null,clojure.core.matrix.protocols.convert_to_nested_vectors,m__$1);
var m_shapes = cljs.core.map.call(null,clojure.core.matrix.protocols.get_shape,m__$2);
if(cljs.core.every_QMARK_.call(null,cljs.core.partial.call(null,cljs.core._EQ_,cljs.core.first.call(null,m_shapes)),cljs.core.rest.call(null,m_shapes))){
return m__$2;
} else {
throw cljs.core.ex_info.call(null,["Can't convert to persistent vector array: inconsistent shape."].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
}
});
/**
 * Copy an arbitrary array to a region of a double array.
 * Assumes size represents the element count of the array, must be greater than zero.
 */
clojure.core.matrix.impl.persistent_vector.copy_to_double_array_BANG_ = (function clojure$core$matrix$impl$persistent_vector$copy_to_double_array_BANG_(m,arr,off,size){
if(typeof m === 'number'){
if((size === (1))){
return (arr[off] = m);
} else {
throw cljs.core.ex_info.call(null,["Invalid shape while copying to double array"].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
} else {
if(cljs.core.vector_QMARK_.call(null,m)){
var m__$1 = m;
var ct = cljs.core.count.call(null,m__$1);
var skip = cljs.core.quot.call(null,size,ct);
var n__4376__auto__ = ct;
var i = (0);
while(true){
if((i < n__4376__auto__)){
var slc_29545 = cljs.core.nth.call(null,m__$1,i);
clojure.core.matrix.impl.persistent_vector.copy_to_double_array_BANG_.call(null,slc_29545,arr,(off + (i * skip)),skip);

var G__29546 = (i + (1));
i = G__29546;
continue;
} else {
return null;
}
break;
}
} else {
var vals__21895__auto__ = cljs.core.seq.call(null,clojure.core.matrix.protocols.element_seq.call(null,m));
var i = cljs.core.long$.call(null,(0));
while(true){
if(vals__21895__auto__){
var v = cljs.core.first.call(null,vals__21895__auto__);
(arr[(off + i)] = v);

var G__29547 = cljs.core.next.call(null,vals__21895__auto__);
var G__29548 = (i + (1));
vals__21895__auto__ = G__29547;
i = G__29548;
continue;
} else {
return null;
}
break;
}

}
}
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PDoubleArrayOutput$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PDoubleArrayOutput$to_double_array$arity$1 = (function (m){
var m__$1 = this;
var size = cljs.core.long$.call(null,clojure.core.matrix.protocols.element_count.call(null,m__$1));
var arr = cljs.core.double_array.call(null,size);
var ct = cljs.core.count.call(null,m__$1);
if((size > (0))){
clojure.core.matrix.impl.persistent_vector.copy_to_double_array_BANG_.call(null,m__$1,arr,(0),size);
} else {
}

return arr;
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PDoubleArrayOutput$as_double_array$arity$1 = (function (m){
var m__$1 = this;
return null;
});
clojure.core.matrix.impl.persistent_vector.copy_to_object_array = (function clojure$core$matrix$impl$persistent_vector$copy_to_object_array(m,arr,off,size){
var ct = cljs.core.count.call(null,m);
if(!(cljs.core.vector_QMARK_.call(null,m))){
var vals__21895__auto___29549 = cljs.core.seq.call(null,clojure.core.matrix.protocols.element_seq.call(null,m));
var i_29550 = cljs.core.long$.call(null,(0));
while(true){
if(vals__21895__auto___29549){
var v_29551 = cljs.core.first.call(null,vals__21895__auto___29549);
(arr[(off + i_29550)] = v_29551);

var G__29552 = cljs.core.next.call(null,vals__21895__auto___29549);
var G__29553 = (i_29550 + (1));
vals__21895__auto___29549 = G__29552;
i_29550 = G__29553;
continue;
} else {
}
break;
}
} else {
if((((size === ct)) && (!(cljs.core.vector_QMARK_.call(null,cljs.core.nth.call(null,m,(0),null)))))){
var n__4376__auto___29554 = size;
var i_29555 = (0);
while(true){
if((i_29555 < n__4376__auto___29554)){
(arr[(off + i_29555)] = cljs.core.nth.call(null,m,i_29555));

var G__29556 = (i_29555 + (1));
i_29555 = G__29556;
continue;
} else {
}
break;
}
} else {
var skip_29557 = cljs.core.quot.call(null,size,ct);
var n__4376__auto___29558 = ct;
var i_29559 = (0);
while(true){
if((i_29559 < n__4376__auto___29558)){
clojure.core.matrix.impl.persistent_vector.copy_to_object_array.call(null,cljs.core.nth.call(null,m,i_29559),arr,(off + (i_29559 * skip_29557)),skip_29557);

var G__29560 = (i_29559 + (1));
i_29559 = G__29560;
continue;
} else {
}
break;
}

}
}

return arr;
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PObjectArrayOutput$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PObjectArrayOutput$to_object_array$arity$1 = (function (m){
var m__$1 = this;
var size = cljs.core.long$.call(null,clojure.core.matrix.protocols.element_count.call(null,m__$1));
var arr = cljs.core.object_array.call(null,size);
var ct = cljs.core.count.call(null,m__$1);
clojure.core.matrix.impl.persistent_vector.copy_to_object_array.call(null,m__$1,arr,(0),size);

return arr;
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PObjectArrayOutput$as_object_array$arity$1 = (function (m){
var m__$1 = this;
return null;
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PFunctionalOperations$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_seq$arity$1 = (function (m){
var m__$1 = this;
if(((0) === cljs.core.count.call(null,m__$1))){
return null;
} else {
if((cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,cljs.core.nth.call(null,m__$1,(0)))) >= (1))){
return cljs.core.mapcat.call(null,clojure.core.matrix.protocols.element_seq,m__$1);
} else {
return m__$1;

}
}
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_map$arity$2 = (function (m,f){
var m__$1 = this;
return clojure.core.matrix.impl.common.mapmatrix.call(null,f,m__$1);
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_map$arity$3 = (function (m,f,a){
var m__$1 = this;
var vec__29563 = clojure.core.matrix.protocols.broadcast_same_shape.call(null,m__$1,a);
var m__$2 = cljs.core.nth.call(null,vec__29563,(0),null);
var a__$1 = cljs.core.nth.call(null,vec__29563,(1),null);
return clojure.core.matrix.impl.common.mapmatrix.call(null,f,m__$2,a__$1);
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_map$arity$4 = (function (m,f,a,more){
var m__$1 = this;
var arrays = cljs.core.cons.call(null,m__$1,cljs.core.cons.call(null,a,more));
var shapes = cljs.core.map.call(null,clojure.core.matrix.protocols.get_shape,arrays);
var sh = (function (){var or__3922__auto__ = clojure.core.matrix.protocols.common_shape.call(null,shapes);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
throw cljs.core.ex_info.call(null,["Attempt to do element map with incompatible shapes: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.mapv.call(null,clojure.core.matrix.protocols.get_shape,arrays))].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
})();
var arrays__$1 = cljs.core.map.call(null,((function (arrays,shapes,sh,m__$1){
return (function (p1__29561_SHARP_){
return clojure.core.matrix.protocols.broadcast.call(null,p1__29561_SHARP_,sh);
});})(arrays,shapes,sh,m__$1))
,arrays);
return cljs.core.apply.call(null,clojure.core.matrix.impl.common.mapmatrix,f,arrays__$1);
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_map_BANG_$arity$2 = (function (m,f){
var m__$1 = this;
var seq__29566_29570 = cljs.core.seq.call(null,m__$1);
var chunk__29567_29571 = null;
var count__29568_29572 = (0);
var i__29569_29573 = (0);
while(true){
if((i__29569_29573 < count__29568_29572)){
var s_29574 = cljs.core._nth.call(null,chunk__29567_29571,i__29569_29573);
clojure.core.matrix.protocols.element_map_BANG_.call(null,s_29574,f);


var G__29575 = seq__29566_29570;
var G__29576 = chunk__29567_29571;
var G__29577 = count__29568_29572;
var G__29578 = (i__29569_29573 + (1));
seq__29566_29570 = G__29575;
chunk__29567_29571 = G__29576;
count__29568_29572 = G__29577;
i__29569_29573 = G__29578;
continue;
} else {
var temp__5457__auto___29579 = cljs.core.seq.call(null,seq__29566_29570);
if(temp__5457__auto___29579){
var seq__29566_29580__$1 = temp__5457__auto___29579;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29566_29580__$1)){
var c__4319__auto___29581 = cljs.core.chunk_first.call(null,seq__29566_29580__$1);
var G__29582 = cljs.core.chunk_rest.call(null,seq__29566_29580__$1);
var G__29583 = c__4319__auto___29581;
var G__29584 = cljs.core.count.call(null,c__4319__auto___29581);
var G__29585 = (0);
seq__29566_29570 = G__29582;
chunk__29567_29571 = G__29583;
count__29568_29572 = G__29584;
i__29569_29573 = G__29585;
continue;
} else {
var s_29586 = cljs.core.first.call(null,seq__29566_29580__$1);
clojure.core.matrix.protocols.element_map_BANG_.call(null,s_29586,f);


var G__29587 = cljs.core.next.call(null,seq__29566_29580__$1);
var G__29588 = null;
var G__29589 = (0);
var G__29590 = (0);
seq__29566_29570 = G__29587;
chunk__29567_29571 = G__29588;
count__29568_29572 = G__29589;
i__29569_29573 = G__29590;
continue;
}
} else {
}
}
break;
}

return m__$1;
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_map_BANG_$arity$3 = (function (m,f,a){
var m__$1 = this;
var n__4376__auto___29591 = cljs.core.count.call(null,m__$1);
var i_29592 = (0);
while(true){
if((i_29592 < n__4376__auto___29591)){
clojure.core.matrix.protocols.element_map_BANG_.call(null,m__$1.call(null,i_29592),f,clojure.core.matrix.protocols.get_major_slice.call(null,a,i_29592));

var G__29593 = (i_29592 + (1));
i_29592 = G__29593;
continue;
} else {
}
break;
}

return m__$1;
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_map_BANG_$arity$4 = (function (m,f,a,more){
var m__$1 = this;
var n__4376__auto___29594 = cljs.core.count.call(null,m__$1);
var i_29595 = (0);
while(true){
if((i_29595 < n__4376__auto___29594)){
cljs.core.apply.call(null,clojure.core.matrix.protocols.element_map_BANG_,m__$1.call(null,i_29595),f,clojure.core.matrix.protocols.get_major_slice.call(null,a,i_29595),cljs.core.map.call(null,((function (i_29595,n__4376__auto___29594,m__$1){
return (function (p1__29562_SHARP_){
return clojure.core.matrix.protocols.get_major_slice.call(null,p1__29562_SHARP_,i_29595);
});})(i_29595,n__4376__auto___29594,m__$1))
,more));

var G__29596 = (i_29595 + (1));
i_29595 = G__29596;
continue;
} else {
}
break;
}

return m__$1;
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_reduce$arity$2 = (function (m,f){
var m__$1 = this;
return cljs.core.reduce.call(null,f,clojure.core.matrix.protocols.element_seq.call(null,m__$1));
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_reduce$arity$3 = (function (m,f,init){
var m__$1 = this;
return cljs.core.reduce.call(null,f,init,clojure.core.matrix.protocols.element_seq.call(null,m__$1));
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMapIndexed$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMapIndexed$element_map_indexed$arity$2 = (function (ms,f){
var ms__$1 = this;
var dims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,ms__$1));
if(((0) === dims)){
return f.call(null,cljs.core.PersistentVector.EMPTY,(function (){var x__21930__auto__ = ms__$1;
if(typeof x__21930__auto__ === 'number'){
return x__21930__auto__;
} else {
return clojure.core.matrix.protocols.get_0d.call(null,x__21930__auto__);

}
})());
} else {
if(((1) === dims)){
return cljs.core.vec.call(null,(function (){var iter__4292__auto__ = ((function (dims,ms__$1){
return (function clojure$core$matrix$impl$persistent_vector$iter__29616(s__29617){
return (new cljs.core.LazySeq(null,((function (dims,ms__$1){
return (function (){
var s__29617__$1 = s__29617;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__29617__$1);
if(temp__5457__auto__){
var s__29617__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29617__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__29617__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__29619 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__29618 = (0);
while(true){
if((i__29618 < size__4291__auto__)){
var i = cljs.core._nth.call(null,c__4290__auto__,i__29618);
cljs.core.chunk_append.call(null,b__29619,f.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [i], null),cljs.core.nth.call(null,ms__$1,i)));

var G__29624 = (i__29618 + (1));
i__29618 = G__29624;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29619),clojure$core$matrix$impl$persistent_vector$iter__29616.call(null,cljs.core.chunk_rest.call(null,s__29617__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29619),null);
}
} else {
var i = cljs.core.first.call(null,s__29617__$2);
return cljs.core.cons.call(null,f.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [i], null),cljs.core.nth.call(null,ms__$1,i)),clojure$core$matrix$impl$persistent_vector$iter__29616.call(null,cljs.core.rest.call(null,s__29617__$2)));
}
} else {
return null;
}
break;
}
});})(dims,ms__$1))
,null,null));
});})(dims,ms__$1))
;
return iter__4292__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,ms__$1)));
})());
} else {
return cljs.core.vec.call(null,(function (){var iter__4292__auto__ = ((function (dims,ms__$1){
return (function clojure$core$matrix$impl$persistent_vector$iter__29620(s__29621){
return (new cljs.core.LazySeq(null,((function (dims,ms__$1){
return (function (){
var s__29621__$1 = s__29621;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__29621__$1);
if(temp__5457__auto__){
var s__29621__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29621__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__29621__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__29623 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__29622 = (0);
while(true){
if((i__29622 < size__4291__auto__)){
var i = cljs.core._nth.call(null,c__4290__auto__,i__29622);
cljs.core.chunk_append.call(null,b__29623,clojure.core.matrix.protocols.element_map_indexed.call(null,cljs.core.nth.call(null,ms__$1,i),((function (i__29622,i,c__4290__auto__,size__4291__auto__,b__29623,s__29621__$2,temp__5457__auto__,dims,ms__$1){
return (function (p1__29597_SHARP_,p2__29598_SHARP_){
return f.call(null,cljs.core.cons.call(null,i,p1__29597_SHARP_),p2__29598_SHARP_);
});})(i__29622,i,c__4290__auto__,size__4291__auto__,b__29623,s__29621__$2,temp__5457__auto__,dims,ms__$1))
));

var G__29625 = (i__29622 + (1));
i__29622 = G__29625;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29623),clojure$core$matrix$impl$persistent_vector$iter__29620.call(null,cljs.core.chunk_rest.call(null,s__29621__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29623),null);
}
} else {
var i = cljs.core.first.call(null,s__29621__$2);
return cljs.core.cons.call(null,clojure.core.matrix.protocols.element_map_indexed.call(null,cljs.core.nth.call(null,ms__$1,i),((function (i,s__29621__$2,temp__5457__auto__,dims,ms__$1){
return (function (p1__29597_SHARP_,p2__29598_SHARP_){
return f.call(null,cljs.core.cons.call(null,i,p1__29597_SHARP_),p2__29598_SHARP_);
});})(i,s__29621__$2,temp__5457__auto__,dims,ms__$1))
),clojure$core$matrix$impl$persistent_vector$iter__29620.call(null,cljs.core.rest.call(null,s__29621__$2)));
}
} else {
return null;
}
break;
}
});})(dims,ms__$1))
,null,null));
});})(dims,ms__$1))
;
return iter__4292__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,ms__$1)));
})());

}
}
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMapIndexed$element_map_indexed$arity$3 = (function (ms,f,as){
var ms__$1 = this;
var as__$1 = clojure.core.matrix.protocols.broadcast_like.call(null,ms__$1,as);
var dima = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,as__$1));
if(cljs.core.truth_(clojure.core.matrix.protocols.is_vector_QMARK_.call(null,ms__$1))){
if((dima > (1))){
throw cljs.core.ex_info.call(null,["mapping with array of higher dimensionality?"].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

if(((((1) === dima)) && (cljs.core.not_EQ_.call(null,clojure.core.matrix.protocols.dimension_count.call(null,ms__$1,(0)),clojure.core.matrix.protocols.dimension_count.call(null,as__$1,(0)))))){
throw cljs.core.ex_info.call(null,["Incompatible vector sizes"].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

if(((0) === dima)){
var v = (function (){var x__21930__auto__ = as__$1;
if(typeof x__21930__auto__ === 'number'){
return x__21930__auto__;
} else {
return clojure.core.matrix.protocols.get_0d.call(null,x__21930__auto__);

}
})();
cljs.core.mapv.call(null,((function (v,as__$1,dima,ms__$1){
return (function (p1__29599_SHARP_,p2__29600_SHARP_){
return f.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29599_SHARP_], null),p2__29600_SHARP_,v);
});})(v,as__$1,dima,ms__$1))
,cljs.core.range.call(null,cljs.core.count.call(null,ms__$1)));

return ms__$1;
} else {
return cljs.core.mapv.call(null,((function (as__$1,dima,ms__$1){
return (function() { 
var G__29626__delegate = function (p1__29601_SHARP_,rest__29602_SHARP_){
return cljs.core.apply.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29601_SHARP_], null),rest__29602_SHARP_);
};
var G__29626 = function (p1__29601_SHARP_,var_args){
var rest__29602_SHARP_ = null;
if (arguments.length > 1) {
var G__29627__i = 0, G__29627__a = new Array(arguments.length -  1);
while (G__29627__i < G__29627__a.length) {G__29627__a[G__29627__i] = arguments[G__29627__i + 1]; ++G__29627__i;}
  rest__29602_SHARP_ = new cljs.core.IndexedSeq(G__29627__a,0,null);
} 
return G__29626__delegate.call(this,p1__29601_SHARP_,rest__29602_SHARP_);};
G__29626.cljs$lang$maxFixedArity = 1;
G__29626.cljs$lang$applyTo = (function (arglist__29628){
var p1__29601_SHARP_ = cljs.core.first(arglist__29628);
var rest__29602_SHARP_ = cljs.core.rest(arglist__29628);
return G__29626__delegate(p1__29601_SHARP_,rest__29602_SHARP_);
});
G__29626.cljs$core$IFn$_invoke$arity$variadic = G__29626__delegate;
return G__29626;
})()
;})(as__$1,dima,ms__$1))
,cljs.core.range.call(null,cljs.core.count.call(null,ms__$1)),ms__$1,clojure.core.matrix.protocols.element_seq.call(null,as__$1));
}
} else {
return cljs.core.mapv.call(null,((function (as__$1,dima,ms__$1){
return (function (i,m,a){
return clojure.core.matrix.protocols.element_map_indexed.call(null,m,((function (as__$1,dima,ms__$1){
return (function() { 
var G__29629__delegate = function (p1__29603_SHARP_,rest__29604_SHARP_){
return cljs.core.apply.call(null,f,cljs.core.cons.call(null,i,p1__29603_SHARP_),rest__29604_SHARP_);
};
var G__29629 = function (p1__29603_SHARP_,var_args){
var rest__29604_SHARP_ = null;
if (arguments.length > 1) {
var G__29630__i = 0, G__29630__a = new Array(arguments.length -  1);
while (G__29630__i < G__29630__a.length) {G__29630__a[G__29630__i] = arguments[G__29630__i + 1]; ++G__29630__i;}
  rest__29604_SHARP_ = new cljs.core.IndexedSeq(G__29630__a,0,null);
} 
return G__29629__delegate.call(this,p1__29603_SHARP_,rest__29604_SHARP_);};
G__29629.cljs$lang$maxFixedArity = 1;
G__29629.cljs$lang$applyTo = (function (arglist__29631){
var p1__29603_SHARP_ = cljs.core.first(arglist__29631);
var rest__29604_SHARP_ = cljs.core.rest(arglist__29631);
return G__29629__delegate(p1__29603_SHARP_,rest__29604_SHARP_);
});
G__29629.cljs$core$IFn$_invoke$arity$variadic = G__29629__delegate;
return G__29629;
})()
;})(as__$1,dima,ms__$1))
,a);
});})(as__$1,dima,ms__$1))
,cljs.core.range.call(null,cljs.core.count.call(null,ms__$1)),ms__$1,clojure.core.matrix.protocols.get_major_slice_seq.call(null,as__$1));
}
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMapIndexed$element_map_indexed$arity$4 = (function (ms,f,as,more){
var ms__$1 = this;
if(cljs.core.truth_(clojure.core.matrix.protocols.is_vector_QMARK_.call(null,ms__$1))){
return cljs.core.apply.call(null,cljs.core.mapv,((function (ms__$1){
return (function() { 
var G__29632__delegate = function (p1__29605_SHARP_,rest__29606_SHARP_){
return cljs.core.apply.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29605_SHARP_], null),rest__29606_SHARP_);
};
var G__29632 = function (p1__29605_SHARP_,var_args){
var rest__29606_SHARP_ = null;
if (arguments.length > 1) {
var G__29633__i = 0, G__29633__a = new Array(arguments.length -  1);
while (G__29633__i < G__29633__a.length) {G__29633__a[G__29633__i] = arguments[G__29633__i + 1]; ++G__29633__i;}
  rest__29606_SHARP_ = new cljs.core.IndexedSeq(G__29633__a,0,null);
} 
return G__29632__delegate.call(this,p1__29605_SHARP_,rest__29606_SHARP_);};
G__29632.cljs$lang$maxFixedArity = 1;
G__29632.cljs$lang$applyTo = (function (arglist__29634){
var p1__29605_SHARP_ = cljs.core.first(arglist__29634);
var rest__29606_SHARP_ = cljs.core.rest(arglist__29634);
return G__29632__delegate(p1__29605_SHARP_,rest__29606_SHARP_);
});
G__29632.cljs$core$IFn$_invoke$arity$variadic = G__29632__delegate;
return G__29632;
})()
;})(ms__$1))
,cljs.core.range.call(null,cljs.core.count.call(null,ms__$1)),ms__$1,as,more);
} else {
return cljs.core.apply.call(null,cljs.core.mapv,((function (ms__$1){
return (function() { 
var G__29635__delegate = function (i,m,a,mr){
return clojure.core.matrix.protocols.element_map_indexed.call(null,m,((function (ms__$1){
return (function() { 
var G__29636__delegate = function (p1__29607_SHARP_,rest__29608_SHARP_){
return cljs.core.apply.call(null,f,cljs.core.cons.call(null,i,p1__29607_SHARP_),rest__29608_SHARP_);
};
var G__29636 = function (p1__29607_SHARP_,var_args){
var rest__29608_SHARP_ = null;
if (arguments.length > 1) {
var G__29637__i = 0, G__29637__a = new Array(arguments.length -  1);
while (G__29637__i < G__29637__a.length) {G__29637__a[G__29637__i] = arguments[G__29637__i + 1]; ++G__29637__i;}
  rest__29608_SHARP_ = new cljs.core.IndexedSeq(G__29637__a,0,null);
} 
return G__29636__delegate.call(this,p1__29607_SHARP_,rest__29608_SHARP_);};
G__29636.cljs$lang$maxFixedArity = 1;
G__29636.cljs$lang$applyTo = (function (arglist__29638){
var p1__29607_SHARP_ = cljs.core.first(arglist__29638);
var rest__29608_SHARP_ = cljs.core.rest(arglist__29638);
return G__29636__delegate(p1__29607_SHARP_,rest__29608_SHARP_);
});
G__29636.cljs$core$IFn$_invoke$arity$variadic = G__29636__delegate;
return G__29636;
})()
;})(ms__$1))
,a,mr);
};
var G__29635 = function (i,m,a,var_args){
var mr = null;
if (arguments.length > 3) {
var G__29639__i = 0, G__29639__a = new Array(arguments.length -  3);
while (G__29639__i < G__29639__a.length) {G__29639__a[G__29639__i] = arguments[G__29639__i + 3]; ++G__29639__i;}
  mr = new cljs.core.IndexedSeq(G__29639__a,0,null);
} 
return G__29635__delegate.call(this,i,m,a,mr);};
G__29635.cljs$lang$maxFixedArity = 3;
G__29635.cljs$lang$applyTo = (function (arglist__29640){
var i = cljs.core.first(arglist__29640);
arglist__29640 = cljs.core.next(arglist__29640);
var m = cljs.core.first(arglist__29640);
arglist__29640 = cljs.core.next(arglist__29640);
var a = cljs.core.first(arglist__29640);
var mr = cljs.core.rest(arglist__29640);
return G__29635__delegate(i,m,a,mr);
});
G__29635.cljs$core$IFn$_invoke$arity$variadic = G__29635__delegate;
return G__29635;
})()
;})(ms__$1))
,cljs.core.range.call(null,cljs.core.count.call(null,ms__$1)),ms__$1,as,more);
}
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMapIndexed$element_map_indexed_BANG_$arity$2 = (function (m,f){
var m__$1 = this;
var n__4376__auto___29641 = cljs.core.count.call(null,m__$1);
var i_29642 = (0);
while(true){
if((i_29642 < n__4376__auto___29641)){
clojure.core.matrix.protocols.element_map_indexed_BANG_.call(null,m__$1.call(null,i_29642),((function (i_29642,n__4376__auto___29641,m__$1){
return (function (p1__29609_SHARP_,p2__29610_SHARP_){
return f.call(null,cljs.core.cons.call(null,i_29642,p1__29609_SHARP_),p2__29610_SHARP_);
});})(i_29642,n__4376__auto___29641,m__$1))
);

var G__29643 = (i_29642 + (1));
i_29642 = G__29643;
continue;
} else {
}
break;
}

return m__$1;
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMapIndexed$element_map_indexed_BANG_$arity$3 = (function (m,f,a){
var m__$1 = this;
var n__4376__auto___29644 = cljs.core.count.call(null,m__$1);
var i_29645 = (0);
while(true){
if((i_29645 < n__4376__auto___29644)){
clojure.core.matrix.protocols.element_map_indexed_BANG_.call(null,m__$1.call(null,i_29645),((function (i_29645,n__4376__auto___29644,m__$1){
return (function() { 
var G__29646__delegate = function (p1__29611_SHARP_,rest__29612_SHARP_){
return cljs.core.apply.call(null,f,cljs.core.cons.call(null,i_29645,p1__29611_SHARP_),rest__29612_SHARP_);
};
var G__29646 = function (p1__29611_SHARP_,var_args){
var rest__29612_SHARP_ = null;
if (arguments.length > 1) {
var G__29647__i = 0, G__29647__a = new Array(arguments.length -  1);
while (G__29647__i < G__29647__a.length) {G__29647__a[G__29647__i] = arguments[G__29647__i + 1]; ++G__29647__i;}
  rest__29612_SHARP_ = new cljs.core.IndexedSeq(G__29647__a,0,null);
} 
return G__29646__delegate.call(this,p1__29611_SHARP_,rest__29612_SHARP_);};
G__29646.cljs$lang$maxFixedArity = 1;
G__29646.cljs$lang$applyTo = (function (arglist__29648){
var p1__29611_SHARP_ = cljs.core.first(arglist__29648);
var rest__29612_SHARP_ = cljs.core.rest(arglist__29648);
return G__29646__delegate(p1__29611_SHARP_,rest__29612_SHARP_);
});
G__29646.cljs$core$IFn$_invoke$arity$variadic = G__29646__delegate;
return G__29646;
})()
;})(i_29645,n__4376__auto___29644,m__$1))
,clojure.core.matrix.protocols.get_major_slice.call(null,a,i_29645));

var G__29649 = (i_29645 + (1));
i_29645 = G__29649;
continue;
} else {
}
break;
}

return m__$1;
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMapIndexed$element_map_indexed_BANG_$arity$4 = (function (m,f,a,more){
var m__$1 = this;
var n__4376__auto___29650 = cljs.core.count.call(null,m__$1);
var i_29651 = (0);
while(true){
if((i_29651 < n__4376__auto___29650)){
cljs.core.apply.call(null,clojure.core.matrix.protocols.element_map_indexed_BANG_,m__$1.call(null,i_29651),((function (i_29651,n__4376__auto___29650,m__$1){
return (function() { 
var G__29652__delegate = function (p1__29613_SHARP_,rest__29614_SHARP_){
return cljs.core.apply.call(null,f,cljs.core.cons.call(null,i_29651,p1__29613_SHARP_),rest__29614_SHARP_);
};
var G__29652 = function (p1__29613_SHARP_,var_args){
var rest__29614_SHARP_ = null;
if (arguments.length > 1) {
var G__29653__i = 0, G__29653__a = new Array(arguments.length -  1);
while (G__29653__i < G__29653__a.length) {G__29653__a[G__29653__i] = arguments[G__29653__i + 1]; ++G__29653__i;}
  rest__29614_SHARP_ = new cljs.core.IndexedSeq(G__29653__a,0,null);
} 
return G__29652__delegate.call(this,p1__29613_SHARP_,rest__29614_SHARP_);};
G__29652.cljs$lang$maxFixedArity = 1;
G__29652.cljs$lang$applyTo = (function (arglist__29654){
var p1__29613_SHARP_ = cljs.core.first(arglist__29654);
var rest__29614_SHARP_ = cljs.core.rest(arglist__29654);
return G__29652__delegate(p1__29613_SHARP_,rest__29614_SHARP_);
});
G__29652.cljs$core$IFn$_invoke$arity$variadic = G__29652__delegate;
return G__29652;
})()
;})(i_29651,n__4376__auto___29650,m__$1))
,clojure.core.matrix.protocols.get_major_slice.call(null,a,i_29651),cljs.core.map.call(null,((function (i_29651,n__4376__auto___29650,m__$1){
return (function (p1__29615_SHARP_){
return clojure.core.matrix.protocols.get_major_slice.call(null,p1__29615_SHARP_,i_29651);
});})(i_29651,n__4376__auto___29650,m__$1))
,more));

var G__29655 = (i_29651 + (1));
i_29651 = G__29655;
continue;
} else {
}
break;
}

return m__$1;
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSelect$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSelect$select$arity$2 = (function (a,args){
var a__$1 = this;
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,args))){
if(cljs.core._EQ_.call(null,(1),clojure.core.matrix.protocols.dimensionality.call(null,a__$1))){
return cljs.core.apply.call(null,cljs.core.vector,cljs.core.mapv.call(null,((function (a__$1){
return (function (p1__29656_SHARP_){
return cljs.core.nth.call(null,a__$1,p1__29656_SHARP_);
});})(a__$1))
,cljs.core.first.call(null,args)));
} else {
throw cljs.core.ex_info.call(null,["Array dimension does not match length of args"].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
} else {
return cljs.core.apply.call(null,cljs.core.vector,cljs.core.mapv.call(null,((function (a__$1){
return (function (p1__29657_SHARP_){
return clojure.core.matrix.protocols.select.call(null,cljs.core.nth.call(null,a__$1,p1__29657_SHARP_),cljs.core.next.call(null,args));
});})(a__$1))
,cljs.core.first.call(null,args)));
}
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PIndexImplementation$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PIndexImplementation$index_QMARK_$arity$1 = (function (m){
var m__$1 = this;
return true;
});
clojure.core.matrix.implementations.register_implementation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null));

//# sourceMappingURL=persistent_vector.js.map?rel=1526826987219
