(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a2be3a5a"],{"0cb2":function(e,t,n){var a=n("e330"),r=n("7b0b"),c=Math.floor,i=a("".charAt),o=a("".replace),l=a("".slice),s=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,d=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,n,a,u,b){var p=n+e.length,f=a.length,h=d;return void 0!==u&&(u=r(u),h=s),o(b,h,(function(r,o){var s;switch(i(o,0)){case"$":return"$";case"&":return e;case"`":return l(t,0,n);case"'":return l(t,p);case"<":s=u[l(o,1,-1)];break;default:var d=+o;if(0===d)return r;if(d>f){var b=c(d/10);return 0===b?r:b<=f?void 0===a[b-1]?i(o,1):a[b-1]+i(o,1):r}s=a[d-1]}return void 0===s?"":s}))}},1276:function(e,t,n){"use strict";var a=n("2ba4"),r=n("c65b"),c=n("e330"),i=n("d784"),o=n("44e7"),l=n("825a"),s=n("1d80"),d=n("4840"),u=n("8aa5"),b=n("50c4"),p=n("577e"),f=n("dc4a"),h=n("4dae"),m=n("14c3"),v=n("9263"),g=n("9f7f"),O=n("d039"),j=g.UNSUPPORTED_Y,x=4294967295,E=Math.min,w=[].push,y=c(/./.exec),N=c(w),C=c("".slice),V=!O((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));i("split",(function(e,t,n){var c;return c="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var c=p(s(this)),i=void 0===n?x:n>>>0;if(0===i)return[];if(void 0===e)return[c];if(!o(e))return r(t,c,e,i);var l,d,u,b=[],f=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),m=0,g=new RegExp(e.source,f+"g");while(l=r(v,g,c)){if(d=g.lastIndex,d>m&&(N(b,C(c,m,l.index)),l.length>1&&l.index<c.length&&a(w,b,h(l,1)),u=l[0].length,m=d,b.length>=i))break;g.lastIndex===l.index&&g.lastIndex++}return m===c.length?!u&&y(g,"")||N(b,""):N(b,C(c,m)),b.length>i?h(b,0,i):b}:"0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:r(t,this,e,n)}:t,[function(t,n){var a=s(this),i=void 0==t?void 0:f(t,e);return i?r(i,t,a,n):r(c,p(a),t,n)},function(e,a){var r=l(this),i=p(e),o=n(c,r,i,a,c!==t);if(o.done)return o.value;var s=d(r,RegExp),f=r.unicode,h=(r.ignoreCase?"i":"")+(r.multiline?"m":"")+(r.unicode?"u":"")+(j?"g":"y"),v=new s(j?"^(?:"+r.source+")":r,h),g=void 0===a?x:a>>>0;if(0===g)return[];if(0===i.length)return null===m(v,i)?[i]:[];var O=0,w=0,y=[];while(w<i.length){v.lastIndex=j?0:w;var V,k=m(v,j?C(i,w):i);if(null===k||(V=E(b(v.lastIndex+(j?w:0)),i.length))===O)w=u(i,w,f);else{if(N(y,C(i,O,w)),y.length===g)return y;for(var $=1;$<=k.length-1;$++)if(N(y,k[$]),y.length===g)return y;w=O=V}}return N(y,C(i,O)),y}]}),!V,j)},"14c3":function(e,t,n){var a=n("da84"),r=n("c65b"),c=n("825a"),i=n("1626"),o=n("c6b6"),l=n("9263"),s=a.TypeError;e.exports=function(e,t){var n=e.exec;if(i(n)){var a=r(n,e,t);return null!==a&&c(a),a}if("RegExp"===o(e))return r(l,e,t);throw s("RegExp#exec called on incompatible receiver")}},"25f0":function(e,t,n){"use strict";var a=n("e330"),r=n("5e77").PROPER,c=n("6eeb"),i=n("825a"),o=n("3a9b"),l=n("577e"),s=n("d039"),d=n("ad6d"),u="toString",b=RegExp.prototype,p=b[u],f=a(d),h=s((function(){return"/a/b"!=p.call({source:"a",flags:"b"})})),m=r&&p.name!=u;(h||m)&&c(RegExp.prototype,u,(function(){var e=i(this),t=l(e.source),n=e.flags,a=l(void 0===n&&o(b,e)&&!("flags"in b)?f(e):n);return"/"+t+"/"+a}),{unsafe:!0})},"44e7":function(e,t,n){var a=n("861d"),r=n("c6b6"),c=n("b622"),i=c("match");e.exports=function(e){var t;return a(e)&&(void 0!==(t=e[i])?!!t:"RegExp"==r(e))}},"4de4":function(e,t,n){"use strict";var a=n("23e7"),r=n("b727").filter,c=n("1dde"),i=c("filter");a({target:"Array",proto:!0,forced:!i},{filter:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}})},5319:function(e,t,n){"use strict";var a=n("2ba4"),r=n("c65b"),c=n("e330"),i=n("d784"),o=n("d039"),l=n("825a"),s=n("1626"),d=n("5926"),u=n("50c4"),b=n("577e"),p=n("1d80"),f=n("8aa5"),h=n("dc4a"),m=n("0cb2"),v=n("14c3"),g=n("b622"),O=g("replace"),j=Math.max,x=Math.min,E=c([].concat),w=c([].push),y=c("".indexOf),N=c("".slice),C=function(e){return void 0===e?e:String(e)},V=function(){return"$0"==="a".replace(/./,"$0")}(),k=function(){return!!/./[O]&&""===/./[O]("a","$0")}(),$=!o((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}));i("replace",(function(e,t,n){var c=k?"$":"$0";return[function(e,n){var a=p(this),c=void 0==e?void 0:h(e,O);return c?r(c,e,a,n):r(t,b(a),e,n)},function(e,r){var i=l(this),o=b(e);if("string"==typeof r&&-1===y(r,c)&&-1===y(r,"$<")){var p=n(t,i,o,r);if(p.done)return p.value}var h=s(r);h||(r=b(r));var g=i.global;if(g){var O=i.unicode;i.lastIndex=0}var V=[];while(1){var k=v(i,o);if(null===k)break;if(w(V,k),!g)break;var $=b(k[0]);""===$&&(i.lastIndex=f(o,u(i.lastIndex),O))}for(var D="",B=0,S=0;S<V.length;S++){k=V[S];for(var L=b(k[0]),R=j(x(d(k.index),o.length),0),M=[],I=1;I<k.length;I++)w(M,C(k[I]));var T=k.groups;if(h){var P=E([L],M,R,o);void 0!==T&&w(P,T);var q=b(a(r,void 0,P))}else q=m(L,o,R,M,T,r);R>=B&&(D+=N(o,B,R)+q,B=R+L.length)}return D+N(o,B)}]}),!$||!V||k)},"6ae0":function(e,t,n){"use strict";n.r(t);n("a4d3"),n("e01a");var a=n("7a23"),r=n("d7ec"),c=n.n(r),i={class:"container pb-5 mt-6"},o=Object(a["createElementVNode"])("div",{class:"row"},[Object(a["createElementVNode"])("div",{class:"col-lg-12"},[Object(a["createElementVNode"])("img",{src:c.a,alt:"建人五四三贊助頁面",class:"img-fluid"})])],-1),l={class:"row"},s={class:"col-lg-9 order-1 order-lg-2"},d={class:"row"},u=Object(a["createElementVNode"])("h3",{class:"mb-5"},"贊助方案",-1),b={class:"card h-100"},p={class:"card-body d-flex flex-column justify-content-between"},f={class:"card-title"},h={class:"card-title fw-bold text-center"},m=Object(a["createElementVNode"])("span",{class:"align-middle"},"TWD",-1),v={class:"display-5 fw-bold price-detail align-middle px-2"},g=Object(a["createElementVNode"])("span",{class:"align-middle"},"／ 月",-1),O=Object(a["createElementVNode"])("p",{class:"fw-bold"},"方案說明",-1),j={class:"card-text text-muted"},x=Object(a["createElementVNode"])("p",{class:"fw-bold"},"您可以獲得",-1),E=["innerHTML"],w=["onClick"],y={class:"order-2 older-lg-1 col-lg-3"},N=Object(a["createElementVNode"])("h3",{class:"mb-5"},"您想要贊助我們",-1),C={key:0,class:"list-unstyled mb-4",style:{height:"360px"}},V={class:"mb-0 h6 w-75"},k={class:"d-flex justify-content-end align-items-center"},$=["onClick"],D=Object(a["createElementVNode"])("i",{class:"bi bi-dash"},null,-1),B=[D],S=["onUpdate:modelValue"],L=["onClick"],R=Object(a["createElementVNode"])("i",{class:"bi bi-plus"},null,-1),M=[R],I=["onClick"],T=Object(a["createElementVNode"])("i",{class:"bi bi-x"},null,-1),P=[T],q={key:1,class:"fs-5 mb-4",style:{height:"360px"}},A={class:"d-flex align-items-center justify-content-between"},_=Object(a["createElementVNode"])("span",{class:"me-2"},"共",-1),z={class:"fw-bold"},U=Object(a["createElementVNode"])("span",{class:"ms-2"},"項商品",-1),W=Object(a["createElementVNode"])("span",{class:"align-middle me-3"},"總計",-1),F={class:"h2 align-middle"},H=Object(a["createElementVNode"])("span",{class:"align-middle ms-3"},"元",-1),J=Object(a["createTextVNode"])("結帳");function Y(e,t,n,r,c,D){var R,T,Y,G=Object(a["resolveComponent"])("RouterLink");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",i,[o,Object(a["createElementVNode"])("div",l,[Object(a["createElementVNode"])("div",s,[Object(a["createElementVNode"])("div",d,[u,(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(c.sponsorData,(function(e){return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",{class:"col-lg-4 col-md-6 mb-4",key:e.id},[Object(a["createElementVNode"])("div",b,[Object(a["createElementVNode"])("div",p,[Object(a["createElementVNode"])("div",null,[Object(a["createElementVNode"])("h5",f,Object(a["toDisplayString"])(e.title),1),Object(a["createElementVNode"])("h5",h,[m,Object(a["createElementVNode"])("span",v,Object(a["toDisplayString"])(e.price),1),g]),O,Object(a["createElementVNode"])("p",j,Object(a["toDisplayString"])(e.description),1),x,Object(a["createElementVNode"])("p",{class:"card-text text-muted mb-3",innerHTML:e.content},null,8,E)]),Object(a["createElementVNode"])("div",null,[Object(a["createElementVNode"])("a",{href:"#",class:Object(a["normalizeClass"])(["btn btn-outline-primary w-100",{disabled:!0===c.isLoading}]),onClick:Object(a["withModifiers"])((function(t){return D.addToCart(e.id)}),["prevent"])},"贊助",10,w)])])])])})),128))])]),Object(a["createElementVNode"])("div",y,[N,0!==(null===(R=c.cartsData.carts)||void 0===R?void 0:R.length)?(Object(a["openBlock"])(),Object(a["createElementBlock"])("ul",C,[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(c.cartsData.carts,(function(e){return Object(a["openBlock"])(),Object(a["createElementBlock"])("li",{key:e.id,class:"d-flex justify-content-between align-items-center mb-4"},[Object(a["createElementVNode"])("p",V,Object(a["toDisplayString"])(e.product.title),1),Object(a["createElementVNode"])("div",k,[Object(a["createElementVNode"])("button",{type:"button",class:Object(a["normalizeClass"])(["border-0 bg-transparent",{"link-disabled":!0===c.isLoading}]),onClick:function(t){return D.updateCartNum(e.id,e.product.id,e.qty,-1)}},B,10,$),Object(a["withDirectives"])(Object(a["createElementVNode"])("input",{type:"text",readonly:"",class:"w-25 border-0 px-auto text-center","onUpdate:modelValue":function(t){return e.qty=t}},null,8,S),[[a["vModelText"],e.qty]]),Object(a["createElementVNode"])("button",{type:"button",class:Object(a["normalizeClass"])(["border-0 bg-transparent me-3",{"link-disabled":!0===c.isLoading}]),onClick:function(t){return D.updateCartNum(e.id,e.product.id,e.qty,1)}},M,10,L),Object(a["createElementVNode"])("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:function(t){return D.delCartItem(e.id)}},P,8,I)])])})),128))])):(Object(a["openBlock"])(),Object(a["createElementBlock"])("p",q," 目前沒有贊助方案 ")),Object(a["createElementVNode"])("div",A,[Object(a["createElementVNode"])("p",null,[_,Object(a["createElementVNode"])("span",z,Object(a["toDisplayString"])(null===(T=c.cartsData.carts)||void 0===T?void 0:T.length),1),U]),Object(a["createElementVNode"])("p",null,[W,Object(a["createElementVNode"])("span",F,Object(a["toDisplayString"])(D.numberWithCommas(c.cartsData.final_total)),1),H])]),Object(a["createVNode"])(G,{to:"/customerorder",class:Object(a["normalizeClass"])(["btn btn-primary w-100",{disabled:0===(null===(Y=c.cartsData.carts)||void 0===Y?void 0:Y.length)}])},{default:Object(a["withCtx"])((function(){return[J]})),_:1},8,["class"])])])])}n("99af"),n("4de4"),n("d3b7"),n("b65f"),n("ac1f"),n("5319"),n("25f0"),n("1276");var G={data:function(){return{sponsorData:[],cartsData:{},isLoading:!1}},inject:["emitter"],methods:{getProductsData:function(){var e=this,t=this.$loading.show({container:this.fullPage?null:this.$refs.formContainer,canCancel:!1,onCancel:this.onCancel});this.$http.get("".concat("https://vue3-course-api.hexschool.io","/v2/api/").concat("kevinhesapi","/products/all")).then((function(n){e.sponsorData=n.data.products.filter((function(e){return"贊助"===e.category})),t.hide()})).catch((function(n){e.$swal({icon:"warning",title:"Oops...",text:n.response.data.message}),t.hide()}))},addToCart:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;this.isLoading=!0;var a={data:{product_id:e,qty:n}};this.$http.post("".concat("https://vue3-course-api.hexschool.io","/v2/api/").concat("kevinhesapi","/cart"),a).then((function(){t.addCartAlert(),t.getCartsData(),t.isLoading=!1,t.emitter.emit("cartsNumChange")})).catch((function(){t.$swal({icon:"warning",title:"Oops...",text:"加入購物車失敗"})}))},addCartAlert:function(){this.$swal({toast:!0,position:"top-end",icon:"success",title:"已加入購物車",showConfirmButton:!1,timer:2e3,timerProgressBar:!0})},delCartItem:function(e){var t=this;this.isLoading=!0,this.$swal({icon:"warning",title:"確定要刪除嗎？",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"確定"}).then((function(n){n.isConfirmed?t.$http.delete("".concat("https://vue3-course-api.hexschool.io","/v2/api/").concat("kevinhesapi","/cart/").concat(e)).then((function(){t.getCartsData(),t.emitter.emit("cartsNumChange"),t.isLoading=!1,t.$swal({title:"已刪除",icon:"success",showConfirmButton:!1,timer:2e3})})).catch((function(){t.$swal({icon:"warning",title:"Oops...",text:"購物車刪除失敗，請重新嘗試或與我們聯絡"})})):t.isLoading=!1}))},getCartsData:function(){var e=this;this.$http.get("".concat("https://vue3-course-api.hexschool.io","/v2/api/").concat("kevinhesapi","/cart")).then((function(t){e.cartsData=t.data.data})).catch((function(t){e.$swal({icon:"warning",title:"Oops...",text:t.response.data.message})}))},updateCartNum:function(e,t,n,a){var r=this;this.isLoading=!0;var c=n+a;if(0===c)this.delCartItem(e);else{var i={data:{product_id:t,qty:c}};this.$http.put("".concat("https://vue3-course-api.hexschool.io","/v2/api/").concat("kevinhesapi","/cart/").concat(e),i).then((function(){r.$swal({toast:!0,position:"top-end",icon:"success",title:"已調整購物車",showConfirmButton:!1,timer:1500,timerProgressBar:!0}),r.getCartsData(),setTimeout((function(){r.isLoading=!1}),2e3)})).catch((function(){r.$swal({icon:"warning",title:"Oops...",text:"購物車數量調整有誤，請您重新再試或與我們聯絡"})}))}},numberWithCommas:function(e){if(!e)return 0;var t=Math.trunc(e),n=t.toString().replace(/(\d)(?=(?:\d{3})+$)/g,"$1,"),a="",r=e.toString().split(".");return 2===r.length?(a=r[1].toString(),"".concat(n,".").concat(a)):n+a}},created:function(){var e=this;this.emitter.on("cartsNumRenew",(function(){e.getCartsData()}))},mounted:function(){this.getProductsData(),this.getCartsData()}},K=n("6b0d"),Q=n.n(K);const X=Q()(G,[["render",Y]]);t["default"]=X},"8aa5":function(e,t,n){"use strict";var a=n("6547").charAt;e.exports=function(e,t,n){return t+(n?a(e,t).length:1)}},b65f:function(e,t,n){var a=n("23e7"),r=Math.ceil,c=Math.floor;a({target:"Math",stat:!0},{trunc:function(e){return(e>0?c:r)(e)}})},d784:function(e,t,n){"use strict";n("ac1f");var a=n("e330"),r=n("6eeb"),c=n("9263"),i=n("d039"),o=n("b622"),l=n("9112"),s=o("species"),d=RegExp.prototype;e.exports=function(e,t,n,u){var b=o(e),p=!i((function(){var t={};return t[b]=function(){return 7},7!=""[e](t)})),f=p&&!i((function(){var t=!1,n=/a/;return"split"===e&&(n={},n.constructor={},n.constructor[s]=function(){return n},n.flags="",n[b]=/./[b]),n.exec=function(){return t=!0,null},n[b](""),!t}));if(!p||!f||n){var h=a(/./[b]),m=t(b,""[e],(function(e,t,n,r,i){var o=a(e),l=t.exec;return l===c||l===d.exec?p&&!i?{done:!0,value:h(t,n,r)}:{done:!0,value:o(n,t,r)}:{done:!1}}));r(String.prototype,e,m[0]),r(d,b,m[1])}u&&l(d[b],"sham",!0)}},d7ec:function(e,t,n){e.exports=n.p+"img/sponsorbanner.15a2e9af.png"},e01a:function(e,t,n){"use strict";var a=n("23e7"),r=n("83ab"),c=n("da84"),i=n("e330"),o=n("1a2d"),l=n("1626"),s=n("3a9b"),d=n("577e"),u=n("9bf2").f,b=n("e893"),p=c.Symbol,f=p&&p.prototype;if(r&&l(p)&&(!("description"in f)||void 0!==p().description)){var h={},m=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:d(arguments[0]),t=s(f,this)?new p(e):void 0===e?p():p(e);return""===e&&(h[t]=!0),t};b(m,p),m.prototype=f,f.constructor=m;var v="Symbol(test)"==String(p("test")),g=i(f.toString),O=i(f.valueOf),j=/^Symbol\((.*)\)[^)]+$/,x=i("".replace),E=i("".slice);u(f,"description",{configurable:!0,get:function(){var e=O(this),t=g(e);if(o(h,e))return"";var n=v?E(t,7,-1):x(t,j,"$1");return""===n?void 0:n}}),a({global:!0,forced:!0},{Symbol:m})}}}]);
//# sourceMappingURL=chunk-a2be3a5a.c24311c0.js.map