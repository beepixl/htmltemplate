module.exports = {
	"settings": {
		"projectName": "Smart Admin",
		"debug": false,
		"compile": {
			"jsUglify": false,
			"cssMinify": false,
			"jsSourcemaps": false,
			"cssSourcemaps": true
		},
		"src": {
			"theme": "./../html/src",
			"vendors": "./node_modules",
			"copy": "./../html/src/copy/**/*"
		},
		"dist": {
			"assets" : "./../html/dist/assets",
			"vendors" : "./../html/dist/assets/vendors",
			"theme" : "./../html/dist/assets/app",
			"outputDir" : "./../html/dist",
			"outputCopyDir" : "./../html/dist/plugins"
		}
	},
	"vendors": {
		"src": {
			"jquery": {
				"js": [
					"{$settings.src.vendors}/jquery/dist/jquery.js"
				]
			},
			"jquery-ui-dist" : {
				"js": [
					"{$settings.src.vendors}/jquery-ui-dist/jquery-ui.js"
				],
				"css": [
					"{$settings.src.vendors}/jquery-ui-dist/jquery-ui.css"
				],
				"img": [
					"{$settings.src.vendors}/jquery-ui-dist/images/*"
				]
			},
			"bootstrap": {
				"css": [
					"{$settings.src.vendors}/bootstrap/dist/css/bootstrap.css"
				],
				"js": [
					"{$settings.src.vendors}/popper.js/dist/umd/popper.js",
					"{$settings.src.vendors}/bootstrap/dist/js/bootstrap.bundle.js"
				]
			},
			"metisMenu": {
				"css": [
					"{$settings.src.vendors}/metismenu/dist/metisMenu.css"
				],
				"js": [
					"{$settings.src.vendors}/metismenu/dist/metisMenu.js"
				]
			},
			"pace-js": {
				"css": [
					"{$settings.src.vendors}/pace-js/themes/blue/pace-theme-flash.css"
				],
				"js": [
					"{$settings.src.vendors}/pace-js/pace.js"
				]
			},
			"animate.css": {
				"css": [
					"{$settings.src.vendors}/animate.css/animate.min.css"
				]
			},
			"easy-pie-chart": {
				"js": [
					"{$settings.src.vendors}/easy-pie-chart/dist/easypiechart.js"
				]
			},
			"flot": {
				"js": [
					"{$settings.src.vendors}/flot/jquery.flot.js",
					"{$settings.src.vendors}/flot/jquery.flot.resize.js",
					"{$settings.src.vendors}/flot/jquery.flot.fillbetween.js",
					"{$settings.src.vendors}/flot-orderbars/js/jquery.flot.orderBar.js",
					"{$settings.src.vendors}/flot/jquery.flot.pie.js",
					"{$settings.src.vendors}/flot/jquery.flot.time.js",
					"{$settings.src.vendors}/jquery.flot.tooltip/js/jquery.flot.tooltip.js"
				]
			},
			"raphael": {
				"js": [
					"{$settings.src.vendors}/raphael/raphael.js"
				]
			},
			"dygraphs": {
				"js": [
					"{$settings.src.vendors}/dygraphs/dist/dygraph.js"
				],
				"css": [
					"{$settings.src.vendors}/dygraphs/dist/dygraph.css"
				]
			},
			"morris.js": {
				"js": [
					"{$settings.src.vendors}/morris.js/morris.js"
				],
				"css": [
					"{$settings.src.vendors}/morris.js/morris.css"
				]
			},
			"jvectormap": {
				"js": [
					"{$settings.src.vendors}/jvectormap/jquery-jvectormap.min.js"
				]
			},						
			"datatables" : {
				"js": [
					"{$settings.src.vendors}/datatables.net/js/jquery.dataTables.js",
					"{$settings.src.vendors}/datatables.net-bs4/js/dataTables.bootstrap4.js",
					"{$settings.src.vendors}/datatables.net-buttons/js/buttons.colVis.js",
					"{$settings.src.vendors}/datatables.net-buttons/js/dataTables.buttons.js",
					"{$settings.src.vendors}/datatables.net-buttons/js/buttons.print.js",
					"{$settings.src.vendors}/datatables.net-buttons-bs4/js/buttons.bootstrap4.js",
					"{$settings.src.vendors}/datatables.net-responsive/js/dataTables.responsive.js",
					"{$settings.src.vendors}/datatables.net-responsive-bs4/js/responsive.bootstrap4.js"
				],
				"css": [
					"{$settings.src.vendors}/datatables.net-bs4/css/dataTables.bootstrap4.css",
					"{$settings.src.vendors}/datatables.net-buttons-bs4/css/buttons.bootstrap4.css",
					"{$settings.src.vendors}/datatables.net-responsive-bs4/js/responsive.bootstrap4.css"
				]
			},
			"moment" : {
				"js": [
					"{$settings.src.vendors}/moment/moment.js"
				]
			},
			"fullcalendar" : {
				"js": [
					"{$settings.src.vendors}/fullcalendar/dist/fullcalendar.js"
				],
				"css": [
					"{$settings.src.vendors}/fullcalendar/dist/fullcalendar.css"
				]
			},
			"font-awesome": {
				"css": [
					"{$settings.src.vendors}/font-awesome/css/font-awesome.css"
				],
				"fonts": [
					"{$settings.src.vendors}/font-awesome/fonts/**"
				]
			},

			"jquery-sparkline": {
				
				"js": [
					"{$settings.src.vendors}/jquery-sparkline/jquery.sparkline.js"
				]
			},

			"holderjs": {
				
				"js": [
					"{$settings.src.vendors}/holderjs/holder.js"
				]
			},
			"jquery-bar-rating": {

				"css": [
					"{$settings.src.vendors}/jquery-bar-rating/dist/themes/fontawesome-stars.css"
				],
				
				"js": [
					"{$settings.src.vendors}/jquery-bar-rating/jquery.barrating.js"
				]
			},
			"jqGrid": {

				"css": [
					"{$settings.src.vendors}/jqGrid/css/ui.jqgrid.css",
					"{$settings.src.vendors}/jqGrid/css/ui.jqgrid-bootstrap.css"
				],
				
				"js": [
					"{$settings.src.vendors}/jqGrid/js/jquery.jqGrid.js",
					"{$settings.src.vendors}/jqGrid/js/i18n/grid.locale-en.js"
				]
			},
			"Select2": {

				"css": [
					"{$settings.src.vendors}/Select2/select2.css",
					"{$settings.src.vendors}/Select2/select2-bootstrap.css"
				],
				"img": [
					"{$settings.src.vendors}/Select2/**",
				],
				
				"js": [
					"{$settings.src.vendors}/Select2/select2.js"
				]
			},
			"jquery-validation": {

				"js": [
					"{$settings.src.vendors}/jquery-validation/dist/jquery.validate.js",
					"{$settings.src.vendors}/jquery-validation/dist/additional-methods.js"
				]
			},
			"bootstrap-tree-view": {

				"css": [
					"{$settings.src.vendors}/bootstrap-tree-view/css/core.css",
					"{$settings.src.vendors}/bootstrap-tree-view/css/checkbox.css",
					"{$settings.src.vendors}/bootstrap-tree-view/css/tree.css"
				],
				"js": [
					"{$settings.src.vendors}/bootstrap-tree-view/js/core.js",
					"{$settings.src.vendors}/bootstrap-tree-view/js/checkbox.js",
					"{$settings.src.vendors}/bootstrap-tree-view/js/tree.js"
				]
			},
			"bootstrapvalidator": {

				"js": [
					"{$settings.src.vendors}/bootstrapvalidator/dist/js/bootstrapValidator.min.js",
				]
			},
			"nestable": {

				"js": [
					"{$settings.src.vendors}/nestable/jquery.nestable.js"
				]
			},
			"bootstrap-slider": {

				"css": [
					"{$settings.src.vendors}/bootstrap-slider/dist/css/bootstrap-slider.css"
				],

				"js": [
					"{$settings.src.vendors}/bootstrap-slider/dist/bootstrap-slider.js"
				]
			},
			"dropzone": {

				"css": [
					"{$settings.src.vendors}/dropzone/dist/basic.css",
					"{$settings.src.vendors}/dropzone/dist/dropzone.css"
				],

				"js": [
					"{$settings.src.vendors}/dropzone/dist/dropzone.js"
				]
			},
			"highcharts": {

				"css": [
					"{$settings.src.vendors}/highcharts/css/highcharts.css"
				],

				"js": [
					"{$settings.src.vendors}/highcharts/js/highcharts.js"
				]
			},
			/*"ckeditor": {

				"css": [
					"{$settings.src.vendors}/ckeditor/skins/kama/ckeditor.css"
				],
				"img": [
					"{$settings.src.vendors}/ckeditor/skins/kama/images/**"
				],

				"js": [
					"{$settings.src.vendors}/ckeditor/ckeditor.js"
				]
			},*/
			"bootstrap-maxlength": {

				"js": [
					"{$settings.src.vendors}/bootstrap-maxlength/bootstrap-maxlength.js"
				]
				
			},
			"bootstrap-timepicker": {

				"css": [
					"{$settings.src.vendors}/bootstrap-timepicker/css/bootstrap-timepicker.css"
				],

				"js": [
					"{$settings.src.vendors}/bootstrap-timepicker/js/bootstrap-timepicker.js"
				]

			},
			"clockpicker": {
				
				"css": [
					"{$settings.src.vendors}/clockpicker/dist/bootstrap-clockpicker.css"
				],

				"js": [
					"{$settings.src.vendors}/clockpicker/dist/bootstrap-clockpicker.js"
				]

			},
			"bootstrap-tagsinput": {
				
				"css": [
					"{$settings.src.vendors}/bootstrap-tagsinput/dist/bootstrap-tagsinput.css"
				],

				"js": [
					"{$settings.src.vendors}/bootstrap-tagsinput/dist/bootstrap-tagsinput.js"
				]

			},
			"nouislider": {
				
				"css": [
					"{$settings.src.vendors}/nouislider/distribute/nouislider.css"
				],

				"js": [
					"{$settings.src.vendors}/nouislider/distribute/nouislider.js"
				]

			},
			"ion-rangeslider": {
				
				"css": [
					"{$settings.src.vendors}/ion-rangeslider/css/ion.rangeSlider.css",
					"{$settings.src.vendors}/ion-rangeslider/css/ion.rangeSlider.skinFlat.css"
				],
				"img": [
					"{$settings.src.vendors}/ion-rangeslider/img/**"
				],

				"js": [
					"{$settings.src.vendors}/ion-rangeslider/js/ion.rangeSlider.js"
					]
			},
			"bootstrap-duallistbox": {
				
				"css": [
					"{$settings.src.vendors}/bootstrap-duallistbox/dist/bootstrap-duallistbox.css"
				],
				
				"js": [
					"{$settings.src.vendors}/bootstrap-duallistbox/dist/jquery.bootstrap-duallistbox.js"
					]
			},
			"bootstrap-colorpicker": {
				
				"css": [
					"{$settings.src.vendors}/bootstrap-colorpicker/dist/css/bootstrap-colorpicker.css"
				],
				"img": [
					"{$settings.src.vendors}/bootstrap-colorpicker/dist/img/bootstrap-colorpicker/**"
				],
				
				"js": [
					"{$settings.src.vendors}/bootstrap-colorpicker/dist/js/bootstrap-colorpicker.js"
				]
			},
			"jquery.maskedinput": {
				
				"js": [
					"{$settings.src.vendors}/jquery.maskedinput/src/jquery.maskedinput.js"
				]
			},
			"jquery-knob": {
				
				"js": [
					"{$settings.src.vendors}/jquery-knob/js/jquery.knob.js"
				]

			},
			"jquery-mockjax": {

				"js": [
					"{$settings.src.vendors}/jquery-mockjax/dist/jquery.mockjax.js"
				]
			},
			"jquery-typeahead": {

				"js": [
					"{$settings.src.vendors}/typeahead/dist/jquery.typeahead.min.js"
				],
				"css": [
					"{$settings.src.vendors}/typeahead/dist/jquery.typeahead.min.css"
				]
			},
			"X-editable": {

				"css": [
					"{$settings.src.vendors}/X-editable/dist/jquery-editable/css/jquery-editable.css",
					"{$settings.src.vendors}/X-editable/dist/bootstrap3-editable/css/bootstrap3-editable.css"
				],
				"img": [
					"{$settings.src.vendors}/X-editable/dist/jquery-editable/img/**"
				],

				"js": [
					"{$settings.src.theme}/app/js/custom/poshytip/jquery.poshytip.js",
					"{$settings.src.vendors}/X-editable/dist/jquery-editable/js/jquery-editable-poshytip.min.js",
					"{$settings.src.vendors}/X-editable/dist/inputs-ext/typeaheadjs/typeaheadjs.js",
					"{$settings.src.vendors}/X-editable/dist/jquery-editable/js/jquery-editable.min.js"
				]
			},

			"chart.js": {

				"js": [
					"{$settings.src.vendors}/chart.js/dist/Chart.bundle.js"
				]
			},
			"markdown": {

				"js": [
					"{$settings.src.vendors}/markdown/lib/markdown.js"
				]
			},
			"to-markdown": {

				"js": [
					"{$settings.src.vendors}/to-markdown/dist/to-markdown.js"
				]
			},
			"bootstrap-markdown": {

				"js": [
					"{$settings.src.vendors}/bootstrap-markdown/js/bootstrap-markdown.js"
				],
				"css": [
					"{$settings.src.vendors}/bootstrap-markdown/css/bootstrap-markdown.min.css"
				]
			},
			"summernote": {

				"js": [
					"{$settings.src.vendors}/summernote/dist/summernote-bs4.js"
				],
				"css": [
					"{$settings.src.vendors}/summernote/dist/summernote-bs4.css"
				],
				"fonts": [
					"{$settings.src.vendors}/summernote/dist/font/**"
				]
			},
			"fuelux": {
				"js": [
					"{$settings.src.vendors}/fuelux/js/wizard.js"
				]
			},
			"twitter-bootstrap-wizard": {
				"js": [
					"{$settings.src.vendors}/twitter-bootstrap-wizard/jquery.bootstrap.wizard.js"
				]
			}
		},
		"bundle": {
			"css": "{$settings.dist.assets}/vendors/vendors.bundle.css",
			"js": "{$settings.dist.assets}/vendors/vendors.bundle.js",
			"img": "{$settings.dist.assets}/vendors/images",
			"fonts": "{$settings.dist.assets}/vendors/fonts"


		}
	},
	"theme" : {
		"src": {
			"common" : {
				"scss": [
					"{$settings.src.theme}/app/sass/app.scss"
				],

				"pages": [
					"{$settings.src.theme}/app/sass/pages/*.scss"
				],

				"html": [
					"{$settings.src.theme}/templates/pages/*.hbs"
				],

				"ajax": [
					"{$settings.src.theme}/templates/pages/*.hbs"
				],
				"json": [
					"{$settings.src.theme}/data/**"
				],

				"sound": [
					"{$settings.src.theme}/app/sound/**"
				],

				"img"  : [
					"{$settings.src.theme}/app/img/**"
				],

				"js": [
					"{$settings.src.theme}/app/js/variables.js",
					"{$settings.src.theme}/app/js/config.js",
					"{$settings.src.theme}/app/js/custom/notifications/SmartNotification.js",
					"{$settings.src.theme}/app/js/custom/smartwidgets/jarvis.widget.js",
					"{$settings.src.theme}/app/js/custom/smart-chat-ui/smart.chat.manager.js",
					"{$settings.src.theme}/app/js/custom/smart-chat-ui/smart.chat.ui.js",
					"{$settings.src.theme}/app/js/custom/jvectormap/jquery-jvectormap-world-mill-en.js",
					"{$settings.src.theme}/app/js/custom/superbox/jquery.superbox.js",
					"{$settings.src.theme}/app/js/custom/highchartTable/jquery.highchartTable.js",
					"{$settings.src.theme}/app/js/custom/jcrop/jquery.Jcrop.js",
					"{$settings.src.theme}/app/js/custom/jcrop/jquery.color.js",
					"{$settings.src.theme}/app/js/common.js"
				]	
			}
		},
		"bundle" : {
			"scss": "{$settings.dist.assets}/app/app.bundle.css",
			"pages": "{$settings.dist.assets}/pages",
			"html": "{$settings.dist.outputDir}",
			"ajax": "{$settings.dist.outputDir}",
			"js": "{$settings.dist.assets}/app/app.bundle.js",
			"img": "{$settings.dist.assets}/img",
			"json": "{$settings.dist.outputDir}/data",
			"sound": "{$settings.dist.outputDir}/sound",
			"fonts": "{$settings.dist.assets}/fonts"
		}
	}
}