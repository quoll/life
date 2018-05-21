// Compiled by ClojureScript 1.10.238 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.16";
figwheel.client.js_stringify = ((((typeof JSON !== 'undefined') && (!((JSON.stringify == null)))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e43587){if((e43587 instanceof Error)){
var e = e43587;
return "Error: Unable to stringify";
} else {
throw e43587;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__43590 = arguments.length;
switch (G__43590) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__43588_SHARP_){
if(typeof p1__43588_SHARP_ === 'string'){
return p1__43588_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__43588_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43593 = arguments.length;
var i__4500__auto___43594 = (0);
while(true){
if((i__4500__auto___43594 < len__4499__auto___43593)){
args__4502__auto__.push((arguments[i__4500__auto___43594]));

var G__43595 = (i__4500__auto___43594 + (1));
i__4500__auto___43594 = G__43595;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq43592){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43592));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43597 = arguments.length;
var i__4500__auto___43598 = (0);
while(true){
if((i__4500__auto___43598 < len__4499__auto___43597)){
args__4502__auto__.push((arguments[i__4500__auto___43598]));

var G__43599 = (i__4500__auto___43598 + (1));
i__4500__auto___43598 = G__43599;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq43596){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43596));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__43600){
var map__43601 = p__43600;
var map__43601__$1 = ((((!((map__43601 == null)))?(((((map__43601.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43601.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43601):map__43601);
var message = cljs.core.get.call(null,map__43601__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__43601__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__3922__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__3911__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__3911__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__3911__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__38612__auto___43680 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38612__auto___43680,ch){
return (function (){
var f__38613__auto__ = (function (){var switch__38522__auto__ = ((function (c__38612__auto___43680,ch){
return (function (state_43652){
var state_val_43653 = (state_43652[(1)]);
if((state_val_43653 === (7))){
var inst_43648 = (state_43652[(2)]);
var state_43652__$1 = state_43652;
var statearr_43654_43681 = state_43652__$1;
(statearr_43654_43681[(2)] = inst_43648);

(statearr_43654_43681[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43653 === (1))){
var state_43652__$1 = state_43652;
var statearr_43655_43682 = state_43652__$1;
(statearr_43655_43682[(2)] = null);

(statearr_43655_43682[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43653 === (4))){
var inst_43605 = (state_43652[(7)]);
var inst_43605__$1 = (state_43652[(2)]);
var state_43652__$1 = (function (){var statearr_43656 = state_43652;
(statearr_43656[(7)] = inst_43605__$1);

return statearr_43656;
})();
if(cljs.core.truth_(inst_43605__$1)){
var statearr_43657_43683 = state_43652__$1;
(statearr_43657_43683[(1)] = (5));

} else {
var statearr_43658_43684 = state_43652__$1;
(statearr_43658_43684[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43653 === (15))){
var inst_43612 = (state_43652[(8)]);
var inst_43627 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_43612);
var inst_43628 = cljs.core.first.call(null,inst_43627);
var inst_43629 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_43628);
var inst_43630 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_43629)].join('');
var inst_43631 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_43630);
var state_43652__$1 = state_43652;
var statearr_43659_43685 = state_43652__$1;
(statearr_43659_43685[(2)] = inst_43631);

(statearr_43659_43685[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43653 === (13))){
var inst_43636 = (state_43652[(2)]);
var state_43652__$1 = state_43652;
var statearr_43660_43686 = state_43652__$1;
(statearr_43660_43686[(2)] = inst_43636);

(statearr_43660_43686[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43653 === (6))){
var state_43652__$1 = state_43652;
var statearr_43661_43687 = state_43652__$1;
(statearr_43661_43687[(2)] = null);

(statearr_43661_43687[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43653 === (17))){
var inst_43634 = (state_43652[(2)]);
var state_43652__$1 = state_43652;
var statearr_43662_43688 = state_43652__$1;
(statearr_43662_43688[(2)] = inst_43634);

(statearr_43662_43688[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43653 === (3))){
var inst_43650 = (state_43652[(2)]);
var state_43652__$1 = state_43652;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43652__$1,inst_43650);
} else {
if((state_val_43653 === (12))){
var inst_43611 = (state_43652[(9)]);
var inst_43625 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_43611,opts);
var state_43652__$1 = state_43652;
if(cljs.core.truth_(inst_43625)){
var statearr_43663_43689 = state_43652__$1;
(statearr_43663_43689[(1)] = (15));

} else {
var statearr_43664_43690 = state_43652__$1;
(statearr_43664_43690[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43653 === (2))){
var state_43652__$1 = state_43652;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43652__$1,(4),ch);
} else {
if((state_val_43653 === (11))){
var inst_43612 = (state_43652[(8)]);
var inst_43617 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43618 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_43612);
var inst_43619 = cljs.core.async.timeout.call(null,(1000));
var inst_43620 = [inst_43618,inst_43619];
var inst_43621 = (new cljs.core.PersistentVector(null,2,(5),inst_43617,inst_43620,null));
var state_43652__$1 = state_43652;
return cljs.core.async.ioc_alts_BANG_.call(null,state_43652__$1,(14),inst_43621);
} else {
if((state_val_43653 === (9))){
var inst_43612 = (state_43652[(8)]);
var inst_43638 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_43639 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_43612);
var inst_43640 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_43639);
var inst_43641 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_43640)].join('');
var inst_43642 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_43641);
var state_43652__$1 = (function (){var statearr_43665 = state_43652;
(statearr_43665[(10)] = inst_43638);

return statearr_43665;
})();
var statearr_43666_43691 = state_43652__$1;
(statearr_43666_43691[(2)] = inst_43642);

(statearr_43666_43691[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43653 === (5))){
var inst_43605 = (state_43652[(7)]);
var inst_43607 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_43608 = (new cljs.core.PersistentArrayMap(null,2,inst_43607,null));
var inst_43609 = (new cljs.core.PersistentHashSet(null,inst_43608,null));
var inst_43610 = figwheel.client.focus_msgs.call(null,inst_43609,inst_43605);
var inst_43611 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_43610);
var inst_43612 = cljs.core.first.call(null,inst_43610);
var inst_43613 = figwheel.client.autoload_QMARK_.call(null);
var state_43652__$1 = (function (){var statearr_43667 = state_43652;
(statearr_43667[(8)] = inst_43612);

(statearr_43667[(9)] = inst_43611);

return statearr_43667;
})();
if(cljs.core.truth_(inst_43613)){
var statearr_43668_43692 = state_43652__$1;
(statearr_43668_43692[(1)] = (8));

} else {
var statearr_43669_43693 = state_43652__$1;
(statearr_43669_43693[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43653 === (14))){
var inst_43623 = (state_43652[(2)]);
var state_43652__$1 = state_43652;
var statearr_43670_43694 = state_43652__$1;
(statearr_43670_43694[(2)] = inst_43623);

(statearr_43670_43694[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43653 === (16))){
var state_43652__$1 = state_43652;
var statearr_43671_43695 = state_43652__$1;
(statearr_43671_43695[(2)] = null);

(statearr_43671_43695[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43653 === (10))){
var inst_43644 = (state_43652[(2)]);
var state_43652__$1 = (function (){var statearr_43672 = state_43652;
(statearr_43672[(11)] = inst_43644);

return statearr_43672;
})();
var statearr_43673_43696 = state_43652__$1;
(statearr_43673_43696[(2)] = null);

(statearr_43673_43696[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43653 === (8))){
var inst_43611 = (state_43652[(9)]);
var inst_43615 = figwheel.client.reload_file_state_QMARK_.call(null,inst_43611,opts);
var state_43652__$1 = state_43652;
if(cljs.core.truth_(inst_43615)){
var statearr_43674_43697 = state_43652__$1;
(statearr_43674_43697[(1)] = (11));

} else {
var statearr_43675_43698 = state_43652__$1;
(statearr_43675_43698[(1)] = (12));

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
});})(c__38612__auto___43680,ch))
;
return ((function (switch__38522__auto__,c__38612__auto___43680,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__38523__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__38523__auto____0 = (function (){
var statearr_43676 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43676[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__38523__auto__);

(statearr_43676[(1)] = (1));

return statearr_43676;
});
var figwheel$client$file_reloader_plugin_$_state_machine__38523__auto____1 = (function (state_43652){
while(true){
var ret_value__38524__auto__ = (function (){try{while(true){
var result__38525__auto__ = switch__38522__auto__.call(null,state_43652);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38525__auto__;
}
break;
}
}catch (e43677){if((e43677 instanceof Object)){
var ex__38526__auto__ = e43677;
var statearr_43678_43699 = state_43652;
(statearr_43678_43699[(5)] = ex__38526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43652);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43677;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43700 = state_43652;
state_43652 = G__43700;
continue;
} else {
return ret_value__38524__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__38523__auto__ = function(state_43652){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__38523__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__38523__auto____1.call(this,state_43652);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__38523__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__38523__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__38523__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__38523__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__38523__auto__;
})()
;})(switch__38522__auto__,c__38612__auto___43680,ch))
})();
var state__38614__auto__ = (function (){var statearr_43679 = f__38613__auto__.call(null);
(statearr_43679[(6)] = c__38612__auto___43680);

return statearr_43679;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38614__auto__);
});})(c__38612__auto___43680,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__43701_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__43701_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_43705 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_43705){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_43703 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_43704 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_43703,_STAR_print_fn_STAR_43704,sb,base_path_43705){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR_43703,_STAR_print_fn_STAR_43704,sb,base_path_43705))
;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_43704;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_43703;
}}catch (e43702){if((e43702 instanceof Error)){
var e = e43702;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_43705], null));
} else {
var e = e43702;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_43705))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__43706){
var map__43707 = p__43706;
var map__43707__$1 = ((((!((map__43707 == null)))?(((((map__43707.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43707.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43707):map__43707);
var opts = map__43707__$1;
var build_id = cljs.core.get.call(null,map__43707__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__43707,map__43707__$1,opts,build_id){
return (function (p__43709){
var vec__43710 = p__43709;
var seq__43711 = cljs.core.seq.call(null,vec__43710);
var first__43712 = cljs.core.first.call(null,seq__43711);
var seq__43711__$1 = cljs.core.next.call(null,seq__43711);
var map__43713 = first__43712;
var map__43713__$1 = ((((!((map__43713 == null)))?(((((map__43713.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43713.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43713):map__43713);
var msg = map__43713__$1;
var msg_name = cljs.core.get.call(null,map__43713__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__43711__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__43710,seq__43711,first__43712,seq__43711__$1,map__43713,map__43713__$1,msg,msg_name,_,map__43707,map__43707__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__43710,seq__43711,first__43712,seq__43711__$1,map__43713,map__43713__$1,msg,msg_name,_,map__43707,map__43707__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__43707,map__43707__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__43715){
var vec__43716 = p__43715;
var seq__43717 = cljs.core.seq.call(null,vec__43716);
var first__43718 = cljs.core.first.call(null,seq__43717);
var seq__43717__$1 = cljs.core.next.call(null,seq__43717);
var map__43719 = first__43718;
var map__43719__$1 = ((((!((map__43719 == null)))?(((((map__43719.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43719.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43719):map__43719);
var msg = map__43719__$1;
var msg_name = cljs.core.get.call(null,map__43719__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__43717__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__43721){
var map__43722 = p__43721;
var map__43722__$1 = ((((!((map__43722 == null)))?(((((map__43722.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43722.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43722):map__43722);
var on_compile_warning = cljs.core.get.call(null,map__43722__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__43722__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__43722,map__43722__$1,on_compile_warning,on_compile_fail){
return (function (p__43724){
var vec__43725 = p__43724;
var seq__43726 = cljs.core.seq.call(null,vec__43725);
var first__43727 = cljs.core.first.call(null,seq__43726);
var seq__43726__$1 = cljs.core.next.call(null,seq__43726);
var map__43728 = first__43727;
var map__43728__$1 = ((((!((map__43728 == null)))?(((((map__43728.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43728.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43728):map__43728);
var msg = map__43728__$1;
var msg_name = cljs.core.get.call(null,map__43728__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__43726__$1;
var pred__43730 = cljs.core._EQ_;
var expr__43731 = msg_name;
if(cljs.core.truth_(pred__43730.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__43731))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__43730.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__43731))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__43722,map__43722__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__38612__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38612__auto__,msg_hist,msg_names,msg){
return (function (){
var f__38613__auto__ = (function (){var switch__38522__auto__ = ((function (c__38612__auto__,msg_hist,msg_names,msg){
return (function (state_43820){
var state_val_43821 = (state_43820[(1)]);
if((state_val_43821 === (7))){
var inst_43740 = (state_43820[(2)]);
var state_43820__$1 = state_43820;
if(cljs.core.truth_(inst_43740)){
var statearr_43822_43869 = state_43820__$1;
(statearr_43822_43869[(1)] = (8));

} else {
var statearr_43823_43870 = state_43820__$1;
(statearr_43823_43870[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43821 === (20))){
var inst_43814 = (state_43820[(2)]);
var state_43820__$1 = state_43820;
var statearr_43824_43871 = state_43820__$1;
(statearr_43824_43871[(2)] = inst_43814);

(statearr_43824_43871[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43821 === (27))){
var inst_43810 = (state_43820[(2)]);
var state_43820__$1 = state_43820;
var statearr_43825_43872 = state_43820__$1;
(statearr_43825_43872[(2)] = inst_43810);

(statearr_43825_43872[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43821 === (1))){
var inst_43733 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_43820__$1 = state_43820;
if(cljs.core.truth_(inst_43733)){
var statearr_43826_43873 = state_43820__$1;
(statearr_43826_43873[(1)] = (2));

} else {
var statearr_43827_43874 = state_43820__$1;
(statearr_43827_43874[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43821 === (24))){
var inst_43812 = (state_43820[(2)]);
var state_43820__$1 = state_43820;
var statearr_43828_43875 = state_43820__$1;
(statearr_43828_43875[(2)] = inst_43812);

(statearr_43828_43875[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43821 === (4))){
var inst_43818 = (state_43820[(2)]);
var state_43820__$1 = state_43820;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43820__$1,inst_43818);
} else {
if((state_val_43821 === (15))){
var inst_43816 = (state_43820[(2)]);
var state_43820__$1 = state_43820;
var statearr_43829_43876 = state_43820__$1;
(statearr_43829_43876[(2)] = inst_43816);

(statearr_43829_43876[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43821 === (21))){
var inst_43769 = (state_43820[(2)]);
var inst_43770 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43771 = figwheel.client.auto_jump_to_error.call(null,opts,inst_43770);
var state_43820__$1 = (function (){var statearr_43830 = state_43820;
(statearr_43830[(7)] = inst_43769);

return statearr_43830;
})();
var statearr_43831_43877 = state_43820__$1;
(statearr_43831_43877[(2)] = inst_43771);

(statearr_43831_43877[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43821 === (31))){
var inst_43799 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_43820__$1 = state_43820;
if(cljs.core.truth_(inst_43799)){
var statearr_43832_43878 = state_43820__$1;
(statearr_43832_43878[(1)] = (34));

} else {
var statearr_43833_43879 = state_43820__$1;
(statearr_43833_43879[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43821 === (32))){
var inst_43808 = (state_43820[(2)]);
var state_43820__$1 = state_43820;
var statearr_43834_43880 = state_43820__$1;
(statearr_43834_43880[(2)] = inst_43808);

(statearr_43834_43880[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43821 === (33))){
var inst_43795 = (state_43820[(2)]);
var inst_43796 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43797 = figwheel.client.auto_jump_to_error.call(null,opts,inst_43796);
var state_43820__$1 = (function (){var statearr_43835 = state_43820;
(statearr_43835[(8)] = inst_43795);

return statearr_43835;
})();
var statearr_43836_43881 = state_43820__$1;
(statearr_43836_43881[(2)] = inst_43797);

(statearr_43836_43881[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43821 === (13))){
var inst_43754 = figwheel.client.heads_up.clear.call(null);
var state_43820__$1 = state_43820;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43820__$1,(16),inst_43754);
} else {
if((state_val_43821 === (22))){
var inst_43775 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43776 = figwheel.client.heads_up.append_warning_message.call(null,inst_43775);
var state_43820__$1 = state_43820;
var statearr_43837_43882 = state_43820__$1;
(statearr_43837_43882[(2)] = inst_43776);

(statearr_43837_43882[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43821 === (36))){
var inst_43806 = (state_43820[(2)]);
var state_43820__$1 = state_43820;
var statearr_43838_43883 = state_43820__$1;
(statearr_43838_43883[(2)] = inst_43806);

(statearr_43838_43883[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43821 === (29))){
var inst_43786 = (state_43820[(2)]);
var inst_43787 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43788 = figwheel.client.auto_jump_to_error.call(null,opts,inst_43787);
var state_43820__$1 = (function (){var statearr_43839 = state_43820;
(statearr_43839[(9)] = inst_43786);

return statearr_43839;
})();
var statearr_43840_43884 = state_43820__$1;
(statearr_43840_43884[(2)] = inst_43788);

(statearr_43840_43884[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43821 === (6))){
var inst_43735 = (state_43820[(10)]);
var state_43820__$1 = state_43820;
var statearr_43841_43885 = state_43820__$1;
(statearr_43841_43885[(2)] = inst_43735);

(statearr_43841_43885[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43821 === (28))){
var inst_43782 = (state_43820[(2)]);
var inst_43783 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43784 = figwheel.client.heads_up.display_warning.call(null,inst_43783);
var state_43820__$1 = (function (){var statearr_43842 = state_43820;
(statearr_43842[(11)] = inst_43782);

return statearr_43842;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43820__$1,(29),inst_43784);
} else {
if((state_val_43821 === (25))){
var inst_43780 = figwheel.client.heads_up.clear.call(null);
var state_43820__$1 = state_43820;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43820__$1,(28),inst_43780);
} else {
if((state_val_43821 === (34))){
var inst_43801 = figwheel.client.heads_up.flash_loaded.call(null);
var state_43820__$1 = state_43820;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43820__$1,(37),inst_43801);
} else {
if((state_val_43821 === (17))){
var inst_43760 = (state_43820[(2)]);
var inst_43761 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43762 = figwheel.client.auto_jump_to_error.call(null,opts,inst_43761);
var state_43820__$1 = (function (){var statearr_43843 = state_43820;
(statearr_43843[(12)] = inst_43760);

return statearr_43843;
})();
var statearr_43844_43886 = state_43820__$1;
(statearr_43844_43886[(2)] = inst_43762);

(statearr_43844_43886[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43821 === (3))){
var inst_43752 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_43820__$1 = state_43820;
if(cljs.core.truth_(inst_43752)){
var statearr_43845_43887 = state_43820__$1;
(statearr_43845_43887[(1)] = (13));

} else {
var statearr_43846_43888 = state_43820__$1;
(statearr_43846_43888[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43821 === (12))){
var inst_43748 = (state_43820[(2)]);
var state_43820__$1 = state_43820;
var statearr_43847_43889 = state_43820__$1;
(statearr_43847_43889[(2)] = inst_43748);

(statearr_43847_43889[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43821 === (2))){
var inst_43735 = (state_43820[(10)]);
var inst_43735__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_43820__$1 = (function (){var statearr_43848 = state_43820;
(statearr_43848[(10)] = inst_43735__$1);

return statearr_43848;
})();
if(cljs.core.truth_(inst_43735__$1)){
var statearr_43849_43890 = state_43820__$1;
(statearr_43849_43890[(1)] = (5));

} else {
var statearr_43850_43891 = state_43820__$1;
(statearr_43850_43891[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43821 === (23))){
var inst_43778 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_43820__$1 = state_43820;
if(cljs.core.truth_(inst_43778)){
var statearr_43851_43892 = state_43820__$1;
(statearr_43851_43892[(1)] = (25));

} else {
var statearr_43852_43893 = state_43820__$1;
(statearr_43852_43893[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43821 === (35))){
var state_43820__$1 = state_43820;
var statearr_43853_43894 = state_43820__$1;
(statearr_43853_43894[(2)] = null);

(statearr_43853_43894[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43821 === (19))){
var inst_43773 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_43820__$1 = state_43820;
if(cljs.core.truth_(inst_43773)){
var statearr_43854_43895 = state_43820__$1;
(statearr_43854_43895[(1)] = (22));

} else {
var statearr_43855_43896 = state_43820__$1;
(statearr_43855_43896[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43821 === (11))){
var inst_43744 = (state_43820[(2)]);
var state_43820__$1 = state_43820;
var statearr_43856_43897 = state_43820__$1;
(statearr_43856_43897[(2)] = inst_43744);

(statearr_43856_43897[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43821 === (9))){
var inst_43746 = figwheel.client.heads_up.clear.call(null);
var state_43820__$1 = state_43820;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43820__$1,(12),inst_43746);
} else {
if((state_val_43821 === (5))){
var inst_43737 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_43820__$1 = state_43820;
var statearr_43857_43898 = state_43820__$1;
(statearr_43857_43898[(2)] = inst_43737);

(statearr_43857_43898[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43821 === (14))){
var inst_43764 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_43820__$1 = state_43820;
if(cljs.core.truth_(inst_43764)){
var statearr_43858_43899 = state_43820__$1;
(statearr_43858_43899[(1)] = (18));

} else {
var statearr_43859_43900 = state_43820__$1;
(statearr_43859_43900[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43821 === (26))){
var inst_43790 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_43820__$1 = state_43820;
if(cljs.core.truth_(inst_43790)){
var statearr_43860_43901 = state_43820__$1;
(statearr_43860_43901[(1)] = (30));

} else {
var statearr_43861_43902 = state_43820__$1;
(statearr_43861_43902[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43821 === (16))){
var inst_43756 = (state_43820[(2)]);
var inst_43757 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43758 = figwheel.client.heads_up.display_exception.call(null,inst_43757);
var state_43820__$1 = (function (){var statearr_43862 = state_43820;
(statearr_43862[(13)] = inst_43756);

return statearr_43862;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43820__$1,(17),inst_43758);
} else {
if((state_val_43821 === (30))){
var inst_43792 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43793 = figwheel.client.heads_up.display_warning.call(null,inst_43792);
var state_43820__$1 = state_43820;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43820__$1,(33),inst_43793);
} else {
if((state_val_43821 === (10))){
var inst_43750 = (state_43820[(2)]);
var state_43820__$1 = state_43820;
var statearr_43863_43903 = state_43820__$1;
(statearr_43863_43903[(2)] = inst_43750);

(statearr_43863_43903[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43821 === (18))){
var inst_43766 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43767 = figwheel.client.heads_up.display_exception.call(null,inst_43766);
var state_43820__$1 = state_43820;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43820__$1,(21),inst_43767);
} else {
if((state_val_43821 === (37))){
var inst_43803 = (state_43820[(2)]);
var state_43820__$1 = state_43820;
var statearr_43864_43904 = state_43820__$1;
(statearr_43864_43904[(2)] = inst_43803);

(statearr_43864_43904[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43821 === (8))){
var inst_43742 = figwheel.client.heads_up.flash_loaded.call(null);
var state_43820__$1 = state_43820;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43820__$1,(11),inst_43742);
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
});})(c__38612__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__38522__auto__,c__38612__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38523__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38523__auto____0 = (function (){
var statearr_43865 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43865[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38523__auto__);

(statearr_43865[(1)] = (1));

return statearr_43865;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38523__auto____1 = (function (state_43820){
while(true){
var ret_value__38524__auto__ = (function (){try{while(true){
var result__38525__auto__ = switch__38522__auto__.call(null,state_43820);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38525__auto__;
}
break;
}
}catch (e43866){if((e43866 instanceof Object)){
var ex__38526__auto__ = e43866;
var statearr_43867_43905 = state_43820;
(statearr_43867_43905[(5)] = ex__38526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43820);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43866;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43906 = state_43820;
state_43820 = G__43906;
continue;
} else {
return ret_value__38524__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38523__auto__ = function(state_43820){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38523__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38523__auto____1.call(this,state_43820);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38523__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38523__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38523__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38523__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38523__auto__;
})()
;})(switch__38522__auto__,c__38612__auto__,msg_hist,msg_names,msg))
})();
var state__38614__auto__ = (function (){var statearr_43868 = f__38613__auto__.call(null);
(statearr_43868[(6)] = c__38612__auto__);

return statearr_43868;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38614__auto__);
});})(c__38612__auto__,msg_hist,msg_names,msg))
);

return c__38612__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__38612__auto___43935 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38612__auto___43935,ch){
return (function (){
var f__38613__auto__ = (function (){var switch__38522__auto__ = ((function (c__38612__auto___43935,ch){
return (function (state_43921){
var state_val_43922 = (state_43921[(1)]);
if((state_val_43922 === (1))){
var state_43921__$1 = state_43921;
var statearr_43923_43936 = state_43921__$1;
(statearr_43923_43936[(2)] = null);

(statearr_43923_43936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43922 === (2))){
var state_43921__$1 = state_43921;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43921__$1,(4),ch);
} else {
if((state_val_43922 === (3))){
var inst_43919 = (state_43921[(2)]);
var state_43921__$1 = state_43921;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43921__$1,inst_43919);
} else {
if((state_val_43922 === (4))){
var inst_43909 = (state_43921[(7)]);
var inst_43909__$1 = (state_43921[(2)]);
var state_43921__$1 = (function (){var statearr_43924 = state_43921;
(statearr_43924[(7)] = inst_43909__$1);

return statearr_43924;
})();
if(cljs.core.truth_(inst_43909__$1)){
var statearr_43925_43937 = state_43921__$1;
(statearr_43925_43937[(1)] = (5));

} else {
var statearr_43926_43938 = state_43921__$1;
(statearr_43926_43938[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43922 === (5))){
var inst_43909 = (state_43921[(7)]);
var inst_43911 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_43909);
var state_43921__$1 = state_43921;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43921__$1,(8),inst_43911);
} else {
if((state_val_43922 === (6))){
var state_43921__$1 = state_43921;
var statearr_43927_43939 = state_43921__$1;
(statearr_43927_43939[(2)] = null);

(statearr_43927_43939[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43922 === (7))){
var inst_43917 = (state_43921[(2)]);
var state_43921__$1 = state_43921;
var statearr_43928_43940 = state_43921__$1;
(statearr_43928_43940[(2)] = inst_43917);

(statearr_43928_43940[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43922 === (8))){
var inst_43913 = (state_43921[(2)]);
var state_43921__$1 = (function (){var statearr_43929 = state_43921;
(statearr_43929[(8)] = inst_43913);

return statearr_43929;
})();
var statearr_43930_43941 = state_43921__$1;
(statearr_43930_43941[(2)] = null);

(statearr_43930_43941[(1)] = (2));


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
});})(c__38612__auto___43935,ch))
;
return ((function (switch__38522__auto__,c__38612__auto___43935,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__38523__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__38523__auto____0 = (function (){
var statearr_43931 = [null,null,null,null,null,null,null,null,null];
(statearr_43931[(0)] = figwheel$client$heads_up_plugin_$_state_machine__38523__auto__);

(statearr_43931[(1)] = (1));

return statearr_43931;
});
var figwheel$client$heads_up_plugin_$_state_machine__38523__auto____1 = (function (state_43921){
while(true){
var ret_value__38524__auto__ = (function (){try{while(true){
var result__38525__auto__ = switch__38522__auto__.call(null,state_43921);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38525__auto__;
}
break;
}
}catch (e43932){if((e43932 instanceof Object)){
var ex__38526__auto__ = e43932;
var statearr_43933_43942 = state_43921;
(statearr_43933_43942[(5)] = ex__38526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43921);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43932;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43943 = state_43921;
state_43921 = G__43943;
continue;
} else {
return ret_value__38524__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__38523__auto__ = function(state_43921){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__38523__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__38523__auto____1.call(this,state_43921);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__38523__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__38523__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__38523__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__38523__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__38523__auto__;
})()
;})(switch__38522__auto__,c__38612__auto___43935,ch))
})();
var state__38614__auto__ = (function (){var statearr_43934 = f__38613__auto__.call(null);
(statearr_43934[(6)] = c__38612__auto___43935);

return statearr_43934;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38614__auto__);
});})(c__38612__auto___43935,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__38612__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38612__auto__){
return (function (){
var f__38613__auto__ = (function (){var switch__38522__auto__ = ((function (c__38612__auto__){
return (function (state_43949){
var state_val_43950 = (state_43949[(1)]);
if((state_val_43950 === (1))){
var inst_43944 = cljs.core.async.timeout.call(null,(3000));
var state_43949__$1 = state_43949;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43949__$1,(2),inst_43944);
} else {
if((state_val_43950 === (2))){
var inst_43946 = (state_43949[(2)]);
var inst_43947 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_43949__$1 = (function (){var statearr_43951 = state_43949;
(statearr_43951[(7)] = inst_43946);

return statearr_43951;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43949__$1,inst_43947);
} else {
return null;
}
}
});})(c__38612__auto__))
;
return ((function (switch__38522__auto__,c__38612__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__38523__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__38523__auto____0 = (function (){
var statearr_43952 = [null,null,null,null,null,null,null,null];
(statearr_43952[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__38523__auto__);

(statearr_43952[(1)] = (1));

return statearr_43952;
});
var figwheel$client$enforce_project_plugin_$_state_machine__38523__auto____1 = (function (state_43949){
while(true){
var ret_value__38524__auto__ = (function (){try{while(true){
var result__38525__auto__ = switch__38522__auto__.call(null,state_43949);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38525__auto__;
}
break;
}
}catch (e43953){if((e43953 instanceof Object)){
var ex__38526__auto__ = e43953;
var statearr_43954_43956 = state_43949;
(statearr_43954_43956[(5)] = ex__38526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43949);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43953;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43957 = state_43949;
state_43949 = G__43957;
continue;
} else {
return ret_value__38524__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__38523__auto__ = function(state_43949){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__38523__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__38523__auto____1.call(this,state_43949);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__38523__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__38523__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__38523__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__38523__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__38523__auto__;
})()
;})(switch__38522__auto__,c__38612__auto__))
})();
var state__38614__auto__ = (function (){var statearr_43955 = f__38613__auto__.call(null);
(statearr_43955[(6)] = c__38612__auto__);

return statearr_43955;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38614__auto__);
});})(c__38612__auto__))
);

return c__38612__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5457__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5457__auto__)){
var figwheel_version = temp__5457__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__38612__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38612__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__38613__auto__ = (function (){var switch__38522__auto__ = ((function (c__38612__auto__,figwheel_version,temp__5457__auto__){
return (function (state_43964){
var state_val_43965 = (state_43964[(1)]);
if((state_val_43965 === (1))){
var inst_43958 = cljs.core.async.timeout.call(null,(2000));
var state_43964__$1 = state_43964;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43964__$1,(2),inst_43958);
} else {
if((state_val_43965 === (2))){
var inst_43960 = (state_43964[(2)]);
var inst_43961 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_43962 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_43961);
var state_43964__$1 = (function (){var statearr_43966 = state_43964;
(statearr_43966[(7)] = inst_43960);

return statearr_43966;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43964__$1,inst_43962);
} else {
return null;
}
}
});})(c__38612__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__38522__auto__,c__38612__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38523__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38523__auto____0 = (function (){
var statearr_43967 = [null,null,null,null,null,null,null,null];
(statearr_43967[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38523__auto__);

(statearr_43967[(1)] = (1));

return statearr_43967;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38523__auto____1 = (function (state_43964){
while(true){
var ret_value__38524__auto__ = (function (){try{while(true){
var result__38525__auto__ = switch__38522__auto__.call(null,state_43964);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38525__auto__;
}
break;
}
}catch (e43968){if((e43968 instanceof Object)){
var ex__38526__auto__ = e43968;
var statearr_43969_43971 = state_43964;
(statearr_43969_43971[(5)] = ex__38526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43964);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43968;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43972 = state_43964;
state_43964 = G__43972;
continue;
} else {
return ret_value__38524__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38523__auto__ = function(state_43964){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38523__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38523__auto____1.call(this,state_43964);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38523__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38523__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38523__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38523__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38523__auto__;
})()
;})(switch__38522__auto__,c__38612__auto__,figwheel_version,temp__5457__auto__))
})();
var state__38614__auto__ = (function (){var statearr_43970 = f__38613__auto__.call(null);
(statearr_43970[(6)] = c__38612__auto__);

return statearr_43970;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38614__auto__);
});})(c__38612__auto__,figwheel_version,temp__5457__auto__))
);

return c__38612__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__43973){
var map__43974 = p__43973;
var map__43974__$1 = ((((!((map__43974 == null)))?(((((map__43974.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43974.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43974):map__43974);
var file = cljs.core.get.call(null,map__43974__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__43974__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__43974__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__43976 = "";
var G__43976__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43976),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__43976);
var G__43976__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43976__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__43976__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = line;
if(cljs.core.truth_(and__3911__auto__)){
return column;
} else {
return and__3911__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43976__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__43976__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__43977){
var map__43978 = p__43977;
var map__43978__$1 = ((((!((map__43978 == null)))?(((((map__43978.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43978.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43978):map__43978);
var ed = map__43978__$1;
var formatted_exception = cljs.core.get.call(null,map__43978__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__43978__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__43978__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__43980_43984 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__43981_43985 = null;
var count__43982_43986 = (0);
var i__43983_43987 = (0);
while(true){
if((i__43983_43987 < count__43982_43986)){
var msg_43988 = cljs.core._nth.call(null,chunk__43981_43985,i__43983_43987);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_43988);


var G__43989 = seq__43980_43984;
var G__43990 = chunk__43981_43985;
var G__43991 = count__43982_43986;
var G__43992 = (i__43983_43987 + (1));
seq__43980_43984 = G__43989;
chunk__43981_43985 = G__43990;
count__43982_43986 = G__43991;
i__43983_43987 = G__43992;
continue;
} else {
var temp__5457__auto___43993 = cljs.core.seq.call(null,seq__43980_43984);
if(temp__5457__auto___43993){
var seq__43980_43994__$1 = temp__5457__auto___43993;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43980_43994__$1)){
var c__4319__auto___43995 = cljs.core.chunk_first.call(null,seq__43980_43994__$1);
var G__43996 = cljs.core.chunk_rest.call(null,seq__43980_43994__$1);
var G__43997 = c__4319__auto___43995;
var G__43998 = cljs.core.count.call(null,c__4319__auto___43995);
var G__43999 = (0);
seq__43980_43984 = G__43996;
chunk__43981_43985 = G__43997;
count__43982_43986 = G__43998;
i__43983_43987 = G__43999;
continue;
} else {
var msg_44000 = cljs.core.first.call(null,seq__43980_43994__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_44000);


var G__44001 = cljs.core.next.call(null,seq__43980_43994__$1);
var G__44002 = null;
var G__44003 = (0);
var G__44004 = (0);
seq__43980_43984 = G__44001;
chunk__43981_43985 = G__44002;
count__43982_43986 = G__44003;
i__43983_43987 = G__44004;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__44005){
var map__44006 = p__44005;
var map__44006__$1 = ((((!((map__44006 == null)))?(((((map__44006.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44006.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44006):map__44006);
var w = map__44006__$1;
var message = cljs.core.get.call(null,map__44006__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/cljs/out/figwheel/client.cljs",33,1,361,361,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/cljs/out/figwheel/client.cljs",30,1,353,353,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__3911__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__3911__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__44008 = cljs.core.seq.call(null,plugins);
var chunk__44009 = null;
var count__44010 = (0);
var i__44011 = (0);
while(true){
if((i__44011 < count__44010)){
var vec__44012 = cljs.core._nth.call(null,chunk__44009,i__44011);
var k = cljs.core.nth.call(null,vec__44012,(0),null);
var plugin = cljs.core.nth.call(null,vec__44012,(1),null);
if(cljs.core.truth_(plugin)){
var pl_44018 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__44008,chunk__44009,count__44010,i__44011,pl_44018,vec__44012,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_44018.call(null,msg_hist);
});})(seq__44008,chunk__44009,count__44010,i__44011,pl_44018,vec__44012,k,plugin))
);
} else {
}


var G__44019 = seq__44008;
var G__44020 = chunk__44009;
var G__44021 = count__44010;
var G__44022 = (i__44011 + (1));
seq__44008 = G__44019;
chunk__44009 = G__44020;
count__44010 = G__44021;
i__44011 = G__44022;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__44008);
if(temp__5457__auto__){
var seq__44008__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44008__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__44008__$1);
var G__44023 = cljs.core.chunk_rest.call(null,seq__44008__$1);
var G__44024 = c__4319__auto__;
var G__44025 = cljs.core.count.call(null,c__4319__auto__);
var G__44026 = (0);
seq__44008 = G__44023;
chunk__44009 = G__44024;
count__44010 = G__44025;
i__44011 = G__44026;
continue;
} else {
var vec__44015 = cljs.core.first.call(null,seq__44008__$1);
var k = cljs.core.nth.call(null,vec__44015,(0),null);
var plugin = cljs.core.nth.call(null,vec__44015,(1),null);
if(cljs.core.truth_(plugin)){
var pl_44027 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__44008,chunk__44009,count__44010,i__44011,pl_44027,vec__44015,k,plugin,seq__44008__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_44027.call(null,msg_hist);
});})(seq__44008,chunk__44009,count__44010,i__44011,pl_44027,vec__44015,k,plugin,seq__44008__$1,temp__5457__auto__))
);
} else {
}


var G__44028 = cljs.core.next.call(null,seq__44008__$1);
var G__44029 = null;
var G__44030 = (0);
var G__44031 = (0);
seq__44008 = G__44028;
chunk__44009 = G__44029;
count__44010 = G__44030;
i__44011 = G__44031;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__44033 = arguments.length;
switch (G__44033) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__44034_44039 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__44035_44040 = null;
var count__44036_44041 = (0);
var i__44037_44042 = (0);
while(true){
if((i__44037_44042 < count__44036_44041)){
var msg_44043 = cljs.core._nth.call(null,chunk__44035_44040,i__44037_44042);
figwheel.client.socket.handle_incoming_message.call(null,msg_44043);


var G__44044 = seq__44034_44039;
var G__44045 = chunk__44035_44040;
var G__44046 = count__44036_44041;
var G__44047 = (i__44037_44042 + (1));
seq__44034_44039 = G__44044;
chunk__44035_44040 = G__44045;
count__44036_44041 = G__44046;
i__44037_44042 = G__44047;
continue;
} else {
var temp__5457__auto___44048 = cljs.core.seq.call(null,seq__44034_44039);
if(temp__5457__auto___44048){
var seq__44034_44049__$1 = temp__5457__auto___44048;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44034_44049__$1)){
var c__4319__auto___44050 = cljs.core.chunk_first.call(null,seq__44034_44049__$1);
var G__44051 = cljs.core.chunk_rest.call(null,seq__44034_44049__$1);
var G__44052 = c__4319__auto___44050;
var G__44053 = cljs.core.count.call(null,c__4319__auto___44050);
var G__44054 = (0);
seq__44034_44039 = G__44051;
chunk__44035_44040 = G__44052;
count__44036_44041 = G__44053;
i__44037_44042 = G__44054;
continue;
} else {
var msg_44055 = cljs.core.first.call(null,seq__44034_44049__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_44055);


var G__44056 = cljs.core.next.call(null,seq__44034_44049__$1);
var G__44057 = null;
var G__44058 = (0);
var G__44059 = (0);
seq__44034_44039 = G__44056;
chunk__44035_44040 = G__44057;
count__44036_44041 = G__44058;
i__44037_44042 = G__44059;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4502__auto__ = [];
var len__4499__auto___44064 = arguments.length;
var i__4500__auto___44065 = (0);
while(true){
if((i__4500__auto___44065 < len__4499__auto___44064)){
args__4502__auto__.push((arguments[i__4500__auto___44065]));

var G__44066 = (i__4500__auto___44065 + (1));
i__4500__auto___44065 = G__44066;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__44061){
var map__44062 = p__44061;
var map__44062__$1 = ((((!((map__44062 == null)))?(((((map__44062.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44062.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44062):map__44062);
var opts = map__44062__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq44060){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44060));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e44067){if((e44067 instanceof Error)){
var e = e44067;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e44067;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__44068){
var map__44069 = p__44068;
var map__44069__$1 = ((((!((map__44069 == null)))?(((((map__44069.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44069.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44069):map__44069);
var msg_name = cljs.core.get.call(null,map__44069__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1526826999441
