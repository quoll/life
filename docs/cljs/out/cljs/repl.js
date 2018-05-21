// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__43299){
var map__43300 = p__43299;
var map__43300__$1 = ((((!((map__43300 == null)))?(((((map__43300.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43300.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43300):map__43300);
var m = map__43300__$1;
var n = cljs.core.get.call(null,map__43300__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__43300__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__43302_43324 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__43303_43325 = null;
var count__43304_43326 = (0);
var i__43305_43327 = (0);
while(true){
if((i__43305_43327 < count__43304_43326)){
var f_43328 = cljs.core._nth.call(null,chunk__43303_43325,i__43305_43327);
cljs.core.println.call(null,"  ",f_43328);


var G__43329 = seq__43302_43324;
var G__43330 = chunk__43303_43325;
var G__43331 = count__43304_43326;
var G__43332 = (i__43305_43327 + (1));
seq__43302_43324 = G__43329;
chunk__43303_43325 = G__43330;
count__43304_43326 = G__43331;
i__43305_43327 = G__43332;
continue;
} else {
var temp__5457__auto___43333 = cljs.core.seq.call(null,seq__43302_43324);
if(temp__5457__auto___43333){
var seq__43302_43334__$1 = temp__5457__auto___43333;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43302_43334__$1)){
var c__4319__auto___43335 = cljs.core.chunk_first.call(null,seq__43302_43334__$1);
var G__43336 = cljs.core.chunk_rest.call(null,seq__43302_43334__$1);
var G__43337 = c__4319__auto___43335;
var G__43338 = cljs.core.count.call(null,c__4319__auto___43335);
var G__43339 = (0);
seq__43302_43324 = G__43336;
chunk__43303_43325 = G__43337;
count__43304_43326 = G__43338;
i__43305_43327 = G__43339;
continue;
} else {
var f_43340 = cljs.core.first.call(null,seq__43302_43334__$1);
cljs.core.println.call(null,"  ",f_43340);


var G__43341 = cljs.core.next.call(null,seq__43302_43334__$1);
var G__43342 = null;
var G__43343 = (0);
var G__43344 = (0);
seq__43302_43324 = G__43341;
chunk__43303_43325 = G__43342;
count__43304_43326 = G__43343;
i__43305_43327 = G__43344;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_43345 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_43345);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_43345)))?cljs.core.second.call(null,arglists_43345):arglists_43345));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__43306_43346 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__43307_43347 = null;
var count__43308_43348 = (0);
var i__43309_43349 = (0);
while(true){
if((i__43309_43349 < count__43308_43348)){
var vec__43310_43350 = cljs.core._nth.call(null,chunk__43307_43347,i__43309_43349);
var name_43351 = cljs.core.nth.call(null,vec__43310_43350,(0),null);
var map__43313_43352 = cljs.core.nth.call(null,vec__43310_43350,(1),null);
var map__43313_43353__$1 = ((((!((map__43313_43352 == null)))?(((((map__43313_43352.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43313_43352.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43313_43352):map__43313_43352);
var doc_43354 = cljs.core.get.call(null,map__43313_43353__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_43355 = cljs.core.get.call(null,map__43313_43353__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_43351);

cljs.core.println.call(null," ",arglists_43355);

if(cljs.core.truth_(doc_43354)){
cljs.core.println.call(null," ",doc_43354);
} else {
}


var G__43356 = seq__43306_43346;
var G__43357 = chunk__43307_43347;
var G__43358 = count__43308_43348;
var G__43359 = (i__43309_43349 + (1));
seq__43306_43346 = G__43356;
chunk__43307_43347 = G__43357;
count__43308_43348 = G__43358;
i__43309_43349 = G__43359;
continue;
} else {
var temp__5457__auto___43360 = cljs.core.seq.call(null,seq__43306_43346);
if(temp__5457__auto___43360){
var seq__43306_43361__$1 = temp__5457__auto___43360;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43306_43361__$1)){
var c__4319__auto___43362 = cljs.core.chunk_first.call(null,seq__43306_43361__$1);
var G__43363 = cljs.core.chunk_rest.call(null,seq__43306_43361__$1);
var G__43364 = c__4319__auto___43362;
var G__43365 = cljs.core.count.call(null,c__4319__auto___43362);
var G__43366 = (0);
seq__43306_43346 = G__43363;
chunk__43307_43347 = G__43364;
count__43308_43348 = G__43365;
i__43309_43349 = G__43366;
continue;
} else {
var vec__43315_43367 = cljs.core.first.call(null,seq__43306_43361__$1);
var name_43368 = cljs.core.nth.call(null,vec__43315_43367,(0),null);
var map__43318_43369 = cljs.core.nth.call(null,vec__43315_43367,(1),null);
var map__43318_43370__$1 = ((((!((map__43318_43369 == null)))?(((((map__43318_43369.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43318_43369.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43318_43369):map__43318_43369);
var doc_43371 = cljs.core.get.call(null,map__43318_43370__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_43372 = cljs.core.get.call(null,map__43318_43370__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_43368);

cljs.core.println.call(null," ",arglists_43372);

if(cljs.core.truth_(doc_43371)){
cljs.core.println.call(null," ",doc_43371);
} else {
}


var G__43373 = cljs.core.next.call(null,seq__43306_43361__$1);
var G__43374 = null;
var G__43375 = (0);
var G__43376 = (0);
seq__43306_43346 = G__43373;
chunk__43307_43347 = G__43374;
count__43308_43348 = G__43375;
i__43309_43349 = G__43376;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__43320 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__43321 = null;
var count__43322 = (0);
var i__43323 = (0);
while(true){
if((i__43323 < count__43322)){
var role = cljs.core._nth.call(null,chunk__43321,i__43323);
var temp__5457__auto___43377__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___43377__$1)){
var spec_43378 = temp__5457__auto___43377__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_43378));
} else {
}


var G__43379 = seq__43320;
var G__43380 = chunk__43321;
var G__43381 = count__43322;
var G__43382 = (i__43323 + (1));
seq__43320 = G__43379;
chunk__43321 = G__43380;
count__43322 = G__43381;
i__43323 = G__43382;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__43320);
if(temp__5457__auto____$1){
var seq__43320__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43320__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__43320__$1);
var G__43383 = cljs.core.chunk_rest.call(null,seq__43320__$1);
var G__43384 = c__4319__auto__;
var G__43385 = cljs.core.count.call(null,c__4319__auto__);
var G__43386 = (0);
seq__43320 = G__43383;
chunk__43321 = G__43384;
count__43322 = G__43385;
i__43323 = G__43386;
continue;
} else {
var role = cljs.core.first.call(null,seq__43320__$1);
var temp__5457__auto___43387__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___43387__$2)){
var spec_43388 = temp__5457__auto___43387__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_43388));
} else {
}


var G__43389 = cljs.core.next.call(null,seq__43320__$1);
var G__43390 = null;
var G__43391 = (0);
var G__43392 = (0);
seq__43320 = G__43389;
chunk__43321 = G__43390;
count__43322 = G__43391;
i__43323 = G__43392;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1526826998921
