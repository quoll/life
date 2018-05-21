// Compiled by ClojureScript 1.10.238 {}
goog.provide('life.web');
goog.require('cljs.core');
goog.require('react_dom');
goog.require('life.page');
goog.require('life.core');
life.web.global$module$react_dom = goog.global.ReactDOM;
if(typeof life.web.app_state !== 'undefined'){
} else {
life.web.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),life.core.RR,new cljs.core.Keyword(null,"gen","gen",142575302),(0)], null));
}
life.web.render_BANG_ = (function life$web$render_BANG_(state){
return ReactDOM.render(life.page.display_data.call(null,state),document.getElementById("app"));
});
cljs.core.add_watch.call(null,life.web.app_state,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (_,___$1,___$2,___$3){
return life.web.render_BANG_.call(null,life.web.app_state);
}));
life.web.render_BANG_.call(null,life.web.app_state);
cljs.core.swap_BANG_.call(null,life.web.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"timer","timer",-1266967739),setInterval(life.page.next_life.call(null,life.web.app_state),(125)));

//# sourceMappingURL=web.js.map
