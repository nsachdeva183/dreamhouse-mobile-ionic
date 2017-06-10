/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function (e, t) {
  "object" == ( false ? "undefined" : _typeof(exports)) && "object" == ( false ? "undefined" : _typeof(module)) ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? exports.force = t() : e.force = t();
}(undefined, function () {
  return function (e) {
    function t(r) {
      if (n[r]) return n[r].exports;var o = n[r] = { exports: {}, id: r, loaded: !1 };return e[r].call(o.exports, o, o.exports, t), o.loaded = !0, o.exports;
    }var n = {};return t.m = e, t.c = n, t.p = "", t(0);
  }([function (e, t, n) {
    "use strict";
    e.exports = { OAuth: n(1), DataService: n(2) };
  }, function (e, t) {
    "use strict";
    function n(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
    }function r(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }function o(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }var s = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
        }
      }return function (t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t;
      };
    }(),
        i = 0,
        a = window.location.pathname.substring(0, window.location.pathname.lastIndexOf("/")),
        c = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : ""),
        u = c + a,
        p = void 0,
        h = function h(e) {
      var t = {},
          n = e.indexOf("#");if (n > -1) {
        var r = decodeURIComponent(e.substr(n + 1)),
            o = r.split("&");o.forEach(function (e) {
          var n = e.split("=");t[n[0]] = n[1];
        });
      }return t;
    };e.exports = { createInstance: function createInstance(e, t, n) {
        return window.cordova ? new f(e, t, n) : new d(e, t, n);
      } };var l = function () {
      function e(t, n, r) {
        o(this, e), i += 1, this.instanceId = i, this.appId = t || "3MVG9fMtCkV6eLheIEZplMqWfnGlf3Y.BcWdOf1qytXo9zxgbsrUbS.ExHTgUPJeb3jZeT8NYhc.hMyznKU92", this.loginURL = n || "https://login.salesforce.com", this.oauthCallbackURL = r || u + "/oauthcallback.html";
      }return s(e, [{ key: "login", value: function value() {} }]), e;
    }(),
        f = function (e) {
      function t() {
        return o(this, t), n(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
      }return r(t, e), s(t, [{ key: "login", value: function value() {
          return new Promise(function (e, t) {
            document.addEventListener("deviceready", function () {
              return (p = cordova.require("com.salesforce.plugin.oauth")) ? void p.getAuthCredentials(function (t) {
                e({ accessToken: t.accessToken, instanceURL: t.instanceUrl, refreshToken: t.refreshToken, userId: t.userId });
              }, function (e) {
                console.log(e), t(e);
              }) : (console.error("Salesforce Mobile SDK OAuth plugin not available"), void t("Salesforce Mobile SDK OAuth plugin not available"));
            }, !1);
          });
        } }]), t;
    }(l),
        d = function (e) {
      function t() {
        return o(this, t), n(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
      }return r(t, e), s(t, [{ key: "login", value: function value() {
          var e = this;return new Promise(function (t, n) {
            console.log("loginURL: " + e.loginURL), console.log("oauthCallbackURL: " + e.oauthCallbackURL), document.addEventListener("oauthCallback", function (r) {
              var o = r.detail,
                  s = h(o);s.state == e.instanceId && (s.access_token ? t({ appId: e.appId, accessToken: s.access_token, instanceURL: s.instance_url, refreshToken: s.refresh_token, userId: s.id.split("/").pop() }) : n(s));
            });var r = e.loginURL + ("/services/oauth2/authorize?client_id=" + e.appId + "&redirect_uri=" + e.oauthCallbackURL + "&response_type=token&state=" + e.instanceId);window.open(r, "_blank", "location=no");
          });
        } }]), t;
    }(l);
  }, function (e, t) {
    "use strict";
    function n(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
    }function r(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }function o(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }var s = function e(t, n, r) {
      null === t && (t = Function.prototype);var o = Object.getOwnPropertyDescriptor(t, n);if (void 0 === o) {
        var s = Object.getPrototypeOf(t);return null === s ? void 0 : e(s, n, r);
      }if ("value" in o) return o.value;var i = o.get;if (void 0 !== i) return i.call(r);
    },
        i = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
        }
      }return function (t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t;
      };
    }(),
        a = window.location.pathname.substring(0, window.location.pathname.lastIndexOf("/")),
        c = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : ""),
        u = c + a,
        p = function p(e, t) {
      return "/" !== e.charAt(e.length - 1) && (e += "/"), "/" === t.charAt(0) && (t = t.substr(1)), e + t;
    },
        h = function h(e) {
      var t = [],
          n = void 0;for (n in e) {
        e.hasOwnProperty(n) && t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
      }return t.join("&");
    },
        l = function l(e) {
      var t = e.match(/^(https?\:)\/\/(([^:\/?#]*)(?:\:([0-9]+))?)([^?#]*)(\?[^#]*|)(#.*|)$/);return t && { protocol: t[1], host: t[2], hostname: t[3], port: t[4], path: t[5], params: parseQueryString(t[6]), hash: t[7] };
    },
        f = void 0,
        d = {},
        v = void 0;document.addEventListener("deviceready", function () {
      try {
        v = cordova.require("com.salesforce.plugin.network");
      } catch (e) {}
    }, !1), e.exports = { createInstance: function createInstance(e, t, n) {
        var r = void 0;return r = window.cordova ? new g(e, t) : new b(e, t), n ? d[n] = r : f = r, r;
      }, getInstance: function getInstance(e) {
        return e ? d[e] : f;
      } };var y = function () {
      function e() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};o(this, e), this.appId = t.appId, this.accessToken = t.accessToken, this.instanceURL = t.instanceURL, this.refreshToken = t.refreshToken, this.userId = t.userId, this.apiVersion = n.apiVersion || "v36.0", this.loginURL = n.loginURL || "https://login.salesforce.com", this.useProxy = !(n.useProxy || window.cordova || window.SfdcApp || window.sforce), this.proxyURL = n.proxyURL || u;
      }return i(e, [{ key: "getRequestBaseURL", value: function value() {
          var e = void 0;return e = this.useProxy ? this.proxyURL : this.instanceURL ? this.instanceURL : c, "/" === e.slice(-1) && (e = e.slice(0, -1)), e;
        } }, { key: "refreshAccessToken", value: function value() {} }, { key: "getUserId", value: function value() {
          return this.userId;
        } }, { key: "request", value: function value(e) {
          var t = this;return new Promise(function (n, r) {
            if (!t.accessToken && !t.refreshToken) return void ("function" == typeof errorHandler && r("No access token. Login and try again."));var o = e.method || "GET",
                s = new XMLHttpRequest(),
                i = t.getRequestBaseURL();if ("/" !== e.path.charAt(0) && (e.path = "/" + e.path), i += e.path, e.params && (i += "?" + h(e.params)), s.onreadystatechange = function () {
              var t = this;if (4 === s.readyState) if (s.status > 199 && s.status < 300) n(s.responseText ? JSON.parse(s.responseText) : void 0);else if (401 === s.status && this.refreshToken) this.refreshAccessToken().then(function () {
                return t.request(e).then(function (e) {
                  return n(e);
                }).catch(function (e) {
                  return r(e);
                });
              }).catch(function () {
                console.error(s.responseText);var e = s.responseText ? JSON.parse(s.responseText) : { message: "An error has occurred" };r(e);
              });else {
                console.error(s.responseText);var o = s.responseText ? JSON.parse(s.responseText) : { message: "An error has occurred" };r(o);
              }
            }, s.open(o, i, !0), s.setRequestHeader("Accept", "application/json"), s.setRequestHeader("Authorization", "Bearer " + t.accessToken), s.setRequestHeader("Cache-Control", "no-store"), s.setRequestHeader("X-Connect-Bearer-Urls", !0), e.contentType && s.setRequestHeader("Content-Type", e.contentType), e.headerParams) for (var a in e.headerParams.getOwnPropertyNames()) {
              var c = e.headerParams[a];s.setRequestHeader(a, c);
            }t.useProxy && s.setRequestHeader("Target-URL", t.instanceURL), s.send(e.data ? JSON.stringify(e.data) : void 0);
          });
        } }, { key: "query", value: function value(e) {
          return this.request({ path: "/services/data/" + this.apiVersion + "/query", params: { q: e } });
        } }, { key: "retrieve", value: function value(e, t, n) {
          return this.request({ path: "/services/data/" + this.apiVersion + "/sobjects/" + e + "/" + t, params: n ? { fields: "string" == typeof n ? n : n.join(",") } : void 0 });
        } }, { key: "getPickListValues", value: function value(e) {
          return this.request({ path: "/services/data/" + this.apiVersion + "/sobjects/" + e + "/describe" });
        } }, { key: "create", value: function value(e, t) {
          return this.request({ method: "POST", contentType: "application/json", path: "/services/data/" + this.apiVersion + "/sobjects/" + e + "/", data: t });
        } }, { key: "update", value: function value(e, t) {
          var n = t.Id || t.id,
              r = JSON.parse(JSON.stringify(t));return delete r.attributes, delete r.Id, delete r.id, this.request({ method: "POST", contentType: "application/json", path: "/services/data/" + this.apiVersion + "/sobjects/" + e + "/" + n, params: { _HttpMethod: "PATCH" }, data: r });
        } }, { key: "del", value: function value(e, t) {
          return this.request({ method: "DELETE", path: "/services/data/" + this.apiVersion + "/sobjects/" + e + "/" + t });
        } }, { key: "upsert", value: function value(e, t, n, r) {
          return this.request({ method: "PATCH", contentType: "application/json", path: "/services/data/" + this.apiVersion + "/sobjects/" + e + "/" + t + "/" + n, data: r });
        } }, { key: "apexrest", value: function value(e) {
          var t = void 0;return "string" == typeof e ? t = { path: e, method: "GET" } : (t = e, "/" !== t.path.charAt(0) && (t.path = "/" + t.path), "/services/apexrest" !== t.path.substr(0, 18) && (t.path = "/services/apexrest" + t.path)), t.contentType || (t.contentType = "DELETE" == t.method || "GET" == t.method ? null : "application/json"), this.request(t);
        } }, { key: "chatter", value: function value(e) {
          var t = "/services/data/" + this.apiVersion + "/chatter",
              n = void 0;if (e && e.substring) n = { path: p(t, e) };else {
            if (!e || !e.path) return new Promise(function (e, t) {
              return t("You must specify a path for the request");
            });n = e, n.path = p(t, e.path);
          }return this.request(n);
        } }, { key: "versions", value: function value() {
          return this.request({ path: "/services/data/" });
        } }, { key: "resources", value: function value() {
          return this.request({ path: "/services/data/" + this.apiVersion });
        } }, { key: "describeGlobal", value: function value() {
          return this.request({ path: "/services/data/" + this.apiVersion + "/sobjects" });
        } }, { key: "metadata", value: function value(e) {
          return this.request({ path: "/services/data/" + this.apiVersion + "/sobjects/" + e });
        } }, { key: "describe", value: function value(e) {
          return this.request({ path: "/services/data/" + this.apiVersion + "/sobjects/" + e + "/describe" });
        } }, { key: "describeLayout", value: function value(e, t) {
          return t = t || "", this.request({ path: "/services/data/" + this.apiVersion + "/sobjects/" + e + "/describe/layouts/" + t });
        } }, { key: "queryMore", value: function value(e) {
          var t = l(e);return this.request({ path: t.path, params: t.params });
        } }, { key: "search", value: function value(e) {
          return this.request({ path: "/services/data/" + this.apiVersion + "/search", params: { q: e } });
        } }]), e;
    }(),
        b = function (e) {
      function t() {
        return o(this, t), n(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
      }return r(t, e), i(t, [{ key: "refreshAccessToken", value: function value() {
          var e = this;return new Promise(function (t, n) {
            if (!e.refreshToken) return console.log("Missing refreshToken"), void n("Missing refreshToken");if (!e.appId) return console.log("Missing appId"), void n("Missing appId");var r = new XMLHttpRequest(),
                o = { grant_type: "refresh_token", refresh_token: e.refreshToken, client_id: e.appId },
                s = e.useProxy ? e.proxyURL : e.loginURL;s = s + "/services/oauth2/token?" + h(o), r.onreadystatechange = function () {
              if (4 === r.readyState) if (200 === r.status) {
                console.log("Token refreshed");var o = JSON.parse(r.responseText);e.accessToken = o.access_token, t();
              } else console.log("Error while trying to refresh token: " + r.responseText), n();
            }, r.open("POST", s, !0), e.useProxy || r.setRequestHeader("Target-URL", e.loginURL), r.send();
          });
        } }]), t;
    }(y),
        g = function (e) {
      function t() {
        return o(this, t), n(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
      }return r(t, e), i(t, [{ key: "refreshAccessToken", value: function value() {
          return new Promise(function (e, t) {
            document.addEventListener("deviceready", function () {
              var n = void 0;try {
                n = cordova.require("com.salesforce.plugin.oauth");
              } catch (e) {}return n ? void n.authenticate(function (t) {
                this.accessToken = t.accessToken, e();
              }, function () {
                console.error("Error refreshing oauth access token using the oauth plugin"), t();
              }) : (console.error("Salesforce Mobile SDK OAuth plugin not available"), void t("Salesforce Mobile SDK OAuth plugin not available"));
            }, !1);
          });
        } }, { key: "computeEndPointIfMissing", value: function value(e, t) {
          if (void 0 !== e) return { endPoint: e, path: t };var n = t.split("/").filter(function (e) {
            return "" !== e;
          });return n.length >= 2 ? { endPoint: "/" + n.slice(0, 2).join("/"), path: "/" + n.slice(2).join("/") } : { endPoint: "", path: t };
        } }, { key: "request", value: function value(e) {
          var n = this;return v ? new Promise(function (t, r) {
            var o = n.computeEndPointIfMissing(e.endPoint, e.path);e.params && e.params.q && e.params.q.replace && (e.params.q = e.params.q.replace(/[\n]/g, " ")), v.sendRequest(o.endPoint, o.path, t, r, e.method, e.data || e.params, e.headerParams);
          }) : s(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "request", this).call(this, e);
        } }]), t;
    }(y);
  }]);
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _forcejs = __webpack_require__(0);

var oauth = _forcejs.OAuth.createInstance();
oauth.login().then(function (oauthResult) {
    _forcejs.DataService.createInstance(oauthResult);
    loadContacts();
});

var loadContacts = function loadContacts() {
    var service = _forcejs.DataService.getInstance();
    service.query('select id, Name from contact LIMIT 50').then(function (response) {
        var contacts = response.records;
        var html = '';
        contacts.forEach(function (contact) {
            return html = html + ('<li>' + contact.Name + '</li>');
        });
        document.getElementById("contacts").innerHTML = html;
    });
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function () {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function get() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function get() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ })
/******/ ]);
//# sourceMappingURL=app.bundle.js.map