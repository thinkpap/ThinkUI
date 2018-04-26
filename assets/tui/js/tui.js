//device
(function(){var a,b,c,d,e,f,g,h,i,j;b=window.device,a={},window.device=a,d=window.document.documentElement,j=window.navigator.userAgent.toLowerCase(),a.ios=function(){return a.iphone()||a.ipod()||a.ipad()},a.iphone=function(){return!a.windows()&&e("iphone")},a.ipod=function(){return e("ipod")},a.ipad=function(){return e("ipad")},a.android=function(){return!a.windows()&&e("android")},a.androidPhone=function(){return a.android()&&e("mobile")},a.androidTablet=function(){return a.android()&&!e("mobile")},a.blackberry=function(){return e("blackberry")||e("bb10")||e("rim")},a.blackberryPhone=function(){return a.blackberry()&&!e("tablet")},a.blackberryTablet=function(){return a.blackberry()&&e("tablet")},a.windows=function(){return e("windows")},a.windowsPhone=function(){return a.windows()&&e("phone")},a.windowsTablet=function(){return a.windows()&&e("touch")&&!a.windowsPhone()},a.fxos=function(){return(e("(mobile;")||e("(tablet;"))&&e("; rv:")},a.fxosPhone=function(){return a.fxos()&&e("mobile")},a.fxosTablet=function(){return a.fxos()&&e("tablet")},a.meego=function(){return e("meego")},a.cordova=function(){return window.cordova&&"file:"===location.protocol},a.nodeWebkit=function(){return"object"==typeof window.process},a.mobile=function(){return a.androidPhone()||a.iphone()||a.ipod()||a.windowsPhone()||a.blackberryPhone()||a.fxosPhone()||a.meego()},a.tablet=function(){return a.ipad()||a.androidTablet()||a.blackberryTablet()||a.windowsTablet()||a.fxosTablet()},a.desktop=function(){return!a.tablet()&&!a.mobile()},a.television=function(){var a;for(television=["googletv","viera","smarttv","internet.tv","netcast","nettv","appletv","boxee","kylo","roku","dlnadoc","roku","pov_tv","hbbtv","ce-html"],a=0;a<television.length;){if(e(television[a]))return!0;a++}return!1},a.portrait=function(){return window.innerHeight/window.innerWidth>1},a.landscape=function(){return window.innerHeight/window.innerWidth<1},a.noConflict=function(){return window.device=b,this},e=function(a){return-1!==j.indexOf(a)},g=function(a){var b;return b=new RegExp(a,"i"),d.className.match(b)},c=function(a){var b=null;g(a)||(b=d.className.replace(/^\s+|\s+$/g,""),d.className=b+" "+a)},i=function(a){g(a)&&(d.className=d.className.replace(" "+a,""))},a.ios()?a.ipad()?c("ios ipad tablet"):a.iphone()?c("ios iphone mobile"):a.ipod()&&c("ios ipod mobile"):a.android()?c(a.androidTablet()?"android tablet":"android mobile"):a.blackberry()?c(a.blackberryTablet()?"blackberry tablet":"blackberry mobile"):a.windows()?c(a.windowsTablet()?"windows tablet":a.windowsPhone()?"windows mobile":"desktop"):a.fxos()?c(a.fxosTablet()?"fxos tablet":"fxos mobile"):a.meego()?c("meego mobile"):a.nodeWebkit()?c("node-webkit"):a.television()?c("television"):a.desktop()&&c("desktop"),a.cordova()&&c("cordova"),f=function(){a.landscape()?(i("portrait"),c("landscape")):(i("landscape"),c("portrait"))},h=Object.prototype.hasOwnProperty.call(window,"onorientationchange")?"orientationchange":"resize",window.addEventListener?window.addEventListener(h,f,!1):window.attachEvent?window.attachEvent(h,f):window[h]=f,f(),"function"==typeof define&&"object"==typeof define.amd&&define.amd?define(function(){return a}):"undefined"!=typeof module&&module.exports?module.exports=a:window.device=a}).call(this);


