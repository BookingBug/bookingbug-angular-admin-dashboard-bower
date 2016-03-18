angular.module("BB").run(["$templateCache", function($templateCache) {$templateCache.put("admin_booking_edit.html","<div class=\"modal-header\">\n  <h3 class=\"modal-title\">{{title}}</h3>\n</div>\n<form name=\"modal_form\" ng-submit=\"submit(modal_form)\">\n  <div ng-show=\"loading\" class=\"loader\"></div>\n  <div class=\"modal-body\" sf-schema=\"schema\" sf-form=\"form\"\n    sf-model=\"form_model\" sf-options=\"{formDefaults: {feedback: false}}\"\n    ng-hide=\"loading\">\n  </div>\n  <div class=\"modal-footer\">\n    <button class=\"btn btn-default\" ng-click=\"cancelBooking(model)\" transalte=\"PROGRESS_CANCEL_BOOKING\"></button>\n    <input type=\"submit\" class=\"btn btn-primary\" ng-disabled=\"loading\" value=\"OK\">\n    <button class=\"btn btn-default\" ng-click=\"cancel($event)\" translate=\"CLOSE\"></button>\n  </div>\n</form>\n");
$templateCache.put("admin_config_page.html","<div>\n  <div bb-dashboard-sidebar-wrapper>\n    <li ui-sref-active=\"active\">\n      <a ui-sref=\"config.page({path: \'resource\'})\">\n        <i class=\"fa fa-square\"></i> <span>Resources</span>\n      </a>\n    </li>\n    <li ui-sref-active=\"active\">\n      <a ui-sref=\"config.page({path: \'person\'})\">\n        <i class=\"fa fa-user\"></i> <span>People</span>\n      </a>\n    </li>\n    <li ui-sref-active=\"active\">\n      <a ui-sref=\"config.page({path: \'service\'})\">\n        <i class=\"fa fa-list\"></i> <span>Services</span>\n      </a>\n    </li>\n    <li ui-sref-active=\"active\" class=\"treeview\">\n      <a href=\"#\">\n        <i class=\"fa fa-money\"></i> <span>Promotions</span> <i class=\"fa fa-angle-left pull-right\"></i>\n      </a>\n      <ul class=\"treeview-menu\">\n        <li ui-sref-active=\"active\">\n          <a ui-sref=\"config.page({path: \'price/deal/summary\'})\">Deals</a>\n        </li>\n        <li ui-sref-active=\"active\">\n          <a ui-sref=\"config.page({path: \'price/block\'})\">Bulk Purchases</a>\n        </li>\n      </ul>\n    </li>\n    <li ui-sref-active=\"active\" class=\"treeview\">\n      <a href=\"#\">\n        <i class=\"fa fa-wrench\"></i> <span>Booking Settings</span> <i class=\"fa fa-angle-left pull-right\"></i>\n      </a>\n      <ul class=\"treeview-menu\">\n        <li ui-sref-active=\"active\"><a ui-sref=\"config.page({path: \'detail_type\'})\">Booking Questions</a></li>\n        <li ui-sref-active=\"active\"><a ui-sref=\"config.page({path: \'conf/text/text_edit\'})\">Booking Text</a></li>\n        <li ui-sref-active=\"active\"><a ui-sref=\"config.page({path: \'address\'})\">Addresses</a></li>\n      </ul>\n    </li>\n  </div>\n  <div bb-dashboard-content-wrapper>\n    <div>\n      <div ui-view></div>\n    </div>\n  </div>\n</div>\n");
$templateCache.put("admin_dashboard_page.html","<div>\n  <div bb-dashboard-sidebar-wrapper>\n    <li ui-sref-active=\"active\">\n      <a ui-sref=\"dashboard.page({path: \'view/dashboard/index\', fixed:true})\">\n        <i class=\"fa fa-calendar\"></i> <span>Dashboard</span>\n      </a>\n    </li>\n    <li ui-sref-active=\"active\">\n      <a ui-sref=\"dashboard.page({path: \'space/activity\'})\">\n        <i class=\"fa fa-hand-o-right\"></i> <span>Upcoming &amp; Recent</span>\n      </a>\n    </li>\n    <li ui-sref-active=\"active\">\n      <a ui-sref=\"dashboard.page({path: \'view/search\'})\">\n        <i class=\"fa fa-search\"></i> <span>Search</span>\n      </a>\n    </li>\n    <li ui-sref-active=\"active\">\n      <a ui-sref=\"dashboard.page({path: \'view/repeat_booking/all\'})\">\n        <i class=\"fa fa-repeat\"></i> <span>Bulk Bookings</span>\n      </a>\n    </li>\n    <li ui-sref-active=\"active\">\n      <a ui-sref=\"dashboard.page({path: \'view/reports\'})\">\n        <i class=\"fa fa-line-chart\"></i> <span>Insights</span>\n      </a>\n    </li>\n  </div>\n  <div bb-dashboard-content-wrapper>\n    <div>\n      <div ui-view></div>\n    </div>\n  </div>\n</div>\n");
$templateCache.put("admin_departments_page.html","<div bb-dashboard-content-wrapper>\n  <div class=\"row\">\n    <div ng-repeat=\"department in departments\">\n      <div class=\"clearfix\" ng-if=\"$index % 3 == 0\"></div>\n      <div class=\"col-md-4\">\n        <div class=\"panel panel-default\">\n          <div class=\"panel-heading\">\n            <span class=\"btn btn-default btn-sm pull-right\" ng-click=\"selectDepartment(department)\" >\n              <i class=\"fa fa-unlock\"></i> Login\n            </span>\n            <h4>{{department.name}}</h4>\n          </div>\n          <table class=\"table\">\n            <tr ng-show=\"department.address.address1 || department.address.address2 || department.address.address3 || department.address.address4\">\n              <td width=\"30%\"><b>Address:</b></td>\n              <td>\n                {{department.address.address1}}\n                {{department.address.address2}}\n                {{department.address.address3}}\n                {{department.address.address4}}\n              </td>\n            </tr>\n            <tr ng-show=\"department.address.postcode\">\n              <td><b>Postcode:</b></td>\n              <td>{{department.address.postcode}}</td>\n            </tr>\n            <tr ng-show=\"department.address.country\">\n              <td><b>Country:</b></td>\n              <td>{{department.address.country}}</td>\n            </tr>\n            <tr ng-show=\"department.timezone\">\n              <td><b>Timezone:</b></td>\n              <td>{{department.timezone}}</td>\n            </tr>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");
$templateCache.put("admin_login_page.html","<div bb-dashboard-content-wrapper>\n  <div bb-admin-login on-success=\"loginSuccess\" on-cancel=\"loginCancel\"\n    on-error=\"loginError\" bb=\"bb\"></div>\n</div>\n");
$templateCache.put("admin_members_page.html","<div>\n  <div bb-dashboard-sidebar-wrapper>\n    <li ui-sref-active=\"active\">\n      <a ui-sref=\"members.page({path: \'client\'})\">\n        <i class=\"fa fa-users\"></i> <span>All Clients</span>\n      </a>\n    </li>\n    <li ui-sref-active=\"active\" class=\"treeview\" ng-show=\"client_id\">\n      <a ui-sref=\"members.page({path: \'client/single\'})\">\n        <i class=\"fa fa-user\"></i> <span>Client</span> <i class=\"fa fa-angle-left pull-right\"></i>\n      </a>\n      <ul class=\"treeview-menu menu-open\">\n        <li ui-sref-active=\"active\">\n          <a ui-sref=\"members.page({path: \'client/edit\'})\">Basic Details</a>\n        </li>\n        <li ui-sref-active=\"active\">\n          <a ui-sref=\"members.page({path: \'client/info\'})\">Additional Details</a>\n        </li>\n        <li ui-sref-active=\"active\">\n          <a ui-sref=\"members.page({path: \'client/purchases\'})\">Purchase History</a>\n        </li>\n        <li ui-sref-active=\"active\">\n          <a ui-sref=\"members.page({path: \'client/future\'})\">Future Bookings</a>\n        </li>\n        <li ui-sref-active=\"active\">\n          <a ui-sref=\"members.page({path: \'client/past\'})\">Past Bookings</a>\n        </li>\n        <li ui-sref-active=\"active\">\n          <a ui-sref=\"members.page({path: \'client/prepaid\'})\">Prepaid Bookings</a>\n        </li>\n        <li ui-sref-active=\"active\">\n          <a ui-sref=\"members.page({path: \'client/children\'})\">Child Accounts</a>\n        </li>\n      </ul>\n    </li>\n    <li ui-sref-active=\"active\">\n      <a ui-sref=\"members.page({path: \'client/questions\'})\">\n        <i class=\"fa fa-question-circle\"></i> <span>Questions</span></a>\n    </li>\n    <li ui-sref-active=\"active\">\n      <a ui-sref=\"members.page({path: \'export_customers\'})\">\n        <i class=\"fa fa-external-link\"></i> <span>Export to Mailchimp</span>\n      </a>\n    </li>\n  </div>\n  <div bb-dashboard-content-wrapper>\n    <div>\n      <div ui-view></div>\n    </div>\n  </div>\n</div>\n");
$templateCache.put("admin_page.html","<div bb-frame>\n  <iframe class=\"bb-page-frame\" ng-style=\"adminlte.iframe_style\"\n    seamless=\"seamless\" lte-pin-bottom scrolling=\"no\" ng-src=\"{{frame_src}}\"\n    allowtransparency=\"true\" style=\"display:none\" onload=\"this.style.display = \'block\';\">\n  </iframe>\n</div>\n");
$templateCache.put("admin_publish_page.html","<div>\n  <div bb-dashboard-sidebar-wrapper>\n    <li ui-sref-active=\"active\">\n      <a ui-sref=\"publish.page({path: \'conf/inset/intro\'})\">\n        <i class=\"fa fa-laptop\"></i> <span>Publish Business</span>\n      </a>\n    </li>\n    <li ui-sref-active=\"active\">\n      <a ui-sref=\"publish.page({path: \'conf/homepage/user_edit\'})\">\n        <i class=\"fa fa-cloud-upload\"></i> <span>Public Site</span>\n      </a>\n    </li>\n    <li ui-sref-active=\"active\">\n      <a ui-sref=\"publish.page({path: \'conf/inset/view_insets\'})\">\n        <i class=\"fa fa-cubes\"></i> <span>Customise Widgets</span>\n      </a>\n    </li>\n    <li ui-sref-active=\"active\">\n      <a ui-sref=\"publish.page({path: \'event/single\'})\">\n        <i class=\"fa fa-cube\"></i> <span>Single Widget</span>\n      </a>\n    </li>\n    <li ui-sref-active=\"active\">\n      <a ui-sref=\"publish.page({path: \'conf/inset/book_now\'})\">\n        <i class=\"fa fa-check-square\"></i> <span>\'Book Now\' Buttons</span>\n      </a>\n    </li>\n    <li ui-sref-active=\"active\">\n      <a ui-sref=\"publish.page({path: \'conf/inset/tools\'})\">\n        <i class=\"fa fa-plug\"></i> <span>Other Tools</span>\n      </a>\n    </li>\n  </div>\n  <div bb-dashboard-content-wrapper>\n    <div>\n      <div ui-view></div>\n    </div>\n  </div>\n</div>\n");
$templateCache.put("admin_settings_page.html","<div>\n  <div bb-dashboard-sidebar-wrapper>\n     <li ui-sref-active=\"active\">\n       <a ui-sref=\"config.page({path: \'resource\'})\">\n         <i class=\"fa fa-square\"></i> <span>Resources</span>\n       </a>\n     </li>\n     <li ui-sref-active=\"active\">\n       <a ui-sref=\"config.page({path: \'person\'})\">\n         <i class=\"fa fa-user\"></i> <span>People</span>\n       </a>\n     </li>\n     <li ui-sref-active=\"active\">\n       <a ui-sref=\"config.page({path: \'service\'})\">\n         <i class=\"fa fa-list\"></i> <span>Services</span>\n       </a>\n     </li>\n     <li ui-sref-active=\"active\" class=\"treeview\">\n       <a href=\"#\">\n         <i class=\"fa fa-money\"></i> <span>Promotions</span> <i class=\"fa fa-angle-left pull-right\"></i>\n       </a>\n       <ul class=\"treeview-menu\">\n         <li ui-sref-active=\"active\">\n           <a ui-sref=\"config.page({path: \'price/deal/summary\'})\">Deals</a>\n         </li>\n         <li ui-sref-active=\"active\">\n           <a ui-sref=\"config.page({path: \'price/block\'})\">Bulk Purchases</a>\n         </li>\n       </ul>\n     </li>\n     <li ui-sref-active=\"active\" class=\"treeview\">\n       <a href=\"#\"><i class=\"fa fa-wrench\"></i> <span>Booking Settings</span> <i class=\"fa fa-angle-left pull-right\"></i></a>\n     <ul class=\"treeview-menu\">\n       <li ui-sref-active=\"active\">\n         <a ui-sref=\"config.page({path: \'detail_type\'})\">Booking Questions</a>\n       </li>\n       <li ui-sref-active=\"active\">\n         <a ui-sref=\"config.page({path: \'conf/text/text_edit\'})\">Booking Text</a>\n       </li>\n       <li ui-sref-active=\"active\">\n         <a ui-sref=\"config.page({path: \'address\'})\">Addresses</a>\n       </li>\n     </ul>\n   </li>\n </div>\n  <div bb-dashboard-content-wrapper>\n    <div>\n      <div ui-view></div>\n    </div>\n  </div>\n</div>\n");
$templateCache.put("admin_view_page.html","<div>\n  <div ng-if=\"parent_state\" bb-frame>\n    <iframe class=\"bb-page-frame\" seamless=\"seamless\" lte-pin-bottom scrolling=\"no\"\n      ng-style=\"iframe_style\" ng-src=\"{{frame_src}}\" allowtransparency=\"true\"\n      style=\"display:none\" onload=\"this.style.display = \'block\';\">\n    </iframe>\n  </div>\n  <div ng-if=\"!parent_state\" ui-view></div>\n</div>\n");
$templateCache.put("calendar_date_picker.html","<p class=\"input-group datepicker\">\n  <input type=\"text\" datepicker-popup=\"dd-MMMM-yyyy\" ng-model=\"currentDate\"\n    is-open=\"datePickerOpened\" show-button-bar=\"false\" class=\"form-control\">\n  <span class=\"input-group-btn\">\n    <button type=\"button\" class=\"btn btn-default datepicker-popup\"\n      ng-click=\"openDatePicker($event)\">\n      <i class=\"glyphicon glyphicon-calendar\"></i>\n    </button>\n  </span>\n</p>\n");
$templateCache.put("checkin_page.html","<div bb-dashboard-content-wrapper>\n  <div lte-no-side-menu class=\"tablet-checkin\" bb-checkin-table></div>\n</div>\n");
$templateCache.put("checkin_table.html","<div class=\"row\">\n  <div class=\"col-md-12\">\n    <h2>Check In</h2>\n    <div class=\"panel\">\n      <table class=\"table table-bordered table-hover dataTable\" tr-ng-grid=\"\"\n          items=\"bookings\" page-items=\"per_page\" total-items=\"total_entries\" on-data-required=\"getClients(currentPage, filterBy, filterByFields, orderBy, orderByReverse)\" role=\"grid\">\n        <thead>\n          <tr role=\"row\">\n            <th field-name=\"client_name\" display-name=\"Customer\"></th>\n            <th field-name=\"person_name\" display-name=\"Person\"></th>\n            <th field-name=\"unixTime\" display-name=\"Due\"></th>\n            <th><div class=\"tr-ng-title\">Arrived</div></th>\n            <th><div class=\"tr-ng-title\">Being Seen</div></th>\n            <th><div class=\"tr-ng-title\">Completed</div></th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr role=\"row\">\n            <td field-name=\"client_name\">\n              <a ui-sref=\"clients.edit({id: bmap[gridItem].client_id})\">{{bmap[gridItem].client_name}}</a>\n            </td>\n            <td field-name=\"person_name\">\n              <span>{{bmap[gridItem].person_name}}</span>\n            </td>\n            <td field-name=\"unixTime\">\n              <span>{{bmap[gridItem].datetime.format(\"HH:mm\")}}</span>\n            </td>\n            <td>\n              <span ng-if=\"bmap[gridItem].hasStatus(\'checked_in\')\">\n                {{bmap[gridItem].statusTime(\"checked_in\").format(\"HH:mm\")}}\n              </span>\n              <span ng-if=\"!bmap[gridItem].hasStatus(\'checked_in\')\">\n                <button ng-click=\"setStatus(bmap[gridItem], \'checked_in\')\" class=\"btn btn-default btn-xs btn-block\">\n                  <i class=\"fa fa-check-square-o\"></i>\n                  Check in\n                </button>\n              </span>\n            </td>\n            <td>\n              <span ng-if=\"bmap[gridItem].hasStatus(\'being_seen\')\">\n                {{bmap[gridItem].statusTime(\"being_seen\").format(\"HH:mm\")}}\n              </span>\n              <span ng-if=\"!bmap[gridItem].hasStatus(\'being_seen\') && !bmap[gridItem].hasStatus(\'checked_in\') && bmap[gridItem].sinceStart() > 0\" ng-class=\"bmap[gridItem].sinceStart() | gar:1000:10000\">\n                Was due at {{ bmap[gridItem].sinceStart() | time_period }}\n              </span>\n              <span ng-if=\"!bmap[gridItem].hasStatus(\'being_seen\') && bmap[gridItem].hasStatus(\'checked_in\')\">\n                <button ng-click=\"setStatus(bmap[gridItem], \'being_seen\')\" class=\"btn btn-default btn-xs pull-right\">\n                  <i class=\"fa fa-check-square\"></i>\n                  Serve\n                </button>\n                <span ng-class=\"bmap[gridItem].sinceStart({later: \'checked_in\'}) | gar:1000:10000\" > Waiting for {{ bmap[gridItem].sinceStart({later: \'checked_in\'}) | time_period }}</span>\n              </span>\n            </td>\n\n            <td>\n              <span ng-if=\"bmap[gridItem].hasStatus(\'completed\')\">\n                {{bmap[gridItem].statusTime(\"completed\").format(\"HH:mm\")}}\n              </span>\n              <span ng-if=\"!bmap[gridItem].hasStatus(\'completed\') && bmap[gridItem].hasStatus(\'being_seen\')\">\n                <span ng-class=\"bmap[gridItem].sinceStatus(\'being_seen\') | gar:100:10\" > Being seen for {{ bmap[gridItem].sinceStatus(\'being_seen\') | time_period }}</span><br/>\n                <button ng-click=\"setStatus(bmap[gridItem], \'completed\')\" class=\"btn btn-default\">Completed</button>\n              </span>\n            </td>\n          </tr>\n        </tbody>\n        <tfoot>\n          <tr>\n              <td>\n                  <span tr-ng-grid-global-filter=\"\"></span>\n                  <span tr-ng-grid-pager=\"\"></span>\n              </td>\n          </tr> \n        </tfoot>\n        </table>\n    </div>\n  </div>\n</div>  ");
$templateCache.put("dashboard_content_wrapper.html","<div class=\"content-wrapper\" lte-fix-height>\n  <div class=\"col-md-12\" ng-show=\"alerts.length\">\n    <br/>\n    <div alert ng-repeat=\"alert in alerts\" type=\"{{alert.type}}\" close=\"closeAlert(alert)\">\n      {{alert.msg}}\n    </div>\n  </div>\n  <section class=\"content-header\" ng-if=\"adminlte.heading\">\n    <h1>\n      {{adminlte.heading}}\n      <small ng-if=\"adminlte.subheading\" ng-bind=\'adminlte.subheading\'></small>\n    </h1>\n    <ol class=\"breadcrumb\" ng-if=\"adminlte.breadcrumbs\">\n      <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Level</a></li>\n      <li class=\"active\">Here</li>\n    </ol>\n  </section>\n\n  <section class=\"content\" ng-transclude></section>\n</div>\n");
$templateCache.put("dashboard_sidebar_wrapper.html","<aside class=\"main-sidebar\">\n  <section class=\"sidebar\">\n    <div class=\"clearfix\">\n      <a class=\"sidebar-toggle hidden-xs\" data-toggle=\"offcanvas\" role=\"button\">\n        <i class=\"fa fa-arrow-circle-right\" id=\"open\"></i>\n        <i class=\"fa fa-arrow-circle-left\" id=\"close\"></i>\n        <span class=\"sr-only\">Toggle navigation</span>\n      </a>\n    </div>\n    <ul class=\"sidebar-menu\" ng-transclude>\n    </ul>\n  </section>\n</aside>\n");
$templateCache.put("edit_booking_modal_form.html","<div class=\"modal-header\">\n  <button type=\"button\" class=\"close\" ng-click=\"cancel($event)\">&times;</button>\n  <h3 class=\"modal-title\">{{title}}</h3>\n</div>\n<form name=\"modal_form\" ng-submit=\"submit(modal_form)\">\n  <div ng-show=\"loading\" class=\"loader\"></div>\n  <div class=\"modal-body\" sf-schema=\"schema\" sf-form=\"form\"\n    sf-model=\"form_model\" sf-options=\"{formDefaults: {feedback: false}}\"\n    ng-hide=\"loading\">\n  </div>\n  <div class=\"modal-footer\">\n    <button class=\"btn btn-danger pull-left\"\n      ng-click=\"cancelBooking($event)\" translate=\"PROGRESS_CANCEL_BOOKING\"></button>\n    <input type=\"submit\" class=\"btn btn-primary\" ng-disabled=\"loading\" value=\"{{\'SAVE_BOOKING\' | translate}}\">\n    <button class=\"btn btn-default\" ng-click=\"cancel($event)\" translate=\"PROGRESS_CANCEL_BOOKING\"></button>\n  </div>\n</form>\n");
$templateCache.put("iframe_page.html","<div bb-frame>\n  <iframe class=\"bb-page-frame\" ng-style=\"adminlte.iframe_style\"\n    seamless=\"seamless\" lte-pin-bottom scrolling=\"no\" ng-src=\"{{frame_src}}\"\n    allowtransparency=\"true\" style=\"display:none\" onload=\"this.style.display = \'block\';\">\n  </iframe>\n</div>\n");
$templateCache.put("resource_calendar_main.html","<div id=\'loading_icon\' ng-show=\"loading\">\n  <div id=\'wait_graphic\'>&nbsp;</div>\n</div>\n<div id=\"uicalendar\" ui-calendar=\"uiCalOptions.calendar\" ng-model=\"eventSources\"\n  ng-if=\"eventSources\" calendar=\"resourceCalendar\"\n  class=\"resource-calendar\"></div>\n");}]);