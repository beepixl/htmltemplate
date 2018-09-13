
/*
	commonJs
*/

function SAtoggleClass(element, parentClass, toggleClass, hasClass, className) {

	$(element).parents(parentClass).toggleClass(toggleClass);

	if(hasClass) {

		$(element).toggleClass(className);		

	}

	return false;

}


function SASetClass(element) {

	if($(element).is(':checked')) {

		localStorage.setItem($(element).attr('id'), true);

		$('body').removeClass($(element).data('remove-class')).addClass($(element).data('add-class'));		

	} 
	else {

		localStorage.setItem($(element).attr('id'), false);

		$('body').removeClass($(element).data('remove-class'));

	}


	if(!$(element).is(':checked')) {
		
		if($(element).attr('id') == 'SAFixedHeader'){

			localStorage.setItem('SAFixedHeader', false);
			localStorage.setItem('SAFixedNavigation', false);
			localStorage.setItem('SAFixedRibbon', false);

			$('#SAFixedNavigation, #SAFixedRibbon').prop('checked', false);
		}

		if($(element).attr('id') == 'SAFixedNavigation'){

			$('#SAFixedRibbon').prop('checked', false);
			localStorage.setItem('SAFixedRibbon', false);
		}

		if($(element).attr('id') == 'SAMenuOnTop'){
			localStorage.setItem('SAMenuOnTop', false);
			location.reload();
		}

	}
	else {
		if($(element).attr('id') == 'SAFixedNavigation'){

			$('#SAFixedHeader').prop('checked', true);
			$('#SAFixedNavigation').prop('checked', true);
			localStorage.setItem('SAFixedHeader', true);
			localStorage.setItem('SAFixedNavigation', true);
		}

		if($(element).attr('id') == 'SAFixedRibbon'){

			$('#SAFixedHeader, #SAFixedNavigation').prop('checked', true);
			localStorage.setItem('SAFixedNavigation', true);
			localStorage.setItem('SAFixedHeader', true);
		}

		if($(element).attr('id') == 'SAMenuOnTop'){

			localStorage.setItem('SAMenuOnTop', true);
			location.reload();
		}
	}
}



function SAMenuSetupOnTop() {

	// SAMenuOnTop
	if(localStorage) {

		if(localStorage.getItem('SAMenuOnTop') && JSON.parse(localStorage.getItem('SAMenuOnTop'))) {
			$('body').removeClass($('#SAMenuOnTop').data('remove-class')).addClass($('#SAMenuOnTop').data('add-class'));		
			$('#SAMenuOnTop').prop('checked', true);
		}
		else {
			$('body').removeClass($('#SAMenuOnTop').data('remove-class'));
			$('#SAMenuOnTop').prop('checked', false);
		}

		
		// SAFixedHeader

		if(localStorage.getItem('SAFixedHeader') && JSON.parse(localStorage.getItem('SAFixedHeader'))) {
			$('body').removeClass($('#SAFixedHeader').data('remove-class')).addClass($('#SAFixedHeader').data('add-class'));		
			$('#SAFixedHeader').prop('checked', true);
		}
		else {
			$('body').removeClass($('#SAFixedHeader').data('remove-class'));
			$('#SAFixedHeader').prop('checked', false);
		}


		// SAFixedNavigation

		if(localStorage.getItem('SAFixedNavigation') && JSON.parse(localStorage.getItem('SAFixedNavigation'))) {
			$('body').removeClass($('#SAFixedNavigation').data('remove-class')).addClass($('#SAFixedNavigation').data('add-class'));		
			$('#SAFixedNavigation').prop('checked', true);
		}
		else {
			$('body').removeClass($('#SAFixedNavigation').data('remove-class'));
			$('#SAFixedNavigation').prop('checked', false);
		}


		// SAFixedRibbon

		if(localStorage.getItem('SAFixedRibbon') && JSON.parse(localStorage.getItem('SAFixedRibbon'))) {
			$('body').removeClass($('#SAFixedRibbon').data('remove-class')).addClass($('#SAFixedRibbon').data('add-class'));		
			$('#SAFixedRibbon').prop('checked', true);
		}
		else {
			$('body').removeClass($('#SAFixedRibbon').data('remove-class'));
			$('#SAFixedRibbon').prop('checked', false);
		}
	}	

}


