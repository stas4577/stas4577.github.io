(function($){$(function(){if($('#slider ').length>0){$('.slider_section #slider li').css('width',$(window).width());$('#slider ').jcarousel({scroll:1,wrap:'both'});$('#slider li').swipe({swipeLeft:function(event,direction,distance,duration,fingerCount,fingerData){$('#slider').jcarousel('scroll','+=1');},swipeRight:function(event,direction,distance,duration,fingerCount,fingerData){$('#slider').jcarousel('scroll','-=1');},tap:function(event,target){if($(target).hasClass('slider_link')){}else{$('#slider').jcarousel('scroll','+=1');}}});}if($('.home_page_info .carousel_block ').length>0){$('.home_page_info .carousel_block').jcarousel({scroll:2,wrap:'both',});$('.home_page_info .carousel_block').swipe({swipeLeft:function(event,direction,distance,duration,fingerCount,fingerData){$('.home_page_info .carousel_block').jcarousel('scroll','+=1');},swipeRight:function(event,direction,distance,duration,fingerCount,fingerData){$('.home_page_info .carousel_block').jcarousel('scroll','-=1');},tap:function(event,target){$('.home_page_info .carousel_block').jcarousel('scroll','+=1');}});}if($(window).width()<=1240){if($('.home_page_catalog_blocks .ctalog_block_carusel').length>0){$('.ctalog_block_carusel_wrap').jcarousel({scroll:1,wrap:'both'});$('.home_page_catalog_blocks .ctalog_block').swipe({swipeLeft:function(event,direction,distance,duration,fingerCount,fingerData){$('.ctalog_block_carusel_wrap ').jcarousel('scroll','+=1');},swipeRight:function(event,direction,distance,duration,fingerCount,fingerData){$('.ctalog_block_carusel_wrap').jcarousel('scroll','-=1');},tap:function(event,target){$('.ctalog_block_carusel_wrap').jcarousel('scroll','+=1');}});}}$('.jcarousel-control-prev').on('jcarouselcontrol:active',function(){$(this).removeClass('inactive');}).on('jcarouselcontrol:inactive',function(){$(this).addClass('inactive');}).jcarouselControl({target:'-=1'});$('.jcarousel-control-next').on('jcarouselcontrol:active',function(){$(this).removeClass('inactive');}).on('jcarouselcontrol:inactive',function(){$(this).addClass('inactive');}).jcarouselControl({target:'+=1'});$('.jcarousel-pagination').on('jcarouselpagination:active','a',function(){$(this).addClass('active');}).on('jcarouselpagination:inactive','a',function(){$(this).removeClass('active');}).jcarouselPagination();});})(jQuery);