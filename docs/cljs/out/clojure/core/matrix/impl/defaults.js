// Compiled by ClojureScript 1.10.238 {}
goog.provide('clojure.core.matrix.impl.defaults');
goog.require('cljs.core');
goog.require('clojure.core.matrix.protocols');
goog.require('clojure.core.matrix.impl.wrappers');
goog.require('clojure.core.matrix.impl.mathsops');
goog.require('clojure.core.matrix.implementations');
goog.require('clojure.core.matrix.impl.double_array');
goog.require('clojure.core.matrix.impl.common');
goog.require('clojure.core.matrix.utils');
clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_ = null;
/**
 * Returns the total count of elements in an array
 */
clojure.core.matrix.impl.defaults.calc_element_count = (function clojure$core$matrix$impl$defaults$calc_element_count(m){
var temp__5455__auto__ = clojure.core.matrix.protocols.get_shape.call(null,m);
if(cljs.core.truth_(temp__5455__auto__)){
var sh = temp__5455__auto__;
return cljs.core.reduce.call(null,cljs.core._STAR_,sh);
} else {
return (1);
}
});
/**
 * Constructs a new mutable matrix with the given data.
 */
clojure.core.matrix.impl.defaults.construct_mutable_matrix = (function clojure$core$matrix$impl$defaults$construct_mutable_matrix(m){
var dims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m));
var type = clojure.core.matrix.protocols.element_type.call(null,m);
var double_QMARK_ = cljs.core._EQ_.call(null,Number,type);
if((dims === (0))){
return clojure.core.matrix.impl.wrappers.wrap_scalar.call(null,clojure.core.matrix.protocols.get_0d.call(null,m));
} else {
if((((dims === (1))) && (double_QMARK_))){
return clojure.core.matrix.protocols.coerce_param.call(null,clojure.core.matrix.implementations.get_canonical_object.call(null,new cljs.core.Keyword(null,"aljabr","aljabr",1424034715)),m);
} else {
if(double_QMARK_){
return clojure.core.matrix.protocols.coerce_param.call(null,clojure.core.matrix.implementations.get_canonical_object.call(null,new cljs.core.Keyword(null,"aljabr","aljabr",1424034715)),m);
} else {
return clojure.core.matrix.protocols.coerce_param.call(null,clojure.core.matrix.implementations.get_canonical_object.call(null,new cljs.core.Keyword(null,"aljabr","aljabr",1424034715)),m);

}
}
}
});
goog.object.set(clojure.core.matrix.protocols.PImplementation,"object",true);

goog.object.set(clojure.core.matrix.protocols.implementation_key,"object",(function (m){
return new cljs.core.Keyword(null,"default","default",-1987822328);
}));

goog.object.set(clojure.core.matrix.protocols.meta_info,"object",(function (m){
return cljs.core.PersistentArrayMap.EMPTY;
}));

goog.object.set(clojure.core.matrix.protocols.construct_matrix,"object",(function (m,data){
return clojure.core.matrix.protocols.construct_matrix.call(null,cljs.core.PersistentVector.EMPTY,data);
}));

goog.object.set(clojure.core.matrix.protocols.new_vector,"object",(function (m,length){
return clojure.core.matrix.protocols.new_vector.call(null,cljs.core.PersistentVector.EMPTY,length);
}));

goog.object.set(clojure.core.matrix.protocols.new_matrix,"object",(function (m,rows,columns){
return clojure.core.matrix.protocols.new_matrix.call(null,cljs.core.PersistentVector.EMPTY,rows,columns);
}));

goog.object.set(clojure.core.matrix.protocols.new_matrix_nd,"object",(function (m,shape){
return clojure.core.matrix.protocols.new_matrix_nd.call(null,cljs.core.PersistentVector.EMPTY,shape);
}));

goog.object.set(clojure.core.matrix.protocols.supports_dimensionality_QMARK_,"object",(function (m,dimensions){
return true;
}));

cljs.core.Keyword.prototype.clojure$core$matrix$protocols$PImplementation$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.clojure$core$matrix$protocols$PImplementation$implementation_key$arity$1 = (function (m){
var m__$1 = this;
return m__$1;
});

cljs.core.Keyword.prototype.clojure$core$matrix$protocols$PImplementation$meta_info$arity$1 = (function (m){
var m__$1 = this;
return clojure.core.matrix.protocols.meta_info.call(null,clojure.core.matrix.implementations.get_canonical_object_or_throw.call(null,m__$1));
});

cljs.core.Keyword.prototype.clojure$core$matrix$protocols$PImplementation$construct_matrix$arity$2 = (function (m,data){
var m__$1 = this;
return clojure.core.matrix.protocols.construct_matrix.call(null,clojure.core.matrix.implementations.get_canonical_object_or_throw.call(null,m__$1),data);
});

cljs.core.Keyword.prototype.clojure$core$matrix$protocols$PImplementation$new_vector$arity$2 = (function (m,length){
var m__$1 = this;
return clojure.core.matrix.protocols.new_vector.call(null,clojure.core.matrix.implementations.get_canonical_object_or_throw.call(null,m__$1),length);
});

cljs.core.Keyword.prototype.clojure$core$matrix$protocols$PImplementation$new_matrix$arity$3 = (function (m,rows,columns){
var m__$1 = this;
return clojure.core.matrix.protocols.new_matrix.call(null,clojure.core.matrix.implementations.get_canonical_object_or_throw.call(null,m__$1),rows,columns);
});

cljs.core.Keyword.prototype.clojure$core$matrix$protocols$PImplementation$new_matrix_nd$arity$2 = (function (m,shape){
var m__$1 = this;
return clojure.core.matrix.protocols.new_matrix_nd.call(null,clojure.core.matrix.implementations.get_canonical_object_or_throw.call(null,m__$1),shape);
});

cljs.core.Keyword.prototype.clojure$core$matrix$protocols$PImplementation$supports_dimensionality_QMARK_$arity$2 = (function (m,dimensions){
var m__$1 = this;
return clojure.core.matrix.protocols.supports_dimensionality_QMARK_.call(null,clojure.core.matrix.implementations.get_canonical_object_or_throw.call(null,m__$1),dimensions);
});
goog.object.set(clojure.core.matrix.protocols.PSparse,"null",true);

goog.object.set(clojure.core.matrix.protocols.sparse_coerce,"null",(function (m,data){
return clojure.core.matrix.protocols.sparse.call(null,data);
}));

goog.object.set(clojure.core.matrix.protocols.sparse,"null",(function (m){
return null;
}));

goog.object.set(clojure.core.matrix.protocols.PSparse,"object",true);

goog.object.set(clojure.core.matrix.protocols.sparse_coerce,"object",(function (m,data){
return null;
}));

goog.object.set(clojure.core.matrix.protocols.sparse,"object",(function (m){
return m;
}));
goog.object.set(clojure.core.matrix.protocols.PNative,"null",true);

goog.object.set(clojure.core.matrix.protocols.native$,"null",(function (m){
return null;
}));

goog.object.set(clojure.core.matrix.protocols.native_QMARK_,"null",(function (m){
return false;
}));

goog.object.set(clojure.core.matrix.protocols.PNative,"object",true);

goog.object.set(clojure.core.matrix.protocols.native$,"object",(function (m){
return null;
}));

goog.object.set(clojure.core.matrix.protocols.native_QMARK_,"object",(function (m){
return false;
}));
goog.object.set(clojure.core.matrix.protocols.PNewSparseArray,"object",true);

goog.object.set(clojure.core.matrix.protocols.new_sparse_array,"object",(function (m,shape){
return null;
}));
goog.object.set(clojure.core.matrix.protocols.PDense,"null",true);

goog.object.set(clojure.core.matrix.protocols.dense_coerce,"null",(function (m,data){
return clojure.core.matrix.protocols.dense.call(null,data);
}));

goog.object.set(clojure.core.matrix.protocols.dense,"null",(function (m){
return null;
}));

goog.object.set(clojure.core.matrix.protocols.PDense,"object",true);

goog.object.set(clojure.core.matrix.protocols.dense_coerce,"object",(function (m,data){
return null;
}));

goog.object.set(clojure.core.matrix.protocols.dense,"object",(function (m){
return m;
}));
goog.object.set(clojure.core.matrix.protocols.PIndexedAccess,"null",true);