function loadNotifications(element) {
	console.log($(element).data('url'));
	var url = $(element).data('url');
	var container = $('.sa-ajax-notification-container');

	$(element).addClass('active').siblings().removeClass('active');
	loadAjaxContent(url, container);

}


function loadAjaxContent(url, container) {
	$.ajax({
		type: "GET",
        url: url,
        dataType: "html",
        cache: !0,
        success: function(e) {
            container.css({
                opacity: "0.0"
            }).html(e).delay(50).animate({
                opacity: "1.0"
            }, 300),
            e = null,
            container = null
        },
        error: function(a, o, n, i) {
            container.html('<h4 class="ajax-loading-error"><i class="fa fa-warning text-orange-dark"></i> Error requesting <span class="text-red">' + url + "</span>: " + a.status + ' <span style="text-transform: capitalize;">' + n + "</span></h4>")
        },
        async: !0
	})

}




function toggleReloadButton(element, event) {

	event.stopPropagation();

	$(element).addClass('disabled').html(smartadmin.toggleReloadButton.loadingHTML);

	setTimeout(function() {

		$(element).removeClass('disabled').html(smartadmin.toggleReloadButton.resetHTML);

	}, 3e3);

}


function toggleFullScreen() {
	smartadmin.launchFullscreen();
}

$('.sa-activity-dropdown-toggle').click(function(){
	$(this).find('.badge').removeClass('bg-red');
})


$(document).keyup(function(e){
   if(e.which==122) {

      smartadmin.launchFullscreen();

   }else if(e.which==27) {

   		$('body').removeClass(smartadmin.classesName.fullScreen);   	


   }

});


$(document).ready(function(){
	$('body').click(function(){

		if($('.'+smartadmin.classesName.shortcutsSection).height()) {

			$(this).removeClass('sa-shortcuts-expanded');
			
		}
	})
})

SAMenuSetupOnTop();


