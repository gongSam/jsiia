/**
 * Created by Administrator on 2017/3/2.
 */
$(document).ready(function(){
    dropdownOpen();//调用
});

function dropdownOpen() {

    var $dropdownLi = $('li.dropdown');

    $dropdownLi.mouseover(function() {
        $(this).addClass('open');
    }).mouseout(function() {
        $(this).removeClass('open');
    });
}

<!-- JS Page Level -->
function pageScroll() {
    window.scrollBy(0, -100);
    scrolldelay = setTimeout('pageScroll()', 100);
    var sTop = document.documentElement.scrollTop + document.body.scrollTop;
    if (sTop == 0) clearTimeout(scrolldelay);
}
function checkBrowser() {
    var ua = navigator.appVersion;
    var ver = ua.match(/MSIE ([\d.]+)/)[1];
    if (ver < 10) {
        document.getElementById("loadbrowser").innerHTML = "<h2>您的浏览器版本过低，请下载高版本的浏览器，</h2><a href='http://rj.baidu.com/soft/detail/14744.html?ald' target='_blank' style='font-size:30px;'>点击下载谷歌浏览器</a></h1>";
    }
};



    var _hmt = _hmt || [];     //平台、设备和操作系统
    var system = {
    win: false, mac: false, xll: false
};     //检测平台
    var p = navigator.platform;
    system.win = p.indexOf("Win") == 0;
    system.mac = p.indexOf("Mac") == 0;
    system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);
    if (system.win || system.mac || system.xll) {
} else {
    //window.location.href = "http://117.35.182.243/zsxa.apk";
}


function setTab2(name, cursel, n) {
    for (i = 1; i <= n; i++) {
        var menu = document.getElementById(name + i);
        var con = document.getElementById("con_" + name + "_" + i);
        menu.className = i == cursel ? "active" : "";
        con.style.display = i == cursel ? "block" : "none";
    }
}
function setTab3(name, cursel, n) {
    for (i = 1; i <= n; i++) {
        var menu = document.getElementById(name + i);
        var con = document.getElementById("con_" + name + "_" + i);
        menu.className = i == cursel ? "bgcolor-green" : "";
        con.style.display = i == cursel ? "block" : "none";
    }
}
$(document).ready(function () {
    $('#divT>.item:first').addClass('active');
    $('.divT>.item:first').addClass('active');
    $('.divT1>.item:first').addClass('active');
    $('.divT2>.item:first').addClass('active');
    $('.divT3>.item:first').addClass('active');
    $('.divT4>.item:first').addClass('active');
    var evnts = function () {
        return {
            "event": [
                {"date": "01/01/2012", "title": "1"}, {
                    "date": "02/02/2012",
                    "title": "2"
                }, {"date": "03/03/2012", "title": "34"}, {"date": "04/04/2012", "title": "123"},
                {"date": "05/05/2012", "title": "223"}, {
                    "date": "06/06/2012",
                    "title": "4"
                }, {"date": "07/07/2012", "title": "5"}, {"date": "08/08/2012", "title": "14"},
                {"date": "09/09/2012", "title": "10"}, {
                    "date": "10/10/2012",
                    "title": "10"
                }, {"date": "11/11/2012", "title": "10"}, {"date": "12/12/2012", "title": "10"}]
        }
    };
    $('#calendar').Calendar({'events': evnts, 'weekStart': 1}).on('changeDay', function (event) {
        today = new Date();
        var tyy = today.getFullYear();
        var tmm = today.getMonth() - (-1);
        var tdd = today.getDate();
        var dd = event.day.valueOf();
        var mm = event.month.valueOf();
        var yy = event.year.valueOf();
        if (yy <= tyy) {
            if (mm <= tmm) {
                if (dd <= tdd) {
                    href();
                } else {
                    if (mm < tmm && dd >= tdd) {
                        href();
                    } else {
                        alert('日期超出查询范围');
                    }
                }
            } else {
                if (yy < tyy && mm >= tmm) {
                    href();
                } else {
                    alert('月份超出查询范围');
                }
            }
        } else {
            alert('年份超出查询范围');
        }
        function href() {
            var m1 = Math.floor(mm / 10);
            var m2 = mm % 10;
            var d1 = Math.floor(dd / 10);
            var d2 = dd % 10;
            var date = yy + "-" + m1 + m2 + "-" + d1 + d2;
            window.open("/ptl/def/def/index_1121_7536.jsp?_cimake=false&d=" + date + "");
        }
    });
});
