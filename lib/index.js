/**!
 * Sortable 1.15.6
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function Zi(a, e) {
  var t = Object.keys(a);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(a);
    e && (i = i.filter(function(s) {
      return Object.getOwnPropertyDescriptor(a, s).enumerable;
    })), t.push.apply(t, i);
  }
  return t;
}
function _e(a) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Zi(Object(t), !0).forEach(function(i) {
      un(a, i, t[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(t)) : Zi(Object(t)).forEach(function(i) {
      Object.defineProperty(a, i, Object.getOwnPropertyDescriptor(t, i));
    });
  }
  return a;
}
function na(a) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? na = function(e) {
    return typeof e;
  } : na = function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, na(a);
}
function un(a, e, t) {
  return e in a ? Object.defineProperty(a, e, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : a[e] = t, a;
}
function Ae() {
  return Ae = Object.assign || function(a) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (a[i] = t[i]);
    }
    return a;
  }, Ae.apply(this, arguments);
}
function hn(a, e) {
  if (a == null) return {};
  var t = {}, i = Object.keys(a), s, o;
  for (o = 0; o < i.length; o++)
    s = i[o], !(e.indexOf(s) >= 0) && (t[s] = a[s]);
  return t;
}
function pn(a, e) {
  if (a == null) return {};
  var t = hn(a, e), i, s;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(a);
    for (s = 0; s < o.length; s++)
      i = o[s], !(e.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(a, i) && (t[i] = a[i]);
  }
  return t;
}
var gn = "1.15.6";
function we(a) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(a);
}
var Ce = we(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), Bt = we(/Edge/i), Ji = we(/firefox/i), Nt = we(/safari/i) && !we(/chrome/i) && !we(/android/i), wi = we(/iP(ad|od|hone)/i), Fs = we(/chrome/i) && we(/android/i), Ws = {
  capture: !1,
  passive: !1
};
function O(a, e, t) {
  a.addEventListener(e, t, !Ce && Ws);
}
function D(a, e, t) {
  a.removeEventListener(e, t, !Ce && Ws);
}
function ma(a, e) {
  if (e) {
    if (e[0] === ">" && (e = e.substring(1)), a)
      try {
        if (a.matches)
          return a.matches(e);
        if (a.msMatchesSelector)
          return a.msMatchesSelector(e);
        if (a.webkitMatchesSelector)
          return a.webkitMatchesSelector(e);
      } catch {
        return !1;
      }
    return !1;
  }
}
function zs(a) {
  return a.host && a !== document && a.host.nodeType ? a.host : a.parentNode;
}
function ue(a, e, t, i) {
  if (a) {
    t = t || document;
    do {
      if (e != null && (e[0] === ">" ? a.parentNode === t && ma(a, e) : ma(a, e)) || i && a === t)
        return a;
      if (a === t) break;
    } while (a = zs(a));
  }
  return null;
}
var es = /\s+/g;
function te(a, e, t) {
  if (a && e)
    if (a.classList)
      a.classList[t ? "add" : "remove"](e);
    else {
      var i = (" " + a.className + " ").replace(es, " ").replace(" " + e + " ", " ");
      a.className = (i + (t ? " " + e : "")).replace(es, " ");
    }
}
function w(a, e, t) {
  var i = a && a.style;
  if (i) {
    if (t === void 0)
      return document.defaultView && document.defaultView.getComputedStyle ? t = document.defaultView.getComputedStyle(a, "") : a.currentStyle && (t = a.currentStyle), e === void 0 ? t : t[e];
    !(e in i) && e.indexOf("webkit") === -1 && (e = "-webkit-" + e), i[e] = t + (typeof t == "string" ? "" : "px");
  }
}
function ct(a, e) {
  var t = "";
  if (typeof a == "string")
    t = a;
  else
    do {
      var i = w(a, "transform");
      i && i !== "none" && (t = i + " " + t);
    } while (!e && (a = a.parentNode));
  var s = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return s && new s(t);
}
function Ys(a, e, t) {
  if (a) {
    var i = a.getElementsByTagName(e), s = 0, o = i.length;
    if (t)
      for (; s < o; s++)
        t(i[s], s);
    return i;
  }
  return [];
}
function ge() {
  var a = document.scrollingElement;
  return a || document.documentElement;
}
function j(a, e, t, i, s) {
  if (!(!a.getBoundingClientRect && a !== window)) {
    var o, n, r, f, l, d, c;
    if (a !== window && a.parentNode && a !== ge() ? (o = a.getBoundingClientRect(), n = o.top, r = o.left, f = o.bottom, l = o.right, d = o.height, c = o.width) : (n = 0, r = 0, f = window.innerHeight, l = window.innerWidth, d = window.innerHeight, c = window.innerWidth), (e || t) && a !== window && (s = s || a.parentNode, !Ce))
      do
        if (s && s.getBoundingClientRect && (w(s, "transform") !== "none" || t && w(s, "position") !== "static")) {
          var g = s.getBoundingClientRect();
          n -= g.top + parseInt(w(s, "border-top-width")), r -= g.left + parseInt(w(s, "border-left-width")), f = n + o.height, l = r + o.width;
          break;
        }
      while (s = s.parentNode);
    if (i && a !== window) {
      var h = ct(s || a), b = h && h.a, m = h && h.d;
      h && (n /= m, r /= b, c /= b, d /= m, f = n + d, l = r + c);
    }
    return {
      top: n,
      left: r,
      bottom: f,
      right: l,
      width: c,
      height: d
    };
  }
}
function ts(a, e, t) {
  for (var i = xe(a, !0), s = j(a)[e]; i; ) {
    var o = j(i)[t], n = void 0;
    if (n = s >= o, !n) return i;
    if (i === ge()) break;
    i = xe(i, !1);
  }
  return !1;
}
function ut(a, e, t, i) {
  for (var s = 0, o = 0, n = a.children; o < n.length; ) {
    if (n[o].style.display !== "none" && n[o] !== E.ghost && (i || n[o] !== E.dragged) && ue(n[o], t.draggable, a, !1)) {
      if (s === e)
        return n[o];
      s++;
    }
    o++;
  }
  return null;
}
function yi(a, e) {
  for (var t = a.lastElementChild; t && (t === E.ghost || w(t, "display") === "none" || e && !ma(t, e)); )
    t = t.previousElementSibling;
  return t || null;
}
function ne(a, e) {
  var t = 0;
  if (!a || !a.parentNode)
    return -1;
  for (; a = a.previousElementSibling; )
    a.nodeName.toUpperCase() !== "TEMPLATE" && a !== E.clone && (!e || ma(a, e)) && t++;
  return t;
}
function as(a) {
  var e = 0, t = 0, i = ge();
  if (a)
    do {
      var s = ct(a), o = s.a, n = s.d;
      e += a.scrollLeft * o, t += a.scrollTop * n;
    } while (a !== i && (a = a.parentNode));
  return [e, t];
}
function mn(a, e) {
  for (var t in a)
    if (a.hasOwnProperty(t)) {
      for (var i in e)
        if (e.hasOwnProperty(i) && e[i] === a[t][i]) return Number(t);
    }
  return -1;
}
function xe(a, e) {
  if (!a || !a.getBoundingClientRect) return ge();
  var t = a, i = !1;
  do
    if (t.clientWidth < t.scrollWidth || t.clientHeight < t.scrollHeight) {
      var s = w(t);
      if (t.clientWidth < t.scrollWidth && (s.overflowX == "auto" || s.overflowX == "scroll") || t.clientHeight < t.scrollHeight && (s.overflowY == "auto" || s.overflowY == "scroll")) {
        if (!t.getBoundingClientRect || t === document.body) return ge();
        if (i || e) return t;
        i = !0;
      }
    }
  while (t = t.parentNode);
  return ge();
}
function bn(a, e) {
  if (a && e)
    for (var t in e)
      e.hasOwnProperty(t) && (a[t] = e[t]);
  return a;
}
function Ba(a, e) {
  return Math.round(a.top) === Math.round(e.top) && Math.round(a.left) === Math.round(e.left) && Math.round(a.height) === Math.round(e.height) && Math.round(a.width) === Math.round(e.width);
}
var Lt;
function Ks(a, e) {
  return function() {
    if (!Lt) {
      var t = arguments, i = this;
      t.length === 1 ? a.call(i, t[0]) : a.apply(i, t), Lt = setTimeout(function() {
        Lt = void 0;
      }, e);
    }
  };
}
function _n() {
  clearTimeout(Lt), Lt = void 0;
}
function Gs(a, e, t) {
  a.scrollLeft += e, a.scrollTop += t;
}
function Us(a) {
  var e = window.Polymer, t = window.jQuery || window.Zepto;
  return e && e.dom ? e.dom(a).cloneNode(!0) : t ? t(a).clone(!0)[0] : a.cloneNode(!0);
}
function Xs(a, e, t) {
  var i = {};
  return Array.from(a.children).forEach(function(s) {
    var o, n, r, f;
    if (!(!ue(s, e.draggable, a, !1) || s.animated || s === t)) {
      var l = j(s);
      i.left = Math.min((o = i.left) !== null && o !== void 0 ? o : 1 / 0, l.left), i.top = Math.min((n = i.top) !== null && n !== void 0 ? n : 1 / 0, l.top), i.right = Math.max((r = i.right) !== null && r !== void 0 ? r : -1 / 0, l.right), i.bottom = Math.max((f = i.bottom) !== null && f !== void 0 ? f : -1 / 0, l.bottom);
    }
  }), i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
var Z = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
function vn() {
  var a = [], e;
  return {
    captureAnimationState: function() {
      if (a = [], !!this.options.animation) {
        var i = [].slice.call(this.el.children);
        i.forEach(function(s) {
          if (!(w(s, "display") === "none" || s === E.ghost)) {
            a.push({
              target: s,
              rect: j(s)
            });
            var o = _e({}, a[a.length - 1].rect);
            if (s.thisAnimationDuration) {
              var n = ct(s, !0);
              n && (o.top -= n.f, o.left -= n.e);
            }
            s.fromRect = o;
          }
        });
      }
    },
    addAnimationState: function(i) {
      a.push(i);
    },
    removeAnimationState: function(i) {
      a.splice(mn(a, {
        target: i
      }), 1);
    },
    animateAll: function(i) {
      var s = this;
      if (!this.options.animation) {
        clearTimeout(e), typeof i == "function" && i();
        return;
      }
      var o = !1, n = 0;
      a.forEach(function(r) {
        var f = 0, l = r.target, d = l.fromRect, c = j(l), g = l.prevFromRect, h = l.prevToRect, b = r.rect, m = ct(l, !0);
        m && (c.top -= m.f, c.left -= m.e), l.toRect = c, l.thisAnimationDuration && Ba(g, c) && !Ba(d, c) && // Make sure animatingRect is on line between toRect & fromRect
        (b.top - c.top) / (b.left - c.left) === (d.top - c.top) / (d.left - c.left) && (f = wn(b, g, h, s.options)), Ba(c, d) || (l.prevFromRect = d, l.prevToRect = c, f || (f = s.options.animation), s.animate(l, b, c, f)), f && (o = !0, n = Math.max(n, f), clearTimeout(l.animationResetTimer), l.animationResetTimer = setTimeout(function() {
          l.animationTime = 0, l.prevFromRect = null, l.fromRect = null, l.prevToRect = null, l.thisAnimationDuration = null;
        }, f), l.thisAnimationDuration = f);
      }), clearTimeout(e), o ? e = setTimeout(function() {
        typeof i == "function" && i();
      }, n) : typeof i == "function" && i(), a = [];
    },
    animate: function(i, s, o, n) {
      if (n) {
        w(i, "transition", ""), w(i, "transform", "");
        var r = ct(this.el), f = r && r.a, l = r && r.d, d = (s.left - o.left) / (f || 1), c = (s.top - o.top) / (l || 1);
        i.animatingX = !!d, i.animatingY = !!c, w(i, "transform", "translate3d(" + d + "px," + c + "px,0)"), this.forRepaintDummy = En(i), w(i, "transition", "transform " + n + "ms" + (this.options.easing ? " " + this.options.easing : "")), w(i, "transform", "translate3d(0,0,0)"), typeof i.animated == "number" && clearTimeout(i.animated), i.animated = setTimeout(function() {
          w(i, "transition", ""), w(i, "transform", ""), i.animated = !1, i.animatingX = !1, i.animatingY = !1;
        }, n);
      }
    }
  };
}
function En(a) {
  return a.offsetWidth;
}
function wn(a, e, t, i) {
  return Math.sqrt(Math.pow(e.top - a.top, 2) + Math.pow(e.left - a.left, 2)) / Math.sqrt(Math.pow(e.top - t.top, 2) + Math.pow(e.left - t.left, 2)) * i.animation;
}
var tt = [], Ha = {
  initializeByDefault: !0
}, Ht = {
  mount: function(e) {
    for (var t in Ha)
      Ha.hasOwnProperty(t) && !(t in e) && (e[t] = Ha[t]);
    tt.forEach(function(i) {
      if (i.pluginName === e.pluginName)
        throw "Sortable: Cannot mount plugin ".concat(e.pluginName, " more than once");
    }), tt.push(e);
  },
  pluginEvent: function(e, t, i) {
    var s = this;
    this.eventCanceled = !1, i.cancel = function() {
      s.eventCanceled = !0;
    };
    var o = e + "Global";
    tt.forEach(function(n) {
      t[n.pluginName] && (t[n.pluginName][o] && t[n.pluginName][o](_e({
        sortable: t
      }, i)), t.options[n.pluginName] && t[n.pluginName][e] && t[n.pluginName][e](_e({
        sortable: t
      }, i)));
    });
  },
  initializePlugins: function(e, t, i, s) {
    tt.forEach(function(r) {
      var f = r.pluginName;
      if (!(!e.options[f] && !r.initializeByDefault)) {
        var l = new r(e, t, e.options);
        l.sortable = e, l.options = e.options, e[f] = l, Ae(i, l.defaults);
      }
    });
    for (var o in e.options)
      if (e.options.hasOwnProperty(o)) {
        var n = this.modifyOption(e, o, e.options[o]);
        typeof n < "u" && (e.options[o] = n);
      }
  },
  getEventProperties: function(e, t) {
    var i = {};
    return tt.forEach(function(s) {
      typeof s.eventProperties == "function" && Ae(i, s.eventProperties.call(t[s.pluginName], e));
    }), i;
  },
  modifyOption: function(e, t, i) {
    var s;
    return tt.forEach(function(o) {
      e[o.pluginName] && o.optionListeners && typeof o.optionListeners[t] == "function" && (s = o.optionListeners[t].call(e[o.pluginName], i));
    }), s;
  }
};
function yn(a) {
  var e = a.sortable, t = a.rootEl, i = a.name, s = a.targetEl, o = a.cloneEl, n = a.toEl, r = a.fromEl, f = a.oldIndex, l = a.newIndex, d = a.oldDraggableIndex, c = a.newDraggableIndex, g = a.originalEvent, h = a.putSortable, b = a.extraEventProperties;
  if (e = e || t && t[Z], !!e) {
    var m, y = e.options, k = "on" + i.charAt(0).toUpperCase() + i.substr(1);
    window.CustomEvent && !Ce && !Bt ? m = new CustomEvent(i, {
      bubbles: !0,
      cancelable: !0
    }) : (m = document.createEvent("Event"), m.initEvent(i, !0, !0)), m.to = n || t, m.from = r || t, m.item = s || t, m.clone = o, m.oldIndex = f, m.newIndex = l, m.oldDraggableIndex = d, m.newDraggableIndex = c, m.originalEvent = g, m.pullMode = h ? h.lastPutMode : void 0;
    var A = _e(_e({}, b), Ht.getEventProperties(i, e));
    for (var N in A)
      m[N] = A[N];
    t && t.dispatchEvent(m), y[k] && y[k].call(e, m);
  }
}
var Tn = ["evt"], Q = function(e, t) {
  var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, s = i.evt, o = pn(i, Tn);
  Ht.pluginEvent.bind(E)(e, t, _e({
    dragEl: p,
    parentEl: V,
    ghostEl: T,
    rootEl: M,
    nextEl: We,
    lastDownEl: ra,
    cloneEl: B,
    cloneHidden: Le,
    dragStarted: St,
    putSortable: W,
    activeSortable: E.active,
    originalEvent: s,
    oldIndex: lt,
    oldDraggableIndex: xt,
    newIndex: ae,
    newDraggableIndex: Ne,
    hideGhostForTarget: eo,
    unhideGhostForTarget: to,
    cloneNowHidden: function() {
      Le = !0;
    },
    cloneNowShown: function() {
      Le = !1;
    },
    dispatchSortableEvent: function(r) {
      G({
        sortable: t,
        name: r,
        originalEvent: s
      });
    }
  }, o));
};
function G(a) {
  yn(_e({
    putSortable: W,
    cloneEl: B,
    targetEl: p,
    rootEl: M,
    oldIndex: lt,
    oldDraggableIndex: xt,
    newIndex: ae,
    newDraggableIndex: Ne
  }, a));
}
var p, V, T, M, We, ra, B, Le, lt, ae, xt, Ne, Gt, W, ot = !1, ba = !1, _a = [], je, ce, Va, qa, is, ss, St, at, It, $t = !1, Ut = !1, fa, Y, ja = [], li = !1, va = [], Ca = typeof document < "u", Xt = wi, os = Bt || Ce ? "cssFloat" : "float", An = Ca && !Fs && !wi && "draggable" in document.createElement("div"), Qs = function() {
  if (Ca) {
    if (Ce)
      return !1;
    var a = document.createElement("x");
    return a.style.cssText = "pointer-events:auto", a.style.pointerEvents === "auto";
  }
}(), Zs = function(e, t) {
  var i = w(e), s = parseInt(i.width) - parseInt(i.paddingLeft) - parseInt(i.paddingRight) - parseInt(i.borderLeftWidth) - parseInt(i.borderRightWidth), o = ut(e, 0, t), n = ut(e, 1, t), r = o && w(o), f = n && w(n), l = r && parseInt(r.marginLeft) + parseInt(r.marginRight) + j(o).width, d = f && parseInt(f.marginLeft) + parseInt(f.marginRight) + j(n).width;
  if (i.display === "flex")
    return i.flexDirection === "column" || i.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (i.display === "grid")
    return i.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (o && r.float && r.float !== "none") {
    var c = r.float === "left" ? "left" : "right";
    return n && (f.clear === "both" || f.clear === c) ? "vertical" : "horizontal";
  }
  return o && (r.display === "block" || r.display === "flex" || r.display === "table" || r.display === "grid" || l >= s && i[os] === "none" || n && i[os] === "none" && l + d > s) ? "vertical" : "horizontal";
}, kn = function(e, t, i) {
  var s = i ? e.left : e.top, o = i ? e.right : e.bottom, n = i ? e.width : e.height, r = i ? t.left : t.top, f = i ? t.right : t.bottom, l = i ? t.width : t.height;
  return s === r || o === f || s + n / 2 === r + l / 2;
}, Cn = function(e, t) {
  var i;
  return _a.some(function(s) {
    var o = s[Z].options.emptyInsertThreshold;
    if (!(!o || yi(s))) {
      var n = j(s), r = e >= n.left - o && e <= n.right + o, f = t >= n.top - o && t <= n.bottom + o;
      if (r && f)
        return i = s;
    }
  }), i;
}, Js = function(e) {
  function t(o, n) {
    return function(r, f, l, d) {
      var c = r.options.group.name && f.options.group.name && r.options.group.name === f.options.group.name;
      if (o == null && (n || c))
        return !0;
      if (o == null || o === !1)
        return !1;
      if (n && o === "clone")
        return o;
      if (typeof o == "function")
        return t(o(r, f, l, d), n)(r, f, l, d);
      var g = (n ? r : f).options.group.name;
      return o === !0 || typeof o == "string" && o === g || o.join && o.indexOf(g) > -1;
    };
  }
  var i = {}, s = e.group;
  (!s || na(s) != "object") && (s = {
    name: s
  }), i.name = s.name, i.checkPull = t(s.pull, !0), i.checkPut = t(s.put), i.revertClone = s.revertClone, e.group = i;
}, eo = function() {
  !Qs && T && w(T, "display", "none");
}, to = function() {
  !Qs && T && w(T, "display", "");
};
Ca && !Fs && document.addEventListener("click", function(a) {
  if (ba)
    return a.preventDefault(), a.stopPropagation && a.stopPropagation(), a.stopImmediatePropagation && a.stopImmediatePropagation(), ba = !1, !1;
}, !0);
var Fe = function(e) {
  if (p) {
    e = e.touches ? e.touches[0] : e;
    var t = Cn(e.clientX, e.clientY);
    if (t) {
      var i = {};
      for (var s in e)
        e.hasOwnProperty(s) && (i[s] = e[s]);
      i.target = i.rootEl = t, i.preventDefault = void 0, i.stopPropagation = void 0, t[Z]._onDragOver(i);
    }
  }
}, Sn = function(e) {
  p && p.parentNode[Z]._isOutsideThisEl(e.target);
};
function E(a, e) {
  if (!(a && a.nodeType && a.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(a));
  this.el = a, this.options = e = Ae({}, e), a[Z] = this;
  var t = {
    group: null,
    sort: !0,
    disabled: !1,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(a.nodeName) ? ">li" : ">*",
    swapThreshold: 1,
    // percentage; 0 <= x <= 1
    invertSwap: !1,
    // invert always
    invertedSwapThreshold: null,
    // will be set to same as swapThreshold if default
    removeCloneOnHide: !0,
    direction: function() {
      return Zs(a, this.options);
    },
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    ignore: "a, img",
    filter: null,
    preventOnFilter: !0,
    animation: 0,
    easing: null,
    setData: function(n, r) {
      n.setData("Text", r.textContent);
    },
    dropBubble: !1,
    dragoverBubble: !1,
    dataIdAttr: "data-id",
    delay: 0,
    delayOnTouchOnly: !1,
    touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
    forceFallback: !1,
    fallbackClass: "sortable-fallback",
    fallbackOnBody: !1,
    fallbackTolerance: 0,
    fallbackOffset: {
      x: 0,
      y: 0
    },
    // Disabled on Safari: #1571; Enabled on Safari IOS: #2244
    supportPointer: E.supportPointer !== !1 && "PointerEvent" in window && (!Nt || wi),
    emptyInsertThreshold: 5
  };
  Ht.initializePlugins(this, a, t);
  for (var i in t)
    !(i in e) && (e[i] = t[i]);
  Js(e);
  for (var s in this)
    s.charAt(0) === "_" && typeof this[s] == "function" && (this[s] = this[s].bind(this));
  this.nativeDraggable = e.forceFallback ? !1 : An, this.nativeDraggable && (this.options.touchStartThreshold = 1), e.supportPointer ? O(a, "pointerdown", this._onTapStart) : (O(a, "mousedown", this._onTapStart), O(a, "touchstart", this._onTapStart)), this.nativeDraggable && (O(a, "dragover", this), O(a, "dragenter", this)), _a.push(this.el), e.store && e.store.get && this.sort(e.store.get(this) || []), Ae(this, vn());
}
E.prototype = /** @lends Sortable.prototype */
{
  constructor: E,
  _isOutsideThisEl: function(e) {
    !this.el.contains(e) && e !== this.el && (at = null);
  },
  _getDirection: function(e, t) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, e, t, p) : this.options.direction;
  },
  _onTapStart: function(e) {
    if (e.cancelable) {
      var t = this, i = this.el, s = this.options, o = s.preventOnFilter, n = e.type, r = e.touches && e.touches[0] || e.pointerType && e.pointerType === "touch" && e, f = (r || e).target, l = e.target.shadowRoot && (e.path && e.path[0] || e.composedPath && e.composedPath()[0]) || f, d = s.filter;
      if (Pn(i), !p && !(/mousedown|pointerdown/.test(n) && e.button !== 0 || s.disabled) && !l.isContentEditable && !(!this.nativeDraggable && Nt && f && f.tagName.toUpperCase() === "SELECT") && (f = ue(f, s.draggable, i, !1), !(f && f.animated) && ra !== f)) {
        if (lt = ne(f), xt = ne(f, s.draggable), typeof d == "function") {
          if (d.call(this, e, f, this)) {
            G({
              sortable: t,
              rootEl: l,
              name: "filter",
              targetEl: f,
              toEl: i,
              fromEl: i
            }), Q("filter", t, {
              evt: e
            }), o && e.preventDefault();
            return;
          }
        } else if (d && (d = d.split(",").some(function(c) {
          if (c = ue(l, c.trim(), i, !1), c)
            return G({
              sortable: t,
              rootEl: c,
              name: "filter",
              targetEl: f,
              fromEl: i,
              toEl: i
            }), Q("filter", t, {
              evt: e
            }), !0;
        }), d)) {
          o && e.preventDefault();
          return;
        }
        s.handle && !ue(l, s.handle, i, !1) || this._prepareDragStart(e, r, f);
      }
    }
  },
  _prepareDragStart: function(e, t, i) {
    var s = this, o = s.el, n = s.options, r = o.ownerDocument, f;
    if (i && !p && i.parentNode === o) {
      var l = j(i);
      if (M = o, p = i, V = p.parentNode, We = p.nextSibling, ra = i, Gt = n.group, E.dragged = p, je = {
        target: p,
        clientX: (t || e).clientX,
        clientY: (t || e).clientY
      }, is = je.clientX - l.left, ss = je.clientY - l.top, this._lastX = (t || e).clientX, this._lastY = (t || e).clientY, p.style["will-change"] = "all", f = function() {
        if (Q("delayEnded", s, {
          evt: e
        }), E.eventCanceled) {
          s._onDrop();
          return;
        }
        s._disableDelayedDragEvents(), !Ji && s.nativeDraggable && (p.draggable = !0), s._triggerDragStart(e, t), G({
          sortable: s,
          name: "choose",
          originalEvent: e
        }), te(p, n.chosenClass, !0);
      }, n.ignore.split(",").forEach(function(d) {
        Ys(p, d.trim(), Fa);
      }), O(r, "dragover", Fe), O(r, "mousemove", Fe), O(r, "touchmove", Fe), n.supportPointer ? (O(r, "pointerup", s._onDrop), !this.nativeDraggable && O(r, "pointercancel", s._onDrop)) : (O(r, "mouseup", s._onDrop), O(r, "touchend", s._onDrop), O(r, "touchcancel", s._onDrop)), Ji && this.nativeDraggable && (this.options.touchStartThreshold = 4, p.draggable = !0), Q("delayStart", this, {
        evt: e
      }), n.delay && (!n.delayOnTouchOnly || t) && (!this.nativeDraggable || !(Bt || Ce))) {
        if (E.eventCanceled) {
          this._onDrop();
          return;
        }
        n.supportPointer ? (O(r, "pointerup", s._disableDelayedDrag), O(r, "pointercancel", s._disableDelayedDrag)) : (O(r, "mouseup", s._disableDelayedDrag), O(r, "touchend", s._disableDelayedDrag), O(r, "touchcancel", s._disableDelayedDrag)), O(r, "mousemove", s._delayedDragTouchMoveHandler), O(r, "touchmove", s._delayedDragTouchMoveHandler), n.supportPointer && O(r, "pointermove", s._delayedDragTouchMoveHandler), s._dragStartTimer = setTimeout(f, n.delay);
      } else
        f();
    }
  },
  _delayedDragTouchMoveHandler: function(e) {
    var t = e.touches ? e.touches[0] : e;
    Math.max(Math.abs(t.clientX - this._lastX), Math.abs(t.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function() {
    p && Fa(p), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var e = this.el.ownerDocument;
    D(e, "mouseup", this._disableDelayedDrag), D(e, "touchend", this._disableDelayedDrag), D(e, "touchcancel", this._disableDelayedDrag), D(e, "pointerup", this._disableDelayedDrag), D(e, "pointercancel", this._disableDelayedDrag), D(e, "mousemove", this._delayedDragTouchMoveHandler), D(e, "touchmove", this._delayedDragTouchMoveHandler), D(e, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(e, t) {
    t = t || e.pointerType == "touch" && e, !this.nativeDraggable || t ? this.options.supportPointer ? O(document, "pointermove", this._onTouchMove) : t ? O(document, "touchmove", this._onTouchMove) : O(document, "mousemove", this._onTouchMove) : (O(p, "dragend", this), O(M, "dragstart", this._onDragStart));
    try {
      document.selection ? la(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(e, t) {
    if (ot = !1, M && p) {
      Q("dragStarted", this, {
        evt: t
      }), this.nativeDraggable && O(document, "dragover", Sn);
      var i = this.options;
      !e && te(p, i.dragClass, !1), te(p, i.ghostClass, !0), E.active = this, e && this._appendGhost(), G({
        sortable: this,
        name: "start",
        originalEvent: t
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (ce) {
      this._lastX = ce.clientX, this._lastY = ce.clientY, eo();
      for (var e = document.elementFromPoint(ce.clientX, ce.clientY), t = e; e && e.shadowRoot && (e = e.shadowRoot.elementFromPoint(ce.clientX, ce.clientY), e !== t); )
        t = e;
      if (p.parentNode[Z]._isOutsideThisEl(e), t)
        do {
          if (t[Z]) {
            var i = void 0;
            if (i = t[Z]._onDragOver({
              clientX: ce.clientX,
              clientY: ce.clientY,
              target: e,
              rootEl: t
            }), i && !this.options.dragoverBubble)
              break;
          }
          e = t;
        } while (t = zs(t));
      to();
    }
  },
  _onTouchMove: function(e) {
    if (je) {
      var t = this.options, i = t.fallbackTolerance, s = t.fallbackOffset, o = e.touches ? e.touches[0] : e, n = T && ct(T, !0), r = T && n && n.a, f = T && n && n.d, l = Xt && Y && as(Y), d = (o.clientX - je.clientX + s.x) / (r || 1) + (l ? l[0] - ja[0] : 0) / (r || 1), c = (o.clientY - je.clientY + s.y) / (f || 1) + (l ? l[1] - ja[1] : 0) / (f || 1);
      if (!E.active && !ot) {
        if (i && Math.max(Math.abs(o.clientX - this._lastX), Math.abs(o.clientY - this._lastY)) < i)
          return;
        this._onDragStart(e, !0);
      }
      if (T) {
        n ? (n.e += d - (Va || 0), n.f += c - (qa || 0)) : n = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: d,
          f: c
        };
        var g = "matrix(".concat(n.a, ",").concat(n.b, ",").concat(n.c, ",").concat(n.d, ",").concat(n.e, ",").concat(n.f, ")");
        w(T, "webkitTransform", g), w(T, "mozTransform", g), w(T, "msTransform", g), w(T, "transform", g), Va = d, qa = c, ce = o;
      }
      e.cancelable && e.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!T) {
      var e = this.options.fallbackOnBody ? document.body : M, t = j(p, !0, Xt, !0, e), i = this.options;
      if (Xt) {
        for (Y = e; w(Y, "position") === "static" && w(Y, "transform") === "none" && Y !== document; )
          Y = Y.parentNode;
        Y !== document.body && Y !== document.documentElement ? (Y === document && (Y = ge()), t.top += Y.scrollTop, t.left += Y.scrollLeft) : Y = ge(), ja = as(Y);
      }
      T = p.cloneNode(!0), te(T, i.ghostClass, !1), te(T, i.fallbackClass, !0), te(T, i.dragClass, !0), w(T, "transition", ""), w(T, "transform", ""), w(T, "box-sizing", "border-box"), w(T, "margin", 0), w(T, "top", t.top), w(T, "left", t.left), w(T, "width", t.width), w(T, "height", t.height), w(T, "opacity", "0.8"), w(T, "position", Xt ? "absolute" : "fixed"), w(T, "zIndex", "100000"), w(T, "pointerEvents", "none"), E.ghost = T, e.appendChild(T), w(T, "transform-origin", is / parseInt(T.style.width) * 100 + "% " + ss / parseInt(T.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(e, t) {
    var i = this, s = e.dataTransfer, o = i.options;
    if (Q("dragStart", this, {
      evt: e
    }), E.eventCanceled) {
      this._onDrop();
      return;
    }
    Q("setupClone", this), E.eventCanceled || (B = Us(p), B.removeAttribute("id"), B.draggable = !1, B.style["will-change"] = "", this._hideClone(), te(B, this.options.chosenClass, !1), E.clone = B), i.cloneId = la(function() {
      Q("clone", i), !E.eventCanceled && (i.options.removeCloneOnHide || M.insertBefore(B, p), i._hideClone(), G({
        sortable: i,
        name: "clone"
      }));
    }), !t && te(p, o.dragClass, !0), t ? (ba = !0, i._loopId = setInterval(i._emulateDragOver, 50)) : (D(document, "mouseup", i._onDrop), D(document, "touchend", i._onDrop), D(document, "touchcancel", i._onDrop), s && (s.effectAllowed = "move", o.setData && o.setData.call(i, s, p)), O(document, "drop", i), w(p, "transform", "translateZ(0)")), ot = !0, i._dragStartId = la(i._dragStarted.bind(i, t, e)), O(document, "selectstart", i), St = !0, window.getSelection().removeAllRanges(), Nt && w(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(e) {
    var t = this.el, i = e.target, s, o, n, r = this.options, f = r.group, l = E.active, d = Gt === f, c = r.sort, g = W || l, h, b = this, m = !1;
    if (li) return;
    function y(pe, Ee) {
      Q(pe, b, _e({
        evt: e,
        isOwner: d,
        axis: h ? "vertical" : "horizontal",
        revert: n,
        dragRect: s,
        targetRect: o,
        canSort: c,
        fromSortable: g,
        target: i,
        completed: A,
        onMove: function(Je, He) {
          return Qt(M, t, p, s, Je, j(Je), e, He);
        },
        changed: N
      }, Ee));
    }
    function k() {
      y("dragOverAnimationCapture"), b.captureAnimationState(), b !== g && g.captureAnimationState();
    }
    function A(pe) {
      return y("dragOverCompleted", {
        insertion: pe
      }), pe && (d ? l._hideClone() : l._showClone(b), b !== g && (te(p, W ? W.options.ghostClass : l.options.ghostClass, !1), te(p, r.ghostClass, !0)), W !== b && b !== E.active ? W = b : b === E.active && W && (W = null), g === b && (b._ignoreWhileAnimating = i), b.animateAll(function() {
        y("dragOverAnimationComplete"), b._ignoreWhileAnimating = null;
      }), b !== g && (g.animateAll(), g._ignoreWhileAnimating = null)), (i === p && !p.animated || i === t && !i.animated) && (at = null), !r.dragoverBubble && !e.rootEl && i !== document && (p.parentNode[Z]._isOutsideThisEl(e.target), !pe && Fe(e)), !r.dragoverBubble && e.stopPropagation && e.stopPropagation(), m = !0;
    }
    function N() {
      ae = ne(p), Ne = ne(p, r.draggable), G({
        sortable: b,
        name: "change",
        toEl: t,
        newIndex: ae,
        newDraggableIndex: Ne,
        originalEvent: e
      });
    }
    if (e.preventDefault !== void 0 && e.cancelable && e.preventDefault(), i = ue(i, r.draggable, t, !0), y("dragOver"), E.eventCanceled) return m;
    if (p.contains(e.target) || i.animated && i.animatingX && i.animatingY || b._ignoreWhileAnimating === i)
      return A(!1);
    if (ba = !1, l && !r.disabled && (d ? c || (n = V !== M) : W === this || (this.lastPutMode = Gt.checkPull(this, l, p, e)) && f.checkPut(this, l, p, e))) {
      if (h = this._getDirection(e, i) === "vertical", s = j(p), y("dragOverValid"), E.eventCanceled) return m;
      if (n)
        return V = M, k(), this._hideClone(), y("revert"), E.eventCanceled || (We ? M.insertBefore(p, We) : M.appendChild(p)), A(!0);
      var v = yi(t, r.draggable);
      if (!v || Ln(e, h, this) && !v.animated) {
        if (v === p)
          return A(!1);
        if (v && t === e.target && (i = v), i && (o = j(i)), Qt(M, t, p, s, i, o, e, !!i) !== !1)
          return k(), v && v.nextSibling ? t.insertBefore(p, v.nextSibling) : t.appendChild(p), V = t, N(), A(!0);
      } else if (v && Nn(e, h, this)) {
        var S = ut(t, 0, r, !0);
        if (S === p)
          return A(!1);
        if (i = S, o = j(i), Qt(M, t, p, s, i, o, e, !1) !== !1)
          return k(), t.insertBefore(p, S), V = t, N(), A(!0);
      } else if (i.parentNode === t) {
        o = j(i);
        var C = 0, x, R = p.parentNode !== t, L = !kn(p.animated && p.toRect || s, i.animated && i.toRect || o, h), I = h ? "top" : "left", $ = ts(i, "top", "top") || ts(p, "top", "top"), F = $ ? $.scrollTop : void 0;
        at !== i && (x = o[I], $t = !1, Ut = !L && r.invertSwap || R), C = xn(e, i, o, h, L ? 1 : r.swapThreshold, r.invertedSwapThreshold == null ? r.swapThreshold : r.invertedSwapThreshold, Ut, at === i);
        var P;
        if (C !== 0) {
          var K = ne(p);
          do
            K -= C, P = V.children[K];
          while (P && (w(P, "display") === "none" || P === T));
        }
        if (C === 0 || P === i)
          return A(!1);
        at = i, It = C;
        var ee = i.nextElementSibling, H = !1;
        H = C === 1;
        var z = Qt(M, t, p, s, i, o, e, H);
        if (z !== !1)
          return (z === 1 || z === -1) && (H = z === 1), li = !0, setTimeout(On, 30), k(), H && !ee ? t.appendChild(p) : i.parentNode.insertBefore(p, H ? ee : i), $ && Gs($, 0, F - $.scrollTop), V = p.parentNode, x !== void 0 && !Ut && (fa = Math.abs(x - j(i)[I])), N(), A(!0);
      }
      if (t.contains(p))
        return A(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    D(document, "mousemove", this._onTouchMove), D(document, "touchmove", this._onTouchMove), D(document, "pointermove", this._onTouchMove), D(document, "dragover", Fe), D(document, "mousemove", Fe), D(document, "touchmove", Fe);
  },
  _offUpEvents: function() {
    var e = this.el.ownerDocument;
    D(e, "mouseup", this._onDrop), D(e, "touchend", this._onDrop), D(e, "pointerup", this._onDrop), D(e, "pointercancel", this._onDrop), D(e, "touchcancel", this._onDrop), D(document, "selectstart", this);
  },
  _onDrop: function(e) {
    var t = this.el, i = this.options;
    if (ae = ne(p), Ne = ne(p, i.draggable), Q("drop", this, {
      evt: e
    }), V = p && p.parentNode, ae = ne(p), Ne = ne(p, i.draggable), E.eventCanceled) {
      this._nulling();
      return;
    }
    ot = !1, Ut = !1, $t = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), di(this.cloneId), di(this._dragStartId), this.nativeDraggable && (D(document, "drop", this), D(t, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), Nt && w(document.body, "user-select", ""), w(p, "transform", ""), e && (St && (e.cancelable && e.preventDefault(), !i.dropBubble && e.stopPropagation()), T && T.parentNode && T.parentNode.removeChild(T), (M === V || W && W.lastPutMode !== "clone") && B && B.parentNode && B.parentNode.removeChild(B), p && (this.nativeDraggable && D(p, "dragend", this), Fa(p), p.style["will-change"] = "", St && !ot && te(p, W ? W.options.ghostClass : this.options.ghostClass, !1), te(p, this.options.chosenClass, !1), G({
      sortable: this,
      name: "unchoose",
      toEl: V,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: e
    }), M !== V ? (ae >= 0 && (G({
      rootEl: V,
      name: "add",
      toEl: V,
      fromEl: M,
      originalEvent: e
    }), G({
      sortable: this,
      name: "remove",
      toEl: V,
      originalEvent: e
    }), G({
      rootEl: V,
      name: "sort",
      toEl: V,
      fromEl: M,
      originalEvent: e
    }), G({
      sortable: this,
      name: "sort",
      toEl: V,
      originalEvent: e
    })), W && W.save()) : ae !== lt && ae >= 0 && (G({
      sortable: this,
      name: "update",
      toEl: V,
      originalEvent: e
    }), G({
      sortable: this,
      name: "sort",
      toEl: V,
      originalEvent: e
    })), E.active && ((ae == null || ae === -1) && (ae = lt, Ne = xt), G({
      sortable: this,
      name: "end",
      toEl: V,
      originalEvent: e
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    Q("nulling", this), M = p = V = T = We = B = ra = Le = je = ce = St = ae = Ne = lt = xt = at = It = W = Gt = E.dragged = E.ghost = E.clone = E.active = null, va.forEach(function(e) {
      e.checked = !0;
    }), va.length = Va = qa = 0;
  },
  handleEvent: function(e) {
    switch (e.type) {
      case "drop":
      case "dragend":
        this._onDrop(e);
        break;
      case "dragenter":
      case "dragover":
        p && (this._onDragOver(e), Dn(e));
        break;
      case "selectstart":
        e.preventDefault();
        break;
    }
  },
  /**
   * Serializes the item into an array of string.
   * @returns {String[]}
   */
  toArray: function() {
    for (var e = [], t, i = this.el.children, s = 0, o = i.length, n = this.options; s < o; s++)
      t = i[s], ue(t, n.draggable, this.el, !1) && e.push(t.getAttribute(n.dataIdAttr) || $n(t));
    return e;
  },
  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function(e, t) {
    var i = {}, s = this.el;
    this.toArray().forEach(function(o, n) {
      var r = s.children[n];
      ue(r, this.options.draggable, s, !1) && (i[o] = r);
    }, this), t && this.captureAnimationState(), e.forEach(function(o) {
      i[o] && (s.removeChild(i[o]), s.appendChild(i[o]));
    }), t && this.animateAll();
  },
  /**
   * Save the current sorting
   */
  save: function() {
    var e = this.options.store;
    e && e.set && e.set(this);
  },
  /**
   * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
   * @param   {HTMLElement}  el
   * @param   {String}       [selector]  default: `options.draggable`
   * @returns {HTMLElement|null}
   */
  closest: function(e, t) {
    return ue(e, t || this.options.draggable, this.el, !1);
  },
  /**
   * Set/get option
   * @param   {string} name
   * @param   {*}      [value]
   * @returns {*}
   */
  option: function(e, t) {
    var i = this.options;
    if (t === void 0)
      return i[e];
    var s = Ht.modifyOption(this, e, t);
    typeof s < "u" ? i[e] = s : i[e] = t, e === "group" && Js(i);
  },
  /**
   * Destroy
   */
  destroy: function() {
    Q("destroy", this);
    var e = this.el;
    e[Z] = null, D(e, "mousedown", this._onTapStart), D(e, "touchstart", this._onTapStart), D(e, "pointerdown", this._onTapStart), this.nativeDraggable && (D(e, "dragover", this), D(e, "dragenter", this)), Array.prototype.forEach.call(e.querySelectorAll("[draggable]"), function(t) {
      t.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), _a.splice(_a.indexOf(this.el), 1), this.el = e = null;
  },
  _hideClone: function() {
    if (!Le) {
      if (Q("hideClone", this), E.eventCanceled) return;
      w(B, "display", "none"), this.options.removeCloneOnHide && B.parentNode && B.parentNode.removeChild(B), Le = !0;
    }
  },
  _showClone: function(e) {
    if (e.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (Le) {
      if (Q("showClone", this), E.eventCanceled) return;
      p.parentNode == M && !this.options.group.revertClone ? M.insertBefore(B, p) : We ? M.insertBefore(B, We) : M.appendChild(B), this.options.group.revertClone && this.animate(p, B), w(B, "display", ""), Le = !1;
    }
  }
};
function Dn(a) {
  a.dataTransfer && (a.dataTransfer.dropEffect = "move"), a.cancelable && a.preventDefault();
}
function Qt(a, e, t, i, s, o, n, r) {
  var f, l = a[Z], d = l.options.onMove, c;
  return window.CustomEvent && !Ce && !Bt ? f = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (f = document.createEvent("Event"), f.initEvent("move", !0, !0)), f.to = e, f.from = a, f.dragged = t, f.draggedRect = i, f.related = s || e, f.relatedRect = o || j(e), f.willInsertAfter = r, f.originalEvent = n, a.dispatchEvent(f), d && (c = d.call(l, f, n)), c;
}
function Fa(a) {
  a.draggable = !1;
}
function On() {
  li = !1;
}
function Nn(a, e, t) {
  var i = j(ut(t.el, 0, t.options, !0)), s = Xs(t.el, t.options, T), o = 10;
  return e ? a.clientX < s.left - o || a.clientY < i.top && a.clientX < i.right : a.clientY < s.top - o || a.clientY < i.bottom && a.clientX < i.left;
}
function Ln(a, e, t) {
  var i = j(yi(t.el, t.options.draggable)), s = Xs(t.el, t.options, T), o = 10;
  return e ? a.clientX > s.right + o || a.clientY > i.bottom && a.clientX > i.left : a.clientY > s.bottom + o || a.clientX > i.right && a.clientY > i.top;
}
function xn(a, e, t, i, s, o, n, r) {
  var f = i ? a.clientY : a.clientX, l = i ? t.height : t.width, d = i ? t.top : t.left, c = i ? t.bottom : t.right, g = !1;
  if (!n) {
    if (r && fa < l * s) {
      if (!$t && (It === 1 ? f > d + l * o / 2 : f < c - l * o / 2) && ($t = !0), $t)
        g = !0;
      else if (It === 1 ? f < d + fa : f > c - fa)
        return -It;
    } else if (f > d + l * (1 - s) / 2 && f < c - l * (1 - s) / 2)
      return In(e);
  }
  return g = g || n, g && (f < d + l * o / 2 || f > c - l * o / 2) ? f > d + l / 2 ? 1 : -1 : 0;
}
function In(a) {
  return ne(p) < ne(a) ? 1 : -1;
}
function $n(a) {
  for (var e = a.tagName + a.className + a.src + a.href + a.textContent, t = e.length, i = 0; t--; )
    i += e.charCodeAt(t);
  return i.toString(36);
}
function Pn(a) {
  va.length = 0;
  for (var e = a.getElementsByTagName("input"), t = e.length; t--; ) {
    var i = e[t];
    i.checked && va.push(i);
  }
}
function la(a) {
  return setTimeout(a, 0);
}
function di(a) {
  return clearTimeout(a);
}
Ca && O(document, "touchmove", function(a) {
  (E.active || ot) && a.cancelable && a.preventDefault();
});
E.utils = {
  on: O,
  off: D,
  css: w,
  find: Ys,
  is: function(e, t) {
    return !!ue(e, t, e, !1);
  },
  extend: bn,
  throttle: Ks,
  closest: ue,
  toggleClass: te,
  clone: Us,
  index: ne,
  nextTick: la,
  cancelNextTick: di,
  detectDirection: Zs,
  getChild: ut,
  expando: Z
};
E.get = function(a) {
  return a[Z];
};
E.mount = function() {
  for (var a = arguments.length, e = new Array(a), t = 0; t < a; t++)
    e[t] = arguments[t];
  e[0].constructor === Array && (e = e[0]), e.forEach(function(i) {
    if (!i.prototype || !i.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(i));
    i.utils && (E.utils = _e(_e({}, E.utils), i.utils)), Ht.mount(i);
  });
};
E.create = function(a, e) {
  return new E(a, e);
};
E.version = gn;
var q = [], Dt, ci, ui = !1, Wa, za, Ea, Ot;
function Mn() {
  function a() {
    this.defaults = {
      scroll: !0,
      forceAutoScrollFallback: !1,
      scrollSensitivity: 30,
      scrollSpeed: 10,
      bubbleScroll: !0
    };
    for (var e in this)
      e.charAt(0) === "_" && typeof this[e] == "function" && (this[e] = this[e].bind(this));
  }
  return a.prototype = {
    dragStarted: function(t) {
      var i = t.originalEvent;
      this.sortable.nativeDraggable ? O(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? O(document, "pointermove", this._handleFallbackAutoScroll) : i.touches ? O(document, "touchmove", this._handleFallbackAutoScroll) : O(document, "mousemove", this._handleFallbackAutoScroll);
    },
    dragOverCompleted: function(t) {
      var i = t.originalEvent;
      !this.options.dragOverBubble && !i.rootEl && this._handleAutoScroll(i);
    },
    drop: function() {
      this.sortable.nativeDraggable ? D(document, "dragover", this._handleAutoScroll) : (D(document, "pointermove", this._handleFallbackAutoScroll), D(document, "touchmove", this._handleFallbackAutoScroll), D(document, "mousemove", this._handleFallbackAutoScroll)), ns(), da(), _n();
    },
    nulling: function() {
      Ea = ci = Dt = ui = Ot = Wa = za = null, q.length = 0;
    },
    _handleFallbackAutoScroll: function(t) {
      this._handleAutoScroll(t, !0);
    },
    _handleAutoScroll: function(t, i) {
      var s = this, o = (t.touches ? t.touches[0] : t).clientX, n = (t.touches ? t.touches[0] : t).clientY, r = document.elementFromPoint(o, n);
      if (Ea = t, i || this.options.forceAutoScrollFallback || Bt || Ce || Nt) {
        Ya(t, this.options, r, i);
        var f = xe(r, !0);
        ui && (!Ot || o !== Wa || n !== za) && (Ot && ns(), Ot = setInterval(function() {
          var l = xe(document.elementFromPoint(o, n), !0);
          l !== f && (f = l, da()), Ya(t, s.options, l, i);
        }, 10), Wa = o, za = n);
      } else {
        if (!this.options.bubbleScroll || xe(r, !0) === ge()) {
          da();
          return;
        }
        Ya(t, this.options, xe(r, !1), !1);
      }
    }
  }, Ae(a, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function da() {
  q.forEach(function(a) {
    clearInterval(a.pid);
  }), q = [];
}
function ns() {
  clearInterval(Ot);
}
var Ya = Ks(function(a, e, t, i) {
  if (e.scroll) {
    var s = (a.touches ? a.touches[0] : a).clientX, o = (a.touches ? a.touches[0] : a).clientY, n = e.scrollSensitivity, r = e.scrollSpeed, f = ge(), l = !1, d;
    ci !== t && (ci = t, da(), Dt = e.scroll, d = e.scrollFn, Dt === !0 && (Dt = xe(t, !0)));
    var c = 0, g = Dt;
    do {
      var h = g, b = j(h), m = b.top, y = b.bottom, k = b.left, A = b.right, N = b.width, v = b.height, S = void 0, C = void 0, x = h.scrollWidth, R = h.scrollHeight, L = w(h), I = h.scrollLeft, $ = h.scrollTop;
      h === f ? (S = N < x && (L.overflowX === "auto" || L.overflowX === "scroll" || L.overflowX === "visible"), C = v < R && (L.overflowY === "auto" || L.overflowY === "scroll" || L.overflowY === "visible")) : (S = N < x && (L.overflowX === "auto" || L.overflowX === "scroll"), C = v < R && (L.overflowY === "auto" || L.overflowY === "scroll"));
      var F = S && (Math.abs(A - s) <= n && I + N < x) - (Math.abs(k - s) <= n && !!I), P = C && (Math.abs(y - o) <= n && $ + v < R) - (Math.abs(m - o) <= n && !!$);
      if (!q[c])
        for (var K = 0; K <= c; K++)
          q[K] || (q[K] = {});
      (q[c].vx != F || q[c].vy != P || q[c].el !== h) && (q[c].el = h, q[c].vx = F, q[c].vy = P, clearInterval(q[c].pid), (F != 0 || P != 0) && (l = !0, q[c].pid = setInterval((function() {
        i && this.layer === 0 && E.active._onTouchMove(Ea);
        var ee = q[this.layer].vy ? q[this.layer].vy * r : 0, H = q[this.layer].vx ? q[this.layer].vx * r : 0;
        typeof d == "function" && d.call(E.dragged.parentNode[Z], H, ee, a, Ea, q[this.layer].el) !== "continue" || Gs(q[this.layer].el, H, ee);
      }).bind({
        layer: c
      }), 24))), c++;
    } while (e.bubbleScroll && g !== f && (g = xe(g, !1)));
    ui = l;
  }
}, 30), ao = function(e) {
  var t = e.originalEvent, i = e.putSortable, s = e.dragEl, o = e.activeSortable, n = e.dispatchSortableEvent, r = e.hideGhostForTarget, f = e.unhideGhostForTarget;
  if (t) {
    var l = i || o;
    r();
    var d = t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : t, c = document.elementFromPoint(d.clientX, d.clientY);
    f(), l && !l.el.contains(c) && (n("spill"), this.onSpill({
      dragEl: s,
      putSortable: i
    }));
  }
};
function Ti() {
}
Ti.prototype = {
  startIndex: null,
  dragStart: function(e) {
    var t = e.oldDraggableIndex;
    this.startIndex = t;
  },
  onSpill: function(e) {
    var t = e.dragEl, i = e.putSortable;
    this.sortable.captureAnimationState(), i && i.captureAnimationState();
    var s = ut(this.sortable.el, this.startIndex, this.options);
    s ? this.sortable.el.insertBefore(t, s) : this.sortable.el.appendChild(t), this.sortable.animateAll(), i && i.animateAll();
  },
  drop: ao
};
Ae(Ti, {
  pluginName: "revertOnSpill"
});
function Ai() {
}
Ai.prototype = {
  onSpill: function(e) {
    var t = e.dragEl, i = e.putSortable, s = i || this.sortable;
    s.captureAnimationState(), t.parentNode && t.parentNode.removeChild(t), s.animateAll();
  },
  drop: ao
};
Ae(Ai, {
  pluginName: "removeOnSpill"
});
E.mount(new Mn());
E.mount(Ai, Ti);
class Rn {
  eventTarget = new EventTarget();
  on(e, t) {
    this.eventTarget.addEventListener(e, (i) => {
      t(i.detail);
    });
  }
  emit(e, t) {
    const i = new CustomEvent(e, {
      detail: t
    });
    this.eventTarget.dispatchEvent(i);
  }
}
const Bn = '<svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-grabber"><path d="M10 13a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm-4 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm5-9a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM6 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>', Hn = '<svg width="12" fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"/></svg>', Vn = '<svg width="12" fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"/></svg>', qn = '<svg width="12" fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"/></svg>', jn = {
  maxLevel: -1
};
let Fn = class {
  button = document.createElement("button");
  constructor(e) {
    this.button.innerHTML = e, this.button.classList.add("btn", "btn-dark");
  }
  onClick(e) {
    this.button.addEventListener("click", e);
  }
  getElement() {
    return this.button;
  }
  getParemtElement() {
    return this.button.closest(".list-group-item");
  }
};
class Wn {
  button = document.createElement("button");
  constructor(e) {
    this.button.innerHTML = e, this.button.classList.add("btn", "btn-danger");
  }
  onClick(e) {
    this.button.addEventListener("click", e);
  }
  getElement() {
    return this.button;
  }
  getParemtElement() {
    return this.button.closest(".list-group-item");
  }
}
class zn {
  button = document.createElement("button");
  constructor(e) {
    this.button.innerHTML = e, this.button.classList.add("btn", "btn-secondary");
  }
  onClick(e) {
    this.button.addEventListener("click", e);
  }
  getElement() {
    return this.button;
  }
  getParemtElement() {
    return this.button.closest(".list-group-item");
  }
}
class Yn {
  item;
  container = document.createElement("div");
  eventEmitter = new Rn();
  buttons = {
    link: new zn(qn),
    edit: new Fn(Hn),
    delete: new Wn(Vn)
  };
  constructor(e) {
    this.item = e, this.setEvents();
  }
  setEvents() {
    this.buttons.delete.onClick(() => {
      this.eventEmitter.emit("clickDelete", { item: this.item });
    }), this.buttons.edit.onClick(() => {
      this.eventEmitter.emit("clickEdit", { item: this.item });
    }), this.buttons.link.onClick(() => {
      this.eventEmitter.emit("clickLink", { item: this.item });
    });
  }
  onClickDelete(e) {
    this.eventEmitter.on("clickDelete", e);
  }
  onClickEdit(e) {
    this.eventEmitter.on("clickEdit", e);
  }
  onClickLink(e) {
    this.eventEmitter.on("clickLink", e);
  }
  mount() {
    this.container.classList.add("btn-group", "btn-group-sm"), this.container.append(this.buttons.link.getElement()), this.container.append(this.buttons.edit.getElement()), this.container.append(this.buttons.delete.getElement());
  }
  getElement() {
    return this.container;
  }
}
class io {
  items = [];
  constructor() {
  }
  insertAt(e, t) {
    this.items.splice(t, 0, e);
  }
  add(e, t = -1) {
    let i = Math.trunc(t);
    if (i >= 0 && i < this.items.length) {
      this.insertAt(e, i);
      return;
    }
    this.items.push(e);
  }
  getItems() {
    return this.items;
  }
  empty() {
    this.items = [];
  }
  getLength() {
    return this.items.length;
  }
}
function Kn(a) {
  let e = { text: "", href: "", icon: "", tooltip: "" };
  for (let t in a)
    typeof a[t] == "string" && (e[t] = a[t]);
  return e;
}
function Gn(a) {
  let e = { text: "", href: "", icon: "", tooltip: "" };
  for (let t in a)
    typeof a[t] == "string" && (e[t] = a[t]);
  return e;
}
function ca(a, e) {
  for (let t in e)
    a.dataset[t] = e[t];
}
function ua(a, e = -1) {
  a.ariaLevel = `${e}`;
  let t = a.children;
  for (let i = 0; i < t.length; i++) {
    let s = e;
    t[i].matches(".list-group-item") && (s = s + 1), ua(t[i], s);
  }
}
function hi(a, e) {
  let t = a.querySelectorAll(".list-group-item"), i = e;
  for (let s = 0; s < t.length; s++) {
    let o = hi(t[s], e + 1);
    i = Math.max(i, o);
  }
  return i;
}
class wa {
  element = document.createElement("div");
  dataset;
  collection;
  options = { sortableClassname: "nested-sortable" };
  listenerEditButton = () => {
  };
  listenerDeleteButton = () => {
  };
  listenerLinkButton = () => {
  };
  buttonGroup;
  constructor(e) {
    this.collection = new io(), this.buttonGroup = new Yn(this), this.element.classList.add("list-group-item"), this.dataset = Kn(e);
  }
  setOptions(e) {
    this.options = e;
  }
  setDataset(e) {
    this.dataset = e;
  }
  getDataset() {
    return this.dataset;
  }
  setListenerLinkButton(e) {
    this.listenerLinkButton = e;
  }
  setListenerEditButton(e) {
    this.listenerEditButton = e;
  }
  setListenerDeleteButton(e) {
    this.listenerDeleteButton = e;
  }
  add(e) {
    this.collection.add(e);
  }
  remove() {
    this.getElement().remove();
  }
  updateUI(e) {
    let t = this.element.querySelector(".item-text"), i = this.element.querySelector("i");
    t != null && (t.innerHTML = e.text), i != null && (i.className = e.icon);
  }
  addArray(e) {
    e.forEach((t) => {
      let i = new wa(t);
      i.setOptions(this.options), i.setListenerLinkButton(this.listenerLinkButton), i.setListenerDeleteButton(this.listenerDeleteButton), i.setListenerEditButton(this.listenerEditButton), i.buttonGroup.onClickLink(this.listenerLinkButton), i.buttonGroup.onClickDelete(this.listenerDeleteButton), i.buttonGroup.onClickEdit(this.listenerEditButton), ca(i.getElement(), i.getDataset()), t.children != null && t.children.length > 0 && i.addArray(t.children), this.add(i);
    });
  }
  createHandler() {
    let e = document.createElement("span");
    return e.style.mixBlendMode = "difference", e.style.filter = "invert(1) grayscale(1)", e.className = "jme-handle", e.innerHTML = Bn, e;
  }
  mount() {
    let e = document.createElement("div"), t = document.createElement("span"), i = document.createElement("i");
    i.className = this.dataset.icon;
    let s = this.createHandler(), o = document.createElement("span");
    o.className = "item-text", o.style.paddingLeft = "5px", o.innerHTML = this.dataset.text;
    let n = document.createElement("div");
    e.className = "d-flex w-100 justify-content-between align-items-center", t.append(s), t.append(i), t.append(o), n.classList.add("list-group", this.options.sortableClassname), e.append(t), this.buttonGroup.mount(), e.append(this.buttonGroup.getElement()), this.element.append(e), this.collection.getItems().forEach((r) => {
      r.mount(), n.appendChild(r.getElement());
    }), this.element.append(n);
  }
  getElement() {
    return this.element;
  }
}
class Un {
  element;
  id;
  collection;
  options = { sortableClassname: "nested-sortable" };
  constructor(e) {
    const t = document.getElementById(e);
    if (t == null)
      throw Error(`Error: Element with id="${e}" does not exists.`);
    this.id = e, this.element = t, this.collection = new io();
  }
  setOptions(e) {
    this.options = e;
  }
  add(e, t = -1) {
    this.collection.add(e, t);
  }
  empty() {
    this.collection.empty();
    let e = this.element;
    for (; e.firstChild; )
      e.removeChild(e.firstChild);
  }
  mount() {
    this.element.classList.add("list-group", this.options.sortableClassname), this.collection.getItems().forEach((e) => {
      e.setOptions(this.options), e.mount(), this.element.append(e.getElement());
    });
  }
  getElement() {
    return this.element;
  }
}
class Qc {
  menuContainer;
  currentItem = null;
  listenerDeleteButton;
  listenerEditButton;
  listenerLinkButton;
  listenerDragEnd;
  sortableClassname = "";
  options;
  constructor(e, t = jn) {
    this.menuContainer = new Un(e), this.sortableClassname = `${e}-nested-sortable`, this.options = t, this.menuContainer.setOptions({ sortableClassname: this.sortableClassname }), this.listenerDeleteButton = () => {
    }, this.listenerEditButton = () => {
    }, this.listenerLinkButton = () => {
    }, this.listenerDragEnd = () => {
    };
  }
  add(e) {
    let t = new wa(e);
    t.setOptions({ sortableClassname: this.sortableClassname }), t.setListenerEditButton(this.listenerEditButton), t.buttonGroup.onClickEdit(this.listenerEditButton), t.setListenerDeleteButton(this.listenerDeleteButton), t.buttonGroup.onClickDelete(this.listenerDeleteButton), t.setListenerLinkButton(this.listenerLinkButton), t.buttonGroup.onClickLink(this.listenerLinkButton), ca(t.getElement(), e), t.getElement().ariaLevel = "0", this.menuContainer.add(t), t.mount(), this.makeItemSortable(t), this.menuContainer.getElement().append(t.getElement());
  }
  edit(e) {
    this.currentItem = e;
  }
  update(e) {
    this.currentItem != null && (this.currentItem.setDataset(e), ca(this.currentItem.getElement(), e), this.currentItem.updateUI(e), this.currentItem = null);
  }
  setArray(e) {
    e.forEach((t) => {
      let i = new wa(t);
      i.setOptions({ sortableClassname: this.sortableClassname }), i.setListenerDeleteButton(this.listenerDeleteButton), i.setListenerEditButton(this.listenerEditButton), i.setListenerLinkButton(this.listenerLinkButton), i.buttonGroup.onClickDelete(this.listenerDeleteButton), i.buttonGroup.onClickEdit(this.listenerEditButton), i.buttonGroup.onClickLink(this.listenerLinkButton), ca(i.getElement(), i.getDataset()), Array.isArray(t.children) && t.children.length > 0 && i.addArray(t.children), this.menuContainer.add(i);
    });
  }
  getString() {
    let e = this.htmlToJson(this.menuContainer.getElement());
    return JSON.stringify(e);
  }
  htmlToJson(e) {
    let t = e.children, i = [];
    for (var s = 0; s < t.length; s++) {
      let o = t.item(s), n = Gn(o.dataset), r = o.lastElementChild;
      if (n.children = [], r.childElementCount > 0) {
        let f = this.htmlToJson(r);
        n.children = f;
      }
      i.push(n);
    }
    return i;
  }
  onClickEdit(e) {
    this.listenerEditButton = e;
  }
  onClickDelete(e) {
    this.listenerDeleteButton = e;
  }
  onClickLink(e) {
    this.listenerLinkButton = e;
  }
  onDragEnd(e) {
    this.listenerDragEnd = e;
  }
  empty() {
    this.menuContainer.empty();
  }
  mount() {
    this.menuContainer.mount(), this.makeItSortable(), ua(this.menuContainer.getElement());
  }
  makeItSortable() {
    for (var e = [].slice.call(document.querySelectorAll("." + this.sortableClassname)), t = 0; t < e.length; t++)
      new E(e[t], {
        handle: ".jme-handle",
        ghostClass: "ghost",
        group: {
          name: "nested",
          pull: (i, s, o) => {
            if (this.options.maxLevel < 0)
              return !0;
            let n = parseInt(i.el.ariaLevel);
            return hi(o, 0) + n < this.options.maxLevel;
          }
        },
        onEnd: (i) => {
          ua(this.menuContainer.getElement()), this.listenerDragEnd(i);
        },
        animation: 150,
        fallbackOnBody: !0,
        swapThreshold: 0.65
      });
  }
  makeItemSortable(e) {
    let t = e.getElement().querySelector("." + this.sortableClassname);
    t != null && new E(t, {
      handle: ".jme-handle",
      ghostClass: "ghost",
      group: {
        name: "nested",
        pull: (i, s, o) => {
          if (this.options.maxLevel < 0)
            return !0;
          let n = parseInt(i.el.ariaLevel);
          return hi(o, 0) + n < this.options.maxLevel;
        }
      },
      onEnd: (i) => {
        ua(this.menuContainer.getElement());
      },
      animation: 150,
      fallbackOnBody: !0,
      swapThreshold: 0.65
    });
  }
}
const Zt = /* @__PURE__ */ JSON.parse('["fa-brands fa-42-group","fa-brands fa-500px","fa-brands fa-accessible-icon","fa-brands fa-accusoft","fa-brands fa-adn","fa-brands fa-adversal","fa-brands fa-affiliatetheme","fa-brands fa-airbnb","fa-brands fa-algolia","fa-brands fa-alipay","fa-brands fa-amazon","fa-brands fa-amazon-pay","fa-brands fa-amilia","fa-brands fa-android","fa-brands fa-angellist","fa-brands fa-angrycreative","fa-brands fa-angular","fa-brands fa-app-store","fa-brands fa-app-store-ios","fa-brands fa-apper","fa-brands fa-apple","fa-brands fa-apple-pay","fa-brands fa-artstation","fa-brands fa-asymmetrik","fa-brands fa-atlassian","fa-brands fa-audible","fa-brands fa-autoprefixer","fa-brands fa-avianex","fa-brands fa-aviato","fa-brands fa-aws","fa-brands fa-bandcamp","fa-brands fa-battle-net","fa-brands fa-behance","fa-brands fa-bilibili","fa-brands fa-bimobject","fa-brands fa-bitbucket","fa-brands fa-bitcoin","fa-brands fa-bity","fa-brands fa-black-tie","fa-brands fa-blackberry","fa-brands fa-blogger","fa-brands fa-blogger-b","fa-brands fa-bluesky","fa-brands fa-bluetooth","fa-brands fa-bluetooth-b","fa-brands fa-bootstrap","fa-brands fa-bots","fa-brands fa-brave","fa-brands fa-brave-reverse","fa-brands fa-btc","fa-brands fa-buffer","fa-brands fa-buromobelexperte","fa-brands fa-buy-n-large","fa-brands fa-buysellads","fa-brands fa-canadian-maple-leaf","fa-brands fa-cash-app","fa-brands fa-cc-amazon-pay","fa-brands fa-cc-amex","fa-brands fa-cc-apple-pay","fa-brands fa-cc-diners-club","fa-brands fa-cc-discover","fa-brands fa-cc-jcb","fa-brands fa-cc-mastercard","fa-brands fa-cc-paypal","fa-brands fa-cc-stripe","fa-brands fa-cc-visa","fa-brands fa-centercode","fa-brands fa-centos","fa-brands fa-chrome","fa-brands fa-chromecast","fa-brands fa-cloudflare","fa-brands fa-cloudscale","fa-brands fa-cloudsmith","fa-brands fa-cloudversify","fa-brands fa-cmplid","fa-brands fa-codepen","fa-brands fa-codiepie","fa-brands fa-confluence","fa-brands fa-connectdevelop","fa-brands fa-contao","fa-brands fa-cotton-bureau","fa-brands fa-cpanel","fa-brands fa-creative-commons","fa-brands fa-creative-commons-by","fa-brands fa-creative-commons-nc","fa-brands fa-creative-commons-nc-eu","fa-brands fa-creative-commons-nc-jp","fa-brands fa-creative-commons-nd","fa-brands fa-creative-commons-pd","fa-brands fa-creative-commons-pd-alt","fa-brands fa-creative-commons-remix","fa-brands fa-creative-commons-sa","fa-brands fa-creative-commons-sampling","fa-brands fa-creative-commons-sampling-plus","fa-brands fa-creative-commons-share","fa-brands fa-creative-commons-zero","fa-brands fa-critical-role","fa-brands fa-css","fa-brands fa-css3","fa-brands fa-css3-alt","fa-brands fa-cuttlefish","fa-brands fa-d-and-d","fa-brands fa-d-and-d-beyond","fa-brands fa-dailymotion","fa-brands fa-dart-lang","fa-brands fa-dashcube","fa-brands fa-debian","fa-brands fa-deezer","fa-brands fa-delicious","fa-brands fa-deploydog","fa-brands fa-deskpro","fa-brands fa-dev","fa-brands fa-deviantart","fa-brands fa-dhl","fa-brands fa-diaspora","fa-brands fa-digg","fa-brands fa-digital-ocean","fa-brands fa-discord","fa-brands fa-discourse","fa-brands fa-disqus","fa-brands fa-dochub","fa-brands fa-docker","fa-brands fa-draft2digital","fa-brands fa-dribbble","fa-brands fa-dropbox","fa-brands fa-drupal","fa-brands fa-duolingo","fa-brands fa-dyalog","fa-brands fa-earlybirds","fa-brands fa-ebay","fa-brands fa-edge","fa-brands fa-edge-legacy","fa-brands fa-elementor","fa-brands fa-eleventy","fa-brands fa-ello","fa-brands fa-ember","fa-brands fa-empire","fa-brands fa-envira","fa-brands fa-erlang","fa-brands fa-ethereum","fa-brands fa-etsy","fa-brands fa-evernote","fa-brands fa-expeditedssl","fa-brands fa-facebook","fa-brands fa-facebook-f","fa-brands fa-facebook-messenger","fa-brands fa-fantasy-flight-games","fa-brands fa-fedex","fa-brands fa-fedora","fa-brands fa-figma","fa-brands fa-files-pinwheel","fa-brands fa-firefox","fa-brands fa-firefox-browser","fa-brands fa-first-order","fa-brands fa-first-order-alt","fa-brands fa-firstdraft","fa-brands fa-flickr","fa-brands fa-flipboard","fa-brands fa-flutter","fa-brands fa-fly","fa-brands fa-font-awesome","fa-brands fa-fonticons","fa-brands fa-fonticons-fi","fa-brands fa-fort-awesome","fa-brands fa-fort-awesome-alt","fa-brands fa-forumbee","fa-brands fa-foursquare","fa-brands fa-free-code-camp","fa-brands fa-freebsd","fa-brands fa-fulcrum","fa-brands fa-galactic-republic","fa-brands fa-galactic-senate","fa-brands fa-get-pocket","fa-brands fa-gg","fa-brands fa-gg-circle","fa-brands fa-git","fa-brands fa-git-alt","fa-brands fa-github","fa-brands fa-github-alt","fa-brands fa-gitkraken","fa-brands fa-gitlab","fa-brands fa-gitter","fa-brands fa-glide","fa-brands fa-glide-g","fa-brands fa-gofore","fa-brands fa-golang","fa-brands fa-goodreads","fa-brands fa-goodreads-g","fa-brands fa-google","fa-brands fa-google-drive","fa-brands fa-google-pay","fa-brands fa-google-play","fa-brands fa-google-plus","fa-brands fa-google-plus-g","fa-brands fa-google-scholar","fa-brands fa-google-wallet","fa-brands fa-gratipay","fa-brands fa-grav","fa-brands fa-gripfire","fa-brands fa-grunt","fa-brands fa-guilded","fa-brands fa-gulp","fa-brands fa-hacker-news","fa-brands fa-hackerrank","fa-brands fa-hashnode","fa-brands fa-hips","fa-brands fa-hire-a-helper","fa-brands fa-hive","fa-brands fa-hooli","fa-brands fa-hornbill","fa-brands fa-hotjar","fa-brands fa-houzz","fa-brands fa-html5","fa-brands fa-hubspot","fa-brands fa-ideal","fa-brands fa-imdb","fa-brands fa-instagram","fa-brands fa-instalod","fa-brands fa-intercom","fa-brands fa-internet-explorer","fa-brands fa-invision","fa-brands fa-ioxhost","fa-brands fa-itch-io","fa-brands fa-itunes","fa-brands fa-itunes-note","fa-brands fa-java","fa-brands fa-jedi-order","fa-brands fa-jenkins","fa-brands fa-jira","fa-brands fa-joget","fa-brands fa-joomla","fa-brands fa-js","fa-brands fa-jsfiddle","fa-brands fa-jxl","fa-brands fa-kaggle","fa-brands fa-kakao-talk","fa-brands fa-keybase","fa-brands fa-keycdn","fa-brands fa-kickstarter","fa-brands fa-kickstarter-k","fa-brands fa-korvue","fa-brands fa-laravel","fa-brands fa-lastfm","fa-brands fa-leanpub","fa-brands fa-less","fa-brands fa-letterboxd","fa-brands fa-line","fa-brands fa-linkedin","fa-brands fa-linkedin-in","fa-brands fa-linktree","fa-brands fa-linode","fa-brands fa-linux","fa-brands fa-lumon","fa-brands fa-lumon-drop","fa-brands fa-lyft","fa-brands fa-magento","fa-brands fa-mailchimp","fa-brands fa-mandalorian","fa-brands fa-markdown","fa-brands fa-mastodon","fa-brands fa-maxcdn","fa-brands fa-mdb","fa-brands fa-medapps","fa-brands fa-medium","fa-brands fa-medrt","fa-brands fa-meetup","fa-brands fa-megaport","fa-brands fa-mendeley","fa-brands fa-meta","fa-brands fa-microblog","fa-brands fa-microsoft","fa-brands fa-mintbit","fa-brands fa-mix","fa-brands fa-mixcloud","fa-brands fa-mixer","fa-brands fa-mizuni","fa-brands fa-modx","fa-brands fa-monero","fa-brands fa-napster","fa-brands fa-neos","fa-brands fa-nfc-directional","fa-brands fa-nfc-symbol","fa-brands fa-nimblr","fa-brands fa-node","fa-brands fa-node-js","fa-brands fa-notion","fa-brands fa-npm","fa-brands fa-ns8","fa-brands fa-nutritionix","fa-brands fa-octopus-deploy","fa-brands fa-odnoklassniki","fa-brands fa-odysee","fa-brands fa-old-republic","fa-brands fa-openai","fa-brands fa-opencart","fa-brands fa-openid","fa-brands fa-opensuse","fa-brands fa-opera","fa-brands fa-optin-monster","fa-brands fa-orcid","fa-brands fa-osi","fa-brands fa-padlet","fa-brands fa-page4","fa-brands fa-pagelines","fa-brands fa-palfed","fa-brands fa-pandora","fa-brands fa-patreon","fa-brands fa-paypal","fa-brands fa-perbyte","fa-brands fa-periscope","fa-brands fa-phabricator","fa-brands fa-phoenix-framework","fa-brands fa-phoenix-squadron","fa-brands fa-php","fa-brands fa-pied-piper","fa-brands fa-pied-piper-alt","fa-brands fa-pied-piper-hat","fa-brands fa-pied-piper-pp","fa-brands fa-pinterest","fa-brands fa-pinterest-p","fa-brands fa-pix","fa-brands fa-pixelfed","fa-brands fa-pixiv","fa-brands fa-playstation","fa-brands fa-product-hunt","fa-brands fa-pushed","fa-brands fa-python","fa-brands fa-qq","fa-brands fa-quinscape","fa-brands fa-quora","fa-brands fa-r-project","fa-brands fa-raspberry-pi","fa-brands fa-ravelry","fa-brands fa-react","fa-brands fa-reacteurope","fa-brands fa-readme","fa-brands fa-rebel","fa-brands fa-red-river","fa-brands fa-reddit","fa-brands fa-reddit-alien","fa-brands fa-redhat","fa-brands fa-renren","fa-brands fa-replyd","fa-brands fa-researchgate","fa-brands fa-resolving","fa-brands fa-rev","fa-brands fa-rocketchat","fa-brands fa-rockrms","fa-brands fa-rust","fa-brands fa-safari","fa-brands fa-salesforce","fa-brands fa-sass","fa-brands fa-schlix","fa-brands fa-screenpal","fa-brands fa-scribd","fa-brands fa-searchengin","fa-brands fa-sellcast","fa-brands fa-sellsy","fa-brands fa-servicestack","fa-brands fa-shirtsinbulk","fa-brands fa-shoelace","fa-brands fa-shopify","fa-brands fa-shopware","fa-brands fa-signal-messenger","fa-brands fa-simplybuilt","fa-brands fa-sistrix","fa-brands fa-sith","fa-brands fa-sitrox","fa-brands fa-sketch","fa-brands fa-skyatlas","fa-brands fa-skype","fa-brands fa-slack","fa-brands fa-slideshare","fa-brands fa-snapchat","fa-brands fa-soundcloud","fa-brands fa-sourcetree","fa-brands fa-space-awesome","fa-brands fa-speakap","fa-brands fa-speaker-deck","fa-brands fa-spotify","fa-brands fa-square-behance","fa-brands fa-square-bluesky","fa-brands fa-square-dribbble","fa-brands fa-square-facebook","fa-brands fa-square-figma","fa-brands fa-square-font-awesome","fa-brands fa-square-font-awesome-stroke","fa-brands fa-square-git","fa-brands fa-square-github","fa-brands fa-square-gitlab","fa-brands fa-square-google-plus","fa-brands fa-square-hacker-news","fa-brands fa-square-instagram","fa-brands fa-square-js","fa-brands fa-square-lastfm","fa-brands fa-square-letterboxd","fa-brands fa-square-linkedin","fa-brands fa-square-odnoklassniki","fa-brands fa-square-pied-piper","fa-brands fa-square-pinterest","fa-brands fa-square-reddit","fa-brands fa-square-snapchat","fa-brands fa-square-steam","fa-brands fa-square-threads","fa-brands fa-square-tumblr","fa-brands fa-square-twitter","fa-brands fa-square-upwork","fa-brands fa-square-viadeo","fa-brands fa-square-vimeo","fa-brands fa-square-web-awesome","fa-brands fa-square-web-awesome-stroke","fa-brands fa-square-whatsapp","fa-brands fa-square-x-twitter","fa-brands fa-square-xing","fa-brands fa-square-youtube","fa-brands fa-squarespace","fa-brands fa-stack-exchange","fa-brands fa-stack-overflow","fa-brands fa-stackpath","fa-brands fa-staylinked","fa-brands fa-steam","fa-brands fa-steam-symbol","fa-brands fa-sticker-mule","fa-brands fa-strava","fa-brands fa-stripe","fa-brands fa-stripe-s","fa-brands fa-stubber","fa-brands fa-studiovinari","fa-brands fa-stumbleupon","fa-brands fa-stumbleupon-circle","fa-brands fa-superpowers","fa-brands fa-supple","fa-brands fa-suse","fa-brands fa-swift","fa-brands fa-symfony","fa-brands fa-teamspeak","fa-brands fa-telegram","fa-brands fa-tencent-weibo","fa-brands fa-tex","fa-brands fa-the-red-yeti","fa-brands fa-themeco","fa-brands fa-themeisle","fa-brands fa-think-peaks","fa-brands fa-threads","fa-brands fa-tidal","fa-brands fa-tiktok","fa-brands fa-trade-federation","fa-brands fa-trello","fa-brands fa-tumblr","fa-brands fa-twitch","fa-brands fa-twitter","fa-brands fa-typo3","fa-brands fa-uber","fa-brands fa-ubuntu","fa-brands fa-uikit","fa-brands fa-umbraco","fa-brands fa-uncharted","fa-brands fa-uniregistry","fa-brands fa-unity","fa-brands fa-unsplash","fa-brands fa-untappd","fa-brands fa-ups","fa-brands fa-upwork","fa-brands fa-usb","fa-brands fa-usps","fa-brands fa-ussunnah","fa-brands fa-vaadin","fa-brands fa-viacoin","fa-brands fa-viadeo","fa-brands fa-viber","fa-brands fa-vimeo","fa-brands fa-vimeo-v","fa-brands fa-vine","fa-brands fa-vk","fa-brands fa-vnv","fa-brands fa-vsco","fa-brands fa-vuejs","fa-brands fa-w3c","fa-brands fa-watchman-monitoring","fa-brands fa-waze","fa-brands fa-web-awesome","fa-brands fa-webflow","fa-brands fa-weebly","fa-brands fa-weibo","fa-brands fa-weixin","fa-brands fa-whatsapp","fa-brands fa-whmcs","fa-brands fa-wikipedia-w","fa-brands fa-windows","fa-brands fa-wirsindhandwerk","fa-brands fa-wix","fa-brands fa-wizards-of-the-coast","fa-brands fa-wodu","fa-brands fa-wolf-pack-battalion","fa-brands fa-wordpress","fa-brands fa-wordpress-simple","fa-brands fa-wpbeginner","fa-brands fa-wpexplorer","fa-brands fa-wpforms","fa-brands fa-wpressr","fa-brands fa-x-twitter","fa-brands fa-xbox","fa-brands fa-xing","fa-brands fa-y-combinator","fa-brands fa-yahoo","fa-brands fa-yammer","fa-brands fa-yandex","fa-brands fa-yandex-international","fa-brands fa-yarn","fa-brands fa-yelp","fa-brands fa-yoast","fa-brands fa-youtube","fa-brands fa-zhihu","fa-regular fa-address-book","fa-regular fa-address-card","fa-regular fa-alarm-clock","fa-regular fa-bell","fa-regular fa-bell-slash","fa-regular fa-bookmark","fa-regular fa-building","fa-regular fa-calendar","fa-regular fa-calendar-check","fa-regular fa-calendar-days","fa-regular fa-calendar-minus","fa-regular fa-calendar-plus","fa-regular fa-calendar-xmark","fa-regular fa-camera","fa-regular fa-chart-bar","fa-regular fa-chess-bishop","fa-regular fa-chess-king","fa-regular fa-chess-knight","fa-regular fa-chess-pawn","fa-regular fa-chess-queen","fa-regular fa-chess-rook","fa-regular fa-circle","fa-regular fa-circle-check","fa-regular fa-circle-dot","fa-regular fa-circle-down","fa-regular fa-circle-left","fa-regular fa-circle-pause","fa-regular fa-circle-play","fa-regular fa-circle-question","fa-regular fa-circle-right","fa-regular fa-circle-stop","fa-regular fa-circle-up","fa-regular fa-circle-user","fa-regular fa-circle-xmark","fa-regular fa-clipboard","fa-regular fa-clock","fa-regular fa-clone","fa-regular fa-closed-captioning","fa-regular fa-cloud","fa-regular fa-comment","fa-regular fa-comment-dots","fa-regular fa-comments","fa-regular fa-compass","fa-regular fa-copy","fa-regular fa-copyright","fa-regular fa-credit-card","fa-regular fa-envelope","fa-regular fa-envelope-open","fa-regular fa-eye","fa-regular fa-eye-slash","fa-regular fa-face-angry","fa-regular fa-face-dizzy","fa-regular fa-face-flushed","fa-regular fa-face-frown","fa-regular fa-face-frown-open","fa-regular fa-face-grimace","fa-regular fa-face-grin","fa-regular fa-face-grin-beam","fa-regular fa-face-grin-beam-sweat","fa-regular fa-face-grin-hearts","fa-regular fa-face-grin-squint","fa-regular fa-face-grin-squint-tears","fa-regular fa-face-grin-stars","fa-regular fa-face-grin-tears","fa-regular fa-face-grin-tongue","fa-regular fa-face-grin-tongue-squint","fa-regular fa-face-grin-tongue-wink","fa-regular fa-face-grin-wide","fa-regular fa-face-grin-wink","fa-regular fa-face-kiss","fa-regular fa-face-kiss-beam","fa-regular fa-face-kiss-wink-heart","fa-regular fa-face-laugh","fa-regular fa-face-laugh-beam","fa-regular fa-face-laugh-squint","fa-regular fa-face-laugh-wink","fa-regular fa-face-meh","fa-regular fa-face-meh-blank","fa-regular fa-face-rolling-eyes","fa-regular fa-face-sad-cry","fa-regular fa-face-sad-tear","fa-regular fa-face-smile","fa-regular fa-face-smile-beam","fa-regular fa-face-smile-wink","fa-regular fa-face-surprise","fa-regular fa-face-tired","fa-regular fa-file","fa-regular fa-file-audio","fa-regular fa-file-code","fa-regular fa-file-excel","fa-regular fa-file-image","fa-regular fa-file-lines","fa-regular fa-file-pdf","fa-regular fa-file-powerpoint","fa-regular fa-file-video","fa-regular fa-file-word","fa-regular fa-file-zipper","fa-regular fa-flag","fa-regular fa-floppy-disk","fa-regular fa-folder","fa-regular fa-folder-closed","fa-regular fa-folder-open","fa-regular fa-font-awesome","fa-regular fa-futbol","fa-regular fa-gem","fa-regular fa-hand","fa-regular fa-hand-back-fist","fa-regular fa-hand-lizard","fa-regular fa-hand-peace","fa-regular fa-hand-point-down","fa-regular fa-hand-point-left","fa-regular fa-hand-point-right","fa-regular fa-hand-point-up","fa-regular fa-hand-pointer","fa-regular fa-hand-scissors","fa-regular fa-hand-spock","fa-regular fa-handshake","fa-regular fa-hard-drive","fa-regular fa-headphones","fa-regular fa-heart","fa-regular fa-hospital","fa-regular fa-hourglass","fa-regular fa-hourglass-half","fa-regular fa-house","fa-regular fa-id-badge","fa-regular fa-id-card","fa-regular fa-image","fa-regular fa-images","fa-regular fa-keyboard","fa-regular fa-lemon","fa-regular fa-life-ring","fa-regular fa-lightbulb","fa-regular fa-map","fa-regular fa-message","fa-regular fa-money-bill-1","fa-regular fa-moon","fa-regular fa-newspaper","fa-regular fa-note-sticky","fa-regular fa-object-group","fa-regular fa-object-ungroup","fa-regular fa-paper-plane","fa-regular fa-paste","fa-regular fa-pen-to-square","fa-regular fa-rectangle-list","fa-regular fa-rectangle-xmark","fa-regular fa-registered","fa-regular fa-share-from-square","fa-regular fa-snowflake","fa-regular fa-square","fa-regular fa-square-caret-down","fa-regular fa-square-caret-left","fa-regular fa-square-caret-right","fa-regular fa-square-caret-up","fa-regular fa-square-check","fa-regular fa-square-full","fa-regular fa-square-minus","fa-regular fa-square-plus","fa-regular fa-star","fa-regular fa-star-half","fa-regular fa-star-half-stroke","fa-regular fa-sun","fa-regular fa-thumbs-down","fa-regular fa-thumbs-up","fa-regular fa-trash-can","fa-regular fa-truck","fa-regular fa-user","fa-regular fa-window-maximize","fa-regular fa-window-minimize","fa-regular fa-window-restore","fa-solid fa-0","fa-solid fa-1","fa-solid fa-2","fa-solid fa-3","fa-solid fa-4","fa-solid fa-5","fa-solid fa-6","fa-solid fa-7","fa-solid fa-8","fa-solid fa-9","fa-solid fa-a","fa-solid fa-address-book","fa-solid fa-address-card","fa-solid fa-alarm-clock","fa-solid fa-align-center","fa-solid fa-align-justify","fa-solid fa-align-left","fa-solid fa-align-right","fa-solid fa-anchor","fa-solid fa-anchor-circle-check","fa-solid fa-anchor-circle-exclamation","fa-solid fa-anchor-circle-xmark","fa-solid fa-anchor-lock","fa-solid fa-angle-down","fa-solid fa-angle-left","fa-solid fa-angle-right","fa-solid fa-angle-up","fa-solid fa-angles-down","fa-solid fa-angles-left","fa-solid fa-angles-right","fa-solid fa-angles-up","fa-solid fa-ankh","fa-solid fa-apple-whole","fa-solid fa-archway","fa-solid fa-arrow-down","fa-solid fa-arrow-down-1-9","fa-solid fa-arrow-down-9-1","fa-solid fa-arrow-down-a-z","fa-solid fa-arrow-down-long","fa-solid fa-arrow-down-short-wide","fa-solid fa-arrow-down-up-across-line","fa-solid fa-arrow-down-up-lock","fa-solid fa-arrow-down-wide-short","fa-solid fa-arrow-down-z-a","fa-solid fa-arrow-left","fa-solid fa-arrow-left-long","fa-solid fa-arrow-pointer","fa-solid fa-arrow-right","fa-solid fa-arrow-right-arrow-left","fa-solid fa-arrow-right-from-bracket","fa-solid fa-arrow-right-long","fa-solid fa-arrow-right-to-bracket","fa-solid fa-arrow-right-to-city","fa-solid fa-arrow-rotate-left","fa-solid fa-arrow-rotate-right","fa-solid fa-arrow-trend-down","fa-solid fa-arrow-trend-up","fa-solid fa-arrow-turn-down","fa-solid fa-arrow-turn-up","fa-solid fa-arrow-up","fa-solid fa-arrow-up-1-9","fa-solid fa-arrow-up-9-1","fa-solid fa-arrow-up-a-z","fa-solid fa-arrow-up-from-bracket","fa-solid fa-arrow-up-from-ground-water","fa-solid fa-arrow-up-from-water-pump","fa-solid fa-arrow-up-long","fa-solid fa-arrow-up-right-dots","fa-solid fa-arrow-up-right-from-square","fa-solid fa-arrow-up-short-wide","fa-solid fa-arrow-up-wide-short","fa-solid fa-arrow-up-z-a","fa-solid fa-arrows-down-to-line","fa-solid fa-arrows-down-to-people","fa-solid fa-arrows-left-right","fa-solid fa-arrows-left-right-to-line","fa-solid fa-arrows-rotate","fa-solid fa-arrows-spin","fa-solid fa-arrows-split-up-and-left","fa-solid fa-arrows-to-circle","fa-solid fa-arrows-to-dot","fa-solid fa-arrows-to-eye","fa-solid fa-arrows-turn-right","fa-solid fa-arrows-turn-to-dots","fa-solid fa-arrows-up-down","fa-solid fa-arrows-up-down-left-right","fa-solid fa-arrows-up-to-line","fa-solid fa-asterisk","fa-solid fa-at","fa-solid fa-atom","fa-solid fa-audio-description","fa-solid fa-austral-sign","fa-solid fa-award","fa-solid fa-b","fa-solid fa-baby","fa-solid fa-baby-carriage","fa-solid fa-backward","fa-solid fa-backward-fast","fa-solid fa-backward-step","fa-solid fa-bacon","fa-solid fa-bacteria","fa-solid fa-bacterium","fa-solid fa-bag-shopping","fa-solid fa-bahai","fa-solid fa-baht-sign","fa-solid fa-ban","fa-solid fa-ban-smoking","fa-solid fa-bandage","fa-solid fa-bangladeshi-taka-sign","fa-solid fa-barcode","fa-solid fa-bars","fa-solid fa-bars-progress","fa-solid fa-bars-staggered","fa-solid fa-baseball","fa-solid fa-baseball-bat-ball","fa-solid fa-basket-shopping","fa-solid fa-basketball","fa-solid fa-bath","fa-solid fa-battery-empty","fa-solid fa-battery-full","fa-solid fa-battery-half","fa-solid fa-battery-quarter","fa-solid fa-battery-three-quarters","fa-solid fa-bed","fa-solid fa-bed-pulse","fa-solid fa-beer-mug-empty","fa-solid fa-bell","fa-solid fa-bell-concierge","fa-solid fa-bell-slash","fa-solid fa-bezier-curve","fa-solid fa-bicycle","fa-solid fa-binoculars","fa-solid fa-biohazard","fa-solid fa-bitcoin-sign","fa-solid fa-blender","fa-solid fa-blender-phone","fa-solid fa-blog","fa-solid fa-bold","fa-solid fa-bolt","fa-solid fa-bolt-lightning","fa-solid fa-bomb","fa-solid fa-bone","fa-solid fa-bong","fa-solid fa-book","fa-solid fa-book-atlas","fa-solid fa-book-bible","fa-solid fa-book-bookmark","fa-solid fa-book-journal-whills","fa-solid fa-book-medical","fa-solid fa-book-open","fa-solid fa-book-open-reader","fa-solid fa-book-quran","fa-solid fa-book-skull","fa-solid fa-book-tanakh","fa-solid fa-bookmark","fa-solid fa-border-all","fa-solid fa-border-none","fa-solid fa-border-top-left","fa-solid fa-bore-hole","fa-solid fa-bottle-droplet","fa-solid fa-bottle-water","fa-solid fa-bowl-food","fa-solid fa-bowl-rice","fa-solid fa-bowling-ball","fa-solid fa-box","fa-solid fa-box-archive","fa-solid fa-box-open","fa-solid fa-box-tissue","fa-solid fa-boxes-packing","fa-solid fa-boxes-stacked","fa-solid fa-braille","fa-solid fa-brain","fa-solid fa-brazilian-real-sign","fa-solid fa-bread-slice","fa-solid fa-bridge","fa-solid fa-bridge-circle-check","fa-solid fa-bridge-circle-exclamation","fa-solid fa-bridge-circle-xmark","fa-solid fa-bridge-lock","fa-solid fa-bridge-water","fa-solid fa-briefcase","fa-solid fa-briefcase-medical","fa-solid fa-broom","fa-solid fa-broom-ball","fa-solid fa-brush","fa-solid fa-bucket","fa-solid fa-bug","fa-solid fa-bug-slash","fa-solid fa-bugs","fa-solid fa-building","fa-solid fa-building-circle-arrow-right","fa-solid fa-building-circle-check","fa-solid fa-building-circle-exclamation","fa-solid fa-building-circle-xmark","fa-solid fa-building-columns","fa-solid fa-building-flag","fa-solid fa-building-lock","fa-solid fa-building-ngo","fa-solid fa-building-shield","fa-solid fa-building-un","fa-solid fa-building-user","fa-solid fa-building-wheat","fa-solid fa-bullhorn","fa-solid fa-bullseye","fa-solid fa-burger","fa-solid fa-burst","fa-solid fa-bus","fa-solid fa-bus-side","fa-solid fa-bus-simple","fa-solid fa-business-time","fa-solid fa-c","fa-solid fa-cable-car","fa-solid fa-cake-candles","fa-solid fa-calculator","fa-solid fa-calendar","fa-solid fa-calendar-check","fa-solid fa-calendar-day","fa-solid fa-calendar-days","fa-solid fa-calendar-minus","fa-solid fa-calendar-plus","fa-solid fa-calendar-week","fa-solid fa-calendar-xmark","fa-solid fa-camera","fa-solid fa-camera-retro","fa-solid fa-camera-rotate","fa-solid fa-campground","fa-solid fa-candy-cane","fa-solid fa-cannabis","fa-solid fa-capsules","fa-solid fa-car","fa-solid fa-car-battery","fa-solid fa-car-burst","fa-solid fa-car-on","fa-solid fa-car-rear","fa-solid fa-car-side","fa-solid fa-car-tunnel","fa-solid fa-caravan","fa-solid fa-caret-down","fa-solid fa-caret-left","fa-solid fa-caret-right","fa-solid fa-caret-up","fa-solid fa-carrot","fa-solid fa-cart-arrow-down","fa-solid fa-cart-flatbed","fa-solid fa-cart-flatbed-suitcase","fa-solid fa-cart-plus","fa-solid fa-cart-shopping","fa-solid fa-cash-register","fa-solid fa-cat","fa-solid fa-cedi-sign","fa-solid fa-cent-sign","fa-solid fa-certificate","fa-solid fa-chair","fa-solid fa-chalkboard","fa-solid fa-chalkboard-user","fa-solid fa-champagne-glasses","fa-solid fa-charging-station","fa-solid fa-chart-area","fa-solid fa-chart-bar","fa-solid fa-chart-column","fa-solid fa-chart-diagram","fa-solid fa-chart-gantt","fa-solid fa-chart-line","fa-solid fa-chart-pie","fa-solid fa-chart-simple","fa-solid fa-check","fa-solid fa-check-double","fa-solid fa-check-to-slot","fa-solid fa-cheese","fa-solid fa-chess","fa-solid fa-chess-bishop","fa-solid fa-chess-board","fa-solid fa-chess-king","fa-solid fa-chess-knight","fa-solid fa-chess-pawn","fa-solid fa-chess-queen","fa-solid fa-chess-rook","fa-solid fa-chevron-down","fa-solid fa-chevron-left","fa-solid fa-chevron-right","fa-solid fa-chevron-up","fa-solid fa-child","fa-solid fa-child-combatant","fa-solid fa-child-dress","fa-solid fa-child-reaching","fa-solid fa-children","fa-solid fa-church","fa-solid fa-circle","fa-solid fa-circle-arrow-down","fa-solid fa-circle-arrow-left","fa-solid fa-circle-arrow-right","fa-solid fa-circle-arrow-up","fa-solid fa-circle-check","fa-solid fa-circle-chevron-down","fa-solid fa-circle-chevron-left","fa-solid fa-circle-chevron-right","fa-solid fa-circle-chevron-up","fa-solid fa-circle-dollar-to-slot","fa-solid fa-circle-dot","fa-solid fa-circle-down","fa-solid fa-circle-exclamation","fa-solid fa-circle-h","fa-solid fa-circle-half-stroke","fa-solid fa-circle-info","fa-solid fa-circle-left","fa-solid fa-circle-minus","fa-solid fa-circle-nodes","fa-solid fa-circle-notch","fa-solid fa-circle-pause","fa-solid fa-circle-play","fa-solid fa-circle-plus","fa-solid fa-circle-question","fa-solid fa-circle-radiation","fa-solid fa-circle-right","fa-solid fa-circle-stop","fa-solid fa-circle-up","fa-solid fa-circle-user","fa-solid fa-circle-xmark","fa-solid fa-city","fa-solid fa-clapperboard","fa-solid fa-clipboard","fa-solid fa-clipboard-check","fa-solid fa-clipboard-list","fa-solid fa-clipboard-question","fa-solid fa-clipboard-user","fa-solid fa-clock","fa-solid fa-clock-rotate-left","fa-solid fa-clone","fa-solid fa-closed-captioning","fa-solid fa-cloud","fa-solid fa-cloud-arrow-down","fa-solid fa-cloud-arrow-up","fa-solid fa-cloud-bolt","fa-solid fa-cloud-meatball","fa-solid fa-cloud-moon","fa-solid fa-cloud-moon-rain","fa-solid fa-cloud-rain","fa-solid fa-cloud-showers-heavy","fa-solid fa-cloud-showers-water","fa-solid fa-cloud-sun","fa-solid fa-cloud-sun-rain","fa-solid fa-clover","fa-solid fa-code","fa-solid fa-code-branch","fa-solid fa-code-commit","fa-solid fa-code-compare","fa-solid fa-code-fork","fa-solid fa-code-merge","fa-solid fa-code-pull-request","fa-solid fa-coins","fa-solid fa-colon-sign","fa-solid fa-comment","fa-solid fa-comment-dollar","fa-solid fa-comment-dots","fa-solid fa-comment-medical","fa-solid fa-comment-nodes","fa-solid fa-comment-slash","fa-solid fa-comment-sms","fa-solid fa-comments","fa-solid fa-comments-dollar","fa-solid fa-compact-disc","fa-solid fa-compass","fa-solid fa-compass-drafting","fa-solid fa-compress","fa-solid fa-computer","fa-solid fa-computer-mouse","fa-solid fa-cookie","fa-solid fa-cookie-bite","fa-solid fa-copy","fa-solid fa-copyright","fa-solid fa-couch","fa-solid fa-cow","fa-solid fa-credit-card","fa-solid fa-crop","fa-solid fa-crop-simple","fa-solid fa-cross","fa-solid fa-crosshairs","fa-solid fa-crow","fa-solid fa-crown","fa-solid fa-crutch","fa-solid fa-cruzeiro-sign","fa-solid fa-cube","fa-solid fa-cubes","fa-solid fa-cubes-stacked","fa-solid fa-d","fa-solid fa-database","fa-solid fa-delete-left","fa-solid fa-democrat","fa-solid fa-desktop","fa-solid fa-dharmachakra","fa-solid fa-diagram-next","fa-solid fa-diagram-predecessor","fa-solid fa-diagram-project","fa-solid fa-diagram-successor","fa-solid fa-diamond","fa-solid fa-diamond-turn-right","fa-solid fa-dice","fa-solid fa-dice-d20","fa-solid fa-dice-d6","fa-solid fa-dice-five","fa-solid fa-dice-four","fa-solid fa-dice-one","fa-solid fa-dice-six","fa-solid fa-dice-three","fa-solid fa-dice-two","fa-solid fa-disease","fa-solid fa-display","fa-solid fa-divide","fa-solid fa-dna","fa-solid fa-dog","fa-solid fa-dollar-sign","fa-solid fa-dolly","fa-solid fa-dong-sign","fa-solid fa-door-closed","fa-solid fa-door-open","fa-solid fa-dove","fa-solid fa-down-left-and-up-right-to-center","fa-solid fa-down-long","fa-solid fa-download","fa-solid fa-dragon","fa-solid fa-draw-polygon","fa-solid fa-droplet","fa-solid fa-droplet-slash","fa-solid fa-drum","fa-solid fa-drum-steelpan","fa-solid fa-drumstick-bite","fa-solid fa-dumbbell","fa-solid fa-dumpster","fa-solid fa-dumpster-fire","fa-solid fa-dungeon","fa-solid fa-e","fa-solid fa-ear-deaf","fa-solid fa-ear-listen","fa-solid fa-earth-africa","fa-solid fa-earth-americas","fa-solid fa-earth-asia","fa-solid fa-earth-europe","fa-solid fa-earth-oceania","fa-solid fa-egg","fa-solid fa-eject","fa-solid fa-elevator","fa-solid fa-ellipsis","fa-solid fa-ellipsis-vertical","fa-solid fa-envelope","fa-solid fa-envelope-circle-check","fa-solid fa-envelope-open","fa-solid fa-envelope-open-text","fa-solid fa-envelopes-bulk","fa-solid fa-equals","fa-solid fa-eraser","fa-solid fa-ethernet","fa-solid fa-euro-sign","fa-solid fa-exclamation","fa-solid fa-expand","fa-solid fa-explosion","fa-solid fa-eye","fa-solid fa-eye-dropper","fa-solid fa-eye-low-vision","fa-solid fa-eye-slash","fa-solid fa-f","fa-solid fa-face-angry","fa-solid fa-face-dizzy","fa-solid fa-face-flushed","fa-solid fa-face-frown","fa-solid fa-face-frown-open","fa-solid fa-face-grimace","fa-solid fa-face-grin","fa-solid fa-face-grin-beam","fa-solid fa-face-grin-beam-sweat","fa-solid fa-face-grin-hearts","fa-solid fa-face-grin-squint","fa-solid fa-face-grin-squint-tears","fa-solid fa-face-grin-stars","fa-solid fa-face-grin-tears","fa-solid fa-face-grin-tongue","fa-solid fa-face-grin-tongue-squint","fa-solid fa-face-grin-tongue-wink","fa-solid fa-face-grin-wide","fa-solid fa-face-grin-wink","fa-solid fa-face-kiss","fa-solid fa-face-kiss-beam","fa-solid fa-face-kiss-wink-heart","fa-solid fa-face-laugh","fa-solid fa-face-laugh-beam","fa-solid fa-face-laugh-squint","fa-solid fa-face-laugh-wink","fa-solid fa-face-meh","fa-solid fa-face-meh-blank","fa-solid fa-face-rolling-eyes","fa-solid fa-face-sad-cry","fa-solid fa-face-sad-tear","fa-solid fa-face-smile","fa-solid fa-face-smile-beam","fa-solid fa-face-smile-wink","fa-solid fa-face-surprise","fa-solid fa-face-tired","fa-solid fa-fan","fa-solid fa-faucet","fa-solid fa-faucet-drip","fa-solid fa-fax","fa-solid fa-feather","fa-solid fa-feather-pointed","fa-solid fa-ferry","fa-solid fa-file","fa-solid fa-file-arrow-down","fa-solid fa-file-arrow-up","fa-solid fa-file-audio","fa-solid fa-file-circle-check","fa-solid fa-file-circle-exclamation","fa-solid fa-file-circle-minus","fa-solid fa-file-circle-plus","fa-solid fa-file-circle-question","fa-solid fa-file-circle-xmark","fa-solid fa-file-code","fa-solid fa-file-contract","fa-solid fa-file-csv","fa-solid fa-file-excel","fa-solid fa-file-export","fa-solid fa-file-fragment","fa-solid fa-file-half-dashed","fa-solid fa-file-image","fa-solid fa-file-import","fa-solid fa-file-invoice","fa-solid fa-file-invoice-dollar","fa-solid fa-file-lines","fa-solid fa-file-medical","fa-solid fa-file-pdf","fa-solid fa-file-pen","fa-solid fa-file-powerpoint","fa-solid fa-file-prescription","fa-solid fa-file-shield","fa-solid fa-file-signature","fa-solid fa-file-video","fa-solid fa-file-waveform","fa-solid fa-file-word","fa-solid fa-file-zipper","fa-solid fa-fill","fa-solid fa-fill-drip","fa-solid fa-film","fa-solid fa-filter","fa-solid fa-filter-circle-dollar","fa-solid fa-filter-circle-xmark","fa-solid fa-fingerprint","fa-solid fa-fire","fa-solid fa-fire-burner","fa-solid fa-fire-extinguisher","fa-solid fa-fire-flame-curved","fa-solid fa-fire-flame-simple","fa-solid fa-fish","fa-solid fa-fish-fins","fa-solid fa-flag","fa-solid fa-flag-checkered","fa-solid fa-flag-usa","fa-solid fa-flask","fa-solid fa-flask-vial","fa-solid fa-floppy-disk","fa-solid fa-florin-sign","fa-solid fa-folder","fa-solid fa-folder-closed","fa-solid fa-folder-minus","fa-solid fa-folder-open","fa-solid fa-folder-plus","fa-solid fa-folder-tree","fa-solid fa-font","fa-solid fa-font-awesome","fa-solid fa-football","fa-solid fa-forward","fa-solid fa-forward-fast","fa-solid fa-forward-step","fa-solid fa-franc-sign","fa-solid fa-frog","fa-solid fa-futbol","fa-solid fa-g","fa-solid fa-gamepad","fa-solid fa-gas-pump","fa-solid fa-gauge","fa-solid fa-gauge-high","fa-solid fa-gauge-simple","fa-solid fa-gauge-simple-high","fa-solid fa-gavel","fa-solid fa-gear","fa-solid fa-gears","fa-solid fa-gem","fa-solid fa-genderless","fa-solid fa-ghost","fa-solid fa-gift","fa-solid fa-gifts","fa-solid fa-glass-water","fa-solid fa-glass-water-droplet","fa-solid fa-glasses","fa-solid fa-globe","fa-solid fa-golf-ball-tee","fa-solid fa-gopuram","fa-solid fa-graduation-cap","fa-solid fa-greater-than","fa-solid fa-greater-than-equal","fa-solid fa-grip","fa-solid fa-grip-lines","fa-solid fa-grip-lines-vertical","fa-solid fa-grip-vertical","fa-solid fa-group-arrows-rotate","fa-solid fa-guarani-sign","fa-solid fa-guitar","fa-solid fa-gun","fa-solid fa-h","fa-solid fa-hammer","fa-solid fa-hamsa","fa-solid fa-hand","fa-solid fa-hand-back-fist","fa-solid fa-hand-dots","fa-solid fa-hand-fist","fa-solid fa-hand-holding","fa-solid fa-hand-holding-dollar","fa-solid fa-hand-holding-droplet","fa-solid fa-hand-holding-hand","fa-solid fa-hand-holding-heart","fa-solid fa-hand-holding-medical","fa-solid fa-hand-lizard","fa-solid fa-hand-middle-finger","fa-solid fa-hand-peace","fa-solid fa-hand-point-down","fa-solid fa-hand-point-left","fa-solid fa-hand-point-right","fa-solid fa-hand-point-up","fa-solid fa-hand-pointer","fa-solid fa-hand-scissors","fa-solid fa-hand-sparkles","fa-solid fa-hand-spock","fa-solid fa-handcuffs","fa-solid fa-hands","fa-solid fa-hands-asl-interpreting","fa-solid fa-hands-bound","fa-solid fa-hands-bubbles","fa-solid fa-hands-clapping","fa-solid fa-hands-holding","fa-solid fa-hands-holding-child","fa-solid fa-hands-holding-circle","fa-solid fa-hands-praying","fa-solid fa-handshake","fa-solid fa-handshake-angle","fa-solid fa-handshake-slash","fa-solid fa-hanukiah","fa-solid fa-hard-drive","fa-solid fa-hashtag","fa-solid fa-hat-cowboy","fa-solid fa-hat-cowboy-side","fa-solid fa-hat-wizard","fa-solid fa-head-side-cough","fa-solid fa-head-side-cough-slash","fa-solid fa-head-side-mask","fa-solid fa-head-side-virus","fa-solid fa-heading","fa-solid fa-headphones","fa-solid fa-headset","fa-solid fa-heart","fa-solid fa-heart-circle-bolt","fa-solid fa-heart-circle-check","fa-solid fa-heart-circle-exclamation","fa-solid fa-heart-circle-minus","fa-solid fa-heart-circle-plus","fa-solid fa-heart-circle-xmark","fa-solid fa-heart-crack","fa-solid fa-heart-pulse","fa-solid fa-helicopter","fa-solid fa-helicopter-symbol","fa-solid fa-helmet-safety","fa-solid fa-helmet-un","fa-solid fa-hexagon","fa-solid fa-hexagon-nodes","fa-solid fa-hexagon-nodes-bolt","fa-solid fa-highlighter","fa-solid fa-hill-avalanche","fa-solid fa-hill-rockslide","fa-solid fa-hippo","fa-solid fa-hockey-puck","fa-solid fa-holly-berry","fa-solid fa-horse","fa-solid fa-horse-head","fa-solid fa-hospital","fa-solid fa-hospital-user","fa-solid fa-hot-tub-person","fa-solid fa-hotdog","fa-solid fa-hotel","fa-solid fa-hourglass","fa-solid fa-hourglass-end","fa-solid fa-hourglass-half","fa-solid fa-hourglass-start","fa-solid fa-house","fa-solid fa-house-chimney","fa-solid fa-house-chimney-crack","fa-solid fa-house-chimney-medical","fa-solid fa-house-chimney-user","fa-solid fa-house-chimney-window","fa-solid fa-house-circle-check","fa-solid fa-house-circle-exclamation","fa-solid fa-house-circle-xmark","fa-solid fa-house-crack","fa-solid fa-house-fire","fa-solid fa-house-flag","fa-solid fa-house-flood-water","fa-solid fa-house-flood-water-circle-arrow-right","fa-solid fa-house-laptop","fa-solid fa-house-lock","fa-solid fa-house-medical","fa-solid fa-house-medical-circle-check","fa-solid fa-house-medical-circle-exclamation","fa-solid fa-house-medical-circle-xmark","fa-solid fa-house-medical-flag","fa-solid fa-house-signal","fa-solid fa-house-tsunami","fa-solid fa-house-user","fa-solid fa-hryvnia-sign","fa-solid fa-hurricane","fa-solid fa-i","fa-solid fa-i-cursor","fa-solid fa-ice-cream","fa-solid fa-icicles","fa-solid fa-icons","fa-solid fa-id-badge","fa-solid fa-id-card","fa-solid fa-id-card-clip","fa-solid fa-igloo","fa-solid fa-image","fa-solid fa-image-portrait","fa-solid fa-images","fa-solid fa-inbox","fa-solid fa-indent","fa-solid fa-indian-rupee-sign","fa-solid fa-industry","fa-solid fa-infinity","fa-solid fa-info","fa-solid fa-italic","fa-solid fa-j","fa-solid fa-jar","fa-solid fa-jar-wheat","fa-solid fa-jedi","fa-solid fa-jet-fighter","fa-solid fa-jet-fighter-up","fa-solid fa-joint","fa-solid fa-jug-detergent","fa-solid fa-k","fa-solid fa-kaaba","fa-solid fa-key","fa-solid fa-keyboard","fa-solid fa-khanda","fa-solid fa-kip-sign","fa-solid fa-kit-medical","fa-solid fa-kitchen-set","fa-solid fa-kiwi-bird","fa-solid fa-l","fa-solid fa-land-mine-on","fa-solid fa-landmark","fa-solid fa-landmark-dome","fa-solid fa-landmark-flag","fa-solid fa-language","fa-solid fa-laptop","fa-solid fa-laptop-code","fa-solid fa-laptop-file","fa-solid fa-laptop-medical","fa-solid fa-lari-sign","fa-solid fa-layer-group","fa-solid fa-leaf","fa-solid fa-left-long","fa-solid fa-left-right","fa-solid fa-lemon","fa-solid fa-less-than","fa-solid fa-less-than-equal","fa-solid fa-life-ring","fa-solid fa-lightbulb","fa-solid fa-lines-leaning","fa-solid fa-link","fa-solid fa-link-slash","fa-solid fa-lira-sign","fa-solid fa-list","fa-solid fa-list-check","fa-solid fa-list-ol","fa-solid fa-list-ul","fa-solid fa-litecoin-sign","fa-solid fa-location-arrow","fa-solid fa-location-crosshairs","fa-solid fa-location-dot","fa-solid fa-location-pin","fa-solid fa-location-pin-lock","fa-solid fa-lock","fa-solid fa-lock-open","fa-solid fa-locust","fa-solid fa-lungs","fa-solid fa-lungs-virus","fa-solid fa-m","fa-solid fa-magnet","fa-solid fa-magnifying-glass","fa-solid fa-magnifying-glass-arrow-right","fa-solid fa-magnifying-glass-chart","fa-solid fa-magnifying-glass-dollar","fa-solid fa-magnifying-glass-location","fa-solid fa-magnifying-glass-minus","fa-solid fa-magnifying-glass-plus","fa-solid fa-manat-sign","fa-solid fa-map","fa-solid fa-map-location","fa-solid fa-map-location-dot","fa-solid fa-map-pin","fa-solid fa-marker","fa-solid fa-mars","fa-solid fa-mars-and-venus","fa-solid fa-mars-and-venus-burst","fa-solid fa-mars-double","fa-solid fa-mars-stroke","fa-solid fa-mars-stroke-right","fa-solid fa-mars-stroke-up","fa-solid fa-martini-glass","fa-solid fa-martini-glass-citrus","fa-solid fa-martini-glass-empty","fa-solid fa-mask","fa-solid fa-mask-face","fa-solid fa-mask-ventilator","fa-solid fa-masks-theater","fa-solid fa-mattress-pillow","fa-solid fa-maximize","fa-solid fa-medal","fa-solid fa-memory","fa-solid fa-menorah","fa-solid fa-mercury","fa-solid fa-message","fa-solid fa-meteor","fa-solid fa-microchip","fa-solid fa-microphone","fa-solid fa-microphone-lines","fa-solid fa-microphone-lines-slash","fa-solid fa-microphone-slash","fa-solid fa-microscope","fa-solid fa-mill-sign","fa-solid fa-minimize","fa-solid fa-minus","fa-solid fa-mitten","fa-solid fa-mobile","fa-solid fa-mobile-button","fa-solid fa-mobile-retro","fa-solid fa-mobile-screen","fa-solid fa-mobile-screen-button","fa-solid fa-mobile-vibrate","fa-solid fa-money-bill","fa-solid fa-money-bill-1","fa-solid fa-money-bill-1-wave","fa-solid fa-money-bill-transfer","fa-solid fa-money-bill-trend-up","fa-solid fa-money-bill-wave","fa-solid fa-money-bill-wheat","fa-solid fa-money-bills","fa-solid fa-money-check","fa-solid fa-money-check-dollar","fa-solid fa-monument","fa-solid fa-moon","fa-solid fa-mortar-pestle","fa-solid fa-mosque","fa-solid fa-mosquito","fa-solid fa-mosquito-net","fa-solid fa-motorcycle","fa-solid fa-mound","fa-solid fa-mountain","fa-solid fa-mountain-city","fa-solid fa-mountain-sun","fa-solid fa-mug-hot","fa-solid fa-mug-saucer","fa-solid fa-music","fa-solid fa-n","fa-solid fa-naira-sign","fa-solid fa-network-wired","fa-solid fa-neuter","fa-solid fa-newspaper","fa-solid fa-non-binary","fa-solid fa-not-equal","fa-solid fa-notdef","fa-solid fa-note-sticky","fa-solid fa-notes-medical","fa-solid fa-o","fa-solid fa-object-group","fa-solid fa-object-ungroup","fa-solid fa-octagon","fa-solid fa-oil-can","fa-solid fa-oil-well","fa-solid fa-om","fa-solid fa-otter","fa-solid fa-outdent","fa-solid fa-p","fa-solid fa-pager","fa-solid fa-paint-roller","fa-solid fa-paintbrush","fa-solid fa-palette","fa-solid fa-pallet","fa-solid fa-panorama","fa-solid fa-paper-plane","fa-solid fa-paperclip","fa-solid fa-parachute-box","fa-solid fa-paragraph","fa-solid fa-passport","fa-solid fa-paste","fa-solid fa-pause","fa-solid fa-paw","fa-solid fa-peace","fa-solid fa-pen","fa-solid fa-pen-clip","fa-solid fa-pen-fancy","fa-solid fa-pen-nib","fa-solid fa-pen-ruler","fa-solid fa-pen-to-square","fa-solid fa-pencil","fa-solid fa-pentagon","fa-solid fa-people-arrows","fa-solid fa-people-carry-box","fa-solid fa-people-group","fa-solid fa-people-line","fa-solid fa-people-pulling","fa-solid fa-people-robbery","fa-solid fa-people-roof","fa-solid fa-pepper-hot","fa-solid fa-percent","fa-solid fa-person","fa-solid fa-person-arrow-down-to-line","fa-solid fa-person-arrow-up-from-line","fa-solid fa-person-biking","fa-solid fa-person-booth","fa-solid fa-person-breastfeeding","fa-solid fa-person-burst","fa-solid fa-person-cane","fa-solid fa-person-chalkboard","fa-solid fa-person-circle-check","fa-solid fa-person-circle-exclamation","fa-solid fa-person-circle-minus","fa-solid fa-person-circle-plus","fa-solid fa-person-circle-question","fa-solid fa-person-circle-xmark","fa-solid fa-person-digging","fa-solid fa-person-dots-from-line","fa-solid fa-person-dress","fa-solid fa-person-dress-burst","fa-solid fa-person-drowning","fa-solid fa-person-falling","fa-solid fa-person-falling-burst","fa-solid fa-person-half-dress","fa-solid fa-person-harassing","fa-solid fa-person-hiking","fa-solid fa-person-military-pointing","fa-solid fa-person-military-rifle","fa-solid fa-person-military-to-person","fa-solid fa-person-praying","fa-solid fa-person-pregnant","fa-solid fa-person-rays","fa-solid fa-person-rifle","fa-solid fa-person-running","fa-solid fa-person-shelter","fa-solid fa-person-skating","fa-solid fa-person-skiing","fa-solid fa-person-skiing-nordic","fa-solid fa-person-snowboarding","fa-solid fa-person-swimming","fa-solid fa-person-through-window","fa-solid fa-person-walking","fa-solid fa-person-walking-arrow-loop-left","fa-solid fa-person-walking-arrow-right","fa-solid fa-person-walking-dashed-line-arrow-right","fa-solid fa-person-walking-luggage","fa-solid fa-person-walking-with-cane","fa-solid fa-peseta-sign","fa-solid fa-peso-sign","fa-solid fa-phone","fa-solid fa-phone-flip","fa-solid fa-phone-slash","fa-solid fa-phone-volume","fa-solid fa-photo-film","fa-solid fa-piggy-bank","fa-solid fa-pills","fa-solid fa-pizza-slice","fa-solid fa-place-of-worship","fa-solid fa-plane","fa-solid fa-plane-arrival","fa-solid fa-plane-circle-check","fa-solid fa-plane-circle-exclamation","fa-solid fa-plane-circle-xmark","fa-solid fa-plane-departure","fa-solid fa-plane-lock","fa-solid fa-plane-slash","fa-solid fa-plane-up","fa-solid fa-plant-wilt","fa-solid fa-plate-wheat","fa-solid fa-play","fa-solid fa-plug","fa-solid fa-plug-circle-bolt","fa-solid fa-plug-circle-check","fa-solid fa-plug-circle-exclamation","fa-solid fa-plug-circle-minus","fa-solid fa-plug-circle-plus","fa-solid fa-plug-circle-xmark","fa-solid fa-plus","fa-solid fa-plus-minus","fa-solid fa-podcast","fa-solid fa-poo","fa-solid fa-poo-storm","fa-solid fa-poop","fa-solid fa-power-off","fa-solid fa-prescription","fa-solid fa-prescription-bottle","fa-solid fa-prescription-bottle-medical","fa-solid fa-print","fa-solid fa-pump-medical","fa-solid fa-pump-soap","fa-solid fa-puzzle-piece","fa-solid fa-q","fa-solid fa-qrcode","fa-solid fa-question","fa-solid fa-quote-left","fa-solid fa-quote-right","fa-solid fa-r","fa-solid fa-radiation","fa-solid fa-radio","fa-solid fa-rainbow","fa-solid fa-ranking-star","fa-solid fa-receipt","fa-solid fa-record-vinyl","fa-solid fa-rectangle-ad","fa-solid fa-rectangle-list","fa-solid fa-rectangle-xmark","fa-solid fa-recycle","fa-solid fa-registered","fa-solid fa-repeat","fa-solid fa-reply","fa-solid fa-reply-all","fa-solid fa-republican","fa-solid fa-restroom","fa-solid fa-retweet","fa-solid fa-ribbon","fa-solid fa-right-from-bracket","fa-solid fa-right-left","fa-solid fa-right-long","fa-solid fa-right-to-bracket","fa-solid fa-ring","fa-solid fa-road","fa-solid fa-road-barrier","fa-solid fa-road-bridge","fa-solid fa-road-circle-check","fa-solid fa-road-circle-exclamation","fa-solid fa-road-circle-xmark","fa-solid fa-road-lock","fa-solid fa-road-spikes","fa-solid fa-robot","fa-solid fa-rocket","fa-solid fa-rotate","fa-solid fa-rotate-left","fa-solid fa-rotate-right","fa-solid fa-route","fa-solid fa-rss","fa-solid fa-ruble-sign","fa-solid fa-rug","fa-solid fa-ruler","fa-solid fa-ruler-combined","fa-solid fa-ruler-horizontal","fa-solid fa-ruler-vertical","fa-solid fa-rupee-sign","fa-solid fa-rupiah-sign","fa-solid fa-s","fa-solid fa-sack-dollar","fa-solid fa-sack-xmark","fa-solid fa-sailboat","fa-solid fa-satellite","fa-solid fa-satellite-dish","fa-solid fa-scale-balanced","fa-solid fa-scale-unbalanced","fa-solid fa-scale-unbalanced-flip","fa-solid fa-school","fa-solid fa-school-circle-check","fa-solid fa-school-circle-exclamation","fa-solid fa-school-circle-xmark","fa-solid fa-school-flag","fa-solid fa-school-lock","fa-solid fa-scissors","fa-solid fa-screwdriver","fa-solid fa-screwdriver-wrench","fa-solid fa-scroll","fa-solid fa-scroll-torah","fa-solid fa-sd-card","fa-solid fa-section","fa-solid fa-seedling","fa-solid fa-septagon","fa-solid fa-server","fa-solid fa-shapes","fa-solid fa-share","fa-solid fa-share-from-square","fa-solid fa-share-nodes","fa-solid fa-sheet-plastic","fa-solid fa-shekel-sign","fa-solid fa-shield","fa-solid fa-shield-cat","fa-solid fa-shield-dog","fa-solid fa-shield-halved","fa-solid fa-shield-heart","fa-solid fa-shield-virus","fa-solid fa-ship","fa-solid fa-shirt","fa-solid fa-shoe-prints","fa-solid fa-shop","fa-solid fa-shop-lock","fa-solid fa-shop-slash","fa-solid fa-shower","fa-solid fa-shrimp","fa-solid fa-shuffle","fa-solid fa-shuttle-space","fa-solid fa-sign-hanging","fa-solid fa-signal","fa-solid fa-signature","fa-solid fa-signs-post","fa-solid fa-sim-card","fa-solid fa-single-quote-left","fa-solid fa-single-quote-right","fa-solid fa-sink","fa-solid fa-sitemap","fa-solid fa-skull","fa-solid fa-skull-crossbones","fa-solid fa-slash","fa-solid fa-sleigh","fa-solid fa-sliders","fa-solid fa-smog","fa-solid fa-smoking","fa-solid fa-snowflake","fa-solid fa-snowman","fa-solid fa-snowplow","fa-solid fa-soap","fa-solid fa-socks","fa-solid fa-solar-panel","fa-solid fa-sort","fa-solid fa-sort-down","fa-solid fa-sort-up","fa-solid fa-spa","fa-solid fa-spaghetti-monster-flying","fa-solid fa-spell-check","fa-solid fa-spider","fa-solid fa-spinner","fa-solid fa-spiral","fa-solid fa-splotch","fa-solid fa-spoon","fa-solid fa-spray-can","fa-solid fa-spray-can-sparkles","fa-solid fa-square","fa-solid fa-square-arrow-up-right","fa-solid fa-square-binary","fa-solid fa-square-caret-down","fa-solid fa-square-caret-left","fa-solid fa-square-caret-right","fa-solid fa-square-caret-up","fa-solid fa-square-check","fa-solid fa-square-envelope","fa-solid fa-square-full","fa-solid fa-square-h","fa-solid fa-square-minus","fa-solid fa-square-nfi","fa-solid fa-square-parking","fa-solid fa-square-pen","fa-solid fa-square-person-confined","fa-solid fa-square-phone","fa-solid fa-square-phone-flip","fa-solid fa-square-plus","fa-solid fa-square-poll-horizontal","fa-solid fa-square-poll-vertical","fa-solid fa-square-root-variable","fa-solid fa-square-rss","fa-solid fa-square-share-nodes","fa-solid fa-square-up-right","fa-solid fa-square-virus","fa-solid fa-square-xmark","fa-solid fa-staff-snake","fa-solid fa-stairs","fa-solid fa-stamp","fa-solid fa-stapler","fa-solid fa-star","fa-solid fa-star-and-crescent","fa-solid fa-star-half","fa-solid fa-star-half-stroke","fa-solid fa-star-of-david","fa-solid fa-star-of-life","fa-solid fa-sterling-sign","fa-solid fa-stethoscope","fa-solid fa-stop","fa-solid fa-stopwatch","fa-solid fa-stopwatch-20","fa-solid fa-store","fa-solid fa-store-slash","fa-solid fa-street-view","fa-solid fa-strikethrough","fa-solid fa-stroopwafel","fa-solid fa-subscript","fa-solid fa-suitcase","fa-solid fa-suitcase-medical","fa-solid fa-suitcase-rolling","fa-solid fa-sun","fa-solid fa-sun-plant-wilt","fa-solid fa-superscript","fa-solid fa-swatchbook","fa-solid fa-synagogue","fa-solid fa-syringe","fa-solid fa-t","fa-solid fa-table","fa-solid fa-table-cells","fa-solid fa-table-cells-column-lock","fa-solid fa-table-cells-large","fa-solid fa-table-cells-row-lock","fa-solid fa-table-cells-row-unlock","fa-solid fa-table-columns","fa-solid fa-table-list","fa-solid fa-table-tennis-paddle-ball","fa-solid fa-tablet","fa-solid fa-tablet-button","fa-solid fa-tablet-screen-button","fa-solid fa-tablets","fa-solid fa-tachograph-digital","fa-solid fa-tag","fa-solid fa-tags","fa-solid fa-tape","fa-solid fa-tarp","fa-solid fa-tarp-droplet","fa-solid fa-taxi","fa-solid fa-teeth","fa-solid fa-teeth-open","fa-solid fa-temperature-arrow-down","fa-solid fa-temperature-arrow-up","fa-solid fa-temperature-empty","fa-solid fa-temperature-full","fa-solid fa-temperature-half","fa-solid fa-temperature-high","fa-solid fa-temperature-low","fa-solid fa-temperature-quarter","fa-solid fa-temperature-three-quarters","fa-solid fa-tenge-sign","fa-solid fa-tent","fa-solid fa-tent-arrow-down-to-line","fa-solid fa-tent-arrow-left-right","fa-solid fa-tent-arrow-turn-left","fa-solid fa-tent-arrows-down","fa-solid fa-tents","fa-solid fa-terminal","fa-solid fa-text-height","fa-solid fa-text-slash","fa-solid fa-text-width","fa-solid fa-thermometer","fa-solid fa-thumbs-down","fa-solid fa-thumbs-up","fa-solid fa-thumbtack","fa-solid fa-thumbtack-slash","fa-solid fa-ticket","fa-solid fa-ticket-simple","fa-solid fa-timeline","fa-solid fa-toggle-off","fa-solid fa-toggle-on","fa-solid fa-toilet","fa-solid fa-toilet-paper","fa-solid fa-toilet-paper-slash","fa-solid fa-toilet-portable","fa-solid fa-toilets-portable","fa-solid fa-toolbox","fa-solid fa-tooth","fa-solid fa-torii-gate","fa-solid fa-tornado","fa-solid fa-tower-broadcast","fa-solid fa-tower-cell","fa-solid fa-tower-observation","fa-solid fa-tractor","fa-solid fa-trademark","fa-solid fa-traffic-light","fa-solid fa-trailer","fa-solid fa-train","fa-solid fa-train-subway","fa-solid fa-train-tram","fa-solid fa-transgender","fa-solid fa-trash","fa-solid fa-trash-arrow-up","fa-solid fa-trash-can","fa-solid fa-trash-can-arrow-up","fa-solid fa-tree","fa-solid fa-tree-city","fa-solid fa-triangle-exclamation","fa-solid fa-trophy","fa-solid fa-trowel","fa-solid fa-trowel-bricks","fa-solid fa-truck","fa-solid fa-truck-arrow-right","fa-solid fa-truck-droplet","fa-solid fa-truck-fast","fa-solid fa-truck-field","fa-solid fa-truck-field-un","fa-solid fa-truck-front","fa-solid fa-truck-medical","fa-solid fa-truck-monster","fa-solid fa-truck-moving","fa-solid fa-truck-pickup","fa-solid fa-truck-plane","fa-solid fa-truck-ramp-box","fa-solid fa-tty","fa-solid fa-turkish-lira-sign","fa-solid fa-turn-down","fa-solid fa-turn-up","fa-solid fa-tv","fa-solid fa-u","fa-solid fa-umbrella","fa-solid fa-umbrella-beach","fa-solid fa-underline","fa-solid fa-universal-access","fa-solid fa-unlock","fa-solid fa-unlock-keyhole","fa-solid fa-up-down","fa-solid fa-up-down-left-right","fa-solid fa-up-long","fa-solid fa-up-right-and-down-left-from-center","fa-solid fa-up-right-from-square","fa-solid fa-upload","fa-solid fa-user","fa-solid fa-user-astronaut","fa-solid fa-user-check","fa-solid fa-user-clock","fa-solid fa-user-doctor","fa-solid fa-user-gear","fa-solid fa-user-graduate","fa-solid fa-user-group","fa-solid fa-user-injured","fa-solid fa-user-lock","fa-solid fa-user-minus","fa-solid fa-user-ninja","fa-solid fa-user-nurse","fa-solid fa-user-pen","fa-solid fa-user-plus","fa-solid fa-user-secret","fa-solid fa-user-shield","fa-solid fa-user-slash","fa-solid fa-user-tag","fa-solid fa-user-tie","fa-solid fa-user-xmark","fa-solid fa-users","fa-solid fa-users-between-lines","fa-solid fa-users-gear","fa-solid fa-users-line","fa-solid fa-users-rays","fa-solid fa-users-rectangle","fa-solid fa-users-slash","fa-solid fa-users-viewfinder","fa-solid fa-utensils","fa-solid fa-v","fa-solid fa-van-shuttle","fa-solid fa-vault","fa-solid fa-venus","fa-solid fa-venus-double","fa-solid fa-venus-mars","fa-solid fa-vest","fa-solid fa-vest-patches","fa-solid fa-vial","fa-solid fa-vial-circle-check","fa-solid fa-vial-virus","fa-solid fa-vials","fa-solid fa-video","fa-solid fa-video-slash","fa-solid fa-vihara","fa-solid fa-virus","fa-solid fa-virus-covid","fa-solid fa-virus-covid-slash","fa-solid fa-virus-slash","fa-solid fa-viruses","fa-solid fa-voicemail","fa-solid fa-volcano","fa-solid fa-volleyball","fa-solid fa-volume-high","fa-solid fa-volume-low","fa-solid fa-volume-off","fa-solid fa-volume-xmark","fa-solid fa-vr-cardboard","fa-solid fa-w","fa-solid fa-walkie-talkie","fa-solid fa-wallet","fa-solid fa-wand-magic","fa-solid fa-wand-magic-sparkles","fa-solid fa-wand-sparkles","fa-solid fa-warehouse","fa-solid fa-water","fa-solid fa-water-ladder","fa-solid fa-wave-square","fa-solid fa-web-awesome","fa-solid fa-weight-hanging","fa-solid fa-weight-scale","fa-solid fa-wheat-awn","fa-solid fa-wheat-awn-circle-exclamation","fa-solid fa-wheelchair","fa-solid fa-wheelchair-move","fa-solid fa-whiskey-glass","fa-solid fa-wifi","fa-solid fa-wind","fa-solid fa-window-maximize","fa-solid fa-window-minimize","fa-solid fa-window-restore","fa-solid fa-wine-bottle","fa-solid fa-wine-glass","fa-solid fa-wine-glass-empty","fa-solid fa-won-sign","fa-solid fa-worm","fa-solid fa-wrench","fa-solid fa-x","fa-solid fa-x-ray","fa-solid fa-xmark","fa-solid fa-xmarks-lines","fa-solid fa-y","fa-solid fa-yen-sign","fa-solid fa-yin-yang","fa-solid fa-z"]');
var U = "top", ie = "bottom", se = "right", X = "left", Sa = "auto", vt = [U, ie, se, X], Ge = "start", ht = "end", so = "clippingParents", ki = "viewport", nt = "popper", oo = "reference", pi = /* @__PURE__ */ vt.reduce(function(a, e) {
  return a.concat([e + "-" + Ge, e + "-" + ht]);
}, []), Ci = /* @__PURE__ */ [].concat(vt, [Sa]).reduce(function(a, e) {
  return a.concat([e, e + "-" + Ge, e + "-" + ht]);
}, []), no = "beforeRead", ro = "read", fo = "afterRead", lo = "beforeMain", co = "main", uo = "afterMain", ho = "beforeWrite", po = "write", go = "afterWrite", mo = [no, ro, fo, lo, co, uo, ho, po, go];
function ve(a) {
  return a ? (a.nodeName || "").toLowerCase() : null;
}
function oe(a) {
  if (a == null)
    return window;
  if (a.toString() !== "[object Window]") {
    var e = a.ownerDocument;
    return e && e.defaultView || window;
  }
  return a;
}
function Ue(a) {
  var e = oe(a).Element;
  return a instanceof e || a instanceof Element;
}
function re(a) {
  var e = oe(a).HTMLElement;
  return a instanceof e || a instanceof HTMLElement;
}
function Si(a) {
  if (typeof ShadowRoot > "u")
    return !1;
  var e = oe(a).ShadowRoot;
  return a instanceof e || a instanceof ShadowRoot;
}
function Xn(a) {
  var e = a.state;
  Object.keys(e.elements).forEach(function(t) {
    var i = e.styles[t] || {}, s = e.attributes[t] || {}, o = e.elements[t];
    !re(o) || !ve(o) || (Object.assign(o.style, i), Object.keys(s).forEach(function(n) {
      var r = s[n];
      r === !1 ? o.removeAttribute(n) : o.setAttribute(n, r === !0 ? "" : r);
    }));
  });
}
function Qn(a) {
  var e = a.state, t = {
    popper: {
      position: e.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(e.elements.popper.style, t.popper), e.styles = t, e.elements.arrow && Object.assign(e.elements.arrow.style, t.arrow), function() {
    Object.keys(e.elements).forEach(function(i) {
      var s = e.elements[i], o = e.attributes[i] || {}, n = Object.keys(e.styles.hasOwnProperty(i) ? e.styles[i] : t[i]), r = n.reduce(function(f, l) {
        return f[l] = "", f;
      }, {});
      !re(s) || !ve(s) || (Object.assign(s.style, r), Object.keys(o).forEach(function(f) {
        s.removeAttribute(f);
      }));
    });
  };
}
const Di = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Xn,
  effect: Qn,
  requires: ["computeStyles"]
};
function me(a) {
  return a.split("-")[0];
}
var Ke = Math.max, ya = Math.min, pt = Math.round;
function gi() {
  var a = navigator.userAgentData;
  return a != null && a.brands && Array.isArray(a.brands) ? a.brands.map(function(e) {
    return e.brand + "/" + e.version;
  }).join(" ") : navigator.userAgent;
}
function bo() {
  return !/^((?!chrome|android).)*safari/i.test(gi());
}
function gt(a, e, t) {
  e === void 0 && (e = !1), t === void 0 && (t = !1);
  var i = a.getBoundingClientRect(), s = 1, o = 1;
  e && re(a) && (s = a.offsetWidth > 0 && pt(i.width) / a.offsetWidth || 1, o = a.offsetHeight > 0 && pt(i.height) / a.offsetHeight || 1);
  var n = Ue(a) ? oe(a) : window, r = n.visualViewport, f = !bo() && t, l = (i.left + (f && r ? r.offsetLeft : 0)) / s, d = (i.top + (f && r ? r.offsetTop : 0)) / o, c = i.width / s, g = i.height / o;
  return {
    width: c,
    height: g,
    top: d,
    right: l + c,
    bottom: d + g,
    left: l,
    x: l,
    y: d
  };
}
function Oi(a) {
  var e = gt(a), t = a.offsetWidth, i = a.offsetHeight;
  return Math.abs(e.width - t) <= 1 && (t = e.width), Math.abs(e.height - i) <= 1 && (i = e.height), {
    x: a.offsetLeft,
    y: a.offsetTop,
    width: t,
    height: i
  };
}
function _o(a, e) {
  var t = e.getRootNode && e.getRootNode();
  if (a.contains(e))
    return !0;
  if (t && Si(t)) {
    var i = e;
    do {
      if (i && a.isSameNode(i))
        return !0;
      i = i.parentNode || i.host;
    } while (i);
  }
  return !1;
}
function ke(a) {
  return oe(a).getComputedStyle(a);
}
function Zn(a) {
  return ["table", "td", "th"].indexOf(ve(a)) >= 0;
}
function Me(a) {
  return ((Ue(a) ? a.ownerDocument : (
    // $FlowFixMe[prop-missing]
    a.document
  )) || window.document).documentElement;
}
function Da(a) {
  return ve(a) === "html" ? a : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    a.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    a.parentNode || // DOM Element detected
    (Si(a) ? a.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Me(a)
  );
}
function rs(a) {
  return !re(a) || // https://github.com/popperjs/popper-core/issues/837
  ke(a).position === "fixed" ? null : a.offsetParent;
}
function Jn(a) {
  var e = /firefox/i.test(gi()), t = /Trident/i.test(gi());
  if (t && re(a)) {
    var i = ke(a);
    if (i.position === "fixed")
      return null;
  }
  var s = Da(a);
  for (Si(s) && (s = s.host); re(s) && ["html", "body"].indexOf(ve(s)) < 0; ) {
    var o = ke(s);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || e && o.willChange === "filter" || e && o.filter && o.filter !== "none")
      return s;
    s = s.parentNode;
  }
  return null;
}
function Vt(a) {
  for (var e = oe(a), t = rs(a); t && Zn(t) && ke(t).position === "static"; )
    t = rs(t);
  return t && (ve(t) === "html" || ve(t) === "body" && ke(t).position === "static") ? e : t || Jn(a) || e;
}
function Ni(a) {
  return ["top", "bottom"].indexOf(a) >= 0 ? "x" : "y";
}
function Pt(a, e, t) {
  return Ke(a, ya(e, t));
}
function er(a, e, t) {
  var i = Pt(a, e, t);
  return i > t ? t : i;
}
function vo() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Eo(a) {
  return Object.assign({}, vo(), a);
}
function wo(a, e) {
  return e.reduce(function(t, i) {
    return t[i] = a, t;
  }, {});
}
var tr = function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, {
    placement: t.placement
  })) : e, Eo(typeof e != "number" ? e : wo(e, vt));
};
function ar(a) {
  var e, t = a.state, i = a.name, s = a.options, o = t.elements.arrow, n = t.modifiersData.popperOffsets, r = me(t.placement), f = Ni(r), l = [X, se].indexOf(r) >= 0, d = l ? "height" : "width";
  if (!(!o || !n)) {
    var c = tr(s.padding, t), g = Oi(o), h = f === "y" ? U : X, b = f === "y" ? ie : se, m = t.rects.reference[d] + t.rects.reference[f] - n[f] - t.rects.popper[d], y = n[f] - t.rects.reference[f], k = Vt(o), A = k ? f === "y" ? k.clientHeight || 0 : k.clientWidth || 0 : 0, N = m / 2 - y / 2, v = c[h], S = A - g[d] - c[b], C = A / 2 - g[d] / 2 + N, x = Pt(v, C, S), R = f;
    t.modifiersData[i] = (e = {}, e[R] = x, e.centerOffset = x - C, e);
  }
}
function ir(a) {
  var e = a.state, t = a.options, i = t.element, s = i === void 0 ? "[data-popper-arrow]" : i;
  s != null && (typeof s == "string" && (s = e.elements.popper.querySelector(s), !s) || _o(e.elements.popper, s) && (e.elements.arrow = s));
}
const yo = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: ar,
  effect: ir,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function mt(a) {
  return a.split("-")[1];
}
var sr = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function or(a, e) {
  var t = a.x, i = a.y, s = e.devicePixelRatio || 1;
  return {
    x: pt(t * s) / s || 0,
    y: pt(i * s) / s || 0
  };
}
function fs(a) {
  var e, t = a.popper, i = a.popperRect, s = a.placement, o = a.variation, n = a.offsets, r = a.position, f = a.gpuAcceleration, l = a.adaptive, d = a.roundOffsets, c = a.isFixed, g = n.x, h = g === void 0 ? 0 : g, b = n.y, m = b === void 0 ? 0 : b, y = typeof d == "function" ? d({
    x: h,
    y: m
  }) : {
    x: h,
    y: m
  };
  h = y.x, m = y.y;
  var k = n.hasOwnProperty("x"), A = n.hasOwnProperty("y"), N = X, v = U, S = window;
  if (l) {
    var C = Vt(t), x = "clientHeight", R = "clientWidth";
    if (C === oe(t) && (C = Me(t), ke(C).position !== "static" && r === "absolute" && (x = "scrollHeight", R = "scrollWidth")), C = C, s === U || (s === X || s === se) && o === ht) {
      v = ie;
      var L = c && C === S && S.visualViewport ? S.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        C[x]
      );
      m -= L - i.height, m *= f ? 1 : -1;
    }
    if (s === X || (s === U || s === ie) && o === ht) {
      N = se;
      var I = c && C === S && S.visualViewport ? S.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        C[R]
      );
      h -= I - i.width, h *= f ? 1 : -1;
    }
  }
  var $ = Object.assign({
    position: r
  }, l && sr), F = d === !0 ? or({
    x: h,
    y: m
  }, oe(t)) : {
    x: h,
    y: m
  };
  if (h = F.x, m = F.y, f) {
    var P;
    return Object.assign({}, $, (P = {}, P[v] = A ? "0" : "", P[N] = k ? "0" : "", P.transform = (S.devicePixelRatio || 1) <= 1 ? "translate(" + h + "px, " + m + "px)" : "translate3d(" + h + "px, " + m + "px, 0)", P));
  }
  return Object.assign({}, $, (e = {}, e[v] = A ? m + "px" : "", e[N] = k ? h + "px" : "", e.transform = "", e));
}
function nr(a) {
  var e = a.state, t = a.options, i = t.gpuAcceleration, s = i === void 0 ? !0 : i, o = t.adaptive, n = o === void 0 ? !0 : o, r = t.roundOffsets, f = r === void 0 ? !0 : r, l = {
    placement: me(e.placement),
    variation: mt(e.placement),
    popper: e.elements.popper,
    popperRect: e.rects.popper,
    gpuAcceleration: s,
    isFixed: e.options.strategy === "fixed"
  };
  e.modifiersData.popperOffsets != null && (e.styles.popper = Object.assign({}, e.styles.popper, fs(Object.assign({}, l, {
    offsets: e.modifiersData.popperOffsets,
    position: e.options.strategy,
    adaptive: n,
    roundOffsets: f
  })))), e.modifiersData.arrow != null && (e.styles.arrow = Object.assign({}, e.styles.arrow, fs(Object.assign({}, l, {
    offsets: e.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: f
  })))), e.attributes.popper = Object.assign({}, e.attributes.popper, {
    "data-popper-placement": e.placement
  });
}
const Li = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: nr,
  data: {}
};
var Jt = {
  passive: !0
};
function rr(a) {
  var e = a.state, t = a.instance, i = a.options, s = i.scroll, o = s === void 0 ? !0 : s, n = i.resize, r = n === void 0 ? !0 : n, f = oe(e.elements.popper), l = [].concat(e.scrollParents.reference, e.scrollParents.popper);
  return o && l.forEach(function(d) {
    d.addEventListener("scroll", t.update, Jt);
  }), r && f.addEventListener("resize", t.update, Jt), function() {
    o && l.forEach(function(d) {
      d.removeEventListener("scroll", t.update, Jt);
    }), r && f.removeEventListener("resize", t.update, Jt);
  };
}
const xi = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: rr,
  data: {}
};
var fr = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function ha(a) {
  return a.replace(/left|right|bottom|top/g, function(e) {
    return fr[e];
  });
}
var lr = {
  start: "end",
  end: "start"
};
function ls(a) {
  return a.replace(/start|end/g, function(e) {
    return lr[e];
  });
}
function Ii(a) {
  var e = oe(a), t = e.pageXOffset, i = e.pageYOffset;
  return {
    scrollLeft: t,
    scrollTop: i
  };
}
function $i(a) {
  return gt(Me(a)).left + Ii(a).scrollLeft;
}
function dr(a, e) {
  var t = oe(a), i = Me(a), s = t.visualViewport, o = i.clientWidth, n = i.clientHeight, r = 0, f = 0;
  if (s) {
    o = s.width, n = s.height;
    var l = bo();
    (l || !l && e === "fixed") && (r = s.offsetLeft, f = s.offsetTop);
  }
  return {
    width: o,
    height: n,
    x: r + $i(a),
    y: f
  };
}
function cr(a) {
  var e, t = Me(a), i = Ii(a), s = (e = a.ownerDocument) == null ? void 0 : e.body, o = Ke(t.scrollWidth, t.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0), n = Ke(t.scrollHeight, t.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0), r = -i.scrollLeft + $i(a), f = -i.scrollTop;
  return ke(s || t).direction === "rtl" && (r += Ke(t.clientWidth, s ? s.clientWidth : 0) - o), {
    width: o,
    height: n,
    x: r,
    y: f
  };
}
function Pi(a) {
  var e = ke(a), t = e.overflow, i = e.overflowX, s = e.overflowY;
  return /auto|scroll|overlay|hidden/.test(t + s + i);
}
function To(a) {
  return ["html", "body", "#document"].indexOf(ve(a)) >= 0 ? a.ownerDocument.body : re(a) && Pi(a) ? a : To(Da(a));
}
function Mt(a, e) {
  var t;
  e === void 0 && (e = []);
  var i = To(a), s = i === ((t = a.ownerDocument) == null ? void 0 : t.body), o = oe(i), n = s ? [o].concat(o.visualViewport || [], Pi(i) ? i : []) : i, r = e.concat(n);
  return s ? r : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    r.concat(Mt(Da(n)))
  );
}
function mi(a) {
  return Object.assign({}, a, {
    left: a.x,
    top: a.y,
    right: a.x + a.width,
    bottom: a.y + a.height
  });
}
function ur(a, e) {
  var t = gt(a, !1, e === "fixed");
  return t.top = t.top + a.clientTop, t.left = t.left + a.clientLeft, t.bottom = t.top + a.clientHeight, t.right = t.left + a.clientWidth, t.width = a.clientWidth, t.height = a.clientHeight, t.x = t.left, t.y = t.top, t;
}
function ds(a, e, t) {
  return e === ki ? mi(dr(a, t)) : Ue(e) ? ur(e, t) : mi(cr(Me(a)));
}
function hr(a) {
  var e = Mt(Da(a)), t = ["absolute", "fixed"].indexOf(ke(a).position) >= 0, i = t && re(a) ? Vt(a) : a;
  return Ue(i) ? e.filter(function(s) {
    return Ue(s) && _o(s, i) && ve(s) !== "body";
  }) : [];
}
function pr(a, e, t, i) {
  var s = e === "clippingParents" ? hr(a) : [].concat(e), o = [].concat(s, [t]), n = o[0], r = o.reduce(function(f, l) {
    var d = ds(a, l, i);
    return f.top = Ke(d.top, f.top), f.right = ya(d.right, f.right), f.bottom = ya(d.bottom, f.bottom), f.left = Ke(d.left, f.left), f;
  }, ds(a, n, i));
  return r.width = r.right - r.left, r.height = r.bottom - r.top, r.x = r.left, r.y = r.top, r;
}
function Ao(a) {
  var e = a.reference, t = a.element, i = a.placement, s = i ? me(i) : null, o = i ? mt(i) : null, n = e.x + e.width / 2 - t.width / 2, r = e.y + e.height / 2 - t.height / 2, f;
  switch (s) {
    case U:
      f = {
        x: n,
        y: e.y - t.height
      };
      break;
    case ie:
      f = {
        x: n,
        y: e.y + e.height
      };
      break;
    case se:
      f = {
        x: e.x + e.width,
        y: r
      };
      break;
    case X:
      f = {
        x: e.x - t.width,
        y: r
      };
      break;
    default:
      f = {
        x: e.x,
        y: e.y
      };
  }
  var l = s ? Ni(s) : null;
  if (l != null) {
    var d = l === "y" ? "height" : "width";
    switch (o) {
      case Ge:
        f[l] = f[l] - (e[d] / 2 - t[d] / 2);
        break;
      case ht:
        f[l] = f[l] + (e[d] / 2 - t[d] / 2);
        break;
    }
  }
  return f;
}
function bt(a, e) {
  e === void 0 && (e = {});
  var t = e, i = t.placement, s = i === void 0 ? a.placement : i, o = t.strategy, n = o === void 0 ? a.strategy : o, r = t.boundary, f = r === void 0 ? so : r, l = t.rootBoundary, d = l === void 0 ? ki : l, c = t.elementContext, g = c === void 0 ? nt : c, h = t.altBoundary, b = h === void 0 ? !1 : h, m = t.padding, y = m === void 0 ? 0 : m, k = Eo(typeof y != "number" ? y : wo(y, vt)), A = g === nt ? oo : nt, N = a.rects.popper, v = a.elements[b ? A : g], S = pr(Ue(v) ? v : v.contextElement || Me(a.elements.popper), f, d, n), C = gt(a.elements.reference), x = Ao({
    reference: C,
    element: N,
    placement: s
  }), R = mi(Object.assign({}, N, x)), L = g === nt ? R : C, I = {
    top: S.top - L.top + k.top,
    bottom: L.bottom - S.bottom + k.bottom,
    left: S.left - L.left + k.left,
    right: L.right - S.right + k.right
  }, $ = a.modifiersData.offset;
  if (g === nt && $) {
    var F = $[s];
    Object.keys(I).forEach(function(P) {
      var K = [se, ie].indexOf(P) >= 0 ? 1 : -1, ee = [U, ie].indexOf(P) >= 0 ? "y" : "x";
      I[P] += F[ee] * K;
    });
  }
  return I;
}
function gr(a, e) {
  e === void 0 && (e = {});
  var t = e, i = t.placement, s = t.boundary, o = t.rootBoundary, n = t.padding, r = t.flipVariations, f = t.allowedAutoPlacements, l = f === void 0 ? Ci : f, d = mt(i), c = d ? r ? pi : pi.filter(function(b) {
    return mt(b) === d;
  }) : vt, g = c.filter(function(b) {
    return l.indexOf(b) >= 0;
  });
  g.length === 0 && (g = c);
  var h = g.reduce(function(b, m) {
    return b[m] = bt(a, {
      placement: m,
      boundary: s,
      rootBoundary: o,
      padding: n
    })[me(m)], b;
  }, {});
  return Object.keys(h).sort(function(b, m) {
    return h[b] - h[m];
  });
}
function mr(a) {
  if (me(a) === Sa)
    return [];
  var e = ha(a);
  return [ls(a), e, ls(e)];
}
function br(a) {
  var e = a.state, t = a.options, i = a.name;
  if (!e.modifiersData[i]._skip) {
    for (var s = t.mainAxis, o = s === void 0 ? !0 : s, n = t.altAxis, r = n === void 0 ? !0 : n, f = t.fallbackPlacements, l = t.padding, d = t.boundary, c = t.rootBoundary, g = t.altBoundary, h = t.flipVariations, b = h === void 0 ? !0 : h, m = t.allowedAutoPlacements, y = e.options.placement, k = me(y), A = k === y, N = f || (A || !b ? [ha(y)] : mr(y)), v = [y].concat(N).reduce(function(et, De) {
      return et.concat(me(De) === Sa ? gr(e, {
        placement: De,
        boundary: d,
        rootBoundary: c,
        padding: l,
        flipVariations: b,
        allowedAutoPlacements: m
      }) : De);
    }, []), S = e.rects.reference, C = e.rects.popper, x = /* @__PURE__ */ new Map(), R = !0, L = v[0], I = 0; I < v.length; I++) {
      var $ = v[I], F = me($), P = mt($) === Ge, K = [U, ie].indexOf(F) >= 0, ee = K ? "width" : "height", H = bt(e, {
        placement: $,
        boundary: d,
        rootBoundary: c,
        altBoundary: g,
        padding: l
      }), z = K ? P ? se : X : P ? ie : U;
      S[ee] > C[ee] && (z = ha(z));
      var pe = ha(z), Ee = [];
      if (o && Ee.push(H[F] <= 0), r && Ee.push(H[z] <= 0, H[pe] <= 0), Ee.every(function(et) {
        return et;
      })) {
        L = $, R = !1;
        break;
      }
      x.set($, Ee);
    }
    if (R)
      for (var Tt = b ? 3 : 1, Je = function(De) {
        var At = v.find(function(Yt) {
          var Ve = x.get(Yt);
          if (Ve)
            return Ve.slice(0, De).every(function(Pa) {
              return Pa;
            });
        });
        if (At)
          return L = At, "break";
      }, He = Tt; He > 0; He--) {
        var zt = Je(He);
        if (zt === "break") break;
      }
    e.placement !== L && (e.modifiersData[i]._skip = !0, e.placement = L, e.reset = !0);
  }
}
const ko = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: br,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function cs(a, e, t) {
  return t === void 0 && (t = {
    x: 0,
    y: 0
  }), {
    top: a.top - e.height - t.y,
    right: a.right - e.width + t.x,
    bottom: a.bottom - e.height + t.y,
    left: a.left - e.width - t.x
  };
}
function us(a) {
  return [U, se, ie, X].some(function(e) {
    return a[e] >= 0;
  });
}
function _r(a) {
  var e = a.state, t = a.name, i = e.rects.reference, s = e.rects.popper, o = e.modifiersData.preventOverflow, n = bt(e, {
    elementContext: "reference"
  }), r = bt(e, {
    altBoundary: !0
  }), f = cs(n, i), l = cs(r, s, o), d = us(f), c = us(l);
  e.modifiersData[t] = {
    referenceClippingOffsets: f,
    popperEscapeOffsets: l,
    isReferenceHidden: d,
    hasPopperEscaped: c
  }, e.attributes.popper = Object.assign({}, e.attributes.popper, {
    "data-popper-reference-hidden": d,
    "data-popper-escaped": c
  });
}
const Co = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: _r
};
function vr(a, e, t) {
  var i = me(a), s = [X, U].indexOf(i) >= 0 ? -1 : 1, o = typeof t == "function" ? t(Object.assign({}, e, {
    placement: a
  })) : t, n = o[0], r = o[1];
  return n = n || 0, r = (r || 0) * s, [X, se].indexOf(i) >= 0 ? {
    x: r,
    y: n
  } : {
    x: n,
    y: r
  };
}
function Er(a) {
  var e = a.state, t = a.options, i = a.name, s = t.offset, o = s === void 0 ? [0, 0] : s, n = Ci.reduce(function(d, c) {
    return d[c] = vr(c, e.rects, o), d;
  }, {}), r = n[e.placement], f = r.x, l = r.y;
  e.modifiersData.popperOffsets != null && (e.modifiersData.popperOffsets.x += f, e.modifiersData.popperOffsets.y += l), e.modifiersData[i] = n;
}
const So = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Er
};
function wr(a) {
  var e = a.state, t = a.name;
  e.modifiersData[t] = Ao({
    reference: e.rects.reference,
    element: e.rects.popper,
    placement: e.placement
  });
}
const Mi = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: wr,
  data: {}
};
function yr(a) {
  return a === "x" ? "y" : "x";
}
function Tr(a) {
  var e = a.state, t = a.options, i = a.name, s = t.mainAxis, o = s === void 0 ? !0 : s, n = t.altAxis, r = n === void 0 ? !1 : n, f = t.boundary, l = t.rootBoundary, d = t.altBoundary, c = t.padding, g = t.tether, h = g === void 0 ? !0 : g, b = t.tetherOffset, m = b === void 0 ? 0 : b, y = bt(e, {
    boundary: f,
    rootBoundary: l,
    padding: c,
    altBoundary: d
  }), k = me(e.placement), A = mt(e.placement), N = !A, v = Ni(k), S = yr(v), C = e.modifiersData.popperOffsets, x = e.rects.reference, R = e.rects.popper, L = typeof m == "function" ? m(Object.assign({}, e.rects, {
    placement: e.placement
  })) : m, I = typeof L == "number" ? {
    mainAxis: L,
    altAxis: L
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, L), $ = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null, F = {
    x: 0,
    y: 0
  };
  if (C) {
    if (o) {
      var P, K = v === "y" ? U : X, ee = v === "y" ? ie : se, H = v === "y" ? "height" : "width", z = C[v], pe = z + y[K], Ee = z - y[ee], Tt = h ? -R[H] / 2 : 0, Je = A === Ge ? x[H] : R[H], He = A === Ge ? -R[H] : -x[H], zt = e.elements.arrow, et = h && zt ? Oi(zt) : {
        width: 0,
        height: 0
      }, De = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : vo(), At = De[K], Yt = De[ee], Ve = Pt(0, x[H], et[H]), Pa = N ? x[H] / 2 - Tt - Ve - At - I.mainAxis : Je - Ve - At - I.mainAxis, nn = N ? -x[H] / 2 + Tt + Ve + Yt + I.mainAxis : He + Ve + Yt + I.mainAxis, Ma = e.elements.arrow && Vt(e.elements.arrow), rn = Ma ? v === "y" ? Ma.clientTop || 0 : Ma.clientLeft || 0 : 0, Fi = (P = $?.[v]) != null ? P : 0, fn = z + Pa - Fi - rn, ln = z + nn - Fi, Wi = Pt(h ? ya(pe, fn) : pe, z, h ? Ke(Ee, ln) : Ee);
      C[v] = Wi, F[v] = Wi - z;
    }
    if (r) {
      var zi, dn = v === "x" ? U : X, cn = v === "x" ? ie : se, qe = C[S], Kt = S === "y" ? "height" : "width", Yi = qe + y[dn], Ki = qe - y[cn], Ra = [U, X].indexOf(k) !== -1, Gi = (zi = $?.[S]) != null ? zi : 0, Ui = Ra ? Yi : qe - x[Kt] - R[Kt] - Gi + I.altAxis, Xi = Ra ? qe + x[Kt] + R[Kt] - Gi - I.altAxis : Ki, Qi = h && Ra ? er(Ui, qe, Xi) : Pt(h ? Ui : Yi, qe, h ? Xi : Ki);
      C[S] = Qi, F[S] = Qi - qe;
    }
    e.modifiersData[i] = F;
  }
}
const Do = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Tr,
  requiresIfExists: ["offset"]
};
function Ar(a) {
  return {
    scrollLeft: a.scrollLeft,
    scrollTop: a.scrollTop
  };
}
function kr(a) {
  return a === oe(a) || !re(a) ? Ii(a) : Ar(a);
}
function Cr(a) {
  var e = a.getBoundingClientRect(), t = pt(e.width) / a.offsetWidth || 1, i = pt(e.height) / a.offsetHeight || 1;
  return t !== 1 || i !== 1;
}
function Sr(a, e, t) {
  t === void 0 && (t = !1);
  var i = re(e), s = re(e) && Cr(e), o = Me(e), n = gt(a, s, t), r = {
    scrollLeft: 0,
    scrollTop: 0
  }, f = {
    x: 0,
    y: 0
  };
  return (i || !i && !t) && ((ve(e) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Pi(o)) && (r = kr(e)), re(e) ? (f = gt(e, !0), f.x += e.clientLeft, f.y += e.clientTop) : o && (f.x = $i(o))), {
    x: n.left + r.scrollLeft - f.x,
    y: n.top + r.scrollTop - f.y,
    width: n.width,
    height: n.height
  };
}
function Dr(a) {
  var e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Set(), i = [];
  a.forEach(function(o) {
    e.set(o.name, o);
  });
  function s(o) {
    t.add(o.name);
    var n = [].concat(o.requires || [], o.requiresIfExists || []);
    n.forEach(function(r) {
      if (!t.has(r)) {
        var f = e.get(r);
        f && s(f);
      }
    }), i.push(o);
  }
  return a.forEach(function(o) {
    t.has(o.name) || s(o);
  }), i;
}
function Or(a) {
  var e = Dr(a);
  return mo.reduce(function(t, i) {
    return t.concat(e.filter(function(s) {
      return s.phase === i;
    }));
  }, []);
}
function Nr(a) {
  var e;
  return function() {
    return e || (e = new Promise(function(t) {
      Promise.resolve().then(function() {
        e = void 0, t(a());
      });
    })), e;
  };
}
function Lr(a) {
  var e = a.reduce(function(t, i) {
    var s = t[i.name];
    return t[i.name] = s ? Object.assign({}, s, i, {
      options: Object.assign({}, s.options, i.options),
      data: Object.assign({}, s.data, i.data)
    }) : i, t;
  }, {});
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}
var hs = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function ps() {
  for (var a = arguments.length, e = new Array(a), t = 0; t < a; t++)
    e[t] = arguments[t];
  return !e.some(function(i) {
    return !(i && typeof i.getBoundingClientRect == "function");
  });
}
function Oa(a) {
  a === void 0 && (a = {});
  var e = a, t = e.defaultModifiers, i = t === void 0 ? [] : t, s = e.defaultOptions, o = s === void 0 ? hs : s;
  return function(r, f, l) {
    l === void 0 && (l = o);
    var d = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, hs, o),
      modifiersData: {},
      elements: {
        reference: r,
        popper: f
      },
      attributes: {},
      styles: {}
    }, c = [], g = !1, h = {
      state: d,
      setOptions: function(k) {
        var A = typeof k == "function" ? k(d.options) : k;
        m(), d.options = Object.assign({}, o, d.options, A), d.scrollParents = {
          reference: Ue(r) ? Mt(r) : r.contextElement ? Mt(r.contextElement) : [],
          popper: Mt(f)
        };
        var N = Or(Lr([].concat(i, d.options.modifiers)));
        return d.orderedModifiers = N.filter(function(v) {
          return v.enabled;
        }), b(), h.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!g) {
          var k = d.elements, A = k.reference, N = k.popper;
          if (ps(A, N)) {
            d.rects = {
              reference: Sr(A, Vt(N), d.options.strategy === "fixed"),
              popper: Oi(N)
            }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(I) {
              return d.modifiersData[I.name] = Object.assign({}, I.data);
            });
            for (var v = 0; v < d.orderedModifiers.length; v++) {
              if (d.reset === !0) {
                d.reset = !1, v = -1;
                continue;
              }
              var S = d.orderedModifiers[v], C = S.fn, x = S.options, R = x === void 0 ? {} : x, L = S.name;
              typeof C == "function" && (d = C({
                state: d,
                options: R,
                name: L,
                instance: h
              }) || d);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Nr(function() {
        return new Promise(function(y) {
          h.forceUpdate(), y(d);
        });
      }),
      destroy: function() {
        m(), g = !0;
      }
    };
    if (!ps(r, f))
      return h;
    h.setOptions(l).then(function(y) {
      !g && l.onFirstUpdate && l.onFirstUpdate(y);
    });
    function b() {
      d.orderedModifiers.forEach(function(y) {
        var k = y.name, A = y.options, N = A === void 0 ? {} : A, v = y.effect;
        if (typeof v == "function") {
          var S = v({
            state: d,
            name: k,
            instance: h,
            options: N
          }), C = function() {
          };
          c.push(S || C);
        }
      });
    }
    function m() {
      c.forEach(function(y) {
        return y();
      }), c = [];
    }
    return h;
  };
}
var xr = /* @__PURE__ */ Oa(), Ir = [xi, Mi, Li, Di], $r = /* @__PURE__ */ Oa({
  defaultModifiers: Ir
}), Pr = [xi, Mi, Li, Di, So, ko, Do, yo, Co], Ri = /* @__PURE__ */ Oa({
  defaultModifiers: Pr
});
const Oo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  afterMain: uo,
  afterRead: fo,
  afterWrite: go,
  applyStyles: Di,
  arrow: yo,
  auto: Sa,
  basePlacements: vt,
  beforeMain: lo,
  beforeRead: no,
  beforeWrite: ho,
  bottom: ie,
  clippingParents: so,
  computeStyles: Li,
  createPopper: Ri,
  createPopperBase: xr,
  createPopperLite: $r,
  detectOverflow: bt,
  end: ht,
  eventListeners: xi,
  flip: ko,
  hide: Co,
  left: X,
  main: co,
  modifierPhases: mo,
  offset: So,
  placements: Ci,
  popper: nt,
  popperGenerator: Oa,
  popperOffsets: Mi,
  preventOverflow: Do,
  read: ro,
  reference: oo,
  right: se,
  start: Ge,
  top: U,
  variationPlacements: pi,
  viewport: ki,
  write: po
}, Symbol.toStringTag, { value: "Module" }));
/*!
  * Bootstrap v5.3.7 (https://getbootstrap.com/)
  * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
const Oe = /* @__PURE__ */ new Map(), Ka = {
  set(a, e, t) {
    Oe.has(a) || Oe.set(a, /* @__PURE__ */ new Map());
    const i = Oe.get(a);
    if (!i.has(e) && i.size !== 0) {
      console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(i.keys())[0]}.`);
      return;
    }
    i.set(e, t);
  },
  get(a, e) {
    return Oe.has(a) && Oe.get(a).get(e) || null;
  },
  remove(a, e) {
    if (!Oe.has(a))
      return;
    const t = Oe.get(a);
    t.delete(e), t.size === 0 && Oe.delete(a);
  }
}, Mr = 1e6, Rr = 1e3, bi = "transitionend", No = (a) => (a && window.CSS && window.CSS.escape && (a = a.replace(/#([^\s"#']+)/g, (e, t) => `#${CSS.escape(t)}`)), a), Br = (a) => a == null ? `${a}` : Object.prototype.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase(), Hr = (a) => {
  do
    a += Math.floor(Math.random() * Mr);
  while (document.getElementById(a));
  return a;
}, Vr = (a) => {
  if (!a)
    return 0;
  let {
    transitionDuration: e,
    transitionDelay: t
  } = window.getComputedStyle(a);
  const i = Number.parseFloat(e), s = Number.parseFloat(t);
  return !i && !s ? 0 : (e = e.split(",")[0], t = t.split(",")[0], (Number.parseFloat(e) + Number.parseFloat(t)) * Rr);
}, Lo = (a) => {
  a.dispatchEvent(new Event(bi));
}, ye = (a) => !a || typeof a != "object" ? !1 : (typeof a.jquery < "u" && (a = a[0]), typeof a.nodeType < "u"), Ie = (a) => ye(a) ? a.jquery ? a[0] : a : typeof a == "string" && a.length > 0 ? document.querySelector(No(a)) : null, Et = (a) => {
  if (!ye(a) || a.getClientRects().length === 0)
    return !1;
  const e = getComputedStyle(a).getPropertyValue("visibility") === "visible", t = a.closest("details:not([open])");
  if (!t)
    return e;
  if (t !== a) {
    const i = a.closest("summary");
    if (i && i.parentNode !== t || i === null)
      return !1;
  }
  return e;
}, $e = (a) => !a || a.nodeType !== Node.ELEMENT_NODE || a.classList.contains("disabled") ? !0 : typeof a.disabled < "u" ? a.disabled : a.hasAttribute("disabled") && a.getAttribute("disabled") !== "false", xo = (a) => {
  if (!document.documentElement.attachShadow)
    return null;
  if (typeof a.getRootNode == "function") {
    const e = a.getRootNode();
    return e instanceof ShadowRoot ? e : null;
  }
  return a instanceof ShadowRoot ? a : a.parentNode ? xo(a.parentNode) : null;
}, Ta = () => {
}, qt = (a) => {
  a.offsetHeight;
}, Io = () => window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null, Ga = [], qr = (a) => {
  document.readyState === "loading" ? (Ga.length || document.addEventListener("DOMContentLoaded", () => {
    for (const e of Ga)
      e();
  }), Ga.push(a)) : a();
}, fe = () => document.documentElement.dir === "rtl", de = (a) => {
  qr(() => {
    const e = Io();
    if (e) {
      const t = a.NAME, i = e.fn[t];
      e.fn[t] = a.jQueryInterface, e.fn[t].Constructor = a, e.fn[t].noConflict = () => (e.fn[t] = i, a.jQueryInterface);
    }
  });
}, J = (a, e = [], t = a) => typeof a == "function" ? a.call(...e) : t, $o = (a, e, t = !0) => {
  if (!t) {
    J(a);
    return;
  }
  const s = Vr(e) + 5;
  let o = !1;
  const n = ({
    target: r
  }) => {
    r === e && (o = !0, e.removeEventListener(bi, n), J(a));
  };
  e.addEventListener(bi, n), setTimeout(() => {
    o || Lo(e);
  }, s);
}, Bi = (a, e, t, i) => {
  const s = a.length;
  let o = a.indexOf(e);
  return o === -1 ? !t && i ? a[s - 1] : a[0] : (o += t ? 1 : -1, i && (o = (o + s) % s), a[Math.max(0, Math.min(o, s - 1))]);
}, jr = /[^.]*(?=\..*)\.|.*/, Fr = /\..*/, Wr = /::\d+$/, Ua = {};
let gs = 1;
const Po = {
  mouseenter: "mouseover",
  mouseleave: "mouseout"
}, zr = /* @__PURE__ */ new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
function Mo(a, e) {
  return e && `${e}::${gs++}` || a.uidEvent || gs++;
}
function Ro(a) {
  const e = Mo(a);
  return a.uidEvent = e, Ua[e] = Ua[e] || {}, Ua[e];
}
function Yr(a, e) {
  return function t(i) {
    return Hi(i, {
      delegateTarget: a
    }), t.oneOff && u.off(a, i.type, e), e.apply(a, [i]);
  };
}
function Kr(a, e, t) {
  return function i(s) {
    const o = a.querySelectorAll(e);
    for (let {
      target: n
    } = s; n && n !== this; n = n.parentNode)
      for (const r of o)
        if (r === n)
          return Hi(s, {
            delegateTarget: n
          }), i.oneOff && u.off(a, s.type, e, t), t.apply(n, [s]);
  };
}
function Bo(a, e, t = null) {
  return Object.values(a).find((i) => i.callable === e && i.delegationSelector === t);
}
function Ho(a, e, t) {
  const i = typeof e == "string", s = i ? t : e || t;
  let o = Vo(a);
  return zr.has(o) || (o = a), [i, s, o];
}
function ms(a, e, t, i, s) {
  if (typeof e != "string" || !a)
    return;
  let [o, n, r] = Ho(e, t, i);
  e in Po && (n = ((b) => function(m) {
    if (!m.relatedTarget || m.relatedTarget !== m.delegateTarget && !m.delegateTarget.contains(m.relatedTarget))
      return b.call(this, m);
  })(n));
  const f = Ro(a), l = f[r] || (f[r] = {}), d = Bo(l, n, o ? t : null);
  if (d) {
    d.oneOff = d.oneOff && s;
    return;
  }
  const c = Mo(n, e.replace(jr, "")), g = o ? Kr(a, t, n) : Yr(a, n);
  g.delegationSelector = o ? t : null, g.callable = n, g.oneOff = s, g.uidEvent = c, l[c] = g, a.addEventListener(r, g, o);
}
function _i(a, e, t, i, s) {
  const o = Bo(e[t], i, s);
  o && (a.removeEventListener(t, o, !!s), delete e[t][o.uidEvent]);
}
function Gr(a, e, t, i) {
  const s = e[t] || {};
  for (const [o, n] of Object.entries(s))
    o.includes(i) && _i(a, e, t, n.callable, n.delegationSelector);
}
function Vo(a) {
  return a = a.replace(Fr, ""), Po[a] || a;
}
const u = {
  on(a, e, t, i) {
    ms(a, e, t, i, !1);
  },
  one(a, e, t, i) {
    ms(a, e, t, i, !0);
  },
  off(a, e, t, i) {
    if (typeof e != "string" || !a)
      return;
    const [s, o, n] = Ho(e, t, i), r = n !== e, f = Ro(a), l = f[n] || {}, d = e.startsWith(".");
    if (typeof o < "u") {
      if (!Object.keys(l).length)
        return;
      _i(a, f, n, o, s ? t : null);
      return;
    }
    if (d)
      for (const c of Object.keys(f))
        Gr(a, f, c, e.slice(1));
    for (const [c, g] of Object.entries(l)) {
      const h = c.replace(Wr, "");
      (!r || e.includes(h)) && _i(a, f, n, g.callable, g.delegationSelector);
    }
  },
  trigger(a, e, t) {
    if (typeof e != "string" || !a)
      return null;
    const i = Io(), s = Vo(e), o = e !== s;
    let n = null, r = !0, f = !0, l = !1;
    o && i && (n = i.Event(e, t), i(a).trigger(n), r = !n.isPropagationStopped(), f = !n.isImmediatePropagationStopped(), l = n.isDefaultPrevented());
    const d = Hi(new Event(e, {
      bubbles: r,
      cancelable: !0
    }), t);
    return l && d.preventDefault(), f && a.dispatchEvent(d), d.defaultPrevented && n && n.preventDefault(), d;
  }
};
function Hi(a, e = {}) {
  for (const [t, i] of Object.entries(e))
    try {
      a[t] = i;
    } catch {
      Object.defineProperty(a, t, {
        configurable: !0,
        get() {
          return i;
        }
      });
    }
  return a;
}
function bs(a) {
  if (a === "true")
    return !0;
  if (a === "false")
    return !1;
  if (a === Number(a).toString())
    return Number(a);
  if (a === "" || a === "null")
    return null;
  if (typeof a != "string")
    return a;
  try {
    return JSON.parse(decodeURIComponent(a));
  } catch {
    return a;
  }
}
function Xa(a) {
  return a.replace(/[A-Z]/g, (e) => `-${e.toLowerCase()}`);
}
const Te = {
  setDataAttribute(a, e, t) {
    a.setAttribute(`data-bs-${Xa(e)}`, t);
  },
  removeDataAttribute(a, e) {
    a.removeAttribute(`data-bs-${Xa(e)}`);
  },
  getDataAttributes(a) {
    if (!a)
      return {};
    const e = {}, t = Object.keys(a.dataset).filter((i) => i.startsWith("bs") && !i.startsWith("bsConfig"));
    for (const i of t) {
      let s = i.replace(/^bs/, "");
      s = s.charAt(0).toLowerCase() + s.slice(1), e[s] = bs(a.dataset[i]);
    }
    return e;
  },
  getDataAttribute(a, e) {
    return bs(a.getAttribute(`data-bs-${Xa(e)}`));
  }
};
class jt {
  // Getters
  static get Default() {
    return {};
  }
  static get DefaultType() {
    return {};
  }
  static get NAME() {
    throw new Error('You have to implement the static method "NAME", for each component!');
  }
  _getConfig(e) {
    return e = this._mergeConfigObj(e), e = this._configAfterMerge(e), this._typeCheckConfig(e), e;
  }
  _configAfterMerge(e) {
    return e;
  }
  _mergeConfigObj(e, t) {
    const i = ye(t) ? Te.getDataAttribute(t, "config") : {};
    return {
      ...this.constructor.Default,
      ...typeof i == "object" ? i : {},
      ...ye(t) ? Te.getDataAttributes(t) : {},
      ...typeof e == "object" ? e : {}
    };
  }
  _typeCheckConfig(e, t = this.constructor.DefaultType) {
    for (const [i, s] of Object.entries(t)) {
      const o = e[i], n = ye(o) ? "element" : Br(o);
      if (!new RegExp(s).test(n))
        throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${i}" provided type "${n}" but expected type "${s}".`);
    }
  }
}
const Ur = "5.3.7";
class he extends jt {
  constructor(e, t) {
    super(), e = Ie(e), e && (this._element = e, this._config = this._getConfig(t), Ka.set(this._element, this.constructor.DATA_KEY, this));
  }
  // Public
  dispose() {
    Ka.remove(this._element, this.constructor.DATA_KEY), u.off(this._element, this.constructor.EVENT_KEY);
    for (const e of Object.getOwnPropertyNames(this))
      this[e] = null;
  }
  // Private
  _queueCallback(e, t, i = !0) {
    $o(e, t, i);
  }
  _getConfig(e) {
    return e = this._mergeConfigObj(e, this._element), e = this._configAfterMerge(e), this._typeCheckConfig(e), e;
  }
  // Static
  static getInstance(e) {
    return Ka.get(Ie(e), this.DATA_KEY);
  }
  static getOrCreateInstance(e, t = {}) {
    return this.getInstance(e) || new this(e, typeof t == "object" ? t : null);
  }
  static get VERSION() {
    return Ur;
  }
  static get DATA_KEY() {
    return `bs.${this.NAME}`;
  }
  static get EVENT_KEY() {
    return `.${this.DATA_KEY}`;
  }
  static eventName(e) {
    return `${e}${this.EVENT_KEY}`;
  }
}
const Qa = (a) => {
  let e = a.getAttribute("data-bs-target");
  if (!e || e === "#") {
    let t = a.getAttribute("href");
    if (!t || !t.includes("#") && !t.startsWith("."))
      return null;
    t.includes("#") && !t.startsWith("#") && (t = `#${t.split("#")[1]}`), e = t && t !== "#" ? t.trim() : null;
  }
  return e ? e.split(",").map((t) => No(t)).join(",") : null;
}, _ = {
  find(a, e = document.documentElement) {
    return [].concat(...Element.prototype.querySelectorAll.call(e, a));
  },
  findOne(a, e = document.documentElement) {
    return Element.prototype.querySelector.call(e, a);
  },
  children(a, e) {
    return [].concat(...a.children).filter((t) => t.matches(e));
  },
  parents(a, e) {
    const t = [];
    let i = a.parentNode.closest(e);
    for (; i; )
      t.push(i), i = i.parentNode.closest(e);
    return t;
  },
  prev(a, e) {
    let t = a.previousElementSibling;
    for (; t; ) {
      if (t.matches(e))
        return [t];
      t = t.previousElementSibling;
    }
    return [];
  },
  // TODO: this is now unused; remove later along with prev()
  next(a, e) {
    let t = a.nextElementSibling;
    for (; t; ) {
      if (t.matches(e))
        return [t];
      t = t.nextElementSibling;
    }
    return [];
  },
  focusableChildren(a) {
    const e = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map((t) => `${t}:not([tabindex^="-"])`).join(",");
    return this.find(e, a).filter((t) => !$e(t) && Et(t));
  },
  getSelectorFromElement(a) {
    const e = Qa(a);
    return e && _.findOne(e) ? e : null;
  },
  getElementFromSelector(a) {
    const e = Qa(a);
    return e ? _.findOne(e) : null;
  },
  getMultipleElementsFromSelector(a) {
    const e = Qa(a);
    return e ? _.find(e) : [];
  }
}, Na = (a, e = "hide") => {
  const t = `click.dismiss${a.EVENT_KEY}`, i = a.NAME;
  u.on(document, t, `[data-bs-dismiss="${i}"]`, function(s) {
    if (["A", "AREA"].includes(this.tagName) && s.preventDefault(), $e(this))
      return;
    const o = _.getElementFromSelector(this) || this.closest(`.${i}`);
    a.getOrCreateInstance(o)[e]();
  });
}, Xr = "alert", Qr = "bs.alert", qo = `.${Qr}`, Zr = `close${qo}`, Jr = `closed${qo}`, ef = "fade", tf = "show";
class La extends he {
  // Getters
  static get NAME() {
    return Xr;
  }
  // Public
  close() {
    if (u.trigger(this._element, Zr).defaultPrevented)
      return;
    this._element.classList.remove(tf);
    const t = this._element.classList.contains(ef);
    this._queueCallback(() => this._destroyElement(), this._element, t);
  }
  // Private
  _destroyElement() {
    this._element.remove(), u.trigger(this._element, Jr), this.dispose();
  }
  // Static
  static jQueryInterface(e) {
    return this.each(function() {
      const t = La.getOrCreateInstance(this);
      if (typeof e == "string") {
        if (t[e] === void 0 || e.startsWith("_") || e === "constructor")
          throw new TypeError(`No method named "${e}"`);
        t[e](this);
      }
    });
  }
}
Na(La, "close");
de(La);
const af = "button", sf = "bs.button", of = `.${sf}`, nf = ".data-api", rf = "active", _s = '[data-bs-toggle="button"]', ff = `click${of}${nf}`;
class xa extends he {
  // Getters
  static get NAME() {
    return af;
  }
  // Public
  toggle() {
    this._element.setAttribute("aria-pressed", this._element.classList.toggle(rf));
  }
  // Static
  static jQueryInterface(e) {
    return this.each(function() {
      const t = xa.getOrCreateInstance(this);
      e === "toggle" && t[e]();
    });
  }
}
u.on(document, ff, _s, (a) => {
  a.preventDefault();
  const e = a.target.closest(_s);
  xa.getOrCreateInstance(e).toggle();
});
de(xa);
const lf = "swipe", wt = ".bs.swipe", df = `touchstart${wt}`, cf = `touchmove${wt}`, uf = `touchend${wt}`, hf = `pointerdown${wt}`, pf = `pointerup${wt}`, gf = "touch", mf = "pen", bf = "pointer-event", _f = 40, vf = {
  endCallback: null,
  leftCallback: null,
  rightCallback: null
}, Ef = {
  endCallback: "(function|null)",
  leftCallback: "(function|null)",
  rightCallback: "(function|null)"
};
class Aa extends jt {
  constructor(e, t) {
    super(), this._element = e, !(!e || !Aa.isSupported()) && (this._config = this._getConfig(t), this._deltaX = 0, this._supportPointerEvents = !!window.PointerEvent, this._initEvents());
  }
  // Getters
  static get Default() {
    return vf;
  }
  static get DefaultType() {
    return Ef;
  }
  static get NAME() {
    return lf;
  }
  // Public
  dispose() {
    u.off(this._element, wt);
  }
  // Private
  _start(e) {
    if (!this._supportPointerEvents) {
      this._deltaX = e.touches[0].clientX;
      return;
    }
    this._eventIsPointerPenTouch(e) && (this._deltaX = e.clientX);
  }
  _end(e) {
    this._eventIsPointerPenTouch(e) && (this._deltaX = e.clientX - this._deltaX), this._handleSwipe(), J(this._config.endCallback);
  }
  _move(e) {
    this._deltaX = e.touches && e.touches.length > 1 ? 0 : e.touches[0].clientX - this._deltaX;
  }
  _handleSwipe() {
    const e = Math.abs(this._deltaX);
    if (e <= _f)
      return;
    const t = e / this._deltaX;
    this._deltaX = 0, t && J(t > 0 ? this._config.rightCallback : this._config.leftCallback);
  }
  _initEvents() {
    this._supportPointerEvents ? (u.on(this._element, hf, (e) => this._start(e)), u.on(this._element, pf, (e) => this._end(e)), this._element.classList.add(bf)) : (u.on(this._element, df, (e) => this._start(e)), u.on(this._element, cf, (e) => this._move(e)), u.on(this._element, uf, (e) => this._end(e)));
  }
  _eventIsPointerPenTouch(e) {
    return this._supportPointerEvents && (e.pointerType === mf || e.pointerType === gf);
  }
  // Static
  static isSupported() {
    return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
  }
}
const wf = "carousel", yf = "bs.carousel", Re = `.${yf}`, jo = ".data-api", Tf = "ArrowLeft", Af = "ArrowRight", kf = 500, kt = "next", it = "prev", rt = "left", pa = "right", Cf = `slide${Re}`, Za = `slid${Re}`, Sf = `keydown${Re}`, Df = `mouseenter${Re}`, Of = `mouseleave${Re}`, Nf = `dragstart${Re}`, Lf = `load${Re}${jo}`, xf = `click${Re}${jo}`, Fo = "carousel", ea = "active", If = "slide", $f = "carousel-item-end", Pf = "carousel-item-start", Mf = "carousel-item-next", Rf = "carousel-item-prev", Wo = ".active", zo = ".carousel-item", Bf = Wo + zo, Hf = ".carousel-item img", Vf = ".carousel-indicators", qf = "[data-bs-slide], [data-bs-slide-to]", jf = '[data-bs-ride="carousel"]', Ff = {
  [Tf]: pa,
  [Af]: rt
}, Wf = {
  interval: 5e3,
  keyboard: !0,
  pause: "hover",
  ride: !1,
  touch: !0,
  wrap: !0
}, zf = {
  interval: "(number|boolean)",
  // TODO:v6 remove boolean support
  keyboard: "boolean",
  pause: "(string|boolean)",
  ride: "(boolean|string)",
  touch: "boolean",
  wrap: "boolean"
};
class Ft extends he {
  constructor(e, t) {
    super(e, t), this._interval = null, this._activeElement = null, this._isSliding = !1, this.touchTimeout = null, this._swipeHelper = null, this._indicatorsElement = _.findOne(Vf, this._element), this._addEventListeners(), this._config.ride === Fo && this.cycle();
  }
  // Getters
  static get Default() {
    return Wf;
  }
  static get DefaultType() {
    return zf;
  }
  static get NAME() {
    return wf;
  }
  // Public
  next() {
    this._slide(kt);
  }
  nextWhenVisible() {
    !document.hidden && Et(this._element) && this.next();
  }
  prev() {
    this._slide(it);
  }
  pause() {
    this._isSliding && Lo(this._element), this._clearInterval();
  }
  cycle() {
    this._clearInterval(), this._updateInterval(), this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval);
  }
  _maybeEnableCycle() {
    if (this._config.ride) {
      if (this._isSliding) {
        u.one(this._element, Za, () => this.cycle());
        return;
      }
      this.cycle();
    }
  }
  to(e) {
    const t = this._getItems();
    if (e > t.length - 1 || e < 0)
      return;
    if (this._isSliding) {
      u.one(this._element, Za, () => this.to(e));
      return;
    }
    const i = this._getItemIndex(this._getActive());
    if (i === e)
      return;
    const s = e > i ? kt : it;
    this._slide(s, t[e]);
  }
  dispose() {
    this._swipeHelper && this._swipeHelper.dispose(), super.dispose();
  }
  // Private
  _configAfterMerge(e) {
    return e.defaultInterval = e.interval, e;
  }
  _addEventListeners() {
    this._config.keyboard && u.on(this._element, Sf, (e) => this._keydown(e)), this._config.pause === "hover" && (u.on(this._element, Df, () => this.pause()), u.on(this._element, Of, () => this._maybeEnableCycle())), this._config.touch && Aa.isSupported() && this._addTouchEventListeners();
  }
  _addTouchEventListeners() {
    for (const i of _.find(Hf, this._element))
      u.on(i, Nf, (s) => s.preventDefault());
    const t = {
      leftCallback: () => this._slide(this._directionToOrder(rt)),
      rightCallback: () => this._slide(this._directionToOrder(pa)),
      endCallback: () => {
        this._config.pause === "hover" && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), kf + this._config.interval));
      }
    };
    this._swipeHelper = new Aa(this._element, t);
  }
  _keydown(e) {
    if (/input|textarea/i.test(e.target.tagName))
      return;
    const t = Ff[e.key];
    t && (e.preventDefault(), this._slide(this._directionToOrder(t)));
  }
  _getItemIndex(e) {
    return this._getItems().indexOf(e);
  }
  _setActiveIndicatorElement(e) {
    if (!this._indicatorsElement)
      return;
    const t = _.findOne(Wo, this._indicatorsElement);
    t.classList.remove(ea), t.removeAttribute("aria-current");
    const i = _.findOne(`[data-bs-slide-to="${e}"]`, this._indicatorsElement);
    i && (i.classList.add(ea), i.setAttribute("aria-current", "true"));
  }
  _updateInterval() {
    const e = this._activeElement || this._getActive();
    if (!e)
      return;
    const t = Number.parseInt(e.getAttribute("data-bs-interval"), 10);
    this._config.interval = t || this._config.defaultInterval;
  }
  _slide(e, t = null) {
    if (this._isSliding)
      return;
    const i = this._getActive(), s = e === kt, o = t || Bi(this._getItems(), i, s, this._config.wrap);
    if (o === i)
      return;
    const n = this._getItemIndex(o), r = (h) => u.trigger(this._element, h, {
      relatedTarget: o,
      direction: this._orderToDirection(e),
      from: this._getItemIndex(i),
      to: n
    });
    if (r(Cf).defaultPrevented || !i || !o)
      return;
    const l = !!this._interval;
    this.pause(), this._isSliding = !0, this._setActiveIndicatorElement(n), this._activeElement = o;
    const d = s ? Pf : $f, c = s ? Mf : Rf;
    o.classList.add(c), qt(o), i.classList.add(d), o.classList.add(d);
    const g = () => {
      o.classList.remove(d, c), o.classList.add(ea), i.classList.remove(ea, c, d), this._isSliding = !1, r(Za);
    };
    this._queueCallback(g, i, this._isAnimated()), l && this.cycle();
  }
  _isAnimated() {
    return this._element.classList.contains(If);
  }
  _getActive() {
    return _.findOne(Bf, this._element);
  }
  _getItems() {
    return _.find(zo, this._element);
  }
  _clearInterval() {
    this._interval && (clearInterval(this._interval), this._interval = null);
  }
  _directionToOrder(e) {
    return fe() ? e === rt ? it : kt : e === rt ? kt : it;
  }
  _orderToDirection(e) {
    return fe() ? e === it ? rt : pa : e === it ? pa : rt;
  }
  // Static
  static jQueryInterface(e) {
    return this.each(function() {
      const t = Ft.getOrCreateInstance(this, e);
      if (typeof e == "number") {
        t.to(e);
        return;
      }
      if (typeof e == "string") {
        if (t[e] === void 0 || e.startsWith("_") || e === "constructor")
          throw new TypeError(`No method named "${e}"`);
        t[e]();
      }
    });
  }
}
u.on(document, xf, qf, function(a) {
  const e = _.getElementFromSelector(this);
  if (!e || !e.classList.contains(Fo))
    return;
  a.preventDefault();
  const t = Ft.getOrCreateInstance(e), i = this.getAttribute("data-bs-slide-to");
  if (i) {
    t.to(i), t._maybeEnableCycle();
    return;
  }
  if (Te.getDataAttribute(this, "slide") === "next") {
    t.next(), t._maybeEnableCycle();
    return;
  }
  t.prev(), t._maybeEnableCycle();
});
u.on(window, Lf, () => {
  const a = _.find(jf);
  for (const e of a)
    Ft.getOrCreateInstance(e);
});
de(Ft);
const Yf = "collapse", Kf = "bs.collapse", Wt = `.${Kf}`, Gf = ".data-api", Uf = `show${Wt}`, Xf = `shown${Wt}`, Qf = `hide${Wt}`, Zf = `hidden${Wt}`, Jf = `click${Wt}${Gf}`, Ja = "show", dt = "collapse", ta = "collapsing", el = "collapsed", tl = `:scope .${dt} .${dt}`, al = "collapse-horizontal", il = "width", sl = "height", ol = ".collapse.show, .collapse.collapsing", vi = '[data-bs-toggle="collapse"]', nl = {
  parent: null,
  toggle: !0
}, rl = {
  parent: "(null|element)",
  toggle: "boolean"
};
class Rt extends he {
  constructor(e, t) {
    super(e, t), this._isTransitioning = !1, this._triggerArray = [];
    const i = _.find(vi);
    for (const s of i) {
      const o = _.getSelectorFromElement(s), n = _.find(o).filter((r) => r === this._element);
      o !== null && n.length && this._triggerArray.push(s);
    }
    this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle();
  }
  // Getters
  static get Default() {
    return nl;
  }
  static get DefaultType() {
    return rl;
  }
  static get NAME() {
    return Yf;
  }
  // Public
  toggle() {
    this._isShown() ? this.hide() : this.show();
  }
  show() {
    if (this._isTransitioning || this._isShown())
      return;
    let e = [];
    if (this._config.parent && (e = this._getFirstLevelChildren(ol).filter((r) => r !== this._element).map((r) => Rt.getOrCreateInstance(r, {
      toggle: !1
    }))), e.length && e[0]._isTransitioning || u.trigger(this._element, Uf).defaultPrevented)
      return;
    for (const r of e)
      r.hide();
    const i = this._getDimension();
    this._element.classList.remove(dt), this._element.classList.add(ta), this._element.style[i] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
    const s = () => {
      this._isTransitioning = !1, this._element.classList.remove(ta), this._element.classList.add(dt, Ja), this._element.style[i] = "", u.trigger(this._element, Xf);
    }, n = `scroll${i[0].toUpperCase() + i.slice(1)}`;
    this._queueCallback(s, this._element, !0), this._element.style[i] = `${this._element[n]}px`;
  }
  hide() {
    if (this._isTransitioning || !this._isShown() || u.trigger(this._element, Qf).defaultPrevented)
      return;
    const t = this._getDimension();
    this._element.style[t] = `${this._element.getBoundingClientRect()[t]}px`, qt(this._element), this._element.classList.add(ta), this._element.classList.remove(dt, Ja);
    for (const s of this._triggerArray) {
      const o = _.getElementFromSelector(s);
      o && !this._isShown(o) && this._addAriaAndCollapsedClass([s], !1);
    }
    this._isTransitioning = !0;
    const i = () => {
      this._isTransitioning = !1, this._element.classList.remove(ta), this._element.classList.add(dt), u.trigger(this._element, Zf);
    };
    this._element.style[t] = "", this._queueCallback(i, this._element, !0);
  }
  // Private
  _isShown(e = this._element) {
    return e.classList.contains(Ja);
  }
  _configAfterMerge(e) {
    return e.toggle = !!e.toggle, e.parent = Ie(e.parent), e;
  }
  _getDimension() {
    return this._element.classList.contains(al) ? il : sl;
  }
  _initializeChildren() {
    if (!this._config.parent)
      return;
    const e = this._getFirstLevelChildren(vi);
    for (const t of e) {
      const i = _.getElementFromSelector(t);
      i && this._addAriaAndCollapsedClass([t], this._isShown(i));
    }
  }
  _getFirstLevelChildren(e) {
    const t = _.find(tl, this._config.parent);
    return _.find(e, this._config.parent).filter((i) => !t.includes(i));
  }
  _addAriaAndCollapsedClass(e, t) {
    if (e.length)
      for (const i of e)
        i.classList.toggle(el, !t), i.setAttribute("aria-expanded", t);
  }
  // Static
  static jQueryInterface(e) {
    const t = {};
    return typeof e == "string" && /show|hide/.test(e) && (t.toggle = !1), this.each(function() {
      const i = Rt.getOrCreateInstance(this, t);
      if (typeof e == "string") {
        if (typeof i[e] > "u")
          throw new TypeError(`No method named "${e}"`);
        i[e]();
      }
    });
  }
}
u.on(document, Jf, vi, function(a) {
  (a.target.tagName === "A" || a.delegateTarget && a.delegateTarget.tagName === "A") && a.preventDefault();
  for (const e of _.getMultipleElementsFromSelector(this))
    Rt.getOrCreateInstance(e, {
      toggle: !1
    }).toggle();
});
de(Rt);
const vs = "dropdown", fl = "bs.dropdown", Qe = `.${fl}`, Vi = ".data-api", ll = "Escape", Es = "Tab", dl = "ArrowUp", ws = "ArrowDown", cl = 2, ul = `hide${Qe}`, hl = `hidden${Qe}`, pl = `show${Qe}`, gl = `shown${Qe}`, Yo = `click${Qe}${Vi}`, Ko = `keydown${Qe}${Vi}`, ml = `keyup${Qe}${Vi}`, ft = "show", bl = "dropup", _l = "dropend", vl = "dropstart", El = "dropup-center", wl = "dropdown-center", ze = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)', yl = `${ze}.${ft}`, ga = ".dropdown-menu", Tl = ".navbar", Al = ".navbar-nav", kl = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", Cl = fe() ? "top-end" : "top-start", Sl = fe() ? "top-start" : "top-end", Dl = fe() ? "bottom-end" : "bottom-start", Ol = fe() ? "bottom-start" : "bottom-end", Nl = fe() ? "left-start" : "right-start", Ll = fe() ? "right-start" : "left-start", xl = "top", Il = "bottom", $l = {
  autoClose: !0,
  boundary: "clippingParents",
  display: "dynamic",
  offset: [0, 2],
  popperConfig: null,
  reference: "toggle"
}, Pl = {
  autoClose: "(boolean|string)",
  boundary: "(string|element)",
  display: "string",
  offset: "(array|string|function)",
  popperConfig: "(null|object|function)",
  reference: "(string|element|object)"
};
class be extends he {
  constructor(e, t) {
    super(e, t), this._popper = null, this._parent = this._element.parentNode, this._menu = _.next(this._element, ga)[0] || _.prev(this._element, ga)[0] || _.findOne(ga, this._parent), this._inNavbar = this._detectNavbar();
  }
  // Getters
  static get Default() {
    return $l;
  }
  static get DefaultType() {
    return Pl;
  }
  static get NAME() {
    return vs;
  }
  // Public
  toggle() {
    return this._isShown() ? this.hide() : this.show();
  }
  show() {
    if ($e(this._element) || this._isShown())
      return;
    const e = {
      relatedTarget: this._element
    };
    if (!u.trigger(this._element, pl, e).defaultPrevented) {
      if (this._createPopper(), "ontouchstart" in document.documentElement && !this._parent.closest(Al))
        for (const i of [].concat(...document.body.children))
          u.on(i, "mouseover", Ta);
      this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add(ft), this._element.classList.add(ft), u.trigger(this._element, gl, e);
    }
  }
  hide() {
    if ($e(this._element) || !this._isShown())
      return;
    const e = {
      relatedTarget: this._element
    };
    this._completeHide(e);
  }
  dispose() {
    this._popper && this._popper.destroy(), super.dispose();
  }
  update() {
    this._inNavbar = this._detectNavbar(), this._popper && this._popper.update();
  }
  // Private
  _completeHide(e) {
    if (!u.trigger(this._element, ul, e).defaultPrevented) {
      if ("ontouchstart" in document.documentElement)
        for (const i of [].concat(...document.body.children))
          u.off(i, "mouseover", Ta);
      this._popper && this._popper.destroy(), this._menu.classList.remove(ft), this._element.classList.remove(ft), this._element.setAttribute("aria-expanded", "false"), Te.removeDataAttribute(this._menu, "popper"), u.trigger(this._element, hl, e), this._element.focus();
    }
  }
  _getConfig(e) {
    if (e = super._getConfig(e), typeof e.reference == "object" && !ye(e.reference) && typeof e.reference.getBoundingClientRect != "function")
      throw new TypeError(`${vs.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
    return e;
  }
  _createPopper() {
    if (typeof Oo > "u")
      throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org/docs/v2/)");
    let e = this._element;
    this._config.reference === "parent" ? e = this._parent : ye(this._config.reference) ? e = Ie(this._config.reference) : typeof this._config.reference == "object" && (e = this._config.reference);
    const t = this._getPopperConfig();
    this._popper = Ri(e, this._menu, t);
  }
  _isShown() {
    return this._menu.classList.contains(ft);
  }
  _getPlacement() {
    const e = this._parent;
    if (e.classList.contains(_l))
      return Nl;
    if (e.classList.contains(vl))
      return Ll;
    if (e.classList.contains(El))
      return xl;
    if (e.classList.contains(wl))
      return Il;
    const t = getComputedStyle(this._menu).getPropertyValue("--bs-position").trim() === "end";
    return e.classList.contains(bl) ? t ? Sl : Cl : t ? Ol : Dl;
  }
  _detectNavbar() {
    return this._element.closest(Tl) !== null;
  }
  _getOffset() {
    const {
      offset: e
    } = this._config;
    return typeof e == "string" ? e.split(",").map((t) => Number.parseInt(t, 10)) : typeof e == "function" ? (t) => e(t, this._element) : e;
  }
  _getPopperConfig() {
    const e = {
      placement: this._getPlacement(),
      modifiers: [{
        name: "preventOverflow",
        options: {
          boundary: this._config.boundary
        }
      }, {
        name: "offset",
        options: {
          offset: this._getOffset()
        }
      }]
    };
    return (this._inNavbar || this._config.display === "static") && (Te.setDataAttribute(this._menu, "popper", "static"), e.modifiers = [{
      name: "applyStyles",
      enabled: !1
    }]), {
      ...e,
      ...J(this._config.popperConfig, [void 0, e])
    };
  }
  _selectMenuItem({
    key: e,
    target: t
  }) {
    const i = _.find(kl, this._menu).filter((s) => Et(s));
    i.length && Bi(i, t, e === ws, !i.includes(t)).focus();
  }
  // Static
  static jQueryInterface(e) {
    return this.each(function() {
      const t = be.getOrCreateInstance(this, e);
      if (typeof e == "string") {
        if (typeof t[e] > "u")
          throw new TypeError(`No method named "${e}"`);
        t[e]();
      }
    });
  }
  static clearMenus(e) {
    if (e.button === cl || e.type === "keyup" && e.key !== Es)
      return;
    const t = _.find(yl);
    for (const i of t) {
      const s = be.getInstance(i);
      if (!s || s._config.autoClose === !1)
        continue;
      const o = e.composedPath(), n = o.includes(s._menu);
      if (o.includes(s._element) || s._config.autoClose === "inside" && !n || s._config.autoClose === "outside" && n || s._menu.contains(e.target) && (e.type === "keyup" && e.key === Es || /input|select|option|textarea|form/i.test(e.target.tagName)))
        continue;
      const r = {
        relatedTarget: s._element
      };
      e.type === "click" && (r.clickEvent = e), s._completeHide(r);
    }
  }
  static dataApiKeydownHandler(e) {
    const t = /input|textarea/i.test(e.target.tagName), i = e.key === ll, s = [dl, ws].includes(e.key);
    if (!s && !i || t && !i)
      return;
    e.preventDefault();
    const o = this.matches(ze) ? this : _.prev(this, ze)[0] || _.next(this, ze)[0] || _.findOne(ze, e.delegateTarget.parentNode), n = be.getOrCreateInstance(o);
    if (s) {
      e.stopPropagation(), n.show(), n._selectMenuItem(e);
      return;
    }
    n._isShown() && (e.stopPropagation(), n.hide(), o.focus());
  }
}
u.on(document, Ko, ze, be.dataApiKeydownHandler);
u.on(document, Ko, ga, be.dataApiKeydownHandler);
u.on(document, Yo, be.clearMenus);
u.on(document, ml, be.clearMenus);
u.on(document, Yo, ze, function(a) {
  a.preventDefault(), be.getOrCreateInstance(this).toggle();
});
de(be);
const Go = "backdrop", Ml = "fade", ys = "show", Ts = `mousedown.bs.${Go}`, Rl = {
  className: "modal-backdrop",
  clickCallback: null,
  isAnimated: !1,
  isVisible: !0,
  // if false, we use the backdrop helper without adding any element to the dom
  rootElement: "body"
  // give the choice to place backdrop under different elements
}, Bl = {
  className: "string",
  clickCallback: "(function|null)",
  isAnimated: "boolean",
  isVisible: "boolean",
  rootElement: "(element|string)"
};
class Uo extends jt {
  constructor(e) {
    super(), this._config = this._getConfig(e), this._isAppended = !1, this._element = null;
  }
  // Getters
  static get Default() {
    return Rl;
  }
  static get DefaultType() {
    return Bl;
  }
  static get NAME() {
    return Go;
  }
  // Public
  show(e) {
    if (!this._config.isVisible) {
      J(e);
      return;
    }
    this._append();
    const t = this._getElement();
    this._config.isAnimated && qt(t), t.classList.add(ys), this._emulateAnimation(() => {
      J(e);
    });
  }
  hide(e) {
    if (!this._config.isVisible) {
      J(e);
      return;
    }
    this._getElement().classList.remove(ys), this._emulateAnimation(() => {
      this.dispose(), J(e);
    });
  }
  dispose() {
    this._isAppended && (u.off(this._element, Ts), this._element.remove(), this._isAppended = !1);
  }
  // Private
  _getElement() {
    if (!this._element) {
      const e = document.createElement("div");
      e.className = this._config.className, this._config.isAnimated && e.classList.add(Ml), this._element = e;
    }
    return this._element;
  }
  _configAfterMerge(e) {
    return e.rootElement = Ie(e.rootElement), e;
  }
  _append() {
    if (this._isAppended)
      return;
    const e = this._getElement();
    this._config.rootElement.append(e), u.on(e, Ts, () => {
      J(this._config.clickCallback);
    }), this._isAppended = !0;
  }
  _emulateAnimation(e) {
    $o(e, this._getElement(), this._config.isAnimated);
  }
}
const Hl = "focustrap", Vl = "bs.focustrap", ka = `.${Vl}`, ql = `focusin${ka}`, jl = `keydown.tab${ka}`, Fl = "Tab", Wl = "forward", As = "backward", zl = {
  autofocus: !0,
  trapElement: null
  // The element to trap focus inside of
}, Yl = {
  autofocus: "boolean",
  trapElement: "element"
};
class Xo extends jt {
  constructor(e) {
    super(), this._config = this._getConfig(e), this._isActive = !1, this._lastTabNavDirection = null;
  }
  // Getters
  static get Default() {
    return zl;
  }
  static get DefaultType() {
    return Yl;
  }
  static get NAME() {
    return Hl;
  }
  // Public
  activate() {
    this._isActive || (this._config.autofocus && this._config.trapElement.focus(), u.off(document, ka), u.on(document, ql, (e) => this._handleFocusin(e)), u.on(document, jl, (e) => this._handleKeydown(e)), this._isActive = !0);
  }
  deactivate() {
    this._isActive && (this._isActive = !1, u.off(document, ka));
  }
  // Private
  _handleFocusin(e) {
    const {
      trapElement: t
    } = this._config;
    if (e.target === document || e.target === t || t.contains(e.target))
      return;
    const i = _.focusableChildren(t);
    i.length === 0 ? t.focus() : this._lastTabNavDirection === As ? i[i.length - 1].focus() : i[0].focus();
  }
  _handleKeydown(e) {
    e.key === Fl && (this._lastTabNavDirection = e.shiftKey ? As : Wl);
  }
}
const ks = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", Cs = ".sticky-top", aa = "padding-right", Ss = "margin-right";
class Ei {
  constructor() {
    this._element = document.body;
  }
  // Public
  getWidth() {
    const e = document.documentElement.clientWidth;
    return Math.abs(window.innerWidth - e);
  }
  hide() {
    const e = this.getWidth();
    this._disableOverFlow(), this._setElementAttributes(this._element, aa, (t) => t + e), this._setElementAttributes(ks, aa, (t) => t + e), this._setElementAttributes(Cs, Ss, (t) => t - e);
  }
  reset() {
    this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, aa), this._resetElementAttributes(ks, aa), this._resetElementAttributes(Cs, Ss);
  }
  isOverflowing() {
    return this.getWidth() > 0;
  }
  // Private
  _disableOverFlow() {
    this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden";
  }
  _setElementAttributes(e, t, i) {
    const s = this.getWidth(), o = (n) => {
      if (n !== this._element && window.innerWidth > n.clientWidth + s)
        return;
      this._saveInitialAttribute(n, t);
      const r = window.getComputedStyle(n).getPropertyValue(t);
      n.style.setProperty(t, `${i(Number.parseFloat(r))}px`);
    };
    this._applyManipulationCallback(e, o);
  }
  _saveInitialAttribute(e, t) {
    const i = e.style.getPropertyValue(t);
    i && Te.setDataAttribute(e, t, i);
  }
  _resetElementAttributes(e, t) {
    const i = (s) => {
      const o = Te.getDataAttribute(s, t);
      if (o === null) {
        s.style.removeProperty(t);
        return;
      }
      Te.removeDataAttribute(s, t), s.style.setProperty(t, o);
    };
    this._applyManipulationCallback(e, i);
  }
  _applyManipulationCallback(e, t) {
    if (ye(e)) {
      t(e);
      return;
    }
    for (const i of _.find(e, this._element))
      t(i);
  }
}
const Kl = "modal", Gl = "bs.modal", le = `.${Gl}`, Ul = ".data-api", Xl = "Escape", Ql = `hide${le}`, Zl = `hidePrevented${le}`, Qo = `hidden${le}`, Zo = `show${le}`, Jl = `shown${le}`, ed = `resize${le}`, td = `click.dismiss${le}`, ad = `mousedown.dismiss${le}`, id = `keydown.dismiss${le}`, sd = `click${le}${Ul}`, Ds = "modal-open", od = "fade", Os = "show", ei = "modal-static", nd = ".modal.show", rd = ".modal-dialog", fd = ".modal-body", ld = '[data-bs-toggle="modal"]', dd = {
  backdrop: !0,
  focus: !0,
  keyboard: !0
}, cd = {
  backdrop: "(boolean|string)",
  focus: "boolean",
  keyboard: "boolean"
};
class Xe extends he {
  constructor(e, t) {
    super(e, t), this._dialog = _.findOne(rd, this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = !1, this._isTransitioning = !1, this._scrollBar = new Ei(), this._addEventListeners();
  }
  // Getters
  static get Default() {
    return dd;
  }
  static get DefaultType() {
    return cd;
  }
  static get NAME() {
    return Kl;
  }
  // Public
  toggle(e) {
    return this._isShown ? this.hide() : this.show(e);
  }
  show(e) {
    this._isShown || this._isTransitioning || u.trigger(this._element, Zo, {
      relatedTarget: e
    }).defaultPrevented || (this._isShown = !0, this._isTransitioning = !0, this._scrollBar.hide(), document.body.classList.add(Ds), this._adjustDialog(), this._backdrop.show(() => this._showElement(e)));
  }
  hide() {
    !this._isShown || this._isTransitioning || u.trigger(this._element, Ql).defaultPrevented || (this._isShown = !1, this._isTransitioning = !0, this._focustrap.deactivate(), this._element.classList.remove(Os), this._queueCallback(() => this._hideModal(), this._element, this._isAnimated()));
  }
  dispose() {
    u.off(window, le), u.off(this._dialog, le), this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
  }
  handleUpdate() {
    this._adjustDialog();
  }
  // Private
  _initializeBackDrop() {
    return new Uo({
      isVisible: !!this._config.backdrop,
      // 'static' option will be translated to true, and booleans will keep their value,
      isAnimated: this._isAnimated()
    });
  }
  _initializeFocusTrap() {
    return new Xo({
      trapElement: this._element
    });
  }
  _showElement(e) {
    document.body.contains(this._element) || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0;
    const t = _.findOne(fd, this._dialog);
    t && (t.scrollTop = 0), qt(this._element), this._element.classList.add(Os);
    const i = () => {
      this._config.focus && this._focustrap.activate(), this._isTransitioning = !1, u.trigger(this._element, Jl, {
        relatedTarget: e
      });
    };
    this._queueCallback(i, this._dialog, this._isAnimated());
  }
  _addEventListeners() {
    u.on(this._element, id, (e) => {
      if (e.key === Xl) {
        if (this._config.keyboard) {
          this.hide();
          return;
        }
        this._triggerBackdropTransition();
      }
    }), u.on(window, ed, () => {
      this._isShown && !this._isTransitioning && this._adjustDialog();
    }), u.on(this._element, ad, (e) => {
      u.one(this._element, td, (t) => {
        if (!(this._element !== e.target || this._element !== t.target)) {
          if (this._config.backdrop === "static") {
            this._triggerBackdropTransition();
            return;
          }
          this._config.backdrop && this.hide();
        }
      });
    });
  }
  _hideModal() {
    this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide(() => {
      document.body.classList.remove(Ds), this._resetAdjustments(), this._scrollBar.reset(), u.trigger(this._element, Qo);
    });
  }
  _isAnimated() {
    return this._element.classList.contains(od);
  }
  _triggerBackdropTransition() {
    if (u.trigger(this._element, Zl).defaultPrevented)
      return;
    const t = this._element.scrollHeight > document.documentElement.clientHeight, i = this._element.style.overflowY;
    i === "hidden" || this._element.classList.contains(ei) || (t || (this._element.style.overflowY = "hidden"), this._element.classList.add(ei), this._queueCallback(() => {
      this._element.classList.remove(ei), this._queueCallback(() => {
        this._element.style.overflowY = i;
      }, this._dialog);
    }, this._dialog), this._element.focus());
  }
  /**
   * The following methods are used to handle overflowing modals
   */
  _adjustDialog() {
    const e = this._element.scrollHeight > document.documentElement.clientHeight, t = this._scrollBar.getWidth(), i = t > 0;
    if (i && !e) {
      const s = fe() ? "paddingLeft" : "paddingRight";
      this._element.style[s] = `${t}px`;
    }
    if (!i && e) {
      const s = fe() ? "paddingRight" : "paddingLeft";
      this._element.style[s] = `${t}px`;
    }
  }
  _resetAdjustments() {
    this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
  }
  // Static
  static jQueryInterface(e, t) {
    return this.each(function() {
      const i = Xe.getOrCreateInstance(this, e);
      if (typeof e == "string") {
        if (typeof i[e] > "u")
          throw new TypeError(`No method named "${e}"`);
        i[e](t);
      }
    });
  }
}
u.on(document, sd, ld, function(a) {
  const e = _.getElementFromSelector(this);
  ["A", "AREA"].includes(this.tagName) && a.preventDefault(), u.one(e, Zo, (s) => {
    s.defaultPrevented || u.one(e, Qo, () => {
      Et(this) && this.focus();
    });
  });
  const t = _.findOne(nd);
  t && Xe.getInstance(t).hide(), Xe.getOrCreateInstance(e).toggle(this);
});
Na(Xe);
de(Xe);
const ud = "offcanvas", hd = "bs.offcanvas", Se = `.${hd}`, Jo = ".data-api", pd = `load${Se}${Jo}`, gd = "Escape", Ns = "show", Ls = "showing", xs = "hiding", md = "offcanvas-backdrop", en = ".offcanvas.show", bd = `show${Se}`, _d = `shown${Se}`, vd = `hide${Se}`, Is = `hidePrevented${Se}`, tn = `hidden${Se}`, Ed = `resize${Se}`, wd = `click${Se}${Jo}`, yd = `keydown.dismiss${Se}`, Td = '[data-bs-toggle="offcanvas"]', Ad = {
  backdrop: !0,
  keyboard: !0,
  scroll: !1
}, kd = {
  backdrop: "(boolean|string)",
  keyboard: "boolean",
  scroll: "boolean"
};
class Pe extends he {
  constructor(e, t) {
    super(e, t), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners();
  }
  // Getters
  static get Default() {
    return Ad;
  }
  static get DefaultType() {
    return kd;
  }
  static get NAME() {
    return ud;
  }
  // Public
  toggle(e) {
    return this._isShown ? this.hide() : this.show(e);
  }
  show(e) {
    if (this._isShown || u.trigger(this._element, bd, {
      relatedTarget: e
    }).defaultPrevented)
      return;
    this._isShown = !0, this._backdrop.show(), this._config.scroll || new Ei().hide(), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add(Ls);
    const i = () => {
      (!this._config.scroll || this._config.backdrop) && this._focustrap.activate(), this._element.classList.add(Ns), this._element.classList.remove(Ls), u.trigger(this._element, _d, {
        relatedTarget: e
      });
    };
    this._queueCallback(i, this._element, !0);
  }
  hide() {
    if (!this._isShown || u.trigger(this._element, vd).defaultPrevented)
      return;
    this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.add(xs), this._backdrop.hide();
    const t = () => {
      this._element.classList.remove(Ns, xs), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._config.scroll || new Ei().reset(), u.trigger(this._element, tn);
    };
    this._queueCallback(t, this._element, !0);
  }
  dispose() {
    this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
  }
  // Private
  _initializeBackDrop() {
    const e = () => {
      if (this._config.backdrop === "static") {
        u.trigger(this._element, Is);
        return;
      }
      this.hide();
    }, t = !!this._config.backdrop;
    return new Uo({
      className: md,
      isVisible: t,
      isAnimated: !0,
      rootElement: this._element.parentNode,
      clickCallback: t ? e : null
    });
  }
  _initializeFocusTrap() {
    return new Xo({
      trapElement: this._element
    });
  }
  _addEventListeners() {
    u.on(this._element, yd, (e) => {
      if (e.key === gd) {
        if (this._config.keyboard) {
          this.hide();
          return;
        }
        u.trigger(this._element, Is);
      }
    });
  }
  // Static
  static jQueryInterface(e) {
    return this.each(function() {
      const t = Pe.getOrCreateInstance(this, e);
      if (typeof e == "string") {
        if (t[e] === void 0 || e.startsWith("_") || e === "constructor")
          throw new TypeError(`No method named "${e}"`);
        t[e](this);
      }
    });
  }
}
u.on(document, wd, Td, function(a) {
  const e = _.getElementFromSelector(this);
  if (["A", "AREA"].includes(this.tagName) && a.preventDefault(), $e(this))
    return;
  u.one(e, tn, () => {
    Et(this) && this.focus();
  });
  const t = _.findOne(en);
  t && t !== e && Pe.getInstance(t).hide(), Pe.getOrCreateInstance(e).toggle(this);
});
u.on(window, pd, () => {
  for (const a of _.find(en))
    Pe.getOrCreateInstance(a).show();
});
u.on(window, Ed, () => {
  for (const a of _.find("[aria-modal][class*=show][class*=offcanvas-]"))
    getComputedStyle(a).position !== "fixed" && Pe.getOrCreateInstance(a).hide();
});
Na(Pe);
de(Pe);
const Cd = /^aria-[\w-]*$/i, an = {
  // Global attributes allowed on any supplied element below.
  "*": ["class", "dir", "id", "lang", "role", Cd],
  a: ["target", "href", "title", "rel"],
  area: [],
  b: [],
  br: [],
  col: [],
  code: [],
  dd: [],
  div: [],
  dl: [],
  dt: [],
  em: [],
  hr: [],
  h1: [],
  h2: [],
  h3: [],
  h4: [],
  h5: [],
  h6: [],
  i: [],
  img: ["src", "srcset", "alt", "title", "width", "height"],
  li: [],
  ol: [],
  p: [],
  pre: [],
  s: [],
  small: [],
  span: [],
  sub: [],
  sup: [],
  strong: [],
  u: [],
  ul: []
}, Sd = /* @__PURE__ */ new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]), Dd = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i, Od = (a, e) => {
  const t = a.nodeName.toLowerCase();
  return e.includes(t) ? Sd.has(t) ? !!Dd.test(a.nodeValue) : !0 : e.filter((i) => i instanceof RegExp).some((i) => i.test(t));
};
function Nd(a, e, t) {
  if (!a.length)
    return a;
  if (t && typeof t == "function")
    return t(a);
  const s = new window.DOMParser().parseFromString(a, "text/html"), o = [].concat(...s.body.querySelectorAll("*"));
  for (const n of o) {
    const r = n.nodeName.toLowerCase();
    if (!Object.keys(e).includes(r)) {
      n.remove();
      continue;
    }
    const f = [].concat(...n.attributes), l = [].concat(e["*"] || [], e[r] || []);
    for (const d of f)
      Od(d, l) || n.removeAttribute(d.nodeName);
  }
  return s.body.innerHTML;
}
const Ld = "TemplateFactory", xd = {
  allowList: an,
  content: {},
  // { selector : text ,  selector2 : text2 , }
  extraClass: "",
  html: !1,
  sanitize: !0,
  sanitizeFn: null,
  template: "<div></div>"
}, Id = {
  allowList: "object",
  content: "object",
  extraClass: "(string|function)",
  html: "boolean",
  sanitize: "boolean",
  sanitizeFn: "(null|function)",
  template: "string"
}, $d = {
  entry: "(string|element|function|null)",
  selector: "(string|element)"
};
class Pd extends jt {
  constructor(e) {
    super(), this._config = this._getConfig(e);
  }
  // Getters
  static get Default() {
    return xd;
  }
  static get DefaultType() {
    return Id;
  }
  static get NAME() {
    return Ld;
  }
  // Public
  getContent() {
    return Object.values(this._config.content).map((e) => this._resolvePossibleFunction(e)).filter(Boolean);
  }
  hasContent() {
    return this.getContent().length > 0;
  }
  changeContent(e) {
    return this._checkContent(e), this._config.content = {
      ...this._config.content,
      ...e
    }, this;
  }
  toHtml() {
    const e = document.createElement("div");
    e.innerHTML = this._maybeSanitize(this._config.template);
    for (const [s, o] of Object.entries(this._config.content))
      this._setContent(e, o, s);
    const t = e.children[0], i = this._resolvePossibleFunction(this._config.extraClass);
    return i && t.classList.add(...i.split(" ")), t;
  }
  // Private
  _typeCheckConfig(e) {
    super._typeCheckConfig(e), this._checkContent(e.content);
  }
  _checkContent(e) {
    for (const [t, i] of Object.entries(e))
      super._typeCheckConfig({
        selector: t,
        entry: i
      }, $d);
  }
  _setContent(e, t, i) {
    const s = _.findOne(i, e);
    if (s) {
      if (t = this._resolvePossibleFunction(t), !t) {
        s.remove();
        return;
      }
      if (ye(t)) {
        this._putElementInTemplate(Ie(t), s);
        return;
      }
      if (this._config.html) {
        s.innerHTML = this._maybeSanitize(t);
        return;
      }
      s.textContent = t;
    }
  }
  _maybeSanitize(e) {
    return this._config.sanitize ? Nd(e, this._config.allowList, this._config.sanitizeFn) : e;
  }
  _resolvePossibleFunction(e) {
    return J(e, [void 0, this]);
  }
  _putElementInTemplate(e, t) {
    if (this._config.html) {
      t.innerHTML = "", t.append(e);
      return;
    }
    t.textContent = e.textContent;
  }
}
const Md = "tooltip", Rd = /* @__PURE__ */ new Set(["sanitize", "allowList", "sanitizeFn"]), ti = "fade", Bd = "modal", ia = "show", Hd = ".tooltip-inner", $s = `.${Bd}`, Ps = "hide.bs.modal", Ct = "hover", ai = "focus", ii = "click", Vd = "manual", qd = "hide", jd = "hidden", Fd = "show", Wd = "shown", zd = "inserted", Yd = "click", Kd = "focusin", Gd = "focusout", Ud = "mouseenter", Xd = "mouseleave", Qd = {
  AUTO: "auto",
  TOP: "top",
  RIGHT: fe() ? "left" : "right",
  BOTTOM: "bottom",
  LEFT: fe() ? "right" : "left"
}, Zd = {
  allowList: an,
  animation: !0,
  boundary: "clippingParents",
  container: !1,
  customClass: "",
  delay: 0,
  fallbackPlacements: ["top", "right", "bottom", "left"],
  html: !1,
  offset: [0, 6],
  placement: "top",
  popperConfig: null,
  sanitize: !0,
  sanitizeFn: null,
  selector: !1,
  template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
  title: "",
  trigger: "hover focus"
}, Jd = {
  allowList: "object",
  animation: "boolean",
  boundary: "(string|element)",
  container: "(string|element|boolean)",
  customClass: "(string|function)",
  delay: "(number|object)",
  fallbackPlacements: "array",
  html: "boolean",
  offset: "(array|string|function)",
  placement: "(string|function)",
  popperConfig: "(null|object|function)",
  sanitize: "boolean",
  sanitizeFn: "(null|function)",
  selector: "(string|boolean)",
  template: "string",
  title: "(string|element|function)",
  trigger: "string"
};
class yt extends he {
  constructor(e, t) {
    if (typeof Oo > "u")
      throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org/docs/v2/)");
    super(e, t), this._isEnabled = !0, this._timeout = 0, this._isHovered = null, this._activeTrigger = {}, this._popper = null, this._templateFactory = null, this._newContent = null, this.tip = null, this._setListeners(), this._config.selector || this._fixTitle();
  }
  // Getters
  static get Default() {
    return Zd;
  }
  static get DefaultType() {
    return Jd;
  }
  static get NAME() {
    return Md;
  }
  // Public
  enable() {
    this._isEnabled = !0;
  }
  disable() {
    this._isEnabled = !1;
  }
  toggleEnabled() {
    this._isEnabled = !this._isEnabled;
  }
  toggle() {
    if (this._isEnabled) {
      if (this._isShown()) {
        this._leave();
        return;
      }
      this._enter();
    }
  }
  dispose() {
    clearTimeout(this._timeout), u.off(this._element.closest($s), Ps, this._hideModalHandler), this._element.getAttribute("data-bs-original-title") && this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title")), this._disposePopper(), super.dispose();
  }
  show() {
    if (this._element.style.display === "none")
      throw new Error("Please use show on visible elements");
    if (!(this._isWithContent() && this._isEnabled))
      return;
    const e = u.trigger(this._element, this.constructor.eventName(Fd)), i = (xo(this._element) || this._element.ownerDocument.documentElement).contains(this._element);
    if (e.defaultPrevented || !i)
      return;
    this._disposePopper();
    const s = this._getTipElement();
    this._element.setAttribute("aria-describedby", s.getAttribute("id"));
    const {
      container: o
    } = this._config;
    if (this._element.ownerDocument.documentElement.contains(this.tip) || (o.append(s), u.trigger(this._element, this.constructor.eventName(zd))), this._popper = this._createPopper(s), s.classList.add(ia), "ontouchstart" in document.documentElement)
      for (const r of [].concat(...document.body.children))
        u.on(r, "mouseover", Ta);
    const n = () => {
      u.trigger(this._element, this.constructor.eventName(Wd)), this._isHovered === !1 && this._leave(), this._isHovered = !1;
    };
    this._queueCallback(n, this.tip, this._isAnimated());
  }
  hide() {
    if (!this._isShown() || u.trigger(this._element, this.constructor.eventName(qd)).defaultPrevented)
      return;
    if (this._getTipElement().classList.remove(ia), "ontouchstart" in document.documentElement)
      for (const s of [].concat(...document.body.children))
        u.off(s, "mouseover", Ta);
    this._activeTrigger[ii] = !1, this._activeTrigger[ai] = !1, this._activeTrigger[Ct] = !1, this._isHovered = null;
    const i = () => {
      this._isWithActiveTrigger() || (this._isHovered || this._disposePopper(), this._element.removeAttribute("aria-describedby"), u.trigger(this._element, this.constructor.eventName(jd)));
    };
    this._queueCallback(i, this.tip, this._isAnimated());
  }
  update() {
    this._popper && this._popper.update();
  }
  // Protected
  _isWithContent() {
    return !!this._getTitle();
  }
  _getTipElement() {
    return this.tip || (this.tip = this._createTipElement(this._newContent || this._getContentForTemplate())), this.tip;
  }
  _createTipElement(e) {
    const t = this._getTemplateFactory(e).toHtml();
    if (!t)
      return null;
    t.classList.remove(ti, ia), t.classList.add(`bs-${this.constructor.NAME}-auto`);
    const i = Hr(this.constructor.NAME).toString();
    return t.setAttribute("id", i), this._isAnimated() && t.classList.add(ti), t;
  }
  setContent(e) {
    this._newContent = e, this._isShown() && (this._disposePopper(), this.show());
  }
  _getTemplateFactory(e) {
    return this._templateFactory ? this._templateFactory.changeContent(e) : this._templateFactory = new Pd({
      ...this._config,
      // the `content` var has to be after `this._config`
      // to override config.content in case of popover
      content: e,
      extraClass: this._resolvePossibleFunction(this._config.customClass)
    }), this._templateFactory;
  }
  _getContentForTemplate() {
    return {
      [Hd]: this._getTitle()
    };
  }
  _getTitle() {
    return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title");
  }
  // Private
  _initializeOnDelegatedTarget(e) {
    return this.constructor.getOrCreateInstance(e.delegateTarget, this._getDelegateConfig());
  }
  _isAnimated() {
    return this._config.animation || this.tip && this.tip.classList.contains(ti);
  }
  _isShown() {
    return this.tip && this.tip.classList.contains(ia);
  }
  _createPopper(e) {
    const t = J(this._config.placement, [this, e, this._element]), i = Qd[t.toUpperCase()];
    return Ri(this._element, e, this._getPopperConfig(i));
  }
  _getOffset() {
    const {
      offset: e
    } = this._config;
    return typeof e == "string" ? e.split(",").map((t) => Number.parseInt(t, 10)) : typeof e == "function" ? (t) => e(t, this._element) : e;
  }
  _resolvePossibleFunction(e) {
    return J(e, [this._element, this._element]);
  }
  _getPopperConfig(e) {
    const t = {
      placement: e,
      modifiers: [{
        name: "flip",
        options: {
          fallbackPlacements: this._config.fallbackPlacements
        }
      }, {
        name: "offset",
        options: {
          offset: this._getOffset()
        }
      }, {
        name: "preventOverflow",
        options: {
          boundary: this._config.boundary
        }
      }, {
        name: "arrow",
        options: {
          element: `.${this.constructor.NAME}-arrow`
        }
      }, {
        name: "preSetPlacement",
        enabled: !0,
        phase: "beforeMain",
        fn: (i) => {
          this._getTipElement().setAttribute("data-popper-placement", i.state.placement);
        }
      }]
    };
    return {
      ...t,
      ...J(this._config.popperConfig, [void 0, t])
    };
  }
  _setListeners() {
    const e = this._config.trigger.split(" ");
    for (const t of e)
      if (t === "click")
        u.on(this._element, this.constructor.eventName(Yd), this._config.selector, (i) => {
          const s = this._initializeOnDelegatedTarget(i);
          s._activeTrigger[ii] = !(s._isShown() && s._activeTrigger[ii]), s.toggle();
        });
      else if (t !== Vd) {
        const i = t === Ct ? this.constructor.eventName(Ud) : this.constructor.eventName(Kd), s = t === Ct ? this.constructor.eventName(Xd) : this.constructor.eventName(Gd);
        u.on(this._element, i, this._config.selector, (o) => {
          const n = this._initializeOnDelegatedTarget(o);
          n._activeTrigger[o.type === "focusin" ? ai : Ct] = !0, n._enter();
        }), u.on(this._element, s, this._config.selector, (o) => {
          const n = this._initializeOnDelegatedTarget(o);
          n._activeTrigger[o.type === "focusout" ? ai : Ct] = n._element.contains(o.relatedTarget), n._leave();
        });
      }
    this._hideModalHandler = () => {
      this._element && this.hide();
    }, u.on(this._element.closest($s), Ps, this._hideModalHandler);
  }
  _fixTitle() {
    const e = this._element.getAttribute("title");
    e && (!this._element.getAttribute("aria-label") && !this._element.textContent.trim() && this._element.setAttribute("aria-label", e), this._element.setAttribute("data-bs-original-title", e), this._element.removeAttribute("title"));
  }
  _enter() {
    if (this._isShown() || this._isHovered) {
      this._isHovered = !0;
      return;
    }
    this._isHovered = !0, this._setTimeout(() => {
      this._isHovered && this.show();
    }, this._config.delay.show);
  }
  _leave() {
    this._isWithActiveTrigger() || (this._isHovered = !1, this._setTimeout(() => {
      this._isHovered || this.hide();
    }, this._config.delay.hide));
  }
  _setTimeout(e, t) {
    clearTimeout(this._timeout), this._timeout = setTimeout(e, t);
  }
  _isWithActiveTrigger() {
    return Object.values(this._activeTrigger).includes(!0);
  }
  _getConfig(e) {
    const t = Te.getDataAttributes(this._element);
    for (const i of Object.keys(t))
      Rd.has(i) && delete t[i];
    return e = {
      ...t,
      ...typeof e == "object" && e ? e : {}
    }, e = this._mergeConfigObj(e), e = this._configAfterMerge(e), this._typeCheckConfig(e), e;
  }
  _configAfterMerge(e) {
    return e.container = e.container === !1 ? document.body : Ie(e.container), typeof e.delay == "number" && (e.delay = {
      show: e.delay,
      hide: e.delay
    }), typeof e.title == "number" && (e.title = e.title.toString()), typeof e.content == "number" && (e.content = e.content.toString()), e;
  }
  _getDelegateConfig() {
    const e = {};
    for (const [t, i] of Object.entries(this._config))
      this.constructor.Default[t] !== i && (e[t] = i);
    return e.selector = !1, e.trigger = "manual", e;
  }
  _disposePopper() {
    this._popper && (this._popper.destroy(), this._popper = null), this.tip && (this.tip.remove(), this.tip = null);
  }
  // Static
  static jQueryInterface(e) {
    return this.each(function() {
      const t = yt.getOrCreateInstance(this, e);
      if (typeof e == "string") {
        if (typeof t[e] > "u")
          throw new TypeError(`No method named "${e}"`);
        t[e]();
      }
    });
  }
}
de(yt);
const ec = "popover", tc = ".popover-header", ac = ".popover-body", ic = {
  ...yt.Default,
  content: "",
  offset: [0, 8],
  placement: "right",
  template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
  trigger: "click"
}, sc = {
  ...yt.DefaultType,
  content: "(null|string|element|function)"
};
class qi extends yt {
  // Getters
  static get Default() {
    return ic;
  }
  static get DefaultType() {
    return sc;
  }
  static get NAME() {
    return ec;
  }
  // Overrides
  _isWithContent() {
    return this._getTitle() || this._getContent();
  }
  // Private
  _getContentForTemplate() {
    return {
      [tc]: this._getTitle(),
      [ac]: this._getContent()
    };
  }
  _getContent() {
    return this._resolvePossibleFunction(this._config.content);
  }
  // Static
  static jQueryInterface(e) {
    return this.each(function() {
      const t = qi.getOrCreateInstance(this, e);
      if (typeof e == "string") {
        if (typeof t[e] > "u")
          throw new TypeError(`No method named "${e}"`);
        t[e]();
      }
    });
  }
}
de(qi);
const oc = "scrollspy", nc = "bs.scrollspy", ji = `.${nc}`, rc = ".data-api", fc = `activate${ji}`, Ms = `click${ji}`, lc = `load${ji}${rc}`, dc = "dropdown-item", st = "active", cc = '[data-bs-spy="scroll"]', si = "[href]", uc = ".nav, .list-group", Rs = ".nav-link", hc = ".nav-item", pc = ".list-group-item", gc = `${Rs}, ${hc} > ${Rs}, ${pc}`, mc = ".dropdown", bc = ".dropdown-toggle", _c = {
  offset: null,
  // TODO: v6 @deprecated, keep it for backwards compatibility reasons
  rootMargin: "0px 0px -25%",
  smoothScroll: !1,
  target: null,
  threshold: [0.1, 0.5, 1]
}, vc = {
  offset: "(number|null)",
  // TODO v6 @deprecated, keep it for backwards compatibility reasons
  rootMargin: "string",
  smoothScroll: "boolean",
  target: "element",
  threshold: "array"
};
class Ia extends he {
  constructor(e, t) {
    super(e, t), this._targetLinks = /* @__PURE__ */ new Map(), this._observableSections = /* @__PURE__ */ new Map(), this._rootElement = getComputedStyle(this._element).overflowY === "visible" ? null : this._element, this._activeTarget = null, this._observer = null, this._previousScrollData = {
      visibleEntryTop: 0,
      parentScrollTop: 0
    }, this.refresh();
  }
  // Getters
  static get Default() {
    return _c;
  }
  static get DefaultType() {
    return vc;
  }
  static get NAME() {
    return oc;
  }
  // Public
  refresh() {
    this._initializeTargetsAndObservables(), this._maybeEnableSmoothScroll(), this._observer ? this._observer.disconnect() : this._observer = this._getNewObserver();
    for (const e of this._observableSections.values())
      this._observer.observe(e);
  }
  dispose() {
    this._observer.disconnect(), super.dispose();
  }
  // Private
  _configAfterMerge(e) {
    return e.target = Ie(e.target) || document.body, e.rootMargin = e.offset ? `${e.offset}px 0px -30%` : e.rootMargin, typeof e.threshold == "string" && (e.threshold = e.threshold.split(",").map((t) => Number.parseFloat(t))), e;
  }
  _maybeEnableSmoothScroll() {
    this._config.smoothScroll && (u.off(this._config.target, Ms), u.on(this._config.target, Ms, si, (e) => {
      const t = this._observableSections.get(e.target.hash);
      if (t) {
        e.preventDefault();
        const i = this._rootElement || window, s = t.offsetTop - this._element.offsetTop;
        if (i.scrollTo) {
          i.scrollTo({
            top: s,
            behavior: "smooth"
          });
          return;
        }
        i.scrollTop = s;
      }
    }));
  }
  _getNewObserver() {
    const e = {
      root: this._rootElement,
      threshold: this._config.threshold,
      rootMargin: this._config.rootMargin
    };
    return new IntersectionObserver((t) => this._observerCallback(t), e);
  }
  // The logic of selection
  _observerCallback(e) {
    const t = (n) => this._targetLinks.get(`#${n.target.id}`), i = (n) => {
      this._previousScrollData.visibleEntryTop = n.target.offsetTop, this._process(t(n));
    }, s = (this._rootElement || document.documentElement).scrollTop, o = s >= this._previousScrollData.parentScrollTop;
    this._previousScrollData.parentScrollTop = s;
    for (const n of e) {
      if (!n.isIntersecting) {
        this._activeTarget = null, this._clearActiveClass(t(n));
        continue;
      }
      const r = n.target.offsetTop >= this._previousScrollData.visibleEntryTop;
      if (o && r) {
        if (i(n), !s)
          return;
        continue;
      }
      !o && !r && i(n);
    }
  }
  _initializeTargetsAndObservables() {
    this._targetLinks = /* @__PURE__ */ new Map(), this._observableSections = /* @__PURE__ */ new Map();
    const e = _.find(si, this._config.target);
    for (const t of e) {
      if (!t.hash || $e(t))
        continue;
      const i = _.findOne(decodeURI(t.hash), this._element);
      Et(i) && (this._targetLinks.set(decodeURI(t.hash), t), this._observableSections.set(t.hash, i));
    }
  }
  _process(e) {
    this._activeTarget !== e && (this._clearActiveClass(this._config.target), this._activeTarget = e, e.classList.add(st), this._activateParents(e), u.trigger(this._element, fc, {
      relatedTarget: e
    }));
  }
  _activateParents(e) {
    if (e.classList.contains(dc)) {
      _.findOne(bc, e.closest(mc)).classList.add(st);
      return;
    }
    for (const t of _.parents(e, uc))
      for (const i of _.prev(t, gc))
        i.classList.add(st);
  }
  _clearActiveClass(e) {
    e.classList.remove(st);
    const t = _.find(`${si}.${st}`, e);
    for (const i of t)
      i.classList.remove(st);
  }
  // Static
  static jQueryInterface(e) {
    return this.each(function() {
      const t = Ia.getOrCreateInstance(this, e);
      if (typeof e == "string") {
        if (t[e] === void 0 || e.startsWith("_") || e === "constructor")
          throw new TypeError(`No method named "${e}"`);
        t[e]();
      }
    });
  }
}
u.on(window, lc, () => {
  for (const a of _.find(cc))
    Ia.getOrCreateInstance(a);
});
de(Ia);
const Ec = "tab", wc = "bs.tab", Ze = `.${wc}`, yc = `hide${Ze}`, Tc = `hidden${Ze}`, Ac = `show${Ze}`, kc = `shown${Ze}`, Cc = `click${Ze}`, Sc = `keydown${Ze}`, Dc = `load${Ze}`, Oc = "ArrowLeft", Bs = "ArrowRight", Nc = "ArrowUp", Hs = "ArrowDown", oi = "Home", Vs = "End", Ye = "active", qs = "fade", ni = "show", Lc = "dropdown", sn = ".dropdown-toggle", xc = ".dropdown-menu", ri = `:not(${sn})`, Ic = '.list-group, .nav, [role="tablist"]', $c = ".nav-item, .list-group-item", Pc = `.nav-link${ri}, .list-group-item${ri}, [role="tab"]${ri}`, on = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', fi = `${Pc}, ${on}`, Mc = `.${Ye}[data-bs-toggle="tab"], .${Ye}[data-bs-toggle="pill"], .${Ye}[data-bs-toggle="list"]`;
class _t extends he {
  constructor(e) {
    super(e), this._parent = this._element.closest(Ic), this._parent && (this._setInitialAttributes(this._parent, this._getChildren()), u.on(this._element, Sc, (t) => this._keydown(t)));
  }
  // Getters
  static get NAME() {
    return Ec;
  }
  // Public
  show() {
    const e = this._element;
    if (this._elemIsActive(e))
      return;
    const t = this._getActiveElem(), i = t ? u.trigger(t, yc, {
      relatedTarget: e
    }) : null;
    u.trigger(e, Ac, {
      relatedTarget: t
    }).defaultPrevented || i && i.defaultPrevented || (this._deactivate(t, e), this._activate(e, t));
  }
  // Private
  _activate(e, t) {
    if (!e)
      return;
    e.classList.add(Ye), this._activate(_.getElementFromSelector(e));
    const i = () => {
      if (e.getAttribute("role") !== "tab") {
        e.classList.add(ni);
        return;
      }
      e.removeAttribute("tabindex"), e.setAttribute("aria-selected", !0), this._toggleDropDown(e, !0), u.trigger(e, kc, {
        relatedTarget: t
      });
    };
    this._queueCallback(i, e, e.classList.contains(qs));
  }
  _deactivate(e, t) {
    if (!e)
      return;
    e.classList.remove(Ye), e.blur(), this._deactivate(_.getElementFromSelector(e));
    const i = () => {
      if (e.getAttribute("role") !== "tab") {
        e.classList.remove(ni);
        return;
      }
      e.setAttribute("aria-selected", !1), e.setAttribute("tabindex", "-1"), this._toggleDropDown(e, !1), u.trigger(e, Tc, {
        relatedTarget: t
      });
    };
    this._queueCallback(i, e, e.classList.contains(qs));
  }
  _keydown(e) {
    if (![Oc, Bs, Nc, Hs, oi, Vs].includes(e.key))
      return;
    e.stopPropagation(), e.preventDefault();
    const t = this._getChildren().filter((s) => !$e(s));
    let i;
    if ([oi, Vs].includes(e.key))
      i = t[e.key === oi ? 0 : t.length - 1];
    else {
      const s = [Bs, Hs].includes(e.key);
      i = Bi(t, e.target, s, !0);
    }
    i && (i.focus({
      preventScroll: !0
    }), _t.getOrCreateInstance(i).show());
  }
  _getChildren() {
    return _.find(fi, this._parent);
  }
  _getActiveElem() {
    return this._getChildren().find((e) => this._elemIsActive(e)) || null;
  }
  _setInitialAttributes(e, t) {
    this._setAttributeIfNotExists(e, "role", "tablist");
    for (const i of t)
      this._setInitialAttributesOnChild(i);
  }
  _setInitialAttributesOnChild(e) {
    e = this._getInnerElement(e);
    const t = this._elemIsActive(e), i = this._getOuterElement(e);
    e.setAttribute("aria-selected", t), i !== e && this._setAttributeIfNotExists(i, "role", "presentation"), t || e.setAttribute("tabindex", "-1"), this._setAttributeIfNotExists(e, "role", "tab"), this._setInitialAttributesOnTargetPanel(e);
  }
  _setInitialAttributesOnTargetPanel(e) {
    const t = _.getElementFromSelector(e);
    t && (this._setAttributeIfNotExists(t, "role", "tabpanel"), e.id && this._setAttributeIfNotExists(t, "aria-labelledby", `${e.id}`));
  }
  _toggleDropDown(e, t) {
    const i = this._getOuterElement(e);
    if (!i.classList.contains(Lc))
      return;
    const s = (o, n) => {
      const r = _.findOne(o, i);
      r && r.classList.toggle(n, t);
    };
    s(sn, Ye), s(xc, ni), i.setAttribute("aria-expanded", t);
  }
  _setAttributeIfNotExists(e, t, i) {
    e.hasAttribute(t) || e.setAttribute(t, i);
  }
  _elemIsActive(e) {
    return e.classList.contains(Ye);
  }
  // Try to get the inner element (usually the .nav-link)
  _getInnerElement(e) {
    return e.matches(fi) ? e : _.findOne(fi, e);
  }
  // Try to get the outer element (usually the .nav-item)
  _getOuterElement(e) {
    return e.closest($c) || e;
  }
  // Static
  static jQueryInterface(e) {
    return this.each(function() {
      const t = _t.getOrCreateInstance(this);
      if (typeof e == "string") {
        if (t[e] === void 0 || e.startsWith("_") || e === "constructor")
          throw new TypeError(`No method named "${e}"`);
        t[e]();
      }
    });
  }
}
u.on(document, Cc, on, function(a) {
  ["A", "AREA"].includes(this.tagName) && a.preventDefault(), !$e(this) && _t.getOrCreateInstance(this).show();
});
u.on(window, Dc, () => {
  for (const a of _.find(Mc))
    _t.getOrCreateInstance(a);
});
de(_t);
const Rc = "toast", Bc = "bs.toast", Be = `.${Bc}`, Hc = `mouseover${Be}`, Vc = `mouseout${Be}`, qc = `focusin${Be}`, jc = `focusout${Be}`, Fc = `hide${Be}`, Wc = `hidden${Be}`, zc = `show${Be}`, Yc = `shown${Be}`, Kc = "fade", js = "hide", sa = "show", oa = "showing", Gc = {
  animation: "boolean",
  autohide: "boolean",
  delay: "number"
}, Uc = {
  animation: !0,
  autohide: !0,
  delay: 5e3
};
class $a extends he {
  constructor(e, t) {
    super(e, t), this._timeout = null, this._hasMouseInteraction = !1, this._hasKeyboardInteraction = !1, this._setListeners();
  }
  // Getters
  static get Default() {
    return Uc;
  }
  static get DefaultType() {
    return Gc;
  }
  static get NAME() {
    return Rc;
  }
  // Public
  show() {
    if (u.trigger(this._element, zc).defaultPrevented)
      return;
    this._clearTimeout(), this._config.animation && this._element.classList.add(Kc);
    const t = () => {
      this._element.classList.remove(oa), u.trigger(this._element, Yc), this._maybeScheduleHide();
    };
    this._element.classList.remove(js), qt(this._element), this._element.classList.add(sa, oa), this._queueCallback(t, this._element, this._config.animation);
  }
  hide() {
    if (!this.isShown() || u.trigger(this._element, Fc).defaultPrevented)
      return;
    const t = () => {
      this._element.classList.add(js), this._element.classList.remove(oa, sa), u.trigger(this._element, Wc);
    };
    this._element.classList.add(oa), this._queueCallback(t, this._element, this._config.animation);
  }
  dispose() {
    this._clearTimeout(), this.isShown() && this._element.classList.remove(sa), super.dispose();
  }
  isShown() {
    return this._element.classList.contains(sa);
  }
  // Private
  _maybeScheduleHide() {
    this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(() => {
      this.hide();
    }, this._config.delay)));
  }
  _onInteraction(e, t) {
    switch (e.type) {
      case "mouseover":
      case "mouseout": {
        this._hasMouseInteraction = t;
        break;
      }
      case "focusin":
      case "focusout": {
        this._hasKeyboardInteraction = t;
        break;
      }
    }
    if (t) {
      this._clearTimeout();
      return;
    }
    const i = e.relatedTarget;
    this._element === i || this._element.contains(i) || this._maybeScheduleHide();
  }
  _setListeners() {
    u.on(this._element, Hc, (e) => this._onInteraction(e, !0)), u.on(this._element, Vc, (e) => this._onInteraction(e, !1)), u.on(this._element, qc, (e) => this._onInteraction(e, !0)), u.on(this._element, jc, (e) => this._onInteraction(e, !1));
  }
  _clearTimeout() {
    clearTimeout(this._timeout), this._timeout = null;
  }
  // Static
  static jQueryInterface(e) {
    return this.each(function() {
      const t = $a.getOrCreateInstance(this, e);
      if (typeof e == "string") {
        if (typeof t[e] > "u")
          throw new TypeError(`No method named "${e}"`);
        t[e](this);
      }
    });
  }
}
Na($a);
de($a);
function Zc(a, e) {
  console.log("Initializing IconPicker with selector:", a);
  const t = document.querySelector(a), i = document.getElementById("iconPickerPopup"), s = document.getElementById("iconList"), o = document.getElementById("closePopup"), n = document.getElementById("selectedIconDisplay"), r = document.getElementById("iconSearch");
  if (!t || !i || !s || !o || !n || !r) {
    console.error(
      "Nie znaleziono wszystkich wymaganych elementów HTML. Sprawdź czy dodałeś okno modal z #iconPickerPopup i #iconSearch!"
    );
    return;
  }
  const f = new Xe(i, {
    keyboard: !0,
    backdrop: !0
  });
  async function l() {
    try {
      return console.log("JSON loaded:", Zt), Array.isArray(Zt) ? Zt : Object.values(Zt);
    } catch (h) {
      return console.error("Błąd ładowania ikon FontAwesome:", h), [];
    }
  }
  function d(h, b, m = "") {
    h.innerHTML = "", b.filter((k) => k.toLowerCase().includes(m.toLowerCase())).forEach((k) => {
      const A = document.createElement("div");
      A.className = "cursor-pointer p-2 rounded-md hover:bg-gray-200", A.innerHTML = `<i class="${k} text-2xl"></i>`, A.setAttribute("title", k), A.dataset.icon = k, h.appendChild(A);
    });
  }
  function c(h) {
    d(s, h), f.show();
  }
  function g() {
    f.hide();
  }
  t.addEventListener("click", async () => {
    const h = await l();
    c(h);
  }), r.addEventListener("input", () => {
    const h = r.value;
    l().then((b) => {
      d(s, b, h);
    });
  }), o.addEventListener("click", g), i.addEventListener("click", (h) => {
    h.target === i && g();
  }), s.addEventListener("click", (h) => {
    const b = h.target.closest("div[title]");
    if (b) {
      const m = b.getAttribute("title");
      m && (t.value = m, n.innerHTML = `<i class="${m} text-2xl"></i>`, e && e(m), g());
    }
  });
}
export {
  Qc as MenuEditor,
  Zc as initializeIconPicker
};
