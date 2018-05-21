// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__38672 = arguments.length;
switch (G__38672) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async38673 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38673 = (function (f,blockable,meta38674){
this.f = f;
this.blockable = blockable;
this.meta38674 = meta38674;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async38673.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38675,meta38674__$1){
var self__ = this;
var _38675__$1 = this;
return (new cljs.core.async.t_cljs$core$async38673(self__.f,self__.blockable,meta38674__$1));
});

cljs.core.async.t_cljs$core$async38673.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38675){
var self__ = this;
var _38675__$1 = this;
return self__.meta38674;
});

cljs.core.async.t_cljs$core$async38673.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38673.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async38673.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async38673.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async38673.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta38674","meta38674",145888690,null)], null);
});

cljs.core.async.t_cljs$core$async38673.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38673.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38673";

cljs.core.async.t_cljs$core$async38673.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async38673");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38673.
 */
cljs.core.async.__GT_t_cljs$core$async38673 = (function cljs$core$async$__GT_t_cljs$core$async38673(f__$1,blockable__$1,meta38674){
return (new cljs.core.async.t_cljs$core$async38673(f__$1,blockable__$1,meta38674));
});

}

return (new cljs.core.async.t_cljs$core$async38673(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__38679 = arguments.length;
switch (G__38679) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__38682 = arguments.length;
switch (G__38682) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__38685 = arguments.length;
switch (G__38685) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_38687 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_38687);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_38687,ret){
return (function (){
return fn1.call(null,val_38687);
});})(val_38687,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__38689 = arguments.length;
switch (G__38689) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4376__auto___38691 = n;
var x_38692 = (0);
while(true){
if((x_38692 < n__4376__auto___38691)){
(a[x_38692] = (0));

var G__38693 = (x_38692 + (1));
x_38692 = G__38693;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__38694 = (i + (1));
i = G__38694;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async38695 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38695 = (function (flag,meta38696){
this.flag = flag;
this.meta38696 = meta38696;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async38695.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_38697,meta38696__$1){
var self__ = this;
var _38697__$1 = this;
return (new cljs.core.async.t_cljs$core$async38695(self__.flag,meta38696__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async38695.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_38697){
var self__ = this;
var _38697__$1 = this;
return self__.meta38696;
});})(flag))
;

cljs.core.async.t_cljs$core$async38695.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38695.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async38695.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async38695.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async38695.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta38696","meta38696",705889731,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async38695.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38695.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38695";

cljs.core.async.t_cljs$core$async38695.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async38695");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38695.
 */
cljs.core.async.__GT_t_cljs$core$async38695 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async38695(flag__$1,meta38696){
return (new cljs.core.async.t_cljs$core$async38695(flag__$1,meta38696));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async38695(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async38698 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38698 = (function (flag,cb,meta38699){
this.flag = flag;
this.cb = cb;
this.meta38699 = meta38699;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async38698.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38700,meta38699__$1){
var self__ = this;
var _38700__$1 = this;
return (new cljs.core.async.t_cljs$core$async38698(self__.flag,self__.cb,meta38699__$1));
});

cljs.core.async.t_cljs$core$async38698.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38700){
var self__ = this;
var _38700__$1 = this;
return self__.meta38699;
});

cljs.core.async.t_cljs$core$async38698.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38698.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async38698.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async38698.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async38698.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta38699","meta38699",183387566,null)], null);
});

cljs.core.async.t_cljs$core$async38698.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38698.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38698";

cljs.core.async.t_cljs$core$async38698.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async38698");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38698.
 */
cljs.core.async.__GT_t_cljs$core$async38698 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async38698(flag__$1,cb__$1,meta38699){
return (new cljs.core.async.t_cljs$core$async38698(flag__$1,cb__$1,meta38699));
});

}

