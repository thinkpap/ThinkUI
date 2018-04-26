//var _hmt = _hmt || [];(function() {var hm = document.createElement("script");hm.src = "//hm.baidu.com/hm.js?62be88d37b49a5ca149df10c84d83824";var s = document.getElementsByTagName("script")[0]; s.parentNode.insertBefore(hm, s)})();
//document.write("<link href=\"http://cdn.bootcss.com/font-awesome/4.6.3/css/font-awesome.min.css\" type=\"text/css\" rel=\"stylesheet\">");
//构建函数：移动端判断device.js

//控制PAD尺寸问题
//if(device.mobile()){document.writeln("<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no\">");$(function(){$("body").css("minwidth","1130px")})};if(/AppleWebKit.*Mobile/i.test(navigator.userAgent) || (/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/.test(navigator.userAgent))){if(/iPad|Pad/i.test(navigator.userAgent)){$(function(){$("body").css("minWidth","1130px")})}}
//document.writeln("<link href=\"http://cdn.bootcss.com/font-awesome/4.6.3/css/font-awesome.min.css\" type=\"text/css\" rel=\"stylesheet\">");
//全能TAB切换

function CheckForm() { if ($('#key').val() == '') { alert('\u8bf7\u8f93\u5165\u8981\u67e5\u8be2\u7684\u5173\u952e\u8bcd\uff01'); return false } }


(function (window, $, undefined) {



    //构建函数：自动控制 图片、覆盖式图文尺寸
    $.fn.autoimgs = function (options) {
        var autoimgssetting = { model: 0, pc_imgcel: 0.65, pc_rowlictrl: 0, pc_margright: 15, mb_imgcel: 0.65, mb_rowlictrl: 0, mb_margright: 8, spanhight: 20, spanno: 1 }; if (options) { $.extend(autoimgssetting, options) };
        this.each(function () {
            var $this = $(this);
            var models = autoimgssetting.model;
            var tw = $this.width();
            var wodh = autoimgssetting.spanhight * autoimgssetting.spanno;
            if (device.mobile()) {
                var mb_imgb = autoimgssetting.mb_imgcel;
                var mb_mgr = autoimgssetting.mb_margright;
                var mb_rowlino;
                if (autoimgssetting.mb_rowlictrl == 0) {
                    mb_rowlino = $("li", this).length;
                } else {
                    mb_rowlino = autoimgssetting.mb_rowlictrl;
                }
                var mb_rowlikd = mb_rowlino - 1;
                var mb_rowliwidth = (tw - mb_mgr * mb_rowlikd - 0.66666666) / mb_rowlino;
                var mb_rowph = mb_rowimgh = mb_rowliwidth * mb_imgb;
                var mb_rowlih = mb_rowph + wodh + 10;
                var mb_spanh = autoimgssetting.spanno * 18+5;
                $("li", this).css({
                    "width": mb_rowliwidth + "px",
                    "height": mb_rowlih + "px",
                    "margin-right": mb_mgr + "px",
                    "overflow": "hidden"
                });
                $("li p", this).css({ "height": mb_rowph + "px" });
                $("li span", this).css({ "height": mb_spanh + "px", "overflow": "hidden" });
                $("li em", this).css({ "height": mb_spanh + "px", "overflow": "hidden" });

                for (var i = 0; i < 20; i++) {
                    var j = mb_rowlino * i - 1;
                    $("li:eq(" + j + ")", this).css({ "margin-right": "0" });
                }
            } else {
                var pc_imgb = autoimgssetting.pc_imgcel;
                var pc_mgr = autoimgssetting.pc_margright;
                var pc_rowlino;
                if (autoimgssetting.pc_rowlictrl == 0) {
                    pc_rowlino = $("li", this).length;
                } else {
                    pc_rowlino = autoimgssetting.pc_rowlictrl;
                }
                var pc_rowlikd = pc_rowlino - 1;
                var pc_rowliwidth = (tw - pc_mgr * pc_rowlikd - 0.66666666) / pc_rowlino;
                var pc_rowph = pc_rowimgh = pc_rowliwidth * pc_imgb;
                var pc_rowlih = pc_rowph + wodh + 10;
                $("li", this).css({
                    "width": pc_rowliwidth + "px",
                    "height": pc_rowlih + "px",
                    "margin-right": pc_mgr + "px",
                    "overflow": "hidden"
                });
                $("li p", this).css({ "height": pc_rowph + "px" });
                for (var i = 0; i < 20; i++) {
                    var j = pc_rowlino * i - 1;
                    $("li:eq(" + j + ")", this).css({ "margin-right": "0" });
                }
            };
            if (models == 1000) {
                $("li", this).css({ "display": "none" });
                if (device.mobile()) {
                    var z = mb_rowlino, j = mb_rowlino - 1, k = j - 1;
                } else {
                    var z = pc_rowlino, j = pc_rowlino - 1, k = j - 1;
                };
                for (var i = 0; i < z; i++) {
                    $("li:eq(" + i + ")", this).css({ "display": "block" });
                }
                $("li:eq(" + j + "),li:eq(" + k + ")", this).css({ "margin-right": "0" });
                $("li:eq(" + j + ")", this).css({ "float": "right" });
            }
        });
    }

    //构建函数：自动控制 图文、列表尺寸
    $.fn.listwidth = function (options) {
        var listsetting = { imgscale: 0.75, dtscale: 0.31, ddscale: 0.63666666, model: 0, ddpadding: 13 }; if (options) { $.extend(listsetting, options) };
        this.each(function () {
            var $this = $(this);
            var ws = $this.width();
            var dtwidth = ws * listsetting.dtscale;
            var ddwidth = ws * listsetting.ddscale;
            var ddheight = dtwidth * listsetting.imgscale;
            var dtheight = dtwidth * listsetting.imgscale;
            var ddmargin = listsetting.ddpadding;

            var listmodel = listsetting.model;
            if (listmodel == 0) {
                $(".pm-dl dt", this).css({ "float": "left" }); $(".pm-dl dd", this).css({ "float": "right" });

            }
            else { $(".pm-dl dt", this).css({ "float": "right" }); $(".pm-dl dd", this).css({ "float": "left" }); };

            $(".pm-dl dt", this).css({ "width": dtwidth + "px", "height": dtheight + "px" });
            $(".pm-dl dd", this).css({ "width": ddwidth + "px", "height": ddheight + "px" });
            $(".pm-dl dd .b", this).css({ "left": "0px" });

            $(".app-dl dt", this).css({ "width": dtwidth + "px", "height": ddheight + "px" });
            $(".app-dl dd", this).css({ "padding-left": ddmargin + "px" });
            $(".app-dl dd .b", this).css({ "left": ddmargin + "px" });



        });
    }



})(window, jQuery);

//负载函数

