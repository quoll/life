// Compiled by ClojureScript 1.10.238 {}
goog.provide('life.page');
goog.require('cljs.core');
goog.require('sablono.core');
goog.require('clojure.core.matrix');
goog.require('life.core');
/**
 * size of a square
 */
life.page.sq = (25);
life.page.default_width = (700);
life.page.default_height = (300);
life.page.life_color = "blue";
life.page.next_life = (function life$page$next_life(app_state){
return (function (){
var map__14836 = cljs.core.deref.call(null,app_state);
var map__14836__$1 = ((((!((map__14836 == null)))?(((((map__14836.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14836.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14836):map__14836);
var data = cljs.core.get.call(null,map__14836__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var gen = cljs.core.get.call(null,map__14836__$1,new cljs.core.Keyword(null,"gen","gen",142575302));
var timer = cljs.core.get.call(null,map__14836__$1,new cljs.core.Keyword(null,"timer","timer",-1266967739));
var next_gen = life.core.life.call(null,data);
if(cljs.core._EQ_.call(null,data,next_gen)){
cljs.core.swap_BANG_.call(null,app_state,cljs.core.assoc,new cljs.core.Keyword(null,"finished","finished",-1018867731),true);

return clearInterval(timer);
} else {
return cljs.core.swap_BANG_.call(null,app_state,cljs.core.assoc,new cljs.core.Keyword(null,"data","data",-232669377),next_gen,new cljs.core.Keyword(null,"gen","gen",142575302),(gen + (1)));
}
});
});
life.page.flip_cell = (function life$page$flip_cell(app_state,x,y,v){
cljs.core.swap_BANG_.call(null,app_state,cljs.core.update,new cljs.core.Keyword(null,"data","data",-232669377),(function (p1__14838_SHARP_){
return clojure.core.matrix.mset.call(null,p1__14838_SHARP_,y,x,((1) - v));
}));

if(cljs.core.truth_(new cljs.core.Keyword(null,"finished","finished",-1018867731).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state)))){
cljs.core.swap_BANG_.call(null,app_state,cljs.core.dissoc,new cljs.core.Keyword(null,"finished","finished",-1018867731));

return setInterval(life.page.next_life.call(null,app_state),(125));
} else {
return null;
}
});
life.page.field = (function life$page$field(app_state){
var data = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state));
var vec__14839 = clojure.core.matrix.shape.call(null,data);
var height = cljs.core.nth.call(null,vec__14839,(0),null);
var width = cljs.core.nth.call(null,vec__14839,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),((2) + life.page.default_width),new cljs.core.Keyword(null,"height","height",1025178622),((2) + life.page.default_height)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"width","width",-384071477),(life.page.default_width + (1)),new cljs.core.Keyword(null,"height","height",1025178622),(life.page.default_height + (1)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(1),new cljs.core.Keyword(null,"fill","fill",883462889),"white"], null)], null)], null),cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),life.page.default_width,new cljs.core.Keyword(null,"height","height",1025178622),life.page.default_height,new cljs.core.Keyword(null,"x","x",2099068185),(1),new cljs.core.Keyword(null,"y","y",-1757859776),(1)], null)], null),(function (){var iter__4292__auto__ = ((function (data,vec__14839,height,width){
return (function life$page$field_$_iter__14842(s__14843){
return (new cljs.core.LazySeq(null,((function (data,vec__14839,height,width){
return (function (){
var s__14843__$1 = s__14843;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__14843__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var x = cljs.core.first.call(null,xs__6012__auto__);
var iterys__4288__auto__ = ((function (s__14843__$1,x,xs__6012__auto__,temp__5457__auto__,data,vec__14839,height,width){
return (function life$page$field_$_iter__14842_$_iter__14844(s__14845){
return (new cljs.core.LazySeq(null,((function (s__14843__$1,x,xs__6012__auto__,temp__5457__auto__,data,vec__14839,height,width){
return (function (){
var s__14845__$1 = s__14845;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__14845__$1);
if(temp__5457__auto____$1){
var s__14845__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14845__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__14845__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__14847 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__14846 = (0);
while(true){
if((i__14846 < size__4291__auto__)){
var y = cljs.core._nth.call(null,c__4290__auto__,i__14846);
var v = clojure.core.matrix.mget.call(null,data,y,x);
cljs.core.chunk_append.call(null,b__14847,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),(x * life.page.sq),new cljs.core.Keyword(null,"y","y",-1757859776),(y * life.page.sq),new cljs.core.Keyword(null,"width","width",-384071477),life.page.sq,new cljs.core.Keyword(null,"height","height",1025178622),life.page.sq,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill","fill",883462889),(((v === (0)))?"white":"blue"),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"white",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(1)], null),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (i__14846,s__14843__$1,v,y,c__4290__auto__,size__4291__auto__,b__14847,s__14845__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__,data,vec__14839,height,width){
return (function (){
return life.page.flip_cell.call(null,app_state,x,y,v);
});})(i__14846,s__14843__$1,v,y,c__4290__auto__,size__4291__auto__,b__14847,s__14845__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__,data,vec__14839,height,width))
], null)], null));

var G__14848 = (i__14846 + (1));
i__14846 = G__14848;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14847),life$page$field_$_iter__14842_$_iter__14844.call(null,cljs.core.chunk_rest.call(null,s__14845__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14847),null);
}
} else {
var y = cljs.core.first.call(null,s__14845__$2);
var v = clojure.core.matrix.mget.call(null,data,y,x);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),(x * life.page.sq),new cljs.core.Keyword(null,"y","y",-1757859776),(y * life.page.sq),new cljs.core.Keyword(null,"width","width",-384071477),life.page.sq,new cljs.core.Keyword(null,"height","height",1025178622),life.page.sq,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill","fill",883462889),(((v === (0)))?"white":"blue"),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"white",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(1)], null),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (s__14843__$1,v,y,s__14845__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__,data,vec__14839,height,width){
return (function (){
return life.page.flip_cell.call(null,app_state,x,y,v);
});})(s__14843__$1,v,y,s__14845__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__,data,vec__14839,height,width))
], null)], null),life$page$field_$_iter__14842_$_iter__14844.call(null,cljs.core.rest.call(null,s__14845__$2)));
}
} else {
return null;
}
break;
}
});})(s__14843__$1,x,xs__6012__auto__,temp__5457__auto__,data,vec__14839,height,width))
,null,null));
});})(s__14843__$1,x,xs__6012__auto__,temp__5457__auto__,data,vec__14839,height,width))
;
var fs__4289__auto__ = cljs.core.seq.call(null,iterys__4288__auto__.call(null,cljs.core.range.call(null,height)));
if(fs__4289__auto__){
return cljs.core.concat.call(null,fs__4289__auto__,life$page$field_$_iter__14842.call(null,cljs.core.rest.call(null,s__14843__$1)));
} else {
var G__14849 = cljs.core.rest.call(null,s__14843__$1);
s__14843__$1 = G__14849;
continue;
}
} else {
return null;
}
break;
}
});})(data,vec__14839,height,width))
,null,null));
});})(data,vec__14839,height,width))
;
return iter__4292__auto__.call(null,cljs.core.range.call(null,width));
})()))], null);
});
life.page.display_data = (function life$page$display_data(app_state){
var map__14850 = cljs.core.deref.call(null,app_state);
var map__14850__$1 = ((((!((map__14850 == null)))?(((((map__14850.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14850.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14850):map__14850);
var gen = cljs.core.get.call(null,map__14850__$1,new cljs.core.Keyword(null,"gen","gen",142575302));
var attrs14852 = life.page.field.call(null,app_state);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs14852))?sablono.interpreter.attributes.call(null,attrs14852):null),((cljs.core.map_QMARK_.call(null,attrs14852))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.createElement("br",null),React.createElement("p",null,"Generation: ",sablono.interpreter.interpret.call(null,gen))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs14852),React.createElement("br",null),React.createElement("p",null,"Generation: ",sablono.interpreter.interpret.call(null,gen))], null)));
});

//# sourceMappingURL=page.js.map