function applySparkline() {
	if ($.fn.sparkline) {
	
		// variable declearations:
	
		var barColor,
		    sparklineHeight,
		    sparklineBarWidth,
		    sparklineBarSpacing,
		    sparklineNegBarColor,
		    sparklineStackedColor,
		    thisLineColor,
		    thisLineWidth,
		    thisFill,
		    thisSpotColor,
		    thisMinSpotColor,
		    thisMaxSpotColor,
		    thishighlightSpotColor,
		    thisHighlightLineColor,
		    thisSpotRadius,			        
			pieColors,
		    pieWidthHeight,
		    pieBorderColor,
		    pieOffset,
		 	thisBoxWidth,
		    thisBoxHeight,
		    thisBoxRaw,
		    thisBoxTarget,
		    thisBoxMin,
		    thisBoxMax,
		    thisShowOutlier,
		    thisIQR,
		    thisBoxSpotRadius,
		    thisBoxLineColor,
		    thisBoxFillColor,
		    thisBoxWhisColor,
		    thisBoxOutlineColor,
		    thisBoxOutlineFill,
		    thisBoxMedianColor,
		    thisBoxTargetColor,
			thisBulletHeight,
		    thisBulletWidth,
		    thisBulletColor,
		    thisBulletPerformanceColor,
		    thisBulletRangeColors,
			thisDiscreteHeight,
		    thisDiscreteWidth,
		    thisDiscreteLineColor,
		    thisDiscreteLineHeight,
		    thisDiscreteThrushold,
		    thisDiscreteThrusholdColor,
			thisTristateHeight,
		    thisTristatePosBarColor,
		    thisTristateNegBarColor,
		    thisTristateZeroBarColor,
		    thisTristateBarWidth,
		    thisTristateBarSpacing,
		    thisZeroAxis,
		    thisBarColor,
		    sparklineWidth,
		    sparklineValue,
		    sparklineValueSpots1,
		    sparklineValueSpots2,
		    thisLineWidth1,
		    thisLineWidth2,
		    thisLineColor1,
		    thisLineColor2,
		    thisSpotRadius1,
		    thisSpotRadius2,
		    thisMinSpotColor1,
		    thisMaxSpotColor1,
		    thisMinSpotColor2,
		    thisMaxSpotColor2,
		    thishighlightSpotColor1,
		    thisHighlightLineColor1,
		    thishighlightSpotColor2,
		    thisFillColor1,
		    thisFillColor2;
				    				    	
		$('.sparkline:not(:has(>canvas))').each(function() {
			var $this = $(this),
				sparklineType = $this.data('sparkline-type') || 'bar';
	
			// BAR CHART
			if (sparklineType == 'bar') {
	
					barColor = $this.data('sparkline-bar-color') || $this.css('color') || '#0000f0';
				    sparklineHeight = $this.data('sparkline-height') || '26px';
				    sparklineBarWidth = $this.data('sparkline-barwidth') || 5;
				    sparklineBarSpacing = $this.data('sparkline-barspacing') || 2;
				    sparklineNegBarColor = $this.data('sparkline-negbar-color') || '#A90329';
				    sparklineStackedColor = $this.data('sparkline-barstacked-color') || ["#A90329", "#0099c6", "#98AA56", "#da532c", "#4490B1", "#6E9461", "#990099", "#B4CAD3"];
				        
				$this.sparkline('html', {
					barColor : barColor,
					type : sparklineType,
					height : sparklineHeight,
					barWidth : sparklineBarWidth,
					barSpacing : sparklineBarSpacing,
					stackedBarColor : sparklineStackedColor,
					negBarColor : sparklineNegBarColor,
					zeroAxis : 'false'
				});
				
				$this = null;
	
			}
	
			// LINE CHART
			if (sparklineType == 'line') {
	
					sparklineHeight = $this.data('sparkline-height') || '20px';
				    sparklineWidth = $this.data('sparkline-width') || '90px';
				    thisLineColor = $this.data('sparkline-line-color') || $this.css('color') || '#0000f0';
				    thisLineWidth = $this.data('sparkline-line-width') || 1;
				    thisFill = $this.data('fill-color') || '#c0d0f0';
				    thisSpotColor = $this.data('sparkline-spot-color') || '#f08000';
				    thisMinSpotColor = $this.data('sparkline-minspot-color') || '#ed1c24';
				    thisMaxSpotColor = $this.data('sparkline-maxspot-color') || '#f08000';
				    thishighlightSpotColor = $this.data('sparkline-highlightspot-color') || '#50f050';
				    thisHighlightLineColor = $this.data('sparkline-highlightline-color') || 'f02020';
				    thisSpotRadius = $this.data('sparkline-spotradius') || 1.5;
					thisChartMinYRange = $this.data('sparkline-min-y') || 'undefined'; 
					thisChartMaxYRange = $this.data('sparkline-max-y') || 'undefined'; 
					thisChartMinXRange = $this.data('sparkline-min-x') || 'undefined'; 
					thisChartMaxXRange = $this.data('sparkline-max-x') || 'undefined'; 
					thisMinNormValue = $this.data('min-val') || 'undefined'; 
					thisMaxNormValue = $this.data('max-val') || 'undefined'; 
					thisNormColor =  $this.data('norm-color') || '#c0c0c0';
					thisDrawNormalOnTop = $this.data('draw-normal') || false;
				    
				$this.sparkline('html', {
					type : 'line',
					width : sparklineWidth,
					height : sparklineHeight,
					lineWidth : thisLineWidth,
					lineColor : thisLineColor,
					fillColor : thisFill,
					spotColor : thisSpotColor,
					minSpotColor : thisMinSpotColor,
					maxSpotColor : thisMaxSpotColor,
					highlightSpotColor : thishighlightSpotColor,
					highlightLineColor : thisHighlightLineColor,
					spotRadius : thisSpotRadius,
					chartRangeMin : thisChartMinYRange,
					chartRangeMax : thisChartMaxYRange,
					chartRangeMinX : thisChartMinXRange,
					chartRangeMaxX : thisChartMaxXRange,
					normalRangeMin : thisMinNormValue,
					normalRangeMax : thisMaxNormValue,
					normalRangeColor : thisNormColor,
					drawNormalOnTop : thisDrawNormalOnTop
	
				});
				
				$this = null;
	
			}
	
			// PIE CHART
			if (sparklineType == 'pie') {
	
					pieColors = $this.data('sparkline-piecolor') || ["#B4CAD3", "#4490B1", "#98AA56", "#da532c","#6E9461", "#0099c6", "#990099", "#717D8A"];
				    pieWidthHeight = $this.data('sparkline-piesize') || 90;
				    pieBorderColor = $this.data('border-color') || '#45494C';
				    pieOffset = $this.data('sparkline-offset') || 0;
				    
				$this.sparkline('html', {
					type : 'pie',
					width : pieWidthHeight,
					height : pieWidthHeight,
					tooltipFormat : '<span style="color: {{color}}">&#9679;</span> ({{percent.1}}%)',
					sliceColors : pieColors,
					borderWidth : 1,
					offset : pieOffset,
					borderColor : pieBorderColor
				});
				
				$this = null;
	
			}
	
			// BOX PLOT
			if (sparklineType == 'box') {
	
					thisBoxWidth = $this.data('sparkline-width') || 'auto';
				    thisBoxHeight = $this.data('sparkline-height') || 'auto';
				    thisBoxRaw = $this.data('sparkline-boxraw') || false;
				    thisBoxTarget = $this.data('sparkline-targetval') || 'undefined';
				    thisBoxMin = $this.data('sparkline-min') || 'undefined';
				    thisBoxMax = $this.data('sparkline-max') || 'undefined';
				    thisShowOutlier = $this.data('sparkline-showoutlier') || true;
				    thisIQR = $this.data('sparkline-outlier-iqr') || 1.5;
				    thisBoxSpotRadius = $this.data('sparkline-spotradius') || 1.5;
				    thisBoxLineColor = $this.css('color') || '#000000';
				    thisBoxFillColor = $this.data('fill-color') || '#c0d0f0';
				    thisBoxWhisColor = $this.data('sparkline-whis-color') || '#000000';
				    thisBoxOutlineColor = $this.data('sparkline-outline-color') || '#303030';
				    thisBoxOutlineFill = $this.data('sparkline-outlinefill-color') || '#f0f0f0';
				    thisBoxMedianColor = $this.data('sparkline-outlinemedian-color') || '#f00000';
				    thisBoxTargetColor = $this.data('sparkline-outlinetarget-color') || '#40a020';
				    
				$this.sparkline('html', {
					type : 'box',
					width : thisBoxWidth,
					height : thisBoxHeight,
					raw : thisBoxRaw,
					target : thisBoxTarget,
					minValue : thisBoxMin,
					maxValue : thisBoxMax,
					showOutliers : thisShowOutlier,
					outlierIQR : thisIQR,
					spotRadius : thisBoxSpotRadius,
					boxLineColor : thisBoxLineColor,
					boxFillColor : thisBoxFillColor,
					whiskerColor : thisBoxWhisColor,
					outlierLineColor : thisBoxOutlineColor,
					outlierFillColor : thisBoxOutlineFill,
					medianColor : thisBoxMedianColor,
					targetColor : thisBoxTargetColor
	
				});
				
				$this = null;
	
			}
	
			// BULLET
			if (sparklineType == 'bullet') {
	
				var thisBulletHeight = $this.data('sparkline-height') || 'auto';
				    thisBulletWidth = $this.data('sparkline-width') || 2;
				    thisBulletColor = $this.data('sparkline-bullet-color') || '#ed1c24';
				    thisBulletPerformanceColor = $this.data('sparkline-performance-color') || '#3030f0';
				    thisBulletRangeColors = $this.data('sparkline-bulletrange-color') || ["#d3dafe", "#a8b6ff", "#7f94ff"];
				    
				$this.sparkline('html', {
	
					type : 'bullet',
					height : thisBulletHeight,
					targetWidth : thisBulletWidth,
					targetColor : thisBulletColor,
					performanceColor : thisBulletPerformanceColor,
					rangeColors : thisBulletRangeColors
	
				});
				
				$this = null;
	
			}
	
			// DISCRETE
			if (sparklineType == 'discrete') {
	
				 	thisDiscreteHeight = $this.data('sparkline-height') || 26;
				    thisDiscreteWidth = $this.data('sparkline-width') || 50;
				    thisDiscreteLineColor = $this.css('color');
				    thisDiscreteLineHeight = $this.data('sparkline-line-height') || 5;
				    thisDiscreteThrushold = $this.data('sparkline-threshold') || 'undefined';
				    thisDiscreteThrusholdColor = $this.data('sparkline-threshold-color') || '#ed1c24';
				    
				$this.sparkline('html', {
	
					type : 'discrete',
					width : thisDiscreteWidth,
					height : thisDiscreteHeight,
					lineColor : thisDiscreteLineColor,
					lineHeight : thisDiscreteLineHeight,
					thresholdValue : thisDiscreteThrushold,
					thresholdColor : thisDiscreteThrusholdColor
	
				});
				
				$this = null;
	
			}
	
			// TRISTATE
			if (sparklineType == 'tristate') {
	
				 	thisTristateHeight = $this.data('sparkline-height') || 26;
				    thisTristatePosBarColor = $this.data('sparkline-posbar-color') || '#60f060';
				    thisTristateNegBarColor = $this.data('sparkline-negbar-color') || '#f04040';
				    thisTristateZeroBarColor = $this.data('sparkline-zerobar-color') || '#909090';
				    thisTristateBarWidth = $this.data('sparkline-barwidth') || 5;
				    thisTristateBarSpacing = $this.data('sparkline-barspacing') || 2;
				    thisZeroAxis = $this.data('sparkline-zeroaxis') || false;
				    
				$this.sparkline('html', {
	
					type : 'tristate',
					height : thisTristateHeight,
					posBarColor : thisBarColor,
					negBarColor : thisTristateNegBarColor,
					zeroBarColor : thisTristateZeroBarColor,
					barWidth : thisTristateBarWidth,
					barSpacing : thisTristateBarSpacing,
					zeroAxis : thisZeroAxis
	
				});
				
				$this = null;
	
			}
	
			//COMPOSITE: BAR
			if (sparklineType == 'compositebar') {
	
			 	sparklineHeight = $this.data('sparkline-height') || '20px';
			    sparklineWidth = $this.data('sparkline-width') || '100%';
			    sparklineBarWidth = $this.data('sparkline-barwidth') || 3;
			    thisLineWidth = $this.data('sparkline-line-width') || 1;
			    thisLineColor = $this.data('data-sparkline-linecolor') || '#ed1c24';
			    thisBarColor = $this.data('data-sparkline-barcolor') || '#333333';
				    
				$this.sparkline($this.data('sparkline-bar-val'), {
	
					type : 'bar',
					width : sparklineWidth,
					height : sparklineHeight,
					barColor : thisBarColor,
					barWidth : sparklineBarWidth
					//barSpacing: 5
	
				});
	
				$this.sparkline($this.data('sparkline-line-val'), {
	
					width : sparklineWidth,
					height : sparklineHeight,
					lineColor : thisLineColor,
					lineWidth : thisLineWidth,
					composite : true,
					fillColor : false
	
				});
				
				$this = null;
	
			}
	
			//COMPOSITE: LINE
			if (sparklineType == 'compositeline') {
	
					sparklineHeight = $this.data('sparkline-height') || '20px';
				    sparklineWidth = $this.data('sparkline-width') || '90px';
				    sparklineValue = $this.data('sparkline-bar-val');
				    sparklineValueSpots1 = $this.data('sparkline-bar-val-spots-top') || null;
				    sparklineValueSpots2 = $this.data('sparkline-bar-val-spots-bottom') || null;
				    thisLineWidth1 = $this.data('sparkline-line-width-top') || 1;
				    thisLineWidth2 = $this.data('sparkline-line-width-bottom') || 1;
				    thisLineColor1 = $this.data('sparkline-color-top') || '#333333';
				    thisLineColor2 = $this.data('sparkline-color-bottom') || '#ed1c24';
				    thisSpotRadius1 = $this.data('sparkline-spotradius-top') || 1.5;
				    thisSpotRadius2 = $this.data('sparkline-spotradius-bottom') || thisSpotRadius1;
				    thisSpotColor = $this.data('sparkline-spot-color') || '#f08000';
				    thisMinSpotColor1 = $this.data('sparkline-minspot-color-top') || '#ed1c24';
				    thisMaxSpotColor1 = $this.data('sparkline-maxspot-color-top') || '#f08000';
				    thisMinSpotColor2 = $this.data('sparkline-minspot-color-bottom') || thisMinSpotColor1;
				    thisMaxSpotColor2 = $this.data('sparkline-maxspot-color-bottom') || thisMaxSpotColor1;
				    thishighlightSpotColor1 = $this.data('sparkline-highlightspot-color-top') || '#50f050';
				    thisHighlightLineColor1 = $this.data('sparkline-highlightline-color-top') || '#f02020';
				    thishighlightSpotColor2 = $this.data('sparkline-highlightspot-color-bottom') ||
				        thishighlightSpotColor1;
				    thisHighlightLineColor2 = $this.data('sparkline-highlightline-color-bottom') ||
				        thisHighlightLineColor1;
				    thisFillColor1 = $this.data('sparkline-fillcolor-top') || 'transparent';
				    thisFillColor2 = $this.data('sparkline-fillcolor-bottom') || 'transparent';
				    
				$this.sparkline(sparklineValue, {
	
					type : 'line',
					spotRadius : thisSpotRadius1,
	
					spotColor : thisSpotColor,
					minSpotColor : thisMinSpotColor1,
					maxSpotColor : thisMaxSpotColor1,
					highlightSpotColor : thishighlightSpotColor1,
					highlightLineColor : thisHighlightLineColor1,
	
					valueSpots : sparklineValueSpots1,
	
					lineWidth : thisLineWidth1,
					width : sparklineWidth,
					height : sparklineHeight,
					lineColor : thisLineColor1,
					fillColor : thisFillColor1
	
				});
	
				$this.sparkline($this.data('sparkline-line-val'), {
	
					type : 'line',
					spotRadius : thisSpotRadius2,
	
					spotColor : thisSpotColor,
					minSpotColor : thisMinSpotColor2,
					maxSpotColor : thisMaxSpotColor2,
					highlightSpotColor : thishighlightSpotColor2,
					highlightLineColor : thisHighlightLineColor2,
	
					valueSpots : sparklineValueSpots2,
	
					lineWidth : thisLineWidth2,
					width : sparklineWidth,
					height : sparklineHeight,
					lineColor : thisLineColor2,
					composite : true,
					fillColor : thisFillColor2
	
				});
				
				$this = null;
	
			}
	
		});
	
	}// end if
}


