// Compiled by ClojureScript 1.10.238 {}
goog.provide('sablono.normalize');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('sablono.util');
/**
 * Removes all map entries where the value of the entry is empty.
 */
sablono.normalize.compact_map = (function sablono$normalize$compact_map(m){
if(cljs.core.truth_(m)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.call(null,(function (p__34978){
var vec__34979 = p__34978;
var _ = cljs.core.nth.call(null,vec__34979,(0),null);
var v = cljs.core.nth.call(null,vec__34979,(1),null);
return cljs.core.empty_QMARK_.call(null,v);
})),m);
} else {
return null;
}
});
sablono.normalize.class_name = (function sablono$normalize$class_name(x){
if(typeof x === 'string'){
return x;
} else {
if((x instanceof cljs.core.Keyword)){
return cljs.core.name.call(null,x);
} else {
return x;

}
}
});
/**
 * Returns true if `x` is a map lookup form, otherwise false.
 */
sablono.normalize.map_lookup_QMARK_ = (function sablono$normalize$map_lookup_QMARK_(x){
return ((cljs.core.list_QMARK_.call(null,x)) && ((cljs.core.first.call(null,x) instanceof cljs.core.Keyword)));
});
/**
 * Normalize `class` into a vector of classes.
 */
sablono.normalize.class$ = (function sablono$normalize$class(class$){
if((class$ == null)){
return null;
} else {
if(cljs.core.truth_(sablono.normalize.map_lookup_QMARK_.call(null,class$))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [class$], null);
} else {
if(cljs.core.list_QMARK_.call(null,class$)){
if((cljs.core.first.call(null,class$) instanceof cljs.core.Symbol)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [class$], null);
} else {
return cljs.core.map.call(null,sablono.normalize.class_name,class$);
}
} else {
if((class$ instanceof cljs.core.Symbol)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [class$], null);
} else {
if(typeof class$ === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [class$], null);
} else {
if((class$ instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.normalize.class_name.call(null,class$)], null);
} else {
if(((((cljs.core.set_QMARK_.call(null,class$)) || (cljs.core.sequential_QMARK_.call(null,class$)))) && (cljs.core.every_QMARK_.call(null,(function (p1__34982_SHARP_){
return (((p1__34982_SHARP_ instanceof cljs.core.Keyword)) || (typeof p1__34982_SHARP_ === 'string'));
}),class$)))){
return cljs.core.mapv.call(null,sablono.normalize.class_name,class$);
} else {
if(((cljs.core.set_QMARK_.call(null,class$)) || (cljs.core.sequential_QMARK_.call(null,class$)))){
return cljs.core.mapv.call(null,sablono.normalize.class_name,class$);
} else {
return class$;

}
}
}
}
}
}
}
}
});
/**
 * Normalize the `attrs` of an element.
 */
sablono.normalize.attributes = (function sablono$normalize$attributes(attrs){
var G__34983 = attrs;
if(cljs.core.truth_(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(attrs))){
return cljs.core.update_in.call(null,G__34983,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class","class",-2030961996)], null),sablono.normalize.class$);
} else {
return G__34983;
}
});
/**
 * Like clojure.core/merge but concatenate :class entries.
 */
sablono.normalize.merge_with_class = (function sablono$normalize$merge_with_class(var_args){
var args__4502__auto__ = [];
var len__4499__auto___34986 = arguments.length;
var i__4500__auto___34987 = (0);
while(true){
if((i__4500__auto___34987 < len__4499__auto___34986)){
args__4502__auto__.push((arguments[i__4500__auto___34987]));

var G__34988 = (i__4500__auto___34987 + (1));
i__4500__auto___34987 = G__34988;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
var maps__$1 = cljs.core.map.call(null,sablono.normalize.attributes,maps);
var classes = cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),maps__$1);
if(cljs.core.seq.call(null,maps__$1)){
var G__34985 = cljs.core.reduce.call(null,cljs.core.into,cljs.core.PersistentArrayMap.EMPTY,maps__$1);
if(!(cljs.core.empty_QMARK_.call(null,classes))){
return cljs.core.assoc.call(null,G__34985,new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.vec.call(null,classes));
} else {
return G__34985;
}
} else {
return null;
}
});

sablono.normalize.merge_with_class.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
sablono.normalize.merge_with_class.cljs$lang$applyTo = (function (seq34984){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34984));
});

/**
 * Strip the # and . characters from the beginning of `s`.
 */
