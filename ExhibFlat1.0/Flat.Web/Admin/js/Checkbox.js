
﻿$(function () {
    $("#ckAll").click(function () {

        if ($(this).attr("checked")) {
            $("input[name=items]").each(function () {
                $(this).attr("checked", true);
            });
        } else {
            $("input[name=items]").each(function () {
                $(this).attr("checked", false);
            });
        }
    });
    var a = "";
    $('input:checkbox[name="items"]:checked').each(function () //multiple checkbox的name  
    {
        a += $(this).val() + ',';
    });
    $("#test").val(a);
    str = getParam("OrderStatus"); //这是一字符串 
   
    var strs = new Array(); //定义一数组 
    strs = str.split(","); //字符分割 
    if (strs != "" && strs.length != 8) {
        var m = $("input[name='items']");
        m.attr("checked", false);
        $("#test").val(str + ',');
        for (var j = 0; j < 8; j++) {
            $('#ckAll').attr('checked', false);
            for (i = 0; i < strs.length ; i++) {
                if (m[j].value == strs[i]) {
                    // alert(m[j].value);
                    m[j].checked = true;
                }
            }
        }
    }
    else if (strs.length == 8) {
        $('#ckAll').attr('checked', true);
        $("input[name=items]").attr('checked', true);
    }
    
});
function checkeds() {
    if ($("input[name='items']:checked").length == 8) {
        $('#ckAll').attr('checked', true);
    }
    else { $('#ckAll').attr('checked', false); }
    var a = "";
    $('input:checkbox[name="items"]:checked').each(function () //multiple checkbox的name  
    {
        a += $(this).val() + ',';
    });
    $("#test").val(a);
}
function getParam(paramName) {
    paramValue = "";
    isFound = false;
    if (this.location.search.indexOf("?") == 0 && this.location.search.indexOf("=") > 1) {
        arrSource = unescape(this.location.search).substring(1, this.location.search.length).split("&");
        i = 0;
        while (i < arrSource.length && !isFound) {
            if (arrSource[i].indexOf("=") > 0) {
                if (arrSource[i].split("=")[0].toLowerCase() == paramName.toLowerCase()) {
                    paramValue = arrSource[i].split("=")[1];
                    isFound = true;
                }
            }
            i++;
        }
    }
    return paramValue;

}