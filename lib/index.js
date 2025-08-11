/**!
 * Sortable 1.15.6
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function he(i, t) {
  var e = Object.keys(i);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(i);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(i, o).enumerable;
    })), e.push.apply(e, n);
  }
  return e;
}
function j(i) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? he(Object(e), !0).forEach(function(n) {
      Re(i, n, e[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(e)) : he(Object(e)).forEach(function(n) {
      Object.defineProperty(i, n, Object.getOwnPropertyDescriptor(e, n));
    });
  }
  return i;
}
function Bt(i) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Bt = function(t) {
    return typeof t;
  } : Bt = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Bt(i);
}
function Re(i, t, e) {
  return t in i ? Object.defineProperty(i, t, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : i[t] = e, i;
}
function q() {
  return q = Object.assign || function(i) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var n in e)
        Object.prototype.hasOwnProperty.call(e, n) && (i[n] = e[n]);
    }
    return i;
  }, q.apply(this, arguments);
}
function He(i, t) {
  if (i == null) return {};
  var e = {}, n = Object.keys(i), o, r;
  for (r = 0; r < n.length; r++)
    o = n[r], !(t.indexOf(o) >= 0) && (e[o] = i[o]);
  return e;
}
function Ge(i, t) {
  if (i == null) return {};
  var e = He(i, t), n, o;
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(i);
    for (o = 0; o < r.length; o++)
      n = r[o], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(i, n) && (e[n] = i[n]);
  }
  return e;
}
var Xe = "1.15.6";
function $(i) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(i);
}
var U = $(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), Tt = $(/Edge/i), fe = $(/firefox/i), yt = $(/safari/i) && !$(/chrome/i) && !$(/android/i), le = $(/iP(ad|od|hone)/i), ye = $(/chrome/i) && $(/android/i), De = {
  capture: !1,
  passive: !1
};
function v(i, t, e) {
  i.addEventListener(t, e, !U && De);
}
function g(i, t, e) {
  i.removeEventListener(t, e, !U && De);
}
function Gt(i, t) {
  if (t) {
    if (t[0] === ">" && (t = t.substring(1)), i)
      try {
        if (i.matches)
          return i.matches(t);
        if (i.msMatchesSelector)
          return i.msMatchesSelector(t);
        if (i.webkitMatchesSelector)
          return i.webkitMatchesSelector(t);
      } catch {
        return !1;
      }
    return !1;
  }
}
function _e(i) {
  return i.host && i !== document && i.host.nodeType ? i.host : i.parentNode;
}
function X(i, t, e, n) {
  if (i) {
    e = e || document;
    do {
      if (t != null && (t[0] === ">" ? i.parentNode === e && Gt(i, t) : Gt(i, t)) || n && i === e)
        return i;
      if (i === e) break;
    } while (i = _e(i));
  }
  return null;
}
var pe = /\s+/g;
function P(i, t, e) {
  if (i && t)
    if (i.classList)
      i.classList[e ? "add" : "remove"](t);
    else {
      var n = (" " + i.className + " ").replace(pe, " ").replace(" " + t + " ", " ");
      i.className = (n + (e ? " " + t : "")).replace(pe, " ");
    }
}
function p(i, t, e) {
  var n = i && i.style;
  if (n) {
    if (e === void 0)
      return document.defaultView && document.defaultView.getComputedStyle ? e = document.defaultView.getComputedStyle(i, "") : i.currentStyle && (e = i.currentStyle), t === void 0 ? e : e[t];
    !(t in n) && t.indexOf("webkit") === -1 && (t = "-webkit-" + t), n[t] = e + (typeof e == "string" ? "" : "px");
  }
}
function dt(i, t) {
  var e = "";
  if (typeof i == "string")
    e = i;
  else
    do {
      var n = p(i, "transform");
      n && n !== "none" && (e = n + " " + e);
    } while (!t && (i = i.parentNode));
  var o = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return o && new o(e);
}
function Ce(i, t, e) {
  if (i) {
    var n = i.getElementsByTagName(t), o = 0, r = n.length;
    if (e)
      for (; o < r; o++)
        e(n[o], o);
    return n;
  }
  return [];
}
function z() {
  var i = document.scrollingElement;
  return i || document.documentElement;
}
function T(i, t, e, n, o) {
  if (!(!i.getBoundingClientRect && i !== window)) {
    var r, a, l, s, u, h, d;
    if (i !== window && i.parentNode && i !== z() ? (r = i.getBoundingClientRect(), a = r.top, l = r.left, s = r.bottom, u = r.right, h = r.height, d = r.width) : (a = 0, l = 0, s = window.innerHeight, u = window.innerWidth, h = window.innerHeight, d = window.innerWidth), (t || e) && i !== window && (o = o || i.parentNode, !U))
      do
        if (o && o.getBoundingClientRect && (p(o, "transform") !== "none" || e && p(o, "position") !== "static")) {
          var b = o.getBoundingClientRect();
          a -= b.top + parseInt(p(o, "border-top-width")), l -= b.left + parseInt(p(o, "border-left-width")), s = a + r.height, u = l + r.width;
          break;
        }
      while (o = o.parentNode);
    if (n && i !== window) {
      var y = dt(o || i), E = y && y.a, w = y && y.d;
      y && (a /= w, l /= E, d /= E, h /= w, s = a + h, u = l + d);
    }
    return {
      top: a,
      left: l,
      bottom: s,
      right: u,
      width: d,
      height: h
    };
  }
}
function me(i, t, e) {
  for (var n = tt(i, !0), o = T(i)[t]; n; ) {
    var r = T(n)[e], a = void 0;
    if (a = o >= r, !a) return n;
    if (n === z()) break;
    n = tt(n, !1);
  }
  return !1;
}
function ht(i, t, e, n) {
  for (var o = 0, r = 0, a = i.children; r < a.length; ) {
    if (a[r].style.display !== "none" && a[r] !== f.ghost && (n || a[r] !== f.dragged) && X(a[r], e.draggable, i, !1)) {
      if (o === t)
        return a[r];
      o++;
    }
    r++;
  }
  return null;
}
function se(i, t) {
  for (var e = i.lastElementChild; e && (e === f.ghost || p(e, "display") === "none" || t && !Gt(e, t)); )
    e = e.previousElementSibling;
  return e || null;
}
function F(i, t) {
  var e = 0;
  if (!i || !i.parentNode)
    return -1;
  for (; i = i.previousElementSibling; )
    i.nodeName.toUpperCase() !== "TEMPLATE" && i !== f.clone && (!t || Gt(i, t)) && e++;
  return e;
}
function ge(i) {
  var t = 0, e = 0, n = z();
  if (i)
    do {
      var o = dt(i), r = o.a, a = o.d;
      t += i.scrollLeft * r, e += i.scrollTop * a;
    } while (i !== n && (i = i.parentNode));
  return [t, e];
}
function Ye(i, t) {
  for (var e in i)
    if (i.hasOwnProperty(e)) {
      for (var n in t)
        if (t.hasOwnProperty(n) && t[n] === i[e][n]) return Number(e);
    }
  return -1;
}
function tt(i, t) {
  if (!i || !i.getBoundingClientRect) return z();
  var e = i, n = !1;
  do
    if (e.clientWidth < e.scrollWidth || e.clientHeight < e.scrollHeight) {
      var o = p(e);
      if (e.clientWidth < e.scrollWidth && (o.overflowX == "auto" || o.overflowX == "scroll") || e.clientHeight < e.scrollHeight && (o.overflowY == "auto" || o.overflowY == "scroll")) {
        if (!e.getBoundingClientRect || e === document.body) return z();
        if (n || t) return e;
        n = !0;
      }
    }
  while (e = e.parentNode);
  return z();
}
function ze(i, t) {
  if (i && t)
    for (var e in t)
      t.hasOwnProperty(e) && (i[e] = t[e]);
  return i;
}
function $t(i, t) {
  return Math.round(i.top) === Math.round(t.top) && Math.round(i.left) === Math.round(t.left) && Math.round(i.height) === Math.round(t.height) && Math.round(i.width) === Math.round(t.width);
}
var Dt;
function Se(i, t) {
  return function() {
    if (!Dt) {
      var e = arguments, n = this;
      e.length === 1 ? i.call(n, e[0]) : i.apply(n, e), Dt = setTimeout(function() {
        Dt = void 0;
      }, t);
    }
  };
}
function je() {
  clearTimeout(Dt), Dt = void 0;
}
function Te(i, t, e) {
  i.scrollLeft += t, i.scrollTop += e;
}
function Ie(i) {
  var t = window.Polymer, e = window.jQuery || window.Zepto;
  return t && t.dom ? t.dom(i).cloneNode(!0) : e ? e(i).clone(!0)[0] : i.cloneNode(!0);
}
function Oe(i, t, e) {
  var n = {};
  return Array.from(i.children).forEach(function(o) {
    var r, a, l, s;
    if (!(!X(o, t.draggable, i, !1) || o.animated || o === e)) {
      var u = T(o);
      n.left = Math.min((r = n.left) !== null && r !== void 0 ? r : 1 / 0, u.left), n.top = Math.min((a = n.top) !== null && a !== void 0 ? a : 1 / 0, u.top), n.right = Math.max((l = n.right) !== null && l !== void 0 ? l : -1 / 0, u.right), n.bottom = Math.max((s = n.bottom) !== null && s !== void 0 ? s : -1 / 0, u.bottom);
    }
  }), n.width = n.right - n.left, n.height = n.bottom - n.top, n.x = n.left, n.y = n.top, n;
}
var A = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
function We() {
  var i = [], t;
  return {
    captureAnimationState: function() {
      if (i = [], !!this.options.animation) {
        var n = [].slice.call(this.el.children);
        n.forEach(function(o) {
          if (!(p(o, "display") === "none" || o === f.ghost)) {
            i.push({
              target: o,
              rect: T(o)
            });
            var r = j({}, i[i.length - 1].rect);
            if (o.thisAnimationDuration) {
              var a = dt(o, !0);
              a && (r.top -= a.f, r.left -= a.e);
            }
            o.fromRect = r;
          }
        });
      }
    },
    addAnimationState: function(n) {
      i.push(n);
    },
    removeAnimationState: function(n) {
      i.splice(Ye(i, {
        target: n
      }), 1);
    },
    animateAll: function(n) {
      var o = this;
      if (!this.options.animation) {
        clearTimeout(t), typeof n == "function" && n();
        return;
      }
      var r = !1, a = 0;
      i.forEach(function(l) {
        var s = 0, u = l.target, h = u.fromRect, d = T(u), b = u.prevFromRect, y = u.prevToRect, E = l.rect, w = dt(u, !0);
        w && (d.top -= w.f, d.left -= w.e), u.toRect = d, u.thisAnimationDuration && $t(b, d) && !$t(h, d) && // Make sure animatingRect is on line between toRect & fromRect
        (E.top - d.top) / (E.left - d.left) === (h.top - d.top) / (h.left - d.left) && (s = $e(E, b, y, o.options)), $t(d, h) || (u.prevFromRect = h, u.prevToRect = d, s || (s = o.options.animation), o.animate(u, E, d, s)), s && (r = !0, a = Math.max(a, s), clearTimeout(u.animationResetTimer), u.animationResetTimer = setTimeout(function() {
          u.animationTime = 0, u.prevFromRect = null, u.fromRect = null, u.prevToRect = null, u.thisAnimationDuration = null;
        }, s), u.thisAnimationDuration = s);
      }), clearTimeout(t), r ? t = setTimeout(function() {
        typeof n == "function" && n();
      }, a) : typeof n == "function" && n(), i = [];
    },
    animate: function(n, o, r, a) {
      if (a) {
        p(n, "transition", ""), p(n, "transform", "");
        var l = dt(this.el), s = l && l.a, u = l && l.d, h = (o.left - r.left) / (s || 1), d = (o.top - r.top) / (u || 1);
        n.animatingX = !!h, n.animatingY = !!d, p(n, "transform", "translate3d(" + h + "px," + d + "px,0)"), this.forRepaintDummy = Ve(n), p(n, "transition", "transform " + a + "ms" + (this.options.easing ? " " + this.options.easing : "")), p(n, "transform", "translate3d(0,0,0)"), typeof n.animated == "number" && clearTimeout(n.animated), n.animated = setTimeout(function() {
          p(n, "transition", ""), p(n, "transform", ""), n.animated = !1, n.animatingX = !1, n.animatingY = !1;
        }, a);
      }
    }
  };
}
function Ve(i) {
  return i.offsetWidth;
}
function $e(i, t, e, n) {
  return Math.sqrt(Math.pow(t.top - i.top, 2) + Math.pow(t.left - i.left, 2)) / Math.sqrt(Math.pow(t.top - e.top, 2) + Math.pow(t.left - e.left, 2)) * n.animation;
}
var lt = [], qt = {
  initializeByDefault: !0
}, It = {
  mount: function(t) {
    for (var e in qt)
      qt.hasOwnProperty(e) && !(e in t) && (t[e] = qt[e]);
    lt.forEach(function(n) {
      if (n.pluginName === t.pluginName)
        throw "Sortable: Cannot mount plugin ".concat(t.pluginName, " more than once");
    }), lt.push(t);
  },
  pluginEvent: function(t, e, n) {
    var o = this;
    this.eventCanceled = !1, n.cancel = function() {
      o.eventCanceled = !0;
    };
    var r = t + "Global";
    lt.forEach(function(a) {
      e[a.pluginName] && (e[a.pluginName][r] && e[a.pluginName][r](j({
        sortable: e
      }, n)), e.options[a.pluginName] && e[a.pluginName][t] && e[a.pluginName][t](j({
        sortable: e
      }, n)));
    });
  },
  initializePlugins: function(t, e, n, o) {
    lt.forEach(function(l) {
      var s = l.pluginName;
      if (!(!t.options[s] && !l.initializeByDefault)) {
        var u = new l(t, e, t.options);
        u.sortable = t, u.options = t.options, t[s] = u, q(n, u.defaults);
      }
    });
    for (var r in t.options)
      if (t.options.hasOwnProperty(r)) {
        var a = this.modifyOption(t, r, t.options[r]);
        typeof a < "u" && (t.options[r] = a);
      }
  },
  getEventProperties: function(t, e) {
    var n = {};
    return lt.forEach(function(o) {
      typeof o.eventProperties == "function" && q(n, o.eventProperties.call(e[o.pluginName], t));
    }), n;
  },
  modifyOption: function(t, e, n) {
    var o;
    return lt.forEach(function(r) {
      t[r.pluginName] && r.optionListeners && typeof r.optionListeners[e] == "function" && (o = r.optionListeners[e].call(t[r.pluginName], n));
    }), o;
  }
};
function qe(i) {
  var t = i.sortable, e = i.rootEl, n = i.name, o = i.targetEl, r = i.cloneEl, a = i.toEl, l = i.fromEl, s = i.oldIndex, u = i.newIndex, h = i.oldDraggableIndex, d = i.newDraggableIndex, b = i.originalEvent, y = i.putSortable, E = i.extraEventProperties;
  if (t = t || e && e[A], !!t) {
    var w, R = t.options, W = "on" + n.charAt(0).toUpperCase() + n.substr(1);
    window.CustomEvent && !U && !Tt ? w = new CustomEvent(n, {
      bubbles: !0,
      cancelable: !0
    }) : (w = document.createEvent("Event"), w.initEvent(n, !0, !0)), w.to = a || e, w.from = l || e, w.item = o || e, w.clone = r, w.oldIndex = s, w.newIndex = u, w.oldDraggableIndex = h, w.newDraggableIndex = d, w.originalEvent = b, w.pullMode = y ? y.lastPutMode : void 0;
    var L = j(j({}, E), It.getEventProperties(n, t));
    for (var H in L)
      w[H] = L[H];
    e && e.dispatchEvent(w), R[W] && R[W].call(t, w);
  }
}
var Ue = ["evt"], k = function(t, e) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, o = n.evt, r = Ge(n, Ue);
  It.pluginEvent.bind(f)(t, e, j({
    dragEl: c,
    parentEl: C,
    ghostEl: m,
    rootEl: D,
    nextEl: at,
    lastDownEl: Nt,
    cloneEl: _,
    cloneHidden: Q,
    dragStarted: bt,
    putSortable: I,
    activeSortable: f.active,
    originalEvent: o,
    oldIndex: ct,
    oldDraggableIndex: _t,
    newIndex: M,
    newDraggableIndex: K,
    hideGhostForTarget: Ae,
    unhideGhostForTarget: Be,
    cloneNowHidden: function() {
      Q = !0;
    },
    cloneNowShown: function() {
      Q = !1;
    },
    dispatchSortableEvent: function(l) {
      x({
        sortable: e,
        name: l,
        originalEvent: o
      });
    }
  }, r));
};
function x(i) {
  qe(j({
    putSortable: I,
    cloneEl: _,
    targetEl: c,
    rootEl: D,
    oldIndex: ct,
    oldDraggableIndex: _t,
    newIndex: M,
    newDraggableIndex: K
  }, i));
}
var c, C, m, D, at, Nt, _, Q, ct, M, _t, K, Lt, I, ut = !1, Xt = !1, Yt = [], ot, G, Ut, Zt, ve, be, bt, st, Ct, St = !1, xt = !1, Pt, O, Jt = [], ne = !1, zt = [], Vt = typeof document < "u", kt = le, Ee = Tt || U ? "cssFloat" : "float", Ze = Vt && !ye && !le && "draggable" in document.createElement("div"), Le = function() {
  if (Vt) {
    if (U)
      return !1;
    var i = document.createElement("x");
    return i.style.cssText = "pointer-events:auto", i.style.pointerEvents === "auto";
  }
}(), xe = function(t, e) {
  var n = p(t), o = parseInt(n.width) - parseInt(n.paddingLeft) - parseInt(n.paddingRight) - parseInt(n.borderLeftWidth) - parseInt(n.borderRightWidth), r = ht(t, 0, e), a = ht(t, 1, e), l = r && p(r), s = a && p(a), u = l && parseInt(l.marginLeft) + parseInt(l.marginRight) + T(r).width, h = s && parseInt(s.marginLeft) + parseInt(s.marginRight) + T(a).width;
  if (n.display === "flex")
    return n.flexDirection === "column" || n.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (n.display === "grid")
    return n.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (r && l.float && l.float !== "none") {
    var d = l.float === "left" ? "left" : "right";
    return a && (s.clear === "both" || s.clear === d) ? "vertical" : "horizontal";
  }
  return r && (l.display === "block" || l.display === "flex" || l.display === "table" || l.display === "grid" || u >= o && n[Ee] === "none" || a && n[Ee] === "none" && u + h > o) ? "vertical" : "horizontal";
}, Je = function(t, e, n) {
  var o = n ? t.left : t.top, r = n ? t.right : t.bottom, a = n ? t.width : t.height, l = n ? e.left : e.top, s = n ? e.right : e.bottom, u = n ? e.width : e.height;
  return o === l || r === s || o + a / 2 === l + u / 2;
}, Ke = function(t, e) {
  var n;
  return Yt.some(function(o) {
    var r = o[A].options.emptyInsertThreshold;
    if (!(!r || se(o))) {
      var a = T(o), l = t >= a.left - r && t <= a.right + r, s = e >= a.top - r && e <= a.bottom + r;
      if (l && s)
        return n = o;
    }
  }), n;
}, ke = function(t) {
  function e(r, a) {
    return function(l, s, u, h) {
      var d = l.options.group.name && s.options.group.name && l.options.group.name === s.options.group.name;
      if (r == null && (a || d))
        return !0;
      if (r == null || r === !1)
        return !1;
      if (a && r === "clone")
        return r;
      if (typeof r == "function")
        return e(r(l, s, u, h), a)(l, s, u, h);
      var b = (a ? l : s).options.group.name;
      return r === !0 || typeof r == "string" && r === b || r.join && r.indexOf(b) > -1;
    };
  }
  var n = {}, o = t.group;
  (!o || Bt(o) != "object") && (o = {
    name: o
  }), n.name = o.name, n.checkPull = e(o.pull, !0), n.checkPut = e(o.put), n.revertClone = o.revertClone, t.group = n;
}, Ae = function() {
  !Le && m && p(m, "display", "none");
}, Be = function() {
  !Le && m && p(m, "display", "");
};
Vt && !ye && document.addEventListener("click", function(i) {
  if (Xt)
    return i.preventDefault(), i.stopPropagation && i.stopPropagation(), i.stopImmediatePropagation && i.stopImmediatePropagation(), Xt = !1, !1;
}, !0);
var rt = function(t) {
  if (c) {
    t = t.touches ? t.touches[0] : t;
    var e = Ke(t.clientX, t.clientY);
    if (e) {
      var n = {};
      for (var o in t)
        t.hasOwnProperty(o) && (n[o] = t[o]);
      n.target = n.rootEl = e, n.preventDefault = void 0, n.stopPropagation = void 0, e[A]._onDragOver(n);
    }
  }
}, Qe = function(t) {
  c && c.parentNode[A]._isOutsideThisEl(t.target);
};
function f(i, t) {
  if (!(i && i.nodeType && i.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(i));
  this.el = i, this.options = t = q({}, t), i[A] = this;
  var e = {
    group: null,
    sort: !0,
    disabled: !1,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(i.nodeName) ? ">li" : ">*",
    swapThreshold: 1,
    // percentage; 0 <= x <= 1
    invertSwap: !1,
    // invert always
    invertedSwapThreshold: null,
    // will be set to same as swapThreshold if default
    removeCloneOnHide: !0,
    direction: function() {
      return xe(i, this.options);
    },
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    ignore: "a, img",
    filter: null,
    preventOnFilter: !0,
    animation: 0,
    easing: null,
    setData: function(a, l) {
      a.setData("Text", l.textContent);
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
    supportPointer: f.supportPointer !== !1 && "PointerEvent" in window && (!yt || le),
    emptyInsertThreshold: 5
  };
  It.initializePlugins(this, i, e);
  for (var n in e)
    !(n in t) && (t[n] = e[n]);
  ke(t);
  for (var o in this)
    o.charAt(0) === "_" && typeof this[o] == "function" && (this[o] = this[o].bind(this));
  this.nativeDraggable = t.forceFallback ? !1 : Ze, this.nativeDraggable && (this.options.touchStartThreshold = 1), t.supportPointer ? v(i, "pointerdown", this._onTapStart) : (v(i, "mousedown", this._onTapStart), v(i, "touchstart", this._onTapStart)), this.nativeDraggable && (v(i, "dragover", this), v(i, "dragenter", this)), Yt.push(this.el), t.store && t.store.get && this.sort(t.store.get(this) || []), q(this, We());
}
f.prototype = /** @lends Sortable.prototype */
{
  constructor: f,
  _isOutsideThisEl: function(t) {
    !this.el.contains(t) && t !== this.el && (st = null);
  },
  _getDirection: function(t, e) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, t, e, c) : this.options.direction;
  },
  _onTapStart: function(t) {
    if (t.cancelable) {
      var e = this, n = this.el, o = this.options, r = o.preventOnFilter, a = t.type, l = t.touches && t.touches[0] || t.pointerType && t.pointerType === "touch" && t, s = (l || t).target, u = t.target.shadowRoot && (t.path && t.path[0] || t.composedPath && t.composedPath()[0]) || s, h = o.filter;
      if (sn(n), !c && !(/mousedown|pointerdown/.test(a) && t.button !== 0 || o.disabled) && !u.isContentEditable && !(!this.nativeDraggable && yt && s && s.tagName.toUpperCase() === "SELECT") && (s = X(s, o.draggable, n, !1), !(s && s.animated) && Nt !== s)) {
        if (ct = F(s), _t = F(s, o.draggable), typeof h == "function") {
          if (h.call(this, t, s, this)) {
            x({
              sortable: e,
              rootEl: u,
              name: "filter",
              targetEl: s,
              toEl: n,
              fromEl: n
            }), k("filter", e, {
              evt: t
            }), r && t.preventDefault();
            return;
          }
        } else if (h && (h = h.split(",").some(function(d) {
          if (d = X(u, d.trim(), n, !1), d)
            return x({
              sortable: e,
              rootEl: d,
              name: "filter",
              targetEl: s,
              fromEl: n,
              toEl: n
            }), k("filter", e, {
              evt: t
            }), !0;
        }), h)) {
          r && t.preventDefault();
          return;
        }
        o.handle && !X(u, o.handle, n, !1) || this._prepareDragStart(t, l, s);
      }
    }
  },
  _prepareDragStart: function(t, e, n) {
    var o = this, r = o.el, a = o.options, l = r.ownerDocument, s;
    if (n && !c && n.parentNode === r) {
      var u = T(n);
      if (D = r, c = n, C = c.parentNode, at = c.nextSibling, Nt = n, Lt = a.group, f.dragged = c, ot = {
        target: c,
        clientX: (e || t).clientX,
        clientY: (e || t).clientY
      }, ve = ot.clientX - u.left, be = ot.clientY - u.top, this._lastX = (e || t).clientX, this._lastY = (e || t).clientY, c.style["will-change"] = "all", s = function() {
        if (k("delayEnded", o, {
          evt: t
        }), f.eventCanceled) {
          o._onDrop();
          return;
        }
        o._disableDelayedDragEvents(), !fe && o.nativeDraggable && (c.draggable = !0), o._triggerDragStart(t, e), x({
          sortable: o,
          name: "choose",
          originalEvent: t
        }), P(c, a.chosenClass, !0);
      }, a.ignore.split(",").forEach(function(h) {
        Ce(c, h.trim(), Kt);
      }), v(l, "dragover", rt), v(l, "mousemove", rt), v(l, "touchmove", rt), a.supportPointer ? (v(l, "pointerup", o._onDrop), !this.nativeDraggable && v(l, "pointercancel", o._onDrop)) : (v(l, "mouseup", o._onDrop), v(l, "touchend", o._onDrop), v(l, "touchcancel", o._onDrop)), fe && this.nativeDraggable && (this.options.touchStartThreshold = 4, c.draggable = !0), k("delayStart", this, {
        evt: t
      }), a.delay && (!a.delayOnTouchOnly || e) && (!this.nativeDraggable || !(Tt || U))) {
        if (f.eventCanceled) {
          this._onDrop();
          return;
        }
        a.supportPointer ? (v(l, "pointerup", o._disableDelayedDrag), v(l, "pointercancel", o._disableDelayedDrag)) : (v(l, "mouseup", o._disableDelayedDrag), v(l, "touchend", o._disableDelayedDrag), v(l, "touchcancel", o._disableDelayedDrag)), v(l, "mousemove", o._delayedDragTouchMoveHandler), v(l, "touchmove", o._delayedDragTouchMoveHandler), a.supportPointer && v(l, "pointermove", o._delayedDragTouchMoveHandler), o._dragStartTimer = setTimeout(s, a.delay);
      } else
        s();
    }
  },
  _delayedDragTouchMoveHandler: function(t) {
    var e = t.touches ? t.touches[0] : t;
    Math.max(Math.abs(e.clientX - this._lastX), Math.abs(e.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function() {
    c && Kt(c), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var t = this.el.ownerDocument;
    g(t, "mouseup", this._disableDelayedDrag), g(t, "touchend", this._disableDelayedDrag), g(t, "touchcancel", this._disableDelayedDrag), g(t, "pointerup", this._disableDelayedDrag), g(t, "pointercancel", this._disableDelayedDrag), g(t, "mousemove", this._delayedDragTouchMoveHandler), g(t, "touchmove", this._delayedDragTouchMoveHandler), g(t, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(t, e) {
    e = e || t.pointerType == "touch" && t, !this.nativeDraggable || e ? this.options.supportPointer ? v(document, "pointermove", this._onTouchMove) : e ? v(document, "touchmove", this._onTouchMove) : v(document, "mousemove", this._onTouchMove) : (v(c, "dragend", this), v(D, "dragstart", this._onDragStart));
    try {
      document.selection ? Mt(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(t, e) {
    if (ut = !1, D && c) {
      k("dragStarted", this, {
        evt: e
      }), this.nativeDraggable && v(document, "dragover", Qe);
      var n = this.options;
      !t && P(c, n.dragClass, !1), P(c, n.ghostClass, !0), f.active = this, t && this._appendGhost(), x({
        sortable: this,
        name: "start",
        originalEvent: e
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (G) {
      this._lastX = G.clientX, this._lastY = G.clientY, Ae();
      for (var t = document.elementFromPoint(G.clientX, G.clientY), e = t; t && t.shadowRoot && (t = t.shadowRoot.elementFromPoint(G.clientX, G.clientY), t !== e); )
        e = t;
      if (c.parentNode[A]._isOutsideThisEl(t), e)
        do {
          if (e[A]) {
            var n = void 0;
            if (n = e[A]._onDragOver({
              clientX: G.clientX,
              clientY: G.clientY,
              target: t,
              rootEl: e
            }), n && !this.options.dragoverBubble)
              break;
          }
          t = e;
        } while (e = _e(e));
      Be();
    }
  },
  _onTouchMove: function(t) {
    if (ot) {
      var e = this.options, n = e.fallbackTolerance, o = e.fallbackOffset, r = t.touches ? t.touches[0] : t, a = m && dt(m, !0), l = m && a && a.a, s = m && a && a.d, u = kt && O && ge(O), h = (r.clientX - ot.clientX + o.x) / (l || 1) + (u ? u[0] - Jt[0] : 0) / (l || 1), d = (r.clientY - ot.clientY + o.y) / (s || 1) + (u ? u[1] - Jt[1] : 0) / (s || 1);
      if (!f.active && !ut) {
        if (n && Math.max(Math.abs(r.clientX - this._lastX), Math.abs(r.clientY - this._lastY)) < n)
          return;
        this._onDragStart(t, !0);
      }
      if (m) {
        a ? (a.e += h - (Ut || 0), a.f += d - (Zt || 0)) : a = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: h,
          f: d
        };
        var b = "matrix(".concat(a.a, ",").concat(a.b, ",").concat(a.c, ",").concat(a.d, ",").concat(a.e, ",").concat(a.f, ")");
        p(m, "webkitTransform", b), p(m, "mozTransform", b), p(m, "msTransform", b), p(m, "transform", b), Ut = h, Zt = d, G = r;
      }
      t.cancelable && t.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!m) {
      var t = this.options.fallbackOnBody ? document.body : D, e = T(c, !0, kt, !0, t), n = this.options;
      if (kt) {
        for (O = t; p(O, "position") === "static" && p(O, "transform") === "none" && O !== document; )
          O = O.parentNode;
        O !== document.body && O !== document.documentElement ? (O === document && (O = z()), e.top += O.scrollTop, e.left += O.scrollLeft) : O = z(), Jt = ge(O);
      }
      m = c.cloneNode(!0), P(m, n.ghostClass, !1), P(m, n.fallbackClass, !0), P(m, n.dragClass, !0), p(m, "transition", ""), p(m, "transform", ""), p(m, "box-sizing", "border-box"), p(m, "margin", 0), p(m, "top", e.top), p(m, "left", e.left), p(m, "width", e.width), p(m, "height", e.height), p(m, "opacity", "0.8"), p(m, "position", kt ? "absolute" : "fixed"), p(m, "zIndex", "100000"), p(m, "pointerEvents", "none"), f.ghost = m, t.appendChild(m), p(m, "transform-origin", ve / parseInt(m.style.width) * 100 + "% " + be / parseInt(m.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(t, e) {
    var n = this, o = t.dataTransfer, r = n.options;
    if (k("dragStart", this, {
      evt: t
    }), f.eventCanceled) {
      this._onDrop();
      return;
    }
    k("setupClone", this), f.eventCanceled || (_ = Ie(c), _.removeAttribute("id"), _.draggable = !1, _.style["will-change"] = "", this._hideClone(), P(_, this.options.chosenClass, !1), f.clone = _), n.cloneId = Mt(function() {
      k("clone", n), !f.eventCanceled && (n.options.removeCloneOnHide || D.insertBefore(_, c), n._hideClone(), x({
        sortable: n,
        name: "clone"
      }));
    }), !e && P(c, r.dragClass, !0), e ? (Xt = !0, n._loopId = setInterval(n._emulateDragOver, 50)) : (g(document, "mouseup", n._onDrop), g(document, "touchend", n._onDrop), g(document, "touchcancel", n._onDrop), o && (o.effectAllowed = "move", r.setData && r.setData.call(n, o, c)), v(document, "drop", n), p(c, "transform", "translateZ(0)")), ut = !0, n._dragStartId = Mt(n._dragStarted.bind(n, e, t)), v(document, "selectstart", n), bt = !0, window.getSelection().removeAllRanges(), yt && p(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(t) {
    var e = this.el, n = t.target, o, r, a, l = this.options, s = l.group, u = f.active, h = Lt === s, d = l.sort, b = I || u, y, E = this, w = !1;
    if (ne) return;
    function R(vt, Me) {
      k(vt, E, j({
        evt: t,
        isOwner: h,
        axis: y ? "vertical" : "horizontal",
        revert: a,
        dragRect: o,
        targetRect: r,
        canSort: d,
        fromSortable: b,
        target: n,
        completed: L,
        onMove: function(de, Fe) {
          return At(D, e, c, o, de, T(de), t, Fe);
        },
        changed: H
      }, Me));
    }
    function W() {
      R("dragOverAnimationCapture"), E.captureAnimationState(), E !== b && b.captureAnimationState();
    }
    function L(vt) {
      return R("dragOverCompleted", {
        insertion: vt
      }), vt && (h ? u._hideClone() : u._showClone(E), E !== b && (P(c, I ? I.options.ghostClass : u.options.ghostClass, !1), P(c, l.ghostClass, !0)), I !== E && E !== f.active ? I = E : E === f.active && I && (I = null), b === E && (E._ignoreWhileAnimating = n), E.animateAll(function() {
        R("dragOverAnimationComplete"), E._ignoreWhileAnimating = null;
      }), E !== b && (b.animateAll(), b._ignoreWhileAnimating = null)), (n === c && !c.animated || n === e && !n.animated) && (st = null), !l.dragoverBubble && !t.rootEl && n !== document && (c.parentNode[A]._isOutsideThisEl(t.target), !vt && rt(t)), !l.dragoverBubble && t.stopPropagation && t.stopPropagation(), w = !0;
    }
    function H() {
      M = F(c), K = F(c, l.draggable), x({
        sortable: E,
        name: "change",
        toEl: e,
        newIndex: M,
        newDraggableIndex: K,
        originalEvent: t
      });
    }
    if (t.preventDefault !== void 0 && t.cancelable && t.preventDefault(), n = X(n, l.draggable, e, !0), R("dragOver"), f.eventCanceled) return w;
    if (c.contains(t.target) || n.animated && n.animatingX && n.animatingY || E._ignoreWhileAnimating === n)
      return L(!1);
    if (Xt = !1, u && !l.disabled && (h ? d || (a = C !== D) : I === this || (this.lastPutMode = Lt.checkPull(this, u, c, t)) && s.checkPut(this, u, c, t))) {
      if (y = this._getDirection(t, n) === "vertical", o = T(c), R("dragOverValid"), f.eventCanceled) return w;
      if (a)
        return C = D, W(), this._hideClone(), R("revert"), f.eventCanceled || (at ? D.insertBefore(c, at) : D.appendChild(c)), L(!0);
      var B = se(e, l.draggable);
      if (!B || on(t, y, this) && !B.animated) {
        if (B === c)
          return L(!1);
        if (B && e === t.target && (n = B), n && (r = T(n)), At(D, e, c, o, n, r, t, !!n) !== !1)
          return W(), B && B.nextSibling ? e.insertBefore(c, B.nextSibling) : e.appendChild(c), C = e, H(), L(!0);
      } else if (B && nn(t, y, this)) {
        var et = ht(e, 0, l, !0);
        if (et === c)
          return L(!1);
        if (n = et, r = T(n), At(D, e, c, o, n, r, t, !1) !== !1)
          return W(), e.insertBefore(c, et), C = e, H(), L(!0);
      } else if (n.parentNode === e) {
        r = T(n);
        var Y = 0, nt, ft = c.parentNode !== e, N = !Je(c.animated && c.toRect || o, n.animated && n.toRect || r, y), pt = y ? "top" : "left", Z = me(n, "top", "top") || me(c, "top", "top"), mt = Z ? Z.scrollTop : void 0;
        st !== n && (nt = r[pt], St = !1, xt = !N && l.invertSwap || ft), Y = rn(t, n, r, y, N ? 1 : l.swapThreshold, l.invertedSwapThreshold == null ? l.swapThreshold : l.invertedSwapThreshold, xt, st === n);
        var V;
        if (Y !== 0) {
          var it = F(c);
          do
            it -= Y, V = C.children[it];
          while (V && (p(V, "display") === "none" || V === m));
        }
        if (Y === 0 || V === n)
          return L(!1);
        st = n, Ct = Y;
        var gt = n.nextElementSibling, J = !1;
        J = Y === 1;
        var Ot = At(D, e, c, o, n, r, t, J);
        if (Ot !== !1)
          return (Ot === 1 || Ot === -1) && (J = Ot === 1), ne = !0, setTimeout(en, 30), W(), J && !gt ? e.appendChild(c) : n.parentNode.insertBefore(c, J ? gt : n), Z && Te(Z, 0, mt - Z.scrollTop), C = c.parentNode, nt !== void 0 && !xt && (Pt = Math.abs(nt - T(n)[pt])), H(), L(!0);
      }
      if (e.contains(c))
        return L(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    g(document, "mousemove", this._onTouchMove), g(document, "touchmove", this._onTouchMove), g(document, "pointermove", this._onTouchMove), g(document, "dragover", rt), g(document, "mousemove", rt), g(document, "touchmove", rt);
  },
  _offUpEvents: function() {
    var t = this.el.ownerDocument;
    g(t, "mouseup", this._onDrop), g(t, "touchend", this._onDrop), g(t, "pointerup", this._onDrop), g(t, "pointercancel", this._onDrop), g(t, "touchcancel", this._onDrop), g(document, "selectstart", this);
  },
  _onDrop: function(t) {
    var e = this.el, n = this.options;
    if (M = F(c), K = F(c, n.draggable), k("drop", this, {
      evt: t
    }), C = c && c.parentNode, M = F(c), K = F(c, n.draggable), f.eventCanceled) {
      this._nulling();
      return;
    }
    ut = !1, xt = !1, St = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), ie(this.cloneId), ie(this._dragStartId), this.nativeDraggable && (g(document, "drop", this), g(e, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), yt && p(document.body, "user-select", ""), p(c, "transform", ""), t && (bt && (t.cancelable && t.preventDefault(), !n.dropBubble && t.stopPropagation()), m && m.parentNode && m.parentNode.removeChild(m), (D === C || I && I.lastPutMode !== "clone") && _ && _.parentNode && _.parentNode.removeChild(_), c && (this.nativeDraggable && g(c, "dragend", this), Kt(c), c.style["will-change"] = "", bt && !ut && P(c, I ? I.options.ghostClass : this.options.ghostClass, !1), P(c, this.options.chosenClass, !1), x({
      sortable: this,
      name: "unchoose",
      toEl: C,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: t
    }), D !== C ? (M >= 0 && (x({
      rootEl: C,
      name: "add",
      toEl: C,
      fromEl: D,
      originalEvent: t
    }), x({
      sortable: this,
      name: "remove",
      toEl: C,
      originalEvent: t
    }), x({
      rootEl: C,
      name: "sort",
      toEl: C,
      fromEl: D,
      originalEvent: t
    }), x({
      sortable: this,
      name: "sort",
      toEl: C,
      originalEvent: t
    })), I && I.save()) : M !== ct && M >= 0 && (x({
      sortable: this,
      name: "update",
      toEl: C,
      originalEvent: t
    }), x({
      sortable: this,
      name: "sort",
      toEl: C,
      originalEvent: t
    })), f.active && ((M == null || M === -1) && (M = ct, K = _t), x({
      sortable: this,
      name: "end",
      toEl: C,
      originalEvent: t
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    k("nulling", this), D = c = C = m = at = _ = Nt = Q = ot = G = bt = M = K = ct = _t = st = Ct = I = Lt = f.dragged = f.ghost = f.clone = f.active = null, zt.forEach(function(t) {
      t.checked = !0;
    }), zt.length = Ut = Zt = 0;
  },
  handleEvent: function(t) {
    switch (t.type) {
      case "drop":
      case "dragend":
        this._onDrop(t);
        break;
      case "dragenter":
      case "dragover":
        c && (this._onDragOver(t), tn(t));
        break;
      case "selectstart":
        t.preventDefault();
        break;
    }
  },
  /**
   * Serializes the item into an array of string.
   * @returns {String[]}
   */
  toArray: function() {
    for (var t = [], e, n = this.el.children, o = 0, r = n.length, a = this.options; o < r; o++)
      e = n[o], X(e, a.draggable, this.el, !1) && t.push(e.getAttribute(a.dataIdAttr) || ln(e));
    return t;
  },
  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function(t, e) {
    var n = {}, o = this.el;
    this.toArray().forEach(function(r, a) {
      var l = o.children[a];
      X(l, this.options.draggable, o, !1) && (n[r] = l);
    }, this), e && this.captureAnimationState(), t.forEach(function(r) {
      n[r] && (o.removeChild(n[r]), o.appendChild(n[r]));
    }), e && this.animateAll();
  },
  /**
   * Save the current sorting
   */
  save: function() {
    var t = this.options.store;
    t && t.set && t.set(this);
  },
  /**
   * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
   * @param   {HTMLElement}  el
   * @param   {String}       [selector]  default: `options.draggable`
   * @returns {HTMLElement|null}
   */
  closest: function(t, e) {
    return X(t, e || this.options.draggable, this.el, !1);
  },
  /**
   * Set/get option
   * @param   {string} name
   * @param   {*}      [value]
   * @returns {*}
   */
  option: function(t, e) {
    var n = this.options;
    if (e === void 0)
      return n[t];
    var o = It.modifyOption(this, t, e);
    typeof o < "u" ? n[t] = o : n[t] = e, t === "group" && ke(n);
  },
  /**
   * Destroy
   */
  destroy: function() {
    k("destroy", this);
    var t = this.el;
    t[A] = null, g(t, "mousedown", this._onTapStart), g(t, "touchstart", this._onTapStart), g(t, "pointerdown", this._onTapStart), this.nativeDraggable && (g(t, "dragover", this), g(t, "dragenter", this)), Array.prototype.forEach.call(t.querySelectorAll("[draggable]"), function(e) {
      e.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), Yt.splice(Yt.indexOf(this.el), 1), this.el = t = null;
  },
  _hideClone: function() {
    if (!Q) {
      if (k("hideClone", this), f.eventCanceled) return;
      p(_, "display", "none"), this.options.removeCloneOnHide && _.parentNode && _.parentNode.removeChild(_), Q = !0;
    }
  },
  _showClone: function(t) {
    if (t.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (Q) {
      if (k("showClone", this), f.eventCanceled) return;
      c.parentNode == D && !this.options.group.revertClone ? D.insertBefore(_, c) : at ? D.insertBefore(_, at) : D.appendChild(_), this.options.group.revertClone && this.animate(c, _), p(_, "display", ""), Q = !1;
    }
  }
};
function tn(i) {
  i.dataTransfer && (i.dataTransfer.dropEffect = "move"), i.cancelable && i.preventDefault();
}
function At(i, t, e, n, o, r, a, l) {
  var s, u = i[A], h = u.options.onMove, d;
  return window.CustomEvent && !U && !Tt ? s = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (s = document.createEvent("Event"), s.initEvent("move", !0, !0)), s.to = t, s.from = i, s.dragged = e, s.draggedRect = n, s.related = o || t, s.relatedRect = r || T(t), s.willInsertAfter = l, s.originalEvent = a, i.dispatchEvent(s), h && (d = h.call(u, s, a)), d;
}
function Kt(i) {
  i.draggable = !1;
}
function en() {
  ne = !1;
}
function nn(i, t, e) {
  var n = T(ht(e.el, 0, e.options, !0)), o = Oe(e.el, e.options, m), r = 10;
  return t ? i.clientX < o.left - r || i.clientY < n.top && i.clientX < n.right : i.clientY < o.top - r || i.clientY < n.bottom && i.clientX < n.left;
}
function on(i, t, e) {
  var n = T(se(e.el, e.options.draggable)), o = Oe(e.el, e.options, m), r = 10;
  return t ? i.clientX > o.right + r || i.clientY > n.bottom && i.clientX > n.left : i.clientY > o.bottom + r || i.clientX > n.right && i.clientY > n.top;
}
function rn(i, t, e, n, o, r, a, l) {
  var s = n ? i.clientY : i.clientX, u = n ? e.height : e.width, h = n ? e.top : e.left, d = n ? e.bottom : e.right, b = !1;
  if (!a) {
    if (l && Pt < u * o) {
      if (!St && (Ct === 1 ? s > h + u * r / 2 : s < d - u * r / 2) && (St = !0), St)
        b = !0;
      else if (Ct === 1 ? s < h + Pt : s > d - Pt)
        return -Ct;
    } else if (s > h + u * (1 - o) / 2 && s < d - u * (1 - o) / 2)
      return an(t);
  }
  return b = b || a, b && (s < h + u * r / 2 || s > d - u * r / 2) ? s > h + u / 2 ? 1 : -1 : 0;
}
function an(i) {
  return F(c) < F(i) ? 1 : -1;
}
function ln(i) {
  for (var t = i.tagName + i.className + i.src + i.href + i.textContent, e = t.length, n = 0; e--; )
    n += t.charCodeAt(e);
  return n.toString(36);
}
function sn(i) {
  zt.length = 0;
  for (var t = i.getElementsByTagName("input"), e = t.length; e--; ) {
    var n = t[e];
    n.checked && zt.push(n);
  }
}
function Mt(i) {
  return setTimeout(i, 0);
}
function ie(i) {
  return clearTimeout(i);
}
Vt && v(document, "touchmove", function(i) {
  (f.active || ut) && i.cancelable && i.preventDefault();
});
f.utils = {
  on: v,
  off: g,
  css: p,
  find: Ce,
  is: function(t, e) {
    return !!X(t, e, t, !1);
  },
  extend: ze,
  throttle: Se,
  closest: X,
  toggleClass: P,
  clone: Ie,
  index: F,
  nextTick: Mt,
  cancelNextTick: ie,
  detectDirection: xe,
  getChild: ht,
  expando: A
};
f.get = function(i) {
  return i[A];
};
f.mount = function() {
  for (var i = arguments.length, t = new Array(i), e = 0; e < i; e++)
    t[e] = arguments[e];
  t[0].constructor === Array && (t = t[0]), t.forEach(function(n) {
    if (!n.prototype || !n.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(n));
    n.utils && (f.utils = j(j({}, f.utils), n.utils)), It.mount(n);
  });
};
f.create = function(i, t) {
  return new f(i, t);
};
f.version = Xe;
var S = [], Et, oe, re = !1, Qt, te, jt, wt;
function un() {
  function i() {
    this.defaults = {
      scroll: !0,
      forceAutoScrollFallback: !1,
      scrollSensitivity: 30,
      scrollSpeed: 10,
      bubbleScroll: !0
    };
    for (var t in this)
      t.charAt(0) === "_" && typeof this[t] == "function" && (this[t] = this[t].bind(this));
  }
  return i.prototype = {
    dragStarted: function(e) {
      var n = e.originalEvent;
      this.sortable.nativeDraggable ? v(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? v(document, "pointermove", this._handleFallbackAutoScroll) : n.touches ? v(document, "touchmove", this._handleFallbackAutoScroll) : v(document, "mousemove", this._handleFallbackAutoScroll);
    },
    dragOverCompleted: function(e) {
      var n = e.originalEvent;
      !this.options.dragOverBubble && !n.rootEl && this._handleAutoScroll(n);
    },
    drop: function() {
      this.sortable.nativeDraggable ? g(document, "dragover", this._handleAutoScroll) : (g(document, "pointermove", this._handleFallbackAutoScroll), g(document, "touchmove", this._handleFallbackAutoScroll), g(document, "mousemove", this._handleFallbackAutoScroll)), we(), Ft(), je();
    },
    nulling: function() {
      jt = oe = Et = re = wt = Qt = te = null, S.length = 0;
    },
    _handleFallbackAutoScroll: function(e) {
      this._handleAutoScroll(e, !0);
    },
    _handleAutoScroll: function(e, n) {
      var o = this, r = (e.touches ? e.touches[0] : e).clientX, a = (e.touches ? e.touches[0] : e).clientY, l = document.elementFromPoint(r, a);
      if (jt = e, n || this.options.forceAutoScrollFallback || Tt || U || yt) {
        ee(e, this.options, l, n);
        var s = tt(l, !0);
        re && (!wt || r !== Qt || a !== te) && (wt && we(), wt = setInterval(function() {
          var u = tt(document.elementFromPoint(r, a), !0);
          u !== s && (s = u, Ft()), ee(e, o.options, u, n);
        }, 10), Qt = r, te = a);
      } else {
        if (!this.options.bubbleScroll || tt(l, !0) === z()) {
          Ft();
          return;
        }
        ee(e, this.options, tt(l, !1), !1);
      }
    }
  }, q(i, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function Ft() {
  S.forEach(function(i) {
    clearInterval(i.pid);
  }), S = [];
}
function we() {
  clearInterval(wt);
}
var ee = Se(function(i, t, e, n) {
  if (t.scroll) {
    var o = (i.touches ? i.touches[0] : i).clientX, r = (i.touches ? i.touches[0] : i).clientY, a = t.scrollSensitivity, l = t.scrollSpeed, s = z(), u = !1, h;
    oe !== e && (oe = e, Ft(), Et = t.scroll, h = t.scrollFn, Et === !0 && (Et = tt(e, !0)));
    var d = 0, b = Et;
    do {
      var y = b, E = T(y), w = E.top, R = E.bottom, W = E.left, L = E.right, H = E.width, B = E.height, et = void 0, Y = void 0, nt = y.scrollWidth, ft = y.scrollHeight, N = p(y), pt = y.scrollLeft, Z = y.scrollTop;
      y === s ? (et = H < nt && (N.overflowX === "auto" || N.overflowX === "scroll" || N.overflowX === "visible"), Y = B < ft && (N.overflowY === "auto" || N.overflowY === "scroll" || N.overflowY === "visible")) : (et = H < nt && (N.overflowX === "auto" || N.overflowX === "scroll"), Y = B < ft && (N.overflowY === "auto" || N.overflowY === "scroll"));
      var mt = et && (Math.abs(L - o) <= a && pt + H < nt) - (Math.abs(W - o) <= a && !!pt), V = Y && (Math.abs(R - r) <= a && Z + B < ft) - (Math.abs(w - r) <= a && !!Z);
      if (!S[d])
        for (var it = 0; it <= d; it++)
          S[it] || (S[it] = {});
      (S[d].vx != mt || S[d].vy != V || S[d].el !== y) && (S[d].el = y, S[d].vx = mt, S[d].vy = V, clearInterval(S[d].pid), (mt != 0 || V != 0) && (u = !0, S[d].pid = setInterval((function() {
        n && this.layer === 0 && f.active._onTouchMove(jt);
        var gt = S[this.layer].vy ? S[this.layer].vy * l : 0, J = S[this.layer].vx ? S[this.layer].vx * l : 0;
        typeof h == "function" && h.call(f.dragged.parentNode[A], J, gt, i, jt, S[this.layer].el) !== "continue" || Te(S[this.layer].el, J, gt);
      }).bind({
        layer: d
      }), 24))), d++;
    } while (t.bubbleScroll && b !== s && (b = tt(b, !1)));
    re = u;
  }
}, 30), Ne = function(t) {
  var e = t.originalEvent, n = t.putSortable, o = t.dragEl, r = t.activeSortable, a = t.dispatchSortableEvent, l = t.hideGhostForTarget, s = t.unhideGhostForTarget;
  if (e) {
    var u = n || r;
    l();
    var h = e.changedTouches && e.changedTouches.length ? e.changedTouches[0] : e, d = document.elementFromPoint(h.clientX, h.clientY);
    s(), u && !u.el.contains(d) && (a("spill"), this.onSpill({
      dragEl: o,
      putSortable: n
    }));
  }
};
function ue() {
}
ue.prototype = {
  startIndex: null,
  dragStart: function(t) {
    var e = t.oldDraggableIndex;
    this.startIndex = e;
  },
  onSpill: function(t) {
    var e = t.dragEl, n = t.putSortable;
    this.sortable.captureAnimationState(), n && n.captureAnimationState();
    var o = ht(this.sortable.el, this.startIndex, this.options);
    o ? this.sortable.el.insertBefore(e, o) : this.sortable.el.appendChild(e), this.sortable.animateAll(), n && n.animateAll();
  },
  drop: Ne
};
q(ue, {
  pluginName: "revertOnSpill"
});
function ce() {
}
ce.prototype = {
  onSpill: function(t) {
    var e = t.dragEl, n = t.putSortable, o = n || this.sortable;
    o.captureAnimationState(), e.parentNode && e.parentNode.removeChild(e), o.animateAll();
  },
  drop: Ne
};
q(ce, {
  pluginName: "removeOnSpill"
});
f.mount(new un());
f.mount(ce, ue);
class cn {
  eventTarget = new EventTarget();
  on(t, e) {
    this.eventTarget.addEventListener(t, (n) => {
      e(n.detail);
    });
  }
  emit(t, e) {
    const n = new CustomEvent(t, {
      detail: e
    });
    this.eventTarget.dispatchEvent(n);
  }
}
const dn = '<svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-grabber"><path d="M10 13a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm-4 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm5-9a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM6 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>', hn = '<svg width="12" fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"/></svg>', fn = '<svg width="12" fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"/></svg>', pn = '<svg width="12" fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"/></svg>', mn = {
  maxLevel: -1
};
class gn {
  button = document.createElement("button");
  constructor(t) {
    this.button.innerHTML = t, this.button.classList.add("btn", "btn-dark");
  }
  onClick(t) {
    this.button.addEventListener("click", t);
  }
  getElement() {
    return this.button;
  }
  getParemtElement() {
    return this.button.closest(".list-group-item");
  }
}
class vn {
  button = document.createElement("button");
  constructor(t) {
    this.button.innerHTML = t, this.button.classList.add("btn", "btn-danger");
  }
  onClick(t) {
    this.button.addEventListener("click", t);
  }
  getElement() {
    return this.button;
  }
  getParemtElement() {
    return this.button.closest(".list-group-item");
  }
}
class bn {
  button = document.createElement("button");
  constructor(t) {
    this.button.innerHTML = t, this.button.classList.add("btn", "btn-secondary");
  }
  onClick(t) {
    this.button.addEventListener("click", t);
  }
  getElement() {
    return this.button;
  }
  getParemtElement() {
    return this.button.closest(".list-group-item");
  }
}
class En {
  item;
  container = document.createElement("div");
  eventEmitter = new cn();
  buttons = {
    link: new bn(pn),
    edit: new gn(hn),
    delete: new vn(fn)
  };
  constructor(t) {
    this.item = t, this.setEvents();
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
  onClickDelete(t) {
    this.eventEmitter.on("clickDelete", t);
  }
  onClickEdit(t) {
    this.eventEmitter.on("clickEdit", t);
  }
  onClickLink(t) {
    this.eventEmitter.on("clickLink", t);
  }
  mount() {
    this.container.classList.add("btn-group", "btn-group-sm"), this.container.append(this.buttons.link.getElement()), this.container.append(this.buttons.edit.getElement()), this.container.append(this.buttons.delete.getElement());
  }
  getElement() {
    return this.container;
  }
}
class Pe {
  items = [];
  constructor() {
  }
  insertAt(t, e) {
    this.items.splice(e, 0, t);
  }
  add(t, e = -1) {
    let n = Math.trunc(e);
    if (n >= 0 && n < this.items.length) {
      this.insertAt(t, n);
      return;
    }
    this.items.push(t);
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
function wn(i) {
  let t = { text: "", href: "", icon: "", tooltip: "" };
  for (let e in i)
    typeof i[e] == "string" && (t[e] = i[e]);
  return t;
}
function yn(i) {
  let t = { text: "", href: "", icon: "", tooltip: "" };
  for (let e in i)
    typeof i[e] == "string" && (t[e] = i[e]);
  return t;
}
function Rt(i, t) {
  for (let e in t)
    i.dataset[e] = t[e];
}
function Ht(i, t = -1) {
  i.ariaLevel = `${t}`;
  let e = i.children;
  for (let n = 0; n < e.length; n++) {
    let o = t;
    e[n].matches(".list-group-item") && (o = o + 1), Ht(e[n], o);
  }
}
function ae(i, t) {
  let e = i.querySelectorAll(".list-group-item"), n = t;
  for (let o = 0; o < e.length; o++) {
    let r = ae(e[o], t + 1);
    n = Math.max(n, r);
  }
  return n;
}
class Wt {
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
  constructor(t) {
    this.collection = new Pe(), this.buttonGroup = new En(this), this.element.classList.add("list-group-item"), this.dataset = wn(t);
  }
  setOptions(t) {
    this.options = t;
  }
  setDataset(t) {
    this.dataset = t;
  }
  getDataset() {
    return this.dataset;
  }
  setListenerLinkButton(t) {
    this.listenerLinkButton = t;
  }
  setListenerEditButton(t) {
    this.listenerEditButton = t;
  }
  setListenerDeleteButton(t) {
    this.listenerDeleteButton = t;
  }
  add(t) {
    this.collection.add(t);
  }
  remove() {
    this.getElement().remove();
  }
  updateUI(t) {
    let e = this.element.querySelector(".item-text"), n = this.element.querySelector("i");
    e != null && (e.innerHTML = t.text), n != null && (n.className = t.icon);
  }
  addArray(t) {
    t.forEach((e) => {
      let n = new Wt(e);
      n.setOptions(this.options), n.setListenerLinkButton(this.listenerLinkButton), n.setListenerDeleteButton(this.listenerDeleteButton), n.setListenerEditButton(this.listenerEditButton), n.buttonGroup.onClickLink(this.listenerLinkButton), n.buttonGroup.onClickDelete(this.listenerDeleteButton), n.buttonGroup.onClickEdit(this.listenerEditButton), Rt(n.getElement(), n.getDataset()), e.children != null && e.children.length > 0 && n.addArray(e.children), this.add(n);
    });
  }
  createHandler() {
    let t = document.createElement("span");
    return t.style.mixBlendMode = "difference", t.style.filter = "invert(1) grayscale(1)", t.className = "jme-handle", t.innerHTML = dn, t;
  }
  mount() {
    let t = document.createElement("div"), e = document.createElement("span"), n = document.createElement("i");
    n.className = this.dataset.icon;
    let o = this.createHandler(), r = document.createElement("span");
    r.className = "item-text", r.style.paddingLeft = "5px", r.innerHTML = this.dataset.text;
    let a = document.createElement("div");
    t.className = "d-flex w-100 justify-content-between align-items-center", e.append(o), e.append(n), e.append(r), a.classList.add("list-group", this.options.sortableClassname), t.append(e), this.buttonGroup.mount(), t.append(this.buttonGroup.getElement()), this.element.append(t), this.collection.getItems().forEach((l) => {
      l.mount(), a.appendChild(l.getElement());
    }), this.element.append(a);
  }
  getElement() {
    return this.element;
  }
}
class Dn {
  element;
  id;
  collection;
  options = { sortableClassname: "nested-sortable" };
  constructor(t) {
    const e = document.getElementById(t);
    if (e == null)
      throw Error(`Error: Element with id="${t}" does not exists.`);
    this.id = t, this.element = e, this.collection = new Pe();
  }
  setOptions(t) {
    this.options = t;
  }
  add(t, e = -1) {
    this.collection.add(t, e);
  }
  empty() {
    this.collection.empty();
    let t = this.element;
    for (; t.firstChild; )
      t.removeChild(t.firstChild);
  }
  mount() {
    this.element.classList.add("list-group", this.options.sortableClassname), this.collection.getItems().forEach((t) => {
      t.setOptions(this.options), t.mount(), this.element.append(t.getElement());
    });
  }
  getElement() {
    return this.element;
  }
}
class Cn {
  menuContainer;
  currentItem = null;
  listenerDeleteButton;
  listenerEditButton;
  listenerLinkButton;
  listenerDragEnd;
  sortableClassname = "";
  options;
  constructor(t, e = mn) {
    this.menuContainer = new Dn(t), this.sortableClassname = `${t}-nested-sortable`, this.options = e, this.menuContainer.setOptions({ sortableClassname: this.sortableClassname }), this.listenerDeleteButton = () => {
    }, this.listenerEditButton = () => {
    }, this.listenerLinkButton = () => {
    }, this.listenerDragEnd = () => {
    };
  }
  add(t) {
    let e = new Wt(t);
    e.setOptions({ sortableClassname: this.sortableClassname }), e.setListenerEditButton(this.listenerEditButton), e.buttonGroup.onClickEdit(this.listenerEditButton), e.setListenerDeleteButton(this.listenerDeleteButton), e.buttonGroup.onClickDelete(this.listenerDeleteButton), e.setListenerLinkButton(this.listenerLinkButton), e.buttonGroup.onClickLink(this.listenerLinkButton), Rt(e.getElement(), t), e.getElement().ariaLevel = "0", this.menuContainer.add(e), e.mount(), this.makeItemSortable(e), this.menuContainer.getElement().append(e.getElement());
  }
  edit(t) {
    this.currentItem = t;
  }
  update(t) {
    this.currentItem != null && (this.currentItem.setDataset(t), Rt(this.currentItem.getElement(), t), this.currentItem.updateUI(t), this.currentItem = null);
  }
  setArray(t) {
    t.forEach((e) => {
      let n = new Wt(e);
      n.setOptions({ sortableClassname: this.sortableClassname }), n.setListenerDeleteButton(this.listenerDeleteButton), n.setListenerEditButton(this.listenerEditButton), n.setListenerLinkButton(this.listenerLinkButton), n.buttonGroup.onClickDelete(this.listenerDeleteButton), n.buttonGroup.onClickEdit(this.listenerEditButton), n.buttonGroup.onClickLink(this.listenerLinkButton), Rt(n.getElement(), n.getDataset()), Array.isArray(e.children) && e.children.length > 0 && n.addArray(e.children), this.menuContainer.add(n);
    });
  }
  getString() {
    let t = this.htmlToJson(this.menuContainer.getElement());
    return JSON.stringify(t);
  }
  htmlToJson(t) {
    let e = t.children, n = [];
    for (var o = 0; o < e.length; o++) {
      let r = e.item(o), a = yn(r.dataset), l = r.lastElementChild;
      if (a.children = [], l.childElementCount > 0) {
        let s = this.htmlToJson(l);
        a.children = s;
      }
      n.push(a);
    }
    return n;
  }
  onClickEdit(t) {
    this.listenerEditButton = t;
  }
  onClickDelete(t) {
    this.listenerDeleteButton = t;
  }
  onClickLink(t) {
    this.listenerLinkButton = t;
  }
  onDragEnd(t) {
    this.listenerDragEnd = t;
  }
  empty() {
    this.menuContainer.empty();
  }
  mount() {
    this.menuContainer.mount(), this.makeItSortable(), Ht(this.menuContainer.getElement());
  }
  makeItSortable() {
    for (var t = [].slice.call(document.querySelectorAll("." + this.sortableClassname)), e = 0; e < t.length; e++)
      new f(t[e], {
        handle: ".jme-handle",
        ghostClass: "ghost",
        group: {
          name: "nested",
          pull: (n, o, r) => {
            if (this.options.maxLevel < 0)
              return !0;
            let a = parseInt(n.el.ariaLevel);
            return ae(r, 0) + a < this.options.maxLevel;
          }
        },
        onEnd: (n) => {
          Ht(this.menuContainer.getElement()), this.listenerDragEnd(n);
        },
        animation: 150,
        fallbackOnBody: !0,
        swapThreshold: 0.65
      });
  }
  makeItemSortable(t) {
    let e = t.getElement().querySelector("." + this.sortableClassname);
    e != null && new f(e, {
      handle: ".jme-handle",
      ghostClass: "ghost",
      group: {
        name: "nested",
        pull: (n, o, r) => {
          if (this.options.maxLevel < 0)
            return !0;
          let a = parseInt(n.el.ariaLevel);
          return ae(r, 0) + a < this.options.maxLevel;
        }
      },
      onEnd: (n) => {
        Ht(this.menuContainer.getElement());
      },
      animation: 150,
      fallbackOnBody: !0,
      swapThreshold: 0.65
    });
  }
}
export {
  Cn as MenuEditor
};
