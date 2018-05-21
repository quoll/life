// Compiled by ClojureScript 1.10.238 {}
goog.provide('clojure.core.matrix');
goog.require('cljs.core');
goog.require('clojure.core.matrix.impl.defaults');
goog.require('clojure.core.matrix.impl.persistent_vector');
goog.require('clojure.core.matrix.impl.sequence');
goog.require('clojure.core.matrix.protocols');
goog.require('clojure.core.matrix.implementations');
goog.require('clojure.core.matrix.impl.mathsops');
goog.require('clojure.core.matrix.impl.wrappers');
goog.require('clojure.core.matrix.utils');
clojure.core.matrix.class$ = cljs.core.type;

/**
 * Constructs a new n-dimensional array from the given data.
 * 
 * This function will examine the data in order to construct an array of the appropriate shape.
 * 
 * The data may be in one of the following forms:
 * - A valid existing array (which will be converted to the implementation)
 * - Nested sequences of scalar values, e.g. Clojure vectors (must have regular shape)
 * - A sequence of slices, each of which must be valid array data
 * - A single scalar value, which will be wrapped or coerced as necessary for the implementation
 * 
 * If implementation is not specified, uses the current matrix library as specified
 * in *matrix-implementation*
 * 
 * If the implementation does not support the shape or type of data provided, may either
 * create an array using a different implementation on a best-efforts basis or
 * alternatively throw an error. This behaviour is implementation-specific.
 */