function applyEasyPieChart() {
	/*
	 * EASY PIE CHARTS
	 * DEPENDENCY: js/plugins/easy-pie-chart/jquery.easy-pie-chart.min.js
	 * Usage: <div class="easy-pie-chart txt-color-orangeDark" data-pie-percent="33" data-pie-size="72" data-size="72">
	 *			<span class="percent percent-sign">35</span>
	 * 	  	  </div>
	 */


		$('.easy-pie-chart').each(function() {
			var $this = $(this),
				barColor = $this.css('color') || $this.data('pie-color'),
			    trackColor = $this.data('pieTrackColor') || 'rgba(0,0,0,0.04)',
			    linewidth = ( parseInt($this.data('pie-linewidth')) || parseInt($this.data('pie-size')) ) || 25;
			    size = parseInt($this.data('pie-size')) || 25;

			
			new EasyPieChart(this, {
				
				barColor : barColor,
				trackColor : trackColor,
				scaleColor : false,
				lineCap : 'butt',
				lineWidth : parseInt(linewidth / 8.5),
				animate : 1500,
				rotate : -90,
				size : size,
				onStep: function(from, to, percent) {
        			$(this.el).find('.percent').text(Math.round(percent));
    			}
				
			});
			
			$this = null;
		});


}



function runAllCharts() {
	applyEasyPieChart();
	applySparkline();
}

