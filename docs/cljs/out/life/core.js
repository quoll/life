// Compiled by ClojureScript 1.10.238 {}
goog.provide('life.core');
goog.require('cljs.core');
goog.require('clojure.core.matrix');
goog.require('life.matrix');
goog.require('clojure.core.matrix.operators');
life.core.init = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [(7),null,(1),null,(4),null,(3),null,(2),null], null), null);
life.core.r = clojure.core.matrix.emap.call(null,life.matrix.nbool.call(null,life.core.init),clojure.core.matrix.reshape.call(null,clojure.core.matrix.array.call(null,cljs.core.range.call(null,(9))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(3)], null)));
life.core.R = clojure.core.matrix.rotate.call(null,clojure.core.matrix.rotate.call(null,life.matrix.takeof.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(7)], null),life.core.r),(1),(-2)),(0),(-1));
life.core.RR = clojure.core.matrix.rotate.call(null,clojure.core.matrix.rotate.call(null,life.matrix.takeof.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(15),(35)], null),life.core.R),(1),(20)),(0),(10));
life.core.life = (function life$core$life(o){
return cljs.core.apply.call(null,life.matrix.or_STAR_,cljs.core.map.call(null,life.matrix.and_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),o], null),cljs.core.map.call(null,life.matrix._EQ_x.call(null,cljs.core.apply.call(null,clojure.core.matrix.add,(function (){var iter__4292__auto__ = (function life$core$life_$_iter__13166(s__13167){
return (new cljs.core.LazySeq(null,(function (){
var s__13167__$1 = s__13167;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__13167__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var y = cljs.core.first.call(null,xs__6012__auto__);
var iterys__4288__auto__ = ((function (s__13167__$1,y,xs__6012__auto__,temp__5457__auto__){
return (function life$core$life_$_iter__13166_$_iter__13168(s__13169){
return (new cljs.core.LazySeq(null,((function (s__13167__$1,y,xs__6012__auto__,temp__5457__auto__){
return (function (){
var s__13169__$1 = s__13169;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__13169__$1);
if(temp__5457__auto____$1){
var s__13169__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13169__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__13169__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__13171 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__13170 = (0);
while(true){
if((i__13170 < size__4291__auto__)){
var x = cljs.core._nth.call(null,c__4290__auto__,i__13170);
cljs.core.chunk_append.call(null,b__13171,clojure.core.matrix.rotate.call(null,clojure.core.matrix.rotate.call(null,o,(1),x),(0),y));

var G__13172 = (i__13170 + (1));
i__13170 = G__13172;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13171),life$core$life_$_iter__13166_$_iter__13168.call(null,cljs.core.chunk_rest.call(null,s__13169__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13171),null);
}
} else {
var x = cljs.core.first.call(null,s__13169__$2);
return cljs.core.cons.call(null,clojure.core.matrix.rotate.call(null,clojure.core.matrix.rotate.call(null,o,(1),x),(0),y),life$core$life_$_iter__13166_$_iter__13168.call(null,cljs.core.rest.call(null,s__13169__$2)));
}
} else {
return null;
}
break;
}
});})(s__13167__$1,y,xs__6012__auto__,temp__5457__auto__))
,null,null));
});})(s__13167__$1,y,xs__6012__auto__,temp__5457__auto__))
;
var fs__4289__auto__ = cljs.core.seq.call(null,iterys__4288__auto__.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(-1)], null)));
if(fs__4289__auto__){
return cljs.core.concat.call(null,fs__4289__auto__,life$core$life_$_iter__13166.call(null,cljs.core.rest.call(null,s__13167__$1)));
} else {
var G__13173 = cljs.core.rest.call(null,s__13167__$1);
s__13167__$1 = G__13173;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(-1)], null));
})())),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null))));
});

//# sourceMappingURL=core.js.map