clojure.core.matrix.array = (function clojure$core$matrix$array(var_args){
var G__34038 = arguments.length;
switch (G__34038) {
case 1:
return clojure.core.matrix.array.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.array.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.core.matrix.array.cljs$core$IFn$_invoke$arity$1 = (function (data){
var or__3922__auto__ = clojure.core.matrix.protocols.construct_matrix.call(null,clojure.core.matrix.implementation_check.call(null),data);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return clojure.core.matrix.protocols.coerce_param.call(null,cljs.core.PersistentVector.EMPTY,data);
}
});

clojure.core.matrix.array.cljs$core$IFn$_invoke$arity$2 = (function (implementation,data){
var or__3922__auto__ = clojure.core.matrix.protocols.construct_matrix.call(null,clojure.core.matrix.implementation_check.call(null,implementation),data);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return clojure.core.matrix.protocols.coerce_param.call(null,cljs.core.PersistentVector.EMPTY,data);
}
});

clojure.core.matrix.array.cljs$lang$maxFixedArity = 2;

/**
 * Constructs a new 2-dimensional matrix from the given numerical data.
 * 
 * The data may be in one of the following forms:
 * - A valid existing numerical array
 * - Nested sequences of scalar values, e.g. Clojure vectors
 * - A sequence of slices, each of which must be valid matrix data
 * 
 * If implementation is not specified, uses the current matrix library as specified
 * in *matrix-implementation*
 * 
 * `matrix` works as a synonym for `array`
 */
clojure.core.matrix.matrix = (function clojure$core$matrix$matrix(var_args){
var G__34041 = arguments.length;
switch (G__34041) {
case 1:
return clojure.core.matrix.matrix.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.matrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.core.matrix.matrix.cljs$core$IFn$_invoke$arity$1 = (function (data){
return clojure.core.matrix.array.call(null,data);
});

clojure.core.matrix.matrix.cljs$core$IFn$_invoke$arity$2 = (function (implementation,data){
return clojure.core.matrix.array.call(null,implementation,data);
});

clojure.core.matrix.matrix.cljs$lang$maxFixedArity = 2;

/**
 * Constructs a new 1-dimensional integer index from given data.
 * 
 * The data may be in one of the following forms:
 * - A valid existing index
 * - A 1D array of integer values
 * - A sequence of integer values
 * 
 * If implementation is not specified, uses the current matrix library as specified
 * in *matrix-implementation* to produce the index object.
 * 
 * If the implementation does not support its own native index types, will return a
 * valid index from a default implementation.
 */
clojure.core.matrix.index = (function clojure$core$matrix$index(var_args){
var G__34044 = arguments.length;
switch (G__34044) {
case 1:
return clojure.core.matrix.index.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.index.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.core.matrix.index.cljs$core$IFn$_invoke$arity$1 = (function (data){
var or__3922__auto__ = clojure.core.matrix.protocols.index_coerce.call(null,clojure.core.matrix.implementation_check.call(null),data);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return clojure.core.matrix.protocols.index_coerce.call(null,cljs.core.PersistentVector.EMPTY,data);
}
});

clojure.core.matrix.index.cljs$core$IFn$_invoke$arity$2 = (function (implementation,data){
var or__3922__auto__ = clojure.core.matrix.protocols.index_coerce.call(null,clojure.core.matrix.implementation_check.call(null,implementation),data);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return clojure.core.matrix.protocols.index_coerce.call(null,cljs.core.PersistentVector.EMPTY,data);
}
});

clojure.core.matrix.index.cljs$lang$maxFixedArity = 2;

/**
 * Constructs a new zero-filled numerical vector with the given length.
 * 
 * Implementations are encouraged to return immutable vectors or sparse vectors
 * for efficency whre available.
 */
clojure.core.matrix.zero_vector = (function clojure$core$matrix$zero_vector(var_args){
var G__34047 = arguments.length;
switch (G__34047) {
case 1:
return clojure.core.matrix.zero_vector.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.zero_vector.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.core.matrix.zero_vector.cljs$core$IFn$_invoke$arity$1 = (function (length){
return clojure.core.matrix.protocols.new_vector.call(null,clojure.core.matrix.implementation_check.call(null),length);
});

clojure.core.matrix.zero_vector.cljs$core$IFn$_invoke$arity$2 = (function (implementation,length){
return clojure.core.matrix.protocols.new_vector.call(null,clojure.core.matrix.implementation_check.call(null,implementation),length);
});

clojure.core.matrix.zero_vector.cljs$lang$maxFixedArity = 2;

/**
 * Constructs a new vector with the given length.
 * New matrix will contain default values as defined by the implementation (usually null or zero).
 * If the implementation supports mutable vectors, then the new vector will be fully mutable.
 */
clojure.core.matrix.new_vector = (function clojure$core$matrix$new_vector(var_args){
var G__34050 = arguments.length;
switch (G__34050) {
case 1:
return clojure.core.matrix.new_vector.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.new_vector.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.core.matrix.new_vector.cljs$core$IFn$_invoke$arity$1 = (function (length){
return clojure.core.matrix.protocols.new_vector.call(null,clojure.core.matrix.implementation_check.call(null),length);
});

clojure.core.matrix.new_vector.cljs$core$IFn$_invoke$arity$2 = (function (implementation,length){
return clojure.core.matrix.protocols.new_vector.call(null,clojure.core.matrix.implementation_check.call(null,implementation),length);
});

clojure.core.matrix.new_vector.cljs$lang$maxFixedArity = 2;

/**
 * Returns a zero-filled numerical matrix with the given dimensions, for the given implementation or the current
 * implementation if not specified.
 * 
 * May produce a lightweight immutable zero matrix if supported by the implementation.
 */
clojure.core.matrix.zero_matrix = (function clojure$core$matrix$zero_matrix(var_args){
var G__34053 = arguments.length;
switch (G__34053) {
case 2:
return clojure.core.matrix.zero_matrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.zero_matrix.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.core.matrix.zero_matrix.cljs$core$IFn$_invoke$arity$2 = (function (rows,columns){
return clojure.core.matrix.protocols.new_matrix.call(null,clojure.core.matrix.implementation_check.call(null),rows,columns);
});

clojure.core.matrix.zero_matrix.cljs$core$IFn$_invoke$arity$3 = (function (implementation,rows,columns){
return clojure.core.matrix.protocols.new_matrix.call(null,clojure.core.matrix.implementation_check.call(null,implementation),rows,columns);
});

clojure.core.matrix.zero_matrix.cljs$lang$maxFixedArity = 3;

/**
 * Constructs a new 2D array (matrix) with the given dimensions.
 * The new matrix will contain default values as defined by the implementation (usually null or zero).
 * If the implementation supports mutable matrices, then the new matrix will be fully mutable.
 */
clojure.core.matrix.new_matrix = (function clojure$core$matrix$new_matrix(var_args){
var G__34056 = arguments.length;
switch (G__34056) {
case 2:
return clojure.core.matrix.new_matrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.new_matrix.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.core.matrix.new_matrix.cljs$core$IFn$_invoke$arity$2 = (function (rows,columns){
return clojure.core.matrix.protocols.new_matrix.call(null,clojure.core.matrix.implementation_check.call(null),rows,columns);
});

clojure.core.matrix.new_matrix.cljs$core$IFn$_invoke$arity$3 = (function (implementation,rows,columns){
return clojure.core.matrix.protocols.new_matrix.call(null,clojure.core.matrix.implementation_check.call(null,implementation),rows,columns);
});

clojure.core.matrix.new_matrix.cljs$lang$maxFixedArity = 3;

/**
 * Creates a new zero-filled numerical array with the given shape.
 */
clojure.core.matrix.zero_array = (function clojure$core$matrix$zero_array(var_args){
var G__34059 = arguments.length;
switch (G__34059) {
case 1:
return clojure.core.matrix.zero_array.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.zero_array.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.core.matrix.zero_array.cljs$core$IFn$_invoke$arity$1 = (function (shape){
var or__3922__auto__ = clojure.core.matrix.protocols.new_matrix_nd.call(null,clojure.core.matrix.implementation_check.call(null),shape);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return clojure.core.matrix.protocols.new_matrix_nd.call(null,cljs.core.PersistentVector.EMPTY,shape);
}
});

clojure.core.matrix.zero_array.cljs$core$IFn$_invoke$arity$2 = (function (implementation,shape){
var or__3922__auto__ = clojure.core.matrix.protocols.new_matrix_nd.call(null,clojure.core.matrix.implementation_check.call(null,implementation),shape);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return clojure.core.matrix.protocols.new_matrix_nd.call(null,cljs.core.PersistentVector.EMPTY,shape);
}
});

clojure.core.matrix.zero_array.cljs$lang$maxFixedArity = 2;

/**
 * Creates a new array with the given shape.
 * New array will contain default values as defined by the implementation (usually null or zero).
 * If the implementation supports mutable matrices, then the new matrix will be fully mutable.
 */
clojure.core.matrix.new_array = (function clojure$core$matrix$new_array(var_args){
var G__34062 = arguments.length;
switch (G__34062) {
case 1:
return clojure.core.matrix.new_array.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.new_array.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.core.matrix.new_array.cljs$core$IFn$_invoke$arity$1 = (function (shape){
var or__3922__auto__ = clojure.core.matrix.protocols.new_matrix_nd.call(null,clojure.core.matrix.implementation_check.call(null),shape);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return clojure.core.matrix.protocols.new_matrix_nd.call(null,cljs.core.PersistentVector.EMPTY,shape);
}
});

clojure.core.matrix.new_array.cljs$core$IFn$_invoke$arity$2 = (function (implementation,shape){
var or__3922__auto__ = clojure.core.matrix.protocols.new_matrix_nd.call(null,clojure.core.matrix.implementation_check.call(null,implementation),shape);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = clojure.core.matrix.protocols.new_matrix_nd.call(null,clojure.core.matrix.implementation_check.call(null),shape);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
return clojure.core.matrix.protocols.new_matrix_nd.call(null,cljs.core.PersistentVector.EMPTY,shape);
}
}
});

clojure.core.matrix.new_array.cljs$lang$maxFixedArity = 2;

/**
 * Creates a new sparse array with the given shape.
 * New array will contain default values as defined by the implementation (usually zero).
 * If the implementation supports mutable sparse matrices, then the new matrix should be fully mutable.
 */
clojure.core.matrix.new_sparse_array = (function clojure$core$matrix$new_sparse_array(var_args){
var G__34065 = arguments.length;
switch (G__34065) {
case 1:
return clojure.core.matrix.new_sparse_array.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.new_sparse_array.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.core.matrix.new_sparse_array.cljs$core$IFn$_invoke$arity$1 = (function (shape){
return clojure.core.matrix.protocols.new_sparse_array.call(null,clojure.core.matrix.implementation_check.call(null),shape);
});

clojure.core.matrix.new_sparse_array.cljs$core$IFn$_invoke$arity$2 = (function (implementation,shape){
var or__3922__auto__ = clojure.core.matrix.protocols.new_sparse_array.call(null,clojure.core.matrix.implementation_check.call(null,implementation),shape);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
throw cljs.core.ex_info.call(null,["Implementation ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.core.matrix.protocols.implementation_key.call(null,implementation))," does not support sparse arrays of shape ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.vec.call(null,shape))].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});

clojure.core.matrix.new_sparse_array.cljs$lang$maxFixedArity = 2;

/**
 * Returns a new mutable scalar array containing the scalar value zero.
 */
clojure.core.matrix.new_scalar_array = (function clojure$core$matrix$new_scalar_array(var_args){
var G__34068 = arguments.length;
switch (G__34068) {
case 0:
return clojure.core.matrix.new_scalar_array.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.core.matrix.new_scalar_array.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.core.matrix.new_scalar_array.cljs$core$IFn$_invoke$arity$0 = (function (){
return clojure.core.matrix.new_scalar_array.call(null,clojure.core.matrix.implementations._STAR_matrix_implementation_STAR_);
});

clojure.core.matrix.new_scalar_array.cljs$core$IFn$_invoke$arity$1 = (function (implementation){
var implementation__$1 = clojure.core.matrix.implementation_check.call(null,implementation);
return clojure.core.matrix.protocols.new_scalar_array.call(null,implementation__$1);
});

clojure.core.matrix.new_scalar_array.cljs$lang$maxFixedArity = 1;

/**
 * Creates a new zero-dimensional array containing the specified scalar value.
 */
clojure.core.matrix.scalar_array = (function clojure$core$matrix$scalar_array(var_args){
var G__34071 = arguments.length;
switch (G__34071) {
case 1:
return clojure.core.matrix.scalar_array.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.scalar_array.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.core.matrix.scalar_array.cljs$core$IFn$_invoke$arity$1 = (function (value){
return clojure.core.matrix.protocols.new_scalar_array.call(null,clojure.core.matrix.implementation_check.call(null),value);
});

clojure.core.matrix.scalar_array.cljs$core$IFn$_invoke$arity$2 = (function (implementation,value){
return clojure.core.matrix.protocols.new_scalar_array.call(null,clojure.core.matrix.implementation_check.call(null,implementation),value);
});

clojure.core.matrix.scalar_array.cljs$lang$maxFixedArity = 2;

/**
 * Constructs a row matrix with the given data. The returned matrix is a 2D 1xN row matrix.
 * 
 * The data must be either a valid existing vector or a sequence of scalar values.
 */
clojure.core.matrix.row_matrix = (function clojure$core$matrix$row_matrix(var_args){
var G__34074 = arguments.length;
switch (G__34074) {
case 1:
return clojure.core.matrix.row_matrix.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.row_matrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.core.matrix.row_matrix.cljs$core$IFn$_invoke$arity$1 = (function (data){
return clojure.core.matrix.protocols.row_matrix.call(null,clojure.core.matrix.implementation_check.call(null),data);
});

clojure.core.matrix.row_matrix.cljs$core$IFn$_invoke$arity$2 = (function (implementation,data){
return clojure.core.matrix.protocols.row_matrix.call(null,clojure.core.matrix.implementation_check.call(null,implementation),data);
});

clojure.core.matrix.row_matrix.cljs$lang$maxFixedArity = 2;

/**
 * Constructs a column matrix with the given data. The returned matrix is a 2D Nx1 column matrix.
 * 
 * The data must be either a valid existing vector or a sequence of scalar values.
 */
clojure.core.matrix.column_matrix = (function clojure$core$matrix$column_matrix(var_args){
var G__34077 = arguments.length;
switch (G__34077) {
case 1:
return clojure.core.matrix.column_matrix.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.column_matrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.core.matrix.column_matrix.cljs$core$IFn$_invoke$arity$1 = (function (data){
return clojure.core.matrix.protocols.column_matrix.call(null,clojure.core.matrix.implementation_check.call(null),data);
});

clojure.core.matrix.column_matrix.cljs$core$IFn$_invoke$arity$2 = (function (implementation,data){
return clojure.core.matrix.protocols.column_matrix.call(null,clojure.core.matrix.implementation_check.call(null,implementation),data);
});

clojure.core.matrix.column_matrix.cljs$lang$maxFixedArity = 2;

/**
 * Constructs a 2D identity matrix with the given number of rows.
 * 
 * Identity matrices constructed with this function may not be fully mutable because they may be
 * implemented with a specialised identity matrix type. Use (mutable (identity-matrix ...)) if you
 * need to guarantee a mutable matrix.
 */
clojure.core.matrix.identity_matrix = (function clojure$core$matrix$identity_matrix(var_args){
var G__34080 = arguments.length;
switch (G__34080) {
case 1:
return clojure.core.matrix.identity_matrix.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.identity_matrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.core.matrix.identity_matrix.cljs$core$IFn$_invoke$arity$1 = (function (dims){
return clojure.core.matrix.protocols.identity_matrix.call(null,clojure.core.matrix.implementation_check.call(null),dims);
});

clojure.core.matrix.identity_matrix.cljs$core$IFn$_invoke$arity$2 = (function (implementation,dims){
return clojure.core.matrix.protocols.identity_matrix.call(null,clojure.core.matrix.implementation_check.call(null,implementation),dims);
});

clojure.core.matrix.identity_matrix.cljs$lang$maxFixedArity = 2;

/**
 * Constructs a permutation matrix for a given permutation vector. The permutation vector should
 * contain a distinct set of integers 0...n-1, representing the re-ordering performed by
 * the permutation matrix.
 */
clojure.core.matrix.permutation_matrix = (function clojure$core$matrix$permutation_matrix(var_args){
var G__34083 = arguments.length;
switch (G__34083) {
case 1:
return clojure.core.matrix.permutation_matrix.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.permutation_matrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.core.matrix.permutation_matrix.cljs$core$IFn$_invoke$arity$1 = (function (permutation){
return clojure.core.matrix.protocols.permutation_matrix.call(null,clojure.core.matrix.implementation_check.call(null),permutation);
});

clojure.core.matrix.permutation_matrix.cljs$core$IFn$_invoke$arity$2 = (function (implementation,permutation){
return clojure.core.matrix.protocols.permutation_matrix.call(null,clojure.core.matrix.implementation_check.call(null,implementation),permutation);
});

clojure.core.matrix.permutation_matrix.cljs$lang$maxFixedArity = 2;

/**
 * Constructs a block diagonal matrix for a given vector of 2D square matrices and arranges
 *   the matrices along the main diagonal of the 2D matrix
 */
clojure.core.matrix.block_diagonal_matrix = (function clojure$core$matrix$block_diagonal_matrix(var_args){
var G__34086 = arguments.length;
switch (G__34086) {
case 1:
return clojure.core.matrix.block_diagonal_matrix.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.block_diagonal_matrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.core.matrix.block_diagonal_matrix.cljs$core$IFn$_invoke$arity$1 = (function (blocks){
return clojure.core.matrix.protocols.block_diagonal_matrix.call(null,clojure.core.matrix.implementation_check.call(null),blocks);
});

clojure.core.matrix.block_diagonal_matrix.cljs$core$IFn$_invoke$arity$2 = (function (implementation,blocks){
return clojure.core.matrix.protocols.block_diagonal_matrix.call(null,clojure.core.matrix.implementation_check.call(null,implementation),blocks);
});

clojure.core.matrix.block_diagonal_matrix.cljs$lang$maxFixedArity = 2;

/**
 * Constructs a fully mutable copy of the given array data. 
 * 
 * If the current implementation does not support mutable matrices, will return a mutable array
 * from another core.matrix implementation that supports either the same element type or a broader type.
 */
clojure.core.matrix.mutable = (function clojure$core$matrix$mutable(var_args){
var G__34089 = arguments.length;
switch (G__34089) {
case 1:
return clojure.core.matrix.mutable.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.mutable.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.core.matrix.mutable.cljs$core$IFn$_invoke$arity$1 = (function (data){
try{var or__3922__auto__ = clojure.core.matrix.protocols.mutable_matrix.call(null,data);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return clojure.core.matrix.mutable.call(null,clojure.core.matrix.implementation_check.call(null),data);
}
}catch (e34090){if((e34090 instanceof clojure.core.matrix.Throwable)){
var t = e34090;
return clojure.core.matrix.impl.defaults.construct_mutable_matrix.call(null,data);
} else {
throw e34090;

}
}});

clojure.core.matrix.mutable.cljs$core$IFn$_invoke$arity$2 = (function (implementation,data){
var imp = clojure.core.matrix.implementation_check.call(null,implementation);
var r = clojure.core.matrix.protocols.construct_matrix.call(null,imp,data);
var or__3922__auto__ = (function (){var and__3911__auto__ = r;
if(cljs.core.truth_(and__3911__auto__)){
return clojure.core.matrix.protocols.ensure_mutable.call(null,r);
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = clojure.core.matrix.impl.defaults.construct_mutable_matrix.call(null,data);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
throw cljs.core.ex_info.call(null,["Unable to create mutable array for implementation ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.core.matrix.protocols.implementation_key.call(null,imp))].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
}
});

clojure.core.matrix.mutable.cljs$lang$maxFixedArity = 2;

/**
 * Returns an immutable array containing the given array data.
 * 
 * May return the same array if it is already immutable.
 * 
 * If the implementation does not support immutable matrices, will return an immutable array
 * from another core.matrix implementation that supports either the same element type or a broader type.
 */
clojure.core.matrix.immutable = (function clojure$core$matrix$immutable(data){
var or__3922__auto__ = clojure.core.matrix.protocols.immutable_matrix.call(null,data);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return clojure.core.matrix.to_nested_vectors.call(null,data);
}
});
/**
 * Checks if an array is mutable, and if not converts to a new mutable array. Guarantees
 * that the result will be mutable, but may not be the same type as the original array.
 */
clojure.core.matrix.ensure_mutable = (function clojure$core$matrix$ensure_mutable(m){
return clojure.core.matrix.protocols.ensure_mutable.call(null,m);
});
/**
 * Constructs a 2D diagonal matrix with the given numerical values on the main diagonal.
 * All off-diagonal elements will be zero, and diagonal-values may be a vector or any
 *   Clojure sequence of values.
 * 
 * Diagonal matrices constructed this way may use specialised storage formats, hence may not be fully mutable.
 * Use (mutable (diagonal-matrix ...)) if you need to guarantee a mutable matrix.
 */
clojure.core.matrix.diagonal_matrix = (function clojure$core$matrix$diagonal_matrix(var_args){
var G__34093 = arguments.length;
switch (G__34093) {
case 1:
return clojure.core.matrix.diagonal_matrix.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.diagonal_matrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.core.matrix.diagonal_matrix.cljs$core$IFn$_invoke$arity$1 = (function (diagonal_values){
return clojure.core.matrix.protocols.diagonal_matrix.call(null,clojure.core.matrix.implementation_check.call(null),diagonal_values);
});

clojure.core.matrix.diagonal_matrix.cljs$core$IFn$_invoke$arity$2 = (function (implementation,diagonal_values){
return clojure.core.matrix.protocols.diagonal_matrix.call(null,clojure.core.matrix.implementations.get_canonical_object.call(null,implementation),diagonal_values);
});

clojure.core.matrix.diagonal_matrix.cljs$lang$maxFixedArity = 2;

/**
 * Creates a array with the specified shape, and each element specified by (f i j k...)
 * Where i, j, k... are the index positions of each element in the matrix
 */
clojure.core.matrix.compute_matrix = (function clojure$core$matrix$compute_matrix(var_args){
var G__34096 = arguments.length;
switch (G__34096) {
case 2:
return clojure.core.matrix.compute_matrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.compute_matrix.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.core.matrix.compute_matrix.cljs$core$IFn$_invoke$arity$2 = (function (shape,f){
return clojure.core.matrix.compute_matrix.call(null,clojure.core.matrix.implementation_check.call(null),shape,f);
});

clojure.core.matrix.compute_matrix.cljs$core$IFn$_invoke$arity$3 = (function (implementation,shape,f){
var m = clojure.core.matrix.implementation_check.call(null,implementation);
return clojure.core.matrix.protocols.compute_matrix.call(null,m,shape,f);
});

clojure.core.matrix.compute_matrix.cljs$lang$maxFixedArity = 3;

/**
 * Creates a sparse array with the given data, using a specified implementation
 *   or the current implementation if not specified.
 * 
 *   Throws an exception if creation of a sparse array is not possible
 */
clojure.core.matrix.sparse_array = (function clojure$core$matrix$sparse_array(var_args){
var G__34099 = arguments.length;
switch (G__34099) {
case 1:
return clojure.core.matrix.sparse_array.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.sparse_array.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.core.matrix.sparse_array.cljs$core$IFn$_invoke$arity$1 = (function (data){
return clojure.core.matrix.sparse_array.call(null,clojure.core.matrix.implementation_check.call(null),data);
});

clojure.core.matrix.sparse_array.cljs$core$IFn$_invoke$arity$2 = (function (implementation,data){
var or__3922__auto__ = clojure.core.matrix.protocols.sparse_coerce.call(null,clojure.core.matrix.implementation_check.call(null,implementation),data);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
throw cljs.core.ex_info.call(null,["Sparse implementation not available"].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});

clojure.core.matrix.sparse_array.cljs$lang$maxFixedArity = 2;

/**
 * Creates a sparse matrix with the given data, using a specified implementation
 *   or the current implementation if not specified. Sparse matrices are required to store
 *   a M*N matrix with E non-zero elements in approx O(M+N+E) space or less.
 * 
 *   Throws an exception if creation of a sparse matrix is not possible.
 * 
 *   `sparse-matrix` wqorks as a synonym for `sparse-array`.
 */
clojure.core.matrix.sparse_matrix = (function clojure$core$matrix$sparse_matrix(var_args){
var G__34102 = arguments.length;
switch (G__34102) {
case 1:
return clojure.core.matrix.sparse_matrix.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.sparse_matrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.core.matrix.sparse_matrix.cljs$core$IFn$_invoke$arity$1 = (function (data){
return clojure.core.matrix.sparse_array.call(null,data);
});

clojure.core.matrix.sparse_matrix.cljs$core$IFn$_invoke$arity$2 = (function (implementation,data){
return clojure.core.matrix.sparse_array.call(null,implementation,data);
});

clojure.core.matrix.sparse_matrix.cljs$lang$maxFixedArity = 2;

/**
 * Coerces an array to a sparse format if possible. Sparse arrays are expected to
 * minimise space usage for zero elements.
 * 
 * Returns the array unchanged if such coercion is not possible, or if the array is already sparse.
 */
clojure.core.matrix.sparse = (function clojure$core$matrix$sparse(var_args){
var G__34105 = arguments.length;
switch (G__34105) {
case 1:
return clojure.core.matrix.sparse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.sparse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.core.matrix.sparse.cljs$core$IFn$_invoke$arity$1 = (function (data){
return clojure.core.matrix.protocols.sparse.call(null,data);
});

clojure.core.matrix.sparse.cljs$core$IFn$_invoke$arity$2 = (function (implementation,data){
var implementation__$1 = clojure.core.matrix.implementation_check.call(null,implementation);
var or__3922__auto__ = clojure.core.matrix.protocols.sparse_coerce.call(null,implementation__$1,data);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return clojure.core.matrix.protocols.coerce_param.call(null,implementation__$1,data);
}
});

clojure.core.matrix.sparse.cljs$lang$maxFixedArity = 2;

/**
 * Coerces an array to a dense format if possible. Dense arrays are expected to
 * allocate contiguous storage space for all elements. Either row-major or column-major
 * storage may be alloacted, depending on the implementation.
 * 
 * 'dense' should not be used with very large arrays, and may throw an OutOfMemoryError
 *  if the dense array is too large to fit in available memory.
 * 
 * Returns the array unchanged if such coercion is not possible, or if the array is already dense.
 */
clojure.core.matrix.dense = (function clojure$core$matrix$dense(var_args){
var G__34108 = arguments.length;
switch (G__34108) {
case 1:
return clojure.core.matrix.dense.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.dense.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.core.matrix.dense.cljs$core$IFn$_invoke$arity$1 = (function (data){
return clojure.core.matrix.protocols.dense.call(null,data);
});

clojure.core.matrix.dense.cljs$core$IFn$_invoke$arity$2 = (function (implementation,data){
var or__3922__auto__ = clojure.core.matrix.protocols.dense_coerce.call(null,implementation,data);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return clojure.core.matrix.protocols.coerce_param.call(null,implementation,data);
}
});

clojure.core.matrix.dense.cljs$lang$maxFixedArity = 2;

/**
 * Coerces an array into a native format array if possible. Native arrays may offer
 * superior performance for some operations, depending on the implementation.
 * Returns nil if no appropriate native format exists.
 */
clojure.core.matrix.native$ = (function clojure$core$matrix$native(var_args){
var G__34111 = arguments.length;
switch (G__34111) {
case 1:
return clojure.core.matrix.native$.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.native$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.core.matrix.native$.cljs$core$IFn$_invoke$arity$1 = (function (a){
var or__3922__auto__ = clojure.core.matrix.protocols.native$.call(null,a);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return clojure.core.matrix.native$.call(null,clojure.core.matrix.implementation_check.call(null),a);
}
});

clojure.core.matrix.native$.cljs$core$IFn$_invoke$arity$2 = (function (impl,a){
var a__$1 = clojure.core.matrix.protocols.coerce_param.call(null,impl,a);
return clojure.core.matrix.protocols.native$.call(null,a__$1);
});

clojure.core.matrix.native$.cljs$lang$maxFixedArity = 2;

/**
 * Returns true if the array is in a native format.
 * 
 * Native formats are implementation defined, and may use non-Java resources (e.g. GPU memory).
 */
clojure.core.matrix.native_QMARK_ = (function clojure$core$matrix$native_QMARK_(a){
return clojure.core.matrix.protocols.native_QMARK_.call(null,a);
});
/**
 * Returns true if the implementation for a given matrix supports a specific dimensionality, i.e.
 * can natively create and manipulate matrices with the given number of dimensions
 */
clojure.core.matrix.supports_dimensionality_QMARK_ = (function clojure$core$matrix$supports_dimensionality_QMARK_(m,dimension_count){
var m__$1 = clojure.core.matrix.implementation_check.call(null,m);
return clojure.core.matrix.protocols.supports_dimensionality_QMARK_.call(null,m__$1,dimension_count);
});
/**
 * Returns true if the implementation supports creation of matrices with a specific shape.
 */
clojure.core.matrix.supports_shape_QMARK_ = (function clojure$core$matrix$supports_shape_QMARK_(m,shape){
var m__$1 = (((m instanceof cljs.core.Keyword))?clojure.core.matrix.implementations.get_canonical_object.call(null,m):m);
return clojure.core.matrix.protocols.supports_dimensionality_QMARK_.call(null,m__$1,cljs.core.count.call(null,shape));
});
/**
 * Assigns a new value to an array. Sets the values of the target element-wise, broadcasting where necessary.
 * Returns the mutated array. The new value may be either a scalar or a array of compatible (maybe smaller) shape.
 */
clojure.core.matrix.assign_BANG_ = (function clojure$core$matrix$assign_BANG_(dest,src){
clojure.core.matrix.protocols.assign_BANG_.call(null,dest,src);

return dest;
});
/**
 * Assigns values to a destination core.matrix array from a Java array, in element-wise order. 
 * The element type of Java array must be compatible.
 * Returns the mutated core.matrix array
 */
clojure.core.matrix.assign_array_BANG_ = (function clojure$core$matrix$assign_array_BANG_(var_args){
var G__34114 = arguments.length;
switch (G__34114) {
case 2:
return clojure.core.matrix.assign_array_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.assign_array_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.core.matrix.assign_array_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (dest,java_array){
clojure.core.matrix.protocols.assign_array_BANG_.call(null,dest,java_array);

return dest;
});

clojure.core.matrix.assign_array_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (dest,java_array,offset){
clojure.core.matrix.protocols.assign_array_BANG_.call(null,dest,java_array,offset,clojure.core.matrix.protocols.element_count.call(null,dest));

return dest;
});

clojure.core.matrix.assign_array_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Copies array src element-wise, broadcasting to fill the whole shape of m.
 * Similar to assign!, except returns a new destination array.
 * Returns a new array, of the same shape and implementation as the original m.
 */
clojure.core.matrix.assign = (function clojure$core$matrix$assign(dest,src){
return clojure.core.matrix.protocols.assign.call(null,dest,src);
});
/**
 * Constructs a (shallow) clone of the array. This function is intended to
 * allow safe defensive usage of matrices / vectors. If the intent is to create a mutable clone of
 * some array data, it is recommended to use mutable instead.
 * 
 * Guarantees that:
 * 1. Mutating the returned array will not modify any other array (defensive copy)
 * 2. The returned array will be fully mutable, if the implementation supports mutable matrices.
 * 
 * The clone may or may not be of the same implementation: implementations are encouraged to do so but
 * this is not mandatory.
 * 
 * A core.matrix implementation which only provides immutable arrays may safely return the same array.
 */
clojure.core.matrix.clone = (function clojure$core$matrix$clone(m){
return clojure.core.matrix.protocols.clone.call(null,m);
});
/**
 * Converts an array to an idiomatic, immutable nested Clojure vector format. The bottom level of the
 * nested vectors will contain the element values. Higher levels will all implement IPersistentVector.
 * 
 * The depth of nesting will be equal to the dimensionality of the array.
 */
clojure.core.matrix.to_nested_vectors = (function clojure$core$matrix$to_nested_vectors(m){
return clojure.core.matrix.protocols.convert_to_nested_vectors.call(null,m);
});
/**
 * Coerces m to a scalar value. Result is guaranteed not to be an array.
 * Will throw an exception if m is not zero-dimensional.
 */
clojure.core.matrix.scalar = (function clojure$core$matrix$scalar(m){
return clojure.core.matrix.protocols.get_0d.call(null,m);
});
/**
 * Returns true if the parameter is a valid core.matrix N-dimensional array, for any N>=0.
 */
clojure.core.matrix.array_QMARK_ = (function clojure$core$matrix$array_QMARK_(m){
return cljs.core.not.call(null,clojure.core.matrix.protocols.is_scalar_QMARK_.call(null,m));
});
/**
 * Returns true if parameter is a valid core.matrix matrix (i.e. an array with dimensionality == 2)
 */
clojure.core.matrix.matrix_QMARK_ = (function clojure$core$matrix$matrix_QMARK_(m){
return (cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m)) === (2));
});
/**
 * Returns true if the parameter is a core.matrix vector (1-dimensional array)
 */
clojure.core.matrix.vec_QMARK_ = (function clojure$core$matrix$vec_QMARK_(m){
return clojure.core.matrix.protocols.is_vector_QMARK_.call(null,m);
});
/**
 * Returns true if the parameter is a scalar value (i.e. acceptable as matrix element value).
 * A 0-d array containing a scalar is *not* itself a scalar value.
 */
clojure.core.matrix.scalar_QMARK_ = (function clojure$core$matrix$scalar_QMARK_(v){
return clojure.core.matrix.protocols.is_scalar_QMARK_.call(null,v);
});
/**
 * Returns true if the parameter has zero dimensions. i.e. it is a 0-d array or a scalar value.
 * 
 * Behaviour is the same as `scalar?`, except that true is returned for 0-dimensional arrays.
 */
clojure.core.matrix.zero_dimensional_QMARK_ = (function clojure$core$matrix$zero_dimensional_QMARK_(m){
return ((0) === cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m)));
});
/**
 * Returns true if the parameter is an identity-matrix, i.e. a symmetric square matrix with element values
 * of 1 on the leading diagonal and 0 elsewhere.
 */
clojure.core.matrix.identity_matrix_QMARK_ = (function clojure$core$matrix$identity_matrix_QMARK_(m){
return clojure.core.matrix.protocols.identity_matrix_QMARK_.call(null,m);
});
/**
 * Returns true if all the elements of the parameter are zero.
 */
clojure.core.matrix.zero_matrix_QMARK_ = (function clojure$core$matrix$zero_matrix_QMARK_(m){
return clojure.core.matrix.protocols.zero_matrix_QMARK_.call(null,m);
});
/**
 * Returns true if the parameter is a symmetric matrix, i.e. Aij = Aji for all i,j.
 */
clojure.core.matrix.symmetric_QMARK_ = (function clojure$core$matrix$symmetric_QMARK_(m){
return clojure.core.matrix.protocols.symmetric_QMARK_.call(null,m);
});
/**
 * Returns true if the parameter is a diagonal matrix.
 */
clojure.core.matrix.diagonal_QMARK_ = (function clojure$core$matrix$diagonal_QMARK_(m){
return clojure.core.matrix.protocols.diagonal_QMARK_.call(null,m);
});
/**
 * Returns true if the parameter is a upper triangular matrix.
 */
clojure.core.matrix.upper_triangular_QMARK_ = (function clojure$core$matrix$upper_triangular_QMARK_(m){
return clojure.core.matrix.protocols.upper_triangular_QMARK_.call(null,m);
});
/**
 * Returns true if the parameter is a lower triangular matrix.
 */
clojure.core.matrix.lower_triangular_QMARK_ = (function clojure$core$matrix$lower_triangular_QMARK_(m){
return clojure.core.matrix.protocols.lower_triangular_QMARK_.call(null,m);
});
/**
 * Returns true if the parameter is an orthogonal matrix.
 */
clojure.core.matrix.orthogonal_QMARK_ = (function clojure$core$matrix$orthogonal_QMARK_(var_args){
var G__34117 = arguments.length;
switch (G__34117) {
case 2:
return clojure.core.matrix.orthogonal_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return clojure.core.matrix.orthogonal_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.core.matrix.orthogonal_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (m,eps){
return clojure.core.matrix.protocols.orthogonal_QMARK_.call(null,m,eps);
});

clojure.core.matrix.orthogonal_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (m){
return clojure.core.matrix.protocols.orthogonal_QMARK_.call(null,m,1.0E-5);
});

clojure.core.matrix.orthogonal_QMARK_.cljs$lang$maxFixedArity = 2;

/**
 * Returns true if an array is sparse, i.e. the implementation supports storage of the entire
 * array in less memory than would normally be implied by the number of elements.
 * 
 * Sparse matrices may have memory requirements that scale with the number of non-zero elements
 * rather than the total number of elements, for example.
 */
clojure.core.matrix.sparse_QMARK_ = (function clojure$core$matrix$sparse_QMARK_(m){
return clojure.core.matrix.protocols.is_sparse_QMARK_.call(null,m);
});
/**
 * Returns the class of elements that can be in the array. For example, a numerical array may return
 * the class java.lang.Double.
 */
clojure.core.matrix.element_type = (function clojure$core$matrix$element_type(m){
return clojure.core.matrix.protocols.element_type.call(null,m);
});
/**
 * Returns the dimensionality of an array. The dimensionality is equal to
 * the number of dimensions in the array's shape.
 */
clojure.core.matrix.dimensionality = (function clojure$core$matrix$dimensionality(m){
return cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m));
});
/**
 * Returns the size of the specified dimension in a matrix. Will throw an error if the matrix
 * does not have the specified dimension.
 */
clojure.core.matrix.dimension_count = (function clojure$core$matrix$dimension_count(m,dim){
return cljs.core.long$.call(null,clojure.core.matrix.protocols.dimension_count.call(null,m,dim));
});
/**
 * Returns the number of rows in a matrix or vector (array must be 1D or more).
 */
clojure.core.matrix.row_count = (function clojure$core$matrix$row_count(m){
return clojure.core.matrix.dimension_count.call(null,m,(0));
});
/**
 * Returns the number of columns in a matrix (array must be 2D or more)
 */
clojure.core.matrix.column_count = (function clojure$core$matrix$column_count(m){
return clojure.core.matrix.dimension_count.call(null,m,(1));
});
/**
 * Returns the number of slices in an array (array must be 1D or more). The array is sliced
 * in row-major order, i.e. this is the dimension count of the first dimension.
 */
clojure.core.matrix.slice_count = (function clojure$core$matrix$slice_count(m){
return clojure.core.matrix.dimension_count.call(null,m,(0));
});
/**
 * Returns the total count of elements in an array, as an integer value.
 * 
 * Equal to the product of the lengths of each dimension in the array's shape.
 * 
 * Result will usually be a Long, however callers should note that for very large sparse arrays
 * the element count may be a BigInteger, i.e. equal to or larger than 2^63.
 * 
 * Returns 1 for a zero-dimensional array or scalar. 
 */
clojure.core.matrix.ecount = (function clojure$core$matrix$ecount(m){
return clojure.core.matrix.protocols.element_count.call(null,m);
});
/**
 * Returns true if matrix is square (i.e. a 2D array with same number of rows and columns)
 */
clojure.core.matrix.square_QMARK_ = (function clojure$core$matrix$square_QMARK_(m){
return ((((2) === clojure.core.matrix.dimensionality.call(null,m))) && ((clojure.core.matrix.dimension_count.call(null,m,(0)) === clojure.core.matrix.dimension_count.call(null,m,(1)))));
});
/**
 * Returns true if a matrix is a row-matrix (i.e. is 2D and has exactly one row)
 */
clojure.core.matrix.row_matrix_QMARK_ = (function clojure$core$matrix$row_matrix_QMARK_(m){
return (((cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m)) === (2))) && (((1) === clojure.core.matrix.dimension_count.call(null,m,(0)))));
});
/**
 * Returns true if a matrix is a column-matrix (i.e. is 2D and has has exactly one column)
 */
clojure.core.matrix.column_matrix_QMARK_ = (function clojure$core$matrix$column_matrix_QMARK_(m){
return (((cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m)) === (2))) && (((1) === clojure.core.matrix.dimension_count.call(null,m,(1)))));
});
/**
 * Returns the rank of each element in an array, as an array of indexes with 0 being first, in ascending order.
 * 
 * If passed a higher dimensional array, returns an array of ranks along the last dimension.
 * 
 * An optional comparator may be provided, otherwise the default comparator will be used. Comparator should
 * support java.util.Comparator on the JVM, although some implementations may support alternative comparator types 
 * e.g. Clojure predicates. Please check the documentation for your core.matrix implementation.
 */
clojure.core.matrix.rank = (function clojure$core$matrix$rank(var_args){
var G__34120 = arguments.length;
switch (G__34120) {
case 1:
return clojure.core.matrix.rank.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.rank.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.core.matrix.rank.cljs$core$IFn$_invoke$arity$1 = (function (a){
return clojure.core.matrix.protocols.index_rank.call(null,a);
});

clojure.core.matrix.rank.cljs$core$IFn$_invoke$arity$2 = (function (comparator,a){
return clojure.core.matrix.protocols.index_rank.call(null,a,comparator);
});

clojure.core.matrix.rank.cljs$lang$maxFixedArity = 2;

/**
 * Returns the shape of an array, i.e. the dimension sizes for all dimensions.
 * 
 * The result will be a vector containing only integer index values, with a count
 * equal to the dimensionality of the array.
 * 
 * Returns nil the if object is not an array (i.e. is a scalar value)
 */
clojure.core.matrix.shape = (function clojure$core$matrix$shape(m){
var temp__5455__auto__ = clojure.core.matrix.protocols.get_shape.call(null,m);
if(cljs.core.truth_(temp__5455__auto__)){
var sh = temp__5455__auto__;
return cljs.core.vec.call(null,sh);
} else {
return null;
}
});
/**
 * Like shape, but validates the shape of the array and throws an exception if the array does not have the
 * expected shape. Useful for ensuring that mixed implementation arrays or nested Clojure vectors conform to
 * the expected shape.
 * 
 * Returns the shape of the array if sucessful, or nil if the object is not a core.matrix array.
 */
clojure.core.matrix.validate_shape = (function clojure$core$matrix$validate_shape(var_args){
var G__34123 = arguments.length;
switch (G__34123) {
case 1:
return clojure.core.matrix.validate_shape.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.validate_shape.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.core.matrix.validate_shape.cljs$core$IFn$_invoke$arity$1 = (function (m){
return clojure.core.matrix.protocols.validate_shape.call(null,m);
});

clojure.core.matrix.validate_shape.cljs$core$IFn$_invoke$arity$2 = (function (m,shape){
return clojure.core.matrix.protocols.validate_shape.call(null,m,shape);
});

clojure.core.matrix.validate_shape.cljs$lang$maxFixedArity = 2;

/**
 * Returns the number of zeros in an array.
 * 
 * Result will usually be a Long, however callers should note that for very large sparse arrays
 * the zero count may be a BigInteger, i.e. equal to or larger than 2^63.
 */
clojure.core.matrix.zero_count = (function clojure$core$matrix$zero_count(m){
return clojure.core.matrix.protocols.zero_count.call(null,m);
});
/**
 * Returns the density of the matrix, defined as the proportion of non-zero elements
 */
clojure.core.matrix.density = (function clojure$core$matrix$density(m){
var zeros = clojure.core.matrix.protocols.zero_count.call(null,m);
var elems = clojure.core.matrix.protocols.element_count.call(null,m);
return ((elems - zeros) / elems);
});
/**
 * Returns true if the matrix is mutable, i.e. supports setting of values.
 * 
 * It is possible for some matrix implementations to have constraints on mutability (e.g. mutable only in diagonal elements),
 * this method will still return true for such cases.
 */
clojure.core.matrix.mutable_QMARK_ = (function clojure$core$matrix$mutable_QMARK_(m){
return clojure.core.matrix.protocols.is_mutable_QMARK_.call(null,m);
});
/**
 * Returns true if the parameter is a valid array index type. An index is a seq-able 1D list
 * of integer values that can be used to index into arrays.
 */
clojure.core.matrix.index_QMARK_ = (function clojure$core$matrix$index_QMARK_(m){
return clojure.core.matrix.protocols.index_QMARK_.call(null,m);
});
/**
 * Returns true if two arrays have a conforming shape. Two arrays are conforming if there
 * exists a common shape that both can broadcast to. This is a requirement for element-wise
 * operations to work correctly on two different-shaped arrays.
 */
clojure.core.matrix.conforming_QMARK_ = (function clojure$core$matrix$conforming_QMARK_(var_args){
var G__34126 = arguments.length;
switch (G__34126) {
case 1:
return clojure.core.matrix.conforming_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.conforming_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.core.matrix.conforming_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (a){
return true;
});

clojure.core.matrix.conforming_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var sa = clojure.core.matrix.protocols.get_shape.call(null,a);
var sb = clojure.core.matrix.protocols.get_shape.call(null,b);
return (((cljs.core.count.call(null,sa) >= cljs.core.count.call(null,sb))) && (cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.map.call(null,cljs.core._EQ_,cljs.core.reverse.call(null,sa),cljs.core.reverse.call(null,sb)))));
});

clojure.core.matrix.conforming_QMARK_.cljs$lang$maxFixedArity = 2;

/**
 * Returns true if the arrays have the same shape, false otherwise
 */
clojure.core.matrix.same_shape_QMARK_ = (function clojure$core$matrix$same_shape_QMARK_(var_args){
var G__34132 = arguments.length;
switch (G__34132) {
case 0:
return clojure.core.matrix.same_shape_QMARK_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.core.matrix.same_shape_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.same_shape_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4514__auto__ = [];
var len__4499__auto___34134 = arguments.length;
var i__4500__auto___34135 = (0);
while(true){
if((i__4500__auto___34135 < len__4499__auto___34134)){
args_arr__4514__auto__.push((arguments[i__4500__auto___34135]));

var G__34136 = (i__4500__auto___34135 + (1));
i__4500__auto___34135 = G__34136;
continue;
} else {
}
break;
}

var argseq__4515__auto__ = (new cljs.core.IndexedSeq(args_arr__4514__auto__.slice((2)),(0),null));
return clojure.core.matrix.same_shape_QMARK_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4515__auto__);

}
});

clojure.core.matrix.same_shape_QMARK_.cljs$core$IFn$_invoke$arity$0 = (function (){
return true;
});

clojure.core.matrix.same_shape_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (m){
return true;
});

clojure.core.matrix.same_shape_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (m,n){
var or__3922__auto__ = (m === n);
if(or__3922__auto__){
return or__3922__auto__;
} else {
return clojure.core.matrix.protocols.same_shape_QMARK_.call(null,m,n);
}
});

clojure.core.matrix.same_shape_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (m,n,more){
var m__$1 = m;
var n__$1 = n;
var more__$1 = cljs.core.seq.call(null,more);
while(true){
if(cljs.core.truth_((function (){var or__3922__auto__ = (m__$1 === n__$1);
if(or__3922__auto__){
return or__3922__auto__;
} else {
return clojure.core.matrix.protocols.same_shape_QMARK_.call(null,m__$1,n__$1);
}
})())){
if(more__$1){
var G__34137 = n__$1;
var G__34138 = cljs.core.first.call(null,more__$1);
var G__34139 = cljs.core.next.call(null,more__$1);
m__$1 = G__34137;
n__$1 = G__34138;
more__$1 = G__34139;
continue;
} else {
return true;
}
} else {
return false;
}
break;
}
});

/** @this {Function} */
clojure.core.matrix.same_shape_QMARK_.cljs$lang$applyTo = (function (seq34129){
var G__34130 = cljs.core.first.call(null,seq34129);
var seq34129__$1 = cljs.core.next.call(null,seq34129);
var G__34131 = cljs.core.first.call(null,seq34129__$1);
var seq34129__$2 = cljs.core.next.call(null,seq34129__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34130,G__34131,seq34129__$2);
});

clojure.core.matrix.same_shape_QMARK_.cljs$lang$maxFixedArity = (2);

/**
 * Returns true if the matrix is a valid numerical matrix (i.e. supports numerical core.matrix operations).
 */
clojure.core.matrix.numerical_QMARK_ = (function clojure$core$matrix$numerical_QMARK_(m){
return clojure.core.matrix.protocols.numerical_QMARK_.call(null,m);
});
/**
 * Returns a Java double[] array containing the values of a numerical array m in row-major order. Will
 *  throw an error if any of the array elements cannot be converted to doubles.
 * 
 *  If want-copy? is true, will guarantee a new double array (defensive copy).
 *  If want-copy? is false, will return the internal array used by m, or nil if not supported
 *  by the implementation.
 *  If want-copy? is not specified, will return either a copy or the internal array
 */
clojure.core.matrix.to_double_array = (function clojure$core$matrix$to_double_array(var_args){
var G__34141 = arguments.length;
switch (G__34141) {
case 1:
return clojure.core.matrix.to_double_array.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.to_double_array.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.core.matrix.to_double_array.cljs$core$IFn$_invoke$arity$1 = (function (m){
return clojure.core.matrix.protocols.to_double_array.call(null,m);
});

clojure.core.matrix.to_double_array.cljs$core$IFn$_invoke$arity$2 = (function (m,want_copy_QMARK_){
var arr = clojure.core.matrix.protocols.as_double_array.call(null,m);
if(cljs.core.truth_(want_copy_QMARK_)){
if(cljs.core.truth_(arr)){
return clojure.core.matrix.utils.copy_double_array.call(null,arr);
} else {
return clojure.core.matrix.protocols.to_double_array.call(null,m);
}
} else {
return arr;
}
});

clojure.core.matrix.to_double_array.cljs$lang$maxFixedArity = 2;

/**
 * Returns a Java Object[] array containing the values of an array m in row-major order.
 * 
 *  If want-copy? is true, will guarantee a new Object array (defensive copy).
 *  If want-copy? is false, will return the internal array used by m, or nil if not supported
 *  by the implementation.
 *  If want-copy? is not specified, will return either a copy or the internal array
 */
clojure.core.matrix.to_object_array = (function clojure$core$matrix$to_object_array(var_args){
var G__34144 = arguments.length;
switch (G__34144) {
case 1:
return clojure.core.matrix.to_object_array.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.to_object_array.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.core.matrix.to_object_array.cljs$core$IFn$_invoke$arity$1 = (function (m){
return clojure.core.matrix.protocols.to_object_array.call(null,m);
});

clojure.core.matrix.to_object_array.cljs$core$IFn$_invoke$arity$2 = (function (m,want_copy_QMARK_){
var arr = clojure.core.matrix.protocols.as_object_array.call(null,m);
if(cljs.core.truth_(want_copy_QMARK_)){
if(cljs.core.truth_(arr)){
return clojure.core.matrix.utils.copy_object_array.call(null,arr);
} else {
return clojure.core.matrix.protocols.to_object_array.call(null,m);
}
} else {
return arr;
}
});

clojure.core.matrix.to_object_array.cljs$lang$maxFixedArity = 2;

/**
 * Packs array data in the most efficient format as defined by the implementation. May return the
 * same array if no additional packing is required.
 */
clojure.core.matrix.pack = (function clojure$core$matrix$pack(a){
return clojure.core.matrix.protocols.pack.call(null,a);
});
/**
 * Coerces param (which may be any array) into a format preferred by a specific matrix implementation.
 * If the matrix implementation is not specified, uses the current matrix implementation.
 * If param is already in a format deemed usable by the implementation, may return it unchanged.
 * 
 * coerce should never alter the shape of the array, but may convert element types where necessary
 * (e.g. turning real values into complex values when converting to a complex array type).
 */
clojure.core.matrix.coerce = (function clojure$core$matrix$coerce(var_args){
var G__34147 = arguments.length;
switch (G__34147) {
case 1:
return clojure.core.matrix.coerce.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.coerce.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.core.matrix.coerce.cljs$core$IFn$_invoke$arity$1 = (function (param){
var m = clojure.core.matrix.implementations.get_canonical_object.call(null);
var or__3922__auto__ = clojure.core.matrix.protocols.coerce_param.call(null,m,param);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return clojure.core.matrix.protocols.coerce_param.call(null,m,clojure.core.matrix.protocols.convert_to_nested_vectors.call(null,param));
}
});

clojure.core.matrix.coerce.cljs$core$IFn$_invoke$arity$2 = (function (matrix_or_implementation,param){
var m = (((matrix_or_implementation instanceof cljs.core.Keyword))?clojure.core.matrix.implementations.get_canonical_object.call(null,matrix_or_implementation):matrix_or_implementation);
var or__3922__auto__ = clojure.core.matrix.protocols.coerce_param.call(null,m,param);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return clojure.core.matrix.protocols.coerce_param.call(null,m,clojure.core.matrix.protocols.convert_to_nested_vectors.call(null,param));
}
});

clojure.core.matrix.coerce.cljs$lang$maxFixedArity = 2;

/**
 * Gets a scalar value from an array at the specified position. Supports any number of dimensions.
 */
clojure.core.matrix.mget = (function clojure$core$matrix$mget(var_args){
var G__34154 = arguments.length;
switch (G__34154) {
case 1:
return clojure.core.matrix.mget.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.mget.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.mget.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4514__auto__ = [];
var len__4499__auto___34156 = arguments.length;
var i__4500__auto___34157 = (0);
while(true){
if((i__4500__auto___34157 < len__4499__auto___34156)){
args_arr__4514__auto__.push((arguments[i__4500__auto___34157]));

var G__34158 = (i__4500__auto___34157 + (1));
i__4500__auto___34157 = G__34158;
continue;
} else {
}
break;
}

var argseq__4515__auto__ = (new cljs.core.IndexedSeq(args_arr__4514__auto__.slice((3)),(0),null));
return clojure.core.matrix.mget.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4515__auto__);

}
});

clojure.core.matrix.mget.cljs$core$IFn$_invoke$arity$1 = (function (m){
return clojure.core.matrix.protocols.get_0d.call(null,m);
});

clojure.core.matrix.mget.cljs$core$IFn$_invoke$arity$2 = (function (m,x){
return clojure.core.matrix.protocols.get_1d.call(null,m,x);
});

clojure.core.matrix.mget.cljs$core$IFn$_invoke$arity$3 = (function (m,x,y){
return clojure.core.matrix.protocols.get_2d.call(null,m,x,y);
});

clojure.core.matrix.mget.cljs$core$IFn$_invoke$arity$variadic = (function (m,x,y,more){
return clojure.core.matrix.protocols.get_nd.call(null,m,cljs.core.cons.call(null,x,cljs.core.cons.call(null,y,more)));
});

/** @this {Function} */
clojure.core.matrix.mget.cljs$lang$applyTo = (function (seq34150){
var G__34151 = cljs.core.first.call(null,seq34150);
var seq34150__$1 = cljs.core.next.call(null,seq34150);
var G__34152 = cljs.core.first.call(null,seq34150__$1);
var seq34150__$2 = cljs.core.next.call(null,seq34150__$1);
var G__34153 = cljs.core.first.call(null,seq34150__$2);
var seq34150__$3 = cljs.core.next.call(null,seq34150__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34151,G__34152,G__34153,seq34150__$3);
});

clojure.core.matrix.mget.cljs$lang$maxFixedArity = (3);

/**
 * Sets a scalar value in an array at the specified position. Supports any number of dimensions.
 * 
 * Returns a new matrix and leaves the original unchanged.
 * 
 * WARNING: performance of this operation may be as high as O(N) where N is the number of elements in
 * the array. Consider using mutable arrays and `mset!` when setting large numbers of individual elements
 * is required.
 */
clojure.core.matrix.mset = (function clojure$core$matrix$mset(var_args){
var G__34165 = arguments.length;
switch (G__34165) {
case 2:
return clojure.core.matrix.mset.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.mset.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.core.matrix.mset.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4514__auto__ = [];
var len__4499__auto___34167 = arguments.length;
var i__4500__auto___34168 = (0);
while(true){
if((i__4500__auto___34168 < len__4499__auto___34167)){
args_arr__4514__auto__.push((arguments[i__4500__auto___34168]));

var G__34169 = (i__4500__auto___34168 + (1));
i__4500__auto___34168 = G__34169;
continue;
} else {
}
break;
}

var argseq__4515__auto__ = (new cljs.core.IndexedSeq(args_arr__4514__auto__.slice((4)),(0),null));
return clojure.core.matrix.mset.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4515__auto__);

}
});

clojure.core.matrix.mset.cljs$core$IFn$_invoke$arity$2 = (function (m,v){
return clojure.core.matrix.protocols.set_0d.call(null,m,v);
});

clojure.core.matrix.mset.cljs$core$IFn$_invoke$arity$3 = (function (m,x,v){
return clojure.core.matrix.protocols.set_1d.call(null,m,x,v);
});

clojure.core.matrix.mset.cljs$core$IFn$_invoke$arity$4 = (function (m,x,y,v){
return clojure.core.matrix.protocols.set_2d.call(null,m,x,y,v);
});

clojure.core.matrix.mset.cljs$core$IFn$_invoke$arity$variadic = (function (m,x,y,z,more){
return clojure.core.matrix.protocols.set_nd.call(null,m,cljs.core.cons.call(null,x,cljs.core.cons.call(null,y,cljs.core.cons.call(null,z,cljs.core.butlast.call(null,more)))),cljs.core.last.call(null,more));
});

/** @this {Function} */
clojure.core.matrix.mset.cljs$lang$applyTo = (function (seq34160){
var G__34161 = cljs.core.first.call(null,seq34160);
var seq34160__$1 = cljs.core.next.call(null,seq34160);
var G__34162 = cljs.core.first.call(null,seq34160__$1);
var seq34160__$2 = cljs.core.next.call(null,seq34160__$1);
var G__34163 = cljs.core.first.call(null,seq34160__$2);
var seq34160__$3 = cljs.core.next.call(null,seq34160__$2);
var G__34164 = cljs.core.first.call(null,seq34160__$3);
var seq34160__$4 = cljs.core.next.call(null,seq34160__$3);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34161,G__34162,G__34163,G__34164,seq34160__$4);
});

clojure.core.matrix.mset.cljs$lang$maxFixedArity = (4);

/**
 * Mutates a scalar value in an array at the specified position. Supports any number of dimensions.
 * 
 * Will throw an exception if the matrix is not mutable at the specified position. Note that it
 * is possible for some arrays to be mutable in places and immutable in others (e.g. sparse arrays)
 * 
 * Returns the modified matrix (it is guaranteed to return the same instance)
 */
clojure.core.matrix.mset_BANG_ = (function clojure$core$matrix$mset_BANG_(var_args){
var G__34177 = arguments.length;
switch (G__34177) {
case 2:
return clojure.core.matrix.mset_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.mset_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.core.matrix.mset_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return clojure.core.matrix.mset_BANG_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var args_arr__4514__auto__ = [];
var len__4499__auto___34179 = arguments.length;
var i__4500__auto___34180 = (0);
while(true){
if((i__4500__auto___34180 < len__4499__auto___34179)){
args_arr__4514__auto__.push((arguments[i__4500__auto___34180]));

var G__34181 = (i__4500__auto___34180 + (1));
i__4500__auto___34180 = G__34181;
continue;
} else {
}
break;
}

var argseq__4515__auto__ = (new cljs.core.IndexedSeq(args_arr__4514__auto__.slice((5)),(0),null));
return clojure.core.matrix.mset_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4515__auto__);

}
});

clojure.core.matrix.mset_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (m,v){
clojure.core.matrix.protocols.set_0d_BANG_.call(null,m,v);

return m;
});

clojure.core.matrix.mset_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (m,x,v){
clojure.core.matrix.protocols.set_1d_BANG_.call(null,m,x,v);

return m;
});

clojure.core.matrix.mset_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (m,x,y,v){
clojure.core.matrix.protocols.set_2d_BANG_.call(null,m,x,y,v);

return m;
});

clojure.core.matrix.mset_BANG_.cljs$core$IFn$_invoke$arity$5 = (function (m,x,y,z,v){
clojure.core.matrix.protocols.set_nd_BANG_.call(null,m,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,z], null),v);

return m;
});

clojure.core.matrix.mset_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (m,x,y,z,t,more){
clojure.core.matrix.protocols.set_nd_BANG_.call(null,m,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,z,t], null),cljs.core.butlast.call(null,more)),cljs.core.last.call(null,more));

return m;
});

/** @this {Function} */
clojure.core.matrix.mset_BANG_.cljs$lang$applyTo = (function (seq34171){
var G__34172 = cljs.core.first.call(null,seq34171);
var seq34171__$1 = cljs.core.next.call(null,seq34171);
var G__34173 = cljs.core.first.call(null,seq34171__$1);
var seq34171__$2 = cljs.core.next.call(null,seq34171__$1);
var G__34174 = cljs.core.first.call(null,seq34171__$2);
var seq34171__$3 = cljs.core.next.call(null,seq34171__$2);
var G__34175 = cljs.core.first.call(null,seq34171__$3);
var seq34171__$4 = cljs.core.next.call(null,seq34171__$3);
var G__34176 = cljs.core.first.call(null,seq34171__$4);
var seq34171__$5 = cljs.core.next.call(null,seq34171__$4);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34172,G__34173,G__34174,G__34175,G__34176,seq34171__$5);
});

clojure.core.matrix.mset_BANG_.cljs$lang$maxFixedArity = (5);

/**
 * Gets a row of a matrix, as a 1D vector.
 * 
 * The format of the returned 1D vector is determined by the implementation of the source matrix. 
 * get-row may return a lightweight mutable view if supported by the implementation.
 */
clojure.core.matrix.get_row = (function clojure$core$matrix$get_row(m,x){
return clojure.core.matrix.protocols.get_row.call(null,m,x);
});
/**
 * Gets a column of a matrix, as a 1D vector.
 * 
 * The format of the returned 1D vector is determined by the implementation of the source matrix. 
 * get-column may return a lightweight mutable view if supported by the implementation.
 */
clojure.core.matrix.get_column = (function clojure$core$matrix$get_column(m,col_index){
return clojure.core.matrix.protocols.get_column.call(null,m,col_index);
});
/**
 * Slices along all dimensions where there is a numerical argument
 */
clojure.core.matrix.slice_dims = (function clojure$core$matrix$slice_dims(m,args,slice_func){
var shape = clojure.core.matrix.protocols.get_shape.call(null,m);
var N = cljs.core.count.call(null,args);
if(cljs.core.not_EQ_.call(null,N,clojure.core.matrix.dimensionality.call(null,m))){
throw cljs.core.ex_info.call(null,["Inconsistent count of selection arguments ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(args)," for shape ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shape)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

var m__$1 = m;
var i = (0);
var args__$1 = cljs.core.seq.call(null,args);
while(true){
if(args__$1){
var ix = cljs.core.first.call(null,args__$1);
if(typeof ix === 'number'){
var G__34182 = slice_func.call(null,m__$1,i,ix);
var G__34183 = i;
var G__34184 = cljs.core.next.call(null,args__$1);
m__$1 = G__34182;
i = G__34183;
args__$1 = G__34184;
continue;
} else {
var G__34185 = m__$1;
var G__34186 = (i + (1));
var G__34187 = cljs.core.next.call(null,args__$1);
m__$1 = G__34185;
i = G__34186;
args__$1 = G__34187;
continue;
}
} else {
return m__$1;
}
break;
}
});
/**
 * Normalises arg to either a number of a sequable list of indexes
 */
clojure.core.matrix.normalise_arg = (function clojure$core$matrix$normalise_arg(arg,dim_count){
if(typeof arg === 'number'){
return arg;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"all","all",892129742),arg)){
return cljs.core.vec.call(null,cljs.core.range.call(null,dim_count));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"last","last",1105735132),arg)){
return (dim_count - (1));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"butlast","butlast",-67491942),arg)){
return cljs.core.vec.call(null,cljs.core.range.call(null,(dim_count - (1))));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"first","first",-644103046),arg)){
return (0);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"rest","rest",-1241696419),arg)){
return cljs.core.vec.call(null,cljs.core.range.call(null,(1),dim_count));
} else {
return arg;

}
}
}
}
}
}
});
/**
 * Normalises arguments by mapping :all to the complete range
 */
clojure.core.matrix.normalise_args = (function clojure$core$matrix$normalise_args(args,m){
return cljs.core.mapv.call(null,clojure.core.matrix.normalise_arg,args,clojure.core.matrix.protocols.get_shape.call(null,m));
});
/**
 * Returns an array containing all elements in a which are at the positions
 * of the Cartesian product of args. An argument can be:
 *  - a number - slices at this dimension (eliminates the dimension),
 *  - a keyword which selects specific slices (:first :last)
 *  - a 1-dimensional array of numbers which selects the slices at these indices
 *  - a keyword which selects a range of slices (:all :butlast :rest)
 * 
 * The number of args must match the dimensionality of a.
 * 
 * Examples:
 * (select [[1 2][3 4]] 0 0) ;=> 1
 * (select [[1 2][3 4]] 0 :all) ;=> [1 2]
 * (select [[1 2][3 4]] [0 1] [0]) ;=> [[1] [3]]
 * (select [[1 2][3 4]] :all 0) ;=> [1 3]
 */
clojure.core.matrix.select = (function clojure$core$matrix$select(var_args){
var args__4502__auto__ = [];
var len__4499__auto___34190 = arguments.length;
var i__4500__auto___34191 = (0);
while(true){
if((i__4500__auto___34191 < len__4499__auto___34190)){
args__4502__auto__.push((arguments[i__4500__auto___34191]));

var G__34192 = (i__4500__auto___34191 + (1));
i__4500__auto___34191 = G__34192;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return clojure.core.matrix.select.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

clojure.core.matrix.select.cljs$core$IFn$_invoke$arity$variadic = (function (a,args){
var args__$1 = clojure.core.matrix.normalise_args.call(null,args,a);
var a__$1 = clojure.core.matrix.slice_dims.call(null,a,args__$1,clojure.core.matrix.slice);
var selecting_args = cljs.core.filterv.call(null,cljs.core.complement.call(null,cljs.core.number_QMARK_),args__$1);
return clojure.core.matrix.protocols.select.call(null,a__$1,selecting_args);
});

clojure.core.matrix.select.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
clojure.core.matrix.select.cljs$lang$applyTo = (function (seq34188){
var G__34189 = cljs.core.first.call(null,seq34188);
var seq34188__$1 = cljs.core.next.call(null,seq34188);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34189,seq34188__$1);
});

/**
 * Like `select`, but guarantees a view over the original data.
 */
clojure.core.matrix.select_view = (function clojure$core$matrix$select_view(var_args){
var args__4502__auto__ = [];
var len__4499__auto___34195 = arguments.length;
var i__4500__auto___34196 = (0);
while(true){
if((i__4500__auto___34196 < len__4499__auto___34195)){
args__4502__auto__.push((arguments[i__4500__auto___34196]));

var G__34197 = (i__4500__auto___34196 + (1));
i__4500__auto___34196 = G__34197;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return clojure.core.matrix.select_view.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

clojure.core.matrix.select_view.cljs$core$IFn$_invoke$arity$variadic = (function (a,args){
var args__$1 = clojure.core.matrix.normalise_args.call(null,args,a);
var a__$1 = clojure.core.matrix.slice_dims.call(null,a,args__$1,clojure.core.matrix.slice_view);
var selecting_args = cljs.core.filterv.call(null,cljs.core.complement.call(null,cljs.core.number_QMARK_),args__$1);
var or__3922__auto__ = clojure.core.matrix.protocols.select_view.call(null,a__$1,selecting_args);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return clojure.core.matrix.impl.wrappers.wrap_selection.call(null,a__$1,selecting_args);
}
});

clojure.core.matrix.select_view.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
clojure.core.matrix.select_view.cljs$lang$applyTo = (function (seq34193){
var G__34194 = cljs.core.first.call(null,seq34193);
var seq34193__$1 = cljs.core.next.call(null,seq34193);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34194,seq34193__$1);
});

/**
 * Returns a one-dimensional array of the elements which are at the specified
 * indices. An index is a one-dimensional array which element-count matches the
 * dimensionality of a. Examples:
 * (select-indices [[1 2] [3 4]] [[0 0][1 1]]) ;=> [1 4]
 */
clojure.core.matrix.select_indices = (function clojure$core$matrix$select_indices(a,indices){
return clojure.core.matrix.protocols.get_indices.call(null,a,indices);
});
/**
 * Like set-selection but mutates the array in place. Will throw an error if array is immutable.
 */
clojure.core.matrix.set_selection_BANG_ = (function clojure$core$matrix$set_selection_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___34200 = arguments.length;
var i__4500__auto___34201 = (0);
while(true){
if((i__4500__auto___34201 < len__4499__auto___34200)){
args__4502__auto__.push((arguments[i__4500__auto___34201]));

var G__34202 = (i__4500__auto___34201 + (1));
i__4500__auto___34201 = G__34202;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return clojure.core.matrix.set_selection_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

clojure.core.matrix.set_selection_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (a,args){
var value = cljs.core.last.call(null,args);
var args__$1 = cljs.core.butlast.call(null,args);
clojure.core.matrix.assign_BANG_.call(null,cljs.core.apply.call(null,clojure.core.matrix.select_view,a,args__$1),value);

return a;
});

clojure.core.matrix.set_selection_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
clojure.core.matrix.set_selection_BANG_.cljs$lang$applyTo = (function (seq34198){
var G__34199 = cljs.core.first.call(null,seq34198);
var seq34198__$1 = cljs.core.next.call(null,seq34198);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34199,seq34198__$1);
});

/**
 * Like select but sets the elements in the selection to the value of the final argument.
 * Leaves a unchanged and returns the modified array
 */
clojure.core.matrix.set_selection = (function clojure$core$matrix$set_selection(var_args){
var args__4502__auto__ = [];
var len__4499__auto___34205 = arguments.length;
var i__4500__auto___34206 = (0);
while(true){
if((i__4500__auto___34206 < len__4499__auto___34205)){
args__4502__auto__.push((arguments[i__4500__auto___34206]));

var G__34207 = (i__4500__auto___34206 + (1));
i__4500__auto___34206 = G__34207;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return clojure.core.matrix.set_selection.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

clojure.core.matrix.set_selection.cljs$core$IFn$_invoke$arity$variadic = (function (a,args){
var a__$1 = clojure.core.matrix.mutable.call(null,a);
var r = cljs.core.apply.call(null,clojure.core.matrix.set_selection_BANG_,a__$1,args);
return clojure.core.matrix.coerce.call(null,a__$1,r);
});

clojure.core.matrix.set_selection.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
clojure.core.matrix.set_selection.cljs$lang$applyTo = (function (seq34203){
var G__34204 = cljs.core.first.call(null,seq34203);
var seq34203__$1 = cljs.core.next.call(null,seq34203);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34204,seq34203__$1);
});

/**
 * like select-indices but sets the elements at the specified indices to values.
 * Leaves the original array (a) unchanged and returns a modified array
 */
clojure.core.matrix.set_indices = (function clojure$core$matrix$set_indices(a,indices,values){
return clojure.core.matrix.protocols.set_indices.call(null,a,indices,values);
});
/**
 * like set-indices but destructively modifies array in place
 */
clojure.core.matrix.set_indices_BANG_ = (function clojure$core$matrix$set_indices_BANG_(a,indices,values){
clojure.core.matrix.protocols.set_indices_BANG_.call(null,a,indices,values);

return a;
});
/**
 * Gets a view of a submatrix, for a set of index ranges.
 * 
 * If Index ranges are used they must be a sequence [start, length] pairs,
 * with the special exception that these pairs can be nil (gets the whole range).
 * 
 * May be a mutable view if supported by the implementation.
 */
clojure.core.matrix.submatrix = (function clojure$core$matrix$submatrix(var_args){
var G__34209 = arguments.length;
switch (G__34209) {
case 2:
return clojure.core.matrix.submatrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.submatrix.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 5:
return clojure.core.matrix.submatrix.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.core.matrix.submatrix.cljs$core$IFn$_invoke$arity$2 = (function (m,index_ranges){
return clojure.core.matrix.protocols.submatrix.call(null,m,index_ranges);
});

clojure.core.matrix.submatrix.cljs$core$IFn$_invoke$arity$3 = (function (m,dimension,index_range){
return clojure.core.matrix.protocols.submatrix.call(null,m,cljs.core.assoc.call(null,cljs.core.vec.call(null,cljs.core.repeat.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m),null)),dimension,index_range));
});

clojure.core.matrix.submatrix.cljs$core$IFn$_invoke$arity$5 = (function (m,row_start,row_length,col_start,col_length){
return clojure.core.matrix.protocols.submatrix.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,row_start,(new cljs.core.List(null,row_length,null,(1),null)),(2),null)),(new cljs.core.List(null,col_start,(new cljs.core.List(null,col_length,null,(1),null)),(2),null))], null));
});

clojure.core.matrix.submatrix.cljs$lang$maxFixedArity = 5;

/**
 * Gets a view of part of a vector, specifed by a start index and length.
 * 
 * The view maintains a reference to the original,
 * so can be used to modify the original vector if it is mutable.
 */
clojure.core.matrix.subvector = (function clojure$core$matrix$subvector(m,start,length){
return clojure.core.matrix.protocols.subvector.call(null,m,start,length);
});
/**
 * Gets a slice of an array along a specific dimension.
 * 
 * The returned array will have one less dimension, i.e. slicing a matrix will return a vector
 * and slicing a 1D vector will return a scalar.
 * 
 * Slicing on the first dimension (dimension 0) is likely to perform better
 * for many array implementations. This is the default.
 */
clojure.core.matrix.slice = (function clojure$core$matrix$slice(var_args){
var G__34212 = arguments.length;
switch (G__34212) {
case 2:
return clojure.core.matrix.slice.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.slice.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.core.matrix.slice.cljs$core$IFn$_invoke$arity$2 = (function (m,index){
return clojure.core.matrix.protocols.get_slice.call(null,m,(0),index);
});

clojure.core.matrix.slice.cljs$core$IFn$_invoke$arity$3 = (function (m,dimension,index){
return clojure.core.matrix.protocols.get_slice.call(null,m,dimension,index);
});

clojure.core.matrix.slice.cljs$lang$maxFixedArity = 3;

/**
 * Gets a sequence of slices of an array. If dimension is supplied, slices along a given dimension,
 * otherwise slices along the first dimension.
 * 
 * Returns a sequence of scalar values if the array is 1-dimensional.
 */
clojure.core.matrix.slices = (function clojure$core$matrix$slices(var_args){
var G__34215 = arguments.length;
switch (G__34215) {
case 1:
return clojure.core.matrix.slices.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.slices.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.core.matrix.slices.cljs$core$IFn$_invoke$arity$1 = (function (m){
return clojure.core.matrix.protocols.get_major_slice_seq.call(null,m);
});

clojure.core.matrix.slices.cljs$core$IFn$_invoke$arity$2 = (function (m,dimension){
return clojure.core.matrix.protocols.get_slice_seq.call(null,m,dimension);
});

clojure.core.matrix.slices.cljs$lang$maxFixedArity = 2;

/**
 * Gets a sequence of views of the slices of an array. If dimension is supplied, slices along a given dimension,
 * otherwise slices along the first dimension. If the matrix implementation supports mutable views, these views
 * can be used to mutate portions of the original array.
 * 
 * A key difference between 'slices' and 'slice-views' is that 'slice-views' must always return views. In order
 * to ensure this behaviour on mutable 1-dimensional arrays, it must return a sequence of 0-dimensional arrays.
 */
clojure.core.matrix.slice_views = (function clojure$core$matrix$slice_views(var_args){
var G__34219 = arguments.length;
switch (G__34219) {
case 1:
return clojure.core.matrix.slice_views.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.slice_views.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.core.matrix.slice_views.cljs$core$IFn$_invoke$arity$1 = (function (m){
return clojure.core.matrix.protocols.get_major_slice_view_seq.call(null,m);
});

clojure.core.matrix.slice_views.cljs$core$IFn$_invoke$arity$2 = (function (m,dimension){
if(((0) === cljs.core.long$.call(null,dimension))){
return clojure.core.matrix.slice_views.call(null,m);
} else {
return cljs.core.map.call(null,(function (p1__34217_SHARP_){
return clojure.core.matrix.protocols.get_slice_view.call(null,m,dimension,p1__34217_SHARP_);
}),cljs.core.range.call(null,clojure.core.matrix.protocols.dimension_count.call(null,m,dimension)));
}
});

clojure.core.matrix.slice_views.cljs$lang$maxFixedArity = 2;

/**
 * Gets a view of an array slice. Guaranteed to return a mutable view if the array is mutable.
 */
clojure.core.matrix.slice_view = (function clojure$core$matrix$slice_view(var_args){
var G__34222 = arguments.length;
switch (G__34222) {
case 2:
return clojure.core.matrix.slice_view.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.slice_view.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.core.matrix.slice_view.cljs$core$IFn$_invoke$arity$2 = (function (m,i){
return clojure.core.matrix.protocols.get_major_slice_view.call(null,m,i);
});

clojure.core.matrix.slice_view.cljs$core$IFn$_invoke$arity$3 = (function (m,dimension,i){
if(((0) === cljs.core.long$.call(null,dimension))){
return clojure.core.matrix.protocols.get_major_slice_view.call(null,m,i);
} else {
return clojure.core.matrix.protocols.get_slice_view.call(null,m,dimension,i);
}
});

clojure.core.matrix.slice_view.cljs$lang$maxFixedArity = 3;

/**
 * Gets the rows of a matrix, as a sequence of 1D vectors.
 * 
 * If the array has more than 2 dimensions, will return the rows from all slices in order.
 */
clojure.core.matrix.rows = (function clojure$core$matrix$rows(m){
return clojure.core.matrix.protocols.get_rows.call(null,m);
});
/**
 * Gets the columns of a matrix, as a seqable collection of 1D vectors.
 * 
 * If the array has more than 2 dimensions, will return the columns from all slices in order.
 */
clojure.core.matrix.columns = (function clojure$core$matrix$columns(m){
return clojure.core.matrix.protocols.get_columns.call(null,m);
});
/**
 * Returns the main diagonal of a matrix or general array, as a vector.
 * The main diagonal of a general array is defined as those elements where the all the
 * indexes are equal, i.e. the index is of the form [i i ... i]
 * Works on both square and rectangular matrices.
 */
clojure.core.matrix.main_diagonal = (function clojure$core$matrix$main_diagonal(m){
return clojure.core.matrix.protocols.main_diagonal.call(null,m);
});
/**
 * Returns the specified diagonal of a 2D matrix as a vector.
 * If k>0, returns a diagonal above the main diagonal.
 * If k<0, returns a diagonal below the main diagonal.
 * Works on both square and rectangular matrices.
 * Returns empty vector if value of k is out of range (outside matrix)
 */
clojure.core.matrix.diagonal = (function clojure$core$matrix$diagonal(var_args){
var G__34225 = arguments.length;
switch (G__34225) {
case 1:
return clojure.core.matrix.diagonal.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.diagonal.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.core.matrix.diagonal.cljs$core$IFn$_invoke$arity$1 = (function (m){
return clojure.core.matrix.protocols.main_diagonal.call(null,m);
});

clojure.core.matrix.diagonal.cljs$core$IFn$_invoke$arity$2 = (function (m,k){
var k__$1 = cljs.core.long$.call(null,k);
if((k__$1 < (0))){
return clojure.core.matrix.protocols.main_diagonal.call(null,clojure.core.matrix.protocols.submatrix.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- k__$1),(clojure.core.matrix.dimension_count.call(null,m,(0)) + k__$1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),clojure.core.matrix.dimension_count.call(null,m,(1))], null)], null)));
} else {
if((k__$1 > (0))){
return clojure.core.matrix.protocols.main_diagonal.call(null,clojure.core.matrix.protocols.submatrix.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),clojure.core.matrix.dimension_count.call(null,m,(0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k__$1,(clojure.core.matrix.dimension_count.call(null,m,(1)) - k__$1)], null)], null)));
} else {
return clojure.core.matrix.protocols.main_diagonal.call(null,m);

}
}
});

clojure.core.matrix.diagonal.cljs$lang$maxFixedArity = 2;

/**
 * Joins arrays together, along the major dimension 0. For 1D vectors, this behaves as simple concatenation.
 * Other dimensions must be compatible. To join arrays along a different dimension, use 'join-along' instead.
 */
clojure.core.matrix.join = (function clojure$core$matrix$join(var_args){
var args__4502__auto__ = [];
var len__4499__auto___34228 = arguments.length;
var i__4500__auto___34229 = (0);
while(true){
if((i__4500__auto___34229 < len__4499__auto___34228)){
args__4502__auto__.push((arguments[i__4500__auto___34229]));

var G__34230 = (i__4500__auto___34229 + (1));
i__4500__auto___34229 = G__34230;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return clojure.core.matrix.join.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

clojure.core.matrix.join.cljs$core$IFn$_invoke$arity$variadic = (function (arrays){
return cljs.core.reduce.call(null,clojure.core.matrix.protocols.join,arrays);
});

clojure.core.matrix.join.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
clojure.core.matrix.join.cljs$lang$applyTo = (function (seq34227){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34227));
});

/**
 * Joins arrays together, concatenating them along the specified dimension.
 * 
 * Other dimensions must be compatible.
 */
clojure.core.matrix.join_along = (function clojure$core$matrix$join_along(var_args){
var args__4502__auto__ = [];
var len__4499__auto___34235 = arguments.length;
var i__4500__auto___34236 = (0);
while(true){
if((i__4500__auto___34236 < len__4499__auto___34235)){
args__4502__auto__.push((arguments[i__4500__auto___34236]));

var G__34237 = (i__4500__auto___34236 + (1));
i__4500__auto___34236 = G__34237;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return clojure.core.matrix.join_along.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

clojure.core.matrix.join_along.cljs$core$IFn$_invoke$arity$variadic = (function (dimension,arrays){
var or__3922__auto__ = cljs.core.reduce.call(null,(function (p1__34231_SHARP_,p2__34232_SHARP_){
return clojure.core.matrix.protocols.join_along.call(null,p1__34231_SHARP_,p2__34232_SHARP_,dimension);
}),arrays);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
throw cljs.core.ex_info.call(null,["Failure to joins arrays"].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});

clojure.core.matrix.join_along.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
clojure.core.matrix.join_along.cljs$lang$applyTo = (function (seq34233){
var G__34234 = cljs.core.first.call(null,seq34233);
var seq34233__$1 = cljs.core.next.call(null,seq34233);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34234,seq34233__$1);
});

/**
 * Adds a new value [b] as a new slice to an array [a], returning the extended array.
 * Broadcasts the new value to the correct shape of a slice of a if necessary.
 * 
 * This can be considered as the array equivalent of clojure.core/conj
 */
clojure.core.matrix.conjoin = (function clojure$core$matrix$conjoin(var_args){
var G__34243 = arguments.length;
switch (G__34243) {
case 2:
return clojure.core.matrix.conjoin.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4514__auto__ = [];
var len__4499__auto___34245 = arguments.length;
var i__4500__auto___34246 = (0);
while(true){
if((i__4500__auto___34246 < len__4499__auto___34245)){
args_arr__4514__auto__.push((arguments[i__4500__auto___34246]));

var G__34247 = (i__4500__auto___34246 + (1));
i__4500__auto___34246 = G__34247;
continue;
} else {
}
break;
}

var argseq__4515__auto__ = (new cljs.core.IndexedSeq(args_arr__4514__auto__.slice((2)),(0),null));
return clojure.core.matrix.conjoin.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4515__auto__);

}
});

clojure.core.matrix.conjoin.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var ss = cljs.core.assoc.call(null,cljs.core.vec.call(null,clojure.core.matrix.protocols.get_shape.call(null,a)),(0),(1));
return clojure.core.matrix.join.call(null,a,clojure.core.matrix.protocols.broadcast.call(null,b,ss));
});

clojure.core.matrix.conjoin.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
var ss = cljs.core.vec.call(null,cljs.core.next.call(null,clojure.core.matrix.protocols.get_shape.call(null,a)));
var slcs = cljs.core.mapv.call(null,((function (ss){
return (function (p1__34238_SHARP_){
return clojure.core.matrix.protocols.broadcast.call(null,p1__34238_SHARP_,ss);
});})(ss))
,cljs.core.cons.call(null,b,more));
return clojure.core.matrix.join.call(null,a,slcs);
});

/** @this {Function} */
clojure.core.matrix.conjoin.cljs$lang$applyTo = (function (seq34240){
var G__34241 = cljs.core.first.call(null,seq34240);
var seq34240__$1 = cljs.core.next.call(null,seq34240);
var G__34242 = cljs.core.first.call(null,seq34240__$1);
var seq34240__$2 = cljs.core.next.call(null,seq34240__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34241,G__34242,seq34240__$2);
});

clojure.core.matrix.conjoin.cljs$lang$maxFixedArity = (2);

/**
 * Adds a new value [b] as a new slice to an array [a] along the given dimension,
 * returning the extended array.
 * Broadcasts the new value to the correct shape of a slice of a if necessary.
 * 
 * This can be considered as the array equivalent of clojure.core/conj using
 * a specified dimension
 */
clojure.core.matrix.conjoin_along = (function clojure$core$matrix$conjoin_along(var_args){
var G__34253 = arguments.length;
switch (G__34253) {
case 3:
return clojure.core.matrix.conjoin_along.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4514__auto__ = [];
var len__4499__auto___34255 = arguments.length;
var i__4500__auto___34256 = (0);
while(true){
if((i__4500__auto___34256 < len__4499__auto___34255)){
args_arr__4514__auto__.push((arguments[i__4500__auto___34256]));

var G__34257 = (i__4500__auto___34256 + (1));
i__4500__auto___34256 = G__34257;
continue;
} else {
}
break;
}

var argseq__4515__auto__ = (new cljs.core.IndexedSeq(args_arr__4514__auto__.slice((3)),(0),null));
return clojure.core.matrix.conjoin_along.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4515__auto__);

}
});

clojure.core.matrix.conjoin_along.cljs$core$IFn$_invoke$arity$3 = (function (dim,a,b){
if((cljs.core.long$.call(null,dim) === (0))){
return clojure.core.matrix.conjoin.call(null,a,b);
} else {
var ss = clojure.core.matrix.protocols.get_shape.call(null,clojure.core.matrix.protocols.get_slice.call(null,a,dim,(0)));
return clojure.core.matrix.join_along.call(null,dim,a,clojure.core.matrix.protocols.broadcast.call(null,b,ss));
}
});

clojure.core.matrix.conjoin_along.cljs$core$IFn$_invoke$arity$variadic = (function (dim,a,b,more){
return cljs.core.reduce.call(null,(function (a__$1,b__$1){
return clojure.core.matrix.conjoin_along.call(null,dim,a__$1,b__$1);
}),clojure.core.matrix.conjoin_along.call(null,dim,a,b),more);
});

/** @this {Function} */
clojure.core.matrix.conjoin_along.cljs$lang$applyTo = (function (seq34249){
var G__34250 = cljs.core.first.call(null,seq34249);
var seq34249__$1 = cljs.core.next.call(null,seq34249);
var G__34251 = cljs.core.first.call(null,seq34249__$1);
var seq34249__$2 = cljs.core.next.call(null,seq34249__$1);
var G__34252 = cljs.core.first.call(null,seq34249__$2);
var seq34249__$3 = cljs.core.next.call(null,seq34249__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34250,G__34251,G__34252,seq34249__$3);
});

clojure.core.matrix.conjoin_along.cljs$lang$maxFixedArity = (3);

/**
 * Rotates an array along specified dimensions.
 * 
 * Elements rotated off will re-appear at the other side. The shape of the array will not be modified.
 */
clojure.core.matrix.rotate = (function clojure$core$matrix$rotate(var_args){
var G__34259 = arguments.length;
switch (G__34259) {
case 3:
return clojure.core.matrix.rotate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return clojure.core.matrix.rotate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.core.matrix.rotate.cljs$core$IFn$_invoke$arity$3 = (function (m,dimension,shift_amount){
return clojure.core.matrix.protocols.rotate.call(null,m,dimension,shift_amount);
});

clojure.core.matrix.rotate.cljs$core$IFn$_invoke$arity$2 = (function (m,shifts){
return clojure.core.matrix.protocols.rotate_all.call(null,m,shifts);
});

clojure.core.matrix.rotate.cljs$lang$maxFixedArity = 3;

/**
 * Shifts all elements of an array along specified dimensions, maintaining the shape of the array.
 * 
 * New spaces shifted into the array are filled with zero.
 */
clojure.core.matrix.shift = (function clojure$core$matrix$shift(var_args){
var G__34262 = arguments.length;
switch (G__34262) {
case 3:
return clojure.core.matrix.shift.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return clojure.core.matrix.shift.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.core.matrix.shift.cljs$core$IFn$_invoke$arity$3 = (function (m,dimension,shift_amount){
return clojure.core.matrix.protocols.shift.call(null,m,dimension,shift_amount);
});

clojure.core.matrix.shift.cljs$core$IFn$_invoke$arity$2 = (function (m,shifts){
return clojure.core.matrix.protocols.shift_all.call(null,m,shifts);
});

clojure.core.matrix.shift.cljs$lang$maxFixedArity = 3;

/**
 * Reorders slices of an array along a specified dimension. Re-orders along major dimension
 * if no dimension is specified.
 * 
 * Indicies can be any seqable object containing the indices along the specified dimension to select.
 * An index can be selected multiple times (which created repreated slices), or not at all (which excludes
 * the slice from the result).
 */
clojure.core.matrix.order = (function clojure$core$matrix$order(var_args){
var G__34265 = arguments.length;
switch (G__34265) {
case 2:
return clojure.core.matrix.order.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.order.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.core.matrix.order.cljs$core$IFn$_invoke$arity$2 = (function (m,indices){
return clojure.core.matrix.protocols.order.call(null,m,indices);
});

clojure.core.matrix.order.cljs$core$IFn$_invoke$arity$3 = (function (m,dimension,indices){
return clojure.core.matrix.protocols.order.call(null,m,dimension,indices);
});

clojure.core.matrix.order.cljs$lang$maxFixedArity = 3;

/**
 * Creates a view of an array as a single flattened vector.
 * 
 * Returns nil if this is not supported by the implementation. You should use `to-vector` instead to
 * obtain a flattened vector without guaranteeing a view.
 */
clojure.core.matrix.as_vector = (function clojure$core$matrix$as_vector(m){
return clojure.core.matrix.protocols.as_vector.call(null,m);
});
/**
 * Creates a new array representing the elements of array m as a single flattened vector.
 * 
 * This operation guarantees a new copy of the data.
 */
clojure.core.matrix.to_vector = (function clojure$core$matrix$to_vector(m){
var or__3922__auto__ = clojure.core.matrix.protocols.to_vector.call(null,m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return clojure.core.matrix.array.call(null,m,clojure.core.matrix.protocols.to_object_array.call(null,m));
}
});
/**
 * Broadcasts an array to a specified shape. Returns a new array with the shape specified.
 * The broadcasted array may be a view over the original array: attempting to modify the
 * broadcasted array therefore has implementation-dependent results.
 * 
 * Will throw an exception if broadcast to the target shape is not possible.
 */
clojure.core.matrix.broadcast = (function clojure$core$matrix$broadcast(m,shape){
var or__3922__auto__ = clojure.core.matrix.protocols.broadcast.call(null,m,shape);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return clojure.core.matrix.protocols.broadcast.call(null,clojure.core.matrix.protocols.coerce_param.call(null,clojure.core.matrix.implementation_check.call(null),m),shape);
}
});
/**
 * Broadcasts the second array to the shape of the first. See 'broadcast'.
 */
clojure.core.matrix.broadcast_like = (function clojure$core$matrix$broadcast_like(m,a){
return clojure.core.matrix.protocols.broadcast_like.call(null,m,a);
});
/**
 * Broadcasts and coerces the second array to the same shape and type of the first.
 * Equivalent to (coerce m (broadcast-like m a)).
 * 
 * Useful for converting arrays to the correct shape and type for efficient future operations.
 */
clojure.core.matrix.broadcast_coerce = (function clojure$core$matrix$broadcast_coerce(m,a){
return clojure.core.matrix.protocols.broadcast_coerce.call(null,m,a);
});
/**
 * Transposes an array, returning a new array. 
 * 
 * Assuming no specific ordering is provided:
 *  - 1D vectors and scalars will be returned unchanged
 *  - For 2D matrices, rows and columns are swapped.
 *  - The dimension indices are reversed for any shape of a higher order N-dimensional array. 
 * 
 * If ordering is provided, will re-order dimensions according to the provided order. The 
 * provided ordering must be of the same length as the dimensionality of the array and
 * contain all the integers in the range 0...(dims-1).
 */
clojure.core.matrix.transpose = (function clojure$core$matrix$transpose(var_args){
var G__34268 = arguments.length;
switch (G__34268) {
case 1:
return clojure.core.matrix.transpose.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.transpose.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.core.matrix.transpose.cljs$core$IFn$_invoke$arity$1 = (function (m){
return clojure.core.matrix.protocols.transpose.call(null,m);
});

clojure.core.matrix.transpose.cljs$core$IFn$_invoke$arity$2 = (function (m,ordering){
return clojure.core.matrix.protocols.transpose_dims.call(null,m,ordering);
});

clojure.core.matrix.transpose.cljs$lang$maxFixedArity = 2;

/**
 * Transposes a square 2D matrix in-place.
 * 
 * Will throw an exception if not possible (e.g. if the matrix is not square or not mutable).
 */
clojure.core.matrix.transpose_BANG_ = (function clojure$core$matrix$transpose_BANG_(m){
clojure.core.matrix.protocols.transpose_BANG_.call(null,m);

return m;
});
/**
 * Changes the shape of a matrix to the specified new shape. shape can be any sequence of dimension sizes.
 * 
 * Preserves the row-major order of matrix elements. Truncates the sequence of elements if the shape is smaller
 * than the original shape.
 * 
 * Pads with default values (dependent on implementation - normally zero) if the shape is larger.
 */
clojure.core.matrix.reshape = (function clojure$core$matrix$reshape(m,shape){
return clojure.core.matrix.protocols.reshape.call(null,m,shape);
});
/**
 * Returns a view over an array with the specified new shape. shape can be any sequence of dimension sizes.
 * 
 * Preserves the row-major order of matrix elements. Truncates the sequence of elements if the shape is smaller
 * than the original shape.
 * 
 * Behaviour is currently undefined if the new shape is larger than the original array.
 */
clojure.core.matrix.reshape_view = (function clojure$core$matrix$reshape_view(m,shape){
return clojure.core.matrix.protocols.reshape_view.call(null,m,shape);
});
/**
 * Fills an array with a single scalar value. The scalar value must be compatible with the element-type
 * of the array.
 * 
 * Similar to assign!, but only supports scalar values (and may be more efficient).
 */
clojure.core.matrix.fill_BANG_ = (function clojure$core$matrix$fill_BANG_(m,value){
clojure.core.matrix.protocols.fill_BANG_.call(null,m,value);

return m;
});
/**
 * Fills an array with a single scalar value. The scalar value must be compatible with the element-type
 * of the array. Returns a new array.
 * 
 * Functionally similar to `assign!` except only intended for use with a scalar value.
 */
clojure.core.matrix.fill = (function clojure$core$matrix$fill(m,value){
return clojure.core.matrix.assign.call(null,m,clojure.core.matrix.protocols.get_0d.call(null,value));
});
/**
 * Returns true if two arrays are numerically equal.
 * 
 * Will return false for arrays of different shapes.
 * 
 * May either return false or throw an error if the arrays are not numerical.
 * 
 * If epsilon is provided, performs an equality test
 * with the given maximum tolerance (default is 0.0, i.e. exact numerical equivalence)
 */
clojure.core.matrix.equals = (function clojure$core$matrix$equals(var_args){
var G__34271 = arguments.length;
switch (G__34271) {
case 1:
return clojure.core.matrix.equals.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.equals.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.equals.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.core.matrix.equals.cljs$core$IFn$_invoke$arity$1 = (function (a){
return true;
});

clojure.core.matrix.equals.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.core.matrix.protocols.matrix_equals.call(null,a,b);
});

clojure.core.matrix.equals.cljs$core$IFn$_invoke$arity$3 = (function (a,b,epsilon){
return clojure.core.matrix.protocols.matrix_equals_epsilon.call(null,a,b,epsilon);
});

clojure.core.matrix.equals.cljs$lang$maxFixedArity = 3;

/**
 * Element-wise of comparisons of two arrays. Returns the signum of the difference
 * between corresponding elements in two arrays.
 * 
 *   Performs broadcasting of arguments if required to match the size of the largest array.
 * 
 *   Examples:
 *   (cmp 1 3) ;=> -1
 *   (cmp 0 0) ;=> 0
 *   (cmp 1 -1) ;=> 1
 *   (cmp [[1 3] [5 5]] [[3 3] [5 3]]) ;=> [[-1 0] [0 1]]
 *   (cmp [[1 4][1 5][1 8]] [[1 2][1 5][2 7]]) ;=> [[0 1][0 0][-1 1]]
 *   
 */
clojure.core.matrix.cmp = (function clojure$core$matrix$cmp(a,b){
return clojure.core.matrix.protocols.element_compare.call(null,a,b);
});
/**
 * Element-wise if. Tranverses each element, x, of an array, m. If x > 0,
 *   returns a (if a is a scalar) or the corresponding element from a (if a is an
 *   array or matrix). If x <= 0, returns b (if b is a scalar) or the corresponding
 *   element from array b (if b is an array or matrix).
 * 
 *   Performs broadcasting of arguments if required to match the size of the largest array.
 * 
 *   Examples:
 *   (eif (lt 1 3) 3 6) ;=> 3
 *   (eif (lt 5 3) 3 6) ;=> 6
 *   (eif (eq A B) 1 2) ;=> [[1 2] [2 1]]
 *   (eif (eq A B) 1 D) ;=> [[1 1] [9 1]]
 *   (eif (eq A B) C 2) ;=> [[2 2] [2 2]]
 *   (eif [[1 0][0 1] [[2 3][4 5]] [[6 7][8 9]]) ;=> [[2 7][8 5]]
 *   (eif (gt [[2 6][3 5]] 4) [[0 0][0 0]] [[1 1][1 1]] ;=> [[0 1][0 1]]
 */
clojure.core.matrix.eif = (function clojure$core$matrix$eif(m,a,b){
return clojure.core.matrix.protocols.element_if.call(null,m,a,b);
});
/**
 * Element-wise less-than comparison operation. Returns a binary array where
 *   elements less-than the argument are represented by 1 and elements greater-
 *   than or equal to the argument are 0.
 * 
 *   Performs broadcasting of arguments if required to match the size of the largest array.
 * 
 *   Examples:
 *   (lt 1 4) ;=> 1
 *   (lt 3 3) ;=> 0
 *   (lt [[1 5] [3 6]] 3) ;=> [[1 0] [0 0]]
 *   (lt [[1 5] [4 6]] [[2 3] [5 6]]) ;=> [[1 0] [1 0]]
 */
clojure.core.matrix.lt = (function clojure$core$matrix$lt(var_args){
var G__34277 = arguments.length;
switch (G__34277) {
case 2:
return clojure.core.matrix.lt.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4514__auto__ = [];
var len__4499__auto___34279 = arguments.length;
var i__4500__auto___34280 = (0);
while(true){
if((i__4500__auto___34280 < len__4499__auto___34279)){
args_arr__4514__auto__.push((arguments[i__4500__auto___34280]));

var G__34281 = (i__4500__auto___34280 + (1));
i__4500__auto___34280 = G__34281;
continue;
} else {
}
break;
}

var argseq__4515__auto__ = (new cljs.core.IndexedSeq(args_arr__4514__auto__.slice((2)),(0),null));
return clojure.core.matrix.lt.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4515__auto__);

}
});

clojure.core.matrix.lt.cljs$core$IFn$_invoke$arity$2 = (function (m,a){
return clojure.core.matrix.protocols.element_lt.call(null,m,a);
});

clojure.core.matrix.lt.cljs$core$IFn$_invoke$arity$variadic = (function (m,a,more){
var arrays = cljs.core.cons.call(null,m,cljs.core.cons.call(null,a,more));
return cljs.core.reduce.call(null,clojure.core.matrix.protocols.element_multiply,cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.apply,clojure.core.matrix.protocols.element_lt),cljs.core.partition.call(null,(2),(1),arrays)));
});

/** @this {Function} */
clojure.core.matrix.lt.cljs$lang$applyTo = (function (seq34274){
var G__34275 = cljs.core.first.call(null,seq34274);
var seq34274__$1 = cljs.core.next.call(null,seq34274);
var G__34276 = cljs.core.first.call(null,seq34274__$1);
var seq34274__$2 = cljs.core.next.call(null,seq34274__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34275,G__34276,seq34274__$2);
});

clojure.core.matrix.lt.cljs$lang$maxFixedArity = (2);

/**
 * Element-wise less-than-or-equal-to comparison operation. Returns a binary
 *   array where elements less-than or equal to the argument are represented by 1
 *   and elements greater-than to the argument are 0.
 * 
 *   Performs broadcasting of arguments if required to match the size of the largest array.
 * 
 *   Examples:
 *   (le 3 3) ;=> 1
 *   (le 4 3) ;=> 0
 *   (le [[1 5] [3 6]] 3) ;=> [[1 0] [1 0]]
 *   (le [[1 5] [4 6]] [[2 3] [5 6]]) ;=> [[1 0] [1 1]]
 */
clojure.core.matrix.le = (function clojure$core$matrix$le(var_args){
var G__34286 = arguments.length;
switch (G__34286) {
case 2:
return clojure.core.matrix.le.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4514__auto__ = [];
var len__4499__auto___34288 = arguments.length;
var i__4500__auto___34289 = (0);
while(true){
if((i__4500__auto___34289 < len__4499__auto___34288)){
args_arr__4514__auto__.push((arguments[i__4500__auto___34289]));

var G__34290 = (i__4500__auto___34289 + (1));
i__4500__auto___34289 = G__34290;
continue;
} else {
}
break;
}

var argseq__4515__auto__ = (new cljs.core.IndexedSeq(args_arr__4514__auto__.slice((2)),(0),null));
return clojure.core.matrix.le.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4515__auto__);

}
});

clojure.core.matrix.le.cljs$core$IFn$_invoke$arity$2 = (function (m,a){
return clojure.core.matrix.protocols.element_le.call(null,m,a);
});

clojure.core.matrix.le.cljs$core$IFn$_invoke$arity$variadic = (function (m,a,more){
var arrays = cljs.core.cons.call(null,m,cljs.core.cons.call(null,a,more));
return cljs.core.reduce.call(null,clojure.core.matrix.protocols.element_multiply,cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.apply,clojure.core.matrix.protocols.element_le),cljs.core.partition.call(null,(2),(1),arrays)));
});

/** @this {Function} */
clojure.core.matrix.le.cljs$lang$applyTo = (function (seq34283){
var G__34284 = cljs.core.first.call(null,seq34283);
var seq34283__$1 = cljs.core.next.call(null,seq34283);
var G__34285 = cljs.core.first.call(null,seq34283__$1);
var seq34283__$2 = cljs.core.next.call(null,seq34283__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34284,G__34285,seq34283__$2);
});

clojure.core.matrix.le.cljs$lang$maxFixedArity = (2);

/**
 * Element-wise greater-than comparison operation. Returns a binary array where
 *   elements greater-than the argument are represented by 1 and elements less-
 *   than or equal to the argument are 0.
 * 
 *   Performs broadcasting of arguments if required to match the size of the largest array.
 * 
 *   Examples:
 *   (gt 4 3) ;=> 1
 *   (gt 3 3) ;=> 0
 *   (gt [[1 5] [3 6]] 3) ;=> [[0 1] [0 1]]
 *   (gt [[1 5] [4 6]] [[2 3] [5 6]]) ;=> [[0 1] [0 0]]
 */
clojure.core.matrix.gt = (function clojure$core$matrix$gt(var_args){
var G__34295 = arguments.length;
switch (G__34295) {
case 2:
return clojure.core.matrix.gt.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4514__auto__ = [];
var len__4499__auto___34297 = arguments.length;
var i__4500__auto___34298 = (0);
while(true){
if((i__4500__auto___34298 < len__4499__auto___34297)){
args_arr__4514__auto__.push((arguments[i__4500__auto___34298]));

var G__34299 = (i__4500__auto___34298 + (1));
i__4500__auto___34298 = G__34299;
continue;
} else {
}
break;
}

var argseq__4515__auto__ = (new cljs.core.IndexedSeq(args_arr__4514__auto__.slice((2)),(0),null));
return clojure.core.matrix.gt.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4515__auto__);

}
});

clojure.core.matrix.gt.cljs$core$IFn$_invoke$arity$2 = (function (m,a){
return clojure.core.matrix.protocols.element_gt.call(null,m,a);
});

clojure.core.matrix.gt.cljs$core$IFn$_invoke$arity$variadic = (function (m,a,more){
var arrays = cljs.core.cons.call(null,m,cljs.core.cons.call(null,a,more));
return cljs.core.reduce.call(null,clojure.core.matrix.protocols.element_multiply,cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.apply,clojure.core.matrix.protocols.element_gt),cljs.core.partition.call(null,(2),(1),arrays)));
});

/** @this {Function} */
clojure.core.matrix.gt.cljs$lang$applyTo = (function (seq34292){
var G__34293 = cljs.core.first.call(null,seq34292);
var seq34292__$1 = cljs.core.next.call(null,seq34292);
var G__34294 = cljs.core.first.call(null,seq34292__$1);
var seq34292__$2 = cljs.core.next.call(null,seq34292__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34293,G__34294,seq34292__$2);
});

clojure.core.matrix.gt.cljs$lang$maxFixedArity = (2);

/**
 * Element-wise greater-than-or-equal-to comparison operation. Returns a binary
 *   array where elements greater-than or equal to the argument are represented by 1
 *   and elements less-than to the argument are 0.
 * 
 *   Performs broadcasting of arguments if required to match the size of the largest array.
 * 
 *   Examples:
 *   (ge 2 3) ;=> 0
 *   (ge 3 3) ;=> 1
 *   (ge [[1 5] [3 6]] 3) ;=> [[0 1] [1 1]]
 *   (ge [[1 5] [4 6]] [[2 3] [5 6]]) ;=> [[0 1] [0 1]]
 */
clojure.core.matrix.ge = (function clojure$core$matrix$ge(var_args){
var G__34304 = arguments.length;
switch (G__34304) {
case 2:
return clojure.core.matrix.ge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4514__auto__ = [];
var len__4499__auto___34306 = arguments.length;
var i__4500__auto___34307 = (0);
while(true){
if((i__4500__auto___34307 < len__4499__auto___34306)){
args_arr__4514__auto__.push((arguments[i__4500__auto___34307]));

var G__34308 = (i__4500__auto___34307 + (1));
i__4500__auto___34307 = G__34308;
continue;
} else {
}
break;
}

var argseq__4515__auto__ = (new cljs.core.IndexedSeq(args_arr__4514__auto__.slice((2)),(0),null));
return clojure.core.matrix.ge.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4515__auto__);

}
});

clojure.core.matrix.ge.cljs$core$IFn$_invoke$arity$2 = (function (m,a){
return clojure.core.matrix.protocols.element_ge.call(null,m,a);
});

clojure.core.matrix.ge.cljs$core$IFn$_invoke$arity$variadic = (function (m,a,more){
var arrays = cljs.core.cons.call(null,m,cljs.core.cons.call(null,a,more));
return cljs.core.reduce.call(null,clojure.core.matrix.protocols.element_multiply,cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.apply,clojure.core.matrix.protocols.element_ge),cljs.core.partition.call(null,(2),(1),arrays)));
});

/** @this {Function} */
clojure.core.matrix.ge.cljs$lang$applyTo = (function (seq34301){
var G__34302 = cljs.core.first.call(null,seq34301);
var seq34301__$1 = cljs.core.next.call(null,seq34301);
var G__34303 = cljs.core.first.call(null,seq34301__$1);
var seq34301__$2 = cljs.core.next.call(null,seq34301__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34302,G__34303,seq34301__$2);
});

clojure.core.matrix.ge.cljs$lang$maxFixedArity = (2);

/**
 * Element-wise not-equal comparison operation. Returns a binary array where
 *   elements not-equal to the argument are represented by 1 and elements equal to
 *   the argument are 0.
 * 
 *   Performs broadcasting of arguments if required to match the size of the largest array.
 * 
 *   Examples:
 *   (ne 1 1) ;=> 0
 *   (ne 5 1) ;=> 1
 *   (ne [[1 5] [3 6]] 3) ;=> [[1 1] [0 1]]
 *   (ne [[1 5] [4 6]] [[2 3] [5 6]]) ;=> [[1 1] [1 0]]
 */
clojure.core.matrix.ne = (function clojure$core$matrix$ne(m,a){
return clojure.core.matrix.protocols.element_ne.call(null,m,a);
});
/**
 * Element-wise equal comparison operation. Returns a binary
 * array where elements equal to the argument are represented by 1 and
 * elements not-equal to the argument are 0.
 * 
 *   Performs broadcasting of arguments if required to match the size of the largest array.
 * 
 *   Examples:
 *   (eq 1 1) ;=> 1
 *   (eq 5 1) ;=> 0
 *   (eq [[1 5] [3 6]] 3) ;=> [[0 0] [1 0]]
 *   (eq [[1 5] [4 6]] [[2 3] [5 6]]) ;=> [[0 0] [0 1]]
 */
clojure.core.matrix.eq = (function clojure$core$matrix$eq(m,a){
return clojure.core.matrix.protocols.element_eq.call(null,m,a);
});
/**
 * Returns true if all corresponding array elements are equal (using the semantics of clojure.core/=).
 * 
 * WARNING: a java.lang.Long does not equal a java.lang.Double.
 * Use 'equals' or 'e==' instead if you want to test for numerical equality.
 */
clojure.core.matrix.e_EQ_ = (function clojure$core$matrix$e_EQ_(var_args){
var G__34313 = arguments.length;
switch (G__34313) {
case 1:
return clojure.core.matrix.e_EQ_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.e_EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4514__auto__ = [];
var len__4499__auto___34315 = arguments.length;
var i__4500__auto___34316 = (0);
while(true){
if((i__4500__auto___34316 < len__4499__auto___34315)){
args_arr__4514__auto__.push((arguments[i__4500__auto___34316]));

var G__34317 = (i__4500__auto___34316 + (1));
i__4500__auto___34316 = G__34317;
continue;
} else {
}
break;
}

var argseq__4515__auto__ = (new cljs.core.IndexedSeq(args_arr__4514__auto__.slice((2)),(0),null));
return clojure.core.matrix.e_EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4515__auto__);

}
});

clojure.core.matrix.e_EQ_.cljs$core$IFn$_invoke$arity$1 = (function (m1){
return true;
});

clojure.core.matrix.e_EQ_.cljs$core$IFn$_invoke$arity$2 = (function (m1,m2){
return clojure.core.matrix.protocols.value_equals.call(null,m1,m2);
});

clojure.core.matrix.e_EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (m1,m2,more){
var and__3911__auto__ = clojure.core.matrix.protocols.value_equals.call(null,m1,m2);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.apply.call(null,clojure.core.matrix.e_EQ_,m2,more);
} else {
return and__3911__auto__;
}
});

/** @this {Function} */
clojure.core.matrix.e_EQ_.cljs$lang$applyTo = (function (seq34310){
var G__34311 = cljs.core.first.call(null,seq34310);
var seq34310__$1 = cljs.core.next.call(null,seq34310);
var G__34312 = cljs.core.first.call(null,seq34310__$1);
var seq34310__$2 = cljs.core.next.call(null,seq34310__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34311,G__34312,seq34310__$2);
});

clojure.core.matrix.e_EQ_.cljs$lang$maxFixedArity = (2);

/**
 * Returns true if all corresponding array elements are numerically equal.
 * 
 * Throws an error if any elements of the arrays being compared are not numerical values.
 */
clojure.core.matrix.e_EQ__EQ_ = (function clojure$core$matrix$e_EQ__EQ_(var_args){
var G__34322 = arguments.length;
switch (G__34322) {
case 1:
return clojure.core.matrix.e_EQ__EQ_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.e_EQ__EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4514__auto__ = [];
var len__4499__auto___34324 = arguments.length;
var i__4500__auto___34325 = (0);
while(true){
if((i__4500__auto___34325 < len__4499__auto___34324)){
args_arr__4514__auto__.push((arguments[i__4500__auto___34325]));

var G__34326 = (i__4500__auto___34325 + (1));
i__4500__auto___34325 = G__34326;
continue;
} else {
}
break;
}

var argseq__4515__auto__ = (new cljs.core.IndexedSeq(args_arr__4514__auto__.slice((2)),(0),null));
return clojure.core.matrix.e_EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4515__auto__);

}
});

clojure.core.matrix.e_EQ__EQ_.cljs$core$IFn$_invoke$arity$1 = (function (m1){
return true;
});

clojure.core.matrix.e_EQ__EQ_.cljs$core$IFn$_invoke$arity$2 = (function (m1,m2){
return clojure.core.matrix.equals.call(null,m1,m2);
});

clojure.core.matrix.e_EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (m1,m2,more){
return cljs.core.reduce.call(null,clojure.core.matrix.equals,clojure.core.matrix.equals.call(null,m1,m2),more);
});

/** @this {Function} */
clojure.core.matrix.e_EQ__EQ_.cljs$lang$applyTo = (function (seq34319){
var G__34320 = cljs.core.first.call(null,seq34319);
var seq34319__$1 = cljs.core.next.call(null,seq34319);
var G__34321 = cljs.core.first.call(null,seq34319__$1);
var seq34319__$2 = cljs.core.next.call(null,seq34319__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34320,G__34321,seq34319__$2);
});

clojure.core.matrix.e_EQ__EQ_.cljs$lang$maxFixedArity = (2);

/**
 * Returns a label for the specified position along a given array dimension. Returns nil if the dimension is unlabelled.
 */
clojure.core.matrix.label = (function clojure$core$matrix$label(m,dim,i){
return clojure.core.matrix.protocols.label.call(null,m,dim,i);
});
/**
 * Return a vector of labels for a given array dimension. Return nil if the dimension is unlabelled.
 */
clojure.core.matrix.labels = (function clojure$core$matrix$labels(m,dim){
return clojure.core.matrix.protocols.labels.call(null,m,dim);
});
/**
 * Return the index of a label along a given dimension. Returns nil if the label does not exist.
 */
clojure.core.matrix.label_index = (function clojure$core$matrix$label_index(m,dim,label){
var ls = clojure.core.matrix.protocols.labels.call(null,m,dim);
var and__3911__auto__ = ls;
if(cljs.core.truth_(and__3911__auto__)){
return clojure.core.matrix.utils.find_index.call(null,ls,label);
} else {
return and__3911__auto__;
}
});
/**
 * Performs element-wise multiplication with scalars and numerical arrays.
 * 
 * Examples: 
 *   (mul [1 2] [3 4]) ;=> [3 8]
 * 
 * Behaves like clojure.core/* for scalar values.
 */
clojure.core.matrix.mul = (function clojure$core$matrix$mul(var_args){
var G__34331 = arguments.length;
switch (G__34331) {
case 0:
return clojure.core.matrix.mul.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.core.matrix.mul.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.mul.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4514__auto__ = [];
var len__4499__auto___34333 = arguments.length;
var i__4500__auto___34334 = (0);
while(true){
if((i__4500__auto___34334 < len__4499__auto___34333)){
args_arr__4514__auto__.push((arguments[i__4500__auto___34334]));

var G__34335 = (i__4500__auto___34334 + (1));
i__4500__auto___34334 = G__34335;
continue;
} else {
}
break;
}

var argseq__4515__auto__ = (new cljs.core.IndexedSeq(args_arr__4514__auto__.slice((2)),(0),null));
return clojure.core.matrix.mul.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4515__auto__);

}
});

clojure.core.matrix.mul.cljs$core$IFn$_invoke$arity$0 = (function (){
return 1.0;
});

clojure.core.matrix.mul.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
});

clojure.core.matrix.mul.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.core.matrix.protocols.element_multiply.call(null,a,b);
});

clojure.core.matrix.mul.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
return cljs.core.reduce.call(null,clojure.core.matrix.protocols.element_multiply,clojure.core.matrix.protocols.element_multiply.call(null,a,b),more);
});

/** @this {Function} */
clojure.core.matrix.mul.cljs$lang$applyTo = (function (seq34328){
var G__34329 = cljs.core.first.call(null,seq34328);
var seq34328__$1 = cljs.core.next.call(null,seq34328);
var G__34330 = cljs.core.first.call(null,seq34328__$1);
var seq34328__$2 = cljs.core.next.call(null,seq34328__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34329,G__34330,seq34328__$2);
});

clojure.core.matrix.mul.cljs$lang$maxFixedArity = (2);

/**
 * DEPRECATED: please use mul instead.
 */
clojure.core.matrix.emul = (function clojure$core$matrix$emul(var_args){
var G__34340 = arguments.length;
switch (G__34340) {
case 0:
return clojure.core.matrix.emul.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.core.matrix.emul.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.emul.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4514__auto__ = [];
var len__4499__auto___34342 = arguments.length;
var i__4500__auto___34343 = (0);
while(true){
if((i__4500__auto___34343 < len__4499__auto___34342)){
args_arr__4514__auto__.push((arguments[i__4500__auto___34343]));

var G__34344 = (i__4500__auto___34343 + (1));
i__4500__auto___34343 = G__34344;
continue;
} else {
}
break;
}

var argseq__4515__auto__ = (new cljs.core.IndexedSeq(args_arr__4514__auto__.slice((2)),(0),null));
return clojure.core.matrix.emul.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4515__auto__);

}
});

clojure.core.matrix.emul.cljs$core$IFn$_invoke$arity$0 = (function (){
return 1.0;
});

clojure.core.matrix.emul.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
});

clojure.core.matrix.emul.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.core.matrix.protocols.element_multiply.call(null,a,b);
});

clojure.core.matrix.emul.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
return cljs.core.reduce.call(null,clojure.core.matrix.protocols.element_multiply,clojure.core.matrix.protocols.element_multiply.call(null,a,b),more);
});

/** @this {Function} */
clojure.core.matrix.emul.cljs$lang$applyTo = (function (seq34337){
var G__34338 = cljs.core.first.call(null,seq34337);
var seq34337__$1 = cljs.core.next.call(null,seq34337);
var G__34339 = cljs.core.first.call(null,seq34337__$1);
var seq34337__$2 = cljs.core.next.call(null,seq34337__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34338,G__34339,seq34337__$2);
});

clojure.core.matrix.emul.cljs$lang$maxFixedArity = (2);

/**
 * Performs matrix multiplication on matrices or vectors. 
 * 
 * Equivalent to inner-product, but may be more efficient for matrices.
 */
clojure.core.matrix.mmul = (function clojure$core$matrix$mmul(var_args){
var G__34349 = arguments.length;
switch (G__34349) {
case 0:
return clojure.core.matrix.mmul.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.core.matrix.mmul.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.mmul.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4514__auto__ = [];
var len__4499__auto___34351 = arguments.length;
var i__4500__auto___34352 = (0);
while(true){
if((i__4500__auto___34352 < len__4499__auto___34351)){
args_arr__4514__auto__.push((arguments[i__4500__auto___34352]));

var G__34353 = (i__4500__auto___34352 + (1));
i__4500__auto___34352 = G__34353;
continue;
} else {
}
break;
}

var argseq__4515__auto__ = (new cljs.core.IndexedSeq(args_arr__4514__auto__.slice((2)),(0),null));
return clojure.core.matrix.mmul.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4515__auto__);

}
});

clojure.core.matrix.mmul.cljs$core$IFn$_invoke$arity$0 = (function (){
return 1.0;
});

clojure.core.matrix.mmul.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
});

clojure.core.matrix.mmul.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var or__3922__auto__ = clojure.core.matrix.protocols.matrix_multiply.call(null,a,b);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return clojure.core.matrix.protocols.inner_product.call(null,a,b);
}
});

clojure.core.matrix.mmul.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
return cljs.core.reduce.call(null,clojure.core.matrix.protocols.matrix_multiply,clojure.core.matrix.protocols.matrix_multiply.call(null,a,b),more);
});

/** @this {Function} */
clojure.core.matrix.mmul.cljs$lang$applyTo = (function (seq34346){
var G__34347 = cljs.core.first.call(null,seq34346);
var seq34346__$1 = cljs.core.next.call(null,seq34346);
var G__34348 = cljs.core.first.call(null,seq34346__$1);
var seq34346__$2 = cljs.core.next.call(null,seq34346__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34347,G__34348,seq34346__$2);
});

clojure.core.matrix.mmul.cljs$lang$maxFixedArity = (2);

/**
 * An element-wise multiply operator equivalent to `mul`.
 */
clojure.core.matrix.e_STAR_ = (function clojure$core$matrix$e_STAR_(var_args){
var G__34358 = arguments.length;
switch (G__34358) {
case 0:
return clojure.core.matrix.e_STAR_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.core.matrix.e_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.e_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4514__auto__ = [];
var len__4499__auto___34360 = arguments.length;
var i__4500__auto___34361 = (0);
while(true){
if((i__4500__auto___34361 < len__4499__auto___34360)){
args_arr__4514__auto__.push((arguments[i__4500__auto___34361]));

var G__34362 = (i__4500__auto___34361 + (1));
i__4500__auto___34361 = G__34362;
continue;
} else {
}
break;
}

var argseq__4515__auto__ = (new cljs.core.IndexedSeq(args_arr__4514__auto__.slice((2)),(0),null));
return clojure.core.matrix.e_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4515__auto__);

}
});

clojure.core.matrix.e_STAR_.cljs$core$IFn$_invoke$arity$0 = (function (){
return 1.0;
});

clojure.core.matrix.e_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
});

clojure.core.matrix.e_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.core.matrix.protocols.element_multiply.call(null,a,b);
});

clojure.core.matrix.e_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
return cljs.core.reduce.call(null,clojure.core.matrix.e_STAR_,clojure.core.matrix.e_STAR_.call(null,a,b),more);
});

/** @this {Function} */
clojure.core.matrix.e_STAR_.cljs$lang$applyTo = (function (seq34355){
var G__34356 = cljs.core.first.call(null,seq34355);
var seq34355__$1 = cljs.core.next.call(null,seq34355);
var G__34357 = cljs.core.first.call(null,seq34355__$1);
var seq34355__$2 = cljs.core.next.call(null,seq34355__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34356,G__34357,seq34355__$2);
});

clojure.core.matrix.e_STAR_.cljs$lang$maxFixedArity = (2);

/**
 * Performs element-wise division on numerical arrays.
 * 
 * Computes the reciprocal of each element when passed a single argument (similar to clojure.core//).
 */
clojure.core.matrix.div = (function clojure$core$matrix$div(var_args){
var G__34367 = arguments.length;
switch (G__34367) {
case 1:
return clojure.core.matrix.div.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.div.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4514__auto__ = [];
var len__4499__auto___34369 = arguments.length;
var i__4500__auto___34370 = (0);
while(true){
if((i__4500__auto___34370 < len__4499__auto___34369)){
args_arr__4514__auto__.push((arguments[i__4500__auto___34370]));

var G__34371 = (i__4500__auto___34370 + (1));
i__4500__auto___34370 = G__34371;
continue;
} else {
}
break;
}

var argseq__4515__auto__ = (new cljs.core.IndexedSeq(args_arr__4514__auto__.slice((2)),(0),null));
return clojure.core.matrix.div.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4515__auto__);

}
});

clojure.core.matrix.div.cljs$core$IFn$_invoke$arity$1 = (function (a){
return clojure.core.matrix.protocols.element_divide.call(null,a);
});

clojure.core.matrix.div.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.core.matrix.protocols.element_divide.call(null,a,b);
});

clojure.core.matrix.div.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
return cljs.core.reduce.call(null,clojure.core.matrix.protocols.element_divide,clojure.core.matrix.protocols.element_divide.call(null,a,b),more);
});

/** @this {Function} */
clojure.core.matrix.div.cljs$lang$applyTo = (function (seq34364){
var G__34365 = cljs.core.first.call(null,seq34364);
var seq34364__$1 = cljs.core.next.call(null,seq34364);
var G__34366 = cljs.core.first.call(null,seq34364__$1);
var seq34364__$2 = cljs.core.next.call(null,seq34364__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34365,G__34366,seq34364__$2);
});

clojure.core.matrix.div.cljs$lang$maxFixedArity = (2);

/**
 * Performs in-place element-wise matrix division for numerical arrays.
 * 
 * All arguments after the first must be broadcastable to the shape of the first array.
 * 
 * Computes the reciprocal of each element when passed a single argument (similar to clojure.core//).
 */
clojure.core.matrix.div_BANG_ = (function clojure$core$matrix$div_BANG_(var_args){
var G__34376 = arguments.length;
switch (G__34376) {
case 1:
return clojure.core.matrix.div_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.div_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4514__auto__ = [];
var len__4499__auto___34382 = arguments.length;
var i__4500__auto___34383 = (0);
while(true){
if((i__4500__auto___34383 < len__4499__auto___34382)){
args_arr__4514__auto__.push((arguments[i__4500__auto___34383]));

var G__34384 = (i__4500__auto___34383 + (1));
i__4500__auto___34383 = G__34384;
continue;
} else {
}
break;
}

var argseq__4515__auto__ = (new cljs.core.IndexedSeq(args_arr__4514__auto__.slice((2)),(0),null));
return clojure.core.matrix.div_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4515__auto__);

}
});

clojure.core.matrix.div_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (a){
clojure.core.matrix.protocols.element_divide_BANG_.call(null,a);

return a;
});

clojure.core.matrix.div_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
clojure.core.matrix.protocols.element_divide_BANG_.call(null,a,b);

return a;
});

clojure.core.matrix.div_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
clojure.core.matrix.protocols.element_divide_BANG_.call(null,a,b);

var seq__34377_34385 = cljs.core.seq.call(null,more);
var chunk__34378_34386 = null;
var count__34379_34387 = (0);
var i__34380_34388 = (0);
while(true){
if((i__34380_34388 < count__34379_34387)){
var c_34389 = cljs.core._nth.call(null,chunk__34378_34386,i__34380_34388);
clojure.core.matrix.protocols.element_divide_BANG_.call(null,a,c_34389);


var G__34390 = seq__34377_34385;
var G__34391 = chunk__34378_34386;
var G__34392 = count__34379_34387;
var G__34393 = (i__34380_34388 + (1));
seq__34377_34385 = G__34390;
chunk__34378_34386 = G__34391;
count__34379_34387 = G__34392;
i__34380_34388 = G__34393;
continue;
} else {
var temp__5457__auto___34394 = cljs.core.seq.call(null,seq__34377_34385);
if(temp__5457__auto___34394){
var seq__34377_34395__$1 = temp__5457__auto___34394;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34377_34395__$1)){
var c__4319__auto___34396 = cljs.core.chunk_first.call(null,seq__34377_34395__$1);
var G__34397 = cljs.core.chunk_rest.call(null,seq__34377_34395__$1);
var G__34398 = c__4319__auto___34396;
var G__34399 = cljs.core.count.call(null,c__4319__auto___34396);
var G__34400 = (0);
seq__34377_34385 = G__34397;
chunk__34378_34386 = G__34398;
count__34379_34387 = G__34399;
i__34380_34388 = G__34400;
continue;
} else {
var c_34401 = cljs.core.first.call(null,seq__34377_34395__$1);
clojure.core.matrix.protocols.element_divide_BANG_.call(null,a,c_34401);


var G__34402 = cljs.core.next.call(null,seq__34377_34395__$1);
var G__34403 = null;
var G__34404 = (0);
var G__34405 = (0);
seq__34377_34385 = G__34402;
chunk__34378_34386 = G__34403;
count__34379_34387 = G__34404;
i__34380_34388 = G__34405;
continue;
}
} else {
}
}
break;
}

return a;
});

/** @this {Function} */
clojure.core.matrix.div_BANG_.cljs$lang$applyTo = (function (seq34373){
var G__34374 = cljs.core.first.call(null,seq34373);
var seq34373__$1 = cljs.core.next.call(null,seq34373);
var G__34375 = cljs.core.first.call(null,seq34373__$1);
var seq34373__$2 = cljs.core.next.call(null,seq34373__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34374,G__34375,seq34373__$2);
});

clojure.core.matrix.div_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Performs in-place element-wise multiplication of numerical arrays.
 * 
 * All arguments after the first must be broadcastable to the shape of the first array.
 * 
 * Returns the first argument after mutation.
 */
clojure.core.matrix.mul_BANG_ = (function clojure$core$matrix$mul_BANG_(var_args){
var G__34410 = arguments.length;
switch (G__34410) {
case 1:
return clojure.core.matrix.mul_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.mul_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4514__auto__ = [];
var len__4499__auto___34416 = arguments.length;
var i__4500__auto___34417 = (0);
while(true){
if((i__4500__auto___34417 < len__4499__auto___34416)){
args_arr__4514__auto__.push((arguments[i__4500__auto___34417]));

var G__34418 = (i__4500__auto___34417 + (1));
i__4500__auto___34417 = G__34418;
continue;
} else {
}
break;
}

var argseq__4515__auto__ = (new cljs.core.IndexedSeq(args_arr__4514__auto__.slice((2)),(0),null));
return clojure.core.matrix.mul_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4515__auto__);

}
});

clojure.core.matrix.mul_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
});