goog.object.set(clojure.core.matrix.protocols.get_1d,"null",(function (m,x){
throw cljs.core.ex_info.call(null,["Can't do 1D get on nil"].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.get_2d,"null",(function (m,x,y){
throw cljs.core.ex_info.call(null,["Can't do 2D get on nil"].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.get_nd,"null",(function (m,indexes){
var temp__5455__auto__ = cljs.core.seq.call(null,indexes);
if(temp__5455__auto__){
var s = temp__5455__auto__;
throw cljs.core.ex_info.call(null,["Can't do ND get on nil with indexes: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
return m;
}
}));

goog.object.set(clojure.core.matrix.protocols.PIndexedAccess,"number",true);

goog.object.set(clojure.core.matrix.protocols.get_1d,"number",(function (m,x){
throw cljs.core.ex_info.call(null,["Can't do 1D get on a scalar number"].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.get_2d,"number",(function (m,x,y){
throw cljs.core.ex_info.call(null,["Can't do 2D get on a scalar number"].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.get_nd,"number",(function (m,indexes){
var temp__5455__auto__ = cljs.core.seq.call(null,indexes);
if(temp__5455__auto__){
var s = temp__5455__auto__;
throw cljs.core.ex_info.call(null,["Can't do ND get on a scalar number with indexes: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
return m;
}
}));

goog.object.set(clojure.core.matrix.protocols.PIndexedAccess,"object",true);

goog.object.set(clojure.core.matrix.protocols.get_1d,"object",(function (m,x){
if((Array === m.constructor)){
return clojure.core.matrix.protocols.get_0d.call(null,cljs.core.nth.call(null,m,x));
} else {
return clojure.core.matrix.protocols.get_nd.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null));

}
}));

goog.object.set(clojure.core.matrix.protocols.get_2d,"object",(function (m,x,y){
if((Array === m.constructor)){
return clojure.core.matrix.protocols.get_1d.call(null,cljs.core.nth.call(null,m,x),y);
} else {
return clojure.core.matrix.protocols.get_nd.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));

}
}));

goog.object.set(clojure.core.matrix.protocols.get_nd,"object",(function (m,indexes){
if(cljs.core.seq.call(null,indexes)){
if((Array === m.constructor)){
return clojure.core.matrix.protocols.get_nd.call(null,cljs.core.nth.call(null,m,cljs.core.first.call(null,indexes)),cljs.core.next.call(null,indexes));
} else {
throw cljs.core.ex_info.call(null,["Indexed get failed, not defined for:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,m))].join(''),cljs.core.PersistentArrayMap.EMPTY);

}
} else {
return clojure.core.matrix.protocols.get_0d.call(null,m);
}
}));

cljs.core.LazySeq.prototype.clojure$core$matrix$protocols$PIndexedAccess$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.clojure$core$matrix$protocols$PIndexedAccess$get_1d$arity$2 = (function (m,x){
var m__$1 = this;
return cljs.core.nth.call(null,m__$1,x);
});

cljs.core.LazySeq.prototype.clojure$core$matrix$protocols$PIndexedAccess$get_2d$arity$3 = (function (m,x,y){
var m__$1 = this;
if(cljs.core.seqable_QMARK_.call(null,cljs.core.first.call(null,m__$1))){
return clojure.core.matrix.protocols.get_1d.call(null,cljs.core.nth.call(null,m__$1,x),y);
} else {
throw cljs.core.ex_info.call(null,["Can't do 2D get on a lazy seq"].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});

cljs.core.LazySeq.prototype.clojure$core$matrix$protocols$PIndexedAccess$get_nd$arity$2 = (function (m,indexes){
var m__$1 = this;
if(cljs.core.seq.call(null,indexes)){
return clojure.core.matrix.protocols.get_nd.call(null,cljs.core.nth.call(null,m__$1,cljs.core.first.call(null,indexes)),cljs.core.next.call(null,indexes));
} else {
return clojure.core.matrix.protocols.get_0d.call(null,m__$1);
}
});

cljs.core.Range.prototype.clojure$core$matrix$protocols$PIndexedAccess$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Range.prototype.clojure$core$matrix$protocols$PIndexedAccess$get_1d$arity$2 = (function (m,x){
var m__$1 = this;
return cljs.core.nth.call(null,m__$1,x);
});

cljs.core.Range.prototype.clojure$core$matrix$protocols$PIndexedAccess$get_2d$arity$3 = (function (m,x,y){
var m__$1 = this;
throw cljs.core.ex_info.call(null,["Can't do 2D get on a range"].join(''),cljs.core.PersistentArrayMap.EMPTY);
});

cljs.core.Range.prototype.clojure$core$matrix$protocols$PIndexedAccess$get_nd$arity$2 = (function (m,indexes){
var m__$1 = this;
if(cljs.core.seq.call(null,indexes)){
return clojure.core.matrix.protocols.get_nd.call(null,cljs.core.nth.call(null,m__$1,cljs.core.first.call(null,indexes)),cljs.core.next.call(null,indexes));
} else {
return clojure.core.matrix.protocols.get_0d.call(null,m__$1);
}
});
goog.object.set(clojure.core.matrix.protocols.PArrayMetrics,"null",true);

goog.object.set(clojure.core.matrix.protocols.nonzero_count,"null",(function (m){
return (1);
}));

goog.object.set(clojure.core.matrix.protocols.PArrayMetrics,"number",true);

goog.object.set(clojure.core.matrix.protocols.nonzero_count,"number",(function (m){
if((m === (0))){
return (0);
} else {
return (1);
}
}));

goog.object.set(clojure.core.matrix.protocols.PArrayMetrics,"object",true);

goog.object.set(clojure.core.matrix.protocols.nonzero_count,"object",(function (m){
return clojure.core.matrix.protocols.element_reduce.call(null,m,(function (cnt,e){
if((e === (0))){
return cnt;
} else {
return (cnt + (1));
}
}),(0));
}));
goog.object.set(clojure.core.matrix.protocols.PZeroDimensionConstruction,"null",true);

goog.object.set(clojure.core.matrix.protocols.new_scalar_array,"null",(function() {
var G__32723 = null;
var G__32723__1 = (function (m){
return 0.0;
});
var G__32723__2 = (function (m,value){
return clojure.core.matrix.impl.wrappers.wrap_scalar.call(null,value);
});
G__32723 = function(m,value){
switch(arguments.length){
case 1:
return G__32723__1.call(this,m);
case 2:
return G__32723__2.call(this,m,value);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__32723.cljs$core$IFn$_invoke$arity$1 = G__32723__1;
G__32723.cljs$core$IFn$_invoke$arity$2 = G__32723__2;
return G__32723;
})()
);

goog.object.set(clojure.core.matrix.protocols.PZeroDimensionConstruction,"object",true);

goog.object.set(clojure.core.matrix.protocols.new_scalar_array,"object",(function() {
var G__32724 = null;
var G__32724__1 = (function (m){
return clojure.core.matrix.impl.wrappers.wrap_scalar.call(null,0.0);
});
var G__32724__2 = (function (m,value){
return clojure.core.matrix.impl.wrappers.wrap_scalar.call(null,value);
});
G__32724 = function(m,value){
switch(arguments.length){
case 1:
return G__32724__1.call(this,m);
case 2:
return G__32724__2.call(this,m,value);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__32724.cljs$core$IFn$_invoke$arity$1 = G__32724__1;
G__32724.cljs$core$IFn$_invoke$arity$2 = G__32724__2;
return G__32724;
})()
);
goog.object.set(clojure.core.matrix.protocols.PZeroDimensionAccess,"null",true);

goog.object.set(clojure.core.matrix.protocols.get_0d,"null",(function (m){
return null;
}));

goog.object.set(clojure.core.matrix.protocols.set_0d_BANG_,"null",(function (m,value){
throw cljs.core.ex_info.call(null,["Can't set the value of nil!"].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.PZeroDimensionAccess,"string",true);

goog.object.set(clojure.core.matrix.protocols.get_0d,"string",(function (m){
return m;
}));

goog.object.set(clojure.core.matrix.protocols.set_0d_BANG_,"string",(function (m,value){
throw cljs.core.ex_info.call(null,["Can't set a string value!"].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

cljs.core.Keyword.prototype.clojure$core$matrix$protocols$PZeroDimensionAccess$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.clojure$core$matrix$protocols$PZeroDimensionAccess$get_0d$arity$1 = (function (m){
var m__$1 = this;
return m__$1;
});

cljs.core.Keyword.prototype.clojure$core$matrix$protocols$PZeroDimensionAccess$set_0d_BANG_$arity$2 = (function (m,value){
var m__$1 = this;
throw cljs.core.ex_info.call(null,["Can't set a keyword!"].join(''),cljs.core.PersistentArrayMap.EMPTY);
});

goog.object.set(clojure.core.matrix.protocols.PZeroDimensionAccess,"number",true);

goog.object.set(clojure.core.matrix.protocols.get_0d,"number",(function (m){
return m;
}));

goog.object.set(clojure.core.matrix.protocols.set_0d_BANG_,"number",(function (m,value){
throw cljs.core.ex_info.call(null,["Can't set a scalar number!"].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.PZeroDimensionAccess,"object",true);

goog.object.set(clojure.core.matrix.protocols.get_0d,"object",(function (m){
return m;
}));

goog.object.set(clojure.core.matrix.protocols.set_0d_BANG_,"object",(function (m,value){
return clojure.core.matrix.protocols.set_nd_BANG_.call(null,m,cljs.core.PersistentVector.EMPTY,value);
}));
goog.object.set(clojure.core.matrix.protocols.PZeroDimensionSet,"null",true);

goog.object.set(clojure.core.matrix.protocols.set_0d,"null",(function (m,value){
return value;
}));

goog.object.set(clojure.core.matrix.protocols.PZeroDimensionSet,"object",true);

goog.object.set(clojure.core.matrix.protocols.set_0d,"object",(function (m,value){
return value;
}));
goog.object.set(clojure.core.matrix.protocols.PIndexedSetting,"null",true);

goog.object.set(clojure.core.matrix.protocols.set_1d,"null",(function (m,row,v){
throw cljs.core.ex_info.call(null,["Can't do 1D set on nil"].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.set_2d,"null",(function (m,row,column,v){
throw cljs.core.ex_info.call(null,["Can't do 2D set on nil"].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.set_nd,"null",(function (m,indexes,v){
if(cljs.core.seq.call(null,indexes)){
throw cljs.core.ex_info.call(null,["Can't do ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,indexes)),"D set on nil"].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
return v;
}
}));

goog.object.set(clojure.core.matrix.protocols.is_mutable_QMARK_,"null",(function (m){
return false;
}));

goog.object.set(clojure.core.matrix.protocols.PIndexedSetting,"number",true);

goog.object.set(clojure.core.matrix.protocols.set_1d,"number",(function (m,row,v){
throw cljs.core.ex_info.call(null,["Can't do 1D set on a scalar number"].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.set_2d,"number",(function (m,row,column,v){
throw cljs.core.ex_info.call(null,["Can't do 2D set on a scalar number"].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.set_nd,"number",(function (m,indexes,v){
if(cljs.core.seq.call(null,indexes)){
throw cljs.core.ex_info.call(null,["Can't do ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,indexes)),"D set on a scalar number"].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
return v;
}
}));

goog.object.set(clojure.core.matrix.protocols.is_mutable_QMARK_,"number",(function (m){
return false;
}));

goog.object.set(clojure.core.matrix.protocols.PIndexedSetting,"object",true);

goog.object.set(clojure.core.matrix.protocols.set_1d,"object",(function (m,row,v){
var m__$1 = clojure.core.matrix.protocols.clone.call(null,m);
clojure.core.matrix.protocols.set_1d_BANG_.call(null,m__$1,row,v);

return m__$1;
}));

goog.object.set(clojure.core.matrix.protocols.set_2d,"object",(function (m,row,column,v){
var m__$1 = clojure.core.matrix.protocols.clone.call(null,m);
clojure.core.matrix.protocols.set_2d_BANG_.call(null,m__$1,row,column,v);

return m__$1;
}));

goog.object.set(clojure.core.matrix.protocols.set_nd,"object",(function (m,indexes,v){
var m__$1 = clojure.core.matrix.protocols.clone.call(null,m);
clojure.core.matrix.protocols.set_nd_BANG_.call(null,m__$1,indexes,v);

return m__$1;
}));

goog.object.set(clojure.core.matrix.protocols.is_mutable_QMARK_,"object",(function (m){
return true;
}));
goog.object.set(clojure.core.matrix.protocols.PNumerical,"number",true);

goog.object.set(clojure.core.matrix.protocols.numerical_QMARK_,"number",(function (m){
return true;
}));

goog.object.set(clojure.core.matrix.protocols.PNumerical,"null",true);

goog.object.set(clojure.core.matrix.protocols.numerical_QMARK_,"null",(function (m){
return false;
}));

goog.object.set(clojure.core.matrix.protocols.PNumerical,"object",true);

goog.object.set(clojure.core.matrix.protocols.numerical_QMARK_,"object",(function (m){
if(cljs.core.truth_(clojure.core.matrix.protocols.is_scalar_QMARK_.call(null,m))){
return false;
} else {
return cljs.core.every_QMARK_.call(null,cljs.core.number_QMARK_,clojure.core.matrix.protocols.element_seq.call(null,m));
}
}));
goog.object.set(clojure.core.matrix.protocols.PVectorOps,"number",true);

goog.object.set(clojure.core.matrix.protocols.vector_dot,"number",(function (a,b){
return clojure.core.matrix.protocols.pre_scale.call(null,b,a);
}));

goog.object.set(clojure.core.matrix.protocols.length,"number",(function (a){
return Math.abs(a);
}));

goog.object.set(clojure.core.matrix.protocols.length_squared,"number",(function (a){
var a__$1 = a;
return (a__$1 * a__$1);
}));

goog.object.set(clojure.core.matrix.protocols.normalise,"number",(function (a){
var a__$1 = a;
if((a__$1 > 0.0)){
return 1.0;
} else {
if((a__$1 < 0.0)){
return -1.0;
} else {
return 0.0;

}
}
}));

goog.object.set(clojure.core.matrix.protocols.PVectorOps,"object",true);

goog.object.set(clojure.core.matrix.protocols.vector_dot,"object",(function (a,b){
if(((((1) === cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,a)))) && (((1) === cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,b)))))){
return clojure.core.matrix.protocols.element_sum.call(null,clojure.core.matrix.protocols.element_multiply.call(null,a,b));
} else {
return null;
}
}));

goog.object.set(clojure.core.matrix.protocols.length,"object",(function (a){
return Math.sqrt(clojure.core.matrix.protocols.length_squared.call(null,a));
}));

goog.object.set(clojure.core.matrix.protocols.length_squared,"object",(function (a){
return clojure.core.matrix.protocols.element_reduce.call(null,a,(function (r,x){
return (r + (x * x));
}),0.0);
}));

goog.object.set(clojure.core.matrix.protocols.normalise,"object",(function (a){
return clojure.core.matrix.protocols.scale.call(null,a,(1.0 / Math.sqrt(clojure.core.matrix.protocols.length_squared.call(null,a))));
}));
goog.object.set(clojure.core.matrix.protocols.PVectorDistance,"number",true);

goog.object.set(clojure.core.matrix.protocols.distance,"number",(function (a,b){
if(typeof b === 'number'){
return Math.abs((b - a));
} else {
return clojure.core.matrix.protocols.distance.call(null,b,a);
}
}));

goog.object.set(clojure.core.matrix.protocols.PVectorDistance,"object",true);

goog.object.set(clojure.core.matrix.protocols.distance,"object",(function (a,b){
return clojure.core.matrix.protocols.length.call(null,clojure.core.matrix.protocols.matrix_sub.call(null,a,b));
}));
goog.object.set(clojure.core.matrix.protocols.PVectorCross,"object",true);

goog.object.set(clojure.core.matrix.protocols.cross_product,"object",(function (a,b){
var x1 = clojure.core.matrix.protocols.get_1d.call(null,a,(0));
var y1 = clojure.core.matrix.protocols.get_1d.call(null,a,(1));
var z1 = clojure.core.matrix.protocols.get_1d.call(null,a,(2));
var x2 = clojure.core.matrix.protocols.get_1d.call(null,b,(0));
var y2 = clojure.core.matrix.protocols.get_1d.call(null,b,(1));
var z2 = clojure.core.matrix.protocols.get_1d.call(null,b,(2));
return clojure.core.matrix.protocols.construct_matrix.call(null,a,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((y1 * z2) - (z1 * y2)),((z1 * x2) - (x1 * z2)),((x1 * y2) - (y1 * x2))], null));
}));

goog.object.set(clojure.core.matrix.protocols.cross_product_BANG_,"object",(function (a,b){
var x1 = clojure.core.matrix.protocols.get_1d.call(null,a,(0));
var y1 = clojure.core.matrix.protocols.get_1d.call(null,a,(1));
var z1 = clojure.core.matrix.protocols.get_1d.call(null,a,(2));
var x2 = clojure.core.matrix.protocols.get_1d.call(null,b,(0));
var y2 = clojure.core.matrix.protocols.get_1d.call(null,b,(1));
var z2 = clojure.core.matrix.protocols.get_1d.call(null,b,(2));
clojure.core.matrix.protocols.set_1d_BANG_.call(null,a,(0),((y1 * z2) - (z1 * y2)));

clojure.core.matrix.protocols.set_1d_BANG_.call(null,a,(1),((z1 * x2) - (x1 * z2)));

clojure.core.matrix.protocols.set_1d_BANG_.call(null,a,(2),((x1 * y2) - (y1 * x2)));

return a;
}));
goog.object.set(clojure.core.matrix.protocols.PMutableVectorOps,"object",true);

goog.object.set(clojure.core.matrix.protocols.normalise_BANG_,"object",(function (a){
return clojure.core.matrix.protocols.scale_BANG_.call(null,a,(1.0 / Math.sqrt(clojure.core.matrix.protocols.length_squared.call(null,a))));
}));
goog.object.set(clojure.core.matrix.protocols.PAssignment,"object",true);

goog.object.set(clojure.core.matrix.protocols.assign_BANG_,"object",(function (m,x){
var dims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m));
if(((0) === dims)){
return clojure.core.matrix.protocols.set_0d_BANG_.call(null,m,clojure.core.matrix.protocols.get_0d.call(null,x));
} else {
if(((1) === dims)){
if((x instanceof cljs.core.ISeq)){
var x__$1 = cljs.core.seq.call(null,x);
var msize = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimension_count.call(null,m,(0)));
var i = (0);
var s = cljs.core.seq.call(null,x__$1);
while(true){
if((i >= msize)){
if(s){
throw cljs.core.ex_info.call(null,["Mismatches size of sequence in assign!"].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
return null;
}
} else {
clojure.core.matrix.protocols.set_1d_BANG_.call(null,m,i,cljs.core.first.call(null,s));

var G__32729 = (i + (1));
var G__32730 = cljs.core.next.call(null,s);
i = G__32729;
s = G__32730;
continue;
}
break;
}
} else {
var xdims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,x));
var msize = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimension_count.call(null,m,(0)));
if(((0) === xdims)){
var value = clojure.core.matrix.protocols.get_0d.call(null,x);
var n__4376__auto__ = msize;
var i = (0);
while(true){
if((i < n__4376__auto__)){
clojure.core.matrix.protocols.set_1d_BANG_.call(null,m,i,value);

var G__32731 = (i + (1));
i = G__32731;
continue;
} else {
return null;
}
break;
}
} else {
if(((1) === xdims)){
if(cljs.core.not_EQ_.call(null,msize,cljs.core.long$.call(null,clojure.core.matrix.protocols.dimension_count.call(null,x,(0))))){
throw cljs.core.ex_info.call(null,["Mismatched shapes in assign to array of shape: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.core.matrix.protocols.get_shape.call(null,m))," with argument of shape: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.core.matrix.protocols.get_shape.call(null,x))].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

var n__4376__auto__ = msize;
var i = (0);
while(true){
if((i < n__4376__auto__)){
clojure.core.matrix.protocols.set_1d_BANG_.call(null,m,i,clojure.core.matrix.protocols.get_1d.call(null,x,i));

var G__32732 = (i + (1));
i = G__32732;
continue;
} else {
return null;
}
break;
}
} else {
throw cljs.core.ex_info.call(null,["Can't assign! with an argument of higher dimensionality"].join(''),cljs.core.PersistentArrayMap.EMPTY);

}
}
}
} else {
if(cljs.core.not.call(null,clojure.core.matrix.protocols.is_scalar_QMARK_.call(null,m))){
var xdims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,x));
if((dims === xdims)){
var xss = clojure.core.matrix.protocols.get_major_slice_seq.call(null,x);
var _ = (function (){var or__3922__auto__ = clojure.core.matrix.protocols.same_shapes_QMARK_.call(null,xss);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
throw cljs.core.ex_info.call(null,["Inconsistent slice shapes for assign!"].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
})();
return cljs.core.doall.call(null,cljs.core.map.call(null,((function (xss,_,xdims,dims){
return (function (a,b){
return clojure.core.matrix.protocols.assign_BANG_.call(null,a,b);
});})(xss,_,xdims,dims))
,clojure.core.matrix.protocols.get_major_slice_view_seq.call(null,m),xss));
} else {
var seq__32725 = cljs.core.seq.call(null,clojure.core.matrix.protocols.get_major_slice_view_seq.call(null,m));
var chunk__32726 = null;
var count__32727 = (0);
var i__32728 = (0);
while(true){
if((i__32728 < count__32727)){
var ms = cljs.core._nth.call(null,chunk__32726,i__32728);
clojure.core.matrix.protocols.assign_BANG_.call(null,ms,x);


var G__32733 = seq__32725;
var G__32734 = chunk__32726;
var G__32735 = count__32727;
var G__32736 = (i__32728 + (1));
seq__32725 = G__32733;
chunk__32726 = G__32734;
count__32727 = G__32735;
i__32728 = G__32736;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__32725);
if(temp__5457__auto__){
var seq__32725__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32725__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__32725__$1);
var G__32737 = cljs.core.chunk_rest.call(null,seq__32725__$1);
var G__32738 = c__4319__auto__;
var G__32739 = cljs.core.count.call(null,c__4319__auto__);
var G__32740 = (0);
seq__32725 = G__32737;
chunk__32726 = G__32738;
count__32727 = G__32739;
i__32728 = G__32740;
continue;
} else {
var ms = cljs.core.first.call(null,seq__32725__$1);
clojure.core.matrix.protocols.assign_BANG_.call(null,ms,x);


var G__32741 = cljs.core.next.call(null,seq__32725__$1);
var G__32742 = null;
var G__32743 = (0);
var G__32744 = (0);
seq__32725 = G__32741;
chunk__32726 = G__32742;
count__32727 = G__32743;
i__32728 = G__32744;
continue;
}
} else {
return null;
}
}
break;
}
}
} else {
throw cljs.core.ex_info.call(null,["Can't assign to a non-array object: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,m))].join(''),cljs.core.PersistentArrayMap.EMPTY);

}
}
}
}));

goog.object.set(clojure.core.matrix.protocols.assign_array_BANG_,"object",(function() {
var G__32745 = null;
var G__32745__2 = (function (m,arr){
var alen = cljs.core.long$.call(null,cljs.core.count.call(null,arr));
if(cljs.core.truth_(clojure.core.matrix.protocols.is_vector_QMARK_.call(null,m))){
var n__4376__auto__ = alen;
var i = (0);
while(true){
if((i < n__4376__auto__)){
clojure.core.matrix.protocols.set_1d_BANG_.call(null,m,i,cljs.core.nth.call(null,arr,i));

var G__32746 = (i + (1));
i = G__32746;
continue;
} else {
return null;
}
break;
}
} else {
return clojure.core.matrix.protocols.assign_array_BANG_.call(null,m,arr,(0),alen);
}
});
var G__32745__4 = (function (m,arr,start,length){
var length__$1 = cljs.core.long$.call(null,length);
var start__$1 = cljs.core.long$.call(null,start);
if(cljs.core.truth_(clojure.core.matrix.protocols.is_vector_QMARK_.call(null,m))){
var n__4376__auto__ = length__$1;
var i = (0);
while(true){
if((i < n__4376__auto__)){
clojure.core.matrix.protocols.set_1d_BANG_.call(null,m,i,cljs.core.nth.call(null,arr,(start__$1 + i)));

var G__32747 = (i + (1));
i = G__32747;
continue;
} else {
return null;
}
break;
}
} else {
var ss = cljs.core.seq.call(null,clojure.core.matrix.protocols.get_major_slice_seq.call(null,m));
var skip = cljs.core.long$.call(null,((ss)?clojure.core.matrix.impl.defaults.calc_element_count.call(null,cljs.core.first.call(null,clojure.core.matrix.protocols.get_major_slice_seq.call(null,m))):(0)));
var vals__21895__auto__ = cljs.core.seq.call(null,ss);
var i = cljs.core.long$.call(null,(0));
while(true){
if(vals__21895__auto__){
var s = cljs.core.first.call(null,vals__21895__auto__);
clojure.core.matrix.protocols.assign_array_BANG_.call(null,s,arr,(start__$1 + (skip * i)),skip);

var G__32748 = cljs.core.next.call(null,vals__21895__auto__);
var G__32749 = (i + (1));
vals__21895__auto__ = G__32748;
i = G__32749;
continue;
} else {
return null;
}
break;
}
}
});
G__32745 = function(m,arr,start,length){
switch(arguments.length){
case 2:
return G__32745__2.call(this,m,arr);
case 4:
return G__32745__4.call(this,m,arr,start,length);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__32745.cljs$core$IFn$_invoke$arity$2 = G__32745__2;
G__32745.cljs$core$IFn$_invoke$arity$4 = G__32745__4;
return G__32745;
})()
);
goog.object.set(clojure.core.matrix.protocols.PImmutableAssignment,"null",true);

goog.object.set(clojure.core.matrix.protocols.assign,"null",(function (m,source){
var r = clojure.core.matrix.protocols.broadcast_coerce.call(null,m,source);
if((r === source)){
return clojure.core.matrix.protocols.clone.call(null,r);
} else {
return r;
}
}));

goog.object.set(clojure.core.matrix.protocols.PImmutableAssignment,"number",true);

goog.object.set(clojure.core.matrix.protocols.assign,"number",(function (m,source){
return source;
}));

goog.object.set(clojure.core.matrix.protocols.PImmutableAssignment,"object",true);

goog.object.set(clojure.core.matrix.protocols.assign,"object",(function (m,source){
var r = clojure.core.matrix.protocols.broadcast_coerce.call(null,m,source);
if((r === source)){
return clojure.core.matrix.protocols.clone.call(null,r);
} else {
return r;
}
}));
goog.object.set(clojure.core.matrix.protocols.PMutableFill,"object",true);

goog.object.set(clojure.core.matrix.protocols.fill_BANG_,"object",(function (m,value){
return clojure.core.matrix.protocols.assign_BANG_.call(null,m,value);
}));
goog.object.set(clojure.core.matrix.protocols.PMatrixCloning,"null",true);

goog.object.set(clojure.core.matrix.protocols.clone,"null",(function (m){
return m;
}));

goog.object.set(clojure.core.matrix.protocols.PMatrixCloning,"number",true);

goog.object.set(clojure.core.matrix.protocols.clone,"number",(function (m){
return m;
}));

goog.object.set(clojure.core.matrix.protocols.PMatrixCloning,"object",true);

goog.object.set(clojure.core.matrix.protocols.clone,"object",(function (m){
return clojure.core.matrix.protocols.construct_matrix.call(null,m,m);
}));
goog.object.set(clojure.core.matrix.protocols.PSparseArray,"object",true);

goog.object.set(clojure.core.matrix.protocols.is_sparse_QMARK_,"object",(function (m){
return false;
}));
goog.object.set(clojure.core.matrix.protocols.PImmutableMatrixConstruction,"null",true);

goog.object.set(clojure.core.matrix.protocols.immutable_matrix,"null",(function (m){
return null;
}));

goog.object.set(clojure.core.matrix.protocols.PImmutableMatrixConstruction,"object",true);

goog.object.set(clojure.core.matrix.protocols.immutable_matrix,"object",(function (m){
if(cljs.core.truth_(clojure.core.matrix.protocols.is_mutable_QMARK_.call(null,m))){
return clojure.core.matrix.protocols.convert_to_nested_vectors.call(null,m);
} else {
return m;
}
}));
goog.object.set(clojure.core.matrix.protocols.PZeroCount,"null",true);

goog.object.set(clojure.core.matrix.protocols.zero_count,"null",(function (m){
return (0);
}));

goog.object.set(clojure.core.matrix.protocols.PZeroCount,"number",true);

goog.object.set(clojure.core.matrix.protocols.zero_count,"number",(function (m){
if((m === (0))){
return (1);
} else {
return (0);
}
}));

goog.object.set(clojure.core.matrix.protocols.PZeroCount,"object",true);

goog.object.set(clojure.core.matrix.protocols.zero_count,"object",(function (m){
return clojure.core.matrix.protocols.element_reduce.call(null,m,(function (acc,e){
if((e === (0))){
return (acc + (1));
} else {
return acc;
}
}),(0));
}));
goog.object.set(clojure.core.matrix.protocols.PMutableMatrixConstruction,"null",true);

goog.object.set(clojure.core.matrix.protocols.mutable_matrix,"null",(function (m){
return clojure.core.matrix.impl.wrappers.wrap_scalar.call(null,m);
}));

goog.object.set(clojure.core.matrix.protocols.PMutableMatrixConstruction,"number",true);

goog.object.set(clojure.core.matrix.protocols.mutable_matrix,"number",(function (m){
return clojure.core.matrix.impl.wrappers.wrap_scalar.call(null,m);
}));

goog.object.set(clojure.core.matrix.protocols.PMutableMatrixConstruction,"object",true);

goog.object.set(clojure.core.matrix.protocols.mutable_matrix,"object",(function (m){
return clojure.core.matrix.impl.defaults.construct_mutable_matrix.call(null,m);
}));
goog.object.set(clojure.core.matrix.protocols.PMutableCoercion,"null",true);

goog.object.set(clojure.core.matrix.protocols.ensure_mutable,"null",(function (m){
return clojure.core.matrix.impl.wrappers.wrap_scalar.call(null,m);
}));

goog.object.set(clojure.core.matrix.protocols.PMutableCoercion,"number",true);

goog.object.set(clojure.core.matrix.protocols.ensure_mutable,"number",(function (m){
return clojure.core.matrix.impl.wrappers.wrap_scalar.call(null,m);
}));

goog.object.set(clojure.core.matrix.protocols.PMutableCoercion,"object",true);

goog.object.set(clojure.core.matrix.protocols.ensure_mutable,"object",(function (m){
if(cljs.core.truth_(clojure.core.matrix.protocols.is_mutable_QMARK_.call(null,m))){
return m;
} else {
return clojure.core.matrix.impl.defaults.construct_mutable_matrix.call(null,m);
}
}));
goog.object.set(clojure.core.matrix.protocols.PComputeMatrix,"object",true);

goog.object.set(clojure.core.matrix.protocols.compute_matrix,"object",(function (m,shape,f){
var m__$1 = clojure.core.matrix.protocols.new_matrix_nd.call(null,m,shape);
return cljs.core.reduce.call(null,((function (m__$1){
return (function (m__$2,ix){
return clojure.core.matrix.protocols.set_nd.call(null,m__$2,ix,cljs.core.apply.call(null,f,ix));
});})(m__$1))
,m__$1,clojure.core.matrix.utils.base_index_seq_for_shape.call(null,shape));
}));
goog.object.set(clojure.core.matrix.protocols.PDimensionInfo,"null",true);

goog.object.set(clojure.core.matrix.protocols.dimensionality,"null",(function (m){
return (0);
}));

goog.object.set(clojure.core.matrix.protocols.is_scalar_QMARK_,"null",(function (m){
return true;
}));

goog.object.set(clojure.core.matrix.protocols.is_vector_QMARK_,"null",(function (m){
return false;
}));

goog.object.set(clojure.core.matrix.protocols.get_shape,"null",(function (m){
return null;
}));

goog.object.set(clojure.core.matrix.protocols.dimension_count,"null",(function (m,i){
throw cljs.core.ex_info.call(null,["nil has zero dimensionality, cannot get count for dimension: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

cljs.core.Cons.prototype.clojure$core$matrix$protocols$PDimensionInfo$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Cons.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimensionality$arity$1 = (function (m){
var m__$1 = this;
return (clojure.core.matrix.protocols.dimensionality.call(null,cljs.core.first.call(null,m__$1)) + (1));
});

cljs.core.Cons.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_vector_QMARK_$arity$1 = (function (m){
var m__$1 = this;
return ((0) === clojure.core.matrix.protocols.dimensionality.call(null,cljs.core.first.call(null,m__$1)));
});

cljs.core.Cons.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_scalar_QMARK_$arity$1 = (function (m){
var m__$1 = this;
return false;
});

cljs.core.Cons.prototype.clojure$core$matrix$protocols$PDimensionInfo$get_shape$arity$1 = (function (m){
var m__$1 = this;
return cljs.core.cons.call(null,cljs.core.count.call(null,m__$1),clojure.core.matrix.protocols.get_shape.call(null,cljs.core.first.call(null,m__$1)));
});

cljs.core.Cons.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimension_count$arity$2 = (function (m,x){
var m__$1 = this;
if((x === (0))){
return cljs.core.count.call(null,m__$1);
} else {
return clojure.core.matrix.protocols.dimension_count.call(null,cljs.core.first.call(null,m__$1),(x - (1)));
}
});

goog.object.set(clojure.core.matrix.protocols.PDimensionInfo,"object",true);

goog.object.set(clojure.core.matrix.protocols.dimensionality,"object",(function (m){
if(cljs.core._EQ_.call(null,Array,cljs.core.type.call(null,m))){
var n = cljs.core.long$.call(null,cljs.core.count.call(null,m));
if((n > (0))){
return (cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,cljs.core.nth.call(null,m,(0)))) + (1));
} else {
return (1);
}
} else {
return (0);

}
}));

goog.object.set(clojure.core.matrix.protocols.is_vector_QMARK_,"object",(function (m){
if(cljs.core._EQ_.call(null,Array,cljs.core.type.call(null,m))){
var n = cljs.core.long$.call(null,cljs.core.count.call(null,m));
return (((n === (0))) || (((0) === cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,cljs.core.nth.call(null,m,(0)))))));
} else {
return false;

}
}));

goog.object.set(clojure.core.matrix.protocols.is_scalar_QMARK_,"object",(function (m){
if(cljs.core._EQ_.call(null,Array,cljs.core.type.call(null,m))){
return false;
} else {
return true;

}
}));

goog.object.set(clojure.core.matrix.protocols.get_shape,"object",(function (m){
if(cljs.core._EQ_.call(null,Array,cljs.core.type.call(null,m))){
var n = cljs.core.count.call(null,m);
if((n === (0))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null);
} else {
return cljs.core.cons.call(null,n,clojure.core.matrix.protocols.get_shape.call(null,cljs.core.nth.call(null,m,(0))));
}
} else {
return null;

}
}));

goog.object.set(clojure.core.matrix.protocols.dimension_count,"object",(function (m,i){
var i__$1 = cljs.core.long$.call(null,i);
if(cljs.core._EQ_.call(null,Array,cljs.core.type.call(null,m))){
if((i__$1 === (0))){
return cljs.core.count.call(null,m);
} else {
return clojure.core.matrix.protocols.dimension_count.call(null,cljs.core.nth.call(null,m,(0)),(i__$1 - (1)));
}
} else {
if(((0) === i__$1)){
return cljs.core.count.call(null,m);
} else {
throw cljs.core.ex_info.call(null,["Can't determine count of dimension ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i__$1)," on Object: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,m))].join(''),cljs.core.PersistentArrayMap.EMPTY);

}
}
}));

cljs.core.IndexedSeq.prototype.clojure$core$matrix$protocols$PDimensionInfo$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.IndexedSeq.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimensionality$arity$1 = (function (m){
var m__$1 = this;
return (clojure.core.matrix.protocols.dimensionality.call(null,cljs.core.first.call(null,m__$1)) + (1));
});

cljs.core.IndexedSeq.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_vector_QMARK_$arity$1 = (function (m){
var m__$1 = this;
return ((0) === clojure.core.matrix.protocols.dimensionality.call(null,cljs.core.first.call(null,m__$1)));
});

cljs.core.IndexedSeq.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_scalar_QMARK_$arity$1 = (function (m){
var m__$1 = this;
return false;
});

cljs.core.IndexedSeq.prototype.clojure$core$matrix$protocols$PDimensionInfo$get_shape$arity$1 = (function (m){
var m__$1 = this;
return cljs.core.cons.call(null,cljs.core.count.call(null,m__$1),clojure.core.matrix.protocols.get_shape.call(null,cljs.core.first.call(null,m__$1)));
});

cljs.core.IndexedSeq.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimension_count$arity$2 = (function (m,x){
var m__$1 = this;
if((x === (0))){
return cljs.core.count.call(null,m__$1);
} else {
return clojure.core.matrix.protocols.dimension_count.call(null,cljs.core.first.call(null,m__$1),(x - (1)));
}
});

cljs.core.LazySeq.prototype.clojure$core$matrix$protocols$PDimensionInfo$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimensionality$arity$1 = (function (m){
var m__$1 = this;
return (clojure.core.matrix.protocols.dimensionality.call(null,cljs.core.first.call(null,m__$1)) + (1));
});

cljs.core.LazySeq.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_vector_QMARK_$arity$1 = (function (m){
var m__$1 = this;
return ((0) === clojure.core.matrix.protocols.dimensionality.call(null,cljs.core.first.call(null,m__$1)));
});

cljs.core.LazySeq.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_scalar_QMARK_$arity$1 = (function (m){
var m__$1 = this;
return false;
});

cljs.core.LazySeq.prototype.clojure$core$matrix$protocols$PDimensionInfo$get_shape$arity$1 = (function (m){
var m__$1 = this;
return cljs.core.cons.call(null,cljs.core.count.call(null,m__$1),clojure.core.matrix.protocols.get_shape.call(null,cljs.core.first.call(null,m__$1)));
});

cljs.core.LazySeq.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimension_count$arity$2 = (function (m,x){
var m__$1 = this;
if((x === (0))){
return cljs.core.count.call(null,m__$1);
} else {
return clojure.core.matrix.protocols.dimension_count.call(null,cljs.core.first.call(null,m__$1),(x - (1)));
}
});

goog.object.set(clojure.core.matrix.protocols.PDimensionInfo,"number",true);

goog.object.set(clojure.core.matrix.protocols.dimensionality,"number",(function (m){
return (0);
}));

goog.object.set(clojure.core.matrix.protocols.is_scalar_QMARK_,"number",(function (m){
return true;
}));

goog.object.set(clojure.core.matrix.protocols.is_vector_QMARK_,"number",(function (m){
return false;
}));

goog.object.set(clojure.core.matrix.protocols.get_shape,"number",(function (m){
return null;
}));

goog.object.set(clojure.core.matrix.protocols.dimension_count,"number",(function (m,i){
throw cljs.core.ex_info.call(null,["Number has zero dimensionality, cannot get count for dimension: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

cljs.core.List.prototype.clojure$core$matrix$protocols$PDimensionInfo$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.List.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimensionality$arity$1 = (function (m){
var m__$1 = this;
return (clojure.core.matrix.protocols.dimensionality.call(null,cljs.core.first.call(null,m__$1)) + (1));
});

cljs.core.List.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_vector_QMARK_$arity$1 = (function (m){
var m__$1 = this;
return ((0) === clojure.core.matrix.protocols.dimensionality.call(null,cljs.core.first.call(null,m__$1)));
});

cljs.core.List.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_scalar_QMARK_$arity$1 = (function (m){
var m__$1 = this;
return false;
});

cljs.core.List.prototype.clojure$core$matrix$protocols$PDimensionInfo$get_shape$arity$1 = (function (m){
var m__$1 = this;
return cljs.core.cons.call(null,cljs.core.count.call(null,m__$1),clojure.core.matrix.protocols.get_shape.call(null,cljs.core.first.call(null,m__$1)));
});

cljs.core.List.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimension_count$arity$2 = (function (m,x){
var m__$1 = this;
if((x === (0))){
return cljs.core.count.call(null,m__$1);
} else {
return clojure.core.matrix.protocols.dimension_count.call(null,cljs.core.first.call(null,m__$1),(x - (1)));
}
});

goog.object.set(clojure.core.matrix.protocols.PDimensionInfo,"string",true);

goog.object.set(clojure.core.matrix.protocols.dimensionality,"string",(function (m){
return (0);
}));

goog.object.set(clojure.core.matrix.protocols.is_scalar_QMARK_,"string",(function (m){
return true;
}));

goog.object.set(clojure.core.matrix.protocols.is_vector_QMARK_,"string",(function (m){
return false;
}));

goog.object.set(clojure.core.matrix.protocols.get_shape,"string",(function (m){
return null;
}));

goog.object.set(clojure.core.matrix.protocols.dimension_count,"string",(function (m,i){
throw cljs.core.ex_info.call(null,["String has zero dimensionality, cannot get count for dimension: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

cljs.core.Range.prototype.clojure$core$matrix$protocols$PDimensionInfo$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Range.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimensionality$arity$1 = (function (m){
var m__$1 = this;
return (clojure.core.matrix.protocols.dimensionality.call(null,cljs.core.first.call(null,m__$1)) + (1));
});

cljs.core.Range.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_vector_QMARK_$arity$1 = (function (m){
var m__$1 = this;
return ((0) === clojure.core.matrix.protocols.dimensionality.call(null,cljs.core.first.call(null,m__$1)));
});

cljs.core.Range.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_scalar_QMARK_$arity$1 = (function (m){
var m__$1 = this;
return false;
});

cljs.core.Range.prototype.clojure$core$matrix$protocols$PDimensionInfo$get_shape$arity$1 = (function (m){
var m__$1 = this;
return cljs.core.cons.call(null,cljs.core.count.call(null,m__$1),clojure.core.matrix.protocols.get_shape.call(null,cljs.core.first.call(null,m__$1)));
});

cljs.core.Range.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimension_count$arity$2 = (function (m,x){
var m__$1 = this;
if((x === (0))){
return cljs.core.count.call(null,m__$1);
} else {
return clojure.core.matrix.protocols.dimension_count.call(null,cljs.core.first.call(null,m__$1),(x - (1)));
}
});

cljs.core.Keyword.prototype.clojure$core$matrix$protocols$PDimensionInfo$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimensionality$arity$1 = (function (m){
var m__$1 = this;
return (0);
});

cljs.core.Keyword.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_scalar_QMARK_$arity$1 = (function (m){
var m__$1 = this;
return true;
});

cljs.core.Keyword.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_vector_QMARK_$arity$1 = (function (m){
var m__$1 = this;
return false;
});

cljs.core.Keyword.prototype.clojure$core$matrix$protocols$PDimensionInfo$get_shape$arity$1 = (function (m){
var m__$1 = this;
return null;
});

cljs.core.Keyword.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimension_count$arity$2 = (function (m,i){
var m__$1 = this;
throw cljs.core.ex_info.call(null,["Keyword has zero dimensionality, cannot get count for dimension: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),cljs.core.PersistentArrayMap.EMPTY);
});
goog.object.set(clojure.core.matrix.protocols.PSameShape,"null",true);

goog.object.set(clojure.core.matrix.protocols.same_shape_QMARK_,"null",(function (a,b){
return ((0) === cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,b)));
}));

goog.object.set(clojure.core.matrix.protocols.PSameShape,"string",true);

goog.object.set(clojure.core.matrix.protocols.same_shape_QMARK_,"string",(function (a,b){
return ((0) === cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,b)));
}));

goog.object.set(clojure.core.matrix.protocols.PSameShape,"number",true);

goog.object.set(clojure.core.matrix.protocols.same_shape_QMARK_,"number",(function (a,b){
return ((0) === cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,b)));
}));

goog.object.set(clojure.core.matrix.protocols.PSameShape,"object",true);

goog.object.set(clojure.core.matrix.protocols.same_shape_QMARK_,"object",(function (a,b){
return clojure.core.matrix.utils.same_shape_object_QMARK_.call(null,clojure.core.matrix.protocols.get_shape.call(null,a),clojure.core.matrix.protocols.get_shape.call(null,b));
}));
goog.object.set(clojure.core.matrix.protocols.PMatrixOps,"null",true);

goog.object.set(clojure.core.matrix.protocols.trace,"null",(function (m){
return m;
}));

goog.object.set(clojure.core.matrix.protocols.PMatrixOps,"number",true);

goog.object.set(clojure.core.matrix.protocols.trace,"number",(function (m){
return m;
}));

goog.object.set(clojure.core.matrix.protocols.inverse,"number",(function (m){
return ((1) / m);
}));

goog.object.set(clojure.core.matrix.protocols.PMatrixOps,"object",true);

goog.object.set(clojure.core.matrix.protocols.trace,"object",(function (m){
if(((2) === cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m)))){
} else {
throw cljs.core.ex_info.call(null,["Trace requires a 2D matrix"].join(''),cljs.core.PersistentArrayMap.EMPTY);
}

var rc = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimension_count.call(null,m,(0)));
var cc = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimension_count.call(null,m,(1)));
var dims = Math.min(rc,cc);
var i = (0);
var res = 0.0;
while(true){
if((i >= dims)){
return res;
} else {
var G__32750 = (i + (1));
var G__32751 = (res + clojure.core.matrix.protocols.get_2d.call(null,m,i,i));
i = G__32750;
res = G__32751;
continue;
}
break;
}
}));

goog.object.set(clojure.core.matrix.protocols.determinant,"object",(function (m){
var imp = (function (){var or__3922__auto__ = clojure.core.matrix.implementations.get_canonical_object.call(null,new cljs.core.Keyword(null,"vectorz","vectorz",1550942815));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
throw cljs.core.ex_info.call(null,["(let Need to load an implementation which supports determinant, e.g. vectorz-clj"].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
})();
var m__$1 = clojure.core.matrix.protocols.coerce_param.call(null,imp,m);
return clojure.core.matrix.protocols.determinant.call(null,m__$1);
}));

goog.object.set(clojure.core.matrix.protocols.inverse,"object",(function (m){
var imp = (function (){var or__3922__auto__ = clojure.core.matrix.implementations.get_canonical_object.call(null,new cljs.core.Keyword(null,"vectorz","vectorz",1550942815));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
throw cljs.core.ex_info.call(null,["Need to load an implementation which supports inverse, e.g. vectorz-clj"].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
})();
var mm = clojure.core.matrix.protocols.coerce_param.call(null,imp,m);
return clojure.core.matrix.protocols.coerce_param.call(null,m,clojure.core.matrix.protocols.inverse.call(null,mm));
}));
goog.object.set(clojure.core.matrix.protocols.PTranspose,"null",true);

goog.object.set(clojure.core.matrix.protocols.transpose,"null",(function (m){
return m;
}));

goog.object.set(clojure.core.matrix.protocols.PTranspose,"number",true);

goog.object.set(clojure.core.matrix.protocols.transpose,"number",(function (m){
return m;
}));

goog.object.set(clojure.core.matrix.protocols.PTranspose,"object",true);

goog.object.set(clojure.core.matrix.protocols.transpose,"object",(function (m){
return clojure.core.matrix.protocols.coerce_param.call(null,m,(function (){var dims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m));
var G__32752 = dims;
switch (G__32752) {
case (0):
return m;

break;
case (1):
return m;

break;
case (2):
return cljs.core.apply.call(null,cljs.core.mapv,cljs.core.vector,clojure.core.matrix.protocols.convert_to_nested_vectors.call(null,m));

break;
default:
return clojure.core.matrix.protocols.transpose_dims.call(null,m,cljs.core.reverse.call(null,cljs.core.range.call(null,dims)));

}
})());
}));
goog.object.set(clojure.core.matrix.protocols.PTransposeDims,"null",true);

goog.object.set(clojure.core.matrix.protocols.transpose_dims,"null",(function (m,ordering){
return m;
}));

goog.object.set(clojure.core.matrix.protocols.PTransposeDims,"number",true);

goog.object.set(clojure.core.matrix.protocols.transpose_dims,"number",(function (m,ordering){
return m;
}));

goog.object.set(clojure.core.matrix.protocols.PTransposeDims,"object",true);

goog.object.set(clojure.core.matrix.protocols.transpose_dims,"object",(function (m,ordering){
return clojure.core.matrix.protocols.transpose_dims.call(null,clojure.core.matrix.protocols.convert_to_nested_vectors.call(null,m),ordering);
}));
goog.object.set(clojure.core.matrix.protocols.PTransposeInPlace,"object",true);

goog.object.set(clojure.core.matrix.protocols.transpose_BANG_,"object",(function (m){
var n_32754 = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimension_count.call(null,m,(0)));
if(cljs.core.not_EQ_.call(null,n_32754,cljs.core.long$.call(null,clojure.core.matrix.protocols.dimension_count.call(null,m,(1))))){
throw cljs.core.ex_info.call(null,["transpose! requires a quare matrix"].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

var n__4376__auto___32755 = n_32754;
var i_32756 = (0);
while(true){
if((i_32756 < n__4376__auto___32755)){
var n__4376__auto___32757__$1 = i_32756;
var j_32758 = (0);
while(true){
if((j_32758 < n__4376__auto___32757__$1)){
var t_32759 = clojure.core.matrix.protocols.get_2d.call(null,m,i_32756,j_32758);
clojure.core.matrix.protocols.set_2d_BANG_.call(null,m,i_32756,j_32758,clojure.core.matrix.protocols.get_2d.call(null,m,j_32758,i_32756));

clojure.core.matrix.protocols.set_2d_BANG_.call(null,m,j_32758,i_32756,t_32759);

var G__32760 = (j_32758 + (1));
j_32758 = G__32760;
continue;
} else {
}
break;
}

var G__32761 = (i_32756 + (1));
i_32756 = G__32761;
continue;
} else {
}
break;
}

return m;
}));
goog.object.set(clojure.core.matrix.protocols.PRotate,"null",true);

goog.object.set(clojure.core.matrix.protocols.rotate,"null",(function (m,dim,places){
return null;
}));

goog.object.set(clojure.core.matrix.protocols.PRotate,"number",true);

goog.object.set(clojure.core.matrix.protocols.rotate,"number",(function (m,dim,places){
return m;
}));

goog.object.set(clojure.core.matrix.protocols.PRotate,"object",true);

goog.object.set(clojure.core.matrix.protocols.rotate,"object",(function (m,dim,places){
var dim__$1 = cljs.core.long$.call(null,dim);
var places__$1 = cljs.core.long$.call(null,places);
if((cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m)) <= (0))){
return m;
} else {
if(((0) === dim__$1)){
var ss = clojure.core.matrix.protocols.get_major_slice_seq.call(null,m);
var c = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimension_count.call(null,m,(0)));
var sh = cljs.core.long$.call(null,(((c > (0)))?cljs.core.long$.call(null,cljs.core.mod.call(null,places__$1,c)):(0)));
if((sh === (0))){
return m;
} else {
return cljs.core.vec.call(null,cljs.core.concat.call(null,cljs.core.take_last.call(null,(c - sh),ss),cljs.core.take.call(null,sh,ss)));
}
} else {
return clojure.core.matrix.protocols.rotate.call(null,clojure.core.matrix.protocols.convert_to_nested_vectors.call(null,m),dim__$1,places__$1);

}
}
}));
goog.object.set(clojure.core.matrix.protocols.PRotateAll,"null",true);

goog.object.set(clojure.core.matrix.protocols.rotate_all,"null",(function (m,shifts){
return null;
}));

goog.object.set(clojure.core.matrix.protocols.PRotateAll,"number",true);

goog.object.set(clojure.core.matrix.protocols.rotate_all,"number",(function (m,shifts){
return m;
}));

goog.object.set(clojure.core.matrix.protocols.PRotateAll,"object",true);

goog.object.set(clojure.core.matrix.protocols.rotate_all,"object",(function (m,shifts){
return cljs.core.reduce.call(null,(function (m__$1,p__32762){
var vec__32763 = p__32762;
var dim = cljs.core.nth.call(null,vec__32763,(0),null);
var shift = cljs.core.nth.call(null,vec__32763,(1),null);
if((shift === (0))){
return m__$1;
} else {
return clojure.core.matrix.protocols.rotate.call(null,m__$1,dim,shift);
}
}),m,cljs.core.map_indexed.call(null,(function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
}),shifts));
}));
goog.object.set(clojure.core.matrix.protocols.PShift,"object",true);

goog.object.set(clojure.core.matrix.protocols.shift,"object",(function (m,dim,shift){
var shift__$1 = cljs.core.long$.call(null,shift);
var z = clojure.core.matrix.protocols.generic_zero.call(null,m);
var c = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimension_count.call(null,m,dim));
var sh = cljs.core.vec.call(null,clojure.core.matrix.protocols.get_shape.call(null,m));
if((shift__$1 === (0))){
return m;
} else {
if((shift__$1 >= c)){
return clojure.core.matrix.protocols.broadcast_coerce.call(null,m,z);
} else {
if((shift__$1 <= (- c))){
return clojure.core.matrix.protocols.broadcast_coerce.call(null,m,z);
} else {
if((shift__$1 < (0))){
return clojure.core.matrix.protocols.join_along.call(null,clojure.core.matrix.protocols.broadcast.call(null,clojure.core.matrix.protocols.construct_matrix.call(null,m,z),cljs.core.assoc.call(null,sh,dim,(- shift__$1))),clojure.core.matrix.protocols.submatrix.call(null,m,cljs.core.map.call(null,cljs.core.vector,cljs.core.vec.call(null,cljs.core.repeat.call(null,cljs.core.count.call(null,sh),(0))),cljs.core.assoc.call(null,sh,dim,(c + shift__$1)))),dim);
} else {
if((shift__$1 > (0))){
return clojure.core.matrix.protocols.join_along.call(null,clojure.core.matrix.protocols.submatrix.call(null,m,cljs.core.map.call(null,cljs.core.vector,cljs.core.assoc.call(null,cljs.core.vec.call(null,cljs.core.repeat.call(null,cljs.core.count.call(null,sh),(0))),dim,shift__$1),cljs.core.assoc.call(null,sh,dim,(c - shift__$1)))),clojure.core.matrix.protocols.broadcast.call(null,clojure.core.matrix.protocols.construct_matrix.call(null,m,z),cljs.core.assoc.call(null,sh,dim,shift__$1)),dim);
} else {
throw cljs.core.ex_info.call(null,["Shouldn't be possible!!"].join(''),cljs.core.PersistentArrayMap.EMPTY);

}
}
}
}
}
}));

goog.object.set(clojure.core.matrix.protocols.shift_all,"object",(function (m,shifts){
return cljs.core.reduce.call(null,(function (m__$1,p__32766){
var vec__32767 = p__32766;
var dim = cljs.core.nth.call(null,vec__32767,(0),null);
var shift = cljs.core.nth.call(null,vec__32767,(1),null);
if((shift === (0))){
return m__$1;
} else {
return clojure.core.matrix.protocols.shift.call(null,m__$1,dim,shift);
}
}),m,cljs.core.map_indexed.call(null,(function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
}),shifts));
}));
goog.object.set(clojure.core.matrix.protocols.POrder,"null",true);

goog.object.set(clojure.core.matrix.protocols.order,"null",(function() {
var G__32773 = null;
var G__32773__2 = (function (m,indices){
throw cljs.core.ex_info.call(null,["Can't reorder a scalar nil"].join(''),cljs.core.PersistentArrayMap.EMPTY);
});
var G__32773__3 = (function (m,dim,indices){
throw cljs.core.ex_info.call(null,["Can't reorder a scalar nil"].join(''),cljs.core.PersistentArrayMap.EMPTY);
});
G__32773 = function(m,dim,indices){
switch(arguments.length){
case 2:
return G__32773__2.call(this,m,dim);
case 3:
return G__32773__3.call(this,m,dim,indices);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__32773.cljs$core$IFn$_invoke$arity$2 = G__32773__2;
G__32773.cljs$core$IFn$_invoke$arity$3 = G__32773__3;
return G__32773;
})()
);

goog.object.set(clojure.core.matrix.protocols.POrder,"number",true);

goog.object.set(clojure.core.matrix.protocols.order,"number",(function() {
var G__32774 = null;
var G__32774__2 = (function (m,indices){
throw cljs.core.ex_info.call(null,["Can't reorder a scalar number"].join(''),cljs.core.PersistentArrayMap.EMPTY);
});
var G__32774__3 = (function (m,dim,indices){
throw cljs.core.ex_info.call(null,["Can't reorder a scalar number"].join(''),cljs.core.PersistentArrayMap.EMPTY);
});
G__32774 = function(m,dim,indices){
switch(arguments.length){
case 2:
return G__32774__2.call(this,m,dim);
case 3:
return G__32774__3.call(this,m,dim,indices);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__32774.cljs$core$IFn$_invoke$arity$2 = G__32774__2;
G__32774.cljs$core$IFn$_invoke$arity$3 = G__32774__3;
return G__32774;
})()
);

goog.object.set(clojure.core.matrix.protocols.POrder,"object",true);

goog.object.set(clojure.core.matrix.protocols.order,"object",(function() {
var G__32775 = null;
var G__32775__2 = (function (m,indices){
var mshape = cljs.core.vec.call(null,clojure.core.matrix.protocols.get_shape.call(null,m));
var subshape = cljs.core.assoc.call(null,m,(0),(1));
var ss = cljs.core.map.call(null,((function (mshape,subshape){
return (function (p1__32770_SHARP_){
return clojure.core.matrix.protocols.broadcast.call(null,clojure.core.matrix.protocols.get_major_slice.call(null,m,p1__32770_SHARP_),subshape);
});})(mshape,subshape))
,indices);
return cljs.core.reduce.call(null,((function (mshape,subshape,ss){
return (function (p1__32771_SHARP_,p2__32772_SHARP_){
return clojure.core.matrix.protocols.join.call(null,p1__32771_SHARP_,p2__32772_SHARP_);
});})(mshape,subshape,ss))
,ss);
});
var G__32775__3 = (function (m,dim,indices){
return clojure.core.matrix.protocols.order.call(null,clojure.core.matrix.protocols.convert_to_nested_vectors.call(null,m),dim,indices);
});
G__32775 = function(m,dim,indices){
switch(arguments.length){
case 2:
return G__32775__2.call(this,m,dim);
case 3:
return G__32775__3.call(this,m,dim,indices);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__32775.cljs$core$IFn$_invoke$arity$2 = G__32775__2;
G__32775.cljs$core$IFn$_invoke$arity$3 = G__32775__3;
return G__32775;
})()
);
/**
 * Outputs a vector containing the rank of array elements, given a sorted sequence of [index value] pairs and a length
 */
clojure.core.matrix.impl.defaults.output_rank = (function clojure$core$matrix$impl$defaults$output_rank(pairs,n){
var dest = cljs.core.object_array.call(null,n);
var i_32776 = cljs.core.long$.call(null,(0));
var pairs_32777__$1 = cljs.core.seq.call(null,pairs);
while(true){
if((i_32776 < n)){
(dest[cljs.core.first.call(null,cljs.core.first.call(null,pairs_32777__$1))] = Long.valueOf(i_32776));

var G__32778 = (i_32776 + (1));
var G__32779 = cljs.core.next.call(null,pairs_32777__$1);
i_32776 = G__32778;
pairs_32777__$1 = G__32779;
continue;
} else {
}
break;
}

return cljs.core.vec.call(null,dest);
});
goog.object.set(clojure.core.matrix.protocols.PIndexRank,"object",true);

goog.object.set(clojure.core.matrix.protocols.index_rank,"object",(function() {
var G__32783 = null;
var G__32783__1 = (function (m){
var dims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m));
var G__32781 = dims;
switch (G__32781) {
case (0):
throw cljs.core.ex_info.call(null,["Can't get indexed rank of a scalar value"].join(''),cljs.core.PersistentArrayMap.EMPTY);

break;
case (1):
var n = cljs.core.long$.call(null,clojure.core.matrix.protocols.element_count.call(null,m));
return clojure.core.matrix.impl.defaults.output_rank.call(null,cljs.core.sort_by.call(null,cljs.core.second,cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null,clojure.core.matrix.protocols.element_count.call(null,m)),clojure.core.matrix.protocols.element_seq.call(null,m))),n);

break;
default:
return cljs.core.mapv.call(null,clojure.core.matrix.protocols.index_rank,clojure.core.matrix.protocols.get_major_slice_seq.call(null,m));

}
});
var G__32783__2 = (function (m,comp){
var dims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m));
var G__32782 = dims;
switch (G__32782) {
case (0):
throw cljs.core.ex_info.call(null,["Can't get indexed rank of a scalar value"].join(''),cljs.core.PersistentArrayMap.EMPTY);

break;
case (1):
var n = cljs.core.long$.call(null,clojure.core.matrix.protocols.element_count.call(null,m));
return clojure.core.matrix.impl.defaults.output_rank.call(null,cljs.core.sort_by.call(null,cljs.core.second,comp,cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null,clojure.core.matrix.protocols.element_count.call(null,m)),clojure.core.matrix.protocols.element_seq.call(null,m))),n);

break;
default:
return cljs.core.mapv.call(null,((function (G__32782,dims){
return (function (p1__32780_SHARP_){
return clojure.core.matrix.protocols.index_rank.call(null,p1__32780_SHARP_,comp);
});})(G__32782,dims))
,clojure.core.matrix.protocols.get_major_slice_seq.call(null,m));

}
});
G__32783 = function(m,comp){
switch(arguments.length){
case 1:
return G__32783__1.call(this,m);
case 2:
return G__32783__2.call(this,m,comp);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__32783.cljs$core$IFn$_invoke$arity$1 = G__32783__1;
G__32783.cljs$core$IFn$_invoke$arity$2 = G__32783__2;
return G__32783;
})()
);
goog.object.set(clojure.core.matrix.protocols.PMatrixProducts,"number",true);

goog.object.set(clojure.core.matrix.protocols.inner_product,"number",(function (m,a){
if(typeof a === 'number'){
return (m * a);
} else {
return clojure.core.matrix.protocols.pre_scale.call(null,a,m);
}
}));

goog.object.set(clojure.core.matrix.protocols.outer_product,"number",(function (m,a){
if(typeof a === 'number'){
return (m * a);
} else {
return clojure.core.matrix.protocols.pre_scale.call(null,a,m);
}
}));

goog.object.set(clojure.core.matrix.protocols.PMatrixProducts,"object",true);

goog.object.set(clojure.core.matrix.protocols.inner_product,"object",(function (m,a){
if(cljs.core.truth_(clojure.core.matrix.protocols.is_scalar_QMARK_.call(null,m))){
return clojure.core.matrix.protocols.pre_scale.call(null,a,m);
} else {
if(cljs.core.truth_(clojure.core.matrix.protocols.is_scalar_QMARK_.call(null,a))){
return clojure.core.matrix.protocols.scale.call(null,m,a);
} else {
if(((1) === cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m)))){
if(((1) === cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,a)))){
return clojure.core.matrix.protocols.element_sum.call(null,clojure.core.matrix.protocols.element_multiply.call(null,m,a));
} else {
return cljs.core.reduce.call(null,clojure.core.matrix.protocols.matrix_add,cljs.core.map.call(null,(function (sl,x){
return clojure.core.matrix.protocols.scale.call(null,sl,x);
}),clojure.core.matrix.protocols.get_major_slice_seq.call(null,a),clojure.core.matrix.protocols.get_major_slice_seq.call(null,m)));
}
} else {
return clojure.core.matrix.protocols.construct_matrix.call(null,clojure.core.matrix.implementations.get_canonical_object.call(null),cljs.core.map.call(null,(function (p1__32786_SHARP_){
return clojure.core.matrix.protocols.inner_product.call(null,p1__32786_SHARP_,a);
}),clojure.core.matrix.protocols.get_major_slice_seq.call(null,m)));

}
}
}
}));

goog.object.set(clojure.core.matrix.protocols.outer_product,"object",(function (m,a){
if(cljs.core.truth_(clojure.core.matrix.protocols.is_scalar_QMARK_.call(null,m))){
return clojure.core.matrix.protocols.pre_scale.call(null,a,m);
} else {
return clojure.core.matrix.protocols.element_map.call(null,clojure.core.matrix.protocols.convert_to_nested_vectors.call(null,m),(function (x){
return clojure.core.matrix.protocols.pre_scale.call(null,a,x);
}));

}
}));
goog.object.set(clojure.core.matrix.protocols.PMatrixMultiply,"number",true);

goog.object.set(clojure.core.matrix.protocols.element_multiply,"number",(function (m,a){
if(typeof a === 'number'){
return (m * a);
} else {
return clojure.core.matrix.protocols.pre_scale.call(null,a,m);
}
}));

goog.object.set(clojure.core.matrix.protocols.matrix_multiply,"number",(function (m,a){
if(typeof a === 'number'){
return (m * a);
} else {
if(cljs.core.not.call(null,clojure.core.matrix.protocols.is_scalar_QMARK_.call(null,a))){
return clojure.core.matrix.protocols.pre_scale.call(null,a,m);
} else {
throw cljs.core.ex_info.call(null,["Don't know how to multiply number with: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,a))].join(''),cljs.core.PersistentArrayMap.EMPTY);

}
}
}));

goog.object.set(clojure.core.matrix.protocols.PMatrixMultiply,"object",true);

goog.object.set(clojure.core.matrix.protocols.matrix_multiply,"object",(function (m,a){
var mdims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m));
var adims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,a));
if((adims === (0))){
return clojure.core.matrix.protocols.scale.call(null,m,a);
} else {
if((((mdims === (1))) && ((adims === (1))))){
return clojure.core.matrix.protocols.vector_dot.call(null,m,a);
} else {
if((((mdims === (1))) && ((adims === (2))))){
var vec__32787 = clojure.core.matrix.protocols.get_shape.call(null,a);
var arows = cljs.core.nth.call(null,vec__32787,(0),null);
var acols = cljs.core.nth.call(null,vec__32787,(1),null);
return clojure.core.matrix.protocols.reshape.call(null,clojure.core.matrix.protocols.matrix_multiply.call(null,clojure.core.matrix.protocols.reshape.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),arows], null)),a),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [acols], null));
} else {
if((((mdims === (2))) && ((adims === (1))))){
var mshape = clojure.core.matrix.protocols.get_shape.call(null,m);
var vec__32790 = mshape;
var mrows = cljs.core.nth.call(null,vec__32790,(0),null);
var mcols = cljs.core.nth.call(null,vec__32790,(1),null);
var acount = clojure.core.matrix.protocols.element_count.call(null,a);
if(cljs.core.not_EQ_.call(null,mcols,acount)){
throw cljs.core.ex_info.call(null,["Can't multiply matrix of shape: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mshape)," with a vector of length ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(acount)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

return clojure.core.matrix.protocols.reshape.call(null,clojure.core.matrix.protocols.matrix_multiply.call(null,m,clojure.core.matrix.protocols.reshape.call(null,a,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mcols,(1)], null))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mrows], null));
} else {
if((((mdims === (2))) && ((adims === (2))))){
var mutable = clojure.core.matrix.protocols.is_mutable_QMARK_.call(null,m);
var vec__32793 = clojure.core.matrix.protocols.get_shape.call(null,m);
var mrows = cljs.core.nth.call(null,vec__32793,(0),null);
var mcols = cljs.core.nth.call(null,vec__32793,(1),null);
var vec__32796 = clojure.core.matrix.protocols.get_shape.call(null,a);
var arows = cljs.core.nth.call(null,vec__32796,(0),null);
var acols = cljs.core.nth.call(null,vec__32796,(1),null);
var new_m_type = (cljs.core.truth_(mutable)?m:clojure.core.matrix.implementations.get_canonical_object.call(null,new cljs.core.Keyword(null,"ndarray","ndarray",1659822393)));
var new_m = clojure.core.matrix.protocols.new_matrix.call(null,new_m_type,mrows,acols);
var i_32802 = cljs.core.long$.call(null,(0));
while(true){
if((i_32802 < mrows)){
var j_32803 = cljs.core.long$.call(null,(0));
while(true){
if((j_32803 < acols)){
clojure.core.matrix.protocols.set_2d_BANG_.call(null,new_m,i_32802,j_32803,(0));

var G__32804 = (j_32803 + (1));
j_32803 = G__32804;
continue;
} else {
}
break;
}

var G__32805 = (i_32802 + (1));
i_32802 = G__32805;
continue;
} else {
}
break;
}


var i_32806 = cljs.core.long$.call(null,(0));
while(true){
if((i_32806 < mrows)){
var j_32807 = cljs.core.long$.call(null,(0));
while(true){
if((j_32807 < acols)){
var k_32808 = cljs.core.long$.call(null,(0));
while(true){
if((k_32808 < mcols)){
clojure.core.matrix.protocols.set_2d_BANG_.call(null,new_m,i_32806,j_32807,(clojure.core.matrix.protocols.get_2d.call(null,new_m,i_32806,j_32807) + (clojure.core.matrix.protocols.get_2d.call(null,m,i_32806,k_32808) * clojure.core.matrix.protocols.get_2d.call(null,a,k_32808,j_32807))));

var G__32809 = (k_32808 + (1));
k_32808 = G__32809;
continue;
} else {
}
break;
}

var G__32810 = (j_32807 + (1));
j_32807 = G__32810;
continue;
} else {
}
break;
}

var G__32811 = (i_32806 + (1));
i_32806 = G__32811;
continue;
} else {
}
break;
}


return new_m;
} else {
return null;
}
}
}
}
}
}));

goog.object.set(clojure.core.matrix.protocols.element_multiply,"object",(function (m,a){
if(typeof a === 'number'){
return clojure.core.matrix.protocols.scale.call(null,m,a);
} else {
var vec__32799 = clojure.core.matrix.protocols.broadcast_compatible.call(null,m,a);
var m__$1 = cljs.core.nth.call(null,vec__32799,(0),null);
var a__$1 = cljs.core.nth.call(null,vec__32799,(1),null);
return clojure.core.matrix.protocols.element_map.call(null,m__$1,cljs.core._STAR_,a__$1);
}
}));
goog.object.set(clojure.core.matrix.protocols.PMatrixMultiplyMutable,"number",true);

goog.object.set(clojure.core.matrix.protocols.element_multiply_BANG_,"number",(function (m,a){
throw cljs.core.ex_info.call(null,["Can't do mutable multiply on a scalar number"].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.matrix_multiply_BANG_,"number",(function (m,a){
throw cljs.core.ex_info.call(null,["Can't do mutable multiply on a scalar number"].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.PMatrixMultiplyMutable,"object",true);

goog.object.set(clojure.core.matrix.protocols.element_multiply_BANG_,"object",(function (m,a){
return clojure.core.matrix.protocols.assign_BANG_.call(null,m,clojure.core.matrix.protocols.element_multiply.call(null,m,a));
}));

goog.object.set(clojure.core.matrix.protocols.matrix_multiply_BANG_,"object",(function (m,a){
return clojure.core.matrix.protocols.assign_BANG_.call(null,m,clojure.core.matrix.protocols.matrix_multiply.call(null,m,a));
}));
goog.object.set(clojure.core.matrix.protocols.PMatrixDivide,"number",true);

goog.object.set(clojure.core.matrix.protocols.element_divide,"number",(function() {
var G__32812 = null;
var G__32812__1 = (function (m){
return ((1) / m);
});
var G__32812__2 = (function (m,a){
return clojure.core.matrix.protocols.pre_scale.call(null,clojure.core.matrix.protocols.element_divide.call(null,a),m);
});
G__32812 = function(m,a){
switch(arguments.length){
case 1:
return G__32812__1.call(this,m);
case 2:
return G__32812__2.call(this,m,a);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__32812.cljs$core$IFn$_invoke$arity$1 = G__32812__1;
G__32812.cljs$core$IFn$_invoke$arity$2 = G__32812__2;
return G__32812;
})()
);

goog.object.set(clojure.core.matrix.protocols.PMatrixDivide,"object",true);

goog.object.set(clojure.core.matrix.protocols.element_divide,"object",(function() {
var G__32813 = null;
var G__32813__1 = (function (m){
if(cljs.core.truth_(clojure.core.matrix.protocols.get_shape.call(null,m))){
return clojure.core.matrix.protocols.element_map.call(null,m,clojure.core.matrix.protocols.element_divide);
} else {
throw cljs.core.ex_info.call(null,["Don't know how to take reciprocal of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,m))].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});
var G__32813__2 = (function (m,a){
return clojure.core.matrix.protocols.element_multiply.call(null,m,clojure.core.matrix.protocols.element_divide.call(null,a));
});
G__32813 = function(m,a){
switch(arguments.length){
case 1:
return G__32813__1.call(this,m);
case 2:
return G__32813__2.call(this,m,a);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__32813.cljs$core$IFn$_invoke$arity$1 = G__32813__1;
G__32813.cljs$core$IFn$_invoke$arity$2 = G__32813__2;
return G__32813;
})()
);
goog.object.set(clojure.core.matrix.protocols.PMatrixDivideMutable,"number",true);

goog.object.set(clojure.core.matrix.protocols.element_divide_BANG_,"number",(function() {
var G__32817 = null;
var G__32817__1 = (function (m){
throw cljs.core.ex_info.call(null,["Can't do mutable divide on a scalar number"].join(''),cljs.core.PersistentArrayMap.EMPTY);
});
var G__32817__2 = (function (m,a){
throw cljs.core.ex_info.call(null,["Can't do mutable divide on a scalar numer"].join(''),cljs.core.PersistentArrayMap.EMPTY);
});
G__32817 = function(m,a){
switch(arguments.length){
case 1:
return G__32817__1.call(this,m);
case 2:
return G__32817__2.call(this,m,a);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__32817.cljs$core$IFn$_invoke$arity$1 = G__32817__1;
G__32817.cljs$core$IFn$_invoke$arity$2 = G__32817__2;
return G__32817;
})()
);

goog.object.set(clojure.core.matrix.protocols.PMatrixDivideMutable,"object",true);

goog.object.set(clojure.core.matrix.protocols.element_divide_BANG_,"object",(function() {
var G__32818 = null;
var G__32818__1 = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,cljs.core._SLASH_);
});
var G__32818__2 = (function (m,a){
var vec__32814 = clojure.core.matrix.protocols.broadcast_compatible.call(null,m,a);
var m__$1 = cljs.core.nth.call(null,vec__32814,(0),null);
var a__$1 = cljs.core.nth.call(null,vec__32814,(1),null);
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m__$1,cljs.core._SLASH_,a__$1);
});
G__32818 = function(m,a){
switch(arguments.length){
case 1:
return G__32818__1.call(this,m);
case 2:
return G__32818__2.call(this,m,a);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__32818.cljs$core$IFn$_invoke$arity$1 = G__32818__1;
G__32818.cljs$core$IFn$_invoke$arity$2 = G__32818__2;
return G__32818;
})()
);
goog.object.set(clojure.core.matrix.protocols.PSummable,"number",true);

goog.object.set(clojure.core.matrix.protocols.element_sum,"number",(function (a){
return a;
}));

goog.object.set(clojure.core.matrix.protocols.PSummable,"object",true);

goog.object.set(clojure.core.matrix.protocols.element_sum,"object",(function (a){
return clojure.core.matrix.protocols.element_reduce.call(null,a,(cljs.core.truth_(clojure.core.matrix.protocols.numerical_QMARK_.call(null,a))?cljs.core._PLUS_:clojure.core.matrix.protocols.matrix_add));
}));
goog.object.set(clojure.core.matrix.protocols.PElementMinMax,"number",true);

goog.object.set(clojure.core.matrix.protocols.element_min,"number",(function (m){
return m;
}));

goog.object.set(clojure.core.matrix.protocols.element_max,"number",(function (m){
return m;
}));

goog.object.set(clojure.core.matrix.protocols.element_clamp,"number",(function (m,a,b){
if(!((a <= b))){
throw cljs.core.ex_info.call(null,["min argument: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(a)," should be <= max argument: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
if((m < a)){
return a;
} else {
if((m > b)){
return b;
} else {
return m;
}
}
}
}));

goog.object.set(clojure.core.matrix.protocols.PElementMinMax,"object",true);

goog.object.set(clojure.core.matrix.protocols.element_min,"object",(function (m){
return clojure.core.matrix.protocols.element_reduce.call(null,m,(function (best,v){
if(((cljs.core.not.call(null,best)) || ((v < best)))){
return v;
} else {
return best;
}
}),null);
}));

goog.object.set(clojure.core.matrix.protocols.element_max,"object",(function (m){
return clojure.core.matrix.protocols.element_reduce.call(null,m,(function (best,v){
if(((cljs.core.not.call(null,best)) || ((v > best)))){
return v;
} else {
return best;
}
}),null);
}));

goog.object.set(clojure.core.matrix.protocols.element_clamp,"object",(function (m,a,b){
if(!((a <= b))){
throw cljs.core.ex_info.call(null,["min argument: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(a)," should be <= max argument: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__32819_SHARP_){
if((p1__32819_SHARP_ < a)){
return a;
} else {
if((p1__32819_SHARP_ > b)){
return b;
} else {
return p1__32819_SHARP_;
}
}
}));
}
}));
goog.object.set(clojure.core.matrix.protocols.PCompare,"number",true);

goog.object.set(clojure.core.matrix.protocols.element_compare,"number",(function (a,b){
if(typeof b === 'number'){
return cljs.core.long$.call(null,clojure.core.matrix.impl.mathsops.signum.call(null,(a - b)));
} else {
return clojure.core.matrix.protocols.signum.call(null,clojure.core.matrix.protocols.matrix_sub.call(null,a,b));
}
}));

goog.object.set(clojure.core.matrix.protocols.element_if,"number",(function (m,a,b){
var vec__32847 = clojure.core.matrix.protocols.broadcast_same_shape.call(null,a,b);
var a__$1 = cljs.core.nth.call(null,vec__32847,(0),null);
var b__$1 = cljs.core.nth.call(null,vec__32847,(1),null);
if((m > (0))){
return a__$1;
} else {
return b__$1;
}
}));

goog.object.set(clojure.core.matrix.protocols.element_lt,"number",(function (m,a){
if(typeof a === 'number'){
if((m < a)){
return (1);
} else {
return (0);
}
} else {
return clojure.core.matrix.protocols.element_gt.call(null,a,m);
}
}));

goog.object.set(clojure.core.matrix.protocols.element_le,"number",(function (m,a){
if(typeof a === 'number'){
if((m <= a)){
return (1);
} else {
return (0);
}
} else {
return clojure.core.matrix.protocols.element_ge.call(null,a,m);
}
}));

goog.object.set(clojure.core.matrix.protocols.element_gt,"number",(function (m,a){
if(typeof a === 'number'){
if((m > a)){
return (1);
} else {
return (0);
}
} else {
return clojure.core.matrix.protocols.element_lt.call(null,a,m);
}
}));

goog.object.set(clojure.core.matrix.protocols.element_ge,"number",(function (m,a){
if(typeof a === 'number'){
if((m >= a)){
return (1);
} else {
return (0);
}
} else {
return clojure.core.matrix.protocols.element_le.call(null,a,m);
}
}));

goog.object.set(clojure.core.matrix.protocols.element_ne,"number",(function (m,a){
if(typeof a === 'number'){
if(cljs.core.not_EQ_.call(null,m,a)){
return (1);
} else {
return (0);
}
} else {
return clojure.core.matrix.protocols.element_ne.call(null,a,m);
}
}));

goog.object.set(clojure.core.matrix.protocols.element_eq,"number",(function (m,a){
if(typeof a === 'number'){
if(cljs.core._EQ_.call(null,m,a)){
return (1);
} else {
return (0);
}
} else {
return clojure.core.matrix.protocols.element_eq.call(null,a,m);
}
}));

goog.object.set(clojure.core.matrix.protocols.PCompare,"object",true);

goog.object.set(clojure.core.matrix.protocols.element_compare,"object",(function (a,b){
return clojure.core.matrix.protocols.element_map.call(null,clojure.core.matrix.protocols.matrix_sub.call(null,a,b),(function (p1__32820_SHARP_){
return cljs.core.long$.call(null,clojure.core.matrix.impl.mathsops.signum.call(null,p1__32820_SHARP_));
}));
}));

goog.object.set(clojure.core.matrix.protocols.element_if,"object",(function (m,a,b){
if(((typeof a === 'number') && (typeof b === 'number'))){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__32821_SHARP_){
if((p1__32821_SHARP_ > (0))){
return a;
} else {
return b;
}
}));
} else {
if(typeof a === 'number'){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__32822_SHARP_,p2__32823_SHARP_){
if((p1__32822_SHARP_ > (0))){
return a;
} else {
return p2__32823_SHARP_;
}
}),b);
} else {
if(typeof b === 'number'){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__32824_SHARP_,p2__32825_SHARP_){
if((p1__32824_SHARP_ > (0))){
return p2__32825_SHARP_;
} else {
return b;
}
}),a);
} else {
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__32826_SHARP_,p2__32827_SHARP_,p3__32828_SHARP_){
if((p1__32826_SHARP_ > (0))){
return p2__32827_SHARP_;
} else {
return p3__32828_SHARP_;
}
}),a,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [b], null));

}
}
}
}));

goog.object.set(clojure.core.matrix.protocols.element_lt,"object",(function (m,a){
if(typeof a === 'number'){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__32829_SHARP_){
if((p1__32829_SHARP_ < a)){
return (1);
} else {
return (0);
}
}));
} else {
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__32830_SHARP_,p2__32831_SHARP_){
if((p1__32830_SHARP_ < p2__32831_SHARP_)){
return (1);
} else {
return (0);
}
}),a);
}
}));

goog.object.set(clojure.core.matrix.protocols.element_le,"object",(function (m,a){
if(typeof a === 'number'){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__32832_SHARP_){
if((p1__32832_SHARP_ <= a)){
return (1);
} else {
return (0);
}
}));
} else {
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__32833_SHARP_,p2__32834_SHARP_){
if((p1__32833_SHARP_ <= p2__32834_SHARP_)){
return (1);
} else {
return (0);
}
}),a);
}
}));

goog.object.set(clojure.core.matrix.protocols.element_gt,"object",(function (m,a){
if(typeof a === 'number'){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__32835_SHARP_){
if((p1__32835_SHARP_ > a)){
return (1);
} else {
return (0);
}
}));
} else {
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__32836_SHARP_,p2__32837_SHARP_){
if((p1__32836_SHARP_ > p2__32837_SHARP_)){
return (1);
} else {
return (0);
}
}),a);
}
}));

goog.object.set(clojure.core.matrix.protocols.element_ge,"object",(function (m,a){
if(typeof a === 'number'){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__32838_SHARP_){
if((p1__32838_SHARP_ >= a)){
return (1);
} else {
return (0);
}
}));
} else {
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__32839_SHARP_,p2__32840_SHARP_){
if((p1__32839_SHARP_ >= p2__32840_SHARP_)){
return (1);
} else {
return (0);
}
}),a);
}
}));

