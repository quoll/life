// Compiled by ClojureScript 1.10.238 {}
goog.provide('clojure.core.matrix.protocols');
goog.require('cljs.core');
goog.require('clojure.core.matrix.utils');
goog.require('clojure.core.matrix.impl.mathsops');

/**
 * Protocol for general implementation functionality. Required to support implementation metadata and
 * matrix construction.
 * @interface
 */
clojure.core.matrix.protocols.PImplementation = function(){};

/**
 * Returns a keyword representing this implementation, that can be used to request array instances or
 *   look up implementation metadata etc.
 * 
 *   Each implementation should have one unique key. Official mapping of implementation keywords is
 *   maintained in the var clojure.core.matrix.implementations/KNOWN-IMPLEMENTATIONS.
 */
clojure.core.matrix.protocols.implementation_key = (function clojure$core$matrix$protocols$implementation_key(m){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PImplementation$implementation_key$arity$1 == null))))){
return m.clojure$core$matrix$protocols$PImplementation$implementation_key$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.implementation_key[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.implementation_key["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"PImplementation.implementation-key",m);
}
}
}
});

/**
 * Returns optional meta-information on the implementation.
 * 
 *   Standard keys:
 *     :doc - containing a string describing an implementation
 */
clojure.core.matrix.protocols.meta_info = (function clojure$core$matrix$protocols$meta_info(m){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PImplementation$meta_info$arity$1 == null))))){
return m.clojure$core$matrix$protocols$PImplementation$meta_info$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.meta_info[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.meta_info["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"PImplementation.meta-info",m);
}
}
}
});

/**
 * Returns a new n-dimensional array containing the given data. data should be in the form of either
 *   nested sequences or a valid existing array.
 * 
 *   The return value should be in the preferred format of the given implementation. If the implementation
 *   does not support the required dimensionality or element type then it may either:
 *    - Throw an error
 *    - Return nil to indicate that a default implementation should be used instead
 * 
 *   0-dimensional arrays / scalars are permitted.
 */
clojure.core.matrix.protocols.construct_matrix = (function clojure$core$matrix$protocols$construct_matrix(m,data){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PImplementation$construct_matrix$arity$2 == null))))){
return m.clojure$core$matrix$protocols$PImplementation$construct_matrix$arity$2(m,data);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.construct_matrix[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,data);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.construct_matrix["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,data);
} else {
throw cljs.core.missing_protocol.call(null,"PImplementation.construct-matrix",m);
}
}
}
});

/**
 * Returns a new vector (1D column matrix) of the given length, filled with numeric zero.
 */
clojure.core.matrix.protocols.new_vector = (function clojure$core$matrix$protocols$new_vector(m,length){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PImplementation$new_vector$arity$2 == null))))){
return m.clojure$core$matrix$protocols$PImplementation$new_vector$arity$2(m,length);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.new_vector[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,length);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.new_vector["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,length);
} else {
throw cljs.core.missing_protocol.call(null,"PImplementation.new-vector",m);
}
}
}
});

/**
 * Returns a new matrix (regular 2D matrix) with the given number of rows and columns, filled with numeric zero.
 */
clojure.core.matrix.protocols.new_matrix = (function clojure$core$matrix$protocols$new_matrix(m,rows,columns){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PImplementation$new_matrix$arity$3 == null))))){
return m.clojure$core$matrix$protocols$PImplementation$new_matrix$arity$3(m,rows,columns);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.new_matrix[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,rows,columns);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.new_matrix["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,rows,columns);
} else {
throw cljs.core.missing_protocol.call(null,"PImplementation.new-matrix",m);
}
}
}
});

/**
 * Returns a new general matrix of the given shape.
 *   Must return nil if the shape is not supported by the implementation.
 *   Shape can be any sequence of integer dimension sizes (including 0 dimensions).
 */
clojure.core.matrix.protocols.new_matrix_nd = (function clojure$core$matrix$protocols$new_matrix_nd(m,shape){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PImplementation$new_matrix_nd$arity$2 == null))))){
return m.clojure$core$matrix$protocols$PImplementation$new_matrix_nd$arity$2(m,shape);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.new_matrix_nd[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,shape);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.new_matrix_nd["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,shape);
} else {
throw cljs.core.missing_protocol.call(null,"PImplementation.new-matrix-nd",m);
}
}
}
});

/**
 * Returns true if the implementation supports matrices with the given number of dimensions.
 */
clojure.core.matrix.protocols.supports_dimensionality_QMARK_ = (function clojure$core$matrix$protocols$supports_dimensionality_QMARK_(m,dimensions){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PImplementation$supports_dimensionality_QMARK_$arity$2 == null))))){
return m.clojure$core$matrix$protocols$PImplementation$supports_dimensionality_QMARK_$arity$2(m,dimensions);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.supports_dimensionality_QMARK_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,dimensions);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.supports_dimensionality_QMARK_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,dimensions);
} else {
throw cljs.core.missing_protocol.call(null,"PImplementation.supports-dimensionality?",m);
}
}
}
});


/**
 * Protocol to return standard dimension information about an array.
 * dimensionality and dimension-count are mandatory for implementations
 * @interface
 */
clojure.core.matrix.protocols.PDimensionInfo = function(){};

/**
 * Returns the number of dimensions of an array, as an integer (greater than or equal to zero). 
 */
clojure.core.matrix.protocols.dimensionality = (function clojure$core$matrix$protocols$dimensionality(m){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PDimensionInfo$dimensionality$arity$1 == null))))){
return m.clojure$core$matrix$protocols$PDimensionInfo$dimensionality$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.dimensionality[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.dimensionality["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"PDimensionInfo.dimensionality",m);
}
}
}
});

/**
 * Returns the shape of the array, typically as a Java array or sequence of dimension sizes.
 *   Implementations are free to choose what type is used to represent the shape, but it must
 *   contain only integer values and be traversable as a sequence via clojure.core/seq
 */
clojure.core.matrix.protocols.get_shape = (function clojure$core$matrix$protocols$get_shape(m){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PDimensionInfo$get_shape$arity$1 == null))))){
return m.clojure$core$matrix$protocols$PDimensionInfo$get_shape$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.get_shape[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.get_shape["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"PDimensionInfo.get-shape",m);
}
}
}
});

/**
 * Tests whether an object is a scalar value, i.e. a value that can exist at a
 *   specific position in an array.
 */
clojure.core.matrix.protocols.is_scalar_QMARK_ = (function clojure$core$matrix$protocols$is_scalar_QMARK_(m){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PDimensionInfo$is_scalar_QMARK_$arity$1 == null))))){
return m.clojure$core$matrix$protocols$PDimensionInfo$is_scalar_QMARK_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.is_scalar_QMARK_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.is_scalar_QMARK_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"PDimensionInfo.is-scalar?",m);
}
}
}
});

/**
 * Tests whether an object is a vector (1D array)
 */
clojure.core.matrix.protocols.is_vector_QMARK_ = (function clojure$core$matrix$protocols$is_vector_QMARK_(m){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PDimensionInfo$is_vector_QMARK_$arity$1 == null))))){
return m.clojure$core$matrix$protocols$PDimensionInfo$is_vector_QMARK_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.is_vector_QMARK_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.is_vector_QMARK_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"PDimensionInfo.is-vector?",m);
}
}
}
});

/**
 * Returns the size of a specific dimension. Must throw an exception if the array does not
 *   have the specified dimension.
 */
clojure.core.matrix.protocols.dimension_count = (function clojure$core$matrix$protocols$dimension_count(m,dimension_number){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PDimensionInfo$dimension_count$arity$2 == null))))){
return m.clojure$core$matrix$protocols$PDimensionInfo$dimension_count$arity$2(m,dimension_number);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.dimension_count[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,dimension_number);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.dimension_count["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,dimension_number);
} else {
throw cljs.core.missing_protocol.call(null,"PDimensionInfo.dimension-count",m);
}
}
}
});


/**
 * Protocol for indexed read access to arrays, matrices and vectors. Indexing values can
 * be assumed to be integers. indexes may be any sequence or Java array of index values.
 * @interface
 */
clojure.core.matrix.protocols.PIndexedAccess = function(){};

clojure.core.matrix.protocols.get_1d = (function clojure$core$matrix$protocols$get_1d(m,row){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PIndexedAccess$get_1d$arity$2 == null))))){
return m.clojure$core$matrix$protocols$PIndexedAccess$get_1d$arity$2(m,row);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.get_1d[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,row);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.get_1d["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,row);
} else {
throw cljs.core.missing_protocol.call(null,"PIndexedAccess.get-1d",m);
}
}
}
});

clojure.core.matrix.protocols.get_2d = (function clojure$core$matrix$protocols$get_2d(m,row,column){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PIndexedAccess$get_2d$arity$3 == null))))){
return m.clojure$core$matrix$protocols$PIndexedAccess$get_2d$arity$3(m,row,column);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.get_2d[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,row,column);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.get_2d["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,row,column);
} else {
throw cljs.core.missing_protocol.call(null,"PIndexedAccess.get-2d",m);
}
}
}
});

clojure.core.matrix.protocols.get_nd = (function clojure$core$matrix$protocols$get_nd(m,indexes){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PIndexedAccess$get_nd$arity$2 == null))))){
return m.clojure$core$matrix$protocols$PIndexedAccess$get_nd$arity$2(m,indexes);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.get_nd[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,indexes);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.get_nd["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,indexes);
} else {
throw cljs.core.missing_protocol.call(null,"PIndexedAccess.get-nd",m);
}
}
}
});


/**
 * Protocol for indexed 'setter' operations. These are like Clojure's 'assoc'
 * function, i.e. they return an updated copy of the original array, which is itself unchanged.
 * Should be supported for any immutable array type.
 * @interface
 */
clojure.core.matrix.protocols.PIndexedSetting = function(){};

clojure.core.matrix.protocols.set_1d = (function clojure$core$matrix$protocols$set_1d(m,row,v){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PIndexedSetting$set_1d$arity$3 == null))))){
return m.clojure$core$matrix$protocols$PIndexedSetting$set_1d$arity$3(m,row,v);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.set_1d[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,row,v);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.set_1d["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,row,v);
} else {
throw cljs.core.missing_protocol.call(null,"PIndexedSetting.set-1d",m);
}
}
}
});

clojure.core.matrix.protocols.set_2d = (function clojure$core$matrix$protocols$set_2d(m,row,column,v){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PIndexedSetting$set_2d$arity$4 == null))))){
return m.clojure$core$matrix$protocols$PIndexedSetting$set_2d$arity$4(m,row,column,v);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.set_2d[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,row,column,v);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.set_2d["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,row,column,v);
} else {
throw cljs.core.missing_protocol.call(null,"PIndexedSetting.set-2d",m);
}
}
}
});

clojure.core.matrix.protocols.set_nd = (function clojure$core$matrix$protocols$set_nd(m,indexes,v){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PIndexedSetting$set_nd$arity$3 == null))))){
return m.clojure$core$matrix$protocols$PIndexedSetting$set_nd$arity$3(m,indexes,v);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.set_nd[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,indexes,v);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.set_nd["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,indexes,v);
} else {
throw cljs.core.missing_protocol.call(null,"PIndexedSetting.set-nd",m);
}
}
}
});

/**
 * Returns true if the matrix is mutable and therefore supports direct mutable operations, e.g. add!
 */
clojure.core.matrix.protocols.is_mutable_QMARK_ = (function clojure$core$matrix$protocols$is_mutable_QMARK_(m){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PIndexedSetting$is_mutable_QMARK_$arity$1 == null))))){
return m.clojure$core$matrix$protocols$PIndexedSetting$is_mutable_QMARK_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.is_mutable_QMARK_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.is_mutable_QMARK_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"PIndexedSetting.is-mutable?",m);
}
}
}
});


/**
 * Protocol for indexed mutable setter access to matrices and vectors.
 * Must be supported for any mutable matrix type.
 * @interface
 */
clojure.core.matrix.protocols.PIndexedSettingMutable = function(){};

clojure.core.matrix.protocols.set_1d_BANG_ = (function clojure$core$matrix$protocols$set_1d_BANG_(m,row,v){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PIndexedSettingMutable$set_1d_BANG_$arity$3 == null))))){
return m.clojure$core$matrix$protocols$PIndexedSettingMutable$set_1d_BANG_$arity$3(m,row,v);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.set_1d_BANG_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,row,v);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.set_1d_BANG_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,row,v);
} else {
throw cljs.core.missing_protocol.call(null,"PIndexedSettingMutable.set-1d!",m);
}
}
}
});

clojure.core.matrix.protocols.set_2d_BANG_ = (function clojure$core$matrix$protocols$set_2d_BANG_(m,row,column,v){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PIndexedSettingMutable$set_2d_BANG_$arity$4 == null))))){
return m.clojure$core$matrix$protocols$PIndexedSettingMutable$set_2d_BANG_$arity$4(m,row,column,v);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.set_2d_BANG_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,row,column,v);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.set_2d_BANG_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,row,column,v);
} else {
throw cljs.core.missing_protocol.call(null,"PIndexedSettingMutable.set-2d!",m);
}
}
}
});

clojure.core.matrix.protocols.set_nd_BANG_ = (function clojure$core$matrix$protocols$set_nd_BANG_(m,indexes,v){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PIndexedSettingMutable$set_nd_BANG_$arity$3 == null))))){
return m.clojure$core$matrix$protocols$PIndexedSettingMutable$set_nd_BANG_$arity$3(m,indexes,v);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.set_nd_BANG_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,indexes,v);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.set_nd_BANG_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,indexes,v);
} else {
throw cljs.core.missing_protocol.call(null,"PIndexedSettingMutable.set-nd!",m);
}
}
}
});


/**
 * Protocol for cloning a matrix value. The new clone must be mutable if the original
 * matrix is mutable, i.e. mutating the clone must not affect the original. The copy should be shallow, if applicable.
 * @interface
 */
clojure.core.matrix.protocols.PMatrixCloning = function(){};

/**
 * Returns a clone of an array. Must be a new independent (non-view)
 *            instance if the array is mutable.
 */
clojure.core.matrix.protocols.clone = (function clojure$core$matrix$protocols$clone(m){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PMatrixCloning$clone$arity$1 == null))))){
return m.clojure$core$matrix$protocols$PMatrixCloning$clone$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.clone[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.clone["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"PMatrixCloning.clone",m);
}
}
}
});


/**
 * Protocol for querying the type of matrix elements. If not provided, the default implementation will
 * return java.lang.Object, and the matrix object is assumed to accept any type of value.
 * If a matrix is primitive-backed, it should return the appropriate primitive type e.g. Double/TYPE.
 * @interface
 */
clojure.core.matrix.protocols.PTypeInfo = function(){};

clojure.core.matrix.protocols.element_type = (function clojure$core$matrix$protocols$element_type(m){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PTypeInfo$element_type$arity$1 == null))))){
return m.clojure$core$matrix$protocols$PTypeInfo$element_type$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.element_type[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.element_type["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"PTypeInfo.element-type",m);
}
}
}
});


/**
 * Optional protocol for quick determination of array matrics
 * @interface
 */
clojure.core.matrix.protocols.PArrayMetrics = function(){};

/**
 * Returns the number of non-zero elements in a numerical array. 
 *   May throw an exception if the array is not numerical.
 */
clojure.core.matrix.protocols.nonzero_count = (function clojure$core$matrix$protocols$nonzero_count(m){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PArrayMetrics$nonzero_count$arity$1 == null))))){
return m.clojure$core$matrix$protocols$PArrayMetrics$nonzero_count$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.nonzero_count[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.nonzero_count["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"PArrayMetrics.nonzero-count",m);
}
}
}
});


/**
 * Optional protocol to validate the shape of a matrix. If the matrix has an incorrect shape, should
 * throw an error. Otherwise it should return the correct shape.
 * @interface
 */
clojure.core.matrix.protocols.PValidateShape = function(){};

/**
 * Returns the shape of the array, performing validation and throwing an error if the shape is inconsistent
 */
clojure.core.matrix.protocols.validate_shape = (function clojure$core$matrix$protocols$validate_shape(var_args){
var G__22016 = arguments.length;
switch (G__22016) {
case 1:
return clojure.core.matrix.protocols.validate_shape.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.protocols.validate_shape.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.core.matrix.protocols.validate_shape.cljs$core$IFn$_invoke$arity$1 = (function (m){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PValidateShape$validate_shape$arity$1 == null))))){
return m.clojure$core$matrix$protocols$PValidateShape$validate_shape$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.validate_shape[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.validate_shape["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"PValidateShape.validate-shape",m);
}
}
}
});

clojure.core.matrix.protocols.validate_shape.cljs$core$IFn$_invoke$arity$2 = (function (m,expected_shape){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PValidateShape$validate_shape$arity$2 == null))))){
return m.clojure$core$matrix$protocols$PValidateShape$validate_shape$arity$2(m,expected_shape);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.validate_shape[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,expected_shape);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.validate_shape["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,expected_shape);
} else {
throw cljs.core.missing_protocol.call(null,"PValidateShape.validate-shape",m);
}
}
}
});

clojure.core.matrix.protocols.validate_shape.cljs$lang$maxFixedArity = 2;



/**
 * Protocol to support construction of row and column matrices from 1D vectors.
 * 
 * A vector of length N should be converted to a 1xN or Nx1 matrix respectively.
 * 
 * Should throw an error if the data is not a 1D vector
 * @interface
 */
clojure.core.matrix.protocols.PRowColMatrix = function(){};

clojure.core.matrix.protocols.column_matrix = (function clojure$core$matrix$protocols$column_matrix(m,data){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PRowColMatrix$column_matrix$arity$2 == null))))){
return m.clojure$core$matrix$protocols$PRowColMatrix$column_matrix$arity$2(m,data);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.column_matrix[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,data);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.column_matrix["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,data);
} else {
throw cljs.core.missing_protocol.call(null,"PRowColMatrix.column-matrix",m);
}
}
}
});

clojure.core.matrix.protocols.row_matrix = (function clojure$core$matrix$protocols$row_matrix(m,data){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PRowColMatrix$row_matrix$arity$2 == null))))){
return m.clojure$core$matrix$protocols$PRowColMatrix$row_matrix$arity$2(m,data);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.row_matrix[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,data);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.row_matrix["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,data);
} else {
throw cljs.core.missing_protocol.call(null,"PRowColMatrix.row-matrix",m);
}
}
}
});


/**
 * Protocol for creating a mutable copy of a matrix. If implemented, must return either a fully mutable
 * copy of the given matrix, or nil if not possible.
 * 
 * The default implementation will attempt to choose a suitable mutable matrix implementation.
 * @interface
 */
clojure.core.matrix.protocols.PMutableMatrixConstruction = function(){};

clojure.core.matrix.protocols.mutable_matrix = (function clojure$core$matrix$protocols$mutable_matrix(m){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PMutableMatrixConstruction$mutable_matrix$arity$1 == null))))){
return m.clojure$core$matrix$protocols$PMutableMatrixConstruction$mutable_matrix$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.mutable_matrix[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.mutable_matrix["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"PMutableMatrixConstruction.mutable-matrix",m);
}
}
}
});


/**
 * Protocol for coercing to a mutable format. May return the original array, if it is already fully mutable,
 * otherwise should return a fully mutable copy of the array.
 * 
 * Should return nil to indicate that this implementation cannot create a mutable array from the given data.
 * 
 * The default implementation will attempt to choose a suitable mutable matrix implementation.
 * @interface
 */
clojure.core.matrix.protocols.PMutableCoercion = function(){};

/**
 * Returns this array if fully mutable, otherwise returns a new mutable array containing
 *                 a copy of this array. May return nil if the implementation cannot create a suitable mutable
 *                 array.
 */
clojure.core.matrix.protocols.ensure_mutable = (function clojure$core$matrix$protocols$ensure_mutable(m){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PMutableCoercion$ensure_mutable$arity$1 == null))))){
return m.clojure$core$matrix$protocols$PMutableCoercion$ensure_mutable$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.ensure_mutable[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.ensure_mutable["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"PMutableCoercion.ensure-mutable",m);
}
}
}
});


/**
 * Protocol for constructing a sparse array from the given data. Implementations should
 * consider the possibility that data may be a large lazy sequence, possibly larger than memory, so should ideally
 * attempt to construct the sparse matrix incrementally without realising the whole sequence at once.
 * 
 * May return nil if no sparse conversion is available.
 * @interface
 */
clojure.core.matrix.protocols.PSparse = function(){};

/**
 * Attempts to coerce data to a sparse array of implementation m. May return nil if not supported
 */
clojure.core.matrix.protocols.sparse_coerce = (function clojure$core$matrix$protocols$sparse_coerce(m,data){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PSparse$sparse_coerce$arity$2 == null))))){
return m.clojure$core$matrix$protocols$PSparse$sparse_coerce$arity$2(m,data);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.sparse_coerce[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,data);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.sparse_coerce["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,data);
} else {
throw cljs.core.missing_protocol.call(null,"PSparse.sparse-coerce",m);
}
}
}
});

/**
 * Attempts to make array into a sparse format. Must return the same array unchanged if not possible.
 */
clojure.core.matrix.protocols.sparse = (function clojure$core$matrix$protocols$sparse(m){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PSparse$sparse$arity$1 == null))))){
return m.clojure$core$matrix$protocols$PSparse$sparse$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.sparse[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.sparse["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"PSparse.sparse",m);
}
}
}
});


/**
 * Protocol for creating and handling native arrays. Implementations must return a native format array if they
 * are able to, or nil otherwise.
 * @interface
 */
clojure.core.matrix.protocols.PNative = function(){};

/**
 * Attempts to coerce data to a native array of implementation m. May return nil if not supported
 */
clojure.core.matrix.protocols.native$ = (function clojure$core$matrix$protocols$native(m){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PNative$native$arity$1 == null))))){
return m.clojure$core$matrix$protocols$PNative$native$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.native$[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.native$["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"PNative.native",m);
}
}
}
});

/**
 * Returns true if an array is in a native format, false otherwise.
 */
clojure.core.matrix.protocols.native_QMARK_ = (function clojure$core$matrix$protocols$native_QMARK_(m){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PNative$native_QMARK_$arity$1 == null))))){
return m.clojure$core$matrix$protocols$PNative$native_QMARK_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.native_QMARK_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.native_QMARK_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"PNative.native?",m);
}
}
}
});


/**
 * Protocol for constructing a dense array from the given data.
 * @interface
 */
clojure.core.matrix.protocols.PDense = function(){};

/**
 * Attempts to coerce data to a dense array of implementation m. May return nil if not supported
 */
clojure.core.matrix.protocols.dense_coerce = (function clojure$core$matrix$protocols$dense_coerce(m,data){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PDense$dense_coerce$arity$2 == null))))){
return m.clojure$core$matrix$protocols$PDense$dense_coerce$arity$2(m,data);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.dense_coerce[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,data);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.dense_coerce["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,data);
} else {
throw cljs.core.missing_protocol.call(null,"PDense.dense-coerce",m);
}
}
}
});

/**
 * Attempts to make array into a dense format. Must return the same array unchanged if not possible.
 */
clojure.core.matrix.protocols.dense = (function clojure$core$matrix$protocols$dense(m){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PDense$dense$arity$1 == null))))){
return m.clojure$core$matrix$protocols$PDense$dense$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.dense[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.dense["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"PDense.dense",m);
}
}
}
});


/**
 * Protocol for creating an immutable copy of a matrix. If implemented, must return a fully immutable
 * copy of the given matrix.
 * 
 * The default implementation will attempt to choose a suitable immutable matrix implementation.
 * @interface
 */
clojure.core.matrix.protocols.PImmutableMatrixConstruction = function(){};

clojure.core.matrix.protocols.immutable_matrix = (function clojure$core$matrix$protocols$immutable_matrix(m){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PImmutableMatrixConstruction$immutable_matrix$arity$1 == null))))){
return m.clojure$core$matrix$protocols$PImmutableMatrixConstruction$immutable_matrix$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.immutable_matrix[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.immutable_matrix["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"PImmutableMatrixConstruction.immutable-matrix",m);
}
}
}
});


/**
 * @interface
 */
clojure.core.matrix.protocols.PZeroDimensionConstruction = function(){};

/**
 * Construct a new zero-dimensional array with the specified scalar value (zero if not specified)
 */
clojure.core.matrix.protocols.new_scalar_array = (function clojure$core$matrix$protocols$new_scalar_array(var_args){
var G__22019 = arguments.length;
switch (G__22019) {
case 1:
return clojure.core.matrix.protocols.new_scalar_array.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.protocols.new_scalar_array.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.core.matrix.protocols.new_scalar_array.cljs$core$IFn$_invoke$arity$1 = (function (m){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PZeroDimensionConstruction$new_scalar_array$arity$1 == null))))){
return m.clojure$core$matrix$protocols$PZeroDimensionConstruction$new_scalar_array$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.new_scalar_array[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.new_scalar_array["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"PZeroDimensionConstruction.new-scalar-array",m);
}
}
}
});

clojure.core.matrix.protocols.new_scalar_array.cljs$core$IFn$_invoke$arity$2 = (function (m,value){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PZeroDimensionConstruction$new_scalar_array$arity$2 == null))))){
return m.clojure$core$matrix$protocols$PZeroDimensionConstruction$new_scalar_array$arity$2(m,value);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.new_scalar_array[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,value);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.new_scalar_array["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,value);
} else {
throw cljs.core.missing_protocol.call(null,"PZeroDimensionConstruction.new-scalar-array",m);
}
}
}
});