clojure.core.matrix.mul_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
clojure.core.matrix.protocols.element_multiply_BANG_.call(null,a,b);

return a;
});

clojure.core.matrix.mul_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
clojure.core.matrix.protocols.element_multiply_BANG_.call(null,a,b);

var seq__34411_34419 = cljs.core.seq.call(null,more);
var chunk__34412_34420 = null;
var count__34413_34421 = (0);
var i__34414_34422 = (0);
while(true){
if((i__34414_34422 < count__34413_34421)){
var c_34423 = cljs.core._nth.call(null,chunk__34412_34420,i__34414_34422);
clojure.core.matrix.protocols.element_multiply_BANG_.call(null,a,c_34423);


var G__34424 = seq__34411_34419;
var G__34425 = chunk__34412_34420;
var G__34426 = count__34413_34421;
var G__34427 = (i__34414_34422 + (1));
seq__34411_34419 = G__34424;
chunk__34412_34420 = G__34425;
count__34413_34421 = G__34426;
i__34414_34422 = G__34427;
continue;
} else {
var temp__5457__auto___34428 = cljs.core.seq.call(null,seq__34411_34419);
if(temp__5457__auto___34428){
var seq__34411_34429__$1 = temp__5457__auto___34428;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34411_34429__$1)){
var c__4319__auto___34430 = cljs.core.chunk_first.call(null,seq__34411_34429__$1);
var G__34431 = cljs.core.chunk_rest.call(null,seq__34411_34429__$1);
var G__34432 = c__4319__auto___34430;
var G__34433 = cljs.core.count.call(null,c__4319__auto___34430);
var G__34434 = (0);
seq__34411_34419 = G__34431;
chunk__34412_34420 = G__34432;
count__34413_34421 = G__34433;
i__34414_34422 = G__34434;
continue;
} else {
var c_34435 = cljs.core.first.call(null,seq__34411_34429__$1);
clojure.core.matrix.protocols.element_multiply_BANG_.call(null,a,c_34435);


var G__34436 = cljs.core.next.call(null,seq__34411_34429__$1);
var G__34437 = null;
var G__34438 = (0);
var G__34439 = (0);
seq__34411_34419 = G__34436;
chunk__34412_34420 = G__34437;
count__34413_34421 = G__34438;
i__34414_34422 = G__34439;
continue;
}
} else {
}
}
break;
}

