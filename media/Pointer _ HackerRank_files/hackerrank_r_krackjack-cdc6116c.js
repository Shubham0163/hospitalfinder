(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{"8Y77":function(e,t,n){"use strict";n.r(t),n.d(t,"defaultCodeshellOpts",function(){return i}),n.d(t,"getCodeshellUserOpts",function(){return l}),n.d(t,"getCodeBody",function(){return c}),n.d(t,"fetchUserPreference",function(){return u}),n.d(t,"setUserPreference",function(){return d}),n.d(t,"getLocalStorageValue",function(){return f}),n.d(t,"setLocalStorageValue",function(){return h});n("rvZc"),n("mGWK"),n("V+eJ"),n("Tze0");var r=n("vmXh"),s=n.n(r),o=n("MrcO"),a="function"==typeof $&&$.jStorage||o.a,i={theme:"light",tabSize:4,intellisense:!0,mode:"normal",keyMap:"sublime",indentUnit:4};function l(){var e=a.get("codeshellUserOpts"),t=!1;if(e)try{e=JSON.parse(e)}catch(n){e=i,t=!0}else e=i,t=!0;return t&&a.set("codeshellUserOpts",JSON.stringify(i)),e}function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0,r=e;if(t.trim()&&0===r.indexOf(t)&&(r=r.substr(t.length)),n.trim()){var s=r.lastIndexOf(n);s>0&&(r=r.substr(0,s))}return r.endsWith("\n")||(r="".concat(r,"\n")),r}function u(e){return l()[e]}function d(e,t){var n,r,o=l();o[e]=t,"tabSize"===e?o.indentUnit=t:"mode"===e?o.keyMap={vim:"vim",emacs:"emacs",normal:"sublime"}[t]:"intellisense"===e?(r=t,s.a.set("enableIntellisenseUserPref",r)):"theme"===e&&(n=t,s.a.set("hacker_editor_theme",{light:"light",dark:"dark",contrast:"dark"}[n]||n)),a.set("codeshellUserOpts",JSON.stringify(o))}function f(e){return a.get(e)}function h(e,t){a.set(e,t)}},"Lu/m":function(e,t,n){var r={"./ada":["4xtG",0],"./ada.js":["4xtG",0],"./clojure":["73+n",0],"./clojure.js":["73+n",0],"./cobol":["vPHJ",0],"./cobol.js":["vPHJ",0],"./d":["oO+C",0],"./d.js":["oO+C",0],"./elixir":["jYSa",0],"./elixir.js":["jYSa",0],"./erlang":["cDZF",0],"./erlang.js":["cDZF",0],"./fortran":["+d94",0],"./fortran.js":["+d94",0],"./groovy":["+/AF",0],"./groovy.js":["+/AF",0],"./haskell":["vCTa",0],"./haskell.js":["vCTa",0],"./julia":["+UX2",0],"./julia.js":["+UX2",0],"./kotlin":["r9e1",0],"./kotlin.js":["r9e1",0],"./ocaml":["p0wm",0],"./ocaml.js":["p0wm",0],"./pascal":["n45N",0],"./pascal.js":["n45N",0],"./perl":["Gfxk",0],"./perl.js":["Gfxk",0],"./racket":["yNjO",0],"./racket.js":["yNjO",0],"./sbcl":["t/af",0],"./sbcl.js":["t/af",0],"./scala":["hR2n",0],"./scala.js":["hR2n",0],"./tcl":["AKpm",0],"./tcl.js":["AKpm",0]};function s(e){if(!n.o(r,e))return Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t});var t=r[e],s=t[0];return n.e(t[1]).then(function(){return n.t(s,7)})}s.keys=function(){return Object.keys(r)},s.id="Lu/m",e.exports=s}}]);
//# sourceMappingURL=https://staging.hackerrank.net/fcore-assets/sourcemaps/hackerrank_r_krackjack-cdc6116c.js.map