(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{253:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"petition_id":"da282b2a-a137-4e4a-bdc4-d49e3a3d4c7b","callpower_id":null,"text_flow_id":"OP91C5097075BF0D9B12B2544A6052FB9D","subject":"Defend Cryptocurrency","contact_congress":"NO","fcc_docket":null,"tags":["defend-cryptocurrency","encryption","privacy"],"privacy_html":"<a href=\\"https://www.kin.org/\\" target=\\"_blank\\">Kin</a> and <a href=\\"https://www.fightforthefuture.org/\\" target=\\"_blank\\">\\n  Fight for the Future\\n</a> will email you updates, and you can unsubscribe at any time. Refer to <a href=\\"/terms#privacy\\">Kin</a> and <a href=\\"https://www.fightforthefuture.org/privacy/\\" target=\\"_blank\\">\\n  Fight for the Future\\n</a>’s privacy policies for more details.\\n","form":{"name":"Name*","email":"Email*","address":"Address","zip":"ZIP*","phone":"Phone # (for text list)\\n","company":"Company","comment":"Comment","button_cta":"Join the Movement"},"thanks":{"title":"Thanks for contacting us!","share":"Let’s make sure everyone knows about this important fight for the future of cryptocurrencies. Please consider sharing this website with your friends and family.\\n"}}}'),delete t.options._Ctor}},254:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"global":{"site_title":"Defend Crypto","sharing":{"title":"The SEC is threatening the future of crypto","description":"You can be part of the movement to to create a foundation of innovation going forward.\\n","image":"https://www.defendcrypto.org/share.jpg","default_tweet_text":"The federal government is threatening cryptocurrencies, but Kin has donated $5MM to #DefendCrypto. Will you join this important fight?\\n","url":"https://www.defendcrypto.org"},"call_script":"TODO: call script goes here\\n","letter_text":"TODO: letter text goes here\\n","common":{"clear":"Clear","donate":"Donate","error":"Sorry, that didn’t work for some reason. 😞 Please try again.","from":"from","logo_alt":"Fight for the Future logo","logo_kin_alt":"Kin logo","next":"Next","previous":"Previous","sending":"Sending...","share":"Share","tweet":"Tweet"},"contact":{"email":"info@kik.com"}}}}'),delete t.options._Ctor}},282:function(t,e,n){"use strict";n.r(e);n(37),n(22),n(150),n(18);var r=n(2),o=(n(10),n(5)),c=(n(303),n(13)),l=n(28),m={components:{ShareButton:n(105).default},props:{anPetitionId:{type:String,required:!1,default:function(){return this.$t("petition_id")}},subject:{type:String,required:!1,default:function(){return this.$t("subject")}},contactCongress:{type:Number,required:!1,default:function(){return"yes"===this.$t("contact_congress").toLowerCase()?1:0}},fccDocket:{required:!1,default:function(){return this.$te("fcc_docket")?this.$t("fcc_docket"):null}},callpowerId:{required:!1,default:function(){return this.$te("callpower_id")?this.$t("callpower_id"):null}},tags:{type:Object,required:!1,default:function(){return this.$t("tags")}},textFlowId:{type:String,required:!1,default:function(){return this.$t("text_flow_id")}},callScript:{type:String,required:!1,default:function(){return this.$t("global.call_script")}},buttonText:{type:String,required:!1,default:function(){return this.$t("form.button_cta")}},hasComment:{type:Boolean,required:!1,default:!0},hasCompany:{type:Boolean,required:!1,default:!0},tweetText:{type:String,required:!1,default:null}},data:function(){return{isSending:!1,hasSigned:!1,errorMessage:null,comment:null,companyName:null}},computed:Object(o.a)({},Object(c.c)(["donateUrl"]),{routeName:function(){return this.$nuxt.$route.name},name:{get:function(){return this.$store.state.name},set:function(t){this.$store.commit("setName",t)}},email:{get:function(){return this.$store.state.email},set:function(t){this.$store.commit("setEmail",t)}},address:{get:function(){return this.$store.state.address},set:function(t){this.$store.commit("setAddress",t)}},zipCode:{get:function(){return this.$store.state.zipCode},set:function(t){this.$store.commit("setZipCode",t)}},phone:{get:function(){return this.$store.state.phone},set:function(t){this.$store.commit("setPhone",t)}}}),methods:{submitForm:function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.isSending){t.next=2;break}return t.abrupt("return");case 2:return this.isSending=!0,t.prev=3,t.next=6,Object(l.g)({subject:this.subject,member:{first_name:this.name,email:this.email,phone_number:this.phone,street_address:this.address,postcode:this.zipCode,country:"US",company:this.companyName},hp_enabled:"true",guard:"",contact_congress:this.contactCongress,fcc_ecfs_docket:this.fccDocket,an_tags:JSON.stringify(Object.values(this.tags)),an_petition_id:this.anPetitionId,action_comment:this.hasComment?this.comment:""});case 6:t.sent,this.$trackEvent("petition_form_".concat(this.routeName),"submit"),this.callpowerId&&(this.$store.commit("setCallpowerCampaignId",this.callpowerId),this.$store.commit("setCallScript",this.callScript),this.$store.commit("setModalVisibility",!0),this.$store.commit("setModalType","call-form")),this.isSending=!1,this.hasSigned=!0,this.phone,t.next=18;break;case 14:t.prev=14,t.t0=t.catch(3),this.isSending=!1,this.errorMessage=this.$t("global.common.error");case 18:case"end":return t.stop()}},t,this,[[3,14]])}));return function(){return t.apply(this,arguments)}}(),startTextFlow:function(){Object(l.i)({opt_in_path:this.textFlowId,phone:this.phone,name:this.name,email:this.email,zip_code:this.zipCode,street:this.address})}}},d=n(3),h=n(306),f=n(307),component=Object(d.a)(m,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sml-push-y2 med-push-y3"},[n("div",[t.hasSigned?n("div",[n("h2",{staticClass:"text-success text-center"},[t._v(t._s(t.$t("thanks.title")))]),t._v(" "),n("p",{staticClass:"sml-push-y1"},[t._v(t._s(t.$t("thanks.share")))]),t._v(" "),n("div",{staticClass:"row sml-push-y2 med-push-y3"},[n("div",{staticClass:"sml-c12 lrg-c6"},[n("ShareButton",{staticClass:"btn-block",attrs:{network:"twitter",text:t.tweetText},nativeOn:{click:function(e){return t.$trackClick("twitter_share_button_success_"+t.routeName)}}},[n("span",[t._v(t._s(t.$t("global.common.tweet")))])])],1),t._v(" "),n("div",{staticClass:"sml-c12 lrg-c6 sml-push-y1 lrg-push-y0"},[n("ShareButton",{staticClass:"btn-block",attrs:{network:"facebook"},nativeOn:{click:function(e){return t.$trackClick("facebook_share_button_sucess_"+t.routeName)}}},[n("span",[t._v(t._s(t.$t("global.common.share")))])])],1)])]):t._e()]),t._v(" "),t.hasSigned?t._e():n("form",{on:{submit:function(e){return e.preventDefault(),t.submitForm()}}},[t.errorMessage?n("p",{staticClass:"text-warn"},[t._v("\n      "+t._s(t.errorMessage)+"\n    ")]):t._e(),t._v(" "),n("div",{staticClass:"flex-grid sml-flex-col med-flex-row"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text",placeholder:t.$t("form.name"),required:""},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"sml-push-y1 med-push-y0",attrs:{type:"email",placeholder:t.$t("form.email"),required:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),t.hasCompany?n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.companyName,expression:"companyName"}],staticClass:"sml-push-y1 med-push-y0",attrs:{type:"text",placeholder:t.$t("form.company")},domProps:{value:t.companyName},on:{input:function(e){e.target.composing||(t.companyName=e.target.value)}}})]):t._e()]),t._v(" "),t.hasComment?n("div",{staticClass:"sml-push-y1 textarea-with-btn"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.comment,expression:"comment"}],ref:"comment",attrs:{placeholder:t.$t("form.comment")},domProps:{value:t.comment},on:{input:function(e){e.target.composing||(t.comment=e.target.value)}}})]):t._e(),t._v(" "),n("button",{staticClass:"btn btn-block btn-bright sml-push-y1",attrs:{disabled:t.isSending}},[t.isSending?n("span",[t._v(t._s(t.$t("global.common.sending")))]):n("span",[t._v(t._s(t.buttonText))])]),t._v(" "),n("p",{staticClass:"text-grey-med sml-push-y1 text-center"},[n("small",{domProps:{innerHTML:t._s(t.$t("privacy_html"))}})])])])},[],!1,null,null,null);"function"==typeof h.default&&Object(h.default)(component),"function"==typeof f.default&&Object(f.default)(component);e.default=component.exports},303:function(t,e,n){"use strict";var r=n(6),o=n(23),c=n(31),l=n(149),m=n(75),d=n(15),h=n(78).f,f=n(108).f,_=n(16).f,v=n(304).trim,y=r.Number,w=y,C=y.prototype,x="Number"==c(n(107)(C)),$="trim"in String.prototype,N=function(t){var e=m(t,!1);if("string"==typeof e&&e.length>2){var n,r,o,c=(e=$?e.trim():v(e,3)).charCodeAt(0);if(43===c||45===c){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===c){switch(e.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+e}for(var code,l=e.slice(2),i=0,d=l.length;i<d;i++)if((code=l.charCodeAt(i))<48||code>o)return NaN;return parseInt(l,r)}}return+e};if(!y(" 0o1")||!y("0b1")||y("+0x1")){y=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof y&&(x?d(function(){C.valueOf.call(n)}):"Number"!=c(n))?l(new w(N(e)),n,y):N(e)};for(var k,S=n(11)?h(w):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),I=0;S.length>I;I++)o(w,k=S[I])&&!o(y,k)&&_(y,k,f(w,k));y.prototype=C,C.constructor=y,n(17)(r,"Number",y)}},304:function(t,e,n){var r=n(8),o=n(30),c=n(15),l=n(305),m="["+l+"]",d=RegExp("^"+m+m+"*"),h=RegExp(m+m+"*$"),f=function(t,e,n){var o={},m=c(function(){return!!l[t]()||"​"!="​"[t]()}),d=o[t]=m?e(_):l[t];n&&(o[n]=d),r(r.P+r.F*m,"String",o)},_=f.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(d,"")),2&e&&(t=t.replace(h,"")),t};t.exports=f},305:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},306:function(t,e,n){"use strict";var r=n(253),o=n.n(r);e.default=o.a},307:function(t,e,n){"use strict";var r=n(254),o=n.n(r);e.default=o.a}}]);