// Compiled by ClojureScript 1.10.238 {}
goog.provide('clojure.core.matrix.impl.mathsops');
goog.require('cljs.core');
clojure.core.matrix.impl.mathsops.to_degrees_STAR_ = (function clojure$core$matrix$impl$mathsops$to_degrees_STAR_(x){
return ((x * 180.0) / Math.PI);
});
clojure.core.matrix.impl.mathsops.to_radians_STAR_ = (function clojure$core$matrix$impl$mathsops$to_radians_STAR_(x){
return ((x * Math.PI) / 180.0);
});
clojure.core.matrix.impl.mathsops.maths_ops = new cljs.core.PersistentVector(null, 21, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"abs","abs",1394505050,null),new cljs.core.Symbol("Math","abs","Math/abs",1400569394,null)),cljs.core.list(new cljs.core.Symbol(null,"acos","acos",353741763,null),new cljs.core.Symbol("Math","acos","Math/acos",357181099,null)),cljs.core.list(new cljs.core.Symbol(null,"asin","asin",-904130570,null),new cljs.core.Symbol("Math","asin","Math/asin",-889681202,null)),cljs.core.list(new cljs.core.Symbol(null,"atan","atan",-1026550135,null),new cljs.core.Symbol("Math","atan","Math/atan",-1027632159,null)),cljs.core.list(new cljs.core.Symbol(null,"cbrt","cbrt",-235140820,null),new cljs.core.Symbol("Math","cbrt","Math/cbrt",-249854508,null)),cljs.core.list(new cljs.core.Symbol(null,"ceil","ceil",-184398425,null),new cljs.core.Symbol("Math","ceil","Math/ceil",-186204017,null)),cljs.core.list(new cljs.core.Symbol(null,"cos","cos",-1452677493,null),new cljs.core.Symbol("Math","cos","Math/cos",-1454544429,null)),cljs.core.list(new cljs.core.Symbol(null,"cosh","cosh",-1962788142,null),new cljs.core.Symbol("Math","cosh","Math/cosh",-1954958918,null)),cljs.core.list(new cljs.core.Symbol(null,"exp","exp",1378825265,null),new cljs.core.Symbol("Math","exp","Math/exp",1383313257,null)),cljs.core.list(new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Symbol("Math","floor","Math/floor",-774722964,null)),cljs.core.list(new cljs.core.Symbol(null,"log","log",45015523,null),new cljs.core.Symbol("Math","log","Math/log",46490779,null)),cljs.core.list(new cljs.core.Symbol(null,"log10","log10",891257803,null),new cljs.core.Symbol("Math","log10","Math/log10",905119267,null)),cljs.core.list(new cljs.core.Symbol(null,"round","round",-645002441,null),new cljs.core.Symbol("Math","rint","Math/rint",-1690470398,null)),cljs.core.list(new cljs.core.Symbol(null,"signum","signum",-2050172354,null),new cljs.core.Symbol("Math","signum","Math/signum",-2077735658,null),new cljs.core.Symbol("Math","sign","Math/sign",-1399301662,null)),cljs.core.list(new cljs.core.Symbol(null,"sin","sin",1721439389,null),new cljs.core.Symbol("Math","sin","Math/sin",1723896309,null)),cljs.core.list(new cljs.core.Symbol(null,"sinh","sinh",-990423302,null),new cljs.core.Symbol("Math","sinh","Math/sinh",-996945022,null)),cljs.core.list(new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),new cljs.core.Symbol("Math","sqrt","Math/sqrt",377394374,null)),cljs.core.list(new cljs.core.Symbol(null,"tan","tan",-1380825876,null),new cljs.core.Symbol("Math","tan","Math/tan",-1378236364,null)),cljs.core.list(new cljs.core.Symbol(null,"tanh","tanh",480481797,null),new cljs.core.Symbol("Math","tanh","Math/tanh",479074141,null)),cljs.core.list(new cljs.core.Symbol(null,"to-degrees","to-degrees",1314929764,null),new cljs.core.Symbol("Math","toDegrees","Math/toDegrees",1654430759,null),new cljs.core.Symbol(null,"to-degrees*","to-degrees*",1603426550,null)),cljs.core.list(new cljs.core.Symbol(null,"to-radians","to-radians",-1564562270,null),new cljs.core.Symbol("Math","toRadians","Math/toRadians",1713709069,null),new cljs.core.Symbol(null,"to-radians*","to-radians*",2099356322,null))], null);
var ret__4533__auto___21850 = /**
 * Define a mathematical operator function.
 */
clojure.core.matrix.impl.mathsops.def_mop = (function clojure$core$matrix$impl$mathsops$def_mop(_AMPERSAND_form,_AMPERSAND_env,op_sym,fn_sym){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",-1606493717,null),null,(1),null)),(new cljs.core.List(null,op_sym,null,(1),null)),(new cljs.core.List(null,cljs.core.vary_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.vary_meta.call(null,new cljs.core.Symbol(null,"x","x",-555367584,null),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,fn_sym,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x","x",-555367584,null),null,(1),null))))),null,(1),null))))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.double$),null,(1),null)))));
});
clojure.core.matrix.impl.mathsops.def_mop.cljs$lang$macro = true;

