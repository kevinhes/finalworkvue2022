(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3365ab43"],{1276:function(e,t,n){"use strict";var i=n("2ba4"),o=n("c65b"),r=n("e330"),c=n("d784"),a=n("44e7"),s=n("825a"),l=n("1d80"),d=n("4840"),u=n("8aa5"),p=n("50c4"),f=n("577e"),m=n("dc4a"),b=n("4dae"),h=n("14c3"),v=n("9263"),g=n("9f7f"),j=n("d039"),y=g.UNSUPPORTED_Y,O=4294967295,E=Math.min,x=[].push,w=r(/./.exec),N=r(x),V=r("".slice),k=!j((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));c("split",(function(e,t,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var r=f(l(this)),c=void 0===n?O:n>>>0;if(0===c)return[];if(void 0===e)return[r];if(!a(e))return o(t,r,e,c);var s,d,u,p=[],m=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),h=0,g=new RegExp(e.source,m+"g");while(s=o(v,g,r)){if(d=g.lastIndex,d>h&&(N(p,V(r,h,s.index)),s.length>1&&s.index<r.length&&i(x,p,b(s,1)),u=s[0].length,h=d,p.length>=c))break;g.lastIndex===s.index&&g.lastIndex++}return h===r.length?!u&&w(g,"")||N(p,""):N(p,V(r,h)),p.length>c?b(p,0,c):p}:"0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:o(t,this,e,n)}:t,[function(t,n){var i=l(this),c=void 0==t?void 0:m(t,e);return c?o(c,t,i,n):o(r,f(i),t,n)},function(e,i){var o=s(this),c=f(e),a=n(r,o,c,i,r!==t);if(a.done)return a.value;var l=d(o,RegExp),m=o.unicode,b=(o.ignoreCase?"i":"")+(o.multiline?"m":"")+(o.unicode?"u":"")+(y?"g":"y"),v=new l(y?"^(?:"+o.source+")":o,b),g=void 0===i?O:i>>>0;if(0===g)return[];if(0===c.length)return null===h(v,c)?[c]:[];var j=0,x=0,w=[];while(x<c.length){v.lastIndex=y?0:x;var k,P=h(v,y?V(c,x):c);if(null===P||(k=E(p(v.lastIndex+(y?x:0)),c.length))===j)x=u(c,x,m);else{if(N(w,V(c,j,x)),w.length===g)return w;for(var T=1;T<=P.length-1;T++)if(N(w,P[T]),w.length===g)return w;x=j=k}}return N(w,V(c,j)),w}]}),!k,y)},"14c3":function(e,t,n){var i=n("da84"),o=n("c65b"),r=n("825a"),c=n("1626"),a=n("c6b6"),s=n("9263"),l=i.TypeError;e.exports=function(e,t){var n=e.exec;if(c(n)){var i=o(n,e,t);return null!==i&&r(i),i}if("RegExp"===a(e))return o(s,e,t);throw l("RegExp#exec called on incompatible receiver")}},"159b":function(e,t,n){var i=n("da84"),o=n("fdbc"),r=n("785a"),c=n("17c2"),a=n("9112"),s=function(e){if(e&&e.forEach!==c)try{a(e,"forEach",c)}catch(t){e.forEach=c}};for(var l in o)o[l]&&s(i[l]&&i[l].prototype);s(r)},"17c2":function(e,t,n){"use strict";var i=n("b727").forEach,o=n("a640"),r=o("forEach");e.exports=r?[].forEach:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}},"44e7":function(e,t,n){var i=n("861d"),o=n("c6b6"),r=n("b622"),c=r("match");e.exports=function(e){var t;return i(e)&&(void 0!==(t=e[c])?!!t:"RegExp"==o(e))}},"7e5c":function(e,t,n){"use strict";n.r(t);var i=n("7a23"),o=function(e){return Object(i["pushScopeId"])("data-v-47c179db"),e=e(),Object(i["popScopeId"])(),e},r={class:"container py-lg-5 py-3 mt-6"},c={class:"row"},a={class:"offset-lg-2 col-lg-3 mb-2 mb-lg-0"},s=["src","alt"],l={class:"col-lg-5 d-flex flex-column justify-content-center"},d={class:"mb-3 text-muted"},u=Object(i["createTextVNode"])("建人五四三 "),p={class:"fs-6 text-muted"},f={class:"d-flex mb-2"},m={class:"w-50 me-1 col position-relative"},b={key:0,class:"position-absolute start-15 top-50 translate-middle"},h=o((function(){return Object(i["createElementVNode"])("i",{class:"bi bi-volume-up text-primary fs-3"},null,-1)})),v=[h],g=["src"],j={class:"w-50 ms-1 col"},y=["href"],O=["href"],E={key:0,class:"d-flex"},x=o((function(){return Object(i["createElementVNode"])("i",{class:"bi bi-stop-fill fs-2 lh-1 text-primary"},null,-1)})),w=[x],N=o((function(){return Object(i["createElementVNode"])("i",{class:"bi bi-play-fill fs-2 lh-1 text-primary"},null,-1)})),V=[N],k=o((function(){return Object(i["createElementVNode"])("i",{class:"bi bi-pause-fill fs-2 lh-1 text-primary"},null,-1)})),P=[k],T={class:"time-filled rounded-3",ref:"timeLinePosition"},A={key:0,class:"position-absolute top-50 start-50 mb-0 translate-middle"},S=o((function(){return Object(i["createElementVNode"])("div",{class:"spinner-grow text-primary",role:"status"},[Object(i["createElementVNode"])("span",{class:"visually-hidden"},"Loading...")],-1)})),B=[S],C={key:1,class:"text-dark position-absolute top-50 start-50 mb-0 translate-middle"},L=o((function(){return Object(i["createElementVNode"])("i",{class:"bi bi-volume-down-fill fs-2 lh-1 text-primary"},null,-1)})),D=[L],$=o((function(){return Object(i["createElementVNode"])("i",{class:"bi bi-volume-up-fill fs-2 lh-1 text-primary"},null,-1)})),M=[$],I=o((function(){return Object(i["createElementVNode"])("hr",null,null,-1)})),R={class:"row mb-6"},U={class:"col-lg-3 offset-lg-2 order-3 order-md-2"},H=o((function(){return Object(i["createElementVNode"])("h5",{class:"mb-3"},"參考資料",-1)})),_=["innerHTML"],J={class:"col-lg-5 order-2 order-md-3"},F=o((function(){return Object(i["createElementVNode"])("h5",{class:"mb-3"},"節目資料",-1)})),W=["innerHTML"],X=["innerHTML"],Y={class:"row mb-7"},q={class:"offset-lg-2 col-lg-8"},z={class:"mb-3"},G=["onClick"],K=["src","alt"],Q={class:"text-dark text-start fs-7 mb-0"},Z={class:"text-dark text-start mb-0 multiline-ellipsis"};function ee(e,t,n,o,h,x){var N=Object(i["resolveComponent"])("swiper-slide"),k=Object(i["resolveComponent"])("swiper");return Object(i["openBlock"])(),Object(i["createElementBlock"])("div",r,[Object(i["createElementVNode"])("div",c,[Object(i["createElementVNode"])("div",a,[Object(i["createElementVNode"])("img",{src:h.product.imageUrl,alt:h.product.title,class:"img-fluid"},null,8,s)]),Object(i["createElementVNode"])("div",l,[Object(i["createElementVNode"])("h5",null,Object(i["toDisplayString"])(h.product.category),1),Object(i["createElementVNode"])("h2",null,Object(i["toDisplayString"])(h.product.title),1),Object(i["createElementVNode"])("p",d,[u,Object(i["createElementVNode"])("span",p,Object(i["toDisplayString"])(h.product.episodeTime),1)]),Object(i["createElementVNode"])("div",f,[Object(i["createElementVNode"])("div",m,[h.isPlayed?(Object(i["openBlock"])(),Object(i["createElementBlock"])("div",b,v)):Object(i["createCommentVNode"])("",!0),Object(i["createElementVNode"])("button",{onClick:t[0]||(t[0]=function(){return x.audioPlayer&&x.audioPlayer.apply(x,arguments)}),type:"button",class:"btn btn-outline-primary w-100 py-2"},"試聽十分鐘"),Object(i["createElementVNode"])("audio",{ref:"audio",src:h.product.audition,onTimeupdate:t[1]||(t[1]=function(){return x.timeProgress&&x.timeProgress.apply(x,arguments)})},null,40,g)]),Object(i["createElementVNode"])("div",j,[Object(i["createElementVNode"])("a",{href:h.product.episodeLink,target:"blank",class:"btn btn-primary w-100 py-2 d-none d-md-block"},"Apple podcast 上收聽",8,y),Object(i["createElementVNode"])("a",{href:h.product.episodeLink,target:"blank",class:"btn btn-primary w-100 py-2 d-md-none"},"Apple podcast",8,O)])]),Object(i["createVNode"])(i["Transition"],null,{default:Object(i["withCtx"])((function(){return[!0===h.audioPlayerShow?(Object(i["openBlock"])(),Object(i["createElementBlock"])("div",E,[Object(i["createElementVNode"])("div",{class:"border border-primary rounded-3 me-2 p-2 number-btn",onClick:t[2]||(t[2]=function(){return x.audioStop&&x.audioStop.apply(x,arguments)})},w),!1===h.isPlayed?(Object(i["openBlock"])(),Object(i["createElementBlock"])("div",{key:0,class:"border border-primary rounded-3 me-2 p-2 number-btn",onClick:t[3]||(t[3]=function(){return x.audioPlay&&x.audioPlay.apply(x,arguments)})},V)):Object(i["createCommentVNode"])("",!0),!0===h.isPlayed?(Object(i["openBlock"])(),Object(i["createElementBlock"])("div",{key:1,class:"border border-primary rounded-3 me-2 p-2 number-btn",onClick:t[4]||(t[4]=function(){return x.audioPause&&x.audioPause.apply(x,arguments)})},P)):Object(i["createCommentVNode"])("",!0),Object(i["createElementVNode"])("div",{class:"time-line border border-primary rounded-3 flex-grow-1 me-md-2 position-relative",ref:"audioBar",onMousedown:t[5]||(t[5]=Object(i["withModifiers"])((function(){return x.adjustAudioTime&&x.adjustAudioTime.apply(x,arguments)}),["stop"])),onMouseup:t[6]||(t[6]=function(){return x.endAdjustAudioTime&&x.endAdjustAudioTime.apply(x,arguments)})},[Object(i["createElementVNode"])("div",T,[0===h.audioLoadingState?(Object(i["openBlock"])(),Object(i["createElementBlock"])("div",A,B)):(Object(i["openBlock"])(),Object(i["createElementBlock"])("p",C,Object(i["toDisplayString"])(h.playedTime),1))],512)],544),Object(i["createElementVNode"])("div",{class:"border border-primary rounded-3 me-2 p-2 d-none d-md-block number-btn",onClick:t[7]||(t[7]=function(){return x.volumeDown&&x.volumeDown.apply(x,arguments)})},D),Object(i["createElementVNode"])("div",{class:"border border-primary rounded-3 p-2 d-none d-md-block number-btn",onClick:t[8]||(t[8]=function(){return x.volumeUp&&x.volumeUp.apply(x,arguments)})},M)])):Object(i["createCommentVNode"])("",!0)]})),_:1})])]),I,Object(i["createElementVNode"])("div",R,[Object(i["createElementVNode"])("div",U,[H,Object(i["createElementVNode"])("p",{innerHTML:h.references},null,8,_)]),Object(i["createElementVNode"])("div",J,[F,Object(i["createElementVNode"])("p",{innerHTML:h.descriptionText},null,8,W),Object(i["createElementVNode"])("p",{innerHTML:h.contentText},null,8,X)])]),Object(i["createElementVNode"])("div",Y,[Object(i["createElementVNode"])("div",q,[Object(i["createElementVNode"])("h5",z,Object(i["toDisplayString"])(h.product.category)+"其他單集",1),Object(i["createVNode"])(k,{slidesPerView:4,spaceBetween:30,modules:o.modules,pagination:!0,class:"mySwiper",breakpoints:{390:{slidesPerView:2,spaceBetween:20},768:{slidesPerView:4,spaceBetween:30}}},{default:Object(i["withCtx"])((function(){return[(Object(i["openBlock"])(!0),Object(i["createElementBlock"])(i["Fragment"],null,Object(i["renderList"])(h.productsData,(function(e){return Object(i["openBlock"])(),Object(i["createBlock"])(N,{key:e.id},{default:Object(i["withCtx"])((function(){return[Object(i["createElementVNode"])("a",{href:"#",onClick:Object(i["withModifiers"])((function(t){return x.changeEpisode(e.id)}),["prevent"])},[Object(i["createElementVNode"])("img",{src:e.imageUrl,alt:e.title},null,8,K),Object(i["createElementVNode"])("p",Q,Object(i["toDisplayString"])(x.episodeTitleCutNum(e.title)),1),Object(i["createElementVNode"])("p",Z,Object(i["toDisplayString"])(x.episodeTitleCut(e.title)),1)],8,G)]})),_:2},1024)})),128))]})),_:1},8,["modules"])])])])}n("99af"),n("ac1f"),n("1276"),n("a4d3"),n("e01a"),n("d3b7"),n("159b"),n("a15b"),n("a434");var te=n("8349"),ne=(n("5f67"),n("09e7"),n("6417")),ie={data:function(){return{productsData:[],product:{},contentText:"",descriptionText:"",references:"",searchProductId:"",isPlayed:!1,episodeAudio:"",timeLinePosition:"",playedTime:null,audioPlayerShow:!1,audioLoadingState:0}},components:{Swiper:te["a"],SwiperSlide:te["b"]},inject:["emitter"],methods:{getProductData:function(e){var t=this,n=null;n=void 0===e?this.$route.params.id:e,this.$http.get("".concat("https://vue3-course-api.hexschool.io","/v2/api/").concat("kevinhesapi","/product/").concat(n)).then((function(e){t.product=e.data.product,t.getProductsData(1,t.product.category),t.textCut()})).catch((function(e){t.$swal({icon:"warning",title:"Oops...",text:e.response.data.message})}))},getProductsData:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",i=this.$loading.show({container:this.fullPage?null:this.$refs.formContainer,canCancel:!1,onCancel:this.onCancel});this.$http.get("".concat("https://vue3-course-api.hexschool.io","/v2/api/").concat("kevinhesapi","/products?page=").concat(t,"&category=").concat(n)).then((function(t){e.productsData=t.data.products,i.hide()})).catch((function(t){e.$swal({icon:"warning",title:"Oops...",text:t.response.data.message}),i.hide()}))},textCut:function(){var e=this.product.content.split("\n"),t=this.product.description.split("\n"),n=this.product.references.split("\n"),i="",o="",r="";e.forEach((function(e){i+="\n        ".concat(e,"<br/>\n        ")})),t.forEach((function(e){o+="\n        ".concat(e,"<br/>\n        ")})),n.forEach((function(e){r+="\n        ".concat(e,"<br/>\n        ")})),this.contentText=i,this.descriptionText=o,this.references=r},changeEpisode:function(e){this.$router.push("/episode/".concat(e)),this.getProductData(e),this.audioStop()},audioPlayer:function(){var e=this;!0===this.episodeAudio.paused&&(this.isPlayed=this.episodeAudio.paused,this.audioPlayerShow=!0,this.$nextTick((function(){e.timeLinePosition=e.$refs.timeLinePosition})),this.episodeAudio.play())},audioPlay:function(){this.isPlayed=this.episodeAudio.paused,this.episodeAudio.play()},audioStop:function(){this.isPlayed=!1,this.audioPlayerShow=!1,this.episodeAudio.pause(),this.episodeAudio.currentTime=0},audioPause:function(){this.isPlayed=this.episodeAudio.paused,this.episodeAudio.pause()},volumeUp:function(){this.episodeAudio.volume<1&&(this.episodeAudio.volume+=.1)},volumeDown:function(){this.episodeAudio.volume>=.1&&(this.episodeAudio.volume-=.1)},timeProgress:function(){this.audioLoadingState=this.episodeAudio.readyState;var e=this.episodeAudio.duration,t=this.episodeAudio.currentTime,n=t/e*100;this.timeLinePosition.style.flexBasis="".concat(n,"%")},playedTimeInfo:function(){var e=this.episodeAudio.currentTime,t=e%60,n=e/60;t=Math.floor(t),n=Math.floor(n);var i="".concat(n," : ").concat(t);this.playedTime=i},audioEventListener:function(){this.$refs.audio.addEventListener("timeupdate",this.timeProgress),this.$refs.audio.addEventListener("timeupdate",this.playedTimeInfo)},adjustAudioTime:function(){this.$refs.audioBar.addEventListener("mousedown",this.dragTimeBar),this.$refs.audioBar.addEventListener("mousemove",this.dragTimeBar)},endAdjustAudioTime:function(){this.$refs.audioBar.removeEventListener("mousemove",this.dragTimeBar)},dragTimeBar:function(e){var t=this.episodeAudio.duration,n=e.offsetX,i=this.$refs.audioBar.offsetWidth,o=n/i,r=t*o;this.episodeAudio.currentTime=r},episodeTitleCutNum:function(e){var t=e.split(" ",2);return t=t.join(" "),t},episodeTitleCut:function(e){var t=e.split(" ");return t.splice(0,3),t=t.join(),t}},setup:function(){return{modules:[ne["a"]],Pagination:{clickable:!0}}},created:function(){var e=this;this.emitter.on("pagereload",(function(t){e.searchProductId=t.searchId,e.getProductData(e.searchProductId)}))},mounted:function(){this.getProductData(),this.episodeAudio=this.$refs.audio,this.audioEventListener()}},oe=(n("e830"),n("6b0d")),re=n.n(oe);const ce=re()(ie,[["render",ee],["__scopeId","data-v-47c179db"]]);t["default"]=ce},"8aa5":function(e,t,n){"use strict";var i=n("6547").charAt;e.exports=function(e,t,n){return t+(n?i(e,t).length:1)}},a15b:function(e,t,n){"use strict";var i=n("23e7"),o=n("e330"),r=n("44ad"),c=n("fc6a"),a=n("a640"),s=o([].join),l=r!=Object,d=a("join",",");i({target:"Array",proto:!0,forced:l||!d},{join:function(e){return s(c(this),void 0===e?",":e)}})},a434:function(e,t,n){"use strict";var i=n("23e7"),o=n("da84"),r=n("23cb"),c=n("5926"),a=n("07fa"),s=n("7b0b"),l=n("65f0"),d=n("8418"),u=n("1dde"),p=u("splice"),f=o.TypeError,m=Math.max,b=Math.min,h=9007199254740991,v="Maximum allowed length exceeded";i({target:"Array",proto:!0,forced:!p},{splice:function(e,t){var n,i,o,u,p,g,j=s(this),y=a(j),O=r(e,y),E=arguments.length;if(0===E?n=i=0:1===E?(n=0,i=y-O):(n=E-2,i=b(m(c(t),0),y-O)),y+n-i>h)throw f(v);for(o=l(j,i),u=0;u<i;u++)p=O+u,p in j&&d(o,u,j[p]);if(o.length=i,n<i){for(u=O;u<y-i;u++)p=u+i,g=u+n,p in j?j[g]=j[p]:delete j[g];for(u=y;u>y-i+n;u--)delete j[u-1]}else if(n>i)for(u=y-i;u>O;u--)p=u+i-1,g=u+n-1,p in j?j[g]=j[p]:delete j[g];for(u=0;u<n;u++)j[u+O]=arguments[u+2];return j.length=y-i+n,o}})},a640:function(e,t,n){"use strict";var i=n("d039");e.exports=function(e,t){var n=[][e];return!!n&&i((function(){n.call(null,t||function(){return 1},1)}))}},d784:function(e,t,n){"use strict";n("ac1f");var i=n("e330"),o=n("6eeb"),r=n("9263"),c=n("d039"),a=n("b622"),s=n("9112"),l=a("species"),d=RegExp.prototype;e.exports=function(e,t,n,u){var p=a(e),f=!c((function(){var t={};return t[p]=function(){return 7},7!=""[e](t)})),m=f&&!c((function(){var t=!1,n=/a/;return"split"===e&&(n={},n.constructor={},n.constructor[l]=function(){return n},n.flags="",n[p]=/./[p]),n.exec=function(){return t=!0,null},n[p](""),!t}));if(!f||!m||n){var b=i(/./[p]),h=t(p,""[e],(function(e,t,n,o,c){var a=i(e),s=t.exec;return s===r||s===d.exec?f&&!c?{done:!0,value:b(t,n,o)}:{done:!0,value:a(n,t,o)}:{done:!1}}));o(String.prototype,e,h[0]),o(d,p,h[1])}u&&s(d[p],"sham",!0)}},e01a:function(e,t,n){"use strict";var i=n("23e7"),o=n("83ab"),r=n("da84"),c=n("e330"),a=n("1a2d"),s=n("1626"),l=n("3a9b"),d=n("577e"),u=n("9bf2").f,p=n("e893"),f=r.Symbol,m=f&&f.prototype;if(o&&s(f)&&(!("description"in m)||void 0!==f().description)){var b={},h=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:d(arguments[0]),t=l(m,this)?new f(e):void 0===e?f():f(e);return""===e&&(b[t]=!0),t};p(h,f),h.prototype=m,m.constructor=h;var v="Symbol(test)"==String(f("test")),g=c(m.toString),j=c(m.valueOf),y=/^Symbol\((.*)\)[^)]+$/,O=c("".replace),E=c("".slice);u(m,"description",{configurable:!0,get:function(){var e=j(this),t=g(e);if(a(b,e))return"";var n=v?E(t,7,-1):O(t,y,"$1");return""===n?void 0:n}}),i({global:!0,forced:!0},{Symbol:h})}},e830:function(e,t,n){"use strict";n("f5a7")},f5a7:function(e,t,n){}}]);
//# sourceMappingURL=chunk-3365ab43.6a7cf27c.js.map