runAllCharts();



$("a[data-chat-id]:not(.offline)").click(function(a, b) {
    var c = $(this)
      , d = c.attr("data-chat-id")
      , e = c.attr("data-chat-fname")
      , f = c.attr("data-chat-lname")
      , g = c.attr("data-chat-status") || "online"
      , h = c.attr("data-chat-alertmsg")
      , i = c.attr("data-chat-alertshow") || !1;
    chatboxManager.addBox(d, {
        "title": "username" + d,
        "first_name": e,
        "last_name": f,
        "status": g,
        "alertmsg": h,
        "alertshow": i
    }),
    a.preventDefault()
});





// demo 

function applyTheme (element) {
    var a = $(element)
      , b = $(".sa-logo");
    $.root_.removeClassPrefix("smart-style").addClass(a.attr("id")),
    $("html").removeClassPrefix("smart-style").addClass(a.attr("id")),
    b.attr("src", a.data("skinlogo")),
    $("#smart-styles > a #skin-checked").remove(),
    a.prepend("<i class='fa fa-check fa-fw' id='skin-checked'></i>")	
}
$("#smart-styles > a").on("click", function() {
	applyTheme(this);
});









/*
 * INITIALIZE JARVIS WIDGETS
 * Setup Desktop Widgets
 */
	function setup_widgets_desktop() {
	
		if ($.fn.jarvisWidgets && enableJarvisWidgets) {
	
			$('#widget-grid').jarvisWidgets({
	
				grid : 'article',
				widgets : '.jarviswidget',
				localStorage : localStorageJarvisWidgets,
				deleteSettingsKey : '#deletesettingskey-options',
				settingsKeyLabel : 'Reset settings?',
				deletePositionKey : '#deletepositionkey-options',
				positionKeyLabel : 'Reset position?',
				sortable : sortableJarvisWidgets,
				buttonsHidden : false,
				// toggle button
				toggleButton : true,
				toggleClass : 'fa fa-minus | fa fa-plus',
				toggleSpeed : 200,
				onToggle : function() {
				},
				// delete btn
				deleteButton : true,
				deleteMsg:'Warning: This action cannot be undone!',
				deleteClass : 'fa fa-times',
				deleteSpeed : 200,
				onDelete : function() {
				},
				// edit btn
				editButton : true,
				editPlaceholder : '.jarviswidget-editbox',
				editClass : 'fa fa-cog | fa fa-save',
				editSpeed : 200,
				onEdit : function() {
				},
				// color button
				colorButton : true,
				// full screen
				fullscreenButton : true,
				fullscreenClass : 'fa fa-expand | fa fa-compress',
				fullscreenDiff : 3,
				onFullscreen : function() {
				},
				// custom btn
				customButton : false,
				customClass : 'folder-10 | next-10',
				customStart : function() {
					alert('Hello you, this is a custom button...');
				},
				customEnd : function() {
					alert('bye, till next time...');
				},
				// order
				buttonOrder : '%refresh% %custom% %edit% %toggle% %fullscreen% %delete%',
				opacity : 1.0,
				dragHandle : '> header',
				placeholderClass : 'jarviswidget-placeholder',
				indicator : true,
				indicatorTime : 600,
				ajax : true,
				timestampPlaceholder : '.jarviswidget-timestamp',
				timestampFormat : 'Last update: %m%/%d%/%y% %h%:%i%:%s%',
				refreshButton : true,
				refreshButtonClass : 'fa fa-refresh',
				labelError : 'Sorry but there was a error:',
				labelUpdated : 'Last Update:',
				labelRefresh : 'Refresh',
				labelDelete : 'Delete widget:',
				afterLoad : function() {
				},
				rtl : false, // best not to toggle this!
				onChange : function() {
					
				},
				onSave : function() {
					
				},
				ajaxnav : $.navAsAjax // declears how the localstorage should be saved (HTML or AJAX Version)
	
			});
	
		}
	
	}