var ret__4533__auto___21861 = clojure.core.matrix.impl.mathsops.def_mops = (function clojure$core$matrix$impl$mathsops$def_mops(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(function (){var iter__4292__auto__ = (function clojure$core$matrix$impl$mathsops$def_mops_$_iter__21851(s__21852){
return (new cljs.core.LazySeq(null,(function (){
var s__21852__$1 = s__21852;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__21852__$1);
if(temp__5457__auto__){
var s__21852__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21852__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__21852__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__21854 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__21853 = (0);
while(true){
if((i__21853 < size__4291__auto__)){
var vec__21855 = cljs.core._nth.call(null,c__4290__auto__,i__21853);
var sym_SHARP_ = cljs.core.nth.call(null,vec__21855,(0),null);
var op_SHARP_ = cljs.core.nth.call(null,vec__21855,(1),null);
cljs.core.chunk_append.call(null,b__21854,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("clojure.core.matrix.impl.mathsops","def-mop","clojure.core.matrix.impl.mathsops/def-mop",-110958166,null),null,(1),null)),(new cljs.core.List(null,sym_SHARP_,null,(1),null)),(new cljs.core.List(null,op_SHARP_,null,(1),null))))));

var G__21862 = (i__21853 + (1));
i__21853 = G__21862;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21854),clojure$core$matrix$impl$mathsops$def_mops_$_iter__21851.call(null,cljs.core.chunk_rest.call(null,s__21852__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21854),null);
}
} else {
var vec__21858 = cljs.core.first.call(null,s__21852__$2);
var sym_SHARP_ = cljs.core.nth.call(null,vec__21858,(0),null);
var op_SHARP_ = cljs.core.nth.call(null,vec__21858,(1),null);
return cljs.core.cons.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("clojure.core.matrix.impl.mathsops","def-mop","clojure.core.matrix.impl.mathsops/def-mop",-110958166,null),null,(1),null)),(new cljs.core.List(null,sym_SHARP_,null,(1),null)),(new cljs.core.List(null,op_SHARP_,null,(1),null))))),clojure$core$matrix$impl$mathsops$def_mops_$_iter__21851.call(null,cljs.core.rest.call(null,s__21852__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,clojure.core.matrix.impl.mathsops.maths_ops);
})())));
});
clojure.core.matrix.impl.mathsops.def_mops.cljs$lang$macro = true;

clojure.core.matrix.impl.mathsops.abs = (function clojure$core$matrix$impl$mathsops$abs(x){
return Math.abs(x);
});

clojure.core.matrix.impl.mathsops.acos = (function clojure$core$matrix$impl$mathsops$acos(x){
return Math.acos(x);
});

clojure.core.matrix.impl.mathsops.asin = (function clojure$core$matrix$impl$mathsops$asin(x){
return Math.asin(x);
});

clojure.core.matrix.impl.mathsops.atan = (function clojure$core$matrix$impl$mathsops$atan(x){
return Math.atan(x);
});

clojure.core.matrix.impl.mathsops.cbrt = (function clojure$core$matrix$impl$mathsops$cbrt(x){
return Math.cbrt(x);
});

clojure.core.matrix.impl.mathsops.ceil = (function clojure$core$matrix$impl$mathsops$ceil(x){
return Math.ceil(x);
});

clojure.core.matrix.impl.mathsops.cos = (function clojure$core$matrix$impl$mathsops$cos(x){
return Math.cos(x);
});

clojure.core.matrix.impl.mathsops.cosh = (function clojure$core$matrix$impl$mathsops$cosh(x){
return Math.cosh(x);
});

clojure.core.matrix.impl.mathsops.exp = (function clojure$core$matrix$impl$mathsops$exp(x){
return Math.exp(x);
});

clojure.core.matrix.impl.mathsops.floor = (function clojure$core$matrix$impl$mathsops$floor(x){
return Math.floor(x);
});

clojure.core.matrix.impl.mathsops.log = (function clojure$core$matrix$impl$mathsops$log(x){
return Math.log(x);
});

clojure.core.matrix.impl.mathsops.log10 = (function clojure$core$matrix$impl$mathsops$log10(x){
return Math.log10(x);
});

clojure.core.matrix.impl.mathsops.round = (function clojure$core$matrix$impl$mathsops$round(x){
return Math.rint(x);
});

clojure.core.matrix.impl.mathsops.signum = (function clojure$core$matrix$impl$mathsops$signum(x){
return Math.signum(x);
});

clojure.core.matrix.impl.mathsops.sin = (function clojure$core$matrix$impl$mathsops$sin(x){
return Math.sin(x);
});

clojure.core.matrix.impl.mathsops.sinh = (function clojure$core$matrix$impl$mathsops$sinh(x){
return Math.sinh(x);
});

clojure.core.matrix.impl.mathsops.sqrt = (function clojure$core$matrix$impl$mathsops$sqrt(x){
return Math.sqrt(x);
});

clojure.core.matrix.impl.mathsops.tan = (function clojure$core$matrix$impl$mathsops$tan(x){
return Math.tan(x);
});

clojure.core.matrix.impl.mathsops.tanh = (function clojure$core$matrix$impl$mathsops$tanh(x){
return Math.tanh(x);
});

clojure.core.matrix.impl.mathsops.to_degrees = (function clojure$core$matrix$impl$mathsops$to_degrees(x){
return Math.toDegrees(x);
});

clojure.core.matrix.impl.mathsops.to_radians = (function clojure$core$matrix$impl$mathsops$to_radians(x){
return Math.toRadians(x);
});

//# sourceMappingURL=mathsops.js.map?rel=1526826983409
