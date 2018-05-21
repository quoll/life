// Compiled by ClojureScript 1.10.238 {}
goog.provide('clojure.core.matrix.operators');
goog.require('cljs.core');
goog.require('clojure.core.matrix');
/**
 * Array multiply operator. Uses elementwise multiplication.
 */
clojure.core.matrix.operators._STAR_ = clojure.core.matrix.mul;
clojure.core.matrix.operators._STAR__STAR_ = clojure.core.matrix.pow;
/**
 * Array addition operator. Equivalent to clojure.core.matrix/add.
 */
clojure.core.matrix.operators._PLUS_ = (function clojure$core$matrix$operators$_PLUS_(var_args){
var G__34710 = arguments.length;
switch (G__34710) {
case 0:
return clojure.core.matrix.operators._PLUS_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.core.matrix.operators._PLUS_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.operators._PLUS_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4514__auto__ = [];
var len__4499__auto___34712 = arguments.length;
var i__4500__auto___34713 = (0);
while(true){
if((i__4500__auto___34713 < len__4499__auto___34712)){
args_arr__4514__auto__.push((arguments[i__4500__auto___34713]));

var G__34714 = (i__4500__auto___34713 + (1));
i__4500__auto___34713 = G__34714;
continue;
} else {
}
break;
}

var argseq__4515__auto__ = (new cljs.core.IndexedSeq(args_arr__4514__auto__.slice((2)),(0),null));
return clojure.core.matrix.operators._PLUS_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4515__auto__);

}
});

clojure.core.matrix.operators._PLUS_.cljs$core$IFn$_invoke$arity$0 = (function (){
return clojure.core.matrix.add.call(null);
});

clojure.core.matrix.operators._PLUS_.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
});

clojure.core.matrix.operators._PLUS_.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
if(((typeof a === 'number') && (typeof b === 'number'))){
return (a + b);
} else {
return clojure.core.matrix.add.call(null,a,b);
}
});

clojure.core.matrix.operators._PLUS_.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
return cljs.core.reduce.call(null,clojure.core.matrix.operators._PLUS_,clojure.core.matrix.operators._PLUS_.call(null,a,b),more);
});

/** @this {Function} */
clojure.core.matrix.operators._PLUS_.cljs$lang$applyTo = (function (seq34707){
var G__34708 = cljs.core.first.call(null,seq34707);
var seq34707__$1 = cljs.core.next.call(null,seq34707);
var G__34709 = cljs.core.first.call(null,seq34707__$1);
var seq34707__$2 = cljs.core.next.call(null,seq34707__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34708,G__34709,seq34707__$2);
});

clojure.core.matrix.operators._PLUS_.cljs$lang$maxFixedArity = (2);

/**
 * Array subtraction operator. Equivalent to clojure.core.matrix/sub.
 */
clojure.core.matrix.operators._ = (function clojure$core$matrix$operators$_(var_args){
var G__34719 = arguments.length;
switch (G__34719) {
case 1:
return clojure.core.matrix.operators._.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.operators._.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4514__auto__ = [];
var len__4499__auto___34721 = arguments.length;
var i__4500__auto___34722 = (0);
while(true){
if((i__4500__auto___34722 < len__4499__auto___34721)){
args_arr__4514__auto__.push((arguments[i__4500__auto___34722]));

var G__34723 = (i__4500__auto___34722 + (1));
i__4500__auto___34722 = G__34723;
continue;
} else {
}
break;
}

var argseq__4515__auto__ = (new cljs.core.IndexedSeq(args_arr__4514__auto__.slice((2)),(0),null));
return clojure.core.matrix.operators._.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4515__auto__);

}
});

clojure.core.matrix.operators._.cljs$core$IFn$_invoke$arity$1 = (function (a){
return clojure.core.matrix.negate.call(null,a);
});

clojure.core.matrix.operators._.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
if(((typeof a === 'number') && (typeof b === 'number'))){
return (a - b);
} else {
return clojure.core.matrix.sub.call(null,a,b);
}
});

clojure.core.matrix.operators._.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
return cljs.core.reduce.call(null,clojure.core.matrix.operators._,clojure.core.matrix.operators._.call(null,a,b),more);
});

