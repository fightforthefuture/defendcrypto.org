(window.webpackJsonp=window.webpackJsonp||[]).push([[3,20],{237:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"title":"Thanks for sending a photo!","selfie_alt":"A photo of you!","download_button":"Download"}}'),delete t.options._Ctor}},250:function(t,e,o){var content=o(300);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(36).default)("73f9311f",content,!0,{sourceMap:!1})},251:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"comment_label":"Your Net Neutrality thoughts:","comment_placeholder":"I care about Net Neutrality because...","upload_button":"Upload","take_photo":"Take Photo","retake_photo":"Retake Photo","submit_button":"Submit my photo","camera_connection_error":"Couldn\'t connect to camera 😞","starting":"Starting...","ready_in":"Ready in"}}'),delete t.options._Ctor}},252:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"global":{"site_title":"Defend Crypto","sharing":{"title":"The SEC is threatening the future of crypto","description":"You can be part of the movement to to create a foundation of innovation going forward.\\n","image":"https://www.defendcrypto.org/share.jpg","default_tweet_text":"The federal government is threatening cryptocurrencies, but Kin has donated $5MM to #DefendCrypto. Will you join this important fight?\\n","url":"https://www.defendcrypto.org"},"call_script":"TODO: call script goes here\\n","letter_text":"TODO: letter text goes here\\n","common":{"clear":"Clear","donate":"Donate","error":"Sorry, that didn’t work for some reason. 😞 Please try again.","from":"from","logo_alt":"Fight for the Future logo","logo_kin_alt":"Kin logo","next":"Next","previous":"Previous","sending":"Sending...","share":"Share","tweet":"Tweet"},"contact":{"email":"info@kik.com"}}}}'),delete t.options._Ctor}},268:function(t,e,o){"use strict";o.r(e);var r=o(5),n=o(13),c={components:{SocialShareButtons:o(49).default},computed:Object(r.a)({},Object(n.c)(["photoSource","selfie"]),{shareURL:function(){return"https://deadline.fftf.xyz/share/".concat(this.selfie.id)}})},l=o(3),h=o(270),component=Object(l.a)(c,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"text-center"},[o("h2",{staticClass:"text-success sml-push-y2 med-push-y3"},[t._v("\n    "+t._s(t.$t("title"))+"\n  ")]),t._v(" "),o("div",{staticClass:"row"},[o("div",{staticClass:"sml-c12 med-c7 lrg-c6 grid-center"},[o("div",{staticClass:"sml-push-y2 med-push-y3 sml-pad-2 fill-grey is-rounded-top"},[o("img",{attrs:{src:t.photoSource,alt:t.$t("selfie_alt")}})]),t._v(" "),o("div",{staticClass:"sml-pad-2 fill-grey-dark is-rounded-bottom"},[o("a",{staticClass:"btn btn-block",attrs:{href:t.selfie.photo,target:"_blank"},on:{click:function(e){return t.$trackClick("download_selfie")}}},[t._v("\n          "+t._s(t.$t("download_button"))+"\n        ")]),t._v(" "),o("SocialShareButtons",{staticClass:"sml-push-y2",attrs:{url:t.shareURL}})],1)])])])},[],!1,null,null,null);"function"==typeof h.default&&Object(h.default)(component);e.default=component.exports},270:function(t,e,o){"use strict";var r=o(237),n=o.n(r);e.default=n.a},276:function(t,e,o){"use strict";o.r(e);o(10),o(37),o(22),o(74),o(18);var r=o(2),n=o(343),c=o.n(n);function l(t){return new Promise(function(e,o){var r=new FileReader;r.onload=function(t){var img=new Image;img.onload=function(){c.a.getData(img,function(){var t=function(t){switch(t){case 3:case 4:return 180;case 5:case 6:return 90;case 7:case 8:return-90;default:return 0}}(c.a.getAllTags(img).Orientation);if(t){var o=function(image,t){var canvas=document.createElement("canvas");canvas.width=image.width,canvas.height=image.height;var e=canvas.getContext("2d");return e.save(),e.translate(canvas.width/2,canvas.height/2),e.rotate(t*Math.PI/180),e.drawImage(image,-image.width/2,-image.height/2),e.restore(),canvas}(img,t);return e(o)}e(img)})},img.onerror=function(e){console.error(e),o("Failed to load image: ".concat(t.target.result))},img.src=t.target.result},r.onerror=function(e){console.error(e),o("Failed to read file: ".concat(t))},r.readAsDataURL(t)})}function h(t){return d.apply(this,arguments)}function d(){return(d=Object(r.a)(regeneratorRuntime.mark(function t(e){var o,r,n,c,h,d,f,m,v,canvas,w,_;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(o=e.sourceElement,r=e.sourceFile,n=e.overlayElement,c=e.width,h=void 0===c?640:c,d=e.height,f=void 0===d?640:d,!r){t.next=5;break}return t.next=4,l(r);case 4:o=t.sent;case 5:return void 0!==o.videoWidth?(m=o.videoWidth,v=o.videoHeight):(m=o.width,v=o.height),(canvas=document.createElement("canvas")).width=h,canvas.height=f,w=canvas.getContext("2d"),m===v?w.drawImage(o,0,0,h,f):(_=Math.min(m,v),m>v?w.drawImage(o,(m-_)/2,0,_,_,0,0,h,f):w.drawImage(o,0,(v-_)/2,_,_,0,0,h,f)),n&&w.drawImage(n,0,0,h,f),t.abrupt("return",canvas.toDataURL("image/png"));case 13:case"end":return t.stop()}},t)}))).apply(this,arguments)}var f=o(28),m={components:{SelfieFormComplete:o(268).default},data:function(){return{videoStream:null,previewWidth:"",previewHeight:"",isCapturing:!1,captureButtonHtml:"<img src='/photo.svg'> ".concat(this.$t("take_photo")),hasWebcam:!1,isSending:!1,hasSubmitted:!1,errorMessage:null,comment:null}},computed:{photoSource:{get:function(){return this.$store.state.photoSource},set:function(t){this.$store.commit("setPhotoSource",t)}}},created:function(){this.timers={}},mounted:function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(){var e,o;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.$refs.placeholderImage&&(e=this,this.$refs.placeholderImage.onload=function(){e.previewWidth="".concat(this.width,"px"),e.previewHeight="".concat(this.height,"px"),this.onload=null}),t.next=3,navigator.mediaDevices.enumerateDevices();case 3:o=t.sent,o.filter(function(t){return"videoinput"===t.kind}).length>0&&!Object(f.d)()&&(this.hasWebcam=!0);case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),destroyed:function(){this.stopLiveView();for(var t=0,e=Object.keys(this.timers);t<e.length;t++){var o=e[t];clearTimeout(this.timers[o])}},methods:{playSound:function(t){this.$refs["".concat(t,"Sound")].play()},handleLiveViewError:function(){this.hasWebcam=!1,this.isCapturing=!1,this.videoStream=null,this.errorMessage=this.$t("camera_connection_error")},startLiveView:function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(){var e,o,r=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.photoSource=null,t.prev=1,e={video:{width:1280,height:720,facingMode:"user"},audio:!1},t.next=5,navigator.mediaDevices.getUserMedia(e);case 5:if((o=t.sent).active){t.next=8;break}throw new Error("Received inactive video stream");case 8:this.$refs.liveView.srcObject=o,this.videoStream=o,this.isCapturing=!0,this.captureButtonHtml=this.$t("starting"),this.timers.captureFail=setTimeout(function(){console.error("Failed to start live view!"),r.handleLiveViewError()},5e3),this.$refs.liveView.oncanplay=function(){r.countdown(3),clearTimeout(r.timers.captureFail)},t.next=20;break;case 16:t.prev=16,t.t0=t.catch(1),console.error(t.t0),this.handleLiveViewError();case 20:case"end":return t.stop()}},t,this,[[1,16]])}));return function(){return t.apply(this,arguments)}}(),stopLiveView:function(){this.videoStream&&this.videoStream.getTracks()[0].stop()},countdown:function(t){var e=this;t>0?(this.captureButtonHtml="".concat(this.$t("ready_in")," ").concat(t,"…"),this.playSound("countdown"),this.timers.countdown=setTimeout(function(){e.countdown(t-1)},1e3)):(this.playSound("shutter"),this.takePhoto())},createSelfie:function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(e){var source,o;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return source=e.source,o=e.file,t.next=3,h({sourceElement:source,sourceFile:o,overlayElement:this.$refs.overlay});case 3:this.photoSource=t.sent,this.isCapturing=!1,this.stopLiveView(),this.captureButtonHtml="<img src='/photo-retake.svg'> ".concat(this.$t("retake_photo"));case 7:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),takePhoto:function(){this.createSelfie({source:this.$refs.liveView}),this.$trackClick("take_photo")},uploadPhoto:function(t){this.createSelfie({file:t.target.files[0]}),this.$trackClick("upload_photo")},openFilePicker:function(){this.$refs.fileInput.click()},clickPreview:function(){this.hasWebcam?this.startLiveView():this.openFilePicker()},submitForm:function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(){var e,data;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.isSending){t.next=2;break}return t.abrupt("return");case 2:return this.isSending=!0,t.prev=3,t.next=6,this.$axios.post("https://deadline.fftf.xyz/selfies",{photo:this.photoSource,comment:this.comment,name:this.$store.state.name,email:this.$store.state.email,zip_code:this.$store.state.zipCode});case 6:e=t.sent,data=e.data,this.$trackEvent("selfie_form","submit"),this.isSending=!1,this.$store.commit("setSelfie",data),this.hasSubmitted=!0,t.next=18;break;case 14:t.prev=14,t.t0=t.catch(3),this.isSending=!1,this.errorMessage=this.$t("global.common.error");case 18:case"end":return t.stop()}},t,this,[[3,14]])}));return function(){return t.apply(this,arguments)}}()}},v=(o(299),o(3)),w=o(301),_=o(302),component=Object(v.a)(m,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.hasSubmitted?t._e():r("div",[r("form",{staticClass:"sml-push-y2 med-push-y3",on:{submit:function(e){return e.preventDefault(),t.submitForm()}}},[r("div",{staticClass:"sml-push-y2 med-push-y3 sml-pad-2 fill-grey is-rounded-top"},[t.errorMessage?r("p",{staticClass:"text-warn text-center"},[t._v("\n          "+t._s(t.errorMessage)+"\n        ")]):t._e(),t._v(" "),r("div",{staticClass:"flex-grid sml-flex-col med-flex-row",class:{"sml-push-y-half":t.errorMessage}},[r("div",[r("div",{staticClass:"preview-container grid-center is-rounded",style:{width:t.previewWidth,height:t.previewHeight},on:{click:t.clickPreview}},[t.photoSource||t.videoStream?t.photoSource?r("img",{ref:"photo",attrs:{src:t.photoSource}}):t._e():r("img",{ref:"placeholderImage",attrs:{src:o(297),alt:"Your image goes here"}}),t._v(" "),r("video",{directives:[{name:"show",rawName:"v-show",value:t.videoStream,expression:"videoStream"}],ref:"liveView",attrs:{autoplay:""}}),t._v(" "),r("img",{directives:[{name:"show",rawName:"v-show",value:!t.photoSource,expression:"!photoSource"}],ref:"overlay",staticClass:"overlay",attrs:{src:o(298),alt:""}})]),t._v(" "),r("div",{staticClass:"flex-grid sml-flex-row sml-push-y1"},[t.hasWebcam?r("div",[r("a",{staticClass:"btn btn-block btn-sml",attrs:{disabled:t.isCapturing},domProps:{innerHTML:t._s(t.captureButtonHtml)},on:{click:function(e){return e.preventDefault(),t.startLiveView()}}})]):t._e(),t._v(" "),r("div",[r("a",{staticClass:"btn btn-block btn-sml btn-alt",attrs:{disabled:t.isCapturing},on:{click:function(e){return e.preventDefault(),t.openFilePicker()}}},[r("img",{attrs:{src:"/photo-upload.svg"}}),t._v(" "+t._s(t.$t("upload_button"))+"\n                ")]),t._v(" "),r("input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"fileInput",attrs:{type:"file",disabled:t.isCapturing},on:{change:t.uploadPhoto}})])])]),t._v(" "),r("div",{staticClass:"flex-grid sml-flex-col sml-push-y2 med-push-y0"},[r("label",{staticClass:"flex-fixed-height sml-pad-1 sml-pad-x2 fill-grey-light is-rounded-top"},[r("h5",[t._v(t._s(t.$t("comment_label")))])]),t._v(" "),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.comment,expression:"comment"}],staticClass:"flat-top",attrs:{placeholder:t.$t("comment_placeholder")},domProps:{value:t.comment},on:{input:function(e){e.target.composing||(t.comment=e.target.value)}}})])])]),t._v(" "),r("div",{staticClass:"sml-pad-2 fill-grey-dark is-rounded-bottom"},[r("button",{staticClass:"btn btn-block",attrs:{disabled:t.isSending||!t.photoSource}},[t.isSending?r("span",[t._v(t._s(t.$t("global.common.sending")))]):r("span",[t._v(t._s(t.$t("submit_button")))])])])]),t._v(" "),r("audio",{ref:"countdownSound",attrs:{preload:"auto"}},[r("source",{attrs:{src:"/sounds/countdown.mp3"}})]),t._v(" "),r("audio",{ref:"shutterSound",attrs:{preload:"auto"}},[r("source",{attrs:{src:"/sounds/shutter.mp3"}})])]),t._v(" "),t.hasSubmitted?r("SelfieFormComplete"):t._e()],1)},[],!1,null,null,null);"function"==typeof w.default&&Object(w.default)(component),"function"==typeof _.default&&Object(_.default)(component);e.default=component.exports},297:function(t,e,o){t.exports=o.p+"img/2f1a1b2.png"},298:function(t,e,o){t.exports=o.p+"img/ee823e6.png"},299:function(t,e,o){"use strict";var r=o(250);o.n(r).a},300:function(t,e,o){(t.exports=o(35)(!1)).push([t.i,"@-webkit-keyframes blur-in{0%{opacity:0;-webkit-filter:blur(25px);filter:blur(25px)}to{opacity:1;-webkit-filter:blur(0);filter:blur(0)}}@keyframes blur-in{0%{opacity:0;-webkit-filter:blur(25px);filter:blur(25px)}to{opacity:1;-webkit-filter:blur(0);filter:blur(0)}}.preview-container{overflow:hidden;position:relative}.preview-container video{width:100%;height:100%;-o-object-fit:cover;object-fit:cover;-webkit-animation:blur-in 2s;animation:blur-in 2s}.preview-container .overlay{-o-object-fit:cover;object-fit:cover;position:absolute;top:0;left:0;bottom:0;right:0;pointer-events:none}",""])},301:function(t,e,o){"use strict";var r=o(251),n=o.n(r);e.default=n.a},302:function(t,e,o){"use strict";var r=o(252),n=o.n(r);e.default=n.a}}]);