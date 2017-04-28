/**
 * Created by Administrator on 2017/2/17.
 */
// JavaScript Document


if($("#ld_bxzc_sylba")){
    var lbia=0,jsqsa=9000,drsa=0,jys=400;
    $(function(){
        $("#ld_bxzc_sylba h2").width($(window).width());
        playa();
        var jsqa=setInterval(jja,jsqsa);
        $("#ld_bxzc_sylba ul li").bind({"mouseover":function(){clearInterval(jsqa);},"mouseleave":function(){jsqa=setInterval(jja,jsqsa);}});
        $(".h3_ri").bind({"mouseenter":function(){clearInterval(jsqa);},"mouseleave":function(){jsqa=setInterval(jja,jsqsa);},"click":function(){lbia++;playa(lbia);}});
        $(".h3_le").bind({"mouseenter":function(){clearInterval(jsqa);},"mouseleave":function(){jsqa=setInterval(jja,jsqsa);},"click":function(){lbia--;playa(lbia);}});
        $("#ld_bxzc_sylba h2 ol li").each(function(index, element) {
            $(this).bind({"mouseenter":function(){clearInterval(jsqa);var jsq_ys=setTimeout(function(){lbia=index;playa(lbia);},jys);},"mouseleave":function(){jsqa=setInterval(jja,jsqsa);}});
        });
    });
    function jja(){
        lbia++;
        playa(lbia);
    }
    function playa(){
        if(lbia==$("#ld_bxzc_sylba ul li").size()){lbia=0;}
        if(lbia<0){lbia=$("#ld_bxzc_sylba ul li").size()-1;}
        $("#ld_bxzc_sylba ul li").eq(lbia).fadeIn(drsa).siblings().hide();
        $("#ld_bxzc_sylba h2 ol li").eq(lbia).addClass("now_li").siblings().removeClass("now_li");
        $("#ld_bxzc_sylba h4").eq(lbia).show().siblings("h4").hide();
    }
    $(window).resize(function(e) {
        $(function(){
            $("#ld_bxzc_sylba h2").width($(window).width());
            playa();
            var jsqa=setInterval(jja,jsqsa);
            $("#ld_bxzc_sylba ul li").bind({"mouseover":function(){clearInterval(jsqa);},"mouseleave":function(){jsqa=setInterval(jja,jsqsa);}});
            $(".h3_ri").bind({"mouseenter":function(){clearInterval(jsqa);},"mouseleave":function(){jsqa=setInterval(jja,jsqsa);},"click":function(){lbia++;playa(lbia);}});
            $(".h3_le").bind({"mouseenter":function(){clearInterval(jsqa);},"mouseleave":function(){jsqa=setInterval(jja,jsqsa);},"click":function(){lbia--;playa(lbia);}});
            $("#ld_bxzc_sylba h2 ol li").each(function(index, element) {
                $(this).bind({"mouseenter":function(){clearInterval(jsqa);var jsq_ys=setTimeout(function(){lbia=index;playa(lbia);},jys);},"mouseleave":function(){jsqa=setInterval(jja,jsqsa);}});
            });
        });
        function jja(){
            lbia++;
            playa(lbia);
        }
        function playa(){
            if(lbia==$("#ld_bxzc_sylba ul li").size()){lbia=0;}
            if(lbia<0){lbia=$("#ld_bxzc_sylba ul li").size()-1;}
            $("#ld_bxzc_sylba ul li").eq(lbia).fadeIn(drsa).siblings().hide();
            $("#ld_bxzc_sylba h2 ol li").eq(lbia).addClass("now_li").siblings().removeClass("now_li");
            $("#ld_bxzc_sylba h4").eq(lbia).show().siblings("h4").hide();
        }
    });


    $(function(){
        var sphide_ys;
        $(".ld_bxzc_nav ul li a").each(function(index, element) {
            $(this).mouseenter(function(){
                $(".ld_nav_sp").hide();
                if($(this).find("span").eq(0).attr("class").indexOf("span_a")<0){
                    $(this).find("span").eq(0).addClass("span_a").end().addClass("span_g");
                    $(this).find("span").eq(1).addClass("span_b").end().addClass("span_g");
                    $(this).find("span").eq(2).addClass("span_c").end().addClass("span_g");
                }
                $(".ld_nav_sp0"+index).slideDown(200);
            });
            $(this).mouseleave(function(){
                if($(this).find("span").eq(0).hasClass("span_g")){
                    $(this).find("span").eq(0).removeClass("span_a");
                    $(this).find("span").eq(1).removeClass("span_b");
                    $(this).find("span").eq(2).removeClass("span_c");
                }
                sphide_ys = setTimeout(function(){$(".ld_nav_sp0"+index).hide();},200);
            });
        });
        $(".ld_nav_sp").bind({"mouseover":function(){clearTimeout(sphide_ys);},"mouseleave":function(){$(this).hide();}});
    });

    $(function(){
        $(".ld_bxzc_zjboxbl h2 ul li").mouseover(function(){
            $(this).addClass("nowa").siblings().removeClass("nowa");
            $(".ld_bxzc_zjboxbl h2 a").eq($(this).index()).show().siblings("a").hide();
            $(".ld_bxzc_zjboxbl ol").eq($(this).index()).show().siblings("ol").hide();
        });
    });
    $(function(){
        $(".ld_bxzc_zjboxbr h2 ul li").mouseover(function(){
            $(this).addClass("nowb").siblings().removeClass("nowb");
            $(".ld_bxzc_zjboxbr h2 a").eq($(this).index()).show().siblings("a").hide();
            $(".ld_bxzc_zjboxbr ol").eq($(this).index()).show().siblings("ol").hide();
        });
    });
//$(function(){
//	$(".ld_bxzc_zjboxd h2 ul li").mouseover(function(){
//		$(this).addClass("nowc").siblings().removeClass("nowc");
//		$(".ld_bxzc_zjboxd div ul").eq($(this).index()).show().siblings("ul").hide();
//		});
//	});
}
//百度代码
var _hmt = _hmt || [];
(function() {
    var hm = document.createElement("script");
    hm.src = "//hm.baidu.com/hm.js?c3b95e9b1e90d8d1f072ad52635870ef";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
})();