//通用下拉dropdown
+function (a){"use strict";function b(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c && a(c);return d&&d.length?d:b.parent()} function c(c){c&&3 === c.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=b(d),f={relatedTarget:this};e.hasClass("open")&&(c&&"click"==c.type&&/input|textarea/i.test(c.target.tagName) && a.contains(e[0],c.target)||(e.trigger(c=a.Event("hide.bs.dropdown",f)),c.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger(a.Event("hidden.bs.dropdown",f)))))}))}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled,:disabled")){var f=b(e),g=f.hasClass("open");if (c(),!g){"ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",c);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented()) return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger(a.Event("shown.bs.dropdown",h))}return !1}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",c).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle)}(jQuery);$(function(){$(".hoverdown").mouseover(function(){$(this).addClass("open");});$(".hoverdown").mouseleave(function(){$(this).removeClass("open")})});

//通用提示tooltip
+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;!e&&/destroy|hide/.test(b)||(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",a,b)};c.VERSION="3.3.7",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(a.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusin"==b.type?"focus":"hover"]=!0),c.tip().hasClass("in")||"in"==c.hoverState?void(c.hoverState="in"):(clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.isInStateTrue=function(){for(var a in this.inState)if(this.inState[a])return!0;return!1},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);if(c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusout"==b.type?"focus":"hover"]=!1),!c.isInStateTrue())return clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.getPosition(this.$viewport);h="bottom"==h&&k.bottom+m>o.bottom?"top":"top"==h&&k.top-m<o.top?"bottom":"right"==h&&k.right+l>o.width?"left":"left"==h&&k.left-l<o.left?"right":h,f.removeClass(n).addClass(h)}var p=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(p,h);var q=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",q).emulateTransitionEnd(c.TRANSITION_DURATION):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top+=g,b.left+=h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element&&e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);if(this.$element.trigger(g),!g.isDefaultPrevented())return f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=window.SVGElement&&c instanceof window.SVGElement,g=d?{top:0,left:0}:f?null:b.offset(),h={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},i=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,h,i,g)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.right&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){if(!this.$tip&&(this.$tip=a(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),b?(c.inState.click=!c.inState.click,c.isInStateTrue()?c.enter(c):c.leave(c)):c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type),a.$tip&&a.$tip.detach(),a.$tip=null,a.$arrow=null,a.$viewport=null,a.$element=null})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),$(function(){$("[data-toggle=tooltip]").tooltip({html:!0})});

//通用tab
+function($){"use strict";$.fn.extend({Tabs:function(options){options=$.extend({event:'mouseover',active:'current',timeout:0,auto:0,callback:null},options);var self=$(this),tabBox=self.children('.body').children('div'),menu=self.children('.tab').children('ul'),items=menu.find('li'),timer;var tabHandle=function(elem){elem.siblings('li').removeClass(options.active).end().addClass(options.active);tabBox.siblings('div').addClass('none').end().eq(elem.index()).removeClass('none')},delay=function(elem,time){time?setTimeout(function(){tabHandle(elem)},time):tabHandle(elem)},start=function(){if(!options.auto)return;timer=setInterval(autoRun,options.auto)},autoRun=function(){var current=menu.find('li.'+options.active),firstItem=items.eq(0),len=items.length,index=current.index()+1,item=index===len?firstItem:current.next('li'),i=index===len?0:index;current.removeClass(options.active);item.addClass(options.active);tabBox.siblings('div').addClass('none').end().eq(i).removeClass('none')};items.bind(options.event,function(){delay($(this),options.timeout)});if(options.auto){start();self.hover(function(){clearInterval(timer);timer=undefined},function(){start()})}return this}})}(jQuery);

//Widgets
$(function(){function InitiateWidgets(){$('.widget-buttons *[data-toggle="maximize"]').on("click",function(n){n.preventDefault();var t=$(this).parents(".widget").eq(0),i=$(this).find("i").eq(0),r="fa-compress",u="fa-expand";t.hasClass("maximized")?(i&&i.addClass(u).removeClass(r),t.removeClass("maximized"),t.find(".widget-body").css("height","auto")):(i&&i.addClass(r).removeClass(u),t.addClass("maximized"),maximize(t))});$('.widget-buttons *[data-toggle="collapse"]').on("click",function(n){n.preventDefault();var t=$(this).parents(".widget").eq(0),r=t.find(".widget-body"),i=$(this).find("i"),u="fa-plus",f="fa-minus",e=300;t.hasClass("collapsed")?(i&&i.addClass(f).removeClass(u),t.removeClass("collapsed"),r.slideUp(0,function(){r.slideDown(e)})):(i&&i.addClass(u).removeClass(f),r.slideUp(200,function(){t.addClass("collapsed")}))});$('.widget-buttons *[data-toggle="dispose"]').on("click",function(n){n.preventDefault();var i=$(this),t=i.parents(".widget").eq(0);t.hide(300,function(){t.remove()})})}function maximize(n){if(n){var t=$(window).height(),i=n.find(".widget-header").height();n.find(".widget-body").height(t-78)}}InitiateWidgets()})