clojure.core.matrix.protocols.new_scalar_array.cljs$lang$maxFixedArity = 2;



/**
 * Protocol for accessing the scalar value in zero-dimensional arrays. Zero dimensional arrays differ
 * from scalar values in the following two senses:
 *  - They may be mutable (in which case set-0d! is expected to work)
 *  - They are not considered themselves to be scalars. Hence you must use get-0d to access the
 *    contained scalar value
 * @interface
 */
clojure.core.matrix.protocols.PZeroDimensionAccess = function(){};

/**
 * Gets the scalar value in an 0d array.
 */
clojure.core.matrix.protocols.get_0d = (function clojure$core$matrix$protocols$get_0d(m){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PZeroDimensionAccess$get_0d$arity$1 == null))))){
return m.clojure$core$matrix$protocols$PZeroDimensionAccess$get_0d$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.get_0d[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.get_0d["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"PZeroDimensionAccess.get-0d",m);
}
}
}
});

/**
 * Sets the scalar value in the 0d array to a given value. Throws an error if not mutable.
 */
clojure.core.matrix.protocols.set_0d_BANG_ = (function clojure$core$matrix$protocols$set_0d_BANG_(m,value){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PZeroDimensionAccess$set_0d_BANG_$arity$2 == null))))){
return m.clojure$core$matrix$protocols$PZeroDimensionAccess$set_0d_BANG_$arity$2(m,value);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.set_0d_BANG_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,value);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.set_0d_BANG_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,value);
} else {
throw cljs.core.missing_protocol.call(null,"PZeroDimensionAccess.set-0d!",m);
}
}
}
});


/**
 * Protocol for setting the scalar value in zero-dimensional arrays.
 * @interface
 */
clojure.core.matrix.protocols.PZeroDimensionSet = function(){};

/**
 * Sets the scalar value in a 0-d array, returning a new 0-d array
 */
clojure.core.matrix.protocols.set_0d = (function clojure$core$matrix$protocols$set_0d(m,value){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PZeroDimensionSet$set_0d$arity$2 == null))))){
return m.clojure$core$matrix$protocols$PZeroDimensionSet$set_0d$arity$2(m,value);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.set_0d[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,value);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.set_0d["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,value);
} else {
throw cljs.core.missing_protocol.call(null,"PZeroDimensionSet.set-0d",m);
}
}
}
});


/**
 * Protocol for construction of special matrices.
 * @interface
 */
clojure.core.matrix.protocols.PSpecialisedConstructors = function(){};

/**
 * Create a 2D identity matrix with the given number of dimensions
 */
clojure.core.matrix.protocols.identity_matrix = (function clojure$core$matrix$protocols$identity_matrix(m,dims){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PSpecialisedConstructors$identity_matrix$arity$2 == null))))){
return m.clojure$core$matrix$protocols$PSpecialisedConstructors$identity_matrix$arity$2(m,dims);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.identity_matrix[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,dims);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.identity_matrix["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,dims);
} else {
throw cljs.core.missing_protocol.call(null,"PSpecialisedConstructors.identity-matrix",m);
}
}
}
});

/**
 * Create a diagonal matrix with the specified leading diagonal values
 */
clojure.core.matrix.protocols.diagonal_matrix = (function clojure$core$matrix$protocols$diagonal_matrix(m,diagonal_values){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PSpecialisedConstructors$diagonal_matrix$arity$2 == null))))){
return m.clojure$core$matrix$protocols$PSpecialisedConstructors$diagonal_matrix$arity$2(m,diagonal_values);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.diagonal_matrix[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,diagonal_values);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.diagonal_matrix["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,diagonal_values);
} else {
throw cljs.core.missing_protocol.call(null,"PSpecialisedConstructors.diagonal-matrix",m);
}
}
}
});


/**
 * Protocol for construction of a permutation matrix.
 * @interface
 */
clojure.core.matrix.protocols.PPermutationMatrix = function(){};

clojure.core.matrix.protocols.permutation_matrix = (function clojure$core$matrix$protocols$permutation_matrix(m,permutation){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PPermutationMatrix$permutation_matrix$arity$2 == null))))){
return m.clojure$core$matrix$protocols$PPermutationMatrix$permutation_matrix$arity$2(m,permutation);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.permutation_matrix[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,permutation);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.permutation_matrix["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,permutation);
} else {
throw cljs.core.missing_protocol.call(null,"PPermutationMatrix.permutation-matrix",m);
}
}
}
});


/**
 * Protocol for construction of a block diagonal matrix.
 * @interface
 */
clojure.core.matrix.protocols.PBlockDiagonalMatrix = function(){};

clojure.core.matrix.protocols.block_diagonal_matrix = (function clojure$core$matrix$protocols$block_diagonal_matrix(m,blocks){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PBlockDiagonalMatrix$block_diagonal_matrix$arity$2 == null))))){
return m.clojure$core$matrix$protocols$PBlockDiagonalMatrix$block_diagonal_matrix$arity$2(m,blocks);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.block_diagonal_matrix[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,blocks);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.block_diagonal_matrix["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,blocks);
} else {
throw cljs.core.missing_protocol.call(null,"PBlockDiagonalMatrix.block-diagonal-matrix",m);
}
}
}
});


/**
 * Protocol to coerce a parameter to a format used by a specific implementation. It is
 * up to the implementation to determine what parameter types they support.
 * If the implementation is unable to perform coercion, it must return nil.
 * 
 * Implementations are encouraged to avoid taking a full copy of the data, for performance reasons.
 * It is preferable to use structural sharing with the original data if possible.
 * 
 * If coercion is impossible (e.g. param has an invalid shape or element types) then the
 * implementation *may* throw an exception, though it may also return nil to get default behaviour,
 * which should implement any expected exceptions.
 * 
 * If an implementation implements coercion via copying, then it is recommended that conversion
 * should be to the most efficient packed representation (i.e. as defined by 'pack')
 * 
 * Implementations must also be able to coerce valid scalar values (presumably via the identity function)
 * @interface
 */
clojure.core.matrix.protocols.PCoercion = function(){};

/**
 * Attempts to coerce param into a matrix format supported by the implementation of matrix m.
 *   May return nil if unable to do so, in which case a default implementation can be used.
 */
clojure.core.matrix.protocols.coerce_param = (function clojure$core$matrix$protocols$coerce_param(m,param){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PCoercion$coerce_param$arity$2 == null))))){
return m.clojure$core$matrix$protocols$PCoercion$coerce_param$arity$2(m,param);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.coerce_param[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,param);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.coerce_param["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,param);
} else {
throw cljs.core.missing_protocol.call(null,"PCoercion.coerce-param",m);
}
}
}
});


/**
 * Protocol to support broadcasting over one or more dimensions.
 * @interface
 */
clojure.core.matrix.protocols.PBroadcast = function(){};

/**
 * Broadcasts an array over a desired target shape, which should be larger than the current matrix.
 *   Dimensions should be matched up according to the last dimension.
 *   In order to broadcast sucessfully, the current dimension of the array must be either:
 *    - of size 1
 *    - equal to the size of the dimension in the target shape
 *    - not included in the array (i.e. the target shape has more leading dimensions)
 * 
 *   If broadcasting is not possible, an exception must be thrown.
 * 
 *   Broadcasting may return either a view with replicated element or a new immutable matrix.
 */
clojure.core.matrix.protocols.broadcast = (function clojure$core$matrix$protocols$broadcast(m,target_shape){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PBroadcast$broadcast$arity$2 == null))))){
return m.clojure$core$matrix$protocols$PBroadcast$broadcast$arity$2(m,target_shape);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.broadcast[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,target_shape);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.broadcast["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,target_shape);
} else {
throw cljs.core.missing_protocol.call(null,"PBroadcast.broadcast",m);
}
}
}
});


/**
 * Protocol to broadcast into a given matrix shape. May also perform coercion if needed by the implementation.
 * @interface
 */
clojure.core.matrix.protocols.PBroadcastLike = function(){};

clojure.core.matrix.protocols.broadcast_like = (function clojure$core$matrix$protocols$broadcast_like(m,a){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PBroadcastLike$broadcast_like$arity$2 == null))))){
return m.clojure$core$matrix$protocols$PBroadcastLike$broadcast_like$arity$2(m,a);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.broadcast_like[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,a);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.broadcast_like["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,a);
} else {
throw cljs.core.missing_protocol.call(null,"PBroadcastLike.broadcast-like",m);
}
}
}
});


/**
 * Protocol to broadcast into a given matrix shape and perform coercion in one step.
 * 
 * Equivalent to (coerce m (broadcast-like m a)) but likely to be more efficient.
 * @interface
 */
clojure.core.matrix.protocols.PBroadcastCoerce = function(){};

/**
 * Broadcasts and coerces a to the same shape and implementation as m
 */
clojure.core.matrix.protocols.broadcast_coerce = (function clojure$core$matrix$protocols$broadcast_coerce(m,a){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PBroadcastCoerce$broadcast_coerce$arity$2 == null))))){
return m.clojure$core$matrix$protocols$PBroadcastCoerce$broadcast_coerce$arity$2(m,a);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.broadcast_coerce[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,a);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.broadcast_coerce["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,a);
} else {
throw cljs.core.missing_protocol.call(null,"PBroadcastCoerce.broadcast-coerce",m);
}
}
}
});


/**
 * Protocol to allow conversion to Clojure-friendly vector format. Optional for implementers,
 * however providing an efficient implementation is strongly encouraged to enable fast interop
 * with Clojure vectors.
 * @interface
 */
clojure.core.matrix.protocols.PConversion = function(){};

/**
 * Converts an array to nested Clojure persistent vectors
 */
clojure.core.matrix.protocols.convert_to_nested_vectors = (function clojure$core$matrix$protocols$convert_to_nested_vectors(m){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PConversion$convert_to_nested_vectors$arity$1 == null))))){
return m.clojure$core$matrix$protocols$PConversion$convert_to_nested_vectors$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.convert_to_nested_vectors[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.convert_to_nested_vectors["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"PConversion.convert-to-nested-vectors",m);
}
}
}
});


/**
 * Protocol to reshape matrices. Should support any new shape allowed by the implementation.
 * Must preserve row-major ordering of matrix elements.
 * If the original matrix is mutable, must return a new mutable copy of data.
 * If the new shape has less elements than the original shape, it is OK to truncate the remaining elements.
 * If the new shape requires more elements than the original shape, should throw an exception.
 * @interface
 */
clojure.core.matrix.protocols.PReshaping = function(){};

clojure.core.matrix.protocols.reshape = (function clojure$core$matrix$protocols$reshape(m,shape){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PReshaping$reshape$arity$2 == null))))){
return m.clojure$core$matrix$protocols$PReshaping$reshape$arity$2(m,shape);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.reshape[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,shape);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.reshape["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,shape);
} else {
throw cljs.core.missing_protocol.call(null,"PReshaping.reshape",m);
}
}
}
});


/**
 * Protocol to reshape matrices. Guarantees a view over the original data if mutable.
 * If the new shape has less elements than the original shape, must truncate the remaining elements.
 * Behaviour is undefined if the new shape requires more elements than the original shape.
 * @interface
 */
clojure.core.matrix.protocols.PReshapeView = function(){};

clojure.core.matrix.protocols.reshape_view = (function clojure$core$matrix$protocols$reshape_view(m,shape){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PReshapeView$reshape_view$arity$2 == null))))){
return m.clojure$core$matrix$protocols$PReshapeView$reshape_view$arity$2(m,shape);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.reshape_view[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,shape);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.reshape_view["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,shape);
} else {
throw cljs.core.missing_protocol.call(null,"PReshapeView.reshape-view",m);
}
}
}
});


/**
 * Protocol to efficiently pack an array, according to the most efficient representation for a given
 * implementation.
 * 
 * Definition of pack is up to the implementation to interpret, but the general rules are:
 * 1. Must not change the value of the array for comparison purposes
 * 2. Must not change the shape of the array
 * 3. May preserve sparse representation
 * 4. Should convert to most efficient format for common operations (e.g. mget, inner-product)
 * @interface
 */
clojure.core.matrix.protocols.PPack = function(){};

clojure.core.matrix.protocols.pack = (function clojure$core$matrix$protocols$pack(m){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PPack$pack$arity$1 == null))))){
return m.clojure$core$matrix$protocols$PPack$pack$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.pack[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.pack["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"PPack.pack",m);
}
}
}
});


/**
 * Protocol to test if two arrays have the same shape. Implementations may have an optimised
 * method for shape equality tests, and this is a frequently required operations so it may
 * make sense to provide an optimised implementation.
 * @interface
 */
clojure.core.matrix.protocols.PSameShape = function(){};

clojure.core.matrix.protocols.same_shape_QMARK_ = (function clojure$core$matrix$protocols$same_shape_QMARK_(a,b){
if(((!((a == null))) && (!((a.clojure$core$matrix$protocols$PSameShape$same_shape_QMARK_$arity$2 == null))))){
return a.clojure$core$matrix$protocols$PSameShape$same_shape_QMARK_$arity$2(a,b);
} else {
var x__4211__auto__ = (((a == null))?null:a);
var m__4212__auto__ = (clojure.core.matrix.protocols.same_shape_QMARK_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,a,b);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.same_shape_QMARK_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,a,b);
} else {
throw cljs.core.missing_protocol.call(null,"PSameShape.same-shape?",a);
}
}
}
});


/**
 * Protocol to support getting slices of an array.  If implemented, must return either a view, a scalar
 * or an immutable sub-matrix: it must *not* return copied data. i.e. making a full copy must be avoided.
 * @interface
 */
clojure.core.matrix.protocols.PMatrixSlices = function(){};

/**
 * Gets a row of a matrix with the given row index.
 */
clojure.core.matrix.protocols.get_row = (function clojure$core$matrix$protocols$get_row(m,i){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PMatrixSlices$get_row$arity$2 == null))))){
return m.clojure$core$matrix$protocols$PMatrixSlices$get_row$arity$2(m,i);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.get_row[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,i);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.get_row["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,i);
} else {
throw cljs.core.missing_protocol.call(null,"PMatrixSlices.get-row",m);
}
}
}
});

/**
 * Gets a column of a matrix with the given row index.
 */
clojure.core.matrix.protocols.get_column = (function clojure$core$matrix$protocols$get_column(m,i){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PMatrixSlices$get_column$arity$2 == null))))){
return m.clojure$core$matrix$protocols$PMatrixSlices$get_column$arity$2(m,i);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.get_column[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,i);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.get_column["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,i);
} else {
throw cljs.core.missing_protocol.call(null,"PMatrixSlices.get-column",m);
}
}
}
});

/**
 * Gets the major slice of an array with the given index. For a 2D matrix, equivalent to get-row
 */
clojure.core.matrix.protocols.get_major_slice = (function clojure$core$matrix$protocols$get_major_slice(m,i){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PMatrixSlices$get_major_slice$arity$2 == null))))){
return m.clojure$core$matrix$protocols$PMatrixSlices$get_major_slice$arity$2(m,i);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.get_major_slice[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,i);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.get_major_slice["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,i);
} else {
throw cljs.core.missing_protocol.call(null,"PMatrixSlices.get-major-slice",m);
}
}
}
});

/**
 * Gets a slice of an array along a specified dimension with the given index.
 */
clojure.core.matrix.protocols.get_slice = (function clojure$core$matrix$protocols$get_slice(m,dimension,i){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PMatrixSlices$get_slice$arity$3 == null))))){
return m.clojure$core$matrix$protocols$PMatrixSlices$get_slice$arity$3(m,dimension,i);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.get_slice[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,dimension,i);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.get_slice["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,dimension,i);
} else {
throw cljs.core.missing_protocol.call(null,"PMatrixSlices.get-slice",m);
}
}
}
});


/**
 * Protocol for accessing rows of a matrix
 * @interface
 */
clojure.core.matrix.protocols.PMatrixRows = function(){};

/**
 * Returns the rows of a matrix, as a seqable object
 */
clojure.core.matrix.protocols.get_rows = (function clojure$core$matrix$protocols$get_rows(m){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PMatrixRows$get_rows$arity$1 == null))))){
return m.clojure$core$matrix$protocols$PMatrixRows$get_rows$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.get_rows[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.get_rows["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"PMatrixRows.get-rows",m);
}
}
}
});


/**
 * Protocol for accessing columns of a matrix
 * @interface
 */
clojure.core.matrix.protocols.PMatrixColumns = function(){};

/**
 * Returns the columns of a matrix, as a seqable object
 */
clojure.core.matrix.protocols.get_columns = (function clojure$core$matrix$protocols$get_columns(m){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PMatrixColumns$get_columns$arity$1 == null))))){
return m.clojure$core$matrix$protocols$PMatrixColumns$get_columns$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.get_columns[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.get_columns["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"PMatrixColumns.get-columns",m);
}
}
}
});


/**
 * Protocol for quick view access into a row-major slices of an array. If implemented, must return
 * either a view or an immutable sub-matrix: it must *not* return copied data.
 * 
 * If the matrix is mutable, it must return a mutable view.
 * 
 * The default implementation creates a wrapper view.
 * @interface
 */
clojure.core.matrix.protocols.PSliceView = function(){};

/**
 * Gets a view of a major array slice
 */
clojure.core.matrix.protocols.get_major_slice_view = (function clojure$core$matrix$protocols$get_major_slice_view(m,i){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PSliceView$get_major_slice_view$arity$2 == null))))){
return m.clojure$core$matrix$protocols$PSliceView$get_major_slice_view$arity$2(m,i);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.get_major_slice_view[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,i);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.get_major_slice_view["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,i);
} else {
throw cljs.core.missing_protocol.call(null,"PSliceView.get-major-slice-view",m);
}
}
}
});


/**
 * Protocol for quick view access into a slices of an array. If implemented, must return
 * either a view or an immutable sub-matrix: it must *not* return copied data.
 * 
 * If the matrix is mutable, it must return a mutable view.
 * 
 * The default implementation creates a wrapper view.
 * @interface
 */
clojure.core.matrix.protocols.PSliceView2 = function(){};

/**
 * Gets a view of an array slice along the specified dimension.
 */
clojure.core.matrix.protocols.get_slice_view = (function clojure$core$matrix$protocols$get_slice_view(m,dim,i){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PSliceView2$get_slice_view$arity$3 == null))))){
return m.clojure$core$matrix$protocols$PSliceView2$get_slice_view$arity$3(m,dim,i);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.get_slice_view[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,dim,i);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.get_slice_view["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,dim,i);
} else {
throw cljs.core.missing_protocol.call(null,"PSliceView2.get-slice-view",m);
}
}
}
});


/**
 * Returns the row-major slices of the array as a sequence.
 * 
 * These must be views or immutable sub-arrays for higher order slices, or scalars
 * for the slices of a 1D vector.
 * 
 * The default implementation uses get-major-slice-view to obtain the slices.
 * @interface
 */
clojure.core.matrix.protocols.PSliceSeq = function(){};

/**
 * Gets a sequence of all major array slices
 */
clojure.core.matrix.protocols.get_major_slice_seq = (function clojure$core$matrix$protocols$get_major_slice_seq(m){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PSliceSeq$get_major_slice_seq$arity$1 == null))))){
return m.clojure$core$matrix$protocols$PSliceSeq$get_major_slice_seq$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.get_major_slice_seq[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.get_major_slice_seq["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"PSliceSeq.get-major-slice-seq",m);
}
}
}
});


/**
 * Returns slices of the array as a sequence.
 * 
 * These must be views or immutable sub-arrays for higher order slices, or scalars
 * for the slices of a 1D vector.
 * @interface
 */
clojure.core.matrix.protocols.PSliceSeq2 = function(){};

/**
 * Gets a sequence of all array slices
 */
clojure.core.matrix.protocols.get_slice_seq = (function clojure$core$matrix$protocols$get_slice_seq(m,dim){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PSliceSeq2$get_slice_seq$arity$2 == null))))){
return m.clojure$core$matrix$protocols$PSliceSeq2$get_slice_seq$arity$2(m,dim);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.get_slice_seq[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,dim);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.get_slice_seq["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,dim);
} else {
throw cljs.core.missing_protocol.call(null,"PSliceSeq2.get-slice-seq",m);
}
}
}
});


/**
 * Returns the row-major slice views of the array.
 * 
 * These must be arrays if the array is mutable, i.e. slices of a 1D vector
 * must be 0-dimensional mutable arrays.
 * @interface
 */
clojure.core.matrix.protocols.PSliceViewSeq = function(){};

/**
 * Gets a sequence of all major array slices
 */
clojure.core.matrix.protocols.get_major_slice_view_seq = (function clojure$core$matrix$protocols$get_major_slice_view_seq(m){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PSliceViewSeq$get_major_slice_view_seq$arity$1 == null))))){
return m.clojure$core$matrix$protocols$PSliceViewSeq$get_major_slice_view_seq$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.get_major_slice_view_seq[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.get_major_slice_view_seq["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"PSliceViewSeq.get-major-slice-view-seq",m);
}
}
}
});


/**
 * Protocol for concatenating / joining arrays.
 * @interface
 */
clojure.core.matrix.protocols.PSliceJoin = function(){};

/**
 * Concatenates a to m, along the major slice dimension
 */
clojure.core.matrix.protocols.join = (function clojure$core$matrix$protocols$join(m,a){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PSliceJoin$join$arity$2 == null))))){
return m.clojure$core$matrix$protocols$PSliceJoin$join$arity$2(m,a);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.join[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,a);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.join["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,a);
} else {
throw cljs.core.missing_protocol.call(null,"PSliceJoin.join",m);
}
}
}
});


/**
 * Protocol for concatenating / joining arrays.
 * @interface
 */
clojure.core.matrix.protocols.PSliceJoinAlong = function(){};

/**
 * Concatenates a to m, along the slice dimension dim
 */
clojure.core.matrix.protocols.join_along = (function clojure$core$matrix$protocols$join_along(m,a,dim){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PSliceJoinAlong$join_along$arity$3 == null))))){
return m.clojure$core$matrix$protocols$PSliceJoinAlong$join_along$arity$3(m,a,dim);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.join_along[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,a,dim);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.join_along["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,a,dim);
} else {
throw cljs.core.missing_protocol.call(null,"PSliceJoinAlong.join-along",m);
}
}
}
});


/**
 * Protocol for getting a sub-vector view of a vector. Must return a mutable view
 * if the original vector is mutable. Should throw an exception if the specified
 * subvector is out of bounds for the target vector.
 * @interface
 */
clojure.core.matrix.protocols.PSubVector = function(){};

/**
 * Gets a sub-vector of a vector. Must return a view if the vector is mutable.
 */
clojure.core.matrix.protocols.subvector = (function clojure$core$matrix$protocols$subvector(m,start,length){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PSubVector$subvector$arity$3 == null))))){
return m.clojure$core$matrix$protocols$PSubVector$subvector$arity$3(m,start,length);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.subvector[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,start,length);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.subvector["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,start,length);
} else {
throw cljs.core.missing_protocol.call(null,"PSubVector.subvector",m);
}
}
}
});


/**
 * Protocol for picking out subsections of a 2D matrix. Should return a mutable view if possible.
 * The default implementation creates a new vector containing the diagonal values.
 * @interface
 */
clojure.core.matrix.protocols.PMatrixSubComponents = function(){};

/**
 * Returns the main (leading) diagonal of a matrix.
 */
clojure.core.matrix.protocols.main_diagonal = (function clojure$core$matrix$protocols$main_diagonal(m){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PMatrixSubComponents$main_diagonal$arity$1 == null))))){
return m.clojure$core$matrix$protocols$PMatrixSubComponents$main_diagonal$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.main_diagonal[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.main_diagonal["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"PMatrixSubComponents.main-diagonal",m);
}
}
}
});


/**
 * Protocol for determining if an array is in a sparse format. It is up to the implementation to define
 * its own sparse formats, but in general the intention should be that a sparse array uses significantly
 * less storage than an equivalent dense array, assuming a high proportion of zero values in the array.
 * @interface
 */
clojure.core.matrix.protocols.PSparseArray = function(){};

/**
 * Returns true if the array is in a sparse format, as defined by the implementation.
 */
clojure.core.matrix.protocols.is_sparse_QMARK_ = (function clojure$core$matrix$protocols$is_sparse_QMARK_(m){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PSparseArray$is_sparse_QMARK_$arity$1 == null))))){
return m.clojure$core$matrix$protocols$PSparseArray$is_sparse_QMARK_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.is_sparse_QMARK_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.is_sparse_QMARK_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"PSparseArray.is-sparse?",m);
}
}
}
});


/**
 * Protocol for constructing sparse arrays. Should return nil if the sparse array shape is not supported.
 * @interface
 */
clojure.core.matrix.protocols.PNewSparseArray = function(){};

/**
 * Creates a new sparse array with the given shape.
 */
clojure.core.matrix.protocols.new_sparse_array = (function clojure$core$matrix$protocols$new_sparse_array(m,shape){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PNewSparseArray$new_sparse_array$arity$2 == null))))){
return m.clojure$core$matrix$protocols$PNewSparseArray$new_sparse_array$arity$2(m,shape);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.new_sparse_array[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,shape);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.new_sparse_array["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,shape);
} else {
throw cljs.core.missing_protocol.call(null,"PNewSparseArray.new-sparse-array",m);
}
}
}
});