/** @this {Function} */
clojure.core.matrix.operators._.cljs$lang$applyTo = (function (seq34716){
var G__34717 = cljs.core.first.call(null,seq34716);
var seq34716__$1 = cljs.core.next.call(null,seq34716);
var G__34718 = cljs.core.first.call(null,seq34716__$1);
var seq34716__$2 = cljs.core.next.call(null,seq34716__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34717,G__34718,seq34716__$2);
});

clojure.core.matrix.operators._.cljs$lang$maxFixedArity = (2);

/**
 * Element-wise matrix division. Equivalent to clojure.core.matrix/div.
 */
clojure.core.matrix.operators._SLASH_ = (function clojure$core$matrix$operators$_SLASH_(var_args){
var G__34728 = arguments.length;
switch (G__34728) {
case 1:
return clojure.core.matrix.operators._SLASH_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.operators._SLASH_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4514__auto__ = [];
var len__4499__auto___34730 = arguments.length;
var i__4500__auto___34731 = (0);
while(true){
if((i__4500__auto___34731 < len__4499__auto___34730)){
args_arr__4514__auto__.push((arguments[i__4500__auto___34731]));

var G__34732 = (i__4500__auto___34731 + (1));
i__4500__auto___34731 = G__34732;
continue;
} else {
}
break;
}

var argseq__4515__auto__ = (new cljs.core.IndexedSeq(args_arr__4514__auto__.slice((2)),(0),null));
return clojure.core.matrix.operators._SLASH_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4515__auto__);

}
});

clojure.core.matrix.operators._SLASH_.cljs$core$IFn$_invoke$arity$1 = (function (a){
return clojure.core.matrix.div.call(null,a);
});

clojure.core.matrix.operators._SLASH_.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.core.matrix.div.call(null,a,b);
});

clojure.core.matrix.operators._SLASH_.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
return cljs.core.reduce.call(null,clojure.core.matrix.div,clojure.core.matrix.div.call(null,a,b),more);
});

/** @this {Function} */
clojure.core.matrix.operators._SLASH_.cljs$lang$applyTo = (function (seq34725){
var G__34726 = cljs.core.first.call(null,seq34725);
var seq34725__$1 = cljs.core.next.call(null,seq34725);
var G__34727 = cljs.core.first.call(null,seq34725__$1);
var seq34725__$2 = cljs.core.next.call(null,seq34725__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34726,G__34727,seq34725__$2);
});

clojure.core.matrix.operators._SLASH_.cljs$lang$maxFixedArity = (2);

/**
 * Numerical array comparison. Equivalent to reducing with clojure.core.matrix/equals.
 */
clojure.core.matrix.operators._EQ__EQ_ = (function clojure$core$matrix$operators$_EQ__EQ_(var_args){
var G__34737 = arguments.length;
switch (G__34737) {
case 0:
return clojure.core.matrix.operators._EQ__EQ_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.core.matrix.operators._EQ__EQ_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.operators._EQ__EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4514__auto__ = [];
var len__4499__auto___34739 = arguments.length;
var i__4500__auto___34740 = (0);
while(true){
if((i__4500__auto___34740 < len__4499__auto___34739)){
args_arr__4514__auto__.push((arguments[i__4500__auto___34740]));

var G__34741 = (i__4500__auto___34740 + (1));
i__4500__auto___34740 = G__34741;
continue;
} else {
}
break;
}

var argseq__4515__auto__ = (new cljs.core.IndexedSeq(args_arr__4514__auto__.slice((2)),(0),null));
return clojure.core.matrix.operators._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4515__auto__);

}
});

clojure.core.matrix.operators._EQ__EQ_.cljs$core$IFn$_invoke$arity$0 = (function (){
return true;
});

clojure.core.matrix.operators._EQ__EQ_.cljs$core$IFn$_invoke$arity$1 = (function (a){
return true;
});

clojure.core.matrix.operators._EQ__EQ_.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.core.matrix.equals.call(null,a,b);
});

clojure.core.matrix.operators._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
return cljs.core.reduce.call(null,(function (r,m){
var and__3911__auto__ = r;
if(cljs.core.truth_(and__3911__auto__)){
return clojure.core.matrix.operators._EQ__EQ_.call(null,a,m);
} else {
return and__3911__auto__;
}
}),clojure.core.matrix.operators._EQ__EQ_.call(null,a,b),more);
});

