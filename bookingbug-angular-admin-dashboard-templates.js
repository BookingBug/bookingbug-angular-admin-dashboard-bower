angular.module("BB").run(["$templateCache", function($templateCache) {$templateCache.put("admin_booking_edit.html","<div class=\"modal-header\">\n  <h3 class=\"modal-title\">{{title}}</h3>\n</div>\n<form name=\"modal_form\" ng-submit=\"submit(modal_form)\">\n  <div ng-show=\"loading\" class=\"loader\"></div>\n  <div class=\"modal-body\" sf-schema=\"schema\" sf-form=\"form\"\n    sf-model=\"form_model\" sf-options=\"{formDefaults: {feedback: false}}\"\n    ng-hide=\"loading\">\n  </div>\n  <div class=\"modal-footer\">\n    <button class=\"btn btn-default\" ng-click=\"cancelBooking(model)\">Cancel Booking</button>\n    <input type=\"submit\" class=\"btn btn-primary\" ng-disabled=\"loading\" value=\"OK\">\n    <button class=\"btn btn-default\" ng-click=\"cancel($event)\">Close</button>\n  </div>\n</form>");
$templateCache.put("calendar_date_picker.html","<p class=\"input-group datepicker\">\n  <input\n  	type=\"text\"\n  	uib-datepicker-popup=\"dd-MMMM-yyyy\"\n  	ng-model=\"currentDate\"\n    is-open=\"datePickerOpened\"\n    ng-focus=\'datePickerOpened=true\'\n    datepicker-options=\"{\'startingDay\': 1, \'showButtonBar\': false,\'showWeeks\': false}\"\n    show-button-bar=\"false\"\n    class=\"form-control\"\n    >\n  <span class=\"input-group-btn\">\n    <button type=\"button\" class=\"btn btn-default datepicker-popup\"\n      ng-click=\"openDatePicker($event)\">\n      <i class=\"glyphicon glyphicon-calendar\"></i>\n    </button>\n  </span>\n</p>\n");
$templateCache.put("dialog.html","<div class=\"modal-header\">\n  <h3 class=\"modal-title\">{{title}}</h3>\n	<button type=\"button\" class=\"close\" ng-click=\"cancel()\">&times;</button>\n</div>\n<div class=\"modal-body\">{{body}}</div>\n<div class=\"modal-footer\">\n  <button class=\"btn btn-primary pull-left\" ng-click=\"ok()\"><span translate=\"COMMON.BTN.YES\"></span></button>\n  <button class=\"btn btn-default\" ng-click=\"cancel()\"><span translate=\"COMMON.BTN.NO\"></span></button>\n</div>\n");
$templateCache.put("edit_block_modal_form.html","  <div class=\"modal-header\">\n    <button type=\"button\" class=\"close\" ng-click=\"cancel($event)\">&times;</button>\n    <h3 class=\"modal-title\">{{title}}</h3>\n  </div>\n  <form name=\"modal_form\" ng-submit=\"submit(modal_form)\">\n    <div ng-show=\"loading\" class=\"loader\"></div>\n    <div class=\"modal-body\" sf-schema=\"schema\" sf-form=\"form\"\n      sf-model=\"form_model\" sf-options=\"{formDefaults: {feedback: false}}\"\n      ng-hide=\"loading\">\n    </div>\n    <div class=\"modal-footer\">\n      <button class=\"btn btn-danger pull-left\"\n        ng-click=\"cancelEvent($event,\'block\')\">Cancel Block</button>\n      <input type=\"submit\" class=\"btn btn-primary\" ng-disabled=\"loading\"\n      value=\"Save Block\">\n    </div>\n  </form>\n");
$templateCache.put("edit_booking_modal_form.html","  <div class=\"modal-header\">\n    <button type=\"button\" class=\"close\" ng-click=\"cancel($event)\">&times;</button>\n    <h3 class=\"modal-title\">{{title}}</h3>\n  </div>\n  <form name=\"modal_form\" ng-submit=\"submit(modal_form)\">\n    <div ng-show=\"loading\" class=\"loader\"></div>\n    <div class=\"modal-body\" sf-schema=\"schema\" sf-form=\"form\"\n      sf-model=\"form_model\" sf-options=\"{formDefaults: {feedback: false}}\"\n      ng-hide=\"loading\">\n    </div>\n    <div class=\"modal-footer\">\n      <button class=\"btn btn-danger pull-left\"\n        ng-click=\"cancelEvent($event)\">Cancel Booking</button>\n      <button class=\"btn btn-caution pull-left\"\n        ng-click=\"success(\'move\')\">Move Booking</button>\n      <button class=\"btn btn-caution pull-left\" ng-mouseup=\"cancel($event)\"\n        ui-sref=\"clients.edit({id: form_model.client_id})\">Edit Client</button>\n      <input type=\"submit\" class=\"btn btn-primary\" ng-disabled=\"loading\"\n      value=\"Save Booking\">\n      <!-- <button class=\"btn btn-default\" ng-click=\"cancel($event)\">Close</button> -->\n    </div>\n  </form>\n");
$templateCache.put("calendar/index.html","<div ui-view></div>\n");
$templateCache.put("calendar/nav.html","<ul class=\"sidebar-menu\"  ng-if=\"bb.company.$has(\'people\') && !bb.company.$has(\'resources\')\">\n	<li ng-class=\"{active: isState(\'calendar\')}\"><a ui-sref=\"calendar.people\"><i class=\"fa fa-calendar\"></i> <span translate=\"ADMIN_DASHBOARD.SIDE_NAV.CALENDAR_PAGE.CALENDAR\"></span></a></li>\n</ul>\n\n<ul class=\"sidebar-menu\"  ng-if=\"!bb.company.$has(\'people\') && bb.company.$has(\'resources\')\">\n  <li ng-class=\"{active: isState(\'calendar\')}\"><a ui-sref=\"calendar.resources\"><i class=\"fa fa-calendar\"></i> <span translate=\"ADMIN_DASHBOARD.SIDE_NAV.CALENDAR_PAGE.CALENDAR\"></span></a></li>\n</ul>\n\n\n<ul class=\"sidebar-menu\" ng-if=\"bb.company.$has(\'people\') && bb.company.$has(\'resources\')\">\n  <li ng-class=\"{active: isState(\'calendar\')}\">\n    <a ui-sref=\"calendar\" ui-sref-opts=\"{reload: true}\"><i class=\"fa fa-calendar\"></i> <span translate=\"ADMIN_DASHBOARD.SIDE_NAV.CALENDAR_PAGE.CALENDAR\"></span></a>\n    <ul class=\"treeview-menu\">\n      <li ui-sref-active=\"active\"><a ui-sref=\"calendar.people\"><i class=\"fa fa-users\"></i> <span translate=\"ADMIN_DASHBOARD.SIDE_NAV.CALENDAR_PAGE.PEOPLE\"></span></a></li>\n      <li ui-sref-active=\"active\"><a ui-sref=\"calendar.resources\"><i class=\"fa fa-home\"></i> <span translate=\"ADMIN_DASHBOARD.SIDE_NAV.CALENDAR_PAGE.RESOURCES\"></span></a></li>\n    </ul>\n  </li>\n</ul>\n");
$templateCache.put("calendar/people.html","<section class=\"content\">\n    <div class=\"box\">\n        <div class=\"box-body\">\n             <div bb-resource-calendar=\'{\"min_time\": \"08:00\", \"max_time\": \"19:00\", \"cal_slot_duration\": 15, \"type\": \"person\"}\'></div>\n        </div>\n    </div>\n</section>");
$templateCache.put("calendar/resource-calendar.html","<div>\n	<div class=\"form-inline calendar-filters\" ng-if=\"!model\">\n		<div class=\"form-group\">\n			<label><span translate=\"ADMIN_DASHBOARD.CALENDAR_PAGE.SHOW\"></span>&nbsp;&nbsp;</label>\n			<toggle-switch\n				ng-change=\"changeSelectedResources()\"\n		    ng-model=\"showAll\"\n		    on-label=\"{{\'ADMIN_DASHBOARD.CALENDAR_PAGE.ALL\' | translate}}\"\n		    off-label=\"{{\'ADMIN_DASHBOARD.CALENDAR_PAGE.SOME\' | translate}}\"\n		    class=\"switch-primary\">\n		  </toggle-switch>\n		</div>\n		<div class=\"form-group\" ng-hide=\"showAll\">\n			<ui-select multiple ng-model=\"selectedResources.selected\" ng-change=\"changeSelectedResources()\" theme=\"bootstrap\" close-on-select=\"true\" title=\"Choose a person\" style=\"min-width: 300px;\">\n			  <ui-select-match placeholder=\"{{\'ADMIN_DASHBOARD.CALENDAR_PAGE.SELECT_STAFF_RESOURCES\' | translate}}\">{{$item.name}}</ui-select-match>\n			  <ui-select-choices repeat=\"asset in assets | props: {name: $select.search, email: $select.search}\">\n			    <div ng-bind-html=\"asset.name | highlight: $select.search\"></div>\n			    <small ng-show=\"asset.email\">\n			      <span translate=\"ADMIN_DASHBOARD.CALENDAR_PAGE.EMAIL\"></span>: {{asset.email}}\n			    </small>\n			  </ui-select-choices>\n			</ui-select>\n		</div>\n		<div class=\"form-group\" ng-show=\"loading || calendarLoading\"><i class=\"fa fa-refresh fa-spin\"></i></div>\n	  <!--<button bb-new-booking type=\"button\" class=\"btn btn-primary pull-right\"\n      ng-click=\"newBooking()\" bb-debounce=\"\" translate=\"ADMIN_DASHBOARD.CALENDAR_PAGE.ADD_BOOKING\"></button>-->\n	</div>\n\n	<div id=\"uicalendar\" ui-calendar=\"uiCalOptions.calendar\" ng-model=\"eventSources\"\n	  ng-if=\"eventSources\" calendar=\"resourceCalendar\"\n	  class=\"resource-calendar\"></div>\n</div>\n");
$templateCache.put("calendar/resources.html","<section class=\"content\">\n    <div class=\"box\">\n        <div class=\"box-body\"> \n             <div bb-resource-calendar=\'{\"min_time\": \"08:00\", \"max_time\": \"19:00\", \"cal_slot_duration\": 15, \"type\": \"resource\"}\'></div>\n        </div>\n    </div>\n</section>");
$templateCache.put("check-in/checkin-table.html","  <div class=\"panel\">\n    <table class=\"table table-bordered table-hover dataTable\" tr-ng-grid=\"\"\n        items=\"bookings\" page-items=\"per_page\" total-items=\"total_entries\" enable-filtering=\"false\"\n        on-data-required=\"getAppointments(currentPage, filterBy, filterByFields, orderBy, orderByReverse)\" role=\"grid\">\n      <thead>\n        <tr role=\"row\">\n          <th field-name=\"icon\" display-name=\"-\" enable-sorting=\"false\" width=\"10\"></th>\n          <th field-name=\"client_name\" display-name=\"{{\'ADMIN_DASHBOARD.CHECK_IN_PAGE.CUSTOMER\' | translate}}\" enable-sorting=\"true\"></th>\n          <th field-name=\"person_name\" display-name=\"{{\'ADMIN_DASHBOARD.CHECK_IN_PAGE.STAFF_MEMBER\' | translate}}\" enable-sorting=\"true\"></th>\n          <th field-name=\"datetime\" display-name=\"{{\'ADMIN_DASHBOARD.CHECK_IN_PAGE.DUE\' | translate}}\" enable-sorting=\"true\"></th>\n\n          <th><div class=\"tr-ng-title\"><span translate=\"ADMIN_DASHBOARD.CHECK_IN_PAGE.NO_SHOW\"></span></div></th>\n          <th><div class=\"tr-ng-title\"><span translate=\"ADMIN_DASHBOARD.CHECK_IN_PAGE.ARRIVED\"></span></div></th>\n          <th><div class=\"tr-ng-title\"><span translate=\"ADMIN_DASHBOARD.CHECK_IN_PAGE.BEEING_SEEN\"></span></div></th>\n          <th><div class=\"tr-ng-title\"><span translate=\"ADMIN_DASHBOARD.CHECK_IN_PAGE.COMPLETED\"></span></div></th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr role=\"row\" class=\"{{bmap[gridItem].className}}\" >\n          <td field-name=\"icon\" display-align=\"center\">\n            <div class=\"text-center\"><a ng-click=\"edit(bmap[gridItem])\"><i class=\"fa fa-calendar\"></i></a></div>\n          </td>\n          <td field-name=\"client_name\">\n            <a ui-sref=\"clients.edit({id: bmap[gridItem].client_id})\">{{bmap[gridItem].client_name}}</a>\n          </td>\n          <td field-name=\"person_name\">\n            <span>{{bmap[gridItem].person_name}}</span>\n          </td>\n          <td field-name=\"datetime\">\n            <span>{{bmap[gridItem].datetime.format(\"LT\")}}</span>\n          </td>\n          <td>\n            <span ng-if=\"bmap[gridItem].hasStatus(\'no_show\')\">\n              <i class=\"fa fa-check-square\"></i> {{bmap[gridItem].statusTime(\"no_show\").format(\"LT\")}}\n            </span>\n            <span ng-if=\"!bmap[gridItem].hasStatus(\'no_show\') && !bmap[gridItem].hasStatus(\'checked_in\')\">\n              <button ng-click=\"setStatus(bmap[gridItem], \'no_show\')\" class=\"btn btn-default btn-xs btn-block\">\n                <i class=\"fa fa-square-o\"></i>\n                <span translate=\"ADMIN_DASHBOARD.CHECK_IN_PAGE.NO_SHOW_BUTTON\"></span>\n              </button>\n            </span>\n          </td>\n          <td>\n            <span ng-if=\"bmap[gridItem].hasStatus(\'checked_in\')\">\n              <i class=\"fa fa-check-square\"></i> {{bmap[gridItem].statusTime(\"checked_in\").format(\"LT\")}}\n            </span>\n            <span ng-if=\"!bmap[gridItem].hasStatus(\'checked_in\')\">\n              <button ng-click=\"setStatus(bmap[gridItem], \'checked_in\')\" class=\"btn btn-default btn-xs btn-block\">\n                <i class=\"fa fa-square-o\"></i>\n                <span translate=\"ADMIN_DASHBOARD.CHECK_IN_PAGE.CHECK_IN_BUTTON\"></span>\n              </button>\n            </span>\n          </td>\n          <td>\n            <span ng-if=\"bmap[gridItem].hasStatus(\'being_seen\')\">\n              <i class=\"fa fa-check-square\"></i> {{bmap[gridItem].statusTime(\"being_seen\").format(\"LT\")}}\n            </span>\n            <span ng-if=\"!bmap[gridItem].hasStatus(\'being_seen\') && !bmap[gridItem].hasStatus(\'checked_in\') && bmap[gridItem].sinceStart() > 0\" ng-class=\"bmap[gridItem].sinceStart() | gar:1000:10000\">\n               <span translate translate-values=\"{period: \'{{ bmap[gridItem].sinceStart() | time_period }}\'}\">ADMIN_DASHBOARD.CHECK_IN_PAGE.WAS_DUE</span>\n            </span>\n            <span ng-if=\"!bmap[gridItem].hasStatus(\'being_seen\') && bmap[gridItem].hasStatus(\'checked_in\')\">\n              <button ng-click=\"setStatus(bmap[gridItem], \'being_seen\')\" class=\"btn btn-default btn-xs pull-right\">\n                <i class=\"fa fa-square\"></i>\n                <span translate=\"ADMIN_DASHBOARD.CHECK_IN_PAGE.SERVE\"></span>\n              </button>\n              <span ng-class=\"bmap[gridItem].sinceStatus(\'checked_in\') | gar:1000:10000\" > <i class=\"fa fa-check-square\"></i> <span translate translate-values=\"{period: \'{{bmap[gridItem].sinceStatus(\'checked_in\') | time_period}}\'}\">ADMIN_DASHBOARD.CHECK_IN_PAGE.WAITING_FOR</span></span>\n            </span>\n          </td>\n\n          <td>\n            <span ng-if=\"bmap[gridItem].hasStatus(\'completed\')\">\n              <i class=\"fa fa-check-square\"></i> {{bmap[gridItem].statusTime(\"completed\").format(\"LT\")}}\n            </span>\n            <span ng-if=\"!bmap[gridItem].hasStatus(\'completed\') && bmap[gridItem].hasStatus(\'being_seen\')\">\n              <span ng-class=\"bmap[gridItem].sinceStatus(\'being_seen\') | gar:100:10\" > <span translate translate-values=\"{period: \'{{bmap[gridItem].sinceStatus(\'being_seen\') | time_period}}\'}\">ADMIN_DASHBOARD.CHECK_IN_PAGE.BEING_SEEN_FOR</span> </span><br/>\n              <button ng-click=\"setStatus(bmap[gridItem], \'completed\')\" class=\"btn btn-default\"><span translate=\"ADMIN_DASHBOARD.CHECK_IN_PAGE.COMPLETED_BUTTON\"></span></button>\n            </span>\n          </td>\n        </tr>\n      </tbody>\n      <tfoot>\n        <tr>\n            <td>\n                <span tr-ng-grid-pager=\"\"></span>\n            </td>\n        </tr>\n      </tfoot>\n      </table>\n  </div>\n");
$templateCache.put("check-in/index.html","<section class=\"content-header\">\n  <h1 translate=\"ADMIN_DASHBOARD.CHECK_IN_PAGE.CHECK_IN\"></h1>\n  <button bb-add-walkin=\"\" class=\"breadcrumb btn btn-primary ng-scope\" ng-click=\"walkIn()\" translate=\"ADMIN_DASHBOARD.CHECK_IN_PAGE.WALK_IN\"></button>\n</section>\n<section class=\"content\">\n  <div class=\"box\">\n    <div class=\"tablet-checkin\" bb-checkin-table></div>\n  </div>\n</section>\n");
$templateCache.put("check-in/nav.html","<ul class=\"sidebar-menu\">\n	<li ng-class=\"{active: isState(\'checkin\')}\"><a ui-sref=\"checkin\"><i class=\"fa fa-calendar-check-o\"></i> <span translate=\"ADMIN_DASHBOARD.SIDE_NAV.CHECK_IN_PAGE.CHECK_IN\"></span></a></li>\n</ul>\n");
$templateCache.put("clients/index.html","<div ui-view></div>");
$templateCache.put("clients/item.html","<section class=\"content-header\">\n  <h3>\n      <a ui-sref=\"clients.all\" translate=\"ADMIN_DASHBOARD.CLIENTS_PAGE.CLIENTS\"></a> <i class=\"fa fa-chevron-right\"></i> {{client.name}}\n  </h3>\n</section>\n<section class=\"content\">\n  <div class=\"row\">\n    <div class=\"col-md-3\">\n      <!-- Profile Image -->\n      <div class=\"box box-primary\">\n        <div class=\"box-body box-profile\">\n\n          <h4 class=\"profile-username text-center\">{{client.first_name}}</h4>\n\n          <p class=\"text-muted text-center\">\n            <span ng-bind-html=\"(client.email || \'empty\') | linky\"></span>\n          </p>\n\n          <table class=\"table table-striped\">\n            <tr ng-if=\"client.mobile\">\n              <td><b translate=\"ADMIN_DASHBOARD.CLIENTS_PAGE.MOBILE\"></b></td>\n              <td><a class=\"pull-right\" ng-href=\"tel:{{client.mobile}}\" target=_blank>{{client.fullMobile()}}</a></td>\n            </tr>\n            <tr ng-if=\"client.phone\">\n              <td><b translate=\"ADMIN_DASHBOARD.CLIENTS_PAGE.PHONE\"></b></td>\n              <td><a class=\"pull-right\"  ng-href=\"tel:{{client.phone}}\" target=_blank>{{client.phone}}</a></td>\n            </tr>\n          </table>\n\n          <div ng-if=\"client.addressMultiLine()\">\n            <strong><i class=\"fa fa-map-marker margin-r-5\"></i> <b translate=\"ADMIN_DASHBOARD.CLIENTS_PAGE.ADDRESS\"></b></strong>\n            <p class=\"text-muted\">\n              <span ng-bind-html=\"client.addressMultiLine()\">\n              <br clear=\'all\'/>\n            </p>\n            <hr/>\n          </div>\n\n        </div>\n        <!-- /.box-body -->\n      </div>\n      <!-- /.box -->\n    </div>\n    <div class=\"col-md-9\">\n\n      <uib-tabset class=\"bb-tabs nav-tabs-custom\">\n\n        <uib-tab id=\"client-upcoming-booking-tab\">\n          <uib-tab-heading translate=\"ADMIN_DASHBOARD.CLIENTS_PAGE.UPCOMING_BOOKINGS\">\n\n          </uib-tab-heading>\n\n          <div bb-admin-member-bookings-table period=\"future\" member=\"client\"></div>\n\n        </uib-tab>\n\n        <uib-tab  id=\"client-past-booking-tab\">\n          <uib-tab-heading translate=\"ADMIN_DASHBOARD.CLIENTS_PAGE.PAST_BOOKINGS\">\n\n          </uib-tab-heading>\n\n          <div bb-admin-member-bookings-table member=\"client\" period=\"past\"\n            start-date=\"historicalStartDate\"\n            end-date=\"historicalEndDate\"></div>\n\n        </uib-tab>\n\n        <uib-tab id=\"client-details-tab\" >\n          <uib-tab-heading translate=\"ADMIN_DASHBOARD.CLIENTS_PAGE.CUSTOMER_DETAILS\">\n\n          </uib-tab-heading>\n\n          <div member-form member=\"client\" on-success-save=\"memberSaveCallback\"></div>\n\n        </uib-tab>\n\n\n      </uib-tabset>\n\n    </div>\n  </div>\n</section>");
$templateCache.put("clients/listing.html","<section class=\"content-header\">\n  <h1 translate=\"ADMIN_DASHBOARD.CLIENTS_PAGE.CLIENTS\"></h1>\n</section>\n<section class=\"content\">\n  <div class=\"box\">\n    <div bb-clients-table class=\"tablet-search\">\n      <table class=\"table table-bordered table-hover dataTable\" tr-ng-grid=\"\"\n         filter-by=\"clientsOptions.search\" items=\"clients\" page-items=\"per_page\" total-items=\"total_entries\" on-data-required=\"getClients(currentPage, filterBy, filterByFields, orderBy, orderByReverse)\" role=\"grid\">\n        <thead>\n          <tr role=\"row\">\n            <th field-name=\"name\" enable-filtering display-name=\"{{\'ADMIN_DASHBOARD.CLIENTS_PAGE.NAME\' | translate}}\"></th>\n            <th field-name=\"email\" enable-filtering display-name=\"{{\'ADMIN_DASHBOARD.CLIENTS_PAGE.EMAIL\' | translate}}\"></th>\n            <th field-name=\"mobile\" enable-filtering display-name=\"{{\'ADMIN_DASHBOARD.CLIENTS_PAGE.MOBILE\' | translate}}\"></th>\n            <th width=\"60\" display-align=\"center\"><div class=\"tr-ng-title\"><span translate=\"ADMIN_DASHBOARD.CLIENTS_PAGE.ACTIONS\"></span></div></th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr role=\"row\">\n            <td field-name=\"name\">\n              <a ui-sref=\"clients.edit({id: gridItem.id})\">{{gridItem.name}}</a>\n            </td>\n            <td field-name=\"email\" ng-bind-html=\"gridItem.email | linky\" />\n            <td field-name=\"mobile\"></td>\n            <td display-align=\"center\">\n              <a class=\"btn btn-xs btn-default\" ui-sref=\"clients.edit({id: gridItem.id})\"><i class=\"fa fa-pencil\"></i> <span translate=\"ADMIN_DASHBOARD.CLIENTS_PAGE.EDIT\"></span></a>\n            </td>\n          </tr>\n        </tbody>\n        <tfoot>\n          <tr>\n              <td>\n                  <span tr-ng-grid-global-filter=\"\"></span>\n                  <span tr-ng-grid-pager=\"\"></span>\n              </td>\n          </tr>\n        </tfoot>\n      </table>\n    </div>\n  </div>\n</div>\n");
$templateCache.put("clients/nav.html","<ul class=\"sidebar-menu\">\n	<li ng-class=\"{active: isState(\'clients\')}\"><a ui-sref=\"clients.all\"><i class=\"fa fa-users\"></i> <span translate=\"ADMIN_DASHBOARD.SIDE_NAV.CLIENTS_PAGE.CLIENTS\"></span></a></li>\n</ul>\n");
$templateCache.put("config-iframe/index.html","<div ui-view></div>");
$templateCache.put("config-iframe/nav.html","<ul class=\"sidebar-menu\">\n	<li ng-class=\"{active: isState(\'config\')}\">\n		<a ui-sref=\"config\"><i class=\"fa fa-cogs\"></i> <span translate=\"ADMIN_DASHBOARD.SIDE_NAV.CONFIG_IFRAME_PAGE.CONFIG\"></span></a>\n		<ul class=\"treeview-menu\">\n			<li ui-sref-active=\"active\"><a ui-sref=\"config.business\"><i class=\"fa fa-home\"></i> <span translate=\"ADMIN_DASHBOARD.SIDE_NAV.CONFIG_IFRAME_PAGE.YOUR_BUSINESS\"></span></a></li>\n			<li ui-sref-active=\"active\"><a ui-sref=\"config.event-settings\"><i class=\"fa fa-ticket\"></i> <span translate=\"ADMIN_DASHBOARD.SIDE_NAV.CONFIG_IFRAME_PAGE.EVENT_SETTINGS\"></span></a></li>\n			<li ui-sref-active=\"active\"><a ui-sref=\"config.promotions\"><i class=\"fa fa-tags\"></i> <span translate=\"ADMIN_DASHBOARD.SIDE_NAV.CONFIG_IFRAME_PAGE.PROMOTIONS\"></span></a></li>\n			<li ui-sref-active=\"active\"><a ui-sref=\"config.booking-settings\"><i class=\"fa fa-book\"></i> <span translate=\"ADMIN_DASHBOARD.SIDE_NAV.CONFIG_IFRAME_PAGE.BOOKING_SETTINGS\"></span></a></li>\n    </ul>\n	</li>\n</ul>\n");
$templateCache.put("core/admin-iframe.html","<iframe class=\"bb-page-frame\" style=\"width:100%; border: none; display:none;\" frameborder=\"0\"\n    seamless=\"seamless\" scrolling=\"no\" ng-src=\"{{frameSrc}}\"\n    allowtransparency=\"true\" onload=\"this.style.display = \'block\';\">\n</iframe>");
$templateCache.put("core/admin-side-nav.html","<div ng-repeat=\"group in navigation\">\n	<ul class=\"sidebar-menu\" ng-if=\"group.group_name\">\n		<li class=\"header\" translate=\"{{group.group_name}}\"></li>\n	</ul>\n	<div ng-repeat=\"partialNav in group.items\" ng-include=\"partialNav.navPartial\"></div>\n</div>");
$templateCache.put("core/boxed-iframe-page.html","<section class=\"content-header\" ng-if=\"pageHeader\">\n  <h1>{{pageHeader}}</h1>\n</section>\n<section class=\"content\">\n	<div class=\"box\">\n		<div class=\"box-body\">\n			<div class=\"loading-indicator pull-right\" ng-show=\"loading\"><i class=\"fa fa-spin fa-refresh\"></i></div>\n			<div admin-iframe path=\"path\" on-load=\"onIframeLoad\" full-height=\"fullHeight\" api-url=\"bb.api_url\" extra-params=\"extra_params\"></div>\n		</div>\n	</div>\n</section>");
$templateCache.put("core/iframe-page.html","<section class=\"content-header\" ng-if=\"pageHeader\">\n  <h1>{{pageHeader}}</h1>\n</section>\n<section class=\"content\">\n	<div admin-iframe path=\"path\" on-load=\"onIframeLoad\" full-height=\"fullHeight\" api-url=\"bb.api_url\" extra-params=\"extra_params\"></div>\n</section>");
$templateCache.put("core/layout.html","<!-- Site wrapper -->\n<div class=\"wrapper\">\n    <header class=\"main-header\">\n        <a ui-sref=\"admin.dashboard\" class=\"logo\"></a>\n        <!-- Header Navbar: style can be found in header.less -->\n        <nav class=\"navbar navbar-static-top\" role=\"navigation\">\n            <!-- Sidebar toggle button-->\n            <a class=\"sidebar-toggle\" ng-if=\"!page.hideSideMenuControl\" ng-class=\"{off: page.sideMenuOn}\" ng-click=\"page.sideMenuOn = !page.sideMenuOn\" role=\"button\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </a>\n\n            <div class=\"navbar-custom-menu\">\n                <ul class=\"nav navbar-nav\">\n                    <!-- User Account: style can be found in dropdown.less -->\n                    <li class=\"dropdown\" uib-dropdown is-open=\"isopen\">\n                        <a href class=\"dropdown-toggle\" uib-dropdown-toggle>\n                            <span class=\"hidden-xs\">&nbsp;<span translate=\"ADMIN_DASHBOARD.CORE.GREETING\"></span>, {{user.name}} <span class=\"caret\"></span></span>\n                        </a>\n                        <ul class=\"dropdown-menu user-dropdown\" uib-dropdown-menu role=\"menu\">\n                            <li><a ui-sref=\"logout\" class=\"btn btn-default btn-sm btn-block\"><i class=\"fa fa-lock\"></i> <span translate=\"ADMIN_DASHBOARD.CORE.LOGOUT\"></span></a></li>\n                            <li><a bb-classic-switch  class=\"btn btn-default btn-sm btn-block\"><i class=\"fa fa-home\"></i> <span translate=\"ADMIN_DASHBOARD.CORE.SWITCH_TO_CLASSIC\"></span></a></li>\n                        </ul>\n                    </li>\n                    <li>\n                        <span class=\"language-picker\" bb-language-picker></span>\n                    </li>\n                    <li ng-if=\"!page.hideBoxedLayoutControl\">\n                        <a href ng-click=\"page.boxed = !page.boxed\" class=\"visible-lg-inline-block\">\n                            <span ng-show=\"!page.boxed\" class=\"glyphicon glyphicon-resize-small\"></span>\n                            <span ng-show=\"page.boxed\" class=\"glyphicon glyphicon-resize-full\"></span>\n                        </a>\n                    </li>\n                </ul>\n            </div>\n        </nav>\n    </header>\n\n    <!-- =============================================== -->\n\n    <!-- Left side column. contains the sidebar -->\n    <aside class=\"main-sidebar\" ng-scrollable=\"{scrollX:\'none\',scrollY:\'right\'}\" content-height include-header=\"false\" include-footer=\"false\">\n        <!-- sidebar: style can be found in sidebar.less -->\n        <section class=\"sidebar\" admin-side-nav></section>\n        <!-- /.sidebar -->\n    </aside>\n\n    <!-- =============================================== -->\n\n    <!-- Content Wrapper. Contains page content -->\n    <div class=\"content-wrapper\" id=\"content-wrapper\" content-height>\n        <div ui-view class=\"animated\"></div>\n    </div><!-- /.content-wrapper -->\n\n    <footer class=\"main-footer\">\n        <div class=\"pull-right hidden-xs\">\n            <b translate=\"ADMIN_DASHBOARD.CORE.VERSION\"></b> 2.0\n        </div>\n        <strong><span translate=\"ADMIN_DASHBOARD.CORE.COPYRIGHT\"></span> &copy; 2016 <a href=\"http://bookingbug.com\" target=\"_blank\">BookingBug</a>.</strong>\n    </footer>\n</div><!-- ./wrapper -->");
$templateCache.put("core/tabbed-substates-page.html","<section class=\"content-header\" ng-if=\"pageHeader\">\n  <h1 translate=\"{{pageHeader}}\"></h1>\n</section>\n<section class=\"content\">\n\n	<div class=\"nav-tabs-custom\">\n    <ul class=\"nav nav-tabs\">\n      <li ng-repeat=\"tab in tabs\" ui-sref-active=\"active\" class=\"active\"><a ui-sref=\"{{tab.path}}\" data-toggle=\"tab\" aria-expanded=\"true\"><i ng-if=\"tab.icon\" ng-class=\"[tab.icon]\"></i> <span translate=\"{{tab.name}}\"></span></a></li>\n      <li ng-show=\"contentsLoading\" class=\"pull-right\"><a><i class=\"fa fa-refresh fa-spin\"></i></a></li>\n    </ul>\n    <div class=\"tab-content\">\n      <div class=\"tab-pane active\">\n        <div class=\"ui-view\"></div>\n      </div>\n    </div>\n  </div>\n\n</section>");
$templateCache.put("dashboard-iframe/index.html","<div ui-view></div>");
$templateCache.put("dashboard-iframe/nav.html","<ul class=\"sidebar-menu\">\n	<li ng-class=\"{active: isState(\'dashboard\')}\">\n		<a ui-sref=\"dashboard\"><i class=\"fa fa-calendar\"></i> <span translate=\"ADMIN_DASHBOARD.SIDE_NAV.DASHBOARD_IFRAME_PAGE.DASHBOARD\"></span></a>\n		<ul class=\"treeview-menu\">\n			<li ui-sref-active=\"active\"><a ui-sref=\"dashboard.page({path: \'view/dashboard/index\', fixed:true})\"><i class=\"fa fa-calendar\"></i> <span translate=\"ADMIN_DASHBOARD.SIDE_NAV.DASHBOARD_IFRAME_PAGE.DASHBOARD\"></span></a></li>\n	    <li ui-sref-active=\"active\"><a ui-sref=\"dashboard.page({path: \'space/activity\'})\"><i class=\"fa fa-hand-o-right\"></i> <span translate=\"ADMIN_DASHBOARD.SIDE_NAV.DASHBOARD_IFRAME_PAGE.UPCOMING_RECENT\"></span></a></li>\n	    <li ui-sref-active=\"active\"><a ui-sref=\"dashboard.page({path: \'view/search\'})\"><i class=\"fa fa-search\"></i> <span translate=\"ADMIN_DASHBOARD.SIDE_NAV.DASHBOARD_IFRAME_PAGE.SEARCH\"></span></a></li>\n	    <li ui-sref-active=\"active\"><a ui-sref=\"dashboard.page({path: \'view/repeat_booking/all\'})\"><i class=\"fa fa-repeat\"></i> <span translate=\"ADMIN_DASHBOARD.SIDE_NAV.DASHBOARD_IFRAME_PAGE.BULK_BOOKINGS\"></span></a></li>\n	    <li ui-sref-active=\"active\"><a ui-sref=\"dashboard.page({path: \'view/reports\'})\"><i class=\"fa fa-line-chart\"></i> <span translate=\"ADMIN_DASHBOARD.SIDE_NAV.DASHBOARD_IFRAME_PAGE.INSIGHTS\"></span></a></li>\n    </ul>\n	</li>\n</ul>\n");
$templateCache.put("login/admin-dashboard-login.html","<div class=\"loginWrapper\">\n    <div class=\"inner row\">\n        <div class=\"col-md-4 col-md-offset-4\" ng-show=\"template_vars.show_login\">\n            <form name=\"loginForm\" ng-model=\"loginForm\" ng-submit=\"login(loginForm.$valid)\">\n                <div class=\"login-logo-container\">\n                    <span class=\"login-logo\"></span>\n                </div>\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-heading\">\n                        <h3 class=\"panel-title\"><i ng-show=\"template_vars.show_loading\" class=\"pull-right fa fa-circle-o-notch\" ng-class=\"{\'fa-spin\': template_vars.show_loading}\"></i><span translate=\"ADMIN_DASHBOARD.LOGIN_PAGE.HEADING\"></span></h3>\n                    </div>\n                    <div class=\"panel-body\">\n                        <div uib-alert ng-repeat=\"alert in formErrors\" class=\"alert-danger\" close=\"formErrors.splice($index, 1)\"><span translate=\"{{alert.message}}\"></span></div>\n                        <div class=\"form-group\" ng-show=\"template_vars.show_api_field\">\n                            <label for=\"site\"><span translate=\"ADMIN_DASHBOARD.LOGIN_PAGE.SITE\"></span></label>\n                            <input type=\"text\" name=\"site\" ng-model=\"login.site\" ng-required=\"template_vars.show_api_field\" class=\"form-control\" id=\"site\" placeholder=\"www.bookingbug.com\">\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"username\"><span translate=\"ADMIN_DASHBOARD.LOGIN_PAGE.USERNAME\"></span></label>\n                            <input type=\"text\" name=\"username\" ng-model=\"login.email\" required=\"required\" class=\"form-control\" id=\"username\">\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"password\"><span translate=\"ADMIN_DASHBOARD.LOGIN_PAGE.PASSWORD\"></span></label>\n                            <input type=\"password\" name=\"password\" ng-model=\"login.password\" required=\"required\" class=\"form-control\" id=\"password\">\n                        </div>\n                        <!-- <div class=\"form-group\">\n                            <a class=\"\"><span translate=\"ADMIN_DASHBOARD.LOGIN_PAGE.FORGOT_PASSWORD\"></span></a>\n                        </div> -->\n                    </div>\n                    <div class=\"panel-footer\">\n                        <button type=\"submit\" class=\"btn btn-primary btn-lg btn-block\" ng-disabled=\"template_vars.show_loading\"><i class=\"fa fa-unlock\"></i><span translate=\"ADMIN_DASHBOARD.LOGIN_PAGE.LOGIN\"></span></button>\n                    </div>\n                </div>\n            </form>\n        </div>\n\n        <div class=\"col-md-4 col-md-offset-4\" ng-show=\"template_vars.show_pick_company || template_vars.show_pick_department\">\n\n            <form name=\"pick_company_form\" ng-model=\"pick_company_form\" ng-submit=\"selectCompanyDepartment(pick_company_form.$valid)\">\n                <div class=\"login-logo-container\">\n                    <span class=\"login-logo\"></span>\n                </div>\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-heading\">\n                        <h3 class=\"panel-title\"><i ng-show=\"template_vars.show_loading\" class=\"pull-right fa fa-circle-o-notch\" ng-class=\"{\'fa-spin\': template_vars.show_loading}\"></i><span translate=\"ADMIN_DASHBOARD.LOGIN_PAGE.SELECT_COMPANY\"></span></h3>\n                    </div>\n                    <div class=\"panel-body\">\n                        <div class=\"form-group\" ng-show=\"template_vars.show_pick_company\">\n                            <label for=\"company\"><span translate=\"ADMIN_DASHBOARD.LOGIN_PAGE.COMPANIES\"></span></label>\n                            <ui-select ng-model=\"login.selected_admin\" theme=\"bootstrap\" ng-change=\"pickCompany()\">\n                                <ui-select-match placeholder=\"{{\'ADMIN_DASHBOARD.LOGIN_PAGE.SEARCH_COMPANY_PLACEHOLDER\' | translate}}\">{{$select.selected.company_name}}</ui-select-match>\n                                <ui-select-choices repeat=\"admin in administrators | filter: $select.search\">\n                                  <div ng-bind-html=\"admin.company_name | highlight: $select.search\"></div>\n                                  <!-- <small ng-bind-html=\"admin.email | highlight: $select.search\"></small> -->\n                                </ui-select-choices>\n                            </ui-select>\n                        </div>\n\n                        <div class=\"form-group\" ng-show=\"template_vars.show_pick_department\">\n                            <label for=\"company\"><span translate=\"ADMIN_DASHBOARD.LOGIN_PAGE.DEPARTMENTS\"></span></label>\n                            <ui-select ng-model=\"login.selected_company\" theme=\"bootstrap\">\n                                <ui-select-match placeholder=\"{{\'ADMIN_DASHBOARD.LOGIN_PAGE.SEARCH_DEPARTMENT_PLACEHOLDER\' | translate}}\">{{$select.selected.name}}</ui-select-match>\n                                <ui-select-choices repeat=\"department in departments | filter: $select.search\">\n                                  <div ng-bind-html=\"department.name | highlight: $select.search\"></div>\n                                  <small ng-bind-html=\"department.address.country + \' (\' + department.timezone + \')\' | highlight: $select.search\"></small>\n                                </ui-select-choices>\n                            </ui-select>\n                        </div>\n\n                    </div>\n                    <div class=\"panel-footer\">\n                        <button type=\"submit\" class=\"btn btn-primary btn-lg btn-block\" ng-disabled=\"!login.selected_company\"><span translate=\"ADMIN_DASHBOARD.LOGIN_PAGE.SELECT\"></span></button>\n                    </div>\n                </div>\n            </form>\n        </div>\n\n    </div>\n</div>");
$templateCache.put("login/index.html","<div admin-dashboard-login on-success=\"loginSuccess\" on-cancel=\"loginCancel\" on-error=\"loginError\" bb=\"bb\" user=\"user\"></div>");
$templateCache.put("members-iframe/index.html","<div ui-view></div>");
$templateCache.put("members-iframe/nav.html","<ul class=\"sidebar-menu\">\n	<li ng-class=\"{active: isState(\'members\')}\">\n		<a ui-sref=\"members\"><i class=\"fa fa-users\"></i> <span translate=\"ADMIN_DASHBOARD.SIDE_NAV.MEMBERS_IFRAME_PAGE.MEMBERS\"></span></a>\n		<ul class=\"treeview-menu\">\n	    <li ui-sref-active=\"active\"><a ui-sref=\"members.page({path: \'client\'})\"><i class=\"fa fa-users\"></i> <span translate=\"ADMIN_DASHBOARD.SIDE_NAV.MEMBERS_IFRAME_PAGE.ALL_CLIENTS\"></span></a></li>\n	    <li ui-sref-active=\"active\"><a ui-sref=\"members.page({path: \'client/questions\'})\"><i class=\"fa fa-question-circle\"></i> <span translate=\"ADMIN_DASHBOARD.SIDE_NAV.MEMBERS_IFRAME_PAGE.QUESTIONS\"></span></a></li>\n	    <li ui-sref-active=\"active\"><a ui-sref=\"members.page({path: \'export_customers\'})\"><i class=\"fa fa-external-link\"></i> <span translate=\"ADMIN_DASHBOARD.SIDE_NAV.MEMBERS_IFRAME_PAGE.EXPORT_TO_MAILCHIMP\"></span></a>\n		</ul>\n	</li>\n</ul>\n");
$templateCache.put("publish-iframe/index.html","<div ui-view></div>");
$templateCache.put("publish-iframe/nav.html","<ul class=\"sidebar-menu\">\n	<li ng-class=\"{active: isState(\'publish\')}\">\n		<a ui-sref=\"publish\"><i class=\"fa fa-cogs\"></i> <span translate=\"ADMIN_DASHBOARD.SIDE_NAV.PUBLISH_IRAME_PAGE.PUBLISH\"></span></a>\n		<ul class=\"treeview-menu\">\n			<li ui-sref-active=\"active\"><a ui-sref=\"publish.page({path: \'conf/inset/intro\'})\"><i class=\"fa fa-laptop\"></i> <span translate=\"ADMIN_DASHBOARD.SIDE_NAV.PUBLISH_IRAME_PAGE.PUBLISH_BUSINESS\"></span></a></li>\n	    <li ui-sref-active=\"active\"><a ui-sref=\"publish.page({path: \'conf/homepage/user_edit\'})\"><i class=\"fa fa-cloud-upload\"></i> <span translate=\"ADMIN_DASHBOARD.SIDE_NAV.PUBLISH_IRAME_PAGE.PUBLIC_SITE\"></span></a></li>\n	    <li ui-sref-active=\"active\"><a ui-sref=\"publish.page({path: \'conf/inset/view_insets\'})\"><i class=\"fa fa-cubes\"></i> <span translate=\"ADMIN_DASHBOARD.SIDE_NAV.PUBLISH_IRAME_PAGE.CUSTOMISE_WIDGETS\"></span></a></li>\n	    <li ui-sref-active=\"active\"><a ui-sref=\"publish.page({path: \'event/single\'})\"><i class=\"fa fa-cube\"></i> <span translate=\"ADMIN_DASHBOARD.SIDE_NAV.PUBLISH_IRAME_PAGE.SINGLE_WIDGET\"></span></a></li>\n	    <li ui-sref-active=\"active\"><a ui-sref=\"publish.page({path: \'conf/inset/book_now\'})\"><i class=\"fa fa-check-square\"></i> <span translate=\"ADMIN_DASHBOARD.SIDE_NAV.PUBLISH_IRAME_PAGE.BOOK_NOW_BUTTONS\"></span></a></li>\n	    <li ui-sref-active=\"active\"><a ui-sref=\"publish.page({path: \'conf/inset/tools\'})\"><i class=\"fa fa-plug\"></i> <span translate=\"ADMIN_DASHBOARD.SIDE_NAV.PUBLISH_IRAME_PAGE.OTHER_TOOLS\"></span></a></li>\n		</ul>\n	</li>\n</ul>\n");
$templateCache.put("settings-iframe/index.html","<div ui-view></div>\n");
$templateCache.put("settings-iframe/nav.html","<ul class=\"sidebar-menu\">\n	<li ng-class=\"{active: isState(\'settings\')}\">\n		<a ui-sref=\"settings\"><i class=\"fa fa-cogs\"></i> <span translate=\"ADMIN_DASHBOARD.SIDE_NAV.SETTINGS_IFRAME_PAGE.ACCOUNT_SETTINGS\"></span></a>\n		<ul class=\"treeview-menu\">\n			<li ui-sref-active=\"active\"><a ui-sref=\"settings.page({path:\'company/mycompany\'})\"><i class=\"fa fa-home\"></i> <span translate=\"ADMIN_DASHBOARD.SIDE_NAV.SETTINGS_IFRAME_PAGE.MY_BUSINESS\"></span></a></li>\n			<li ui-sref-active=\"active\"><a ui-sref=\"settings.basic-settings\"><i class=\"fa fa-gear\"></i> <span translate=\"ADMIN_DASHBOARD.SIDE_NAV.SETTINGS_IFRAME_PAGE.BASIC_SETTINGS\"></span></a></li>\n			<li ui-sref-active=\"active\"><a ui-sref=\"settings.advanced-settings\"><i class=\"fa fa-gears\"></i> <span translate=\"ADMIN_DASHBOARD.SIDE_NAV.SETTINGS_IFRAME_PAGE.ADVANCED_SETTINGS\"></span></a></li>\n			<li ui-sref-active=\"active\"><a ui-sref=\"settings.integrations\"><i class=\"fa fa-wrench\"></i> <span translate=\"ADMIN_DASHBOARD.SIDE_NAV.SETTINGS_IFRAME_PAGE.INTEGRATIONS\"></span></a></li>\n			<li ui-sref-active=\"active\"><a ui-sref=\"settings.page({path:\'conf/image/index\'})\"><i class=\"fa fa-photo\"></i> <span translate=\"ADMIN_DASHBOARD.SIDE_NAV.SETTINGS_IFRAME_PAGE.IMAGES\"></span></a></li>\n			<li ui-sref-active=\"active\"><a ui-sref=\"settings.page({path:\'logins/edit\'})\"><i class=\"fa fa-users\"></i> <span translate=\"ADMIN_DASHBOARD.SIDE_NAV.SETTINGS_IFRAME_PAGE.USERS_ADMINS\"></span></a></li>\n			<li ui-sref-active=\"active\"><a ui-sref=\"settings.page({path:\'announcements/all\'})\"><i class=\"fa fa-bullhorn\"></i> <span translate=\"ADMIN_DASHBOARD.SIDE_NAV.SETTINGS_IFRAME_PAGE.ANNOUNCEMENTS\"></span></a></li>\n			<li ui-sref-active=\"active\"><a ui-sref=\"settings.subscription\"><i class=\"fa fa-users\"></i> <span translate=\"ADMIN_DASHBOARD.SIDE_NAV.SETTINGS_IFRAME_PAGE.SUBSCRIPTION\"></span></a></li>\n    </ul>\n	</li>\n</ul>\n");}]);