/**
 * Protocol for counting the number of zeros in a numerical array. Must return an integer value
 * representing the precise number of zeros.
 * @interface
 */
clojure.core.matrix.protocols.PZeroCount = function(){};

/**
 * Returns the number of zeros in the array
 */
clojure.core.matrix.protocols.zero_count = (function clojure$core$matrix$protocols$zero_count(m){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PZeroCount$zero_count$arity$1 == null))))){
return m.clojure$core$matrix$protocols$PZeroCount$zero_count$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.zero_count[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.zero_count["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"PZeroCount.zero-count",m);
}
}
}
});


/**
 * Protocol for assigning values element-wise to mutable arrays.
 * @interface
 */
clojure.core.matrix.protocols.PAssignment = function(){};

/**
 * Sets all the values in an array from a given source. Source may be a scalar
 *   or any smaller array that can be broadcast to the shape of m.
 */
clojure.core.matrix.protocols.assign_BANG_ = (function clojure$core$matrix$protocols$assign_BANG_(m,source){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PAssignment$assign_BANG_$arity$2 == null))))){
return m.clojure$core$matrix$protocols$PAssignment$assign_BANG_$arity$2(m,source);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.assign_BANG_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,source);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.assign_BANG_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,source);
} else {
throw cljs.core.missing_protocol.call(null,"PAssignment.assign!",m);
}
}
}
});

/**
 * Sets the elements in an array from a Java array source, in row-major order.
 */
clojure.core.matrix.protocols.assign_array_BANG_ = (function clojure$core$matrix$protocols$assign_array_BANG_(var_args){
var G__22022 = arguments.length;
switch (G__22022) {
case 2:
return clojure.core.matrix.protocols.assign_array_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return clojure.core.matrix.protocols.assign_array_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.core.matrix.protocols.assign_array_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (m,arr){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PAssignment$assign_array_BANG_$arity$2 == null))))){
return m.clojure$core$matrix$protocols$PAssignment$assign_array_BANG_$arity$2(m,arr);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.assign_array_BANG_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,arr);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.assign_array_BANG_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,arr);
} else {
throw cljs.core.missing_protocol.call(null,"PAssignment.assign-array!",m);
}
}
}
});

clojure.core.matrix.protocols.assign_array_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (m,arr,start,length){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PAssignment$assign_array_BANG_$arity$4 == null))))){
return m.clojure$core$matrix$protocols$PAssignment$assign_array_BANG_$arity$4(m,arr,start,length);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.assign_array_BANG_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,arr,start,length);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.assign_array_BANG_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,arr,start,length);
} else {
throw cljs.core.missing_protocol.call(null,"PAssignment.assign-array!",m);
}
}
}
});

clojure.core.matrix.protocols.assign_array_BANG_.cljs$lang$maxFixedArity = 4;



/**
 * Protocol for assigning values element-wise to an array, broadcasting as needed.
 * @interface
 */
clojure.core.matrix.protocols.PImmutableAssignment = function(){};

/**
 * Sets all the values in an array from a given source. Source may be a scalar
 *   or a smaller array that can be broadcast to the shape of m.
 */
clojure.core.matrix.protocols.assign = (function clojure$core$matrix$protocols$assign(m,source){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PImmutableAssignment$assign$arity$2 == null))))){
return m.clojure$core$matrix$protocols$PImmutableAssignment$assign$arity$2(m,source);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.assign[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,source);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.assign["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,source);
} else {
throw cljs.core.missing_protocol.call(null,"PImmutableAssignment.assign",m);
}
}
}
});


/**
 * @interface
 */
clojure.core.matrix.protocols.PMutableFill = function(){};

/**
 * Fills the array with the given scalar value.
 */
clojure.core.matrix.protocols.fill_BANG_ = (function clojure$core$matrix$protocols$fill_BANG_(m,value){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PMutableFill$fill_BANG_$arity$2 == null))))){
return m.clojure$core$matrix$protocols$PMutableFill$fill_BANG_$arity$2(m,value);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.fill_BANG_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,value);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.fill_BANG_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,value);
} else {
throw cljs.core.missing_protocol.call(null,"PMutableFill.fill!",m);
}
}
}
});


/**
 * Protocol for getting element data as a flattened double array
 * @interface
 */
clojure.core.matrix.protocols.PDoubleArrayOutput = function(){};

/**
 * Returns a new double array containing the values of m in row-major order. May or may not be
 *   the internal double array used by m, depending on the implementation, but if it is the internal array
 *   this should be the same array returned by 'as-double-array'. This should in general be the most
 *   efficient way of getting a double array.
 */
clojure.core.matrix.protocols.to_double_array = (function clojure$core$matrix$protocols$to_double_array(m){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PDoubleArrayOutput$to_double_array$arity$1 == null))))){
return m.clojure$core$matrix$protocols$PDoubleArrayOutput$to_double_array$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.to_double_array[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.to_double_array["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"PDoubleArrayOutput.to-double-array",m);
}
}
}
});

/**
 * Returns the internal double array used by m. If no such array is used, returns nil.
 *   Provides an opportunity to avoid copying the internal array.
 */
clojure.core.matrix.protocols.as_double_array = (function clojure$core$matrix$protocols$as_double_array(m){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PDoubleArrayOutput$as_double_array$arity$1 == null))))){
return m.clojure$core$matrix$protocols$PDoubleArrayOutput$as_double_array$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.as_double_array[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.as_double_array["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"PDoubleArrayOutput.as-double-array",m);
}
}
}
});


/**
 * Protocol for getting element data as a flattened object array
 * @interface
 */
clojure.core.matrix.protocols.PObjectArrayOutput = function(){};

/**
 * Returns an object array containing the values of m in row-major order. May or may not be
 *   the internal object array used by m, depending on the implementation.
 */
clojure.core.matrix.protocols.to_object_array = (function clojure$core$matrix$protocols$to_object_array(m){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PObjectArrayOutput$to_object_array$arity$1 == null))))){
return m.clojure$core$matrix$protocols$PObjectArrayOutput$to_object_array$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.to_object_array[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.to_object_array["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"PObjectArrayOutput.to-object-array",m);
}
}
}
});

/**
 * Returns the internal object array used by m. If no such array is used, returns nil.
 *   Provides an opportunity to avoid copying the internal array.
 */
clojure.core.matrix.protocols.as_object_array = (function clojure$core$matrix$protocols$as_object_array(m){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PObjectArrayOutput$as_object_array$arity$1 == null))))){
return m.clojure$core$matrix$protocols$PObjectArrayOutput$as_object_array$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.as_object_array[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.as_object_array["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"PObjectArrayOutput.as-object-array",m);
}
}
}
});


/**
 * Protocol for comparing two arrays, with the semantics of clojure.core/=.
 * Must return false if the arrays are not of equal shape, or if any elements are not equal.
 * @interface
 */
clojure.core.matrix.protocols.PValueEquality = function(){};

/**
 * Returns true if two arrays are equal both in shape and according to clojure.core/= for each element.
 */
clojure.core.matrix.protocols.value_equals = (function clojure$core$matrix$protocols$value_equals(m,a){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PValueEquality$value_equals$arity$2 == null))))){
return m.clojure$core$matrix$protocols$PValueEquality$value_equals$arity$2(m,a);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.value_equals[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,a);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.value_equals["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,a);
} else {
throw cljs.core.missing_protocol.call(null,"PValueEquality.value-equals",m);
}
}
}
});


/**
 * Protocol for numerical array equality operations.
 * @interface
 */
clojure.core.matrix.protocols.PMatrixEquality = function(){};

/**
 * Return true if a equals b, i.e. if a and b have the same shape and all elements are equal.
 *   Must use numerical value comparison on numbers (==) to account for matrices that may hold a mix of
 *   numercial types (e.g. java.lang.Long and java.lang.Double). Implementations that only support doubles
 *   should use Number.doubleValue() to get a numeric value to compare.
 *   May throw an exception if the matrices are non-numeric
 */
clojure.core.matrix.protocols.matrix_equals = (function clojure$core$matrix$protocols$matrix_equals(a,b){
if(((!((a == null))) && (!((a.clojure$core$matrix$protocols$PMatrixEquality$matrix_equals$arity$2 == null))))){
return a.clojure$core$matrix$protocols$PMatrixEquality$matrix_equals$arity$2(a,b);
} else {
var x__4211__auto__ = (((a == null))?null:a);
var m__4212__auto__ = (clojure.core.matrix.protocols.matrix_equals[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,a,b);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.matrix_equals["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,a,b);
} else {
throw cljs.core.missing_protocol.call(null,"PMatrixEquality.matrix-equals",a);
}
}
}
});


/**
 * Protocol for numerical array equality operations with a specified tolerance. Arrays are defined as equal
 * if the array shapes are the same and and for all corresponding elements ai and bi we have: |ai-bi|<=eps
 * 
 * Should be equivalent to PMatrixEquality when eps is zero.
 * @interface
 */
clojure.core.matrix.protocols.PMatrixEqualityEpsilon = function(){};

/**
 * As matrix-equals, but provides a numerical tolerance for equality testing.
 */
clojure.core.matrix.protocols.matrix_equals_epsilon = (function clojure$core$matrix$protocols$matrix_equals_epsilon(a,b,eps){
if(((!((a == null))) && (!((a.clojure$core$matrix$protocols$PMatrixEqualityEpsilon$matrix_equals_epsilon$arity$3 == null))))){
return a.clojure$core$matrix$protocols$PMatrixEqualityEpsilon$matrix_equals_epsilon$arity$3(a,b,eps);
} else {
var x__4211__auto__ = (((a == null))?null:a);
var m__4212__auto__ = (clojure.core.matrix.protocols.matrix_equals_epsilon[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,a,b,eps);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.matrix_equals_epsilon["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,a,b,eps);
} else {
throw cljs.core.missing_protocol.call(null,"PMatrixEqualityEpsilon.matrix-equals-epsilon",a);
}
}
}
});


/**
 * Protocol to support matrix multiplication on numerical arrays.
 * 
 * Implementation may return nil if the implementation does not support one of the parameters, in
 * which case a more general operation will be attempted.
 * @interface
 */
clojure.core.matrix.protocols.PMatrixMultiply = function(){};

clojure.core.matrix.protocols.matrix_multiply = (function clojure$core$matrix$protocols$matrix_multiply(m,a){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PMatrixMultiply$matrix_multiply$arity$2 == null))))){
return m.clojure$core$matrix$protocols$PMatrixMultiply$matrix_multiply$arity$2(m,a);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.matrix_multiply[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,a);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.matrix_multiply["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,a);
} else {
throw cljs.core.missing_protocol.call(null,"PMatrixMultiply.matrix-multiply",m);
}
}
}
});

clojure.core.matrix.protocols.element_multiply = (function clojure$core$matrix$protocols$element_multiply(m,a){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PMatrixMultiply$element_multiply$arity$2 == null))))){
return m.clojure$core$matrix$protocols$PMatrixMultiply$element_multiply$arity$2(m,a);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.element_multiply[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,a);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.element_multiply["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,a);
} else {
throw cljs.core.missing_protocol.call(null,"PMatrixMultiply.element-multiply",m);
}
}
}
});


/**
 * Protocol for general inner and outer products of numerical arrays.
 * Products should use + and * as normally defined for numerical types.
 * @interface
 */
clojure.core.matrix.protocols.PMatrixProducts = function(){};

/**
 * Returns the inner product of two numerical arrays.
 */
clojure.core.matrix.protocols.inner_product = (function clojure$core$matrix$protocols$inner_product(m,a){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PMatrixProducts$inner_product$arity$2 == null))))){
return m.clojure$core$matrix$protocols$PMatrixProducts$inner_product$arity$2(m,a);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.inner_product[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,a);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.inner_product["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,a);
} else {
throw cljs.core.missing_protocol.call(null,"PMatrixProducts.inner-product",m);
}
}
}
});

/**
 * Returns the outer product of two numerical arrays. Implementation
 *                      may return nil to indicate that a default computation should be used.
 */
clojure.core.matrix.protocols.outer_product = (function clojure$core$matrix$protocols$outer_product(m,a){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PMatrixProducts$outer_product$arity$2 == null))))){
return m.clojure$core$matrix$protocols$PMatrixProducts$outer_product$arity$2(m,a);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.outer_product[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,a);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.outer_product["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,a);
} else {
throw cljs.core.missing_protocol.call(null,"PMatrixProducts.outer-product",m);
}
}
}
});


/**
 * Optional protocol for add-product operation.
 * 
 * Intended to support optimised implementations for result = m + a * b
 * @interface
 */
clojure.core.matrix.protocols.PAddProduct = function(){};

clojure.core.matrix.protocols.add_product = (function clojure$core$matrix$protocols$add_product(m,a,b){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PAddProduct$add_product$arity$3 == null))))){
return m.clojure$core$matrix$protocols$PAddProduct$add_product$arity$3(m,a,b);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.add_product[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,a,b);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.add_product["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,a,b);
} else {
throw cljs.core.missing_protocol.call(null,"PAddProduct.add-product",m);
}
}
}
});


/**
 * Optional protocol for mutable add-product! operation.
 * 
 * Intended to support optimised implementations for m = m + a * b
 * @interface
 */
clojure.core.matrix.protocols.PAddProductMutable = function(){};

/**
 * Adds the elementwise product of a and b to m
 */
clojure.core.matrix.protocols.add_product_BANG_ = (function clojure$core$matrix$protocols$add_product_BANG_(m,a,b){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PAddProductMutable$add_product_BANG_$arity$3 == null))))){
return m.clojure$core$matrix$protocols$PAddProductMutable$add_product_BANG_$arity$3(m,a,b);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.add_product_BANG_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,a,b);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.add_product_BANG_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,a,b);
} else {
throw cljs.core.missing_protocol.call(null,"PAddProductMutable.add-product!",m);
}
}
}
});


/**
 * Protocol for add-product operation.
 * 
 * Intended to support optimised implementations for result = m + a * b * factor
 * @interface
 */
clojure.core.matrix.protocols.PAddScaledProduct = function(){};

/**
 * Adds the elementwise product of a, b and a scalar factor to m
 */
clojure.core.matrix.protocols.add_scaled_product = (function clojure$core$matrix$protocols$add_scaled_product(m,a,b,factor){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PAddScaledProduct$add_scaled_product$arity$4 == null))))){
return m.clojure$core$matrix$protocols$PAddScaledProduct$add_scaled_product$arity$4(m,a,b,factor);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.add_scaled_product[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,a,b,factor);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.add_scaled_product["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,a,b,factor);
} else {
throw cljs.core.missing_protocol.call(null,"PAddScaledProduct.add-scaled-product",m);
}
}
}
});


/**
 * Protocol for mutable add-product! operation.
 * 
 * Intended to support optimised implementations for m = m + a * b * factor
 * @interface
 */
clojure.core.matrix.protocols.PAddScaledProductMutable = function(){};

clojure.core.matrix.protocols.add_scaled_product_BANG_ = (function clojure$core$matrix$protocols$add_scaled_product_BANG_(m,a,b,factor){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PAddScaledProductMutable$add_scaled_product_BANG_$arity$4 == null))))){
return m.clojure$core$matrix$protocols$PAddScaledProductMutable$add_scaled_product_BANG_$arity$4(m,a,b,factor);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.add_scaled_product_BANG_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,a,b,factor);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.add_scaled_product_BANG_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,a,b,factor);
} else {
throw cljs.core.missing_protocol.call(null,"PAddScaledProductMutable.add-scaled-product!",m);
}
}
}
});


/**
 * Protocol for add-scaled operation.
 * 
 * Implementations may assume that factor is a scalar.
 * 
 * Intended to support optimised implementations for result = m + a * factor
 * @interface
 */
clojure.core.matrix.protocols.PAddScaled = function(){};

clojure.core.matrix.protocols.add_scaled = (function clojure$core$matrix$protocols$add_scaled(m,a,factor){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PAddScaled$add_scaled$arity$3 == null))))){
return m.clojure$core$matrix$protocols$PAddScaled$add_scaled$arity$3(m,a,factor);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.add_scaled[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,a,factor);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.add_scaled["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,a,factor);
} else {
throw cljs.core.missing_protocol.call(null,"PAddScaled.add-scaled",m);
}
}
}
});


/**
 * Protocol for mutable add-scaled! operation.
 * 
 * Implementations may assume that factor is a scalar.
 * 
 * Intended to support optimised implementations for m = m + a * factor
 * @interface
 */
clojure.core.matrix.protocols.PAddScaledMutable = function(){};

clojure.core.matrix.protocols.add_scaled_BANG_ = (function clojure$core$matrix$protocols$add_scaled_BANG_(m,a,factor){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PAddScaledMutable$add_scaled_BANG_$arity$3 == null))))){
return m.clojure$core$matrix$protocols$PAddScaledMutable$add_scaled_BANG_$arity$3(m,a,factor);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.add_scaled_BANG_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,a,factor);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.add_scaled_BANG_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,a,factor);
} else {
throw cljs.core.missing_protocol.call(null,"PAddScaledMutable.add-scaled!",m);
}
}
}
});


/**
 * Protocol to support element-wise division operator.
 * 
 * One-arg version returns the reciprocal of all elements.
 * @interface
 */
clojure.core.matrix.protocols.PMatrixDivide = function(){};

clojure.core.matrix.protocols.element_divide = (function clojure$core$matrix$protocols$element_divide(var_args){
var G__22025 = arguments.length;
switch (G__22025) {
case 1:
return clojure.core.matrix.protocols.element_divide.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.protocols.element_divide.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.core.matrix.protocols.element_divide.cljs$core$IFn$_invoke$arity$1 = (function (m){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PMatrixDivide$element_divide$arity$1 == null))))){
return m.clojure$core$matrix$protocols$PMatrixDivide$element_divide$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.element_divide[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.element_divide["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"PMatrixDivide.element-divide",m);
}
}
}
});

clojure.core.matrix.protocols.element_divide.cljs$core$IFn$_invoke$arity$2 = (function (m,a){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PMatrixDivide$element_divide$arity$2 == null))))){
return m.clojure$core$matrix$protocols$PMatrixDivide$element_divide$arity$2(m,a);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.element_divide[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,a);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.element_divide["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,a);
} else {
throw cljs.core.missing_protocol.call(null,"PMatrixDivide.element-divide",m);
}
}
}
});

clojure.core.matrix.protocols.element_divide.cljs$lang$maxFixedArity = 2;



/**
 * Protocol to support mutable element-wise division operater.
 * 
 * One-arg version computes the reciprocal of all elements.
 * @interface
 */
clojure.core.matrix.protocols.PMatrixDivideMutable = function(){};

clojure.core.matrix.protocols.element_divide_BANG_ = (function clojure$core$matrix$protocols$element_divide_BANG_(var_args){
var G__22028 = arguments.length;
switch (G__22028) {
case 1:
return clojure.core.matrix.protocols.element_divide_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.protocols.element_divide_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.core.matrix.protocols.element_divide_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (m){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PMatrixDivideMutable$element_divide_BANG_$arity$1 == null))))){
return m.clojure$core$matrix$protocols$PMatrixDivideMutable$element_divide_BANG_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.element_divide_BANG_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.element_divide_BANG_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"PMatrixDivideMutable.element-divide!",m);
}
}
}
});

clojure.core.matrix.protocols.element_divide_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (m,a){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PMatrixDivideMutable$element_divide_BANG_$arity$2 == null))))){
return m.clojure$core$matrix$protocols$PMatrixDivideMutable$element_divide_BANG_$arity$2(m,a);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.element_divide_BANG_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,a);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.element_divide_BANG_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,a);
} else {
throw cljs.core.missing_protocol.call(null,"PMatrixDivideMutable.element-divide!",m);
}
}
}
});

clojure.core.matrix.protocols.element_divide_BANG_.cljs$lang$maxFixedArity = 2;



/**
 * Protocol to support mutable matrix multiplication on an arbitrary matrix, vector or scalar
 * @interface
 */
clojure.core.matrix.protocols.PMatrixMultiplyMutable = function(){};

clojure.core.matrix.protocols.matrix_multiply_BANG_ = (function clojure$core$matrix$protocols$matrix_multiply_BANG_(m,a){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PMatrixMultiplyMutable$matrix_multiply_BANG_$arity$2 == null))))){
return m.clojure$core$matrix$protocols$PMatrixMultiplyMutable$matrix_multiply_BANG_$arity$2(m,a);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.matrix_multiply_BANG_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,a);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.matrix_multiply_BANG_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,a);
} else {
throw cljs.core.missing_protocol.call(null,"PMatrixMultiplyMutable.matrix-multiply!",m);
}
}
}
});

clojure.core.matrix.protocols.element_multiply_BANG_ = (function clojure$core$matrix$protocols$element_multiply_BANG_(m,a){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PMatrixMultiplyMutable$element_multiply_BANG_$arity$2 == null))))){
return m.clojure$core$matrix$protocols$PMatrixMultiplyMutable$element_multiply_BANG_$arity$2(m,a);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.element_multiply_BANG_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,a);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.element_multiply_BANG_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,a);
} else {
throw cljs.core.missing_protocol.call(null,"PMatrixMultiplyMutable.element-multiply!",m);
}
}
}
});


/**
 * Protocol to support transformation of a vector to another vector. Is equivalent to matrix multiplication
 * when 2D matrices are used as transformations. But other transformations are possible, e.g. non-affine
 * transformations.
 * 
 * A transformation need not be a core.matrix matrix: other types are permissible
 * @interface
 */
clojure.core.matrix.protocols.PVectorTransform = function(){};

/**
 * Transforms a vector
 */
clojure.core.matrix.protocols.vector_transform = (function clojure$core$matrix$protocols$vector_transform(t,v){
if(((!((t == null))) && (!((t.clojure$core$matrix$protocols$PVectorTransform$vector_transform$arity$2 == null))))){
return t.clojure$core$matrix$protocols$PVectorTransform$vector_transform$arity$2(t,v);
} else {
var x__4211__auto__ = (((t == null))?null:t);
var m__4212__auto__ = (clojure.core.matrix.protocols.vector_transform[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,t,v);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.vector_transform["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,t,v);
} else {
throw cljs.core.missing_protocol.call(null,"PVectorTransform.vector-transform",t);
}
}
}
});

/**
 * Transforms a vector in place - mutates the vector argument
 */
clojure.core.matrix.protocols.vector_transform_BANG_ = (function clojure$core$matrix$protocols$vector_transform_BANG_(t,v){
if(((!((t == null))) && (!((t.clojure$core$matrix$protocols$PVectorTransform$vector_transform_BANG_$arity$2 == null))))){
return t.clojure$core$matrix$protocols$PVectorTransform$vector_transform_BANG_$arity$2(t,v);
} else {
var x__4211__auto__ = (((t == null))?null:t);
var m__4212__auto__ = (clojure.core.matrix.protocols.vector_transform_BANG_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,t,v);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.vector_transform_BANG_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,t,v);
} else {
throw cljs.core.missing_protocol.call(null,"PVectorTransform.vector-transform!",t);
}
}
}
});


/**
 * Protocol to support numerical array scaling by scalar values. Provided because array classes may have
 * efficient specialised scaling operaions.
 * 
 * Works according the the default definition of multiplication for the matrix class
 * (usually numerical, i.e. equivalent to clojure.core/+)
 * @interface
 */
clojure.core.matrix.protocols.PMatrixScaling = function(){};

/**
 * Multiplies a array by the scalar constant, 
 */
clojure.core.matrix.protocols.scale = (function clojure$core$matrix$protocols$scale(m,constant){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PMatrixScaling$scale$arity$2 == null))))){
return m.clojure$core$matrix$protocols$PMatrixScaling$scale$arity$2(m,constant);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.scale[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,constant);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.scale["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,constant);
} else {
throw cljs.core.missing_protocol.call(null,"PMatrixScaling.scale",m);
}
}
}
});

/**
 * Pre-multiplies the array with the scalar constant. This is the same as scale for arrays
 *   where multiplication is commutative, but may be different for special kinds of scalars.
 */
clojure.core.matrix.protocols.pre_scale = (function clojure$core$matrix$protocols$pre_scale(m,constant){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PMatrixScaling$pre_scale$arity$2 == null))))){
return m.clojure$core$matrix$protocols$PMatrixScaling$pre_scale$arity$2(m,constant);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.pre_scale[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,constant);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.pre_scale["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,constant);
} else {
throw cljs.core.missing_protocol.call(null,"PMatrixScaling.pre-scale",m);
}
}
}
});


/**
 * Protocol to support mutable array scaling by scalar values.
 * @interface
 */
clojure.core.matrix.protocols.PMatrixMutableScaling = function(){};

clojure.core.matrix.protocols.scale_BANG_ = (function clojure$core$matrix$protocols$scale_BANG_(m,factor){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PMatrixMutableScaling$scale_BANG_$arity$2 == null))))){
return m.clojure$core$matrix$protocols$PMatrixMutableScaling$scale_BANG_$arity$2(m,factor);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.scale_BANG_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,factor);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.scale_BANG_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,factor);
} else {
throw cljs.core.missing_protocol.call(null,"PMatrixMutableScaling.scale!",m);
}
}
}
});

