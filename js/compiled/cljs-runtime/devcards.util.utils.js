goog.provide('devcards.util.utils');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('cljs.pprint');
devcards.util.utils.html_env_QMARK_ = (function devcards$util$utils$html_env_QMARK_(){
var temp__5733__auto__ = goog.global.document;
if(cljs.core.truth_(temp__5733__auto__)){
var doc = temp__5733__auto__;
return goog.object.get(doc,"write");
} else {
return null;
}
});
devcards.util.utils.node_env_QMARK_ = (function devcards$util$utils$node_env_QMARK_(){
return (!((goog.nodeGlobalRequire == null)));
});
devcards.util.utils.pprint_str = (function devcards$util$utils$pprint_str(obj){
try{var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__50455_50467 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__50456_50468 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__50457_50469 = true;
var _STAR_print_fn_STAR__temp_val__50458_50470 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__50457_50469);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__50458_50470);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(obj);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__50456_50468);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__50455_50467);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
}catch (e50453){if((e50453 instanceof Error)){
var e1 = e50453;
try{return obj.toString();
}catch (e50454){if((e50454 instanceof Error)){
var e2 = e50454;
return "<<Un-printable Type>>";
} else {
throw e50454;

}
}} else {
throw e50453;

}
}});
devcards.util.utils.pprint_code = (function devcards$util$utils$pprint_code(code){
var _STAR_print_pprint_dispatch_STAR__orig_val__50463 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
var _STAR_print_pprint_dispatch_STAR__temp_val__50464 = cljs.pprint.code_dispatch;
(cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR__temp_val__50464);

try{return devcards.util.utils.pprint_str(code);
}finally {(cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR__orig_val__50463);
}});

//# sourceMappingURL=devcards.util.utils.js.map