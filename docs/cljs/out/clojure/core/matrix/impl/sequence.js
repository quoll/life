// Compiled by ClojureScript 1.10.238 {}
goog.provide('clojure.core.matrix.impl.sequence');
goog.require('cljs.core');
goog.require('clojure.core.matrix.protocols');
goog.require('clojure.core.matrix.implementations');
cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PImplementation$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PImplementation$implementation_key$arity$1 = (function (m){
var m__$1 = this;
return new cljs.core.Keyword(null,"sequence","sequence",926807414);
});

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PImplementation$meta_info$arity$1 = (function (m){
var m__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Core.matrix implementation for Clojure ISeq objects"], null);
});

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PImplementation$new_vector$arity$2 = (function (m,length){
var m__$1 = this;
return clojure.core.matrix.protocols.new_vector.call(null,cljs.core.PersistentVector.EMPTY,length);
});

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PImplementation$new_matrix$arity$3 = (function (m,rows,columns){
var m__$1 = this;
return clojure.core.matrix.protocols.new_matrix.call(null,cljs.core.PersistentVector.EMPTY,rows,columns);
});

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PImplementation$new_matrix_nd$arity$2 = (function (m,dims){
var m__$1 = this;
return clojure.core.matrix.protocols.new_matrix_nd.call(null,cljs.core.PersistentVector.EMPTY,dims);
});

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PImplementation$construct_matrix$arity$2 = (function (m,data){
var m__$1 = this;
return clojure.core.matrix.protocols.coerce_param.call(null,cljs.core.PersistentVector.EMPTY,data);
});

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PImplementation$supports_dimensionality_QMARK_$arity$2 = (function (m,dims){
var m__$1 = this;
return true;
});
cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PIndexedAccess$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PIndexedAccess$get_1d$arity$2 = (function (m,x){
var m__$1 = this;
var x__21930__auto__ = cljs.core.nth.call(null,m__$1,x);
if(typeof x__21930__auto__ === 'number'){
return x__21930__auto__;
} else {
return clojure.core.matrix.protocols.get_0d.call(null,x__21930__auto__);

}
});

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PIndexedAccess$get_2d$arity$3 = (function (m,x,y){
var m__$1 = this;
var row = cljs.core.nth.call(null,m__$1,x);
return clojure.core.matrix.protocols.get_1d.call(null,row,y);
});

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PIndexedAccess$get_nd$arity$2 = (function (m,indexes){
var m__$1 = this;
var temp__5455__auto__ = cljs.core.seq.call(null,indexes);
if(temp__5455__auto__){
var indexes__$1 = temp__5455__auto__;
var temp__5455__auto____$1 = cljs.core.next.call(null,indexes__$1);
if(temp__5455__auto____$1){
var next_indexes = temp__5455__auto____$1;
var mv = cljs.core.nth.call(null,m__$1,cljs.core.first.call(null,indexes__$1));
return clojure.core.matrix.protocols.get_nd.call(null,mv,next_indexes);
} else {
return cljs.core.nth.call(null,m__$1,cljs.core.first.call(null,indexes__$1));
}
} else {
return m__$1;
}
});
cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PIndexedSetting$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PIndexedSetting$set_1d$arity$3 = (function (m,row,v){
var m__$1 = this;
return clojure.core.matrix.protocols.set_1d.call(null,clojure.core.matrix.protocols.convert_to_nested_vectors.call(null,m__$1),row,v);
});

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PIndexedSetting$set_2d$arity$4 = (function (m,row,column,v){
var m__$1 = this;
return clojure.core.matrix.protocols.set_2d.call(null,clojure.core.matrix.protocols.convert_to_nested_vectors.call(null,m__$1),row,column,v);
});

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PIndexedSetting$set_nd$arity$3 = (function (m,indexes,v){
var m__$1 = this;
return clojure.core.matrix.protocols.set_nd.call(null,clojure.core.matrix.protocols.convert_to_nested_vectors.call(null,m__$1),indexes,v);
});

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PIndexedSetting$is_mutable_QMARK_$arity$1 = (function (m){
var m__$1 = this;
return false;
});
cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PBroadcast$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PBroadcast$broadcast$arity$2 = (function (m,new_shape){
var m__$1 = this;
return clojure.core.matrix.protocols.broadcast.call(null,clojure.core.matrix.protocols.convert_to_nested_vectors.call(null,m__$1),new_shape);
});
cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PBroadcastLike$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PBroadcastLike$broadcast_like$arity$2 = (function (m,a){
var m__$1 = this;
return clojure.core.matrix.protocols.broadcast.call(null,clojure.core.matrix.protocols.convert_to_nested_vectors.call(null,a),clojure.core.matrix.protocols.get_shape.call(null,m__$1));
});
cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PSliceView$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PSliceView$get_major_slice_view$arity$2 = (function (m,i){
var m__$1 = this;
return cljs.core.nth.call(null,m__$1,i);
});
cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PSliceSeq$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PSliceSeq$get_major_slice_seq$arity$1 = (function (m){
var m__$1 = this;
return cljs.core.vec.call(null,m__$1);
});
cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PMatrixRows$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PMatrixRows$get_rows$arity$1 = (function (m){
var m__$1 = this;
return cljs.core.vec.call(null,m__$1);
});
cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PMatrixColumns$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PMatrixColumns$get_columns$arity$1 = (function (m){
var m__$1 = this;
var m__$2 = clojure.core.matrix.protocols.coerce_param.call(null,cljs.core.PersistentVector.EMPTY,m__$1);
return clojure.core.matrix.protocols.get_columns.call(null,m__$2);
});
cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PSliceSeq2$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PSliceSeq2$get_slice_seq$arity$2 = (function (m,dimension){
var m__$1 = this;
var ldimension = cljs.core.long$.call(null,dimension);
if((ldimension === (0))){
return clojure.core.matrix.protocols.get_major_slice_seq.call(null,m__$1);
} else {
if((ldimension < (0))){
throw cljs.core.ex_info.call(null,["Can't get slices of a negative dimension: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dimension)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
return cljs.core.mapv.call(null,((function (ldimension,m__$1){
return (function (p1__22088_SHARP_){
return clojure.core.matrix.protocols.get_slice.call(null,m__$1,dimension,p1__22088_SHARP_);
});})(ldimension,m__$1))
,cljs.core.range.call(null,clojure.core.matrix.protocols.dimension_count.call(null,m__$1,dimension)));

}
}
});
cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PConversion$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PConversion$convert_to_nested_vectors$arity$1 = (function (m){
var m__$1 = this;
if((clojure.core.matrix.protocols.dimensionality.call(null,cljs.core.first.call(null,m__$1)) > (0))){
return cljs.core.mapv.call(null,clojure.core.matrix.protocols.convert_to_nested_vectors,m__$1);
} else {
return cljs.core.vec.call(null,m__$1);
}
});
cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PDimensionInfo$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimensionality$arity$1 = (function (m){
var m__$1 = this;
return (clojure.core.matrix.protocols.dimensionality.call(null,cljs.core.first.call(null,m__$1)) + (1));
});

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_vector_QMARK_$arity$1 = (function (m){
var m__$1 = this;
return ((0) === clojure.core.matrix.protocols.dimensionality.call(null,cljs.core.first.call(null,m__$1)));
});

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_scalar_QMARK_$arity$1 = (function (m){
var m__$1 = this;
return false;
});

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PDimensionInfo$get_shape$arity$1 = (function (m){
var m__$1 = this;
console.log(["shape of seq: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m__$1)].join(''));

return cljs.core.cons.call(null,cljs.core.count.call(null,m__$1),clojure.core.matrix.protocols.get_shape.call(null,cljs.core.first.call(null,m__$1)));
});

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimension_count$arity$2 = (function (m,x){
var m__$1 = this;
if((x === (0))){
return cljs.core.count.call(null,m__$1);
} else {
return clojure.core.matrix.protocols.dimension_count.call(null,cljs.core.first.call(null,m__$1),(x - (1)));
}
});
cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PFunctionalOperations$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_seq$arity$1 = (function (m){
var m__$1 = this;
if(((0) === cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,cljs.core.first.call(null,m__$1))))){
return m__$1;
} else {
return cljs.core.mapcat.call(null,clojure.core.matrix.protocols.element_seq,m__$1);
}
});

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_map$arity$2 = (function (m,f){
var m__$1 = this;
return cljs.core.mapv.call(null,((function (m__$1){
return (function (p1__22089_SHARP_){
return clojure.core.matrix.protocols.element_map.call(null,p1__22089_SHARP_,f);
});})(m__$1))
,m__$1);
});

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_map$arity$3 = (function (m,f,a){
var m__$1 = this;
var vec__22095 = clojure.core.matrix.protocols.broadcast_compatible.call(null,m__$1,a);
var m__$2 = cljs.core.nth.call(null,vec__22095,(0),null);
var a__$1 = cljs.core.nth.call(null,vec__22095,(1),null);
return cljs.core.mapv.call(null,((function (vec__22095,m__$2,a__$1,m__$1){
return (function (p1__22090_SHARP_,p2__22091_SHARP_){
return clojure.core.matrix.protocols.element_map.call(null,p1__22090_SHARP_,f,p2__22091_SHARP_);
});})(vec__22095,m__$2,a__$1,m__$1))
,m__$2,clojure.core.matrix.protocols.get_major_slice_seq.call(null,a__$1));
});

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_map$arity$4 = (function (m,f,a,more){
var m__$1 = this;
var vec__22098 = cljs.core.apply.call(null,clojure.core.matrix.protocols.broadcast_compatible,m__$1,a,more);
var seq__22099 = cljs.core.seq.call(null,vec__22098);
var first__22100 = cljs.core.first.call(null,seq__22099);
var seq__22099__$1 = cljs.core.next.call(null,seq__22099);
var m__$2 = first__22100;
var first__22100__$1 = cljs.core.first.call(null,seq__22099__$1);
var seq__22099__$2 = cljs.core.next.call(null,seq__22099__$1);
var a__$1 = first__22100__$1;
var more__$1 = seq__22099__$2;
return cljs.core.mapv.call(null,((function (vec__22098,seq__22099,first__22100,seq__22099__$1,m__$2,first__22100__$1,seq__22099__$2,a__$1,more__$1,m__$1){
return (function (p1__22092_SHARP_,p2__22093_SHARP_,p3__22094_SHARP_){
return clojure.core.matrix.protocols.element_map.call(null,p1__22092_SHARP_,f,p2__22093_SHARP_,p3__22094_SHARP_);
});})(vec__22098,seq__22099,first__22100,seq__22099__$1,m__$2,first__22100__$1,seq__22099__$2,a__$1,more__$1,m__$1))
,m__$2,clojure.core.matrix.protocols.get_major_slice_seq.call(null,a__$1),cljs.core.map.call(null,clojure.core.matrix.protocols.get_major_slice_seq,more__$1));
});

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_map_BANG_$arity$2 = (function (m,f){
var m__$1 = this;
throw cljs.core.ex_info.call(null,["Sequence arrays are not mutable!"].join(''),cljs.core.PersistentArrayMap.EMPTY);
});

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_map_BANG_$arity$3 = (function (m,f,a){
var m__$1 = this;
throw cljs.core.ex_info.call(null,["Sequence arrays are not mutable!"].join(''),cljs.core.PersistentArrayMap.EMPTY);
});

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_map_BANG_$arity$4 = (function (m,f,a,more){
var m__$1 = this;
throw cljs.core.ex_info.call(null,["Sequence arrays are not mutable!"].join(''),cljs.core.PersistentArrayMap.EMPTY);
});

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_reduce$arity$2 = (function (m,f){
var m__$1 = this;
return cljs.core.reduce.call(null,f,cljs.core.mapcat.call(null,clojure.core.matrix.protocols.element_seq,m__$1));
});

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_reduce$arity$3 = (function (m,f,init){
var m__$1 = this;
return cljs.core.reduce.call(null,f,init,cljs.core.mapcat.call(null,clojure.core.matrix.protocols.element_seq,m__$1));
});
cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PMapIndexed$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PMapIndexed$element_map_indexed$arity$2 = (function (ms,f){
var ms__$1 = this;
return cljs.core.mapv.call(null,((function (ms__$1){
return (function (i,m){
return clojure.core.matrix.protocols.element_map_indexed.call(null,m,((function (ms__$1){
return (function() { 
var G__22113__delegate = function (p1__22101_SHARP_,rest__22102_SHARP_){
return cljs.core.apply.call(null,f,cljs.core.cons.call(null,i,p1__22101_SHARP_),rest__22102_SHARP_);
};
var G__22113 = function (p1__22101_SHARP_,var_args){
var rest__22102_SHARP_ = null;
if (arguments.length > 1) {
var G__22114__i = 0, G__22114__a = new Array(arguments.length -  1);
while (G__22114__i < G__22114__a.length) {G__22114__a[G__22114__i] = arguments[G__22114__i + 1]; ++G__22114__i;}
  rest__22102_SHARP_ = new cljs.core.IndexedSeq(G__22114__a,0,null);
} 
return G__22113__delegate.call(this,p1__22101_SHARP_,rest__22102_SHARP_);};
G__22113.cljs$lang$maxFixedArity = 1;
G__22113.cljs$lang$applyTo = (function (arglist__22115){
var p1__22101_SHARP_ = cljs.core.first(arglist__22115);
var rest__22102_SHARP_ = cljs.core.rest(arglist__22115);
return G__22113__delegate(p1__22101_SHARP_,rest__22102_SHARP_);
});
G__22113.cljs$core$IFn$_invoke$arity$variadic = G__22113__delegate;
return G__22113;
})()
;})(ms__$1))
);
});})(ms__$1))
,cljs.core.range.call(null,cljs.core.count.call(null,ms__$1)),ms__$1);
});

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PMapIndexed$element_map_indexed$arity$3 = (function (ms,f,as){
var ms__$1 = this;
var vec__22107 = clojure.core.matrix.protocols.broadcast_compatible.call(null,ms__$1,as);
var ms__$2 = cljs.core.nth.call(null,vec__22107,(0),null);
var as__$1 = cljs.core.nth.call(null,vec__22107,(1),null);
return cljs.core.mapv.call(null,((function (vec__22107,ms__$2,as__$1,ms__$1){
return (function (i,m,a){
return clojure.core.matrix.protocols.element_map_indexed.call(null,m,((function (vec__22107,ms__$2,as__$1,ms__$1){
return (function() { 
var G__22116__delegate = function (p1__22103_SHARP_,rest__22104_SHARP_){
return cljs.core.apply.call(null,f,cljs.core.cons.call(null,i,p1__22103_SHARP_),rest__22104_SHARP_);
};
var G__22116 = function (p1__22103_SHARP_,var_args){
var rest__22104_SHARP_ = null;
if (arguments.length > 1) {
var G__22117__i = 0, G__22117__a = new Array(arguments.length -  1);
while (G__22117__i < G__22117__a.length) {G__22117__a[G__22117__i] = arguments[G__22117__i + 1]; ++G__22117__i;}
  rest__22104_SHARP_ = new cljs.core.IndexedSeq(G__22117__a,0,null);
} 
return G__22116__delegate.call(this,p1__22103_SHARP_,rest__22104_SHARP_);};
G__22116.cljs$lang$maxFixedArity = 1;
G__22116.cljs$lang$applyTo = (function (arglist__22118){
var p1__22103_SHARP_ = cljs.core.first(arglist__22118);
var rest__22104_SHARP_ = cljs.core.rest(arglist__22118);
return G__22116__delegate(p1__22103_SHARP_,rest__22104_SHARP_);
});
G__22116.cljs$core$IFn$_invoke$arity$variadic = G__22116__delegate;
return G__22116;
})()
;})(vec__22107,ms__$2,as__$1,ms__$1))
,a);
});})(vec__22107,ms__$2,as__$1,ms__$1))
,cljs.core.range.call(null,cljs.core.count.call(null,ms__$2)),ms__$2,clojure.core.matrix.protocols.get_major_slice_seq.call(null,as__$1));
});

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PMapIndexed$element_map_indexed$arity$4 = (function (ms,f,as,more){
var ms__$1 = this;
var vec__22110 = cljs.core.apply.call(null,clojure.core.matrix.protocols.broadcast_compatible,ms__$1,as,more);
var seq__22111 = cljs.core.seq.call(null,vec__22110);
var first__22112 = cljs.core.first.call(null,seq__22111);
var seq__22111__$1 = cljs.core.next.call(null,seq__22111);
var ms__$2 = first__22112;
var first__22112__$1 = cljs.core.first.call(null,seq__22111__$1);
var seq__22111__$2 = cljs.core.next.call(null,seq__22111__$1);
var as__$1 = first__22112__$1;
var more__$1 = seq__22111__$2;
return cljs.core.mapv.call(null,((function (vec__22110,seq__22111,first__22112,seq__22111__$1,ms__$2,first__22112__$1,seq__22111__$2,as__$1,more__$1,ms__$1){
return (function() { 
var G__22119__delegate = function (i,m,a,mr){
return clojure.core.matrix.protocols.element_map_indexed.call(null,m,((function (vec__22110,seq__22111,first__22112,seq__22111__$1,ms__$2,first__22112__$1,seq__22111__$2,as__$1,more__$1,ms__$1){
return (function() { 
var G__22120__delegate = function (p1__22105_SHARP_,rest__22106_SHARP_){
return cljs.core.apply.call(null,f,cljs.core.cons.call(null,i,p1__22105_SHARP_),rest__22106_SHARP_);
};
var G__22120 = function (p1__22105_SHARP_,var_args){
var rest__22106_SHARP_ = null;
if (arguments.length > 1) {
var G__22121__i = 0, G__22121__a = new Array(arguments.length -  1);
while (G__22121__i < G__22121__a.length) {G__22121__a[G__22121__i] = arguments[G__22121__i + 1]; ++G__22121__i;}
  rest__22106_SHARP_ = new cljs.core.IndexedSeq(G__22121__a,0,null);
} 
return G__22120__delegate.call(this,p1__22105_SHARP_,rest__22106_SHARP_);};
G__22120.cljs$lang$maxFixedArity = 1;
G__22120.cljs$lang$applyTo = (function (arglist__22122){
var p1__22105_SHARP_ = cljs.core.first(arglist__22122);
var rest__22106_SHARP_ = cljs.core.rest(arglist__22122);
return G__22120__delegate(p1__22105_SHARP_,rest__22106_SHARP_);
});
G__22120.cljs$core$IFn$_invoke$arity$variadic = G__22120__delegate;
return G__22120;
})()
;})(vec__22110,seq__22111,first__22112,seq__22111__$1,ms__$2,first__22112__$1,seq__22111__$2,as__$1,more__$1,ms__$1))
,a,mr);
};
var G__22119 = function (i,m,a,var_args){
var mr = null;
if (arguments.length > 3) {
var G__22123__i = 0, G__22123__a = new Array(arguments.length -  3);
while (G__22123__i < G__22123__a.length) {G__22123__a[G__22123__i] = arguments[G__22123__i + 3]; ++G__22123__i;}
  mr = new cljs.core.IndexedSeq(G__22123__a,0,null);
} 
return G__22119__delegate.call(this,i,m,a,mr);};
G__22119.cljs$lang$maxFixedArity = 3;
G__22119.cljs$lang$applyTo = (function (arglist__22124){
var i = cljs.core.first(arglist__22124);
arglist__22124 = cljs.core.next(arglist__22124);
var m = cljs.core.first(arglist__22124);
arglist__22124 = cljs.core.next(arglist__22124);
var a = cljs.core.first(arglist__22124);
var mr = cljs.core.rest(arglist__22124);
return G__22119__delegate(i,m,a,mr);
});
G__22119.cljs$core$IFn$_invoke$arity$variadic = G__22119__delegate;
return G__22119;
})()
;})(vec__22110,seq__22111,first__22112,seq__22111__$1,ms__$2,first__22112__$1,seq__22111__$2,as__$1,more__$1,ms__$1))
,cljs.core.range.call(null,cljs.core.count.call(null,ms__$2)),ms__$2,clojure.core.matrix.protocols.get_major_slice_seq.call(null,as__$1),cljs.core.map.call(null,clojure.core.matrix.protocols.get_major_slice_seq,more__$1));
});

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PMapIndexed$element_map_indexed_BANG_$arity$2 = (function (m,f){
var m__$1 = this;
throw cljs.core.ex_info.call(null,["Sequence arrays are not mutable!"].join(''),cljs.core.PersistentArrayMap.EMPTY);
});

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PMapIndexed$element_map_indexed_BANG_$arity$3 = (function (m,f,a){
var m__$1 = this;
throw cljs.core.ex_info.call(null,["Sequence arrays are not mutable!"].join(''),cljs.core.PersistentArrayMap.EMPTY);
});

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PMapIndexed$element_map_indexed_BANG_$arity$4 = (function (m,f,a,more){
var m__$1 = this;
throw cljs.core.ex_info.call(null,["Sequence arrays are not mutable!"].join(''),cljs.core.PersistentArrayMap.EMPTY);
});

//# sourceMappingURL=sequence.js.map?rel=1526826985237
