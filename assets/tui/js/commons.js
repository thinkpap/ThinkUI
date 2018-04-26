//onMouseMove='showhidediv("msg")'






//显示影藏层

function showhidediv(id) {var sbtitle=document.getElementById(id);if(sbtitle){if (sbtitle.style.display == 'block'){sbtitle.style.display = 'none'}else{sbtitle.style.display = 'block'}}}
//Tab通用切换标签

function PaPtabs(thisObj, num) {if (thisObj.className == "pactive") return; var tabObj = thisObj.parentNode.id; var tabList = document.getElementById(tabObj).getElementsByTagName("li"); for (i = 0; i < tabList.length; i++) {if (i == num) {thisObj.className = "pactive";document.getElementById(tabObj + "C" + i).style.display = "block";}else {tabList[i].className = "pnormal";document.getElementById(tabObj + "C" + i).style.display = "none";}}};



function chk_idiv(id) { var objc = document.getElementById("c" + id), obju = document.getElementById("u" + id); if (objc.checked == '') { objc.checked = 'checked'; obju.style.background = '#EEF8FE' } else { objc.checked = ''; obju.style.background = '' } }
function Select(flag) { $("input[type=checkbox]").each(function () { if ($(this).prop("name") == "id") { var objc = $("#c" + $(this).val()), obju = $("#u" + $(this).val()); switch (flag) { case 0: objc.prop("checked", true); obju.attr("style", "background:#eef8fe"); break; case 1: if (objc.prop("checked") == false) { objc.prop("checked", true); obju.attr("style", "background:#eef8fe") } else { objc.prop("checked", false); obju.attr("style", "background:") } break; case 2: objc.prop("checked", false); obju.attr("style", "background:"); break; } } }) }


//通用layer弹出层  onclick="openurl(2,'标题', '.html','95%','95%')"
function openurl(showtype, title, url, width, height) { layer.open({ type: showtype, title: title, shadeClose:true, shade:0.8, area:[width, height],content: url }); }



$.fn.smartFloat = function (options) {
  var poses = { top:"", right: "", bottom: "", left: "" }; if (options) { $.extend(poses, options) };
  var toppos = poses.top;
  var rightpos = poses.right;
  var bottompos = poses.bottom;
  var leftpos = poses.left;


      var position = function (element) {
        var top = element.position().top, pos = element.css("position");
        $(window).scroll(function () {
          var scrolls = $(this).scrollTop();
          if(scrolls>top) {
            if(window.XMLHttpRequest) {
              element.css({ position: "fixed", top: toppos + "px", right: rightpos + "px", bottom: bottompos + "px", left: leftpos + "px" })
            }
            else {
              element.css({top:scrolls})
            }
          }
          else {
            element.css({ position: pos, top: top })
            
          }
        })
      };
      return $(this).each(function () { position($(this)) })
    };