//联动输入
$(function()
  {
    "use strict";
    var selecto='.s-inp';
    $(selecto).each(function()
      {
        var $this=$(this);
        $("select",$this).change(function()
          {
            var selectoval=$("select",$this).val();
            $("input",$this).val(selectoval)
          })
      })
  });

//图片加载
$.fn.lazyload=function(options){var settings={threshold:0,failurelimit:0,event:"scroll",effect:"show",container:window};if(options){$.extend(settings,options)}var elements=this;if("scroll"==settings.event){$(settings.container).bind("scroll",function(event){var counter=0;elements.each(function(){if(!$.belowthefold(this,settings)&&!$.rightoffold(this,settings)){$(this).trigger("appear")}else{if(counter++>settings.failurelimit){return false}}});var temp=$.grep(elements,function(element){return!element.loaded});elements=$(temp)})}return this.each(function(){var self=this;$(self).attr("original",$(self).attr("src"));if("scroll"!=settings.event||$.belowthefold(self,settings)||$.rightoffold(self,settings)){if(settings.placeholder){$(self).attr("src",settings.placeholder)}else{$(self).removeAttr("src")}self.loaded=false}else{self.loaded=true}$(self).one("appear",function(){if(!this.loaded){$("<img />").bind("load",function(){$(self).hide().attr("src",$(self).attr("original"))[settings.effect](settings.effectspeed);self.loaded=true}).attr("src",$(self).attr("original"))}});if("scroll"!=settings.event){$(self).bind(settings.event,function(event){if(!self.loaded){$(self).trigger("appear")}})}})};$.belowthefold=function(element,settings){if(settings.container===undefined||settings.container===window){var fold=$(window).height()+$(window).scrollTop()}else{var fold=$(settings.container).offset().top+$(settings.container).height()}return fold<=$(element).offset().top-settings.threshold};$.rightoffold=function(element,settings){if(settings.container===undefined||settings.container===window){var fold=$(window).width()+$(window).scrollLeft()}else{var fold=$(settings.container).offset().left+$(settings.container).width()}return fold<=$(element).offset().left-settings.threshold};$.extend($.expr[':'],{"below-the-fold":"$.belowthefold(a,{threshold:0,container:window})","above-the-fold":"!$.belowthefold(a,{threshold:0,container:window})","right-of-fold":"$.rightoffold(a, {threshold:0,container:window})","left-of-fold":"!$.rightoffold(a,{threshold:0,container:window})"});$.fn.zoomImgRollover=function(b){var d={percent:30,duration:600};var c=$.extend(d,b);function a(h,f,l,k){var g=Math.round(l*(0.5+((f*c.percent)/200)))*2;var e=Math.round(k*(0.5+((f*c.percent)/200)))*2;var j=(g-l)/2;var i=(e-k)/2;h.css({width:g,height:e,top:-i,left:-j})}return this.each(function(){var e=$(this);var g=e.width();var f=e.height();e.css({position:"relative"});e.parent().css({overflow:"hidden",display:"block",position:"relative",width:g,height:f});e.mouseover(function(){e.stop().animate({dummy:1},{duration:c.duration,step:function(h){a(e,h,g,f)}})});e.mouseout(function(){e.stop().animate({dummy:0},{duration:c.duration,step:function(h){a(e,h,g,f)}})})})}

    //构建函数：自动控制 图片、覆盖式图文尺寸
    $.fn.autoimgs = function (options) {
      var autoimgssetting = { model: 0, pc_imgcel: 0.68, pc_rowlictrl: 0, pc_margright: 15, mb_imgcel: 0.7, mb_rowlictrl: 0, mb_margright: 8, spanhight: 20, spanno: 1 }; if (options) { $.extend(autoimgssetting, options) };
      this.each(function () {
        var $this = $(this);
        var models = autoimgssetting.model;
        var tw = $this.width();
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
          $("li", this).css({"width": mb_rowliwidth + "px","margin-right": mb_mgr + "px","overflow": "hidden"});
          $("li img", this).css({ "height": mb_rowph + "px" });

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
          $("li", this).css({"width": pc_rowliwidth + "px","margin-right": pc_mgr + "px","overflow": "hidden"});
          $("li img", this).css({ "height": pc_rowph + "px" });
          for (var i = 0; i < 20; i++) {
            var j = pc_rowlino * i - 1;
            $("li:eq(" + j + ")", this).css({ "margin-right": "0" });
          }
        };
        if (models == 1000) {
          $("li", this).css({ "display": "none" });
          if (device.mobile()) { var z = mb_rowlino, j = mb_rowlino - 1, k = j - 1; }
          else {var z = pc_rowlino, j = pc_rowlino - 1, k = j - 1;};
          for (var i = 0; i < z; i++) {$("li:eq(" + i + ")", this).css({ "display": "block" });}
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
        if (listmodel == 0) {$("dt", this).css({ "float": "left" }); $("dd", this).css({ "float": "right" });}
        else { $("dt", this).css({ "float": "right" }); $("dd", this).css({ "float": "left" }); };
        $("dt", this).css({ "width": dtwidth + "px", "height": dtheight + "px" });
        $("dd", this).css({ "width": ddwidth + "px", "height": ddheight + "px" });
        $("dd .b", this).css({ "left": "0px" });

      });
    }

    //构建函数：广告控制,随机图片、动画、文字、网页兼容手机端
