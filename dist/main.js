var Client=function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=7)}([function(t,e,n){(function(t){!function(t){"use strict";t.exports.is_uri=n,t.exports.is_http_uri=r,t.exports.is_https_uri=i,t.exports.is_web_uri=o,t.exports.isUri=n,t.exports.isHttpUri=r,t.exports.isHttpsUri=i,t.exports.isWebUri=o;var e=function(t){return t.match(/(?:([^:\/?#]+):)?(?:\/\/([^\/?#]*))?([^?#]*)(?:\?([^#]*))?(?:#(.*))?/)};function n(t){if(t&&!/[^a-z0-9\:\/\?\#\[\]\@\!\$\&\'\(\)\*\+\,\;\=\.\-\_\~\%]/i.test(t)&&!/%[^0-9a-f]/i.test(t)&&!/%[0-9a-f](:?[^0-9a-f]|$)/i.test(t)){var n,r,i,o,u,c="",l="";if(c=(n=e(t))[1],r=n[2],i=n[3],o=n[4],u=n[5],c&&c.length&&i.length>=0){if(r&&r.length){if(0!==i.length&&!/^\//.test(i))return}else if(/^\/\//.test(i))return;if(/^[a-z][a-z0-9\+\-\.]*$/.test(c.toLowerCase()))return l+=c+":",r&&r.length&&(l+="//"+r),l+=i,o&&o.length&&(l+="?"+o),u&&u.length&&(l+="#"+u),l}}}function r(t,r){if(n(t)){var i,o,u,c,l="",f="",a="",s="";if(l=(i=e(t))[1],f=i[2],o=i[3],u=i[4],c=i[5],l){if(r){if("https"!=l.toLowerCase())return}else if("http"!=l.toLowerCase())return;if(f)return/:(\d+)$/.test(f)&&(a=f.match(/:(\d+)$/)[0],f=f.replace(/:\d+$/,"")),s+=l+":",s+="//"+f,a&&(s+=a),s+=o,u&&u.length&&(s+="?"+u),c&&c.length&&(s+="#"+c),s}}}function i(t){return r(t,!0)}function o(t){return r(t)||i(t)}}(t)}).call(this,n(1)(t))},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";function r(t){return!!n(0).isUri(t)}function i(t){t.preventDefault();let e=document.getElementById("name").value;if(Client.checkForValidity(e)){(async(t="",e={})=>{const n=await fetch(t,{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});try{const t=await n.json();return console.log(t),t}catch(t){console.log("error",t)}})("/urlNLP",{url:e}).then((function(t){document.querySelector("#polarity").innerHTML=t.polarity,document.querySelector("#subjectivity").innerHTML=t.subjectivity,document.querySelector("#text").innerHTML=t.text}))}else alert("Enter valid URL")}n.r(e),n.d(e,"checkForValidity",(function(){return r})),n.d(e,"handleSubmit",(function(){return i}));n(2),n(3),n(4),n(5),n(6)}]);