/** @this {Function} */
clojure.core.matrix.operators._EQ__EQ_.cljs$lang$applyTo = (function (seq34734){
var G__34735 = cljs.core.first.call(null,seq34734);
var seq34734__$1 = cljs.core.next.call(null,seq34734);
var G__34736 = cljs.core.first.call(null,seq34734__$1);
var seq34734__$2 = cljs.core.next.call(null,seq34734__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34735,G__34736,seq34734__$2);
});

clojure.core.matrix.operators._EQ__EQ_.cljs$lang$maxFixedArity = (2);

/**
 * Inplace matrix addition operator
 */
clojure.core.matrix.operators._PLUS__EQ_ = (function clojure$core$matrix$operators$_PLUS__EQ_(var_args){
var G__34746 = arguments.length;
switch (G__34746) {
case 1:
return clojure.core.matrix.operators._PLUS__EQ_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.operators._PLUS__EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4514__auto__ = [];
var len__4499__auto___34752 = arguments.length;
var i__4500__auto___34753 = (0);
while(true){
if((i__4500__auto___34753 < len__4499__auto___34752)){
args_arr__4514__auto__.push((arguments[i__4500__auto___34753]));

var G__34754 = (i__4500__auto___34753 + (1));
i__4500__auto___34753 = G__34754;
continue;
} else {
}
break;
}

var argseq__4515__auto__ = (new cljs.core.IndexedSeq(args_arr__4514__auto__.slice((2)),(0),null));
return clojure.core.matrix.operators._PLUS__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4515__auto__);

}
});

clojure.core.matrix.operators._PLUS__EQ_.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
});

clojure.core.matrix.operators._PLUS__EQ_.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.core.matrix.add_BANG_.call(null,a,b);
});

clojure.core.matrix.operators._PLUS__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
clojure.core.matrix.add_BANG_.call(null,a,b);

var seq__34747 = cljs.core.seq.call(null,more);
var chunk__34748 = null;
var count__34749 = (0);
var i__34750 = (0);
while(true){
if((i__34750 < count__34749)){
var m = cljs.core._nth.call(null,chunk__34748,i__34750);
clojure.core.matrix.add_BANG_.call(null,a,m);


var G__34755 = seq__34747;
var G__34756 = chunk__34748;
var G__34757 = count__34749;
var G__34758 = (i__34750 + (1));
seq__34747 = G__34755;
chunk__34748 = G__34756;
count__34749 = G__34757;
i__34750 = G__34758;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__34747);
if(temp__5457__auto__){
var seq__34747__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34747__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__34747__$1);
var G__34759 = cljs.core.chunk_rest.call(null,seq__34747__$1);
var G__34760 = c__4319__auto__;
var G__34761 = cljs.core.count.call(null,c__4319__auto__);
var G__34762 = (0);
seq__34747 = G__34759;
chunk__34748 = G__34760;
count__34749 = G__34761;
i__34750 = G__34762;
continue;
} else {
var m = cljs.core.first.call(null,seq__34747__$1);
clojure.core.matrix.add_BANG_.call(null,a,m);


var G__34763 = cljs.core.next.call(null,seq__34747__$1);
var G__34764 = null;
var G__34765 = (0);
var G__34766 = (0);
seq__34747 = G__34763;
chunk__34748 = G__34764;
count__34749 = G__34765;
i__34750 = G__34766;
continue;
}
} else {
return null;
}
}
break;
}
});

/** @this {Function} */
clojure.core.matrix.operators._PLUS__EQ_.cljs$lang$applyTo = (function (seq34743){
var G__34744 = cljs.core.first.call(null,seq34743);
var seq34743__$1 = cljs.core.next.call(null,seq34743);
var G__34745 = cljs.core.first.call(null,seq34743__$1);
var seq34743__$2 = cljs.core.next.call(null,seq34743__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34744,G__34745,seq34743__$2);
});

clojure.core.matrix.operators._PLUS__EQ_.cljs$lang$maxFixedArity = (2);

/**
 * Inplace matrix subtraction operator
 */
clojure.core.matrix.operators.__EQ_ = (function clojure$core$matrix$operators$__EQ_(var_args){
var G__34771 = arguments.length;
switch (G__34771) {
case 1:
return clojure.core.matrix.operators.__EQ_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.operators.__EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4514__auto__ = [];
var len__4499__auto___34777 = arguments.length;
var i__4500__auto___34778 = (0);
while(true){
if((i__4500__auto___34778 < len__4499__auto___34777)){
args_arr__4514__auto__.push((arguments[i__4500__auto___34778]));

var G__34779 = (i__4500__auto___34778 + (1));
i__4500__auto___34778 = G__34779;
continue;
} else {
}
break;
}

var argseq__4515__auto__ = (new cljs.core.IndexedSeq(args_arr__4514__auto__.slice((2)),(0),null));
return clojure.core.matrix.operators.__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4515__auto__);

}
});

