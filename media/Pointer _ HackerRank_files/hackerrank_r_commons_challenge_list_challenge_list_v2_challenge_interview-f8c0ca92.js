(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"1Udd":function(e,t,a){"use strict";a("f3/d"),a("9VmF");var n=a("cDcd"),i=a.n(n),o=a("17x9"),r=a.n(o),s=a("8KV7");function c(e){var t,a,n,o=e.challenge,r=e.contest,c=e.fab,l=o.slug;return"master"===o.contest_slug?(t=l.startsWith("30")?"30daysofcode":l.startsWith("ctci")?"crackingthecodinginterview":"challenges",a=o.name,n=l):(t="contest",a=r.name,n=r.slug),i.a.createElement("div",{className:"social-share-wrap-2"},i.a.createElement("div",{className:"clearfix"},i.a.createElement(s.a,{align:"left",name:a,page:t,slug:n,fab:c})))}c.propTypes={challenge:r.a.object,contest:r.a.object.isRequired,fab:r.a.bool},c.defaultProps={fab:!1,challenge:{}},t.a=c},"32RN":function(e,t,a){},JGr0:function(e,t,a){},K3Zx:function(e,t,a){"use strict";var n=a("lwsE"),i=a.n(n),o=a("W8MJ"),r=a.n(o),s=a("a1gu"),c=a.n(s),l=a("Nsbk"),u=a.n(l),d=a("PJYZ"),m=a.n(d),p=a("7W2i"),f=a.n(p),b=a("lSNA"),g=a.n(b),h=a("cDcd"),v=a.n(h),k=a("17x9"),y=a.n(k),N=a("wd/R"),w=a.n(N),E=a("JalC"),O=a("eOGF"),S=function(e){function t(e){var a;return i()(this,t),a=c()(this,u()(t).call(this,e)),g()(m()(a),"state",void 0),g()(m()(a),"intervalObject",void 0),g()(m()(a),"onTimerEnd",function(){a.props.onTimerEnd()}),a.state={timeRemaining:""},a.intervalObject=null,a}return f()(t,e),r()(t,[{key:"componentDidMount",value:function(){var e=this;this.setNewTimeDiff(),this.intervalObject=setInterval(function(){e.setNewTimeDiff()},1e3)}},{key:"componentWillUnmount",value:function(){this.clearIntervalObj()}},{key:"clearIntervalObj",value:function(){this.intervalObject&&clearInterval(this.intervalObject)}},{key:"setNewTimeDiff",value:function(){var e=this.props.finishTimeMs-(new Date).getTime();if(e<=0)return this.clearIntervalObj(),void this.onTimerEnd();var t=w.a.duration(e);if(t.days()>0)this.setState({timeRemaining:v.a.createElement("span",{className:"countdowntimer-days"},"".concat(t.days()," ").concat(t.days()>1?"days":"day"))});else{var a=Object(O.q)(t.hours()),n=Object(O.q)(t.minutes()),i=Object(O.q)(t.seconds()),o=v.a.createElement("span",{className:"countdowntimer-clock"},v.a.createElement("span",{className:"countdowntimer-hours"},a),":",v.a.createElement("span",{className:"countdowntimer-minutes"},n),":",v.a.createElement("span",{className:"countdowntimer-seconds"},i));this.setState({timeRemaining:o})}}},{key:"render",value:function(){var e=this.state.timeRemaining,t=this.props.className;return""===e?v.a.createElement(E.a,{className:"countdowntimer-loader",diameter:16}):v.a.createElement("span",{className:t},this.state.timeRemaining)}}]),t}(v.a.Component);g()(S,"propTypes",{finishTimeMs:y.a.number.isRequired,onTimerEnd:y.a.func}),g()(S,"defaultProps",{onTimerEnd:function(){}}),t.a=S},azS7:function(e,t,a){},iEEE:function(e,t,a){"use strict";var n=a("lwsE"),i=a.n(n),o=a("W8MJ"),r=a.n(o),s=a("a1gu"),c=a.n(s),l=a("Nsbk"),u=a.n(l),d=a("PJYZ"),m=a.n(d),p=a("7W2i"),f=a.n(p),b=a("lSNA"),g=a.n(b),h=a("cDcd"),v=a.n(h),k=a("17x9"),y=a.n(k),N=a("EA6I"),w=a("/MKj"),E=a("fvjX"),O=a("TSYQ"),S=a.n(O),j=a("ZaSc"),T=a("zCcT"),C=a("Lds6"),R=a("7fp8"),F=(a("32RN"),function(e){function t(e){var a;return i()(this,t),a=c()(this,u()(t).call(this,e)),g()(m()(a),"state",void 0),g()(m()(a),"submitTimeout",void 0),g()(m()(a),"toggleFeedback",function(e){a.setState({feedbackOpen:!a.state.feedbackOpen,target:e.currentTarget})}),g()(m()(a),"onClose",function(){a.setState({feedbackOpen:!1})}),g()(m()(a),"onSeen",function(e){return Object(j.g)({url:Object(R.f)("seenFeedback",{apiPrefix:"".concat(a.props.apiPrefix),id:"".concat(e)}),loadingMessage:!1})}),g()(m()(a),"onSubmit",function(e){a.submitTimeout=setTimeout(function(){a.setState({feedbackOpen:!1}),a.props.featureFeedbackActions.disable(e)},3e3)}),g()(m()(a),"renderFeatureFeedback",function(){var e=a.props,t=e.featureId,n=e.apiPrefix,i=e.title,o=e.description,r=e.feature,s=e.popoverClassName,c=e.align,l=e.coordinate,u=e.theme,d=a.state.target;if(r){var m=i||r.heading||"Love our new upgrade?",p=o||r.description||"Let us know what you feel about it.";return v.a.createElement(N.a,{className:s,target:d,align:c,open:!0,coordinate:l,onClose:a.onClose,showTip:!0},v.a.createElement(T.a,{featureId:t,title:m,desc:p,theme:u,onSeen:a.onSeen,onClose:a.onClose,onSubmit:a.onSubmit,isStandalone:!0,postUrl:Object(R.f)("updateFeedback",{apiPrefix:n,id:t})}))}}),a.state={feedbackOpen:!1,target:void 0},a}return f()(t,e),r()(t,[{key:"componentWillUnmount",value:function(){clearTimeout(this.submitTimeout)}},{key:"render",value:function(){var e=this.props,t=e.children,a=e.className;return v.a.createElement(h.Fragment,null,!!this.renderFeatureFeedback()&&v.a.createElement("span",{"data-balloon":"Share your feedback with us","data-balloon-pos":"left",className:S()("feature-feedback cursor-pointer",a),onClick:this.toggleFeedback},t||v.a.createElement("i",{className:"ui-icon-thumbs-up-light"})),this.state.feedbackOpen&&this.renderFeatureFeedback())}}]),t}(v.a.Component));g()(F,"propTypes",{featureId:y.a.number.isRequired,title:y.a.string,description:y.a.string,className:y.a.string,popoverClassName:y.a.string,align:y.a.string,coordinate:y.a.object,theme:y.a.string}),t.a=Object(w.connect)(function(e,t){var a=t.featureId,n="hackerrank"===e.metadata.productNamespace?"rest":"x/api/v1";return{feature:e.featureFeedback.featureLists[a],apiPrefix:n}},function(e){return{featureFeedbackActions:Object(E.b)(C.a,e)}})(F)},"iw/w":function(e,t,a){"use strict";var n=a("MVZn"),i=a.n(n),o=(a("VRzm"),a("lwsE")),r=a.n(o),s=a("W8MJ"),c=a.n(s),l=a("a1gu"),u=a.n(l),d=a("Nsbk"),m=a.n(d),p=a("PJYZ"),f=a.n(p),b=a("7W2i"),g=a.n(b),h=a("lSNA"),v=a.n(h),k=a("cDcd"),y=a.n(k),N=a("17x9"),w=a.n(N),E=a("oBtd"),O=a.n(E),S=a("oOaF"),j=a("/MKj"),T=a("fvjX"),C=a("LNHK"),R=function(e){function t(){var e,a;r()(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return a=u()(this,(e=m()(t)).call.apply(e,[this].concat(i))),v()(f()(a),"toggleBookmark",function(e,t){t.preventDefault();var n=a.props,i=n.challenge,o=n.challengeActions,r=i.slug,s=i.contest_slug,c={challenge_id:i.id,attribute1:s,attribute2:r,attribute3:e?"bookmarked":"unbookmarked",attribute4:"challengeListPage"};return O.a.track("Click","BookmarkChallenge",c),new Promise(function(t,a){o.updateChallenge({challengeSlug:r,contestSlug:s,changes:{bookmarked:e}}).then(function(){t()}).catch(function(){a()})})}),a}return g()(t,e),c()(t,[{key:"render",value:function(){var e=this.props,t=e.challenge,a=e.profile,n=e.className;return t&&"master"===t.contest_slug&&a.username?y.a.createElement(S.a,{initialValue:t.bookmarked,className:n,label:function(e){return e?"Remove bookmark":"Add bookmark"},onClick:this.toggleBookmark}):null}}]),t}(k.Component);v()(R,"propTypes",{challenge:w.a.object.isRequired,className:w.a.string}),v()(R,"defaultProps",{className:""});R=Object(j.connect)(function(e,t){var a=e.community.profile;return i()({},t,{profile:a})},function(e){return{challengeActions:Object(T.b)(C.a,e)}})(R),t.a=R},vS12:function(e,t,a){"use strict";var n=a("cDcd"),i=a.n(n),o=a("17x9"),r=a.n(o),s=a("O766"),c=a("eOGF");a("azS7");function l(e){var t=e.open,a=e.onClose,n=e.title,o=e.youtubeId,r=e.className;return i.a.createElement(s.a,{open:t,onClose:a,title:n,theme:"theme-m",modalClass:"video-modal",className:r},i.a.createElement("div",{className:"frame-wrapper"},i.a.createElement("iframe",{id:"player-".concat(o),className:"youtube-frame block-center",type:"text/html",src:"https://www.youtube.com/embed/".concat(o,"?").concat(Object(c.U)({enablejsapi:1,version:3,autoplay:1,rel:0,origin:"https://www.hackerrank.com"})),frameBorder:"0",allowFullScreen:!0})))}l.propTypes={open:r.a.bool,onClose:r.a.func,title:r.a.string.isRequired,youtubeId:r.a.string.isRequired},t.a=l},vesa:function(e,t,a){},x2ze:function(e,t,a){"use strict";var n=a("lwsE"),i=a.n(n),o=a("W8MJ"),r=a.n(o),s=a("a1gu"),c=a.n(s),l=a("Nsbk"),u=a.n(l),d=a("PJYZ"),m=a.n(d),p=a("7W2i"),f=a.n(p),b=a("lSNA"),g=a.n(b),h=a("cDcd"),v=a.n(h),k=a("17x9"),y=a.n(k),N=a("eOGF"),w=a("vS12"),E=(a("vesa"),function(e){function t(e){var a;return i()(this,t),a=c()(this,u()(t).call(this)),g()(m()(a),"state",void 0),a.state={openVideoModal:e.autoOpen},a}return f()(t,e),r()(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.title,n=t.analyticsKey,i=t.duration,o=t.youtubeId,r=t.contestSlug,s=t.challengeSlug,c=this.state.openVideoModal;return v.a.createElement("div",{className:"video-modal-wrapper"},v.a.createElement("img",{className:"youtube-video-image",alt:"YouTube connection issue.",src:"https://img.youtube.com/vi/".concat(o,"/mqdefault.jpg")}),v.a.createElement("a",{className:"video-modal-link-overlay cursor","data-slug":o,"data-analytics":n,"data-attr1":s,"data-attr2":r,"data-attr3":o,"data-attr4":a,onClick:function(){return e.setState({openVideoModal:!0})}},v.a.createElement("div",{className:"challenge-video-duration"},Object(N.R)(i)),v.a.createElement("i",{className:"ui-challenge-video-icon ui-icon-play"})),c&&v.a.createElement(w.a,{open:!0,onClose:function(){return e.setState({openVideoModal:!1})},youtubeId:o,title:a}))}}]),t}(v.a.PureComponent));g()(E,"propTypes",{title:y.a.string.isRequired,analyticsKey:y.a.string,duration:y.a.oneOfType([y.a.number,y.a.string]).isRequired,youtubeId:y.a.string.isRequired,contestSlug:y.a.string,challengeSlug:y.a.string,autoOpen:y.a.bool}),g()(E,"defaultProps",{analyticsKey:"ChallengeSidebarRelatedVideo",autoOpen:!1}),t.a=E}}]);
//# sourceMappingURL=https://staging.hackerrank.net/fcore-assets/sourcemaps/hackerrank_r_commons~challenge_list~challenge_list_v2~challenge~interview-f8c0ca92.js.map