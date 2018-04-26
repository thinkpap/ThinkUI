for (var i = 0; i < sizefont.size.length; i++) {
    //通用高度宽度
    size+= ".btn_"+sizefont.size[i]+",.btn_"+sizefont.size[i]+".ico,.inp_"+sizefont.size[i]+",.cka_"+sizefont.size[i]+",.ckb_"+sizefont.size[i]+",.page_"+sizefont.size[i]+" li{height:"+sizefont.size[i]+"px!important}";
    //size+= ".btn_"+sizefont.size[i]+" i{min-width:"+sizefont.fontb[i]+"px}";
    //纯图片，lab按钮图标为正方形小1px
    size+= ".btn_"+sizefont.size[i]+".ico i,.btn_"+sizefont.size[i]+".ico em,.btn_"+sizefont.size[i]+".lab i{width:"+sizefont.sizef[i]+"px;height:"+sizefont.sizef[i]+"px;line-height:"+sizefont.sizef[i]+"px}";
    //将纯图片按钮和输入框图标定义为方块
    size+= ".btn_"+sizefont.size[i]+".ico,.inp_"+sizefont.size[i]+" i{width:"+sizefont.size[i]+"px}";
    size+= ".select_"+sizefont.size[i]+" i{width:"+sizefont.sizes[i]+"px}";
    //修正输入框图标居中
    size+= ".inp_"+sizefont.size[i]+" i,.ckb_"+sizefont.size[i]+" span,.select_"+sizefont.size[i]+" i,.page_"+sizefont.size[i]+" li{line-height:"+sizefont.size[i]+"px}";
    //图标文字大小统一声明
    size+= ".btn_"+sizefont.size[i]+" i,.inp_"+sizefont.size[i]+" i,.select_"+sizefont.size[i]+" i{font-size:"+sizefont.fontb[i]+"px}";
    size+= ".btn_"+sizefont.size[i]+" em,.inp_"+sizefont.size[i]+",.inp_"+sizefont.size[i]+" .inp,.ckb_"+sizefont.size[i]+" span,.page_"+sizefont.size[i]+" li{font-size:"+sizefont.fonta[i]+"px}";
    //按钮内边距  
    size+= ".btn_"+sizefont.size[i]+"{padding:"+btns.btnpadtb[i]+"px "+btns.btnpadlr[i]+"px}";
    size+= ".btn_"+sizefont.size[i]+" i{margin-right:"+btns.btnimagr[i]+"px}";
    //lab按钮图标位置修正
    size+= ".btn_"+sizefont.size[i]+".lab i{margin:-"+btns.btnpadtb[i]+"px "+btns.btnpadlr[i]+"px -"+btns.btnpadtb[i]+"px -"+btns.btnpadlr[i]+"px}";
    //修正右侧下拉类图标边距
    size+= ".btn.btn_"+sizefont.size[i]+".d{padding:"+btns.btnpadtb[i]+"px "+btns.btndpad[i]+"px!important}";
    //纯图标输入框左右侧内边距纠正
    size+= ".inp_"+sizefont.size[i]+".ico-inp .inp{padding-left:"+sizefont.size[i]+"px}";
    size+= ".inp_"+sizefont.size[i]+".ico-inp.ico-r .inp{padding-right:"+sizefont.size[i]+"px;padding-left:8px}";
    //方块图标输入框左右侧内边距纠正
    size+= ".inp_"+sizefont.size[i]+".ico-inp.block .inp{padding-left:"+sizefont.sizee[i]+"px}";
    size+= ".inp_"+sizefont.size[i]+".ico-inp.block.ico-r .inp{padding-right:"+sizefont.sizee[i]+"px; padding-left:8px}";
    //右侧圆形图标输入框图标
    size+= ".inp_"+sizefont.size[i]+".ico-inp.ico-r i.o{width:"+sizefont.sizeb[i]+"px;height:"+sizefont.sizeb[i]+"px;line-height:"+sizefont.sizeb[i]+"px}";
    //选择框
    size+= ".cka_"+sizefont.size[i]+"{padding:"+btns.btnpadtb[i]+"px 0}";
    size+= ".ckb_"+sizefont.size[i]+" span{padding:0 "+btns.btnpadlr[i]+"px}";
    //select
    size+= ".select_"+sizefont.size[i]+" .inp{padding-right:"+sizefont.sizeb[i]+"px}";
    //分页按钮
    size+= ".page_"+sizefont.size[i]+" li{min-width:"+sizefont.size[i]+"px}";
}
//进度条
for (var j = 0; j < progressres.progressresize.length; j++) {
    progressressize+= ".progress_"+progressres.progressresize[j]+" .progress-bar{height:"+progressres.progressresize[j]+"px;line-height:"+progressres.progressresize[j]+"px}";
    progressressize+= ".progress.v.progress_"+progressres.progressresize[j]+",.progress.v.progress_"+progressres.progressresize[j]+" .progress-bar{width:"+progressres.progressresize[j]+"px}";
}

