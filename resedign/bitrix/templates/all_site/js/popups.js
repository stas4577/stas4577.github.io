function zajavka_send(){var form=$('#contact_form_popup');form.ajaxForm();form.ajaxSubmit({url:'/ajax/zajavka_send.php',type:"POST",dataType:"json",success:function(data){$('#status_zajavka').html(data.mess);$('#contact_form_popup input, #contact_form_popup select, #contact_form_popup div.ui-widget ').removeClass('error');if(data.status=='ok'){$('#contact_form_popup input[type=file]').val('');$('#contact_form_popup input[type=text]').val('');$('#contact_form_popup').addClass('send_success');yaCounter16897846.reachGoal('SEND_REQUEST');ga('send','event',{eventCategory:'zajavka',eventAction:'send'});roistatGoal.reach({name:data.name,phone:data.phone,text:"Форма Оформить заявку"});$('#contact_form_popup').parent().addClass('status_success');}else{for(var key in data.errorField){var name_field=data.errorField[key];$('#contact_form_popup input[name='+name_field+']').addClass('error');$('#contact_form_popup select[name='+name_field+']').parent().addClass('error');}}}});}function ckeck_sp(field){var field_val=$('#'+field).val();if(field_val==''){$('#'+field+'_sp').show();}else{$('#'+field+'_sp').hide();}}$('#contact_form_popup input[type=text]').keypress(function(){$(this).removeClass('error');});function review_send(){var form_review=$('#reviews_form_popup');form_review.ajaxForm();form_review.ajaxSubmit({url:'/ajax/review_send.php',type:"POST",dataType:"json",success:function(data){$('#status_review').html(data.mess);$('#reviews_form_popup input').removeClass('error');if(data.status=='ok'){$('#reviews_form_popup input[type=file]').val('');$('#reviews_form_popup input[type=text]').val('');$('#reviews_form_popup textarea').html('');$('#reviews_form_popup textarea').val('');$('#reviews_form_popup').addClass('send_success');$('#reviews_form_popup #file_name').html('Загрузите файл или перетащите сюда');$('#reviews_form_popup').parent().addClass('status_success');}else{for(var key in data.errorField){var name_field=data.errorField[key];$('#reviews_form_popup input[name='+name_field+']').addClass('error');}}}});}$('#reviews_modal input[type=text]').keypress(function(){$(this).removeClass('error');});function file_selected(){try{var file=document.getElementById('uploaded_file').files[0];if(file){var file_size=0;if(file.size>1024*1024){file_size=(Math.round(file.size*100/(1024*1024))/100).toString()+'MB';}else{file_size=(Math.round(file.size*100/1024)/100).toString()+'KB';}document.getElementById('file_name').innerHTML='Файл: '+file.name;}}catch(e){var file=document.getElementById('uploaded_file').value;file=file.replace(/\\/g,"/").split('/').pop();document.getElementById('file_name').innerHTML='Файл: '+file;}}function dodrop(e){var dt=e.dataTransfer;if(!dt&&!dt.files){return false;}var files=dt.files;dt.dropEffect="copy";for(var i=0;i<files.length;i++){if(files[i].size<2097200){$('#reviews_form_popup input[type=file]').val(files[i]);file_selected();}else{alert('Размер файла превышает допустимое значение');}}e.stopPropagation();e.preventDefault();return false;}