clojure.core.matrix.protocols.pre_scale_BANG_ = (function clojure$core$matrix$protocols$pre_scale_BANG_(m,factor){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PMatrixMutableScaling$pre_scale_BANG_$arity$2 == null))))){
return m.clojure$core$matrix$protocols$PMatrixMutableScaling$pre_scale_BANG_$arity$2(m,factor);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.pre_scale_BANG_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,factor);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.pre_scale_BANG_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,factor);
} else {
throw cljs.core.missing_protocol.call(null,"PMatrixMutableScaling.pre-scale!",m);
}
}
}
});


/**
 * Protocol to support addition and subtraction on arbitrary matrices.
 * These are elementwise operations that should support broadcasting.
 * @interface
 */
clojure.core.matrix.protocols.PMatrixAdd = function(){};

clojure.core.matrix.protocols.matrix_add = (function clojure$core$matrix$protocols$matrix_add(m,a){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PMatrixAdd$matrix_add$arity$2 == null))))){
return m.clojure$core$matrix$protocols$PMatrixAdd$matrix_add$arity$2(m,a);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.matrix_add[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,a);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.matrix_add["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,a);
} else {
throw cljs.core.missing_protocol.call(null,"PMatrixAdd.matrix-add",m);
}
}
}
});

clojure.core.matrix.protocols.matrix_sub = (function clojure$core$matrix$protocols$matrix_sub(m,a){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PMatrixAdd$matrix_sub$arity$2 == null))))){
return m.clojure$core$matrix$protocols$PMatrixAdd$matrix_sub$arity$2(m,a);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.matrix_sub[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,a);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.matrix_sub["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,a);
} else {
throw cljs.core.missing_protocol.call(null,"PMatrixAdd.matrix-sub",m);
}
}
}
});


/**
 * Protocol to support mutable addition and subtraction
 * @interface
 */
clojure.core.matrix.protocols.PMatrixAddMutable = function(){};

clojure.core.matrix.protocols.matrix_add_BANG_ = (function clojure$core$matrix$protocols$matrix_add_BANG_(m,a){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PMatrixAddMutable$matrix_add_BANG_$arity$2 == null))))){
return m.clojure$core$matrix$protocols$PMatrixAddMutable$matrix_add_BANG_$arity$2(m,a);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.matrix_add_BANG_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,a);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.matrix_add_BANG_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,a);
} else {
throw cljs.core.missing_protocol.call(null,"PMatrixAddMutable.matrix-add!",m);
}
}
}
});

clojure.core.matrix.protocols.matrix_sub_BANG_ = (function clojure$core$matrix$protocols$matrix_sub_BANG_(m,a){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PMatrixAddMutable$matrix_sub_BANG_$arity$2 == null))))){
return m.clojure$core$matrix$protocols$PMatrixAddMutable$matrix_sub_BANG_$arity$2(m,a);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.matrix_sub_BANG_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,a);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.matrix_sub_BANG_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,a);
} else {
throw cljs.core.missing_protocol.call(null,"PMatrixAddMutable.matrix-sub!",m);
}
}
}
});


/**
 * Protocol to support the mutable scale-add! operation. This is a common operation that may be
 * optimised by the underlying implementation. Implementations should consider extra optimisations for
 * specific constant values e.g. 0.0 and 1.0 but this is not mandatory.
 * @interface
 */
clojure.core.matrix.protocols.PScaleAdd = function(){};

/**
 * Scales array m1 in place by factor b, then adds array m2 scaled by factor b, then adds the constant
 */
clojure.core.matrix.protocols.scale_add_BANG_ = (function clojure$core$matrix$protocols$scale_add_BANG_(m1,a,m2,b,constant){
if(((!((m1 == null))) && (!((m1.clojure$core$matrix$protocols$PScaleAdd$scale_add_BANG_$arity$5 == null))))){
return m1.clojure$core$matrix$protocols$PScaleAdd$scale_add_BANG_$arity$5(m1,a,m2,b,constant);
} else {
var x__4211__auto__ = (((m1 == null))?null:m1);
var m__4212__auto__ = (clojure.core.matrix.protocols.scale_add_BANG_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m1,a,m2,b,constant);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.scale_add_BANG_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m1,a,m2,b,constant);
} else {
throw cljs.core.missing_protocol.call(null,"PScaleAdd.scale-add!",m1);
}
}
}
});


/**
 * Protocol to support the immutable scale-add! operation.
 * @interface
 */
clojure.core.matrix.protocols.PScaleAdd2 = function(){};

/**
 * Scales array m1 by factor b, then adds array m2 scaled by factor b, then adds the constant
 */
clojure.core.matrix.protocols.scale_add = (function clojure$core$matrix$protocols$scale_add(m1,a,m2,b,constant){
if(((!((m1 == null))) && (!((m1.clojure$core$matrix$protocols$PScaleAdd2$scale_add$arity$5 == null))))){
return m1.clojure$core$matrix$protocols$PScaleAdd2$scale_add$arity$5(m1,a,m2,b,constant);
} else {
var x__4211__auto__ = (((m1 == null))?null:m1);
var m__4212__auto__ = (clojure.core.matrix.protocols.scale_add[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m1,a,m2,b,constant);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.scale_add["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m1,a,m2,b,constant);
} else {
throw cljs.core.missing_protocol.call(null,"PScaleAdd2.scale-add",m1);
}
}
}
});


/**
 * Protocol to support the lerp linear interpolation function.
 * @interface
 */
clojure.core.matrix.protocols.PLerp = function(){};

/**
 * Linear interpolation: Scales array a by (1-factor), then adds array b scaled by factor.
 */
clojure.core.matrix.protocols.lerp = (function clojure$core$matrix$protocols$lerp(a,b,factor){
if(((!((a == null))) && (!((a.clojure$core$matrix$protocols$PLerp$lerp$arity$3 == null))))){
return a.clojure$core$matrix$protocols$PLerp$lerp$arity$3(a,b,factor);
} else {
var x__4211__auto__ = (((a == null))?null:a);
var m__4212__auto__ = (clojure.core.matrix.protocols.lerp[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,a,b,factor);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.lerp["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,a,b,factor);
} else {
throw cljs.core.missing_protocol.call(null,"PLerp.lerp",a);
}
}
}
});

/**
 * Linear interpolation: Scales array a by (1-factor), then adds array b scaled by factor. Mutates a.
 */
clojure.core.matrix.protocols.lerp_BANG_ = (function clojure$core$matrix$protocols$lerp_BANG_(a,b,factor){
if(((!((a == null))) && (!((a.clojure$core$matrix$protocols$PLerp$lerp_BANG_$arity$3 == null))))){
return a.clojure$core$matrix$protocols$PLerp$lerp_BANG_$arity$3(a,b,factor);
} else {
var x__4211__auto__ = (((a == null))?null:a);
var m__4212__auto__ = (clojure.core.matrix.protocols.lerp_BANG_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,a,b,factor);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.lerp_BANG_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,a,b,factor);
} else {
throw cljs.core.missing_protocol.call(null,"PLerp.lerp!",a);
}
}
}
});


/**
 * Protocol to support the mutable add-inner-product! operation. This is a common operation that may be
 * optimised by the underlying implementation. Implementations should consider extra optimisations for
 * specific constant factors e.g. 0.0 and 1.0 but this is not mandatory.
 * @interface
 */
clojure.core.matrix.protocols.PAddInnerProductMutable = function(){};

/**
 * Adds the inner product of a, b and an optional scalar factor to m
 */
clojure.core.matrix.protocols.add_inner_product_BANG_ = (function clojure$core$matrix$protocols$add_inner_product_BANG_(var_args){
var G__22031 = arguments.length;
switch (G__22031) {
case 3:
return clojure.core.matrix.protocols.add_inner_product_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.core.matrix.protocols.add_inner_product_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.core.matrix.protocols.add_inner_product_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (m,a,b){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PAddInnerProductMutable$add_inner_product_BANG_$arity$3 == null))))){
return m.clojure$core$matrix$protocols$PAddInnerProductMutable$add_inner_product_BANG_$arity$3(m,a,b);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.add_inner_product_BANG_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,a,b);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.add_inner_product_BANG_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,a,b);
} else {
throw cljs.core.missing_protocol.call(null,"PAddInnerProductMutable.add-inner-product!",m);
}
}
}
});

clojure.core.matrix.protocols.add_inner_product_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (m,a,b,factor){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PAddInnerProductMutable$add_inner_product_BANG_$arity$4 == null))))){
return m.clojure$core$matrix$protocols$PAddInnerProductMutable$add_inner_product_BANG_$arity$4(m,a,b,factor);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.add_inner_product_BANG_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,a,b,factor);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.add_inner_product_BANG_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,a,b,factor);
} else {
throw cljs.core.missing_protocol.call(null,"PAddInnerProductMutable.add-inner-product!",m);
}
}
}
});

clojure.core.matrix.protocols.add_inner_product_BANG_.cljs$lang$maxFixedArity = 4;



/**
 * Protocol to support the mutable add-outer-product! operation. This is a common operation that may be
 * optimised by the underlying implementation. Implementations should consider extra optimisations for
 * specific constant factors e.g. 0.0 and 1.0 but this is not mandatory.
 * @interface
 */
clojure.core.matrix.protocols.PAddOuterProductMutable = function(){};

/**
 * Adds the outer product of a, b and an optional scalar factor to m
 */
clojure.core.matrix.protocols.add_outer_product_BANG_ = (function clojure$core$matrix$protocols$add_outer_product_BANG_(var_args){
var G__22034 = arguments.length;
switch (G__22034) {
case 3:
return clojure.core.matrix.protocols.add_outer_product_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.core.matrix.protocols.add_outer_product_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.core.matrix.protocols.add_outer_product_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (m,a,b){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PAddOuterProductMutable$add_outer_product_BANG_$arity$3 == null))))){
return m.clojure$core$matrix$protocols$PAddOuterProductMutable$add_outer_product_BANG_$arity$3(m,a,b);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.add_outer_product_BANG_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,a,b);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.add_outer_product_BANG_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,a,b);
} else {
throw cljs.core.missing_protocol.call(null,"PAddOuterProductMutable.add-outer-product!",m);
}
}
}
});

clojure.core.matrix.protocols.add_outer_product_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (m,a,b,factor){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PAddOuterProductMutable$add_outer_product_BANG_$arity$4 == null))))){
return m.clojure$core$matrix$protocols$PAddOuterProductMutable$add_outer_product_BANG_$arity$4(m,a,b,factor);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.add_outer_product_BANG_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,a,b,factor);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.add_outer_product_BANG_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,a,b,factor);
} else {
throw cljs.core.missing_protocol.call(null,"PAddOuterProductMutable.add-outer-product!",m);
}
}
}
});

clojure.core.matrix.protocols.add_outer_product_BANG_.cljs$lang$maxFixedArity = 4;



/**
 * Protocol to support the mutable set-inner-product! operation. This is a common operation that may be
 * optimised by the underlying implementation. Implementations should consider extra optimisations for
 * specific constant factors e.g. 0.0 and 1.0 but this is not mandatory.
 * @interface
 */
clojure.core.matrix.protocols.PSetInnerProductMutable = function(){};

/**
 * Sets m to the inner product of a, b and an optional scalar factor to m
 */
clojure.core.matrix.protocols.set_inner_product_BANG_ = (function clojure$core$matrix$protocols$set_inner_product_BANG_(var_args){
var G__22037 = arguments.length;
switch (G__22037) {
case 3:
return clojure.core.matrix.protocols.set_inner_product_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.core.matrix.protocols.set_inner_product_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.core.matrix.protocols.set_inner_product_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (m,a,b){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PSetInnerProductMutable$set_inner_product_BANG_$arity$3 == null))))){
return m.clojure$core$matrix$protocols$PSetInnerProductMutable$set_inner_product_BANG_$arity$3(m,a,b);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.set_inner_product_BANG_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,a,b);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.set_inner_product_BANG_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,a,b);
} else {
throw cljs.core.missing_protocol.call(null,"PSetInnerProductMutable.set-inner-product!",m);
}
}
}
});

clojure.core.matrix.protocols.set_inner_product_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (m,a,b,factor){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PSetInnerProductMutable$set_inner_product_BANG_$arity$4 == null))))){
return m.clojure$core$matrix$protocols$PSetInnerProductMutable$set_inner_product_BANG_$arity$4(m,a,b,factor);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.set_inner_product_BANG_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,a,b,factor);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.set_inner_product_BANG_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,a,b,factor);
} else {
throw cljs.core.missing_protocol.call(null,"PSetInnerProductMutable.set-inner-product!",m);
}
}
}
});

clojure.core.matrix.protocols.set_inner_product_BANG_.cljs$lang$maxFixedArity = 4;



/**
 * Protocol to get a subarray of another array. dim-ranges should be a sequence of [start len]
 * pairs, one for each dimension. If a pair is nil, it should be interpreted to take the whole dimension.
 * 
 * Returning a mutable view is preferred, if the implementation supports this.
 * @interface
 */
clojure.core.matrix.protocols.PSubMatrix = function(){};

clojure.core.matrix.protocols.submatrix = (function clojure$core$matrix$protocols$submatrix(d,dim_ranges){
if(((!((d == null))) && (!((d.clojure$core$matrix$protocols$PSubMatrix$submatrix$arity$2 == null))))){
return d.clojure$core$matrix$protocols$PSubMatrix$submatrix$arity$2(d,dim_ranges);
} else {
var x__4211__auto__ = (((d == null))?null:d);
var m__4212__auto__ = (clojure.core.matrix.protocols.submatrix[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,d,dim_ranges);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.submatrix["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,d,dim_ranges);
} else {
throw cljs.core.missing_protocol.call(null,"PSubMatrix.submatrix",d);
}
}
}
});


/**
 * Protocol to compute a matrix by calling a function on each indexed location. The function f will be called
 * as (f x y z ...) for all index values.
 * @interface
 */
clojure.core.matrix.protocols.PComputeMatrix = function(){};

clojure.core.matrix.protocols.compute_matrix = (function clojure$core$matrix$protocols$compute_matrix(m,shape,f){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PComputeMatrix$compute_matrix$arity$3 == null))))){
return m.clojure$core$matrix$protocols$PComputeMatrix$compute_matrix$arity$3(m,shape,f);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.compute_matrix[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,shape,f);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.compute_matrix["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,shape,f);
} else {
throw cljs.core.missing_protocol.call(null,"PComputeMatrix.compute-matrix",m);
}
}
}
});


/**
 * Protocol for array transpose operation
 * @interface
 */
clojure.core.matrix.protocols.PTranspose = function(){};

/**
 * Returns the transpose of an array. Equivalent to reversing the "shape".
 *   Note that:
 *   - The transpose of a scalar is the same scalar
 *   - The transpose of a 1D vector is the same 1D vector
 *   - The transpose of a 2D matrix swaps rows and columns
 */
clojure.core.matrix.protocols.transpose = (function clojure$core$matrix$protocols$transpose(m){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PTranspose$transpose$arity$1 == null))))){
return m.clojure$core$matrix$protocols$PTranspose$transpose$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.transpose[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.transpose["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"PTranspose.transpose",m);
}
}
}
});


/**
 * Protocol for generalised array transpose operation
 * @interface
 */
clojure.core.matrix.protocols.PTransposeDims = function(){};

/**
 * Returns the transpose of an array, reordering the dimensions in the specified order.
 */
clojure.core.matrix.protocols.transpose_dims = (function clojure$core$matrix$protocols$transpose_dims(m,order){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PTransposeDims$transpose_dims$arity$2 == null))))){
return m.clojure$core$matrix$protocols$PTransposeDims$transpose_dims$arity$2(m,order);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.transpose_dims[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,order);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.transpose_dims["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,order);
} else {
throw cljs.core.missing_protocol.call(null,"PTransposeDims.transpose-dims",m);
}
}
}
});


/**
 * Rotates an array along a specified dimension by the given number of places.
 * 
 * Rotating a dimension that does not exist has no effect on the array.
 * @interface
 */
clojure.core.matrix.protocols.PRotate = function(){};

clojure.core.matrix.protocols.rotate = (function clojure$core$matrix$protocols$rotate(m,dim,places){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PRotate$rotate$arity$3 == null))))){
return m.clojure$core$matrix$protocols$PRotate$rotate$arity$3(m,dim,places);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.rotate[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,dim,places);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.rotate["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,dim,places);
} else {
throw cljs.core.missing_protocol.call(null,"PRotate.rotate",m);
}
}
}
});


/**
 * Rotates an array using the specified shifts for each dimension.
 * 
 * shifts may be any sequence of integer shift amounts.
 * @interface
 */
clojure.core.matrix.protocols.PRotateAll = function(){};

clojure.core.matrix.protocols.rotate_all = (function clojure$core$matrix$protocols$rotate_all(m,shifts){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PRotateAll$rotate_all$arity$2 == null))))){
return m.clojure$core$matrix$protocols$PRotateAll$rotate_all$arity$2(m,shifts);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.rotate_all[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,shifts);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.rotate_all["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,shifts);
} else {
throw cljs.core.missing_protocol.call(null,"PRotateAll.rotate-all",m);
}
}
}
});


/**
 * Rotates an array using the specified shifts for each dimension. Newly shifted in elements
 * should be filled with the default scalar value (usually zero).
 * @interface
 */
clojure.core.matrix.protocols.PShift = function(){};

/**
 * Shift along a single specified dimension
 */
clojure.core.matrix.protocols.shift = (function clojure$core$matrix$protocols$shift(m,dim,places){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PShift$shift$arity$3 == null))))){
return m.clojure$core$matrix$protocols$PShift$shift$arity$3(m,dim,places);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.shift[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,dim,places);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.shift["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,dim,places);
} else {
throw cljs.core.missing_protocol.call(null,"PShift.shift",m);
}
}
}
});

/**
 * Shift along all specified dimensions as a single operation.
 * 
 *   `shifts` may be any sequence of integer shift amounts.
 */
clojure.core.matrix.protocols.shift_all = (function clojure$core$matrix$protocols$shift_all(m,shifts){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PShift$shift_all$arity$2 == null))))){
return m.clojure$core$matrix$protocols$PShift$shift_all$arity$2(m,shifts);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.shift_all[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,shifts);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.shift_all["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,shifts);
} else {
throw cljs.core.missing_protocol.call(null,"PShift.shift-all",m);
}
}
}
});


/**
 * Protocol for mutable 2D matrix transpose in place
 * @interface
 */
clojure.core.matrix.protocols.PTransposeInPlace = function(){};

/**
 * Transposes a mutable 2D matrix in place
 */
clojure.core.matrix.protocols.transpose_BANG_ = (function clojure$core$matrix$protocols$transpose_BANG_(m){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PTransposeInPlace$transpose_BANG_$arity$1 == null))))){
return m.clojure$core$matrix$protocols$PTransposeInPlace$transpose_BANG_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.transpose_BANG_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.transpose_BANG_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"PTransposeInPlace.transpose!",m);
}
}
}
});


/**
 * Protocol for matrix reorder.
 * 
 * By default, re-orders along the first (major) dimension, but may reorder along any dimension by
 * specifiying the dimension argument.
 * 
 * Indicies can be any seqable object containing the indices along the specified dimension to select.
 * An index can be selected multiple times (which created repreated slices), or not at all (which excludes
 * the slice from the result).
 * 
 * Some implementation may implement re-ordering using lightweight or mutable views over the original array
 * data.
 * @interface
 */
clojure.core.matrix.protocols.POrder = function(){};

clojure.core.matrix.protocols.order = (function clojure$core$matrix$protocols$order(var_args){
var G__22040 = arguments.length;
switch (G__22040) {
case 2:
return clojure.core.matrix.protocols.order.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.protocols.order.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.core.matrix.protocols.order.cljs$core$IFn$_invoke$arity$2 = (function (m,indices){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$POrder$order$arity$2 == null))))){
return m.clojure$core$matrix$protocols$POrder$order$arity$2(m,indices);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.order[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,indices);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.order["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,indices);
} else {
throw cljs.core.missing_protocol.call(null,"POrder.order",m);
}
}
}
});

clojure.core.matrix.protocols.order.cljs$core$IFn$_invoke$arity$3 = (function (m,dimension,indices){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$POrder$order$arity$3 == null))))){
return m.clojure$core$matrix$protocols$POrder$order$arity$3(m,dimension,indices);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.order[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,dimension,indices);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.order["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,dimension,indices);
} else {
throw cljs.core.missing_protocol.call(null,"POrder.order",m);
}
}
}
});

clojure.core.matrix.protocols.order.cljs$lang$maxFixedArity = 3;



/**
 * Protocol for identifying numerical arrays. Should return true if every element in the
 * array is guaranteed to be a valid numerical value.
 * @interface
 */
clojure.core.matrix.protocols.PNumerical = function(){};

/**
 * Returns true if the array is numerical.
 */
clojure.core.matrix.protocols.numerical_QMARK_ = (function clojure$core$matrix$protocols$numerical_QMARK_(m){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PNumerical$numerical_QMARK_$arity$1 == null))))){
return m.clojure$core$matrix$protocols$PNumerical$numerical_QMARK_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.numerical_QMARK_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.numerical_QMARK_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"PNumerical.numerical?",m);
}
}
}
});


/**
 * Protocol to support common numerical vector operations.
 * @interface
 */
clojure.core.matrix.protocols.PVectorOps = function(){};

/**
 * Numerical dot product of two vectors. Must return a scalar value if the two parameters are
 *    vectors of equal length.
 * 
 *    If the vectors are of unequal length, should throw an exception (however returning nil is
 *    also acceptable).
 * 
 *    Otherwise the implementation may optionally either return nil or compute a higher dimensional
 *    inner-product (if it is able to do so).
 */
clojure.core.matrix.protocols.vector_dot = (function clojure$core$matrix$protocols$vector_dot(a,b){
if(((!((a == null))) && (!((a.clojure$core$matrix$protocols$PVectorOps$vector_dot$arity$2 == null))))){
return a.clojure$core$matrix$protocols$PVectorOps$vector_dot$arity$2(a,b);
} else {
var x__4211__auto__ = (((a == null))?null:a);
var m__4212__auto__ = (clojure.core.matrix.protocols.vector_dot[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,a,b);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.vector_dot["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,a,b);
} else {
throw cljs.core.missing_protocol.call(null,"PVectorOps.vector-dot",a);
}
}
}
});

/**
 * Euclidian length of a vector.
 */
clojure.core.matrix.protocols.length = (function clojure$core$matrix$protocols$length(a){
if(((!((a == null))) && (!((a.clojure$core$matrix$protocols$PVectorOps$length$arity$1 == null))))){
return a.clojure$core$matrix$protocols$PVectorOps$length$arity$1(a);
} else {
var x__4211__auto__ = (((a == null))?null:a);
var m__4212__auto__ = (clojure.core.matrix.protocols.length[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,a);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.length["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,a);
} else {
throw cljs.core.missing_protocol.call(null,"PVectorOps.length",a);
}
}
}
});

/**
 * Squared Euclidean length of a vector.
 */
clojure.core.matrix.protocols.length_squared = (function clojure$core$matrix$protocols$length_squared(a){
if(((!((a == null))) && (!((a.clojure$core$matrix$protocols$PVectorOps$length_squared$arity$1 == null))))){
return a.clojure$core$matrix$protocols$PVectorOps$length_squared$arity$1(a);
} else {
var x__4211__auto__ = (((a == null))?null:a);
var m__4212__auto__ = (clojure.core.matrix.protocols.length_squared[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,a);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.length_squared["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,a);
} else {
throw cljs.core.missing_protocol.call(null,"PVectorOps.length-squared",a);
}
}
}
});

/**
 * Returns a new vector, normalised to length 1.0
 */
clojure.core.matrix.protocols.normalise = (function clojure$core$matrix$protocols$normalise(a){
if(((!((a == null))) && (!((a.clojure$core$matrix$protocols$PVectorOps$normalise$arity$1 == null))))){
return a.clojure$core$matrix$protocols$PVectorOps$normalise$arity$1(a);
} else {
var x__4211__auto__ = (((a == null))?null:a);
var m__4212__auto__ = (clojure.core.matrix.protocols.normalise[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,a);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.normalise["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,a);
} else {
throw cljs.core.missing_protocol.call(null,"PVectorOps.normalise",a);
}
}
}
});


/**
 * @interface
 */
clojure.core.matrix.protocols.PVectorCross = function(){};

/**
 * Cross product of two vectors
 */
clojure.core.matrix.protocols.cross_product = (function clojure$core$matrix$protocols$cross_product(a,b){
if(((!((a == null))) && (!((a.clojure$core$matrix$protocols$PVectorCross$cross_product$arity$2 == null))))){
return a.clojure$core$matrix$protocols$PVectorCross$cross_product$arity$2(a,b);
} else {
var x__4211__auto__ = (((a == null))?null:a);
var m__4212__auto__ = (clojure.core.matrix.protocols.cross_product[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,a,b);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.cross_product["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,a,b);
} else {
throw cljs.core.missing_protocol.call(null,"PVectorCross.cross-product",a);
}
}
}
});

/**
 * Calculate cross product of two vectors, storing the result in the first vector
 */