return a;
});

/** @this {Function} */
clojure.core.matrix.mul_BANG_.cljs$lang$applyTo = (function (seq34407){
var G__34408 = cljs.core.first.call(null,seq34407);
var seq34407__$1 = cljs.core.next.call(null,seq34407);
var G__34409 = cljs.core.first.call(null,seq34407__$1);
var seq34407__$2 = cljs.core.next.call(null,seq34407__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34408,G__34409,seq34407__$2);
});

clojure.core.matrix.mul_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Performs in-place element-wise multiplication of numerical arrays.
 * 
 * Returns the first argument after mutation.
 */
clojure.core.matrix.emul_BANG_ = (function clojure$core$matrix$emul_BANG_(var_args){
var G__34444 = arguments.length;
switch (G__34444) {
case 1:
return clojure.core.matrix.emul_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.emul_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4514__auto__ = [];
var len__4499__auto___34450 = arguments.length;
var i__4500__auto___34451 = (0);
while(true){
if((i__4500__auto___34451 < len__4499__auto___34450)){
args_arr__4514__auto__.push((arguments[i__4500__auto___34451]));

var G__34452 = (i__4500__auto___34451 + (1));
i__4500__auto___34451 = G__34452;
continue;
} else {
}
break;
}

var argseq__4515__auto__ = (new cljs.core.IndexedSeq(args_arr__4514__auto__.slice((2)),(0),null));
return clojure.core.matrix.emul_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4515__auto__);

}
});