/*
 * SETUP DESKTOP WIDGET
 */
setup_widgets_desktop();

/* ~ END: INITIALIZE JARVIS WIDGETS */




$(".sa-logout-header-toggle").click(function(t) {
    var a = $(this);
    userLogout(a);
    t.preventDefault();
    a = null;
})

$('[data-action="userLogout"]').click(function(t) {
    var a = $(this);
    userLogout(a);
    t.preventDefault();
    a = null;
})


function userLogout(e) {
    function t() {
        window.location = e.attr("href")
    }
    $.SmartMessageBox({
        title: "<i class='fa fa-sign-out text-orange-dark'></i> Logout <span class='text-orange-dark'><strong>" + $(".sa-sidebar-shortcut-toggle").text() + "</strong></span> ?",
        content: e.data("logout-msg") || "You can improve your security further after logging out by closing this opened browser",
        buttons: "[No][Yes]"
    }, function(e) {
        "Yes" == e && ($.root_.addClass("animated fadeOutUp"),
        setTimeout(t, 1e3))
    })
}



$('[data-rel="popover-hover"]').popover();
$('[rel="tooltip"]').tooltip();
$('[data-action="toggleMenu"]').click(function(){
	$('body').removeClass('minified');
	SAtoggleClass(this, 'body', 'sa-hidden-menu')
});