function addEvent(obj,evtType,func,cap){
    cap=cap||false;
    if(obj.addEventListener){
        obj.addEventListener(evtType,func,cap);
        return true;
    }else if(obj.attachEvent){
        if(cap){
            obj.setCapture();
            return true;
        }else{
            return obj.attachEvent("on" + evtType,func);
        }
    }else{
        return false;
    }
}
function getPageScroll(){
    var xScroll,yScroll;

    if (self.pageXOffset) {
        xScroll = self.pageXOffset;
    } else if (document.documentElement && document.documentElement.scrollLeft){
        xScroll = document.documentElement.scrollLeft;
    } else if (document.body) {
        xScroll = document.body.scrollLeft;
    }

    if (self.pageYOffset) {
        yScroll = self.pageYOffset;
    } else if (document.documentElement && document.documentElement.scrollTop){
        yScroll = document.documentElement.scrollTop;
    } else if (document.body) {
        yScroll = document.body.scrollTop;
    }

    arrayPageScroll = new Array(xScroll,yScroll);
    return arrayPageScroll;
}
function GetPageSize(){
    var xScroll, yScroll;
    if (window.innerHeight && window.scrollMaxY) {
        xScroll = document.body.scrollWidth;
        yScroll = window.innerHeight + window.scrollMaxY;
    } else if (document.body.scrollHeight > document.body.offsetHeight){
        xScroll = document.body.scrollWidth;
        yScroll = document.body.scrollHeight;
    } else {
        xScroll = document.body.offsetWidth;
        yScroll = document.body.offsetHeight;
    }
    var windowWidth, windowHeight;
    if (self.innerHeight) {
        windowWidth = self.innerWidth;
        windowHeight = self.innerHeight;
    } else if (document.documentElement && document.documentElement.clientHeight) {
        windowWidth = document.documentElement.clientWidth;
        windowHeight = document.documentElement.clientHeight;
    } else if (document.body) {
        windowWidth = document.body.clientWidth;
        windowHeight = document.body.clientHeight;
    }
    if(yScroll < windowHeight){
        pageHeight = windowHeight;
    } else {
        pageHeight = yScroll;
    }
    if(xScroll < windowWidth){
        pageWidth = windowWidth;
    } else {
        pageWidth = xScroll;
    }
    arrayPageSize = new Array(pageWidth,pageHeight,windowWidth,windowHeight)
    return arrayPageSize;
}
/*飘窗*/
var AdMoveConfig=new Object();
AdMoveConfig.IsInitialized=false;
AdMoveConfig.ScrollX=0;
AdMoveConfig.ScrollY=0;
AdMoveConfig.MoveWidth=0;
AdMoveConfig.MoveHeight=0;
AdMoveConfig.Resize=function(){
    var winsize=GetPageSize();
    AdMoveConfig.MoveWidth=winsize[2];
    AdMoveConfig.MoveHeight=winsize[3];
    AdMoveConfig.Scroll();
}
AdMoveConfig.Scroll=function(){
    var winscroll=getPageScroll();
    AdMoveConfig.ScrollX=winscroll[0];
    AdMoveConfig.ScrollY=winscroll[1];
}
addEvent(window,"resize",AdMoveConfig.Resize);
addEvent(window,"scroll",AdMoveConfig.Scroll);
function AdMove(id){
    if(!AdMoveConfig.IsInitialized){
        AdMoveConfig.Resize();
        AdMoveConfig.IsInitialized=true;
    }
    var obj=document.getElementById(id);
    obj.style.position="absolute";
    var W=AdMoveConfig.MoveWidth-obj.offsetWidth;
    var H=AdMoveConfig.MoveHeight-obj.offsetHeight;
    var x = W*Math.random(),y = H*Math.random();
    var rad=(Math.random()+1)*Math.PI/6;
    var kx=Math.sin(rad),ky=Math.cos(rad);
    var dirx = (Math.random()<0.5?1:-1), diry = (Math.random()<0.5?1:-1);
    var step = 1;
    var interval;
    this.SetLocation=function(vx,vy){x=vx;y=vy;}
    this.SetDirection=function(vx,vy){dirx=vx;diry=vy;}
    obj.CustomMethod=function(){
        obj.style.left = (x + AdMoveConfig.ScrollX) + "px";
        obj.style.top = (y + AdMoveConfig.ScrollY) + "px";
        rad=(Math.random()+1)*Math.PI/6;
        W=AdMoveConfig.MoveWidth-obj.offsetWidth;
        H=AdMoveConfig.MoveHeight-obj.offsetHeight;
        x = x + step*kx*dirx;
        if (x < 0){dirx = 1;x = 0;kx=Math.sin(rad);ky=Math.cos(rad);}
        if (x > W){dirx = -1;x = W;kx=Math.sin(rad);ky=Math.cos(rad);}
        y = y + step*ky*diry;
        if (y < 0){diry = 1;y = 0;kx=Math.sin(rad);ky=Math.cos(rad);}
        if (y > H){diry = -1;y = H;kx=Math.sin(rad);ky=Math.cos(rad);}
    }
    this.Run=function(){
        var delay = 30;
        interval=setInterval(obj.CustomMethod,delay);
        obj.onmouseover=function(){clearInterval(interval);}
        obj.onmouseout=function(){interval=setInterval(obj.CustomMethod, delay);}
    }
}