﻿//通用下拉dropdown
+function (a){"use strict";function b(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c && a(c);return d&&d.length?d:b.parent()} function c(c){c&&3 === c.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=b(d),f={relatedTarget:this};e.hasClass("open")&&(c&&"click"==c.type&&/input|textarea/i.test(c.target.tagName) && a.contains(e[0],c.target)||(e.trigger(c=a.Event("hide.bs.dropdown",f)),c.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger(a.Event("hidden.bs.dropdown",f)))))}))}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled,:disabled")){var f=b(e),g=f.hasClass("open");if (c(),!g){"ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",c);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented()) return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger(a.Event("shown.bs.dropdown",h))}return !1}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",c).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle)}(jQuery);$(function(){$(".hoverdown").mouseover(function(){$(this).addClass("open");});$(".hoverdown").mouseleave(function(){$(this).removeClass("open")})});


//通用tab
+function($){"use strict";$.fn.extend({Tabs:function(options){options=$.extend({event:'mouseover',active:'current',timeout:0,auto:0,callback:null},options);var self=$(this),tabBox=self.children('.body').children('div'),menu=self.children('.tab').children('ul'),items=menu.find('li'),timer;var tabHandle=function(elem){elem.siblings('li').removeClass(options.active).end().addClass(options.active);tabBox.siblings('div').addClass('none').end().eq(elem.index()).removeClass('none')},delay=function(elem,time){time?setTimeout(function(){tabHandle(elem)},time):tabHandle(elem)},start=function(){if(!options.auto)return;timer=setInterval(autoRun,options.auto)},autoRun=function(){var current=menu.find('li.'+options.active),firstItem=items.eq(0),len=items.length,index=current.index()+1,item=index===len?firstItem:current.next('li'),i=index===len?0:index;current.removeClass(options.active);item.addClass(options.active);tabBox.siblings('div').addClass('none').end().eq(i).removeClass('none')};items.bind(options.event,function(){delay($(this),options.timeout)});if(options.auto){start();self.hover(function(){clearInterval(timer);timer=undefined},function(){start()})}return this}})}(jQuery);



  //构建函数：自动控制 图片、覆盖式图文尺寸
  $.fn.autoimgs = function (options) {
    var autoimgssetting = { imgcel: 0.7, margright: 5 }; if (options) { $.extend(autoimgssetting, options) };
    this.each(function () {
      var $this = $(this);
      var tw = $this.width();

      var mb_imgb = autoimgssetting.imgcel;
      var mb_mgr = autoimgssetting.margright;
      var mb_rowlino = $("li", this).length;

      var mb_rowlikd = mb_rowlino - 1;
      var mb_rowliwidth = (tw - mb_mgr * mb_rowlikd - 0.66666666) / mb_rowlino;
      var mb_rowimgh = mb_rowliwidth * mb_imgb;
      $("li", this).css({ "width": mb_rowliwidth + "px", "margin-right": mb_mgr + "px", "overflow": "hidden" });
      $("img", this).css({ "height": mb_rowimgh + "px" });
      for (var i = 0; i < 20; i++) {
        var j = mb_rowlino * i - 1;
        $("li:eq(" + j + ")", this).css({ "margin-right": "0" });
      }

    });
  }

  //构建函数：自动控制 图文、列表尺寸
  $.fn.listwidth = function (options) {
    var listsetting = { imgscale: 0.70 }; if (options) { $.extend(listsetting, options) };
    this.each(function () {
      var $this = $(this);
      var dtwidth = $("dt", $this).width();
      var ddheight = dtwidth * listsetting.imgscale;
      var dtheight = dtwidth * listsetting.imgscale;
      $("dt", this).css({ "height": dtheight + "px" });
      $("dd", this).css({ "height": ddheight + "px" });
    });
  }

$.fn.lazyload=function(options){var settings={threshold:0,failurelimit:0,event:"scroll",effect:"show",container:window};if(options){$.extend(settings,options)}var elements=this;if("scroll"==settings.event){$(settings.container).bind("scroll",function(event){var counter=0;elements.each(function(){if(!$.belowthefold(this,settings)&&!$.rightoffold(this,settings)){$(this).trigger("appear")}else{if(counter++>settings.failurelimit){return false}}});var temp=$.grep(elements,function(element){return!element.loaded});elements=$(temp)})}return this.each(function(){var self=this;$(self).attr("original",$(self).attr("src"));if("scroll"!=settings.event||$.belowthefold(self,settings)||$.rightoffold(self,settings)){if(settings.placeholder){$(self).attr("src",settings.placeholder)}else{$(self).removeAttr("src")}self.loaded=false}else{self.loaded=true}$(self).one("appear",function(){if(!this.loaded){$("<img />").bind("load",function(){$(self).hide().attr("src",$(self).attr("original"))[settings.effect](settings.effectspeed);self.loaded=true}).attr("src",$(self).attr("original"))}});if("scroll"!=settings.event){$(self).bind(settings.event,function(event){if(!self.loaded){$(self).trigger("appear")}})}})};$.belowthefold=function(element,settings){if(settings.container===undefined||settings.container===window){var fold=$(window).height()+$(window).scrollTop()}else{var fold=$(settings.container).offset().top+$(settings.container).height()}return fold<=$(element).offset().top-settings.threshold};$.rightoffold=function(element,settings){if(settings.container===undefined||settings.container===window){var fold=$(window).width()+$(window).scrollLeft()}else{var fold=$(settings.container).offset().left+$(settings.container).width()}return fold<=$(element).offset().left-settings.threshold};$.extend($.expr[':'],{"below-the-fold":"$.belowthefold(a,{threshold:0,container:window})","above-the-fold":"!$.belowthefold(a,{threshold:0,container:window})","right-of-fold":"$.rightoffold(a, {threshold:0,container:window})","left-of-fold":"!$.rightoffold(a,{threshold:0,container:window})"});$.fn.zoomImgRollover=function(b){var d={percent:30,duration:600};var c=$.extend(d,b);function a(h,f,l,k){var g=Math.round(l*(0.5+((f*c.percent)/200)))*2;var e=Math.round(k*(0.5+((f*c.percent)/200)))*2;var j=(g-l)/2;var i=(e-k)/2;h.css({width:g,height:e,top:-i,left:-j})}return this.each(function(){var e=$(this);var g=e.width();var f=e.height();e.css({position:"relative"});e.parent().css({overflow:"hidden",display:"block",position:"relative",width:g,height:f});e.mouseover(function(){e.stop().animate({dummy:1},{duration:c.duration,step:function(h){a(e,h,g,f)}})});e.mouseout(function(){e.stop().animate({dummy:0},{duration:c.duration,step:function(h){a(e,h,g,f)}})})})}


//负载函数

//负载函数

$(function () {
  $(".cms_pics").autoimgs();
  $(".cms_pic_tit").autoimgs({ imgcel: 0.65 });
  $(".cms").listwidth();
  $("img").lazyload({ effect: "fadeIn" });
});
/** 
* jQuery WeUI V0.8.0 
* By 言川
 */