$('[data-action="minifyMenu"]').click(function(){
	$('body').removeClass('sa-hidden-menu');
	SAtoggleClass(this, 'body', 'minified')
});

$('[data-action="toggleShortcut"]').click(function(){
	SAtoggleClass(this, 'body', 'sa-shortcuts-expanded')
});


$('[data-action="launchFullscreen"]').click(function(){
	toggleFullScreen()
});

$('[data-action="resetWidgets"]').click(function(){
	smartadmin.resetWidgets($(this));
});

$('[data-toggle="popover"]').popover();

if ($.fn.datepicker) {
	$('.datepicker').each(function() {

		var $this = $(this),
			dataDateFormat = $this.attr('data-dateformat') || 'dd.mm.yy';

		$this.datepicker({
			dateFormat : dataDateFormat,
			prevText : '&#xf053;',
			nextText : '&#xf054;',
		});
		
		//clear memory reference
		$this = null;
})
}


if ($.fn.barrating) {
	$('.barrating').each(function() {

		var $this = $(this);

		$this.barrating({
			theme: 'fontawesome-stars'
		});
		
		//clear memory reference
		$this = null;
	});
}


$.widget("ui.dialog", $.extend({}, $.ui.dialog.prototype, {
    _title: function(title) {
        if (!this.options.title ) {
            title.html("&#160;");
        } else {
            title.html(this.options.title);
        }
    }
}));


