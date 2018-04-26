
for (var i = 0; i < sizefont.size.length; i++) {
    msize += "//" + sizefont.size[i] + "<br>";

    //通用高度宽度
    msize += ".btn,.btn.ico,.inp,.ico-inp,.cka,.ckb,.page li{height:" + sizefont.size[i] + "px!important}<br>";
    //纯图片，lab按钮图标为正方形小1px
    msize += " .btn.ico i,.btn.ico em,.btn.lab i{width:" + sizefont.sizef[i] + "px;height:" + sizefont.sizef[i] + "px;line-height:" + sizefont.sizef[i] + "px}<br>";
    //将纯图片按钮和输入框图标定义为方块
    msize += ".btn.ico,.ico-inp i{width:" + sizefont.size[i] + "px}<br>";
    msize += ".select i{width:" + sizefont.sizes[i] + "px}<br>";
    //修正输入框图标居中
    msize += ".ico-inp i,.ckb span,.select i,.page li{line-height:" + sizefont.size[i] + "px}<br>";
    //图标文字大小统一声明
    msize += ".btn i,.ico-inp i,.select i{font-size:" + sizefont.fontb[i] + "px}<br>";
    msize += ".btn em,.inp,.ckb span,.page li{font-size:" + sizefont.fonta[i] + "px}<br>";
    //按钮内边距  
    msize += ".btn{padding:" + btns.btnpadtb[i] + "px " + btns.btnpadlr[i] + "px}<br>";
    msize += ".btn i{margin-right:" + btns.btnimagr[i] + "px}<br>";
    //lab按钮图标位置修正
    msize += ".btn.lab i{margin:-" + btns.btnpadtb[i] + "px " + btns.btnpadlr[i] + "px -" + btns.btnpadtb[i] + "px -" + btns.btnpadlr[i] + "px}<br>";
    //修正右侧下拉类图标边距
    msize += ".btn.d{padding:" + btns.btnpadtb[i] + "px " + btns.btndpad[i] + "px!important}<br>";
    //纯图标输入框左右侧内边距纠正
    msize += ".ico-inp .inp{padding-left:" + sizefont.size[i] + "px}<br>";
    msize += ".ico-inp.ico-r .inp{padding-right:" + sizefont.size[i] + "px;padding-left:8px}<br>";
    //方块图标输入框左右侧内边距纠正
    msize += ".ico-inp.block .inp{padding-left:" + sizefont.sizee[i] + "px}<br>";
    msize += ".ico-inp.block.ico-r .inp{padding-right:" + sizefont.sizee[i] + "px; padding-left:8px}<br>";
    //右侧圆形图标输入框图标
    msize += ".ico-inp.ico-r i.o{width:" + sizefont.sizeb[i] + "px;height:" + sizefont.sizeb[i] + "px;line-height:" + sizefont.sizeb[i] + "px}<br>";
    //选择框
    msize += ".cka{padding:" + btns.btnpadtb[i] + "px 0}<br>";
    msize += ".ckb span{padding:0 " + btns.btnpadlr[i] + "px}<br>";
    //select
    msize += ".select .inp{padding-right:" + sizefont.sizeb[i] + "px}<br>";
    //分页按钮
    msize += ".page li{min-width:" + sizefont.size[i] + "px}<br>";
    msize += "<br><br>";
}