clojure.core.matrix.emul_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
});

clojure.core.matrix.emul_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
clojure.core.matrix.protocols.element_multiply_BANG_.call(null,a,b);

return a;
});

clojure.core.matrix.emul_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
clojure.core.matrix.protocols.element_multiply_BANG_.call(null,a,b);

var seq__34445_34453 = cljs.core.seq.call(null,more);
var chunk__34446_34454 = null;
var count__34447_34455 = (0);
var i__34448_34456 = (0);
while(true){
if((i__34448_34456 < count__34447_34455)){
var c_34457 = cljs.core._nth.call(null,chunk__34446_34454,i__34448_34456);
clojure.core.matrix.protocols.element_multiply_BANG_.call(null,a,c_34457);


var G__34458 = seq__34445_34453;
var G__34459 = chunk__34446_34454;
var G__34460 = count__34447_34455;
var G__34461 = (i__34448_34456 + (1));
seq__34445_34453 = G__34458;
chunk__34446_34454 = G__34459;
count__34447_34455 = G__34460;
i__34448_34456 = G__34461;
continue;
} else {
var temp__5457__auto___34462 = cljs.core.seq.call(null,seq__34445_34453);
if(temp__5457__auto___34462){
var seq__34445_34463__$1 = temp__5457__auto___34462;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34445_34463__$1)){
var c__4319__auto___34464 = cljs.core.chunk_first.call(null,seq__34445_34463__$1);
var G__34465 = cljs.core.chunk_rest.call(null,seq__34445_34463__$1);
var G__34466 = c__4319__auto___34464;
var G__34467 = cljs.core.count.call(null,c__4319__auto___34464);
var G__34468 = (0);
seq__34445_34453 = G__34465;
chunk__34446_34454 = G__34466;
count__34447_34455 = G__34467;
i__34448_34456 = G__34468;
continue;
} else {
var c_34469 = cljs.core.first.call(null,seq__34445_34463__$1);
clojure.core.matrix.protocols.element_multiply_BANG_.call(null,a,c_34469);


var G__34470 = cljs.core.next.call(null,seq__34445_34463__$1);
var G__34471 = null;
var G__34472 = (0);
var G__34473 = (0);
seq__34445_34453 = G__34470;
chunk__34446_34454 = G__34471;
count__34447_34455 = G__34472;
i__34448_34456 = G__34473;
continue;
}
} else {
}
}
break;
}