/*
 * INITIALIZE FORMS
 * Description: Select2, Masking, Datepicker, Autocomplete
 */	
function runAllForms() {

	/*
	 * BOOTSTRAP SLIDER PLUGIN
	 * Usage:
	 * Dependency: js/plugin/bootstrap-slider
	 */
	if ($.fn.slider) {
		$('.slider').bootstrapSlider();
	}

	/*
	 * SELECT2 PLUGIN
	 * Usage:
	 * Dependency: js/plugin/select2/
	 */
	if ($.fn.select2) {
		$('select.select2').each(function() {
			var $this = $(this),
				width = $this.attr('data-select-width') || '100%';
			//, _showSearchInput = $this.attr('data-select-search') === 'true';
			$this.select2({
				//showSearchInput : _showSearchInput,
				allowClear : true,
				width : width
			});

			//clear memory reference
			$this = null;
		});
	}

	/*
	 * MASKING
	 * Dependency: js/plugin/masked-input/
	 */
	if ($.fn.mask) {
		$('[data-mask]').each(function() {

			var $this = $(this),
				mask = $this.attr('data-mask') || 'error...', mask_placeholder = $this.attr('data-mask-placeholder') || 'X';

			$this.mask(mask, {
				placeholder : mask_placeholder
			});
			
			//clear memory reference
			$this = null;
		});
	}

	/*
	 * AUTOCOMPLETE
	 * Dependency: js/jqui
	 */
	if ($.fn.autocomplete) {
		$('[data-autocomplete]').each(function() {

			var $this = $(this),
				availableTags = $this.data('autocomplete') || ["The", "Quick", "Brown", "Fox", "Jumps", "Over", "Three", "Lazy", "Dogs"];

			$this.autocomplete({
				source : availableTags
			});
			
			//clear memory reference
			$this = null;
		});
	}

	/*
	 * JQUERY UI DATE
	 * Dependency: js/libs/jquery-ui-1.10.3.min.js
	 * Usage: <input class="datepicker" />
	 */
	if ($.fn.datepicker) {
		$('.datepicker').each(function() {

			var $this = $(this),
				dataDateFormat = $this.attr('data-dateformat') || 'dd.mm.yy';

			$this.datepicker({
				dateFormat : dataDateFormat,
				prevText : '<i class="fa fa-chevron-left"></i>',
				nextText : '<i class="fa fa-chevron-right"></i>',
			});
			
			//clear memory reference
			$this = null;
		});
	}

	/*
	 * AJAX BUTTON LOADING TEXT
	 * Usage: <button type="button" data-loading-text="Loading..." class="btn btn-xs btn-default ajax-refresh"> .. </button>
	 */
	$('button[data-loading-text]').on('click', function() {
		var btn = $(this);
		btn.button('loading');
		setTimeout(function() {
			btn.button('reset');
			//clear memory reference
			btn = null;
		}, 3000);

	});

}



/*
 * GOOGLE MAPS
 * description: Append google maps to head dynamically (only execute for ajax version)
 * Loads at the begining for ajax pages
 */
	if ($.navAsAjax || $(".google_maps")){
		var gMapsLoaded = false;
		window.gMapsCallback = function() {
			gMapsLoaded = true;
			$(window).trigger('gMapsLoaded');
		};
		window.loadGoogleMaps = function() {
			if (gMapsLoaded)
				return window.gMapsCallback();
			var script_tag = document.createElement('script');
			script_tag.setAttribute("type", "text/javascript");
			script_tag.setAttribute("src", "https://maps.google.com/maps/api/js?sensor=false&callback=gMapsCallback");
			(document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script_tag);
		};
	}
/* ~ END: GOOGLE MAPS */

//setTimeout(function(){
//	applyTheme('#smart-style-6');
//});