webpackJsonp([0],{30:function(e,t,n){var r=n(31)(n(32),n(33),null,null,null);e.exports=r.exports},31:function(e,t){e.exports=function(e,t,n,r,o){var i,s=e=e||{},a=typeof e.default;"object"!==a&&"function"!==a||(i=e,s=e.default);var l="function"==typeof s?s.options:s;t&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns),r&&(l._scopeId=r);var u;if(o?(u=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},l._ssrRegister=u):n&&(u=n),u){var c=l.functional,d=c?l.render:l.beforeCreate;c?l.render=function(e,t){return u.call(t),d(e,t)}:l.beforeCreate=d?[].concat(d,u):[u]}return{esModule:i,exports:s,options:l}}},32:function(e,t,n){"use strict";function r(e,t){return e.map(function(e){if(void 0!==e[t])return e[t]})}function o(e){return e.map(function(e,t){return"string"==typeof e.data?e.data[c[t].prop]:r(e.data,c[t].prop)})}Object.defineProperty(t,"__esModule",{value:!0});var i=drupalSettings.vue_table.update_cycle,s=void 0,a=i,l=null,u=drupalSettings.vue_table.field_options,c=[],d=[],f=0;Object.keys(u).forEach(function(e,t){u[e].active&&u[e].url_endpoint.length>0&&c.push({name:e,url:u[e].url_endpoint,prop:u[e].javascript_property})}),t.default={data:function(){return{fields:drupalSettings.vue_table.fields,view:drupalSettings.vue_table.view,update_cycle:""}},mounted:function(){var e=this;Object.keys(c).length>0?s=setInterval(function(){e.poll()},a):console.warn("No fields associated with an api, no polling started")},methods:{poll:function(){var e=this,t=c.map(function(e,t){return Axios.get(c[t].url,{timeout:1e4})});Axios.all(t).then(function(t){var n=o(t);e.update(n)}).catch(function(t){var n=void 0;n=t.response?"Error :\n            The server responed with :  "+t.response.status+"\n            Message : "+t.response.data+"\n            ":t.request?"Error : "+t.request:"Error : "+t.message,console.error(n),++f>=3&&(e.disconnectPollingTimer("Maximum failed requests reached."),e.reconnectPollingTimer())})},update:function(e){this.checkPreviousState(e);var t=this;c.forEach(function(n,r){var o=n.name,i=r;t.view.map(function(t,n){t[o]=e[i][n]})})},checkPreviousState:function(e){_.isEqual(d,e)&&(this.throttlePoll(),++f>=15&&(this.disconnectPollingTimer("No new state changes detected."),this.reconnectPollingTimer())),d=e},throttlePoll:function(){var e=this;a*=2,clearInterval(s),s=setInterval(function(){e.poll()},a)},disconnectPollingTimer:function(e){clearInterval(s),s=null,console.info("Disconnecting polling : "+e)},reconnectPollingTimer:function(){var e=this;l&&(clearTimeout(l),l=null),l=setTimeout(function(){console.info("Restarting polling"),a=i,f=0,s=setInterval(function(){e.poll()},a)},9e5)}}}},33:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("table",[n("thead",e._l(e.fields,function(t){return n("th",[e._v(e._s(t.label))])})),e._v(" "),n("tbody",e._l(e.view,function(t){return n("tr",e._l(t,function(t){return n("td",{domProps:{innerHTML:e._s(t)}})}))}))])])},staticRenderFns:[]}},9:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),o=n(3),i=n.n(o),s=n(30),a=n.n(s);window.Axios=i.a;new r.default({el:"#vue_table__app",render:function(e){return e(a.a)}})}},[9]);