return a;
});

/** @this {Function} */
clojure.core.matrix.emul_BANG_.cljs$lang$applyTo = (function (seq34441){
var G__34442 = cljs.core.first.call(null,seq34441);
var seq34441__$1 = cljs.core.next.call(null,seq34441);
var G__34443 = cljs.core.first.call(null,seq34441__$1);
var seq34441__$2 = cljs.core.next.call(null,seq34441__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34442,G__34443,seq34441__$2);
});

clojure.core.matrix.emul_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Transforms a given vector with a transformation, returning a new vector.
 * 
 * The transformation may be a 2D matrix, but other types of transformation may also be supported
 * e.g. affine transformations, unary operators.
 */
clojure.core.matrix.transform = (function clojure$core$matrix$transform(t,v){
return clojure.core.matrix.protocols.vector_transform.call(null,t,v);
});
/**
 * Transforms a given vector in place. This is a mutable equivalent to `transform`.
 * 
 * Returns the transformed vector.
 * 
 * The transformation must map an n-dimensional vector to another n-dimensional vector, i.e.
 * if it is a 2D matrix then it must have shape [n x n].
 */
clojure.core.matrix.transform_BANG_ = (function clojure$core$matrix$transform_BANG_(t,v){
clojure.core.matrix.protocols.vector_transform_BANG_.call(null,t,v);

return v;
});
/**
 * Performs element-wise addition on one or more numerical arrays.
 * 
 * Will broadcast to the smallest shape compatible will addition of all input arrays.
 */
clojure.core.matrix.add = (function clojure$core$matrix$add(var_args){
var G__34478 = arguments.length;
switch (G__34478) {
case 0:
return clojure.core.matrix.add.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.core.matrix.add.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.add.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4514__auto__ = [];
var len__4499__auto___34480 = arguments.length;
var i__4500__auto___34481 = (0);
while(true){
if((i__4500__auto___34481 < len__4499__auto___34480)){
args_arr__4514__auto__.push((arguments[i__4500__auto___34481]));

var G__34482 = (i__4500__auto___34481 + (1));
i__4500__auto___34481 = G__34482;
continue;
} else {
}
break;
}

var argseq__4515__auto__ = (new cljs.core.IndexedSeq(args_arr__4514__auto__.slice((2)),(0),null));
return clojure.core.matrix.add.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4515__auto__);

}
});

clojure.core.matrix.add.cljs$core$IFn$_invoke$arity$0 = (function (){
return 0.0;
});

clojure.core.matrix.add.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
});

clojure.core.matrix.add.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.core.matrix.protocols.matrix_add.call(null,a,b);
});

clojure.core.matrix.add.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
return cljs.core.reduce.call(null,clojure.core.matrix.protocols.matrix_add,clojure.core.matrix.protocols.matrix_add.call(null,a,b),more);
});

/** @this {Function} */
clojure.core.matrix.add.cljs$lang$applyTo = (function (seq34475){
var G__34476 = cljs.core.first.call(null,seq34475);
var seq34475__$1 = cljs.core.next.call(null,seq34475);
var G__34477 = cljs.core.first.call(null,seq34475__$1);
var seq34475__$2 = cljs.core.next.call(null,seq34475__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34476,G__34477,seq34475__$2);
});

clojure.core.matrix.add.cljs$lang$maxFixedArity = (2);

/**
 * Performs element-wise mutable addition on one or more numerical arrays. This is the mutable
 * equivalent of `add`.
 * 
 * All arguments after the first must be broadcastable to the shape of the first array.
 * 
 * When adding many arrays, use of `add!` with a mutable array as the first argument is
 * usually faster than repreated use of `add` because it can avoid unnecessary copying.
 * 
 * Returns the first array after it has been mutated.
 */
clojure.core.matrix.add_BANG_ = (function clojure$core$matrix$add_BANG_(var_args){
var G__34487 = arguments.length;
switch (G__34487) {
case 1:
return clojure.core.matrix.add_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.add_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4514__auto__ = [];
var len__4499__auto___34493 = arguments.length;
var i__4500__auto___34494 = (0);
while(true){
if((i__4500__auto___34494 < len__4499__auto___34493)){
args_arr__4514__auto__.push((arguments[i__4500__auto___34494]));

var G__34495 = (i__4500__auto___34494 + (1));
i__4500__auto___34494 = G__34495;
continue;
} else {
}
break;
}

var argseq__4515__auto__ = (new cljs.core.IndexedSeq(args_arr__4514__auto__.slice((2)),(0),null));
return clojure.core.matrix.add_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4515__auto__);

}
});

clojure.core.matrix.add_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
});

clojure.core.matrix.add_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
clojure.core.matrix.protocols.matrix_add_BANG_.call(null,a,b);

return a;
});

clojure.core.matrix.add_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
clojure.core.matrix.protocols.matrix_add_BANG_.call(null,a,b);

var seq__34488_34496 = cljs.core.seq.call(null,more);
var chunk__34489_34497 = null;
var count__34490_34498 = (0);
var i__34491_34499 = (0);
while(true){
if((i__34491_34499 < count__34490_34498)){
var m_34500 = cljs.core._nth.call(null,chunk__34489_34497,i__34491_34499);
clojure.core.matrix.protocols.matrix_add_BANG_.call(null,a,m_34500);


var G__34501 = seq__34488_34496;
var G__34502 = chunk__34489_34497;
var G__34503 = count__34490_34498;
var G__34504 = (i__34491_34499 + (1));
seq__34488_34496 = G__34501;
chunk__34489_34497 = G__34502;
count__34490_34498 = G__34503;
i__34491_34499 = G__34504;
continue;
} else {
var temp__5457__auto___34505 = cljs.core.seq.call(null,seq__34488_34496);
if(temp__5457__auto___34505){
var seq__34488_34506__$1 = temp__5457__auto___34505;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34488_34506__$1)){
var c__4319__auto___34507 = cljs.core.chunk_first.call(null,seq__34488_34506__$1);
var G__34508 = cljs.core.chunk_rest.call(null,seq__34488_34506__$1);
var G__34509 = c__4319__auto___34507;
var G__34510 = cljs.core.count.call(null,c__4319__auto___34507);
var G__34511 = (0);
seq__34488_34496 = G__34508;
chunk__34489_34497 = G__34509;
count__34490_34498 = G__34510;
i__34491_34499 = G__34511;
continue;
} else {
var m_34512 = cljs.core.first.call(null,seq__34488_34506__$1);
clojure.core.matrix.protocols.matrix_add_BANG_.call(null,a,m_34512);


var G__34513 = cljs.core.next.call(null,seq__34488_34506__$1);
var G__34514 = null;
var G__34515 = (0);
var G__34516 = (0);
seq__34488_34496 = G__34513;
chunk__34489_34497 = G__34514;
count__34490_34498 = G__34515;
i__34491_34499 = G__34516;
continue;
}
} else {
}
}
break;
}

return a;
});

/** @this {Function} */
clojure.core.matrix.add_BANG_.cljs$lang$applyTo = (function (seq34484){
var G__34485 = cljs.core.first.call(null,seq34484);
var seq34484__$1 = cljs.core.next.call(null,seq34484);
var G__34486 = cljs.core.first.call(null,seq34484__$1);
var seq34484__$2 = cljs.core.next.call(null,seq34484__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34485,G__34486,seq34484__$2);
});

clojure.core.matrix.add_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Adds the element-wise product of two numerical arrays to the first array.
 * 
 * Arrays should be the same shape, some implementations may support broadcasting.
 */
clojure.core.matrix.add_product = (function clojure$core$matrix$add_product(m,a,b){
return clojure.core.matrix.protocols.add_product.call(null,m,a,b);
});
/**
 * Adds the product of two numerical arrays to the first array. Returns the mutated array.
 * 
 * Arrays should be the same shape, some implementations may support broadcasting.
 */
clojure.core.matrix.add_product_BANG_ = (function clojure$core$matrix$add_product_BANG_(m,a,b){
clojure.core.matrix.protocols.add_product_BANG_.call(null,m,a,b);

return m;
});
/**
 * Adds a numerical array scaled by a given factor to the first array. 
 * 
 * Factor should be a scalar numerical value.
 */
clojure.core.matrix.add_scaled = (function clojure$core$matrix$add_scaled(m,a,factor){
return clojure.core.matrix.protocols.add_scaled.call(null,m,a,factor);
});
/**
 * Scales array m1 by factor a, then adds an array m2 scaled by factor b. May optionally add a constant.
 * Broadly equivalent to (add (mul m1 a) (mul m2 b) constant)
 * 
 * Returns a new array.
 */
clojure.core.matrix.scale_add = (function clojure$core$matrix$scale_add(var_args){
var G__34518 = arguments.length;
switch (G__34518) {
case 4:
return clojure.core.matrix.scale_add.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return clojure.core.matrix.scale_add.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.core.matrix.scale_add.cljs$core$IFn$_invoke$arity$4 = (function (m1,a,m2,b){
return clojure.core.matrix.protocols.scale_add.call(null,m1,a,m2,b,0.0);
});

clojure.core.matrix.scale_add.cljs$core$IFn$_invoke$arity$5 = (function (m1,a,m2,b,constant){
return clojure.core.matrix.protocols.scale_add.call(null,m1,a,m2,b,constant);
});

clojure.core.matrix.scale_add.cljs$lang$maxFixedArity = 5;

/**
 * Scales array m1 by factor a, then adds an array m2 scaled by factor b. May optionally add a constant.
 * Broadly equivalent to (add! (mul! m1 a) (mul m2 b) constant)
 * 
 * Returns the mutated array `m1`. The array `m2` will not be changed.
 */
clojure.core.matrix.scale_add_BANG_ = (function clojure$core$matrix$scale_add_BANG_(var_args){
var G__34521 = arguments.length;
switch (G__34521) {
case 4:
return clojure.core.matrix.scale_add_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return clojure.core.matrix.scale_add_BANG_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.core.matrix.scale_add_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (m1,a,m2,b){
return clojure.core.matrix.scale_add_BANG_.call(null,m1,a,m2,b,0.0);
});

clojure.core.matrix.scale_add_BANG_.cljs$core$IFn$_invoke$arity$5 = (function (m1,a,m2,b,constant){
clojure.core.matrix.protocols.scale_add_BANG_.call(null,m1,a,m2,b,constant);

return m1;
});

clojure.core.matrix.scale_add_BANG_.cljs$lang$maxFixedArity = 5;

/**
 * Performs linear interpolation between two arrays. If factor is 0.0, result will be equal to the first vector.
 * If factor is 1.0, result will be equal to the second vector. Returns a new array.
 */
clojure.core.matrix.lerp = (function clojure$core$matrix$lerp(a,b,factor){
return clojure.core.matrix.protocols.lerp.call(null,a,b,factor);
});
/**
 * Performs linear interpolation between two arrays. If factor is 0.0, result will be equal to the first vector.
 * If factor is 1.0, result will be equal to the second vector. Returns a the mutated first array.
 */
clojure.core.matrix.lerp_BANG_ = (function clojure$core$matrix$lerp_BANG_(a,b,factor){
clojure.core.matrix.protocols.lerp_BANG_.call(null,a,b,factor);

return a;
});
/**
 * Adds a numerical array scaled by a given factor to the first array. Returns the mutated array.
 */
clojure.core.matrix.add_scaled_BANG_ = (function clojure$core$matrix$add_scaled_BANG_(m,a,factor){
clojure.core.matrix.protocols.add_scaled_BANG_.call(null,m,a,factor);

return m;
});
/**
 * Adds the product of two numerical arrays scaled by a given factor to the first array.
 * 
 * This is equivalent to (add m (mul a b factor)) but may be optimised by the underlying implementation.
 */
clojure.core.matrix.add_scaled_product = (function clojure$core$matrix$add_scaled_product(m,a,b,factor){
return clojure.core.matrix.protocols.add_scaled_product.call(null,m,a,b,factor);
});
/**
 * Adds the product of two numerical arrays scaled by a given factor to the first array.
 * Returns the mutated array.
 * This is equivalent to (add! m (mul a b factor)) but may be optimised by the underlying implementation.
 */
clojure.core.matrix.add_scaled_product_BANG_ = (function clojure$core$matrix$add_scaled_product_BANG_(m,a,b,factor){
clojure.core.matrix.protocols.add_scaled_product_BANG_.call(null,m,a,b,factor);

return m;
});
/**
 * Adds the inner product of two numerical arrays to the first array.
 * Returns the mutated array.
 * This is equivalent to (add! m (inner-product a b)) but may be optimised by the underlying implementation.
 */
clojure.core.matrix.add_inner_product_BANG_ = (function clojure$core$matrix$add_inner_product_BANG_(var_args){
var G__34524 = arguments.length;
switch (G__34524) {
case 3:
return clojure.core.matrix.add_inner_product_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.core.matrix.add_inner_product_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.core.matrix.add_inner_product_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (m,a,b){
clojure.core.matrix.protocols.add_inner_product_BANG_.call(null,m,a,b);

return m;
});

clojure.core.matrix.add_inner_product_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (m,a,b,factor){
clojure.core.matrix.protocols.add_inner_product_BANG_.call(null,m,a,b,factor);

return m;
});

clojure.core.matrix.add_inner_product_BANG_.cljs$lang$maxFixedArity = 4;

/**
 * Adds the inner product of two numerical arrays to the first array.
 * 
 * Returns the mutated array.
 * 
 * This is equivalent to (add! m (outer-product a b)) but may be optimised by the underlying implementation.
 */
clojure.core.matrix.add_outer_product_BANG_ = (function clojure$core$matrix$add_outer_product_BANG_(var_args){
var G__34527 = arguments.length;
switch (G__34527) {
case 3:
return clojure.core.matrix.add_outer_product_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.core.matrix.add_outer_product_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.core.matrix.add_outer_product_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (m,a,b){
clojure.core.matrix.protocols.add_outer_product_BANG_.call(null,m,a,b);

return m;
});

clojure.core.matrix.add_outer_product_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (m,a,b,factor){
clojure.core.matrix.protocols.add_outer_product_BANG_.call(null,m,a,b,factor);

return m;
});

clojure.core.matrix.add_outer_product_BANG_.cljs$lang$maxFixedArity = 4;

/**
 * Sets an array equal to the inner product of two numerical arrays.
 * Returns the mutated first array.
 * This is equivalent to (assign! m (inner-product a b)) but may be optimised by the underlying implementation.
 */
clojure.core.matrix.set_inner_product_BANG_ = (function clojure$core$matrix$set_inner_product_BANG_(var_args){
var G__34530 = arguments.length;
switch (G__34530) {
case 3:
return clojure.core.matrix.set_inner_product_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.core.matrix.set_inner_product_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.core.matrix.set_inner_product_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (m,a,b){
clojure.core.matrix.protocols.set_inner_product_BANG_.call(null,m,a,b);

return m;
});

clojure.core.matrix.set_inner_product_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (m,a,b,factor){
clojure.core.matrix.protocols.set_inner_product_BANG_.call(null,m,a,b,factor);

return m;
});

clojure.core.matrix.set_inner_product_BANG_.cljs$lang$maxFixedArity = 4;

/**
 * Performs element-wise subtraction on one or more numerical arrays.
 * 
 * For a single argument, returns the negation.
 * 
 * Returns a new array.
 */
clojure.core.matrix.sub = (function clojure$core$matrix$sub(var_args){
var G__34536 = arguments.length;
switch (G__34536) {
case 1:
return clojure.core.matrix.sub.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.sub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4514__auto__ = [];
var len__4499__auto___34538 = arguments.length;
var i__4500__auto___34539 = (0);
while(true){
if((i__4500__auto___34539 < len__4499__auto___34538)){
args_arr__4514__auto__.push((arguments[i__4500__auto___34539]));

var G__34540 = (i__4500__auto___34539 + (1));
i__4500__auto___34539 = G__34540;
continue;
} else {
}
break;
}

var argseq__4515__auto__ = (new cljs.core.IndexedSeq(args_arr__4514__auto__.slice((2)),(0),null));
return clojure.core.matrix.sub.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4515__auto__);

}
});

clojure.core.matrix.sub.cljs$core$IFn$_invoke$arity$1 = (function (a){
return clojure.core.matrix.protocols.negate.call(null,a);
});

clojure.core.matrix.sub.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.core.matrix.protocols.matrix_sub.call(null,a,b);
});

clojure.core.matrix.sub.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
return cljs.core.reduce.call(null,clojure.core.matrix.protocols.matrix_sub,clojure.core.matrix.protocols.matrix_sub.call(null,a,b),more);
});

/** @this {Function} */
clojure.core.matrix.sub.cljs$lang$applyTo = (function (seq34533){
var G__34534 = cljs.core.first.call(null,seq34533);
var seq34533__$1 = cljs.core.next.call(null,seq34533);
var G__34535 = cljs.core.first.call(null,seq34533__$1);
var seq34533__$2 = cljs.core.next.call(null,seq34533__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34534,G__34535,seq34533__$2);
});

clojure.core.matrix.sub.cljs$lang$maxFixedArity = (2);

/**
 * Performs element-wise mutable subtraction on one or more numerical arrays.
 * 
 * NOTE: For a single argument, returns the argument unchanged: use negate! instead if you wish to negate a mutable
 * array in place. This is intentional, so that you can do (apply sub! m list-of-arrays) and get the expected
 * result if the list of arrays is empty.
 * 
 * Returns the first array, after it has been mutated.
 */
clojure.core.matrix.sub_BANG_ = (function clojure$core$matrix$sub_BANG_(var_args){
var G__34545 = arguments.length;
switch (G__34545) {
case 1:
return clojure.core.matrix.sub_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.sub_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4514__auto__ = [];
var len__4499__auto___34551 = arguments.length;
var i__4500__auto___34552 = (0);
while(true){
if((i__4500__auto___34552 < len__4499__auto___34551)){
args_arr__4514__auto__.push((arguments[i__4500__auto___34552]));

var G__34553 = (i__4500__auto___34552 + (1));
i__4500__auto___34552 = G__34553;
continue;
} else {
}
break;
}

var argseq__4515__auto__ = (new cljs.core.IndexedSeq(args_arr__4514__auto__.slice((2)),(0),null));
return clojure.core.matrix.sub_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4515__auto__);

}
});

clojure.core.matrix.sub_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
});

clojure.core.matrix.sub_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
clojure.core.matrix.protocols.matrix_sub_BANG_.call(null,a,b);

return a;
});

clojure.core.matrix.sub_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
clojure.core.matrix.protocols.matrix_sub_BANG_.call(null,a,b);

var seq__34546_34554 = cljs.core.seq.call(null,more);
var chunk__34547_34555 = null;
var count__34548_34556 = (0);
var i__34549_34557 = (0);
while(true){
if((i__34549_34557 < count__34548_34556)){
var m_34558 = cljs.core._nth.call(null,chunk__34547_34555,i__34549_34557);
clojure.core.matrix.protocols.matrix_sub_BANG_.call(null,a,m_34558);


var G__34559 = seq__34546_34554;
var G__34560 = chunk__34547_34555;
var G__34561 = count__34548_34556;
var G__34562 = (i__34549_34557 + (1));
seq__34546_34554 = G__34559;
chunk__34547_34555 = G__34560;
count__34548_34556 = G__34561;
i__34549_34557 = G__34562;
continue;
} else {
var temp__5457__auto___34563 = cljs.core.seq.call(null,seq__34546_34554);
if(temp__5457__auto___34563){
var seq__34546_34564__$1 = temp__5457__auto___34563;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34546_34564__$1)){
var c__4319__auto___34565 = cljs.core.chunk_first.call(null,seq__34546_34564__$1);
var G__34566 = cljs.core.chunk_rest.call(null,seq__34546_34564__$1);
var G__34567 = c__4319__auto___34565;
var G__34568 = cljs.core.count.call(null,c__4319__auto___34565);
var G__34569 = (0);
seq__34546_34554 = G__34566;
chunk__34547_34555 = G__34567;
count__34548_34556 = G__34568;
i__34549_34557 = G__34569;
continue;
} else {
var m_34570 = cljs.core.first.call(null,seq__34546_34564__$1);
clojure.core.matrix.protocols.matrix_sub_BANG_.call(null,a,m_34570);


var G__34571 = cljs.core.next.call(null,seq__34546_34564__$1);
var G__34572 = null;
var G__34573 = (0);
var G__34574 = (0);
seq__34546_34554 = G__34571;
chunk__34547_34555 = G__34572;
count__34548_34556 = G__34573;
i__34549_34557 = G__34574;
continue;
}
} else {
}
}
break;
}

return a;
});

/** @this {Function} */
clojure.core.matrix.sub_BANG_.cljs$lang$applyTo = (function (seq34542){
var G__34543 = cljs.core.first.call(null,seq34542);
var seq34542__$1 = cljs.core.next.call(null,seq34542);
var G__34544 = cljs.core.first.call(null,seq34542__$1);
var seq34542__$2 = cljs.core.next.call(null,seq34542__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34543,G__34544,seq34542__$2);
});

clojure.core.matrix.sub_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Scales a array by one or more scalar factors. The default implementation supports numerical arrays and
 * numbers as scalar values, however matrix implementations may extend this to support other scalar types.
 * 
 * Returns a new scaled matrix.
 */
clojure.core.matrix.scale = (function clojure$core$matrix$scale(var_args){
var G__34579 = arguments.length;
switch (G__34579) {
case 2:
return clojure.core.matrix.scale.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4514__auto__ = [];
var len__4499__auto___34581 = arguments.length;
var i__4500__auto___34582 = (0);
while(true){
if((i__4500__auto___34582 < len__4499__auto___34581)){
args_arr__4514__auto__.push((arguments[i__4500__auto___34582]));

var G__34583 = (i__4500__auto___34582 + (1));
i__4500__auto___34582 = G__34583;
continue;
} else {
}
break;
}

var argseq__4515__auto__ = (new cljs.core.IndexedSeq(args_arr__4514__auto__.slice((2)),(0),null));
return clojure.core.matrix.scale.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4515__auto__);

}
});

clojure.core.matrix.scale.cljs$core$IFn$_invoke$arity$2 = (function (m,factor){
return clojure.core.matrix.protocols.scale.call(null,m,factor);
});

clojure.core.matrix.scale.cljs$core$IFn$_invoke$arity$variadic = (function (m,factor,more_factors){
return clojure.core.matrix.protocols.scale.call(null,m,clojure.core.matrix.protocols.element_multiply.call(null,factor,cljs.core.reduce.call(null,clojure.core.matrix.protocols.element_multiply,more_factors)));
});

/** @this {Function} */
clojure.core.matrix.scale.cljs$lang$applyTo = (function (seq34576){
var G__34577 = cljs.core.first.call(null,seq34576);
var seq34576__$1 = cljs.core.next.call(null,seq34576);
var G__34578 = cljs.core.first.call(null,seq34576__$1);
var seq34576__$2 = cljs.core.next.call(null,seq34576__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34577,G__34578,seq34576__$2);
});

clojure.core.matrix.scale.cljs$lang$maxFixedArity = (2);

/**
 * Scales a numerical array by one or more scalar factors (in place). The default implementation supports
 * numerical arrays and numbers as scalar values, however matrix implementations may extend this to
 * support other scalar types (e.g. complex numbers).
 * 
 * Returns the array after it has been mutated.
 */
