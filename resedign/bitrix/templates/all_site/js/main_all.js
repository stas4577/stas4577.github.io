$(document).ready(function($){$('#city_modal .search_button').click(function(e){e.preventDefault();$('.city_links li').removeClass('active');$('.rt_links ul').hide();$('#reg_search').show();var q=$('#search_inp').val();var uri=$('#search_uri').val();if(q==''){$('#reg_search').hide();show_region('big');}else{$.ajax({url:'/ajax/city.php',type:'get',data:'q='+q+'&uri='+uri,dataType:'html',success:function(data){$('#reg_search').html(data);}});}});$('#search_inp').keyup(function(e){e.preventDefault();$('.city_links li').removeClass('active');$('.rt_links ul').hide();$('#reg_search').show();var q=$(this).val();var uri=$('#search_uri').val();if(q==''){$('#reg_search').hide();show_region('big');}else{$.ajax({url:'/ajax/city.php',type:'get',data:'q='+q+'&uri='+uri,dataType:'html',success:function(data){$('#reg_search').html(data);}});}});});$('.footer_social_link.dots').click(function(e){e.preventDefault();if($('.footer_social_link').hasClass('active')){$('.footer_social_link').removeClass('active');}else{$('.footer_social_link').addClass('active');}});$(document).mouseup(function(e){if(($(window).width()<=1240)){var div1=$(".footer_social_link");if(!div1.is(e.target)&&div1.has(e.target).length===0){$('.footer_social_link').removeClass('active');}}});