clojure.core.matrix.protocols.cross_product_BANG_ = (function clojure$core$matrix$protocols$cross_product_BANG_(a,b){
if(((!((a == null))) && (!((a.clojure$core$matrix$protocols$PVectorCross$cross_product_BANG_$arity$2 == null))))){
return a.clojure$core$matrix$protocols$PVectorCross$cross_product_BANG_$arity$2(a,b);
} else {
var x__4211__auto__ = (((a == null))?null:a);
var m__4212__auto__ = (clojure.core.matrix.protocols.cross_product_BANG_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,a,b);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.cross_product_BANG_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,a,b);
} else {
throw cljs.core.missing_protocol.call(null,"PVectorCross.cross-product!",a);
}
}
}
});


/**
 * @interface
 */
clojure.core.matrix.protocols.PVectorDistance = function(){};

/**
 * Euclidean distance of two vectors.
 */
clojure.core.matrix.protocols.distance = (function clojure$core$matrix$protocols$distance(a,b){
if(((!((a == null))) && (!((a.clojure$core$matrix$protocols$PVectorDistance$distance$arity$2 == null))))){
return a.clojure$core$matrix$protocols$PVectorDistance$distance$arity$2(a,b);
} else {
var x__4211__auto__ = (((a == null))?null:a);
var m__4212__auto__ = (clojure.core.matrix.protocols.distance[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,a,b);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.distance["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,a,b);
} else {
throw cljs.core.missing_protocol.call(null,"PVectorDistance.distance",a);
}
}
}
});


/**
 * @interface
 */
clojure.core.matrix.protocols.PVectorView = function(){};

/**
 * Returns a view of an array as a single flattened vector. May return the vector itself
 *   if it is already a 1D vector.
 */
clojure.core.matrix.protocols.as_vector = (function clojure$core$matrix$protocols$as_vector(m){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PVectorView$as_vector$arity$1 == null))))){
return m.clojure$core$matrix$protocols$PVectorView$as_vector$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.as_vector[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.as_vector["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"PVectorView.as-vector",m);
}
}
}
});


/**
 * Protocol to return an array as a flattened vector of all elements.
 * Implementations are encouraged to avoid taking a full copy of all data
 * (e.g. by using structural sharing or views).
 * @interface
 */
clojure.core.matrix.protocols.PVectorisable = function(){};

/**
 * Returns an array as a single flattened vector
 */
clojure.core.matrix.protocols.to_vector = (function clojure$core$matrix$protocols$to_vector(m){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PVectorisable$to_vector$arity$1 == null))))){
return m.clojure$core$matrix$protocols$PVectorisable$to_vector$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.to_vector[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.to_vector["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"PVectorisable.to-vector",m);
}
}
}
});


/**
 * Protocol for mutable versions of common vector operations
 * @interface
 */
clojure.core.matrix.protocols.PMutableVectorOps = function(){};

clojure.core.matrix.protocols.normalise_BANG_ = (function clojure$core$matrix$protocols$normalise_BANG_(a){
if(((!((a == null))) && (!((a.clojure$core$matrix$protocols$PMutableVectorOps$normalise_BANG_$arity$1 == null))))){
return a.clojure$core$matrix$protocols$PMutableVectorOps$normalise_BANG_$arity$1(a);
} else {
var x__4211__auto__ = (((a == null))?null:a);
var m__4212__auto__ = (clojure.core.matrix.protocols.normalise_BANG_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,a);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.normalise_BANG_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,a);
} else {
throw cljs.core.missing_protocol.call(null,"PMutableVectorOps.normalise!",a);
}
}
}
});


/**
 * Protocol to support common 2D numerical matrix operations
 * @interface
 */
clojure.core.matrix.protocols.PMatrixOps = function(){};

/**
 * Returns the trace of a matrix (sum of elements on main diagonal.
 *   Must throw an error if the matrix is not square (i.e. different number of rows and columns)
 */
clojure.core.matrix.protocols.trace = (function clojure$core$matrix$protocols$trace(m){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PMatrixOps$trace$arity$1 == null))))){
return m.clojure$core$matrix$protocols$PMatrixOps$trace$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.trace[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.trace["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"PMatrixOps.trace",m);
}
}
}
});

/**
 * Returns the determinant of a matrix. May return nil if the implementation is unable
 *   to compute determinants, in which case a default implementation will be tried.
 *   Must throw an error if the matrix is not square (i.e. different number of rows and columns)
 */
clojure.core.matrix.protocols.determinant = (function clojure$core$matrix$protocols$determinant(m){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PMatrixOps$determinant$arity$1 == null))))){
return m.clojure$core$matrix$protocols$PMatrixOps$determinant$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.determinant[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.determinant["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"PMatrixOps.determinant",m);
}
}
}
});

/**
 * Returns the inverse of a matrix. Should return nil if m is not invertible.
 */
clojure.core.matrix.protocols.inverse = (function clojure$core$matrix$protocols$inverse(m){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PMatrixOps$inverse$arity$1 == null))))){
return m.clojure$core$matrix$protocols$PMatrixOps$inverse$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.inverse[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.inverse["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"PMatrixOps.inverse",m);
}
}
}
});


/**
 * @interface
 */
clojure.core.matrix.protocols.PNegation = function(){};

/**
 * Returns a new numerical array with all elements negated.
 */
clojure.core.matrix.protocols.negate = (function clojure$core$matrix$protocols$negate(m){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PNegation$negate$arity$1 == null))))){
return m.clojure$core$matrix$protocols$PNegation$negate$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.negate[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.negate["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"PNegation.negate",m);
}
}
}
});


/**
 * Protocol to support computing the rank (number of linearly independent rows) in a matrix
 * @interface
 */
clojure.core.matrix.protocols.PMatrixRank = function(){};

/**
 * Returns the rank of a matrix
 */
clojure.core.matrix.protocols.rank = (function clojure$core$matrix$protocols$rank(m){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PMatrixRank$rank$arity$1 == null))))){
return m.clojure$core$matrix$protocols$PMatrixRank$rank$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.rank[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.rank["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"PMatrixRank.rank",m);
}
}
}
});


/**
 * Protocol to support ranking of elements in an array.
 * @interface
 */
clojure.core.matrix.protocols.PIndexRank = function(){};

/**
 * Returns an array of indexed ranks, using an optional comparator
 */
clojure.core.matrix.protocols.index_rank = (function clojure$core$matrix$protocols$index_rank(var_args){
var G__22043 = arguments.length;
switch (G__22043) {
case 1:
return clojure.core.matrix.protocols.index_rank.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.protocols.index_rank.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.core.matrix.protocols.index_rank.cljs$core$IFn$_invoke$arity$1 = (function (m){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PIndexRank$index_rank$arity$1 == null))))){
return m.clojure$core$matrix$protocols$PIndexRank$index_rank$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.index_rank[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.index_rank["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"PIndexRank.index-rank",m);
}
}
}
});

clojure.core.matrix.protocols.index_rank.cljs$core$IFn$_invoke$arity$2 = (function (m,comparator){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PIndexRank$index_rank$arity$2 == null))))){
return m.clojure$core$matrix$protocols$PIndexRank$index_rank$arity$2(m,comparator);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.index_rank[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,comparator);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.index_rank["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,comparator);
} else {
throw cljs.core.missing_protocol.call(null,"PIndexRank.index-rank",m);
}
}
}
});

clojure.core.matrix.protocols.index_rank.cljs$lang$maxFixedArity = 2;



/**
 * Protocol to support the summing of all elements in an array.
 * The array must hold numeric values only, or an exception will be thrown.
 * @interface
 */
clojure.core.matrix.protocols.PSummable = function(){};

clojure.core.matrix.protocols.element_sum = (function clojure$core$matrix$protocols$element_sum(m){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PSummable$element_sum$arity$1 == null))))){
return m.clojure$core$matrix$protocols$PSummable$element_sum$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.element_sum[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.element_sum["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"PSummable.element-sum",m);
}
}
}
});


/**
 * Protocol to support the 'pow' function. Should raise every element of a matrix to a
 * given exponent. Default implementation uses Java's Math/pow function which is appropriate for
 * double values: arrays supporting arbitrary precision numbers or complex types will need to
 * provide their own implementation.
 * @interface
 */
clojure.core.matrix.protocols.PExponent = function(){};

clojure.core.matrix.protocols.element_pow = (function clojure$core$matrix$protocols$element_pow(m,exponent){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PExponent$element_pow$arity$2 == null))))){
return m.clojure$core$matrix$protocols$PExponent$element_pow$arity$2(m,exponent);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.element_pow[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,exponent);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.element_pow["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,exponent);
} else {
throw cljs.core.missing_protocol.call(null,"PExponent.element-pow",m);
}
}
}
});


/**
 * Protocol to support element-wise squaring of a numerical array.
 * @interface
 */
clojure.core.matrix.protocols.PSquare = function(){};

clojure.core.matrix.protocols.square = (function clojure$core$matrix$protocols$square(m){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PSquare$square$arity$1 == null))))){
return m.clojure$core$matrix$protocols$PSquare$square$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.square[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.square["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"PSquare.square",m);
}
}
}
});


/**
 * Protocol to support element-wise logistic function on a numerical array.
 * @interface
 */
clojure.core.matrix.protocols.PLogistic = function(){};

clojure.core.matrix.protocols.logistic = (function clojure$core$matrix$protocols$logistic(m){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PLogistic$logistic$arity$1 == null))))){
return m.clojure$core$matrix$protocols$PLogistic$logistic$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.logistic[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.logistic["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"PLogistic.logistic",m);
}
}
}
});


/**
 * Protocol to support mutable element-wise logistic function on a numerical array.
 * @interface
 */
clojure.core.matrix.protocols.PLogisticMutable = function(){};

clojure.core.matrix.protocols.logistic_BANG_ = (function clojure$core$matrix$protocols$logistic_BANG_(m){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PLogisticMutable$logistic_BANG_$arity$1 == null))))){
return m.clojure$core$matrix$protocols$PLogisticMutable$logistic_BANG_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.logistic_BANG_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.logistic_BANG_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"PLogisticMutable.logistic!",m);
}
}
}
});


/**
 * Protocol to support element-wise softplus function on a numerical array.
 * @interface
 */
clojure.core.matrix.protocols.PSoftplus = function(){};

clojure.core.matrix.protocols.softplus = (function clojure$core$matrix$protocols$softplus(m){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PSoftplus$softplus$arity$1 == null))))){
return m.clojure$core$matrix$protocols$PSoftplus$softplus$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.softplus[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.softplus["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"PSoftplus.softplus",m);
}
}
}
});


/**
 * Protocol to support mutable element-wise softplus function on a numerical array.
 * @interface
 */
clojure.core.matrix.protocols.PSoftplusMutable = function(){};

clojure.core.matrix.protocols.softplus_BANG_ = (function clojure$core$matrix$protocols$softplus_BANG_(m){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PSoftplusMutable$softplus_BANG_$arity$1 == null))))){
return m.clojure$core$matrix$protocols$PSoftplusMutable$softplus_BANG_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.softplus_BANG_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.softplus_BANG_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"PSoftplusMutable.softplus!",m);
}
}
}
});


/**
 * Protocol to support element-wise relu function on a numerical array.
 * @interface
 */
clojure.core.matrix.protocols.PReLU = function(){};

clojure.core.matrix.protocols.relu = (function clojure$core$matrix$protocols$relu(m){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PReLU$relu$arity$1 == null))))){
return m.clojure$core$matrix$protocols$PReLU$relu$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.relu[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.relu["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"PReLU.relu",m);
}
}
}
});


/**
 * Protocol to support mutable element-wise relu function on a numerical array.
 * @interface
 */
clojure.core.matrix.protocols.PReLUMutable = function(){};

clojure.core.matrix.protocols.relu_BANG_ = (function clojure$core$matrix$protocols$relu_BANG_(m){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PReLUMutable$relu_BANG_$arity$1 == null))))){
return m.clojure$core$matrix$protocols$PReLUMutable$relu_BANG_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.relu_BANG_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.relu_BANG_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"PReLUMutable.relu!",m);
}
}
}
});


/**
 * Protocol to support element-wise softmax function on a numerical vector.
 * @interface
 */
clojure.core.matrix.protocols.PSoftmax = function(){};

clojure.core.matrix.protocols.softmax = (function clojure$core$matrix$protocols$softmax(m){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PSoftmax$softmax$arity$1 == null))))){
return m.clojure$core$matrix$protocols$PSoftmax$softmax$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.softmax[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.softmax["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"PSoftmax.softmax",m);
}
}
}
});


/**
 * Protocol to support mutable element-wise softmax function on a numerical vector.
 * @interface
 */
clojure.core.matrix.protocols.PSoftmaxMutable = function(){};

clojure.core.matrix.protocols.softmax_BANG_ = (function clojure$core$matrix$protocols$softmax_BANG_(m){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PSoftmaxMutable$softmax_BANG_$arity$1 == null))))){
return m.clojure$core$matrix$protocols$PSoftmaxMutable$softmax_BANG_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.softmax_BANG_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.softmax_BANG_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"PSoftmaxMutable.softmax!",m);
}
}
}
});


/**
 * Protocol for elementary row operations
 * @interface
 */
clojure.core.matrix.protocols.PRowOperations = function(){};

/**
 * Returns a new matrix with rows i and j swapped
 */
clojure.core.matrix.protocols.swap_rows = (function clojure$core$matrix$protocols$swap_rows(m,i,j){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PRowOperations$swap_rows$arity$3 == null))))){
return m.clojure$core$matrix$protocols$PRowOperations$swap_rows$arity$3(m,i,j);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.swap_rows[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,i,j);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.swap_rows["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,i,j);
} else {
throw cljs.core.missing_protocol.call(null,"PRowOperations.swap-rows",m);
}
}
}
});

/**
 * Returns a new matrix with row i multiplied by k
 */
clojure.core.matrix.protocols.multiply_row = (function clojure$core$matrix$protocols$multiply_row(m,i,k){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PRowOperations$multiply_row$arity$3 == null))))){
return m.clojure$core$matrix$protocols$PRowOperations$multiply_row$arity$3(m,i,k);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.multiply_row[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,i,k);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.multiply_row["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,i,k);
} else {
throw cljs.core.missing_protocol.call(null,"PRowOperations.multiply-row",m);
}
}
}
});

/**
 * Returns a new matrix with row i added to row j times k
 */
clojure.core.matrix.protocols.add_row = (function clojure$core$matrix$protocols$add_row(m,i,j,k){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PRowOperations$add_row$arity$4 == null))))){
return m.clojure$core$matrix$protocols$PRowOperations$add_row$arity$4(m,i,j,k);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.add_row[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,i,j,k);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.add_row["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,i,j,k);
} else {
throw cljs.core.missing_protocol.call(null,"PRowOperations.add-row",m);
}
}
}
});


/**
 * Protocol for row setting. Should set a dimension 0 (row) slice to thegiven row value.
 * @interface
 */
clojure.core.matrix.protocols.PRowSetting = function(){};

clojure.core.matrix.protocols.set_row = (function clojure$core$matrix$protocols$set_row(m,i,row){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PRowSetting$set_row$arity$3 == null))))){
return m.clojure$core$matrix$protocols$PRowSetting$set_row$arity$3(m,i,row);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.set_row[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,i,row);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.set_row["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,i,row);
} else {
throw cljs.core.missing_protocol.call(null,"PRowSetting.set-row",m);
}
}
}
});

clojure.core.matrix.protocols.set_row_BANG_ = (function clojure$core$matrix$protocols$set_row_BANG_(m,i,row){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PRowSetting$set_row_BANG_$arity$3 == null))))){
return m.clojure$core$matrix$protocols$PRowSetting$set_row_BANG_$arity$3(m,i,row);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.set_row_BANG_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,i,row);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.set_row_BANG_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,i,row);
} else {
throw cljs.core.missing_protocol.call(null,"PRowSetting.set-row!",m);
}
}
}
});


/**
 * Protocol for column setting. Should set a dimension 1 (column) slice to the given column value.
 * @interface
 */
clojure.core.matrix.protocols.PColumnSetting = function(){};

clojure.core.matrix.protocols.set_column = (function clojure$core$matrix$protocols$set_column(m,i,column){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PColumnSetting$set_column$arity$3 == null))))){
return m.clojure$core$matrix$protocols$PColumnSetting$set_column$arity$3(m,i,column);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.set_column[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,i,column);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.set_column["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,i,column);
} else {
throw cljs.core.missing_protocol.call(null,"PColumnSetting.set-column",m);
}
}
}
});

clojure.core.matrix.protocols.set_column_BANG_ = (function clojure$core$matrix$protocols$set_column_BANG_(m,i,column){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PColumnSetting$set_column_BANG_$arity$3 == null))))){
return m.clojure$core$matrix$protocols$PColumnSetting$set_column_BANG_$arity$3(m,i,column);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.set_column_BANG_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,i,column);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.set_column_BANG_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,i,column);
} else {
throw cljs.core.missing_protocol.call(null,"PColumnSetting.set-column!",m);
}
}
}
});


/**
 * Protocol to support mathematical functions applied element-wise to a numerical array.
 * @interface
 */
clojure.core.matrix.protocols.PMathsFunctions = function(){};

clojure.core.matrix.protocols.abs = (function clojure$core$matrix$protocols$abs(m){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PMathsFunctions$abs$arity$1 == null))))){
return m.clojure$core$matrix$protocols$PMathsFunctions$abs$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.abs[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.abs["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"PMathsFunctions.abs",m);
}
}
}
});

clojure.core.matrix.protocols.acos = (function clojure$core$matrix$protocols$acos(m){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PMathsFunctions$acos$arity$1 == null))))){
return m.clojure$core$matrix$protocols$PMathsFunctions$acos$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.acos[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.acos["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"PMathsFunctions.acos",m);
}
}
}
});

clojure.core.matrix.protocols.asin = (function clojure$core$matrix$protocols$asin(m){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PMathsFunctions$asin$arity$1 == null))))){
return m.clojure$core$matrix$protocols$PMathsFunctions$asin$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.asin[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.asin["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"PMathsFunctions.asin",m);
}
}
}
});

clojure.core.matrix.protocols.atan = (function clojure$core$matrix$protocols$atan(m){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PMathsFunctions$atan$arity$1 == null))))){
return m.clojure$core$matrix$protocols$PMathsFunctions$atan$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.atan[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.atan["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"PMathsFunctions.atan",m);
}
}
}
});

clojure.core.matrix.protocols.cbrt = (function clojure$core$matrix$protocols$cbrt(m){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PMathsFunctions$cbrt$arity$1 == null))))){
return m.clojure$core$matrix$protocols$PMathsFunctions$cbrt$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.cbrt[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.cbrt["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"PMathsFunctions.cbrt",m);
}
}
}
});

clojure.core.matrix.protocols.ceil = (function clojure$core$matrix$protocols$ceil(m){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PMathsFunctions$ceil$arity$1 == null))))){
return m.clojure$core$matrix$protocols$PMathsFunctions$ceil$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.ceil[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.ceil["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"PMathsFunctions.ceil",m);
}
}
}
});

clojure.core.matrix.protocols.cos = (function clojure$core$matrix$protocols$cos(m){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PMathsFunctions$cos$arity$1 == null))))){
return m.clojure$core$matrix$protocols$PMathsFunctions$cos$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.cos[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.cos["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"PMathsFunctions.cos",m);
}
}
}
});

clojure.core.matrix.protocols.cosh = (function clojure$core$matrix$protocols$cosh(m){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PMathsFunctions$cosh$arity$1 == null))))){
return m.clojure$core$matrix$protocols$PMathsFunctions$cosh$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.cosh[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.cosh["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"PMathsFunctions.cosh",m);
}
}
}
});

clojure.core.matrix.protocols.exp = (function clojure$core$matrix$protocols$exp(m){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PMathsFunctions$exp$arity$1 == null))))){
return m.clojure$core$matrix$protocols$PMathsFunctions$exp$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.exp[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.exp["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"PMathsFunctions.exp",m);
}
}
}
});

clojure.core.matrix.protocols.floor = (function clojure$core$matrix$protocols$floor(m){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PMathsFunctions$floor$arity$1 == null))))){
return m.clojure$core$matrix$protocols$PMathsFunctions$floor$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.floor[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.floor["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"PMathsFunctions.floor",m);
}
}
}
});

clojure.core.matrix.protocols.log = (function clojure$core$matrix$protocols$log(m){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PMathsFunctions$log$arity$1 == null))))){
return m.clojure$core$matrix$protocols$PMathsFunctions$log$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.log[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.log["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"PMathsFunctions.log",m);
}
}
}
});

clojure.core.matrix.protocols.log10 = (function clojure$core$matrix$protocols$log10(m){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PMathsFunctions$log10$arity$1 == null))))){
return m.clojure$core$matrix$protocols$PMathsFunctions$log10$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.log10[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.log10["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"PMathsFunctions.log10",m);
}
}
}
});

clojure.core.matrix.protocols.round = (function clojure$core$matrix$protocols$round(m){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PMathsFunctions$round$arity$1 == null))))){
return m.clojure$core$matrix$protocols$PMathsFunctions$round$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.round[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.round["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"PMathsFunctions.round",m);
}
}
}
});

clojure.core.matrix.protocols.signum = (function clojure$core$matrix$protocols$signum(m){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PMathsFunctions$signum$arity$1 == null))))){
return m.clojure$core$matrix$protocols$PMathsFunctions$signum$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.signum[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.signum["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"PMathsFunctions.signum",m);
}
}
}
});

clojure.core.matrix.protocols.sin = (function clojure$core$matrix$protocols$sin(m){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PMathsFunctions$sin$arity$1 == null))))){
return m.clojure$core$matrix$protocols$PMathsFunctions$sin$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.sin[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.sin["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"PMathsFunctions.sin",m);
}
}
}
});

clojure.core.matrix.protocols.sinh = (function clojure$core$matrix$protocols$sinh(m){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PMathsFunctions$sinh$arity$1 == null))))){
return m.clojure$core$matrix$protocols$PMathsFunctions$sinh$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.sinh[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.sinh["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"PMathsFunctions.sinh",m);
}
}
}
});

clojure.core.matrix.protocols.sqrt = (function clojure$core$matrix$protocols$sqrt(m){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PMathsFunctions$sqrt$arity$1 == null))))){
return m.clojure$core$matrix$protocols$PMathsFunctions$sqrt$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.sqrt[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.sqrt["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"PMathsFunctions.sqrt",m);
}
}
}
});

clojure.core.matrix.protocols.tan = (function clojure$core$matrix$protocols$tan(m){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PMathsFunctions$tan$arity$1 == null))))){
return m.clojure$core$matrix$protocols$PMathsFunctions$tan$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.tan[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.tan["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"PMathsFunctions.tan",m);
}
}
}
});

clojure.core.matrix.protocols.tanh = (function clojure$core$matrix$protocols$tanh(m){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PMathsFunctions$tanh$arity$1 == null))))){
return m.clojure$core$matrix$protocols$PMathsFunctions$tanh$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.tanh[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.tanh["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"PMathsFunctions.tanh",m);
}
}
}
});

clojure.core.matrix.protocols.to_degrees = (function clojure$core$matrix$protocols$to_degrees(m){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PMathsFunctions$to_degrees$arity$1 == null))))){
return m.clojure$core$matrix$protocols$PMathsFunctions$to_degrees$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.to_degrees[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.to_degrees["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"PMathsFunctions.to-degrees",m);
}
}
}
});

clojure.core.matrix.protocols.to_radians = (function clojure$core$matrix$protocols$to_radians(m){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PMathsFunctions$to_radians$arity$1 == null))))){
return m.clojure$core$matrix$protocols$PMathsFunctions$to_radians$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.to_radians[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.to_radians["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"PMathsFunctions.to-radians",m);
}
}
}
});


/**
 * Protocol to support mutable mathematical functions applied element-wise to a numerical array.
 * @interface
 */
clojure.core.matrix.protocols.PMathsFunctionsMutable = function(){};

clojure.core.matrix.protocols.abs_BANG_ = (function clojure$core$matrix$protocols$abs_BANG_(m){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PMathsFunctionsMutable$abs_BANG_$arity$1 == null))))){
return m.clojure$core$matrix$protocols$PMathsFunctionsMutable$abs_BANG_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.abs_BANG_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.abs_BANG_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"PMathsFunctionsMutable.abs!",m);
}
}
}
});

clojure.core.matrix.protocols.acos_BANG_ = (function clojure$core$matrix$protocols$acos_BANG_(m){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PMathsFunctionsMutable$acos_BANG_$arity$1 == null))))){
return m.clojure$core$matrix$protocols$PMathsFunctionsMutable$acos_BANG_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.acos_BANG_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.acos_BANG_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"PMathsFunctionsMutable.acos!",m);
}
}
}
});

clojure.core.matrix.protocols.asin_BANG_ = (function clojure$core$matrix$protocols$asin_BANG_(m){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PMathsFunctionsMutable$asin_BANG_$arity$1 == null))))){
return m.clojure$core$matrix$protocols$PMathsFunctionsMutable$asin_BANG_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.asin_BANG_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.asin_BANG_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"PMathsFunctionsMutable.asin!",m);
}
}
}
});

clojure.core.matrix.protocols.atan_BANG_ = (function clojure$core$matrix$protocols$atan_BANG_(m){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PMathsFunctionsMutable$atan_BANG_$arity$1 == null))))){
return m.clojure$core$matrix$protocols$PMathsFunctionsMutable$atan_BANG_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.atan_BANG_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.atan_BANG_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"PMathsFunctionsMutable.atan!",m);
}
}
}
});