clojure.core.matrix.scale_BANG_ = (function clojure$core$matrix$scale_BANG_(var_args){
var G__34588 = arguments.length;
switch (G__34588) {
case 2:
return clojure.core.matrix.scale_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4514__auto__ = [];
var len__4499__auto___34590 = arguments.length;
var i__4500__auto___34591 = (0);
while(true){
if((i__4500__auto___34591 < len__4499__auto___34590)){
args_arr__4514__auto__.push((arguments[i__4500__auto___34591]));

var G__34592 = (i__4500__auto___34591 + (1));
i__4500__auto___34591 = G__34592;
continue;
} else {
}
break;
}

var argseq__4515__auto__ = (new cljs.core.IndexedSeq(args_arr__4514__auto__.slice((2)),(0),null));
return clojure.core.matrix.scale_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4515__auto__);

}
});

clojure.core.matrix.scale_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (m,factor){
clojure.core.matrix.protocols.scale_BANG_.call(null,m,factor);

return m;
});

clojure.core.matrix.scale_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (m,factor,more_factors){
clojure.core.matrix.protocols.scale_BANG_.call(null,m,clojure.core.matrix.protocols.element_multiply.call(null,factor,cljs.core.reduce.call(null,clojure.core.matrix.protocols.element_multiply,more_factors)));

return m;
});

/** @this {Function} */
clojure.core.matrix.scale_BANG_.cljs$lang$applyTo = (function (seq34585){
var G__34586 = cljs.core.first.call(null,seq34585);
var seq34585__$1 = cljs.core.next.call(null,seq34585);
var G__34587 = cljs.core.first.call(null,seq34585__$1);
var seq34585__$2 = cljs.core.next.call(null,seq34585__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34586,G__34587,seq34585__$2);
});

clojure.core.matrix.scale_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Squares every element of a numerical array. Returns a new array.
 */
clojure.core.matrix.square = (function clojure$core$matrix$square(m){
return clojure.core.matrix.protocols.square.call(null,m);
});
/**
 * Normalises a numerical vector (scales to unit length, i.e. the L2 norm). 
 * 
 * Returns a new normalised vector.
 * 
 * The result is undefined if the initial length of the vector is zero (it is possible the
 * implementation may return NaNs or zeros). If this is a concern, it is recommended to check
 * the length of the vector first in order to handle this as a special case.
 */
clojure.core.matrix.normalise = (function clojure$core$matrix$normalise(v){
return clojure.core.matrix.protocols.normalise.call(null,v);
});
/**
 * Like 'normalise', but mutates a numerical vector in-place (scales to unit length).
 * Returns the modified vector.
 */
clojure.core.matrix.normalise_BANG_ = (function clojure$core$matrix$normalise_BANG_(v){
clojure.core.matrix.protocols.normalise_BANG_.call(null,v);

return v;
});
/**
 * Efficiently computes the scalar dot product (1Dx1D inner product) of two numerical vectors. Prefer this API
 * function if you are performing a dot product on 1D vectors and require a scalar result.
 * 
 * If either argument is not a vector, will compute and return a higher dimensional inner-product.
 */
clojure.core.matrix.dot = (function clojure$core$matrix$dot(a,b){
var or__3922__auto__ = clojure.core.matrix.protocols.vector_dot.call(null,a,b);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var v = clojure.core.matrix.protocols.inner_product.call(null,a,b);
if(typeof v === 'number'){
return v;
} else {
if(((0) === cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,v)))){
return clojure.core.matrix.protocols.get_0d.call(null,v);
} else {
return v;

}
}
}
});
/**
 * Computes the inner product of numerical arrays.
 * 
 * For matrix/matrix and matrix/vector arguments, this is equivalent to matrix multiplication.
 * 
 * The inner product of two arrays with indexed dimensions {..i j} and {j k..} has dimensions {..i k..}. The inner-product of two vectors will be scalar.
 */
clojure.core.matrix.inner_product = (function clojure$core$matrix$inner_product(var_args){
var G__34597 = arguments.length;
switch (G__34597) {
case 0:
return clojure.core.matrix.inner_product.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.core.matrix.inner_product.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.inner_product.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4514__auto__ = [];
var len__4499__auto___34599 = arguments.length;
var i__4500__auto___34600 = (0);
while(true){
if((i__4500__auto___34600 < len__4499__auto___34599)){
args_arr__4514__auto__.push((arguments[i__4500__auto___34600]));

var G__34601 = (i__4500__auto___34600 + (1));
i__4500__auto___34600 = G__34601;
continue;
} else {
}
break;
}

var argseq__4515__auto__ = (new cljs.core.IndexedSeq(args_arr__4514__auto__.slice((2)),(0),null));
return clojure.core.matrix.inner_product.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4515__auto__);

}
});

clojure.core.matrix.inner_product.cljs$core$IFn$_invoke$arity$0 = (function (){
return 1.0;
});

clojure.core.matrix.inner_product.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
});

clojure.core.matrix.inner_product.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.core.matrix.protocols.inner_product.call(null,a,b);
});

clojure.core.matrix.inner_product.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
return cljs.core.reduce.call(null,clojure.core.matrix.protocols.inner_product,clojure.core.matrix.protocols.inner_product.call(null,a,b),more);
});

/** @this {Function} */
clojure.core.matrix.inner_product.cljs$lang$applyTo = (function (seq34594){
var G__34595 = cljs.core.first.call(null,seq34594);
var seq34594__$1 = cljs.core.next.call(null,seq34594);
var G__34596 = cljs.core.first.call(null,seq34594__$1);
var seq34594__$2 = cljs.core.next.call(null,seq34594__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34595,G__34596,seq34594__$2);
});

clojure.core.matrix.inner_product.cljs$lang$maxFixedArity = (2);

/**
 * Computes the outer product of numerical arrays.
 * 
 * For two vectors of size m and n, the result will be a m x n matrix.
 * 
 * In general, the outer product fior higher diemnsional arrays is defined as the 
 * tensor product (see https://en.wikipedia.org/wiki/Tensor_product)
 * i.e. The outer product of two arrays with indexed dimensions {i..j} and {k..l} 
 * has dimensions {i..j k..l}. The dimensionality of the result will be the
 * sum of the dimensionalities of the two arguments.
 */
clojure.core.matrix.outer_product = (function clojure$core$matrix$outer_product(var_args){
var G__34606 = arguments.length;
switch (G__34606) {
case 0:
return clojure.core.matrix.outer_product.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.core.matrix.outer_product.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.outer_product.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4514__auto__ = [];
var len__4499__auto___34608 = arguments.length;
var i__4500__auto___34609 = (0);
while(true){
if((i__4500__auto___34609 < len__4499__auto___34608)){
args_arr__4514__auto__.push((arguments[i__4500__auto___34609]));

var G__34610 = (i__4500__auto___34609 + (1));
i__4500__auto___34609 = G__34610;
continue;
} else {
}
break;
}

var argseq__4515__auto__ = (new cljs.core.IndexedSeq(args_arr__4514__auto__.slice((2)),(0),null));
return clojure.core.matrix.outer_product.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4515__auto__);

}
});

clojure.core.matrix.outer_product.cljs$core$IFn$_invoke$arity$0 = (function (){
return 1.0;
});

clojure.core.matrix.outer_product.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
});

clojure.core.matrix.outer_product.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var or__3922__auto__ = clojure.core.matrix.protocols.outer_product.call(null,a,b);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return clojure.core.matrix.protocols.outer_product.call(null,clojure.core.matrix.protocols.convert_to_nested_vectors.call(null,a),b);
}
});

clojure.core.matrix.outer_product.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
return cljs.core.reduce.call(null,clojure.core.matrix.outer_product,clojure.core.matrix.outer_product.call(null,a,b),more);
});

/** @this {Function} */
clojure.core.matrix.outer_product.cljs$lang$applyTo = (function (seq34603){
var G__34604 = cljs.core.first.call(null,seq34603);
var seq34603__$1 = cljs.core.next.call(null,seq34603);
var G__34605 = cljs.core.first.call(null,seq34603__$1);
var seq34603__$2 = cljs.core.next.call(null,seq34603__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34604,G__34605,seq34603__$2);
});

clojure.core.matrix.outer_product.cljs$lang$maxFixedArity = (2);

/**
 * Computes the 3D cross-product of two numerical vectors.
 * 
 * Behavior on other types is undefined.
 */
clojure.core.matrix.cross = (function clojure$core$matrix$cross(a,b){
return clojure.core.matrix.protocols.cross_product.call(null,a,b);
});
/**
 * Computes the cross-product of two numerical 3D vectors a and b, storing the result in the first vector.
 * 
 * Returns the (mutated) first vector.
 */
clojure.core.matrix.cross_BANG_ = (function clojure$core$matrix$cross_BANG_(var_args){
var G__34612 = arguments.length;
switch (G__34612) {
case 2:
return clojure.core.matrix.cross_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.cross_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.core.matrix.cross_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
clojure.core.matrix.protocols.cross_product_BANG_.call(null,a,b);

return a;
});

clojure.core.matrix.cross_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (dest,a,b){
clojure.core.matrix.protocols.assign_BANG_.call(null,dest,a);

return clojure.core.matrix.protocols.cross_product_BANG_.call(null,dest,b);
});

clojure.core.matrix.cross_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Calculates the euclidean distance between two numerical vectors, as a single numerical scalar value.
 * 
 * This is equivalent to (norm 2 (sub a b)) but may be optimised by the underlying implementation.
 */
clojure.core.matrix.distance = (function clojure$core$matrix$distance(a,b){
return clojure.core.matrix.protocols.distance.call(null,a,b);
});
/**
 * Calculates the determinant of a 2D square numerical matrix, as a single numerical scalar value.
 */
clojure.core.matrix.det = (function clojure$core$matrix$det(a){
var or__3922__auto__ = clojure.core.matrix.protocols.determinant.call(null,a);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return clojure.core.matrix.protocols.determinant.call(null,clojure.core.matrix.protocols.coerce_param.call(null,clojure.core.matrix.implementations._STAR_numeric_implementation_STAR_,a));
}
});
/**
 * Calculates the inverse of a square 2D numerical matrix.
 * 
 * Returns nil if the matrix is singular. 
 * 
 * Throws an error is the argument is not a sqaure 2D matrix.
 */
clojure.core.matrix.inverse = (function clojure$core$matrix$inverse(m){
return clojure.core.matrix.protocols.inverse.call(null,m);
});
/**
 * Calculates the negation of a numerical array. Generally equivalent to (scale m -1.0)
 */
clojure.core.matrix.negate = (function clojure$core$matrix$negate(m){
return clojure.core.matrix.protocols.negate.call(null,m);
});
/**
 * Calculates the negation of a numerical array in place. Generally equivalent to (scale! m -1.0)
 */
clojure.core.matrix.negate_BANG_ = (function clojure$core$matrix$negate_BANG_(m){
clojure.core.matrix.protocols.scale_BANG_.call(null,m,-1.0);

return m;
});
/**
 * Calculates the trace of a 2D numerical matrix (sum of elements on main diagonal).
 * 
 * The matrix need not be square.
 */
clojure.core.matrix.trace = (function clojure$core$matrix$trace(a){
return clojure.core.matrix.protocols.trace.call(null,a);
});
/**
 * Calculates the magnitude over all elements in an array.
 * 
 * This is the 2-norm: equivalent to the Frobenius norm on matrices, or the Euclidean length on vectors.
 */
clojure.core.matrix.magnitude = (function clojure$core$matrix$magnitude(m){
return clojure.core.matrix.protocols.length.call(null,m);
});
/**
 * Calculates the squared magnitude over all elements in an array.
 * 
 * This may be more efficient that computing the magnitude in some implementations.
 */
clojure.core.matrix.magnitude_squared = (function clojure$core$matrix$magnitude_squared(m){
return clojure.core.matrix.protocols.length_squared.call(null,m);
});
/**
 * DEPRECATED: please use magnitude instead.
 */
clojure.core.matrix.length = (function clojure$core$matrix$length(m){
return clojure.core.matrix.protocols.length.call(null,m);
});
/**
 * DEPRECATED: please use magnitude-squared instead.
 */
clojure.core.matrix.length_squared = (function clojure$core$matrix$length_squared(m){
return clojure.core.matrix.protocols.length_squared.call(null,m);
});
/**
 * Raises every element of a numerical matrix by the given exponent.
 * 
 * Note that behaviour for large exponents may depend on the underlying implementation:
 * for example double-based matrices may overflow to Double/POSITIVE_INFINITY.
 */
clojure.core.matrix.pow = (function clojure$core$matrix$pow(var_args){
var G__34618 = arguments.length;
switch (G__34618) {
case 1:
return clojure.core.matrix.pow.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.pow.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4514__auto__ = [];
var len__4499__auto___34620 = arguments.length;
var i__4500__auto___34621 = (0);
while(true){
if((i__4500__auto___34621 < len__4499__auto___34620)){
args_arr__4514__auto__.push((arguments[i__4500__auto___34621]));

var G__34622 = (i__4500__auto___34621 + (1));
i__4500__auto___34621 = G__34622;
continue;
} else {
}
break;
}

var argseq__4515__auto__ = (new cljs.core.IndexedSeq(args_arr__4514__auto__.slice((2)),(0),null));
return clojure.core.matrix.pow.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4515__auto__);

}
});

clojure.core.matrix.pow.cljs$core$IFn$_invoke$arity$1 = (function (m){
return m;
});

clojure.core.matrix.pow.cljs$core$IFn$_invoke$arity$2 = (function (m,exponent){
return clojure.core.matrix.protocols.element_pow.call(null,m,exponent);
});

clojure.core.matrix.pow.cljs$core$IFn$_invoke$arity$variadic = (function (m,exponent,more){
return cljs.core.reduce.call(null,(function (m__$1,x){
return clojure.core.matrix.protocols.element_pow.call(null,m__$1,x);
}),clojure.core.matrix.protocols.element_pow.call(null,m,exponent),more);
});

/** @this {Function} */
clojure.core.matrix.pow.cljs$lang$applyTo = (function (seq34615){
var G__34616 = cljs.core.first.call(null,seq34615);
var seq34615__$1 = cljs.core.next.call(null,seq34615);
var G__34617 = cljs.core.first.call(null,seq34615__$1);
var seq34615__$2 = cljs.core.next.call(null,seq34615__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34616,G__34617,seq34615__$2);
});

clojure.core.matrix.pow.cljs$lang$maxFixedArity = (2);

/**
 * Mutable exponent function, see 'pow'
 */
clojure.core.matrix.pow_BANG_ = (function clojure$core$matrix$pow_BANG_(m,a){
clojure.core.matrix.protocols.assign_BANG_.call(null,m,clojure.core.matrix.pow.call(null,m,a));

return m;
});
/**
 * Computes the abs function on all elements of an array, using double precision values. Returns a new array.
 */
clojure.core.matrix.abs = (function clojure$core$matrix$abs(m){
return clojure.core.matrix.protocols.abs.call(null,m);
});

/**
 * Computes the abs function on all elements of an array, using double precision values. Mutates the array in-place.
 */
clojure.core.matrix.abs_BANG_ = (function clojure$core$matrix$abs_BANG_(m){
clojure.core.matrix.protocols.abs_BANG_.call(null,m);

return m;
});

/**
 * Computes the acos function on all elements of an array, using double precision values. Returns a new array.
 */
clojure.core.matrix.acos = (function clojure$core$matrix$acos(m){
return clojure.core.matrix.protocols.acos.call(null,m);
});

/**
 * Computes the acos function on all elements of an array, using double precision values. Mutates the array in-place.
 */
clojure.core.matrix.acos_BANG_ = (function clojure$core$matrix$acos_BANG_(m){
clojure.core.matrix.protocols.acos_BANG_.call(null,m);

return m;
});

/**
 * Computes the asin function on all elements of an array, using double precision values. Returns a new array.
 */
clojure.core.matrix.asin = (function clojure$core$matrix$asin(m){
return clojure.core.matrix.protocols.asin.call(null,m);
});

/**
 * Computes the asin function on all elements of an array, using double precision values. Mutates the array in-place.
 */
clojure.core.matrix.asin_BANG_ = (function clojure$core$matrix$asin_BANG_(m){
clojure.core.matrix.protocols.asin_BANG_.call(null,m);

return m;
});

/**
 * Computes the atan function on all elements of an array, using double precision values. Returns a new array.
 */
clojure.core.matrix.atan = (function clojure$core$matrix$atan(m){
return clojure.core.matrix.protocols.atan.call(null,m);
});

/**
 * Computes the atan function on all elements of an array, using double precision values. Mutates the array in-place.
 */
clojure.core.matrix.atan_BANG_ = (function clojure$core$matrix$atan_BANG_(m){
clojure.core.matrix.protocols.atan_BANG_.call(null,m);

return m;
});

/**
 * Computes the cbrt function on all elements of an array, using double precision values. Returns a new array.
 */
clojure.core.matrix.cbrt = (function clojure$core$matrix$cbrt(m){
return clojure.core.matrix.protocols.cbrt.call(null,m);
});

/**
 * Computes the cbrt function on all elements of an array, using double precision values. Mutates the array in-place.
 */
clojure.core.matrix.cbrt_BANG_ = (function clojure$core$matrix$cbrt_BANG_(m){
clojure.core.matrix.protocols.cbrt_BANG_.call(null,m);

return m;
});

/**
 * Computes the ceil function on all elements of an array, using double precision values. Returns a new array.
 */
clojure.core.matrix.ceil = (function clojure$core$matrix$ceil(m){
return clojure.core.matrix.protocols.ceil.call(null,m);
});

/**
 * Computes the ceil function on all elements of an array, using double precision values. Mutates the array in-place.
 */
clojure.core.matrix.ceil_BANG_ = (function clojure$core$matrix$ceil_BANG_(m){
clojure.core.matrix.protocols.ceil_BANG_.call(null,m);

return m;
});

/**
 * Computes the cos function on all elements of an array, using double precision values. Returns a new array.
 */
clojure.core.matrix.cos = (function clojure$core$matrix$cos(m){
return clojure.core.matrix.protocols.cos.call(null,m);
});

/**
 * Computes the cos function on all elements of an array, using double precision values. Mutates the array in-place.
 */
clojure.core.matrix.cos_BANG_ = (function clojure$core$matrix$cos_BANG_(m){
clojure.core.matrix.protocols.cos_BANG_.call(null,m);

return m;
});

/**
 * Computes the cosh function on all elements of an array, using double precision values. Returns a new array.
 */
clojure.core.matrix.cosh = (function clojure$core$matrix$cosh(m){
return clojure.core.matrix.protocols.cosh.call(null,m);
});

/**
 * Computes the cosh function on all elements of an array, using double precision values. Mutates the array in-place.
 */
clojure.core.matrix.cosh_BANG_ = (function clojure$core$matrix$cosh_BANG_(m){
clojure.core.matrix.protocols.cosh_BANG_.call(null,m);

return m;
});

/**
 * Computes the exp function on all elements of an array, using double precision values. Returns a new array.
 */
clojure.core.matrix.exp = (function clojure$core$matrix$exp(m){
return clojure.core.matrix.protocols.exp.call(null,m);
});

/**
 * Computes the exp function on all elements of an array, using double precision values. Mutates the array in-place.
 */
clojure.core.matrix.exp_BANG_ = (function clojure$core$matrix$exp_BANG_(m){
clojure.core.matrix.protocols.exp_BANG_.call(null,m);

return m;
});

/**
 * Computes the floor function on all elements of an array, using double precision values. Returns a new array.
 */
clojure.core.matrix.floor = (function clojure$core$matrix$floor(m){
return clojure.core.matrix.protocols.floor.call(null,m);
});

/**
 * Computes the floor function on all elements of an array, using double precision values. Mutates the array in-place.
 */
clojure.core.matrix.floor_BANG_ = (function clojure$core$matrix$floor_BANG_(m){
clojure.core.matrix.protocols.floor_BANG_.call(null,m);

return m;
});

/**
 * Computes the log function on all elements of an array, using double precision values. Returns a new array.
 */
clojure.core.matrix.log = (function clojure$core$matrix$log(m){
return clojure.core.matrix.protocols.log.call(null,m);
});

/**
 * Computes the log function on all elements of an array, using double precision values. Mutates the array in-place.
 */
clojure.core.matrix.log_BANG_ = (function clojure$core$matrix$log_BANG_(m){
clojure.core.matrix.protocols.log_BANG_.call(null,m);

return m;
});

/**
 * Computes the log10 function on all elements of an array, using double precision values. Returns a new array.
 */
clojure.core.matrix.log10 = (function clojure$core$matrix$log10(m){
return clojure.core.matrix.protocols.log10.call(null,m);
});

/**
 * Computes the log10 function on all elements of an array, using double precision values. Mutates the array in-place.
 */
clojure.core.matrix.log10_BANG_ = (function clojure$core$matrix$log10_BANG_(m){
clojure.core.matrix.protocols.log10_BANG_.call(null,m);

return m;
});

/**
 * Computes the round function on all elements of an array, using double precision values. Returns a new array.
 */
clojure.core.matrix.round = (function clojure$core$matrix$round(m){
return clojure.core.matrix.protocols.round.call(null,m);
});

/**
 * Computes the round function on all elements of an array, using double precision values. Mutates the array in-place.
 */
clojure.core.matrix.round_BANG_ = (function clojure$core$matrix$round_BANG_(m){
clojure.core.matrix.protocols.round_BANG_.call(null,m);

return m;
});

/**
 * Computes the signum function on all elements of an array, using double precision values. Returns a new array.
 */
clojure.core.matrix.signum = (function clojure$core$matrix$signum(m){
return clojure.core.matrix.protocols.signum.call(null,m);
});

/**
 * Computes the signum function on all elements of an array, using double precision values. Mutates the array in-place.
 */
clojure.core.matrix.signum_BANG_ = (function clojure$core$matrix$signum_BANG_(m){
clojure.core.matrix.protocols.signum_BANG_.call(null,m);

return m;
});

/**
 * Computes the sin function on all elements of an array, using double precision values. Returns a new array.
 */
clojure.core.matrix.sin = (function clojure$core$matrix$sin(m){
return clojure.core.matrix.protocols.sin.call(null,m);
});

/**
 * Computes the sin function on all elements of an array, using double precision values. Mutates the array in-place.
 */
clojure.core.matrix.sin_BANG_ = (function clojure$core$matrix$sin_BANG_(m){
clojure.core.matrix.protocols.sin_BANG_.call(null,m);

return m;
});

/**
 * Computes the sinh function on all elements of an array, using double precision values. Returns a new array.
 */
clojure.core.matrix.sinh = (function clojure$core$matrix$sinh(m){
return clojure.core.matrix.protocols.sinh.call(null,m);
});

/**
 * Computes the sinh function on all elements of an array, using double precision values. Mutates the array in-place.
 */
clojure.core.matrix.sinh_BANG_ = (function clojure$core$matrix$sinh_BANG_(m){
clojure.core.matrix.protocols.sinh_BANG_.call(null,m);

return m;
});

/**
 * Computes the sqrt function on all elements of an array, using double precision values. Returns a new array.
 */
clojure.core.matrix.sqrt = (function clojure$core$matrix$sqrt(m){
return clojure.core.matrix.protocols.sqrt.call(null,m);
});

/**
 * Computes the sqrt function on all elements of an array, using double precision values. Mutates the array in-place.
 */
clojure.core.matrix.sqrt_BANG_ = (function clojure$core$matrix$sqrt_BANG_(m){
clojure.core.matrix.protocols.sqrt_BANG_.call(null,m);

return m;
});

/**
 * Computes the tan function on all elements of an array, using double precision values. Returns a new array.
 */
clojure.core.matrix.tan = (function clojure$core$matrix$tan(m){
return clojure.core.matrix.protocols.tan.call(null,m);
});

/**
 * Computes the tan function on all elements of an array, using double precision values. Mutates the array in-place.
 */
clojure.core.matrix.tan_BANG_ = (function clojure$core$matrix$tan_BANG_(m){
clojure.core.matrix.protocols.tan_BANG_.call(null,m);

return m;
});

/**
 * Computes the tanh function on all elements of an array, using double precision values. Returns a new array.
 */
clojure.core.matrix.tanh = (function clojure$core$matrix$tanh(m){
return clojure.core.matrix.protocols.tanh.call(null,m);
});

/**
 * Computes the tanh function on all elements of an array, using double precision values. Mutates the array in-place.
 */
clojure.core.matrix.tanh_BANG_ = (function clojure$core$matrix$tanh_BANG_(m){
clojure.core.matrix.protocols.tanh_BANG_.call(null,m);

return m;
});

/**
 * Computes the to-degrees function on all elements of an array, using double precision values. Returns a new array.
 */
clojure.core.matrix.to_degrees = (function clojure$core$matrix$to_degrees(m){
return clojure.core.matrix.protocols.to_degrees.call(null,m);
});

/**
 * Computes the to-degrees function on all elements of an array, using double precision values. Mutates the array in-place.
 */
clojure.core.matrix.to_degrees_BANG_ = (function clojure$core$matrix$to_degrees_BANG_(m){
clojure.core.matrix.protocols.to_degrees_BANG_.call(null,m);

return m;
});

/**
 * Computes the to-radians function on all elements of an array, using double precision values. Returns a new array.
 */
clojure.core.matrix.to_radians = (function clojure$core$matrix$to_radians(m){
return clojure.core.matrix.protocols.to_radians.call(null,m);
});

/**
 * Computes the to-radians function on all elements of an array, using double precision values. Mutates the array in-place.
 */
clojure.core.matrix.to_radians_BANG_ = (function clojure$core$matrix$to_radians_BANG_(m){
clojure.core.matrix.protocols.to_radians_BANG_.call(null,m);

return m;
});
/**
 * Computes the sigmoid (logistic) function for every element of an array.
 */
clojure.core.matrix.logistic = (function clojure$core$matrix$logistic(a){
return clojure.core.matrix.protocols.logistic.call(null,a);
});
/**
 * Computes the sigmoid (logistic) function for every element of an array. Mutates the array.
 */
clojure.core.matrix.logistic_BANG_ = (function clojure$core$matrix$logistic_BANG_(a){
clojure.core.matrix.protocols.logistic_BANG_.call(null,a);

return a;
});
/**
 * Computes the softplus function for every element of an array.
 */
clojure.core.matrix.softplus = (function clojure$core$matrix$softplus(a){
return clojure.core.matrix.protocols.softplus.call(null,a);
});
/**
 * Computes the softplus function for every element of an array. Mutates the array.
 */
clojure.core.matrix.softplus_BANG_ = (function clojure$core$matrix$softplus_BANG_(a){
clojure.core.matrix.protocols.softplus_BANG_.call(null,a);

return a;
});
/**
 * Computes the ReLU (rectified linear) function for every element of an array.
 */
clojure.core.matrix.relu = (function clojure$core$matrix$relu(a){
return clojure.core.matrix.protocols.relu.call(null,a);
});
/**
 * Computes the ReLU (rectified linear) function for every element of an array. Mutates the array.
 */
