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
}/**
 * 滚动
 */

$(document).ready(function(){
    $(document).off('click.bs.dropdown.data-api');
});
/*
 把其中的click.bs.dropdown.data-api事件关闭就好，代码如下：
 这样可以让一级菜单恢复href属性，起到超链接功能。*/
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

$(function () {
    $(".scrollpanel").jCarouselLite({
        btnNext: ".scrollbtnl",
        btnPrev: ".scrollbtnr",
        auto: 2000,
        speed: 600,
        vertical: true,
        scroll: 1,
        visible: 4
    });
});