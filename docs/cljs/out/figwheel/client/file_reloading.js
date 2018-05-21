// Compiled by ClojureScript 1.10.238 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__3922__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__3922__auto__){
return or__3922__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__3922__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__41826_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__41826_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__41827 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__41828 = null;
var count__41829 = (0);
var i__41830 = (0);
while(true){
if((i__41830 < count__41829)){
var n = cljs.core._nth.call(null,chunk__41828,i__41830);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__41831 = seq__41827;
var G__41832 = chunk__41828;
var G__41833 = count__41829;
var G__41834 = (i__41830 + (1));
seq__41827 = G__41831;
chunk__41828 = G__41832;
count__41829 = G__41833;
i__41830 = G__41834;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__41827);
if(temp__5457__auto__){
var seq__41827__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41827__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__41827__$1);
var G__41835 = cljs.core.chunk_rest.call(null,seq__41827__$1);
var G__41836 = c__4319__auto__;
var G__41837 = cljs.core.count.call(null,c__4319__auto__);
var G__41838 = (0);
seq__41827 = G__41835;
chunk__41828 = G__41836;
count__41829 = G__41837;
i__41830 = G__41838;
continue;
} else {
var n = cljs.core.first.call(null,seq__41827__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__41839 = cljs.core.next.call(null,seq__41827__$1);
var G__41840 = null;
var G__41841 = (0);
var G__41842 = (0);
seq__41827 = G__41839;
chunk__41828 = G__41840;
count__41829 = G__41841;
i__41830 = G__41842;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__41843){
var vec__41844 = p__41843;
var _ = cljs.core.nth.call(null,vec__41844,(0),null);
var v = cljs.core.nth.call(null,vec__41844,(1),null);
var and__3911__auto__ = v;
if(cljs.core.truth_(and__3911__auto__)){
return v.call(null,dep);
} else {
return and__3911__auto__;
}
}),cljs.core.filter.call(null,(function (p__41847){
var vec__41848 = p__41847;
var k = cljs.core.nth.call(null,vec__41848,(0),null);
var v = cljs.core.nth.call(null,vec__41848,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__41860_41868 = cljs.core.seq.call(null,deps);
var chunk__41861_41869 = null;
var count__41862_41870 = (0);
var i__41863_41871 = (0);
while(true){
if((i__41863_41871 < count__41862_41870)){
var dep_41872 = cljs.core._nth.call(null,chunk__41861_41869,i__41863_41871);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_41872;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_41872));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_41872,(depth + (1)),state);
} else {
}


var G__41873 = seq__41860_41868;
var G__41874 = chunk__41861_41869;
var G__41875 = count__41862_41870;
var G__41876 = (i__41863_41871 + (1));
seq__41860_41868 = G__41873;
chunk__41861_41869 = G__41874;
count__41862_41870 = G__41875;
i__41863_41871 = G__41876;
continue;
} else {
var temp__5457__auto___41877 = cljs.core.seq.call(null,seq__41860_41868);
if(temp__5457__auto___41877){
var seq__41860_41878__$1 = temp__5457__auto___41877;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41860_41878__$1)){
var c__4319__auto___41879 = cljs.core.chunk_first.call(null,seq__41860_41878__$1);
var G__41880 = cljs.core.chunk_rest.call(null,seq__41860_41878__$1);
var G__41881 = c__4319__auto___41879;
var G__41882 = cljs.core.count.call(null,c__4319__auto___41879);
var G__41883 = (0);
seq__41860_41868 = G__41880;
chunk__41861_41869 = G__41881;
count__41862_41870 = G__41882;
i__41863_41871 = G__41883;
continue;
} else {
var dep_41884 = cljs.core.first.call(null,seq__41860_41878__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_41884;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_41884));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_41884,(depth + (1)),state);
} else {
}


var G__41885 = cljs.core.next.call(null,seq__41860_41878__$1);
var G__41886 = null;
var G__41887 = (0);
var G__41888 = (0);
seq__41860_41868 = G__41885;
chunk__41861_41869 = G__41886;
count__41862_41870 = G__41887;
i__41863_41871 = G__41888;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__41864){
var vec__41865 = p__41864;
var seq__41866 = cljs.core.seq.call(null,vec__41865);
var first__41867 = cljs.core.first.call(null,seq__41866);
var seq__41866__$1 = cljs.core.next.call(null,seq__41866);
var x = first__41867;
var xs = seq__41866__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__41865,seq__41866,first__41867,seq__41866__$1,x,xs,get_deps__$1){
return (function (p1__41851_SHARP_){
return clojure.set.difference.call(null,p1__41851_SHARP_,x);
});})(vec__41865,seq__41866,first__41867,seq__41866__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__41889 = cljs.core.seq.call(null,provides);
var chunk__41890 = null;
var count__41891 = (0);
var i__41892 = (0);
while(true){
if((i__41892 < count__41891)){
var prov = cljs.core._nth.call(null,chunk__41890,i__41892);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__41893_41901 = cljs.core.seq.call(null,requires);
var chunk__41894_41902 = null;
var count__41895_41903 = (0);
var i__41896_41904 = (0);
while(true){
if((i__41896_41904 < count__41895_41903)){
var req_41905 = cljs.core._nth.call(null,chunk__41894_41902,i__41896_41904);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_41905,prov);


var G__41906 = seq__41893_41901;
var G__41907 = chunk__41894_41902;
var G__41908 = count__41895_41903;
var G__41909 = (i__41896_41904 + (1));
seq__41893_41901 = G__41906;
chunk__41894_41902 = G__41907;
count__41895_41903 = G__41908;
i__41896_41904 = G__41909;
continue;
} else {
var temp__5457__auto___41910 = cljs.core.seq.call(null,seq__41893_41901);
if(temp__5457__auto___41910){
var seq__41893_41911__$1 = temp__5457__auto___41910;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41893_41911__$1)){
var c__4319__auto___41912 = cljs.core.chunk_first.call(null,seq__41893_41911__$1);
var G__41913 = cljs.core.chunk_rest.call(null,seq__41893_41911__$1);
var G__41914 = c__4319__auto___41912;
var G__41915 = cljs.core.count.call(null,c__4319__auto___41912);
var G__41916 = (0);
seq__41893_41901 = G__41913;
chunk__41894_41902 = G__41914;
count__41895_41903 = G__41915;
i__41896_41904 = G__41916;
continue;
} else {
var req_41917 = cljs.core.first.call(null,seq__41893_41911__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_41917,prov);


var G__41918 = cljs.core.next.call(null,seq__41893_41911__$1);
var G__41919 = null;
var G__41920 = (0);
var G__41921 = (0);
seq__41893_41901 = G__41918;
chunk__41894_41902 = G__41919;
count__41895_41903 = G__41920;
i__41896_41904 = G__41921;
continue;
}
} else {
}
}
break;
}