sablono.normalize.strip_css = (function sablono$normalize$strip_css(s){
if(cljs.core.truth_(s)){
return clojure.string.replace.call(null,s,/^[.#]/,"");
} else {
return null;
}
});
/**
 * Match `s` as a CSS tag and return a vector of tag name, CSS id and
 *   CSS classes.
 */
sablono.normalize.match_tag = (function sablono$normalize$match_tag(s){
var matches = cljs.core.re_seq.call(null,/[#.]?[^#.]+/,cljs.core.name.call(null,s));
var vec__34991 = ((cljs.core.empty_QMARK_.call(null,matches))?(function(){throw cljs.core.ex_info.call(null,["Can't match CSS tag: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),s], null))})():(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["#",null,".",null], null), null).call(null,cljs.core.ffirst.call(null,matches)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["div",matches], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,matches),cljs.core.rest.call(null,matches)], null)
));
var tag_name = cljs.core.nth.call(null,vec__34991,(0),null);
var names = cljs.core.nth.call(null,vec__34991,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag_name,sablono.normalize.strip_css.call(null,cljs.core.some.call(null,((function (matches,vec__34991,tag_name,names){
return (function (p1__34989_SHARP_){
if(cljs.core._EQ_.call(null,"#",cljs.core.first.call(null,p1__34989_SHARP_))){
return p1__34989_SHARP_;
} else {
return null;
}
});})(matches,vec__34991,tag_name,names))
,names)),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.comp.call(null,cljs.core.filter.call(null,((function (matches,vec__34991,tag_name,names){
return (function (p1__34990_SHARP_){
return cljs.core._EQ_.call(null,".",cljs.core.first.call(null,p1__34990_SHARP_));
});})(matches,vec__34991,tag_name,names))
),cljs.core.map.call(null,sablono.normalize.strip_css)),names)], null);
});
/**
 * Normalize the children of a HTML element.
 */
sablono.normalize.children = (function sablono$normalize$children(x){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,(((x == null))?cljs.core.List.EMPTY:((typeof x === 'string')?(new cljs.core.List(null,x,null,(1),null)):(cljs.core.truth_(sablono.util.element_QMARK_.call(null,x))?(new cljs.core.List(null,x,null,(1),null)):((((cljs.core.list_QMARK_.call(null,x)) && ((cljs.core.first.call(null,x) instanceof cljs.core.Symbol))))?(new cljs.core.List(null,x,null,(1),null)):((cljs.core.list_QMARK_.call(null,x))?x:((((cljs.core.sequential_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),(1))) && (cljs.core.sequential_QMARK_.call(null,cljs.core.first.call(null,x))) && (!(typeof cljs.core.first.call(null,x) === 'string')) && (cljs.core.not.call(null,sablono.util.element_QMARK_.call(null,cljs.core.first.call(null,x))))))?sablono.normalize.children.call(null,cljs.core.first.call(null,x)):((cljs.core.sequential_QMARK_.call(null,x))?x:(new cljs.core.List(null,x,null,(1),null))
))))))));
});
/**
 * Returns true if `x` are the attributes of an HTML element,
 *   otherwise false.
 */
sablono.normalize.attrs_QMARK_ = (function sablono$normalize$attrs_QMARK_(x){
return cljs.core.map_QMARK_.call(null,x);
});
/**
 * Ensure an element vector is of the form [tag-name attrs content].
 */
sablono.normalize.element = (function sablono$normalize$element(p__34994){
var vec__34995 = p__34994;
var seq__34996 = cljs.core.seq.call(null,vec__34995);
var first__34997 = cljs.core.first.call(null,seq__34996);
var seq__34996__$1 = cljs.core.next.call(null,seq__34996);
var tag = first__34997;
var content = seq__34996__$1;
if((((tag instanceof cljs.core.Keyword)) || ((tag instanceof cljs.core.Symbol)) || (typeof tag === 'string'))){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)," is not a valid element name."].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),tag,new cljs.core.Keyword(null,"content","content",15833224),content], null));
}

var vec__34998 = sablono.normalize.match_tag.call(null,tag);
var tag__$1 = cljs.core.nth.call(null,vec__34998,(0),null);
var id = cljs.core.nth.call(null,vec__34998,(1),null);
var class$ = cljs.core.nth.call(null,vec__34998,(2),null);
var tag_attrs = sablono.normalize.compact_map.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"class","class",-2030961996),class$], null));
var map_attrs = cljs.core.first.call(null,content);
if(cljs.core.truth_(sablono.normalize.attrs_QMARK_.call(null,map_attrs))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag__$1,sablono.normalize.merge_with_class.call(null,tag_attrs,map_attrs),sablono.normalize.children.call(null,cljs.core.next.call(null,content))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag__$1,sablono.normalize.attributes.call(null,tag_attrs),sablono.normalize.children.call(null,content)], null);
}
});

//# sourceMappingURL=normalize.js.map?rel=1526826991374