goog.object.set(clojure.core.matrix.protocols.element_ne,"object",(function (m,a){
if(typeof a === 'number'){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__32841_SHARP_){
if(!((p1__32841_SHARP_ === a))){
return (1);
} else {
return (0);
}
}));
} else {
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__32842_SHARP_,p2__32843_SHARP_){
if(!((p1__32842_SHARP_ === p2__32843_SHARP_))){
return (1);
} else {
return (0);
}
}),a);
}
}));

goog.object.set(clojure.core.matrix.protocols.element_eq,"object",(function (m,a){
if(typeof a === 'number'){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__32844_SHARP_){
if((p1__32844_SHARP_ === a)){
return (1);
} else {
return (0);
}
}));
} else {
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__32845_SHARP_,p2__32846_SHARP_){
if((p1__32845_SHARP_ === p2__32846_SHARP_)){
return (1);
} else {
return (0);
}
}),a);
}
}));
goog.object.set(clojure.core.matrix.protocols.PAddProduct,"number",true);

goog.object.set(clojure.core.matrix.protocols.add_product,"number",(function (m,a,b){
return clojure.core.matrix.protocols.matrix_add.call(null,clojure.core.matrix.protocols.element_multiply.call(null,a,b),m);
}));

goog.object.set(clojure.core.matrix.protocols.PAddProduct,"object",true);

goog.object.set(clojure.core.matrix.protocols.add_product,"object",(function (m,a,b){
return clojure.core.matrix.protocols.matrix_add.call(null,m,clojure.core.matrix.protocols.element_multiply.call(null,a,b));
}));
goog.object.set(clojure.core.matrix.protocols.PAddProductMutable,"number",true);

