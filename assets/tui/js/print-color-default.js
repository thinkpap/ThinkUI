//--------------------色彩说明---------------------
//具备全色系：颜色、背景、按钮、边框、多级菜单、普通滑过、tooltip
//  仅彩色系：表格、单选复选、分页
//--------------------色彩说明---------------------
var pcolora = "", pcolorb = "", pcolorc = "", pcolord = "", pcolore = "", pcolorf = "", pcolorg = "", pcolorh = "", pcolori = "", pcolorj = "", pcolork = "", pcolorl = "", pcolorm = "", pcolorn = "", pcoloro = "", pcolorp = "", pcolorq = "", pcolorr = "", pcolors = "", pcolort = "", pcoloru = "", pcolorv = "", pcolorw = "", pcolorx = "", pcolory = "", pcolorz = "";

var pcolorta = "", pcolortb = "", pcolortc = ""; pcolortd = ""; pcolorte = ""; pcolortf = "";
var kk=1;
    var color_name = colsys[kk].name;
    var color_color = colsys[kk].color;
    var color_deepcolor = colsys[kk].deepcolor;
    var color_lightcolor = colsys[kk].lightcolor;
    var color_deeplightcolor = colsys[kk].deeplightcolor;
    var color_wcolor = colsys[kk].wcolor;
    var color_lwcolor = colsys[kk].lwcolor;

    pcolora += "." + color_name + "{color:" + color_color + "!important}";
    pcolorb += ".bg-" + color_name + "" +
             ",.btn-"+color_name+""+
             ",.drop-"+color_name+">li:hover"+
             ",.tooltip-" + color_name + "+.tooltip>.tooltip-inner"+
             ",.hover-" + color_name + " li:hover"+
             "{background-color:"+color_color+"!important}";

    pcolorc += ".bgl-" + color_name + ",.btnl-" + color_name + "{background-color:" + color_deeplightcolor + "!important}";

    pcolord += ".border-" + color_name + ",.btnk-" + color_name + ",.btnl-" + color_name + ",.onepx-" + color_name + "::before{border-color:" + color_color + "!important}";

    pcolore += ".border-t-" + color_name + "{border-top-color:" + color_color + "!important}" +
              ".border-r-" + color_name + "{border-right-color:" + color_color + "!important}" +
              ".border-b-" + color_name + "{border-bottom-color:" + color_color + "!important}" +
              ".border-l-" + color_name + "{border-left-color:" + color_color + "!important}";

    pcolore += ".border-t-" + color_name + ",.tooltip-" + color_name + "+.top .tooltip-arrow{border-top-color:" + color_color + "!important}" +
              ".border-r-" + color_name + ",.tooltip-" + color_name + "+.right .tooltip-arrow{border-right-color:" + color_color + "!important}" +
              ".border-b-" + color_name + ",.tooltip-" + color_name + "+.bottom .tooltip-arrow{border-bottom-color:" + color_color + "!important}" +
              ".border-l-" + color_name + ",.tooltip-" + color_name + "+.left .tooltip-arrow{border-left-color:" + color_color + "!important}";

    pcolorf += ".btn-" + color_name + ":hover{background:" + color_deepcolor + "!important}";

    pcolorg += ".btnh-v-" + color_name + ":hover {background:" + color_color + "!important;border-color: " + color_color + "!important}";

    pcolorh += ".btnh-l-" + color_name + ":hover{background:" + color_lightcolor + "!important;border-color: " + color_lightcolor + "!important}";

    pcolori += ".btnh-d-" + color_name + ":hover{background:" + color_deepcolor + "!important;border-color: " + color_deepcolor + "!important}";

    pcolorj += ".btnl-" + color_name + ",.btnk-" + color_name + "{color: " + color_lwcolor + "!important}";

    pcolork += ".inp-h-" + color_name + ":hover,.inp-h-" + color_name + ":hover i{border-color:" + color_color + "; background-color:" + color_deeplightcolor + ";color:" + color_color + "}";

    pcolorl += ".cka-" + color_name + " span,.ckb-" + color_name + " span{color:" + color_color + "}" +
              ".cka-" + color_name + " span:before,.cka-" + color_name + " input[type=radio]:checked+span:after,.cka-" + color_name + " .slider input:checked+span:before{border-color:" + color_color + "}" +
              ".cka-" + color_name + " input+span:after,.cka-" + color_name + " input[type=checkbox]:checked+span:before{background-color:" + color_color + "}" +
              ".ckb-" + color_name + " span{border-color:" + color_color + ";background:" + color_deeplightcolor + "}" +
              ".ckb-" + color_name + " span:hover,.ckb-" + color_name + " input:checked+span{background:" + color_color + "!important; color:" + color_wcolor + "}" +
              ".ckb-" + color_name + " input:checked+span{border-color:" + color_deepcolor + "}";

    pcolorm += ".page-" + color_name + " li.curr a{background-color:" + color_color + "!important;border-color:" + color_color + "!important}";

    pcolort += ".th-" + color_name + " th,.td-" + color_name + " td,.th-" + color_name + " .th::before,.td-" + color_name + " .td::before{border-color:" + color_color + "!important}" +
              ".th-" + color_name + " th,.th-" + color_name + " .th{background:" + color_color + "!important}"+
              ".td-" + color_name + "{border-bottom-color:" + color_color + "!important}";

  //隔行换色，滑过变色，行色----深色系列
    pcolorta += ".striped-" + color_name + " tr:nth-child(even),.striped-" + color_name + " .tr:nth-child(even)" +
               ",.hover-" + color_name + " tbody tr:hover td,.hover-" + color_name + " .tbody .tr:hover .td" +
               ",tr.bg-" + color_name + " td,.tr.bg-" + color_name + " .td" +
               "{background:" + color_color + "!important;color:" + color_wcolor + "!important}"+
               ".striped-" + color_name + " a.a{color:" + color_wcolor + "!important}";

  //隔行换色，滑过变色，行色----浅色系列,浅色系没有单元格强调

    pcolortb += ".stripedl-" + color_name + " tr:nth-child(even),.stripedl-" + color_name + " .tr:nth-child(even)" +
               ",.hoverl-" + color_name + " tbody tr:hover td,.hoverl-" + color_name + " .tbody .tr:hover .td" +
               ",tr.bgl-" + color_name + " td,.tr.bgl-" + color_name + " .td" +
               "{background:" + color_deeplightcolor + "!important;color:" + color_lwcolor + "!important}";

    pcolortc += ".hoverl-" + color_name + " tbody tr:hover a.a,.hoverl-" + color_name + " .tbody .tr:hover a.a,tr.bgl-" + color_name + " td a.a,.tr.bgl-" + color_name + " .td a.a" +
               "{color:" + color_lwcolor + "!important}";


