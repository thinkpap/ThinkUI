/*! layer-v3.1.0 Web弹层组件 MIT License  http://layer.layui.com/  By 贤心 */



; !
  function (e) {

    "use strict";
    var a=document,
        b="querySelectorAll",
        c="getElementsByClassName"


    e.tuier={

    },
  "function" == typeof define ? define(function () {return tuier}) :


      function() {
        var e=document.scripts,
            n=e[e.length-1],
            i=n.src,
            a=i.substring(0,i.lastIndexOf("/")+1);
        n.getAttribute("merge")||document.head.appendChild(function() {
          var e=t.createElement("link");
          return e.href=a+"need/layer.css?2.0",
            e.type="text/css",
            e.rel="styleSheet",
            e.id="layermcss",
            e;
        }());
      }();

  }(window);