//--------------------色彩说明---------------------
//具备全色系：颜色、背景、按钮、边框、多级菜单、普通滑过、tooltip
//  仅彩色系：表格、单选复选、分页
//--------------------色彩说明---------------------

for (var k = 0; k < colsys.length; k++) {
    var color_name = colsys[k].name;
    var color_color = colsys[k].color;
    var color_deepcolor = colsys[k].deepcolor;
    var color_lightcolor = colsys[k].lightcolor;
    var color_deeplightcolor = colsys[k].deeplightcolor;
    var color_wcolor = colsys[k].wcolor;
    var color_lwcolor = colsys[k].lwcolor;

    colora+= "."+color_name+"{color:"+color_color+"!important}";
    colorb+= ".bg-"+color_name+""+
             ",.btn-"+color_name+""+
             ",.drop-"+color_name+">li:hover"+
             ",.tooltip-" + color_name + "+.tooltip>.tooltip-inner"+
             ",.hover-" + color_name + " li:hover"+
             "{background-color:"+color_color+"!important}";

    colorc += ".bgl-" + color_name + ",.btnl-" + color_name + "{background-color:" + color_deeplightcolor + "!important}";

    colord+= ".border-"+color_name+",.btnk-"+color_name+",.btnl-"+color_name+",.onepx-" + color_name + "::before{border-color:" + color_color + "!important}";

    colore += ".border-t-" + color_name + ",.tooltip-" + color_name + "+.top .tooltip-arrow{border-top-color:" + color_color + "!important}" +
              ".border-r-" + color_name + ",.tooltip-" + color_name + "+.right .tooltip-arrow{border-right-color:" + color_color + "!important}" +
              ".border-b-" + color_name + ",.tooltip-" + color_name + "+.bottom .tooltip-arrow{border-bottom-color:" + color_color + "!important}" +
              ".border-l-" + color_name + ",.tooltip-" + color_name + "+.left .tooltip-arrow{border-left-color:" + color_color + "!important}";

    colorf += ".btn-" + color_name + ":hover{background:" + color_deepcolor + "!important}";

    colorg += ".btnh-v-" + color_name + ":hover {background:" + color_color + "!important;border-color: " + color_color + "!important}";

    colorh += ".btnh-l-" + color_name + ":hover{background:" + color_lightcolor + "!important;border-color: " + color_lightcolor + "!important}";

    colori += ".btnh-d-" + color_name + ":hover{background:" + color_deepcolor + "!important;border-color: " + color_deepcolor + "!important}";

    colorj += ".btnl-" + color_name + ",.btnk-" + color_name + "{color: " + color_lwcolor + "!important}";

    colork += ".inp-h-" + color_name + ":hover,.inp-h-" + color_name + ":hover i{border-color:" + color_color + "; background-color:" + color_deeplightcolor + ";color:" + color_color + "}";
}