clojure.core.matrix.operators.__EQ_.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
});

clojure.core.matrix.operators.__EQ_.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.core.matrix.sub_BANG_.call(null,a,b);
});

clojure.core.matrix.operators.__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
clojure.core.matrix.sub_BANG_.call(null,a,b);

var seq__34772 = cljs.core.seq.call(null,more);
var chunk__34773 = null;
var count__34774 = (0);
var i__34775 = (0);
while(true){
if((i__34775 < count__34774)){
var m = cljs.core._nth.call(null,chunk__34773,i__34775);
clojure.core.matrix.sub_BANG_.call(null,a,m);


var G__34780 = seq__34772;
var G__34781 = chunk__34773;
var G__34782 = count__34774;
var G__34783 = (i__34775 + (1));
seq__34772 = G__34780;
chunk__34773 = G__34781;
count__34774 = G__34782;
i__34775 = G__34783;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__34772);
if(temp__5457__auto__){
var seq__34772__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34772__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__34772__$1);
var G__34784 = cljs.core.chunk_rest.call(null,seq__34772__$1);
var G__34785 = c__4319__auto__;
var G__34786 = cljs.core.count.call(null,c__4319__auto__);
var G__34787 = (0);
seq__34772 = G__34784;
chunk__34773 = G__34785;
count__34774 = G__34786;
i__34775 = G__34787;
continue;
} else {
var m = cljs.core.first.call(null,seq__34772__$1);
clojure.core.matrix.sub_BANG_.call(null,a,m);


var G__34788 = cljs.core.next.call(null,seq__34772__$1);
var G__34789 = null;
var G__34790 = (0);
var G__34791 = (0);
seq__34772 = G__34788;
chunk__34773 = G__34789;
count__34774 = G__34790;
i__34775 = G__34791;
continue;
}
} else {
return null;
}
}
break;
}
});

/** @this {Function} */
clojure.core.matrix.operators.__EQ_.cljs$lang$applyTo = (function (seq34768){
var G__34769 = cljs.core.first.call(null,seq34768);
var seq34768__$1 = cljs.core.next.call(null,seq34768);
var G__34770 = cljs.core.first.call(null,seq34768__$1);
var seq34768__$2 = cljs.core.next.call(null,seq34768__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34769,G__34770,seq34768__$2);
});

clojure.core.matrix.operators.__EQ_.cljs$lang$maxFixedArity = (2);

/**
 * Inplace matrix multiplication operator
 */
clojure.core.matrix.operators._STAR__EQ_ = (function clojure$core$matrix$operators$_STAR__EQ_(var_args){
var G__34796 = arguments.length;
switch (G__34796) {
case 1:
return clojure.core.matrix.operators._STAR__EQ_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.operators._STAR__EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4514__auto__ = [];
var len__4499__auto___34802 = arguments.length;
var i__4500__auto___34803 = (0);
while(true){
if((i__4500__auto___34803 < len__4499__auto___34802)){
args_arr__4514__auto__.push((arguments[i__4500__auto___34803]));

var G__34804 = (i__4500__auto___34803 + (1));
i__4500__auto___34803 = G__34804;
continue;
} else {
}
break;
}

var argseq__4515__auto__ = (new cljs.core.IndexedSeq(args_arr__4514__auto__.slice((2)),(0),null));
return clojure.core.matrix.operators._STAR__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4515__auto__);

}
});

clojure.core.matrix.operators._STAR__EQ_.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
});

clojure.core.matrix.operators._STAR__EQ_.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.core.matrix.mul_BANG_.call(null,a,b);
});

clojure.core.matrix.operators._STAR__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
clojure.core.matrix.mul_BANG_.call(null,a,b);

