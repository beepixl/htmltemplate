module.exports = {
	appCssPath: 'assets/app/app.bundle.css',
	appJsPath: 'assets/app/app.bundle.js',
	vendorCssPath: 'assets/vendors/vendors.bundle.css',
	vendorJsPath: 'assets/vendors/vendors.bundle.js',
	ThemeName: "Smart Admin 2.0",
	prefix: "sa-",
	navigation: [
		{
			slug: "homepage",
			parentLevel: true,
			url: "index.html",
			hasIcon: true,
			iconClass: 'fa fa-lg fa-fw fa-home',
			title: "Dashboard",
			subMenuClass: 'sa-sub-nav',
			hasSubMenu: true,
			subMenu: [
				{
					slug : "analytics-dashboard",
					url: "index.html",
					title: "Analytics Dashboard",
				},
				{
					slug : "dashboard-marketing",
					url: "dashboard-marketing.html",
					title: "Marketing Dashboard",
				},
				{
					slug : "dashboard-social",
					url: "dashboard-social.html",
					title: "Social Wall",
				}
			]
		},
		{
			slug: "smart-admin-intel",
			parentLevel: true,
			url: "layouts.html",
			hasIcon: true,
			iconClass: 'fa fa-lg fa-fw fa-cube text-blue',
			title: "SmartAdmin Intel",
			subMenuClass: 'sa-sub-nav',
			class: "top-menu-invisible",
			hasSubMenu: true,
			subMenu: [
				{
					slug : "layouts",
					url: "layouts.html",
					title: "App Layouts",
					hasIcon: true,
					iconClass: 'fa fa-lg fa-fw fa-gear'
				},
				{
					slug : "skins",
					url: "skins.html",
					title: "Prebuilt Skins",
					hasIcon: true,
					iconClass: 'fa fa-lg fa-fw fa-picture-o'
				},
				{
					slug : "applayout",
					url: "applayout.html",
					title: "App Settings",
					hasIcon: true,
					iconClass: 'fa fa-lg fa-fw fa-cube'
				}
			]
		},
		{
			slug: "inbox",
			parentLevel: true,
			url: "inbox.html",
			hasIcon: true,
			iconClass: "fa fa-lg fa-fw fa-inbox",
			title: "Outlook",
			hasBadge: true,
			badgeClass: "badge pull-right inbox-badge",
			badgeValue: "14",
		},
		{
			slug: "graphs",
			parentLevel: true,
			url: "flot.html",
			hasIcon: true,
			iconClass: "fa fa-lg fa-fw fa-bar-chart-o",
			title: "Graphs",
			subMenuClass: 'sa-sub-nav',
			hasSubMenu: true,
			subMenu: [
				{
					slug : "flot",
					url: "flot.html",
					title: "Flot Chart"
				},
				{
					slug : "morris",
					url: "morris.html",
					title: "Morris Charts"
				},
				{
					slug : "sparkline-charts",
					url: "sparkline-charts.html",
					title: "Sparklines"
				},
				{
					slug : "easypie-charts",
					url: "easypie-charts.html",
					title: "EasyPieCharts"
				},
				{
					slug : "dygraphs",
					url: "dygraphs.html",
					title: "Dygraphs"
				},
				{
					slug : "chartjs",
					url: "chartjs.html",
					title: "Chart.js"
				},
				{
					slug : "hchartable",
					url: "hchartable.html",
					title: "HighChartTable",
					hasBadge: true,
					badgeClass: "badge pull-right inbox-badge bg-yellow",
					badgeValue: "new"
				}
			]
		},
		{
			slug: "tables",
			parentLevel: true,
			url: "flot.html",
			hasIcon: true,
			iconClass: "fa fa-lg fa-fw fa-table",
			title: "Tables",
			subMenuClass: 'sa-sub-nav',
			hasSubMenu: true,
			subMenu: [
				{
					slug : "table",
					url: "table.html",
					title: "Normal Tables"
				},
				{
					slug : "datatables",
					url: "datatables.html",
					title: "Data Tables",
					hasBadge: true,
					badgeClass: "badge inbox-badge bg-green-light hidden-mobile",
					badgeValue: "responsive"
				},
				{
					slug : "jqgrid",
					url: "jqgrid.html",
					title: "Jquery Grid"
				}
			]
		},
		{
			slug: "forms",
			parentLevel: true,
			url: "form-elements.html",
			hasIcon: true,
			iconClass: "fa fa-lg fa-fw fa-pencil-square-o",
			title: "Forms",
			subMenuClass: 'sa-sub-nav',
			hasSubMenu: true,
			subMenu: [
				/*{
					slug : "form-elements",
					url: "form-elements.html",
					title: "Smart Form Elements"
				},
				{
					slug : "form-templates",
					url: "form-templates.html",
					title: "Smart Form Layouts"
				},
				{
					slug : "validation",
					url: "validation.html",
					title: "Smart Form Validation"
				},*/
				{
					slug : "bootstrap-forms",
					url: "bootstrap-forms.html",
					title: "Bootstrap Form Elements"
				},
				{
					slug : "bootstrap-validator",
					url: "bootstrap-validator.html",
					title: "Bootstrap Form Validation"
				},
				{
					slug : "plugins",
					url: "plugins.html",
					title: "Form Plugins"
				},
				{
					slug : "wizard",
					url: "wizard.html",
					title: "Wizards"
				},
				{
					slug : "other-editors",
					url: "other-editors.html",
					title: "Bootstrap Editors"
				},
				{
					slug : "dropzone",
					url: "dropzone.html",
					title: "Dropzone"
				},
				{
					slug : "image-editor",
					url: "image-editor.html",
					title: "Image Cropping"
				}/*,
				{
					slug : "ckeditor",
					url: "ckeditor.html",
					title: "CK Editor"
				}*/
			]
		},
		{
			slug: "ui-elements",
			parentLevel: true,
			url: "javascript:void(0)",
			hasIcon: true,
			iconClass: "fa fa-lg fa-fw fa-desktop",
			title: "UI Elements",
			subMenuClass: 'sa-sub-nav',
			hasSubMenu: true,
			subMenu: [
				{
					slug : "general-elements",
					url: "general-elements.html",
					title: "General Elements"
				},
				{
					slug : "buttons",
					url: "buttons.html",
					title: "Buttons"
				},
				{
					slug : "icons",
					url: "fa.html",
					title: "Icons",
					subMenuClass: 'sa-sub-nav-second-level',
					hasSubMenu: true,
					subMenu: [
						{
							slug : "fa",
							url: "fa.html",
							title: "Font Awesome",
							hasIcon: true,
							iconClass: "fa fa-plane"
						}/*,
						{
							slug : "glyph",
							url: "glyph.html",
							title: "Glyph Icons",
							hasIcon: true,
							iconClass: "glyphicon glyphicon-plane"
						}*/,
						{
							slug : "flags",
							url: "flags.html",
							title: "Flags",
							hasIcon: true,
							iconClass: "fa fa-flag"
						}
					]
				},
				{
					slug : "grid",
					url: "grid.html",
					title: "Grid"
				},
				{
					slug : "treeview",
					url: "treeview.html",
					title: "Tree View"
				},
				{
					slug : "nestable-list",
					url: "nestable-list.html",
					title: "Nestable Lists"
				},
				{
					slug : "jqui",
					url: "jqui.html",
					title: "JQuery UI"
				},
				{
					slug : "typography",
					url: "typography.html",
					title: "Typography"
				},
				{
					url: "javascript:void(0)",
					title: "Six Level Menu",
					subMenuClass: 'sa-nav-third-level',
					hasSubMenu: true,
					subMenu: [
						{
							url: "javascript:void(0)",
							title: "Item #2",
							hasIcon: true,
							iconClass: "fa fa-fw fa-folder-open",
							subMenuClass: 'sa-nav-forth-level',
							hasSubMenu: true,
							subMenu: [
								{
									url: "javascript:void(0)",
									title: "Sub #2.1",
									hasIcon: true,
									iconClass: "fa fa-fw fa-folder-open",
									subMenuClass: 'sa-nav-fifth-level',
									hasSubMenu: true,
									subMenu: [
										{
											url: "javascript:void(0)",
											title: "Item #2.1.1",
											hasIcon: true,
											iconClass: "fa fa-fw fa-file-text"
										},
										{
											url: "javascript:void(0)",
											title: "Expand",
											hasIcon: true,
											iconClass: "fa fa-fw fa-file-text",
											hasSubMenu: true,
											subMenuClass: 'sa-nav-sixth-level',
											subMenu: [
												{
													url: "javascript:void(0)",
													title: "File",
													hasIcon: true,
													iconClass: "fa fa-fw fa-file-text"
												}
											]
										}
									]
								}
							]
						},
						{
							url: "glyph.html",
							title: "Item #3",
							hasIcon: true,
							iconClass: "fa fa-fw fa-folder-open",
							subMenuClass: 'sa-nav-forth-level',
							hasSubMenu: true,
							subMenu: [
								{
									url: "javascript:void(0)",
									title: "3ed Level",
									hasIcon: true,
									iconClass: "fa fa-fw fa-folder-open",
									subMenuClass: 'sa-nav-fifth-level',
									hasSubMenu: true,
									subMenu: [
										{
											url: "javascript:void(0)",
											title: "File",
											hasIcon: true,
											iconClass: "fa fa-fw fa-file-text"
										},
										{
											url: "javascript:void(0)",
											title: "File",
											hasIcon: true,
											iconClass: "fa fa-fw fa-file-text"
										}
									]
								}
							]
						},
						{
							url: "javascript:void(0)",
							inactive: true,
							inactiveClass: 'inactive',
							title: "Item #4 (disabled)",
							hasIcon: true,
							iconClass: "fa fa-fw fa-folder-open"
						}
					]
				}
			]
		},
		{
			slug: "widgets",
			parentLevel: true,
			url: "widgets.html",
			hasIcon: true,
			iconClass: "fa fa-lg fa-fw fa-list-alt",
			title: "Widgets"
		},
		{
			slug: "cool-features",
			parentLevel: true,
			url: "javascript:void(0)",
			hasIcon: true,
			iconClass: "fa fa-lg fa-fw fa-cloud",
			title: "Cool Features!",

			roundTop: true,
			roundContent: '3',
			roundClass: 'round-top',


			subMenuClass: 'sa-sub-nav',
			hasSubMenu: true,
			subMenu: [
				{
					slug : "calendar",
					url: "calendar.html",
					title: "Calendar",
					hasIcon: true,
					iconClass: "fa fa-lg fa-fw fa-calendar"
				},
				{
					slug : "gmap-xml",
					url: "gmap-xml.html",
					title: "GMap Skins",
					hasIcon: true,
					iconClass: "fa fa-lg fa-fw fa-map-marker",
					hasBadge: true,
					badgeClass: "badge bg-green-light pull-right inbox-badge",
					badgeValue: "9"
				}
			]
		},
		{
			slug: "app-views",
			parentLevel: true,
			url: "javascript:void(0)",
			hasIcon: true,
			iconClass: "fa fa-lg fa-fw fa-puzzle-piece",
			title: "App Views",
			subMenuClass: 'sa-sub-nav',
			hasSubMenu: true,
			subMenu: [
				{
					slug : "projects",
					url: "projects.html",
					title: "Projects",
					hasIcon: true,
					iconClass: "fa fa-file-text-o"
				},
				{
					slug : "blog",
					url: "blog.html",
					title: "Blog",
					hasIcon: true,
					iconClass: "fa fa-paragraph"
				},
				{
					slug : "gallery",
					url: "gallery.html",
					title: "Gallery",
					hasIcon: true,
					iconClass: "fa fa-picture-o"
				},
				{
					slug : "forum-layout",
					url: "javascript:void(0)",
					title: "Forum Layout",
					hasIcon: true,
					subMenuClass: "sa-nav-third-level",
					iconClass: "fa fa-comments",
					hasSubMenu: true,
					subMenu: [
						{
							slug : "forum",
							url: "forum.html",
							title: "General View"
						},
						{
							slug : "forum-topic",
							url: "forum-topic.html",
							title: "Topic View"
						},
						{
							slug : "forum-post",
							url: "forum-post.html",
							title: "Post View"
						}
					]
				},
				{
					slug : "profile",
					url: "profile.html",
					title: "Profile",
					hasIcon: true,
					iconClass: "fa fa-group"
				},
				{
					slug : "timeline",
					url: "timeline.html",
					title: "Timeline",
					hasIcon: true,
					iconClass: "fa fa-clock-o"
				},
				{
					slug : "search",
					url: "search.html",
					title: "Search Page",
					hasIcon: true,
					iconClass: "fa fa-search"
				}
			]
		},
		{
			slug: "e-commerce",
			parentLevel: true,
			url: "javascript:void(0)",
			hasIcon: true,
			iconClass: "fa fa-lg fa-fw fa-shopping-cart",
			title: "E-Commerce",
			subMenuClass: 'sa-sub-nav',
			hasSubMenu: true,
			subMenu: [
				{
					slug : "orders",
					url: "orders.html",
					title: "Orders"
				},
				{
					slug : "products-view",
					url: "products-view.html",
					title: "Products View"
				},
				{
					slug : "products-detail",
					url: "products-detail.html",
					title: "Products Detail"
				}
			]
		},
		{
			slug: "miscellaneous",
			parentLevel: true,
			url: "javascript:void(0)",
			hasIcon: true,
			iconClass: "fa fa-lg fa-fw fa-windows",
			title: "Miscellaneous",
			subMenuClass: 'sa-sub-nav',
			hasSubMenu: true,
			subMenu: [
				{
					slug : "landing-page",
					url: "../Landing_Page/",
					targetBlank: true,
					inlineIcon: true,
					inlineIconClass: "fa fa-external-link",
					title: "Landing Page",

				},
				{
					slug : "pricing-table",
					url: "pricing-table.html",
					title: "Pricing Tables"
				},
				{
					slug : "invoice",
					url: "invoice.html",
					title: "Invoice"
				},
				{
					slug : "login",
					url: "login.html",
					title: "Login"
				},
				{
					slug : "register",
					url: "register.html",
					title: "Register"
				},
				{
					slug : "forgotpassword",
					url: "forgotpassword.html",
					title: "Forgot Password"
				},
				{
					slug : "lock",
					url: "lock.html",
					title: "Locked Screen"
				},
				{
					slug : "error404",
					url: "error404.html",
					title: "Error 404"
				},
				{
					slug : "error500",
					url: "error500.html",
					title: "Error 500"
				},
				{
					slug : "blank",
					url: "blank.html",
					title: "Blank Page"
				}
			]
		},
		{
			slug: "smart-chat-api",
			parentLevel: true,
			url: "javascript:void(0)",
			title: "Smart Chat API",
			class: "chat-users top-menu-invisible",
			hasIcon: true,
			iconClass: "fa fa-lg fa-fw fa-comment-o",
			
			
			beta: true,
			betaText: "beta",

			roundTop: true,
			roundContent: '!',
			roundClass: 'bg-pink flash animated round-top',

			chatbox: true,				

			subMenuClass: 'chat-users-dropdown',
			chatboxSubMenu: true,
			subMenu: [
				{
					id: "cha1",
					fname: "Sadi",
					lname: "Orlaf",
					status: "busy",
					alertmsg: "Sadi Orlaf is in a meeting. Please do not disturb!",
					alershow: "true",
					rel: "popover-hover",
					placement: "right",
					contentImg: "assets/img/avatars/5.png",
					title: "Marketing Executive"
				},
				{
					id: "cha2",
					fname: "Jessica",
					lname: "Dolof",
					status: "online",
					alertmsg: "",
					alershow: "false",
					rel: "popover-hover",
					placement: "right",
					contentImg: "assets/img/avatars/1.png",
					title: "Sales Administrator"
				},
				{
					id: "cha3",
					fname: "Zekarburg",
					lname: "Almandalie",
					status: "online",
					alertmsg: "",
					alershow: "false",
					rel: "popover-hover",
					placement: "right",
					contentImg: "assets/img/avatars/3.png",
					title: "Sales Admin"
				},
				{
					id: "cha4",
					fname: "Barley",
					lname: "Krazurkth",
					status: "away",
					alertmsg: "",
					alershow: "false",
					rel: "popover-hover",
					placement: "right",
					contentImg: "assets/img/avatars/4.png",
					title: "Sales Director"
				},
				{
					id: "cha5",
					fname: "Farhana",
					lname: "Amrin",
					status: "incognito",
					offline: true,
					alertmsg: "",
					alershow: "false",
					rel: "popover-hover",
					placement: "right",
					contentImg: "assets/img/avatars/female.png",
					title: "Support Admin",
					contentIcon: true,
					contentIconClass: 'fa fa-music',
					contentSubCat: 'Playing Beethoven Classics'
				},
				{
					id: "cha6",
					fname: "Lezley",
					lname: "Jacob",
					status: "incognito",
					offline: true,
					alertmsg: "",
					alershow: "false",
					rel: "popover-hover",
					placement: "right",
					contentImg: "assets/img/avatars/male.png",
					title: "Sales Director"
				}
			]
		}
	]
}