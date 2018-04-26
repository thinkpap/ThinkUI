
(function (window, $, undefined) {



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
                $("li", this).css({"width": mb_rowliwidth + "px","margin-right": mb_mgr + "px","overflow": "hidden"});
                $("img", this).css({ "height": mb_rowimgh + "px" });
                for (var i = 0; i < 20; i++) {
                  var j = mb_rowlino * i - 1;
                  $("li:eq(" + j + ")", this).css({ "margin-right": "0" });
                }

        });
    }

    //构建函数：自动控制 图文、列表尺寸
    $.fn.listwidth = function (options) {
        var listsetting = { imgscale: 0.70}; if (options) { $.extend(listsetting, options) };
        this.each(function () {
            var $this = $(this);
            var dtwidth = $("dt", $this).width();
            var ddheight = dtwidth * listsetting.imgscale;
            var dtheight = dtwidth * listsetting.imgscale;
            $("dt", this).css({"height": dtheight + "px" });
            $("dd", this).css({"height": ddheight + "px" });
        });
    }

    $.fn.lazyload = function (options) { var settings = { threshold: 0, failurelimit: 0, event: "scroll", effect: "show", container: window }; if (options) { $.extend(settings, options) } var elements = this; if ("scroll" == settings.event) { $(settings.container).bind("scroll", function (event) { var counter = 0; elements.each(function () { if (!$.belowthefold(this, settings) && !$.rightoffold(this, settings)) { $(this).trigger("appear") } else { if (counter++ > settings.failurelimit) { return false } } }); var temp = $.grep(elements, function (element) { return !element.loaded }); elements = $(temp) }) } return this.each(function () { var self = this; $(self).attr("original", $(self).attr("src")); if ("scroll" != settings.event || $.belowthefold(self, settings) || $.rightoffold(self, settings)) { if (settings.placeholder) { $(self).attr("src", settings.placeholder) } else { $(self).removeAttr("src") } self.loaded = false } else { self.loaded = true } $(self).one("appear", function () { if (!this.loaded) { $("<img />").bind("load", function () { $(self).hide().attr("src", $(self).attr("original"))[settings.effect](settings.effectspeed); self.loaded = true }).attr("src", $(self).attr("original")) } }); if ("scroll" != settings.event) { $(self).bind(settings.event, function (event) { if (!self.loaded) { $(self).trigger("appear") } }) } }) }; $.belowthefold = function (element, settings) { if (settings.container === undefined || settings.container === window) { var fold = $(window).height() + $(window).scrollTop() } else { var fold = $(settings.container).offset().top + $(settings.container).height() } return fold <= $(element).offset().top - settings.threshold }; $.rightoffold = function (element, settings) { if (settings.container === undefined || settings.container === window) { var fold = $(window).width() + $(window).scrollLeft() } else { var fold = $(settings.container).offset().left + $(settings.container).width() } return fold <= $(element).offset().left - settings.threshold }; $.extend($.expr[':'], { "below-the-fold": "$.belowthefold(a,{threshold:0,container:window})", "above-the-fold": "!$.belowthefold(a,{threshold:0,container:window})", "right-of-fold": "$.rightoffold(a, {threshold:0,container:window})", "left-of-fold": "!$.rightoffold(a,{threshold:0,container:window})" }); $.fn.zoomImgRollover = function (b) { var d = { percent: 30, duration: 600 }; var c = $.extend(d, b); function a(h, f, l, k) { var g = Math.round(l * (0.5 + ((f * c.percent) / 200))) * 2; var e = Math.round(k * (0.5 + ((f * c.percent) / 200))) * 2; var j = (g - l) / 2; var i = (e - k) / 2; h.css({ width: g, height: e, top: -i, left: -j }) } return this.each(function () { var e = $(this); var g = e.width(); var f = e.height(); e.css({ position: "relative" }); e.parent().css({ overflow: "hidden", display: "block", position: "relative", width: g, height: f }); e.mouseover(function () { e.stop().animate({ dummy: 1 }, { duration: c.duration, step: function (h) { a(e, h, g, f) } }) }); e.mouseout(function () { e.stop().animate({ dummy: 0 }, { duration: c.duration, step: function (h) { a(e, h, g, f) } }) }) }) }

})(window, jQuery);

//负载函数
$(function () {

  $(".cms_pics").autoimgs();
  $(".cms").listwidth();
});