clojure.core.matrix.protocols.cbrt_BANG_ = (function clojure$core$matrix$protocols$cbrt_BANG_(m){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PMathsFunctionsMutable$cbrt_BANG_$arity$1 == null))))){
return m.clojure$core$matrix$protocols$PMathsFunctionsMutable$cbrt_BANG_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.cbrt_BANG_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.cbrt_BANG_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"PMathsFunctionsMutable.cbrt!",m);
}
}
}
});

clojure.core.matrix.protocols.ceil_BANG_ = (function clojure$core$matrix$protocols$ceil_BANG_(m){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PMathsFunctionsMutable$ceil_BANG_$arity$1 == null))))){
return m.clojure$core$matrix$protocols$PMathsFunctionsMutable$ceil_BANG_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.ceil_BANG_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.ceil_BANG_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"PMathsFunctionsMutable.ceil!",m);
}
}
}
});

clojure.core.matrix.protocols.cos_BANG_ = (function clojure$core$matrix$protocols$cos_BANG_(m){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PMathsFunctionsMutable$cos_BANG_$arity$1 == null))))){
return m.clojure$core$matrix$protocols$PMathsFunctionsMutable$cos_BANG_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.cos_BANG_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.cos_BANG_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"PMathsFunctionsMutable.cos!",m);
}
}
}
});

clojure.core.matrix.protocols.cosh_BANG_ = (function clojure$core$matrix$protocols$cosh_BANG_(m){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PMathsFunctionsMutable$cosh_BANG_$arity$1 == null))))){
return m.clojure$core$matrix$protocols$PMathsFunctionsMutable$cosh_BANG_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.cosh_BANG_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.cosh_BANG_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"PMathsFunctionsMutable.cosh!",m);
}
}
}
});

clojure.core.matrix.protocols.exp_BANG_ = (function clojure$core$matrix$protocols$exp_BANG_(m){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PMathsFunctionsMutable$exp_BANG_$arity$1 == null))))){
return m.clojure$core$matrix$protocols$PMathsFunctionsMutable$exp_BANG_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.exp_BANG_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.exp_BANG_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"PMathsFunctionsMutable.exp!",m);
}
}
}
});

clojure.core.matrix.protocols.floor_BANG_ = (function clojure$core$matrix$protocols$floor_BANG_(m){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PMathsFunctionsMutable$floor_BANG_$arity$1 == null))))){
return m.clojure$core$matrix$protocols$PMathsFunctionsMutable$floor_BANG_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.floor_BANG_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.floor_BANG_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"PMathsFunctionsMutable.floor!",m);
}
}
}
});

clojure.core.matrix.protocols.log_BANG_ = (function clojure$core$matrix$protocols$log_BANG_(m){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PMathsFunctionsMutable$log_BANG_$arity$1 == null))))){
return m.clojure$core$matrix$protocols$PMathsFunctionsMutable$log_BANG_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.log_BANG_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.log_BANG_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"PMathsFunctionsMutable.log!",m);
}
}
}
});

clojure.core.matrix.protocols.log10_BANG_ = (function clojure$core$matrix$protocols$log10_BANG_(m){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PMathsFunctionsMutable$log10_BANG_$arity$1 == null))))){
return m.clojure$core$matrix$protocols$PMathsFunctionsMutable$log10_BANG_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.log10_BANG_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.log10_BANG_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"PMathsFunctionsMutable.log10!",m);
}
}
}
});

clojure.core.matrix.protocols.round_BANG_ = (function clojure$core$matrix$protocols$round_BANG_(m){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PMathsFunctionsMutable$round_BANG_$arity$1 == null))))){
return m.clojure$core$matrix$protocols$PMathsFunctionsMutable$round_BANG_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.round_BANG_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.round_BANG_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"PMathsFunctionsMutable.round!",m);
}
}
}
});

clojure.core.matrix.protocols.signum_BANG_ = (function clojure$core$matrix$protocols$signum_BANG_(m){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PMathsFunctionsMutable$signum_BANG_$arity$1 == null))))){
return m.clojure$core$matrix$protocols$PMathsFunctionsMutable$signum_BANG_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.signum_BANG_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.signum_BANG_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"PMathsFunctionsMutable.signum!",m);
}
}
}
});

clojure.core.matrix.protocols.sin_BANG_ = (function clojure$core$matrix$protocols$sin_BANG_(m){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PMathsFunctionsMutable$sin_BANG_$arity$1 == null))))){
return m.clojure$core$matrix$protocols$PMathsFunctionsMutable$sin_BANG_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.sin_BANG_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.sin_BANG_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"PMathsFunctionsMutable.sin!",m);
}
}
}
});

clojure.core.matrix.protocols.sinh_BANG_ = (function clojure$core$matrix$protocols$sinh_BANG_(m){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PMathsFunctionsMutable$sinh_BANG_$arity$1 == null))))){
return m.clojure$core$matrix$protocols$PMathsFunctionsMutable$sinh_BANG_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.sinh_BANG_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.sinh_BANG_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"PMathsFunctionsMutable.sinh!",m);
}
}
}
});

clojure.core.matrix.protocols.sqrt_BANG_ = (function clojure$core$matrix$protocols$sqrt_BANG_(m){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PMathsFunctionsMutable$sqrt_BANG_$arity$1 == null))))){
return m.clojure$core$matrix$protocols$PMathsFunctionsMutable$sqrt_BANG_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.sqrt_BANG_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.sqrt_BANG_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"PMathsFunctionsMutable.sqrt!",m);
}
}
}
});

clojure.core.matrix.protocols.tan_BANG_ = (function clojure$core$matrix$protocols$tan_BANG_(m){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PMathsFunctionsMutable$tan_BANG_$arity$1 == null))))){
return m.clojure$core$matrix$protocols$PMathsFunctionsMutable$tan_BANG_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.tan_BANG_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.tan_BANG_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"PMathsFunctionsMutable.tan!",m);
}
}
}
});

clojure.core.matrix.protocols.tanh_BANG_ = (function clojure$core$matrix$protocols$tanh_BANG_(m){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PMathsFunctionsMutable$tanh_BANG_$arity$1 == null))))){
return m.clojure$core$matrix$protocols$PMathsFunctionsMutable$tanh_BANG_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.tanh_BANG_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.tanh_BANG_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"PMathsFunctionsMutable.tanh!",m);
}
}
}
});

clojure.core.matrix.protocols.to_degrees_BANG_ = (function clojure$core$matrix$protocols$to_degrees_BANG_(m){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PMathsFunctionsMutable$to_degrees_BANG_$arity$1 == null))))){
return m.clojure$core$matrix$protocols$PMathsFunctionsMutable$to_degrees_BANG_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.to_degrees_BANG_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.to_degrees_BANG_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"PMathsFunctionsMutable.to-degrees!",m);
}
}
}
});

clojure.core.matrix.protocols.to_radians_BANG_ = (function clojure$core$matrix$protocols$to_radians_BANG_(m){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PMathsFunctionsMutable$to_radians_BANG_$arity$1 == null))))){
return m.clojure$core$matrix$protocols$PMathsFunctionsMutable$to_radians_BANG_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.to_radians_BANG_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.to_radians_BANG_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"PMathsFunctionsMutable.to-radians!",m);
}
}
}
});


/**
 * Protocol to return the total count of elements in matrix. Result may be any integer type,
 * typically a java.lang.Long
 * @interface
 */
clojure.core.matrix.protocols.PElementCount = function(){};

clojure.core.matrix.protocols.element_count = (function clojure$core$matrix$protocols$element_count(m){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PElementCount$element_count$arity$1 == null))))){
return m.clojure$core$matrix$protocols$PElementCount$element_count$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.element_count[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.element_count["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"PElementCount.element-count",m);
}
}
}
});


/**
 * Protocol to return the minimum and maximum elements in a numerical array. Must throw an exception
 * if the array is not numerical.
 * @interface
 */
clojure.core.matrix.protocols.PElementMinMax = function(){};

clojure.core.matrix.protocols.element_min = (function clojure$core$matrix$protocols$element_min(m){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PElementMinMax$element_min$arity$1 == null))))){
return m.clojure$core$matrix$protocols$PElementMinMax$element_min$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.element_min[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.element_min["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"PElementMinMax.element-min",m);
}
}
}
});

clojure.core.matrix.protocols.element_max = (function clojure$core$matrix$protocols$element_max(m){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PElementMinMax$element_max$arity$1 == null))))){
return m.clojure$core$matrix$protocols$PElementMinMax$element_max$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.element_max[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.element_max["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"PElementMinMax.element-max",m);
}
}
}
});

/**
 * Returns a matrix where the elements are clamped to be within lower and
 *  upper bounds specified by a and b, respectively.
 */
clojure.core.matrix.protocols.element_clamp = (function clojure$core$matrix$protocols$element_clamp(m,a,b){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PElementMinMax$element_clamp$arity$3 == null))))){
return m.clojure$core$matrix$protocols$PElementMinMax$element_clamp$arity$3(m,a,b);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.element_clamp[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,a,b);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.element_clamp["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,a,b);
} else {
throw cljs.core.missing_protocol.call(null,"PElementMinMax.element-clamp",m);
}
}
}
});


/**
 * Protocol to allow element-wise comparison of elements in an array or matrix.
 * @interface
 */
clojure.core.matrix.protocols.PCompare = function(){};

/**
 * Return the sign (signum) of the element-wise substraction of two scalars,
 *  arrays or matrices i.e., must satisfy (signum (sub A B).
 */
clojure.core.matrix.protocols.element_compare = (function clojure$core$matrix$protocols$element_compare(a,b){
if(((!((a == null))) && (!((a.clojure$core$matrix$protocols$PCompare$element_compare$arity$2 == null))))){
return a.clojure$core$matrix$protocols$PCompare$element_compare$arity$2(a,b);
} else {
var x__4211__auto__ = (((a == null))?null:a);
var m__4212__auto__ = (clojure.core.matrix.protocols.element_compare[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,a,b);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.element_compare["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,a,b);
} else {
throw cljs.core.missing_protocol.call(null,"PCompare.element-compare",a);
}
}
}
});

/**
 * Element-wise if statement.
 * 
 *  Traverse each element, x, of a array or matrix, m. If:
 *    - x > 0, return a (if scalar) or corresponding element of a (if a is an
 *      array or matrix with same shape shape as m).
 *    - x <= 0, return b (if scalar) or corresponding element in b (if b is an
 *      array or matrix with same shape shape as m).
 * 
 *  Return an array or matrix with the same shape as m.
 */
clojure.core.matrix.protocols.element_if = (function clojure$core$matrix$protocols$element_if(m,a,b){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PCompare$element_if$arity$3 == null))))){
return m.clojure$core$matrix$protocols$PCompare$element_if$arity$3(m,a,b);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.element_if[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,a,b);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.element_if["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,a,b);
} else {
throw cljs.core.missing_protocol.call(null,"PCompare.element-if",m);
}
}
}
});

/**
 * Return a binary array or matrix where elements of m less-than a are
 *  represented by 1 and elements greater-than a are represented as 0.
 */
clojure.core.matrix.protocols.element_lt = (function clojure$core$matrix$protocols$element_lt(m,a){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PCompare$element_lt$arity$2 == null))))){
return m.clojure$core$matrix$protocols$PCompare$element_lt$arity$2(m,a);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.element_lt[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,a);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.element_lt["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,a);
} else {
throw cljs.core.missing_protocol.call(null,"PCompare.element-lt",m);
}
}
}
});

/**
 * Return a binary array or matrix where elements of m less-than-or-equal
 *  to a are  represented by 1 and elements greater-than a are represented as 0.
 */
clojure.core.matrix.protocols.element_le = (function clojure$core$matrix$protocols$element_le(m,a){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PCompare$element_le$arity$2 == null))))){
return m.clojure$core$matrix$protocols$PCompare$element_le$arity$2(m,a);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.element_le[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,a);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.element_le["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,a);
} else {
throw cljs.core.missing_protocol.call(null,"PCompare.element-le",m);
}
}
}
});

/**
 * Return a binary array or matrix where elements of m greater-than a are
 *  represented by 1 and elements less-than a are represented as 0.
 */
clojure.core.matrix.protocols.element_gt = (function clojure$core$matrix$protocols$element_gt(m,a){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PCompare$element_gt$arity$2 == null))))){
return m.clojure$core$matrix$protocols$PCompare$element_gt$arity$2(m,a);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.element_gt[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,a);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.element_gt["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,a);
} else {
throw cljs.core.missing_protocol.call(null,"PCompare.element-gt",m);
}
}
}
});

/**
 * Return a binary array or matrix where elements of m greater-than-or-equal
 *  to a are  represented by 1 and elements less than a are represented as 0.
 */
clojure.core.matrix.protocols.element_ge = (function clojure$core$matrix$protocols$element_ge(m,a){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PCompare$element_ge$arity$2 == null))))){
return m.clojure$core$matrix$protocols$PCompare$element_ge$arity$2(m,a);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.element_ge[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,a);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.element_ge["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,a);
} else {
throw cljs.core.missing_protocol.call(null,"PCompare.element-ge",m);
}
}
}
});

/**
 * Return a binary array or matrix where elements of m not-equal to a are
 *  represented by 1 and elements equal to a are represented as 0.
 */
clojure.core.matrix.protocols.element_ne = (function clojure$core$matrix$protocols$element_ne(m,a){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PCompare$element_ne$arity$2 == null))))){
return m.clojure$core$matrix$protocols$PCompare$element_ne$arity$2(m,a);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.element_ne[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,a);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.element_ne["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,a);
} else {
throw cljs.core.missing_protocol.call(null,"PCompare.element-ne",m);
}
}
}
});

/**
 * Return a binary array or matrix where elements of m equal to a are
 *  represented by 1 and elements not-equal to a are represented as 0.
 */
clojure.core.matrix.protocols.element_eq = (function clojure$core$matrix$protocols$element_eq(m,a){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PCompare$element_eq$arity$2 == null))))){
return m.clojure$core$matrix$protocols$PCompare$element_eq$arity$2(m,a);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.element_eq[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,a);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.element_eq["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,a);
} else {
throw cljs.core.missing_protocol.call(null,"PCompare.element-eq",m);
}
}
}
});


/**
 * Base blas support.  Note that the largest differences
 * from the C blas functions is that the return value is provided
 * first so that the protocol machinery can work (as opposed to alpha, which
 * would often be a numeric base type).
 * @interface
 */
clojure.core.matrix.protocols.PBLASBase = function(){};

clojure.core.matrix.protocols.gemm_BANG_ = (function clojure$core$matrix$protocols$gemm_BANG_(c,trans_a_QMARK_,trans_b_QMARK_,alpha,a,b,beta){
if(((!((c == null))) && (!((c.clojure$core$matrix$protocols$PBLASBase$gemm_BANG_$arity$7 == null))))){
return c.clojure$core$matrix$protocols$PBLASBase$gemm_BANG_$arity$7(c,trans_a_QMARK_,trans_b_QMARK_,alpha,a,b,beta);
} else {
var x__4211__auto__ = (((c == null))?null:c);
var m__4212__auto__ = (clojure.core.matrix.protocols.gemm_BANG_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,c,trans_a_QMARK_,trans_b_QMARK_,alpha,a,b,beta);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.gemm_BANG_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,c,trans_a_QMARK_,trans_b_QMARK_,alpha,a,b,beta);
} else {
throw cljs.core.missing_protocol.call(null,"PBLASBase.gemm!",c);
}
}
}
});

clojure.core.matrix.protocols.gemv_BANG_ = (function clojure$core$matrix$protocols$gemv_BANG_(c,trans_a_QMARK_,alpha,a,b,beta){
if(((!((c == null))) && (!((c.clojure$core$matrix$protocols$PBLASBase$gemv_BANG_$arity$6 == null))))){
return c.clojure$core$matrix$protocols$PBLASBase$gemv_BANG_$arity$6(c,trans_a_QMARK_,alpha,a,b,beta);
} else {
var x__4211__auto__ = (((c == null))?null:c);
var m__4212__auto__ = (clojure.core.matrix.protocols.gemv_BANG_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,c,trans_a_QMARK_,alpha,a,b,beta);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.gemv_BANG_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,c,trans_a_QMARK_,alpha,a,b,beta);
} else {
throw cljs.core.missing_protocol.call(null,"PBLASBase.gemv!",c);
}
}
}
});


/**
 * Maps a function over every slice of one or more arrays.
 * @interface
 */
clojure.core.matrix.protocols.PSliceMap = function(){};

/**
 * Maps f over all slices of m (and optionally other arrays)
 */
clojure.core.matrix.protocols.slice_map = (function clojure$core$matrix$protocols$slice_map(var_args){
var G__22046 = arguments.length;
switch (G__22046) {
case 2:
return clojure.core.matrix.protocols.slice_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.protocols.slice_map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.core.matrix.protocols.slice_map.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.core.matrix.protocols.slice_map.cljs$core$IFn$_invoke$arity$2 = (function (m,f){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PSliceMap$slice_map$arity$2 == null))))){
return m.clojure$core$matrix$protocols$PSliceMap$slice_map$arity$2(m,f);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.slice_map[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,f);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.slice_map["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,f);
} else {
throw cljs.core.missing_protocol.call(null,"PSliceMap.slice-map",m);
}
}
}
});

clojure.core.matrix.protocols.slice_map.cljs$core$IFn$_invoke$arity$3 = (function (m,f,a){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PSliceMap$slice_map$arity$3 == null))))){
return m.clojure$core$matrix$protocols$PSliceMap$slice_map$arity$3(m,f,a);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.slice_map[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,f,a);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.slice_map["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,f,a);
} else {
throw cljs.core.missing_protocol.call(null,"PSliceMap.slice-map",m);
}
}
}
});

clojure.core.matrix.protocols.slice_map.cljs$core$IFn$_invoke$arity$4 = (function (m,f,a,more){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PSliceMap$slice_map$arity$4 == null))))){
return m.clojure$core$matrix$protocols$PSliceMap$slice_map$arity$4(m,f,a,more);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.slice_map[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,f,a,more);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.slice_map["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,f,a,more);
} else {
throw cljs.core.missing_protocol.call(null,"PSliceMap.slice-map",m);
}
}
}
});

clojure.core.matrix.protocols.slice_map.cljs$lang$maxFixedArity = 4;



/**
 * Filters the slices of the given array, returning only those which satisfy the given predicate.
 * @interface
 */
clojure.core.matrix.protocols.PFilterSlices = function(){};

/**
 * Runs f on all slices of m. Must return those slices which satisfy (f slice).
 *   Must return nil if no slices meet the predicate.
 *   Must return either a new seqable array containing the filtered slices or a vector of slices
 *   (both of which are valid core.matrix arrays)
 */
clojure.core.matrix.protocols.filter_slices = (function clojure$core$matrix$protocols$filter_slices(m,f){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PFilterSlices$filter_slices$arity$2 == null))))){
return m.clojure$core$matrix$protocols$PFilterSlices$filter_slices$arity$2(m,f);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.filter_slices[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,f);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.filter_slices["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,f);
} else {
throw cljs.core.missing_protocol.call(null,"PFilterSlices.filter-slices",m);
}
}
}
});


/**
 * Protocol to allow functional-style operations on matrix elements.
 * @interface
 */
clojure.core.matrix.protocols.PFunctionalOperations = function(){};

/**
 * Must return a seqable object containing all elements of the matrix, in row-major order.
 *   i.e. it must be possible to call clojure.core/seq on the result. Valid sequable objects may
 *   include Java arrays, Clojure vectors/sequences, and any Java object that implement Iterable.
 */
clojure.core.matrix.protocols.element_seq = (function clojure$core$matrix$protocols$element_seq(m){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PFunctionalOperations$element_seq$arity$1 == null))))){
return m.clojure$core$matrix$protocols$PFunctionalOperations$element_seq$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.element_seq[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.element_seq["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"PFunctionalOperations.element-seq",m);
}
}
}
});

/**
 * Maps f over all elements of m (and optionally other arrays), returning a new matrix.
 *   f is expected to produce elements of a type supported by the implementation of m - failure
 *   to do so may cause an error.
 */
clojure.core.matrix.protocols.element_map = (function clojure$core$matrix$protocols$element_map(var_args){
var G__22049 = arguments.length;
switch (G__22049) {
case 2:
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2 = (function (m,f){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PFunctionalOperations$element_map$arity$2 == null))))){
return m.clojure$core$matrix$protocols$PFunctionalOperations$element_map$arity$2(m,f);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.element_map[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,f);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.element_map["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,f);
} else {
throw cljs.core.missing_protocol.call(null,"PFunctionalOperations.element-map",m);
}
}
}
});

clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$3 = (function (m,f,a){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PFunctionalOperations$element_map$arity$3 == null))))){
return m.clojure$core$matrix$protocols$PFunctionalOperations$element_map$arity$3(m,f,a);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.element_map[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,f,a);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.element_map["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,f,a);
} else {
throw cljs.core.missing_protocol.call(null,"PFunctionalOperations.element-map",m);
}
}
}
});

clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$4 = (function (m,f,a,more){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PFunctionalOperations$element_map$arity$4 == null))))){
return m.clojure$core$matrix$protocols$PFunctionalOperations$element_map$arity$4(m,f,a,more);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.element_map[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,f,a,more);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.element_map["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,f,a,more);
} else {
throw cljs.core.missing_protocol.call(null,"PFunctionalOperations.element-map",m);
}
}
}
});

clojure.core.matrix.protocols.element_map.cljs$lang$maxFixedArity = 4;


/**
 * Maps f over all elements of m (and optionally other arrays), mutating the elements of m in place.
 *   Must throw an exception if m is not mutable.
 *   f is expected to produce elements of a type supported by the implementation of m - failure
 *   to do so may cause an error.
 */
clojure.core.matrix.protocols.element_map_BANG_ = (function clojure$core$matrix$protocols$element_map_BANG_(var_args){
var G__22051 = arguments.length;
switch (G__22051) {
case 2:
return clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (m,f){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PFunctionalOperations$element_map_BANG_$arity$2 == null))))){
return m.clojure$core$matrix$protocols$PFunctionalOperations$element_map_BANG_$arity$2(m,f);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.element_map_BANG_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,f);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.element_map_BANG_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,f);
} else {
throw cljs.core.missing_protocol.call(null,"PFunctionalOperations.element-map!",m);
}
}
}
});

clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (m,f,a){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PFunctionalOperations$element_map_BANG_$arity$3 == null))))){
return m.clojure$core$matrix$protocols$PFunctionalOperations$element_map_BANG_$arity$3(m,f,a);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.element_map_BANG_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,f,a);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.element_map_BANG_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,f,a);
} else {
throw cljs.core.missing_protocol.call(null,"PFunctionalOperations.element-map!",m);
}
}
}
});

clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (m,f,a,more){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PFunctionalOperations$element_map_BANG_$arity$4 == null))))){
return m.clojure$core$matrix$protocols$PFunctionalOperations$element_map_BANG_$arity$4(m,f,a,more);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.element_map_BANG_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,f,a,more);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.element_map_BANG_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,f,a,more);
} else {
throw cljs.core.missing_protocol.call(null,"PFunctionalOperations.element-map!",m);
}
}
}
});

clojure.core.matrix.protocols.element_map_BANG_.cljs$lang$maxFixedArity = 4;


/**
 * Reduces with the function f over all elements of m.
 *   Implementations do not need to support clojure.core/reduced
 */
clojure.core.matrix.protocols.element_reduce = (function clojure$core$matrix$protocols$element_reduce(var_args){
var G__22053 = arguments.length;
switch (G__22053) {
case 2:
return clojure.core.matrix.protocols.element_reduce.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.protocols.element_reduce.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.core.matrix.protocols.element_reduce.cljs$core$IFn$_invoke$arity$2 = (function (m,f){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PFunctionalOperations$element_reduce$arity$2 == null))))){
return m.clojure$core$matrix$protocols$PFunctionalOperations$element_reduce$arity$2(m,f);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.element_reduce[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,f);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.element_reduce["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,f);
} else {
throw cljs.core.missing_protocol.call(null,"PFunctionalOperations.element-reduce",m);
}
}
}
});

clojure.core.matrix.protocols.element_reduce.cljs$core$IFn$_invoke$arity$3 = (function (m,f,init){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PFunctionalOperations$element_reduce$arity$3 == null))))){
return m.clojure$core$matrix$protocols$PFunctionalOperations$element_reduce$arity$3(m,f,init);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.element_reduce[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,f,init);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.element_reduce["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,f,init);
} else {
throw cljs.core.missing_protocol.call(null,"PFunctionalOperations.element-reduce",m);
}
}
}
});

clojure.core.matrix.protocols.element_reduce.cljs$lang$maxFixedArity = 3;



/**
 * Protocol to support the add-emap! API function.
 * @interface
 */
clojure.core.matrix.protocols.PAddEmap = function(){};

/**
 * Maps f over all elements of a (and optionally other arrays), adding the result to dest.
 *   Must throw an exception if dest is not mutable.
 *   f is expected to produce elements of a type supported by the implementation of dest - failure
 *   to do so may cause an error.
 */