for (var l = 8; l < colsys.length; l++) {
    var color_name = colsys[l].name;
    var color_color = colsys[l].color;
    var color_deepcolor = colsys[l].deepcolor;
    var color_lightcolor = colsys[l].lightcolor;
    var color_deeplightcolor = colsys[l].deeplightcolor;
    var color_wcolor = colsys[l].wcolor;
    var color_lwcolor = colsys[l].lwcolor;

    colort += ".th-" + color_name + " th,.td-" + color_name + " td,.th-" + color_name + " .th::before,.td-" + color_name + " .td::before{border-color:" + color_color + "!important}"+
              ".th-" + color_name + " th,.th-" + color_name + " .th{background:" + color_color + "!important}"+
              ".td-" + color_name + "{border-bottom-color:" + color_color + "!important}";

  //隔行换色，滑过变色，行色----深色系列
    colorta += ".striped-" + color_name + " tr:nth-child(even),.striped-" + color_name + " .tr:nth-child(even)" +
              ",.hover-" + color_name + " tbody tr:hover td,.hover-" + color_name + " .tbody .tr:hover .td" +
              ",tr.bg-" + color_name + " td,.tr.bg-" + color_name + " .td" +
              "{background:" + color_color + "!important;color:" + color_wcolor + "!important}"+
              ".striped-" + color_name + " a.a{color:" + color_wcolor + "!important}";
  //隔行换色，滑过变色，行色----浅色系列,浅色系没有单元格强调

    colortb += ".stripedl-" + color_name + " tr:nth-child(even),.stripedl-" + color_name + " .tr:nth-child(even)" +
               ",.hoverl-" + color_name + " tbody tr:hover td,.hoverl-" + color_name + " .tbody .tr:hover .td" +
               ",tr.bgl-" + color_name + " td,.tr.bgl-" + color_name + " .td" +
               "{background:" + color_deeplightcolor + "!important;color:" + color_lwcolor + "!important}";

    colortc += ".hoverl-" + color_name + " tbody tr:hover a.a,.hoverl-" + color_name + " .tbody .tr:hover a.a,tr.bgl-" + color_name + " td a.a,.tr.bgl-" + color_name + " .td a.a" +
               "{color:" + color_lwcolor + "!important}";

    colorp += ".cka-" + color_name + " span,.ckb-" + color_name + " span{color:" + color_color + "}" +
              ".cka-" + color_name + " span:before,.cka-" + color_name + " input[type=radio]:checked+span:after,.cka-" + color_name + " .slider input:checked+span:before{border-color:" + color_color + "}" +
              ".cka-" + color_name + " input+span:after,.cka-" + color_name + " input[type=checkbox]:checked+span:before{background-color:" + color_color + "}" +
              ".ckb-" + color_name + " span{border-color:" + color_color + ";background:" + color_deeplightcolor + "}" +
              ".ckb-" + color_name + " span:hover,.ckb-" + color_name + " input:checked+span{background:" + color_color + "!important; color:" + color_wcolor + "}" +
              ".ckb-" + color_name + " input:checked+span{border-color:" + color_deepcolor + "}";

    colorq += ".page-" + color_name + " li.curr a{background-color:" + color_color + "!important;border-color:" + color_color + "!important}";
  }

for (var m = 0; m < 5; m++) {
    var color_name = colsys[m].name;
    var color_color = colsys[m].color;
    var color_deepcolor = colsys[m].deepcolor;
    var color_lightcolor = colsys[m].lightcolor;
    var color_deeplightcolor = colsys[m].deeplightcolor;
    var color_wcolor = colsys[m].wcolor;
    var color_lwcolor = colsys[m].lwcolor;
    colory += ".btn-"+color_name+",.btnh-l-"+color_name+":hover,.btnh-v-"+color_name+":hover,.btnh-d-"+color_name+":hover"+
              ",.drop-"+color_name+">li:hover>i,.drop-"+color_name+">li:hover>a"+
              ",.ico-inp>i.bg-" + color_name + "" +
              ",.hover-" + color_name + " li:hover,.hover-" + color_name + " li:hover a" +
              //",.th-"+color_name+" th,.th-"+color_name+" .th"+
              //",.hover-"+color_name+" tbody tr:hover td,.hover-"+color_name+" tbody tr:hover a.a"+
              //",.hover-"+color_name+" .tbody .tr:hover .td,.hover-"+color_name+" .tbody .tr:hover a.a"+
              //",tr.bg-"+color_name+" td,.tr.bg-"+color_name+" .td"+
              //",td.bg-"+color_name+",.td.bg-"+color_name+""+
              //",tr.bg-"+color_name+" a.a,.tr.bg-"+color_name+" a.a"+
              //",td.bg-"+color_name+" a.a,.td.bg-"+color_name+" a.a"+
              "{color:" + color_wcolor + "!important}";

    //colory += ".btn-"+color_name+",.btnh-l-"+color_name+":hover,.btnh-v-"+color_name+":hover,.btnh-d-"+color_name+":hover,.drop-"+color_name+">li:hover>i,.drop-"+color_name+">li:hover>a,.ico-inp>i.bg-"+color_name+",.th-"+color_name+" th,.th-"+color_name+" .th,.hover-"+color_name+" li:hover,.hover-"+color_name+" li:hover a{color:"+color_lwcolor+"!important}";
}


document.write("<style>");
document.write(size);
document.write(progressressize);
document.write(colora);
document.write(colorb);
document.write(colorc);
document.write(colord);
document.write(colore);
document.write(colorf);
document.write(colorg);
document.write(colorh);
document.write(colori);
document.write(colorj);
document.write(colork);
document.write(colorl);
document.write(colorm);
document.write(colorn);
document.write(coloro);
document.write(colorp);
document.write(colorq);
document.write(colorr);
document.write(colors);
document.write(colort);
document.write(colorta);
document.write(colortb);
document.write(colortc);
document.write(coloru);
document.write(colorv);
document.write(colorw);
document.write(colorx);
document.write(colory);
document.write(colorz);
document.write("</style>");

