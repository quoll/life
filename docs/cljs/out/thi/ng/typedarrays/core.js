// Compiled by ClojureScript 1.10.238 {}
goog.provide('thi.ng.typedarrays.core');
goog.require('cljs.core');
/**
 * Creates a native Int8Array of the given size or from `coll`.
 */
thi.ng.typedarrays.core.int8 = (function thi$ng$typedarrays$core$int8(size_or_coll){
if(typeof size_or_coll === 'number'){
return (new Int8Array(size_or_coll));
} else {
var len = cljs.core.count.call(null,size_or_coll);
var buf = (new Int8Array(len));
var i_49643 = (0);
var coll_49644 = size_or_coll;
while(true){
if((i_49643 < len)){
(buf[i_49643] = cljs.core.first.call(null,coll_49644));

var G__49645 = (i_49643 + (1));
var G__49646 = cljs.core.next.call(null,coll_49644);
i_49643 = G__49645;
coll_49644 = G__49646;
continue;
} else {
}
break;
}

return buf;
}
});
/**
 * Creates a native Uint8Array of the given size or from `coll`.
 */
thi.ng.typedarrays.core.uint8 = (function thi$ng$typedarrays$core$uint8(size_or_coll){
if(typeof size_or_coll === 'number'){
return (new Uint8Array(size_or_coll));
} else {
var len = cljs.core.count.call(null,size_or_coll);
var buf = (new Uint8Array(len));
var i_49647 = (0);
var coll_49648 = size_or_coll;
while(true){
if((i_49647 < len)){
(buf[i_49647] = cljs.core.first.call(null,coll_49648));

var G__49649 = (i_49647 + (1));
var G__49650 = cljs.core.next.call(null,coll_49648);
i_49647 = G__49649;
coll_49648 = G__49650;
continue;
} else {
}
break;
}

return buf;
}
});
/**
 * Creates a native Uint8ClampedArray of the given size or from `coll`.
 */
thi.ng.typedarrays.core.uint8_clamped = (function thi$ng$typedarrays$core$uint8_clamped(size_or_coll){
if(typeof size_or_coll === 'number'){
return (new Uint8ClampedArray(size_or_coll));
} else {
var len = cljs.core.count.call(null,size_or_coll);
var buf = (new Uint8ClampedArray(len));
var i_49651 = (0);
var coll_49652 = size_or_coll;
while(true){
if((i_49651 < len)){
(buf[i_49651] = cljs.core.first.call(null,coll_49652));

var G__49653 = (i_49651 + (1));
var G__49654 = cljs.core.next.call(null,coll_49652);
i_49651 = G__49653;
coll_49652 = G__49654;
continue;
} else {
}
break;
}

return buf;
}
});
/**
 * Creates a native Int16Array of the given size or from `coll`.
 */
thi.ng.typedarrays.core.int16 = (function thi$ng$typedarrays$core$int16(size_or_coll){
if(typeof size_or_coll === 'number'){
return (new Int16Array(size_or_coll));
} else {
var len = cljs.core.count.call(null,size_or_coll);
var buf = (new Int16Array(len));
var i_49655 = (0);
var coll_49656 = size_or_coll;
while(true){
if((i_49655 < len)){
(buf[i_49655] = cljs.core.first.call(null,coll_49656));

var G__49657 = (i_49655 + (1));
var G__49658 = cljs.core.next.call(null,coll_49656);
i_49655 = G__49657;
coll_49656 = G__49658;
continue;
} else {
}
break;
}

return buf;
}
});
/**
 * Creates a native Uint16Array of the given size or from `coll`.
 */
thi.ng.typedarrays.core.uint16 = (function thi$ng$typedarrays$core$uint16(size_or_coll){
if(typeof size_or_coll === 'number'){
return (new Uint16Array(size_or_coll));
} else {
var len = cljs.core.count.call(null,size_or_coll);
var buf = (new Uint16Array(len));
var i_49659 = (0);
var coll_49660 = size_or_coll;
while(true){
if((i_49659 < len)){
(buf[i_49659] = cljs.core.first.call(null,coll_49660));

var G__49661 = (i_49659 + (1));
var G__49662 = cljs.core.next.call(null,coll_49660);
i_49659 = G__49661;
coll_49660 = G__49662;
continue;
} else {
}
break;
}

return buf;
}
});
/**
 * Creates a native Int32Array of the given size or from `coll`.
 */