clojure.core.matrix.relu_BANG_ = (function clojure$core$matrix$relu_BANG_(a){
clojure.core.matrix.protocols.relu_BANG_.call(null,a);

return a;
});
/**
 * Computes the softmax function for a numerical vector.
 */
clojure.core.matrix.softmax = (function clojure$core$matrix$softmax(a){
return clojure.core.matrix.protocols.softmax.call(null,a);
});
/**
 * Computes the softmax function for every element of a numerical vector. Mutates the vector.
 */
clojure.core.matrix.softmax_BANG_ = (function clojure$core$matrix$softmax_BANG_(a){
clojure.core.matrix.protocols.softmax_BANG_.call(null,a);

return a;
});
/**
 * Swap row i with row j in a matrix, returning a new matrix
 * 
 * This is one of the three elementary row operation (see https://en.wikipedia.org/wiki/Elementary_matrix).
 */
clojure.core.matrix.swap_rows = (function clojure$core$matrix$swap_rows(m,i,j){
return clojure.core.matrix.protocols.swap_rows.call(null,m,i,j);
});
/**
 * Multiply row i in a matrix by a constant factor, returning a new matrix
 * 
 * This is one of the three elementary row operation (see https://en.wikipedia.org/wiki/Elementary_matrix).
 */
clojure.core.matrix.multiply_row = (function clojure$core$matrix$multiply_row(m,i,factor){
return clojure.core.matrix.protocols.multiply_row.call(null,m,i,factor);
});
/**
 * Add a row j (optionally multiplied by a scalar factor) to a row i
 * and replace row i with the result. Returns a new matrix.
 * 
 * This is one of the three elementary row operation (see https://en.wikipedia.org/wiki/Elementary_matrix).
 */
clojure.core.matrix.add_row = (function clojure$core$matrix$add_row(var_args){
var G__34624 = arguments.length;
switch (G__34624) {
case 3:
return clojure.core.matrix.add_row.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.core.matrix.add_row.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.core.matrix.add_row.cljs$core$IFn$_invoke$arity$3 = (function (m,i,j){
return clojure.core.matrix.protocols.add_row.call(null,m,i,j,1.0);
});

clojure.core.matrix.add_row.cljs$core$IFn$_invoke$arity$4 = (function (m,i,j,factor){
return clojure.core.matrix.protocols.add_row.call(null,m,i,j,factor);
});

clojure.core.matrix.add_row.cljs$lang$maxFixedArity = 4;

/**
 * Sets a row in a matrix using a specified vector.
 */
clojure.core.matrix.set_row = (function clojure$core$matrix$set_row(m,i,row){
return clojure.core.matrix.protocols.set_row.call(null,m,i,row);
});
/**
 * Sets a row in a matrix in-place using a specified vector.
 */
clojure.core.matrix.set_row_BANG_ = (function clojure$core$matrix$set_row_BANG_(m,i,row){
clojure.core.matrix.protocols.set_row_BANG_.call(null,m,i,row);

return m;
});
/**
 * Sets a column in a matrix using a specified vector.
 */
clojure.core.matrix.set_column = (function clojure$core$matrix$set_column(m,i,column){
return clojure.core.matrix.protocols.set_column.call(null,m,i,column);
});
/**
 * Sets a column in a matrix using a specified vector.
 */
clojure.core.matrix.set_column_BANG_ = (function clojure$core$matrix$set_column_BANG_(m,i,column){
clojure.core.matrix.protocols.set_column_BANG_.call(null,m,i,column);

return m;
});
/**
 * Counts the number of non-zero values in a numerical array.
 * May perform a full array scan, but will often be quicker for specialised
 * sparse arrays - sometimes as fast as O(1)
 */
clojure.core.matrix.non_zero_count = (function clojure$core$matrix$non_zero_count(m){
return clojure.core.matrix.protocols.nonzero_count.call(null,m);
});
/**
 * Gets the non-zero indices of an array.
 * - For a 1D vector, returns an ordered index list.
 * - For a higher dimensional array, returns the non-zero-indices for each slice in row-major order.
 */
clojure.core.matrix.non_zero_indices = (function clojure$core$matrix$non_zero_indices(m){
return clojure.core.matrix.protocols.non_zero_indices.call(null,m);
});
/**
 * Returns all elements of an array as a Clojure sequence in row-major order.
 * 
 * Like clojure.core/seq, Returns nil if the array has no elements.
 */
clojure.core.matrix.eseq = (function clojure$core$matrix$eseq(m){
return cljs.core.seq.call(null,clojure.core.matrix.protocols.element_seq.call(null,m));
});
/**
 * Element-wise reduce on all elements of an array. 
 * 
 * It is *not* guaranteed that the reduction may be stopped early using clojure.core/reduced. If this 
 * behaviour is wanted, please check the details of the specific implementation or use the more generic 
 * Clojure code:
 *   (reduce f (eseq m))
 */
clojure.core.matrix.ereduce = (function clojure$core$matrix$ereduce(var_args){
var G__34627 = arguments.length;
switch (G__34627) {
case 2:
return clojure.core.matrix.ereduce.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.ereduce.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.core.matrix.ereduce.cljs$core$IFn$_invoke$arity$2 = (function (f,m){
return clojure.core.matrix.protocols.element_reduce.call(null,m,f);
});

clojure.core.matrix.ereduce.cljs$core$IFn$_invoke$arity$3 = (function (f,init,m){
return clojure.core.matrix.protocols.element_reduce.call(null,m,f,init);
});

clojure.core.matrix.ereduce.cljs$lang$maxFixedArity = 3;

/**
 * Element-wise map over all elements of one or more arrays.
 * 
 * f must return a result compatible with the element-type of the array m. If a more general 
 * type is required, try coercing to a more general array type first, e.g.
 *   
 *   (emap (fn [x] (str x)) (double-array [1 2 3]))             ;; Throws an error
 *   (emap (fn [x] (str x)) (coerce [] (double-array [1 2 3]))) ;; OK!
 * 
 * Implemenations may *optionally* support custom function types. If this is the case, the
 * parameter m must be a valid array from the given implementation.
 * 
 * Returns a new array of the same element-type and shape as the array m.
 */
clojure.core.matrix.emap = (function clojure$core$matrix$emap(var_args){
var G__34634 = arguments.length;
switch (G__34634) {
case 2:
return clojure.core.matrix.emap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.emap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4514__auto__ = [];
var len__4499__auto___34636 = arguments.length;
var i__4500__auto___34637 = (0);
while(true){
if((i__4500__auto___34637 < len__4499__auto___34636)){
args_arr__4514__auto__.push((arguments[i__4500__auto___34637]));

var G__34638 = (i__4500__auto___34637 + (1));
i__4500__auto___34637 = G__34638;
continue;
} else {
}
break;
}

var argseq__4515__auto__ = (new cljs.core.IndexedSeq(args_arr__4514__auto__.slice((3)),(0),null));
return clojure.core.matrix.emap.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4515__auto__);

}
});

clojure.core.matrix.emap.cljs$core$IFn$_invoke$arity$2 = (function (f,m){
return clojure.core.matrix.protocols.element_map.call(null,m,f);
});

clojure.core.matrix.emap.cljs$core$IFn$_invoke$arity$3 = (function (f,m,a){
return clojure.core.matrix.protocols.element_map.call(null,m,f,a);
});

clojure.core.matrix.emap.cljs$core$IFn$_invoke$arity$variadic = (function (f,m,a,more){
return clojure.core.matrix.protocols.element_map.call(null,m,f,a,more);
});

/** @this {Function} */
clojure.core.matrix.emap.cljs$lang$applyTo = (function (seq34630){
var G__34631 = cljs.core.first.call(null,seq34630);
var seq34630__$1 = cljs.core.next.call(null,seq34630);
var G__34632 = cljs.core.first.call(null,seq34630__$1);
var seq34630__$2 = cljs.core.next.call(null,seq34630__$1);
var G__34633 = cljs.core.first.call(null,seq34630__$2);
var seq34630__$3 = cljs.core.next.call(null,seq34630__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34631,G__34632,G__34633,seq34630__$3);
});

clojure.core.matrix.emap.cljs$lang$maxFixedArity = (3);

/**
 * Element-wise map-indexed over all elements of one or more arrays. Like
 * emap, but provides an index as the second argument to the mapping function.
 * 
 * f must accept as first argument the index vector of the current element,
 * and return a result compatible with the element-type of the array m
 * 
 * Returns a new array of the same element-type and shape as the array m.
 */
clojure.core.matrix.emap_indexed = (function clojure$core$matrix$emap_indexed(var_args){
var G__34644 = arguments.length;
switch (G__34644) {
case 2:
return clojure.core.matrix.emap_indexed.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.emap_indexed.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4514__auto__ = [];
var len__4499__auto___34646 = arguments.length;
var i__4500__auto___34647 = (0);
while(true){
if((i__4500__auto___34647 < len__4499__auto___34646)){
args_arr__4514__auto__.push((arguments[i__4500__auto___34647]));

var G__34648 = (i__4500__auto___34647 + (1));
i__4500__auto___34647 = G__34648;
continue;
} else {
}
break;
}

var argseq__4515__auto__ = (new cljs.core.IndexedSeq(args_arr__4514__auto__.slice((3)),(0),null));
return clojure.core.matrix.emap_indexed.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4515__auto__);

}
});

clojure.core.matrix.emap_indexed.cljs$core$IFn$_invoke$arity$2 = (function (f,m){
return clojure.core.matrix.protocols.element_map_indexed.call(null,m,f);
});

clojure.core.matrix.emap_indexed.cljs$core$IFn$_invoke$arity$3 = (function (f,m,a){
return clojure.core.matrix.protocols.element_map_indexed.call(null,m,f,a);
});

clojure.core.matrix.emap_indexed.cljs$core$IFn$_invoke$arity$variadic = (function (f,m,a,more){
return clojure.core.matrix.protocols.element_map_indexed.call(null,m,f,a,more);
});

/** @this {Function} */
clojure.core.matrix.emap_indexed.cljs$lang$applyTo = (function (seq34640){
var G__34641 = cljs.core.first.call(null,seq34640);
var seq34640__$1 = cljs.core.next.call(null,seq34640);
var G__34642 = cljs.core.first.call(null,seq34640__$1);
var seq34640__$2 = cljs.core.next.call(null,seq34640__$1);
var G__34643 = cljs.core.first.call(null,seq34640__$2);
var seq34640__$3 = cljs.core.next.call(null,seq34640__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34641,G__34642,G__34643,seq34640__$3);
});

clojure.core.matrix.emap_indexed.cljs$lang$maxFixedArity = (3);

/**
 * Maps a function over all slices of one or more array
 */
clojure.core.matrix.slice_map = (function clojure$core$matrix$slice_map(var_args){
var G__34654 = arguments.length;
switch (G__34654) {
case 2:
return clojure.core.matrix.slice_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.slice_map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4514__auto__ = [];
var len__4499__auto___34656 = arguments.length;
var i__4500__auto___34657 = (0);
while(true){
if((i__4500__auto___34657 < len__4499__auto___34656)){
args_arr__4514__auto__.push((arguments[i__4500__auto___34657]));

var G__34658 = (i__4500__auto___34657 + (1));
i__4500__auto___34657 = G__34658;
continue;
} else {
}
break;
}

var argseq__4515__auto__ = (new cljs.core.IndexedSeq(args_arr__4514__auto__.slice((3)),(0),null));
return clojure.core.matrix.slice_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4515__auto__);

}
});

clojure.core.matrix.slice_map.cljs$core$IFn$_invoke$arity$2 = (function (f,m){
return clojure.core.matrix.protocols.slice_map.call(null,m,f);
});

clojure.core.matrix.slice_map.cljs$core$IFn$_invoke$arity$3 = (function (f,m1,m2){
return clojure.core.matrix.protocols.slice_map.call(null,m1,f,m2);
});

clojure.core.matrix.slice_map.cljs$core$IFn$_invoke$arity$variadic = (function (f,m1,m2,more){
return clojure.core.matrix.protocols.slice_map.call(null,m1,f,m2,more);
});

/** @this {Function} */
clojure.core.matrix.slice_map.cljs$lang$applyTo = (function (seq34650){
var G__34651 = cljs.core.first.call(null,seq34650);
var seq34650__$1 = cljs.core.next.call(null,seq34650);
var G__34652 = cljs.core.first.call(null,seq34650__$1);
var seq34650__$2 = cljs.core.next.call(null,seq34650__$1);
var G__34653 = cljs.core.first.call(null,seq34650__$2);
var seq34650__$3 = cljs.core.next.call(null,seq34650__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34651,G__34652,G__34653,seq34650__$3);
});

clojure.core.matrix.slice_map.cljs$lang$maxFixedArity = (3);

/**
 * Filters the slices of a core.matrix array, returning only those slices where (pred slice) is truthy.
 * 
 * Will result in an nil value if no slices satify the criteria. If not nil, the return value is 
 * guaranteed to be a seqable core.matrix array, e.g. you can:
 *  - use (seq (filter-slices m)) to get a sequence of slices
 *  - use (when-let [z (filter-slices m)] ...) to operate on the result as a core.matrix array.
 */
clojure.core.matrix.filter_slices = (function clojure$core$matrix$filter_slices(pred,m){
return clojure.core.matrix.protocols.filter_slices.call(null,m,pred);
});
/**
 * Calculates the sum of all the elements in a numerical array.
 */
clojure.core.matrix.esum = (function clojure$core$matrix$esum(m){
return clojure.core.matrix.protocols.element_sum.call(null,m);
});
/**
 * Gets the minimum element value from a numerical array
 */
clojure.core.matrix.emin = (function clojure$core$matrix$emin(m){
return clojure.core.matrix.protocols.element_min.call(null,m);
});
/**
 * Gets the maximum element value from a numerical array
 */
clojure.core.matrix.emax = (function clojure$core$matrix$emax(m){
return clojure.core.matrix.protocols.element_max.call(null,m);
});
/**
 * Gets the minimum element value from a numerical array
 */
clojure.core.matrix.minimum = (function clojure$core$matrix$minimum(m){
return clojure.core.matrix.protocols.element_min.call(null,m);
});
/**
 * Gets the maximum element value from a numerical array
 */
clojure.core.matrix.maximum = (function clojure$core$matrix$maximum(m){
return clojure.core.matrix.protocols.element_max.call(null,m);
});
/**
 * Clamps each element in a numerical array between lower and upper bounds
 *   specified by a and b, respectively.
 * 
 *   Examples:
 *   (clamp [[1 5 1] [4 10 2] [5 6 3]] 2 8) ;=> [[2 5 2] [4 8 2] [5 6 3]]
 *   
 */
clojure.core.matrix.clamp = (function clojure$core$matrix$clamp(m,a,b){
return clojure.core.matrix.protocols.element_clamp.call(null,m,a,b);
});
/**
 * Element-wise map of a function f over all elements of one or more arrays.
 * 
 * f must return a result compatible with the element-type of the array m
 * 
 * Performs in-place modification of the first array argument.
 */
clojure.core.matrix.emap_BANG_ = (function clojure$core$matrix$emap_BANG_(var_args){
var G__34664 = arguments.length;
switch (G__34664) {
case 2:
return clojure.core.matrix.emap_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.emap_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4514__auto__ = [];
var len__4499__auto___34666 = arguments.length;
var i__4500__auto___34667 = (0);
while(true){
if((i__4500__auto___34667 < len__4499__auto___34666)){
args_arr__4514__auto__.push((arguments[i__4500__auto___34667]));

var G__34668 = (i__4500__auto___34667 + (1));
i__4500__auto___34667 = G__34668;
continue;
} else {
}
break;
}

var argseq__4515__auto__ = (new cljs.core.IndexedSeq(args_arr__4514__auto__.slice((3)),(0),null));
return clojure.core.matrix.emap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4515__auto__);

}
});

clojure.core.matrix.emap_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (f,m){
clojure.core.matrix.protocols.element_map_BANG_.call(null,m,f);

return m;
});

clojure.core.matrix.emap_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (f,m,a){
clojure.core.matrix.protocols.element_map_BANG_.call(null,m,f,a);

return m;
});

clojure.core.matrix.emap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,m,a,more){
clojure.core.matrix.protocols.element_map_BANG_.call(null,m,f,a,more);

return m;
});

/** @this {Function} */
clojure.core.matrix.emap_BANG_.cljs$lang$applyTo = (function (seq34660){
var G__34661 = cljs.core.first.call(null,seq34660);
var seq34660__$1 = cljs.core.next.call(null,seq34660);
var G__34662 = cljs.core.first.call(null,seq34660__$1);
var seq34660__$2 = cljs.core.next.call(null,seq34660__$1);
var G__34663 = cljs.core.first.call(null,seq34660__$2);
var seq34660__$3 = cljs.core.next.call(null,seq34660__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34661,G__34662,G__34663,seq34660__$3);
});

clojure.core.matrix.emap_BANG_.cljs$lang$maxFixedArity = (3);

/**
 * Adds the result of emap to a destination array.
 * 
 * dest must be a mutable numerical array. Returns dest.
 */
clojure.core.matrix.add_emap_BANG_ = (function clojure$core$matrix$add_emap_BANG_(var_args){
var G__34675 = arguments.length;
switch (G__34675) {
case 3:
return clojure.core.matrix.add_emap_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.core.matrix.add_emap_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4514__auto__ = [];
var len__4499__auto___34677 = arguments.length;
var i__4500__auto___34678 = (0);
while(true){
if((i__4500__auto___34678 < len__4499__auto___34677)){
args_arr__4514__auto__.push((arguments[i__4500__auto___34678]));

var G__34679 = (i__4500__auto___34678 + (1));
i__4500__auto___34678 = G__34679;
continue;
} else {
}
break;
}

var argseq__4515__auto__ = (new cljs.core.IndexedSeq(args_arr__4514__auto__.slice((4)),(0),null));
return clojure.core.matrix.add_emap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4515__auto__);

}
});

clojure.core.matrix.add_emap_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (dest,f,a){
clojure.core.matrix.protocols.add_emap_BANG_.call(null,dest,f,a);

return dest;
});

clojure.core.matrix.add_emap_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (dest,f,a,b){
clojure.core.matrix.protocols.add_emap_BANG_.call(null,dest,f,a,b);

return dest;
});

clojure.core.matrix.add_emap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (dest,f,a,b,more){
clojure.core.matrix.protocols.add_emap_BANG_.call(null,dest,f,a,b,more);

return dest;
});

/** @this {Function} */
clojure.core.matrix.add_emap_BANG_.cljs$lang$applyTo = (function (seq34670){
var G__34671 = cljs.core.first.call(null,seq34670);
var seq34670__$1 = cljs.core.next.call(null,seq34670);
var G__34672 = cljs.core.first.call(null,seq34670__$1);
var seq34670__$2 = cljs.core.next.call(null,seq34670__$1);
var G__34673 = cljs.core.first.call(null,seq34670__$2);
var seq34670__$3 = cljs.core.next.call(null,seq34670__$2);
var G__34674 = cljs.core.first.call(null,seq34670__$3);
var seq34670__$4 = cljs.core.next.call(null,seq34670__$3);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34671,G__34672,G__34673,G__34674,seq34670__$4);
});

clojure.core.matrix.add_emap_BANG_.cljs$lang$maxFixedArity = (4);

/**
 * Sets the destination array to the result of an emap operation.
 * 
 * dest must be a mutable array. Returns dest.
 */
clojure.core.matrix.set_emap_BANG_ = (function clojure$core$matrix$set_emap_BANG_(var_args){
var G__34686 = arguments.length;
switch (G__34686) {
case 3:
return clojure.core.matrix.set_emap_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.core.matrix.set_emap_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4514__auto__ = [];
var len__4499__auto___34688 = arguments.length;
var i__4500__auto___34689 = (0);
while(true){
if((i__4500__auto___34689 < len__4499__auto___34688)){
args_arr__4514__auto__.push((arguments[i__4500__auto___34689]));

var G__34690 = (i__4500__auto___34689 + (1));
i__4500__auto___34689 = G__34690;
continue;
} else {
}
break;
}

var argseq__4515__auto__ = (new cljs.core.IndexedSeq(args_arr__4514__auto__.slice((4)),(0),null));
return clojure.core.matrix.set_emap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4515__auto__);

}
});

clojure.core.matrix.set_emap_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (dest,f,a){
clojure.core.matrix.protocols.set_emap_BANG_.call(null,dest,f,a);

return dest;
});

clojure.core.matrix.set_emap_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (dest,f,a,b){
clojure.core.matrix.protocols.set_emap_BANG_.call(null,dest,f,a,b);

return dest;
});

clojure.core.matrix.set_emap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (dest,f,a,b,more){
clojure.core.matrix.protocols.set_emap_BANG_.call(null,dest,f,a,b,more);

return dest;
});

/** @this {Function} */
clojure.core.matrix.set_emap_BANG_.cljs$lang$applyTo = (function (seq34681){
var G__34682 = cljs.core.first.call(null,seq34681);
var seq34681__$1 = cljs.core.next.call(null,seq34681);
var G__34683 = cljs.core.first.call(null,seq34681__$1);
var seq34681__$2 = cljs.core.next.call(null,seq34681__$1);
var G__34684 = cljs.core.first.call(null,seq34681__$2);
var seq34681__$3 = cljs.core.next.call(null,seq34681__$2);
var G__34685 = cljs.core.first.call(null,seq34681__$3);
var seq34681__$4 = cljs.core.next.call(null,seq34681__$3);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34682,G__34683,G__34684,G__34685,seq34681__$4);
});

clojure.core.matrix.set_emap_BANG_.cljs$lang$maxFixedArity = (4);

/**
 * Element-wise map-indexed over all elements of one or more arrays.
 * 
 * f must accept as first argument the index vector of the current element,
 * and return a result compatible with the element-type of the array m
 * 
 * Performs in-place modification of the first array argument.
 */
clojure.core.matrix.emap_indexed_BANG_ = (function clojure$core$matrix$emap_indexed_BANG_(var_args){
var G__34696 = arguments.length;
switch (G__34696) {
case 2:
return clojure.core.matrix.emap_indexed_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.emap_indexed_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4514__auto__ = [];
var len__4499__auto___34698 = arguments.length;
var i__4500__auto___34699 = (0);
while(true){
if((i__4500__auto___34699 < len__4499__auto___34698)){
args_arr__4514__auto__.push((arguments[i__4500__auto___34699]));

var G__34700 = (i__4500__auto___34699 + (1));
i__4500__auto___34699 = G__34700;
continue;
} else {
}
break;
}

var argseq__4515__auto__ = (new cljs.core.IndexedSeq(args_arr__4514__auto__.slice((3)),(0),null));
return clojure.core.matrix.emap_indexed_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4515__auto__);

}
});

clojure.core.matrix.emap_indexed_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (f,m){
return clojure.core.matrix.protocols.element_map_indexed_BANG_.call(null,m,f);
});

clojure.core.matrix.emap_indexed_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (f,m,a){
return clojure.core.matrix.protocols.element_map_indexed_BANG_.call(null,m,f,a);
});

clojure.core.matrix.emap_indexed_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,m,a,more){
return clojure.core.matrix.protocols.element_map_indexed_BANG_.call(null,m,f,a,more);
});

/** @this {Function} */
clojure.core.matrix.emap_indexed_BANG_.cljs$lang$applyTo = (function (seq34692){
var G__34693 = cljs.core.first.call(null,seq34692);
var seq34692__$1 = cljs.core.next.call(null,seq34692);
var G__34694 = cljs.core.first.call(null,seq34692__$1);
var seq34692__$2 = cljs.core.next.call(null,seq34692__$1);
var G__34695 = cljs.core.first.call(null,seq34692__$2);
var seq34692__$3 = cljs.core.next.call(null,seq34692__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34693,G__34694,G__34695,seq34692__$3);
});

clojure.core.matrix.emap_indexed_BANG_.cljs$lang$maxFixedArity = (3);

/**
 * Returns a sequence of all possible index vectors for a given shape, in row-major order
 */
clojure.core.matrix.index_seq_for_shape = (function clojure$core$matrix$index_seq_for_shape(sh){
return clojure.core.matrix.utils.base_index_seq_for_shape.call(null,sh);
});
/**
 * Returns a sequence of all possible index vectors into an array, in row-major order.
 */
clojure.core.matrix.index_seq = (function clojure$core$matrix$index_seq(m){
return clojure.core.matrix.index_seq_for_shape.call(null,clojure.core.matrix.protocols.get_shape.call(null,m));
});
/**
 * Gets the currently active matrix implementation as a keyword, e.g. :vectorz
 */
clojure.core.matrix.current_implementation = (function clojure$core$matrix$current_implementation(){
return clojure.core.matrix.implementations._STAR_matrix_implementation_STAR_;
});
/**
 * Gets a canonical matrix object for a given implementation (keyword or array), or the current implementation
 * if not otherwise specified. Scalars are regarded as conforming to the current implementation
 * Throws an exception if none is available.
 */
clojure.core.matrix.implementation_check = (function clojure$core$matrix$implementation_check(var_args){
var G__34702 = arguments.length;
switch (G__34702) {
case 0:
return clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$0 = (function (){
var or__3922__auto__ = clojure.core.matrix.implementations.get_canonical_object.call(null,clojure.core.matrix.implementations._STAR_matrix_implementation_STAR_);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
throw cljs.core.ex_info.call(null,["No current clojure.core.matrix implementation available (no canonical)"].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});

clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$1 = (function (impl){
var temp__5455__auto__ = clojure.core.matrix.implementations.get_canonical_object.call(null,impl);
if(cljs.core.truth_(temp__5455__auto__)){
var im = temp__5455__auto__;
return im;
} else {
if(cljs.core.truth_(clojure.core.matrix.scalar_QMARK_.call(null,impl))){
return clojure.core.matrix.implementations.get_canonical_object.call(null,clojure.core.matrix.implementations._STAR_matrix_implementation_STAR_);
} else {
var or__3922__auto__ = clojure.core.matrix.implementations.load_implementation.call(null,impl);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
throw cljs.core.ex_info.call(null,["No clojure.core.matrix implementation available - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(impl)].join(''))].join(''),cljs.core.PersistentArrayMap.EMPTY);
}

}
}
});

clojure.core.matrix.implementation_check.cljs$lang$maxFixedArity = 1;

/**
 * Gets a canonical object for the currently active matrix implementation. This object
 * can be used to pass as an implementation parameter, or to query implementation internals via core.matrix protocols.
 */
clojure.core.matrix.current_implementation_object = (function clojure$core$matrix$current_implementation_object(){
return clojure.core.matrix.implementations.get_canonical_object.call(null,clojure.core.matrix.current_implementation.call(null));
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
clojure.core.matrix.set_current_implementation = (function clojure$core$matrix$set_current_implementation(m){
return clojure.core.matrix.implementations.set_current_implementation.call(null,m);
});

//# sourceMappingURL=matrix.js.map?rel=1526826990767
