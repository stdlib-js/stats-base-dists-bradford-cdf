"use strict";var n=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(t){throw (r=0, t)}};};var f=n(function(m,a){
var i=require('@stdlib/math-base-assert-is-nan/dist'),u=require('@stdlib/math-base-special-log1p/dist');function N(e,r){return i(r)||i(e)||r<=0?NaN:e<=0?0:e>=1?1:u(r*e)/u(r)}a.exports=N
});var v=n(function(F,q){
var p=require('@stdlib/utils-constant-function/dist'),o=require('@stdlib/math-base-assert-is-nan/dist'),s=require('@stdlib/math-base-special-log1p/dist');function y(e){if(o(e)||e<=0)return p(NaN);return r;function r(t){return o(t)?NaN:t<=0?0:t>=1?1:s(e*t)/s(e)}}q.exports=y
});var d=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),c=f(),l=v();d(c,"factory",l);module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
