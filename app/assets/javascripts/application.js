/*
 * This is a manifest file that'll be compiled into application.css, which will include all the files
 * listed below.
 *
 * Any CSS and SCSS file within this directory, lib/assets/stylesheets, vendor/assets/stylesheets,
 * or vendor/assets/stylesheets of plugins, if any, can be referenced here using a relative path.
 *
 * You're free to add application-wide styles to this file and they'll appear at the top of the
 * compiled file, but it's generally better to create a new file per style scope.
 *
 *= require jquery
 *= require_tree .
 */

$(function() {
	initializeUI();

	function initializeUI() {
		$.ajax({
			url : "/screen_settings",
			method : "GET",
			contentType : "application/json",
			success : function(data) {

				updateEditSettingForm(data);
			}
		}).fail(function(msg) {
		});
	}

	function updateEditSettingForm(data) {
		$('.font-changable').css("font-family", data["font"]);
		$('.color-changable').css('color', data["color"]);
		$(document).prop('title', data["title"]);

		$('#screen_setting_id').val(data["id"]);
		$('#screen_setting_name').val(data["screen_name"]);
		$('#screen_setting_title').val(data["title"]);
		$('#screen_setting_font').val(data["font"]);
		$('#screen_setting_color').val(data["color"]);
	}

	function ConvertFormToJSON(form) {
		var array = jQuery(form).serializeArray();
		var json = {};

		jQuery.each(array, function() {
			json[this.name] = this.value || '';
		});
		return json;
	}


	$("#id-update-title").click(function() {
		// var settingHash = {};
		// settingHash['title'] = $("#id-location-name-dropbox").val();
		// settingHash['color'] = 'test';
		// settingHash['font']  = gLocation_type['Dropbox'];

		// var locationData = '{"location" : ' + JSON.stringify(locationHash) + '}';
		var settingData = '{"screen_setting" : ' + JSON.stringify(ConvertFormToJSON(jQuery("form#update_setting"))) + '}';

		$.ajax({
			url : "/screen_settings/" + $('#screen_setting_id').val(),
			type : "PUT",
			contentType : "application/json",
			data : settingData,
			success : function(data) {
				updateEditSettingForm(data);
				$("#close-setting-modal").click();
			}
		}).fail(function(msg) {

		});
		return false;

	});

});

