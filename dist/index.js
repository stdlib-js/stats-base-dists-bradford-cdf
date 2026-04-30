"use strict";var n=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var f=n(function(m,a){
var i=require('@stdlib/math-base-assert-is-nan/dist'),u=require('@stdlib/math-base-special-log1p/dist');function N(r,e){return i(e)||i(r)||e<=0?NaN:r<=0?0:r>=1?1:u(e*r)/u(e)}a.exports=N
});var v=n(function(F,q){
var p=require('@stdlib/utils-constant-function/dist'),o=require('@stdlib/math-base-assert-is-nan/dist'),s=require('@stdlib/math-base-special-log1p/dist');function y(r){if(o(r)||r<=0)return p(NaN);return e;function e(t){return o(t)?NaN:t<=0?0:t>=1?1:s(r*t)/s(r)}}q.exports=y
});var d=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),c=f(),l=v();d(c,"factory",l);module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