var G__41922 = seq__41889;
var G__41923 = chunk__41890;
var G__41924 = count__41891;
var G__41925 = (i__41892 + (1));
seq__41889 = G__41922;
chunk__41890 = G__41923;
count__41891 = G__41924;
i__41892 = G__41925;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__41889);
if(temp__5457__auto__){
var seq__41889__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41889__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__41889__$1);
var G__41926 = cljs.core.chunk_rest.call(null,seq__41889__$1);
var G__41927 = c__4319__auto__;
var G__41928 = cljs.core.count.call(null,c__4319__auto__);
var G__41929 = (0);
seq__41889 = G__41926;
chunk__41890 = G__41927;
count__41891 = G__41928;
i__41892 = G__41929;
continue;
} else {
var prov = cljs.core.first.call(null,seq__41889__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__41897_41930 = cljs.core.seq.call(null,requires);
var chunk__41898_41931 = null;
var count__41899_41932 = (0);
var i__41900_41933 = (0);
while(true){
if((i__41900_41933 < count__41899_41932)){
var req_41934 = cljs.core._nth.call(null,chunk__41898_41931,i__41900_41933);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_41934,prov);


var G__41935 = seq__41897_41930;
var G__41936 = chunk__41898_41931;
var G__41937 = count__41899_41932;
var G__41938 = (i__41900_41933 + (1));
seq__41897_41930 = G__41935;
chunk__41898_41931 = G__41936;
count__41899_41932 = G__41937;
i__41900_41933 = G__41938;
continue;
} else {
var temp__5457__auto___41939__$1 = cljs.core.seq.call(null,seq__41897_41930);
if(temp__5457__auto___41939__$1){
var seq__41897_41940__$1 = temp__5457__auto___41939__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41897_41940__$1)){
var c__4319__auto___41941 = cljs.core.chunk_first.call(null,seq__41897_41940__$1);
var G__41942 = cljs.core.chunk_rest.call(null,seq__41897_41940__$1);
var G__41943 = c__4319__auto___41941;
var G__41944 = cljs.core.count.call(null,c__4319__auto___41941);
var G__41945 = (0);
seq__41897_41930 = G__41942;
chunk__41898_41931 = G__41943;
count__41899_41932 = G__41944;
i__41900_41933 = G__41945;
continue;
} else {
var req_41946 = cljs.core.first.call(null,seq__41897_41940__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_41946,prov);


var G__41947 = cljs.core.next.call(null,seq__41897_41940__$1);
var G__41948 = null;
var G__41949 = (0);
var G__41950 = (0);
seq__41897_41930 = G__41947;
chunk__41898_41931 = G__41948;
count__41899_41932 = G__41949;
i__41900_41933 = G__41950;
continue;
}
} else {
}
}
break;
}