clojure.core.matrix.protocols.add_emap_BANG_ = (function clojure$core$matrix$protocols$add_emap_BANG_(var_args){
var G__22058 = arguments.length;
switch (G__22058) {
case 3:
return clojure.core.matrix.protocols.add_emap_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.core.matrix.protocols.add_emap_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return clojure.core.matrix.protocols.add_emap_BANG_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.core.matrix.protocols.add_emap_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (dest,f,a){
if(((!((dest == null))) && (!((dest.clojure$core$matrix$protocols$PAddEmap$add_emap_BANG_$arity$3 == null))))){
return dest.clojure$core$matrix$protocols$PAddEmap$add_emap_BANG_$arity$3(dest,f,a);
} else {
var x__4211__auto__ = (((dest == null))?null:dest);
var m__4212__auto__ = (clojure.core.matrix.protocols.add_emap_BANG_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,dest,f,a);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.add_emap_BANG_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,dest,f,a);
} else {
throw cljs.core.missing_protocol.call(null,"PAddEmap.add-emap!",dest);
}
}
}
});

clojure.core.matrix.protocols.add_emap_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (dest,f,a,b){
if(((!((dest == null))) && (!((dest.clojure$core$matrix$protocols$PAddEmap$add_emap_BANG_$arity$4 == null))))){
return dest.clojure$core$matrix$protocols$PAddEmap$add_emap_BANG_$arity$4(dest,f,a,b);
} else {
var x__4211__auto__ = (((dest == null))?null:dest);
var m__4212__auto__ = (clojure.core.matrix.protocols.add_emap_BANG_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,dest,f,a,b);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.add_emap_BANG_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,dest,f,a,b);
} else {
throw cljs.core.missing_protocol.call(null,"PAddEmap.add-emap!",dest);
}
}
}
});

clojure.core.matrix.protocols.add_emap_BANG_.cljs$core$IFn$_invoke$arity$5 = (function (dest,f,a,b,more){
if(((!((dest == null))) && (!((dest.clojure$core$matrix$protocols$PAddEmap$add_emap_BANG_$arity$5 == null))))){
return dest.clojure$core$matrix$protocols$PAddEmap$add_emap_BANG_$arity$5(dest,f,a,b,more);
} else {
var x__4211__auto__ = (((dest == null))?null:dest);
var m__4212__auto__ = (clojure.core.matrix.protocols.add_emap_BANG_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,dest,f,a,b,more);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.add_emap_BANG_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,dest,f,a,b,more);
} else {
throw cljs.core.missing_protocol.call(null,"PAddEmap.add-emap!",dest);
}
}
}
});

clojure.core.matrix.protocols.add_emap_BANG_.cljs$lang$maxFixedArity = 5;



/**
 * Protocol to support the set-emap! API function.
 * @interface
 */
clojure.core.matrix.protocols.PSetEmap = function(){};

/**
 * Maps f over all elements of a (and optionally other arrays), storing the result in dest.
 *   Must throw an exception if dest is not mutable.
 *   f is expected to produce elements of a type supported by the implementation of dest - failure
 *   to do so may cause an error.
 */
clojure.core.matrix.protocols.set_emap_BANG_ = (function clojure$core$matrix$protocols$set_emap_BANG_(var_args){
var G__22061 = arguments.length;
switch (G__22061) {
case 3:
return clojure.core.matrix.protocols.set_emap_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.core.matrix.protocols.set_emap_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return clojure.core.matrix.protocols.set_emap_BANG_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.core.matrix.protocols.set_emap_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (dest,f,a){
if(((!((dest == null))) && (!((dest.clojure$core$matrix$protocols$PSetEmap$set_emap_BANG_$arity$3 == null))))){
return dest.clojure$core$matrix$protocols$PSetEmap$set_emap_BANG_$arity$3(dest,f,a);
} else {
var x__4211__auto__ = (((dest == null))?null:dest);
var m__4212__auto__ = (clojure.core.matrix.protocols.set_emap_BANG_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,dest,f,a);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.set_emap_BANG_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,dest,f,a);
} else {
throw cljs.core.missing_protocol.call(null,"PSetEmap.set-emap!",dest);
}
}
}
});

clojure.core.matrix.protocols.set_emap_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (dest,f,a,b){
if(((!((dest == null))) && (!((dest.clojure$core$matrix$protocols$PSetEmap$set_emap_BANG_$arity$4 == null))))){
return dest.clojure$core$matrix$protocols$PSetEmap$set_emap_BANG_$arity$4(dest,f,a,b);
} else {
var x__4211__auto__ = (((dest == null))?null:dest);
var m__4212__auto__ = (clojure.core.matrix.protocols.set_emap_BANG_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,dest,f,a,b);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.set_emap_BANG_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,dest,f,a,b);
} else {
throw cljs.core.missing_protocol.call(null,"PSetEmap.set-emap!",dest);
}
}
}
});

clojure.core.matrix.protocols.set_emap_BANG_.cljs$core$IFn$_invoke$arity$5 = (function (dest,f,a,b,more){
if(((!((dest == null))) && (!((dest.clojure$core$matrix$protocols$PSetEmap$set_emap_BANG_$arity$5 == null))))){
return dest.clojure$core$matrix$protocols$PSetEmap$set_emap_BANG_$arity$5(dest,f,a,b,more);
} else {
var x__4211__auto__ = (((dest == null))?null:dest);
var m__4212__auto__ = (clojure.core.matrix.protocols.set_emap_BANG_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,dest,f,a,b,more);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.set_emap_BANG_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,dest,f,a,b,more);
} else {
throw cljs.core.missing_protocol.call(null,"PSetEmap.set-emap!",dest);
}
}
}
});

clojure.core.matrix.protocols.set_emap_BANG_.cljs$lang$maxFixedArity = 5;



/**
 * Protocol for map-indexed operation on matrices
 * @interface
 */
clojure.core.matrix.protocols.PMapIndexed = function(){};

/**
 * Maps f over all elements of m (and optionally other matrices), returning a new matrix.
 *   f is expected to accept an index vector and the current element value, and produce
 *   elements of a type supported by the implementation of m - failure
 *   to do so may cause an error.
 */
clojure.core.matrix.protocols.element_map_indexed = (function clojure$core$matrix$protocols$element_map_indexed(var_args){
var G__22064 = arguments.length;
switch (G__22064) {
case 2:
return clojure.core.matrix.protocols.element_map_indexed.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.protocols.element_map_indexed.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.core.matrix.protocols.element_map_indexed.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.core.matrix.protocols.element_map_indexed.cljs$core$IFn$_invoke$arity$2 = (function (m,f){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PMapIndexed$element_map_indexed$arity$2 == null))))){
return m.clojure$core$matrix$protocols$PMapIndexed$element_map_indexed$arity$2(m,f);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.element_map_indexed[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,f);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.element_map_indexed["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,f);
} else {
throw cljs.core.missing_protocol.call(null,"PMapIndexed.element-map-indexed",m);
}
}
}
});

clojure.core.matrix.protocols.element_map_indexed.cljs$core$IFn$_invoke$arity$3 = (function (m,f,a){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PMapIndexed$element_map_indexed$arity$3 == null))))){
return m.clojure$core$matrix$protocols$PMapIndexed$element_map_indexed$arity$3(m,f,a);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.element_map_indexed[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,f,a);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.element_map_indexed["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,f,a);
} else {
throw cljs.core.missing_protocol.call(null,"PMapIndexed.element-map-indexed",m);
}
}
}
});

clojure.core.matrix.protocols.element_map_indexed.cljs$core$IFn$_invoke$arity$4 = (function (m,f,a,more){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PMapIndexed$element_map_indexed$arity$4 == null))))){
return m.clojure$core$matrix$protocols$PMapIndexed$element_map_indexed$arity$4(m,f,a,more);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.element_map_indexed[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,f,a,more);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.element_map_indexed["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,f,a,more);
} else {
throw cljs.core.missing_protocol.call(null,"PMapIndexed.element-map-indexed",m);
}
}
}
});

clojure.core.matrix.protocols.element_map_indexed.cljs$lang$maxFixedArity = 4;


/**
 * Maps f over all elements of m (and optionally other matrices), mutating the elements of m in place.
 *   Must throw an exception if m is not mutable.
 *   f is expected to accept an index vector and the current element value, and produce
 *   elements of a type supported by the implementation of m - failure
 *   to do so may cause an error.
 */
clojure.core.matrix.protocols.element_map_indexed_BANG_ = (function clojure$core$matrix$protocols$element_map_indexed_BANG_(var_args){
var G__22066 = arguments.length;
switch (G__22066) {
case 2:
return clojure.core.matrix.protocols.element_map_indexed_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.protocols.element_map_indexed_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.core.matrix.protocols.element_map_indexed_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.core.matrix.protocols.element_map_indexed_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (m,f){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PMapIndexed$element_map_indexed_BANG_$arity$2 == null))))){
return m.clojure$core$matrix$protocols$PMapIndexed$element_map_indexed_BANG_$arity$2(m,f);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.element_map_indexed_BANG_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,f);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.element_map_indexed_BANG_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,f);
} else {
throw cljs.core.missing_protocol.call(null,"PMapIndexed.element-map-indexed!",m);
}
}
}
});

clojure.core.matrix.protocols.element_map_indexed_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (m,f,a){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PMapIndexed$element_map_indexed_BANG_$arity$3 == null))))){
return m.clojure$core$matrix$protocols$PMapIndexed$element_map_indexed_BANG_$arity$3(m,f,a);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.element_map_indexed_BANG_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,f,a);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.element_map_indexed_BANG_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,f,a);
} else {
throw cljs.core.missing_protocol.call(null,"PMapIndexed.element-map-indexed!",m);
}
}
}
});

clojure.core.matrix.protocols.element_map_indexed_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (m,f,a,more){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PMapIndexed$element_map_indexed_BANG_$arity$4 == null))))){
return m.clojure$core$matrix$protocols$PMapIndexed$element_map_indexed_BANG_$arity$4(m,f,a,more);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.element_map_indexed_BANG_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,f,a,more);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.element_map_indexed_BANG_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,f,a,more);
} else {
throw cljs.core.missing_protocol.call(null,"PMapIndexed.element-map-indexed!",m);
}
}
}
});

clojure.core.matrix.protocols.element_map_indexed_BANG_.cljs$lang$maxFixedArity = 4;



/**
 * Protocol for matrix predicates like identity-matrix? or zero-matrix?
 * @interface
 */
clojure.core.matrix.protocols.PMatrixPredicates = function(){};

/**
 * Returns true if the matrix m is an identity matrix
 */
clojure.core.matrix.protocols.identity_matrix_QMARK_ = (function clojure$core$matrix$protocols$identity_matrix_QMARK_(m){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PMatrixPredicates$identity_matrix_QMARK_$arity$1 == null))))){
return m.clojure$core$matrix$protocols$PMatrixPredicates$identity_matrix_QMARK_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.identity_matrix_QMARK_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.identity_matrix_QMARK_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"PMatrixPredicates.identity-matrix?",m);
}
}
}
});

/**
 * Returns true if all the elements of matrix m are zeros
 */
clojure.core.matrix.protocols.zero_matrix_QMARK_ = (function clojure$core$matrix$protocols$zero_matrix_QMARK_(m){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PMatrixPredicates$zero_matrix_QMARK_$arity$1 == null))))){
return m.clojure$core$matrix$protocols$PMatrixPredicates$zero_matrix_QMARK_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.zero_matrix_QMARK_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.zero_matrix_QMARK_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"PMatrixPredicates.zero-matrix?",m);
}
}
}
});

/**
 * Returns true if matrix m is symmetric
 */
clojure.core.matrix.protocols.symmetric_QMARK_ = (function clojure$core$matrix$protocols$symmetric_QMARK_(m){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PMatrixPredicates$symmetric_QMARK_$arity$1 == null))))){
return m.clojure$core$matrix$protocols$PMatrixPredicates$symmetric_QMARK_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.symmetric_QMARK_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.symmetric_QMARK_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"PMatrixPredicates.symmetric?",m);
}
}
}
});


/**
 * @interface
 */
clojure.core.matrix.protocols.PMatrixTypes = function(){};

/**
 * Returns true if the matrix is diagonal, i.e. zero everywhere except the main diagonal
 */
clojure.core.matrix.protocols.diagonal_QMARK_ = (function clojure$core$matrix$protocols$diagonal_QMARK_(m){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PMatrixTypes$diagonal_QMARK_$arity$1 == null))))){
return m.clojure$core$matrix$protocols$PMatrixTypes$diagonal_QMARK_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.diagonal_QMARK_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.diagonal_QMARK_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"PMatrixTypes.diagonal?",m);
}
}
}
});

/**
 * Returns true if the matrix m is upper triangualar
 */
clojure.core.matrix.protocols.upper_triangular_QMARK_ = (function clojure$core$matrix$protocols$upper_triangular_QMARK_(m){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PMatrixTypes$upper_triangular_QMARK_$arity$1 == null))))){
return m.clojure$core$matrix$protocols$PMatrixTypes$upper_triangular_QMARK_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.upper_triangular_QMARK_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.upper_triangular_QMARK_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"PMatrixTypes.upper-triangular?",m);
}
}
}
});

/**
 * Returns true if the matrix m is lower triangualar
 */
clojure.core.matrix.protocols.lower_triangular_QMARK_ = (function clojure$core$matrix$protocols$lower_triangular_QMARK_(m){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PMatrixTypes$lower_triangular_QMARK_$arity$1 == null))))){
return m.clojure$core$matrix$protocols$PMatrixTypes$lower_triangular_QMARK_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.lower_triangular_QMARK_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.lower_triangular_QMARK_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"PMatrixTypes.lower-triangular?",m);
}
}
}
});

/**
 * Returns true if the matrix is positive definite
 */
clojure.core.matrix.protocols.positive_definite_QMARK_ = (function clojure$core$matrix$protocols$positive_definite_QMARK_(m){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PMatrixTypes$positive_definite_QMARK_$arity$1 == null))))){
return m.clojure$core$matrix$protocols$PMatrixTypes$positive_definite_QMARK_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.positive_definite_QMARK_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.positive_definite_QMARK_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"PMatrixTypes.positive-definite?",m);
}
}
}
});

/**
 * Returns true if the matrix is positive semidefinite
 */
clojure.core.matrix.protocols.positive_semidefinite_QMARK_ = (function clojure$core$matrix$protocols$positive_semidefinite_QMARK_(m){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PMatrixTypes$positive_semidefinite_QMARK_$arity$1 == null))))){
return m.clojure$core$matrix$protocols$PMatrixTypes$positive_semidefinite_QMARK_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.positive_semidefinite_QMARK_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.positive_semidefinite_QMARK_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"PMatrixTypes.positive-semidefinite?",m);
}
}
}
});

/**
 * Returns true if the matrix is orthogonal
 */
clojure.core.matrix.protocols.orthogonal_QMARK_ = (function clojure$core$matrix$protocols$orthogonal_QMARK_(m,eps){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PMatrixTypes$orthogonal_QMARK_$arity$2 == null))))){
return m.clojure$core$matrix$protocols$PMatrixTypes$orthogonal_QMARK_$arity$2(m,eps);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.orthogonal_QMARK_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,eps);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.orthogonal_QMARK_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,eps);
} else {
throw cljs.core.missing_protocol.call(null,"PMatrixTypes.orthogonal?",m);
}
}
}
});


/**
 * Protocol for returning the generic/default values of a matrix implementation
 * @interface
 */
clojure.core.matrix.protocols.PGenericValues = function(){};

/**
 * Generic 'zero' value for numerical arrays. Must satisfy (equals m (add m zero)).
 */
clojure.core.matrix.protocols.generic_zero = (function clojure$core$matrix$protocols$generic_zero(m){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PGenericValues$generic_zero$arity$1 == null))))){
return m.clojure$core$matrix$protocols$PGenericValues$generic_zero$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.generic_zero[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.generic_zero["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"PGenericValues.generic-zero",m);
}
}
}
});

/**
 * Generic 'one' value for numerical arrays. Must satisfy (equals m (mul m one)).
 */
clojure.core.matrix.protocols.generic_one = (function clojure$core$matrix$protocols$generic_one(m){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PGenericValues$generic_one$arity$1 == null))))){
return m.clojure$core$matrix$protocols$PGenericValues$generic_one$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.generic_one[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.generic_one["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"PGenericValues.generic-one",m);
}
}
}
});

/**
 * Generic value for a new array. Likely to be zero or nil.
 */
clojure.core.matrix.protocols.generic_value = (function clojure$core$matrix$protocols$generic_value(m){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PGenericValues$generic_value$arity$1 == null))))){
return m.clojure$core$matrix$protocols$PGenericValues$generic_value$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.generic_value[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.generic_value["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"PGenericValues.generic-value",m);
}
}
}
});


/**
 * Protocol for returning the generic numerical functions of a matrix implementation
 * @interface
 */
clojure.core.matrix.protocols.PGenericOperations = function(){};

/**
 * Generic 'add' function for numerical values. Must satisfy (equals x (add zero x)).
 */
clojure.core.matrix.protocols.generic_add = (function clojure$core$matrix$protocols$generic_add(m){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PGenericOperations$generic_add$arity$1 == null))))){
return m.clojure$core$matrix$protocols$PGenericOperations$generic_add$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.generic_add[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.generic_add["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"PGenericOperations.generic-add",m);
}
}
}
});

/**
 * Generic 'mul' function for numerical values. Must satisfy (equals x (mul one x)).
 */
clojure.core.matrix.protocols.generic_mul = (function clojure$core$matrix$protocols$generic_mul(m){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PGenericOperations$generic_mul$arity$1 == null))))){
return m.clojure$core$matrix$protocols$PGenericOperations$generic_mul$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.generic_mul[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.generic_mul["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"PGenericOperations.generic-mul",m);
}
}
}
});

/**
 * Generic 'negate' function for numerical values.
 */
clojure.core.matrix.protocols.generic_negate = (function clojure$core$matrix$protocols$generic_negate(m){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PGenericOperations$generic_negate$arity$1 == null))))){
return m.clojure$core$matrix$protocols$PGenericOperations$generic_negate$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.generic_negate[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.generic_negate["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"PGenericOperations.generic-negate",m);
}
}
}
});

/**
 * Generic 'div' function for numerical values.
 */
clojure.core.matrix.protocols.generic_div = (function clojure$core$matrix$protocols$generic_div(m){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PGenericOperations$generic_div$arity$1 == null))))){
return m.clojure$core$matrix$protocols$PGenericOperations$generic_div$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.generic_div[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.generic_div["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"PGenericOperations.generic-div",m);
}
}
}
});


/**
 * Protocol for the sel function. See the docstring for clojure.core.matrix/select for
 * more information on possible argument values.
 * @interface
 */
clojure.core.matrix.protocols.PSelect = function(){};

/**
 * selects all elements at indices which are in the cartesian product of args
 */
clojure.core.matrix.protocols.select = (function clojure$core$matrix$protocols$select(a,args){
if(((!((a == null))) && (!((a.clojure$core$matrix$protocols$PSelect$select$arity$2 == null))))){
return a.clojure$core$matrix$protocols$PSelect$select$arity$2(a,args);
} else {
var x__4211__auto__ = (((a == null))?null:a);
var m__4212__auto__ = (clojure.core.matrix.protocols.select[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,a,args);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.select["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,a,args);
} else {
throw cljs.core.missing_protocol.call(null,"PSelect.select",a);
}
}
}
});


/**
 * Protocol for the sel function. Like PSelect, but guarantees an mutable view.
 * 
 * If not supported by the implementation, may return nil to indicate that a default mutable view
 * should be created.
 * @interface
 */
clojure.core.matrix.protocols.PSelectView = function(){};

/**
 * selects all elements at indices which are in the cartesian product of args
 */
clojure.core.matrix.protocols.select_view = (function clojure$core$matrix$protocols$select_view(a,args){
if(((!((a == null))) && (!((a.clojure$core$matrix$protocols$PSelectView$select_view$arity$2 == null))))){
return a.clojure$core$matrix$protocols$PSelectView$select_view$arity$2(a,args);
} else {
var x__4211__auto__ = (((a == null))?null:a);
var m__4212__auto__ = (clojure.core.matrix.protocols.select_view[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,a,args);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.select_view["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,a,args);
} else {
throw cljs.core.missing_protocol.call(null,"PSelectView.select-view",a);
}
}
}
});


/**
 * Protocol for setting the elements of an array returned by (select a args) to values.
 * See the docstring for clojure.core.matrix/select for more information on possible argument values.
 * @interface
 */
clojure.core.matrix.protocols.PSetSelection = function(){};

/**
 * sets the elements in the selection of a to values
 */
clojure.core.matrix.protocols.set_selection = (function clojure$core$matrix$protocols$set_selection(a,args,values){
if(((!((a == null))) && (!((a.clojure$core$matrix$protocols$PSetSelection$set_selection$arity$3 == null))))){
return a.clojure$core$matrix$protocols$PSetSelection$set_selection$arity$3(a,args,values);
} else {
var x__4211__auto__ = (((a == null))?null:a);
var m__4212__auto__ = (clojure.core.matrix.protocols.set_selection[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,a,args,values);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.set_selection["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,a,args,values);
} else {
throw cljs.core.missing_protocol.call(null,"PSetSelection.set-selection",a);
}
}
}
});


/**
 * Protocol for getting elements of an array at the specified indices.
 * @interface
 */
clojure.core.matrix.protocols.PIndicesAccess = function(){};

/**
 * returns a 1-d array with the elements of a at indices
 */
clojure.core.matrix.protocols.get_indices = (function clojure$core$matrix$protocols$get_indices(a,indices){
if(((!((a == null))) && (!((a.clojure$core$matrix$protocols$PIndicesAccess$get_indices$arity$2 == null))))){
return a.clojure$core$matrix$protocols$PIndicesAccess$get_indices$arity$2(a,indices);
} else {
var x__4211__auto__ = (((a == null))?null:a);
var m__4212__auto__ = (clojure.core.matrix.protocols.get_indices[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,a,indices);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.get_indices["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,a,indices);
} else {
throw cljs.core.missing_protocol.call(null,"PIndicesAccess.get-indices",a);
}
}
}
});


/**
 * Protocol for setting elements of an array at the specified indices
 * @interface
 */
clojure.core.matrix.protocols.PIndicesSetting = function(){};

/**
 * sets the elements from a at indices to values. Returns a new array.
 */
clojure.core.matrix.protocols.set_indices = (function clojure$core$matrix$protocols$set_indices(a,indices,values){
if(((!((a == null))) && (!((a.clojure$core$matrix$protocols$PIndicesSetting$set_indices$arity$3 == null))))){
return a.clojure$core$matrix$protocols$PIndicesSetting$set_indices$arity$3(a,indices,values);
} else {
var x__4211__auto__ = (((a == null))?null:a);
var m__4212__auto__ = (clojure.core.matrix.protocols.set_indices[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,a,indices,values);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.set_indices["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,a,indices,values);
} else {
throw cljs.core.missing_protocol.call(null,"PIndicesSetting.set-indices",a);
}
}
}
});

/**
 * destructively sets the elements from a at indices to values
 */
clojure.core.matrix.protocols.set_indices_BANG_ = (function clojure$core$matrix$protocols$set_indices_BANG_(a,indices,values){
if(((!((a == null))) && (!((a.clojure$core$matrix$protocols$PIndicesSetting$set_indices_BANG_$arity$3 == null))))){
return a.clojure$core$matrix$protocols$PIndicesSetting$set_indices_BANG_$arity$3(a,indices,values);
} else {
var x__4211__auto__ = (((a == null))?null:a);
var m__4212__auto__ = (clojure.core.matrix.protocols.set_indices_BANG_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,a,indices,values);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.set_indices_BANG_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,a,indices,values);
} else {
throw cljs.core.missing_protocol.call(null,"PIndicesSetting.set-indices!",a);
}
}
}
});


/**
 * Protocol for getting non-zero indices of an array
 * @interface
 */
clojure.core.matrix.protocols.PNonZeroIndices = function(){};

/**
 * Gets the non-zero indices of an array.
 *                       - For a 1D vector, returns an ordered index list.
 *                       - For a higher dimensional array, returns the non-zero-indices for each slice in row-major order.
 */
clojure.core.matrix.protocols.non_zero_indices = (function clojure$core$matrix$protocols$non_zero_indices(m){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PNonZeroIndices$non_zero_indices$arity$1 == null))))){
return m.clojure$core$matrix$protocols$PNonZeroIndices$non_zero_indices$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.non_zero_indices[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.non_zero_indices["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"PNonZeroIndices.non-zero-indices",m);
}
}
}
});


/**
 * Protocol for determining if an object is a valid index. Implementations may implement this protocol to support their own index types.
 * @interface
 */
clojure.core.matrix.protocols.PIndexImplementation = function(){};

/**
 * Returns true if the argument is a valid index, false otherwise
 */
clojure.core.matrix.protocols.index_QMARK_ = (function clojure$core$matrix$protocols$index_QMARK_(m){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PIndexImplementation$index_QMARK_$arity$1 == null))))){
return m.clojure$core$matrix$protocols$PIndexImplementation$index_QMARK_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.index_QMARK_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.index_QMARK_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"PIndexImplementation.index?",m);
}
}
}
});

clojure.core.matrix.protocols.index_to_longs = (function clojure$core$matrix$protocols$index_to_longs(m){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PIndexImplementation$index_to_longs$arity$1 == null))))){
return m.clojure$core$matrix$protocols$PIndexImplementation$index_to_longs$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.index_to_longs[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.index_to_longs["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"PIndexImplementation.index-to-longs",m);
}
}
}
});