goog.object.set(clojure.core.matrix.protocols.add_product_BANG_,"number",(function (m,a,b){
throw cljs.core.ex_info.call(null,["Numbers are not mutable"].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.PAddProductMutable,"object",true);

goog.object.set(clojure.core.matrix.protocols.add_product_BANG_,"object",(function (m,a,b){
return clojure.core.matrix.protocols.matrix_add_BANG_.call(null,m,clojure.core.matrix.protocols.element_multiply.call(null,a,b));
}));
goog.object.set(clojure.core.matrix.protocols.PAddScaled,"number",true);

goog.object.set(clojure.core.matrix.protocols.add_scaled,"number",(function (m,a,factor){
return clojure.core.matrix.protocols.matrix_add.call(null,clojure.core.matrix.protocols.scale.call(null,a,factor),m);
}));

goog.object.set(clojure.core.matrix.protocols.PAddScaled,"object",true);

goog.object.set(clojure.core.matrix.protocols.add_scaled,"object",(function (m,a,factor){
return clojure.core.matrix.protocols.matrix_add.call(null,m,clojure.core.matrix.protocols.scale.call(null,a,factor));
}));
goog.object.set(clojure.core.matrix.protocols.PAddScaledMutable,"number",true);

goog.object.set(clojure.core.matrix.protocols.add_scaled_BANG_,"number",(function (m,a,factor){
throw cljs.core.ex_info.call(null,["Numbers are not mutable"].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.PAddScaledMutable,"object",true);

goog.object.set(clojure.core.matrix.protocols.add_scaled_BANG_,"object",(function (m,a,factor){
return clojure.core.matrix.protocols.matrix_add_BANG_.call(null,m,clojure.core.matrix.protocols.scale.call(null,a,factor));
}));
goog.object.set(clojure.core.matrix.protocols.PAddScaledProduct,"number",true);

goog.object.set(clojure.core.matrix.protocols.add_scaled_product,"number",(function (m,a,b,factor){
return clojure.core.matrix.protocols.matrix_add.call(null,clojure.core.matrix.protocols.scale.call(null,clojure.core.matrix.protocols.element_multiply.call(null,a,b),factor),m);
}));

goog.object.set(clojure.core.matrix.protocols.PAddScaledProduct,"object",true);

goog.object.set(clojure.core.matrix.protocols.add_scaled_product,"object",(function (m,a,b,factor){
return clojure.core.matrix.protocols.matrix_add.call(null,m,clojure.core.matrix.protocols.scale.call(null,clojure.core.matrix.protocols.element_multiply.call(null,a,b),factor));
}));
goog.object.set(clojure.core.matrix.protocols.PAddScaledProductMutable,"number",true);

goog.object.set(clojure.core.matrix.protocols.add_scaled_product_BANG_,"number",(function (m,a,b,factor){
throw cljs.core.ex_info.call(null,["Numbers are not mutable"].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.PAddScaledProductMutable,"object",true);

goog.object.set(clojure.core.matrix.protocols.add_scaled_product_BANG_,"object",(function (m,a,b,factor){
return clojure.core.matrix.protocols.matrix_add_BANG_.call(null,m,clojure.core.matrix.protocols.scale.call(null,clojure.core.matrix.protocols.element_multiply.call(null,a,b),factor));
}));
goog.object.set(clojure.core.matrix.protocols.PScaleAdd,"object",true);

goog.object.set(clojure.core.matrix.protocols.scale_add_BANG_,"object",(function (m1,a,m2,b,constant){
clojure.core.matrix.protocols.element_multiply_BANG_.call(null,m1,a);

if(((typeof b === 'number') && ((b === (0))))){
} else {
clojure.core.matrix.protocols.add_product_BANG_.call(null,m1,m2,b);
}

if(((typeof constant === 'number') && ((constant === (0))))){
} else {
clojure.core.matrix.protocols.matrix_add_BANG_.call(null,m1,constant);
}

return m1;
}));
goog.object.set(clojure.core.matrix.protocols.PScaleAdd2,"object",true);

goog.object.set(clojure.core.matrix.protocols.scale_add,"object",(function (m1,a,m2,b,constant){
var r = clojure.core.matrix.protocols.matrix_add.call(null,clojure.core.matrix.protocols.scale.call(null,m1,a),clojure.core.matrix.protocols.scale.call(null,m2,b));
if((0.0 === constant)){
return r;
} else {
return clojure.core.matrix.protocols.matrix_add.call(null,r,constant);
}
}));
goog.object.set(clojure.core.matrix.protocols.PLerp,"object",true);

goog.object.set(clojure.core.matrix.protocols.lerp,"object",(function (a,b,factor){
return clojure.core.matrix.protocols.scale_add.call(null,a,(1.0 - factor),b,factor,0.0);
}));

goog.object.set(clojure.core.matrix.protocols.lerp_BANG_,"object",(function (a,b,factor){
return clojure.core.matrix.protocols.scale_add_BANG_.call(null,a,(1.0 - factor),b,factor,0.0);
}));
goog.object.set(clojure.core.matrix.protocols.PAddInnerProductMutable,"object",true);

goog.object.set(clojure.core.matrix.protocols.add_inner_product_BANG_,"object",(function() {
var G__32850 = null;
var G__32850__3 = (function (m,a,b){
return clojure.core.matrix.protocols.matrix_add_BANG_.call(null,m,clojure.core.matrix.protocols.inner_product.call(null,a,b));
});
var G__32850__4 = (function (m,a,b,factor){
return clojure.core.matrix.protocols.add_scaled_BANG_.call(null,m,clojure.core.matrix.protocols.inner_product.call(null,a,b),factor);
});
G__32850 = function(m,a,b,factor){
switch(arguments.length){
case 3:
return G__32850__3.call(this,m,a,b);
case 4:
return G__32850__4.call(this,m,a,b,factor);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__32850.cljs$core$IFn$_invoke$arity$3 = G__32850__3;
G__32850.cljs$core$IFn$_invoke$arity$4 = G__32850__4;
return G__32850;
})()
);
goog.object.set(clojure.core.matrix.protocols.PAddOuterProductMutable,"object",true);

goog.object.set(clojure.core.matrix.protocols.add_outer_product_BANG_,"object",(function() {
var G__32851 = null;
var G__32851__3 = (function (m,a,b){
return clojure.core.matrix.protocols.matrix_add_BANG_.call(null,m,clojure.core.matrix.protocols.outer_product.call(null,a,b));
});
var G__32851__4 = (function (m,a,b,factor){
return clojure.core.matrix.protocols.add_scaled_BANG_.call(null,m,clojure.core.matrix.protocols.outer_product.call(null,a,b),factor);
});
G__32851 = function(m,a,b,factor){
switch(arguments.length){
case 3:
return G__32851__3.call(this,m,a,b);
case 4:
return G__32851__4.call(this,m,a,b,factor);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__32851.cljs$core$IFn$_invoke$arity$3 = G__32851__3;
G__32851.cljs$core$IFn$_invoke$arity$4 = G__32851__4;
return G__32851;
})()
);
goog.object.set(clojure.core.matrix.protocols.PSetInnerProductMutable,"object",true);

goog.object.set(clojure.core.matrix.protocols.set_inner_product_BANG_,"object",(function() {
var G__32852 = null;
var G__32852__3 = (function (m,a,b){
return clojure.core.matrix.protocols.assign_BANG_.call(null,m,clojure.core.matrix.protocols.inner_product.call(null,a,b));
});
var G__32852__4 = (function (m,a,b,factor){
clojure.core.matrix.protocols.assign_BANG_.call(null,m,clojure.core.matrix.protocols.inner_product.call(null,a,b));

return clojure.core.matrix.protocols.scale_BANG_.call(null,m,factor);
});
G__32852 = function(m,a,b,factor){
switch(arguments.length){
case 3:
return G__32852__3.call(this,m,a,b);
case 4:
return G__32852__4.call(this,m,a,b,factor);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__32852.cljs$core$IFn$_invoke$arity$3 = G__32852__3;
G__32852.cljs$core$IFn$_invoke$arity$4 = G__32852__4;
return G__32852;
})()
);
goog.object.set(clojure.core.matrix.protocols.PTypeInfo,"null",true);

goog.object.set(clojure.core.matrix.protocols.element_type,"null",(function (a){
return Object;
}));

goog.object.set(clojure.core.matrix.protocols.PTypeInfo,"object",true);

goog.object.set(clojure.core.matrix.protocols.element_type,"object",(function (a){
if((Array === a.constructor)){
return cljs.core.type.call(null,a).getComponentType();
} else {
return Object;
}
}));
goog.object.set(clojure.core.matrix.protocols.PGenericValues,"object",true);

goog.object.set(clojure.core.matrix.protocols.generic_zero,"object",(function (m){
return (0);
}));

goog.object.set(clojure.core.matrix.protocols.generic_one,"object",(function (m){
return (1);
}));

goog.object.set(clojure.core.matrix.protocols.generic_value,"object",(function (m){
return (0);
}));
cljs.core.IFn.prototype.clojure$core$matrix$protocols$PVectorTransform$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.IFn.prototype.clojure$core$matrix$protocols$PVectorTransform$vector_transform$arity$2 = (function (m,a){
var m__$1 = this;
if(cljs.core.vector_QMARK_.call(null,m__$1)){
return clojure.core.matrix.protocols.matrix_multiply.call(null,m__$1,a);
} else {
return m__$1.call(null,a);
}
});

cljs.core.IFn.prototype.clojure$core$matrix$protocols$PVectorTransform$vector_transform_BANG_$arity$2 = (function (m,a){
var m__$1 = this;
if(cljs.core.vector_QMARK_.call(null,m__$1)){
return clojure.core.matrix.protocols.assign_BANG_.call(null,a,clojure.core.matrix.protocols.matrix_multiply.call(null,m__$1,a));
} else {
return clojure.core.matrix.protocols.assign_BANG_.call(null,a,m__$1.call(null,a));
}
});

goog.object.set(clojure.core.matrix.protocols.PVectorTransform,"object",true);

goog.object.set(clojure.core.matrix.protocols.vector_transform,"object",(function (m,a){
if(((2) === cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m)))){
return clojure.core.matrix.protocols.matrix_multiply.call(null,m,a);
} else {
throw cljs.core.ex_info.call(null,["Don't know how to transform using: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,m))].join(''),cljs.core.PersistentArrayMap.EMPTY);

}
}));

goog.object.set(clojure.core.matrix.protocols.vector_transform_BANG_,"object",(function (m,a){
return clojure.core.matrix.protocols.assign_BANG_.call(null,a,clojure.core.matrix.protocols.vector_transform.call(null,m,a));
}));
goog.object.set(clojure.core.matrix.protocols.PMatrixScaling,"number",true);

goog.object.set(clojure.core.matrix.protocols.scale,"number",(function (m,a){
if(typeof a === 'number'){
return (m * a);
} else {
return clojure.core.matrix.protocols.pre_scale.call(null,a,m);
}
}));

goog.object.set(clojure.core.matrix.protocols.pre_scale,"number",(function (m,a){
if(typeof a === 'number'){
return (a * m);
} else {
return clojure.core.matrix.protocols.scale.call(null,a,m);
}
}));

goog.object.set(clojure.core.matrix.protocols.PMatrixScaling,"object",true);

goog.object.set(clojure.core.matrix.protocols.scale,"object",(function (m,a){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__32853_SHARP_){
return (p1__32853_SHARP_ * a);
}));
}));

goog.object.set(clojure.core.matrix.protocols.pre_scale,"object",(function (m,a){
return clojure.core.matrix.protocols.element_map.call(null,m,cljs.core.partial.call(null,cljs.core._STAR_,a));
}));
goog.object.set(clojure.core.matrix.protocols.PMatrixMutableScaling,"number",true);

goog.object.set(clojure.core.matrix.protocols.scale_BANG_,"number",(function (m,a){
throw cljs.core.ex_info.call(null,["Can't scale! a numeric value: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.pre_scale_BANG_,"number",(function (m,a){
throw cljs.core.ex_info.call(null,["Can't pre-scale! a numeric value: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.PMatrixMutableScaling,"object",true);

goog.object.set(clojure.core.matrix.protocols.scale_BANG_,"object",(function (m,a){
clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__32854_SHARP_){
return (p1__32854_SHARP_ * a);
}));

return m;
}));

goog.object.set(clojure.core.matrix.protocols.pre_scale_BANG_,"object",(function (m,a){
clojure.core.matrix.protocols.element_map_BANG_.call(null,m,cljs.core.partial.call(null,cljs.core._STAR_,a));

return m;
}));
goog.object.set(clojure.core.matrix.protocols.PMatrixAdd,"number",true);

goog.object.set(clojure.core.matrix.protocols.matrix_add,"number",(function (m,a){
if(typeof a === 'number'){
return (m + a);
} else {
return clojure.core.matrix.protocols.matrix_add.call(null,a,m);
}
}));

goog.object.set(clojure.core.matrix.protocols.matrix_sub,"number",(function (m,a){
if(typeof a === 'number'){
return (m - a);
} else {
return clojure.core.matrix.protocols.negate.call(null,clojure.core.matrix.protocols.matrix_sub.call(null,a,m));
}
}));

goog.object.set(clojure.core.matrix.protocols.PMatrixAdd,"object",true);

goog.object.set(clojure.core.matrix.protocols.matrix_add,"object",(function (m,a){
var vec__32855 = clojure.core.matrix.protocols.broadcast_compatible.call(null,m,a);
var m__$1 = cljs.core.nth.call(null,vec__32855,(0),null);
var a__$1 = cljs.core.nth.call(null,vec__32855,(1),null);
return clojure.core.matrix.protocols.element_map.call(null,m__$1,cljs.core._PLUS_,a__$1);
}));

goog.object.set(clojure.core.matrix.protocols.matrix_sub,"object",(function (m,a){
var vec__32858 = clojure.core.matrix.protocols.broadcast_compatible.call(null,m,a);
var m__$1 = cljs.core.nth.call(null,vec__32858,(0),null);
var a__$1 = cljs.core.nth.call(null,vec__32858,(1),null);
return clojure.core.matrix.protocols.element_map.call(null,m__$1,cljs.core._,a__$1);
}));
goog.object.set(clojure.core.matrix.protocols.PMatrixAddMutable,"number",true);

goog.object.set(clojure.core.matrix.protocols.matrix_add_BANG_,"number",(function (m,a){
throw cljs.core.ex_info.call(null,["Can't do mutable add! on a scalar number"].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.matrix_sub_BANG_,"number",(function (m,a){
throw cljs.core.ex_info.call(null,["Can't do mutable sub! on a scalar number"].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.PMatrixAddMutable,"object",true);

goog.object.set(clojure.core.matrix.protocols.matrix_add_BANG_,"object",(function (m,a){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,cljs.core._PLUS_,a);
}));

goog.object.set(clojure.core.matrix.protocols.matrix_sub_BANG_,"object",(function (m,a){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,cljs.core._,a);
}));
goog.object.set(clojure.core.matrix.protocols.PNegation,"null",true);

goog.object.set(clojure.core.matrix.protocols.negate,"null",(function (m){
throw cljs.core.ex_info.call(null,["Can't negate nil!"].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.PNegation,"number",true);

goog.object.set(clojure.core.matrix.protocols.negate,"number",(function (m){
return (- m);
}));

goog.object.set(clojure.core.matrix.protocols.PNegation,"object",true);

goog.object.set(clojure.core.matrix.protocols.negate,"object",(function (m){
return clojure.core.matrix.protocols.scale.call(null,m,-1.0);
}));
goog.object.set(clojure.core.matrix.protocols.PMatrixEquality,"null",true);

goog.object.set(clojure.core.matrix.protocols.matrix_equals,"null",(function (a,b){
throw cljs.core.ex_info.call(null,["nil is not a valid numerical value in equality testing"].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.PMatrixEquality,"number",true);

goog.object.set(clojure.core.matrix.protocols.matrix_equals,"number",(function (a,b){
if(typeof b === 'number'){
return (a === b);
} else {
if(((0) === clojure.core.matrix.protocols.dimensionality.call(null,b))){
return clojure.core.matrix.protocols.matrix_equals.call(null,b,a);
} else {
return false;

}
}
}));

goog.object.set(clojure.core.matrix.protocols.PMatrixEquality,"object",true);

goog.object.set(clojure.core.matrix.protocols.matrix_equals,"object",(function (a,b){
if((a === b)){
return true;
} else {
if(cljs.core.truth_(clojure.core.matrix.protocols.same_shape_QMARK_.call(null,a,b))){
if(((0) === cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,a)))){
return (clojure.core.matrix.protocols.get_0d.call(null,a) === (function (){var x__21930__auto__ = b;
if(typeof x__21930__auto__ === 'number'){
return x__21930__auto__;
} else {
return clojure.core.matrix.protocols.get_0d.call(null,x__21930__auto__);

}
})());
} else {
return cljs.core.not_any_QMARK_.call(null,cljs.core.false_QMARK_,cljs.core.map.call(null,cljs.core._EQ__EQ_,clojure.core.matrix.protocols.element_seq.call(null,a),clojure.core.matrix.protocols.element_seq.call(null,b)));
}
} else {
return false;

}
}
}));
goog.object.set(clojure.core.matrix.protocols.PValueEquality,"null",true);

goog.object.set(clojure.core.matrix.protocols.value_equals,"null",(function (a,b){
return (((b == null)) || (((((0) === cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,b)))) && ((clojure.core.matrix.protocols.get_0d.call(null,b) == null)))));
}));

goog.object.set(clojure.core.matrix.protocols.PValueEquality,"number",true);

goog.object.set(clojure.core.matrix.protocols.value_equals,"number",(function (a,b){
return ((((0) === cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,b)))) && ((a === clojure.core.matrix.protocols.get_0d.call(null,b))));
}));

goog.object.set(clojure.core.matrix.protocols.PValueEquality,"object",true);

goog.object.set(clojure.core.matrix.protocols.value_equals,"object",(function (a,b){
var and__3911__auto__ = clojure.core.matrix.protocols.same_shape_QMARK_.call(null,a,b);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.every_QMARK_.call(null,cljs.core.true_QMARK_,cljs.core.map.call(null,cljs.core._EQ_,clojure.core.matrix.protocols.element_seq.call(null,a),clojure.core.matrix.protocols.element_seq.call(null,b)));
} else {
return and__3911__auto__;
}
}));
goog.object.set(clojure.core.matrix.protocols.PMatrixEqualityEpsilon,"null",true);

goog.object.set(clojure.core.matrix.protocols.matrix_equals_epsilon,"null",(function (a,b,eps){
throw cljs.core.ex_info.call(null,["nil is not a valid numerical value in equality testing"].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.PMatrixEqualityEpsilon,"number",true);

goog.object.set(clojure.core.matrix.protocols.matrix_equals_epsilon,"number",(function (a,b,eps){
if(typeof b === 'number'){
return (Math.abs((a - b)) <= eps);
} else {
if(((0) === cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,b)))){
return (Math.abs((a - clojure.core.matrix.protocols.get_0d.call(null,b))) <= eps);
} else {
return false;

}
}
}));

goog.object.set(clojure.core.matrix.protocols.PMatrixEqualityEpsilon,"object",true);

goog.object.set(clojure.core.matrix.protocols.matrix_equals_epsilon,"object",(function (a,b,eps){
if((a === b)){
return true;
} else {
if(cljs.core.truth_(clojure.core.matrix.protocols.same_shape_QMARK_.call(null,a,b))){
var eps__$1 = eps;
return cljs.core.every_QMARK_.call(null,((function (eps__$1){
return (function (p1__32861_SHARP_){
return (Math.abs(p1__32861_SHARP_) <= eps__$1);
});})(eps__$1))
,cljs.core.map.call(null,cljs.core._,clojure.core.matrix.protocols.element_seq.call(null,a),clojure.core.matrix.protocols.element_seq.call(null,b)));
} else {
return false;

}
}
}));
goog.object.set(clojure.core.matrix.protocols.PDoubleArrayOutput,"number",true);

goog.object.set(clojure.core.matrix.protocols.to_double_array,"number",(function (m){
var arr = cljs.core.double_array.call(null,(1));
(arr[(0)] = m);

return arr;
}));

goog.object.set(clojure.core.matrix.protocols.as_double_array,"number",(function (m){
return null;
}));

goog.object.set(clojure.core.matrix.protocols.PDoubleArrayOutput,"object",true);

goog.object.set(clojure.core.matrix.protocols.to_double_array,"object",(function (m){
return cljs.core.double_array.call(null,clojure.core.matrix.protocols.element_seq.call(null,m));
}));

goog.object.set(clojure.core.matrix.protocols.as_double_array,"object",(function (m){
return null;
}));
goog.object.set(clojure.core.matrix.protocols.PObjectArrayOutput,"null",true);

goog.object.set(clojure.core.matrix.protocols.to_object_array,"null",(function (m){
var arr = cljs.core.object_array.call(null,(1));
return arr;
}));

goog.object.set(clojure.core.matrix.protocols.as_object_array,"null",(function (m){
return null;
}));

goog.object.set(clojure.core.matrix.protocols.PObjectArrayOutput,"number",true);

goog.object.set(clojure.core.matrix.protocols.to_object_array,"number",(function (m){
var arr = cljs.core.object_array.call(null,(1));
(arr[(0)] = m);

return arr;
}));

goog.object.set(clojure.core.matrix.protocols.as_object_array,"number",(function (m){
return null;
}));

goog.object.set(clojure.core.matrix.protocols.PObjectArrayOutput,"object",true);

goog.object.set(clojure.core.matrix.protocols.to_object_array,"object",(function (m){
return cljs.core.object_array.call(null,clojure.core.matrix.protocols.element_seq.call(null,m));
}));

goog.object.set(clojure.core.matrix.protocols.as_object_array,"object",(function (m){
return null;
}));
goog.object.set(clojure.core.matrix.protocols.PRowOperations,"object",true);

goog.object.set(clojure.core.matrix.protocols.swap_rows,"object",(function (m,i,j){
return clojure.core.matrix.protocols.swap_rows.call(null,clojure.core.matrix.protocols.convert_to_nested_vectors.call(null,m),i,j);
}));

goog.object.set(clojure.core.matrix.protocols.multiply_row,"object",(function (m,i,k){
return clojure.core.matrix.protocols.multiply_row.call(null,clojure.core.matrix.protocols.convert_to_nested_vectors.call(null,m),i,k);
}));

goog.object.set(clojure.core.matrix.protocols.add_row,"object",(function (m,i,j,k){
return clojure.core.matrix.protocols.add_row.call(null,clojure.core.matrix.protocols.convert_to_nested_vectors.call(null,m),i,j,k);
}));
goog.object.set(clojure.core.matrix.protocols.PRowSetting,"object",true);

goog.object.set(clojure.core.matrix.protocols.set_row,"object",(function (m,i,row){
var svec = cljs.core.vec.call(null,clojure.core.matrix.protocols.get_major_slice_seq.call(null,m));
var row__$1 = clojure.core.matrix.protocols.broadcast_like.call(null,svec.call(null,(0)),row);
return clojure.core.matrix.protocols.coerce_param.call(null,m,cljs.core.assoc.call(null,svec,i,row__$1));
}));

goog.object.set(clojure.core.matrix.protocols.set_row_BANG_,"object",(function (m,i,row){
var sl = clojure.core.matrix.protocols.get_major_slice_view.call(null,m,i);
var row__$1 = clojure.core.matrix.protocols.broadcast_like.call(null,sl,row);
clojure.core.matrix.protocols.assign_BANG_.call(null,sl,row__$1);

return m;
}));
goog.object.set(clojure.core.matrix.protocols.PColumnSetting,"object",true);

goog.object.set(clojure.core.matrix.protocols.set_column,"object",(function (m,i,column){
var scol = clojure.core.matrix.protocols.get_column.call(null,m,(0));
var column__$1 = clojure.core.matrix.protocols.broadcast_like.call(null,scol,column);
var indices = cljs.core.range.call(null,clojure.core.matrix.protocols.dimension_count.call(null,column__$1,(0)));
var new_m = cljs.core.reduce.call(null,((function (scol,column__$1,indices){
return (function (acc,idx){
return clojure.core.matrix.protocols.set_2d.call(null,acc,idx,i,clojure.core.matrix.protocols.get_1d.call(null,column__$1,idx));
});})(scol,column__$1,indices))
,m,indices);
return clojure.core.matrix.protocols.coerce_param.call(null,m,new_m);
}));

goog.object.set(clojure.core.matrix.protocols.set_column_BANG_,"object",(function (m,i,column){
var scol = clojure.core.matrix.protocols.get_column.call(null,m,(0));
var column__$1 = clojure.core.matrix.protocols.broadcast_like.call(null,scol,column);
var n__4376__auto__ = clojure.core.matrix.protocols.dimension_count.call(null,column__$1,(0));
var j = (0);
while(true){
if((j < n__4376__auto__)){
clojure.core.matrix.protocols.set_2d_BANG_.call(null,m,j,i,clojure.core.matrix.protocols.get_1d.call(null,column__$1,j));

var G__32862 = (j + (1));
j = G__32862;
continue;
} else {
return null;
}
break;
}
}));
goog.object.set(clojure.core.matrix.protocols.PSliceMap,"object",true);

goog.object.set(clojure.core.matrix.protocols.slice_map,"object",(function() {
var G__32863 = null;
var G__32863__2 = (function (m,f){
return clojure.core.matrix.impl.common.construct_matrix.call(null,m,cljs.core.mapv.call(null,f,clojure.core.matrix.protocols.get_major_slice_seq.call(null,m)));
});
var G__32863__3 = (function (m,f,a){
return clojure.core.matrix.impl.common.construct_matrix.call(null,m,cljs.core.mapv.call(null,f,clojure.core.matrix.protocols.get_major_slice_seq.call(null,m),clojure.core.matrix.protocols.get_major_slice_seq.call(null,a)));
});
var G__32863__4 = (function (m,f,a,more){
return clojure.core.matrix.impl.common.construct_matrix.call(null,m,cljs.core.apply.call(null,cljs.core.mapv,f,clojure.core.matrix.protocols.get_major_slice_seq.call(null,m),clojure.core.matrix.protocols.get_major_slice_seq.call(null,a),cljs.core.map.call(null,clojure.core.matrix.protocols.get_major_slice_seq,more)));
});
G__32863 = function(m,f,a,more){
switch(arguments.length){
case 2:
return G__32863__2.call(this,m,f);
case 3:
return G__32863__3.call(this,m,f,a);
case 4:
return G__32863__4.call(this,m,f,a,more);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__32863.cljs$core$IFn$_invoke$arity$2 = G__32863__2;
G__32863.cljs$core$IFn$_invoke$arity$3 = G__32863__3;
G__32863.cljs$core$IFn$_invoke$arity$4 = G__32863__4;
return G__32863;
})()
);
goog.object.set(clojure.core.matrix.protocols.PFilterSlices,"object",true);

goog.object.set(clojure.core.matrix.protocols.filter_slices,"object",(function (m,f){
var slcs = cljs.core.filterv.call(null,f,clojure.core.matrix.protocols.get_major_slice_seq.call(null,m));
if(cljs.core.seq.call(null,slcs)){
return slcs;
} else {
return null;
}
}));
goog.object.set(clojure.core.matrix.protocols.PAddEmap,"object",true);

goog.object.set(clojure.core.matrix.protocols.add_emap_BANG_,"object",(function() {
var G__32864 = null;
var G__32864__3 = (function (dest,f,a){
return clojure.core.matrix.protocols.matrix_add_BANG_.call(null,dest,clojure.core.matrix.protocols.element_map.call(null,a,f));
});
var G__32864__4 = (function (dest,f,a,b){
return clojure.core.matrix.protocols.matrix_add_BANG_.call(null,dest,clojure.core.matrix.protocols.element_map.call(null,a,f,b));
});
var G__32864__5 = (function (dest,f,a,b,more){
return clojure.core.matrix.protocols.matrix_add_BANG_.call(null,dest,clojure.core.matrix.protocols.element_map.call(null,a,f,b,more));
});
G__32864 = function(dest,f,a,b,more){
switch(arguments.length){
case 3:
return G__32864__3.call(this,dest,f,a);
case 4:
return G__32864__4.call(this,dest,f,a,b);
case 5:
return G__32864__5.call(this,dest,f,a,b,more);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__32864.cljs$core$IFn$_invoke$arity$3 = G__32864__3;
G__32864.cljs$core$IFn$_invoke$arity$4 = G__32864__4;
G__32864.cljs$core$IFn$_invoke$arity$5 = G__32864__5;
return G__32864;
})()
);
goog.object.set(clojure.core.matrix.protocols.PSetEmap,"object",true);

goog.object.set(clojure.core.matrix.protocols.set_emap_BANG_,"object",(function() {
var G__32865 = null;
var G__32865__3 = (function (dest,f,a){
return clojure.core.matrix.protocols.assign_BANG_.call(null,dest,clojure.core.matrix.protocols.element_map.call(null,a,f));
});
var G__32865__4 = (function (dest,f,a,b){
return clojure.core.matrix.protocols.assign_BANG_.call(null,dest,clojure.core.matrix.protocols.element_map.call(null,a,f,b));
});
var G__32865__5 = (function (dest,f,a,b,more){
return clojure.core.matrix.protocols.assign_BANG_.call(null,dest,clojure.core.matrix.protocols.element_map.call(null,a,f,b,more));
});
G__32865 = function(dest,f,a,b,more){
switch(arguments.length){
case 3:
return G__32865__3.call(this,dest,f,a);
case 4:
return G__32865__4.call(this,dest,f,a,b);
case 5:
return G__32865__5.call(this,dest,f,a,b,more);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__32865.cljs$core$IFn$_invoke$arity$3 = G__32865__3;
G__32865.cljs$core$IFn$_invoke$arity$4 = G__32865__4;
G__32865.cljs$core$IFn$_invoke$arity$5 = G__32865__5;
return G__32865;
})()
);
goog.object.set(clojure.core.matrix.protocols.PFunctionalOperations,"number",true);

goog.object.set(clojure.core.matrix.protocols.element_seq,"number",(function (m){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[m],null));
}));

goog.object.set(clojure.core.matrix.protocols.element_map,"number",(function() {
var G__32876 = null;
var G__32876__2 = (function (m,f){
return f.call(null,m);
});
var G__32876__3 = (function (m,f,a){
return clojure.core.matrix.protocols.element_map.call(null,a,(function (p1__32866_SHARP_){
return f.call(null,m,p1__32866_SHARP_);
}));
});
var G__32876__4 = (function (m,f,a,more){
var temp__5455__auto__ = cljs.core.next.call(null,more);
if(temp__5455__auto__){
var moremore = temp__5455__auto__;
return clojure.core.matrix.protocols.element_map.call(null,a,((function (moremore,temp__5455__auto__){
return (function() { 
var G__32877__delegate = function (p1__32867_SHARP_,p2__32868_SHARP_,rest__32869_SHARP_){
return cljs.core.apply.call(null,f,m,p1__32867_SHARP_,p2__32868_SHARP_,rest__32869_SHARP_);
};
var G__32877 = function (p1__32867_SHARP_,p2__32868_SHARP_,var_args){
var rest__32869_SHARP_ = null;
if (arguments.length > 2) {
var G__32878__i = 0, G__32878__a = new Array(arguments.length -  2);
while (G__32878__i < G__32878__a.length) {G__32878__a[G__32878__i] = arguments[G__32878__i + 2]; ++G__32878__i;}
  rest__32869_SHARP_ = new cljs.core.IndexedSeq(G__32878__a,0,null);
} 
return G__32877__delegate.call(this,p1__32867_SHARP_,p2__32868_SHARP_,rest__32869_SHARP_);};
G__32877.cljs$lang$maxFixedArity = 2;
G__32877.cljs$lang$applyTo = (function (arglist__32879){
var p1__32867_SHARP_ = cljs.core.first(arglist__32879);
arglist__32879 = cljs.core.next(arglist__32879);
var p2__32868_SHARP_ = cljs.core.first(arglist__32879);
var rest__32869_SHARP_ = cljs.core.rest(arglist__32879);
return G__32877__delegate(p1__32867_SHARP_,p2__32868_SHARP_,rest__32869_SHARP_);
});
G__32877.cljs$core$IFn$_invoke$arity$variadic = G__32877__delegate;
return G__32877;
})()
;})(moremore,temp__5455__auto__))
,cljs.core.first.call(null,more),moremore);
} else {
return clojure.core.matrix.protocols.element_map.call(null,a,((function (temp__5455__auto__){
return (function (p1__32870_SHARP_,p2__32871_SHARP_){
return f.call(null,m,p1__32870_SHARP_,p2__32871_SHARP_);
});})(temp__5455__auto__))
,cljs.core.first.call(null,more));
}
});
G__32876 = function(m,f,a,more){
switch(arguments.length){
case 2:
return G__32876__2.call(this,m,f);
case 3:
return G__32876__3.call(this,m,f,a);
case 4:
return G__32876__4.call(this,m,f,a,more);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__32876.cljs$core$IFn$_invoke$arity$2 = G__32876__2;
G__32876.cljs$core$IFn$_invoke$arity$3 = G__32876__3;
G__32876.cljs$core$IFn$_invoke$arity$4 = G__32876__4;
return G__32876;
})()
);

goog.object.set(clojure.core.matrix.protocols.element_map_BANG_,"number",(function() {
var G__32880 = null;
var G__32880__2 = (function (m,f){
throw cljs.core.ex_info.call(null,["java.lang.Number instance is not mutable!"].join(''),cljs.core.PersistentArrayMap.EMPTY);
});
var G__32880__3 = (function (m,f,a){
throw cljs.core.ex_info.call(null,["java.lang.Number instance is not mutable!"].join(''),cljs.core.PersistentArrayMap.EMPTY);
});
var G__32880__4 = (function (m,f,a,more){
throw cljs.core.ex_info.call(null,["java.lang.Number instance is not mutable!"].join(''),cljs.core.PersistentArrayMap.EMPTY);
});
G__32880 = function(m,f,a,more){
switch(arguments.length){
case 2:
return G__32880__2.call(this,m,f);
case 3:
return G__32880__3.call(this,m,f,a);
case 4:
return G__32880__4.call(this,m,f,a,more);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__32880.cljs$core$IFn$_invoke$arity$2 = G__32880__2;
G__32880.cljs$core$IFn$_invoke$arity$3 = G__32880__3;
G__32880.cljs$core$IFn$_invoke$arity$4 = G__32880__4;
return G__32880;
})()
);

goog.object.set(clojure.core.matrix.protocols.element_reduce,"number",(function() {
var G__32881 = null;
var G__32881__2 = (function (m,f){
return m;
});
var G__32881__3 = (function (m,f,init){
return f.call(null,init,m);
});
G__32881 = function(m,f,init){
switch(arguments.length){
case 2:
return G__32881__2.call(this,m,f);
case 3:
return G__32881__3.call(this,m,f,init);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__32881.cljs$core$IFn$_invoke$arity$2 = G__32881__2;
G__32881.cljs$core$IFn$_invoke$arity$3 = G__32881__3;
return G__32881;
})()
);

goog.object.set(clojure.core.matrix.protocols.PFunctionalOperations,"object",true);

goog.object.set(clojure.core.matrix.protocols.element_seq,"object",(function (m){
var c = cljs.core.type.call(null,m);
var dims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m));
if((dims > (1))){
return cljs.core.mapcat.call(null,clojure.core.matrix.protocols.element_seq,clojure.core.matrix.protocols.get_major_slice_seq.call(null,m));
} else {
if(cljs.core.seq_QMARK_.call(null,m)){
return m;
} else {
if(((0) === dims)){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[clojure.core.matrix.protocols.get_0d.call(null,m)],null));
} else {
if(cljs.core._EQ_.call(null,Array,c)){
return m;
} else {
if(((1) === dims)){
return clojure.core.matrix.protocols.convert_to_nested_vectors.call(null,m);
} else {
if(cljs.core.not.call(null,clojure.core.matrix.protocols.is_scalar_QMARK_.call(null,m))){
return cljs.core.mapcat.call(null,clojure.core.matrix.protocols.element_seq,clojure.core.matrix.protocols.get_major_slice_seq.call(null,m));
} else {
throw cljs.core.ex_info.call(null,["Don't know how to create element-seq from: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join(''),cljs.core.PersistentArrayMap.EMPTY);

}
}
}
}
}
}
}));

goog.object.set(clojure.core.matrix.protocols.element_map,"object",(function() {
var G__32882 = null;
var G__32882__2 = (function (m,f){
return clojure.core.matrix.impl.common.construct_matrix.call(null,m,clojure.core.matrix.impl.common.mapmatrix.call(null,f,m));
});
var G__32882__3 = (function (m,f,a){
var vec__32873 = clojure.core.matrix.protocols.broadcast_same_shape.call(null,m,a);
var m__$1 = cljs.core.nth.call(null,vec__32873,(0),null);
var a__$1 = cljs.core.nth.call(null,vec__32873,(1),null);
return clojure.core.matrix.impl.common.construct_matrix.call(null,m__$1,clojure.core.matrix.impl.common.mapmatrix.call(null,f,m__$1,a__$1));
});
var G__32882__4 = (function (m,f,a,more){
var arrays = cljs.core.cons.call(null,m,cljs.core.cons.call(null,a,more));
var shapes = cljs.core.map.call(null,clojure.core.matrix.protocols.get_shape,arrays);
var sh = (function (){var or__3922__auto__ = clojure.core.matrix.protocols.common_shape.call(null,shapes);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
throw cljs.core.ex_info.call(null,["Attempt to do element map with incompatible shapes: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.mapv.call(null,clojure.core.matrix.protocols.get_shape,arrays))].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
})();
var arrays__$1 = cljs.core.map.call(null,((function (arrays,shapes,sh){
return (function (p1__32872_SHARP_){
return clojure.core.matrix.protocols.broadcast.call(null,p1__32872_SHARP_,sh);
});})(arrays,shapes,sh))
,arrays);
return clojure.core.matrix.impl.common.construct_matrix.call(null,m,cljs.core.apply.call(null,clojure.core.matrix.impl.common.mapmatrix,f,arrays__$1));
});
G__32882 = function(m,f,a,more){
switch(arguments.length){
case 2:
return G__32882__2.call(this,m,f);
case 3:
return G__32882__3.call(this,m,f,a);
case 4:
return G__32882__4.call(this,m,f,a,more);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__32882.cljs$core$IFn$_invoke$arity$2 = G__32882__2;
G__32882.cljs$core$IFn$_invoke$arity$3 = G__32882__3;
G__32882.cljs$core$IFn$_invoke$arity$4 = G__32882__4;
return G__32882;
})()
);

goog.object.set(clojure.core.matrix.protocols.element_map_BANG_,"object",(function() {
var G__32883 = null;
var G__32883__2 = (function (m,f){
return clojure.core.matrix.protocols.assign_BANG_.call(null,m,clojure.core.matrix.protocols.element_map.call(null,m,f));
});
var G__32883__3 = (function (m,f,a){
return clojure.core.matrix.protocols.assign_BANG_.call(null,m,clojure.core.matrix.protocols.element_map.call(null,m,f,a));
});
var G__32883__4 = (function (m,f,a,more){
return clojure.core.matrix.protocols.assign_BANG_.call(null,m,clojure.core.matrix.protocols.element_map.call(null,m,f,a,more));
});
G__32883 = function(m,f,a,more){
switch(arguments.length){
case 2:
return G__32883__2.call(this,m,f);
case 3:
return G__32883__3.call(this,m,f,a);
case 4:
return G__32883__4.call(this,m,f,a,more);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__32883.cljs$core$IFn$_invoke$arity$2 = G__32883__2;
G__32883.cljs$core$IFn$_invoke$arity$3 = G__32883__3;
G__32883.cljs$core$IFn$_invoke$arity$4 = G__32883__4;
return G__32883;
})()
);

goog.object.set(clojure.core.matrix.protocols.element_reduce,"object",(function() {
var G__32884 = null;
var G__32884__2 = (function (m,f){
return cljs.core.reduce.call(null,f,clojure.core.matrix.protocols.element_seq.call(null,m));
});
var G__32884__3 = (function (m,f,init){
return cljs.core.reduce.call(null,f,init,clojure.core.matrix.protocols.element_seq.call(null,m));
});
G__32884 = function(m,f,init){
switch(arguments.length){
case 2:
return G__32884__2.call(this,m,f);
case 3:
return G__32884__3.call(this,m,f,init);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__32884.cljs$core$IFn$_invoke$arity$2 = G__32884__2;
G__32884.cljs$core$IFn$_invoke$arity$3 = G__32884__3;
return G__32884;
})()
);

goog.object.set(clojure.core.matrix.protocols.PFunctionalOperations,"null",true);

goog.object.set(clojure.core.matrix.protocols.element_seq,"null",(function (m){
return cljs.core.list(null);
}));

goog.object.set(clojure.core.matrix.protocols.element_map,"null",(function() {
var G__32885 = null;
var G__32885__2 = (function (m,f){
return f.call(null,null);
});
var G__32885__3 = (function (m,f,a){
return f.call(null,null,a);
});
var G__32885__4 = (function (m,f,a,more){
return cljs.core.apply.call(null,f,null,a,more);
});
G__32885 = function(m,f,a,more){
switch(arguments.length){
case 2:
return G__32885__2.call(this,m,f);
case 3:
return G__32885__3.call(this,m,f,a);
case 4:
return G__32885__4.call(this,m,f,a,more);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__32885.cljs$core$IFn$_invoke$arity$2 = G__32885__2;
G__32885.cljs$core$IFn$_invoke$arity$3 = G__32885__3;
G__32885.cljs$core$IFn$_invoke$arity$4 = G__32885__4;
return G__32885;
})()
);

goog.object.set(clojure.core.matrix.protocols.element_map_BANG_,"null",(function() {
var G__32886 = null;
var G__32886__2 = (function (m,f){
throw cljs.core.ex_info.call(null,["Can't do element-map! on nil"].join(''),cljs.core.PersistentArrayMap.EMPTY);
});
var G__32886__3 = (function (m,f,a){
throw cljs.core.ex_info.call(null,["Can't do element-map! on nil"].join(''),cljs.core.PersistentArrayMap.EMPTY);
});
var G__32886__4 = (function (m,f,a,more){
throw cljs.core.ex_info.call(null,["Can't do element-map! on nil"].join(''),cljs.core.PersistentArrayMap.EMPTY);
});
G__32886 = function(m,f,a,more){
switch(arguments.length){
case 2:
return G__32886__2.call(this,m,f);
case 3:
return G__32886__3.call(this,m,f,a);
case 4:
return G__32886__4.call(this,m,f,a,more);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__32886.cljs$core$IFn$_invoke$arity$2 = G__32886__2;
G__32886.cljs$core$IFn$_invoke$arity$3 = G__32886__3;
G__32886.cljs$core$IFn$_invoke$arity$4 = G__32886__4;
return G__32886;
})()
);

goog.object.set(clojure.core.matrix.protocols.element_reduce,"null",(function() {
var G__32887 = null;
var G__32887__2 = (function (m,f){
return null;
});
var G__32887__3 = (function (m,f,init){
return f.call(null,init,null);
});
G__32887 = function(m,f,init){
switch(arguments.length){
case 2:
return G__32887__2.call(this,m,f);
case 3:
return G__32887__3.call(this,m,f,init);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__32887.cljs$core$IFn$_invoke$arity$2 = G__32887__2;
G__32887.cljs$core$IFn$_invoke$arity$3 = G__32887__3;
return G__32887;
})()
);

cljs.core.List.prototype.clojure$core$matrix$protocols$PFunctionalOperations$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.List.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_seq$arity$1 = (function (m){
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
clojure.core.matrix.impl.defaults.cart = (function clojure$core$matrix$impl$defaults$cart(colls){
if(cljs.core.empty_QMARK_.call(null,colls)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
var iter__4292__auto__ = (function clojure$core$matrix$impl$defaults$cart_$_iter__32888(s__32889){
return (new cljs.core.LazySeq(null,(function (){
var s__32889__$1 = s__32889;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__32889__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var x = cljs.core.first.call(null,xs__6012__auto__);
var iterys__4288__auto__ = ((function (s__32889__$1,x,xs__6012__auto__,temp__5457__auto__){
return (function clojure$core$matrix$impl$defaults$cart_$_iter__32888_$_iter__32890(s__32891){
return (new cljs.core.LazySeq(null,((function (s__32889__$1,x,xs__6012__auto__,temp__5457__auto__){
return (function (){
var s__32891__$1 = s__32891;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__32891__$1);
if(temp__5457__auto____$1){
var s__32891__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32891__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__32891__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__32893 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__32892 = (0);
while(true){
if((i__32892 < size__4291__auto__)){
var more = cljs.core._nth.call(null,c__4290__auto__,i__32892);
cljs.core.chunk_append.call(null,b__32893,cljs.core.cons.call(null,x,more));

var G__32894 = (i__32892 + (1));
i__32892 = G__32894;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32893),clojure$core$matrix$impl$defaults$cart_$_iter__32888_$_iter__32890.call(null,cljs.core.chunk_rest.call(null,s__32891__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32893),null);
}
} else {
var more = cljs.core.first.call(null,s__32891__$2);
return cljs.core.cons.call(null,cljs.core.cons.call(null,x,more),clojure$core$matrix$impl$defaults$cart_$_iter__32888_$_iter__32890.call(null,cljs.core.rest.call(null,s__32891__$2)));
}
} else {
return null;
}
break;
}
});})(s__32889__$1,x,xs__6012__auto__,temp__5457__auto__))
,null,null));
});})(s__32889__$1,x,xs__6012__auto__,temp__5457__auto__))
;
var fs__4289__auto__ = cljs.core.seq.call(null,iterys__4288__auto__.call(null,clojure.core.matrix.impl.defaults.cart.call(null,cljs.core.rest.call(null,colls))));
if(fs__4289__auto__){
return cljs.core.concat.call(null,fs__4289__auto__,clojure$core$matrix$impl$defaults$cart_$_iter__32888.call(null,cljs.core.rest.call(null,s__32889__$1)));
} else {
var G__32895 = cljs.core.rest.call(null,s__32889__$1);
s__32889__$1 = G__32895;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,cljs.core.first.call(null,colls));
}
});
clojure.core.matrix.impl.defaults.indices_seq = (function clojure$core$matrix$impl$defaults$indices_seq(m){
return clojure.core.matrix.impl.defaults.cart.call(null,cljs.core.map.call(null,cljs.core.range,clojure.core.matrix.protocols.get_shape.call(null,m)));
});
goog.object.set(clojure.core.matrix.protocols.PMapIndexed,"number",true);

goog.object.set(clojure.core.matrix.protocols.element_map_indexed,"number",(function() {
var G__32907 = null;
var G__32907__2 = (function (m,f){
return f.call(null,cljs.core.PersistentVector.EMPTY,m);
});
var G__32907__3 = (function (m,f,a){
return clojure.core.matrix.protocols.element_map.call(null,a,(function (p1__32896_SHARP_){
return f.call(null,cljs.core.PersistentVector.EMPTY,m,p1__32896_SHARP_);
}));
});
var G__32907__4 = (function (m,f,a,more){
var temp__5455__auto__ = cljs.core.next.call(null,more);
if(temp__5455__auto__){
var moremore = temp__5455__auto__;
return clojure.core.matrix.protocols.element_map.call(null,a,((function (moremore,temp__5455__auto__){
return (function() { 
var G__32908__delegate = function (p1__32897_SHARP_,p2__32898_SHARP_,rest__32899_SHARP_){
return cljs.core.apply.call(null,f,cljs.core.PersistentVector.EMPTY,m,p1__32897_SHARP_,p2__32898_SHARP_,rest__32899_SHARP_);
};
var G__32908 = function (p1__32897_SHARP_,p2__32898_SHARP_,var_args){
var rest__32899_SHARP_ = null;
if (arguments.length > 2) {
var G__32909__i = 0, G__32909__a = new Array(arguments.length -  2);
while (G__32909__i < G__32909__a.length) {G__32909__a[G__32909__i] = arguments[G__32909__i + 2]; ++G__32909__i;}
  rest__32899_SHARP_ = new cljs.core.IndexedSeq(G__32909__a,0,null);
} 
return G__32908__delegate.call(this,p1__32897_SHARP_,p2__32898_SHARP_,rest__32899_SHARP_);};
G__32908.cljs$lang$maxFixedArity = 2;
G__32908.cljs$lang$applyTo = (function (arglist__32910){
var p1__32897_SHARP_ = cljs.core.first(arglist__32910);
arglist__32910 = cljs.core.next(arglist__32910);
var p2__32898_SHARP_ = cljs.core.first(arglist__32910);
var rest__32899_SHARP_ = cljs.core.rest(arglist__32910);
return G__32908__delegate(p1__32897_SHARP_,p2__32898_SHARP_,rest__32899_SHARP_);
});
G__32908.cljs$core$IFn$_invoke$arity$variadic = G__32908__delegate;
return G__32908;
})()
;})(moremore,temp__5455__auto__))
,cljs.core.first.call(null,more),moremore);
} else {
return clojure.core.matrix.protocols.element_map.call(null,a,((function (temp__5455__auto__){
return (function (p1__32900_SHARP_,p2__32901_SHARP_){
return f.call(null,cljs.core.PersistentVector.EMPTY,m,p1__32900_SHARP_,p2__32901_SHARP_);
});})(temp__5455__auto__))
,cljs.core.first.call(null,more));
}
});
G__32907 = function(m,f,a,more){
switch(arguments.length){
case 2:
return G__32907__2.call(this,m,f);
case 3:
return G__32907__3.call(this,m,f,a);
case 4:
return G__32907__4.call(this,m,f,a,more);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__32907.cljs$core$IFn$_invoke$arity$2 = G__32907__2;
G__32907.cljs$core$IFn$_invoke$arity$3 = G__32907__3;
G__32907.cljs$core$IFn$_invoke$arity$4 = G__32907__4;
return G__32907;
})()
);

goog.object.set(clojure.core.matrix.protocols.element_map_indexed_BANG_,"number",(function() {
var G__32911 = null;
var G__32911__2 = (function (m,f){
throw cljs.core.ex_info.call(null,["java.lang.Number instance is not mutable!"].join(''),cljs.core.PersistentArrayMap.EMPTY);
});
var G__32911__3 = (function (m,f,a){
throw cljs.core.ex_info.call(null,["java.lang.Number instance is not mutable!"].join(''),cljs.core.PersistentArrayMap.EMPTY);
});
var G__32911__4 = (function (m,f,a,more){
throw cljs.core.ex_info.call(null,["java.lang.Number instance is not mutable!"].join(''),cljs.core.PersistentArrayMap.EMPTY);
});
G__32911 = function(m,f,a,more){
switch(arguments.length){
case 2:
return G__32911__2.call(this,m,f);
case 3:
return G__32911__3.call(this,m,f,a);
case 4:
return G__32911__4.call(this,m,f,a,more);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__32911.cljs$core$IFn$_invoke$arity$2 = G__32911__2;
G__32911.cljs$core$IFn$_invoke$arity$3 = G__32911__3;
G__32911.cljs$core$IFn$_invoke$arity$4 = G__32911__4;
return G__32911;
})()
);

goog.object.set(clojure.core.matrix.protocols.PMapIndexed,"object",true);

goog.object.set(clojure.core.matrix.protocols.element_map_indexed,"object",(function() {
var G__32912 = null;
var G__32912__2 = (function (m,f){
if(((0) === cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m)))){
return f.call(null,cljs.core.PersistentVector.EMPTY,clojure.core.matrix.protocols.get_0d.call(null,m));
} else {
var s = cljs.core.map.call(null,f,clojure.core.matrix.impl.defaults.indices_seq.call(null,m),clojure.core.matrix.protocols.element_seq.call(null,m));
return clojure.core.matrix.protocols.reshape.call(null,clojure.core.matrix.protocols.coerce_param.call(null,m,s),clojure.core.matrix.protocols.get_shape.call(null,m));
}
});
var G__32912__3 = (function (m,f,a){
if(((0) === cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m)))){
var v = clojure.core.matrix.protocols.get_0d.call(null,m);
return clojure.core.matrix.protocols.element_map_indexed.call(null,a,((function (v){
return (function (p1__32902_SHARP_,p2__32903_SHARP_){
return f.call(null,p1__32902_SHARP_,v,p2__32903_SHARP_);
});})(v))
);
} else {
var vec__32904 = clojure.core.matrix.protocols.broadcast_compatible.call(null,m,a);
var m__$1 = cljs.core.nth.call(null,vec__32904,(0),null);
var a__$1 = cljs.core.nth.call(null,vec__32904,(1),null);
var s = cljs.core.map.call(null,f,clojure.core.matrix.impl.defaults.indices_seq.call(null,m__$1),clojure.core.matrix.protocols.element_seq.call(null,m__$1),clojure.core.matrix.protocols.element_seq.call(null,a__$1));
return clojure.core.matrix.protocols.reshape.call(null,clojure.core.matrix.protocols.coerce_param.call(null,m__$1,s),clojure.core.matrix.protocols.get_shape.call(null,m__$1));
}
});
var G__32912__4 = (function (m,f,a,more){
var s = cljs.core.map.call(null,f,clojure.core.matrix.protocols.element_seq.call(null,m),clojure.core.matrix.protocols.element_seq.call(null,a));
var s__$1 = cljs.core.apply.call(null,cljs.core.map,f,cljs.core.list_STAR_.call(null,clojure.core.matrix.impl.defaults.indices_seq.call(null,m),clojure.core.matrix.protocols.element_seq.call(null,m),clojure.core.matrix.protocols.element_seq.call(null,a),cljs.core.map.call(null,clojure.core.matrix.protocols.element_seq,more)));
return clojure.core.matrix.protocols.reshape.call(null,clojure.core.matrix.protocols.coerce_param.call(null,m,s__$1),clojure.core.matrix.protocols.get_shape.call(null,m));
});
G__32912 = function(m,f,a,more){
switch(arguments.length){
case 2:
return G__32912__2.call(this,m,f);
case 3:
return G__32912__3.call(this,m,f,a);
case 4:
return G__32912__4.call(this,m,f,a,more);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__32912.cljs$core$IFn$_invoke$arity$2 = G__32912__2;
G__32912.cljs$core$IFn$_invoke$arity$3 = G__32912__3;
G__32912.cljs$core$IFn$_invoke$arity$4 = G__32912__4;
return G__32912;
})()
);

goog.object.set(clojure.core.matrix.protocols.element_map_indexed_BANG_,"object",(function() {
var G__32913 = null;
var G__32913__2 = (function (m,f){
return clojure.core.matrix.protocols.assign_BANG_.call(null,m,clojure.core.matrix.protocols.element_map_indexed.call(null,m,f));
});
var G__32913__3 = (function (m,f,a){
return clojure.core.matrix.protocols.assign_BANG_.call(null,m,clojure.core.matrix.protocols.element_map_indexed.call(null,m,f,a));
});
var G__32913__4 = (function (m,f,a,more){
return clojure.core.matrix.protocols.assign_BANG_.call(null,m,clojure.core.matrix.protocols.element_map_indexed.call(null,m,f,a,more));
});
G__32913 = function(m,f,a,more){
switch(arguments.length){
case 2:
return G__32913__2.call(this,m,f);
case 3:
return G__32913__3.call(this,m,f,a);
case 4:
return G__32913__4.call(this,m,f,a,more);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__32913.cljs$core$IFn$_invoke$arity$2 = G__32913__2;
G__32913.cljs$core$IFn$_invoke$arity$3 = G__32913__3;
G__32913.cljs$core$IFn$_invoke$arity$4 = G__32913__4;
return G__32913;
})()
);

goog.object.set(clojure.core.matrix.protocols.PMapIndexed,"null",true);

goog.object.set(clojure.core.matrix.protocols.element_map_indexed,"null",(function() {
var G__32914 = null;
var G__32914__2 = (function (m,f){
return f.call(null,cljs.core.PersistentVector.EMPTY,null);
});
var G__32914__3 = (function (m,f,a){
return f.call(null,cljs.core.PersistentVector.EMPTY,null,a);
});
var G__32914__4 = (function (m,f,a,more){
return cljs.core.apply.call(null,f,cljs.core.PersistentVector.EMPTY,null,a,more);
});
G__32914 = function(m,f,a,more){
switch(arguments.length){
case 2:
return G__32914__2.call(this,m,f);
case 3:
return G__32914__3.call(this,m,f,a);
case 4:
return G__32914__4.call(this,m,f,a,more);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__32914.cljs$core$IFn$_invoke$arity$2 = G__32914__2;
G__32914.cljs$core$IFn$_invoke$arity$3 = G__32914__3;
G__32914.cljs$core$IFn$_invoke$arity$4 = G__32914__4;
return G__32914;
})()
);

goog.object.set(clojure.core.matrix.protocols.element_map_indexed_BANG_,"null",(function() {
var G__32915 = null;
var G__32915__2 = (function (m,f){
throw cljs.core.ex_info.call(null,["Can't do element-map-indexed! on nil"].join(''),cljs.core.PersistentArrayMap.EMPTY);
});
var G__32915__3 = (function (m,f,a){
throw cljs.core.ex_info.call(null,["Can't do element-map-indexed! on nil"].join(''),cljs.core.PersistentArrayMap.EMPTY);
});
var G__32915__4 = (function (m,f,a,more){
throw cljs.core.ex_info.call(null,["Can't do element-map-indexed! on nil"].join(''),cljs.core.PersistentArrayMap.EMPTY);
});
G__32915 = function(m,f,a,more){
switch(arguments.length){
case 2:
return G__32915__2.call(this,m,f);
case 3:
return G__32915__3.call(this,m,f,a);
case 4:
return G__32915__4.call(this,m,f,a,more);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__32915.cljs$core$IFn$_invoke$arity$2 = G__32915__2;
G__32915.cljs$core$IFn$_invoke$arity$3 = G__32915__3;
G__32915.cljs$core$IFn$_invoke$arity$4 = G__32915__4;
return G__32915;
})()
);
goog.object.set(clojure.core.matrix.protocols.PElementCount,"null",true);

goog.object.set(clojure.core.matrix.protocols.element_count,"null",(function (m){
return (1);
}));

goog.object.set(clojure.core.matrix.protocols.PElementCount,"number",true);

goog.object.set(clojure.core.matrix.protocols.element_count,"number",(function (m){
return (1);
}));

goog.object.set(clojure.core.matrix.protocols.PElementCount,"object",true);

goog.object.set(clojure.core.matrix.protocols.element_count,"object",(function (m){
return clojure.core.matrix.impl.defaults.calc_element_count.call(null,m);
}));
goog.object.set(clojure.core.matrix.protocols.PValidateShape,"null",true);

goog.object.set(clojure.core.matrix.protocols.validate_shape,"null",(function() {
var G__32917 = null;
var G__32917__1 = (function (m){
return null;
});
var G__32917__2 = (function (m,shape){
if((shape == null)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Shape validation failed, was scalar but expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shape)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});
G__32917 = function(m,shape){
switch(arguments.length){
case 1:
return G__32917__1.call(this,m);
case 2:
return G__32917__2.call(this,m,shape);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__32917.cljs$core$IFn$_invoke$arity$1 = G__32917__1;
G__32917.cljs$core$IFn$_invoke$arity$2 = G__32917__2;
return G__32917;
})()
);

goog.object.set(clojure.core.matrix.protocols.PValidateShape,"object",true);

goog.object.set(clojure.core.matrix.protocols.validate_shape,"object",(function() {
var G__32918 = null;
var G__32918__1 = (function (m){
return clojure.core.matrix.protocols.validate_shape.call(null,m,clojure.core.matrix.protocols.get_shape.call(null,m));
});
var G__32918__2 = (function (m,expected_shape){
if(((0) === cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m)))){
var sh = clojure.core.matrix.protocols.get_shape.call(null,m);
if((sh == null)){
if((expected_shape == null)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Shape validation failed, was scalar but expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expected_shape)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
} else {
if(cljs.core._EQ_.call(null,cljs.core.vec.call(null,sh),cljs.core.vec.call(null,expected_shape))){
return sh;
} else {
throw cljs.core.ex_info.call(null,["Shape validation failed, was ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sh)," but expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expected_shape)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
}
} else {
var sh = clojure.core.matrix.protocols.get_shape.call(null,m);
var ss = clojure.core.matrix.protocols.get_major_slice_seq.call(null,m);
var efirst = (function (){var or__3922__auto__ = cljs.core.first.call(null,expected_shape);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
throw cljs.core.ex_info.call(null,["Shape validation failed, was ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sh)," but expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expected_shape)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
})();
var enext = cljs.core.next.call(null,expected_shape);
var shapes = cljs.core.mapv.call(null,((function (sh,ss,efirst,enext){
return (function (p1__32916_SHARP_){
return clojure.core.matrix.protocols.validate_shape.call(null,p1__32916_SHARP_,enext);
});})(sh,ss,efirst,enext))
,ss);
if(cljs.core.truth_(cljs.core.apply.call(null,cljs.core._EQ_,enext,shapes))){
return cljs.core.vec.call(null,cljs.core.cons.call(null,clojure.core.matrix.protocols.dimension_count.call(null,m,(0)),cljs.core.first.call(null,shapes)));
} else {
throw cljs.core.ex_info.call(null,["Inconsistent shapes for sub arrays in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,m))].join(''),cljs.core.PersistentArrayMap.EMPTY);
}

}
});
G__32918 = function(m,expected_shape){
switch(arguments.length){
case 1:
return G__32918__1.call(this,m);
case 2:
return G__32918__2.call(this,m,expected_shape);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__32918.cljs$core$IFn$_invoke$arity$1 = G__32918__1;
G__32918.cljs$core$IFn$_invoke$arity$2 = G__32918__2;
return G__32918;
})()
);
goog.object.set(clojure.core.matrix.protocols.PMatrixSlices,"object",true);

goog.object.set(clojure.core.matrix.protocols.get_row,"object",(function (m,i){
if((Array === m.constructor)){
return cljs.core.nth.call(null,m,i);
} else {
return clojure.core.matrix.protocols.get_major_slice.call(null,m,i);
}
}));

goog.object.set(clojure.core.matrix.protocols.get_column,"object",(function (m,i){
return clojure.core.matrix.protocols.get_slice.call(null,m,(1),i);
}));

goog.object.set(clojure.core.matrix.protocols.get_major_slice,"object",(function (m,i){
if((Array === m.constructor)){
return cljs.core.nth.call(null,m,i);
} else {
if(((1) === cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m)))){
return clojure.core.matrix.protocols.get_1d.call(null,m,i);
} else {
return clojure.core.matrix.impl.wrappers.wrap_slice.call(null,m,i);

}
}
}));

goog.object.set(clojure.core.matrix.protocols.get_slice,"object",(function (m,dimension,i){
var ldimension = cljs.core.long$.call(null,dimension);
if(((0) === ldimension)){
return clojure.core.matrix.protocols.get_major_slice.call(null,m,i);
} else {
return clojure.core.matrix.protocols.get_slice.call(null,clojure.core.matrix.protocols.convert_to_nested_vectors.call(null,m),dimension,i);

}
}));
goog.object.set(clojure.core.matrix.protocols.PBLASBase,"object",true);

goog.object.set(clojure.core.matrix.protocols.gemm_BANG_,"object",(function (c,trans_a_QMARK_,trans_b_QMARK_,alpha,a,b,beta){
var a__$1 = (cljs.core.truth_(trans_a_QMARK_)?clojure.core.matrix.protocols.transpose.call(null,a):a);
var b__$1 = (cljs.core.truth_(trans_b_QMARK_)?clojure.core.matrix.protocols.transpose.call(null,b):b);
if(!((1.0 === beta))){
clojure.core.matrix.protocols.scale_BANG_.call(null,c,beta);
} else {
}

return clojure.core.matrix.protocols.add_inner_product_BANG_.call(null,c,a__$1,b__$1,alpha);
}));

goog.object.set(clojure.core.matrix.protocols.gemv_BANG_,"object",(function (c,trans_a_QMARK_,alpha,a,b,beta){
var a__$1 = (cljs.core.truth_(trans_a_QMARK_)?clojure.core.matrix.protocols.transpose.call(null,a):a);
if(!((1.0 === beta))){
clojure.core.matrix.protocols.scale_BANG_.call(null,c,beta);
} else {
}

return clojure.core.matrix.protocols.add_inner_product_BANG_.call(null,c,a__$1,b,alpha);
}));
goog.object.set(clojure.core.matrix.protocols.PMatrixColumns,"object",true);

goog.object.set(clojure.core.matrix.protocols.get_columns,"object",(function (m){
var G__32919 = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m));
switch (G__32919) {
case (0):
throw cljs.core.ex_info.call(null,["Can't get columns of a 0-dimensional object"].join(''),cljs.core.PersistentArrayMap.EMPTY);

break;
case (1):
throw cljs.core.ex_info.call(null,["Can't get columns of a 1-dimensional object"].join(''),cljs.core.PersistentArrayMap.EMPTY);

break;
case (2):
return cljs.core.vec.call(null,clojure.core.matrix.protocols.get_slice_seq.call(null,m,(1)));

break;
default:
return cljs.core.vec.call(null,cljs.core.mapcat.call(null,clojure.core.matrix.protocols.get_columns,clojure.core.matrix.protocols.get_major_slice_seq.call(null,m)));

}
}));
goog.object.set(clojure.core.matrix.protocols.PMatrixRows,"object",true);

goog.object.set(clojure.core.matrix.protocols.get_rows,"object",(function (m){
var G__32921 = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m));
switch (G__32921) {
case (0):
throw cljs.core.ex_info.call(null,["Can't get rows of a 0-dimensional object"].join(''),cljs.core.PersistentArrayMap.EMPTY);

break;
case (1):
throw cljs.core.ex_info.call(null,["Can't get rows of a 1-dimensional object"].join(''),cljs.core.PersistentArrayMap.EMPTY);

break;
case (2):
return cljs.core.vec.call(null,clojure.core.matrix.protocols.get_major_slice_seq.call(null,m));

break;
default:
return cljs.core.vec.call(null,cljs.core.mapcat.call(null,clojure.core.matrix.protocols.get_rows,clojure.core.matrix.protocols.get_major_slice_seq.call(null,m)));

}
}));
goog.object.set(clojure.core.matrix.protocols.PSliceView,"object",true);

goog.object.set(clojure.core.matrix.protocols.get_major_slice_view,"object",(function (m,i){
if((Array === m.constructor)){
var ss = cljs.core.nth.call(null,m,i);
if(cljs.core.not.call(null,clojure.core.matrix.protocols.is_scalar_QMARK_.call(null,ss))){
return ss;
} else {
return clojure.core.matrix.impl.wrappers.wrap_slice.call(null,m,i);
}
} else {
return clojure.core.matrix.impl.wrappers.wrap_slice.call(null,m,i);

}
}));
goog.object.set(clojure.core.matrix.protocols.PSliceView2,"object",true);

goog.object.set(clojure.core.matrix.protocols.get_slice_view,"object",(function (m,dim,i){
if((dim === (0))){
return clojure.core.matrix.protocols.get_major_slice_view.call(null,m,i);
} else {
return clojure.core.matrix.protocols.get_slice_view.call(null,clojure.core.matrix.impl.wrappers.wrap_nd.call(null,m),dim,i);
}
}));
goog.object.set(clojure.core.matrix.protocols.PSliceSeq,"object",true);

goog.object.set(clojure.core.matrix.protocols.get_major_slice_seq,"object",(function (m){
var dims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m));
if((dims <= (0))){
throw cljs.core.ex_info.call(null,["Can't get slices on [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dims),"]-dimensional object"].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
if(cljs.core._EQ_.call(null,Array,cljs.core.type.call(null,m))){
return cljs.core.seq.call(null,m);
} else {
if((dims === (1))){
var iter__4292__auto__ = ((function (dims){
return (function clojure$core$matrix$impl$defaults$iter__32924(s__32925){
return (new cljs.core.LazySeq(null,((function (dims){
return (function (){
var s__32925__$1 = s__32925;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__32925__$1);
if(temp__5457__auto__){
var s__32925__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32925__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__32925__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__32927 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__32926 = (0);
while(true){
if((i__32926 < size__4291__auto__)){
var i = cljs.core._nth.call(null,c__4290__auto__,i__32926);
cljs.core.chunk_append.call(null,b__32927,clojure.core.matrix.protocols.get_1d.call(null,m,i));

var G__32928 = (i__32926 + (1));
i__32926 = G__32928;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32927),clojure$core$matrix$impl$defaults$iter__32924.call(null,cljs.core.chunk_rest.call(null,s__32925__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32927),null);
}
} else {
var i = cljs.core.first.call(null,s__32925__$2);
return cljs.core.cons.call(null,clojure.core.matrix.protocols.get_1d.call(null,m,i),clojure$core$matrix$impl$defaults$iter__32924.call(null,cljs.core.rest.call(null,s__32925__$2)));
}
} else {
return null;
}
break;
}
});})(dims))
,null,null));
});})(dims))
;
return iter__4292__auto__.call(null,cljs.core.range.call(null,clojure.core.matrix.protocols.dimension_count.call(null,m,(0))));
} else {
return cljs.core.map.call(null,((function (dims){
return (function (p1__32923_SHARP_){
return clojure.core.matrix.protocols.get_major_slice.call(null,m,p1__32923_SHARP_);
});})(dims))
,cljs.core.range.call(null,clojure.core.matrix.protocols.dimension_count.call(null,m,(0))));

}
}
}
}));
goog.object.set(clojure.core.matrix.protocols.PSliceSeq2,"object",true);

goog.object.set(clojure.core.matrix.protocols.get_slice_seq,"object",(function (m,dimension){
var ldimension = cljs.core.long$.call(null,dimension);
if((ldimension === (0))){
return clojure.core.matrix.protocols.get_major_slice_seq.call(null,m);
} else {
if((ldimension < (0))){
throw cljs.core.ex_info.call(null,["Can't get slices of a negative dimension: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dimension)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
return cljs.core.map.call(null,((function (ldimension){
return (function (p1__32929_SHARP_){
return clojure.core.matrix.protocols.get_slice.call(null,m,dimension,p1__32929_SHARP_);
});})(ldimension))
,cljs.core.range.call(null,clojure.core.matrix.protocols.dimension_count.call(null,m,dimension)));

}
}
}));
goog.object.set(clojure.core.matrix.protocols.PSliceViewSeq,"object",true);

goog.object.set(clojure.core.matrix.protocols.get_major_slice_view_seq,"object",(function (m){
var n = clojure.core.matrix.protocols.dimension_count.call(null,m,(0));
var iter__4292__auto__ = ((function (n){
return (function clojure$core$matrix$impl$defaults$iter__32930(s__32931){
return (new cljs.core.LazySeq(null,((function (n){
return (function (){
var s__32931__$1 = s__32931;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__32931__$1);
if(temp__5457__auto__){
var s__32931__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32931__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__32931__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__32933 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__32932 = (0);
while(true){
if((i__32932 < size__4291__auto__)){
var i = cljs.core._nth.call(null,c__4290__auto__,i__32932);
cljs.core.chunk_append.call(null,b__32933,clojure.core.matrix.protocols.get_major_slice_view.call(null,m,i));

var G__32934 = (i__32932 + (1));
i__32932 = G__32934;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32933),clojure$core$matrix$impl$defaults$iter__32930.call(null,cljs.core.chunk_rest.call(null,s__32931__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32933),null);
}
} else {
var i = cljs.core.first.call(null,s__32931__$2);
return cljs.core.cons.call(null,clojure.core.matrix.protocols.get_major_slice_view.call(null,m,i),clojure$core$matrix$impl$defaults$iter__32930.call(null,cljs.core.rest.call(null,s__32931__$2)));
}
} else {
return null;
}
break;
}
});})(n))
,null,null));
});})(n))
;
return iter__4292__auto__.call(null,cljs.core.range.call(null,n));
}));
goog.object.set(clojure.core.matrix.protocols.PSliceJoin,"null",true);

goog.object.set(clojure.core.matrix.protocols.join,"null",(function (m,a){
throw cljs.core.ex_info.call(null,["Can't join an array to a nil value!"].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.PSliceJoin,"number",true);

goog.object.set(clojure.core.matrix.protocols.join,"number",(function (m,a){
throw cljs.core.ex_info.call(null,["Can't join an array to a scalar number!"].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.PSliceJoin,"object",true);

goog.object.set(clojure.core.matrix.protocols.join,"object",(function (m,a){
var dims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m));
var adims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,a));
if((dims === (0))){
throw cljs.core.ex_info.call(null,["Can't join to a 0-dimensional array!"].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
if((dims === adims)){
return clojure.core.matrix.protocols.coerce_param.call(null,m,cljs.core.concat.call(null,clojure.core.matrix.protocols.get_major_slice_seq.call(null,m),clojure.core.matrix.protocols.get_major_slice_seq.call(null,a)));
} else {
if((dims === (adims + (1)))){
return clojure.core.matrix.protocols.coerce_param.call(null,m,cljs.core.concat.call(null,clojure.core.matrix.protocols.get_major_slice_seq.call(null,m),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [a], null)));
} else {
throw cljs.core.ex_info.call(null,["Joining with array of incompatible size"].join(''),cljs.core.PersistentArrayMap.EMPTY);

}
}
}
}));
goog.object.set(clojure.core.matrix.protocols.PSliceJoinAlong,"null",true);

goog.object.set(clojure.core.matrix.protocols.join_along,"null",(function (m,a,dim){
throw cljs.core.ex_info.call(null,["Can't join an array to a nil value!"].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.PSliceJoinAlong,"number",true);

goog.object.set(clojure.core.matrix.protocols.join_along,"number",(function (m,a,dim){
throw cljs.core.ex_info.call(null,["Can't join an array to a scalar number!"].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.PSliceJoinAlong,"object",true);

goog.object.set(clojure.core.matrix.protocols.join_along,"object",(function (m,a,dim){
return clojure.core.matrix.protocols.coerce_param.call(null,m,(function (){var dim__$1 = cljs.core.long$.call(null,dim);
if((dim__$1 === (0))){
return clojure.core.matrix.protocols.join.call(null,m,a);
} else {
var ddim = (dim__$1 - (1));
return cljs.core.mapv.call(null,((function (ddim,dim__$1){
return (function (p1__32935_SHARP_,p2__32936_SHARP_){
return clojure.core.matrix.protocols.join_along.call(null,p1__32935_SHARP_,p2__32936_SHARP_,ddim);
});})(ddim,dim__$1))
,clojure.core.matrix.protocols.get_major_slice_seq.call(null,m),clojure.core.matrix.protocols.get_major_slice_seq.call(null,a));

}
})());
}));
goog.object.set(clojure.core.matrix.protocols.PSubVector,"null",true);

goog.object.set(clojure.core.matrix.protocols.subvector,"null",(function (m,start,length){
throw cljs.core.ex_info.call(null,["Can't take subvector of nil"].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.PSubVector,"number",true);

goog.object.set(clojure.core.matrix.protocols.subvector,"number",(function (m,start,length){
throw cljs.core.ex_info.call(null,["Can't take subvector of a scalar number"].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.PSubVector,"object",true);

goog.object.set(clojure.core.matrix.protocols.subvector,"object",(function (m,start,length){
return clojure.core.matrix.protocols.subvector.call(null,clojure.core.matrix.impl.wrappers.wrap_nd.call(null,m),start,length);
}));
goog.object.set(clojure.core.matrix.protocols.PSubMatrix,"null",true);

goog.object.set(clojure.core.matrix.protocols.submatrix,"null",(function (m,index_ranges){
if(cljs.core.seq.call(null,index_ranges)){
throw cljs.core.ex_info.call(null,["Can't take partial submatrix of nil"].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
return m;
}
}));

goog.object.set(clojure.core.matrix.protocols.PSubMatrix,"number",true);

goog.object.set(clojure.core.matrix.protocols.submatrix,"number",(function (m,index_ranges){
if(cljs.core.seq.call(null,index_ranges)){
throw cljs.core.ex_info.call(null,["Can't take partial submatrix of a scalar number"].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
return m;
}
}));

goog.object.set(clojure.core.matrix.protocols.PSubMatrix,"object",true);

goog.object.set(clojure.core.matrix.protocols.submatrix,"object",(function (m,index_ranges){
return clojure.core.matrix.impl.wrappers.wrap_submatrix.call(null,m,index_ranges);
}));
goog.object.set(clojure.core.matrix.protocols.PBroadcast,"null",true);

goog.object.set(clojure.core.matrix.protocols.broadcast,"null",(function (m,new_shape){
return clojure.core.matrix.impl.wrappers.wrap_broadcast.call(null,m,new_shape);
}));

goog.object.set(clojure.core.matrix.protocols.PBroadcast,"number",true);

goog.object.set(clojure.core.matrix.protocols.broadcast,"number",(function (m,new_shape){
return clojure.core.matrix.impl.wrappers.wrap_broadcast.call(null,m,new_shape);
}));

goog.object.set(clojure.core.matrix.protocols.PBroadcast,"object",true);

goog.object.set(clojure.core.matrix.protocols.broadcast,"object",(function (m,new_shape){
var nshape = new_shape;
var mshape = clojure.core.matrix.protocols.get_shape.call(null,m);
var mdims = cljs.core.count.call(null,mshape);
var ndims = cljs.core.count.call(null,nshape);
if(cljs.core.truth_((function (){var and__3911__auto__ = (mdims === ndims);
if(and__3911__auto__){
return clojure.core.matrix.utils.same_shape_object_QMARK_.call(null,nshape,mshape);
} else {
return and__3911__auto__;
}
})())){
return m;
} else {
return clojure.core.matrix.impl.wrappers.wrap_broadcast.call(null,m,new_shape);

}
}));
goog.object.set(clojure.core.matrix.protocols.PBroadcastLike,"null",true);

goog.object.set(clojure.core.matrix.protocols.broadcast_like,"null",(function (m,a){
return clojure.core.matrix.impl.wrappers.wrap_broadcast.call(null,a,clojure.core.matrix.protocols.get_shape.call(null,m));
}));

goog.object.set(clojure.core.matrix.protocols.PBroadcastLike,"object",true);

goog.object.set(clojure.core.matrix.protocols.broadcast_like,"object",(function (m,a){
var sm = clojure.core.matrix.protocols.get_shape.call(null,m);
var sa = clojure.core.matrix.protocols.get_shape.call(null,a);
if(cljs.core.truth_(clojure.core.matrix.utils.same_shape_object_QMARK_.call(null,sm,sa))){
return a;
} else {
return clojure.core.matrix.protocols.broadcast.call(null,a,sm);
}
}));
goog.object.set(clojure.core.matrix.protocols.PBroadcastCoerce,"null",true);

goog.object.set(clojure.core.matrix.protocols.broadcast_coerce,"null",(function (m,a){
return clojure.core.matrix.protocols.coerce_param.call(null,m,clojure.core.matrix.protocols.broadcast_like.call(null,m,a));
}));

goog.object.set(clojure.core.matrix.protocols.PBroadcastCoerce,"object",true);

goog.object.set(clojure.core.matrix.protocols.broadcast_coerce,"object",(function (m,a){
return clojure.core.matrix.protocols.coerce_param.call(null,m,clojure.core.matrix.protocols.broadcast_like.call(null,m,a));
}));
goog.object.set(clojure.core.matrix.protocols.PPack,"null",true);

goog.object.set(clojure.core.matrix.protocols.pack,"null",(function (m){
return null;
}));

goog.object.set(clojure.core.matrix.protocols.PPack,"object",true);

goog.object.set(clojure.core.matrix.protocols.pack,"object",(function (m){
return m;
}));
goog.object.set(clojure.core.matrix.protocols.PConversion,"null",true);

goog.object.set(clojure.core.matrix.protocols.convert_to_nested_vectors,"null",(function (m){
return null;
}));

goog.object.set(clojure.core.matrix.protocols.PConversion,"number",true);

goog.object.set(clojure.core.matrix.protocols.convert_to_nested_vectors,"number",(function (m){
return m;
}));

goog.object.set(clojure.core.matrix.protocols.PConversion,"object",true);

goog.object.set(clojure.core.matrix.protocols.convert_to_nested_vectors,"object",(function (m){
var dims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m));
if((dims === (0))){
return clojure.core.matrix.protocols.get_0d.call(null,m);
} else {
if(((1) === dims)){
if(((cljs.core.seq_QMARK_.call(null,m)) || (cljs.core.sequential_QMARK_.call(null,m)))){
return cljs.core.mapv.call(null,clojure.core.matrix.protocols.get_0d,m);
} else {
var n = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimension_count.call(null,m,(0)));
var i = (0);
var res = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < n)){
var G__32937 = (i + (1));
var G__32938 = cljs.core.conj.call(null,res,clojure.core.matrix.protocols.get_1d.call(null,m,i));
i = G__32937;
res = G__32938;
continue;
} else {
return res;
}
break;
}
}
} else {
if(cljs.core.sequential_QMARK_.call(null,m)){
return cljs.core.mapv.call(null,clojure.core.matrix.protocols.convert_to_nested_vectors,m);
} else {
if(cljs.core.not.call(null,clojure.core.matrix.protocols.is_scalar_QMARK_.call(null,m))){
return cljs.core.mapv.call(null,clojure.core.matrix.protocols.convert_to_nested_vectors,clojure.core.matrix.protocols.get_major_slice_seq.call(null,m));
} else {
if(cljs.core.seq_QMARK_.call(null,m)){
return cljs.core.mapv.call(null,clojure.core.matrix.protocols.convert_to_nested_vectors,m);
} else {
throw cljs.core.ex_info.call(null,["Can't work out how to convert to nested vectors: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,m))," = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join(''),cljs.core.PersistentArrayMap.EMPTY);

}
}
}
}
}
}));
goog.object.set(clojure.core.matrix.protocols.PRowColMatrix,"null",true);

goog.object.set(clojure.core.matrix.protocols.column_matrix,"null",(function (m,data){
throw cljs.core.ex_info.call(null,["Can't create a column matrix from nil"].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.row_matrix,"null",(function (m,data){
throw cljs.core.ex_info.call(null,["Can't create a column matrix from nil"].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.PRowColMatrix,"object",true);

goog.object.set(clojure.core.matrix.protocols.column_matrix,"object",(function (m,data){
if(((1) === cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,data)))){
return clojure.core.matrix.protocols.coerce_param.call(null,m,cljs.core.mapv.call(null,cljs.core.vector,clojure.core.matrix.protocols.element_seq.call(null,data)));
} else {
throw cljs.core.ex_info.call(null,["Can't create a column matrix: input must be 1D vector"].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
}));

goog.object.set(clojure.core.matrix.protocols.row_matrix,"object",(function (m,data){
if(((1) === cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,data)))){
return clojure.core.matrix.protocols.coerce_param.call(null,m,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[data],null)));
} else {
throw cljs.core.ex_info.call(null,["Can't create a row matrix: input must be 1D vector"].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
}));
goog.object.set(clojure.core.matrix.protocols.PVectorView,"null",true);

goog.object.set(clojure.core.matrix.protocols.as_vector,"null",(function (m){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null);
}));

goog.object.set(clojure.core.matrix.protocols.PVectorView,"number",true);

goog.object.set(clojure.core.matrix.protocols.as_vector,"number",(function (m){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [m], null);
}));

goog.object.set(clojure.core.matrix.protocols.PVectorView,"object",true);

goog.object.set(clojure.core.matrix.protocols.as_vector,"object",(function (m){
var dims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m));
if((dims === (0))){
return clojure.core.matrix.protocols.broadcast.call(null,clojure.core.matrix.impl.wrappers.wrap_nd.call(null,m),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null));
} else {
if((dims === (1))){
return m;
} else {
if(cljs.core.not.call(null,clojure.core.matrix.protocols.is_mutable_QMARK_.call(null,m))){
return clojure.core.matrix.protocols.to_vector.call(null,m);
} else {
return null;

}
}
}
}));
goog.object.set(clojure.core.matrix.protocols.PVectorisable,"null",true);

goog.object.set(clojure.core.matrix.protocols.to_vector,"null",(function (m){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null);
}));

goog.object.set(clojure.core.matrix.protocols.PVectorisable,"number",true);

goog.object.set(clojure.core.matrix.protocols.to_vector,"number",(function (m){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [m], null);
}));

goog.object.set(clojure.core.matrix.protocols.PVectorisable,"object",true);

goog.object.set(clojure.core.matrix.protocols.to_vector,"object",(function (m){
var dims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m));
if(((0) === dims)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.core.matrix.protocols.get_0d.call(null,m)], null);
} else {
if(cljs.core.truth_(clojure.core.matrix.protocols.is_vector_QMARK_.call(null,m))){
return clojure.core.matrix.protocols.clone.call(null,m);
} else {
return cljs.core.vec.call(null,clojure.core.matrix.protocols.element_seq.call(null,m));

}
}
}));
goog.object.set(clojure.core.matrix.protocols.PReshaping,"null",true);

goog.object.set(clojure.core.matrix.protocols.reshape,"null",(function (m,shape){
return clojure.core.matrix.protocols.reshape.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null),shape);
}));

goog.object.set(clojure.core.matrix.protocols.PReshaping,"number",true);

goog.object.set(clojure.core.matrix.protocols.reshape,"number",(function (m,shape){
return clojure.core.matrix.protocols.reshape.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [m], null),shape);
}));

goog.object.set(clojure.core.matrix.protocols.PReshaping,"object",true);

goog.object.set(clojure.core.matrix.protocols.reshape,"object",(function (m,shape){
if(cljs.core._EQ_.call(null,clojure.core.matrix.protocols.get_shape.call(null,m),shape)){
return m;
} else {
var gv = clojure.core.matrix.protocols.generic_value.call(null,m);
var es = cljs.core.concat.call(null,clojure.core.matrix.protocols.element_seq.call(null,m),cljs.core.repeat.call(null,gv));
var partition_shape = ((function (gv,es){
return (function clojure$core$matrix$impl$defaults$partition_shape(es__$1,shape__$1){
var temp__5455__auto__ = cljs.core.seq.call(null,shape__$1);
if(temp__5455__auto__){
var s = temp__5455__auto__;
var ns = cljs.core.next.call(null,s);
var plen = cljs.core.reduce.call(null,cljs.core._STAR_,(1),ns);
return cljs.core.map.call(null,((function (ns,plen,s,temp__5455__auto__,gv,es){
return (function (p1__32939_SHARP_){
return clojure$core$matrix$impl$defaults$partition_shape.call(null,p1__32939_SHARP_,ns);
});})(ns,plen,s,temp__5455__auto__,gv,es))
,cljs.core.partition.call(null,plen,es__$1));
} else {
return cljs.core.first.call(null,es__$1);
}
});})(gv,es))
;
var temp__5455__auto__ = cljs.core.seq.call(null,shape);
if(temp__5455__auto__){
var shape__$1 = temp__5455__auto__;
var fs = cljs.core.long$.call(null,cljs.core.first.call(null,shape__$1));
var parts = partition_shape.call(null,es,shape__$1);
var or__3922__auto__ = clojure.core.matrix.protocols.construct_matrix.call(null,m,cljs.core.take.call(null,fs,parts));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return clojure.core.matrix.protocols.construct_matrix.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.take.call(null,fs,parts));
}
} else {
return cljs.core.first.call(null,es);
}
}
}));
goog.object.set(clojure.core.matrix.protocols.PReshapeView,"null",true);

goog.object.set(clojure.core.matrix.protocols.reshape_view,"null",(function (m,shape){
return clojure.core.matrix.protocols.broadcast.call(null,null,shape);
}));

goog.object.set(clojure.core.matrix.protocols.PReshapeView,"number",true);

goog.object.set(clojure.core.matrix.protocols.reshape_view,"number",(function (m,shape){
return clojure.core.matrix.protocols.broadcast.call(null,m,shape);
}));

goog.object.set(clojure.core.matrix.protocols.PReshapeView,"object",true);

goog.object.set(clojure.core.matrix.protocols.reshape_view,"object",(function (m,shape){
if(cljs.core.truth_(clojure.core.matrix.protocols.is_mutable_QMARK_.call(null,m))){
throw cljs.core.ex_info.call(null,["TODO: ","reshape-view not supported on mutable array of type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.core.matrix.impl.defaults.class$.call(null,m))].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
return clojure.core.matrix.protocols.reshape.call(null,m,shape);
}
}));
goog.object.set(clojure.core.matrix.protocols.PCoercion,"null",true);

goog.object.set(clojure.core.matrix.protocols.coerce_param,"null",(function (m,param){
return param;
}));

goog.object.set(clojure.core.matrix.protocols.PCoercion,"number",true);

goog.object.set(clojure.core.matrix.protocols.coerce_param,"number",(function (m,param){
return param;
}));

goog.object.set(clojure.core.matrix.protocols.PCoercion,"object",true);

goog.object.set(clojure.core.matrix.protocols.coerce_param,"object",(function (m,param){
var param__$1 = (((param instanceof cljs.core.ISeq))?clojure.core.matrix.protocols.convert_to_nested_vectors.call(null,param):param);
var or__3922__auto__ = clojure.core.matrix.protocols.construct_matrix.call(null,m,param__$1);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return param__$1;
}
}));
goog.object.set(clojure.core.matrix.protocols.PExponent,"number",true);

goog.object.set(clojure.core.matrix.protocols.element_pow,"number",(function (m,exponent){
if(cljs.core.not.call(null,clojure.core.matrix.protocols.is_scalar_QMARK_.call(null,exponent))){
return clojure.core.matrix.protocols.element_map.call(null,exponent,(function (p1__32941_SHARP_){
return Math.pow(m,p1__32941_SHARP_);
}));
} else {
return Math.pow(m,exponent);
}
}));

goog.object.set(clojure.core.matrix.protocols.PExponent,"object",true);

goog.object.set(clojure.core.matrix.protocols.element_pow,"object",(function (m,exponent){
if(cljs.core.not.call(null,clojure.core.matrix.protocols.is_scalar_QMARK_.call(null,exponent))){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__32945_SHARP_,p2__32946_SHARP_){
return Math.pow(p1__32945_SHARP_,p2__32946_SHARP_);
}),exponent);
} else {
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__32947_SHARP_){
return Math.pow(p1__32947_SHARP_,exponent);
}));
}
}));
goog.object.set(clojure.core.matrix.protocols.PSquare,"number",true);

goog.object.set(clojure.core.matrix.protocols.square,"number",(function (m){
return (m * m);
}));

goog.object.set(clojure.core.matrix.protocols.PSquare,"object",true);

goog.object.set(clojure.core.matrix.protocols.square,"object",(function (m){
return clojure.core.matrix.protocols.element_multiply.call(null,m,m);
}));
goog.object.set(clojure.core.matrix.protocols.PLogistic,"number",true);

goog.object.set(clojure.core.matrix.protocols.logistic,"number",(function (m){
var e_t = Math.exp((- m));
return (1.0 / (1.0 + e_t));
}));

goog.object.set(clojure.core.matrix.protocols.PLogistic,"object",true);

goog.object.set(clojure.core.matrix.protocols.logistic,"object",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,clojure.core.matrix.impl.common.logistic_fn);
}));
goog.object.set(clojure.core.matrix.protocols.PLogisticMutable,"object",true);

goog.object.set(clojure.core.matrix.protocols.logistic_BANG_,"object",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,clojure.core.matrix.impl.common.logistic_fn);
}));
goog.object.set(clojure.core.matrix.protocols.PSoftplus,"number",true);

goog.object.set(clojure.core.matrix.protocols.softplus,"number",(function (m){
var et = Math.exp(m);
return Math.log((1.0 + et));
}));

goog.object.set(clojure.core.matrix.protocols.PSoftplus,"object",true);

goog.object.set(clojure.core.matrix.protocols.softplus,"object",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,clojure.core.matrix.impl.common.softplus_fn);
}));
goog.object.set(clojure.core.matrix.protocols.PSoftmax,"object",true);

goog.object.set(clojure.core.matrix.protocols.softmax,"object",(function (m){
var em = clojure.core.matrix.protocols.exp.call(null,m);
return clojure.core.matrix.protocols.element_divide.call(null,em,clojure.core.matrix.protocols.element_sum.call(null,em));
}));
goog.object.set(clojure.core.matrix.protocols.PSoftmaxMutable,"object",true);

goog.object.set(clojure.core.matrix.protocols.softmax_BANG_,"object",(function (m){
clojure.core.matrix.protocols.exp_BANG_.call(null,m);

clojure.core.matrix.protocols.element_divide_BANG_.call(null,m,clojure.core.matrix.protocols.element_sum.call(null,m));

return m;
}));
goog.object.set(clojure.core.matrix.protocols.PSoftplusMutable,"object",true);

goog.object.set(clojure.core.matrix.protocols.softplus_BANG_,"object",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,clojure.core.matrix.impl.common.softplus_fn);
}));
goog.object.set(clojure.core.matrix.protocols.PReLU,"number",true);

goog.object.set(clojure.core.matrix.protocols.relu,"number",(function (m){
return Math.max(0.0,m);
}));

goog.object.set(clojure.core.matrix.protocols.PReLU,"object",true);

goog.object.set(clojure.core.matrix.protocols.relu,"object",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,clojure.core.matrix.impl.common.relu_fn);
}));
goog.object.set(clojure.core.matrix.protocols.PReLUMutable,"object",true);

goog.object.set(clojure.core.matrix.protocols.relu_BANG_,"object",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,clojure.core.matrix.impl.common.relu_fn);
}));
goog.object.set(clojure.core.matrix.protocols.PMathsFunctions,"number",true);

goog.object.set(clojure.core.matrix.protocols.abs,"number",(function (m){
return Math.abs(m);
}));

goog.object.set(clojure.core.matrix.protocols.acos,"number",(function (m){
return Math.acos(m);
}));

goog.object.set(clojure.core.matrix.protocols.asin,"number",(function (m){
return Math.asin(m);
}));

goog.object.set(clojure.core.matrix.protocols.atan,"number",(function (m){
return Math.atan(m);
}));

goog.object.set(clojure.core.matrix.protocols.cbrt,"number",(function (m){
return Math.cbrt(m);
}));

goog.object.set(clojure.core.matrix.protocols.ceil,"number",(function (m){
return Math.ceil(m);
}));

goog.object.set(clojure.core.matrix.protocols.cos,"number",(function (m){
return Math.cos(m);
}));

goog.object.set(clojure.core.matrix.protocols.cosh,"number",(function (m){
return Math.cosh(m);
}));

goog.object.set(clojure.core.matrix.protocols.exp,"number",(function (m){
return Math.exp(m);
}));

goog.object.set(clojure.core.matrix.protocols.floor,"number",(function (m){
return Math.floor(m);
}));

goog.object.set(clojure.core.matrix.protocols.log,"number",(function (m){
return Math.log(m);
}));

goog.object.set(clojure.core.matrix.protocols.log10,"number",(function (m){
return Math.log10(m);
}));

goog.object.set(clojure.core.matrix.protocols.round,"number",(function (m){
return Math.rint(m);
}));

goog.object.set(clojure.core.matrix.protocols.signum,"number",(function (m){
return Math.sign(m);
}));

goog.object.set(clojure.core.matrix.protocols.sin,"number",(function (m){
return Math.sin(m);
}));

goog.object.set(clojure.core.matrix.protocols.sinh,"number",(function (m){
return Math.sinh(m);
}));

goog.object.set(clojure.core.matrix.protocols.sqrt,"number",(function (m){
return Math.sqrt(m);
}));

goog.object.set(clojure.core.matrix.protocols.tan,"number",(function (m){
return Math.tan(m);
}));

goog.object.set(clojure.core.matrix.protocols.tanh,"number",(function (m){
return Math.tanh(m);
}));

goog.object.set(clojure.core.matrix.protocols.to_degrees,"number",(function (m){
return clojure.core.matrix.impl.mathsops.to_degrees_STAR_.call(null,m);
}));

goog.object.set(clojure.core.matrix.protocols.to_radians,"number",(function (m){
return clojure.core.matrix.impl.mathsops.to_radians_STAR_.call(null,m);
}));

goog.object.set(clojure.core.matrix.protocols.PMathsFunctions,"object",true);

goog.object.set(clojure.core.matrix.protocols.abs,"object",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__32028__32029__auto__){
return Math.abs(p1__32028__32029__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.acos,"object",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__32028__32029__auto__){
return Math.acos(p1__32028__32029__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.asin,"object",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__32028__32029__auto__){
return Math.asin(p1__32028__32029__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.atan,"object",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__32028__32029__auto__){
return Math.atan(p1__32028__32029__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.cbrt,"object",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__32028__32029__auto__){
return Math.cbrt(p1__32028__32029__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.ceil,"object",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__32028__32029__auto__){
return Math.ceil(p1__32028__32029__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.cos,"object",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__32028__32029__auto__){
return Math.cos(p1__32028__32029__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.cosh,"object",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__32028__32029__auto__){
return Math.cosh(p1__32028__32029__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.exp,"object",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__32028__32029__auto__){
return Math.exp(p1__32028__32029__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.floor,"object",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__32028__32029__auto__){
return Math.floor(p1__32028__32029__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.log,"object",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__32028__32029__auto__){
return Math.log(p1__32028__32029__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.log10,"object",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__32028__32029__auto__){
return Math.log10(p1__32028__32029__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.round,"object",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__32028__32029__auto__){
return Math.rint(p1__32028__32029__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.signum,"object",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__32028__32029__auto__){
return Math.sign(p1__32028__32029__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.sin,"object",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__32028__32029__auto__){
return Math.sin(p1__32028__32029__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.sinh,"object",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__32028__32029__auto__){
return Math.sinh(p1__32028__32029__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.sqrt,"object",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__32028__32029__auto__){
return Math.sqrt(p1__32028__32029__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.tan,"object",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__32028__32029__auto__){
return Math.tan(p1__32028__32029__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.tanh,"object",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__32028__32029__auto__){
return Math.tanh(p1__32028__32029__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.to_degrees,"object",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__32028__32029__auto__){
return clojure.core.matrix.impl.mathsops.to_degrees_STAR_.call(null,p1__32028__32029__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.to_radians,"object",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__32028__32029__auto__){
return clojure.core.matrix.impl.mathsops.to_radians_STAR_.call(null,p1__32028__32029__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.PMathsFunctions,"array",true);

goog.object.set(clojure.core.matrix.protocols.abs,"array",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__32030__32031__auto__){
return Math.abs(p1__32030__32031__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.acos,"array",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__32030__32031__auto__){
return Math.acos(p1__32030__32031__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.asin,"array",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__32030__32031__auto__){
return Math.asin(p1__32030__32031__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.atan,"array",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__32030__32031__auto__){
return Math.atan(p1__32030__32031__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.cbrt,"array",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__32030__32031__auto__){
return Math.cbrt(p1__32030__32031__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.ceil,"array",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__32030__32031__auto__){
return Math.ceil(p1__32030__32031__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.cos,"array",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__32030__32031__auto__){
return Math.cos(p1__32030__32031__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.cosh,"array",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__32030__32031__auto__){
return Math.cosh(p1__32030__32031__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.exp,"array",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__32030__32031__auto__){
return Math.exp(p1__32030__32031__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.floor,"array",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__32030__32031__auto__){
return Math.floor(p1__32030__32031__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.log,"array",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__32030__32031__auto__){
return Math.log(p1__32030__32031__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.log10,"array",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__32030__32031__auto__){
return Math.log10(p1__32030__32031__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.round,"array",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__32030__32031__auto__){
return Math.rint(p1__32030__32031__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.signum,"array",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__32030__32031__auto__){
return Math.sign(p1__32030__32031__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.sin,"array",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__32030__32031__auto__){
return Math.sin(p1__32030__32031__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.sinh,"array",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__32030__32031__auto__){
return Math.sinh(p1__32030__32031__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.sqrt,"array",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__32030__32031__auto__){
return Math.sqrt(p1__32030__32031__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.tan,"array",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__32030__32031__auto__){
return Math.tan(p1__32030__32031__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.tanh,"array",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__32030__32031__auto__){
return Math.tanh(p1__32030__32031__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.to_degrees,"array",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__32030__32031__auto__){
return clojure.core.matrix.impl.mathsops.to_degrees_STAR_.call(null,p1__32030__32031__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.to_radians,"array",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__32030__32031__auto__){
return clojure.core.matrix.impl.mathsops.to_radians_STAR_.call(null,p1__32030__32031__auto__);
}));
}));
goog.object.set(clojure.core.matrix.protocols.PMathsFunctionsMutable,"number",true);

goog.object.set(clojure.core.matrix.protocols.abs_BANG_,"number",(function (m){
throw cljs.core.ex_info.call(null,["Number is not mutable!"].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.acos_BANG_,"number",(function (m){
throw cljs.core.ex_info.call(null,["Number is not mutable!"].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.asin_BANG_,"number",(function (m){
throw cljs.core.ex_info.call(null,["Number is not mutable!"].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.atan_BANG_,"number",(function (m){
throw cljs.core.ex_info.call(null,["Number is not mutable!"].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.cbrt_BANG_,"number",(function (m){
throw cljs.core.ex_info.call(null,["Number is not mutable!"].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.ceil_BANG_,"number",(function (m){
throw cljs.core.ex_info.call(null,["Number is not mutable!"].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.cos_BANG_,"number",(function (m){
throw cljs.core.ex_info.call(null,["Number is not mutable!"].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.cosh_BANG_,"number",(function (m){
throw cljs.core.ex_info.call(null,["Number is not mutable!"].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.exp_BANG_,"number",(function (m){
throw cljs.core.ex_info.call(null,["Number is not mutable!"].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.floor_BANG_,"number",(function (m){
throw cljs.core.ex_info.call(null,["Number is not mutable!"].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.log_BANG_,"number",(function (m){
throw cljs.core.ex_info.call(null,["Number is not mutable!"].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.log10_BANG_,"number",(function (m){
throw cljs.core.ex_info.call(null,["Number is not mutable!"].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.round_BANG_,"number",(function (m){
throw cljs.core.ex_info.call(null,["Number is not mutable!"].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.signum_BANG_,"number",(function (m){
throw cljs.core.ex_info.call(null,["Number is not mutable!"].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.sin_BANG_,"number",(function (m){
throw cljs.core.ex_info.call(null,["Number is not mutable!"].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.sinh_BANG_,"number",(function (m){
throw cljs.core.ex_info.call(null,["Number is not mutable!"].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.sqrt_BANG_,"number",(function (m){
throw cljs.core.ex_info.call(null,["Number is not mutable!"].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.tan_BANG_,"number",(function (m){
throw cljs.core.ex_info.call(null,["Number is not mutable!"].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.tanh_BANG_,"number",(function (m){
throw cljs.core.ex_info.call(null,["Number is not mutable!"].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.to_degrees_BANG_,"number",(function (m){
throw cljs.core.ex_info.call(null,["Number is not mutable!"].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.to_radians_BANG_,"number",(function (m){
throw cljs.core.ex_info.call(null,["Number is not mutable!"].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.PMathsFunctionsMutable,"object",true);

goog.object.set(clojure.core.matrix.protocols.abs_BANG_,"object",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__32032__32033__auto__){
return Math.abs(p1__32032__32033__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.acos_BANG_,"object",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__32032__32033__auto__){
return Math.acos(p1__32032__32033__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.asin_BANG_,"object",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__32032__32033__auto__){
return Math.asin(p1__32032__32033__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.atan_BANG_,"object",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__32032__32033__auto__){
return Math.atan(p1__32032__32033__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.cbrt_BANG_,"object",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__32032__32033__auto__){
return Math.cbrt(p1__32032__32033__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.ceil_BANG_,"object",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__32032__32033__auto__){
return Math.ceil(p1__32032__32033__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.cos_BANG_,"object",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__32032__32033__auto__){
return Math.cos(p1__32032__32033__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.cosh_BANG_,"object",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__32032__32033__auto__){
return Math.cosh(p1__32032__32033__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.exp_BANG_,"object",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__32032__32033__auto__){
return Math.exp(p1__32032__32033__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.floor_BANG_,"object",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__32032__32033__auto__){
return Math.floor(p1__32032__32033__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.log_BANG_,"object",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__32032__32033__auto__){
return Math.log(p1__32032__32033__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.log10_BANG_,"object",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__32032__32033__auto__){
return Math.log10(p1__32032__32033__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.round_BANG_,"object",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__32032__32033__auto__){
return Math.rint(p1__32032__32033__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.signum_BANG_,"object",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__32032__32033__auto__){
return Math.sign(p1__32032__32033__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.sin_BANG_,"object",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__32032__32033__auto__){
return Math.sin(p1__32032__32033__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.sinh_BANG_,"object",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__32032__32033__auto__){
return Math.sinh(p1__32032__32033__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.sqrt_BANG_,"object",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__32032__32033__auto__){
return Math.sqrt(p1__32032__32033__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.tan_BANG_,"object",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__32032__32033__auto__){
return Math.tan(p1__32032__32033__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.tanh_BANG_,"object",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__32032__32033__auto__){
return Math.tanh(p1__32032__32033__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.to_degrees_BANG_,"object",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__32032__32033__auto__){
return clojure.core.matrix.impl.mathsops.to_degrees_STAR_.call(null,p1__32032__32033__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.to_radians_BANG_,"object",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__32032__32033__auto__){
return clojure.core.matrix.impl.mathsops.to_radians_STAR_.call(null,p1__32032__32033__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.PMathsFunctionsMutable,"array",true);

goog.object.set(clojure.core.matrix.protocols.abs_BANG_,"array",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__32034__32035__auto__){
return Math.abs(p1__32034__32035__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.acos_BANG_,"array",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__32034__32035__auto__){
return Math.acos(p1__32034__32035__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.asin_BANG_,"array",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__32034__32035__auto__){
return Math.asin(p1__32034__32035__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.atan_BANG_,"array",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__32034__32035__auto__){
return Math.atan(p1__32034__32035__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.cbrt_BANG_,"array",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__32034__32035__auto__){
return Math.cbrt(p1__32034__32035__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.ceil_BANG_,"array",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__32034__32035__auto__){
return Math.ceil(p1__32034__32035__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.cos_BANG_,"array",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__32034__32035__auto__){
return Math.cos(p1__32034__32035__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.cosh_BANG_,"array",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__32034__32035__auto__){
return Math.cosh(p1__32034__32035__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.exp_BANG_,"array",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__32034__32035__auto__){
return Math.exp(p1__32034__32035__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.floor_BANG_,"array",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__32034__32035__auto__){
return Math.floor(p1__32034__32035__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.log_BANG_,"array",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__32034__32035__auto__){
return Math.log(p1__32034__32035__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.log10_BANG_,"array",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__32034__32035__auto__){
return Math.log10(p1__32034__32035__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.round_BANG_,"array",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__32034__32035__auto__){
return Math.rint(p1__32034__32035__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.signum_BANG_,"array",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__32034__32035__auto__){
return Math.sign(p1__32034__32035__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.sin_BANG_,"array",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__32034__32035__auto__){
return Math.sin(p1__32034__32035__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.sinh_BANG_,"array",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__32034__32035__auto__){
return Math.sinh(p1__32034__32035__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.sqrt_BANG_,"array",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__32034__32035__auto__){
return Math.sqrt(p1__32034__32035__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.tan_BANG_,"array",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__32034__32035__auto__){
return Math.tan(p1__32034__32035__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.tanh_BANG_,"array",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__32034__32035__auto__){
return Math.tanh(p1__32034__32035__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.to_degrees_BANG_,"array",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__32034__32035__auto__){
return clojure.core.matrix.impl.mathsops.to_degrees_STAR_.call(null,p1__32034__32035__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.to_radians_BANG_,"array",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__32034__32035__auto__){
return clojure.core.matrix.impl.mathsops.to_radians_STAR_.call(null,p1__32034__32035__auto__);
}));
}));
goog.object.set(clojure.core.matrix.protocols.PMatrixSubComponents,"object",true);

goog.object.set(clojure.core.matrix.protocols.main_diagonal,"object",(function (m){
var sh = clojure.core.matrix.protocols.get_shape.call(null,m);
var rank = cljs.core.count.call(null,sh);
var dims = cljs.core.apply.call(null,cljs.core.min,sh);
var diag_vals = (function (){var iter__4292__auto__ = ((function (sh,rank,dims){
return (function clojure$core$matrix$impl$defaults$iter__32956(s__32957){
return (new cljs.core.LazySeq(null,((function (sh,rank,dims){
return (function (){
var s__32957__$1 = s__32957;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__32957__$1);
if(temp__5457__auto__){
var s__32957__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32957__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__32957__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__32959 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__32958 = (0);
while(true){
if((i__32958 < size__4291__auto__)){
var i = cljs.core._nth.call(null,c__4290__auto__,i__32958);
cljs.core.chunk_append.call(null,b__32959,clojure.core.matrix.protocols.get_nd.call(null,m,cljs.core.repeat.call(null,rank,i)));

var G__32960 = (i__32958 + (1));
i__32958 = G__32960;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32959),clojure$core$matrix$impl$defaults$iter__32956.call(null,cljs.core.chunk_rest.call(null,s__32957__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32959),null);
}
} else {
var i = cljs.core.first.call(null,s__32957__$2);
return cljs.core.cons.call(null,clojure.core.matrix.protocols.get_nd.call(null,m,cljs.core.repeat.call(null,rank,i)),clojure$core$matrix$impl$defaults$iter__32956.call(null,cljs.core.rest.call(null,s__32957__$2)));
}
} else {
return null;
}
break;
}
});})(sh,rank,dims))
,null,null));
});})(sh,rank,dims))
;
return iter__4292__auto__.call(null,cljs.core.range.call(null,dims));
})();
return clojure.core.matrix.implementations.construct.call(null,m,diag_vals);
}));
goog.object.set(clojure.core.matrix.protocols.PSpecialisedConstructors,"object",true);

goog.object.set(clojure.core.matrix.protocols.identity_matrix,"object",(function (m,dims){
return clojure.core.matrix.protocols.diagonal_matrix.call(null,m,cljs.core.repeat.call(null,dims,1.0));
}));

goog.object.set(clojure.core.matrix.protocols.diagonal_matrix,"object",(function (m,diagonal_values){
var dims = cljs.core.count.call(null,diagonal_values);
var diagonal_values__$1 = clojure.core.matrix.protocols.convert_to_nested_vectors.call(null,diagonal_values);
var zs = cljs.core.vec.call(null,cljs.core.repeat.call(null,dims,0.0));
var dm = cljs.core.vec.call(null,(function (){var iter__4292__auto__ = ((function (dims,diagonal_values__$1,zs){
return (function clojure$core$matrix$impl$defaults$iter__32961(s__32962){
return (new cljs.core.LazySeq(null,((function (dims,diagonal_values__$1,zs){
return (function (){
var s__32962__$1 = s__32962;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__32962__$1);
if(temp__5457__auto__){
var s__32962__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32962__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__32962__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__32964 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__32963 = (0);
while(true){
if((i__32963 < size__4291__auto__)){
var i = cljs.core._nth.call(null,c__4290__auto__,i__32963);
cljs.core.chunk_append.call(null,b__32964,cljs.core.assoc.call(null,zs,i,cljs.core.nth.call(null,diagonal_values__$1,i)));

var G__32965 = (i__32963 + (1));
i__32963 = G__32965;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32964),clojure$core$matrix$impl$defaults$iter__32961.call(null,cljs.core.chunk_rest.call(null,s__32962__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32964),null);
}
} else {
var i = cljs.core.first.call(null,s__32962__$2);
return cljs.core.cons.call(null,cljs.core.assoc.call(null,zs,i,cljs.core.nth.call(null,diagonal_values__$1,i)),clojure$core$matrix$impl$defaults$iter__32961.call(null,cljs.core.rest.call(null,s__32962__$2)));
}
} else {
return null;
}
break;
}
});})(dims,diagonal_values__$1,zs))
,null,null));
});})(dims,diagonal_values__$1,zs))
;
return iter__4292__auto__.call(null,cljs.core.range.call(null,dims));
})());
return clojure.core.matrix.protocols.coerce_param.call(null,m,dm);
}));
goog.object.set(clojure.core.matrix.protocols.PPermutationMatrix,"object",true);

goog.object.set(clojure.core.matrix.protocols.permutation_matrix,"object",(function (m,permutation){
var v = clojure.core.matrix.protocols.convert_to_nested_vectors.call(null,permutation);
var n = cljs.core.count.call(null,v);
var r = clojure.core.matrix.protocols.new_matrix.call(null,m,n,n);
var r__$1 = (cljs.core.truth_(clojure.core.matrix.protocols.is_mutable_QMARK_.call(null,r))?r:clojure.core.matrix.impl.defaults.construct_mutable_matrix.call(null,r));
var n__4376__auto___32966 = n;
var i_32967 = (0);
while(true){
if((i_32967 < n__4376__auto___32966)){
clojure.core.matrix.protocols.set_2d_BANG_.call(null,r__$1,i_32967,v.call(null,i_32967),1.0);

var G__32968 = (i_32967 + (1));
i_32967 = G__32968;
continue;
} else {
}
break;
}

return r__$1;
}));
goog.object.set(clojure.core.matrix.protocols.PBlockDiagonalMatrix,"object",true);

goog.object.set(clojure.core.matrix.protocols.block_diagonal_matrix,"object",(function (m,blocks){
var aux = (function clojure$core$matrix$impl$defaults$aux(acc,blocks__$1){
if(cljs.core.empty_QMARK_.call(null,blocks__$1)){
return acc;
} else {
var acc_dim = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimension_count.call(null,acc,(0)));
var new_block = blocks__$1.call(null,(0));
var new_block_dim = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimension_count.call(null,new_block,(0)));
var new_dim = (acc_dim + new_block_dim);
var dm = cljs.core.vec.call(null,(function (){var iter__4292__auto__ = ((function (acc_dim,new_block,new_block_dim,new_dim){
return (function clojure$core$matrix$impl$defaults$aux_$_iter__32969(s__32970){
return (new cljs.core.LazySeq(null,((function (acc_dim,new_block,new_block_dim,new_dim){
return (function (){
var s__32970__$1 = s__32970;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__32970__$1);
if(temp__5457__auto__){
var s__32970__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32970__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__32970__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__32972 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__32971 = (0);
while(true){
if((i__32971 < size__4291__auto__)){
var i = cljs.core._nth.call(null,c__4290__auto__,i__32971);
cljs.core.chunk_append.call(null,b__32972,(((i < acc_dim))?cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,acc.call(null,i),clojure.core.matrix.protocols.new_vector.call(null,cljs.core.PersistentVector.EMPTY,new_block_dim))):cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,clojure.core.matrix.protocols.new_vector.call(null,cljs.core.PersistentVector.EMPTY,acc_dim),new_block.call(null,(i - acc_dim))))));

var G__32973 = (i__32971 + (1));
i__32971 = G__32973;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32972),clojure$core$matrix$impl$defaults$aux_$_iter__32969.call(null,cljs.core.chunk_rest.call(null,s__32970__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32972),null);
}
} else {
var i = cljs.core.first.call(null,s__32970__$2);
return cljs.core.cons.call(null,(((i < acc_dim))?cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,acc.call(null,i),clojure.core.matrix.protocols.new_vector.call(null,cljs.core.PersistentVector.EMPTY,new_block_dim))):cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,clojure.core.matrix.protocols.new_vector.call(null,cljs.core.PersistentVector.EMPTY,acc_dim),new_block.call(null,(i - acc_dim))))),clojure$core$matrix$impl$defaults$aux_$_iter__32969.call(null,cljs.core.rest.call(null,s__32970__$2)));
}
} else {
return null;
}
break;
}
});})(acc_dim,new_block,new_block_dim,new_dim))
,null,null));
});})(acc_dim,new_block,new_block_dim,new_dim))
;
return iter__4292__auto__.call(null,cljs.core.range.call(null,new_dim));
})());
return clojure$core$matrix$impl$defaults$aux.call(null,dm,cljs.core.subvec.call(null,blocks__$1,(1)));
}
});
return aux.call(null,cljs.core.PersistentVector.EMPTY,blocks);
}));
goog.object.set(clojure.core.matrix.protocols.PMatrixPredicates,"object",true);

goog.object.set(clojure.core.matrix.protocols.identity_matrix_QMARK_,"object",(function (m){
var rc = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimension_count.call(null,m,(0)));
var cc = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimension_count.call(null,m,(1)));
if((((cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m)) === (2))) && ((rc === cc)))){
var i = cljs.core.long$.call(null,(0));
while(true){
if((i < rc)){
if((function (){var j = cljs.core.long$.call(null,(0));
while(true){
if((j < cc)){
var elem = clojure.core.matrix.protocols.get_2d.call(null,m,i,j);
if(typeof elem === 'number'){
if((i === j)){
if((elem === 1.0)){
var G__32976 = (j + (1));
j = G__32976;
continue;
} else {
return false;
}
} else {
if((elem === (0))){
var G__32977 = (j + (1));
j = G__32977;
continue;
} else {
return false;
}
}
} else {
return false;
}
} else {
return true;
}
break;
}
})()){
var G__32978 = (i + (1));
i = G__32978;
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
return false;
}
}));

goog.object.set(clojure.core.matrix.protocols.zero_matrix_QMARK_,"object",(function (m){
return cljs.core.every_QMARK_.call(null,(function (p1__32974_SHARP_){
return ((typeof p1__32974_SHARP_ === 'number') && ((p1__32974_SHARP_ === (0))));
}),clojure.core.matrix.protocols.element_seq.call(null,m));
}));

goog.object.set(clojure.core.matrix.protocols.symmetric_QMARK_,"object",(function (m){
var G__32975 = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m));
switch (G__32975) {
case (0):
return true;

break;
case (1):
return true;

break;
case (2):
var and__3911__auto__ = clojure.core.matrix.impl.common.square_QMARK_.call(null,m);
if(cljs.core.truth_(and__3911__auto__)){
return clojure.core.matrix.impl.common.symmetric_matrix_entries_QMARK_.call(null,m);
} else {
return and__3911__auto__;
}

break;
default:
return cljs.core._EQ_.call(null,m,clojure.core.matrix.protocols.transpose.call(null,m));

}
}));

goog.object.set(clojure.core.matrix.protocols.PMatrixPredicates,"null",true);

goog.object.set(clojure.core.matrix.protocols.identity_matrix_QMARK_,"null",(function (m){
return false;
}));

goog.object.set(clojure.core.matrix.protocols.zero_matrix_QMARK_,"null",(function (m){
return false;
}));

goog.object.set(clojure.core.matrix.protocols.symmetric_QMARK_,"null",(function (m){
return true;
}));
goog.object.set(clojure.core.matrix.protocols.PIndicesAccess,"object",true);

goog.object.set(clojure.core.matrix.protocols.get_indices,"object",(function (a,indices){
var vals = cljs.core.map.call(null,(function (p1__32980_SHARP_){
return clojure.core.matrix.protocols.get_nd.call(null,a,p1__32980_SHARP_);
}),cljs.core.map.call(null,clojure.core.matrix.protocols.element_seq,indices));
var or__3922__auto__ = ((cljs.core.not.call(null,clojure.core.matrix.protocols.is_scalar_QMARK_.call(null,a)))?clojure.core.matrix.protocols.construct_matrix.call(null,a,vals):null);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return clojure.core.matrix.protocols.construct_matrix.call(null,cljs.core.PersistentVector.EMPTY,vals);
}
}));
goog.object.set(clojure.core.matrix.protocols.PIndicesSetting,"object",true);

goog.object.set(clojure.core.matrix.protocols.set_indices,"object",(function (a,indices,values){
var indices__$1 = cljs.core.map.call(null,clojure.core.matrix.protocols.element_seq,indices);
var values__$1 = clojure.core.matrix.protocols.element_seq.call(null,clojure.core.matrix.protocols.broadcast.call(null,values,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count.call(null,indices__$1)], null)));
var a__$1 = a;
var G__32987 = indices__$1;
var vec__32989 = G__32987;
var seq__32990 = cljs.core.seq.call(null,vec__32989);
var first__32991 = cljs.core.first.call(null,seq__32990);
var seq__32990__$1 = cljs.core.next.call(null,seq__32990);
var id = first__32991;
var idx = seq__32990__$1;
var G__32988 = values__$1;
var vec__32992 = G__32988;
var seq__32993 = cljs.core.seq.call(null,vec__32992);
var first__32994 = cljs.core.first.call(null,seq__32993);
var seq__32993__$1 = cljs.core.next.call(null,seq__32993);
var v = first__32994;
var vs = seq__32993__$1;
var a__$2 = a__$1;
var G__32987__$1 = G__32987;
var G__32988__$1 = G__32988;
while(true){
var a__$3 = a__$2;
var vec__32995 = G__32987__$1;
var seq__32996 = cljs.core.seq.call(null,vec__32995);
var first__32997 = cljs.core.first.call(null,seq__32996);
var seq__32996__$1 = cljs.core.next.call(null,seq__32996);
var id__$1 = first__32997;
var idx__$1 = seq__32996__$1;
var vec__32998 = G__32988__$1;
var seq__32999 = cljs.core.seq.call(null,vec__32998);
var first__33000 = cljs.core.first.call(null,seq__32999);
var seq__32999__$1 = cljs.core.next.call(null,seq__32999);
var v__$1 = first__33000;
var vs__$1 = seq__32999__$1;
if(cljs.core.truth_(id__$1)){
var G__33021 = clojure.core.matrix.protocols.set_nd.call(null,a__$3,id__$1,v__$1);
var G__33022 = idx__$1;
var G__33023 = vs__$1;
a__$2 = G__33021;
G__32987__$1 = G__33022;
G__32988__$1 = G__33023;
continue;
} else {
return a__$3;
}
break;
}
}));

goog.object.set(clojure.core.matrix.protocols.set_indices_BANG_,"object",(function (a,indices,values){
var indices__$1 = cljs.core.map.call(null,clojure.core.matrix.protocols.element_seq,indices);
var values__$1 = clojure.core.matrix.protocols.element_seq.call(null,clojure.core.matrix.protocols.broadcast.call(null,values,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count.call(null,indices__$1)], null)));
var G__33007 = indices__$1;
var vec__33009 = G__33007;
var seq__33010 = cljs.core.seq.call(null,vec__33009);
var first__33011 = cljs.core.first.call(null,seq__33010);
var seq__33010__$1 = cljs.core.next.call(null,seq__33010);
var id = first__33011;
var idx = seq__33010__$1;
var G__33008 = values__$1;
var vec__33012 = G__33008;
var seq__33013 = cljs.core.seq.call(null,vec__33012);
var first__33014 = cljs.core.first.call(null,seq__33013);
var seq__33013__$1 = cljs.core.next.call(null,seq__33013);
var v = first__33014;
var vs = seq__33013__$1;
var G__33007__$1 = G__33007;
var G__33008__$1 = G__33008;
while(true){
var vec__33015 = G__33007__$1;
var seq__33016 = cljs.core.seq.call(null,vec__33015);
var first__33017 = cljs.core.first.call(null,seq__33016);
var seq__33016__$1 = cljs.core.next.call(null,seq__33016);
var id__$1 = first__33017;
var idx__$1 = seq__33016__$1;
var vec__33018 = G__33008__$1;
var seq__33019 = cljs.core.seq.call(null,vec__33018);
var first__33020 = cljs.core.first.call(null,seq__33019);
var seq__33019__$1 = cljs.core.next.call(null,seq__33019);
var v__$1 = first__33020;
var vs__$1 = seq__33019__$1;
if(cljs.core.truth_(id__$1)){
clojure.core.matrix.protocols.set_nd_BANG_.call(null,a,id__$1,v__$1);

var G__33024 = idx__$1;
var G__33025 = vs__$1;
G__33007__$1 = G__33024;
G__33008__$1 = G__33025;
continue;
} else {
return null;
}
break;
}
}));
goog.object.set(clojure.core.matrix.protocols.PNonZeroIndices,"object",true);

goog.object.set(clojure.core.matrix.protocols.non_zero_indices,"object",(function (m){
if(cljs.core.truth_(clojure.core.matrix.protocols.is_vector_QMARK_.call(null,m))){
return cljs.core.vec.call(null,(function (){var iter__4292__auto__ = (function clojure$core$matrix$impl$defaults$iter__33026(s__33027){
return (new cljs.core.LazySeq(null,(function (){
var s__33027__$1 = s__33027;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__33027__$1);
if(temp__5457__auto__){
var s__33027__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33027__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__33027__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__33029 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__33028 = (0);
while(true){
if((i__33028 < size__4291__auto__)){
var i = cljs.core._nth.call(null,c__4290__auto__,i__33028);
if(!((clojure.core.matrix.protocols.get_1d.call(null,m,i) === (0)))){
cljs.core.chunk_append.call(null,b__33029,i);

var G__33034 = (i__33028 + (1));
i__33028 = G__33034;
continue;
} else {
var G__33035 = (i__33028 + (1));
i__33028 = G__33035;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33029),clojure$core$matrix$impl$defaults$iter__33026.call(null,cljs.core.chunk_rest.call(null,s__33027__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33029),null);
}
} else {
var i = cljs.core.first.call(null,s__33027__$2);
if(!((clojure.core.matrix.protocols.get_1d.call(null,m,i) === (0)))){
return cljs.core.cons.call(null,i,clojure$core$matrix$impl$defaults$iter__33026.call(null,cljs.core.rest.call(null,s__33027__$2)));
} else {
var G__33036 = cljs.core.rest.call(null,s__33027__$2);
s__33027__$1 = G__33036;
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
return iter__4292__auto__.call(null,cljs.core.range.call(null,clojure.core.matrix.protocols.dimension_count.call(null,m,(0))));
})());
} else {
return cljs.core.vec.call(null,(function (){var iter__4292__auto__ = (function clojure$core$matrix$impl$defaults$iter__33030(s__33031){
return (new cljs.core.LazySeq(null,(function (){
var s__33031__$1 = s__33031;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__33031__$1);
if(temp__5457__auto__){
var s__33031__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33031__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__33031__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__33033 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__33032 = (0);
while(true){
if((i__33032 < size__4291__auto__)){
var i = cljs.core._nth.call(null,c__4290__auto__,i__33032);
cljs.core.chunk_append.call(null,b__33033,clojure.core.matrix.protocols.non_zero_indices.call(null,clojure.core.matrix.protocols.get_major_slice.call(null,m,i)));

var G__33037 = (i__33032 + (1));
i__33032 = G__33037;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33033),clojure$core$matrix$impl$defaults$iter__33030.call(null,cljs.core.chunk_rest.call(null,s__33031__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33033),null);
}
} else {
var i = cljs.core.first.call(null,s__33031__$2);
return cljs.core.cons.call(null,clojure.core.matrix.protocols.non_zero_indices.call(null,clojure.core.matrix.protocols.get_major_slice.call(null,m,i)),clojure$core$matrix$impl$defaults$iter__33030.call(null,cljs.core.rest.call(null,s__33031__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,cljs.core.range.call(null,clojure.core.matrix.protocols.dimension_count.call(null,m,(0))));
})());
}
}));
goog.object.set(clojure.core.matrix.protocols.PMatrixTypes,"object",true);

goog.object.set(clojure.core.matrix.protocols.diagonal_QMARK_,"object",(function (m){
if(cljs.core._EQ_.call(null,cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m)),(2))){
var vec__33038 = clojure.core.matrix.protocols.get_shape.call(null,m);
var mrows = cljs.core.nth.call(null,vec__33038,(0),null);
var mcols = cljs.core.nth.call(null,vec__33038,(1),null);
return cljs.core.every_QMARK_.call(null,((function (vec__33038,mrows,mcols){
return (function (p__33041){
var vec__33042 = p__33041;
var i = cljs.core.nth.call(null,vec__33042,(0),null);
var j = cljs.core.nth.call(null,vec__33042,(1),null);
var v = cljs.core.nth.call(null,vec__33042,(2),null);
if(cljs.core._EQ_.call(null,i,j)){
return true;
} else {
if(((cljs.core.not_EQ_.call(null,i,j)) && ((v === (0))))){
return true;
} else {
return false;

}
}
});})(vec__33038,mrows,mcols))
,cljs.core.map.call(null,((function (vec__33038,mrows,mcols){
return (function (i,elem){
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.quot.call(null,i,mcols),cljs.core.rem.call(null,i,mcols),elem],null));
});})(vec__33038,mrows,mcols))
,cljs.core.range.call(null,(mrows * mcols)),clojure.core.matrix.protocols.element_seq.call(null,m)));
} else {
return false;
}
}));

goog.object.set(clojure.core.matrix.protocols.upper_triangular_QMARK_,"object",(function (m){
if(cljs.core.truth_(clojure.core.matrix.impl.common.square_QMARK_.call(null,m))){
return cljs.core.every_QMARK_.call(null,cljs.core.zero_QMARK_,cljs.core.mapcat.call(null,(function (p__33045){
var vec__33046 = p__33045;
var idx = cljs.core.nth.call(null,vec__33046,(0),null);
var xs = cljs.core.nth.call(null,vec__33046,(1),null);
return cljs.core.take.call(null,idx,xs);
}),cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null),clojure.core.matrix.protocols.get_slice_seq.call(null,m,(0)))));
} else {
return false;
}
}));

goog.object.set(clojure.core.matrix.protocols.lower_triangular_QMARK_,"object",(function (m){
if(cljs.core.truth_(clojure.core.matrix.impl.common.square_QMARK_.call(null,m))){
return cljs.core.every_QMARK_.call(null,cljs.core.zero_QMARK_,cljs.core.mapcat.call(null,(function (p__33049){
var vec__33050 = p__33049;
var idx = cljs.core.nth.call(null,vec__33050,(0),null);
var xs = cljs.core.nth.call(null,vec__33050,(1),null);
return cljs.core.drop.call(null,(idx + (1)),xs);
}),cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null),clojure.core.matrix.protocols.get_slice_seq.call(null,m,(0)))));
} else {
return false;
}
}));

goog.object.set(clojure.core.matrix.protocols.positive_definite_QMARK_,"object",(function (m){
throw cljs.core.ex_info.call(null,["TODO: Not yet implemented"].join(''),cljs.core.PersistentArrayMap.EMPTY);

return clojure.core.matrix.protocols.positive_definite_QMARK_.call(null,clojure.core.matrix.protocols.convert_to_nested_vectors.call(null,m));
}));

goog.object.set(clojure.core.matrix.protocols.positive_semidefinite_QMARK_,"object",(function (m){
throw cljs.core.ex_info.call(null,["TODO: Not yet implemented"].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.orthogonal_QMARK_,"object",(function (m,eps){
var and__3911__auto__ = clojure.core.matrix.impl.common.square_QMARK_.call(null,m);
if(cljs.core.truth_(and__3911__auto__)){
return clojure.core.matrix.protocols.matrix_equals_epsilon.call(null,clojure.core.matrix.protocols.matrix_multiply.call(null,m,clojure.core.matrix.protocols.transpose.call(null,m)),clojure.core.matrix.protocols.identity_matrix.call(null,m,clojure.core.matrix.protocols.dimension_count.call(null,m,(0))),eps);
} else {
return and__3911__auto__;
}
}));
goog.object.set(clojure.core.matrix.protocols.PSelect,"null",true);

goog.object.set(clojure.core.matrix.protocols.select,"null",(function (a,area){
if(cljs.core.seq.call(null,area)){
throw cljs.core.ex_info.call(null,["Trying to select on nil with selection: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(area)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

return null;
}));

goog.object.set(clojure.core.matrix.protocols.PSelect,"number",true);

goog.object.set(clojure.core.matrix.protocols.select,"number",(function (a,area){
if(cljs.core.seq.call(null,area)){
throw cljs.core.ex_info.call(null,["Trying to select on numerical scalar with selection: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(area)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

return a;
}));

goog.object.set(clojure.core.matrix.protocols.PSelect,"object",true);

goog.object.set(clojure.core.matrix.protocols.select,"object",(function (a,area){
var or__3922__auto__ = clojure.core.matrix.protocols.select_view.call(null,a,area);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return clojure.core.matrix.impl.wrappers.wrap_selection.call(null,a,area);
}
}));
goog.object.set(clojure.core.matrix.protocols.PSelectView,"null",true);

goog.object.set(clojure.core.matrix.protocols.select_view,"null",(function (a,area){
if(cljs.core.seq.call(null,area)){
throw cljs.core.ex_info.call(null,["Trying to select on nil with selection: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(area)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

return null;
}));

goog.object.set(clojure.core.matrix.protocols.PSelectView,"object",true);

goog.object.set(clojure.core.matrix.protocols.select_view,"object",(function (a,area){
return clojure.core.matrix.impl.wrappers.wrap_selection.call(null,a,area);
}));

goog.object.set(clojure.core.matrix.protocols.PSelectView,"number",true);

goog.object.set(clojure.core.matrix.protocols.select_view,"number",(function (a,area){
if(cljs.core.seq.call(null,area)){
throw cljs.core.ex_info.call(null,["Trying to select on numerical scalar with selection: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(area)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

return a;
}));
goog.object.set(clojure.core.matrix.protocols.PSelect,"number",true);

goog.object.set(clojure.core.matrix.protocols.select,"number",(function (a,area){
if(cljs.core.empty_QMARK_.call(null,area)){
return a;
} else {
throw cljs.core.ex_info.call(null,["Non empty area argument in select, called on Number ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(a)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
}));
clojure.core.matrix.impl.defaults.area_indices = (function clojure$core$matrix$impl$defaults$area_indices(area){
return cljs.core.reduce.call(null,(function (io,in$){
var iter__4292__auto__ = (function clojure$core$matrix$impl$defaults$area_indices_$_iter__33053(s__33054){
return (new cljs.core.LazySeq(null,(function (){
var s__33054__$1 = s__33054;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__33054__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var a = cljs.core.first.call(null,xs__6012__auto__);
var iterys__4288__auto__ = ((function (s__33054__$1,a,xs__6012__auto__,temp__5457__auto__){
return (function clojure$core$matrix$impl$defaults$area_indices_$_iter__33053_$_iter__33055(s__33056){
return (new cljs.core.LazySeq(null,((function (s__33054__$1,a,xs__6012__auto__,temp__5457__auto__){
return (function (){
var s__33056__$1 = s__33056;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__33056__$1);
if(temp__5457__auto____$1){
var s__33056__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33056__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__33056__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__33058 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__33057 = (0);
while(true){
if((i__33057 < size__4291__auto__)){
var b = cljs.core._nth.call(null,c__4290__auto__,i__33057);
cljs.core.chunk_append.call(null,b__33058,cljs.core.cons.call(null,a,b));

var G__33059 = (i__33057 + (1));
i__33057 = G__33059;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33058),clojure$core$matrix$impl$defaults$area_indices_$_iter__33053_$_iter__33055.call(null,cljs.core.chunk_rest.call(null,s__33056__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33058),null);
}
} else {
var b = cljs.core.first.call(null,s__33056__$2);
return cljs.core.cons.call(null,cljs.core.cons.call(null,a,b),clojure$core$matrix$impl$defaults$area_indices_$_iter__33053_$_iter__33055.call(null,cljs.core.rest.call(null,s__33056__$2)));
}
} else {
return null;
}
break;
}
});})(s__33054__$1,a,xs__6012__auto__,temp__5457__auto__))
,null,null));
});})(s__33054__$1,a,xs__6012__auto__,temp__5457__auto__))
;
var fs__4289__auto__ = cljs.core.seq.call(null,iterys__4288__auto__.call(null,io));
if(fs__4289__auto__){
return cljs.core.concat.call(null,fs__4289__auto__,clojure$core$matrix$impl$defaults$area_indices_$_iter__33053.call(null,cljs.core.rest.call(null,s__33054__$1)));
} else {
var G__33060 = cljs.core.rest.call(null,s__33054__$1);
s__33054__$1 = G__33060;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,in$);
}),cljs.core.mapv.call(null,cljs.core.vector,cljs.core.last.call(null,area)),cljs.core.rest.call(null,cljs.core.reverse.call(null,area)));
});
clojure.core.matrix.impl.defaults.indices = (function clojure$core$matrix$impl$defaults$indices(vals){
return clojure.core.matrix.impl.defaults.area_indices.call(null,cljs.core.mapv.call(null,cljs.core.range,clojure.core.matrix.protocols.get_shape.call(null,vals)));
});
goog.object.set(clojure.core.matrix.protocols.PSetSelection,"object",true);

goog.object.set(clojure.core.matrix.protocols.set_selection,"object",(function (m,area,vals){
var mm = (function (){var or__3922__auto__ = clojure.core.matrix.protocols.mutable_matrix.call(null,m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return clojure.core.matrix.impl.defaults.construct_mutable_matrix.call(null,m);
}
})();
var v = clojure.core.matrix.protocols.select_view.call(null,m,area);
clojure.core.matrix.protocols.assign_BANG_.call(null,v,vals);

return mm;
}));
goog.object.set(clojure.core.matrix.protocols.PIndexImplementation,"object",true);

goog.object.set(clojure.core.matrix.protocols.index_QMARK_,"object",(function (m){
return false;
}));

goog.object.set(clojure.core.matrix.protocols.index_to_longs,"object",(function (m){
return cljs.core.long_array.call(null,clojure.core.matrix.protocols.element_seq.call(null,m));
}));

goog.object.set(clojure.core.matrix.protocols.index_to_ints,"object",(function (m){
return cljs.core.int_array.call(null,clojure.core.matrix.protocols.element_seq.call(null,m));
}));

goog.object.set(clojure.core.matrix.protocols.index_from_longs,"object",(function (m,xs){
return cljs.core.long_array.call(null,xs);
}));

goog.object.set(clojure.core.matrix.protocols.index_from_ints,"object",(function (m,xs){
return cljs.core.int_array.call(null,xs);
}));

goog.object.set(clojure.core.matrix.protocols.index_coerce,"object",(function (m,a){
return clojure.core.matrix.protocols.index_to_longs.call(null,m);
}));
goog.object.set(clojure.core.matrix.protocols.PDimensionLabels,"object",true);

goog.object.set(clojure.core.matrix.protocols.label,"object",(function (m,dim,i){
if(((((0) <= cljs.core.long$.call(null,i))) && ((cljs.core.long$.call(null,i) <= (cljs.core.long$.call(null,clojure.core.matrix.protocols.dimension_count.call(null,m,dim)) - (1)))))){
return null;
} else {
throw cljs.core.ex_info.call(null,["Dimension index out of range: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
}));

goog.object.set(clojure.core.matrix.protocols.labels,"object",(function (m,dim){
if(((((0) <= cljs.core.long$.call(null,dim))) && ((cljs.core.long$.call(null,dim) <= (cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m)) - (1)))))){
return null;
} else {
throw cljs.core.ex_info.call(null,["Dimension out of range: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dim)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
}));
goog.object.set(clojure.core.matrix.protocols.PColumnNames,"object",true);

goog.object.set(clojure.core.matrix.protocols.column_name,"object",(function (m,i){
var dim = (cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m)) - (1));
return clojure.core.matrix.protocols.label.call(null,m,dim,i);
}));

goog.object.set(clojure.core.matrix.protocols.column_names,"object",(function (m){
var dim = (cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m)) - (1));
return clojure.core.matrix.protocols.labels.call(null,m,dim);
}));
goog.object.set(clojure.core.matrix.protocols.PNorm,"object",true);

goog.object.set(clojure.core.matrix.protocols.norm,"object",(function (m,p){
if(cljs.core._EQ_.call(null,p,Number.POSITIVE_INFINITY)){
return clojure.core.matrix.protocols.element_max.call(null,clojure.core.matrix.protocols.element_map.call(null,m,clojure.core.matrix.impl.mathsops.abs));
} else {
if(typeof p === 'number'){
var sum_of_element_powers = clojure.core.matrix.protocols.element_sum.call(null,clojure.core.matrix.protocols.element_pow.call(null,clojure.core.matrix.protocols.element_map.call(null,m,clojure.core.matrix.impl.mathsops.abs),p));
var pred__33061 = cljs.core._EQ__EQ_;
var expr__33062 = p;
if(cljs.core.truth_(pred__33061.call(null,(1),expr__33062))){
return sum_of_element_powers;
} else {
if(cljs.core.truth_(pred__33061.call(null,(2),expr__33062))){
return Math.sqrt(sum_of_element_powers);
} else {
if(cljs.core.truth_(pred__33061.call(null,(3),expr__33062))){
return Math.cbrt(sum_of_element_powers);
} else {
return Math.pow(sum_of_element_powers,(1.0 / p));
}
}
}
} else {
throw cljs.core.ex_info.call(null,["p must be a number"].join(''),cljs.core.PersistentArrayMap.EMPTY);

}
}
}));
clojure.core.matrix.impl.defaults.compute_q = (function clojure$core$matrix$impl$defaults$compute_q(m,qr_data,mcols,mrows,min_len,us,vs,gammas){
var q = clojure.core.matrix.protocols.to_double_array.call(null,clojure.core.matrix.protocols.identity_matrix.call(null,cljs.core.PersistentVector.EMPTY,mrows));
var mcols__$1 = cljs.core.long$.call(null,mcols);
var mrows__$1 = cljs.core.long$.call(null,mrows);
var min_len__$1 = cljs.core.long$.call(null,min_len);
var i_33064 = (min_len__$1 - (1));
while(true){
if((i_33064 > (-1))){
var gamma_33065 = (gammas[i_33064]);
(us[i_33064] = 1.0);

var j_33066 = (i_33064 + (1));
while(true){
if((j_33066 < mrows__$1)){
(us[j_33066] = (qr_data[((j_33066 * mcols__$1) + i_33064)]));

var G__33067 = (j_33066 + (1));
j_33066 = G__33067;
continue;
} else {
}
break;
}


var j_33068 = i_33064;
while(true){
if((j_33068 < mrows__$1)){
(vs[j_33068] = ((us[i_33064]) * (q[((i_33064 * mrows__$1) + j_33068)])));

var G__33069 = (j_33068 + (1));
j_33068 = G__33069;
continue;
} else {
}
break;
}


var j_33070 = (i_33064 + (1));
while(true){
if((j_33070 < mrows__$1)){
var u_33071 = (us[j_33070]);
var k_33072 = i_33064;
while(true){
if((k_33072 < mrows__$1)){
var q_idx_33073 = (((j_33070 * mrows__$1) + i_33064) + (k_33072 - i_33064));
(vs[k_33072] = ((vs[k_33072]) + (u_33071 * (q[q_idx_33073]))));

var G__33074 = (k_33072 + (1));
k_33072 = G__33074;
continue;
} else {
}
break;
}


var G__33075 = (j_33070 + (1));
j_33070 = G__33075;
continue;
} else {
}
break;
}


var j_33076 = i_33064;
while(true){
if((j_33076 < mrows__$1)){
(vs[j_33076] = ((vs[j_33076]) * gamma_33065));

var G__33077 = (j_33076 + (1));
j_33076 = G__33077;
continue;
} else {
}
break;
}


var j_33078 = i_33064;
while(true){
if((j_33078 < mrows__$1)){
var u_33079 = (us[j_33078]);
var k_33080 = i_33064;
while(true){
if((k_33080 < mrows__$1)){
var qr_idx_33081 = (((j_33078 * mrows__$1) + i_33064) + (k_33080 - i_33064));
(q[qr_idx_33081] = ((q[qr_idx_33081]) - (u_33079 * (vs[k_33080]))));

var G__33082 = (k_33080 + (1));
k_33080 = G__33082;
continue;
} else {
}
break;
}


var G__33083 = (j_33078 + (1));
j_33078 = G__33083;
continue;
} else {
}
break;
}


var G__33084 = (i_33064 - (1));
i_33064 = G__33084;
continue;
} else {
}
break;
}


return clojure.core.matrix.protocols.compute_matrix.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mrows__$1,mrows__$1], null),((function (q,mcols__$1,mrows__$1,min_len__$1){
return (function (i,j){
return (q[((i * mrows__$1) + j)]);
});})(q,mcols__$1,mrows__$1,min_len__$1))
);
});
clojure.core.matrix.impl.defaults.compute_r = (function clojure$core$matrix$impl$defaults$compute_r(m,data,mcols,mrows,min_len,compact_QMARK_){
var mrows__$1 = cljs.core.long$.call(null,mrows);
var mcols__$1 = cljs.core.long$.call(null,mcols);
var min_len__$1 = cljs.core.long$.call(null,min_len);
var cm = clojure.core.matrix.protocols.compute_matrix.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mrows__$1,mcols__$1], null),((function (mrows__$1,mcols__$1,min_len__$1){
return (function (i,j){
if((((i < min_len__$1)) && ((j >= i)) && ((j < mcols__$1)))){
return (data[((i * mcols__$1) + j)]);
} else {
return (0);
}
});})(mrows__$1,mcols__$1,min_len__$1))
);
if(cljs.core.truth_(compact_QMARK_)){
var slcs = clojure.core.matrix.protocols.get_major_slice_seq.call(null,cm);
var non_zero_rows = cljs.core.long$.call(null,cljs.core.reduce.call(null,((function (slcs,mrows__$1,mcols__$1,min_len__$1,cm){
return (function (cnt,slice){
if(cljs.core.every_QMARK_.call(null,cljs.core.zero_QMARK_,slice)){
return (cnt + (1));
} else {
return cnt;
}
});})(slcs,mrows__$1,mcols__$1,min_len__$1,cm))
,(0),slcs));
return clojure.core.matrix.protocols.reshape.call(null,cm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mcols__$1,(mrows__$1 - non_zero_rows)], null));
} else {
return cm;
}
});
clojure.core.matrix.impl.defaults.householder_qr = (function clojure$core$matrix$impl$defaults$householder_qr(qr_data,idx,mcols,mrows,us,gammas){
var idx__$1 = cljs.core.long$.call(null,idx);
var mcols__$1 = cljs.core.long$.call(null,mcols);
var mrows__$1 = cljs.core.long$.call(null,mrows);
var qr_idx_33086 = cljs.core.long$.call(null,(idx__$1 + (idx__$1 * mcols__$1)));
var i_33087 = cljs.core.long$.call(null,idx__$1);
while(true){
if((i_33087 < mrows__$1)){
(us[i_33087] = (qr_data[qr_idx_33086]));

var G__33088 = (qr_idx_33086 + mcols__$1);
var G__33089 = (i_33087 + (1));
qr_idx_33086 = G__33088;
i_33087 = G__33089;
continue;
} else {
}
break;
}

var max_ = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,((function (idx__$1,mcols__$1,mrows__$1){
return (function (p1__33085_SHARP_){
return Math.abs(p1__33085_SHARP_);
});})(idx__$1,mcols__$1,mrows__$1))
,clojure.core.matrix.protocols.subvector.call(null,us,idx__$1,(mrows__$1 - idx__$1))));
if(cljs.core._EQ_.call(null,max_,0.0)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null);
} else {
var _ = (function (){
var i_33090 = idx__$1;
while(true){
if((i_33090 < mrows__$1)){
(us[i_33090] = ((us[i_33090]) / max_));

var G__33091 = (i_33090 + (1));
i_33090 = G__33091;
continue;
} else {
}
break;
}

return null;
})()
;
var tau = Math.sqrt(cljs.core.reduce.call(null,((function (_,max_,idx__$1,mcols__$1,mrows__$1){
return (function (acc,x){
return (acc + (x * x));
});})(_,max_,idx__$1,mcols__$1,mrows__$1))
,0.0,clojure.core.matrix.protocols.subvector.call(null,us,idx__$1,(mrows__$1 - idx__$1))));
var u_idx = (us[idx__$1]);
var tau__$1 = (((u_idx < (0)))?(- tau):tau);
var u_0 = (u_idx + tau__$1);
var gamma = (u_0 / tau__$1);
var tau__$2 = (tau__$1 * max_);
(gammas[idx__$1] = gamma);

var i_33092 = (idx__$1 + (1));
while(true){
if((i_33092 < mrows__$1)){
(us[i_33092] = ((us[i_33092]) / u_0));

var G__33093 = (i_33092 + (1));
i_33092 = G__33093;
continue;
} else {
}
break;
}


(us[idx__$1] = 1.0);

return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"gamma","gamma",1883969687),gamma,new cljs.core.Keyword(null,"gammas","gammas",-195052461),gammas,new cljs.core.Keyword(null,"us","us",746429226),us,new cljs.core.Keyword(null,"tau","tau",89782904),tau__$2,new cljs.core.Keyword(null,"error","error",-978969032),false], null);
}
});
clojure.core.matrix.impl.defaults.update_qr = (function clojure$core$matrix$impl$defaults$update_qr(qr_data,idx,mcols,mrows,vs,us,gamma,tau){
var idx__$1 = cljs.core.long$.call(null,idx);
var mrows__$1 = cljs.core.long$.call(null,mrows);
var mcols__$1 = cljs.core.long$.call(null,mcols);
var u = (us[idx__$1]);
var idx_PLUS_1 = (idx__$1 + (1));
var gamma__$1 = gamma;
var tau__$1 = tau;
var i_33094 = idx_PLUS_1;
while(true){
if((i_33094 < mcols__$1)){
(vs[i_33094] = (qr_data[(i_33094 + (idx__$1 * mcols__$1))]));

var G__33095 = (i_33094 + (1));
i_33094 = G__33095;
continue;
} else {
}
break;
}


var i_33096 = idx_PLUS_1;
while(true){
if((i_33096 < mrows__$1)){
var qr_idx_33097 = (idx_PLUS_1 + (i_33096 * mcols__$1));
var j_33098 = idx_PLUS_1;
while(true){
if((j_33098 < mcols__$1)){
(vs[j_33098] = ((vs[j_33098]) + ((us[i_33096]) * (qr_data[(qr_idx_33097 + (j_33098 - idx_PLUS_1))]))));

var G__33099 = (j_33098 + (1));
j_33098 = G__33099;
continue;
} else {
}
break;
}


var G__33100 = (i_33096 + (1));
i_33096 = G__33100;
continue;
} else {
}
break;
}


var i_33101 = idx_PLUS_1;
while(true){
if((i_33101 < mcols__$1)){
(vs[i_33101] = ((vs[i_33101]) * gamma__$1));

var G__33102 = (i_33101 + (1));
i_33101 = G__33102;
continue;
} else {
}
break;
}


var i_33103 = idx__$1;
while(true){
if((i_33103 < mrows__$1)){
var u_33104__$1 = (us[i_33103]);
var j_33105 = idx_PLUS_1;
while(true){
if((j_33105 < mcols__$1)){
var qr_idx_33106 = (((i_33103 * mcols__$1) + idx_PLUS_1) + (j_33105 - idx_PLUS_1));
(qr_data[qr_idx_33106] = ((qr_data[qr_idx_33106]) - (u_33104__$1 * (vs[j_33105]))));

var G__33107 = (j_33105 + (1));
j_33105 = G__33107;
continue;
} else {
}
break;
}


var G__33108 = (i_33103 + (1));
i_33103 = G__33108;
continue;
} else {
}
break;
}


if((idx__$1 < mcols__$1)){
(qr_data[(idx__$1 + (idx__$1 * mcols__$1))] = (- tau__$1));
} else {
}

var i_33109 = idx_PLUS_1;
while(true){
if((i_33109 < mrows__$1)){
(qr_data[(idx__$1 + (i_33109 * mcols__$1))] = (us[i_33109]));

var G__33110 = (i_33109 + (1));
i_33109 = G__33110;
continue;
} else {
}
break;
}


return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"qr-data","qr-data",-504970292),qr_data,new cljs.core.Keyword(null,"vs","vs",-2022097090),vs], null);
});
goog.object.set(clojure.core.matrix.protocols.PQRDecomposition,"object",true);

goog.object.set(clojure.core.matrix.protocols.qr,"object",(function (m,options){
var vec__33111 = clojure.core.matrix.protocols.get_shape.call(null,m);
var mrows = cljs.core.nth.call(null,vec__33111,(0),null);
var mcols = cljs.core.nth.call(null,vec__33111,(1),null);
var mrows__$1 = cljs.core.long$.call(null,mrows);
var mcols__$1 = cljs.core.long$.call(null,mcols);
var min_len = (function (){var x__4009__auto__ = mcols__$1;
var y__4010__auto__ = mrows__$1;
return ((x__4009__auto__ < y__4010__auto__) ? x__4009__auto__ : y__4010__auto__);
})();
var max_len = (function (){var x__4006__auto__ = mcols__$1;
var y__4007__auto__ = mrows__$1;
return ((x__4006__auto__ > y__4007__auto__) ? x__4006__auto__ : y__4007__auto__);
})();
var qr_data = clojure.core.matrix.protocols.to_double_array.call(null,m);
var vs = cljs.core.double_array.call(null,max_len);
var us = cljs.core.double_array.call(null,max_len);
var gammas = cljs.core.double_array.call(null,min_len);
var gamma = 0.0;
var tau = 0.0;
var i = (0);
while(true){
if((i < min_len)){
var map__33114 = clojure.core.matrix.impl.defaults.householder_qr.call(null,qr_data,i,mcols__$1,mrows__$1,us,gammas);
var map__33114__$1 = ((((!((map__33114 == null)))?(((((map__33114.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33114.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33114):map__33114);
var us__$1 = cljs.core.get.call(null,map__33114__$1,new cljs.core.Keyword(null,"us","us",746429226));
var gamma__$1 = cljs.core.get.call(null,map__33114__$1,new cljs.core.Keyword(null,"gamma","gamma",1883969687));
var gammas__$1 = cljs.core.get.call(null,map__33114__$1,new cljs.core.Keyword(null,"gammas","gammas",-195052461));
var tau__$1 = cljs.core.get.call(null,map__33114__$1,new cljs.core.Keyword(null,"tau","tau",89782904));
var error = cljs.core.get.call(null,map__33114__$1,new cljs.core.Keyword(null,"error","error",-978969032));
if(cljs.core.truth_(error)){
return null;
} else {
var map__33116 = clojure.core.matrix.impl.defaults.update_qr.call(null,qr_data,i,mcols__$1,mrows__$1,vs,us__$1,gamma__$1,tau__$1);
var map__33116__$1 = ((((!((map__33116 == null)))?(((((map__33116.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33116.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33116):map__33116);
var qr_data__$1 = cljs.core.get.call(null,map__33116__$1,new cljs.core.Keyword(null,"qr-data","qr-data",-504970292));
var vs__$1 = cljs.core.get.call(null,map__33116__$1,new cljs.core.Keyword(null,"vs","vs",-2022097090));
var G__33122 = qr_data__$1;
var G__33123 = vs__$1;
var G__33124 = us__$1;
var G__33125 = gammas__$1;
var G__33126 = gamma__$1;
var G__33127 = tau__$1;
var G__33128 = (i + (1));
qr_data = G__33122;
vs = G__33123;
us = G__33124;
gammas = G__33125;
gamma = G__33126;
tau = G__33127;
i = G__33128;
continue;
}
} else {
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (qr_data,vs,us,gammas,gamma,tau,i,vec__33111,mrows,mcols,mrows__$1,mcols__$1,min_len,max_len){
return (function (p__33118){
var vec__33119 = p__33118;
var k = cljs.core.nth.call(null,vec__33119,(0),null);
var v = cljs.core.nth.call(null,vec__33119,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v.call(null)], null);
});})(qr_data,vs,us,gammas,gamma,tau,i,vec__33111,mrows,mcols,mrows__$1,mcols__$1,min_len,max_len))
,cljs.core.select_keys.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Q","Q",663320520),((function (qr_data,vs,us,gammas,gamma,tau,i,vec__33111,mrows,mcols,mrows__$1,mcols__$1,min_len,max_len){
return (function (){
return clojure.core.matrix.impl.defaults.compute_q.call(null,m,qr_data,mcols__$1,mrows__$1,min_len,us,vs,gammas);
});})(qr_data,vs,us,gammas,gamma,tau,i,vec__33111,mrows,mcols,mrows__$1,mcols__$1,min_len,max_len))
,new cljs.core.Keyword(null,"R","R",-936662523),((function (qr_data,vs,us,gammas,gamma,tau,i,vec__33111,mrows,mcols,mrows__$1,mcols__$1,min_len,max_len){
return (function (){
return clojure.core.matrix.impl.defaults.compute_r.call(null,m,qr_data,mcols__$1,mrows__$1,min_len,new cljs.core.Keyword(null,"compact","compact",-348732150).cljs$core$IFn$_invoke$arity$1(options));
});})(qr_data,vs,us,gammas,gamma,tau,i,vec__33111,mrows,mcols,mrows__$1,mcols__$1,min_len,max_len))
], null),new cljs.core.Keyword(null,"return","return",-1891502105).cljs$core$IFn$_invoke$arity$1(options))));
}
break;
}
}));
goog.object.set(clojure.core.matrix.protocols.PCholeskyDecomposition,"object",true);

goog.object.set(clojure.core.matrix.protocols.cholesky,"object",(function (m,options){
if(cljs.core.truth_(clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_)){
var _STAR_trying_current_implementation_STAR_33129 = clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_;
clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_ = true;

try{var imp__22228__auto__ = clojure.core.matrix.implementations.get_canonical_object.call(null);
var m__$1 = clojure.core.matrix.protocols.coerce_param.call(null,imp__22228__auto__,m);
return clojure.core.matrix.protocols.cholesky.call(null,m__$1,options);
}finally {clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_ = _STAR_trying_current_implementation_STAR_33129;
}} else {
return null;
}
}));
goog.object.set(clojure.core.matrix.protocols.PLUDecomposition,"object",true);

goog.object.set(clojure.core.matrix.protocols.lu,"object",(function (m,options){
if(cljs.core.truth_(clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_)){
var _STAR_trying_current_implementation_STAR_33130 = clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_;
clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_ = true;

try{var imp__22228__auto__ = clojure.core.matrix.implementations.get_canonical_object.call(null);
var m__$1 = clojure.core.matrix.protocols.coerce_param.call(null,imp__22228__auto__,m);
return clojure.core.matrix.protocols.lu.call(null,m__$1,options);
}finally {clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_ = _STAR_trying_current_implementation_STAR_33130;
}} else {
return null;
}
}));
goog.object.set(clojure.core.matrix.protocols.PSVDDecomposition,"object",true);

goog.object.set(clojure.core.matrix.protocols.svd,"object",(function (m,options){
if(cljs.core.truth_(clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_)){
var _STAR_trying_current_implementation_STAR_33131 = clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_;
clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_ = true;

try{var imp__22228__auto__ = clojure.core.matrix.implementations.get_canonical_object.call(null);
var m__$1 = clojure.core.matrix.protocols.coerce_param.call(null,imp__22228__auto__,m);
return clojure.core.matrix.protocols.svd.call(null,m__$1,options);
}finally {clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_ = _STAR_trying_current_implementation_STAR_33131;
}} else {
return null;
}
}));
goog.object.set(clojure.core.matrix.protocols.PEigenDecomposition,"object",true);

goog.object.set(clojure.core.matrix.protocols.eigen,"object",(function (m,options){
if(cljs.core.truth_(clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_)){
var _STAR_trying_current_implementation_STAR_33132 = clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_;
clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_ = true;

try{var imp__22228__auto__ = clojure.core.matrix.implementations.get_canonical_object.call(null);
var m__$1 = clojure.core.matrix.protocols.coerce_param.call(null,imp__22228__auto__,m);
return clojure.core.matrix.protocols.eigen.call(null,m__$1,options);
}finally {clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_ = _STAR_trying_current_implementation_STAR_33132;
}} else {
return null;
}
}));
goog.object.set(clojure.core.matrix.protocols.PSolveLinear,"object",true);

goog.object.set(clojure.core.matrix.protocols.solve,"object",(function (a,b){
if(cljs.core.truth_(clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_)){
var _STAR_trying_current_implementation_STAR_33133 = clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_;
clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_ = true;

try{var imp__22228__auto__ = clojure.core.matrix.implementations.get_canonical_object.call(null);
var a__$1 = clojure.core.matrix.protocols.coerce_param.call(null,imp__22228__auto__,a);
return clojure.core.matrix.protocols.solve.call(null,a__$1,b);
}finally {clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_ = _STAR_trying_current_implementation_STAR_33133;
}} else {
return null;
}
}));
goog.object.set(clojure.core.matrix.protocols.PLeastSquares,"object",true);

goog.object.set(clojure.core.matrix.protocols.least_squares,"object",(function (a,b){
if(cljs.core.truth_(clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_)){
var _STAR_trying_current_implementation_STAR_33134 = clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_;
clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_ = true;

try{var imp__22228__auto__ = clojure.core.matrix.implementations.get_canonical_object.call(null);
var a__$1 = clojure.core.matrix.protocols.coerce_param.call(null,imp__22228__auto__,a);
return clojure.core.matrix.protocols.least_squares.call(null,a__$1,b);
}finally {clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_ = _STAR_trying_current_implementation_STAR_33134;
}} else {
return null;
}
}));

//# sourceMappingURL=defaults.js.map?rel=1526826989469