return (new cljs.core.async.t_cljs$core$async38698(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__38701_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__38701_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__38702_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__38702_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3922__auto__ = wport;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return port;
}
})()], null));
} else {
var G__38703 = (i + (1));
i = G__38703;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3922__auto__ = ret;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__3911__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___38709 = arguments.length;
var i__4500__auto___38710 = (0);
while(true){
if((i__4500__auto___38710 < len__4499__auto___38709)){
args__4502__auto__.push((arguments[i__4500__auto___38710]));

var G__38711 = (i__4500__auto___38710 + (1));
i__4500__auto___38710 = G__38711;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__38706){
var map__38707 = p__38706;
var map__38707__$1 = ((((!((map__38707 == null)))?(((((map__38707.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38707.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38707):map__38707);
var opts = map__38707__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq38704){
var G__38705 = cljs.core.first.call(null,seq38704);
var seq38704__$1 = cljs.core.next.call(null,seq38704);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38705,seq38704__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__38713 = arguments.length;
switch (G__38713) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__38612__auto___38759 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38612__auto___38759){
return (function (){
var f__38613__auto__ = (function (){var switch__38522__auto__ = ((function (c__38612__auto___38759){
return (function (state_38737){
var state_val_38738 = (state_38737[(1)]);
if((state_val_38738 === (7))){
var inst_38733 = (state_38737[(2)]);
var state_38737__$1 = state_38737;
var statearr_38739_38760 = state_38737__$1;
(statearr_38739_38760[(2)] = inst_38733);

(statearr_38739_38760[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38738 === (1))){
var state_38737__$1 = state_38737;
var statearr_38740_38761 = state_38737__$1;
(statearr_38740_38761[(2)] = null);

(statearr_38740_38761[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38738 === (4))){
var inst_38716 = (state_38737[(7)]);
var inst_38716__$1 = (state_38737[(2)]);
var inst_38717 = (inst_38716__$1 == null);
var state_38737__$1 = (function (){var statearr_38741 = state_38737;
(statearr_38741[(7)] = inst_38716__$1);

return statearr_38741;
})();
if(cljs.core.truth_(inst_38717)){
var statearr_38742_38762 = state_38737__$1;
(statearr_38742_38762[(1)] = (5));

} else {
var statearr_38743_38763 = state_38737__$1;
(statearr_38743_38763[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38738 === (13))){
var state_38737__$1 = state_38737;
var statearr_38744_38764 = state_38737__$1;
(statearr_38744_38764[(2)] = null);

(statearr_38744_38764[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38738 === (6))){
var inst_38716 = (state_38737[(7)]);
var state_38737__$1 = state_38737;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38737__$1,(11),to,inst_38716);
} else {
if((state_val_38738 === (3))){
var inst_38735 = (state_38737[(2)]);
var state_38737__$1 = state_38737;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38737__$1,inst_38735);
} else {
if((state_val_38738 === (12))){
var state_38737__$1 = state_38737;
var statearr_38745_38765 = state_38737__$1;
(statearr_38745_38765[(2)] = null);

(statearr_38745_38765[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38738 === (2))){
var state_38737__$1 = state_38737;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38737__$1,(4),from);
} else {
if((state_val_38738 === (11))){
var inst_38726 = (state_38737[(2)]);
var state_38737__$1 = state_38737;
if(cljs.core.truth_(inst_38726)){
var statearr_38746_38766 = state_38737__$1;
(statearr_38746_38766[(1)] = (12));

} else {
var statearr_38747_38767 = state_38737__$1;
(statearr_38747_38767[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38738 === (9))){
var state_38737__$1 = state_38737;
var statearr_38748_38768 = state_38737__$1;
(statearr_38748_38768[(2)] = null);

(statearr_38748_38768[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38738 === (5))){
var state_38737__$1 = state_38737;
if(cljs.core.truth_(close_QMARK_)){
var statearr_38749_38769 = state_38737__$1;
(statearr_38749_38769[(1)] = (8));

} else {
var statearr_38750_38770 = state_38737__$1;
(statearr_38750_38770[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38738 === (14))){
var inst_38731 = (state_38737[(2)]);
var state_38737__$1 = state_38737;
var statearr_38751_38771 = state_38737__$1;
(statearr_38751_38771[(2)] = inst_38731);

(statearr_38751_38771[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38738 === (10))){
var inst_38723 = (state_38737[(2)]);
var state_38737__$1 = state_38737;
var statearr_38752_38772 = state_38737__$1;
(statearr_38752_38772[(2)] = inst_38723);

(statearr_38752_38772[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38738 === (8))){
var inst_38720 = cljs.core.async.close_BANG_.call(null,to);
var state_38737__$1 = state_38737;
var statearr_38753_38773 = state_38737__$1;
(statearr_38753_38773[(2)] = inst_38720);

(statearr_38753_38773[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__38612__auto___38759))
;
return ((function (switch__38522__auto__,c__38612__auto___38759){
return (function() {
var cljs$core$async$state_machine__38523__auto__ = null;
var cljs$core$async$state_machine__38523__auto____0 = (function (){
var statearr_38754 = [null,null,null,null,null,null,null,null];
(statearr_38754[(0)] = cljs$core$async$state_machine__38523__auto__);

(statearr_38754[(1)] = (1));

return statearr_38754;
});
var cljs$core$async$state_machine__38523__auto____1 = (function (state_38737){
while(true){
var ret_value__38524__auto__ = (function (){try{while(true){
var result__38525__auto__ = switch__38522__auto__.call(null,state_38737);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38525__auto__;
}
break;
}
}catch (e38755){if((e38755 instanceof Object)){
var ex__38526__auto__ = e38755;
var statearr_38756_38774 = state_38737;
(statearr_38756_38774[(5)] = ex__38526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38737);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38755;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38775 = state_38737;
state_38737 = G__38775;
continue;
} else {
return ret_value__38524__auto__;
}
break;
}
});
cljs$core$async$state_machine__38523__auto__ = function(state_38737){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38523__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38523__auto____1.call(this,state_38737);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__38523__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38523__auto____0;
cljs$core$async$state_machine__38523__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38523__auto____1;
return cljs$core$async$state_machine__38523__auto__;
})()
;})(switch__38522__auto__,c__38612__auto___38759))
})();
var state__38614__auto__ = (function (){var statearr_38757 = f__38613__auto__.call(null);
(statearr_38757[(6)] = c__38612__auto___38759);

return statearr_38757;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38614__auto__);
});})(c__38612__auto___38759))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__38776){
var vec__38777 = p__38776;
var v = cljs.core.nth.call(null,vec__38777,(0),null);
var p = cljs.core.nth.call(null,vec__38777,(1),null);
var job = vec__38777;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__38612__auto___38948 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38612__auto___38948,res,vec__38777,v,p,job,jobs,results){
return (function (){
var f__38613__auto__ = (function (){var switch__38522__auto__ = ((function (c__38612__auto___38948,res,vec__38777,v,p,job,jobs,results){
return (function (state_38784){
var state_val_38785 = (state_38784[(1)]);
if((state_val_38785 === (1))){
var state_38784__$1 = state_38784;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38784__$1,(2),res,v);
} else {
if((state_val_38785 === (2))){
var inst_38781 = (state_38784[(2)]);
var inst_38782 = cljs.core.async.close_BANG_.call(null,res);
var state_38784__$1 = (function (){var statearr_38786 = state_38784;
(statearr_38786[(7)] = inst_38781);

return statearr_38786;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38784__$1,inst_38782);
} else {
return null;
}
}
});})(c__38612__auto___38948,res,vec__38777,v,p,job,jobs,results))
;
return ((function (switch__38522__auto__,c__38612__auto___38948,res,vec__38777,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38523__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38523__auto____0 = (function (){
var statearr_38787 = [null,null,null,null,null,null,null,null];
(statearr_38787[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38523__auto__);

(statearr_38787[(1)] = (1));

return statearr_38787;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38523__auto____1 = (function (state_38784){
while(true){
var ret_value__38524__auto__ = (function (){try{while(true){
var result__38525__auto__ = switch__38522__auto__.call(null,state_38784);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38525__auto__;
}
break;
}
}catch (e38788){if((e38788 instanceof Object)){
var ex__38526__auto__ = e38788;
var statearr_38789_38949 = state_38784;
(statearr_38789_38949[(5)] = ex__38526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38784);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38788;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38950 = state_38784;
state_38784 = G__38950;
continue;
} else {
return ret_value__38524__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38523__auto__ = function(state_38784){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38523__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38523__auto____1.call(this,state_38784);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__38523__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38523__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38523__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38523__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38523__auto__;
})()
;})(switch__38522__auto__,c__38612__auto___38948,res,vec__38777,v,p,job,jobs,results))
})();
var state__38614__auto__ = (function (){var statearr_38790 = f__38613__auto__.call(null);
(statearr_38790[(6)] = c__38612__auto___38948);

return statearr_38790;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38614__auto__);
});})(c__38612__auto___38948,res,vec__38777,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__38791){
var vec__38792 = p__38791;
var v = cljs.core.nth.call(null,vec__38792,(0),null);
var p = cljs.core.nth.call(null,vec__38792,(1),null);
var job = vec__38792;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4376__auto___38951 = n;
var __38952 = (0);
while(true){
if((__38952 < n__4376__auto___38951)){
var G__38795_38953 = type;
var G__38795_38954__$1 = (((G__38795_38953 instanceof cljs.core.Keyword))?G__38795_38953.fqn:null);
switch (G__38795_38954__$1) {
case "compute":
var c__38612__auto___38956 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__38952,c__38612__auto___38956,G__38795_38953,G__38795_38954__$1,n__4376__auto___38951,jobs,results,process,async){
return (function (){
var f__38613__auto__ = (function (){var switch__38522__auto__ = ((function (__38952,c__38612__auto___38956,G__38795_38953,G__38795_38954__$1,n__4376__auto___38951,jobs,results,process,async){
return (function (state_38808){
var state_val_38809 = (state_38808[(1)]);
if((state_val_38809 === (1))){
var state_38808__$1 = state_38808;
var statearr_38810_38957 = state_38808__$1;
(statearr_38810_38957[(2)] = null);

(statearr_38810_38957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38809 === (2))){
var state_38808__$1 = state_38808;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38808__$1,(4),jobs);
} else {
if((state_val_38809 === (3))){
var inst_38806 = (state_38808[(2)]);
var state_38808__$1 = state_38808;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38808__$1,inst_38806);
} else {
if((state_val_38809 === (4))){
var inst_38798 = (state_38808[(2)]);
var inst_38799 = process.call(null,inst_38798);
var state_38808__$1 = state_38808;
if(cljs.core.truth_(inst_38799)){
var statearr_38811_38958 = state_38808__$1;
(statearr_38811_38958[(1)] = (5));

} else {
var statearr_38812_38959 = state_38808__$1;
(statearr_38812_38959[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38809 === (5))){
var state_38808__$1 = state_38808;
var statearr_38813_38960 = state_38808__$1;
(statearr_38813_38960[(2)] = null);

(statearr_38813_38960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38809 === (6))){
var state_38808__$1 = state_38808;
var statearr_38814_38961 = state_38808__$1;
(statearr_38814_38961[(2)] = null);

(statearr_38814_38961[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38809 === (7))){
var inst_38804 = (state_38808[(2)]);
var state_38808__$1 = state_38808;
var statearr_38815_38962 = state_38808__$1;
(statearr_38815_38962[(2)] = inst_38804);

(statearr_38815_38962[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__38952,c__38612__auto___38956,G__38795_38953,G__38795_38954__$1,n__4376__auto___38951,jobs,results,process,async))
;
return ((function (__38952,switch__38522__auto__,c__38612__auto___38956,G__38795_38953,G__38795_38954__$1,n__4376__auto___38951,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38523__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38523__auto____0 = (function (){
var statearr_38816 = [null,null,null,null,null,null,null];
(statearr_38816[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38523__auto__);

(statearr_38816[(1)] = (1));

return statearr_38816;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38523__auto____1 = (function (state_38808){
while(true){
var ret_value__38524__auto__ = (function (){try{while(true){
var result__38525__auto__ = switch__38522__auto__.call(null,state_38808);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38525__auto__;
}
break;
}
}catch (e38817){if((e38817 instanceof Object)){
var ex__38526__auto__ = e38817;
var statearr_38818_38963 = state_38808;
(statearr_38818_38963[(5)] = ex__38526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38808);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38817;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38964 = state_38808;
state_38808 = G__38964;
continue;
} else {
return ret_value__38524__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38523__auto__ = function(state_38808){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38523__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38523__auto____1.call(this,state_38808);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__38523__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38523__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38523__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38523__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38523__auto__;
})()
;})(__38952,switch__38522__auto__,c__38612__auto___38956,G__38795_38953,G__38795_38954__$1,n__4376__auto___38951,jobs,results,process,async))
})();
var state__38614__auto__ = (function (){var statearr_38819 = f__38613__auto__.call(null);
(statearr_38819[(6)] = c__38612__auto___38956);

return statearr_38819;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38614__auto__);
});})(__38952,c__38612__auto___38956,G__38795_38953,G__38795_38954__$1,n__4376__auto___38951,jobs,results,process,async))
);


break;
case "async":
var c__38612__auto___38965 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__38952,c__38612__auto___38965,G__38795_38953,G__38795_38954__$1,n__4376__auto___38951,jobs,results,process,async){
return (function (){
var f__38613__auto__ = (function (){var switch__38522__auto__ = ((function (__38952,c__38612__auto___38965,G__38795_38953,G__38795_38954__$1,n__4376__auto___38951,jobs,results,process,async){
return (function (state_38832){
var state_val_38833 = (state_38832[(1)]);
if((state_val_38833 === (1))){
var state_38832__$1 = state_38832;
var statearr_38834_38966 = state_38832__$1;
(statearr_38834_38966[(2)] = null);

(statearr_38834_38966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38833 === (2))){
var state_38832__$1 = state_38832;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38832__$1,(4),jobs);
} else {
if((state_val_38833 === (3))){
var inst_38830 = (state_38832[(2)]);
var state_38832__$1 = state_38832;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38832__$1,inst_38830);
} else {
if((state_val_38833 === (4))){
var inst_38822 = (state_38832[(2)]);
var inst_38823 = async.call(null,inst_38822);
var state_38832__$1 = state_38832;
if(cljs.core.truth_(inst_38823)){
var statearr_38835_38967 = state_38832__$1;
(statearr_38835_38967[(1)] = (5));

} else {
var statearr_38836_38968 = state_38832__$1;
(statearr_38836_38968[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38833 === (5))){
var state_38832__$1 = state_38832;
var statearr_38837_38969 = state_38832__$1;
(statearr_38837_38969[(2)] = null);

(statearr_38837_38969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38833 === (6))){
var state_38832__$1 = state_38832;
var statearr_38838_38970 = state_38832__$1;
(statearr_38838_38970[(2)] = null);

(statearr_38838_38970[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38833 === (7))){
var inst_38828 = (state_38832[(2)]);
var state_38832__$1 = state_38832;
var statearr_38839_38971 = state_38832__$1;
(statearr_38839_38971[(2)] = inst_38828);

(statearr_38839_38971[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__38952,c__38612__auto___38965,G__38795_38953,G__38795_38954__$1,n__4376__auto___38951,jobs,results,process,async))
;
return ((function (__38952,switch__38522__auto__,c__38612__auto___38965,G__38795_38953,G__38795_38954__$1,n__4376__auto___38951,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38523__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38523__auto____0 = (function (){
var statearr_38840 = [null,null,null,null,null,null,null];
(statearr_38840[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38523__auto__);

(statearr_38840[(1)] = (1));

return statearr_38840;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38523__auto____1 = (function (state_38832){
while(true){
var ret_value__38524__auto__ = (function (){try{while(true){
var result__38525__auto__ = switch__38522__auto__.call(null,state_38832);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38525__auto__;
}
break;
}
}catch (e38841){if((e38841 instanceof Object)){
var ex__38526__auto__ = e38841;
var statearr_38842_38972 = state_38832;
(statearr_38842_38972[(5)] = ex__38526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38832);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38841;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38973 = state_38832;
state_38832 = G__38973;
continue;
} else {
return ret_value__38524__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38523__auto__ = function(state_38832){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38523__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38523__auto____1.call(this,state_38832);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__38523__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38523__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38523__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38523__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38523__auto__;
})()
;})(__38952,switch__38522__auto__,c__38612__auto___38965,G__38795_38953,G__38795_38954__$1,n__4376__auto___38951,jobs,results,process,async))
})();
var state__38614__auto__ = (function (){var statearr_38843 = f__38613__auto__.call(null);
(statearr_38843[(6)] = c__38612__auto___38965);

return statearr_38843;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38614__auto__);
});})(__38952,c__38612__auto___38965,G__38795_38953,G__38795_38954__$1,n__4376__auto___38951,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38795_38954__$1)].join('')));

}

var G__38974 = (__38952 + (1));
__38952 = G__38974;
continue;
} else {
}
break;
}

var c__38612__auto___38975 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38612__auto___38975,jobs,results,process,async){
return (function (){
var f__38613__auto__ = (function (){var switch__38522__auto__ = ((function (c__38612__auto___38975,jobs,results,process,async){
return (function (state_38865){
var state_val_38866 = (state_38865[(1)]);
if((state_val_38866 === (1))){
var state_38865__$1 = state_38865;
var statearr_38867_38976 = state_38865__$1;
(statearr_38867_38976[(2)] = null);

(statearr_38867_38976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38866 === (2))){
var state_38865__$1 = state_38865;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38865__$1,(4),from);
} else {
if((state_val_38866 === (3))){
var inst_38863 = (state_38865[(2)]);
var state_38865__$1 = state_38865;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38865__$1,inst_38863);
} else {
if((state_val_38866 === (4))){
var inst_38846 = (state_38865[(7)]);
var inst_38846__$1 = (state_38865[(2)]);
var inst_38847 = (inst_38846__$1 == null);
var state_38865__$1 = (function (){var statearr_38868 = state_38865;
(statearr_38868[(7)] = inst_38846__$1);

return statearr_38868;
})();
if(cljs.core.truth_(inst_38847)){
var statearr_38869_38977 = state_38865__$1;
(statearr_38869_38977[(1)] = (5));

} else {
var statearr_38870_38978 = state_38865__$1;
(statearr_38870_38978[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38866 === (5))){
var inst_38849 = cljs.core.async.close_BANG_.call(null,jobs);
var state_38865__$1 = state_38865;
var statearr_38871_38979 = state_38865__$1;
(statearr_38871_38979[(2)] = inst_38849);

(statearr_38871_38979[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38866 === (6))){
var inst_38851 = (state_38865[(8)]);
var inst_38846 = (state_38865[(7)]);
var inst_38851__$1 = cljs.core.async.chan.call(null,(1));
var inst_38852 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38853 = [inst_38846,inst_38851__$1];
var inst_38854 = (new cljs.core.PersistentVector(null,2,(5),inst_38852,inst_38853,null));
var state_38865__$1 = (function (){var statearr_38872 = state_38865;
(statearr_38872[(8)] = inst_38851__$1);

return statearr_38872;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38865__$1,(8),jobs,inst_38854);
} else {
if((state_val_38866 === (7))){
var inst_38861 = (state_38865[(2)]);
var state_38865__$1 = state_38865;
var statearr_38873_38980 = state_38865__$1;
(statearr_38873_38980[(2)] = inst_38861);

(statearr_38873_38980[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38866 === (8))){
var inst_38851 = (state_38865[(8)]);
var inst_38856 = (state_38865[(2)]);
var state_38865__$1 = (function (){var statearr_38874 = state_38865;
(statearr_38874[(9)] = inst_38856);

return statearr_38874;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38865__$1,(9),results,inst_38851);
} else {
if((state_val_38866 === (9))){
var inst_38858 = (state_38865[(2)]);
var state_38865__$1 = (function (){var statearr_38875 = state_38865;
(statearr_38875[(10)] = inst_38858);

return statearr_38875;
})();
var statearr_38876_38981 = state_38865__$1;
(statearr_38876_38981[(2)] = null);

(statearr_38876_38981[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__38612__auto___38975,jobs,results,process,async))
;
return ((function (switch__38522__auto__,c__38612__auto___38975,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38523__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38523__auto____0 = (function (){
var statearr_38877 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38877[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38523__auto__);

(statearr_38877[(1)] = (1));

return statearr_38877;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38523__auto____1 = (function (state_38865){
while(true){
var ret_value__38524__auto__ = (function (){try{while(true){
var result__38525__auto__ = switch__38522__auto__.call(null,state_38865);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38525__auto__;
}
break;
}
}catch (e38878){if((e38878 instanceof Object)){
var ex__38526__auto__ = e38878;
var statearr_38879_38982 = state_38865;
(statearr_38879_38982[(5)] = ex__38526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38865);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38878;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38983 = state_38865;
state_38865 = G__38983;
continue;
} else {
return ret_value__38524__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38523__auto__ = function(state_38865){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38523__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38523__auto____1.call(this,state_38865);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__38523__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38523__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38523__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38523__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38523__auto__;
})()
;})(switch__38522__auto__,c__38612__auto___38975,jobs,results,process,async))
})();
var state__38614__auto__ = (function (){var statearr_38880 = f__38613__auto__.call(null);
(statearr_38880[(6)] = c__38612__auto___38975);

return statearr_38880;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38614__auto__);
});})(c__38612__auto___38975,jobs,results,process,async))
);


var c__38612__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38612__auto__,jobs,results,process,async){
return (function (){
var f__38613__auto__ = (function (){var switch__38522__auto__ = ((function (c__38612__auto__,jobs,results,process,async){
return (function (state_38918){
var state_val_38919 = (state_38918[(1)]);
if((state_val_38919 === (7))){
var inst_38914 = (state_38918[(2)]);
var state_38918__$1 = state_38918;
var statearr_38920_38984 = state_38918__$1;
(statearr_38920_38984[(2)] = inst_38914);

(statearr_38920_38984[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38919 === (20))){
var state_38918__$1 = state_38918;
var statearr_38921_38985 = state_38918__$1;
(statearr_38921_38985[(2)] = null);

(statearr_38921_38985[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38919 === (1))){
var state_38918__$1 = state_38918;
var statearr_38922_38986 = state_38918__$1;
(statearr_38922_38986[(2)] = null);

(statearr_38922_38986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38919 === (4))){
var inst_38883 = (state_38918[(7)]);
var inst_38883__$1 = (state_38918[(2)]);
var inst_38884 = (inst_38883__$1 == null);
var state_38918__$1 = (function (){var statearr_38923 = state_38918;
(statearr_38923[(7)] = inst_38883__$1);

return statearr_38923;
})();
if(cljs.core.truth_(inst_38884)){
var statearr_38924_38987 = state_38918__$1;
(statearr_38924_38987[(1)] = (5));

} else {
var statearr_38925_38988 = state_38918__$1;
(statearr_38925_38988[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38919 === (15))){
var inst_38896 = (state_38918[(8)]);
var state_38918__$1 = state_38918;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38918__$1,(18),to,inst_38896);
} else {
if((state_val_38919 === (21))){
var inst_38909 = (state_38918[(2)]);
var state_38918__$1 = state_38918;
var statearr_38926_38989 = state_38918__$1;
(statearr_38926_38989[(2)] = inst_38909);

(statearr_38926_38989[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38919 === (13))){
var inst_38911 = (state_38918[(2)]);
var state_38918__$1 = (function (){var statearr_38927 = state_38918;
(statearr_38927[(9)] = inst_38911);

return statearr_38927;
})();
var statearr_38928_38990 = state_38918__$1;
(statearr_38928_38990[(2)] = null);

(statearr_38928_38990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38919 === (6))){
var inst_38883 = (state_38918[(7)]);
var state_38918__$1 = state_38918;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38918__$1,(11),inst_38883);
} else {
if((state_val_38919 === (17))){
var inst_38904 = (state_38918[(2)]);
var state_38918__$1 = state_38918;
if(cljs.core.truth_(inst_38904)){
var statearr_38929_38991 = state_38918__$1;
(statearr_38929_38991[(1)] = (19));

} else {
var statearr_38930_38992 = state_38918__$1;
(statearr_38930_38992[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38919 === (3))){
var inst_38916 = (state_38918[(2)]);
var state_38918__$1 = state_38918;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38918__$1,inst_38916);
} else {
if((state_val_38919 === (12))){
var inst_38893 = (state_38918[(10)]);
var state_38918__$1 = state_38918;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38918__$1,(14),inst_38893);
} else {
if((state_val_38919 === (2))){
var state_38918__$1 = state_38918;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38918__$1,(4),results);
} else {
if((state_val_38919 === (19))){
var state_38918__$1 = state_38918;
var statearr_38931_38993 = state_38918__$1;
(statearr_38931_38993[(2)] = null);

(statearr_38931_38993[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38919 === (11))){
var inst_38893 = (state_38918[(2)]);
var state_38918__$1 = (function (){var statearr_38932 = state_38918;
(statearr_38932[(10)] = inst_38893);

return statearr_38932;
})();
var statearr_38933_38994 = state_38918__$1;
(statearr_38933_38994[(2)] = null);

(statearr_38933_38994[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38919 === (9))){
var state_38918__$1 = state_38918;
var statearr_38934_38995 = state_38918__$1;
(statearr_38934_38995[(2)] = null);

(statearr_38934_38995[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38919 === (5))){
var state_38918__$1 = state_38918;
if(cljs.core.truth_(close_QMARK_)){
var statearr_38935_38996 = state_38918__$1;
(statearr_38935_38996[(1)] = (8));

} else {
var statearr_38936_38997 = state_38918__$1;
(statearr_38936_38997[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38919 === (14))){
var inst_38898 = (state_38918[(11)]);
var inst_38896 = (state_38918[(8)]);
var inst_38896__$1 = (state_38918[(2)]);
var inst_38897 = (inst_38896__$1 == null);
var inst_38898__$1 = cljs.core.not.call(null,inst_38897);
var state_38918__$1 = (function (){var statearr_38937 = state_38918;
(statearr_38937[(11)] = inst_38898__$1);

(statearr_38937[(8)] = inst_38896__$1);

return statearr_38937;
})();
if(inst_38898__$1){
var statearr_38938_38998 = state_38918__$1;
(statearr_38938_38998[(1)] = (15));

} else {
var statearr_38939_38999 = state_38918__$1;
(statearr_38939_38999[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38919 === (16))){
var inst_38898 = (state_38918[(11)]);
var state_38918__$1 = state_38918;
var statearr_38940_39000 = state_38918__$1;
(statearr_38940_39000[(2)] = inst_38898);

(statearr_38940_39000[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38919 === (10))){
var inst_38890 = (state_38918[(2)]);
var state_38918__$1 = state_38918;
var statearr_38941_39001 = state_38918__$1;
(statearr_38941_39001[(2)] = inst_38890);

(statearr_38941_39001[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38919 === (18))){
var inst_38901 = (state_38918[(2)]);
var state_38918__$1 = state_38918;
var statearr_38942_39002 = state_38918__$1;
(statearr_38942_39002[(2)] = inst_38901);

(statearr_38942_39002[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38919 === (8))){
var inst_38887 = cljs.core.async.close_BANG_.call(null,to);
var state_38918__$1 = state_38918;
var statearr_38943_39003 = state_38918__$1;
(statearr_38943_39003[(2)] = inst_38887);

(statearr_38943_39003[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__38612__auto__,jobs,results,process,async))
;
return ((function (switch__38522__auto__,c__38612__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38523__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38523__auto____0 = (function (){
var statearr_38944 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38944[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38523__auto__);

(statearr_38944[(1)] = (1));

return statearr_38944;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38523__auto____1 = (function (state_38918){
while(true){
var ret_value__38524__auto__ = (function (){try{while(true){
var result__38525__auto__ = switch__38522__auto__.call(null,state_38918);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38525__auto__;
}
break;
}
}catch (e38945){if((e38945 instanceof Object)){
var ex__38526__auto__ = e38945;
var statearr_38946_39004 = state_38918;
(statearr_38946_39004[(5)] = ex__38526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38918);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38945;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39005 = state_38918;
state_38918 = G__39005;
continue;
} else {
return ret_value__38524__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38523__auto__ = function(state_38918){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38523__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38523__auto____1.call(this,state_38918);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__38523__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38523__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38523__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38523__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38523__auto__;
})()
;})(switch__38522__auto__,c__38612__auto__,jobs,results,process,async))
})();
var state__38614__auto__ = (function (){var statearr_38947 = f__38613__auto__.call(null);
(statearr_38947[(6)] = c__38612__auto__);

return statearr_38947;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38614__auto__);
});})(c__38612__auto__,jobs,results,process,async))
);

return c__38612__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__39007 = arguments.length;
switch (G__39007) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__39010 = arguments.length;
switch (G__39010) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__39013 = arguments.length;
switch (G__39013) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__38612__auto___39062 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38612__auto___39062,tc,fc){
return (function (){
var f__38613__auto__ = (function (){var switch__38522__auto__ = ((function (c__38612__auto___39062,tc,fc){
return (function (state_39039){
var state_val_39040 = (state_39039[(1)]);
if((state_val_39040 === (7))){
var inst_39035 = (state_39039[(2)]);
var state_39039__$1 = state_39039;
var statearr_39041_39063 = state_39039__$1;
(statearr_39041_39063[(2)] = inst_39035);

(statearr_39041_39063[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39040 === (1))){
var state_39039__$1 = state_39039;
var statearr_39042_39064 = state_39039__$1;
(statearr_39042_39064[(2)] = null);

(statearr_39042_39064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39040 === (4))){
var inst_39016 = (state_39039[(7)]);
var inst_39016__$1 = (state_39039[(2)]);
var inst_39017 = (inst_39016__$1 == null);
var state_39039__$1 = (function (){var statearr_39043 = state_39039;
(statearr_39043[(7)] = inst_39016__$1);

return statearr_39043;
})();
if(cljs.core.truth_(inst_39017)){
var statearr_39044_39065 = state_39039__$1;
(statearr_39044_39065[(1)] = (5));

} else {
var statearr_39045_39066 = state_39039__$1;
(statearr_39045_39066[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39040 === (13))){
var state_39039__$1 = state_39039;
var statearr_39046_39067 = state_39039__$1;
(statearr_39046_39067[(2)] = null);

(statearr_39046_39067[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39040 === (6))){
var inst_39016 = (state_39039[(7)]);
var inst_39022 = p.call(null,inst_39016);
var state_39039__$1 = state_39039;
if(cljs.core.truth_(inst_39022)){
var statearr_39047_39068 = state_39039__$1;
(statearr_39047_39068[(1)] = (9));

} else {
var statearr_39048_39069 = state_39039__$1;
(statearr_39048_39069[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39040 === (3))){
var inst_39037 = (state_39039[(2)]);
var state_39039__$1 = state_39039;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39039__$1,inst_39037);
} else {
if((state_val_39040 === (12))){
var state_39039__$1 = state_39039;
var statearr_39049_39070 = state_39039__$1;
(statearr_39049_39070[(2)] = null);

(statearr_39049_39070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39040 === (2))){
var state_39039__$1 = state_39039;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39039__$1,(4),ch);
} else {
if((state_val_39040 === (11))){
var inst_39016 = (state_39039[(7)]);
var inst_39026 = (state_39039[(2)]);
var state_39039__$1 = state_39039;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39039__$1,(8),inst_39026,inst_39016);
} else {
if((state_val_39040 === (9))){
var state_39039__$1 = state_39039;
var statearr_39050_39071 = state_39039__$1;
(statearr_39050_39071[(2)] = tc);

(statearr_39050_39071[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39040 === (5))){
var inst_39019 = cljs.core.async.close_BANG_.call(null,tc);
var inst_39020 = cljs.core.async.close_BANG_.call(null,fc);
var state_39039__$1 = (function (){var statearr_39051 = state_39039;
(statearr_39051[(8)] = inst_39019);

return statearr_39051;
})();
var statearr_39052_39072 = state_39039__$1;
(statearr_39052_39072[(2)] = inst_39020);

(statearr_39052_39072[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39040 === (14))){
var inst_39033 = (state_39039[(2)]);
var state_39039__$1 = state_39039;
var statearr_39053_39073 = state_39039__$1;
(statearr_39053_39073[(2)] = inst_39033);

(statearr_39053_39073[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39040 === (10))){
var state_39039__$1 = state_39039;
var statearr_39054_39074 = state_39039__$1;
(statearr_39054_39074[(2)] = fc);

(statearr_39054_39074[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39040 === (8))){
var inst_39028 = (state_39039[(2)]);
var state_39039__$1 = state_39039;
if(cljs.core.truth_(inst_39028)){
var statearr_39055_39075 = state_39039__$1;
(statearr_39055_39075[(1)] = (12));

} else {
var statearr_39056_39076 = state_39039__$1;
(statearr_39056_39076[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__38612__auto___39062,tc,fc))
;
return ((function (switch__38522__auto__,c__38612__auto___39062,tc,fc){
return (function() {
var cljs$core$async$state_machine__38523__auto__ = null;
var cljs$core$async$state_machine__38523__auto____0 = (function (){
var statearr_39057 = [null,null,null,null,null,null,null,null,null];
(statearr_39057[(0)] = cljs$core$async$state_machine__38523__auto__);

(statearr_39057[(1)] = (1));

return statearr_39057;
});
var cljs$core$async$state_machine__38523__auto____1 = (function (state_39039){
while(true){
var ret_value__38524__auto__ = (function (){try{while(true){
var result__38525__auto__ = switch__38522__auto__.call(null,state_39039);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38525__auto__;
}
break;
}
}catch (e39058){if((e39058 instanceof Object)){
var ex__38526__auto__ = e39058;
var statearr_39059_39077 = state_39039;
(statearr_39059_39077[(5)] = ex__38526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39039);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39058;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39078 = state_39039;
state_39039 = G__39078;
continue;
} else {
return ret_value__38524__auto__;
}
break;
}
});
cljs$core$async$state_machine__38523__auto__ = function(state_39039){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38523__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38523__auto____1.call(this,state_39039);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__38523__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38523__auto____0;
cljs$core$async$state_machine__38523__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38523__auto____1;
return cljs$core$async$state_machine__38523__auto__;
})()
;})(switch__38522__auto__,c__38612__auto___39062,tc,fc))
})();
var state__38614__auto__ = (function (){var statearr_39060 = f__38613__auto__.call(null);
(statearr_39060[(6)] = c__38612__auto___39062);

return statearr_39060;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38614__auto__);
});})(c__38612__auto___39062,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__38612__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38612__auto__){
return (function (){
var f__38613__auto__ = (function (){var switch__38522__auto__ = ((function (c__38612__auto__){
return (function (state_39099){
var state_val_39100 = (state_39099[(1)]);
if((state_val_39100 === (7))){
var inst_39095 = (state_39099[(2)]);
var state_39099__$1 = state_39099;
var statearr_39101_39119 = state_39099__$1;
(statearr_39101_39119[(2)] = inst_39095);

(statearr_39101_39119[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39100 === (1))){
var inst_39079 = init;
var state_39099__$1 = (function (){var statearr_39102 = state_39099;
(statearr_39102[(7)] = inst_39079);

return statearr_39102;
})();
var statearr_39103_39120 = state_39099__$1;
(statearr_39103_39120[(2)] = null);

(statearr_39103_39120[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39100 === (4))){
var inst_39082 = (state_39099[(8)]);
var inst_39082__$1 = (state_39099[(2)]);
var inst_39083 = (inst_39082__$1 == null);
var state_39099__$1 = (function (){var statearr_39104 = state_39099;
(statearr_39104[(8)] = inst_39082__$1);

return statearr_39104;
})();
if(cljs.core.truth_(inst_39083)){
var statearr_39105_39121 = state_39099__$1;
(statearr_39105_39121[(1)] = (5));

} else {
var statearr_39106_39122 = state_39099__$1;
(statearr_39106_39122[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39100 === (6))){
var inst_39079 = (state_39099[(7)]);
var inst_39082 = (state_39099[(8)]);
var inst_39086 = (state_39099[(9)]);
var inst_39086__$1 = f.call(null,inst_39079,inst_39082);
var inst_39087 = cljs.core.reduced_QMARK_.call(null,inst_39086__$1);
var state_39099__$1 = (function (){var statearr_39107 = state_39099;
(statearr_39107[(9)] = inst_39086__$1);

return statearr_39107;
})();
if(inst_39087){
var statearr_39108_39123 = state_39099__$1;
(statearr_39108_39123[(1)] = (8));

} else {
var statearr_39109_39124 = state_39099__$1;
(statearr_39109_39124[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39100 === (3))){
var inst_39097 = (state_39099[(2)]);
var state_39099__$1 = state_39099;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39099__$1,inst_39097);
} else {
if((state_val_39100 === (2))){
var state_39099__$1 = state_39099;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39099__$1,(4),ch);
} else {
if((state_val_39100 === (9))){
var inst_39086 = (state_39099[(9)]);
var inst_39079 = inst_39086;
var state_39099__$1 = (function (){var statearr_39110 = state_39099;
(statearr_39110[(7)] = inst_39079);

return statearr_39110;
})();
var statearr_39111_39125 = state_39099__$1;
(statearr_39111_39125[(2)] = null);

(statearr_39111_39125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39100 === (5))){
var inst_39079 = (state_39099[(7)]);
var state_39099__$1 = state_39099;
var statearr_39112_39126 = state_39099__$1;
(statearr_39112_39126[(2)] = inst_39079);

(statearr_39112_39126[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39100 === (10))){
var inst_39093 = (state_39099[(2)]);
var state_39099__$1 = state_39099;
var statearr_39113_39127 = state_39099__$1;
(statearr_39113_39127[(2)] = inst_39093);

(statearr_39113_39127[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39100 === (8))){
var inst_39086 = (state_39099[(9)]);
var inst_39089 = cljs.core.deref.call(null,inst_39086);
var state_39099__$1 = state_39099;
var statearr_39114_39128 = state_39099__$1;
(statearr_39114_39128[(2)] = inst_39089);

(statearr_39114_39128[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__38612__auto__))
;
return ((function (switch__38522__auto__,c__38612__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__38523__auto__ = null;
var cljs$core$async$reduce_$_state_machine__38523__auto____0 = (function (){
var statearr_39115 = [null,null,null,null,null,null,null,null,null,null];
(statearr_39115[(0)] = cljs$core$async$reduce_$_state_machine__38523__auto__);

(statearr_39115[(1)] = (1));

return statearr_39115;
});
var cljs$core$async$reduce_$_state_machine__38523__auto____1 = (function (state_39099){
while(true){
var ret_value__38524__auto__ = (function (){try{while(true){
var result__38525__auto__ = switch__38522__auto__.call(null,state_39099);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38525__auto__;
}
break;
}
}catch (e39116){if((e39116 instanceof Object)){
var ex__38526__auto__ = e39116;
var statearr_39117_39129 = state_39099;
(statearr_39117_39129[(5)] = ex__38526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39099);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39116;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39130 = state_39099;
state_39099 = G__39130;
continue;
} else {
return ret_value__38524__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__38523__auto__ = function(state_39099){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__38523__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__38523__auto____1.call(this,state_39099);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__38523__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__38523__auto____0;
cljs$core$async$reduce_$_state_machine__38523__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__38523__auto____1;
return cljs$core$async$reduce_$_state_machine__38523__auto__;
})()
;})(switch__38522__auto__,c__38612__auto__))
})();
var state__38614__auto__ = (function (){var statearr_39118 = f__38613__auto__.call(null);
(statearr_39118[(6)] = c__38612__auto__);

return statearr_39118;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38614__auto__);
});})(c__38612__auto__))
);

return c__38612__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__38612__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38612__auto__,f__$1){
return (function (){
var f__38613__auto__ = (function (){var switch__38522__auto__ = ((function (c__38612__auto__,f__$1){
return (function (state_39136){
var state_val_39137 = (state_39136[(1)]);
if((state_val_39137 === (1))){
var inst_39131 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_39136__$1 = state_39136;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39136__$1,(2),inst_39131);
} else {
if((state_val_39137 === (2))){
var inst_39133 = (state_39136[(2)]);
var inst_39134 = f__$1.call(null,inst_39133);
var state_39136__$1 = state_39136;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39136__$1,inst_39134);
} else {
return null;
}
}
});})(c__38612__auto__,f__$1))
;
return ((function (switch__38522__auto__,c__38612__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__38523__auto__ = null;
var cljs$core$async$transduce_$_state_machine__38523__auto____0 = (function (){
var statearr_39138 = [null,null,null,null,null,null,null];
(statearr_39138[(0)] = cljs$core$async$transduce_$_state_machine__38523__auto__);

(statearr_39138[(1)] = (1));

return statearr_39138;
});
var cljs$core$async$transduce_$_state_machine__38523__auto____1 = (function (state_39136){
while(true){
var ret_value__38524__auto__ = (function (){try{while(true){
var result__38525__auto__ = switch__38522__auto__.call(null,state_39136);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38525__auto__;
}
break;
}
}catch (e39139){if((e39139 instanceof Object)){
var ex__38526__auto__ = e39139;
var statearr_39140_39142 = state_39136;
(statearr_39140_39142[(5)] = ex__38526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39136);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39139;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39143 = state_39136;
state_39136 = G__39143;
continue;
} else {
return ret_value__38524__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__38523__auto__ = function(state_39136){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__38523__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__38523__auto____1.call(this,state_39136);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__38523__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__38523__auto____0;
cljs$core$async$transduce_$_state_machine__38523__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__38523__auto____1;
return cljs$core$async$transduce_$_state_machine__38523__auto__;
})()
;})(switch__38522__auto__,c__38612__auto__,f__$1))
})();
var state__38614__auto__ = (function (){var statearr_39141 = f__38613__auto__.call(null);
(statearr_39141[(6)] = c__38612__auto__);

return statearr_39141;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38614__auto__);
});})(c__38612__auto__,f__$1))
);

return c__38612__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__39145 = arguments.length;
switch (G__39145) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__38612__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38612__auto__){
return (function (){
var f__38613__auto__ = (function (){var switch__38522__auto__ = ((function (c__38612__auto__){
return (function (state_39170){
var state_val_39171 = (state_39170[(1)]);
if((state_val_39171 === (7))){
var inst_39152 = (state_39170[(2)]);
var state_39170__$1 = state_39170;
var statearr_39172_39193 = state_39170__$1;
(statearr_39172_39193[(2)] = inst_39152);

(statearr_39172_39193[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39171 === (1))){
var inst_39146 = cljs.core.seq.call(null,coll);
var inst_39147 = inst_39146;
var state_39170__$1 = (function (){var statearr_39173 = state_39170;
(statearr_39173[(7)] = inst_39147);

return statearr_39173;
})();
var statearr_39174_39194 = state_39170__$1;
(statearr_39174_39194[(2)] = null);

(statearr_39174_39194[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39171 === (4))){
var inst_39147 = (state_39170[(7)]);
var inst_39150 = cljs.core.first.call(null,inst_39147);
var state_39170__$1 = state_39170;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39170__$1,(7),ch,inst_39150);
} else {
if((state_val_39171 === (13))){
var inst_39164 = (state_39170[(2)]);
var state_39170__$1 = state_39170;
var statearr_39175_39195 = state_39170__$1;
(statearr_39175_39195[(2)] = inst_39164);

(statearr_39175_39195[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39171 === (6))){
var inst_39155 = (state_39170[(2)]);
var state_39170__$1 = state_39170;
if(cljs.core.truth_(inst_39155)){
var statearr_39176_39196 = state_39170__$1;
(statearr_39176_39196[(1)] = (8));

} else {
var statearr_39177_39197 = state_39170__$1;
(statearr_39177_39197[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39171 === (3))){
var inst_39168 = (state_39170[(2)]);
var state_39170__$1 = state_39170;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39170__$1,inst_39168);
} else {
if((state_val_39171 === (12))){
var state_39170__$1 = state_39170;
var statearr_39178_39198 = state_39170__$1;
(statearr_39178_39198[(2)] = null);

(statearr_39178_39198[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39171 === (2))){
var inst_39147 = (state_39170[(7)]);
var state_39170__$1 = state_39170;
if(cljs.core.truth_(inst_39147)){
var statearr_39179_39199 = state_39170__$1;
(statearr_39179_39199[(1)] = (4));

} else {
var statearr_39180_39200 = state_39170__$1;
(statearr_39180_39200[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39171 === (11))){
var inst_39161 = cljs.core.async.close_BANG_.call(null,ch);
var state_39170__$1 = state_39170;
var statearr_39181_39201 = state_39170__$1;
(statearr_39181_39201[(2)] = inst_39161);

(statearr_39181_39201[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39171 === (9))){
var state_39170__$1 = state_39170;
if(cljs.core.truth_(close_QMARK_)){
var statearr_39182_39202 = state_39170__$1;
(statearr_39182_39202[(1)] = (11));

} else {
var statearr_39183_39203 = state_39170__$1;
(statearr_39183_39203[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39171 === (5))){
var inst_39147 = (state_39170[(7)]);
var state_39170__$1 = state_39170;
var statearr_39184_39204 = state_39170__$1;
(statearr_39184_39204[(2)] = inst_39147);

(statearr_39184_39204[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39171 === (10))){
var inst_39166 = (state_39170[(2)]);
var state_39170__$1 = state_39170;
var statearr_39185_39205 = state_39170__$1;
(statearr_39185_39205[(2)] = inst_39166);

(statearr_39185_39205[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39171 === (8))){
var inst_39147 = (state_39170[(7)]);
var inst_39157 = cljs.core.next.call(null,inst_39147);
var inst_39147__$1 = inst_39157;
var state_39170__$1 = (function (){var statearr_39186 = state_39170;
(statearr_39186[(7)] = inst_39147__$1);

return statearr_39186;
})();
var statearr_39187_39206 = state_39170__$1;
(statearr_39187_39206[(2)] = null);

(statearr_39187_39206[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__38612__auto__))
;
return ((function (switch__38522__auto__,c__38612__auto__){
return (function() {
var cljs$core$async$state_machine__38523__auto__ = null;
var cljs$core$async$state_machine__38523__auto____0 = (function (){
var statearr_39188 = [null,null,null,null,null,null,null,null];
(statearr_39188[(0)] = cljs$core$async$state_machine__38523__auto__);

(statearr_39188[(1)] = (1));

return statearr_39188;
});
var cljs$core$async$state_machine__38523__auto____1 = (function (state_39170){
while(true){
var ret_value__38524__auto__ = (function (){try{while(true){
var result__38525__auto__ = switch__38522__auto__.call(null,state_39170);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38525__auto__;
}
break;
}
}catch (e39189){if((e39189 instanceof Object)){
var ex__38526__auto__ = e39189;
var statearr_39190_39207 = state_39170;
(statearr_39190_39207[(5)] = ex__38526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39170);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39189;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39208 = state_39170;
state_39170 = G__39208;
continue;
} else {
return ret_value__38524__auto__;
}
break;
}
});
cljs$core$async$state_machine__38523__auto__ = function(state_39170){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38523__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38523__auto____1.call(this,state_39170);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__38523__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38523__auto____0;
cljs$core$async$state_machine__38523__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38523__auto____1;
return cljs$core$async$state_machine__38523__auto__;
})()
;})(switch__38522__auto__,c__38612__auto__))
})();
var state__38614__auto__ = (function (){var statearr_39191 = f__38613__auto__.call(null);
(statearr_39191[(6)] = c__38612__auto__);

return statearr_39191;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38614__auto__);
});})(c__38612__auto__))
);

return c__38612__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4211__auto__ = (((_ == null))?null:_);
var m__4212__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,_);
} else {
var m__4212__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async39209 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39209 = (function (ch,cs,meta39210){
this.ch = ch;
this.cs = cs;
this.meta39210 = meta39210;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39209.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_39211,meta39210__$1){
var self__ = this;
var _39211__$1 = this;
return (new cljs.core.async.t_cljs$core$async39209(self__.ch,self__.cs,meta39210__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async39209.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_39211){
var self__ = this;
var _39211__$1 = this;
return self__.meta39210;
});})(cs))
;

cljs.core.async.t_cljs$core$async39209.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39209.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async39209.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39209.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async39209.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async39209.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async39209.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta39210","meta39210",1053429125,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async39209.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39209.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39209";

cljs.core.async.t_cljs$core$async39209.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async39209");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39209.
 */
cljs.core.async.__GT_t_cljs$core$async39209 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async39209(ch__$1,cs__$1,meta39210){
return (new cljs.core.async.t_cljs$core$async39209(ch__$1,cs__$1,meta39210));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async39209(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__38612__auto___39431 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38612__auto___39431,cs,m,dchan,dctr,done){
return (function (){
var f__38613__auto__ = (function (){var switch__38522__auto__ = ((function (c__38612__auto___39431,cs,m,dchan,dctr,done){
return (function (state_39346){
var state_val_39347 = (state_39346[(1)]);
if((state_val_39347 === (7))){
var inst_39342 = (state_39346[(2)]);
var state_39346__$1 = state_39346;
var statearr_39348_39432 = state_39346__$1;
(statearr_39348_39432[(2)] = inst_39342);

(statearr_39348_39432[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39347 === (20))){
var inst_39245 = (state_39346[(7)]);
var inst_39257 = cljs.core.first.call(null,inst_39245);
var inst_39258 = cljs.core.nth.call(null,inst_39257,(0),null);
var inst_39259 = cljs.core.nth.call(null,inst_39257,(1),null);
var state_39346__$1 = (function (){var statearr_39349 = state_39346;
(statearr_39349[(8)] = inst_39258);

return statearr_39349;
})();
if(cljs.core.truth_(inst_39259)){
var statearr_39350_39433 = state_39346__$1;
(statearr_39350_39433[(1)] = (22));

} else {
var statearr_39351_39434 = state_39346__$1;
(statearr_39351_39434[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39347 === (27))){
var inst_39287 = (state_39346[(9)]);
var inst_39294 = (state_39346[(10)]);
var inst_39289 = (state_39346[(11)]);
var inst_39214 = (state_39346[(12)]);
var inst_39294__$1 = cljs.core._nth.call(null,inst_39287,inst_39289);
var inst_39295 = cljs.core.async.put_BANG_.call(null,inst_39294__$1,inst_39214,done);
var state_39346__$1 = (function (){var statearr_39352 = state_39346;
(statearr_39352[(10)] = inst_39294__$1);

return statearr_39352;
})();
if(cljs.core.truth_(inst_39295)){
var statearr_39353_39435 = state_39346__$1;
(statearr_39353_39435[(1)] = (30));

} else {
var statearr_39354_39436 = state_39346__$1;
(statearr_39354_39436[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39347 === (1))){
var state_39346__$1 = state_39346;
var statearr_39355_39437 = state_39346__$1;
(statearr_39355_39437[(2)] = null);

(statearr_39355_39437[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39347 === (24))){
var inst_39245 = (state_39346[(7)]);
var inst_39264 = (state_39346[(2)]);
var inst_39265 = cljs.core.next.call(null,inst_39245);
var inst_39223 = inst_39265;
var inst_39224 = null;
var inst_39225 = (0);
var inst_39226 = (0);
var state_39346__$1 = (function (){var statearr_39356 = state_39346;
(statearr_39356[(13)] = inst_39264);

(statearr_39356[(14)] = inst_39223);

(statearr_39356[(15)] = inst_39225);

(statearr_39356[(16)] = inst_39226);

(statearr_39356[(17)] = inst_39224);

return statearr_39356;
})();
var statearr_39357_39438 = state_39346__$1;
(statearr_39357_39438[(2)] = null);

(statearr_39357_39438[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39347 === (39))){
var state_39346__$1 = state_39346;
var statearr_39361_39439 = state_39346__$1;
(statearr_39361_39439[(2)] = null);

(statearr_39361_39439[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39347 === (4))){
var inst_39214 = (state_39346[(12)]);
var inst_39214__$1 = (state_39346[(2)]);
var inst_39215 = (inst_39214__$1 == null);
var state_39346__$1 = (function (){var statearr_39362 = state_39346;
(statearr_39362[(12)] = inst_39214__$1);

return statearr_39362;
})();
if(cljs.core.truth_(inst_39215)){
var statearr_39363_39440 = state_39346__$1;
(statearr_39363_39440[(1)] = (5));

} else {
var statearr_39364_39441 = state_39346__$1;
(statearr_39364_39441[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39347 === (15))){
var inst_39223 = (state_39346[(14)]);
var inst_39225 = (state_39346[(15)]);
var inst_39226 = (state_39346[(16)]);
var inst_39224 = (state_39346[(17)]);
var inst_39241 = (state_39346[(2)]);
var inst_39242 = (inst_39226 + (1));
var tmp39358 = inst_39223;
var tmp39359 = inst_39225;
var tmp39360 = inst_39224;
var inst_39223__$1 = tmp39358;
var inst_39224__$1 = tmp39360;
var inst_39225__$1 = tmp39359;
var inst_39226__$1 = inst_39242;
var state_39346__$1 = (function (){var statearr_39365 = state_39346;
(statearr_39365[(18)] = inst_39241);

(statearr_39365[(14)] = inst_39223__$1);

(statearr_39365[(15)] = inst_39225__$1);

(statearr_39365[(16)] = inst_39226__$1);

(statearr_39365[(17)] = inst_39224__$1);

return statearr_39365;
})();
var statearr_39366_39442 = state_39346__$1;
(statearr_39366_39442[(2)] = null);

(statearr_39366_39442[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39347 === (21))){
var inst_39268 = (state_39346[(2)]);
var state_39346__$1 = state_39346;
var statearr_39370_39443 = state_39346__$1;
(statearr_39370_39443[(2)] = inst_39268);

(statearr_39370_39443[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39347 === (31))){
var inst_39294 = (state_39346[(10)]);
var inst_39298 = done.call(null,null);
var inst_39299 = cljs.core.async.untap_STAR_.call(null,m,inst_39294);
var state_39346__$1 = (function (){var statearr_39371 = state_39346;
(statearr_39371[(19)] = inst_39298);

return statearr_39371;
})();
var statearr_39372_39444 = state_39346__$1;
(statearr_39372_39444[(2)] = inst_39299);

(statearr_39372_39444[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39347 === (32))){
var inst_39286 = (state_39346[(20)]);
var inst_39287 = (state_39346[(9)]);
var inst_39289 = (state_39346[(11)]);
var inst_39288 = (state_39346[(21)]);
var inst_39301 = (state_39346[(2)]);
var inst_39302 = (inst_39289 + (1));
var tmp39367 = inst_39286;
var tmp39368 = inst_39287;
var tmp39369 = inst_39288;
var inst_39286__$1 = tmp39367;
var inst_39287__$1 = tmp39368;
var inst_39288__$1 = tmp39369;
var inst_39289__$1 = inst_39302;
var state_39346__$1 = (function (){var statearr_39373 = state_39346;
(statearr_39373[(20)] = inst_39286__$1);

(statearr_39373[(22)] = inst_39301);

(statearr_39373[(9)] = inst_39287__$1);

(statearr_39373[(11)] = inst_39289__$1);

(statearr_39373[(21)] = inst_39288__$1);

return statearr_39373;
})();
var statearr_39374_39445 = state_39346__$1;
(statearr_39374_39445[(2)] = null);

(statearr_39374_39445[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39347 === (40))){
var inst_39314 = (state_39346[(23)]);
var inst_39318 = done.call(null,null);
var inst_39319 = cljs.core.async.untap_STAR_.call(null,m,inst_39314);
var state_39346__$1 = (function (){var statearr_39375 = state_39346;
(statearr_39375[(24)] = inst_39318);

return statearr_39375;
})();
var statearr_39376_39446 = state_39346__$1;
(statearr_39376_39446[(2)] = inst_39319);

(statearr_39376_39446[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39347 === (33))){
var inst_39305 = (state_39346[(25)]);
var inst_39307 = cljs.core.chunked_seq_QMARK_.call(null,inst_39305);
var state_39346__$1 = state_39346;
if(inst_39307){
var statearr_39377_39447 = state_39346__$1;
(statearr_39377_39447[(1)] = (36));

} else {
var statearr_39378_39448 = state_39346__$1;
(statearr_39378_39448[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39347 === (13))){
var inst_39235 = (state_39346[(26)]);
var inst_39238 = cljs.core.async.close_BANG_.call(null,inst_39235);
var state_39346__$1 = state_39346;
var statearr_39379_39449 = state_39346__$1;
(statearr_39379_39449[(2)] = inst_39238);

(statearr_39379_39449[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39347 === (22))){
var inst_39258 = (state_39346[(8)]);
var inst_39261 = cljs.core.async.close_BANG_.call(null,inst_39258);
var state_39346__$1 = state_39346;
var statearr_39380_39450 = state_39346__$1;
(statearr_39380_39450[(2)] = inst_39261);

(statearr_39380_39450[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39347 === (36))){
var inst_39305 = (state_39346[(25)]);
var inst_39309 = cljs.core.chunk_first.call(null,inst_39305);
var inst_39310 = cljs.core.chunk_rest.call(null,inst_39305);
var inst_39311 = cljs.core.count.call(null,inst_39309);
var inst_39286 = inst_39310;
var inst_39287 = inst_39309;
var inst_39288 = inst_39311;
var inst_39289 = (0);
var state_39346__$1 = (function (){var statearr_39381 = state_39346;
(statearr_39381[(20)] = inst_39286);

(statearr_39381[(9)] = inst_39287);

(statearr_39381[(11)] = inst_39289);

(statearr_39381[(21)] = inst_39288);

return statearr_39381;
})();
var statearr_39382_39451 = state_39346__$1;
(statearr_39382_39451[(2)] = null);

(statearr_39382_39451[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39347 === (41))){
var inst_39305 = (state_39346[(25)]);
var inst_39321 = (state_39346[(2)]);
var inst_39322 = cljs.core.next.call(null,inst_39305);
var inst_39286 = inst_39322;
var inst_39287 = null;
var inst_39288 = (0);
var inst_39289 = (0);
var state_39346__$1 = (function (){var statearr_39383 = state_39346;
(statearr_39383[(27)] = inst_39321);

(statearr_39383[(20)] = inst_39286);

(statearr_39383[(9)] = inst_39287);

(statearr_39383[(11)] = inst_39289);

(statearr_39383[(21)] = inst_39288);

return statearr_39383;
})();
var statearr_39384_39452 = state_39346__$1;
(statearr_39384_39452[(2)] = null);

(statearr_39384_39452[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39347 === (43))){
var state_39346__$1 = state_39346;
var statearr_39385_39453 = state_39346__$1;
(statearr_39385_39453[(2)] = null);

(statearr_39385_39453[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39347 === (29))){
var inst_39330 = (state_39346[(2)]);
var state_39346__$1 = state_39346;
var statearr_39386_39454 = state_39346__$1;
(statearr_39386_39454[(2)] = inst_39330);

(statearr_39386_39454[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39347 === (44))){
var inst_39339 = (state_39346[(2)]);
var state_39346__$1 = (function (){var statearr_39387 = state_39346;
(statearr_39387[(28)] = inst_39339);

return statearr_39387;
})();
var statearr_39388_39455 = state_39346__$1;
(statearr_39388_39455[(2)] = null);

(statearr_39388_39455[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39347 === (6))){
var inst_39278 = (state_39346[(29)]);
var inst_39277 = cljs.core.deref.call(null,cs);
var inst_39278__$1 = cljs.core.keys.call(null,inst_39277);
var inst_39279 = cljs.core.count.call(null,inst_39278__$1);
var inst_39280 = cljs.core.reset_BANG_.call(null,dctr,inst_39279);
var inst_39285 = cljs.core.seq.call(null,inst_39278__$1);
var inst_39286 = inst_39285;
var inst_39287 = null;
var inst_39288 = (0);
var inst_39289 = (0);
var state_39346__$1 = (function (){var statearr_39389 = state_39346;
(statearr_39389[(20)] = inst_39286);

(statearr_39389[(30)] = inst_39280);

(statearr_39389[(9)] = inst_39287);

(statearr_39389[(29)] = inst_39278__$1);

(statearr_39389[(11)] = inst_39289);

(statearr_39389[(21)] = inst_39288);

return statearr_39389;
})();
var statearr_39390_39456 = state_39346__$1;
(statearr_39390_39456[(2)] = null);

(statearr_39390_39456[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39347 === (28))){
var inst_39305 = (state_39346[(25)]);
var inst_39286 = (state_39346[(20)]);
var inst_39305__$1 = cljs.core.seq.call(null,inst_39286);
var state_39346__$1 = (function (){var statearr_39391 = state_39346;
(statearr_39391[(25)] = inst_39305__$1);

return statearr_39391;
})();
if(inst_39305__$1){
var statearr_39392_39457 = state_39346__$1;
(statearr_39392_39457[(1)] = (33));

} else {
var statearr_39393_39458 = state_39346__$1;
(statearr_39393_39458[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39347 === (25))){
var inst_39289 = (state_39346[(11)]);
var inst_39288 = (state_39346[(21)]);
var inst_39291 = (inst_39289 < inst_39288);
var inst_39292 = inst_39291;
var state_39346__$1 = state_39346;
if(cljs.core.truth_(inst_39292)){
var statearr_39394_39459 = state_39346__$1;
(statearr_39394_39459[(1)] = (27));

} else {
var statearr_39395_39460 = state_39346__$1;
(statearr_39395_39460[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39347 === (34))){
var state_39346__$1 = state_39346;
var statearr_39396_39461 = state_39346__$1;
(statearr_39396_39461[(2)] = null);

(statearr_39396_39461[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39347 === (17))){
var state_39346__$1 = state_39346;
var statearr_39397_39462 = state_39346__$1;
(statearr_39397_39462[(2)] = null);

(statearr_39397_39462[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39347 === (3))){
var inst_39344 = (state_39346[(2)]);
var state_39346__$1 = state_39346;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39346__$1,inst_39344);
} else {
if((state_val_39347 === (12))){
var inst_39273 = (state_39346[(2)]);
var state_39346__$1 = state_39346;
var statearr_39398_39463 = state_39346__$1;
(statearr_39398_39463[(2)] = inst_39273);

(statearr_39398_39463[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39347 === (2))){
var state_39346__$1 = state_39346;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39346__$1,(4),ch);
} else {
if((state_val_39347 === (23))){
var state_39346__$1 = state_39346;
var statearr_39399_39464 = state_39346__$1;
(statearr_39399_39464[(2)] = null);

(statearr_39399_39464[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39347 === (35))){
var inst_39328 = (state_39346[(2)]);
var state_39346__$1 = state_39346;
var statearr_39400_39465 = state_39346__$1;
(statearr_39400_39465[(2)] = inst_39328);

(statearr_39400_39465[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39347 === (19))){
var inst_39245 = (state_39346[(7)]);
var inst_39249 = cljs.core.chunk_first.call(null,inst_39245);
var inst_39250 = cljs.core.chunk_rest.call(null,inst_39245);
var inst_39251 = cljs.core.count.call(null,inst_39249);
var inst_39223 = inst_39250;
var inst_39224 = inst_39249;
var inst_39225 = inst_39251;
var inst_39226 = (0);
var state_39346__$1 = (function (){var statearr_39401 = state_39346;
(statearr_39401[(14)] = inst_39223);

(statearr_39401[(15)] = inst_39225);

(statearr_39401[(16)] = inst_39226);

(statearr_39401[(17)] = inst_39224);

return statearr_39401;
})();
var statearr_39402_39466 = state_39346__$1;
(statearr_39402_39466[(2)] = null);

(statearr_39402_39466[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39347 === (11))){
var inst_39245 = (state_39346[(7)]);
var inst_39223 = (state_39346[(14)]);
var inst_39245__$1 = cljs.core.seq.call(null,inst_39223);
var state_39346__$1 = (function (){var statearr_39403 = state_39346;
(statearr_39403[(7)] = inst_39245__$1);

return statearr_39403;
})();
if(inst_39245__$1){
var statearr_39404_39467 = state_39346__$1;
(statearr_39404_39467[(1)] = (16));

} else {
var statearr_39405_39468 = state_39346__$1;
(statearr_39405_39468[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39347 === (9))){
var inst_39275 = (state_39346[(2)]);
var state_39346__$1 = state_39346;
var statearr_39406_39469 = state_39346__$1;
(statearr_39406_39469[(2)] = inst_39275);

(statearr_39406_39469[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39347 === (5))){
var inst_39221 = cljs.core.deref.call(null,cs);
var inst_39222 = cljs.core.seq.call(null,inst_39221);
var inst_39223 = inst_39222;
var inst_39224 = null;
var inst_39225 = (0);
var inst_39226 = (0);
var state_39346__$1 = (function (){var statearr_39407 = state_39346;
(statearr_39407[(14)] = inst_39223);

(statearr_39407[(15)] = inst_39225);

(statearr_39407[(16)] = inst_39226);

(statearr_39407[(17)] = inst_39224);

return statearr_39407;
})();
var statearr_39408_39470 = state_39346__$1;
(statearr_39408_39470[(2)] = null);

(statearr_39408_39470[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39347 === (14))){
var state_39346__$1 = state_39346;
var statearr_39409_39471 = state_39346__$1;
(statearr_39409_39471[(2)] = null);

(statearr_39409_39471[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39347 === (45))){
var inst_39336 = (state_39346[(2)]);
var state_39346__$1 = state_39346;
var statearr_39410_39472 = state_39346__$1;
(statearr_39410_39472[(2)] = inst_39336);

(statearr_39410_39472[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39347 === (26))){
var inst_39278 = (state_39346[(29)]);
var inst_39332 = (state_39346[(2)]);
var inst_39333 = cljs.core.seq.call(null,inst_39278);
var state_39346__$1 = (function (){var statearr_39411 = state_39346;
(statearr_39411[(31)] = inst_39332);

return statearr_39411;
})();
if(inst_39333){
var statearr_39412_39473 = state_39346__$1;
(statearr_39412_39473[(1)] = (42));

} else {
var statearr_39413_39474 = state_39346__$1;
(statearr_39413_39474[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39347 === (16))){
var inst_39245 = (state_39346[(7)]);
var inst_39247 = cljs.core.chunked_seq_QMARK_.call(null,inst_39245);
var state_39346__$1 = state_39346;
if(inst_39247){
var statearr_39414_39475 = state_39346__$1;
(statearr_39414_39475[(1)] = (19));

} else {
var statearr_39415_39476 = state_39346__$1;
(statearr_39415_39476[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39347 === (38))){
var inst_39325 = (state_39346[(2)]);
var state_39346__$1 = state_39346;
var statearr_39416_39477 = state_39346__$1;
(statearr_39416_39477[(2)] = inst_39325);

(statearr_39416_39477[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39347 === (30))){
var state_39346__$1 = state_39346;
var statearr_39417_39478 = state_39346__$1;
(statearr_39417_39478[(2)] = null);

(statearr_39417_39478[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39347 === (10))){
var inst_39226 = (state_39346[(16)]);
var inst_39224 = (state_39346[(17)]);
var inst_39234 = cljs.core._nth.call(null,inst_39224,inst_39226);
var inst_39235 = cljs.core.nth.call(null,inst_39234,(0),null);
var inst_39236 = cljs.core.nth.call(null,inst_39234,(1),null);
var state_39346__$1 = (function (){var statearr_39418 = state_39346;
(statearr_39418[(26)] = inst_39235);

return statearr_39418;
})();
if(cljs.core.truth_(inst_39236)){
var statearr_39419_39479 = state_39346__$1;
(statearr_39419_39479[(1)] = (13));

} else {
var statearr_39420_39480 = state_39346__$1;
(statearr_39420_39480[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39347 === (18))){
var inst_39271 = (state_39346[(2)]);
var state_39346__$1 = state_39346;
var statearr_39421_39481 = state_39346__$1;
(statearr_39421_39481[(2)] = inst_39271);

(statearr_39421_39481[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39347 === (42))){
var state_39346__$1 = state_39346;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39346__$1,(45),dchan);
} else {
if((state_val_39347 === (37))){
var inst_39305 = (state_39346[(25)]);
var inst_39314 = (state_39346[(23)]);
var inst_39214 = (state_39346[(12)]);
var inst_39314__$1 = cljs.core.first.call(null,inst_39305);
var inst_39315 = cljs.core.async.put_BANG_.call(null,inst_39314__$1,inst_39214,done);
var state_39346__$1 = (function (){var statearr_39422 = state_39346;
(statearr_39422[(23)] = inst_39314__$1);

return statearr_39422;
})();
if(cljs.core.truth_(inst_39315)){
var statearr_39423_39482 = state_39346__$1;
(statearr_39423_39482[(1)] = (39));

} else {
var statearr_39424_39483 = state_39346__$1;
(statearr_39424_39483[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39347 === (8))){
var inst_39225 = (state_39346[(15)]);
var inst_39226 = (state_39346[(16)]);
var inst_39228 = (inst_39226 < inst_39225);
var inst_39229 = inst_39228;
var state_39346__$1 = state_39346;
if(cljs.core.truth_(inst_39229)){
var statearr_39425_39484 = state_39346__$1;
(statearr_39425_39484[(1)] = (10));

} else {
var statearr_39426_39485 = state_39346__$1;
(statearr_39426_39485[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__38612__auto___39431,cs,m,dchan,dctr,done))
;
return ((function (switch__38522__auto__,c__38612__auto___39431,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__38523__auto__ = null;
var cljs$core$async$mult_$_state_machine__38523__auto____0 = (function (){
var statearr_39427 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39427[(0)] = cljs$core$async$mult_$_state_machine__38523__auto__);

(statearr_39427[(1)] = (1));

return statearr_39427;
});
var cljs$core$async$mult_$_state_machine__38523__auto____1 = (function (state_39346){
while(true){
var ret_value__38524__auto__ = (function (){try{while(true){
var result__38525__auto__ = switch__38522__auto__.call(null,state_39346);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38525__auto__;
}
break;
}
}catch (e39428){if((e39428 instanceof Object)){
var ex__38526__auto__ = e39428;
var statearr_39429_39486 = state_39346;
(statearr_39429_39486[(5)] = ex__38526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39346);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39428;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39487 = state_39346;
state_39346 = G__39487;
continue;
} else {
return ret_value__38524__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__38523__auto__ = function(state_39346){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__38523__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__38523__auto____1.call(this,state_39346);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__38523__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__38523__auto____0;
cljs$core$async$mult_$_state_machine__38523__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__38523__auto____1;
return cljs$core$async$mult_$_state_machine__38523__auto__;
})()
;})(switch__38522__auto__,c__38612__auto___39431,cs,m,dchan,dctr,done))
})();
var state__38614__auto__ = (function (){var statearr_39430 = f__38613__auto__.call(null);
(statearr_39430[(6)] = c__38612__auto___39431);

return statearr_39430;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38614__auto__);
});})(c__38612__auto___39431,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__39489 = arguments.length;
switch (G__39489) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,state_map);
} else {
var m__4212__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,mode);
} else {
var m__4212__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___39501 = arguments.length;
var i__4500__auto___39502 = (0);
while(true){
if((i__4500__auto___39502 < len__4499__auto___39501)){
args__4502__auto__.push((arguments[i__4500__auto___39502]));

var G__39503 = (i__4500__auto___39502 + (1));
i__4500__auto___39502 = G__39503;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__39495){
var map__39496 = p__39495;
var map__39496__$1 = ((((!((map__39496 == null)))?(((((map__39496.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39496.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39496):map__39496);
var opts = map__39496__$1;
var statearr_39498_39504 = state;
(statearr_39498_39504[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__39496,map__39496__$1,opts){
return (function (val){
var statearr_39499_39505 = state;
(statearr_39499_39505[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__39496,map__39496__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_39500_39506 = state;
(statearr_39500_39506[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq39491){
var G__39492 = cljs.core.first.call(null,seq39491);
var seq39491__$1 = cljs.core.next.call(null,seq39491);
var G__39493 = cljs.core.first.call(null,seq39491__$1);
var seq39491__$2 = cljs.core.next.call(null,seq39491__$1);
var G__39494 = cljs.core.first.call(null,seq39491__$2);
var seq39491__$3 = cljs.core.next.call(null,seq39491__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39492,G__39493,G__39494,seq39491__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos)))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async39507 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39507 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta39508){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta39508 = meta39508;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39507.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_39509,meta39508__$1){
var self__ = this;
var _39509__$1 = this;
return (new cljs.core.async.t_cljs$core$async39507(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta39508__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39507.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_39509){
var self__ = this;
var _39509__$1 = this;
return self__.meta39508;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39507.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39507.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39507.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39507.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39507.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39507.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39507.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39507.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39507.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta39508","meta39508",-1603997797,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39507.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39507.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39507";

cljs.core.async.t_cljs$core$async39507.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async39507");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39507.
 */
cljs.core.async.__GT_t_cljs$core$async39507 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async39507(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta39508){
return (new cljs.core.async.t_cljs$core$async39507(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta39508));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async39507(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__38612__auto___39671 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38612__auto___39671,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__38613__auto__ = (function (){var switch__38522__auto__ = ((function (c__38612__auto___39671,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_39611){
var state_val_39612 = (state_39611[(1)]);
if((state_val_39612 === (7))){
var inst_39526 = (state_39611[(2)]);
var state_39611__$1 = state_39611;
var statearr_39613_39672 = state_39611__$1;
(statearr_39613_39672[(2)] = inst_39526);

(statearr_39613_39672[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39612 === (20))){
var inst_39538 = (state_39611[(7)]);
var state_39611__$1 = state_39611;
var statearr_39614_39673 = state_39611__$1;
(statearr_39614_39673[(2)] = inst_39538);

(statearr_39614_39673[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39612 === (27))){
var state_39611__$1 = state_39611;
var statearr_39615_39674 = state_39611__$1;
(statearr_39615_39674[(2)] = null);

(statearr_39615_39674[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39612 === (1))){
var inst_39513 = (state_39611[(8)]);
var inst_39513__$1 = calc_state.call(null);
var inst_39515 = (inst_39513__$1 == null);
var inst_39516 = cljs.core.not.call(null,inst_39515);
var state_39611__$1 = (function (){var statearr_39616 = state_39611;
(statearr_39616[(8)] = inst_39513__$1);

return statearr_39616;
})();
if(inst_39516){
var statearr_39617_39675 = state_39611__$1;
(statearr_39617_39675[(1)] = (2));

} else {
var statearr_39618_39676 = state_39611__$1;
(statearr_39618_39676[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39612 === (24))){
var inst_39571 = (state_39611[(9)]);
var inst_39585 = (state_39611[(10)]);
var inst_39562 = (state_39611[(11)]);
var inst_39585__$1 = inst_39562.call(null,inst_39571);
var state_39611__$1 = (function (){var statearr_39619 = state_39611;
(statearr_39619[(10)] = inst_39585__$1);

return statearr_39619;
})();
if(cljs.core.truth_(inst_39585__$1)){
var statearr_39620_39677 = state_39611__$1;
(statearr_39620_39677[(1)] = (29));

} else {
var statearr_39621_39678 = state_39611__$1;
(statearr_39621_39678[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39612 === (4))){
var inst_39529 = (state_39611[(2)]);
var state_39611__$1 = state_39611;
if(cljs.core.truth_(inst_39529)){
var statearr_39622_39679 = state_39611__$1;
(statearr_39622_39679[(1)] = (8));

} else {
var statearr_39623_39680 = state_39611__$1;
(statearr_39623_39680[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39612 === (15))){
var inst_39556 = (state_39611[(2)]);
var state_39611__$1 = state_39611;
if(cljs.core.truth_(inst_39556)){
var statearr_39624_39681 = state_39611__$1;
(statearr_39624_39681[(1)] = (19));

} else {
var statearr_39625_39682 = state_39611__$1;
(statearr_39625_39682[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39612 === (21))){
var inst_39561 = (state_39611[(12)]);
var inst_39561__$1 = (state_39611[(2)]);
var inst_39562 = cljs.core.get.call(null,inst_39561__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_39563 = cljs.core.get.call(null,inst_39561__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_39564 = cljs.core.get.call(null,inst_39561__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_39611__$1 = (function (){var statearr_39626 = state_39611;
(statearr_39626[(13)] = inst_39563);

(statearr_39626[(12)] = inst_39561__$1);

(statearr_39626[(11)] = inst_39562);

return statearr_39626;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_39611__$1,(22),inst_39564);
} else {
if((state_val_39612 === (31))){
var inst_39593 = (state_39611[(2)]);
var state_39611__$1 = state_39611;
if(cljs.core.truth_(inst_39593)){
var statearr_39627_39683 = state_39611__$1;
(statearr_39627_39683[(1)] = (32));

} else {
var statearr_39628_39684 = state_39611__$1;
(statearr_39628_39684[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39612 === (32))){
var inst_39570 = (state_39611[(14)]);
var state_39611__$1 = state_39611;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39611__$1,(35),out,inst_39570);
} else {
if((state_val_39612 === (33))){
var inst_39561 = (state_39611[(12)]);
var inst_39538 = inst_39561;
var state_39611__$1 = (function (){var statearr_39629 = state_39611;
(statearr_39629[(7)] = inst_39538);

return statearr_39629;
})();
var statearr_39630_39685 = state_39611__$1;
(statearr_39630_39685[(2)] = null);

(statearr_39630_39685[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39612 === (13))){
var inst_39538 = (state_39611[(7)]);
var inst_39545 = inst_39538.cljs$lang$protocol_mask$partition0$;
var inst_39546 = (inst_39545 & (64));
var inst_39547 = inst_39538.cljs$core$ISeq$;
var inst_39548 = (cljs.core.PROTOCOL_SENTINEL === inst_39547);
var inst_39549 = ((inst_39546) || (inst_39548));
var state_39611__$1 = state_39611;
if(cljs.core.truth_(inst_39549)){
var statearr_39631_39686 = state_39611__$1;
(statearr_39631_39686[(1)] = (16));

} else {
var statearr_39632_39687 = state_39611__$1;
(statearr_39632_39687[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39612 === (22))){
var inst_39571 = (state_39611[(9)]);
var inst_39570 = (state_39611[(14)]);
var inst_39569 = (state_39611[(2)]);
var inst_39570__$1 = cljs.core.nth.call(null,inst_39569,(0),null);
var inst_39571__$1 = cljs.core.nth.call(null,inst_39569,(1),null);
var inst_39572 = (inst_39570__$1 == null);
var inst_39573 = cljs.core._EQ_.call(null,inst_39571__$1,change);
var inst_39574 = ((inst_39572) || (inst_39573));
var state_39611__$1 = (function (){var statearr_39633 = state_39611;
(statearr_39633[(9)] = inst_39571__$1);

(statearr_39633[(14)] = inst_39570__$1);

return statearr_39633;
})();
if(cljs.core.truth_(inst_39574)){
var statearr_39634_39688 = state_39611__$1;
(statearr_39634_39688[(1)] = (23));

} else {
var statearr_39635_39689 = state_39611__$1;
(statearr_39635_39689[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39612 === (36))){
var inst_39561 = (state_39611[(12)]);
var inst_39538 = inst_39561;
var state_39611__$1 = (function (){var statearr_39636 = state_39611;
(statearr_39636[(7)] = inst_39538);

return statearr_39636;
})();
var statearr_39637_39690 = state_39611__$1;
(statearr_39637_39690[(2)] = null);

(statearr_39637_39690[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39612 === (29))){
var inst_39585 = (state_39611[(10)]);
var state_39611__$1 = state_39611;
var statearr_39638_39691 = state_39611__$1;
(statearr_39638_39691[(2)] = inst_39585);

(statearr_39638_39691[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39612 === (6))){
var state_39611__$1 = state_39611;
var statearr_39639_39692 = state_39611__$1;
(statearr_39639_39692[(2)] = false);

(statearr_39639_39692[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39612 === (28))){
var inst_39581 = (state_39611[(2)]);
var inst_39582 = calc_state.call(null);
var inst_39538 = inst_39582;
var state_39611__$1 = (function (){var statearr_39640 = state_39611;
(statearr_39640[(15)] = inst_39581);

(statearr_39640[(7)] = inst_39538);

return statearr_39640;
})();
var statearr_39641_39693 = state_39611__$1;
(statearr_39641_39693[(2)] = null);

(statearr_39641_39693[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39612 === (25))){
var inst_39607 = (state_39611[(2)]);
var state_39611__$1 = state_39611;
var statearr_39642_39694 = state_39611__$1;
(statearr_39642_39694[(2)] = inst_39607);

(statearr_39642_39694[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39612 === (34))){
var inst_39605 = (state_39611[(2)]);
var state_39611__$1 = state_39611;
var statearr_39643_39695 = state_39611__$1;
(statearr_39643_39695[(2)] = inst_39605);

(statearr_39643_39695[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39612 === (17))){
var state_39611__$1 = state_39611;
var statearr_39644_39696 = state_39611__$1;
(statearr_39644_39696[(2)] = false);

(statearr_39644_39696[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39612 === (3))){
var state_39611__$1 = state_39611;
var statearr_39645_39697 = state_39611__$1;
(statearr_39645_39697[(2)] = false);

(statearr_39645_39697[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39612 === (12))){
var inst_39609 = (state_39611[(2)]);
var state_39611__$1 = state_39611;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39611__$1,inst_39609);
} else {
if((state_val_39612 === (2))){
var inst_39513 = (state_39611[(8)]);
var inst_39518 = inst_39513.cljs$lang$protocol_mask$partition0$;
var inst_39519 = (inst_39518 & (64));
var inst_39520 = inst_39513.cljs$core$ISeq$;
var inst_39521 = (cljs.core.PROTOCOL_SENTINEL === inst_39520);
var inst_39522 = ((inst_39519) || (inst_39521));
var state_39611__$1 = state_39611;
if(cljs.core.truth_(inst_39522)){
var statearr_39646_39698 = state_39611__$1;
(statearr_39646_39698[(1)] = (5));

} else {
var statearr_39647_39699 = state_39611__$1;
(statearr_39647_39699[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39612 === (23))){
var inst_39570 = (state_39611[(14)]);
var inst_39576 = (inst_39570 == null);
var state_39611__$1 = state_39611;
if(cljs.core.truth_(inst_39576)){
var statearr_39648_39700 = state_39611__$1;
(statearr_39648_39700[(1)] = (26));

} else {
var statearr_39649_39701 = state_39611__$1;
(statearr_39649_39701[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39612 === (35))){
var inst_39596 = (state_39611[(2)]);
var state_39611__$1 = state_39611;
if(cljs.core.truth_(inst_39596)){
var statearr_39650_39702 = state_39611__$1;
(statearr_39650_39702[(1)] = (36));

} else {
var statearr_39651_39703 = state_39611__$1;
(statearr_39651_39703[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39612 === (19))){
var inst_39538 = (state_39611[(7)]);
var inst_39558 = cljs.core.apply.call(null,cljs.core.hash_map,inst_39538);
var state_39611__$1 = state_39611;
var statearr_39652_39704 = state_39611__$1;
(statearr_39652_39704[(2)] = inst_39558);

(statearr_39652_39704[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39612 === (11))){
var inst_39538 = (state_39611[(7)]);
var inst_39542 = (inst_39538 == null);
var inst_39543 = cljs.core.not.call(null,inst_39542);
var state_39611__$1 = state_39611;
if(inst_39543){
var statearr_39653_39705 = state_39611__$1;
(statearr_39653_39705[(1)] = (13));

} else {
var statearr_39654_39706 = state_39611__$1;
(statearr_39654_39706[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39612 === (9))){
var inst_39513 = (state_39611[(8)]);
var state_39611__$1 = state_39611;
var statearr_39655_39707 = state_39611__$1;
(statearr_39655_39707[(2)] = inst_39513);

(statearr_39655_39707[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39612 === (5))){
var state_39611__$1 = state_39611;
var statearr_39656_39708 = state_39611__$1;
(statearr_39656_39708[(2)] = true);

(statearr_39656_39708[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39612 === (14))){
var state_39611__$1 = state_39611;
var statearr_39657_39709 = state_39611__$1;
(statearr_39657_39709[(2)] = false);

(statearr_39657_39709[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39612 === (26))){
var inst_39571 = (state_39611[(9)]);
var inst_39578 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_39571);
var state_39611__$1 = state_39611;
var statearr_39658_39710 = state_39611__$1;
(statearr_39658_39710[(2)] = inst_39578);

(statearr_39658_39710[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39612 === (16))){
var state_39611__$1 = state_39611;
var statearr_39659_39711 = state_39611__$1;
(statearr_39659_39711[(2)] = true);

(statearr_39659_39711[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39612 === (38))){
var inst_39601 = (state_39611[(2)]);
var state_39611__$1 = state_39611;
var statearr_39660_39712 = state_39611__$1;
(statearr_39660_39712[(2)] = inst_39601);

(statearr_39660_39712[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39612 === (30))){
var inst_39571 = (state_39611[(9)]);
var inst_39563 = (state_39611[(13)]);
var inst_39562 = (state_39611[(11)]);
var inst_39588 = cljs.core.empty_QMARK_.call(null,inst_39562);
var inst_39589 = inst_39563.call(null,inst_39571);
var inst_39590 = cljs.core.not.call(null,inst_39589);
var inst_39591 = ((inst_39588) && (inst_39590));
var state_39611__$1 = state_39611;
var statearr_39661_39713 = state_39611__$1;
(statearr_39661_39713[(2)] = inst_39591);

(statearr_39661_39713[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39612 === (10))){
var inst_39513 = (state_39611[(8)]);
var inst_39534 = (state_39611[(2)]);
var inst_39535 = cljs.core.get.call(null,inst_39534,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_39536 = cljs.core.get.call(null,inst_39534,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_39537 = cljs.core.get.call(null,inst_39534,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_39538 = inst_39513;
var state_39611__$1 = (function (){var statearr_39662 = state_39611;
(statearr_39662[(16)] = inst_39537);

(statearr_39662[(17)] = inst_39535);

(statearr_39662[(18)] = inst_39536);

(statearr_39662[(7)] = inst_39538);

return statearr_39662;
})();
var statearr_39663_39714 = state_39611__$1;
(statearr_39663_39714[(2)] = null);

(statearr_39663_39714[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39612 === (18))){
var inst_39553 = (state_39611[(2)]);
var state_39611__$1 = state_39611;
var statearr_39664_39715 = state_39611__$1;
(statearr_39664_39715[(2)] = inst_39553);

(statearr_39664_39715[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39612 === (37))){
var state_39611__$1 = state_39611;
var statearr_39665_39716 = state_39611__$1;
(statearr_39665_39716[(2)] = null);

(statearr_39665_39716[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39612 === (8))){
var inst_39513 = (state_39611[(8)]);
var inst_39531 = cljs.core.apply.call(null,cljs.core.hash_map,inst_39513);
var state_39611__$1 = state_39611;
var statearr_39666_39717 = state_39611__$1;
(statearr_39666_39717[(2)] = inst_39531);

(statearr_39666_39717[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__38612__auto___39671,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__38522__auto__,c__38612__auto___39671,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__38523__auto__ = null;
var cljs$core$async$mix_$_state_machine__38523__auto____0 = (function (){
var statearr_39667 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39667[(0)] = cljs$core$async$mix_$_state_machine__38523__auto__);

(statearr_39667[(1)] = (1));

return statearr_39667;
});
var cljs$core$async$mix_$_state_machine__38523__auto____1 = (function (state_39611){
while(true){
var ret_value__38524__auto__ = (function (){try{while(true){
var result__38525__auto__ = switch__38522__auto__.call(null,state_39611);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38525__auto__;
}
break;
}
}catch (e39668){if((e39668 instanceof Object)){
var ex__38526__auto__ = e39668;
var statearr_39669_39718 = state_39611;
(statearr_39669_39718[(5)] = ex__38526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39611);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39668;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39719 = state_39611;
state_39611 = G__39719;
continue;
} else {
return ret_value__38524__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__38523__auto__ = function(state_39611){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__38523__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__38523__auto____1.call(this,state_39611);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__38523__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__38523__auto____0;
cljs$core$async$mix_$_state_machine__38523__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__38523__auto____1;
return cljs$core$async$mix_$_state_machine__38523__auto__;
})()
;})(switch__38522__auto__,c__38612__auto___39671,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__38614__auto__ = (function (){var statearr_39670 = f__38613__auto__.call(null);
(statearr_39670[(6)] = c__38612__auto___39671);

return statearr_39670;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38614__auto__);
});})(c__38612__auto___39671,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__39721 = arguments.length;
switch (G__39721) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__39725 = arguments.length;
switch (G__39725) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3922__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3922__auto__,mults){
return (function (p1__39723_SHARP_){
if(cljs.core.truth_(p1__39723_SHARP_.call(null,topic))){
return p1__39723_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__39723_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3922__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async39726 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39726 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta39727){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta39727 = meta39727;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39726.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_39728,meta39727__$1){
var self__ = this;
var _39728__$1 = this;
return (new cljs.core.async.t_cljs$core$async39726(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta39727__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39726.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_39728){
var self__ = this;
var _39728__$1 = this;
return self__.meta39727;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39726.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39726.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39726.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39726.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39726.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39726.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39726.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39726.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta39727","meta39727",-521721239,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39726.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39726.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39726";

cljs.core.async.t_cljs$core$async39726.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async39726");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39726.
 */
cljs.core.async.__GT_t_cljs$core$async39726 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async39726(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta39727){
return (new cljs.core.async.t_cljs$core$async39726(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta39727));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async39726(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__38612__auto___39846 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38612__auto___39846,mults,ensure_mult,p){
return (function (){
var f__38613__auto__ = (function (){var switch__38522__auto__ = ((function (c__38612__auto___39846,mults,ensure_mult,p){
return (function (state_39800){
var state_val_39801 = (state_39800[(1)]);
if((state_val_39801 === (7))){
var inst_39796 = (state_39800[(2)]);
var state_39800__$1 = state_39800;
var statearr_39802_39847 = state_39800__$1;
(statearr_39802_39847[(2)] = inst_39796);

(statearr_39802_39847[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39801 === (20))){
var state_39800__$1 = state_39800;
var statearr_39803_39848 = state_39800__$1;
(statearr_39803_39848[(2)] = null);

(statearr_39803_39848[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39801 === (1))){
var state_39800__$1 = state_39800;
var statearr_39804_39849 = state_39800__$1;
(statearr_39804_39849[(2)] = null);

(statearr_39804_39849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39801 === (24))){
var inst_39779 = (state_39800[(7)]);
var inst_39788 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_39779);
var state_39800__$1 = state_39800;
var statearr_39805_39850 = state_39800__$1;
(statearr_39805_39850[(2)] = inst_39788);

(statearr_39805_39850[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39801 === (4))){
var inst_39731 = (state_39800[(8)]);
var inst_39731__$1 = (state_39800[(2)]);
var inst_39732 = (inst_39731__$1 == null);
var state_39800__$1 = (function (){var statearr_39806 = state_39800;
(statearr_39806[(8)] = inst_39731__$1);

return statearr_39806;
})();
if(cljs.core.truth_(inst_39732)){
var statearr_39807_39851 = state_39800__$1;
(statearr_39807_39851[(1)] = (5));

} else {
var statearr_39808_39852 = state_39800__$1;
(statearr_39808_39852[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39801 === (15))){
var inst_39773 = (state_39800[(2)]);
var state_39800__$1 = state_39800;
var statearr_39809_39853 = state_39800__$1;
(statearr_39809_39853[(2)] = inst_39773);

(statearr_39809_39853[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39801 === (21))){
var inst_39793 = (state_39800[(2)]);
var state_39800__$1 = (function (){var statearr_39810 = state_39800;
(statearr_39810[(9)] = inst_39793);

return statearr_39810;
})();
var statearr_39811_39854 = state_39800__$1;
(statearr_39811_39854[(2)] = null);

(statearr_39811_39854[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39801 === (13))){
var inst_39755 = (state_39800[(10)]);
var inst_39757 = cljs.core.chunked_seq_QMARK_.call(null,inst_39755);
var state_39800__$1 = state_39800;
if(inst_39757){
var statearr_39812_39855 = state_39800__$1;
(statearr_39812_39855[(1)] = (16));

} else {
var statearr_39813_39856 = state_39800__$1;
(statearr_39813_39856[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39801 === (22))){
var inst_39785 = (state_39800[(2)]);
var state_39800__$1 = state_39800;
if(cljs.core.truth_(inst_39785)){
var statearr_39814_39857 = state_39800__$1;
(statearr_39814_39857[(1)] = (23));

} else {
var statearr_39815_39858 = state_39800__$1;
(statearr_39815_39858[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39801 === (6))){
var inst_39781 = (state_39800[(11)]);
var inst_39731 = (state_39800[(8)]);
var inst_39779 = (state_39800[(7)]);
var inst_39779__$1 = topic_fn.call(null,inst_39731);
var inst_39780 = cljs.core.deref.call(null,mults);
var inst_39781__$1 = cljs.core.get.call(null,inst_39780,inst_39779__$1);
var state_39800__$1 = (function (){var statearr_39816 = state_39800;
(statearr_39816[(11)] = inst_39781__$1);

(statearr_39816[(7)] = inst_39779__$1);

return statearr_39816;
})();
if(cljs.core.truth_(inst_39781__$1)){
var statearr_39817_39859 = state_39800__$1;
(statearr_39817_39859[(1)] = (19));

} else {
var statearr_39818_39860 = state_39800__$1;
(statearr_39818_39860[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39801 === (25))){
var inst_39790 = (state_39800[(2)]);
var state_39800__$1 = state_39800;
var statearr_39819_39861 = state_39800__$1;
(statearr_39819_39861[(2)] = inst_39790);

(statearr_39819_39861[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39801 === (17))){
var inst_39755 = (state_39800[(10)]);
var inst_39764 = cljs.core.first.call(null,inst_39755);
var inst_39765 = cljs.core.async.muxch_STAR_.call(null,inst_39764);
var inst_39766 = cljs.core.async.close_BANG_.call(null,inst_39765);
var inst_39767 = cljs.core.next.call(null,inst_39755);
var inst_39741 = inst_39767;
var inst_39742 = null;
var inst_39743 = (0);
var inst_39744 = (0);
var state_39800__$1 = (function (){var statearr_39820 = state_39800;
(statearr_39820[(12)] = inst_39741);

(statearr_39820[(13)] = inst_39743);

(statearr_39820[(14)] = inst_39744);

(statearr_39820[(15)] = inst_39766);

(statearr_39820[(16)] = inst_39742);

return statearr_39820;
})();
var statearr_39821_39862 = state_39800__$1;
(statearr_39821_39862[(2)] = null);

(statearr_39821_39862[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39801 === (3))){
var inst_39798 = (state_39800[(2)]);
var state_39800__$1 = state_39800;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39800__$1,inst_39798);
} else {
if((state_val_39801 === (12))){
var inst_39775 = (state_39800[(2)]);
var state_39800__$1 = state_39800;
var statearr_39822_39863 = state_39800__$1;
(statearr_39822_39863[(2)] = inst_39775);

(statearr_39822_39863[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39801 === (2))){
var state_39800__$1 = state_39800;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39800__$1,(4),ch);
} else {
if((state_val_39801 === (23))){
var state_39800__$1 = state_39800;
var statearr_39823_39864 = state_39800__$1;
(statearr_39823_39864[(2)] = null);

(statearr_39823_39864[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39801 === (19))){
var inst_39781 = (state_39800[(11)]);
var inst_39731 = (state_39800[(8)]);
var inst_39783 = cljs.core.async.muxch_STAR_.call(null,inst_39781);
var state_39800__$1 = state_39800;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39800__$1,(22),inst_39783,inst_39731);
} else {
if((state_val_39801 === (11))){
var inst_39741 = (state_39800[(12)]);
var inst_39755 = (state_39800[(10)]);
var inst_39755__$1 = cljs.core.seq.call(null,inst_39741);
var state_39800__$1 = (function (){var statearr_39824 = state_39800;
(statearr_39824[(10)] = inst_39755__$1);

return statearr_39824;
})();
if(inst_39755__$1){
var statearr_39825_39865 = state_39800__$1;
(statearr_39825_39865[(1)] = (13));

} else {
var statearr_39826_39866 = state_39800__$1;
(statearr_39826_39866[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39801 === (9))){
var inst_39777 = (state_39800[(2)]);
var state_39800__$1 = state_39800;
var statearr_39827_39867 = state_39800__$1;
(statearr_39827_39867[(2)] = inst_39777);

(statearr_39827_39867[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39801 === (5))){
var inst_39738 = cljs.core.deref.call(null,mults);
var inst_39739 = cljs.core.vals.call(null,inst_39738);
var inst_39740 = cljs.core.seq.call(null,inst_39739);
var inst_39741 = inst_39740;
var inst_39742 = null;
var inst_39743 = (0);
var inst_39744 = (0);
var state_39800__$1 = (function (){var statearr_39828 = state_39800;
(statearr_39828[(12)] = inst_39741);

(statearr_39828[(13)] = inst_39743);

(statearr_39828[(14)] = inst_39744);

(statearr_39828[(16)] = inst_39742);

return statearr_39828;
})();
var statearr_39829_39868 = state_39800__$1;
(statearr_39829_39868[(2)] = null);

(statearr_39829_39868[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39801 === (14))){
var state_39800__$1 = state_39800;
var statearr_39833_39869 = state_39800__$1;
(statearr_39833_39869[(2)] = null);

(statearr_39833_39869[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39801 === (16))){
var inst_39755 = (state_39800[(10)]);
var inst_39759 = cljs.core.chunk_first.call(null,inst_39755);
var inst_39760 = cljs.core.chunk_rest.call(null,inst_39755);
var inst_39761 = cljs.core.count.call(null,inst_39759);
var inst_39741 = inst_39760;
var inst_39742 = inst_39759;
var inst_39743 = inst_39761;
var inst_39744 = (0);
var state_39800__$1 = (function (){var statearr_39834 = state_39800;
(statearr_39834[(12)] = inst_39741);

(statearr_39834[(13)] = inst_39743);

(statearr_39834[(14)] = inst_39744);

(statearr_39834[(16)] = inst_39742);

return statearr_39834;
})();
var statearr_39835_39870 = state_39800__$1;
(statearr_39835_39870[(2)] = null);

(statearr_39835_39870[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39801 === (10))){
var inst_39741 = (state_39800[(12)]);
var inst_39743 = (state_39800[(13)]);
var inst_39744 = (state_39800[(14)]);
var inst_39742 = (state_39800[(16)]);
var inst_39749 = cljs.core._nth.call(null,inst_39742,inst_39744);
var inst_39750 = cljs.core.async.muxch_STAR_.call(null,inst_39749);
var inst_39751 = cljs.core.async.close_BANG_.call(null,inst_39750);
var inst_39752 = (inst_39744 + (1));
var tmp39830 = inst_39741;
var tmp39831 = inst_39743;
var tmp39832 = inst_39742;
var inst_39741__$1 = tmp39830;
var inst_39742__$1 = tmp39832;
var inst_39743__$1 = tmp39831;
var inst_39744__$1 = inst_39752;
var state_39800__$1 = (function (){var statearr_39836 = state_39800;
(statearr_39836[(12)] = inst_39741__$1);

(statearr_39836[(13)] = inst_39743__$1);

(statearr_39836[(14)] = inst_39744__$1);

(statearr_39836[(17)] = inst_39751);

(statearr_39836[(16)] = inst_39742__$1);

return statearr_39836;
})();
var statearr_39837_39871 = state_39800__$1;
(statearr_39837_39871[(2)] = null);

(statearr_39837_39871[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39801 === (18))){
var inst_39770 = (state_39800[(2)]);
var state_39800__$1 = state_39800;
var statearr_39838_39872 = state_39800__$1;
(statearr_39838_39872[(2)] = inst_39770);

(statearr_39838_39872[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39801 === (8))){
var inst_39743 = (state_39800[(13)]);
var inst_39744 = (state_39800[(14)]);
var inst_39746 = (inst_39744 < inst_39743);
var inst_39747 = inst_39746;
var state_39800__$1 = state_39800;
if(cljs.core.truth_(inst_39747)){
var statearr_39839_39873 = state_39800__$1;
(statearr_39839_39873[(1)] = (10));

} else {
var statearr_39840_39874 = state_39800__$1;
(statearr_39840_39874[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__38612__auto___39846,mults,ensure_mult,p))
;
return ((function (switch__38522__auto__,c__38612__auto___39846,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__38523__auto__ = null;
var cljs$core$async$state_machine__38523__auto____0 = (function (){
var statearr_39841 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39841[(0)] = cljs$core$async$state_machine__38523__auto__);

(statearr_39841[(1)] = (1));

return statearr_39841;
});
var cljs$core$async$state_machine__38523__auto____1 = (function (state_39800){
while(true){
var ret_value__38524__auto__ = (function (){try{while(true){
var result__38525__auto__ = switch__38522__auto__.call(null,state_39800);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38525__auto__;
}
break;
}
}catch (e39842){if((e39842 instanceof Object)){
var ex__38526__auto__ = e39842;
var statearr_39843_39875 = state_39800;
(statearr_39843_39875[(5)] = ex__38526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39800);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39842;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39876 = state_39800;
state_39800 = G__39876;
continue;
} else {
return ret_value__38524__auto__;
}
break;
}
});
cljs$core$async$state_machine__38523__auto__ = function(state_39800){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38523__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38523__auto____1.call(this,state_39800);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__38523__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38523__auto____0;
cljs$core$async$state_machine__38523__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38523__auto____1;
return cljs$core$async$state_machine__38523__auto__;
})()
;})(switch__38522__auto__,c__38612__auto___39846,mults,ensure_mult,p))
})();
var state__38614__auto__ = (function (){var statearr_39844 = f__38613__auto__.call(null);
(statearr_39844[(6)] = c__38612__auto___39846);

return statearr_39844;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38614__auto__);
});})(c__38612__auto___39846,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__39878 = arguments.length;
switch (G__39878) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__39881 = arguments.length;
switch (G__39881) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__39884 = arguments.length;
switch (G__39884) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__38612__auto___39951 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38612__auto___39951,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__38613__auto__ = (function (){var switch__38522__auto__ = ((function (c__38612__auto___39951,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_39923){
var state_val_39924 = (state_39923[(1)]);
if((state_val_39924 === (7))){
var state_39923__$1 = state_39923;
var statearr_39925_39952 = state_39923__$1;
(statearr_39925_39952[(2)] = null);

(statearr_39925_39952[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39924 === (1))){
var state_39923__$1 = state_39923;
var statearr_39926_39953 = state_39923__$1;
(statearr_39926_39953[(2)] = null);

(statearr_39926_39953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39924 === (4))){
var inst_39887 = (state_39923[(7)]);
var inst_39889 = (inst_39887 < cnt);
var state_39923__$1 = state_39923;
if(cljs.core.truth_(inst_39889)){
var statearr_39927_39954 = state_39923__$1;
(statearr_39927_39954[(1)] = (6));

} else {
var statearr_39928_39955 = state_39923__$1;
(statearr_39928_39955[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39924 === (15))){
var inst_39919 = (state_39923[(2)]);
var state_39923__$1 = state_39923;
var statearr_39929_39956 = state_39923__$1;
(statearr_39929_39956[(2)] = inst_39919);

(statearr_39929_39956[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39924 === (13))){
var inst_39912 = cljs.core.async.close_BANG_.call(null,out);
var state_39923__$1 = state_39923;
var statearr_39930_39957 = state_39923__$1;
(statearr_39930_39957[(2)] = inst_39912);

(statearr_39930_39957[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39924 === (6))){
var state_39923__$1 = state_39923;
var statearr_39931_39958 = state_39923__$1;
(statearr_39931_39958[(2)] = null);

(statearr_39931_39958[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39924 === (3))){
var inst_39921 = (state_39923[(2)]);
var state_39923__$1 = state_39923;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39923__$1,inst_39921);
} else {
if((state_val_39924 === (12))){
var inst_39909 = (state_39923[(8)]);
var inst_39909__$1 = (state_39923[(2)]);
var inst_39910 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_39909__$1);
var state_39923__$1 = (function (){var statearr_39932 = state_39923;
(statearr_39932[(8)] = inst_39909__$1);

return statearr_39932;
})();
if(cljs.core.truth_(inst_39910)){
var statearr_39933_39959 = state_39923__$1;
(statearr_39933_39959[(1)] = (13));

} else {
var statearr_39934_39960 = state_39923__$1;
(statearr_39934_39960[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39924 === (2))){
var inst_39886 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_39887 = (0);
var state_39923__$1 = (function (){var statearr_39935 = state_39923;
(statearr_39935[(9)] = inst_39886);

(statearr_39935[(7)] = inst_39887);

return statearr_39935;
})();
var statearr_39936_39961 = state_39923__$1;
(statearr_39936_39961[(2)] = null);

(statearr_39936_39961[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39924 === (11))){
var inst_39887 = (state_39923[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_39923,(10),Object,null,(9));
var inst_39896 = chs__$1.call(null,inst_39887);
var inst_39897 = done.call(null,inst_39887);
var inst_39898 = cljs.core.async.take_BANG_.call(null,inst_39896,inst_39897);
var state_39923__$1 = state_39923;
var statearr_39937_39962 = state_39923__$1;
(statearr_39937_39962[(2)] = inst_39898);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39923__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39924 === (9))){
var inst_39887 = (state_39923[(7)]);
var inst_39900 = (state_39923[(2)]);
var inst_39901 = (inst_39887 + (1));
var inst_39887__$1 = inst_39901;
var state_39923__$1 = (function (){var statearr_39938 = state_39923;
(statearr_39938[(10)] = inst_39900);

(statearr_39938[(7)] = inst_39887__$1);

return statearr_39938;
})();
var statearr_39939_39963 = state_39923__$1;
(statearr_39939_39963[(2)] = null);

(statearr_39939_39963[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39924 === (5))){
var inst_39907 = (state_39923[(2)]);
var state_39923__$1 = (function (){var statearr_39940 = state_39923;
(statearr_39940[(11)] = inst_39907);

return statearr_39940;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39923__$1,(12),dchan);
} else {
if((state_val_39924 === (14))){
var inst_39909 = (state_39923[(8)]);
var inst_39914 = cljs.core.apply.call(null,f,inst_39909);
var state_39923__$1 = state_39923;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39923__$1,(16),out,inst_39914);
} else {
if((state_val_39924 === (16))){
var inst_39916 = (state_39923[(2)]);
var state_39923__$1 = (function (){var statearr_39941 = state_39923;
(statearr_39941[(12)] = inst_39916);

return statearr_39941;
})();
var statearr_39942_39964 = state_39923__$1;
(statearr_39942_39964[(2)] = null);

(statearr_39942_39964[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39924 === (10))){
var inst_39891 = (state_39923[(2)]);
var inst_39892 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_39923__$1 = (function (){var statearr_39943 = state_39923;
(statearr_39943[(13)] = inst_39891);

return statearr_39943;
})();
var statearr_39944_39965 = state_39923__$1;
(statearr_39944_39965[(2)] = inst_39892);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39923__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39924 === (8))){
var inst_39905 = (state_39923[(2)]);
var state_39923__$1 = state_39923;
var statearr_39945_39966 = state_39923__$1;
(statearr_39945_39966[(2)] = inst_39905);

(statearr_39945_39966[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__38612__auto___39951,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__38522__auto__,c__38612__auto___39951,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__38523__auto__ = null;
var cljs$core$async$state_machine__38523__auto____0 = (function (){
var statearr_39946 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39946[(0)] = cljs$core$async$state_machine__38523__auto__);

(statearr_39946[(1)] = (1));

return statearr_39946;
});
var cljs$core$async$state_machine__38523__auto____1 = (function (state_39923){
while(true){
var ret_value__38524__auto__ = (function (){try{while(true){
var result__38525__auto__ = switch__38522__auto__.call(null,state_39923);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38525__auto__;
}
break;
}
}catch (e39947){if((e39947 instanceof Object)){
var ex__38526__auto__ = e39947;
var statearr_39948_39967 = state_39923;
(statearr_39948_39967[(5)] = ex__38526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39923);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39947;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39968 = state_39923;
state_39923 = G__39968;
continue;
} else {
return ret_value__38524__auto__;
}
break;
}
});
cljs$core$async$state_machine__38523__auto__ = function(state_39923){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38523__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38523__auto____1.call(this,state_39923);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__38523__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38523__auto____0;
cljs$core$async$state_machine__38523__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38523__auto____1;
return cljs$core$async$state_machine__38523__auto__;
})()
;})(switch__38522__auto__,c__38612__auto___39951,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__38614__auto__ = (function (){var statearr_39949 = f__38613__auto__.call(null);
(statearr_39949[(6)] = c__38612__auto___39951);

return statearr_39949;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38614__auto__);
});})(c__38612__auto___39951,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__39971 = arguments.length;
switch (G__39971) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38612__auto___40025 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38612__auto___40025,out){
return (function (){
var f__38613__auto__ = (function (){var switch__38522__auto__ = ((function (c__38612__auto___40025,out){
return (function (state_40003){
var state_val_40004 = (state_40003[(1)]);
if((state_val_40004 === (7))){
var inst_39983 = (state_40003[(7)]);
var inst_39982 = (state_40003[(8)]);
var inst_39982__$1 = (state_40003[(2)]);
var inst_39983__$1 = cljs.core.nth.call(null,inst_39982__$1,(0),null);
var inst_39984 = cljs.core.nth.call(null,inst_39982__$1,(1),null);
var inst_39985 = (inst_39983__$1 == null);
var state_40003__$1 = (function (){var statearr_40005 = state_40003;
(statearr_40005[(7)] = inst_39983__$1);

(statearr_40005[(8)] = inst_39982__$1);

(statearr_40005[(9)] = inst_39984);

return statearr_40005;
})();
if(cljs.core.truth_(inst_39985)){
var statearr_40006_40026 = state_40003__$1;
(statearr_40006_40026[(1)] = (8));

} else {
var statearr_40007_40027 = state_40003__$1;
(statearr_40007_40027[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40004 === (1))){
var inst_39972 = cljs.core.vec.call(null,chs);
var inst_39973 = inst_39972;
var state_40003__$1 = (function (){var statearr_40008 = state_40003;
(statearr_40008[(10)] = inst_39973);

return statearr_40008;
})();
var statearr_40009_40028 = state_40003__$1;
(statearr_40009_40028[(2)] = null);

(statearr_40009_40028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40004 === (4))){
var inst_39973 = (state_40003[(10)]);
var state_40003__$1 = state_40003;
return cljs.core.async.ioc_alts_BANG_.call(null,state_40003__$1,(7),inst_39973);
} else {
if((state_val_40004 === (6))){
var inst_39999 = (state_40003[(2)]);
var state_40003__$1 = state_40003;
var statearr_40010_40029 = state_40003__$1;
(statearr_40010_40029[(2)] = inst_39999);

(statearr_40010_40029[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40004 === (3))){
var inst_40001 = (state_40003[(2)]);
var state_40003__$1 = state_40003;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40003__$1,inst_40001);
} else {
if((state_val_40004 === (2))){
var inst_39973 = (state_40003[(10)]);
var inst_39975 = cljs.core.count.call(null,inst_39973);
var inst_39976 = (inst_39975 > (0));
var state_40003__$1 = state_40003;
if(cljs.core.truth_(inst_39976)){
var statearr_40012_40030 = state_40003__$1;
(statearr_40012_40030[(1)] = (4));

} else {
var statearr_40013_40031 = state_40003__$1;
(statearr_40013_40031[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40004 === (11))){
var inst_39973 = (state_40003[(10)]);
var inst_39992 = (state_40003[(2)]);
var tmp40011 = inst_39973;
var inst_39973__$1 = tmp40011;
var state_40003__$1 = (function (){var statearr_40014 = state_40003;
(statearr_40014[(11)] = inst_39992);

(statearr_40014[(10)] = inst_39973__$1);

return statearr_40014;
})();
var statearr_40015_40032 = state_40003__$1;
(statearr_40015_40032[(2)] = null);

(statearr_40015_40032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40004 === (9))){
var inst_39983 = (state_40003[(7)]);
var state_40003__$1 = state_40003;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40003__$1,(11),out,inst_39983);
} else {
if((state_val_40004 === (5))){
var inst_39997 = cljs.core.async.close_BANG_.call(null,out);
var state_40003__$1 = state_40003;
var statearr_40016_40033 = state_40003__$1;
(statearr_40016_40033[(2)] = inst_39997);

(statearr_40016_40033[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40004 === (10))){
var inst_39995 = (state_40003[(2)]);
var state_40003__$1 = state_40003;
var statearr_40017_40034 = state_40003__$1;
(statearr_40017_40034[(2)] = inst_39995);

(statearr_40017_40034[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40004 === (8))){
var inst_39973 = (state_40003[(10)]);
var inst_39983 = (state_40003[(7)]);
var inst_39982 = (state_40003[(8)]);
var inst_39984 = (state_40003[(9)]);
var inst_39987 = (function (){var cs = inst_39973;
var vec__39978 = inst_39982;
var v = inst_39983;
var c = inst_39984;
return ((function (cs,vec__39978,v,c,inst_39973,inst_39983,inst_39982,inst_39984,state_val_40004,c__38612__auto___40025,out){
return (function (p1__39969_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__39969_SHARP_);
});
;})(cs,vec__39978,v,c,inst_39973,inst_39983,inst_39982,inst_39984,state_val_40004,c__38612__auto___40025,out))
})();
var inst_39988 = cljs.core.filterv.call(null,inst_39987,inst_39973);
var inst_39973__$1 = inst_39988;
var state_40003__$1 = (function (){var statearr_40018 = state_40003;
(statearr_40018[(10)] = inst_39973__$1);

return statearr_40018;
})();
var statearr_40019_40035 = state_40003__$1;
(statearr_40019_40035[(2)] = null);

(statearr_40019_40035[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__38612__auto___40025,out))
;
return ((function (switch__38522__auto__,c__38612__auto___40025,out){
return (function() {
var cljs$core$async$state_machine__38523__auto__ = null;
var cljs$core$async$state_machine__38523__auto____0 = (function (){
var statearr_40020 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40020[(0)] = cljs$core$async$state_machine__38523__auto__);

(statearr_40020[(1)] = (1));

return statearr_40020;
});
var cljs$core$async$state_machine__38523__auto____1 = (function (state_40003){
while(true){
var ret_value__38524__auto__ = (function (){try{while(true){
var result__38525__auto__ = switch__38522__auto__.call(null,state_40003);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38525__auto__;
}
break;
}
}catch (e40021){if((e40021 instanceof Object)){
var ex__38526__auto__ = e40021;
var statearr_40022_40036 = state_40003;
(statearr_40022_40036[(5)] = ex__38526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40003);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40021;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40037 = state_40003;
state_40003 = G__40037;
continue;
} else {
return ret_value__38524__auto__;
}
break;
}
});
cljs$core$async$state_machine__38523__auto__ = function(state_40003){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38523__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38523__auto____1.call(this,state_40003);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__38523__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38523__auto____0;
cljs$core$async$state_machine__38523__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38523__auto____1;
return cljs$core$async$state_machine__38523__auto__;
})()
;})(switch__38522__auto__,c__38612__auto___40025,out))
})();
var state__38614__auto__ = (function (){var statearr_40023 = f__38613__auto__.call(null);
(statearr_40023[(6)] = c__38612__auto___40025);

return statearr_40023;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38614__auto__);
});})(c__38612__auto___40025,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__40039 = arguments.length;
switch (G__40039) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38612__auto___40084 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38612__auto___40084,out){
return (function (){
var f__38613__auto__ = (function (){var switch__38522__auto__ = ((function (c__38612__auto___40084,out){
return (function (state_40063){
var state_val_40064 = (state_40063[(1)]);
if((state_val_40064 === (7))){
var inst_40045 = (state_40063[(7)]);
var inst_40045__$1 = (state_40063[(2)]);
var inst_40046 = (inst_40045__$1 == null);
var inst_40047 = cljs.core.not.call(null,inst_40046);
var state_40063__$1 = (function (){var statearr_40065 = state_40063;
(statearr_40065[(7)] = inst_40045__$1);

return statearr_40065;
})();
if(inst_40047){
var statearr_40066_40085 = state_40063__$1;
(statearr_40066_40085[(1)] = (8));

} else {
var statearr_40067_40086 = state_40063__$1;
(statearr_40067_40086[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40064 === (1))){
var inst_40040 = (0);
var state_40063__$1 = (function (){var statearr_40068 = state_40063;
(statearr_40068[(8)] = inst_40040);

return statearr_40068;
})();
var statearr_40069_40087 = state_40063__$1;
(statearr_40069_40087[(2)] = null);

(statearr_40069_40087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40064 === (4))){
var state_40063__$1 = state_40063;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40063__$1,(7),ch);
} else {
if((state_val_40064 === (6))){
var inst_40058 = (state_40063[(2)]);
var state_40063__$1 = state_40063;
var statearr_40070_40088 = state_40063__$1;
(statearr_40070_40088[(2)] = inst_40058);

(statearr_40070_40088[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40064 === (3))){
var inst_40060 = (state_40063[(2)]);
var inst_40061 = cljs.core.async.close_BANG_.call(null,out);
var state_40063__$1 = (function (){var statearr_40071 = state_40063;
(statearr_40071[(9)] = inst_40060);

return statearr_40071;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40063__$1,inst_40061);
} else {
if((state_val_40064 === (2))){
var inst_40040 = (state_40063[(8)]);
var inst_40042 = (inst_40040 < n);
var state_40063__$1 = state_40063;
if(cljs.core.truth_(inst_40042)){
var statearr_40072_40089 = state_40063__$1;
(statearr_40072_40089[(1)] = (4));

} else {
var statearr_40073_40090 = state_40063__$1;
(statearr_40073_40090[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40064 === (11))){
var inst_40040 = (state_40063[(8)]);
var inst_40050 = (state_40063[(2)]);
var inst_40051 = (inst_40040 + (1));
var inst_40040__$1 = inst_40051;
var state_40063__$1 = (function (){var statearr_40074 = state_40063;
(statearr_40074[(8)] = inst_40040__$1);

(statearr_40074[(10)] = inst_40050);

return statearr_40074;
})();
var statearr_40075_40091 = state_40063__$1;
(statearr_40075_40091[(2)] = null);

(statearr_40075_40091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40064 === (9))){
var state_40063__$1 = state_40063;
var statearr_40076_40092 = state_40063__$1;
(statearr_40076_40092[(2)] = null);

(statearr_40076_40092[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40064 === (5))){
var state_40063__$1 = state_40063;
var statearr_40077_40093 = state_40063__$1;
(statearr_40077_40093[(2)] = null);

(statearr_40077_40093[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40064 === (10))){
var inst_40055 = (state_40063[(2)]);
var state_40063__$1 = state_40063;
var statearr_40078_40094 = state_40063__$1;
(statearr_40078_40094[(2)] = inst_40055);

(statearr_40078_40094[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40064 === (8))){
var inst_40045 = (state_40063[(7)]);
var state_40063__$1 = state_40063;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40063__$1,(11),out,inst_40045);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__38612__auto___40084,out))
;
return ((function (switch__38522__auto__,c__38612__auto___40084,out){
return (function() {
var cljs$core$async$state_machine__38523__auto__ = null;
var cljs$core$async$state_machine__38523__auto____0 = (function (){
var statearr_40079 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40079[(0)] = cljs$core$async$state_machine__38523__auto__);

(statearr_40079[(1)] = (1));

return statearr_40079;
});
var cljs$core$async$state_machine__38523__auto____1 = (function (state_40063){
while(true){
var ret_value__38524__auto__ = (function (){try{while(true){
var result__38525__auto__ = switch__38522__auto__.call(null,state_40063);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38525__auto__;
}
break;
}
}catch (e40080){if((e40080 instanceof Object)){
var ex__38526__auto__ = e40080;
var statearr_40081_40095 = state_40063;
(statearr_40081_40095[(5)] = ex__38526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40063);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40080;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40096 = state_40063;
state_40063 = G__40096;
continue;
} else {
return ret_value__38524__auto__;
}
break;
}
});
cljs$core$async$state_machine__38523__auto__ = function(state_40063){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38523__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38523__auto____1.call(this,state_40063);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__38523__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38523__auto____0;
cljs$core$async$state_machine__38523__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38523__auto____1;
return cljs$core$async$state_machine__38523__auto__;
})()
;})(switch__38522__auto__,c__38612__auto___40084,out))
})();
var state__38614__auto__ = (function (){var statearr_40082 = f__38613__auto__.call(null);
(statearr_40082[(6)] = c__38612__auto___40084);

return statearr_40082;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38614__auto__);
});})(c__38612__auto___40084,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async40098 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40098 = (function (f,ch,meta40099){
this.f = f;
this.ch = ch;
this.meta40099 = meta40099;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40098.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40100,meta40099__$1){
var self__ = this;
var _40100__$1 = this;
return (new cljs.core.async.t_cljs$core$async40098(self__.f,self__.ch,meta40099__$1));
});

cljs.core.async.t_cljs$core$async40098.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40100){
var self__ = this;
var _40100__$1 = this;
return self__.meta40099;
});

cljs.core.async.t_cljs$core$async40098.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40098.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async40098.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async40098.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40098.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async40101 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40101 = (function (f,ch,meta40099,_,fn1,meta40102){
this.f = f;
this.ch = ch;
this.meta40099 = meta40099;
this._ = _;
this.fn1 = fn1;
this.meta40102 = meta40102;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40101.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_40103,meta40102__$1){
var self__ = this;
var _40103__$1 = this;
return (new cljs.core.async.t_cljs$core$async40101(self__.f,self__.ch,self__.meta40099,self__._,self__.fn1,meta40102__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async40101.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_40103){
var self__ = this;
var _40103__$1 = this;
return self__.meta40102;
});})(___$1))
;

cljs.core.async.t_cljs$core$async40101.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40101.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async40101.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async40101.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__40097_SHARP_){
return f1.call(null,(((p1__40097_SHARP_ == null))?null:self__.f.call(null,p1__40097_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async40101.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40099","meta40099",-1203340834,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async40098","cljs.core.async/t_cljs$core$async40098",987787716,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta40102","meta40102",-2066678411,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async40101.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40101.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40101";

cljs.core.async.t_cljs$core$async40101.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async40101");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40101.
 */
cljs.core.async.__GT_t_cljs$core$async40101 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async40101(f__$1,ch__$1,meta40099__$1,___$2,fn1__$1,meta40102){
return (new cljs.core.async.t_cljs$core$async40101(f__$1,ch__$1,meta40099__$1,___$2,fn1__$1,meta40102));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async40101(self__.f,self__.ch,self__.meta40099,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3911__auto__ = ret;
if(cljs.core.truth_(and__3911__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3911__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async40098.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40098.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async40098.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40099","meta40099",-1203340834,null)], null);
});

cljs.core.async.t_cljs$core$async40098.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40098.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40098";

cljs.core.async.t_cljs$core$async40098.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async40098");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40098.
 */
cljs.core.async.__GT_t_cljs$core$async40098 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async40098(f__$1,ch__$1,meta40099){
return (new cljs.core.async.t_cljs$core$async40098(f__$1,ch__$1,meta40099));
});

}

return (new cljs.core.async.t_cljs$core$async40098(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async40104 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40104 = (function (f,ch,meta40105){
this.f = f;
this.ch = ch;
this.meta40105 = meta40105;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40104.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40106,meta40105__$1){
var self__ = this;
var _40106__$1 = this;
return (new cljs.core.async.t_cljs$core$async40104(self__.f,self__.ch,meta40105__$1));
});

cljs.core.async.t_cljs$core$async40104.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40106){
var self__ = this;
var _40106__$1 = this;
return self__.meta40105;
});

cljs.core.async.t_cljs$core$async40104.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40104.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async40104.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40104.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async40104.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40104.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async40104.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40105","meta40105",-1165613667,null)], null);
});

cljs.core.async.t_cljs$core$async40104.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40104.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40104";

cljs.core.async.t_cljs$core$async40104.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async40104");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40104.
 */
cljs.core.async.__GT_t_cljs$core$async40104 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async40104(f__$1,ch__$1,meta40105){
return (new cljs.core.async.t_cljs$core$async40104(f__$1,ch__$1,meta40105));
});

}

return (new cljs.core.async.t_cljs$core$async40104(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async40107 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40107 = (function (p,ch,meta40108){
this.p = p;
this.ch = ch;
this.meta40108 = meta40108;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40107.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40109,meta40108__$1){
var self__ = this;
var _40109__$1 = this;
return (new cljs.core.async.t_cljs$core$async40107(self__.p,self__.ch,meta40108__$1));
});

cljs.core.async.t_cljs$core$async40107.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40109){
var self__ = this;
var _40109__$1 = this;
return self__.meta40108;
});

cljs.core.async.t_cljs$core$async40107.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40107.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async40107.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async40107.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40107.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async40107.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40107.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async40107.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40108","meta40108",-1630213456,null)], null);
});

cljs.core.async.t_cljs$core$async40107.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40107.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40107";

cljs.core.async.t_cljs$core$async40107.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async40107");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40107.
 */
cljs.core.async.__GT_t_cljs$core$async40107 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async40107(p__$1,ch__$1,meta40108){
return (new cljs.core.async.t_cljs$core$async40107(p__$1,ch__$1,meta40108));
});

}

return (new cljs.core.async.t_cljs$core$async40107(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__40111 = arguments.length;
switch (G__40111) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38612__auto___40151 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38612__auto___40151,out){
return (function (){
var f__38613__auto__ = (function (){var switch__38522__auto__ = ((function (c__38612__auto___40151,out){
return (function (state_40132){
var state_val_40133 = (state_40132[(1)]);
if((state_val_40133 === (7))){
var inst_40128 = (state_40132[(2)]);
var state_40132__$1 = state_40132;
var statearr_40134_40152 = state_40132__$1;
(statearr_40134_40152[(2)] = inst_40128);

(statearr_40134_40152[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40133 === (1))){
var state_40132__$1 = state_40132;
var statearr_40135_40153 = state_40132__$1;
(statearr_40135_40153[(2)] = null);

(statearr_40135_40153[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40133 === (4))){
var inst_40114 = (state_40132[(7)]);
var inst_40114__$1 = (state_40132[(2)]);
var inst_40115 = (inst_40114__$1 == null);
var state_40132__$1 = (function (){var statearr_40136 = state_40132;
(statearr_40136[(7)] = inst_40114__$1);

return statearr_40136;
})();
if(cljs.core.truth_(inst_40115)){
var statearr_40137_40154 = state_40132__$1;
(statearr_40137_40154[(1)] = (5));

} else {
var statearr_40138_40155 = state_40132__$1;
(statearr_40138_40155[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40133 === (6))){
var inst_40114 = (state_40132[(7)]);
var inst_40119 = p.call(null,inst_40114);
var state_40132__$1 = state_40132;
if(cljs.core.truth_(inst_40119)){
var statearr_40139_40156 = state_40132__$1;
(statearr_40139_40156[(1)] = (8));

} else {
var statearr_40140_40157 = state_40132__$1;
(statearr_40140_40157[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40133 === (3))){
var inst_40130 = (state_40132[(2)]);
var state_40132__$1 = state_40132;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40132__$1,inst_40130);
} else {
if((state_val_40133 === (2))){
var state_40132__$1 = state_40132;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40132__$1,(4),ch);
} else {
if((state_val_40133 === (11))){
var inst_40122 = (state_40132[(2)]);
var state_40132__$1 = state_40132;
var statearr_40141_40158 = state_40132__$1;
(statearr_40141_40158[(2)] = inst_40122);

(statearr_40141_40158[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40133 === (9))){
var state_40132__$1 = state_40132;
var statearr_40142_40159 = state_40132__$1;
(statearr_40142_40159[(2)] = null);

(statearr_40142_40159[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40133 === (5))){
var inst_40117 = cljs.core.async.close_BANG_.call(null,out);
var state_40132__$1 = state_40132;
var statearr_40143_40160 = state_40132__$1;
(statearr_40143_40160[(2)] = inst_40117);

(statearr_40143_40160[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40133 === (10))){
var inst_40125 = (state_40132[(2)]);
var state_40132__$1 = (function (){var statearr_40144 = state_40132;
(statearr_40144[(8)] = inst_40125);

return statearr_40144;
})();
var statearr_40145_40161 = state_40132__$1;
(statearr_40145_40161[(2)] = null);

(statearr_40145_40161[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40133 === (8))){
var inst_40114 = (state_40132[(7)]);
var state_40132__$1 = state_40132;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40132__$1,(11),out,inst_40114);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__38612__auto___40151,out))
;
return ((function (switch__38522__auto__,c__38612__auto___40151,out){
return (function() {
var cljs$core$async$state_machine__38523__auto__ = null;
var cljs$core$async$state_machine__38523__auto____0 = (function (){
var statearr_40146 = [null,null,null,null,null,null,null,null,null];
(statearr_40146[(0)] = cljs$core$async$state_machine__38523__auto__);

(statearr_40146[(1)] = (1));

return statearr_40146;
});
var cljs$core$async$state_machine__38523__auto____1 = (function (state_40132){
while(true){
var ret_value__38524__auto__ = (function (){try{while(true){
var result__38525__auto__ = switch__38522__auto__.call(null,state_40132);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38525__auto__;
}
break;
}
}catch (e40147){if((e40147 instanceof Object)){
var ex__38526__auto__ = e40147;
var statearr_40148_40162 = state_40132;
(statearr_40148_40162[(5)] = ex__38526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40132);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40147;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40163 = state_40132;
state_40132 = G__40163;
continue;
} else {
return ret_value__38524__auto__;
}
break;
}
});
cljs$core$async$state_machine__38523__auto__ = function(state_40132){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38523__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38523__auto____1.call(this,state_40132);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__38523__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38523__auto____0;
cljs$core$async$state_machine__38523__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38523__auto____1;
return cljs$core$async$state_machine__38523__auto__;
})()
;})(switch__38522__auto__,c__38612__auto___40151,out))
})();
var state__38614__auto__ = (function (){var statearr_40149 = f__38613__auto__.call(null);
(statearr_40149[(6)] = c__38612__auto___40151);

return statearr_40149;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38614__auto__);
});})(c__38612__auto___40151,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__40165 = arguments.length;
switch (G__40165) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__38612__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38612__auto__){
return (function (){
var f__38613__auto__ = (function (){var switch__38522__auto__ = ((function (c__38612__auto__){
return (function (state_40228){
var state_val_40229 = (state_40228[(1)]);
if((state_val_40229 === (7))){
var inst_40224 = (state_40228[(2)]);
var state_40228__$1 = state_40228;
var statearr_40230_40268 = state_40228__$1;
(statearr_40230_40268[(2)] = inst_40224);

(statearr_40230_40268[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40229 === (20))){
var inst_40194 = (state_40228[(7)]);
var inst_40205 = (state_40228[(2)]);
var inst_40206 = cljs.core.next.call(null,inst_40194);
var inst_40180 = inst_40206;
var inst_40181 = null;
var inst_40182 = (0);
var inst_40183 = (0);
var state_40228__$1 = (function (){var statearr_40231 = state_40228;
(statearr_40231[(8)] = inst_40181);

(statearr_40231[(9)] = inst_40205);

(statearr_40231[(10)] = inst_40183);

(statearr_40231[(11)] = inst_40180);

(statearr_40231[(12)] = inst_40182);

return statearr_40231;
})();
var statearr_40232_40269 = state_40228__$1;
(statearr_40232_40269[(2)] = null);

(statearr_40232_40269[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40229 === (1))){
var state_40228__$1 = state_40228;
var statearr_40233_40270 = state_40228__$1;
(statearr_40233_40270[(2)] = null);

(statearr_40233_40270[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40229 === (4))){
var inst_40169 = (state_40228[(13)]);
var inst_40169__$1 = (state_40228[(2)]);
var inst_40170 = (inst_40169__$1 == null);
var state_40228__$1 = (function (){var statearr_40234 = state_40228;
(statearr_40234[(13)] = inst_40169__$1);

return statearr_40234;
})();
if(cljs.core.truth_(inst_40170)){
var statearr_40235_40271 = state_40228__$1;
(statearr_40235_40271[(1)] = (5));

} else {
var statearr_40236_40272 = state_40228__$1;
(statearr_40236_40272[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40229 === (15))){
var state_40228__$1 = state_40228;
var statearr_40240_40273 = state_40228__$1;
(statearr_40240_40273[(2)] = null);

(statearr_40240_40273[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40229 === (21))){
var state_40228__$1 = state_40228;
var statearr_40241_40274 = state_40228__$1;
(statearr_40241_40274[(2)] = null);

(statearr_40241_40274[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40229 === (13))){
var inst_40181 = (state_40228[(8)]);
var inst_40183 = (state_40228[(10)]);
var inst_40180 = (state_40228[(11)]);
var inst_40182 = (state_40228[(12)]);
var inst_40190 = (state_40228[(2)]);
var inst_40191 = (inst_40183 + (1));
var tmp40237 = inst_40181;
var tmp40238 = inst_40180;
var tmp40239 = inst_40182;
var inst_40180__$1 = tmp40238;
var inst_40181__$1 = tmp40237;
var inst_40182__$1 = tmp40239;
var inst_40183__$1 = inst_40191;
var state_40228__$1 = (function (){var statearr_40242 = state_40228;
(statearr_40242[(8)] = inst_40181__$1);

(statearr_40242[(10)] = inst_40183__$1);

(statearr_40242[(14)] = inst_40190);

(statearr_40242[(11)] = inst_40180__$1);

(statearr_40242[(12)] = inst_40182__$1);

return statearr_40242;
})();
var statearr_40243_40275 = state_40228__$1;
(statearr_40243_40275[(2)] = null);

(statearr_40243_40275[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40229 === (22))){
var state_40228__$1 = state_40228;
var statearr_40244_40276 = state_40228__$1;
(statearr_40244_40276[(2)] = null);

(statearr_40244_40276[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40229 === (6))){
var inst_40169 = (state_40228[(13)]);
var inst_40178 = f.call(null,inst_40169);
var inst_40179 = cljs.core.seq.call(null,inst_40178);
var inst_40180 = inst_40179;
var inst_40181 = null;
var inst_40182 = (0);
var inst_40183 = (0);
var state_40228__$1 = (function (){var statearr_40245 = state_40228;
(statearr_40245[(8)] = inst_40181);

(statearr_40245[(10)] = inst_40183);

(statearr_40245[(11)] = inst_40180);

(statearr_40245[(12)] = inst_40182);

return statearr_40245;
})();
var statearr_40246_40277 = state_40228__$1;
(statearr_40246_40277[(2)] = null);

(statearr_40246_40277[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40229 === (17))){
var inst_40194 = (state_40228[(7)]);
var inst_40198 = cljs.core.chunk_first.call(null,inst_40194);
var inst_40199 = cljs.core.chunk_rest.call(null,inst_40194);
var inst_40200 = cljs.core.count.call(null,inst_40198);
var inst_40180 = inst_40199;
var inst_40181 = inst_40198;
var inst_40182 = inst_40200;
var inst_40183 = (0);
var state_40228__$1 = (function (){var statearr_40247 = state_40228;
(statearr_40247[(8)] = inst_40181);

(statearr_40247[(10)] = inst_40183);

(statearr_40247[(11)] = inst_40180);

(statearr_40247[(12)] = inst_40182);

return statearr_40247;
})();
var statearr_40248_40278 = state_40228__$1;
(statearr_40248_40278[(2)] = null);

(statearr_40248_40278[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40229 === (3))){
var inst_40226 = (state_40228[(2)]);
var state_40228__$1 = state_40228;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40228__$1,inst_40226);
} else {
if((state_val_40229 === (12))){
var inst_40214 = (state_40228[(2)]);
var state_40228__$1 = state_40228;
var statearr_40249_40279 = state_40228__$1;
(statearr_40249_40279[(2)] = inst_40214);

(statearr_40249_40279[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40229 === (2))){
var state_40228__$1 = state_40228;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40228__$1,(4),in$);
} else {
if((state_val_40229 === (23))){
var inst_40222 = (state_40228[(2)]);
var state_40228__$1 = state_40228;
var statearr_40250_40280 = state_40228__$1;
(statearr_40250_40280[(2)] = inst_40222);

(statearr_40250_40280[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40229 === (19))){
var inst_40209 = (state_40228[(2)]);
var state_40228__$1 = state_40228;
var statearr_40251_40281 = state_40228__$1;
(statearr_40251_40281[(2)] = inst_40209);

(statearr_40251_40281[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40229 === (11))){
var inst_40194 = (state_40228[(7)]);
var inst_40180 = (state_40228[(11)]);
var inst_40194__$1 = cljs.core.seq.call(null,inst_40180);
var state_40228__$1 = (function (){var statearr_40252 = state_40228;
(statearr_40252[(7)] = inst_40194__$1);

return statearr_40252;
})();
if(inst_40194__$1){
var statearr_40253_40282 = state_40228__$1;
(statearr_40253_40282[(1)] = (14));

} else {
var statearr_40254_40283 = state_40228__$1;
(statearr_40254_40283[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40229 === (9))){
var inst_40216 = (state_40228[(2)]);
var inst_40217 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_40228__$1 = (function (){var statearr_40255 = state_40228;
(statearr_40255[(15)] = inst_40216);

return statearr_40255;
})();
if(cljs.core.truth_(inst_40217)){
var statearr_40256_40284 = state_40228__$1;
(statearr_40256_40284[(1)] = (21));

} else {
var statearr_40257_40285 = state_40228__$1;
(statearr_40257_40285[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40229 === (5))){
var inst_40172 = cljs.core.async.close_BANG_.call(null,out);
var state_40228__$1 = state_40228;
var statearr_40258_40286 = state_40228__$1;
(statearr_40258_40286[(2)] = inst_40172);

(statearr_40258_40286[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40229 === (14))){
var inst_40194 = (state_40228[(7)]);
var inst_40196 = cljs.core.chunked_seq_QMARK_.call(null,inst_40194);
var state_40228__$1 = state_40228;
if(inst_40196){
var statearr_40259_40287 = state_40228__$1;
(statearr_40259_40287[(1)] = (17));

} else {
var statearr_40260_40288 = state_40228__$1;
(statearr_40260_40288[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40229 === (16))){
var inst_40212 = (state_40228[(2)]);
var state_40228__$1 = state_40228;
var statearr_40261_40289 = state_40228__$1;
(statearr_40261_40289[(2)] = inst_40212);

(statearr_40261_40289[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40229 === (10))){
var inst_40181 = (state_40228[(8)]);
var inst_40183 = (state_40228[(10)]);
var inst_40188 = cljs.core._nth.call(null,inst_40181,inst_40183);
var state_40228__$1 = state_40228;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40228__$1,(13),out,inst_40188);
} else {
if((state_val_40229 === (18))){
var inst_40194 = (state_40228[(7)]);
var inst_40203 = cljs.core.first.call(null,inst_40194);
var state_40228__$1 = state_40228;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40228__$1,(20),out,inst_40203);
} else {
if((state_val_40229 === (8))){
var inst_40183 = (state_40228[(10)]);
var inst_40182 = (state_40228[(12)]);
var inst_40185 = (inst_40183 < inst_40182);
var inst_40186 = inst_40185;
var state_40228__$1 = state_40228;
if(cljs.core.truth_(inst_40186)){
var statearr_40262_40290 = state_40228__$1;
(statearr_40262_40290[(1)] = (10));

} else {
var statearr_40263_40291 = state_40228__$1;
(statearr_40263_40291[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__38612__auto__))
;
return ((function (switch__38522__auto__,c__38612__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__38523__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__38523__auto____0 = (function (){
var statearr_40264 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40264[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__38523__auto__);

(statearr_40264[(1)] = (1));

return statearr_40264;
});
var cljs$core$async$mapcat_STAR__$_state_machine__38523__auto____1 = (function (state_40228){
while(true){
var ret_value__38524__auto__ = (function (){try{while(true){
var result__38525__auto__ = switch__38522__auto__.call(null,state_40228);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38525__auto__;
}
break;
}
}catch (e40265){if((e40265 instanceof Object)){
var ex__38526__auto__ = e40265;
var statearr_40266_40292 = state_40228;
(statearr_40266_40292[(5)] = ex__38526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40228);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40265;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40293 = state_40228;
state_40228 = G__40293;
continue;
} else {
return ret_value__38524__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__38523__auto__ = function(state_40228){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__38523__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__38523__auto____1.call(this,state_40228);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__38523__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__38523__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__38523__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__38523__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__38523__auto__;
})()
;})(switch__38522__auto__,c__38612__auto__))
})();
var state__38614__auto__ = (function (){var statearr_40267 = f__38613__auto__.call(null);
(statearr_40267[(6)] = c__38612__auto__);

return statearr_40267;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38614__auto__);
});})(c__38612__auto__))
);

return c__38612__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__40295 = arguments.length;
switch (G__40295) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__40298 = arguments.length;
switch (G__40298) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__40301 = arguments.length;
switch (G__40301) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38612__auto___40348 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38612__auto___40348,out){
return (function (){
var f__38613__auto__ = (function (){var switch__38522__auto__ = ((function (c__38612__auto___40348,out){
return (function (state_40325){
var state_val_40326 = (state_40325[(1)]);
if((state_val_40326 === (7))){
var inst_40320 = (state_40325[(2)]);
var state_40325__$1 = state_40325;
var statearr_40327_40349 = state_40325__$1;
(statearr_40327_40349[(2)] = inst_40320);

(statearr_40327_40349[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40326 === (1))){
var inst_40302 = null;
var state_40325__$1 = (function (){var statearr_40328 = state_40325;
(statearr_40328[(7)] = inst_40302);

return statearr_40328;
})();
var statearr_40329_40350 = state_40325__$1;
(statearr_40329_40350[(2)] = null);

(statearr_40329_40350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40326 === (4))){
var inst_40305 = (state_40325[(8)]);
var inst_40305__$1 = (state_40325[(2)]);
var inst_40306 = (inst_40305__$1 == null);
var inst_40307 = cljs.core.not.call(null,inst_40306);
var state_40325__$1 = (function (){var statearr_40330 = state_40325;
(statearr_40330[(8)] = inst_40305__$1);

return statearr_40330;
})();
if(inst_40307){
var statearr_40331_40351 = state_40325__$1;
(statearr_40331_40351[(1)] = (5));

} else {
var statearr_40332_40352 = state_40325__$1;
(statearr_40332_40352[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40326 === (6))){
var state_40325__$1 = state_40325;
var statearr_40333_40353 = state_40325__$1;
(statearr_40333_40353[(2)] = null);

(statearr_40333_40353[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40326 === (3))){
var inst_40322 = (state_40325[(2)]);
var inst_40323 = cljs.core.async.close_BANG_.call(null,out);
var state_40325__$1 = (function (){var statearr_40334 = state_40325;
(statearr_40334[(9)] = inst_40322);

return statearr_40334;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40325__$1,inst_40323);
} else {
if((state_val_40326 === (2))){
var state_40325__$1 = state_40325;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40325__$1,(4),ch);
} else {
if((state_val_40326 === (11))){
var inst_40305 = (state_40325[(8)]);
var inst_40314 = (state_40325[(2)]);
var inst_40302 = inst_40305;
var state_40325__$1 = (function (){var statearr_40335 = state_40325;
(statearr_40335[(7)] = inst_40302);

(statearr_40335[(10)] = inst_40314);

return statearr_40335;
})();
var statearr_40336_40354 = state_40325__$1;
(statearr_40336_40354[(2)] = null);

(statearr_40336_40354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40326 === (9))){
var inst_40305 = (state_40325[(8)]);
var state_40325__$1 = state_40325;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40325__$1,(11),out,inst_40305);
} else {
if((state_val_40326 === (5))){
var inst_40305 = (state_40325[(8)]);
var inst_40302 = (state_40325[(7)]);
var inst_40309 = cljs.core._EQ_.call(null,inst_40305,inst_40302);
var state_40325__$1 = state_40325;
if(inst_40309){
var statearr_40338_40355 = state_40325__$1;
(statearr_40338_40355[(1)] = (8));

} else {
var statearr_40339_40356 = state_40325__$1;
(statearr_40339_40356[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40326 === (10))){
var inst_40317 = (state_40325[(2)]);
var state_40325__$1 = state_40325;
var statearr_40340_40357 = state_40325__$1;
(statearr_40340_40357[(2)] = inst_40317);

(statearr_40340_40357[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40326 === (8))){
var inst_40302 = (state_40325[(7)]);
var tmp40337 = inst_40302;
var inst_40302__$1 = tmp40337;
var state_40325__$1 = (function (){var statearr_40341 = state_40325;
(statearr_40341[(7)] = inst_40302__$1);

return statearr_40341;
})();
var statearr_40342_40358 = state_40325__$1;
(statearr_40342_40358[(2)] = null);

(statearr_40342_40358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__38612__auto___40348,out))
;
return ((function (switch__38522__auto__,c__38612__auto___40348,out){
return (function() {
var cljs$core$async$state_machine__38523__auto__ = null;
var cljs$core$async$state_machine__38523__auto____0 = (function (){
var statearr_40343 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40343[(0)] = cljs$core$async$state_machine__38523__auto__);

(statearr_40343[(1)] = (1));

return statearr_40343;
});
var cljs$core$async$state_machine__38523__auto____1 = (function (state_40325){
while(true){
var ret_value__38524__auto__ = (function (){try{while(true){
var result__38525__auto__ = switch__38522__auto__.call(null,state_40325);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38525__auto__;
}
break;
}
}catch (e40344){if((e40344 instanceof Object)){
var ex__38526__auto__ = e40344;
var statearr_40345_40359 = state_40325;
(statearr_40345_40359[(5)] = ex__38526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40325);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40344;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40360 = state_40325;
state_40325 = G__40360;
continue;
} else {
return ret_value__38524__auto__;
}
break;
}
});
cljs$core$async$state_machine__38523__auto__ = function(state_40325){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38523__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38523__auto____1.call(this,state_40325);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__38523__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38523__auto____0;
cljs$core$async$state_machine__38523__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38523__auto____1;
return cljs$core$async$state_machine__38523__auto__;
})()
;})(switch__38522__auto__,c__38612__auto___40348,out))
})();
var state__38614__auto__ = (function (){var statearr_40346 = f__38613__auto__.call(null);
(statearr_40346[(6)] = c__38612__auto___40348);

return statearr_40346;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38614__auto__);
});})(c__38612__auto___40348,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__40362 = arguments.length;
switch (G__40362) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38612__auto___40428 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38612__auto___40428,out){
return (function (){
var f__38613__auto__ = (function (){var switch__38522__auto__ = ((function (c__38612__auto___40428,out){
return (function (state_40400){
var state_val_40401 = (state_40400[(1)]);
if((state_val_40401 === (7))){
var inst_40396 = (state_40400[(2)]);
var state_40400__$1 = state_40400;
var statearr_40402_40429 = state_40400__$1;
(statearr_40402_40429[(2)] = inst_40396);

(statearr_40402_40429[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40401 === (1))){
var inst_40363 = (new Array(n));
var inst_40364 = inst_40363;
var inst_40365 = (0);
var state_40400__$1 = (function (){var statearr_40403 = state_40400;
(statearr_40403[(7)] = inst_40364);

(statearr_40403[(8)] = inst_40365);

return statearr_40403;
})();
var statearr_40404_40430 = state_40400__$1;
(statearr_40404_40430[(2)] = null);

(statearr_40404_40430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40401 === (4))){
var inst_40368 = (state_40400[(9)]);
var inst_40368__$1 = (state_40400[(2)]);
var inst_40369 = (inst_40368__$1 == null);
var inst_40370 = cljs.core.not.call(null,inst_40369);
var state_40400__$1 = (function (){var statearr_40405 = state_40400;
(statearr_40405[(9)] = inst_40368__$1);

return statearr_40405;
})();
if(inst_40370){
var statearr_40406_40431 = state_40400__$1;
(statearr_40406_40431[(1)] = (5));

} else {
var statearr_40407_40432 = state_40400__$1;
(statearr_40407_40432[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40401 === (15))){
var inst_40390 = (state_40400[(2)]);
var state_40400__$1 = state_40400;
var statearr_40408_40433 = state_40400__$1;
(statearr_40408_40433[(2)] = inst_40390);

(statearr_40408_40433[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40401 === (13))){
var state_40400__$1 = state_40400;
var statearr_40409_40434 = state_40400__$1;
(statearr_40409_40434[(2)] = null);

(statearr_40409_40434[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40401 === (6))){
var inst_40365 = (state_40400[(8)]);
var inst_40386 = (inst_40365 > (0));
var state_40400__$1 = state_40400;
if(cljs.core.truth_(inst_40386)){
var statearr_40410_40435 = state_40400__$1;
(statearr_40410_40435[(1)] = (12));

} else {
var statearr_40411_40436 = state_40400__$1;
(statearr_40411_40436[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40401 === (3))){
var inst_40398 = (state_40400[(2)]);
var state_40400__$1 = state_40400;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40400__$1,inst_40398);
} else {
if((state_val_40401 === (12))){
var inst_40364 = (state_40400[(7)]);
var inst_40388 = cljs.core.vec.call(null,inst_40364);
var state_40400__$1 = state_40400;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40400__$1,(15),out,inst_40388);
} else {
if((state_val_40401 === (2))){
var state_40400__$1 = state_40400;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40400__$1,(4),ch);
} else {
if((state_val_40401 === (11))){
var inst_40380 = (state_40400[(2)]);
var inst_40381 = (new Array(n));
var inst_40364 = inst_40381;
var inst_40365 = (0);
var state_40400__$1 = (function (){var statearr_40412 = state_40400;
(statearr_40412[(7)] = inst_40364);

(statearr_40412[(10)] = inst_40380);

(statearr_40412[(8)] = inst_40365);

return statearr_40412;
})();
var statearr_40413_40437 = state_40400__$1;
(statearr_40413_40437[(2)] = null);

(statearr_40413_40437[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40401 === (9))){
var inst_40364 = (state_40400[(7)]);
var inst_40378 = cljs.core.vec.call(null,inst_40364);
var state_40400__$1 = state_40400;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40400__$1,(11),out,inst_40378);
} else {
if((state_val_40401 === (5))){
var inst_40364 = (state_40400[(7)]);
var inst_40373 = (state_40400[(11)]);
var inst_40368 = (state_40400[(9)]);
var inst_40365 = (state_40400[(8)]);
var inst_40372 = (inst_40364[inst_40365] = inst_40368);
var inst_40373__$1 = (inst_40365 + (1));
var inst_40374 = (inst_40373__$1 < n);
var state_40400__$1 = (function (){var statearr_40414 = state_40400;
(statearr_40414[(11)] = inst_40373__$1);

(statearr_40414[(12)] = inst_40372);

return statearr_40414;
})();
if(cljs.core.truth_(inst_40374)){
var statearr_40415_40438 = state_40400__$1;
(statearr_40415_40438[(1)] = (8));

} else {
var statearr_40416_40439 = state_40400__$1;
(statearr_40416_40439[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40401 === (14))){
var inst_40393 = (state_40400[(2)]);
var inst_40394 = cljs.core.async.close_BANG_.call(null,out);
var state_40400__$1 = (function (){var statearr_40418 = state_40400;
(statearr_40418[(13)] = inst_40393);

return statearr_40418;
})();
var statearr_40419_40440 = state_40400__$1;
(statearr_40419_40440[(2)] = inst_40394);

(statearr_40419_40440[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40401 === (10))){
var inst_40384 = (state_40400[(2)]);
var state_40400__$1 = state_40400;
var statearr_40420_40441 = state_40400__$1;
(statearr_40420_40441[(2)] = inst_40384);

(statearr_40420_40441[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40401 === (8))){
var inst_40364 = (state_40400[(7)]);
var inst_40373 = (state_40400[(11)]);
var tmp40417 = inst_40364;
var inst_40364__$1 = tmp40417;
var inst_40365 = inst_40373;
var state_40400__$1 = (function (){var statearr_40421 = state_40400;
(statearr_40421[(7)] = inst_40364__$1);

(statearr_40421[(8)] = inst_40365);

return statearr_40421;
})();
var statearr_40422_40442 = state_40400__$1;
(statearr_40422_40442[(2)] = null);

(statearr_40422_40442[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__38612__auto___40428,out))
;
return ((function (switch__38522__auto__,c__38612__auto___40428,out){
return (function() {
var cljs$core$async$state_machine__38523__auto__ = null;
var cljs$core$async$state_machine__38523__auto____0 = (function (){
var statearr_40423 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40423[(0)] = cljs$core$async$state_machine__38523__auto__);

(statearr_40423[(1)] = (1));

return statearr_40423;
});
var cljs$core$async$state_machine__38523__auto____1 = (function (state_40400){
while(true){
var ret_value__38524__auto__ = (function (){try{while(true){
var result__38525__auto__ = switch__38522__auto__.call(null,state_40400);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38525__auto__;
}
break;
}
}catch (e40424){if((e40424 instanceof Object)){
var ex__38526__auto__ = e40424;
var statearr_40425_40443 = state_40400;
(statearr_40425_40443[(5)] = ex__38526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40400);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40424;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40444 = state_40400;
state_40400 = G__40444;
continue;
} else {
return ret_value__38524__auto__;
}
break;
}
});
cljs$core$async$state_machine__38523__auto__ = function(state_40400){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38523__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38523__auto____1.call(this,state_40400);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__38523__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38523__auto____0;
cljs$core$async$state_machine__38523__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38523__auto____1;
return cljs$core$async$state_machine__38523__auto__;
})()
;})(switch__38522__auto__,c__38612__auto___40428,out))
})();
var state__38614__auto__ = (function (){var statearr_40426 = f__38613__auto__.call(null);
(statearr_40426[(6)] = c__38612__auto___40428);

return statearr_40426;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38614__auto__);
});})(c__38612__auto___40428,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__40446 = arguments.length;
switch (G__40446) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38612__auto___40516 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38612__auto___40516,out){
return (function (){
var f__38613__auto__ = (function (){var switch__38522__auto__ = ((function (c__38612__auto___40516,out){
return (function (state_40488){
var state_val_40489 = (state_40488[(1)]);
if((state_val_40489 === (7))){
var inst_40484 = (state_40488[(2)]);
var state_40488__$1 = state_40488;
var statearr_40490_40517 = state_40488__$1;
(statearr_40490_40517[(2)] = inst_40484);

(statearr_40490_40517[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40489 === (1))){
var inst_40447 = [];
var inst_40448 = inst_40447;
var inst_40449 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_40488__$1 = (function (){var statearr_40491 = state_40488;
(statearr_40491[(7)] = inst_40448);

(statearr_40491[(8)] = inst_40449);

return statearr_40491;
})();
var statearr_40492_40518 = state_40488__$1;
(statearr_40492_40518[(2)] = null);

(statearr_40492_40518[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40489 === (4))){
var inst_40452 = (state_40488[(9)]);
var inst_40452__$1 = (state_40488[(2)]);
var inst_40453 = (inst_40452__$1 == null);
var inst_40454 = cljs.core.not.call(null,inst_40453);
var state_40488__$1 = (function (){var statearr_40493 = state_40488;
(statearr_40493[(9)] = inst_40452__$1);

return statearr_40493;
})();
if(inst_40454){
var statearr_40494_40519 = state_40488__$1;
(statearr_40494_40519[(1)] = (5));

} else {
var statearr_40495_40520 = state_40488__$1;
(statearr_40495_40520[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40489 === (15))){
var inst_40478 = (state_40488[(2)]);
var state_40488__$1 = state_40488;
var statearr_40496_40521 = state_40488__$1;
(statearr_40496_40521[(2)] = inst_40478);

(statearr_40496_40521[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40489 === (13))){
var state_40488__$1 = state_40488;
var statearr_40497_40522 = state_40488__$1;
(statearr_40497_40522[(2)] = null);

(statearr_40497_40522[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40489 === (6))){
var inst_40448 = (state_40488[(7)]);
var inst_40473 = inst_40448.length;
var inst_40474 = (inst_40473 > (0));
var state_40488__$1 = state_40488;
if(cljs.core.truth_(inst_40474)){
var statearr_40498_40523 = state_40488__$1;
(statearr_40498_40523[(1)] = (12));

} else {
var statearr_40499_40524 = state_40488__$1;
(statearr_40499_40524[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40489 === (3))){
var inst_40486 = (state_40488[(2)]);
var state_40488__$1 = state_40488;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40488__$1,inst_40486);
} else {
if((state_val_40489 === (12))){
var inst_40448 = (state_40488[(7)]);
var inst_40476 = cljs.core.vec.call(null,inst_40448);
var state_40488__$1 = state_40488;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40488__$1,(15),out,inst_40476);
} else {
if((state_val_40489 === (2))){
var state_40488__$1 = state_40488;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40488__$1,(4),ch);
} else {
if((state_val_40489 === (11))){
var inst_40452 = (state_40488[(9)]);
var inst_40456 = (state_40488[(10)]);
var inst_40466 = (state_40488[(2)]);
var inst_40467 = [];
var inst_40468 = inst_40467.push(inst_40452);
var inst_40448 = inst_40467;
var inst_40449 = inst_40456;
var state_40488__$1 = (function (){var statearr_40500 = state_40488;
(statearr_40500[(7)] = inst_40448);

(statearr_40500[(8)] = inst_40449);

(statearr_40500[(11)] = inst_40466);

(statearr_40500[(12)] = inst_40468);

return statearr_40500;
})();
var statearr_40501_40525 = state_40488__$1;
(statearr_40501_40525[(2)] = null);

(statearr_40501_40525[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40489 === (9))){
var inst_40448 = (state_40488[(7)]);
var inst_40464 = cljs.core.vec.call(null,inst_40448);
var state_40488__$1 = state_40488;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40488__$1,(11),out,inst_40464);
} else {
if((state_val_40489 === (5))){
var inst_40449 = (state_40488[(8)]);
var inst_40452 = (state_40488[(9)]);
var inst_40456 = (state_40488[(10)]);
var inst_40456__$1 = f.call(null,inst_40452);
var inst_40457 = cljs.core._EQ_.call(null,inst_40456__$1,inst_40449);
var inst_40458 = cljs.core.keyword_identical_QMARK_.call(null,inst_40449,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_40459 = ((inst_40457) || (inst_40458));
var state_40488__$1 = (function (){var statearr_40502 = state_40488;
(statearr_40502[(10)] = inst_40456__$1);

return statearr_40502;
})();
if(cljs.core.truth_(inst_40459)){
var statearr_40503_40526 = state_40488__$1;
(statearr_40503_40526[(1)] = (8));

} else {
var statearr_40504_40527 = state_40488__$1;
(statearr_40504_40527[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40489 === (14))){
var inst_40481 = (state_40488[(2)]);
var inst_40482 = cljs.core.async.close_BANG_.call(null,out);
var state_40488__$1 = (function (){var statearr_40506 = state_40488;
(statearr_40506[(13)] = inst_40481);

return statearr_40506;
})();
var statearr_40507_40528 = state_40488__$1;
(statearr_40507_40528[(2)] = inst_40482);

(statearr_40507_40528[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40489 === (10))){
var inst_40471 = (state_40488[(2)]);
var state_40488__$1 = state_40488;
var statearr_40508_40529 = state_40488__$1;
(statearr_40508_40529[(2)] = inst_40471);

(statearr_40508_40529[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40489 === (8))){
var inst_40448 = (state_40488[(7)]);
var inst_40452 = (state_40488[(9)]);
var inst_40456 = (state_40488[(10)]);
var inst_40461 = inst_40448.push(inst_40452);
var tmp40505 = inst_40448;
var inst_40448__$1 = tmp40505;
var inst_40449 = inst_40456;
var state_40488__$1 = (function (){var statearr_40509 = state_40488;
(statearr_40509[(14)] = inst_40461);

(statearr_40509[(7)] = inst_40448__$1);

(statearr_40509[(8)] = inst_40449);

return statearr_40509;
})();
var statearr_40510_40530 = state_40488__$1;
(statearr_40510_40530[(2)] = null);

(statearr_40510_40530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__38612__auto___40516,out))
;
return ((function (switch__38522__auto__,c__38612__auto___40516,out){
return (function() {
var cljs$core$async$state_machine__38523__auto__ = null;
var cljs$core$async$state_machine__38523__auto____0 = (function (){
var statearr_40511 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40511[(0)] = cljs$core$async$state_machine__38523__auto__);

(statearr_40511[(1)] = (1));

return statearr_40511;
});
var cljs$core$async$state_machine__38523__auto____1 = (function (state_40488){
while(true){
var ret_value__38524__auto__ = (function (){try{while(true){
var result__38525__auto__ = switch__38522__auto__.call(null,state_40488);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38525__auto__;
}
break;
}
}catch (e40512){if((e40512 instanceof Object)){
var ex__38526__auto__ = e40512;
var statearr_40513_40531 = state_40488;
(statearr_40513_40531[(5)] = ex__38526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40488);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40512;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40532 = state_40488;
state_40488 = G__40532;
continue;
} else {
return ret_value__38524__auto__;
}
break;
}
});
cljs$core$async$state_machine__38523__auto__ = function(state_40488){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38523__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38523__auto____1.call(this,state_40488);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__38523__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38523__auto____0;
cljs$core$async$state_machine__38523__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38523__auto____1;
return cljs$core$async$state_machine__38523__auto__;
})()
;})(switch__38522__auto__,c__38612__auto___40516,out))
})();
var state__38614__auto__ = (function (){var statearr_40514 = f__38613__auto__.call(null);
(statearr_40514[(6)] = c__38612__auto___40516);

return statearr_40514;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38614__auto__);
});})(c__38612__auto___40516,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1526826995085
