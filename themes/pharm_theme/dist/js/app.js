"use strict";function _toConsumableArray(t){if(Array.isArray(t)){for(var e=0,i=Array(t.length);e<t.length;e++)i[e]=t[e];return i}return Array.from(t)}Drupal.behaviors.PharmaTheme={attach:function(t,s){var p=jQuery.noConflict();function e(t,e,i){0<p("#"+t).length&&(p("#"+t).width(e),p("#"+t).height(i))}function r(t,e){0<p("."+t).length&&p("."+t).each(function(){p(this).height(e)})}function i(t,e,i){var a;a=768<=p(window).width()?p("."+t).width():p("."+e).width(),r("row-xs-4",Math.round(a/12*4)),r("row-xs-9",Math.round(a/12*9)),r("row-xs-12",Math.round(a)),768<=p(window).width()&&(r("row-sm-"+i+"-9",a),r("row-sm-"+i+"-8",Math.round(a/i*8)),r("row-sm-"+i+"-7",Math.round(a/i*7)),r("row-sm-"+i+"-6",Math.round(a/i*6)),r("row-sm-"+i+"-5",Math.round(a/i*5)),r("row-sm-"+i+"-4",Math.round(a/i*4)),r("row-sm-"+i+"-3",Math.round(a/i*3)),r("row-sm-"+i+"-2",Math.round(a/i*2)),r("row-sm-"+i+"-1",Math.round(a/i))),992<=p(window).width()&&(r("row-md-"+i+"-9",a),r("row-md-"+i+"-8",Math.round(a/i*8)),r("row-md-"+i+"-7",Math.round(a/i*7)),r("row-md-"+i+"-6",Math.round(a/i*6)),r("row-md-"+i+"-5",Math.round(a/i*5)),r("row-md-"+i+"-4",Math.round(a/i*4)),r("row-md-"+i+"-3",Math.round(a/i*3)),r("row-md-"+i+"-2",Math.round(a/i*2)),r("row-md-"+i+"-1",Math.round(a/i))),1200<=p(window).width()&&(r("row-lg-"+i+"-9",a),r("row-lg-"+i+"-8",Math.round(a/i*8)),r("row-lg-"+i+"-7",Math.round(a/i*7)),r("row-lg-"+i+"-6",Math.round(a/i*6)),r("row-lg-"+i+"-5",Math.round(a/i*5)),r("row-lg-"+i+"-4",Math.round(a/i*4)),r("row-lg-"+i+"-3",Math.round(a/i*3)),r("row-lg-"+i+"-2",Math.round(a/i*2)),r("row-lg-"+i+"-1",Math.round(a/i)))}p("#sidebar-wrapper .sidebar-nav .nolink ul li a, #header .nolink ul li a").attr("target","_blank"),0<p("#company-timeline",t).length&&(w=(x=s.path.pathPrefix).replace("/",""),f=(f=s.path.currentPath).replace("node/",""),m="title_"+w,g="zoom_in_detail_"+w,d=[],b="/"+x+x+"timeline-json/"+f,p.getJSON(b,function(t){for(var e in t){for(var i,a=t[e].img,r=[],n=t[e][g],a=a.split(","),o=0;o<21;o++)a[o]&&r.push(a[o]);i=t[e][m]+n,d[e]={type:"blog_post",date:t[e].date.substring(0,4),title:t[e].date.substring(0,4),content:i,images:r}}timeline=new Timeline(p("#company-timeline"),d),timeline.setOptions({dateFormat:"YYYY",animation:!0,lightbox:!0,columnMode:"dual",order:"desc",separator:"year",first_separator:!0,responsive_width:768}),timeline.display()})),p(".homepage-slider .field-content ul",t).slick({dots:!0,slidesToShow:1,slidesToScroll:1,infinite:!0,autoplay:!0,autoplaySpeed:5e3,fade:!1,cssEase:"ease",arrows:!1,rows:1,responsive:[{breakpoint:991,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:767,settings:{slidesToShow:1,slidesToScroll:1}}]}),p(".homepage-mobile-slider .field-content ul",t).slick({dots:!0,slidesToShow:1,slidesToScroll:1,infinite:!0,autoplay:!0,autoplaySpeed:5e3,fade:!1,cssEase:"ease",arrows:!1,rows:1,responsive:[{breakpoint:991,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:767,settings:{slidesToShow:1,slidesToScroll:1}}]}),0<p(".scroll-wrapper",t).length&&(clearTimeout(p.data(this,"scroll-wrapper")),p.data(this,"scroll-wrapper",setTimeout(function(){p(".scroll-wrapper").each(function(){var e;10<p(this).children().width()-p(this).width()&&(nice=p(this).niceScroll(),e=nice.getContentSize,nice.getContentSize=function(){p(".sub-tab-session .arrow-right").fadeIn();var t=e.call(nice);return t.h=nice.win.height(),t})})},800)),p(window).resize(function(){clearTimeout(p.data(this,"scroll-wrapper2")),p.data(this,"scroll-wrapper2",setTimeout(function(){p(".scroll-wrapper").each(function(){var e;p(this).getNiceScroll().remove(),10<p(this).children().width()-p(this).width()&&(nice=p(this).niceScroll(),e=nice.getContentSize,nice.getContentSize=function(){p(".sub-tab-session .arrow-right").fadeIn();var t=e.call(nice);return t.h=nice.win.height(),t})})},800))})),0<p(".sub-tab-session").length&&(clearTimeout(p.data(this,"sub-tab-session")),p.data(this,"sub-tab-session",setTimeout(function(){p(".sub-tab-outer-wrapper").width()+p(".sub-tab-outer-wrapper").scrollLeft()+20>=p(".sub-tab-outer-wrapper").children().width()?p(".sub-tab-session .arrow-right").fadeOut():p(".sub-tab-session .arrow-right").fadeIn()},500)),p(".sub-tab-outer-wrapper").scroll(function(){p(this).width()+p(this).scrollLeft()+20>=p(this).children().width()?p(".sub-tab-session .arrow-right").fadeOut():p(".sub-tab-session .arrow-right").fadeIn(),p(this).width()+p(this).scrollLeft()-20>=p(this).width()?p(".sub-tab-session .arrow-left").fadeIn():p(".sub-tab-session .arrow-left").fadeOut()}),p(".sub-tab-session .arrow",t).on("click",function(){var t=p(".sub-tab-session .sub-tab-outer-wrapper"),e=p(this);p(t).is(":animated")||(scrolled=p(t).scrollLeft(),p(e).hasClass("arrow-left")&&(scrolled-=100),p(e).hasClass("arrow-right")&&(scrolled+=100),p(t).animate({scrollLeft:scrolled}))})),0<p(".path-product").length&&p(window).resize(function(){p(window).width()<=1410&&p(".sub-tab-session .arrow-right").fadeIn()}),0<p(".homepage .body .main-wrapper").length&&(i("desktop-main","mobile-main",9),p(window).resize(function(){clearTimeout(p.data(this,"resizeTimer")),p.data(this,"resizeTimer",setTimeout(function(){i("desktop-main","mobile-main",9)},800))})),0<p("#banner-wrapper-mobile").length&&p("#banner-wrapper-mobile").carousel({interval:!1}),e("wrapper",p(window).width(),p(window).height()),p("body").show(),p(window).resize(function(){clearTimeout(p.data(this,"resizeTimer2")),p.data(this,"resizeTimer2",setTimeout(function(){e("wrapper",p(window).width(),p(window).height())},200)),768<=p(window).width()&&(p("#wrapper").hasClass("toggled")&&p("#wrapper").removeClass("toggled"),p(".hamburger").hasClass("is-open")&&(p(".hamburger").removeClass("is-open"),p(".hamburger").addClass("is-closed")))}),p(".year-wrapper-div",t).parent("h3").addClass("year-wrapper"),0<p(".path-news .content-row",t).length&&(p(".path-news .content-row")[0].className="content-row active",p.data(this,"news",setTimeout(function(){p(".path-news .content-row .colume2").each(function(){p(this).siblings(".colume1").height(p(this).height())}),p(".path-news .content-row").show()},200)),p(window).resize(function(){clearTimeout(p.data(this,"news2")),p.data(this,"news2",setTimeout(function(){p(".path-news .content-row .colume2").each(function(){p(this).siblings(".colume1").height(p(this).height())}),p(".path-news  .content-row").show()},800))})),p(".path-news .content-row .colume2 .title-wrapper a",t).click(function(){p(this).parent().parent().parent().hasClass("active")?p(this).parent().siblings(".content-wrapper").slideUp(400,function(){p(this).parent().siblings(".colume1").height(p(this).parent().height()),p(this).parent().parent().removeClass("active")}):p(this).parent().siblings(".content-wrapper").slideDown(400,function(){p(this).parent().siblings(".colume1").height(p(this).parent().height()),p(this).parent().parent().addClass("active")})});var a,n,o,h,c,d,l,u,w,f,m,g,b,v=s.path.currentQuery.page;p(".path-news .pagination-btn .pagination-change option[rel="+v+"]").attr("selected","selected"),p(".path-news .pagination-btn .pagination-change",t).change(function(){var t=p(this).val();window.location.assign(t)}),0<p(".path-advertisements",t).length&&(s.path.currentQuery.y?"2020"==s.path.currentQuery.y?(p("#block-pagerforadverisement").hide(),p("#block-pagerforadverisement-2").hide(),p("#block-pagerforadverisement").show()):(p("#block-pagerforadverisement").hide(),p("#block-pagerforadverisement-2").hide()):(p("#block-pagerforadverisement").show(),p("#block-pagerforadverisement-2").hide()),p(".path-advertisements .rightmove",t).click(function(){var t=p("#next_page").attr("rel");s.path.pathPrefix;window.location.assign("?y="+t)}),p(".path-advertisements .leftmove",t).click(function(){var t=p("#prev_page").attr("rel");s.path.pathPrefix;window.location.assign("?y="+t)}),a=p("#vid-content .vid-title").html(),n=p("#vid-content .vid-date").html(),o=p("#vid-content .vid-body").html(),h=p("#vid-content .vid-url").html(),p(".path-advertisements .video").html('<iframe width="400" height="300" src="'+h+'" frameborder="0" allowfullscreen></iframe>'),p(".advertisements-top .content1 h3").html(a),p(".advertisements-top .content1 p").html(n),p(".advertisements-top .content2").html(o),p(".view-video",t).click(function(){var t=p(this).parent().parent().find("#vid-content .vid-title").html(),e=p(this).parent().parent().find("#vid-content .vid-date").html(),i=p(this).parent().parent().find("#vid-content .vid-body").html(),a=p(this).parent().parent().find("#vid-content .vid-url").html();p(".path-advertisements .video").html('<iframe width="400" height="300" src="'+a+'" frameborder="0" allowfullscreen></iframe>'),p(".advertisements-top .content1 h3").html(t),p(".advertisements-top .content1 p").html(e),p(".advertisements-top .content2").html(i),scrolled=p(".advertisements-top").scrollTop(),p("html, body").animate({scrollTop:p(".advertisements-top").offset().top-5})}),p(".path-advertisements .pagination-change",t).on("focus",function(){}).change(function(){var t=p(this).val(),e=s.path.pathPrefix;window.location.assign("/"+e+"advertisements/?y="+t)}),p(".path-advertisements .pagination-btn.withmovebutt",t).click(function(){var t=s.path.pathPrefix,e=p(this).attr("rel");window.location.assign("/"+t+"advertisements/?y="+e)})),0<p("#fund-timeline",t).length&&(c=function(t){var i=t||p("#year-drop-down").val(),a=[];_.forEach(d,function(t){var e=_.split(t.date,"-")[0];_.toString(e)===_.toString(i)&&a.push(t)});var e=i;_.toString(e)===_.toString(l)?p("#first-year").addClass("active"):p("#first-year").removeClass("active"),_.toString(e)===_.toString(u)?p("#second-year").addClass("active"):p("#second-year").removeClass("active"),p("#year-drop-down").val(i),p("#fund-timeline").empty(),timeline=new Timeline(p("#fund-timeline"),a),timeline.setOptions({dateFormat:"YYYY-MM",animation:!0,lightbox:!0,columnMode:"dual",order:"desc",separator:"null",first_separator:!0,responsive_width:768}),timeline.display(),0<p(".fancybox").length&&p(".fancybox").fancybox()},d=[],u=l="",p("#first-year",t).click(function(){c("2016")}),p("#second-year",t).click(function(){c("2015")}),p("#year-drop-down",t).change(function(){c(p(this).val())}),l=2016,u=2015,w=(x=s.path.pathPrefix).replace("/",""),f=(f=s.path.currentPath).replace("node/",""),m="title_"+w,g="zoom_in_detail_"+w,b="/"+x+x+"timeline-json/"+f,p.getJSON(b,function(t){var e="";for(var i in t){for(var a=[],r="",n=(n=t[i].img).split(","),o=0;o<21;o++)n[o]&&(e+="<div style='margin: 2% 2% 8% 2%;'><img style='border-radius: 5px; max-height:100%; max-width:100%;' src="+n[o]+"></div>",a.push(n[o]));r=_.size(t[i][g])&&!_.size(a)?"<a href='#charity-light-box"+i+"' class='fancybox'><span id='charity-fund-title'>"+t[i][m]+"</span></a><div class='charity_popup_dialog' id='charity-light-box"+i+"' style='display: none'><span class='charity_popup_date'>"+t[i].date.substring(0,7)+"</span><br><br><span id='charity-fund-detail'>"+t[i][g]+"</span></div>":_.size(t[i][g])&&_.size(a)?"<a href='#charity-light-box"+i+"' class='fancybox'><span id='charity-fund-title'>"+t[i][m]+"</span></a><div class='charity_popup_dialog' id='charity-light-box"+i+"' style='display: none'><span class='charity_popup_date'>"+t[i].date.substring(0,7)+"</span><div style='margin-top:2%' class='row'>  "+e+"</div><span id='charity-fund-detail'>"+t[i][g]+"</span></div>":t[i][m],d[i]={type:"blog_post",date:t[i].date.substring(0,7),title:t[i].date.substring(0,7),content:r,images:a}}c(l),0<p(".fancybox").length&&p(".fancybox").fancybox()})),0<p(".fancybox").length&&p(".fancybox").fancybox();document.URL.substr(document.URL.indexOf("#")+1);e("wrapper",p(window).width(),p(window).height()),p("body").show(),p(window).resize(function(){clearTimeout(p.data(this,"resizeTimer2")),p.data(this,"resizeTimer2",setTimeout(function(){e("wrapper",p(window).width(),p(window).height())},200)),768<=p(window).width()&&(p("#wrapper").hasClass("toggled")&&p("#wrapper").removeClass("toggled"),p(".hamburger").hasClass("is-open")&&(p(".hamburger").removeClass("is-open"),p(".hamburger").addClass("is-closed")))}),0<p("#block-contactus #offers-wrapper",t).length&&(p.data(this,"blcok-contactus",setTimeout(function(){p("#block-contactus #offers-wrapper .img-wrapper").each(function(){p(this).siblings(".content-wrapper").height(p(this).height())}),p("#block-contactus #offers-wrapper .content-wrapper").show()},200)),p(window).resize(function(){clearTimeout(p.data(this,"blcok-contactus2")),p.data(this,"blcok-contactus2",setTimeout(function(){p("#block-contactus #offers-wrapper .img-wrapper").each(function(){p(this).siblings(".content-wrapper").height(p(this).height())}),p("#block-contactus #offers-wrapper .content-wrapper").show()},800))})),p("#block-contactus #offers-wrapper .more-btn",t).click(function(){p("#block-contactus #offers-wrapper > div.hide").each(function(t){t<3&&p(this).removeClass("hide"),0==p("#block-contactus #offers-wrapper > div.hide").length&&p("#block-contactus #offers-wrapper .more-btn").remove()}),p("#block-contactus #offers-wrapper .img-wrapper").each(function(){p(this).siblings(".content-wrapper").height(p(this).height())})}),0<p("#block-lianxiwomenjizhaopindibuneirongjianti #offers-wrapper",t).length&&(p.data(this,"blcok-contactus",setTimeout(function(){p("#block-lianxiwomenjizhaopindibuneirongjianti #offers-wrapper .img-wrapper").each(function(){p(this).siblings(".content-wrapper").height(p(this).height())}),p("#block-lianxiwomenjizhaopindibuneirongjianti #offers-wrapper .content-wrapper").show()},200)),p(window).resize(function(){clearTimeout(p.data(this,"blcok-contactus2")),p.data(this,"blcok-contactus2",setTimeout(function(){p("#block-lianxiwomenjizhaopindibuneirongjianti #offers-wrapper .img-wrapper").each(function(){p(this).siblings(".content-wrapper").height(p(this).height())}),p("#block-lianxiwomenjizhaopindibuneirongjianti #offers-wrapper .content-wrapper").show()},800))})),p("#block-lianxiwomenjizhaopindibuneirongjianti #offers-wrapper .more-btn",t).click(function(){p("#block-lianxiwomenjizhaopindibuneirongjianti #offers-wrapper > div.hide").each(function(t){t<3&&p(this).removeClass("hide"),0==p("#block-lianxiwomenjizhaopindibuneirongjianti #offers-wrapper > div.hide").length&&p("#block-lianxiwomenjizhaopindibuneirongjianti #offers-wrapper .more-btn").remove()}),p("#block-lianxiwomenjizhaopindibuneirongjianti #offers-wrapper .img-wrapper").each(function(){p(this).siblings(".content-wrapper").height(p(this).height())})}),0<p("#block-lianxiwomenjizhaopindibuneirongfanti #offers-wrapper",t).length&&(p.data(this,"block-lianxiwomenjizhaopindibuneirongfanti",setTimeout(function(){p("#block-lianxiwomenjizhaopindibuneirongfanti #offers-wrapper .img-wrapper").each(function(){p(this).siblings(".content-wrapper").height(p(this).height())}),p("#block-lianxiwomenjizhaopindibuneirongfanti #offers-wrapper .content-wrapper").show()},200)),p(window).resize(function(){clearTimeout(p.data(this,"block-lianxiwomenjizhaopindibuneirongfanti2")),p.data(this,"block-lianxiwomenjizhaopindibuneirongfanti2",setTimeout(function(){p("#block-lianxiwomenjizhaopindibuneirongfanti #offers-wrapper .img-wrapper").each(function(){p(this).siblings(".content-wrapper").height(p(this).height())}),p("#block-lianxiwomenjizhaopindibuneirongfanti #offers-wrapper .content-wrapper").show()},800))})),p("#block-lianxiwomenjizhaopindibuneirongfanti #offers-wrapper .more-btn",t).click(function(){p("#block-lianxiwomenjizhaopindibuneirongfanti #offers-wrapper > div.hide").each(function(t){t<3&&p(this).removeClass("hide"),0==p("#block-lianxiwomenjizhaopindibuneirongfanti #offers-wrapper > div.hide").length&&p("#block-lianxiwomenjizhaopindibuneirongfanti #offers-wrapper .more-btn").remove()}),p("#block-lianxiwomenjizhaopindibuneirongfanti #offers-wrapper .img-wrapper").each(function(){p(this).siblings(".content-wrapper").height(p(this).height())})}),0<p(".path-latest-offers",t).length&&(p.data(this,"lastest-offers",setTimeout(function(){p(".path-latest-offers .img-wrapper").each(function(){p(this).siblings(".content-wrapper").height(p(this).height())}),p(".path-latest-offers .content-wrapper").show()},200)),p(window).resize(function(){clearTimeout(p.data(this,"lastest-offers2")),p.data(this,"lastest-offers2",setTimeout(function(){p(".path-latest-offers .img-wrapper").each(function(){p(this).siblings(".content-wrapper").height(p(this).height())}),p(".path-latest-offers .content-wrapper").show()},800))})),p(".path-latest-offers .more-btn",t).click(function(){p(".path-latest-offers > div.hide").each(function(t){t<3&&p(this).removeClass("hide"),0==p(".path-latest-offers > div.hide").length&&p(".path-latest-offers .more-btn").remove()}),p(".path-latest-offers .img-wrapper").each(function(){p(this).siblings(".content-wrapper").height(p(this).height())})}),0<p(".page-node-type-healthtips .sub-tab-wrapper li",t).length&&(e("wrapper",p(window).width(),p(window).height()),j=0,clearTimeout(p.data(this,"health-tips-tab")),p.data(this,"health-tips-tab",setTimeout(function(){p(".page-node-type-healthtips .sub-tab-wrapper li").each(function(){j+=p(this).width()}),p(".page-node-type-healthtips .sub-tab-wrapper").width(j)},500)));var y=p(".hamburger"),k=(p(".overlay"),!1);y.click(function(){k=1==k?(y.removeClass("is-open"),y.addClass("is-closed"),!1):(y.removeClass("is-closed"),y.addClass("is-open"),!0)}),p('[data-toggle="offcanvas"]',t).click(function(){p("#wrapper").toggleClass("toggled")}),p(".sidebar-nav > li",t).click(function(){p(this).hasClass("parent")||(p(".sidebar-nav > li").each(function(){p(this).removeClass("active")}),p(this).addClass("active"))}),p(".sidebar-nav > li.parent",t).click(function(){p(".sidebar-nav > li.parent").find(".sub-sidebar-nav").hide(),p(this).hasClass("show-sub")?p(this).removeClass("show-sub"):p(this).addClass("show-sub"),p(this).find(".sub-sidebar-nav").slideToggle()}),p(".sidebar-nav > li.parent",t).each(function(){p(this).find("li").first().remove()}),p(".path-faq .content-wrapper .detail").click(function(){!function(t){p(t).attr("rel");var e=p(t).parent().parent().parent().position(),i=p(".path-faq .detail-wrapper").width(),a=(p(t).parent().parent().parent().width(),s.path.pathPrefix.replace("/",""),p(t).parent().parent().parent().find(".img-wrapper img").attr("src")),r=p(t).parent().find(".grey").html(),n=p(t).parent().find(".faq_content").html();p(".path-faq div.share-wrapper a.fb-share").attr("href","https://www.facebook.com/dialog/feed?app_id=353667696034556&display=popup&caption="+p.trim(r)+"&description="+n+"&picture=http://www.fortunepharm.com"+a+"&link=http://www.fortunepharm.com/&redirect_uri=http://www.fortunepharm.com/"),p(".path-faq .detail-wrapper h4").html(r),p(".path-faq .detail-wrapper .description").html(n),p(".path-faq .detail-wrapper img").attr("src",a),e.left+i>p(".content-outer-wrapper").width()?p(".path-faq .detail-wrapper").css("top",e.top).css("left","auto").css("right",0).show():p(".path-faq .detail-wrapper").css("top",e.top).css("left",e.left).show();var o=p(".path-faq .detail-wrapper").position().top+p(".path-faq .detail-wrapper").height()+10-p(".path-faq .content-outer-wrapper").height();0<o?p(".path-faq .content-outer-wrapper").css("margin-bottom",10+o):p(".path-faq .content-outer-wrapper").css("margin-bottom",0),p("html, body").animate({scrollTop:p(".path-faq .detail-wrapper").offset().top-5},500)}(p(this))}),p(".path-faq .detail-wrapper .detail").click(function(){p(this).parent().parent().hide(),p(".path-faq .content-outer-wrapper").css("margin-bottom",0)}),0<p(".path-faq .sub-tab-wrapper li",t).length&&(j=0,clearTimeout(p.data(this,"faq-tab")),p.data(this,"faq-tab",setTimeout(function(){p(".path-faq .sub-tab-wrapper li").each(function(){j+=p(this).width()}),p(".path-faq .sub-tab-wrapper").width(j)},500)),p(".path-faq .sub-tab-wrapper li a",t).each(function(){p(this).attr("href")==window.location.pathname&&p(this).parent().addClass("active")}));var x,C,T,j,z,S=(x=s.path.pathPrefix).replace("/","");function M(){var t;p(window).width()<768?(r("product-big-image",t=p(".product-big-image").width()),r("product-small-image",t)):(p(".product-big-image").attr("style",""),p(".product-small-image").attr("style",""))}0<p(".path-product-finder #product-take-wrapper .content-left > div").length&&(p.data(this,"product-take",setTimeout(function(){p(".path-product-finder #product-take-wrapper .content-right").each(function(){p(this).height(3*p(this).width()/2)}),i("content-left","content-left",12)},200)),p(window).resize(function(){clearTimeout(p.data(this,"product-take2")),p.data(this,"product-take2",setTimeout(function(){p(".path-product-finder #product-take-wrapper .content-right").each(function(){p(this).height(3*p(this).width()/2)}),i("content-left","content-left",12)},800))}),"chs"==S&&0<p(".path-product-finder #product-take-wrapper .content-right .index-wrapper .matched-outer").length&&p(".path-product-finder #product-take-wrapper .content-right .index-wrapper .matched-outer").css("background-image","url(/themes/pharm_theme/dist/images/product-take/which_bg_chs.jpg)"),"cht"==S&&(0<p(".path-product-finder #product-take-wrapper .content-right .index-wrapper .matched-outer").length&&p(".path-product-finder #product-take-wrapper .content-right .index-wrapper .matched-outer").css("background-image","url(/themes/pharm_theme/dist/images/product-take/which_bg_cht.jpg)"),console.log("打印此时输出的cht")),C=[],p(".path-product-finder #product-take-wrapper .content-left .index-wrapper .clear-select").click(function(){p(".path-product-finder #product-take-wrapper .content-left .index-wrapper a.wrapper").each(function(){p(this).removeClass("active inactive")})}),T=[{1:1},{2:1},{3:1},{4:1},{5:1},{6:1},{9:1},{1:3},{2:3},{3:3},{4:3},{5:3},{6:3},{11:3},{9:3},{1:4},{2:4},{3:4},{4:4},{5:4},{6:4},{9:4},{12:5},{13:5},{14:5},{15:5},{11:6},{17:8},{1:9},{2:9},{9:9},{1:10},{2:10},{9:10},{6:7},{3:12},{4:12},{5:12},{6:12},{1:14},{2:14},{3:14},{4:14},{5:14},{6:14},{9:14},{1:15},{2:15},{3:15},{4:15},{5:15},{6:15},{9:15},{4:18},{5:18},{6:18},{8:18},{1:26},{2:26},{3:26},{4:26},{5:26},{6:26},{10:26},{11:26},{9:26},{4:25},{5:25},{6:25},{7:25},{8:25},{4:19},{5:19},{6:19},{7:19},{8:19},{4:24},{5:24},{6:24},{7:24},{8:24},{12:27},{13:27},{14:27},{15:27},{10:23},{10:11},{6:2},{16:30},{11:11},{11:23},{12:29},{13:29},{14:29},{15:29},{3:44},{4:44},{5:44},{6:44},{11:44},{4:46},{3:46},{5:46},{6:46},{7:46},{11:46}],p(".path-product-finder #product-take-wrapper .content-left .index-wrapper a.wrapper").click(function(){var t,a,i,r,n;p(this).hasClass("inactive")?(t=p(this),p(this).hasClass("inactive")?p(t).removeClass("inactive"):p(t).removeClass("active")):(p(this).hasClass("active")?p(this).removeClass("active"):(t=p(this),p(t).addClass("active")),a=[],i=[],r=[],n=[],p(".path-product-finder #product-take-wrapper .content-left .index-wrapper a.active").each(function(){a.unshift(p(this).attr("rel")),list_product_and_symptoms=function(){list_symptoms_productid={},list_productid_symptoms={};for(var t=0,e=T.length;t<e;t++)for(var i in T[t]){"{}"==JSON.stringify(list_symptoms_productid)||void 0===list_symptoms_productid[parseInt(i)]?list_symptoms_productid[i]=[T[t][i]]:list_symptoms_productid[i].push(T[t][i]),product_id=T[t][i];({})[product_id]=i,"{}"==JSON.stringify(list_productid_symptoms)||void 0===list_productid_symptoms[parseInt(product_id)]?list_productid_symptoms[product_id]=[parseInt(i)]:list_productid_symptoms[product_id].push(parseInt(i))}return[list_symptoms_productid,list_productid_symptoms]}();for(var t=a,e=0,i=t.length;e<i;e++)t[e]=parseInt(t[e]);all_display_symptoms_product_id=function(t){for(var e=[],i=[],a=0,r=t.length;a<r;a++){var n=[];input_symptoms_id=t[a],productid=list_product_and_symptoms[0][input_symptoms_id];for(var o=0,s=productid.length;o<s;o++)var p=list_product_and_symptoms[1][productid[o]],n=Array.from(new Set([].concat(_toConsumableArray(p),_toConsumableArray(n))));0==a?(i=n,e=productid):i=n.filter(function(t){return i.includes(t)});e=e.filter(function(t){return productid.includes(t)})}return judgearr1_6=[1,2,3,4,5,6],judgearr4568=[4,5,6,8],judgearr1_6_tag=!(judgearr1_6.length!=Array.from(new Set([].concat(_toConsumableArray(t),_toConsumableArray(judgearr1_6)))).length||-1<t.indexOf(10)||-1<t.indexOf(11)),judgearr1_6_12tag=!(judgearr1_6.length!=Array.from(new Set([].concat(_toConsumableArray(t),_toConsumableArray(judgearr1_6)))).length||-1<t.indexOf(10)||-1<t.indexOf(11)||-1<t.indexOf(1)||-1<t.indexOf(2)),judgearr4568_tag=!(judgearr4568.length!=Array.from(new Set([].concat(_toConsumableArray(t),_toConsumableArray(judgearr4568)))).length||-1<t.indexOf(10)||-1<t.indexOf(11)),judgearr1_6_tag&&(e=[1,4,14,15]),judgearr1_6_12tag&&(e=[1,4,12,14,15]),judgearr4568_tag&&(e=[18,19,24,25]),2==t.length&&-1<t.indexOf(10)&&-1<t.indexOf(11)&&(e=[6,11,13]),1==t.length&&6==t[0]&&(e=[2,7]),1==t.length&&9==t[0]&&(e=[9,10]),[i,e]}(t),display_symptoms_arr=all_display_symptoms_product_id[0],r=all_display_symptoms_product_id[1],n=Array.from(new Set(display_symptoms_arr))}),0<a.length?p.get(S+"/productfinderjson",function(t){for(var e in t)find_field_product_id=parseInt(t[e].field_product_id),-1<r.indexOf(find_field_product_id)&&i.push(t[e]),C=i;0==C.length?(p(window).width()<768&&p(".content-right").hide(),p(".level-wrapper").hide(),p(".matched-product-wrapper").html(""),p(".arrow").hide()):(p(".matched-product-wrapper").html(""),p(C).each(function(t,e){p(".path-product-finder #product-take-wrapper .content-left .index-wrapper a.wrapper").each(function(){-1!=p.inArray(parseInt(p(this).attr("rel")),n)?p(this).removeClass("inactive"):p(this).addClass("inactive")});var i='<div class="matched-product"><a href="'+e.field_product_url.split('"')[1]+'"><img src='+e.field_product_image+"><h4>"+e.field_product_name+"</h4>";"Onset"==e.field_symptoms_level?"eng"==S?i+='<p class="level1 grey">Onset</p>':"cht"==S?i+='<p class="level1 grey">初發</p>':"chs"==S&&(i+='<p class="level1 grey">初发</p>'):"Slight"==e.field_symptoms_level?"eng"==S?i+='<p class="level2 grey">Slight</p>':"cht"==S?i+='<p class="level2 grey">輕微</p>':"chs"==S&&(i+='<p class="level2 grey">轻微</p>'):"Critical"==e.field_symptoms_level&&("eng"==S?i+='<p class="level3 grey">Crictical</p>':"cht"==S?i+='<p class="level3 grey">嚴重</p>':"chs"==S&&(i+='<p class="level3 grey">严重</p>')),i+="</a></div>",p(".level-wrapper").show(),p(".matched-product-wrapper").append(i)}),p(".matched-product-wrapper").height()>p(".matched-outer").height()&&p(".arrow-down").show(),p(window).width()<768&&p(".content-right").show())}):(C=[],p(".path-product-finder #product-take-wrapper .content-left .index-wrapper a.wrapper").each(function(){p(this).removeClass("inactive"),p(this).removeClass("active")}),p(".matched-product-wrapper").html("")))}),p(".path-product-finder #product-take-wrapper .content-right .index-wrapper .matched-outer").scroll(function(){0==p(this).scrollTop()?p(".path-product-finder #product-take-wrapper .content-right .arrow-up").hide():p(this).scrollTop()+p(this).innerHeight()>=p(this)[0].scrollHeight?p(".path-product-finder #product-take-wrapper .content-right .arrow-down").hide():p(".path-product-finder #product-take-wrapper .content-right .arrow").show()}),p(".path-product-finder #product-take-wrapper .content-right .arrow").on("click",function(){var t=p(".path-product-finder #product-take-wrapper .content-right .index-wrapper .matched-outer"),e=p(this);p(t).is(":animated")||(scrolled=p(t).scrollTop(),p(e).hasClass("arrow-up")&&(scrolled-=200),p(e).hasClass("arrow-down")&&(scrolled+=200),p(t).animate({scrollTop:scrolled}))})),0<p(".path-product .product-big-image",t).length&&(p.data(this,"product-image",setTimeout(function(){M()},200)),p(window).resize(function(){clearTimeout(p.data(this,"product-image2")),p.data(this,"product-image2",setTimeout(function(){M()},800))})),p(".path-product #product-wrapper .product-small-image a",t).click(function(){var t=p(this).attr("rel"),e=p(this).attr("fancyboxdata");p(".path-product #product-wrapper .product-big-image img").attr("src",t),p(".node--type-product #product-wrapper .product-big-image .zoom-btn").attr("href",e)}),0<p(".path-product .sub-tab-outer-wrapper .sub-tab-wrapper li",t).length&&(z=j=0,clearTimeout(p.data(this,"product-tab")),p.data(this,"product-tab",setTimeout(function(){p(".path-product .sub-tab-wrapper li",t).each(function(){j+=p(this).width()}),p(".path-product .tab-icon-wrapper li",t).each(function(){z+=p(this).width()}),p(".path-product .sub-tab-wrapper").width(j),p(".path-product .tab-icon-wrapper").width(z)},500))),p(".path-product .product-content-tab-wrapper ul li",t).click(function(){p(this).siblings().each(function(){p(this).hasClass("active")&&(p(".product-content-wrapper.product-content"+p(this).attr("rel")).hide(),p(this).removeClass("active"))}),p(this).addClass("active"),p(".product-content-wrapper.product-content"+p(this).attr("rel")).show()}),0<p("#privacy_terms #terms-wrapper .terms-left").length&&(p("#block-pharm-theme-content").css("max-width","1200px"),p("#banner-wrapper").css("margin-bottom","1px"))}};