var seq__34797 = cljs.core.seq.call(null,more);
var chunk__34798 = null;
var count__34799 = (0);
var i__34800 = (0);
while(true){
if((i__34800 < count__34799)){
var m = cljs.core._nth.call(null,chunk__34798,i__34800);
clojure.core.matrix.mul_BANG_.call(null,a,m);


var G__34805 = seq__34797;
var G__34806 = chunk__34798;
var G__34807 = count__34799;
var G__34808 = (i__34800 + (1));
seq__34797 = G__34805;
chunk__34798 = G__34806;
count__34799 = G__34807;
i__34800 = G__34808;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__34797);
if(temp__5457__auto__){
var seq__34797__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34797__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__34797__$1);
var G__34809 = cljs.core.chunk_rest.call(null,seq__34797__$1);
var G__34810 = c__4319__auto__;
var G__34811 = cljs.core.count.call(null,c__4319__auto__);
var G__34812 = (0);
seq__34797 = G__34809;
chunk__34798 = G__34810;
count__34799 = G__34811;
i__34800 = G__34812;
continue;
} else {
var m = cljs.core.first.call(null,seq__34797__$1);
clojure.core.matrix.mul_BANG_.call(null,a,m);


var G__34813 = cljs.core.next.call(null,seq__34797__$1);
var G__34814 = null;
var G__34815 = (0);
var G__34816 = (0);
seq__34797 = G__34813;
chunk__34798 = G__34814;
count__34799 = G__34815;
i__34800 = G__34816;
continue;
}
} else {
return null;
}
}
break;
}
});

/** @this {Function} */
clojure.core.matrix.operators._STAR__EQ_.cljs$lang$applyTo = (function (seq34793){
var G__34794 = cljs.core.first.call(null,seq34793);
var seq34793__$1 = cljs.core.next.call(null,seq34793);
var G__34795 = cljs.core.first.call(null,seq34793__$1);
var seq34793__$2 = cljs.core.next.call(null,seq34793__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34794,G__34795,seq34793__$2);
});

clojure.core.matrix.operators._STAR__EQ_.cljs$lang$maxFixedArity = (2);

/**
 * Inplace matrix division operator
 */
clojure.core.matrix.operators.div_EQ_ = (function clojure$core$matrix$operators$div_EQ_(var_args){
var G__34821 = arguments.length;
switch (G__34821) {
case 1:
return clojure.core.matrix.operators.div_EQ_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.operators.div_EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4514__auto__ = [];
var len__4499__auto___34827 = arguments.length;
var i__4500__auto___34828 = (0);
while(true){
if((i__4500__auto___34828 < len__4499__auto___34827)){
args_arr__4514__auto__.push((arguments[i__4500__auto___34828]));

var G__34829 = (i__4500__auto___34828 + (1));
i__4500__auto___34828 = G__34829;
continue;
} else {
}
break;
}

var argseq__4515__auto__ = (new cljs.core.IndexedSeq(args_arr__4514__auto__.slice((2)),(0),null));
return clojure.core.matrix.operators.div_EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4515__auto__);

}
});

clojure.core.matrix.operators.div_EQ_.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
});

clojure.core.matrix.operators.div_EQ_.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.core.matrix.div_BANG_.call(null,a,b);
});

clojure.core.matrix.operators.div_EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
clojure.core.matrix.div_BANG_.call(null,a,b);

var seq__34822 = cljs.core.seq.call(null,more);
var chunk__34823 = null;
var count__34824 = (0);
var i__34825 = (0);
while(true){
if((i__34825 < count__34824)){
var m = cljs.core._nth.call(null,chunk__34823,i__34825);
clojure.core.matrix.div_BANG_.call(null,a,m);


var G__34830 = seq__34822;
var G__34831 = chunk__34823;
var G__34832 = count__34824;
var G__34833 = (i__34825 + (1));
seq__34822 = G__34830;
chunk__34823 = G__34831;
count__34824 = G__34832;
i__34825 = G__34833;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__34822);
if(temp__5457__auto__){
var seq__34822__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34822__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__34822__$1);
var G__34834 = cljs.core.chunk_rest.call(null,seq__34822__$1);
var G__34835 = c__4319__auto__;
var G__34836 = cljs.core.count.call(null,c__4319__auto__);
var G__34837 = (0);
seq__34822 = G__34834;
chunk__34823 = G__34835;
count__34824 = G__34836;
i__34825 = G__34837;
continue;
} else {
var m = cljs.core.first.call(null,seq__34822__$1);
clojure.core.matrix.div_BANG_.call(null,a,m);


var G__34838 = cljs.core.next.call(null,seq__34822__$1);
var G__34839 = null;
var G__34840 = (0);
var G__34841 = (0);
seq__34822 = G__34838;
chunk__34823 = G__34839;
count__34824 = G__34840;
i__34825 = G__34841;
continue;
}
} else {
return null;
}
}
break;
}
});

