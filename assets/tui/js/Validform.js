$(".form").Validform({
    /*btnSubmit: "",
    btnReset: "",
    ignoreHidden: false,
    dragonfly: false,
    tipSweep: true,
    label: ".label",
    showAllError: true,
    postonce: true,
    ajaxPost: false,
    datatype: {},
    usePlugin: {
      swfupload: {},
      datepicker: {},
      passwordstrength: {},
      jqtransform: {
        selector: "select,input"
      }
    },
    beforeCheck: function (curform) {
      //在表单提交执行验证之前执行的函数，curform参数是当前表单对象。
      //这里明确return false的话将不会继续执行验证操作;
    },
    beforeSubmit: function (curform) {
      //在验证成功后，表单提交前执行的函数，curform参数是当前表单对象。
      //这里明确return false的话表单将不会提交;
    },
    callback: function (data) {
      //返回数据data是json对象，{"info":"demo info","status":"y"}
      //info: 输出提示信息;
      //status: 返回提交数据的状态,是否提交成功。如可以用"y"表示提交成功，"n"表示提交失败，在ajax_post.php文件返回数据里自定字符，主要用在callback函数里根据该值执行相应的回调操作;
      //你也可以在ajax_post.php文件返回更多信息在这里获取，进行相应操作；
      //ajax遇到服务端错误时也会执行回调，这时的data是{ status:**, statusText:**, readyState:**, responseText:** }；

      //这里执行回调操作;
      //注意：如果不是ajax方式提交表单，传入callback，这时data参数是当前表单对象，回调函数会在表单验证全部通过后执行，然后判断是否提交表单，如果callback里明确return false，则表单不会提交，如果return true或没有return，则会提交表单。
    },*/
    tiptype: function (msg, o) {
        if (o.type == 3) {
            // 只有在验证失败的时候，才会弹出相关的信息
            layer.alert(msg, { icon: 6 });
           // layer.msg(msg);
        }
    },


    //tiptype:function(msg,o,cssctl){
    //msg：提示信息;
    //o:{obj:*,type:*,curform:*},
    //obj指向的是当前验证的表单元素（或表单对象，验证全部验证通过，提交表单时o.obj为该表单对象），
    //type指示提示的状态，值为1、2、3、4， 1：正在检测/提交数据，2：通过验证，3：验证失败，4：提示ignore状态,
    //curform为当前form对象;
    //cssctl:内置的提示信息样式控制函数，该函数需传入两个参数：显示提示信息的对象 和 当前提示的状态（既形参o中的type）;
    //}
    datatype: {//传入自定义datatype类型【方式二】;
        "need2": function (gets, obj, curform, regxp) {
            var need = 2, numselected = curform.find("input[name='" + obj.attr("name") + "']:checked").length;
            return numselected >= need ? true : "请至少选择" + need + "项！";
        },

        "max2": function (gets, obj, curform, regxp) {
            var atmax = 2,numselected = curform.find("input[name='" + obj.attr("name") + "']:checked").length;
            if (numselected == 0) {return false;} else if (numselected > atmax) {return "最多只能选择" + atmax + "项！";}
            return true;
        },
        //身份证验证
        "idcard": function (gets, obj, curform, datatype) {
            var Wi = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2, 1];// 加权因子;
            var ValideCode = [1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2];// 身份证验证位值，10代表X;

            if (gets.length == 15) {return isValidityBrithBy15IdCard(gets);} else if (gets.length == 18) {
                var a_idCard = gets.split("");// 得到身份证数组   
                if (isValidityBrithBy18IdCard(gets) && isTrueValidateCodeBy18IdCard(a_idCard)) {return true;}return false;}
            return false;

            function isTrueValidateCodeBy18IdCard(a_idCard) {
                var sum = 0; // 声明加权求和变量   
                if (a_idCard[17].toLowerCase() == 'x') {a_idCard[17] = 10;}// 将最后位为x的验证码替换为10方便后续操作   
                for (var i = 0; i < 17; i++) {sum += Wi[i] * a_idCard[i];}// 加权求和   
                valCodePosition = sum % 11;// 得到验证码所位置   
                if (a_idCard[17] == ValideCode[valCodePosition]) {return true;}return false;
            }

            function isValidityBrithBy18IdCard(idCard18) {
                var year = idCard18.substring(6, 10);var month = idCard18.substring(10, 12);var day = idCard18.substring(12, 14);
                var temp_date = new Date(year, parseFloat(month) - 1, parseFloat(day));
                // 这里用getFullYear()获取年份，避免千年虫问题   
                if (temp_date.getFullYear() != parseFloat(year) || temp_date.getMonth() != parseFloat(month) - 1 || temp_date.getDate() != parseFloat(day)) {return false}
                return true;
            }

            function isValidityBrithBy15IdCard(idCard15) {
                var year = idCard15.substring(6, 8);var month = idCard15.substring(8, 10);var day = idCard15.substring(10, 12);
                var temp_date = new Date(year, parseFloat(month) - 1, parseFloat(day));
                // 对于老身份证中的你年龄则不需考虑千年虫问题而使用getYear()方法   
                if (temp_date.getYear() != parseFloat(year) || temp_date.getMonth() != parseFloat(month) - 1 || temp_date.getDate() != parseFloat(day)) {return false;}
                return true;
            }

        }//身份证验证

    }

});
