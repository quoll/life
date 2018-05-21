// Compiled by ClojureScript 1.10.238 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__36687__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__36684 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__36685 = cljs.core.seq.call(null,vec__36684);
var first__36686 = cljs.core.first.call(null,seq__36685);
var seq__36685__$1 = cljs.core.next.call(null,seq__36685);
var tag = first__36686;
var body = seq__36685__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args))], null),cljs.core.rest.call(null,body));
} else {
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first.call(null,args)], null),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__36687 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36688__i = 0, G__36688__a = new Array(arguments.length -  0);
while (G__36688__i < G__36688__a.length) {G__36688__a[G__36688__i] = arguments[G__36688__i + 0]; ++G__36688__i;}
  args = new cljs.core.IndexedSeq(G__36688__a,0,null);
} 
return G__36687__delegate.call(this,args);};
G__36687.cljs$lang$maxFixedArity = 0;
G__36687.cljs$lang$applyTo = (function (arglist__36689){
var args = cljs.core.seq(arglist__36689);
return G__36687__delegate(args);
});
G__36687.cljs$core$IFn$_invoke$arity$variadic = G__36687__delegate;
return G__36687;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4292__auto__ = (function sablono$core$update_arglists_$_iter__36690(s__36691){
return (new cljs.core.LazySeq(null,(function (){
var s__36691__$1 = s__36691;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__36691__$1);
if(temp__5457__auto__){
var s__36691__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36691__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__36691__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__36693 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__36692 = (0);
while(true){
if((i__36692 < size__4291__auto__)){
var args = cljs.core._nth.call(null,c__4290__auto__,i__36692);
cljs.core.chunk_append.call(null,b__36693,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__36694 = (i__36692 + (1));
i__36692 = G__36694;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36693),sablono$core$update_arglists_$_iter__36690.call(null,cljs.core.chunk_rest.call(null,s__36691__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36693),null);
}
} else {
var args = cljs.core.first.call(null,s__36691__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__36690.call(null,cljs.core.rest.call(null,s__36691__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__4502__auto__ = [];
var len__4499__auto___36700 = arguments.length;
var i__4500__auto___36701 = (0);
while(true){
if((i__4500__auto___36701 < len__4499__auto___36700)){
args__4502__auto__.push((arguments[i__4500__auto___36701]));

var G__36702 = (i__4500__auto___36701 + (1));
i__4500__auto___36701 = G__36702;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4292__auto__ = (function sablono$core$iter__36696(s__36697){
return (new cljs.core.LazySeq(null,(function (){
var s__36697__$1 = s__36697;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__36697__$1);
if(temp__5457__auto__){
var s__36697__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36697__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__36697__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__36699 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__36698 = (0);
while(true){
if((i__36698 < size__4291__auto__)){
var style = cljs.core._nth.call(null,c__4290__auto__,i__36698);
cljs.core.chunk_append.call(null,b__36699,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__36703 = (i__36698 + (1));
i__36698 = G__36703;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36699),sablono$core$iter__36696.call(null,cljs.core.chunk_rest.call(null,s__36697__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36699),null);
}
} else {
var style = cljs.core.first.call(null,s__36697__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__36696.call(null,cljs.core.rest.call(null,s__36697__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
sablono.core.include_css.cljs$lang$applyTo = (function (seq36695){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36695));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",({"src": src})));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to36704 = (function sablono$core$link_to36704(var_args){
var args__4502__auto__ = [];
var len__4499__auto___36707 = arguments.length;
var i__4500__auto___36708 = (0);
while(true){
if((i__4500__auto___36708 < len__4499__auto___36707)){
args__4502__auto__.push((arguments[i__4500__auto___36708]));

var G__36709 = (i__4500__auto___36708 + (1));
i__4500__auto___36708 = G__36709;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to36704.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

sablono.core.link_to36704.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to36704.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.link_to36704.cljs$lang$applyTo = (function (seq36705){
var G__36706 = cljs.core.first.call(null,seq36705);
var seq36705__$1 = cljs.core.next.call(null,seq36705);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36706,seq36705__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to36704);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to36710 = (function sablono$core$mail_to36710(var_args){
var args__4502__auto__ = [];
var len__4499__auto___36717 = arguments.length;
var i__4500__auto___36718 = (0);
while(true){
if((i__4500__auto___36718 < len__4499__auto___36717)){
args__4502__auto__.push((arguments[i__4500__auto___36718]));

var G__36719 = (i__4500__auto___36718 + (1));
i__4500__auto___36718 = G__36719;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to36710.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

sablono.core.mail_to36710.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__36713){
var vec__36714 = p__36713;
var content = cljs.core.nth.call(null,vec__36714,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__3922__auto__ = content;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to36710.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.mail_to36710.cljs$lang$applyTo = (function (seq36711){
var G__36712 = cljs.core.first.call(null,seq36711);
var seq36711__$1 = cljs.core.next.call(null,seq36711);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36712,seq36711__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to36710);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list36720 = (function sablono$core$unordered_list36720(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4292__auto__ = (function sablono$core$unordered_list36720_$_iter__36721(s__36722){
return (new cljs.core.LazySeq(null,(function (){
var s__36722__$1 = s__36722;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__36722__$1);
if(temp__5457__auto__){
var s__36722__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36722__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__36722__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__36724 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__36723 = (0);
while(true){
if((i__36723 < size__4291__auto__)){
var x = cljs.core._nth.call(null,c__4290__auto__,i__36723);
cljs.core.chunk_append.call(null,b__36724,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__36725 = (i__36723 + (1));
i__36723 = G__36725;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36724),sablono$core$unordered_list36720_$_iter__36721.call(null,cljs.core.chunk_rest.call(null,s__36722__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36724),null);
}
} else {
var x = cljs.core.first.call(null,s__36722__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list36720_$_iter__36721.call(null,cljs.core.rest.call(null,s__36722__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list36720);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list36726 = (function sablono$core$ordered_list36726(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4292__auto__ = (function sablono$core$ordered_list36726_$_iter__36727(s__36728){
return (new cljs.core.LazySeq(null,(function (){
var s__36728__$1 = s__36728;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__36728__$1);
if(temp__5457__auto__){
var s__36728__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36728__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__36728__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__36730 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__36729 = (0);
while(true){
if((i__36729 < size__4291__auto__)){
var x = cljs.core._nth.call(null,c__4290__auto__,i__36729);
cljs.core.chunk_append.call(null,b__36730,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__36731 = (i__36729 + (1));
i__36729 = G__36731;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36730),sablono$core$ordered_list36726_$_iter__36727.call(null,cljs.core.chunk_rest.call(null,s__36728__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36730),null);
}
} else {
var x = cljs.core.first.call(null,s__36728__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list36726_$_iter__36727.call(null,cljs.core.rest.call(null,s__36728__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list36726);
/**
 * Create an image element.
 */
sablono.core.image36732 = (function sablono$core$image36732(var_args){
var G__36734 = arguments.length;
switch (G__36734) {
case 1:
return sablono.core.image36732.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image36732.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.image36732.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image36732.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image36732.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image36732);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__36736_SHARP_,p2__36737_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__36736_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__36737_SHARP_),"]"].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__36738_SHARP_,p2__36739_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__36738_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__36739_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__36741 = arguments.length;
switch (G__36741) {
case 2:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (type,name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
});

sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__3922__auto__ = value;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.input_field_STAR_.cljs$lang$maxFixedArity = 3;

/**
 * Creates a color input field.
 */
sablono.core.color_field36743 = (function sablono$core$color_field36743(var_args){
var G__36745 = arguments.length;
switch (G__36745) {
case 1:
return sablono.core.color_field36743.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field36743.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.color_field36743.cljs$core$IFn$_invoke$arity$1 = (function (name__36674__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__36674__auto__);
});

sablono.core.color_field36743.cljs$core$IFn$_invoke$arity$2 = (function (name__36674__auto__,value__36675__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__36674__auto__,value__36675__auto__);
});

sablono.core.color_field36743.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field36743);

/**
 * Creates a date input field.
 */
sablono.core.date_field36746 = (function sablono$core$date_field36746(var_args){
var G__36748 = arguments.length;
switch (G__36748) {
case 1:
return sablono.core.date_field36746.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field36746.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.date_field36746.cljs$core$IFn$_invoke$arity$1 = (function (name__36674__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__36674__auto__);
});

sablono.core.date_field36746.cljs$core$IFn$_invoke$arity$2 = (function (name__36674__auto__,value__36675__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__36674__auto__,value__36675__auto__);
});

sablono.core.date_field36746.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field36746);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field36749 = (function sablono$core$datetime_field36749(var_args){
var G__36751 = arguments.length;
switch (G__36751) {
case 1:
return sablono.core.datetime_field36749.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field36749.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_field36749.cljs$core$IFn$_invoke$arity$1 = (function (name__36674__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__36674__auto__);
});

sablono.core.datetime_field36749.cljs$core$IFn$_invoke$arity$2 = (function (name__36674__auto__,value__36675__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__36674__auto__,value__36675__auto__);
});

sablono.core.datetime_field36749.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field36749);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field36752 = (function sablono$core$datetime_local_field36752(var_args){
var G__36754 = arguments.length;
switch (G__36754) {
case 1:
return sablono.core.datetime_local_field36752.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field36752.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_local_field36752.cljs$core$IFn$_invoke$arity$1 = (function (name__36674__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__36674__auto__);
});

sablono.core.datetime_local_field36752.cljs$core$IFn$_invoke$arity$2 = (function (name__36674__auto__,value__36675__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__36674__auto__,value__36675__auto__);
});

sablono.core.datetime_local_field36752.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field36752);

/**
 * Creates a email input field.
 */
sablono.core.email_field36755 = (function sablono$core$email_field36755(var_args){
var G__36757 = arguments.length;
switch (G__36757) {
case 1:
return sablono.core.email_field36755.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field36755.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.email_field36755.cljs$core$IFn$_invoke$arity$1 = (function (name__36674__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__36674__auto__);
});

sablono.core.email_field36755.cljs$core$IFn$_invoke$arity$2 = (function (name__36674__auto__,value__36675__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__36674__auto__,value__36675__auto__);
});

sablono.core.email_field36755.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field36755);

/**
 * Creates a file input field.
 */
sablono.core.file_field36758 = (function sablono$core$file_field36758(var_args){
var G__36760 = arguments.length;
switch (G__36760) {
case 1:
return sablono.core.file_field36758.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field36758.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.file_field36758.cljs$core$IFn$_invoke$arity$1 = (function (name__36674__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__36674__auto__);
});

sablono.core.file_field36758.cljs$core$IFn$_invoke$arity$2 = (function (name__36674__auto__,value__36675__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__36674__auto__,value__36675__auto__);
});

sablono.core.file_field36758.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field36758);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field36761 = (function sablono$core$hidden_field36761(var_args){
var G__36763 = arguments.length;
switch (G__36763) {
case 1:
return sablono.core.hidden_field36761.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field36761.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.hidden_field36761.cljs$core$IFn$_invoke$arity$1 = (function (name__36674__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__36674__auto__);
});

sablono.core.hidden_field36761.cljs$core$IFn$_invoke$arity$2 = (function (name__36674__auto__,value__36675__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__36674__auto__,value__36675__auto__);
});

sablono.core.hidden_field36761.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field36761);

/**
 * Creates a month input field.
 */
sablono.core.month_field36764 = (function sablono$core$month_field36764(var_args){
var G__36766 = arguments.length;
switch (G__36766) {
case 1:
return sablono.core.month_field36764.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field36764.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.month_field36764.cljs$core$IFn$_invoke$arity$1 = (function (name__36674__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__36674__auto__);
});

sablono.core.month_field36764.cljs$core$IFn$_invoke$arity$2 = (function (name__36674__auto__,value__36675__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__36674__auto__,value__36675__auto__);
});

sablono.core.month_field36764.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field36764);

/**
 * Creates a number input field.
 */
sablono.core.number_field36767 = (function sablono$core$number_field36767(var_args){
var G__36769 = arguments.length;
switch (G__36769) {
case 1:
return sablono.core.number_field36767.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field36767.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.number_field36767.cljs$core$IFn$_invoke$arity$1 = (function (name__36674__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__36674__auto__);
});

sablono.core.number_field36767.cljs$core$IFn$_invoke$arity$2 = (function (name__36674__auto__,value__36675__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__36674__auto__,value__36675__auto__);
});

sablono.core.number_field36767.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field36767);

/**
 * Creates a password input field.
 */
sablono.core.password_field36770 = (function sablono$core$password_field36770(var_args){
var G__36772 = arguments.length;
switch (G__36772) {
case 1:
return sablono.core.password_field36770.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field36770.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.password_field36770.cljs$core$IFn$_invoke$arity$1 = (function (name__36674__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__36674__auto__);
});

sablono.core.password_field36770.cljs$core$IFn$_invoke$arity$2 = (function (name__36674__auto__,value__36675__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__36674__auto__,value__36675__auto__);
});

sablono.core.password_field36770.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field36770);

/**
 * Creates a range input field.
 */
sablono.core.range_field36773 = (function sablono$core$range_field36773(var_args){
var G__36775 = arguments.length;
switch (G__36775) {
case 1:
return sablono.core.range_field36773.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field36773.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.range_field36773.cljs$core$IFn$_invoke$arity$1 = (function (name__36674__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__36674__auto__);
});

sablono.core.range_field36773.cljs$core$IFn$_invoke$arity$2 = (function (name__36674__auto__,value__36675__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__36674__auto__,value__36675__auto__);
});

sablono.core.range_field36773.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field36773);

/**
 * Creates a search input field.
 */
sablono.core.search_field36776 = (function sablono$core$search_field36776(var_args){
var G__36778 = arguments.length;
switch (G__36778) {
case 1:
return sablono.core.search_field36776.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field36776.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.search_field36776.cljs$core$IFn$_invoke$arity$1 = (function (name__36674__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__36674__auto__);
});

sablono.core.search_field36776.cljs$core$IFn$_invoke$arity$2 = (function (name__36674__auto__,value__36675__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__36674__auto__,value__36675__auto__);
});

sablono.core.search_field36776.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field36776);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field36779 = (function sablono$core$tel_field36779(var_args){
var G__36781 = arguments.length;
switch (G__36781) {
case 1:
return sablono.core.tel_field36779.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field36779.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.tel_field36779.cljs$core$IFn$_invoke$arity$1 = (function (name__36674__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__36674__auto__);
});

sablono.core.tel_field36779.cljs$core$IFn$_invoke$arity$2 = (function (name__36674__auto__,value__36675__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__36674__auto__,value__36675__auto__);
});

sablono.core.tel_field36779.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field36779);

/**
 * Creates a text input field.
 */
sablono.core.text_field36782 = (function sablono$core$text_field36782(var_args){
var G__36784 = arguments.length;
switch (G__36784) {
case 1:
return sablono.core.text_field36782.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field36782.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_field36782.cljs$core$IFn$_invoke$arity$1 = (function (name__36674__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__36674__auto__);
});

sablono.core.text_field36782.cljs$core$IFn$_invoke$arity$2 = (function (name__36674__auto__,value__36675__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__36674__auto__,value__36675__auto__);
});

sablono.core.text_field36782.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field36782);

/**
 * Creates a time input field.
 */
sablono.core.time_field36785 = (function sablono$core$time_field36785(var_args){
var G__36787 = arguments.length;
switch (G__36787) {
case 1:
return sablono.core.time_field36785.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field36785.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.time_field36785.cljs$core$IFn$_invoke$arity$1 = (function (name__36674__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__36674__auto__);
});

sablono.core.time_field36785.cljs$core$IFn$_invoke$arity$2 = (function (name__36674__auto__,value__36675__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__36674__auto__,value__36675__auto__);
});

sablono.core.time_field36785.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field36785);

/**
 * Creates a url input field.
 */
sablono.core.url_field36788 = (function sablono$core$url_field36788(var_args){
var G__36790 = arguments.length;
switch (G__36790) {
case 1:
return sablono.core.url_field36788.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field36788.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.url_field36788.cljs$core$IFn$_invoke$arity$1 = (function (name__36674__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__36674__auto__);
});

sablono.core.url_field36788.cljs$core$IFn$_invoke$arity$2 = (function (name__36674__auto__,value__36675__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__36674__auto__,value__36675__auto__);
});

sablono.core.url_field36788.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field36788);

/**
 * Creates a week input field.
 */
sablono.core.week_field36791 = (function sablono$core$week_field36791(var_args){
var G__36793 = arguments.length;
switch (G__36793) {
case 1:
return sablono.core.week_field36791.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field36791.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.week_field36791.cljs$core$IFn$_invoke$arity$1 = (function (name__36674__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__36674__auto__);
});

sablono.core.week_field36791.cljs$core$IFn$_invoke$arity$2 = (function (name__36674__auto__,value__36675__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__36674__auto__,value__36675__auto__);
});

sablono.core.week_field36791.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field36791);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box36811 = (function sablono$core$check_box36811(var_args){
var G__36813 = arguments.length;
switch (G__36813) {
case 1:
return sablono.core.check_box36811.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box36811.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box36811.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.check_box36811.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
});

sablono.core.check_box36811.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box36811.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box36811.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box36811);
/**
 * Creates a radio button.
 */
sablono.core.radio_button36815 = (function sablono$core$radio_button36815(var_args){
var G__36817 = arguments.length;
switch (G__36817) {
case 1:
return sablono.core.radio_button36815.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button36815.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button36815.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.radio_button36815.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group))], null)], null);
});

sablono.core.radio_button36815.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group)),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button36815.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button36815.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button36815);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options36819 = (function sablono$core$select_options36819(coll){
var iter__4292__auto__ = (function sablono$core$select_options36819_$_iter__36820(s__36821){
return (new cljs.core.LazySeq(null,(function (){
var s__36821__$1 = s__36821;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__36821__$1);
if(temp__5457__auto__){
var s__36821__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36821__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__36821__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__36823 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__36822 = (0);
while(true){
if((i__36822 < size__4291__auto__)){
var x = cljs.core._nth.call(null,c__4290__auto__,i__36822);
cljs.core.chunk_append.call(null,b__36823,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__36824 = x;
var text = cljs.core.nth.call(null,vec__36824,(0),null);
var val = cljs.core.nth.call(null,vec__36824,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__36824,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options36819.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__36830 = (i__36822 + (1));
i__36822 = G__36830;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36823),sablono$core$select_options36819_$_iter__36820.call(null,cljs.core.chunk_rest.call(null,s__36821__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36823),null);
}
} else {
var x = cljs.core.first.call(null,s__36821__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__36827 = x;
var text = cljs.core.nth.call(null,vec__36827,(0),null);
var val = cljs.core.nth.call(null,vec__36827,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__36827,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options36819.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options36819_$_iter__36820.call(null,cljs.core.rest.call(null,s__36821__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options36819);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down36831 = (function sablono$core$drop_down36831(var_args){
var G__36833 = arguments.length;
switch (G__36833) {
case 2:
return sablono.core.drop_down36831.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down36831.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.drop_down36831.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down36831.call(null,name,options,null);
});

sablono.core.drop_down36831.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down36831.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down36831);
/**
 * Creates a text area element.
 */
sablono.core.text_area36835 = (function sablono$core$text_area36835(var_args){
var G__36837 = arguments.length;
switch (G__36837) {
case 1:
return sablono.core.text_area36835.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area36835.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_area36835.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
});

sablono.core.text_area36835.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__3922__auto__ = value;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area36835.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area36835);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label36839 = (function sablono$core$label36839(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label36839);
/**
 * Creates a submit button.
 */
sablono.core.submit_button36840 = (function sablono$core$submit_button36840(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button36840);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button36841 = (function sablono$core$reset_button36841(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button36841);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to36842 = (function sablono$core$form_to36842(var_args){
var args__4502__auto__ = [];
var len__4499__auto___36849 = arguments.length;
var i__4500__auto___36850 = (0);
while(true){
if((i__4500__auto___36850 < len__4499__auto___36849)){
args__4502__auto__.push((arguments[i__4500__auto___36850]));

var G__36851 = (i__4500__auto___36850 + (1));
i__4500__auto___36850 = G__36851;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to36842.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

sablono.core.form_to36842.cljs$core$IFn$_invoke$arity$variadic = (function (p__36845,body){
var vec__36846 = p__36845;
var method = cljs.core.nth.call(null,vec__36846,(0),null);
var action = cljs.core.nth.call(null,vec__36846,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to36842.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.form_to36842.cljs$lang$applyTo = (function (seq36843){
var G__36844 = cljs.core.first.call(null,seq36843);
var seq36843__$1 = cljs.core.next.call(null,seq36843);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36844,seq36843__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to36842);

//# sourceMappingURL=core.js.map?rel=1526826992263