var G__41951 = cljs.core.next.call(null,seq__41889__$1);
var G__41952 = null;
var G__41953 = (0);
var G__41954 = (0);
seq__41889 = G__41951;
chunk__41890 = G__41952;
count__41891 = G__41953;
i__41892 = G__41954;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__41955_41959 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__41956_41960 = null;
var count__41957_41961 = (0);
var i__41958_41962 = (0);
while(true){
if((i__41958_41962 < count__41957_41961)){
var ns_41963 = cljs.core._nth.call(null,chunk__41956_41960,i__41958_41962);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_41963);


var G__41964 = seq__41955_41959;
var G__41965 = chunk__41956_41960;
var G__41966 = count__41957_41961;
var G__41967 = (i__41958_41962 + (1));
seq__41955_41959 = G__41964;
chunk__41956_41960 = G__41965;
count__41957_41961 = G__41966;
i__41958_41962 = G__41967;
continue;
} else {
var temp__5457__auto___41968 = cljs.core.seq.call(null,seq__41955_41959);
if(temp__5457__auto___41968){
var seq__41955_41969__$1 = temp__5457__auto___41968;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41955_41969__$1)){
var c__4319__auto___41970 = cljs.core.chunk_first.call(null,seq__41955_41969__$1);
var G__41971 = cljs.core.chunk_rest.call(null,seq__41955_41969__$1);
var G__41972 = c__4319__auto___41970;
var G__41973 = cljs.core.count.call(null,c__4319__auto___41970);
var G__41974 = (0);
seq__41955_41959 = G__41971;
chunk__41956_41960 = G__41972;
count__41957_41961 = G__41973;
i__41958_41962 = G__41974;
continue;
} else {
var ns_41975 = cljs.core.first.call(null,seq__41955_41969__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_41975);


var G__41976 = cljs.core.next.call(null,seq__41955_41969__$1);
var G__41977 = null;
var G__41978 = (0);
var G__41979 = (0);
seq__41955_41959 = G__41976;
chunk__41956_41960 = G__41977;
count__41957_41961 = G__41978;
i__41958_41962 = G__41979;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__3922__auto__ = goog.require__;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__41980__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__41980 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41981__i = 0, G__41981__a = new Array(arguments.length -  0);
while (G__41981__i < G__41981__a.length) {G__41981__a[G__41981__i] = arguments[G__41981__i + 0]; ++G__41981__i;}
  args = new cljs.core.IndexedSeq(G__41981__a,0,null);
} 
return G__41980__delegate.call(this,args);};
G__41980.cljs$lang$maxFixedArity = 0;
G__41980.cljs$lang$applyTo = (function (arglist__41982){
var args = cljs.core.seq(arglist__41982);
return G__41980__delegate(args);
});
G__41980.cljs$core$IFn$_invoke$arity$variadic = G__41980__delegate;
return G__41980;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__41983_SHARP_,p2__41984_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__41983_SHARP_)].join('')),p2__41984_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__41985_SHARP_,p2__41986_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__41985_SHARP_)].join(''),p2__41986_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__41987 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__41987.addCallback(((function (G__41987){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__41987))
);

G__41987.addErrback(((function (G__41987){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__41987))
);

return G__41987;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e41988){if((e41988 instanceof Error)){
var e = e41988;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e41988;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e41989){if((e41989 instanceof Error)){
var e = e41989;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e41989;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__41990 = cljs.core._EQ_;
var expr__41991 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__41990.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__41991))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__41990.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__41991))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__41990.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__41991))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__41990,expr__41991){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__41990,expr__41991))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__41993,callback){
var map__41994 = p__41993;
var map__41994__$1 = ((((!((map__41994 == null)))?(((((map__41994.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41994.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41994):map__41994);
var file_msg = map__41994__$1;
var request_url = cljs.core.get.call(null,map__41994__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__3922__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__41994,map__41994__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__41994,map__41994__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__38612__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38612__auto__){
return (function (){
var f__38613__auto__ = (function (){var switch__38522__auto__ = ((function (c__38612__auto__){
return (function (state_42032){
var state_val_42033 = (state_42032[(1)]);
if((state_val_42033 === (7))){
var inst_42028 = (state_42032[(2)]);
var state_42032__$1 = state_42032;
var statearr_42034_42060 = state_42032__$1;
(statearr_42034_42060[(2)] = inst_42028);

(statearr_42034_42060[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42033 === (1))){
var state_42032__$1 = state_42032;
var statearr_42035_42061 = state_42032__$1;
(statearr_42035_42061[(2)] = null);

(statearr_42035_42061[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42033 === (4))){
var inst_41998 = (state_42032[(7)]);
var inst_41998__$1 = (state_42032[(2)]);
var state_42032__$1 = (function (){var statearr_42036 = state_42032;
(statearr_42036[(7)] = inst_41998__$1);

return statearr_42036;
})();
if(cljs.core.truth_(inst_41998__$1)){
var statearr_42037_42062 = state_42032__$1;
(statearr_42037_42062[(1)] = (5));

} else {
var statearr_42038_42063 = state_42032__$1;
(statearr_42038_42063[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42033 === (15))){
var inst_42013 = (state_42032[(8)]);
var inst_42011 = (state_42032[(9)]);
var inst_42015 = inst_42013.call(null,inst_42011);
var state_42032__$1 = state_42032;
var statearr_42039_42064 = state_42032__$1;
(statearr_42039_42064[(2)] = inst_42015);

(statearr_42039_42064[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42033 === (13))){
var inst_42022 = (state_42032[(2)]);
var state_42032__$1 = state_42032;
var statearr_42040_42065 = state_42032__$1;
(statearr_42040_42065[(2)] = inst_42022);

(statearr_42040_42065[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42033 === (6))){
var state_42032__$1 = state_42032;
var statearr_42041_42066 = state_42032__$1;
(statearr_42041_42066[(2)] = null);

(statearr_42041_42066[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42033 === (17))){
var inst_42019 = (state_42032[(2)]);
var state_42032__$1 = state_42032;
var statearr_42042_42067 = state_42032__$1;
(statearr_42042_42067[(2)] = inst_42019);

(statearr_42042_42067[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42033 === (3))){
var inst_42030 = (state_42032[(2)]);
var state_42032__$1 = state_42032;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42032__$1,inst_42030);
} else {
if((state_val_42033 === (12))){
var state_42032__$1 = state_42032;
var statearr_42043_42068 = state_42032__$1;
(statearr_42043_42068[(2)] = null);

(statearr_42043_42068[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42033 === (2))){
var state_42032__$1 = state_42032;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42032__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_42033 === (11))){
var inst_42003 = (state_42032[(10)]);
var inst_42009 = figwheel.client.file_reloading.blocking_load.call(null,inst_42003);
var state_42032__$1 = state_42032;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42032__$1,(14),inst_42009);
} else {
if((state_val_42033 === (9))){
var inst_42003 = (state_42032[(10)]);
var state_42032__$1 = state_42032;
if(cljs.core.truth_(inst_42003)){
var statearr_42044_42069 = state_42032__$1;
(statearr_42044_42069[(1)] = (11));

} else {
var statearr_42045_42070 = state_42032__$1;
(statearr_42045_42070[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42033 === (5))){
var inst_42004 = (state_42032[(11)]);
var inst_41998 = (state_42032[(7)]);
var inst_42003 = cljs.core.nth.call(null,inst_41998,(0),null);
var inst_42004__$1 = cljs.core.nth.call(null,inst_41998,(1),null);
var state_42032__$1 = (function (){var statearr_42046 = state_42032;
(statearr_42046[(10)] = inst_42003);

(statearr_42046[(11)] = inst_42004__$1);

return statearr_42046;
})();
if(cljs.core.truth_(inst_42004__$1)){
var statearr_42047_42071 = state_42032__$1;
(statearr_42047_42071[(1)] = (8));

} else {
var statearr_42048_42072 = state_42032__$1;
(statearr_42048_42072[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42033 === (14))){
var inst_42013 = (state_42032[(8)]);
var inst_42003 = (state_42032[(10)]);
var inst_42011 = (state_42032[(2)]);
var inst_42012 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_42013__$1 = cljs.core.get.call(null,inst_42012,inst_42003);
var state_42032__$1 = (function (){var statearr_42049 = state_42032;
(statearr_42049[(8)] = inst_42013__$1);

(statearr_42049[(9)] = inst_42011);

return statearr_42049;
})();
if(cljs.core.truth_(inst_42013__$1)){
var statearr_42050_42073 = state_42032__$1;
(statearr_42050_42073[(1)] = (15));

} else {
var statearr_42051_42074 = state_42032__$1;
(statearr_42051_42074[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42033 === (16))){
var inst_42011 = (state_42032[(9)]);
var inst_42017 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_42011);
var state_42032__$1 = state_42032;
var statearr_42052_42075 = state_42032__$1;
(statearr_42052_42075[(2)] = inst_42017);

(statearr_42052_42075[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42033 === (10))){
var inst_42024 = (state_42032[(2)]);
var state_42032__$1 = (function (){var statearr_42053 = state_42032;
(statearr_42053[(12)] = inst_42024);

return statearr_42053;
})();
var statearr_42054_42076 = state_42032__$1;
(statearr_42054_42076[(2)] = null);

(statearr_42054_42076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42033 === (8))){
var inst_42004 = (state_42032[(11)]);
var inst_42006 = eval(inst_42004);
var state_42032__$1 = state_42032;
var statearr_42055_42077 = state_42032__$1;
(statearr_42055_42077[(2)] = inst_42006);

(statearr_42055_42077[(1)] = (10));


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
});})(c__38612__auto__))
;
return ((function (switch__38522__auto__,c__38612__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__38523__auto__ = null;
var figwheel$client$file_reloading$state_machine__38523__auto____0 = (function (){
var statearr_42056 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42056[(0)] = figwheel$client$file_reloading$state_machine__38523__auto__);

(statearr_42056[(1)] = (1));

return statearr_42056;
});
var figwheel$client$file_reloading$state_machine__38523__auto____1 = (function (state_42032){
while(true){
var ret_value__38524__auto__ = (function (){try{while(true){
var result__38525__auto__ = switch__38522__auto__.call(null,state_42032);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38525__auto__;
}
break;
}
}catch (e42057){if((e42057 instanceof Object)){
var ex__38526__auto__ = e42057;
var statearr_42058_42078 = state_42032;
(statearr_42058_42078[(5)] = ex__38526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42032);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42057;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42079 = state_42032;
state_42032 = G__42079;
continue;
} else {
return ret_value__38524__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__38523__auto__ = function(state_42032){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__38523__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__38523__auto____1.call(this,state_42032);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__38523__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__38523__auto____0;
figwheel$client$file_reloading$state_machine__38523__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__38523__auto____1;
return figwheel$client$file_reloading$state_machine__38523__auto__;
})()
;})(switch__38522__auto__,c__38612__auto__))
})();
var state__38614__auto__ = (function (){var statearr_42059 = f__38613__auto__.call(null);
(statearr_42059[(6)] = c__38612__auto__);

return statearr_42059;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38614__auto__);
});})(c__38612__auto__))
);

return c__38612__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__42081 = arguments.length;
switch (G__42081) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__42083,callback){
var map__42084 = p__42083;
var map__42084__$1 = ((((!((map__42084 == null)))?(((((map__42084.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42084.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42084):map__42084);
var file_msg = map__42084__$1;
var namespace = cljs.core.get.call(null,map__42084__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__42084,map__42084__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__42084,map__42084__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__42086){
var map__42087 = p__42086;
var map__42087__$1 = ((((!((map__42087 == null)))?(((((map__42087.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42087.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42087):map__42087);
var file_msg = map__42087__$1;
var namespace = cljs.core.get.call(null,map__42087__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return !((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__42089){
var map__42090 = p__42089;
var map__42090__$1 = ((((!((map__42090 == null)))?(((((map__42090.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42090.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42090):map__42090);
var file_msg = map__42090__$1;
var namespace = cljs.core.get.call(null,map__42090__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__3911__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__3911__auto__){
var or__3922__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
var or__3922__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__3922__auto____$2)){
return or__3922__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__3911__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__42092,callback){
var map__42093 = p__42092;
var map__42093__$1 = ((((!((map__42093 == null)))?(((((map__42093.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42093.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42093):map__42093);
var file_msg = map__42093__$1;
var request_url = cljs.core.get.call(null,map__42093__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__42093__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__38612__auto___42143 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38612__auto___42143,out){
return (function (){
var f__38613__auto__ = (function (){var switch__38522__auto__ = ((function (c__38612__auto___42143,out){
return (function (state_42128){
var state_val_42129 = (state_42128[(1)]);
if((state_val_42129 === (1))){
var inst_42102 = cljs.core.seq.call(null,files);
var inst_42103 = cljs.core.first.call(null,inst_42102);
var inst_42104 = cljs.core.next.call(null,inst_42102);
var inst_42105 = files;
var state_42128__$1 = (function (){var statearr_42130 = state_42128;
(statearr_42130[(7)] = inst_42103);

(statearr_42130[(8)] = inst_42104);

(statearr_42130[(9)] = inst_42105);

return statearr_42130;
})();
var statearr_42131_42144 = state_42128__$1;
(statearr_42131_42144[(2)] = null);

(statearr_42131_42144[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42129 === (2))){
var inst_42111 = (state_42128[(10)]);
var inst_42105 = (state_42128[(9)]);
var inst_42110 = cljs.core.seq.call(null,inst_42105);
var inst_42111__$1 = cljs.core.first.call(null,inst_42110);
var inst_42112 = cljs.core.next.call(null,inst_42110);
var inst_42113 = (inst_42111__$1 == null);
var inst_42114 = cljs.core.not.call(null,inst_42113);
var state_42128__$1 = (function (){var statearr_42132 = state_42128;
(statearr_42132[(10)] = inst_42111__$1);

(statearr_42132[(11)] = inst_42112);

return statearr_42132;
})();
if(inst_42114){
var statearr_42133_42145 = state_42128__$1;
(statearr_42133_42145[(1)] = (4));

} else {
var statearr_42134_42146 = state_42128__$1;
(statearr_42134_42146[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42129 === (3))){
var inst_42126 = (state_42128[(2)]);
var state_42128__$1 = state_42128;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42128__$1,inst_42126);
} else {
if((state_val_42129 === (4))){
var inst_42111 = (state_42128[(10)]);
var inst_42116 = figwheel.client.file_reloading.reload_js_file.call(null,inst_42111);
var state_42128__$1 = state_42128;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42128__$1,(7),inst_42116);
} else {
if((state_val_42129 === (5))){
var inst_42122 = cljs.core.async.close_BANG_.call(null,out);
var state_42128__$1 = state_42128;
var statearr_42135_42147 = state_42128__$1;
(statearr_42135_42147[(2)] = inst_42122);

(statearr_42135_42147[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42129 === (6))){
var inst_42124 = (state_42128[(2)]);
var state_42128__$1 = state_42128;
var statearr_42136_42148 = state_42128__$1;
(statearr_42136_42148[(2)] = inst_42124);

(statearr_42136_42148[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42129 === (7))){
var inst_42112 = (state_42128[(11)]);
var inst_42118 = (state_42128[(2)]);
var inst_42119 = cljs.core.async.put_BANG_.call(null,out,inst_42118);
var inst_42105 = inst_42112;
var state_42128__$1 = (function (){var statearr_42137 = state_42128;
(statearr_42137[(12)] = inst_42119);

(statearr_42137[(9)] = inst_42105);

return statearr_42137;
})();
var statearr_42138_42149 = state_42128__$1;
(statearr_42138_42149[(2)] = null);

(statearr_42138_42149[(1)] = (2));


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
});})(c__38612__auto___42143,out))
;
return ((function (switch__38522__auto__,c__38612__auto___42143,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__38523__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__38523__auto____0 = (function (){
var statearr_42139 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42139[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__38523__auto__);

(statearr_42139[(1)] = (1));

return statearr_42139;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__38523__auto____1 = (function (state_42128){
while(true){
var ret_value__38524__auto__ = (function (){try{while(true){
var result__38525__auto__ = switch__38522__auto__.call(null,state_42128);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38525__auto__;
}
break;
}
}catch (e42140){if((e42140 instanceof Object)){
var ex__38526__auto__ = e42140;
var statearr_42141_42150 = state_42128;
(statearr_42141_42150[(5)] = ex__38526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42128);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42140;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42151 = state_42128;
state_42128 = G__42151;
continue;
} else {
return ret_value__38524__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__38523__auto__ = function(state_42128){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__38523__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__38523__auto____1.call(this,state_42128);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__38523__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__38523__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__38523__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__38523__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__38523__auto__;
})()
;})(switch__38522__auto__,c__38612__auto___42143,out))
})();
var state__38614__auto__ = (function (){var statearr_42142 = f__38613__auto__.call(null);
(statearr_42142[(6)] = c__38612__auto___42143);

return statearr_42142;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38614__auto__);
});})(c__38612__auto___42143,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__42152,opts){
var map__42153 = p__42152;
var map__42153__$1 = ((((!((map__42153 == null)))?(((((map__42153.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42153.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42153):map__42153);
var eval_body = cljs.core.get.call(null,map__42153__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__42153__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__3911__auto__ = eval_body;
if(cljs.core.truth_(and__3911__auto__)){
return typeof eval_body === 'string';
} else {
return and__3911__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e42155){var e = e42155;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5455__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__42156_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__42156_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5455__auto__)){
var file_msg = temp__5455__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__42157){
var vec__42158 = p__42157;
var k = cljs.core.nth.call(null,vec__42158,(0),null);
var v = cljs.core.nth.call(null,vec__42158,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__42161){
var vec__42162 = p__42161;
var k = cljs.core.nth.call(null,vec__42162,(0),null);
var v = cljs.core.nth.call(null,vec__42162,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__42168,p__42169){
var map__42170 = p__42168;
var map__42170__$1 = ((((!((map__42170 == null)))?(((((map__42170.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42170.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42170):map__42170);
var opts = map__42170__$1;
var before_jsload = cljs.core.get.call(null,map__42170__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__42170__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__42170__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__42171 = p__42169;
var map__42171__$1 = ((((!((map__42171 == null)))?(((((map__42171.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42171.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42171):map__42171);
var msg = map__42171__$1;
var files = cljs.core.get.call(null,map__42171__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__42171__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__42171__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__38612__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38612__auto__,map__42170,map__42170__$1,opts,before_jsload,on_jsload,reload_dependents,map__42171,map__42171__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__38613__auto__ = (function (){var switch__38522__auto__ = ((function (c__38612__auto__,map__42170,map__42170__$1,opts,before_jsload,on_jsload,reload_dependents,map__42171,map__42171__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_42325){
var state_val_42326 = (state_42325[(1)]);
if((state_val_42326 === (7))){
var inst_42188 = (state_42325[(7)]);
var inst_42185 = (state_42325[(8)]);
var inst_42187 = (state_42325[(9)]);
var inst_42186 = (state_42325[(10)]);
var inst_42193 = cljs.core._nth.call(null,inst_42186,inst_42188);
var inst_42194 = figwheel.client.file_reloading.eval_body.call(null,inst_42193,opts);
var inst_42195 = (inst_42188 + (1));
var tmp42327 = inst_42185;
var tmp42328 = inst_42187;
var tmp42329 = inst_42186;
var inst_42185__$1 = tmp42327;
var inst_42186__$1 = tmp42329;
var inst_42187__$1 = tmp42328;
var inst_42188__$1 = inst_42195;
var state_42325__$1 = (function (){var statearr_42330 = state_42325;
(statearr_42330[(7)] = inst_42188__$1);

(statearr_42330[(8)] = inst_42185__$1);

(statearr_42330[(9)] = inst_42187__$1);

(statearr_42330[(11)] = inst_42194);

(statearr_42330[(10)] = inst_42186__$1);

return statearr_42330;
})();
var statearr_42331_42414 = state_42325__$1;
(statearr_42331_42414[(2)] = null);

(statearr_42331_42414[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42326 === (20))){
var inst_42228 = (state_42325[(12)]);
var inst_42236 = figwheel.client.file_reloading.sort_files.call(null,inst_42228);
var state_42325__$1 = state_42325;
var statearr_42332_42415 = state_42325__$1;
(statearr_42332_42415[(2)] = inst_42236);

(statearr_42332_42415[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42326 === (27))){
var state_42325__$1 = state_42325;
var statearr_42333_42416 = state_42325__$1;
(statearr_42333_42416[(2)] = null);

(statearr_42333_42416[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42326 === (1))){
var inst_42177 = (state_42325[(13)]);
var inst_42174 = before_jsload.call(null,files);
var inst_42175 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_42176 = (function (){return ((function (inst_42177,inst_42174,inst_42175,state_val_42326,c__38612__auto__,map__42170,map__42170__$1,opts,before_jsload,on_jsload,reload_dependents,map__42171,map__42171__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__42165_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__42165_SHARP_);
});
;})(inst_42177,inst_42174,inst_42175,state_val_42326,c__38612__auto__,map__42170,map__42170__$1,opts,before_jsload,on_jsload,reload_dependents,map__42171,map__42171__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_42177__$1 = cljs.core.filter.call(null,inst_42176,files);
var inst_42178 = cljs.core.not_empty.call(null,inst_42177__$1);
var state_42325__$1 = (function (){var statearr_42334 = state_42325;
(statearr_42334[(14)] = inst_42175);

(statearr_42334[(15)] = inst_42174);

(statearr_42334[(13)] = inst_42177__$1);

return statearr_42334;
})();
if(cljs.core.truth_(inst_42178)){
var statearr_42335_42417 = state_42325__$1;
(statearr_42335_42417[(1)] = (2));

} else {
var statearr_42336_42418 = state_42325__$1;
(statearr_42336_42418[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42326 === (24))){
var state_42325__$1 = state_42325;
var statearr_42337_42419 = state_42325__$1;
(statearr_42337_42419[(2)] = null);

(statearr_42337_42419[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42326 === (39))){
var inst_42278 = (state_42325[(16)]);
var state_42325__$1 = state_42325;
var statearr_42338_42420 = state_42325__$1;
(statearr_42338_42420[(2)] = inst_42278);

(statearr_42338_42420[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42326 === (46))){
var inst_42320 = (state_42325[(2)]);
var state_42325__$1 = state_42325;
var statearr_42339_42421 = state_42325__$1;
(statearr_42339_42421[(2)] = inst_42320);

(statearr_42339_42421[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42326 === (4))){
var inst_42222 = (state_42325[(2)]);
var inst_42223 = cljs.core.List.EMPTY;
var inst_42224 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_42223);
var inst_42225 = (function (){return ((function (inst_42222,inst_42223,inst_42224,state_val_42326,c__38612__auto__,map__42170,map__42170__$1,opts,before_jsload,on_jsload,reload_dependents,map__42171,map__42171__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__42166_SHARP_){
var and__3911__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__42166_SHARP_);
if(cljs.core.truth_(and__3911__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__42166_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__42166_SHARP_))));
} else {
return and__3911__auto__;
}
});
;})(inst_42222,inst_42223,inst_42224,state_val_42326,c__38612__auto__,map__42170,map__42170__$1,opts,before_jsload,on_jsload,reload_dependents,map__42171,map__42171__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_42226 = cljs.core.filter.call(null,inst_42225,files);
var inst_42227 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_42228 = cljs.core.concat.call(null,inst_42226,inst_42227);
var state_42325__$1 = (function (){var statearr_42340 = state_42325;
(statearr_42340[(17)] = inst_42224);

(statearr_42340[(12)] = inst_42228);

(statearr_42340[(18)] = inst_42222);

return statearr_42340;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_42341_42422 = state_42325__$1;
(statearr_42341_42422[(1)] = (16));

} else {
var statearr_42342_42423 = state_42325__$1;
(statearr_42342_42423[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42326 === (15))){
var inst_42212 = (state_42325[(2)]);
var state_42325__$1 = state_42325;
var statearr_42343_42424 = state_42325__$1;
(statearr_42343_42424[(2)] = inst_42212);

(statearr_42343_42424[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42326 === (21))){
var inst_42238 = (state_42325[(19)]);
var inst_42238__$1 = (state_42325[(2)]);
var inst_42239 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_42238__$1);
var state_42325__$1 = (function (){var statearr_42344 = state_42325;
(statearr_42344[(19)] = inst_42238__$1);

return statearr_42344;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42325__$1,(22),inst_42239);
} else {
if((state_val_42326 === (31))){
var inst_42323 = (state_42325[(2)]);
var state_42325__$1 = state_42325;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42325__$1,inst_42323);
} else {
if((state_val_42326 === (32))){
var inst_42278 = (state_42325[(16)]);
var inst_42283 = inst_42278.cljs$lang$protocol_mask$partition0$;
var inst_42284 = (inst_42283 & (64));
var inst_42285 = inst_42278.cljs$core$ISeq$;
var inst_42286 = (cljs.core.PROTOCOL_SENTINEL === inst_42285);
var inst_42287 = ((inst_42284) || (inst_42286));
var state_42325__$1 = state_42325;
if(cljs.core.truth_(inst_42287)){
var statearr_42345_42425 = state_42325__$1;
(statearr_42345_42425[(1)] = (35));

} else {
var statearr_42346_42426 = state_42325__$1;
(statearr_42346_42426[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42326 === (40))){
var inst_42300 = (state_42325[(20)]);
var inst_42299 = (state_42325[(2)]);
var inst_42300__$1 = cljs.core.get.call(null,inst_42299,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_42301 = cljs.core.get.call(null,inst_42299,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_42302 = cljs.core.not_empty.call(null,inst_42300__$1);
var state_42325__$1 = (function (){var statearr_42347 = state_42325;
(statearr_42347[(21)] = inst_42301);

(statearr_42347[(20)] = inst_42300__$1);

return statearr_42347;
})();
if(cljs.core.truth_(inst_42302)){
var statearr_42348_42427 = state_42325__$1;
(statearr_42348_42427[(1)] = (41));

} else {
var statearr_42349_42428 = state_42325__$1;
(statearr_42349_42428[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42326 === (33))){
var state_42325__$1 = state_42325;
var statearr_42350_42429 = state_42325__$1;
(statearr_42350_42429[(2)] = false);

(statearr_42350_42429[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42326 === (13))){
var inst_42198 = (state_42325[(22)]);
var inst_42202 = cljs.core.chunk_first.call(null,inst_42198);
var inst_42203 = cljs.core.chunk_rest.call(null,inst_42198);
var inst_42204 = cljs.core.count.call(null,inst_42202);
var inst_42185 = inst_42203;
var inst_42186 = inst_42202;
var inst_42187 = inst_42204;
var inst_42188 = (0);
var state_42325__$1 = (function (){var statearr_42351 = state_42325;
(statearr_42351[(7)] = inst_42188);

(statearr_42351[(8)] = inst_42185);

(statearr_42351[(9)] = inst_42187);

(statearr_42351[(10)] = inst_42186);

return statearr_42351;
})();
var statearr_42352_42430 = state_42325__$1;
(statearr_42352_42430[(2)] = null);

(statearr_42352_42430[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42326 === (22))){
var inst_42242 = (state_42325[(23)]);
var inst_42246 = (state_42325[(24)]);
var inst_42241 = (state_42325[(25)]);
var inst_42238 = (state_42325[(19)]);
var inst_42241__$1 = (state_42325[(2)]);
var inst_42242__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_42241__$1);
var inst_42243 = (function (){var all_files = inst_42238;
var res_SINGLEQUOTE_ = inst_42241__$1;
var res = inst_42242__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_42242,inst_42246,inst_42241,inst_42238,inst_42241__$1,inst_42242__$1,state_val_42326,c__38612__auto__,map__42170,map__42170__$1,opts,before_jsload,on_jsload,reload_dependents,map__42171,map__42171__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__42167_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__42167_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_42242,inst_42246,inst_42241,inst_42238,inst_42241__$1,inst_42242__$1,state_val_42326,c__38612__auto__,map__42170,map__42170__$1,opts,before_jsload,on_jsload,reload_dependents,map__42171,map__42171__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_42244 = cljs.core.filter.call(null,inst_42243,inst_42241__$1);
var inst_42245 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_42246__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_42245);
var inst_42247 = cljs.core.not_empty.call(null,inst_42246__$1);
var state_42325__$1 = (function (){var statearr_42353 = state_42325;
(statearr_42353[(26)] = inst_42244);

(statearr_42353[(23)] = inst_42242__$1);

(statearr_42353[(24)] = inst_42246__$1);

(statearr_42353[(25)] = inst_42241__$1);

return statearr_42353;
})();
if(cljs.core.truth_(inst_42247)){
var statearr_42354_42431 = state_42325__$1;
(statearr_42354_42431[(1)] = (23));

} else {
var statearr_42355_42432 = state_42325__$1;
(statearr_42355_42432[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42326 === (36))){
var state_42325__$1 = state_42325;
var statearr_42356_42433 = state_42325__$1;
(statearr_42356_42433[(2)] = false);

(statearr_42356_42433[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42326 === (41))){
var inst_42300 = (state_42325[(20)]);
var inst_42304 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_42305 = cljs.core.map.call(null,inst_42304,inst_42300);
var inst_42306 = cljs.core.pr_str.call(null,inst_42305);
var inst_42307 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_42306)].join('');
var inst_42308 = figwheel.client.utils.log.call(null,inst_42307);
var state_42325__$1 = state_42325;
var statearr_42357_42434 = state_42325__$1;
(statearr_42357_42434[(2)] = inst_42308);

(statearr_42357_42434[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42326 === (43))){
var inst_42301 = (state_42325[(21)]);
var inst_42311 = (state_42325[(2)]);
var inst_42312 = cljs.core.not_empty.call(null,inst_42301);
var state_42325__$1 = (function (){var statearr_42358 = state_42325;
(statearr_42358[(27)] = inst_42311);

return statearr_42358;
})();
if(cljs.core.truth_(inst_42312)){
var statearr_42359_42435 = state_42325__$1;
(statearr_42359_42435[(1)] = (44));

} else {
var statearr_42360_42436 = state_42325__$1;
(statearr_42360_42436[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42326 === (29))){
var inst_42244 = (state_42325[(26)]);
var inst_42242 = (state_42325[(23)]);
var inst_42246 = (state_42325[(24)]);
var inst_42278 = (state_42325[(16)]);
var inst_42241 = (state_42325[(25)]);
var inst_42238 = (state_42325[(19)]);
var inst_42274 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_42277 = (function (){var all_files = inst_42238;
var res_SINGLEQUOTE_ = inst_42241;
var res = inst_42242;
var files_not_loaded = inst_42244;
var dependencies_that_loaded = inst_42246;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42244,inst_42242,inst_42246,inst_42278,inst_42241,inst_42238,inst_42274,state_val_42326,c__38612__auto__,map__42170,map__42170__$1,opts,before_jsload,on_jsload,reload_dependents,map__42171,map__42171__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__42276){
var map__42361 = p__42276;
var map__42361__$1 = ((((!((map__42361 == null)))?(((((map__42361.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42361.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42361):map__42361);
var namespace = cljs.core.get.call(null,map__42361__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42244,inst_42242,inst_42246,inst_42278,inst_42241,inst_42238,inst_42274,state_val_42326,c__38612__auto__,map__42170,map__42170__$1,opts,before_jsload,on_jsload,reload_dependents,map__42171,map__42171__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_42278__$1 = cljs.core.group_by.call(null,inst_42277,inst_42244);
var inst_42280 = (inst_42278__$1 == null);
var inst_42281 = cljs.core.not.call(null,inst_42280);
var state_42325__$1 = (function (){var statearr_42363 = state_42325;
(statearr_42363[(28)] = inst_42274);

(statearr_42363[(16)] = inst_42278__$1);

return statearr_42363;
})();
if(inst_42281){
var statearr_42364_42437 = state_42325__$1;
(statearr_42364_42437[(1)] = (32));

} else {
var statearr_42365_42438 = state_42325__$1;
(statearr_42365_42438[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42326 === (44))){
var inst_42301 = (state_42325[(21)]);
var inst_42314 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_42301);
var inst_42315 = cljs.core.pr_str.call(null,inst_42314);
var inst_42316 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_42315)].join('');
var inst_42317 = figwheel.client.utils.log.call(null,inst_42316);
var state_42325__$1 = state_42325;
var statearr_42366_42439 = state_42325__$1;
(statearr_42366_42439[(2)] = inst_42317);

(statearr_42366_42439[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42326 === (6))){
var inst_42219 = (state_42325[(2)]);
var state_42325__$1 = state_42325;
var statearr_42367_42440 = state_42325__$1;
(statearr_42367_42440[(2)] = inst_42219);

(statearr_42367_42440[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42326 === (28))){
var inst_42244 = (state_42325[(26)]);
var inst_42271 = (state_42325[(2)]);
var inst_42272 = cljs.core.not_empty.call(null,inst_42244);
var state_42325__$1 = (function (){var statearr_42368 = state_42325;
(statearr_42368[(29)] = inst_42271);

return statearr_42368;
})();
if(cljs.core.truth_(inst_42272)){
var statearr_42369_42441 = state_42325__$1;
(statearr_42369_42441[(1)] = (29));

} else {
var statearr_42370_42442 = state_42325__$1;
(statearr_42370_42442[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42326 === (25))){
var inst_42242 = (state_42325[(23)]);
var inst_42258 = (state_42325[(2)]);
var inst_42259 = cljs.core.not_empty.call(null,inst_42242);
var state_42325__$1 = (function (){var statearr_42371 = state_42325;
(statearr_42371[(30)] = inst_42258);

return statearr_42371;
})();
if(cljs.core.truth_(inst_42259)){
var statearr_42372_42443 = state_42325__$1;
(statearr_42372_42443[(1)] = (26));

} else {
var statearr_42373_42444 = state_42325__$1;
(statearr_42373_42444[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42326 === (34))){
var inst_42294 = (state_42325[(2)]);
var state_42325__$1 = state_42325;
if(cljs.core.truth_(inst_42294)){
var statearr_42374_42445 = state_42325__$1;
(statearr_42374_42445[(1)] = (38));

} else {
var statearr_42375_42446 = state_42325__$1;
(statearr_42375_42446[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42326 === (17))){
var state_42325__$1 = state_42325;
var statearr_42376_42447 = state_42325__$1;
(statearr_42376_42447[(2)] = recompile_dependents);

(statearr_42376_42447[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42326 === (3))){
var state_42325__$1 = state_42325;
var statearr_42377_42448 = state_42325__$1;
(statearr_42377_42448[(2)] = null);

(statearr_42377_42448[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42326 === (12))){
var inst_42215 = (state_42325[(2)]);
var state_42325__$1 = state_42325;
var statearr_42378_42449 = state_42325__$1;
(statearr_42378_42449[(2)] = inst_42215);

(statearr_42378_42449[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42326 === (2))){
var inst_42177 = (state_42325[(13)]);
var inst_42184 = cljs.core.seq.call(null,inst_42177);
var inst_42185 = inst_42184;
var inst_42186 = null;
var inst_42187 = (0);
var inst_42188 = (0);
var state_42325__$1 = (function (){var statearr_42379 = state_42325;
(statearr_42379[(7)] = inst_42188);

(statearr_42379[(8)] = inst_42185);

(statearr_42379[(9)] = inst_42187);

(statearr_42379[(10)] = inst_42186);

return statearr_42379;
})();
var statearr_42380_42450 = state_42325__$1;
(statearr_42380_42450[(2)] = null);

(statearr_42380_42450[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42326 === (23))){
var inst_42244 = (state_42325[(26)]);
var inst_42242 = (state_42325[(23)]);
var inst_42246 = (state_42325[(24)]);
var inst_42241 = (state_42325[(25)]);
var inst_42238 = (state_42325[(19)]);
var inst_42249 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_42251 = (function (){var all_files = inst_42238;
var res_SINGLEQUOTE_ = inst_42241;
var res = inst_42242;
var files_not_loaded = inst_42244;
var dependencies_that_loaded = inst_42246;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42244,inst_42242,inst_42246,inst_42241,inst_42238,inst_42249,state_val_42326,c__38612__auto__,map__42170,map__42170__$1,opts,before_jsload,on_jsload,reload_dependents,map__42171,map__42171__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__42250){
var map__42381 = p__42250;
var map__42381__$1 = ((((!((map__42381 == null)))?(((((map__42381.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42381.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42381):map__42381);
var request_url = cljs.core.get.call(null,map__42381__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42244,inst_42242,inst_42246,inst_42241,inst_42238,inst_42249,state_val_42326,c__38612__auto__,map__42170,map__42170__$1,opts,before_jsload,on_jsload,reload_dependents,map__42171,map__42171__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_42252 = cljs.core.reverse.call(null,inst_42246);
var inst_42253 = cljs.core.map.call(null,inst_42251,inst_42252);
var inst_42254 = cljs.core.pr_str.call(null,inst_42253);
var inst_42255 = figwheel.client.utils.log.call(null,inst_42254);
var state_42325__$1 = (function (){var statearr_42383 = state_42325;
(statearr_42383[(31)] = inst_42249);

return statearr_42383;
})();
var statearr_42384_42451 = state_42325__$1;
(statearr_42384_42451[(2)] = inst_42255);

(statearr_42384_42451[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42326 === (35))){
var state_42325__$1 = state_42325;
var statearr_42385_42452 = state_42325__$1;
(statearr_42385_42452[(2)] = true);

(statearr_42385_42452[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42326 === (19))){
var inst_42228 = (state_42325[(12)]);
var inst_42234 = figwheel.client.file_reloading.expand_files.call(null,inst_42228);
var state_42325__$1 = state_42325;
var statearr_42386_42453 = state_42325__$1;
(statearr_42386_42453[(2)] = inst_42234);

(statearr_42386_42453[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42326 === (11))){
var state_42325__$1 = state_42325;
var statearr_42387_42454 = state_42325__$1;
(statearr_42387_42454[(2)] = null);

(statearr_42387_42454[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42326 === (9))){
var inst_42217 = (state_42325[(2)]);
var state_42325__$1 = state_42325;
var statearr_42388_42455 = state_42325__$1;
(statearr_42388_42455[(2)] = inst_42217);

(statearr_42388_42455[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42326 === (5))){
var inst_42188 = (state_42325[(7)]);
var inst_42187 = (state_42325[(9)]);
var inst_42190 = (inst_42188 < inst_42187);
var inst_42191 = inst_42190;
var state_42325__$1 = state_42325;
if(cljs.core.truth_(inst_42191)){
var statearr_42389_42456 = state_42325__$1;
(statearr_42389_42456[(1)] = (7));

} else {
var statearr_42390_42457 = state_42325__$1;
(statearr_42390_42457[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42326 === (14))){
var inst_42198 = (state_42325[(22)]);
var inst_42207 = cljs.core.first.call(null,inst_42198);
var inst_42208 = figwheel.client.file_reloading.eval_body.call(null,inst_42207,opts);
var inst_42209 = cljs.core.next.call(null,inst_42198);
var inst_42185 = inst_42209;
var inst_42186 = null;
var inst_42187 = (0);
var inst_42188 = (0);
var state_42325__$1 = (function (){var statearr_42391 = state_42325;
(statearr_42391[(7)] = inst_42188);

(statearr_42391[(8)] = inst_42185);

(statearr_42391[(9)] = inst_42187);

(statearr_42391[(10)] = inst_42186);

(statearr_42391[(32)] = inst_42208);

return statearr_42391;
})();
var statearr_42392_42458 = state_42325__$1;
(statearr_42392_42458[(2)] = null);

(statearr_42392_42458[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42326 === (45))){
var state_42325__$1 = state_42325;
var statearr_42393_42459 = state_42325__$1;
(statearr_42393_42459[(2)] = null);

(statearr_42393_42459[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42326 === (26))){
var inst_42244 = (state_42325[(26)]);
var inst_42242 = (state_42325[(23)]);
var inst_42246 = (state_42325[(24)]);
var inst_42241 = (state_42325[(25)]);
var inst_42238 = (state_42325[(19)]);
var inst_42261 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_42263 = (function (){var all_files = inst_42238;
var res_SINGLEQUOTE_ = inst_42241;
var res = inst_42242;
var files_not_loaded = inst_42244;
var dependencies_that_loaded = inst_42246;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42244,inst_42242,inst_42246,inst_42241,inst_42238,inst_42261,state_val_42326,c__38612__auto__,map__42170,map__42170__$1,opts,before_jsload,on_jsload,reload_dependents,map__42171,map__42171__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__42262){
var map__42394 = p__42262;
var map__42394__$1 = ((((!((map__42394 == null)))?(((((map__42394.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42394.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42394):map__42394);
var namespace = cljs.core.get.call(null,map__42394__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__42394__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42244,inst_42242,inst_42246,inst_42241,inst_42238,inst_42261,state_val_42326,c__38612__auto__,map__42170,map__42170__$1,opts,before_jsload,on_jsload,reload_dependents,map__42171,map__42171__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_42264 = cljs.core.map.call(null,inst_42263,inst_42242);
var inst_42265 = cljs.core.pr_str.call(null,inst_42264);
var inst_42266 = figwheel.client.utils.log.call(null,inst_42265);
var inst_42267 = (function (){var all_files = inst_42238;
var res_SINGLEQUOTE_ = inst_42241;
var res = inst_42242;
var files_not_loaded = inst_42244;
var dependencies_that_loaded = inst_42246;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42244,inst_42242,inst_42246,inst_42241,inst_42238,inst_42261,inst_42263,inst_42264,inst_42265,inst_42266,state_val_42326,c__38612__auto__,map__42170,map__42170__$1,opts,before_jsload,on_jsload,reload_dependents,map__42171,map__42171__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42244,inst_42242,inst_42246,inst_42241,inst_42238,inst_42261,inst_42263,inst_42264,inst_42265,inst_42266,state_val_42326,c__38612__auto__,map__42170,map__42170__$1,opts,before_jsload,on_jsload,reload_dependents,map__42171,map__42171__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_42268 = setTimeout(inst_42267,(10));
var state_42325__$1 = (function (){var statearr_42396 = state_42325;
(statearr_42396[(33)] = inst_42266);

(statearr_42396[(34)] = inst_42261);

return statearr_42396;
})();
var statearr_42397_42460 = state_42325__$1;
(statearr_42397_42460[(2)] = inst_42268);

(statearr_42397_42460[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42326 === (16))){
var state_42325__$1 = state_42325;
var statearr_42398_42461 = state_42325__$1;
(statearr_42398_42461[(2)] = reload_dependents);

(statearr_42398_42461[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42326 === (38))){
var inst_42278 = (state_42325[(16)]);
var inst_42296 = cljs.core.apply.call(null,cljs.core.hash_map,inst_42278);
var state_42325__$1 = state_42325;
var statearr_42399_42462 = state_42325__$1;
(statearr_42399_42462[(2)] = inst_42296);

(statearr_42399_42462[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42326 === (30))){
var state_42325__$1 = state_42325;
var statearr_42400_42463 = state_42325__$1;
(statearr_42400_42463[(2)] = null);

(statearr_42400_42463[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42326 === (10))){
var inst_42198 = (state_42325[(22)]);
var inst_42200 = cljs.core.chunked_seq_QMARK_.call(null,inst_42198);
var state_42325__$1 = state_42325;
if(inst_42200){
var statearr_42401_42464 = state_42325__$1;
(statearr_42401_42464[(1)] = (13));

} else {
var statearr_42402_42465 = state_42325__$1;
(statearr_42402_42465[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42326 === (18))){
var inst_42232 = (state_42325[(2)]);
var state_42325__$1 = state_42325;
if(cljs.core.truth_(inst_42232)){
var statearr_42403_42466 = state_42325__$1;
(statearr_42403_42466[(1)] = (19));

} else {
var statearr_42404_42467 = state_42325__$1;
(statearr_42404_42467[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42326 === (42))){
var state_42325__$1 = state_42325;
var statearr_42405_42468 = state_42325__$1;
(statearr_42405_42468[(2)] = null);

(statearr_42405_42468[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42326 === (37))){
var inst_42291 = (state_42325[(2)]);
var state_42325__$1 = state_42325;
var statearr_42406_42469 = state_42325__$1;
(statearr_42406_42469[(2)] = inst_42291);

(statearr_42406_42469[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42326 === (8))){
var inst_42185 = (state_42325[(8)]);
var inst_42198 = (state_42325[(22)]);
var inst_42198__$1 = cljs.core.seq.call(null,inst_42185);
var state_42325__$1 = (function (){var statearr_42407 = state_42325;
(statearr_42407[(22)] = inst_42198__$1);

return statearr_42407;
})();
if(inst_42198__$1){
var statearr_42408_42470 = state_42325__$1;
(statearr_42408_42470[(1)] = (10));

} else {
var statearr_42409_42471 = state_42325__$1;
(statearr_42409_42471[(1)] = (11));

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
}
});})(c__38612__auto__,map__42170,map__42170__$1,opts,before_jsload,on_jsload,reload_dependents,map__42171,map__42171__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__38522__auto__,c__38612__auto__,map__42170,map__42170__$1,opts,before_jsload,on_jsload,reload_dependents,map__42171,map__42171__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__38523__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__38523__auto____0 = (function (){
var statearr_42410 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42410[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__38523__auto__);

(statearr_42410[(1)] = (1));

return statearr_42410;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__38523__auto____1 = (function (state_42325){
while(true){
var ret_value__38524__auto__ = (function (){try{while(true){
var result__38525__auto__ = switch__38522__auto__.call(null,state_42325);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38525__auto__;
}
break;
}
}catch (e42411){if((e42411 instanceof Object)){
var ex__38526__auto__ = e42411;
var statearr_42412_42472 = state_42325;
(statearr_42412_42472[(5)] = ex__38526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42325);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42411;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42473 = state_42325;
state_42325 = G__42473;
continue;
} else {
return ret_value__38524__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__38523__auto__ = function(state_42325){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__38523__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__38523__auto____1.call(this,state_42325);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__38523__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__38523__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__38523__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__38523__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__38523__auto__;
})()
;})(switch__38522__auto__,c__38612__auto__,map__42170,map__42170__$1,opts,before_jsload,on_jsload,reload_dependents,map__42171,map__42171__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__38614__auto__ = (function (){var statearr_42413 = f__38613__auto__.call(null);
(statearr_42413[(6)] = c__38612__auto__);

return statearr_42413;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38614__auto__);
});})(c__38612__auto__,map__42170,map__42170__$1,opts,before_jsload,on_jsload,reload_dependents,map__42171,map__42171__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__38612__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__42476,link){
var map__42477 = p__42476;
var map__42477__$1 = ((((!((map__42477 == null)))?(((((map__42477.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42477.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42477):map__42477);
var file = cljs.core.get.call(null,map__42477__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__42477,map__42477__$1,file){
return (function (p1__42474_SHARP_,p2__42475_SHARP_){
if(cljs.core._EQ_.call(null,p1__42474_SHARP_,p2__42475_SHARP_)){
return p1__42474_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__42477,map__42477__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__42480){
var map__42481 = p__42480;
var map__42481__$1 = ((((!((map__42481 == null)))?(((((map__42481.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42481.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42481):map__42481);
var match_length = cljs.core.get.call(null,map__42481__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__42481__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__42479_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__42479_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5457__auto__)){
var res = temp__5457__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__42483_SHARP_,p2__42484_SHARP_){
return cljs.core.assoc.call(null,p1__42483_SHARP_,cljs.core.get.call(null,p2__42484_SHARP_,key),p2__42484_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5455__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5455__auto__)){
var link = temp__5455__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5455__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5455__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_42485 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_42485);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_42485);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__42486,p__42487){
var map__42488 = p__42486;
var map__42488__$1 = ((((!((map__42488 == null)))?(((((map__42488.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42488.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42488):map__42488);
var on_cssload = cljs.core.get.call(null,map__42488__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__42489 = p__42487;
var map__42489__$1 = ((((!((map__42489 == null)))?(((((map__42489.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42489.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42489):map__42489);
var files_msg = map__42489__$1;
var files = cljs.core.get.call(null,map__42489__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__5457__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5457__auto__)){
var f_datas = temp__5457__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1526826997448