clojure.core.matrix.protocols.index_to_ints = (function clojure$core$matrix$protocols$index_to_ints(m){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PIndexImplementation$index_to_ints$arity$1 == null))))){
return m.clojure$core$matrix$protocols$PIndexImplementation$index_to_ints$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.index_to_ints[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.index_to_ints["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"PIndexImplementation.index-to-ints",m);
}
}
}
});

clojure.core.matrix.protocols.index_from_longs = (function clojure$core$matrix$protocols$index_from_longs(m,xs){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PIndexImplementation$index_from_longs$arity$2 == null))))){
return m.clojure$core$matrix$protocols$PIndexImplementation$index_from_longs$arity$2(m,xs);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.index_from_longs[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,xs);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.index_from_longs["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,xs);
} else {
throw cljs.core.missing_protocol.call(null,"PIndexImplementation.index-from-longs",m);
}
}
}
});

clojure.core.matrix.protocols.index_from_ints = (function clojure$core$matrix$protocols$index_from_ints(m,xs){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PIndexImplementation$index_from_ints$arity$2 == null))))){
return m.clojure$core$matrix$protocols$PIndexImplementation$index_from_ints$arity$2(m,xs);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.index_from_ints[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,xs);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.index_from_ints["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,xs);
} else {
throw cljs.core.missing_protocol.call(null,"PIndexImplementation.index-from-ints",m);
}
}
}
});

clojure.core.matrix.protocols.index_coerce = (function clojure$core$matrix$protocols$index_coerce(m,a){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PIndexImplementation$index_coerce$arity$2 == null))))){
return m.clojure$core$matrix$protocols$PIndexImplementation$index_coerce$arity$2(m,a);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.index_coerce[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,a);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.index_coerce["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,a);
} else {
throw cljs.core.missing_protocol.call(null,"PIndexImplementation.index-coerce",m);
}
}
}
});


/**
 * Protocol for arrays supporting labelled dimensions
 * @interface
 */
clojure.core.matrix.protocols.PDimensionLabels = function(){};

/**
 * Returns the label at a specific index along the given dimension
 */
clojure.core.matrix.protocols.label = (function clojure$core$matrix$protocols$label(m,dim,i){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PDimensionLabels$label$arity$3 == null))))){
return m.clojure$core$matrix$protocols$PDimensionLabels$label$arity$3(m,dim,i);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.label[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,dim,i);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.label["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,dim,i);
} else {
throw cljs.core.missing_protocol.call(null,"PDimensionLabels.label",m);
}
}
}
});

/**
 * Returns all labels along a given dimension, as a vector
 */
clojure.core.matrix.protocols.labels = (function clojure$core$matrix$protocols$labels(m,dim){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PDimensionLabels$labels$arity$2 == null))))){
return m.clojure$core$matrix$protocols$PDimensionLabels$labels$arity$2(m,dim);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.labels[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,dim);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.labels["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,dim);
} else {
throw cljs.core.missing_protocol.call(null,"PDimensionLabels.labels",m);
}
}
}
});


/**
 * Protocol for arrays supporting labelled columns. This is a specialisation of label functionality
 * intended for use by datasets, the key difference is that column-names should always select the
 * last dimension.
 * @interface
 */
clojure.core.matrix.protocols.PColumnNames = function(){};

/**
 * Returns the label at a specific column
 */
clojure.core.matrix.protocols.column_name = (function clojure$core$matrix$protocols$column_name(m,column){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PColumnNames$column_name$arity$2 == null))))){
return m.clojure$core$matrix$protocols$PColumnNames$column_name$arity$2(m,column);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.column_name[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,column);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.column_name["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,column);
} else {
throw cljs.core.missing_protocol.call(null,"PColumnNames.column-name",m);
}
}
}
});

/**
 * Returns all labels along the columns on an array
 */
clojure.core.matrix.protocols.column_names = (function clojure$core$matrix$protocols$column_names(m){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PColumnNames$column_names$arity$1 == null))))){
return m.clojure$core$matrix$protocols$PColumnNames$column_names$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.column_names[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.column_names["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"PColumnNames.column-names",m);
}
}
}
});


/**
 * Protocol for getting the index of a named column. Works on any array with labelled columns.
 * If the dimensionality is 1, assumes that columns are the only dimension (i.e. can be applied to
 * dataset rows and Clojure maps in the natural way)
 * Returns an integer index if the column is found, nil otherwise.
 * @interface
 */
clojure.core.matrix.protocols.PColumnIndex = function(){};

/**
 * Returns the index of the specified column label
 */
clojure.core.matrix.protocols.column_index = (function clojure$core$matrix$protocols$column_index(m,column_label){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PColumnIndex$column_index$arity$2 == null))))){
return m.clojure$core$matrix$protocols$PColumnIndex$column_index$arity$2(m,column_label);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.column_index[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,column_label);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.column_index["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,column_label);
} else {
throw cljs.core.missing_protocol.call(null,"PColumnIndex.column-index",m);
}
}
}
});


/**
 * Protocol for matrix and vector norms
 * @interface
 */
clojure.core.matrix.protocols.PNorm = function(){};

clojure.core.matrix.protocols.norm = (function clojure$core$matrix$protocols$norm(m,p){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PNorm$norm$arity$2 == null))))){
return m.clojure$core$matrix$protocols$PNorm$norm$arity$2(m,p);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.norm[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,p);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.norm["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,p);
} else {
throw cljs.core.missing_protocol.call(null,"PNorm.norm",m);
}
}
}
});


/**
 * Protocol for QR decomposition
 * @interface
 */
clojure.core.matrix.protocols.PQRDecomposition = function(){};

clojure.core.matrix.protocols.qr = (function clojure$core$matrix$protocols$qr(m,options){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PQRDecomposition$qr$arity$2 == null))))){
return m.clojure$core$matrix$protocols$PQRDecomposition$qr$arity$2(m,options);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.qr[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,options);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.qr["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,options);
} else {
throw cljs.core.missing_protocol.call(null,"PQRDecomposition.qr",m);
}
}
}
});


/**
 * Procotol for Cholesky decomposition
 * @interface
 */
clojure.core.matrix.protocols.PCholeskyDecomposition = function(){};

clojure.core.matrix.protocols.cholesky = (function clojure$core$matrix$protocols$cholesky(m,options){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PCholeskyDecomposition$cholesky$arity$2 == null))))){
return m.clojure$core$matrix$protocols$PCholeskyDecomposition$cholesky$arity$2(m,options);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.cholesky[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,options);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.cholesky["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,options);
} else {
throw cljs.core.missing_protocol.call(null,"PCholeskyDecomposition.cholesky",m);
}
}
}
});


/**
 * Protocol for LU decomposition
 * @interface
 */
clojure.core.matrix.protocols.PLUDecomposition = function(){};

clojure.core.matrix.protocols.lu = (function clojure$core$matrix$protocols$lu(m,options){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PLUDecomposition$lu$arity$2 == null))))){
return m.clojure$core$matrix$protocols$PLUDecomposition$lu$arity$2(m,options);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.lu[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,options);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.lu["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,options);
} else {
throw cljs.core.missing_protocol.call(null,"PLUDecomposition.lu",m);
}
}
}
});


/**
 * Protocol for SVD decomposition
 * @interface
 */
clojure.core.matrix.protocols.PSVDDecomposition = function(){};

clojure.core.matrix.protocols.svd = (function clojure$core$matrix$protocols$svd(m,options){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PSVDDecomposition$svd$arity$2 == null))))){
return m.clojure$core$matrix$protocols$PSVDDecomposition$svd$arity$2(m,options);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.svd[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,options);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.svd["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,options);
} else {
throw cljs.core.missing_protocol.call(null,"PSVDDecomposition.svd",m);
}
}
}
});


/**
 * Procotol for Eigenvalue decomposition
 * @interface
 */
clojure.core.matrix.protocols.PEigenDecomposition = function(){};

clojure.core.matrix.protocols.eigen = (function clojure$core$matrix$protocols$eigen(m,options){
if(((!((m == null))) && (!((m.clojure$core$matrix$protocols$PEigenDecomposition$eigen$arity$2 == null))))){
return m.clojure$core$matrix$protocols$PEigenDecomposition$eigen$arity$2(m,options);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (clojure.core.matrix.protocols.eigen[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,options);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.eigen["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,options);
} else {
throw cljs.core.missing_protocol.call(null,"PEigenDecomposition.eigen",m);
}
}
}
});


/**
 * Protocol for solving linear matrix equation or system of linear scalar equations
 * @interface
 */
clojure.core.matrix.protocols.PSolveLinear = function(){};

clojure.core.matrix.protocols.solve = (function clojure$core$matrix$protocols$solve(a,b){
if(((!((a == null))) && (!((a.clojure$core$matrix$protocols$PSolveLinear$solve$arity$2 == null))))){
return a.clojure$core$matrix$protocols$PSolveLinear$solve$arity$2(a,b);
} else {
var x__4211__auto__ = (((a == null))?null:a);
var m__4212__auto__ = (clojure.core.matrix.protocols.solve[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,a,b);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.solve["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,a,b);
} else {
throw cljs.core.missing_protocol.call(null,"PSolveLinear.solve",a);
}
}
}
});


/**
 * Protocol for computing least-square solution to a linear matrix equation
 * @interface
 */
clojure.core.matrix.protocols.PLeastSquares = function(){};

clojure.core.matrix.protocols.least_squares = (function clojure$core$matrix$protocols$least_squares(a,b){
if(((!((a == null))) && (!((a.clojure$core$matrix$protocols$PLeastSquares$least_squares$arity$2 == null))))){
return a.clojure$core$matrix$protocols$PLeastSquares$least_squares$arity$2(a,b);
} else {
var x__4211__auto__ = (((a == null))?null:a);
var m__4212__auto__ = (clojure.core.matrix.protocols.least_squares[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,a,b);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.least_squares["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,a,b);
} else {
throw cljs.core.missing_protocol.call(null,"PLeastSquares.least-squares",a);
}
}
}
});


/**
 * Protocol for general dataset functionality
 * @interface
 */
clojure.core.matrix.protocols.PDatasetImplementation = function(){};

/**
 * Returns a persistent vector containing columns in the same order they are placed in the dataset
 */
clojure.core.matrix.protocols.columns = (function clojure$core$matrix$protocols$columns(ds){
if(((!((ds == null))) && (!((ds.clojure$core$matrix$protocols$PDatasetImplementation$columns$arity$1 == null))))){
return ds.clojure$core$matrix$protocols$PDatasetImplementation$columns$arity$1(ds);
} else {
var x__4211__auto__ = (((ds == null))?null:ds);
var m__4212__auto__ = (clojure.core.matrix.protocols.columns[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,ds);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.columns["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,ds);
} else {
throw cljs.core.missing_protocol.call(null,"PDatasetImplementation.columns",ds);
}
}
}
});

/**
 * Produces a new dataset with the columns in the specified order
 */
clojure.core.matrix.protocols.select_columns = (function clojure$core$matrix$protocols$select_columns(ds,cols){
if(((!((ds == null))) && (!((ds.clojure$core$matrix$protocols$PDatasetImplementation$select_columns$arity$2 == null))))){
return ds.clojure$core$matrix$protocols$PDatasetImplementation$select_columns$arity$2(ds,cols);
} else {
var x__4211__auto__ = (((ds == null))?null:ds);
var m__4212__auto__ = (clojure.core.matrix.protocols.select_columns[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,ds,cols);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.select_columns["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,ds,cols);
} else {
throw cljs.core.missing_protocol.call(null,"PDatasetImplementation.select-columns",ds);
}
}
}
});

/**
 * Produces a new dataset with specified rows
 */
clojure.core.matrix.protocols.select_rows = (function clojure$core$matrix$protocols$select_rows(ds,rows){
if(((!((ds == null))) && (!((ds.clojure$core$matrix$protocols$PDatasetImplementation$select_rows$arity$2 == null))))){
return ds.clojure$core$matrix$protocols$PDatasetImplementation$select_rows$arity$2(ds,rows);
} else {
var x__4211__auto__ = (((ds == null))?null:ds);
var m__4212__auto__ = (clojure.core.matrix.protocols.select_rows[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,ds,rows);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.select_rows["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,ds,rows);
} else {
throw cljs.core.missing_protocol.call(null,"PDatasetImplementation.select-rows",ds);
}
}
}
});

/**
 * Adds column to the dataset
 */
clojure.core.matrix.protocols.add_column = (function clojure$core$matrix$protocols$add_column(ds,col_name,col){
if(((!((ds == null))) && (!((ds.clojure$core$matrix$protocols$PDatasetImplementation$add_column$arity$3 == null))))){
return ds.clojure$core$matrix$protocols$PDatasetImplementation$add_column$arity$3(ds,col_name,col);
} else {
var x__4211__auto__ = (((ds == null))?null:ds);
var m__4212__auto__ = (clojure.core.matrix.protocols.add_column[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,ds,col_name,col);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.add_column["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,ds,col_name,col);
} else {
throw cljs.core.missing_protocol.call(null,"PDatasetImplementation.add-column",ds);
}
}
}
});

/**
 * Returns a dataset created by combining columns of the given datasets. In case of columns with duplicate names, last-one-wins strategy is applied
 */
clojure.core.matrix.protocols.merge_datasets = (function clojure$core$matrix$protocols$merge_datasets(ds1,ds2){
if(((!((ds1 == null))) && (!((ds1.clojure$core$matrix$protocols$PDatasetImplementation$merge_datasets$arity$2 == null))))){
return ds1.clojure$core$matrix$protocols$PDatasetImplementation$merge_datasets$arity$2(ds1,ds2);
} else {
var x__4211__auto__ = (((ds1 == null))?null:ds1);
var m__4212__auto__ = (clojure.core.matrix.protocols.merge_datasets[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,ds1,ds2);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.merge_datasets["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,ds1,ds2);
} else {
throw cljs.core.missing_protocol.call(null,"PDatasetImplementation.merge-datasets",ds1);
}
}
}
});

/**
 * Renames columns based on map of old new column name pairs
 */
clojure.core.matrix.protocols.rename_columns = (function clojure$core$matrix$protocols$rename_columns(ds,col_map){
if(((!((ds == null))) && (!((ds.clojure$core$matrix$protocols$PDatasetImplementation$rename_columns$arity$2 == null))))){
return ds.clojure$core$matrix$protocols$PDatasetImplementation$rename_columns$arity$2(ds,col_map);
} else {
var x__4211__auto__ = (((ds == null))?null:ds);
var m__4212__auto__ = (clojure.core.matrix.protocols.rename_columns[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,ds,col_map);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.rename_columns["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,ds,col_map);
} else {
throw cljs.core.missing_protocol.call(null,"PDatasetImplementation.rename-columns",ds);
}
}
}
});

/**
 * Replaces column in a dataset with new values
 */
clojure.core.matrix.protocols.replace_column = (function clojure$core$matrix$protocols$replace_column(ds,col_name,vs){
if(((!((ds == null))) && (!((ds.clojure$core$matrix$protocols$PDatasetImplementation$replace_column$arity$3 == null))))){
return ds.clojure$core$matrix$protocols$PDatasetImplementation$replace_column$arity$3(ds,col_name,vs);
} else {
var x__4211__auto__ = (((ds == null))?null:ds);
var m__4212__auto__ = (clojure.core.matrix.protocols.replace_column[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,ds,col_name,vs);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.replace_column["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,ds,col_name,vs);
} else {
throw cljs.core.missing_protocol.call(null,"PDatasetImplementation.replace-column",ds);
}
}
}
});

/**
 * Returns a dataset created by combining the rows of the given datasets
 */
clojure.core.matrix.protocols.join_rows = (function clojure$core$matrix$protocols$join_rows(ds1,ds2){
if(((!((ds1 == null))) && (!((ds1.clojure$core$matrix$protocols$PDatasetImplementation$join_rows$arity$2 == null))))){
return ds1.clojure$core$matrix$protocols$PDatasetImplementation$join_rows$arity$2(ds1,ds2);
} else {
var x__4211__auto__ = (((ds1 == null))?null:ds1);
var m__4212__auto__ = (clojure.core.matrix.protocols.join_rows[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,ds1,ds2);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.join_rows["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,ds1,ds2);
} else {
throw cljs.core.missing_protocol.call(null,"PDatasetImplementation.join-rows",ds1);
}
}
}
});

/**
 * Returns a dataset created by combining the columns of the given datasets
 */
clojure.core.matrix.protocols.join_columns = (function clojure$core$matrix$protocols$join_columns(ds1,ds2){
if(((!((ds1 == null))) && (!((ds1.clojure$core$matrix$protocols$PDatasetImplementation$join_columns$arity$2 == null))))){
return ds1.clojure$core$matrix$protocols$PDatasetImplementation$join_columns$arity$2(ds1,ds2);
} else {
var x__4211__auto__ = (((ds1 == null))?null:ds1);
var m__4212__auto__ = (clojure.core.matrix.protocols.join_columns[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,ds1,ds2);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.join_columns["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,ds1,ds2);
} else {
throw cljs.core.missing_protocol.call(null,"PDatasetImplementation.join-columns",ds1);
}
}
}
});


/**
 * @interface
 */
clojure.core.matrix.protocols.PDatasetMaps = function(){};

/**
 * Returns map of columns with associated list of values
 */
clojure.core.matrix.protocols.to_map = (function clojure$core$matrix$protocols$to_map(ds){
if(((!((ds == null))) && (!((ds.clojure$core$matrix$protocols$PDatasetMaps$to_map$arity$1 == null))))){
return ds.clojure$core$matrix$protocols$PDatasetMaps$to_map$arity$1(ds);
} else {
var x__4211__auto__ = (((ds == null))?null:ds);
var m__4212__auto__ = (clojure.core.matrix.protocols.to_map[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,ds);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.to_map["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,ds);
} else {
throw cljs.core.missing_protocol.call(null,"PDatasetMaps.to-map",ds);
}
}
}
});

/**
 * Returns seq of maps with row values
 */
clojure.core.matrix.protocols.row_maps = (function clojure$core$matrix$protocols$row_maps(ds){
if(((!((ds == null))) && (!((ds.clojure$core$matrix$protocols$PDatasetMaps$row_maps$arity$1 == null))))){
return ds.clojure$core$matrix$protocols$PDatasetMaps$row_maps$arity$1(ds);
} else {
var x__4211__auto__ = (((ds == null))?null:ds);
var m__4212__auto__ = (clojure.core.matrix.protocols.row_maps[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,ds);
} else {
var m__4212__auto____$1 = (clojure.core.matrix.protocols.row_maps["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,ds);
} else {
throw cljs.core.missing_protocol.call(null,"PDatasetMaps.row-maps",ds);
}
}
}
});

/**
 * Coerces a data structure to nested persistent vectors
 */
clojure.core.matrix.protocols.persistent_vector_coerce = (function clojure$core$matrix$protocols$persistent_vector_coerce(x){
var dims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,x));
if((dims === (0))){
return clojure.core.matrix.protocols.get_0d.call(null,x);
} else {
if(cljs.core.vector_QMARK_.call(null,x)){
return cljs.core.mapv.call(null,clojure.core.matrix.protocols.convert_to_nested_vectors,x);
} else {
if((dims === (1))){
return cljs.core.vec.call(null,clojure.core.matrix.protocols.element_seq.call(null,x));
} else {
if((x instanceof cljs.core.IIterable)){
return cljs.core.mapv.call(null,clojure.core.matrix.protocols.convert_to_nested_vectors,x);
} else {
if((x instanceof cljs.core.ISeqable)){
return cljs.core.mapv.call(null,clojure.core.matrix.protocols.convert_to_nested_vectors,x);
} else {
if(cljs.core.not.call(null,clojure.core.matrix.protocols.is_scalar_QMARK_.call(null,x))){
return cljs.core.mapv.call(null,clojure.core.matrix.protocols.convert_to_nested_vectors,clojure.core.matrix.protocols.get_major_slice_seq.call(null,x));
} else {
throw cljs.core.ex_info.call(null,["Can't coerce to vector: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,x))].join(''),cljs.core.PersistentArrayMap.EMPTY);

}
}
}
}
}
}
});
/**
 * Returns the larger of two shapes if they are compatible, nil otherwise
 */
clojure.core.matrix.protocols.calc_common_shape = (function clojure$core$matrix$protocols$calc_common_shape(a,b){
while(true){
var ca = cljs.core.long$.call(null,cljs.core.count.call(null,a));
var cb = cljs.core.long$.call(null,cljs.core.count.call(null,b));
var diff = (ca - cb);
if((diff < (0))){
var G__22069 = b;
var G__22070 = a;
a = G__22069;
b = G__22070;
continue;
} else {
var i = (0);
while(true){
if((i < cb)){
if((cljs.core.nth.call(null,a,(diff + i)) === cljs.core.nth.call(null,b,i))){
var G__22071 = (i + (1));
i = G__22071;
continue;
} else {
return null;
}
} else {
return a;
}
break;
}
}
break;
}
});
/**
 * Returns the common shape that can be broadcast to from all the shapes specified,
 * or nil if such a shape does not exist.
 */
clojure.core.matrix.protocols.common_shape = (function clojure$core$matrix$protocols$common_shape(shapes){
var result = cljs.core.PersistentVector.EMPTY;
var shapes__$1 = cljs.core.seq.call(null,shapes);
while(true){
if(shapes__$1){
var sh = cljs.core.first.call(null,shapes__$1);
var temp__5455__auto__ = clojure.core.matrix.protocols.calc_common_shape.call(null,result,sh);
if(cljs.core.truth_(temp__5455__auto__)){
var cs = temp__5455__auto__;
var G__22072 = cs;
var G__22073 = cljs.core.next.call(null,shapes__$1);
result = G__22072;
shapes__$1 = G__22073;
continue;
} else {
return null;
}
} else {
return result;
}
break;
}
});
/**
 * Broadcasts two matrices into identical shapes, coercing to the type of the first matrix.
 * Intended to prepare for elementwise operations.
 * Returns a vector containing the two broadcasted matrices.
 * Throws an error if not possible.
 */
clojure.core.matrix.protocols.broadcast_compatible = (function clojure$core$matrix$protocols$broadcast_compatible(a,b){
if(cljs.core.truth_(clojure.core.matrix.protocols.same_shape_QMARK_.call(null,a,b))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
} else {
if((clojure.core.matrix.protocols.dimensionality.call(null,a) < clojure.core.matrix.protocols.dimensionality.call(null,b))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.core.matrix.protocols.broadcast_like.call(null,b,a),clojure.core.matrix.protocols.coerce_param.call(null,a,b)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,clojure.core.matrix.protocols.broadcast_coerce.call(null,a,b)], null);
}
}
});
/**
 * Broadcasts two matrices into identical shapes. Intended to prepare for elementwise operations.
 * Returns a vector containing the two broadcasted matrices.
 * Throws an error if not possible.
 */
clojure.core.matrix.protocols.broadcast_same_shape = (function clojure$core$matrix$protocols$broadcast_same_shape(a,b){
if(cljs.core.truth_(clojure.core.matrix.protocols.same_shape_QMARK_.call(null,a,b))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
} else {
var sh = clojure.core.matrix.protocols.get_shape.call(null,a);
if((cljs.core.count.call(null,sh) < clojure.core.matrix.protocols.dimensionality.call(null,b))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.core.matrix.protocols.broadcast.call(null,a,clojure.core.matrix.protocols.get_shape.call(null,b)),b], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,clojure.core.matrix.protocols.broadcast.call(null,b,sh)], null);
}
}
});
/**
 * Returns truthy if a sequence of arrays all have the same shape.
 */
clojure.core.matrix.protocols.same_shapes_QMARK_ = (function clojure$core$matrix$protocols$same_shapes_QMARK_(arrays){
var shapes = cljs.core.map.call(null,(function (p1__22074_SHARP_){
var or__3922__auto__ = clojure.core.matrix.protocols.get_shape.call(null,p1__22074_SHARP_);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
}),arrays);
var s = cljs.core.first.call(null,shapes);
var ns = cljs.core.next.call(null,shapes);
while(true){
if(ns){
if(cljs.core.truth_(clojure.core.matrix.utils.same_shape_object_QMARK_.call(null,s,cljs.core.first.call(null,ns)))){
var G__22075 = s;
var G__22076 = cljs.core.next.call(null,ns);
s = G__22075;
ns = G__22076;
continue;
} else {
return false;
}
} else {
return true;
}
break;
}
});
/**
 * Checks if an array can contain a specified Java type.
 */
clojure.core.matrix.protocols.supports_type_QMARK_ = (function clojure$core$matrix$protocols$supports_type_QMARK_(m,klass){
var mc = clojure.core.matrix.protocols.element_type.call(null,m);
return mc.isAssignableFrom(klass);
});
/**
 * Checks if an array can contain a specified Java type, if so returns the original array, otherwise
 * returns a copy of the array that can support the specified type.
 */
clojure.core.matrix.protocols.ensure_type = (function clojure$core$matrix$protocols$ensure_type(m,klass){
if(cljs.core.truth_(clojure.core.matrix.protocols.supports_type_QMARK_.call(null,m,klass))){
return m;
} else {
return clojure.core.matrix.protocols.convert_to_nested_vectors.call(null,m);
}
});

//# sourceMappingURL=protocols.js.map?rel=1526826984749