$.fn.thinkads=function(options){var ad={folder:[{res:"",url:"",mres:"",murl:""}],rand:1,pos:1,display:"",margin:"",mdisplay:"",mmargin:""};if(options){$.extend(ad,options)};this.each(function(){var pcdisplay=ad.display,pcmargin=ad.margin;var mbdisplay=ad.mdisplay,mbmargin=ad.mmargin;var gpos=ad.pos;if(gpos==1){$(this).append("<div class='eye'>广告</div>")}function mixArray(source){var goal=[];for(var i=0;i<source.length;i++){var pos=Math.floor(Math.random()*(source.length-i));goal[i]=source[pos];source[pos]=source[source.length-1-i]}return goal}var ro=new Array();for(var x=0;x<ad.folder.length;x++){ro[x]=x};ro=mixArray(ro);for(var j=0;j<ad.rand;j++){var pctempltet="",mbtempltet="";var pcres=ad.folder[ro[j]].res,pcurl=ad.folder[ro[j]].url;var mbres=ad.folder[ro[j]].mres,mburl=ad.folder[ro[j]].murl;pctempltet="<div class='hid-xs'><a href='"+pcurl+"' target='_blank'><img src="+pcres+"></a></div>";mbtempltet="<div class='hid-sm'><a href='"+mburl+"' target='_blank'><img src="+mbres+"></a></div>";(device.mobile())?$(this).append(mbtempltet):$(this).append(pctempltet)}(device.mobile())?$(this).css({"margin":mbmargin}):$(this).css({"margin":pcmargin});if(mbdisplay=='none'){$(this).css({"display":"none"})}if(pcdisplay=='none'){$(this).css({"display":"none"})}})}


$(function()
  {
  $(".cms").listwidth();

  $(".cms-list").listwidth({ dtscale: 0.23, ddscale: 0.73,  model: 0 });//分页列表专用

  $(".cms_notit").autoimgs({ model: 1000, pc_rowlictrl: 4, mb_rowlictrl: 3 });//分页列表专用

  $(".img_23").autoimgs({ model: 1000,  pc_rowlictrl: 2, mb_rowlictrl: 3 });//pc只显示2个，手机只显示3个
  $(".hov_23").autoimgs({ model: 1000, pc_rowlictrl: 2, mb_rowlictrl: 3 });//pc只显示2个，手机只显示3个


  if(device.mobile())
    {

      $(function()
        {
          $(".cms").listwidth({dtscale:0.30,ddscale:0.66,imgscale:0.7});
        });
    }
  else
    {
      $(function () {$(".blank").attr("target", "_blank");});
    }



  })