thi.ng.typedarrays.core.int32 = (function thi$ng$typedarrays$core$int32(size_or_coll){
if(typeof size_or_coll === 'number'){
return (new Int32Array(size_or_coll));
} else {
var len = cljs.core.count.call(null,size_or_coll);
var buf = (new Int32Array(len));
var i_49663 = (0);
var coll_49664 = size_or_coll;
while(true){
if((i_49663 < len)){
(buf[i_49663] = cljs.core.first.call(null,coll_49664));

var G__49665 = (i_49663 + (1));
var G__49666 = cljs.core.next.call(null,coll_49664);
i_49663 = G__49665;
coll_49664 = G__49666;
continue;
} else {
}
break;
}

return buf;
}
});
/**
 * Creates a native Uint32Array of the given size or from `coll`.
 */
thi.ng.typedarrays.core.uint32 = (function thi$ng$typedarrays$core$uint32(size_or_coll){
if(typeof size_or_coll === 'number'){
return (new Uint32Array(size_or_coll));
} else {
var len = cljs.core.count.call(null,size_or_coll);
var buf = (new Uint32Array(len));
var i_49667 = (0);
var coll_49668 = size_or_coll;
while(true){
if((i_49667 < len)){
(buf[i_49667] = cljs.core.first.call(null,coll_49668));

var G__49669 = (i_49667 + (1));
var G__49670 = cljs.core.next.call(null,coll_49668);
i_49667 = G__49669;
coll_49668 = G__49670;
continue;
} else {
}
break;
}

return buf;
}
});
/**
 * Creates a native Float32Array of the given size or from `coll`.
 */
thi.ng.typedarrays.core.float32 = (function thi$ng$typedarrays$core$float32(size_or_coll){
if(typeof size_or_coll === 'number'){
return (new Float32Array(size_or_coll));
} else {
var len = cljs.core.count.call(null,size_or_coll);
var buf = (new Float32Array(len));
var i_49671 = (0);
var coll_49672 = size_or_coll;
while(true){
if((i_49671 < len)){
(buf[i_49671] = cljs.core.first.call(null,coll_49672));

var G__49673 = (i_49671 + (1));
var G__49674 = cljs.core.next.call(null,coll_49672);
i_49671 = G__49673;
coll_49672 = G__49674;
continue;
} else {
}
break;
}

return buf;
}
});
/**
 * Creates a native Float64Array of the given size or from `coll`.
 */
thi.ng.typedarrays.core.float64 = (function thi$ng$typedarrays$core$float64(size_or_coll){
if(typeof size_or_coll === 'number'){
return (new Float64Array(size_or_coll));
} else {
var len = cljs.core.count.call(null,size_or_coll);
var buf = (new Float64Array(len));
var i_49675 = (0);
var coll_49676 = size_or_coll;
while(true){
if((i_49675 < len)){
(buf[i_49675] = cljs.core.first.call(null,coll_49676));

var G__49677 = (i_49675 + (1));
var G__49678 = cljs.core.next.call(null,coll_49676);
i_49675 = G__49677;
coll_49676 = G__49678;
continue;
} else {
}
break;
}

return buf;
}
});
/**
 * Returns true if JS runtime supports typed arrays
 */
thi.ng.typedarrays.core.typed_arrays_supported_QMARK_ = (function thi$ng$typedarrays$core$typed_arrays_supported_QMARK_(){
return !(((window["ArrayBuffer"]) == null));
});
thi.ng.typedarrays.core.array_types = cljs.core.PersistentHashMap.fromArrays(["[object Float64Array]","[object Int8Array]","[object Int16Array]","[object Uint8Array]","[object Uint16Array]","[object Uint8ClampedArray]","[object Uint32Array]","[object Float32Array]","[object Int32Array]"],[new cljs.core.Keyword(null,"float64","float64",1881838306),new cljs.core.Keyword(null,"int8","int8",-1834023920),new cljs.core.Keyword(null,"int16","int16",-188764863),new cljs.core.Keyword(null,"uint8","uint8",956521151),new cljs.core.Keyword(null,"uint16","uint16",-588869202),new cljs.core.Keyword(null,"uint8-clamped","uint8-clamped",1439331936),new cljs.core.Keyword(null,"uint32","uint32",-418789486),new cljs.core.Keyword(null,"float32","float32",-2119815775),new cljs.core.Keyword(null,"int32","int32",1718804896)]);
thi.ng.typedarrays.core.array_type = (function thi$ng$typedarrays$core$array_type(x){
if(cljs.core.array_QMARK_.call(null,x)){
return new cljs.core.Keyword(null,"array","array",-2080713842);
} else {
return thi.ng.typedarrays.core.array_types.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''));
}
});
/**
 * Returns truthy value if the given arg is a typed array instance
 */
thi.ng.typedarrays.core.typed_array_QMARK_ = (function thi$ng$typedarrays$core$typed_array_QMARK_(x){
if(cljs.core.sequential_QMARK_.call(null,x)){
return false;
} else {
if(typeof x === 'number'){
return false;
} else {
return thi.ng.typedarrays.core.array_types.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''));

}
}
});

//# sourceMappingURL=core.js.map?rel=1526827208389
