$(document).ready(function() {
    $("li.m_title[leftSec]").each(function() {
        var temId = $(this).attr("id");
        $.data[temId] = parseInt($(this).attr("leftSec"));
        var cur_div = $(this);
        setInterval("changeTime()" , 1000);
    });
    
});

function changeTime(obj, temId) {
	
    if ($.data[temId] <= 0) {
        /*$.data[temId] = 0;
        obj.find("li[p=s2]").removeClass().addClass("m_time").addClass("m_time_0");
        $("#btn" + temId).attr("flag", "on").attr("src", serverImagePath + "/img/homepage/seckillindex/btn_01.jpg");*/
        return;
    }

    var h = Math.floor($.data[temId] / 60 / 60);
    if (h > 99)
        h = 99;
    var m = Math.floor(($.data[temId] / 60) % 60);
    var s = Math.floor($.data[temId] % 60);
    obj.find("li[p=h1]").removeClass().addClass("m_time").addClass("m_time_" + getDigit(h, 0));
    obj.find("li[p=h2]").removeClass().addClass("m_time").addClass("m_time_" + getDigit(h, 1));
    obj.find("li[p=m1]").removeClass().addClass("m_time").addClass("m_time_" + getDigit(m, 0));
    obj.find("li[p=m2]").removeClass().addClass("m_time").addClass("m_time_" + getDigit(m, 1));
    obj.find("li[p=s1]").removeClass().addClass("m_time").addClass("m_time_" + getDigit(s, 0));
    obj.find("li[p=s2]").removeClass().addClass("m_time").addClass("m_time_" + getDigit(s, 1));
}

function getDigit(val, index) {
    if (0 == index) {
        if (val < 10)
            return 0;
        else
            return ("" + val).substring(0, 1);
    } else {
        if (val < 10)
            return val;
        else
            return val % 10;
    }
}