/** @this {Function} */
clojure.core.matrix.operators.div_EQ_.cljs$lang$applyTo = (function (seq34818){
var G__34819 = cljs.core.first.call(null,seq34818);
var seq34818__$1 = cljs.core.next.call(null,seq34818);
var G__34820 = cljs.core.first.call(null,seq34818__$1);
var seq34818__$2 = cljs.core.next.call(null,seq34818__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34819,G__34820,seq34818__$2);
});

clojure.core.matrix.operators.div_EQ_.cljs$lang$maxFixedArity = (2);

/**
 * Computes the element-wise min of arrays
 */
clojure.core.matrix.operators.min = (function clojure$core$matrix$operators$min(var_args){
var G__34846 = arguments.length;
switch (G__34846) {
case 1:
return clojure.core.matrix.operators.min.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.operators.min.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4514__auto__ = [];
var len__4499__auto___34848 = arguments.length;
var i__4500__auto___34849 = (0);
while(true){
if((i__4500__auto___34849 < len__4499__auto___34848)){
args_arr__4514__auto__.push((arguments[i__4500__auto___34849]));

var G__34850 = (i__4500__auto___34849 + (1));
i__4500__auto___34849 = G__34850;
continue;
} else {
}
break;
}

var argseq__4515__auto__ = (new cljs.core.IndexedSeq(args_arr__4514__auto__.slice((2)),(0),null));
return clojure.core.matrix.operators.min.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4515__auto__);

}
});

clojure.core.matrix.operators.min.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
});

clojure.core.matrix.operators.min.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.core.matrix.eif.call(null,clojure.core.matrix.sub.call(null,a,b),b,a);
});

clojure.core.matrix.operators.min.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
return cljs.core.reduce.call(null,clojure.core.matrix.operators.min,clojure.core.matrix.operators.min.call(null,a,b),more);
});

/** @this {Function} */
clojure.core.matrix.operators.min.cljs$lang$applyTo = (function (seq34843){
var G__34844 = cljs.core.first.call(null,seq34843);
var seq34843__$1 = cljs.core.next.call(null,seq34843);
var G__34845 = cljs.core.first.call(null,seq34843__$1);
var seq34843__$2 = cljs.core.next.call(null,seq34843__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34844,G__34845,seq34843__$2);
});

clojure.core.matrix.operators.min.cljs$lang$maxFixedArity = (2);

/**
 * Computes the element-wise max of arrays
 */
clojure.core.matrix.operators.max = (function clojure$core$matrix$operators$max(var_args){
var G__34855 = arguments.length;
switch (G__34855) {
case 1:
return clojure.core.matrix.operators.max.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.operators.max.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4514__auto__ = [];
var len__4499__auto___34857 = arguments.length;
var i__4500__auto___34858 = (0);
while(true){
if((i__4500__auto___34858 < len__4499__auto___34857)){
args_arr__4514__auto__.push((arguments[i__4500__auto___34858]));

var G__34859 = (i__4500__auto___34858 + (1));
i__4500__auto___34858 = G__34859;
continue;
} else {
}
break;
}

var argseq__4515__auto__ = (new cljs.core.IndexedSeq(args_arr__4514__auto__.slice((2)),(0),null));
return clojure.core.matrix.operators.max.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4515__auto__);

}
});

clojure.core.matrix.operators.max.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
});

clojure.core.matrix.operators.max.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.core.matrix.eif.call(null,clojure.core.matrix.sub.call(null,a,b),a,b);
});

clojure.core.matrix.operators.max.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
return cljs.core.reduce.call(null,clojure.core.matrix.operators.min,clojure.core.matrix.operators.min.call(null,a,b),more);
});

/** @this {Function} */
clojure.core.matrix.operators.max.cljs$lang$applyTo = (function (seq34852){
var G__34853 = cljs.core.first.call(null,seq34852);
var seq34852__$1 = cljs.core.next.call(null,seq34852);
var G__34854 = cljs.core.first.call(null,seq34852__$1);
var seq34852__$2 = cljs.core.next.call(null,seq34852__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34853,G__34854,seq34852__$2);
});

clojure.core.matrix.operators.max.cljs$lang$maxFixedArity = (2);


//# sourceMappingURL=operators.js.map?rel=1526826991111