!
function (t) {
  "use strict";
  t.fn.transitionEnd = function (t) {
    function e(r) {
      if (r.target === this) for (t.call(this, r), n = 0; n < i.length; n++) a.off(i[n], e)
    }
    var n, i = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"],
    a = this;
    if (t) for (n = 0; n < i.length; n++) a.on(i[n], e);
    return this
  },
  t.support = function () {
    var t = {
      touch: !!("ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch)
    };
    return t
  }(),
  t.touchEvents = {
    start: t.support.touch ? "touchstart" : "mousedown",
    move: t.support.touch ? "touchmove" : "mousemove",
    end: t.support.touch ? "touchend" : "mouseup"
  },
  t.getTouchPosition = function (t) {
    return t = t.originalEvent || t,
    "touchstart" === t.type || "touchmove" === t.type || "touchend" === t.type ? {
      x: t.targetTouches[0].pageX,
      y: t.targetTouches[0].pageY
    } : {
      x: t.pageX,
      y: t.pageY
    }
  },
  t.fn.scrollHeight = function () {
    return this[0].scrollHeight
  },
  t.fn.transform = function (t) {
    for (var e = 0; e < this.length; e++) {
      var n = this[e].style;
      n.webkitTransform = n.MsTransform = n.msTransform = n.MozTransform = n.OTransform = n.transform = t
    }
    return this
  },
  t.fn.transition = function (t) {
    "string" != typeof t && (t += "ms");
    for (var e = 0; e < this.length; e++) {
      var n = this[e].style;
      n.webkitTransitionDuration = n.MsTransitionDuration = n.msTransitionDuration = n.MozTransitionDuration = n.OTransitionDuration = n.transitionDuration = t
    }
    return this
  },
  t.getTranslate = function (t, e) {
    var n, i, a, r;
    return "undefined" == typeof e && (e = "x"),
    a = window.getComputedStyle(t, null),
    window.WebKitCSSMatrix ? r = new WebKitCSSMatrix("none" === a.webkitTransform ? "" : a.webkitTransform) : (r = a.MozTransform || a.OTransform || a.MsTransform || a.msTransform || a.transform || a.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), n = r.toString().split(",")),
    "x" === e && (i = window.WebKitCSSMatrix ? r.m41 : 16 === n.length ? parseFloat(n[12]) : parseFloat(n[4])),
    "y" === e && (i = window.WebKitCSSMatrix ? r.m42 : 16 === n.length ? parseFloat(n[13]) : parseFloat(n[5])),
    i || 0
  },
  t.requestAnimationFrame = function (t) {
    return window.requestAnimationFrame ? window.requestAnimationFrame(t) : window.webkitRequestAnimationFrame ? window.webkitRequestAnimationFrame(t) : window.mozRequestAnimationFrame ? window.mozRequestAnimationFrame(t) : window.setTimeout(t, 1e3 / 60)
  },
  t.cancelAnimationFrame = function (t) {
    return window.cancelAnimationFrame ? window.cancelAnimationFrame(t) : window.webkitCancelAnimationFrame ? window.webkitCancelAnimationFrame(t) : window.mozCancelAnimationFrame ? window.mozCancelAnimationFrame(t) : window.clearTimeout(t)
  },
  t.fn.join = function (t) {
    return this.toArray().join(t)
  }
}($),
+
function (t) {
  "use strict";
  t.Template7 = t.t7 = function () {
    function t(t) {
      return "[object Array]" === Object.prototype.toString.apply(t)
    }
    function e(t) {
      return "function" == typeof t
    }
    function n(t) {
      var e, n, i, a = t.replace(/[{}#}]/g, "").split(" "),
      r = [];
      for (n = 0; n < a.length; n++) {
        var o = a[n];
        if (0 === n) r.push(o);
        else if (0 === o.indexOf('"')) if (2 === o.match(/"/g).length) r.push(o);
        else {
          for (e = 0, i = n + 1; i < a.length; i++) if (o += " " + a[i], a[i].indexOf('"') >= 0) {
            e = i,
            r.push(o);
            break
          }
          e && (n = e)
        } else if (o.indexOf("=") > 0) {
          var s = o.split("="),
          c = s[0],
          l = s[1];
          if (2 !== l.match(/"/g).length) {
            for (e = 0, i = n + 1; i < a.length; i++) if (l += " " + a[i], a[i].indexOf('"') >= 0) {
              e = i;
              break
            }
            e && (n = e)
          }
          var u = [c, l.replace(/"/g, "")];
          r.push(u)
        } else r.push(o)
      }
      return r
    }
    function i(e) {
      var i, a, r = [];
      if (!e) return [];
      var o = e.split(/({{[^{^}]*}})/);
      for (i = 0; i < o.length; i++) {
        var s = o[i];
        if ("" !== s) if (s.indexOf("{{") < 0) r.push({
          type: "plain",
          content: s
        });
        else {
          if (s.indexOf("{/") >= 0) continue;
          if (s.indexOf("{#") < 0 && s.indexOf(" ") < 0 && s.indexOf("else") < 0) {
            r.push({
              type: "variable",
              contextName: s.replace(/[{}]/g, "")
            });
            continue
          }
          var c = n(s),
          l = c[0],
          u = [],
          p = {};
          for (a = 1; a < c.length; a++) {
            var h = c[a];
            t(h) ? p[h[0]] = "false" === h[1] ? !1 : h[1] : u.push(h)
          }
          if (s.indexOf("{#") >= 0) {
            var d, f = "",
            m = "",
            v = 0,
            g = !1,
            w = !1,
            y = 0;
            for (a = i + 1; a < o.length; a++) if (o[a].indexOf("{{#") >= 0 && y++, o[a].indexOf("{{/") >= 0 && y--, o[a].indexOf("{{#" + l) >= 0) f += o[a],
            w && (m += o[a]),
            v++;
            else if (o[a].indexOf("{{/" + l) >= 0) {
              if (!(v > 0)) {
                d = a,
                g = !0;
                break
              }
              v--,
              f += o[a],
              w && (m += o[a])
            } else o[a].indexOf("else") >= 0 && 0 === y ? w = !0 : (w || (f += o[a]), w && (m += o[a]));
            g && (d && (i = d), r.push({
              type: "helper",
              helperName: l,
              contextName: u,
              content: f,
              inverseContent: m,
              hash: p
            }))
          } else s.indexOf(" ") > 0 && r.push({
            type: "helper",
            helperName: l,
            contextName: u,
            hash: p
          })
        }
      }
      return r
    }
    var a = function (t) {
      function e(t, e) {
        return t.content ? o(t.content, e) : function () {
          return ""
        }
      }
      function n(t, e) {
        return t.inverseContent ? o(t.inverseContent, e) : function () {
          return ""
        }
      }
      function a(t, e) {
        var n, i, a = 0;
        if (0 === t.indexOf("../")) {
          a = t.split("../").length - 1;
          var r = e.split("_")[1] - a;
          e = "ctx_" + (r >= 1 ? r : 1),
          i = t.split("../")[a].split(".")
        } else 0 === t.indexOf("@global") ? (e = "$.Template7.global", i = t.split("@global.")[1].split(".")) : 0 === t.indexOf("@root") ? (e = "ctx_1", i = t.split("@root.")[1].split(".")) : i = t.split(".");
        n = e;
        for (var o = 0; o < i.length; o++) {
          var s = i[o];
          0 === s.indexOf("@") ? o > 0 ? n += "[(data && data." + s.replace("@", "") + ")]" : n = "(data && data." + t.replace("@", "") + ")" : isFinite(s) ? n += "[" + s + "]" : 0 === s.indexOf("this") ? n = s.replace("this", e) : n += "." + s
        }
        return n
      }
      function r(t, e) {
        for (var n = [], i = 0; i < t.length; i++) 0 === t[i].indexOf('"') ? n.push(t[i]) : n.push(a(t[i], e));
        return n.join(", ")
      }
      function o(t, o) {
        if (o = o || 1, t = t || s.template, "string" != typeof t) throw new Error("Template7: Template must be a string");
        var c = i(t);
        if (0 === c.length) return function () {
          return ""
        };
        var l = "ctx_" + o,
        u = "(function (" + l + ", data) {\n";
        1 === o && (u += "function isArray(arr){return Object.prototype.toString.apply(arr) === '[object Array]';}\n", u += "function isFunction(func){return (typeof func === 'function');}\n", u += 'function c(val, ctx) {if (typeof val !== "undefined") {if (isFunction(val)) {return val.call(ctx);} else return val;} else return "";}\n'),
        u += "var r = '';\n";
        var p;
        for (p = 0; p < c.length; p++) {
          var h = c[p];
          if ("plain" !== h.type) {
            var d, f;
            if ("variable" === h.type && (d = a(h.contextName, l), u += "r += c(" + d + ", " + l + ");"), "helper" === h.type) if (h.helperName in s.helpers) f = r(h.contextName, l),
            u += "r += ($.Template7.helpers." + h.helperName + ").call(" + l + ", " + (f && f + ", ") + "{hash:" + JSON.stringify(h.hash) + ", data: data || {}, fn: " + e(h, o + 1) + ", inverse: " + n(h, o + 1) + ", root: ctx_1});";
            else {
              if (h.contextName.length > 0) throw new Error('Template7: Missing helper: "' + h.helperName + '"');
              d = a(h.helperName, l),
              u += "if (" + d + ") {",
              u += "if (isArray(" + d + ")) {",
              u += "r += ($.Template7.helpers.each).call(" + l + ", " + d + ", {hash:" + JSON.stringify(h.hash) + ", data: data || {}, fn: " + e(h, o + 1) + ", inverse: " + n(h, o + 1) + ", root: ctx_1});",
              u += "}else {",
              u += "r += ($.Template7.helpers.with).call(" + l + ", " + d + ", {hash:" + JSON.stringify(h.hash) + ", data: data || {}, fn: " + e(h, o + 1) + ", inverse: " + n(h, o + 1) + ", root: ctx_1});",
              u += "}}"
            }
          } else u += "r +='" + h.content.replace(/\r/g, "\\r").replace(/\n/g, "\\n").replace(/'/g, "\\'") + "';"
        }
        return u += "\nreturn r;})",
        eval.call(window, u)
      }
      var s = this;
      s.template = t,
      s.compile = function (t) {
        return s.compiled || (s.compiled = o(t)),
        s.compiled
      }
    };
    a.prototype = {
      options: {},
      helpers: {
        "if": function (t, n) {
          return e(t) && (t = t.call(this)),
          t ? n.fn(this, n.data) : n.inverse(this, n.data)
        },
        unless: function (t, n) {
          return e(t) && (t = t.call(this)),
          t ? n.inverse(this, n.data) : n.fn(this, n.data)
        },
        each: function (n, i) {
          var a = "",
          r = 0;
          if (e(n) && (n = n.call(this)), t(n)) {
            for (i.hash.reverse && (n = n.reverse()), r = 0; r < n.length; r++) a += i.fn(n[r], {
              first: 0 === r,
              last: r === n.length - 1,
              index: r
            });
            i.hash.reverse && (n = n.reverse())
          } else for (var o in n) r++,
          a += i.fn(n[o], {
            key: o
          });
          return r > 0 ? a : i.inverse(this)
        },
        "with": function (t, n) {
          return e(t) && (t = t.call(this)),
          n.fn(t)
        },
        join: function (t, n) {
          return e(t) && (t = t.call(this)),
          t.join(n.hash.delimiter || n.hash.delimeter)
        },
        js: function (t, e) {
          var n;
          return n = t.indexOf("return") >= 0 ? "(function(){" + t + "})" : "(function(){return (" + t + ")})",
          eval.call(this, n).call(this)
        },
        js_compare: function (t, e) {
          var n;
          n = t.indexOf("return") >= 0 ? "(function(){" + t + "})" : "(function(){return (" + t + ")})";
          var i = eval.call(this, n).call(this);
          return i ? e.fn(this, e.data) : e.inverse(this, e.data)
        }
      }
    };
    var r = function (t, e) {
      if (2 === arguments.length) {
        var n = new a(t),
        i = n.compile()(e);
        return n = null,
        i
      }
      return new a(t)
    };
    return r.registerHelper = function (t, e) {
      a.prototype.helpers[t] = e
    },
    r.unregisterHelper = function (t) {
      a.prototype.helpers[t] = void 0,
      delete a.prototype.helpers[t]
    },
    r.compile = function (t, e) {
      var n = new a(t, e);
      return n.compile()
    },
    r.options = a.prototype.options,
    r.helpers = a.prototype.helpers,
    r
  }()
}($),
+
function (t, e, n, i) {
  "use strict";
  function a(t, e, n) {
    return setTimeout(l(t, n), e)
  }
  function r(t, e, n) {
    return Array.isArray(t) ? (o(t, n[e], n), !0) : !1
  }
  function o(t, e, n) {
    var a;
    if (t) if (t.forEach) t.forEach(e, n);
    else if (t.length !== i) for (a = 0; a < t.length;) e.call(n, t[a], a, t),
    a++;
    else for (a in t) t.hasOwnProperty(a) && e.call(n, t[a], a, t)
  }
  function s(e, n, i) {
    var a = "DEPRECATED METHOD: " + n + "\n" + i + " AT \n";
    return function () {
      var n = new Error("get-stack-trace"),
      i = n && n.stack ? n.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace",
      r = t.console && (t.console.warn || t.console.log);
      return r && r.call(t.console, a, i),
      e.apply(this, arguments)
    }
  }
  function c(t, e, n) {
    var i, a = e.prototype;
    i = t.prototype = Object.create(a),
    i.constructor = t,
    i._super = a,
    n && pt(i, n)
  }
  function l(t, e) {
    return function () {
      return t.apply(e, arguments)
    }
  }
  function u(t, e) {
    return typeof t == ft ? t.apply(e ? e[0] || i : i, e) : t
  }
  function p(t, e) {
    return t === i ? e : t
  }
  function h(t, e, n) {
    o(v(e),
    function (e) {
      t.addEventListener(e, n, !1)
    })
  }
  function d(t, e, n) {
    o(v(e),
    function (e) {
      t.removeEventListener(e, n, !1)
    })
  }
  function f(t, e) {
    for (; t;) {
      if (t == e) return !0;
      t = t.parentNode
    }
    return !1
  }
  function m(t, e) {
    return t.indexOf(e) > -1
  }
  function v(t) {
    return t.trim().split(/\s+/g)
  }
  function g(t, e, n) {
    if (t.indexOf && !n) return t.indexOf(e);
    for (var i = 0; i < t.length;) {
      if (n && t[i][n] == e || !n && t[i] === e) return i;
      i++
    }
    return -1
  }
  function w(t) {
    return Array.prototype.slice.call(t, 0)
  }
  function y(t, e, n) {
    for (var i = [], a = [], r = 0; r < t.length;) {
      var o = e ? t[r][e] : t[r];
      g(a, o) < 0 && i.push(t[r]),
      a[r] = o,
      r++
    }
    return n && (i = e ? i.sort(function (t, n) {
      return t[e] > n[e]
    }) : i.sort()),
    i
  }
  function T(t, e) {
    for (var n, a, r = e[0].toUpperCase() + e.slice(1), o = 0; o < ht.length;) {
      if (n = ht[o], a = n ? n + r : e, a in t) return a;
      o++
    }
    return i
  }
  function k() {
    return Tt++
  }
  function x(e) {
    var n = e.ownerDocument || e;
    return n.defaultView || n.parentWindow || t
  }
  function _(t, e) {
    var n = this;
    this.manager = t,
    this.callback = e,
    this.element = t.element,
    this.target = t.options.inputTarget,
    this.domHandler = function (e) {
      u(t.options.enable, [t]) && n.handler(e)
    },
    this.init()
  }
  function C(t) {
    var e, n = t.options.inputClass;
    return new (e = n ? n : _t ? F : Ct ? L : xt ? j : N)(t, b)
  }
  function b(t, e, n) {
    var i = n.pointers.length,
    a = n.changedPointers.length,
    r = e & Pt && i - a === 0,
    o = e & (St | Ht) && i - a === 0;
    n.isFirst = !!r,
    n.isFinal = !!o,
    r && (t.session = {}),
    n.eventType = e,
    M(t, n),
    t.emit("hammer.input", n),
    t.recognize(n),
    t.session.prevInput = n
  }
  function M(t, e) {
    var n = t.session,
    i = e.pointers,
    a = i.length;
    n.firstInput || (n.firstInput = O(e)),
    a > 1 && !n.firstMultiple ? n.firstMultiple = O(e) : 1 === a && (n.firstMultiple = !1);
    var r = n.firstInput,
    o = n.firstMultiple,
    s = o ? o.center : r.center,
    c = e.center = P(i);
    e.timeStamp = gt(),
    e.deltaTime = e.timeStamp - r.timeStamp,
    e.angle = I(s, c),
    e.distance = H(s, c),
    E(n, e),
    e.offsetDirection = S(e.deltaX, e.deltaY);
    var l = A(e.deltaTime, e.deltaX, e.deltaY);
    e.overallVelocityX = l.x,
    e.overallVelocityY = l.y,
    e.overallVelocity = vt(l.x) > vt(l.y) ? l.x : l.y,
    e.scale = o ? V(o.pointers, i) : 1,
    e.rotation = o ? Y(o.pointers, i) : 0,
    e.maxPointers = n.prevInput ? e.pointers.length > n.prevInput.maxPointers ? e.pointers.length : n.prevInput.maxPointers : e.pointers.length,
    D(n, e);
    var u = t.element;
    f(e.srcEvent.target, u) && (u = e.srcEvent.target),
    e.target = u
  }
  function E(t, e) {
    var n = e.center,
    i = t.offsetDelta || {},
    a = t.prevDelta || {},
    r = t.prevInput || {};
    e.eventType !== Pt && r.eventType !== St || (a = t.prevDelta = {
      x: r.deltaX || 0,
      y: r.deltaY || 0
    },
    i = t.offsetDelta = {
      x: n.x,
      y: n.y
    }),
    e.deltaX = a.x + (n.x - i.x),
    e.deltaY = a.y + (n.y - i.y)
  }
  function D(t, e) {
    var n, a, r, o, s = t.lastInterval || e,
    c = e.timeStamp - s.timeStamp;
    if (e.eventType != Ht && (c > Ot || s.velocity === i)) {
      var l = e.deltaX - s.deltaX,
      u = e.deltaY - s.deltaY,
      p = A(c, l, u);
      a = p.x,
      r = p.y,
      n = vt(p.x) > vt(p.y) ? p.x : p.y,
      o = S(l, u),
      t.lastInterval = e
    } else n = s.velocity,
    a = s.velocityX,
    r = s.velocityY,
    o = s.direction;
    e.velocity = n,
    e.velocityX = a,
    e.velocityY = r,
    e.direction = o
  }
  function O(t) {
    for (var e = [], n = 0; n < t.pointers.length;) e[n] = {
      clientX: mt(t.pointers[n].clientX),
      clientY: mt(t.pointers[n].clientY)
    },
    n++;
    return {
      timeStamp: gt(),
      pointers: e,
      center: P(e),
      deltaX: t.deltaX,
      deltaY: t.deltaY
    }
  }
  function P(t) {
    var e = t.length;
    if (1 === e) return {
      x: mt(t[0].clientX),
      y: mt(t[0].clientY)
    };
    for (var n = 0,
    i = 0,
    a = 0; e > a;) n += t[a].clientX,
    i += t[a].clientY,
    a++;
    return {
      x: mt(n / e),
      y: mt(i / e)
    }
  }
  function A(t, e, n) {
    return {
      x: e / t || 0,
      y: n / t || 0
    }
  }
  function S(t, e) {
    return t === e ? It : vt(t) >= vt(e) ? 0 > t ? Yt : Vt : 0 > e ? Nt : Ft
  }
  function H(t, e, n) {
    n || (n = Rt);
    var i = e[n[0]] - t[n[0]],
    a = e[n[1]] - t[n[1]];
    return Math.sqrt(i * i + a * a)
  }
  function I(t, e, n) {
    n || (n = Rt);
    var i = e[n[0]] - t[n[0]],
    a = e[n[1]] - t[n[1]];
    return 180 * Math.atan2(a, i) / Math.PI
  }
  function Y(t, e) {
    return I(e[1], e[0], jt) + I(t[1], t[0], jt)
  }
  function V(t, e) {
    return H(e[0], e[1], jt) / H(t[0], t[1], jt)
  }
  function N() {
    this.evEl = $t,
    this.evWin = Wt,
    this.pressed = !1,
    _.apply(this, arguments)
  }
  function F() {
    this.evEl = Bt,
    this.evWin = Gt,
    _.apply(this, arguments),
    this.store = this.manager.session.pointerEvents = []
  }
  function q() {
    this.evTarget = Zt,
    this.evWin = Qt,
    this.started = !1,
    _.apply(this, arguments)
  }
  function z(t, e) {
    var n = w(t.touches),
    i = w(t.changedTouches);
    return e & (St | Ht) && (n = y(n.concat(i), "identifier", !0)),
    [n, i]
  }
  function L() {
    this.evTarget = ee,
    this.targetIds = {},
    _.apply(this, arguments)
  }
  function R(t, e) {
    var n = w(t.touches),
    i = this.targetIds;
    if (e & (Pt | At) && 1 === n.length) return i[n[0].identifier] = !0,
    [n, n];
    var a, r, o = w(t.changedTouches),
    s = [],
    c = this.target;
    if (r = n.filter(function (t) {
        return f(t.target, c)
    }), e === Pt) for (a = 0; a < r.length;) i[r[a].identifier] = !0,
    a++;
    for (a = 0; a < o.length;) i[o[a].identifier] && s.push(o[a]),
    e & (St | Ht) && delete i[o[a].identifier],
    a++;
    return s.length ? [y(r.concat(s), "identifier", !0), s] : void 0
  }
  function j() {
    _.apply(this, arguments);
    var t = l(this.handler, this);
    this.touch = new L(this.manager, t),
    this.mouse = new N(this.manager, t),
    this.primaryTouch = null,
    this.lastTouches = []
  }
  function X(t, e) {
    t & Pt ? (this.primaryTouch = e.changedPointers[0].identifier, $.call(this, e)) : t & (St | Ht) && $.call(this, e)
  }
  function $(t) {
    var e = t.changedPointers[0];
    if (e.identifier === this.primaryTouch) {
      var n = {
        x: e.clientX,
        y: e.clientY
      };
      this.lastTouches.push(n);
      var i = this.lastTouches,
      a = function () {
        var t = i.indexOf(n);
        t > -1 && i.splice(t, 1)
      };
      setTimeout(a, ne)
    }
  }
  function W(t) {
    for (var e = t.srcEvent.clientX,
    n = t.srcEvent.clientY,
    i = 0; i < this.lastTouches.length; i++) {
      var a = this.lastTouches[i],
      r = Math.abs(e - a.x),
      o = Math.abs(n - a.y);
      if (ie >= r && ie >= o) return !0
    }
    return !1
  }
  function K(t, e) {
    this.manager = t,
    this.set(e)
  }
  function U(t) {
    if (m(t, le)) return le;
    var e = m(t, ue),
    n = m(t, pe);
    return e && n ? le : e || n ? e ? ue : pe : m(t, ce) ? ce : se
  }
  function B() {
    if (!re) return !1;
    var e = {},
    n = t.CSS && t.CSS.supports;
    return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function (i) {
      e[i] = n ? t.CSS.supports("touch-action", i) : !0
    }),
    e
  }
  function G(t) {
    this.options = pt({},
    this.defaults, t || {}),
    this.id = k(),
    this.manager = null,
    this.options.enable = p(this.options.enable, !0),
    this.state = de,
    this.simultaneous = {},
    this.requireFail = []
  }
  function J(t) {
    return t & we ? "cancel" : t & ve ? "end" : t & me ? "move" : t & fe ? "start" : ""
  }
  function Z(t) {
    return t == Ft ? "down" : t == Nt ? "up" : t == Yt ? "left" : t == Vt ? "right" : ""
  }
  function Q(t, e) {
    var n = e.manager;
    return n ? n.get(t) : t
  }
  function tt() {
    G.apply(this, arguments)
  }
  function et() {
    tt.apply(this, arguments),
    this.pX = null,
    this.pY = null
  }
  function nt() {
    tt.apply(this, arguments)
  }
  function it() {
    G.apply(this, arguments),
    this._timer = null,
    this._input = null
  }
  function at() {
    tt.apply(this, arguments)
  }
  function rt() {
    tt.apply(this, arguments)
  }
  function ot() {
    G.apply(this, arguments),
    this.pTime = !1,
    this.pCenter = !1,
    this._timer = null,
    this._input = null,
    this.count = 0
  }
  function st(t, e) {
    return e = e || {},
    e.recognizers = p(e.recognizers, st.defaults.preset),
    new ct(t, e)
  }
  function ct(t, e) {
    this.options = pt({},
    st.defaults, e || {}),
    this.options.inputTarget = this.options.inputTarget || t,
    this.handlers = {},
    this.session = {},
    this.recognizers = [],
    this.oldCssProps = {},
    this.element = t,
    this.input = C(this),
    this.touchAction = new K(this, this.options.touchAction),
    lt(this, !0),
    o(this.options.recognizers,
    function (t) {
      var e = this.add(new t[0](t[1]));
      t[2] && e.recognizeWith(t[2]),
      t[3] && e.requireFailure(t[3])
    },
    this)
  }
  function lt(t, e) {
    var n = t.element;
    if (n.style) {
      var i;
      o(t.options.cssProps,
      function (a, r) {
        i = T(n.style, r),
        e ? (t.oldCssProps[i] = n.style[i], n.style[i] = a) : n.style[i] = t.oldCssProps[i] || ""
      }),
      e || (t.oldCssProps = {})
    }
  }
  function ut(t, n) {
    var i = e.createEvent("Event");
    i.initEvent(t, !0, !0),
    i.gesture = n,
    n.target.dispatchEvent(i)
  }
  var pt, ht = ["", "webkit", "Moz", "MS", "ms", "o"],
  dt = e.createElement("div"),
  ft = "function",
  mt = Math.round,
  vt = Math.abs,
  gt = Date.now;
  pt = "function" != typeof Object.assign ?
  function (t) {
    if (t === i || null === t) throw new TypeError("Cannot convert undefined or null to object");
    for (var e = Object(t), n = 1; n < arguments.length; n++) {
      var a = arguments[n];
      if (a !== i && null !== a) for (var r in a) a.hasOwnProperty(r) && (e[r] = a[r])
    }
    return e
  } : Object.assign;
  var wt = s(function (t, e, n) {
    for (var a = Object.keys(e), r = 0; r < a.length;) (!n || n && t[a[r]] === i) && (t[a[r]] = e[a[r]]),
    r++;
    return t
  },
  "extend", "Use `assign`."),
  yt = s(function (t, e) {
    return wt(t, e, !0)
  },
  "merge", "Use `assign`."),
  Tt = 1,
  kt = /mobile|tablet|ip(ad|hone|od)|android/i,
  xt = "ontouchstart" in t,
  _t = T(t, "PointerEvent") !== i,
  Ct = xt && kt.test(navigator.userAgent),
  bt = "touch",
  Mt = "pen",
  Et = "mouse",
  Dt = "kinect",
  Ot = 25,
  Pt = 1,
  At = 2,
  St = 4,
  Ht = 8,
  It = 1,
  Yt = 2,
  Vt = 4,
  Nt = 8,
  Ft = 16,
  qt = Yt | Vt,
  zt = Nt | Ft,
  Lt = qt | zt,
  Rt = ["x", "y"],
  jt = ["clientX", "clientY"];
  _.prototype = {
    handler: function () { },
    init: function () {
      this.evEl && h(this.element, this.evEl, this.domHandler),
      this.evTarget && h(this.target, this.evTarget, this.domHandler),
      this.evWin && h(x(this.element), this.evWin, this.domHandler)
    },
    destroy: function () {
      this.evEl && d(this.element, this.evEl, this.domHandler),
      this.evTarget && d(this.target, this.evTarget, this.domHandler),
      this.evWin && d(x(this.element), this.evWin, this.domHandler)
    }
  };
  var Xt = {
    mousedown: Pt,
    mousemove: At,
    mouseup: St
  },
  $t = "mousedown",
  Wt = "mousemove mouseup";
  c(N, _, {
    handler: function (t) {
      var e = Xt[t.type];
      e & Pt && 0 === t.button && (this.pressed = !0),
      e & At && 1 !== t.which && (e = St),
      this.pressed && (e & St && (this.pressed = !1), this.callback(this.manager, e, {
        pointers: [t],
        changedPointers: [t],
        pointerType: Et,
        srcEvent: t
      }))
    }
  });
  var Kt = {
    pointerdown: Pt,
    pointermove: At,
    pointerup: St,
    pointercancel: Ht,
    pointerout: Ht
  },
  Ut = {
    2: bt,
    3: Mt,
    4: Et,
    5: Dt
  },
  Bt = "pointerdown",
  Gt = "pointermove pointerup pointercancel";
  t.MSPointerEvent && !t.PointerEvent && (Bt = "MSPointerDown", Gt = "MSPointerMove MSPointerUp MSPointerCancel"),
  c(F, _, {
    handler: function (t) {
      var e = this.store,
      n = !1,
      i = t.type.toLowerCase().replace("ms", ""),
      a = Kt[i],
      r = Ut[t.pointerType] || t.pointerType,
      o = r == bt,
      s = g(e, t.pointerId, "pointerId");
      a & Pt && (0 === t.button || o) ? 0 > s && (e.push(t), s = e.length - 1) : a & (St | Ht) && (n = !0),
      0 > s || (e[s] = t, this.callback(this.manager, a, {
        pointers: e,
        changedPointers: [t],
        pointerType: r,
        srcEvent: t
      }), n && e.splice(s, 1))
    }
  });
  var Jt = {
    touchstart: Pt,
    touchmove: At,
    touchend: St,
    touchcancel: Ht
  },
  Zt = "touchstart",
  Qt = "touchstart touchmove touchend touchcancel";
  c(q, _, {
    handler: function (t) {
      var e = Jt[t.type];
      if (e === Pt && (this.started = !0), this.started) {
        var n = z.call(this, t, e);
        e & (St | Ht) && n[0].length - n[1].length === 0 && (this.started = !1),
        this.callback(this.manager, e, {
          pointers: n[0],
          changedPointers: n[1],
          pointerType: bt,
          srcEvent: t
        })
      }
    }
  });
  var te = {
    touchstart: Pt,
    touchmove: At,
    touchend: St,
    touchcancel: Ht
  },
  ee = "touchstart touchmove touchend touchcancel";
  c(L, _, {
    handler: function (t) {
      var e = te[t.type],
      n = R.call(this, t, e);
      n && this.callback(this.manager, e, {
        pointers: n[0],
        changedPointers: n[1],
        pointerType: bt,
        srcEvent: t
      })
    }
  });
  var ne = 2500,
  ie = 25;
  c(j, _, {
    handler: function (t, e, n) {
      var i = n.pointerType == bt,
      a = n.pointerType == Et;
      if (!(a && n.sourceCapabilities && n.sourceCapabilities.firesTouchEvents)) {
        if (i) X.call(this, e, n);
        else if (a && W.call(this, n)) return;
        this.callback(t, e, n)
      }
    },
    destroy: function () {
      this.touch.destroy(),
      this.mouse.destroy()
    }
  });
  var ae = T(dt.style, "touchAction"),
  re = ae !== i,
  oe = "compute",
  se = "auto",
  ce = "manipulation",
  le = "none",
  ue = "pan-x",
  pe = "pan-y",
  he = B();
  K.prototype = {
    set: function (t) {
      t == oe && (t = this.compute()),
      re && this.manager.element.style && he[t] && (this.manager.element.style[ae] = t),
      this.actions = t.toLowerCase().trim()
    },
    update: function () {
      this.set(this.manager.options.touchAction)
    },
    compute: function () {
      var t = [];
      return o(this.manager.recognizers,
      function (e) {
        u(e.options.enable, [e]) && (t = t.concat(e.getTouchAction()))
      }),
      U(t.join(" "))
    },
    preventDefaults: function (t) {
      var e = t.srcEvent,
      n = t.offsetDirection;
      if (this.manager.session.prevented) return void e.preventDefault();
      var i = this.actions,
      a = m(i, le) && !he[le],
      r = m(i, pe) && !he[pe],
      o = m(i, ue) && !he[ue];
      if (a) {
        var s = 1 === t.pointers.length,
        c = t.distance < 2,
        l = t.deltaTime < 250;
        if (s && c && l) return
      }
      return o && r ? void 0 : a || r && n & qt || o && n & zt ? this.preventSrc(e) : void 0
    },
    preventSrc: function (t) {
      this.manager.session.prevented = !0,
      t.preventDefault()
    }
  };
  var de = 1,
  fe = 2,
  me = 4,
  ve = 8,
  ge = ve,
  we = 16,
  ye = 32;
  G.prototype = {
    defaults: {},
    set: function (t) {
      return pt(this.options, t),
      this.manager && this.manager.touchAction.update(),
      this
    },
    recognizeWith: function (t) {
      if (r(t, "recognizeWith", this)) return this;
      var e = this.simultaneous;
      return t = Q(t, this),
      e[t.id] || (e[t.id] = t, t.recognizeWith(this)),
      this
    },
    dropRecognizeWith: function (t) {
      return r(t, "dropRecognizeWith", this) ? this : (t = Q(t, this), delete this.simultaneous[t.id], this)
    },
    requireFailure: function (t) {
      if (r(t, "requireFailure", this)) return this;
      var e = this.requireFail;
      return t = Q(t, this),
      -1 === g(e, t) && (e.push(t), t.requireFailure(this)),
      this
    },
    dropRequireFailure: function (t) {
      if (r(t, "dropRequireFailure", this)) return this;
      t = Q(t, this);
      var e = g(this.requireFail, t);
      return e > -1 && this.requireFail.splice(e, 1),
      this
    },
    hasRequireFailures: function () {
      return this.requireFail.length > 0
    },
    canRecognizeWith: function (t) {
      return !!this.simultaneous[t.id]
    },
    emit: function (t) {
      function e(e) {
        n.manager.emit(e, t)
      }
      var n = this,
      i = this.state;
      ve > i && e(n.options.event + J(i)),
      e(n.options.event),
      t.additionalEvent && e(t.additionalEvent),
      i >= ve && e(n.options.event + J(i))
    },
    tryEmit: function (t) {
      return this.canEmit() ? this.emit(t) : void (this.state = ye)
    },
    canEmit: function () {
      for (var t = 0; t < this.requireFail.length;) {
        if (!(this.requireFail[t].state & (ye | de))) return !1;
        t++
      }
      return !0
    },
    recognize: function (t) {
      var e = pt({},
      t);
      return u(this.options.enable, [this, e]) ? (this.state & (ge | we | ye) && (this.state = de), this.state = this.process(e), void (this.state & (fe | me | ve | we) && this.tryEmit(e))) : (this.reset(), void (this.state = ye))
    },
    process: function (t) { },
    getTouchAction: function () { },
    reset: function () { }
  },
  c(tt, G, {
    defaults: {
      pointers: 1
    },
    attrTest: function (t) {
      var e = this.options.pointers;
      return 0 === e || t.pointers.length === e
    },
    process: function (t) {
      var e = this.state,
      n = t.eventType,
      i = e & (fe | me),
      a = this.attrTest(t);
      return i && (n & Ht || !a) ? e | we : i || a ? n & St ? e | ve : e & fe ? e | me : fe : ye
    }
  }),
  c(et, tt, {
    defaults: {
      event: "pan",
      threshold: 10,
      pointers: 1,
      direction: Lt
    },
    getTouchAction: function () {
      var t = this.options.direction,
      e = [];
      return t & qt && e.push(pe),
      t & zt && e.push(ue),
      e
    },
    directionTest: function (t) {
      var e = this.options,
      n = !0,
      i = t.distance,
      a = t.direction,
      r = t.deltaX,
      o = t.deltaY;
      return a & e.direction || (e.direction & qt ? (a = 0 === r ? It : 0 > r ? Yt : Vt, n = r != this.pX, i = Math.abs(t.deltaX)) : (a = 0 === o ? It : 0 > o ? Nt : Ft, n = o != this.pY, i = Math.abs(t.deltaY))),
      t.direction = a,
      n && i > e.threshold && a & e.direction
    },
    attrTest: function (t) {
      return tt.prototype.attrTest.call(this, t) && (this.state & fe || !(this.state & fe) && this.directionTest(t))
    },
    emit: function (t) {
      this.pX = t.deltaX,
      this.pY = t.deltaY;
      var e = Z(t.direction);
      e && (t.additionalEvent = this.options.event + e),
      this._super.emit.call(this, t)
    }
  }),
  c(nt, tt, {
    defaults: {
      event: "pinch",
      threshold: 0,
      pointers: 2
    },
    getTouchAction: function () {
      return [le]
    },
    attrTest: function (t) {
      return this._super.attrTest.call(this, t) && (Math.abs(t.scale - 1) > this.options.threshold || this.state & fe)
    },
    emit: function (t) {
      if (1 !== t.scale) {
        var e = t.scale < 1 ? "in" : "out";
        t.additionalEvent = this.options.event + e
      }
      this._super.emit.call(this, t)
    }
  }),
  c(it, G, {
    defaults: {
      event: "press",
      pointers: 1,
      time: 251,
      threshold: 9
    },
    getTouchAction: function () {
      return [se]
    },
    process: function (t) {
      var e = this.options,
      n = t.pointers.length === e.pointers,
      i = t.distance < e.threshold,
      r = t.deltaTime > e.time;
      if (this._input = t, !i || !n || t.eventType & (St | Ht) && !r) this.reset();
      else if (t.eventType & Pt) this.reset(),
      this._timer = a(function () {
        this.state = ge,
        this.tryEmit()
      },
      e.time, this);
      else if (t.eventType & St) return ge;
      return ye
    },
    reset: function () {
      clearTimeout(this._timer)
    },
    emit: function (t) {
      this.state === ge && (t && t.eventType & St ? this.manager.emit(this.options.event + "up", t) : (this._input.timeStamp = gt(), this.manager.emit(this.options.event, this._input)))
    }
  }),
  c(at, tt, {
    defaults: {
      event: "rotate",
      threshold: 0,
      pointers: 2
    },
    getTouchAction: function () {
      return [le]
    },
    attrTest: function (t) {
      return this._super.attrTest.call(this, t) && (Math.abs(t.rotation) > this.options.threshold || this.state & fe)
    }
  }),
  c(rt, tt, {
    defaults: {
      event: "swipe",
      threshold: 10,
      velocity: .3,
      direction: qt | zt,
      pointers: 1
    },
    getTouchAction: function () {
      return et.prototype.getTouchAction.call(this)
    },
    attrTest: function (t) {
      var e, n = this.options.direction;
      return n & (qt | zt) ? e = t.overallVelocity : n & qt ? e = t.overallVelocityX : n & zt && (e = t.overallVelocityY),
      this._super.attrTest.call(this, t) && n & t.offsetDirection && t.distance > this.options.threshold && t.maxPointers == this.options.pointers && vt(e) > this.options.velocity && t.eventType & St
    },
    emit: function (t) {
      var e = Z(t.offsetDirection);
      e && this.manager.emit(this.options.event + e, t),
      this.manager.emit(this.options.event, t)
    }
  }),
  c(ot, G, {
    defaults: {
      event: "tap",
      pointers: 1,
      taps: 1,
      interval: 300,
      time: 250,
      threshold: 9,
      posThreshold: 10
    },
    getTouchAction: function () {
      return [ce]
    },
    process: function (t) {
      var e = this.options,
      n = t.pointers.length === e.pointers,
      i = t.distance < e.threshold,
      r = t.deltaTime < e.time;
      if (this.reset(), t.eventType & Pt && 0 === this.count) return this.failTimeout();
      if (i && r && n) {
        if (t.eventType != St) return this.failTimeout();
        var o = this.pTime ? t.timeStamp - this.pTime < e.interval : !0,
        s = !this.pCenter || H(this.pCenter, t.center) < e.posThreshold;
        this.pTime = t.timeStamp,
        this.pCenter = t.center,
        s && o ? this.count += 1 : this.count = 1,
        this._input = t;
        var c = this.count % e.taps;
        if (0 === c) return this.hasRequireFailures() ? (this._timer = a(function () {
          this.state = ge,
          this.tryEmit()
        },
        e.interval, this), fe) : ge
      }
      return ye
    },
    failTimeout: function () {
      return this._timer = a(function () {
        this.state = ye
      },
      this.options.interval, this),
      ye
    },
    reset: function () {
      clearTimeout(this._timer)
    },
    emit: function () {
      this.state == ge && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
    }
  }),
  st.VERSION = "2.0.8",
  st.defaults = {
    domEvents: !1,
    touchAction: oe,
    enable: !0,
    inputTarget: null,
    inputClass: null,
    preset: [[at, {
      enable: !1
    }], [nt, {
      enable: !1
    },
    ["rotate"]], [rt, {
      direction: qt
    }], [et, {
      direction: qt
    },
    ["swipe"]], [ot], [ot, {
      event: "doubletap",
      taps: 2
    },
    ["tap"]], [it]],
    cssProps: {
      userSelect: "none",
      touchSelect: "none",
      touchCallout: "none",
      contentZooming: "none",
      userDrag: "none",
      tapHighlightColor: "rgba(0,0,0,0)"
    }
  };
  var Te = 1,
  ke = 2;
  ct.prototype = {
    set: function (t) {
      return pt(this.options, t),
      t.touchAction && this.touchAction.update(),
      t.inputTarget && (this.input.destroy(), this.input.target = t.inputTarget, this.input.init()),
      this
    },
    stop: function (t) {
      this.session.stopped = t ? ke : Te
    },
    recognize: function (t) {
      var e = this.session;
      if (!e.stopped) {
        this.touchAction.preventDefaults(t);
        var n, i = this.recognizers,
        a = e.curRecognizer; (!a || a && a.state & ge) && (a = e.curRecognizer = null);
        for (var r = 0; r < i.length;) n = i[r],
        e.stopped === ke || a && n != a && !n.canRecognizeWith(a) ? n.reset() : n.recognize(t),
        !a && n.state & (fe | me | ve) && (a = e.curRecognizer = n),
        r++
      }
    },
    get: function (t) {
      if (t instanceof G) return t;
      for (var e = this.recognizers,
      n = 0; n < e.length; n++) if (e[n].options.event == t) return e[n];
      return null
    },
    add: function (t) {
      if (r(t, "add", this)) return this;
      var e = this.get(t.options.event);
      return e && this.remove(e),
      this.recognizers.push(t),
      t.manager = this,
      this.touchAction.update(),
      t
    },
    remove: function (t) {
      if (r(t, "remove", this)) return this;
      if (t = this.get(t)) {
        var e = this.recognizers,
        n = g(e, t); -1 !== n && (e.splice(n, 1), this.touchAction.update())
      }
      return this
    },
    on: function (t, e) {
      if (t !== i && e !== i) {
        var n = this.handlers;
        return o(v(t),
        function (t) {
          n[t] = n[t] || [],
          n[t].push(e)
        }),
        this
      }
    },
    off: function (t, e) {
      if (t !== i) {
        var n = this.handlers;
        return o(v(t),
        function (t) {
          e ? n[t] && n[t].splice(g(n[t], e), 1) : delete n[t]
        }),
        this
      }
    },
    emit: function (t, e) {
      this.options.domEvents && ut(t, e);
      var n = this.handlers[t] && this.handlers[t].slice();
      if (n && n.length) {
        e.type = t,
        e.preventDefault = function () {
          e.srcEvent.preventDefault()
        };
        for (var i = 0; i < n.length;) n[i](e),
        i++
      }
    },
    destroy: function () {
      this.element && lt(this, !1),
      this.handlers = {},
      this.session = {},
      this.input.destroy(),
      this.element = null
    }
  },
  pt(st, {
    INPUT_START: Pt,
    INPUT_MOVE: At,
    INPUT_END: St,
    INPUT_CANCEL: Ht,
    STATE_POSSIBLE: de,
    STATE_BEGAN: fe,
    STATE_CHANGED: me,
    STATE_ENDED: ve,
    STATE_RECOGNIZED: ge,
    STATE_CANCELLED: we,
    STATE_FAILED: ye,
    DIRECTION_NONE: It,
    DIRECTION_LEFT: Yt,
    DIRECTION_RIGHT: Vt,
    DIRECTION_UP: Nt,
    DIRECTION_DOWN: Ft,
    DIRECTION_HORIZONTAL: qt,
    DIRECTION_VERTICAL: zt,
    DIRECTION_ALL: Lt,
    Manager: ct,
    Input: _,
    TouchAction: K,
    TouchInput: L,
    MouseInput: N,
    PointerEventInput: F,
    TouchMouseInput: j,
    SingleTouchInput: q,
    Recognizer: G,
    AttrRecognizer: tt,
    Tap: ot,
    Pan: et,
    Swipe: rt,
    Pinch: nt,
    Rotate: at,
    Press: it,
    on: h,
    off: d,
    each: o,
    merge: yt,
    extend: wt,
    assign: pt,
    inherit: c,
    bindFn: l,
    prefixed: T
  });
  var xe = "undefined" != typeof t ? t : "undefined" != typeof self ? self : {};
  xe.Hammer = st,
  "function" == typeof define && define.amd ? define(function () {
    return st
  }) : "undefined" != typeof module && module.exports ? module.exports = st : t[n] = st
}(window, document, "Hammer"),
+
//statusbar
function (t) {
  "use strict";
  var e = {},
  n = navigator.userAgent,
  i = n.match(/(Android);?[\s\/]+([\d.]+)?/),
  a = n.match(/(iPad).*OS\s([\d_]+)/),
  r = n.match(/(iPod)(.*OS\s([\d_]+))?/),
  o = !a && n.match(/(iPhone\sOS)\s([\d_]+)/);
  if (e.ios = e.android = e.iphone = e.ipad = e.androidChrome = !1, i && (e.os = "android", e.osVersion = i[2], e.android = !0, e.androidChrome = n.toLowerCase().indexOf("chrome") >= 0), (a || o || r) && (e.os = "ios", e.ios = !0), o && !r && (e.osVersion = o[2].replace(/_/g, "."), e.iphone = !0), a && (e.osVersion = a[2].replace(/_/g, "."), e.ipad = !0), r && (e.osVersion = r[3] ? r[3].replace(/_/g, ".") : null, e.iphone = !0), e.ios && e.osVersion && n.indexOf("Version/") >= 0 && "10" === e.osVersion.split(".")[0] && (e.osVersion = n.toLowerCase().split("version/")[1].split(" ")[0]), e.webView = (o || a || r) && n.match(/.*AppleWebKit(?!.*Safari)/i), e.os && "ios" === e.os) {
    var s = e.osVersion.split(".");
    e.minimalUi = !e.webView && (r || o) && (1 * s[0] === 7 ? 1 * s[1] >= 1 : 1 * s[0] > 7) && t('meta[name="viewport"]').length > 0 && t('meta[name="viewport"]').attr("content").indexOf("minimal-ui") >= 0
  }
  var c = t(window).width(),
  l = t(window).height();
  e.statusBar = !1,
  e.webView && c * l === screen.width * screen.height ? e.statusBar = !0 : e.statusBar = !1;
  var u = [];
  if (e.pixelRatio = window.devicePixelRatio || 1, u.push("pixel-ratio-" + Math.floor(e.pixelRatio)), e.pixelRatio >= 2 && u.push("retina"), e.os && (u.push(e.os, e.os + "-" + e.osVersion.split(".")[0], e.os + "-" + e.osVersion.replace(/\./g, "-")), "ios" === e.os)) for (var p = parseInt(e.osVersion.split(".")[0], 10), h = p - 1; h >= 6; h--) u.push("ios-gt-" + h);
  e.statusBar ? u.push("with-statusbar-overlay") : t("html").removeClass("with-statusbar-overlay"),
  u.length > 0 && t("html").addClass(u.join(" ")),
  t.device = e
}($),
+
//calendar
function (t) {
  "use strict";
  var e, n = !1,
  i = function (i) {
    function a() {
      var e = !1;
      return u.params.convertToPopover || u.params.onlyInPopover ? (!u.inline && u.params.input && (u.params.onlyInPopover ? e = !0 : t.device.ios ? e = !!t.device.ipad : t(window).width() >= 768 && (e = !0)), e) : e
    }
    function r() {
      return !!(u.opened && u.container && u.container.length > 0 && u.container.parents(".popover").length > 0)
    }
    function o(t) {
      t = new Date(t);
      var e = t.getFullYear(),
      n = t.getMonth(),
      i = n + 1,
      a = t.getDate(),
      r = t.getDay();
      return u.params.dateFormat.replace(/yyyy/g, e).replace(/yy/g, (e + "").substring(2)).replace(/mm/g, 10 > i ? "0" + i : i).replace(/m/g, i).replace(/MM/g, u.params.monthNames[n]).replace(/M/g, u.params.monthNamesShort[n]).replace(/dd/g, 10 > a ? "0" + a : a).replace(/d/g, a).replace(/DD/g, u.params.dayNames[r]).replace(/D/g, u.params.dayNamesShort[r])
    }
    function s(t) {
      if (t.preventDefault(), !u.opened && (u.open(), u.params.scrollToInput && !a())) {
        var e = u.input.parents(".page-content");
        if (0 === e.length) return;
        var n, i = parseInt(e.css("padding-top"), 10),
        r = parseInt(e.css("padding-bottom"), 10),
        o = e[0].offsetHeight - i - u.container.height(),
        s = e[0].scrollHeight - i - u.container.height(),
        c = u.input.offset().top - i + u.input[0].offsetHeight;
        if (c > o) {
          var l = e.scrollTop() + c - o;
          l + o > s && (n = l + o - s + r, o === s && (n = u.container.height()), e.css({
            "padding-bottom": n + "px"
          })),
          e.scrollTop(l, 300)
        }
      }
    }
    function c(e) {
      r() || (u.input && u.input.length > 0 ? e.target !== u.input[0] && 0 === t(e.target).parents(".tuim-picker-modal").length && u.close() : 0 === t(e.target).parents(".tuim-picker-modal").length && u.close())
    }
    function l() {
      u.opened = !1,
      u.input && u.input.length > 0 && u.input.parents(".page-content").css({
        "padding-bottom": ""
      }),
      u.params.onClose && u.params.onClose(u),
      u.destroyCalendarEvents()
    }
    var u = this;
    i = i || {};
    for (var p in e) "undefined" == typeof i[p] && (i[p] = e[p]);
    u.params = i,
    u.initialized = !1,
    u.inline = !!u.params.container,
    u.isH = "horizontal" === u.params.direction;
    var h = u.isH && n ? -1 : 1;
    return u.animating = !1,
    u.addValue = function (t) {
      if (u.params.multiple) {
        u.value || (u.value = []);
        for (var e, n = 0; n < u.value.length; n++) new Date(t).getTime() === new Date(u.value[n]).getTime() && (e = n);
        "undefined" == typeof e ? u.value.push(t) : u.value.splice(e, 1),
        u.updateValue()
      } else u.value = [t],
      u.updateValue()
    },
    u.setValue = function (t) {
      u.value = t,
      u.updateValue()
    },
    u.updateValue = function () {
      u.wrapper.find(".picker-calendar-day-selected").removeClass("picker-calendar-day-selected");
      var e, n;
      for (e = 0; e < u.value.length; e++) {
        var i = new Date(u.value[e]);
        u.wrapper.find('.picker-calendar-day[data-date="' + i.getFullYear() + "-" + i.getMonth() + "-" + i.getDate() + '"]').addClass("picker-calendar-day-selected")
      }
      if (u.params.onChange && u.params.onChange(u, u.value, u.value.map(o)), u.input && u.input.length > 0) {
        if (u.params.formatValue) n = u.params.formatValue(u, u.value);
        else {
          for (n = [], e = 0; e < u.value.length; e++) n.push(o(u.value[e]));
          n = n.join(", ")
        }
        t(u.input).val(n),
        t(u.input).trigger("change")
      }
    },
    u.initCalendarEvents = function () {
      function e(e) {
        if (!s && !o) {
          o = !0;
          var n = t.getTouchPosition(e);
          c = d = n.x,
          l = d = n.y,
          f = (new Date).getTime(),
          T = 0,
          _ = !0,
          x = void 0,
          v = g = u.monthsTranslate
        }
      }
      function i(e) {
        if (o) {
          var n = t.getTouchPosition(e);
          if (p = n.x, d = n.y, "undefined" == typeof x && (x = !!(x || Math.abs(d - l) > Math.abs(p - c))), u.isH && x) return void (o = !1);
          if (e.preventDefault(), u.animating) return void (o = !1);
          _ = !1,
          s || (s = !0, w = u.wrapper[0].offsetWidth, y = u.wrapper[0].offsetHeight, u.wrapper.transition(0)),
          e.preventDefault(),
          k = u.isH ? p - c : d - l,
          T = k / (u.isH ? w : y),
          g = 100 * (u.monthsTranslate * h + T),
          u.wrapper.transform("translate3d(" + (u.isH ? g : 0) + "%, " + (u.isH ? 0 : g) + "%, 0)")
        }
      }
      function a(t) {
        return o && s ? (o = s = !1, m = (new Date).getTime(), 300 > m - f ? Math.abs(k) < 10 ? u.resetMonth() : k >= 10 ? n ? u.nextMonth() : u.prevMonth() : n ? u.prevMonth() : u.nextMonth() : -.5 >= T ? n ? u.prevMonth() : u.nextMonth() : T >= .5 ? n ? u.nextMonth() : u.prevMonth() : u.resetMonth(), void setTimeout(function () {
          _ = !0
        },
        100)) : void (o = s = !1)
      }
      function r(e) {
        if (_) {
          var n = t(e.target).parents(".picker-calendar-day");
          if (0 === n.length && t(e.target).hasClass("picker-calendar-day") && (n = t(e.target)), 0 !== n.length && (!n.hasClass("picker-calendar-day-selected") || u.params.multiple) && !n.hasClass("picker-calendar-day-disabled")) {
            n.hasClass("picker-calendar-day-next") && u.nextMonth(),
            n.hasClass("picker-calendar-day-prev") && u.prevMonth();
            var i = n.attr("data-year"),
            a = n.attr("data-month"),
            r = n.attr("data-day");
            u.params.onDayClick && u.params.onDayClick(u, n[0], i, a, r),
            u.addValue(new Date(i, a, r).getTime()),
            u.params.closeOnSelect && u.close()
          }
        }
      }
      var o, s, c, l, p, d, f, m, v, g, w, y, T, k, x, _ = !0;
      u.container.find(".c-prev-month").on("click", u.prevMonth),
      u.container.find(".c-next-month").on("click", u.nextMonth),
      u.container.find(".c-prev-year").on("click", u.prevYear),
      u.container.find(".c-next-year").on("click", u.nextYear),
      u.wrapper.on("click", r),
      u.params.touchMove && (u.wrapper.on(t.touchEvents.start, e), u.wrapper.on(t.touchEvents.move, i), u.wrapper.on(t.touchEvents.end, a)),
      u.container[0].f7DestroyCalendarEvents = function () {
        u.container.find(".picker-calendar-prev-month").off("click", u.prevMonth),
        u.container.find(".picker-calendar-next-month").off("click", u.nextMonth),
        u.container.find(".picker-calendar-prev-year").off("click", u.prevYear),
        u.container.find(".picker-calendar-next-year").off("click", u.nextYear),
        u.wrapper.off("click", r),
        u.params.touchMove && (u.wrapper.off(t.touchEvents.start, e), u.wrapper.off(t.touchEvents.move, i), u.wrapper.off(t.touchEvents.end, a))
      }
    },
    u.destroyCalendarEvents = function (t) {
      "f7DestroyCalendarEvents" in u.container[0] && u.container[0].f7DestroyCalendarEvents()
    },
    u.daysInMonth = function (t) {
      var e = new Date(t);
      return new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate()
    },
    u.monthHTML = function (t, e) {
      t = new Date(t);
      var n = t.getFullYear(),
      i = t.getMonth();
      t.getDate();
      "next" === e && (t = 11 === i ? new Date(n + 1, 0) : new Date(n, i + 1, 1)),
      "prev" === e && (t = 0 === i ? new Date(n - 1, 11) : new Date(n, i - 1, 1)),
      "next" !== e && "prev" !== e || (i = t.getMonth(), n = t.getFullYear());
      var a = u.daysInMonth(new Date(t.getFullYear(), t.getMonth()).getTime() - 864e6),
      r = u.daysInMonth(t),
      o = new Date(t.getFullYear(), t.getMonth()).getDay();
      0 === o && (o = 7);
      var s, c, l, p = [],
      h = 6,
      d = 7,
      f = "",
      m = 0 + (u.params.firstDay - 1),
      v = (new Date).setHours(0, 0, 0, 0),
      g = u.params.minDate ? new Date(u.params.minDate).getTime() : null,
      w = u.params.maxDate ? new Date(u.params.maxDate).getTime() : null;
      if (u.value && u.value.length) for (c = 0; c < u.value.length; c++) p.push(new Date(u.value[c]).setHours(0, 0, 0, 0));
      for (c = 1; h >= c; c++) {
        var y = "";
        for (l = 1; d >= l; l++) {
          var T = l;
          m++;
          var k = m - o,
          x = "";
          0 > k ? (k = a + k + 1, x += " picker-calendar-day-prev", s = new Date(0 > i - 1 ? n - 1 : n, 0 > i - 1 ? 11 : i - 1, k).getTime()) : (k += 1, k > r ? (k -= r, x += " picker-calendar-day-next", s = new Date(i + 1 > 11 ? n + 1 : n, i + 1 > 11 ? 0 : i + 1, k).getTime()) : s = new Date(n, i, k).getTime()),
          s === v && (x += " picker-calendar-day-today"),
          p.indexOf(s) >= 0 && (x += " picker-calendar-day-selected"),
          u.params.weekendDays.indexOf(T - 1) >= 0 && (x += " picker-calendar-day-weekend"),
          (g && g > s || w && s > w) && (x += " picker-calendar-day-disabled"),
          s = new Date(s);
          var _ = s.getFullYear(),
          C = s.getMonth();
          y += '<div data-year="' + _ + '" data-month="' + C + '" data-day="' + k + '" class="picker-calendar-day' + x + '" data-date="' + (_ + "-" + C + "-" + k) + '"><span>' + k + "</span></div>"
        }
        f += '<div class="picker-calendar-row">' + y + "</div>"
      }
      return f = '<div class="picker-calendar-month" data-year="' + n + '" data-month="' + i + '">' + f + "</div>"
    },
    u.animating = !1,
    u.updateCurrentMonthYear = function (t) {
      "undefined" == typeof t ? (u.currentMonth = parseInt(u.months.eq(1).attr("data-month"), 10), u.currentYear = parseInt(u.months.eq(1).attr("data-year"), 10)) : (u.currentMonth = parseInt(u.months.eq("next" === t ? u.months.length - 1 : 0).attr("data-month"), 10), u.currentYear = parseInt(u.months.eq("next" === t ? u.months.length - 1 : 0).attr("data-year"), 10)),
      u.container.find(".current-month-value").text(u.params.monthNames[u.currentMonth]),
      u.container.find(".current-year-value").text(u.currentYear)
    },
    u.onMonthChangeStart = function (t) {
      u.updateCurrentMonthYear(t),
      u.months.removeClass("picker-calendar-month-current picker-calendar-month-prev picker-calendar-month-next");
      var e = "next" === t ? u.months.length - 1 : 0;
      u.months.eq(e).addClass("picker-calendar-month-current"),
      u.months.eq("next" === t ? e - 1 : e + 1).addClass("next" === t ? "picker-calendar-month-prev" : "picker-calendar-month-next"),
      u.params.onMonthYearChangeStart && u.params.onMonthYearChangeStart(u, u.currentYear, u.currentMonth)
    },
    u.onMonthChangeEnd = function (t, e) {
      u.animating = !1;
      var n, i, a;
      u.wrapper.find(".picker-calendar-month:not(.picker-calendar-month-prev):not(.picker-calendar-month-current):not(.picker-calendar-month-next)").remove(),
      "undefined" == typeof t && (t = "next", e = !0),
      e ? (u.wrapper.find(".picker-calendar-month-next, .picker-calendar-month-prev").remove(), i = u.monthHTML(new Date(u.currentYear, u.currentMonth), "prev"), n = u.monthHTML(new Date(u.currentYear, u.currentMonth), "next")) : a = u.monthHTML(new Date(u.currentYear, u.currentMonth), t),
      ("next" === t || e) && u.wrapper.append(a || n),
      ("prev" === t || e) && u.wrapper.prepend(a || i),
      u.months = u.wrapper.find(".picker-calendar-month"),
      u.setMonthsTranslate(u.monthsTranslate),
      u.params.onMonthAdd && u.params.onMonthAdd(u, "next" === t ? u.months.eq(u.months.length - 1)[0] : u.months.eq(0)[0]),
      u.params.onMonthYearChangeEnd && u.params.onMonthYearChangeEnd(u, u.currentYear, u.currentMonth)
    },
    u.setMonthsTranslate = function (t) {
      t = t || u.monthsTranslate || 0,
      "undefined" == typeof u.monthsTranslate && (u.monthsTranslate = t),
      u.months.removeClass("picker-calendar-month-current picker-calendar-month-prev picker-calendar-month-next");
      var e = 100 * -(t + 1) * h,
      n = 100 * -t * h,
      i = 100 * -(t - 1) * h;
      u.months.eq(0).transform("translate3d(" + (u.isH ? e : 0) + "%, " + (u.isH ? 0 : e) + "%, 0)").addClass("picker-calendar-month-prev"),
      u.months.eq(1).transform("translate3d(" + (u.isH ? n : 0) + "%, " + (u.isH ? 0 : n) + "%, 0)").addClass("picker-calendar-month-current"),
      u.months.eq(2).transform("translate3d(" + (u.isH ? i : 0) + "%, " + (u.isH ? 0 : i) + "%, 0)").addClass("picker-calendar-month-next")
    },
    u.nextMonth = function (e) {
      "undefined" != typeof e && "object" != typeof e || (e = "", u.params.animate || (e = 0));
      var n = parseInt(u.months.eq(u.months.length - 1).attr("data-month"), 10),
      i = parseInt(u.months.eq(u.months.length - 1).attr("data-year"), 10),
      a = new Date(i, n),
      r = a.getTime(),
      o = !u.animating;
      if (u.params.maxDate && r > new Date(u.params.maxDate).getTime()) return u.resetMonth();
      if (u.monthsTranslate--, n === u.currentMonth) {
        var s = 100 * -u.monthsTranslate * h,
        c = t(u.monthHTML(r, "next")).transform("translate3d(" + (u.isH ? s : 0) + "%, " + (u.isH ? 0 : s) + "%, 0)").addClass("picker-calendar-month-next");
        u.wrapper.append(c[0]),
        u.months = u.wrapper.find(".picker-calendar-month"),
        u.params.onMonthAdd && u.params.onMonthAdd(u, u.months.eq(u.months.length - 1)[0])
      }
      u.animating = !0,
      u.onMonthChangeStart("next");
      var l = 100 * u.monthsTranslate * h;
      u.wrapper.transition(e).transform("translate3d(" + (u.isH ? l : 0) + "%, " + (u.isH ? 0 : l) + "%, 0)"),
      o && u.wrapper.transitionEnd(function () {
        u.onMonthChangeEnd("next")
      }),
      u.params.animate || u.onMonthChangeEnd("next")
    },
    u.prevMonth = function (e) {
      "undefined" != typeof e && "object" != typeof e || (e = "", u.params.animate || (e = 0));
      var n = parseInt(u.months.eq(0).attr("data-month"), 10),
      i = parseInt(u.months.eq(0).attr("data-year"), 10),
      a = new Date(i, n + 1, -1),
      r = a.getTime(),
      o = !u.animating;
      if (u.params.minDate && r < new Date(u.params.minDate).getTime()) return u.resetMonth();
      if (u.monthsTranslate++, n === u.currentMonth) {
        var s = 100 * -u.monthsTranslate * h,
        c = t(u.monthHTML(r, "prev")).transform("translate3d(" + (u.isH ? s : 0) + "%, " + (u.isH ? 0 : s) + "%, 0)").addClass("picker-calendar-month-prev");
        u.wrapper.prepend(c[0]),
        u.months = u.wrapper.find(".picker-calendar-month"),
        u.params.onMonthAdd && u.params.onMonthAdd(u, u.months.eq(0)[0])
      }
      u.animating = !0,
      u.onMonthChangeStart("prev");
      var l = 100 * u.monthsTranslate * h;
      u.wrapper.transition(e).transform("translate3d(" + (u.isH ? l : 0) + "%, " + (u.isH ? 0 : l) + "%, 0)"),
      o && u.wrapper.transitionEnd(function () {
        u.onMonthChangeEnd("prev")
      }),
      u.params.animate || u.onMonthChangeEnd("prev")
    },
    u.resetMonth = function (t) {
      "undefined" == typeof t && (t = "");
      var e = 100 * u.monthsTranslate * h;
      u.wrapper.transition(t).transform("translate3d(" + (u.isH ? e : 0) + "%, " + (u.isH ? 0 : e) + "%, 0)")
    },
    u.setYearMonth = function (t, e, n) {
      "undefined" == typeof t && (t = u.currentYear),
      "undefined" == typeof e && (e = u.currentMonth),
      "undefined" != typeof n && "object" != typeof n || (n = "", u.params.animate || (n = 0));
      var i;
      if (i = t < u.currentYear ? new Date(t, e + 1, -1).getTime() : new Date(t, e).getTime(), u.params.maxDate && i > new Date(u.params.maxDate).getTime()) return !1;
      if (u.params.minDate && i < new Date(u.params.minDate).getTime()) return !1;
      var a = new Date(u.currentYear, u.currentMonth).getTime(),
      r = i > a ? "next" : "prev",
      o = u.monthHTML(new Date(t, e));
      u.monthsTranslate = u.monthsTranslate || 0;
      var s, c, l = u.monthsTranslate,
      p = !u.animating;
      i > a ? (u.monthsTranslate--, u.animating || u.months.eq(u.months.length - 1).remove(), u.wrapper.append(o), u.months = u.wrapper.find(".picker-calendar-month"), s = 100 * -(l - 1) * h, u.months.eq(u.months.length - 1).transform("translate3d(" + (u.isH ? s : 0) + "%, " + (u.isH ? 0 : s) + "%, 0)").addClass("picker-calendar-month-next")) : (u.monthsTranslate++, u.animating || u.months.eq(0).remove(), u.wrapper.prepend(o), u.months = u.wrapper.find(".picker-calendar-month"), s = 100 * -(l + 1) * h, u.months.eq(0).transform("translate3d(" + (u.isH ? s : 0) + "%, " + (u.isH ? 0 : s) + "%, 0)").addClass("picker-calendar-month-prev")),
      u.params.onMonthAdd && u.params.onMonthAdd(u, "next" === r ? u.months.eq(u.months.length - 1)[0] : u.months.eq(0)[0]),
      u.animating = !0,
      u.onMonthChangeStart(r),
      c = 100 * u.monthsTranslate * h,
      u.wrapper.transition(n).transform("translate3d(" + (u.isH ? c : 0) + "%, " + (u.isH ? 0 : c) + "%, 0)"),
      p && u.wrapper.transitionEnd(function () {
        u.onMonthChangeEnd(r, !0)
      }),
      u.params.animate || u.onMonthChangeEnd(r)
    },
    u.nextYear = function () {
      u.setYearMonth(u.currentYear + 1)
    },
    u.prevYear = function () {
      u.setYearMonth(u.currentYear - 1)
    },
    u.layout = function () {
      var t, e = "",
      n = "",
      i = u.value && u.value.length ? u.value[0] : (new Date).setHours(0, 0, 0, 0),
      a = u.monthHTML(i, "prev"),
      r = u.monthHTML(i),
      o = u.monthHTML(i, "next"),
      s = '<div class="picker-calendar-months"><div class="picker-calendar-months-wrapper">' + (a + r + o) + "</div></div>",
      c = "";
      if (u.params.weekHeader) {
        for (t = 0; 7 > t; t++) {
          var l = t + u.params.firstDay > 6 ? t - 7 + u.params.firstDay : t + u.params.firstDay,
          p = u.params.dayNamesShort[l];
          c += '<div class="picker-calendar-week-day ' + (u.params.weekendDays.indexOf(l) >= 0 ? "picker-calendar-week-day-weekend" : "") + '"> ' + p + "</div>"
        }
        c = '<div class="picker-calendar-week-days">' + c + "</div>"
      }
      n = "tuim-picker-calendar " + (u.params.cssClass || ""),
      u.inline || (n = "tuim-picker-modal " + n);
      var h = u.params.toolbar ? u.params.toolbarTemplate.replace(/{{closeText}}/g, u.params.toolbarCloseText) : "";
      u.params.toolbar && (h = u.params.toolbarTemplate.replace(/{{closeText}}/g, u.params.toolbarCloseText).replace(/{{monthPicker}}/g, u.params.monthPicker ? u.params.monthPickerTemplate : "").replace(/{{yearPicker}}/g, u.params.yearPicker ? u.params.yearPickerTemplate : "")),
      e = '<div class="' + n + '">' + h + c + '<div class="picker-modal-inner">' + s + "</div></div>",
      u.pickerHTML = e
    },
    u.params.input && (u.input = t(u.params.input), u.input.length > 0 && (u.params.inputReadOnly && u.input.prop("readOnly", !0), u.inline || u.input.on("click", s), u.params.inputReadOnly && u.input.on("focus mousedown",
    function (t) {
      t.preventDefault()
    }))),
    u.inline || t(document).on("click touchend", c),
    u.opened = !1,
    u.open = function () {
      var e = a() && !1,
      n = !1;
      u.opened || (u.value || u.params.value && (u.value = u.params.value, n = !0), u.layout(), e ? (u.pickerHTML = '<div class="popover popover-picker-calendar"><div class="popover-inner">' + u.pickerHTML + "</div></div>", u.popover = t.popover(u.pickerHTML, u.params.input, !0), u.container = t(u.popover).find(".tuim-picker-modal"), t(u.popover).on("close",
      function () {
        l()
      })) : u.inline ? (u.container = t(u.pickerHTML), u.container.addClass("picker-modal-inline"), t(u.params.container).append(u.container)) : (u.container = t(t.openPicker(u.pickerHTML)), t(u.container).on("close",
      function () {
        l()
      })), u.container[0].f7Calendar = u, u.wrapper = u.container.find(".picker-calendar-months-wrapper"), u.months = u.wrapper.find(".picker-calendar-month"), u.updateCurrentMonthYear(), u.monthsTranslate = 0, u.setMonthsTranslate(), u.initCalendarEvents(), n && u.updateValue()),
      u.opened = !0,
      u.initialized = !0,
      u.params.onMonthAdd && u.months.each(function () {
        u.params.onMonthAdd(u, this)
      }),
      u.params.onOpen && u.params.onOpen(u)
    },
    u.close = function () {
      return u.opened && !u.inline ? (u.animating = !1, r() ? void t.closePicker(u.popover) : void t.closePicker(u.container)) : void 0
    },
    u.destroy = function () {
      u.close(),
      u.params.input && u.input.length > 0 && (u.input.off("click focus", s), u.input.data("calendar", null)),
      t("html").off("click", c)
    },
    u.inline && u.open(),
    u
  },
  a = function (t) {
    return 10 > t ? "0" + t : t
  };
  t.fn.calendar = function (e, n) {
    return e = e || {},
    this.each(function () {
      var r = t(this);
      if (r[0]) {
        var o = {};
        "INPUT" === r[0].tagName.toUpperCase() ? o.input = r : o.container = r;
        var s = r.data("calendar");
        if (!s) {
          if (!e.value && r.val() && (e.value = [r.val()]), !e.value) {
            var c = new Date;
            e.value = [c.getFullYear() + "-" + a(c.getMonth() + 1) + "-" + a(c.getDate())]
          }
          s = r.data("calendar", new i(t.extend(o, e)))
        }
        "string" == typeof e && s[e].call(s, n)
      }
    })
  },
  e = t.fn.calendar.prototype.defaults = {
    monthNames: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
    monthNamesShort: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
    dayNames: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
    dayNamesShort: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
    firstDay: 1,
    weekendDays: [0, 6],
    multiple: !1,
    dateFormat: "yyyy-mm-dd",
    direction: "horizontal",
    minDate: null,
    maxDate: null,
    touchMove: !0,
    animate: !0,
    closeOnSelect: !0,
    monthPicker: !0,
    monthPickerTemplate: '<div class="date-box f-r txt-r"><a href="javascript:;" class="btn btn_44 ico"><i class="fa fa-angle-left c-prev-month"></i></a><span class="current-month-value"></span><a href="javascript:;" class="btn btn_44 ico"><i class="fa fa-angle-right c-next-month"></i></a></div>',
    yearPicker: !0,
    yearPickerTemplate: '<div class="date-box"><a href="javascript:;" class="btn btn_44 ico"><i class="fa fa-angle-left c-prev-year"></i></a><span class="current-year-value"></span><a href="javascript:;" class="btn btn_44 ico"><i class="fa fa-angle-right c-next-year"></i></a></div>',
    weekHeader: !0,
    scrollToInput: !0,
    inputReadOnly: !0,
    convertToPopover: !0,
    onlyInPopover: !1,
    toolbar: !0,
    toolbarCloseText: "Done",
    toolbarTemplate: '<div class="pop-bar">{{yearPicker}}{{monthPicker}}</div>'





  }
}($),

+
//picker
function (t) {
  "use strict";
  var e = function (e) {
    function n() {
      var e = !1;
      return c.params.convertToPopover || c.params.onlyInPopover ? (!c.inline && c.params.input && (c.params.onlyInPopover ? e = !0 : t.device.ios ? e = !!t.device.ipad : t(window).width() >= 768 && (e = !0)), e) : e
    }
    function i() {
      return !!(c.opened && c.container && c.container.length > 0 && c.container.parents(".popover").length > 0)
    }
    function a() {
      if (c.opened) for (var t = 0; t < c.cols.length; t++) c.cols[t].divider || (c.cols[t].calcSize(), c.cols[t].setValue(c.cols[t].value, 0, !1))
    }
    function r(t) {
      if (t.preventDefault(), !c.opened && (c.open(), c.params.scrollToInput && !n())) {
        var e = c.input.parents(".content");
        if (0 === e.length) return;
        var i, a = parseInt(e.css("padding-top"), 10000),
        r = parseInt(e.css("padding-bottom"), 10),
        o = e[0].offsetHeight - a - c.container.height(),
        s = e[0].scrollHeight - a - c.container.height(),
        l = c.input.offset().top - a + c.input[0].offsetHeight;
        if (l > o) {
          var u = e.scrollTop() + l - o;
          u + o > s && (i = u + o - s + r, o === s && (i = c.container.height()), e.css({
            "padding-bottom": i + "px"
          })),
          e.scrollTop(u, 300)
        }
      }
    }
    function o(e) {
      i() || (c.input && c.input.length > 0 ? e.target !== c.input[0] && 0 === t(e.target).parents(".tuim-picker-modal").length && c.close() : 0 === t(e.target).parents(".tuim-picker-modal").length && c.close())
    }
    function s() {
      c.opened = !1,
      c.input && c.input.length > 0 && c.input.parents(".page-content").css({
        "padding-bottom": ""
      }),
      c.params.onClose && c.params.onClose(c),
      c.container.find(".picker-items-col").each(function () {
        c.destroyPickerCol(this)
      })
    }
    var c = this,
    l = {
      updateValuesOnMomentum: !1,
      updateValuesOnTouchmove: !0,
      rotateEffect: !1,
      momentumRatio: 7,
      freeMode: !1,
      scrollToInput: !0,
      inputReadOnly: !0,
      toolbar: !0,
      toolbarCloseText: "完成",
      title: "请选择",
      toolbarTemplate: '<div class="pop-bar">{{title}}<a href="javascript:;" class="btn btn_38 close-picker but"><em class="success">{{closeText}}</em></a></div>'
    };
    e = e || {};
    for (var u in l) "undefined" == typeof e[u] && (e[u] = l[u]);
    c.params = e,
    c.cols = [],
    c.initialized = !1,
    c.inline = !!c.params.container;
    var p = t.device.ios || navigator.userAgent.toLowerCase().indexOf("safari") >= 0 && navigator.userAgent.toLowerCase().indexOf("chrome") < 0 && !t.device.android;
    return c.setValue = function (t, e) {
      for (var n = 0,
      i = 0; i < c.cols.length; i++) c.cols[i] && !c.cols[i].divider && (c.cols[i].setValue(t[n], e), n++)
    },
    c.updateValue = function () {
      for (var e = [], n = [], i = 0; i < c.cols.length; i++) c.cols[i].divider || (e.push(c.cols[i].value), n.push(c.cols[i].displayValue));
      e.indexOf(void 0) >= 0 || (c.value = e, c.displayValue = n, c.params.onChange && c.params.onChange(c, c.value, c.displayValue), c.input && c.input.length > 0 && (t(c.input).val(c.params.formatValue ? c.params.formatValue(c, c.value, c.displayValue) : c.value.join(" ")), t(c.input).trigger("change")))
    },
    c.initPickerCol = function (e, n) {
      function i() {
        w = t.requestAnimationFrame(function () {
          h.updateItems(void 0, void 0, 0),
          i()
        })
      }
      function a(e) {
        if (!T && !y) {
          e.preventDefault(),
          y = !0;
          var n = t.getTouchPosition(e);
          k = x = n.y,
          _ = (new Date).getTime(),
          A = !0,
          b = E = t.getTranslate(h.wrapper[0], "y")
        }
      }
      function r(e) {
        if (y) {
          e.preventDefault(),
          A = !1;
          var n = t.getTouchPosition(e);
          x = n.y,
          T || (t.cancelAnimationFrame(w), T = !0, b = E = t.getTranslate(h.wrapper[0], "y"), h.wrapper.transition(0)),
          e.preventDefault();
          var i = x - k;
          E = b + i,
          M = void 0,
          v > E && (E = v - Math.pow(v - E, .8), M = "min"),
          E > g && (E = g + Math.pow(E - g, .8), M = "max"),
          h.wrapper.transform("translate3d(0," + E + "px,0)"),
          h.updateItems(void 0, E, 0, c.params.updateValuesOnTouchmove),
          O = E - D || E,
          P = (new Date).getTime(),
          D = E
        }
      }
      function o(e) {
        if (!y || !T) return void (y = T = !1);
        y = T = !1,
        h.wrapper.transition(""),
        M && ("min" === M ? h.wrapper.transform("translate3d(0," + v + "px,0)") : h.wrapper.transform("translate3d(0," + g + "px,0)")),
        C = (new Date).getTime();
        var n, a;
        C - _ > 300 ? a = E : (n = Math.abs(O / (C - P)), a = E + O * c.params.momentumRatio),
        a = Math.max(Math.min(a, g), v);
        var r = -Math.floor((a - g) / f);
        c.params.freeMode || (a = -r * f + g),
        h.wrapper.transform("translate3d(0," + parseInt(a, 10) + "px,0)"),
        h.updateItems(r, a, "", !0),
        c.params.updateValuesOnMomentum && (i(), h.wrapper.transitionEnd(function () {
          t.cancelAnimationFrame(w)
        })),
        setTimeout(function () {
          A = !0
        },
        100)
      }
      function s(e) {
        if (A) {
          t.cancelAnimationFrame(w);
          var n = t(this).attr("data-picker-value");
          h.setValue(n)
        }
      }
      var l = t(e),
      u = l.index(),
      h = c.cols[u];
      if (!h.divider) {
        h.container = l,
        h.wrapper = h.container.find(".picker-items-col-wrapper"),
        h.items = h.wrapper.find(".picker-item");
        var d, f, m, v, g;
        h.replaceValues = function (t, e) {
          h.destroyEvents(),
          h.values = t,
          h.displayValues = e;
          var n = c.columnHTML(h, !0);
          h.wrapper.html(n),
          h.items = h.wrapper.find(".picker-item"),
          h.calcSize(),
          h.setValue(h.values[0], 0, !0),
          h.initEvents()
        },
        h.calcSize = function () {
          c.params.rotateEffect && (h.container.removeClass("picker-items-col-absolute"), h.width || h.container.css({
            width: ""
          }));
          var e, n;
          e = 0,
          n = h.container[0].offsetHeight,
          d = h.wrapper[0].offsetHeight,
          f = h.items[0].offsetHeight,
          m = f * h.items.length,
          v = n / 2 - m + f / 2,
          g = n / 2 - f / 2,
          h.width && (e = h.width, parseInt(e, 10) === e && (e += "px"), h.container.css({
            width: e
          })),
          c.params.rotateEffect && (h.width || (h.items.each(function () {
            var n = t(this);
            n.css({
              width: "auto"
            }),
            e = Math.max(e, n[0].offsetWidth),
            n.css({
              width: ""
            })
          }), h.container.css({
            width: e + 2 + "px"
          })), h.container.addClass("picker-items-col-absolute"))
        },
        h.calcSize(),
        h.wrapper.transform("translate3d(0," + g + "px,0)").transition(0);
        var w;
        h.setValue = function (e, n, a) {
          "undefined" == typeof n && (n = "");
          var r = h.wrapper.find('.picker-item[data-picker-value="' + e + '"]').index();
          if ("undefined" != typeof r && -1 !== r) {
            var o = -r * f + g;
            h.wrapper.transition(n),
            h.wrapper.transform("translate3d(0," + o + "px,0)"),
            c.params.updateValuesOnMomentum && h.activeIndex && h.activeIndex !== r && (t.cancelAnimationFrame(w), h.wrapper.transitionEnd(function () {
              t.cancelAnimationFrame(w)
            }), i()),
            h.updateItems(r, o, n, a)
          }
        },
        h.updateItems = function (e, n, i, a) {
          "undefined" == typeof n && (n = t.getTranslate(h.wrapper[0], "y")),
          "undefined" == typeof e && (e = -Math.round((n - g) / f)),
          0 > e && (e = 0),
          e >= h.items.length && (e = h.items.length - 1);
          var r = h.activeIndex;
          h.activeIndex = e,
          h.wrapper.find(".picker-selected").removeClass("picker-selected"),
          c.params.rotateEffect && h.items.transition(i);
          var o = h.items.eq(e).addClass("picker-selected").transform("");
          if ((a || "undefined" == typeof a) && (h.value = o.attr("data-picker-value"), h.displayValue = h.displayValues ? h.displayValues[e] : h.value, r !== e && (h.onChange && h.onChange(c, h.value, h.displayValue), c.updateValue())), c.params.rotateEffect) {
            (n - (Math.floor((n - g) / f) * f + g)) / f;
            h.items.each(function () {
              var e = t(this),
              i = e.index() * f,
              a = g - n,
              r = i - a,
              o = r / f,
              s = Math.ceil(h.height / f / 2) + 1,
              c = -18 * o;
              c > 180 && (c = 180),
              -180 > c && (c = -180),
              Math.abs(o) > s ? e.addClass("picker-item-far") : e.removeClass("picker-item-far"),
              e.transform("translate3d(0, " + (-n + g) + "px, " + (p ? -110 : 0) + "px) rotateX(" + c + "deg)")
            })
          }
        },
        n && h.updateItems(0, g, 0);
        var y, T, k, x, _, C, b, M, E, D, O, P, A = !0;
        h.initEvents = function (e) {
          var n = e ? "off" : "on";
          h.container[n](t.touchEvents.start, a),
          h.container[n](t.touchEvents.move, r),
          h.container[n](t.touchEvents.end, o),
          h.items[n]("click", s)
        },
        h.destroyEvents = function () {
          h.initEvents(!0)
        },
        h.container[0].f7DestroyPickerCol = function () {
          h.destroyEvents()
        },
        h.initEvents()
      }
    },
    c.destroyPickerCol = function (e) {
      e = t(e),
      "f7DestroyPickerCol" in e[0] && e[0].f7DestroyPickerCol()
    },
    t(window).on("resize", a),
    c.columnHTML = function (t, e) {
      var n = "",
      i = "";
      if (t.divider) i += '<div class="picker-items-col picker-items-col-divider ' + (t.textAlign ? "picker-items-col-" + t.textAlign : "") + " " + (t.cssClass || "") + '">' + t.content + "</div>";
      else {
        for (var a = 0; a < t.values.length; a++) n += '<div class="picker-item" data-picker-value="' + t.values[a] + '">' + (t.displayValues ? t.displayValues[a] : t.values[a]) + "</div>";
        i += '<div class="picker-items-col ' + (t.textAlign ? "picker-items-col-" + t.textAlign : "") + " " + (t.cssClass || "") + '"><div class="picker-items-col-wrapper">' + n + "</div></div>"
      }
      return e ? n : i
    },
    c.layout = function () {
      var t, e = "",
      n = "";
      c.cols = [];
      var i = "";
      for (t = 0; t < c.params.cols.length; t++) {
        var a = c.params.cols[t];
        i += c.columnHTML(c.params.cols[t]),
        c.cols.push(a)
      }
      n = "tuim-picker-modal picker-columns " + (c.params.cssClass || "") + (c.params.rotateEffect ? " picker-3d" : "") + (1 === c.params.cols.length ? " picker-columns-single" : ""),
      e = '<div class="' + n + '">' + (c.params.toolbar ? c.params.toolbarTemplate.replace(/{{closeText}}/g, c.params.toolbarCloseText).replace(/{{title}}/g, c.params.title) : "") + '<div class="picker-modal-inner">' + i + '<div class="picker-center-highlight"></div></div></div>',
      c.pickerHTML = e
    },
    c.params.input && (c.input = t(c.params.input), c.input.length > 0 && (c.params.inputReadOnly && c.input.prop("readOnly", !0), c.inline || c.input.on("click", r), c.params.inputReadOnly && c.input.on("focus mousedown",
    function (t) {
      t.preventDefault()
    }))),
    c.inline || t("html").on("click", o),
    c.opened = !1,
    c.open = function () {
      var e = n();
      c.opened || (c.layout(), e ? (c.pickerHTML = '<div class="popover popover-picker-columns"><div class="popover-inner">' + c.pickerHTML + "</div></div>", c.popover = t.popover(c.pickerHTML, c.params.input, !0), c.container = t(c.popover).find(".tuim-picker-modal"), t(c.popover).on("close",
      function () {
        s()
      })) : c.inline ? (c.container = t(c.pickerHTML), c.container.addClass("picker-modal-inline"), t(c.params.container).append(c.container)) : (c.container = t(t.openPicker(c.pickerHTML)), t(c.container).on("close",
      function () {
        s()
      })), c.container[0].f7Picker = c, c.container.find(".picker-items-col").each(function () {
        var t = !0; (!c.initialized && c.params.value || c.initialized && c.value) && (t = !1),
        c.initPickerCol(this, t)
      }), c.initialized ? c.value && c.setValue(c.value, 0) : c.params.value && c.setValue(c.params.value, 0)),
      c.opened = !0,
      c.initialized = !0,
      c.params.onOpen && c.params.onOpen(c)
    },
    c.close = function (e) {
      return c.opened && !c.inline ? i() ? void t.closePicker(c.popover) : void t.closePicker(c.container) : void 0
    },
    c.destroy = function () {
      c.close(),
      c.params.input && c.input.length > 0 && c.input.off("click focus", r),
      t("html").off("click", o),
      t(window).off("resize", a)
    },
    c.inline && c.open(),
    c
  };
  t(document).on("click", ".close-picker",
  function () {
    var e = t(".tuim-picker-modal.picker-modal-visible");
    e.length > 0 && t.closePicker(e)
  }),
  t(document).on(t.touchEvents.move, ".picker-modal-inner",
  function (t) {
    t.preventDefault()
  }),
  t.openPicker = function (e, n, i) {
    "function" == typeof n && (i = n, n = void 0),
    t.closePicker();
    var a = t("<div class='tuim-picker-container " + (n || "") + "'></div>").appendTo(document.body);
    a.show(),a.addClass("picker-container-visible");
    var r = t(e).appendTo(a);return r.width(),r.addClass("picker-modal-visible"),i && a.on("close", i),r
  },
  t.updatePicker = function (e) {
    var n = t(".picker-container-visible");
    if (!n[0]) return !1;
    n.html("");
    var i = t(e).appendTo(n);return i.addClass("picker-modal-visible"),i
  },
  t.closePicker = function (e, n) {
    "function" == typeof e && (n = e),
    t(".picker-modal-visible").removeClass("picker-modal-visible").transitionEnd(function () {
      t(this).parent().remove(),
      n && n()
    }).trigger("close")
  },
  t.fn.picker = function (n) {
    var i = arguments;
    return this.each(function () {
      if (this) {
        var a = t(this),
        r = a.data("picker");
        if (!r) {
          n = n || {};
          var o = a.val();
          void 0 === n.value && "" !== o && (n.value = n.cols.length > 1 ? o.split(" ") : [o]);
          var s = t.extend({
            input: this
          },
          n);
          r = new e(s),
          a.data("picker", r)
        }
        "string" == typeof n && r[n].apply(r, Array.prototype.slice.call(i, 1))
      }
    })
  }
}($),
+
//infinite
function (t) {
  "use strict";
  var e = function (e, n) {
    this.container = t(e),
    this.container.data("infinite", this),
    this.distance = n || 50,
    this.attachEvents()
  };
  e.prototype.scroll = function () {
    var e = this.container,
    n = e.scrollHeight() - (t(window).height() + e.scrollTop());
    n <= this.distance && e.trigger("infinite")
  },
  e.prototype.attachEvents = function (e) {
    var n = this.container,
    i = "BODY" === n[0].tagName.toUpperCase() ? t(document) : n;
    i[e ? "off" : "on"]("scroll", t.proxy(this.scroll, this))
  },
  e.prototype.detachEvents = function (t) {
    this.attachEvents(!0)
  };
  t.fn.infinite = function (t) {
    return this.each(function () {
      new e(this, t)
    })
  },
  t.fn.destroyInfinite = function () {
    return this.each(function () {
      var e = t(this).data("infinite");
      e && e.detachEvents && e.detachEvents()
    })
  }
}($),
+
//dialog
function (t) {
  "use strict";
  var e;
  t.modal = function (n, i) {
    n = t.extend({},
    e, n);
    var a = n.buttons,
    r = a.map(function (t, e) {
      return '<a href="javascript:;" class="tuim-btn ' + (t.className || "") + '">' + t.text + "</a>"
    }).join(""),
    o = '<div class="tuim-dialog"><div class="tuim-dialog-hd">' + n.title + "</div>" + (n.text ? '<div class="tuim-dialog-bd">' + n.text + "</div>" : "") + '<div class="tuim-dialog-ft onepx-t">' + r + "</div></div>",
    s = t.openModal(o, i);
    return s.find(".tuim-btn").each(function (e, i) {
      var r = t(i);
      r.click(function () {
        n.autoClose && t.closeModal(),
        a[e].onClick && a[e].onClick.call(s)
      })
    }),
    s
  },
  t.openModal = function (e, n) {
    var i = t("<div class='tuim-mask'></div>").appendTo(document.body);
    i.show();
    var a = t(e).appendTo(document.body);
    return n && a.transitionEnd(function () {
      n.call(a)
    }),
    a.show(),
    i.addClass("visible"),
    a.addClass("visible"),
    a
  },
  t.closeModal = function () {
    t(".tuim-dialog").removeClass("visible").transitionEnd(function () { t(this).remove()}),
    t(".tuim-mask").removeClass("visible").transitionEnd(function () { t(this).remove() })
 },
  t.alert = function (n, i, a) {
    var r;
    return "object" == typeof n ? r = n : ("function" == typeof i && (a = arguments[1], i = void 0), r = {
      text: n,
      title: i,
      onOK: a
    }),
    t.modal({
      text: r.text,
      title: r.title,
      buttons: [{
        text: e.buttonOK,
        className: "yes",
        onClick: r.onOK
      }]
    })
  },
  t.confirm = function (n, i, a, r) {
    var o;
    return "object" == typeof n ? o = n : ("function" == typeof i && (r = arguments[2], a = arguments[1], i = void 0), o = {
      text: n,
      title: i,
      onOK: a,
      onCancel: r
    }),
    t.modal({
      text: o.text,
      title: o.title,
      buttons: [{
        text: e.buttonCancel,
        className: "no",
        onClick: o.onCancel
      },
      {
        text: e.buttonOK,
        className: "yes",
        onClick: o.onOK
      }]
    })
  },
  t.prompt = function (n, i, a, r, o) {
    var s;
    "object" == typeof n ? s = n : ("function" == typeof i && (o = arguments[3], r = arguments[2], a = arguments[1], i = void 0), s = {
      text: n,
      title: i,
      input: o,
      onOK: a,
      onCancel: r,
      empty: !1
    });
    var c = t.modal({
      text: '<div class="e-table app-input"><div class="tr"><div class="td auto">' + (s.text || "") + '</div></div><div class="tr"><div class="td auto pn"><input type="text" class="inp inp_40" value="' + (s.input || "") + '" id="tuim-prompt-input"></div></div></div>',

      title: s.title,
      autoClose: !1,
      buttons: [{
        text: e.buttonCancel,
        className: "no",
        onClick: function () {
          t.closeModal(),
          s.onCancel && s.onCancel.call(c)
        }
      },
      {
        text: e.buttonOK,
        className: "yes",
        onClick: function () {
          var e = t("#tuim-prompt-input").val();
          return s.empty || "" !== e && null !== e ? (t.closeModal(), void (s.onOK && s.onOK.call(c, e))) : (c.find(".weui-prompt-input").focus()[0].select(), !1)
        }
      }]
    },
    function () {
      this.find(".weui-prompt-input").focus()[0].select()
    });
    return c
  },
  t.login = function (n, i, a, r, o, s) {
    var c;
    "object" == typeof n ? c = n : ("function" == typeof i && (s = arguments[4], o = arguments[3], r = arguments[2], a = arguments[1], i = void 0), c = {
      text: n,
      title: i,
      username: o,
      password: s,
      onOK: a,
      onCancel: r
    });
    var l = t.modal({
      text: '<div class="e-table app-input"><div class="tr"><div class="td auto">' + (c.text || "") + '</div></div><div class="tr"><div class="td auto"><input type="text" class="inp inp_40" value="' + (c.username || "") + '" id="tuim-prompt-username" placeholder="输入用户名"></div></div><div class="tr"><div class="td auto pn"><input type="text" class="inp inp_40" value="' + (c.password || "") + '" id="tuim-prompt-password" placeholder="输入密码"></div></div></div>',

      title: c.title,
      autoClose: !1,
      buttons: [{
        text: e.buttonCancel,
        className: "no",
        onClick: function () {
          t.closeModal(),
          c.onCancel && c.onCancel.call(l)
        }
      },
      {
        text: e.buttonOK,
        className: "yes",
        onClick: function () {
          var e = t("#tuim-prompt-username").val(),
          n = t("#weui-prompt-password").val();
          return c.empty || "" !== e && null !== e ? c.empty || "" !== n && null !== n ? (t.closeModal(), void (c.onOK && c.onOK.call(l, e, n))) : (l.find("#tuim-prompt-password").focus()[0].select(), !1) : (l.find("#tuim-prompt-username").focus()[0].select(), !1)
        }
      }]
    },
    function () {
      this.find("#tuim-prompt-username").focus()[0].select()
    });
    return l
  },
  e = t.modal.prototype.defaults = {
    title: "提示",
    text: void 0,
    buttonOK: "确定",
    buttonCancel: "取消",
    buttons: [{
      text: "确定",
      className: "yes"
    }],
    autoClose: !0
  }
}($),
+
//toast
function (t) {
  "use strict";
  var e = function (e, n) {
    n = n || "";
    var i = (t("<div class='tuim-mask-t'></div>").appendTo(document.body), '<div class="tuim-toast ' + n + '">' + e + "</div>"),
    a = t(i).appendTo(document.body);
    a.show(),
    a.addClass("visible")
  },
  n = function (e) {
    t(".tuim-mask-t").remove(),
    t(".visible").removeClass("visible").transitionEnd(function () {
      var n = t(this);
      n.remove(),
      e && e(n)
    })
  };
  t.toast = function (t,m, a, r) {
    "function" == typeof a && (r = a);
    var o;
    //"cancel" == a ? o = "tuim-toast-cancel" : "forbidden" == a ? o = "tuim-toast-forbidden" : "text" == a && (o = "tuim-toast-text"),
     "text" == a && (o = "tuim-toast-text"),
    e('<i class="fa fa-' + m + ' tuim-tost-i"></i><p class="tuim-toast-content">' + (t || "已经完成") + "</p>", o),
    setTimeout(function () {
      n(r)
    },
    i.duration)
  }
  var i = t.toast.prototype.defaults = {
    duration: 2e3
  }
}($),
+
//popup
function (t) {
  "use strict";
  t.openPopup = function (e, n) {
    t.closePopup(),
    e = t(e),
    e.show(),
    e.width(),
    e.addClass("active");
    var i = e.find(".popup-modal");
    i.width(),
    i.transitionEnd(function () {
      i.trigger("open")
    })
  },
  t.closePopup = function (e, n) {
    e = t(e || ".active"),
    e.find(".popup-modal").transitionEnd(function () {
      var i = t(this);
      i.trigger("close"),
      e.hide(),
      n && e.remove()
    }),
    e.removeClass("active")
  },
  t(document).on("click", ".close-popup, .popup-overlay",
  function () {
    t.closePopup()
  }).on("click", ".open-popup",
  function () {
    t(t(this).data("target")).popup()
  }).on("click", ".popup-container",
  function (e) {
    t(e.target).hasClass("popup-container") && t.closePopup()
  }),
  t.fn.popup = function () {
    return this.each(function () {
      t.openPopup(this)
    })
  }
}($),
+
//toptip
function (t) {
  "use strict";
  var e;
  t.toptip = function (n, i, a) {
    if (n) {
      "string" == typeof i && (a = i, i = void 0),
      i = i || 3e3;
      var r = a ? "bg-" + a : "bg-danger",
      o = t(".fade").remove();
      o = t('<div class="top-fix fade toptips p10 white"></div>').appendTo(document.body),
      o.html(n),
      o[0].className = "top-fix fade toptips p10 white " + r,
      clearTimeout(e),
      o.hasClass("in") || (o.show().width(), o.addClass("in")),
      e = setTimeout(function () {
        o.removeClass("in").transitionEnd(function () {
          o.remove()
        })
      },
      i)
    }
  }
}($);

