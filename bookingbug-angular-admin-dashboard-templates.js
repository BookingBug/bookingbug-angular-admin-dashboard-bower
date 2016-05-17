angular.module("BB").run(["$templateCache", function($templateCache) {$templateCache.put("admin_booking_edit.html","<div class=\"modal-header\">\n  <h3 class=\"modal-title\">{{title}}</h3>\n</div>\n<form name=\"modal_form\" ng-submit=\"submit(modal_form)\">\n  <div ng-show=\"loading\" class=\"loader\"></div>\n  <div class=\"modal-body\" sf-schema=\"schema\" sf-form=\"form\"\n    sf-model=\"form_model\" sf-options=\"{formDefaults: {feedback: false}}\"\n    ng-hide=\"loading\">\n  </div>\n  <div class=\"modal-footer\">\n    <button class=\"btn btn-default\" ng-click=\"cancelBooking(model)\">Cancel Booking</button>\n    <input type=\"submit\" class=\"btn btn-primary\" ng-disabled=\"loading\" value=\"OK\">\n    <button class=\"btn btn-default\" ng-click=\"cancel($event)\">Close</button>\n  </div>\n</form>");
$templateCache.put("admin_clients.html","<div bb-dashboard-sidebar-wrapper>\n  <form  method=\"get\" class=\"sidebar-form\">\n    <div class=\"input-group\">\n      <input type=\"text\" name=\"q\" class=\"form-control\"\n      ng-model=\"clientsOptions.search\" placeholder=\"Search for a customer...\">\n      <span class=\"input-group-btn\">\n        <button type=\"submit\" name=\"search\" id=\"search-btn\" class=\"btn btn-flat\">\n          <i class=\"fa fa-search\"></i>\n        </button>\n      </span>\n    </div>\n  </form>\n  <li ui-sref-active=\"active\" >\n    <a ui-sref=\"clients.all\" >\n      <i class=\"fa fa-users\"></i>\n      <span>All Customers</span>\n    </a>\n  </li>\n  <li ui-sref-active=\"active\" ng-if=\"current_client\">\n    <a ui-sref=\"clients.edit\" >\n      <i class=\"fa fa-user\"></i>\n      <span>{{current_client.name}}</span>\n    </a>\n  </li>\n</div>\n\n<div bb-dashboard-content-wrapper>\n  <div>\n    <div ui-view></div>\n  </div>\n</div>\n");
$templateCache.put("admin_config_page.html","<div>\n  <div bb-dashboard-sidebar-wrapper>\n    <li ui-sref-active=\"active\">\n      <a ui-sref=\"config.page({path: \'resource\'})\">\n        <i class=\"fa fa-square\"></i> <span>Resources</span>\n      </a>\n    </li>\n    <li ui-sref-active=\"active\">\n      <a ui-sref=\"config.page({path: \'person\'})\">\n        <i class=\"fa fa-user\"></i> <span>People</span>\n      </a>\n    </li>\n    <li ui-sref-active=\"active\">\n      <a ui-sref=\"config.page({path: \'service\'})\">\n        <i class=\"fa fa-list\"></i> <span>Services</span>\n      </a>\n    </li>\n    <li ui-sref-active=\"active\" class=\"treeview\">\n      <a href=\"#\">\n        <i class=\"fa fa-money\"></i> <span>Promotions</span> <i class=\"fa fa-angle-left pull-right\"></i>\n      </a>\n      <ul class=\"treeview-menu\">\n        <li ui-sref-active=\"active\">\n          <a ui-sref=\"config.page({path: \'price/deal/summary\'})\">Deals</a>\n        </li>\n        <li ui-sref-active=\"active\">\n          <a ui-sref=\"config.page({path: \'price/block\'})\">Bulk Purchases</a>\n        </li>\n      </ul>\n    </li>\n    <li ui-sref-active=\"active\" class=\"treeview\">\n      <a href=\"#\">\n        <i class=\"fa fa-wrench\"></i> <span>Booking Settings</span> <i class=\"fa fa-angle-left pull-right\"></i>\n      </a>\n      <ul class=\"treeview-menu\">\n        <li ui-sref-active=\"active\"><a ui-sref=\"config.page({path: \'detail_type\'})\">Booking Questions</a></li>\n        <li ui-sref-active=\"active\"><a ui-sref=\"config.page({path: \'conf/text/text_edit\'})\">Booking Text</a></li>\n        <li ui-sref-active=\"active\"><a ui-sref=\"config.page({path: \'address\'})\">Addresses</a></li>\n      </ul>\n    </li>\n  </div>\n  <div bb-dashboard-content-wrapper>\n    <div>\n      <div ui-view></div>\n    </div>\n  </div>\n</div>\n");
$templateCache.put("admin_dashboard.html","<div class=\"wrapper\">\n\n  <!-- Main Header -->\n  <header class=\"main-header\">\n\n    <!-- Logo -->\n    <ul class=\"nav navbar-nav navbar-user\">\n      <!-- User Account Menu -->\n      <li class=\"user user-menu ng-cloak\" ng-hide=\"user\" >\n        <a>&nbsp;</a>\n      </li>\n\n      <li class=\"user user-menu\" ng-show=\"user\" dropdown>\n        <!-- Menu Toggle Button -->\n        <a dropdown-toggle>\n          <!-- The user image in the navbar-->\n          <img src=\"images/photo_hold.jpg\" class=\"user-image\" alt=\"User Image\">\n          <!-- hidden-xs hides the username on small devices so only the image appears. -->\n          <span class=\"hidden-xs\">{{user.name}}</span>\n        </a>\n        <ul class=\"dropdown-menu\">\n          <!-- The user image in the menu -->\n          <li class=\"user-header\">\n            <img src=\"images/photo_hold.jpg\" class=\"img-circle\" alt=\"User Image\">\n            <p>\n              {{user.role}} : {{user.name}}\n              <small>{{user.company_name}}</small>\n            </p>\n          </li>\n        \n          <!-- Menu Footer-->\n          <li class=\"user-footer\">\n            <div class=\"pull-left\">\n              <a ui-sref=\"settings.page({path: \'logins/edit\'})\" class=\"btn btn-default btn-flat\">Profile</a>\n            </div>\n            <div class=\"pull-right\">\n              <a ui-sref=\"login\" class=\"btn btn-default btn-flat\">Sign out</a>\n            </div>\n          </li>\n        </ul>\n      </li>\n      <li class=\"logo-mobile\">\n        <div class=\"navbar-logo xs-visible\">\n          <a href=\"#\"><span class=\"sr-only\">(logo)</span></a>\n        </div>\n      </li>\n    </ul>\n\n    <!-- Header Navbar -->\n    <nav class=\"navbar navbar-static-top\">\n      <!-- Navbar Right Menu -->\n\n      <div class=\"navbar-header\">\n        <a href=\"#\" class=\"sidebar-toggle visible-xs\"\n          data-toggle=\"offcanvas\" role=\"button\" ng-click=\"navCollapsed = true\">\n          <i class=\"fa fa-arrow-circle-right\" id=\"open\"></i>\n          <i class=\"fa fa-arrow-circle-left\" id=\"close\"></i>\n          <span class=\"sr-only\">Toggle navigation</span>\n        </a>\n        <div class=\"mobile-logo visible-xs\">\n          <a href=\"#\"><span class=\"sr-only\">(logo)</span></a>\n        </div>\n        <button type=\"button\" class=\"navbar-toggle collapsed\"\n          ng-init=\"navCollapsed = true\" ng-click=\"navCollapsed = !navCollapsed\">\n          <span class=\"sr-only\">Toggle navigation</span>\n          <i class=\"fa fa-bars\"></i>\n        </button>\n      </div>\n  \n      <div class=\"navbar-collapse pull-left collapse\" id=\"navbar-collapse\"\n        ng-class=\"!navCollapsed && \'in\'\" ng-click=\"navCollapsed=true\">\n        <ul class=\"nav navbar-nav ng-cloak\" ng-show=\"user\">\n          <li ui-sref-active=\"active\">\n            <a ui-sref=\"calendar\">Calendar</a>\n          </li>\n          <li ui-sref-active=\"active\">\n            <a ui-sref=\"clients.all\">Customers</a>\n          </li>\n          <li ui-sref-active=\"active\">\n            <a ui-sref=\"checkin\">Check In</a>\n          </li>\n        </ul>\n      </div>\n\n      <div class=\"navbar-logo hidden-sm hidden-xs\">\n        <a href=\"#\"><span class=\"sr-only\">(logo)</span></a>\n      </div>\n\n      <div class=\"navbar-custom-menu hidden-sm hidden-xs\" ng-show=\"user\">\n        <ul class=\"nav navbar-nav\">\n          <!-- Messages: style can be found in dropdown.less-->\n\n\n        </ul>\n      </div>\n          \n    </nav>\n  </header>\n\n  <div class=\"loader-wrapper\" ng-show=\"isLoading\">\n    <div class=\"loader\"></div>\n  </div>\n  <div ui-view ng-class=\"{no_scroll: adminlte.fixed_page}\"></div>\n\n</div><!-- ./wrapper -->\n");
$templateCache.put("admin_dashboard_page.html","<div>\n  <div bb-dashboard-sidebar-wrapper>\n    <li ui-sref-active=\"active\">\n      <a ui-sref=\"dashboard.page({path: \'view/dashboard/index\', fixed:true})\">\n        <i class=\"fa fa-calendar\"></i> <span>Dashboard</span>\n      </a>\n    </li>\n    <li ui-sref-active=\"active\">\n      <a ui-sref=\"dashboard.page({path: \'space/activity\'})\">\n        <i class=\"fa fa-hand-o-right\"></i> <span>Upcoming &amp; Recent</span>\n      </a>\n    </li>\n    <li ui-sref-active=\"active\">\n      <a ui-sref=\"dashboard.page({path: \'view/search\'})\">\n        <i class=\"fa fa-search\"></i> <span>Search</span>\n      </a>\n    </li>\n    <li ui-sref-active=\"active\">\n      <a ui-sref=\"dashboard.page({path: \'view/repeat_booking/all\'})\">\n        <i class=\"fa fa-repeat\"></i> <span>Bulk Bookings</span>\n      </a>\n    </li>\n    <li ui-sref-active=\"active\">\n      <a ui-sref=\"dashboard.page({path: \'view/reports\'})\">\n        <i class=\"fa fa-line-chart\"></i> <span>Insights</span>\n      </a>\n    </li>\n  </div>\n  <div bb-dashboard-content-wrapper>\n    <div>\n      <div ui-view></div>\n    </div>\n  </div>\n</div>\n");
$templateCache.put("admin_departments_page.html","<div bb-dashboard-content-wrapper>\n  <div class=\"row\">\n    <div ng-repeat=\"department in departments\">\n      <div class=\"clearfix\" ng-if=\"$index % 3 == 0\"></div>\n      <div class=\"col-md-4\">\n        <div class=\"panel panel-default\">\n          <div class=\"panel-heading\">\n            <span class=\"btn btn-default btn-sm pull-right\" ng-click=\"selectDepartment(department)\" >\n              <i class=\"fa fa-unlock\"></i> Login\n            </span>\n            <h4>{{department.name}}</h4>\n          </div>\n          <table class=\"table\">\n            <tr ng-show=\"department.address.address1 || department.address.address2 || department.address.address3 || department.address.address4\">\n              <td width=\"30%\"><b>Address:</b></td>\n              <td>\n                {{department.address.address1}}\n                {{department.address.address2}}\n                {{department.address.address3}}\n                {{department.address.address4}}\n              </td>\n            </tr>\n            <tr ng-show=\"department.address.postcode\">\n              <td><b>Postcode:</b></td>\n              <td>{{department.address.postcode}}</td>\n            </tr>\n            <tr ng-show=\"department.address.country\">\n              <td><b>Country:</b></td>\n              <td>{{department.address.country}}</td>\n            </tr>\n            <tr ng-show=\"department.timezone\">\n              <td><b>Timezone:</b></td>\n              <td>{{department.timezone}}</td>\n            </tr>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");
$templateCache.put("admin_login_page.html","<div bb-dashboard-content-wrapper>\n  <div bb-admin-login on-success=\"loginSuccess\" on-cancel=\"loginCancel\"\n    on-error=\"loginError\" bb=\"bb\"></div>\n</div>\n");
$templateCache.put("admin_members_page.html","<div>\n  <div bb-dashboard-sidebar-wrapper>\n    <li ui-sref-active=\"active\">\n      <a ui-sref=\"members.page({path: \'client\'})\">\n        <i class=\"fa fa-users\"></i> <span>All Clients</span>\n      </a>\n    </li>\n    <li ui-sref-active=\"active\" class=\"treeview\" ng-show=\"client_id\">\n      <a ui-sref=\"members.page({path: \'client/single\'})\">\n        <i class=\"fa fa-user\"></i> <span>Client</span> <i class=\"fa fa-angle-left pull-right\"></i>\n      </a>\n      <ul class=\"treeview-menu menu-open\">\n        <li ui-sref-active=\"active\">\n          <a ui-sref=\"members.page({path: \'client/edit\'})\">Basic Details</a>\n        </li>\n        <li ui-sref-active=\"active\">\n          <a ui-sref=\"members.page({path: \'client/info\'})\">Additional Details</a>\n        </li>\n        <li ui-sref-active=\"active\">\n          <a ui-sref=\"members.page({path: \'client/purchases\'})\">Purchase History</a>\n        </li>\n        <li ui-sref-active=\"active\">\n          <a ui-sref=\"members.page({path: \'client/future\'})\">Future Bookings</a>\n        </li>\n        <li ui-sref-active=\"active\">\n          <a ui-sref=\"members.page({path: \'client/past\'})\">Past Bookings</a>\n        </li>\n        <li ui-sref-active=\"active\">\n          <a ui-sref=\"members.page({path: \'client/prepaid\'})\">Prepaid Bookings</a>\n        </li>\n        <li ui-sref-active=\"active\">\n          <a ui-sref=\"members.page({path: \'client/children\'})\">Child Accounts</a>\n        </li>\n      </ul>\n    </li>\n    <li ui-sref-active=\"active\">\n      <a ui-sref=\"members.page({path: \'client/questions\'})\">\n        <i class=\"fa fa-question-circle\"></i> <span>Questions</span></a>\n    </li>\n    <li ui-sref-active=\"active\">\n      <a ui-sref=\"members.page({path: \'export_customers\'})\">\n        <i class=\"fa fa-external-link\"></i> <span>Export to Mailchimp</span>\n      </a>\n    </li>\n  </div>\n  <div bb-dashboard-content-wrapper>\n    <div>\n      <div ui-view></div>\n    </div>\n  </div>\n</div>\n");
$templateCache.put("admin_page.html","<div bb-frame>\n  <iframe class=\"bb-page-frame\" ng-style=\"adminlte.iframe_style\"\n    seamless=\"seamless\" lte-pin-bottom scrolling=\"no\" ng-src=\"{{frame_src}}\"\n    allowtransparency=\"true\" style=\"display:none\" onload=\"this.style.display = \'block\';\">\n  </iframe>\n</div>\n");
$templateCache.put("admin_publish_page.html","<div>\n  <div bb-dashboard-sidebar-wrapper>\n    <li ui-sref-active=\"active\">\n      <a ui-sref=\"publish.page({path: \'conf/inset/intro\'})\">\n        <i class=\"fa fa-laptop\"></i> <span>Publish Business</span>\n      </a>\n    </li>\n    <li ui-sref-active=\"active\">\n      <a ui-sref=\"publish.page({path: \'conf/homepage/user_edit\'})\">\n        <i class=\"fa fa-cloud-upload\"></i> <span>Public Site</span>\n      </a>\n    </li>\n    <li ui-sref-active=\"active\">\n      <a ui-sref=\"publish.page({path: \'conf/inset/view_insets\'})\">\n        <i class=\"fa fa-cubes\"></i> <span>Customise Widgets</span>\n      </a>\n    </li>\n    <li ui-sref-active=\"active\">\n      <a ui-sref=\"publish.page({path: \'event/single\'})\">\n        <i class=\"fa fa-cube\"></i> <span>Single Widget</span>\n      </a>\n    </li>\n    <li ui-sref-active=\"active\">\n      <a ui-sref=\"publish.page({path: \'conf/inset/book_now\'})\">\n        <i class=\"fa fa-check-square\"></i> <span>\'Book Now\' Buttons</span>\n      </a>\n    </li>\n    <li ui-sref-active=\"active\">\n      <a ui-sref=\"publish.page({path: \'conf/inset/tools\'})\">\n        <i class=\"fa fa-plug\"></i> <span>Other Tools</span>\n      </a>\n    </li>\n  </div>\n  <div bb-dashboard-content-wrapper>\n    <div>\n      <div ui-view></div>\n    </div>\n  </div>\n</div>\n");
$templateCache.put("admin_settings_page.html","<div>\n  <div bb-dashboard-sidebar-wrapper>\n     <li ui-sref-active=\"active\">\n       <a ui-sref=\"config.page({path: \'resource\'})\">\n         <i class=\"fa fa-square\"></i> <span>Resources</span>\n       </a>\n     </li>\n     <li ui-sref-active=\"active\">\n       <a ui-sref=\"config.page({path: \'person\'})\">\n         <i class=\"fa fa-user\"></i> <span>People</span>\n       </a>\n     </li>\n     <li ui-sref-active=\"active\">\n       <a ui-sref=\"config.page({path: \'service\'})\">\n         <i class=\"fa fa-list\"></i> <span>Services</span>\n       </a>\n     </li>\n     <li ui-sref-active=\"active\" class=\"treeview\">\n       <a href=\"#\">\n         <i class=\"fa fa-money\"></i> <span>Promotions</span> <i class=\"fa fa-angle-left pull-right\"></i>\n       </a>\n       <ul class=\"treeview-menu\">\n         <li ui-sref-active=\"active\">\n           <a ui-sref=\"config.page({path: \'price/deal/summary\'})\">Deals</a>\n         </li>\n         <li ui-sref-active=\"active\">\n           <a ui-sref=\"config.page({path: \'price/block\'})\">Bulk Purchases</a>\n         </li>\n       </ul>\n     </li>\n     <li ui-sref-active=\"active\" class=\"treeview\">\n       <a href=\"#\"><i class=\"fa fa-wrench\"></i> <span>Booking Settings</span> <i class=\"fa fa-angle-left pull-right\"></i></a>\n     <ul class=\"treeview-menu\">\n       <li ui-sref-active=\"active\">\n         <a ui-sref=\"config.page({path: \'detail_type\'})\">Booking Questions</a>\n       </li>\n       <li ui-sref-active=\"active\">\n         <a ui-sref=\"config.page({path: \'conf/text/text_edit\'})\">Booking Text</a>\n       </li>\n       <li ui-sref-active=\"active\">\n         <a ui-sref=\"config.page({path: \'address\'})\">Addresses</a>\n       </li>\n     </ul>\n   </li>\n </div>\n  <div bb-dashboard-content-wrapper>\n    <div>\n      <div ui-view></div>\n    </div>\n  </div>\n</div>\n");
$templateCache.put("admin_view_page.html","<div>\n  <div ng-if=\"parent_state\" bb-frame>\n    <iframe class=\"bb-page-frame\" seamless=\"seamless\" lte-pin-bottom scrolling=\"no\"\n      ng-style=\"iframe_style\" ng-src=\"{{frame_src}}\" allowtransparency=\"true\"\n      style=\"display:none\" onload=\"this.style.display = \'block\';\">\n    </iframe>\n  </div>\n  <div ng-if=\"!parent_state\" ui-view></div>\n</div>\n");
$templateCache.put("all_clients.html","<div class=\"row\">\n  <div class=\"col-md-12\">\n    <h2>Customers</h2>\n    <div class=\"box\">\n      <div bb-clients-table class=\"tablet-search\">\n        <table class=\"table table-bordered table-hover dataTable\" tr-ng-grid=\"\"\n           filter-by=\"clientsOptions.search\" items=\"clients\" page-items=\"per_page\" total-items=\"total_entries\" on-data-required=\"getClients(currentPage, filterBy, filterByFields, orderBy, orderByReverse)\" role=\"grid\">\n          <thead>\n            <tr role=\"row\">\n              <th field-name=\"name\" ></th>\n              <th field-name=\"email\"></th>\n              <th field-name=\"mobile\"></th>\n              <th><div class=\"tr-ng-title\">Actions</div></th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr role=\"row\">\n              <td field-name=\"name\">\n                <a ui-sref=\"clients.edit({id: gridItem.id})\">{{gridItem.name}}</a>\n              </td>\n              <td field-name=\"email\" ng-bind-html=\"gridItem.email | linky\" />\n              <td field-name=\"mobile\"></td>\n              <td class=\"text-center\">\n                <a class=\"btn btn-xs btn-default\" ui-sref=\"clients.edit({id: gridItem.id})\"><i class=\"fa fa-pencil\"></i> Edit</a>\n              </td>\n            </tr>\n          </tbody>\n          <tfoot>\n            <tr>\n                <td>\n                    <span tr-ng-grid-global-filter=\"\"></span>\n                    <span tr-ng-grid-pager=\"\"></span>\n                </td>\n            </tr>\n          </tfoot>\n        </table>\n      </div>\n    </div>\n  </div>\n</div>\n");
$templateCache.put("calendar_date_picker.html","<p class=\"input-group datepicker\">\n  <input type=\"text\" datepicker-popup=\"dd-MMMM-yyyy\" ng-model=\"currentDate\"\n    is-open=\"datePickerOpened\" show-button-bar=\"false\" class=\"form-control\">\n  <span class=\"input-group-btn\">\n    <button type=\"button\" class=\"btn btn-default datepicker-popup\"\n      ng-click=\"openDatePicker($event)\">\n      <i class=\"glyphicon glyphicon-calendar\"></i>\n    </button>\n  </span>\n</p>\n");
$templateCache.put("calendar_page.html","<div bb-dashboard-content-wrapper>\n  <div bb-resource-calendar=\'{\"minTime\": \"09:00\", \"maxTime\": \"19:00\", \"cal_slot_duration\": 15}\' label-assembler=\'{service_name} - {client_name}\' block-label-assembler=\'Blocked\'></div>\n</div>\n");
$templateCache.put("checkin_page.html","<div bb-dashboard-content-wrapper>\n  <div lte-no-side-menu class=\"tablet-checkin\" bb-checkin-table></div>\n</div>\n");
$templateCache.put("checkin_table.html","<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"panel\">\n      <table class=\"table table-bordered table-hover dataTable\" tr-ng-grid=\"\"\n          items=\"bookings\" page-items=\"per_page\" total-items=\"total_entries\"\n          on-data-required=\"getAppointments(currentPage, filterBy, filterByFields, orderBy, orderByReverse)\" role=\"grid\">\n        <thead>\n          <tr role=\"row\">\n            <th field-name=\"client_name\" display-name=\"Customer\"></th>\n            <th field-name=\"person_name\" display-name=\"Person\"></th>\n            <th field-name=\"datetime\" display-name=\"Due\"></th>\n            <th><div class=\"tr-ng-title\">Arrived</div></th>\n            <th><div class=\"tr-ng-title\">Being Seen</div></th>\n            <th><div class=\"tr-ng-title\">Completed</div></th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr role=\"row\">\n            <td field-name=\"client_name\">\n              <a ui-sref=\"clients.edit({id: bmap[gridItem].client_id})\">{{bmap[gridItem].client_name}}</a>\n            </td>\n            <td field-name=\"person_name\">\n              <span>{{bmap[gridItem].person_name}}</span>\n            </td>\n            <td field-name=\"datetime\">\n              <span>{{bmap[gridItem].datetime.format(\"HH:mm\")}}</span>\n            </td>\n            <td>\n              <span ng-if=\"bmap[gridItem].hasStatus(\'checked_in\')\">\n                {{bmap[gridItem].statusTime(\"checked_in\").format(\"HH:mm\")}}\n              </span>\n              <span ng-if=\"!bmap[gridItem].hasStatus(\'checked_in\')\">\n                <button ng-click=\"setStatus(bmap[gridItem], \'checked_in\')\" class=\"btn btn-default btn-xs btn-block\">\n                  <i class=\"fa fa-check-square-o\"></i>\n                  Check in\n                </button>\n              </span>\n            </td>\n            <td>\n              <span ng-if=\"bmap[gridItem].hasStatus(\'being_seen\')\">\n                {{bmap[gridItem].statusTime(\"being_seen\").format(\"HH:mm\")}}\n              </span>\n              <span ng-if=\"!bmap[gridItem].hasStatus(\'being_seen\') && !bmap[gridItem].hasStatus(\'checked_in\') && bmap[gridItem].sinceStart() > 0\" ng-class=\"bmap[gridItem].sinceStart() | gar:1000:10000\">\n                Was due at {{ bmap[gridItem].sinceStart() | time_period }}\n              </span>\n              <span ng-if=\"!bmap[gridItem].hasStatus(\'being_seen\') && bmap[gridItem].hasStatus(\'checked_in\')\">\n                <button ng-click=\"setStatus(bmap[gridItem], \'being_seen\')\" class=\"btn btn-default btn-xs pull-right\">\n                  <i class=\"fa fa-check-square\"></i>\n                  Serve\n                </button>\n                <span ng-class=\"bmap[gridItem].sinceStart({later: \'checked_in\'}) | gar:1000:10000\" > Waiting for {{ bmap[gridItem].sinceStart({later: \'checked_in\'}) | time_period }}</span>\n              </span>\n            </td>\n\n            <td>\n              <span ng-if=\"bmap[gridItem].hasStatus(\'completed\')\">\n                {{bmap[gridItem].statusTime(\"completed\").format(\"HH:mm\")}}\n              </span>\n              <span ng-if=\"!bmap[gridItem].hasStatus(\'completed\') && bmap[gridItem].hasStatus(\'being_seen\')\">\n                <span ng-class=\"bmap[gridItem].sinceStatus(\'being_seen\') | gar:100:10\" > Being seen for {{ bmap[gridItem].sinceStatus(\'being_seen\') | time_period }}</span><br/>\n                <button ng-click=\"setStatus(bmap[gridItem], \'completed\')\" class=\"btn btn-default\">Completed</button>\n              </span>\n            </td>\n          </tr>\n        </tbody>\n        <tfoot>\n          <tr>\n              <td>\n                  <span tr-ng-grid-global-filter=\"\"></span>\n                  <span tr-ng-grid-pager=\"\"></span>\n              </td>\n          </tr> \n        </tfoot>\n        </table>\n    </div>\n  </div>\n</div>  \n");
$templateCache.put("dashboard_content_wrapper.html","<div class=\"content-wrapper\" lte-fix-height>\n  <div class=\"col-md-12\" ng-show=\"alerts.length\">\n    <br/>\n    <div alert ng-repeat=\"alert in alerts\" type=\"{{alert.type}}\" close=\"closeAlert(alert)\">\n      {{alert.msg}}\n    </div>\n  </div>\n  <section class=\"content-header\" ng-if=\"adminlte.heading\">\n    <h1>\n      {{adminlte.heading}}\n      <small ng-if=\"adminlte.subheading\" ng-bind=\'adminlte.subheading\'></small>\n    </h1>\n    <ol class=\"breadcrumb\" ng-if=\"adminlte.breadcrumbs\">\n      <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Level</a></li>\n      <li class=\"active\">Here</li>\n    </ol>\n  </section>\n\n  <section class=\"content\" ng-transclude></section>\n</div>\n");
$templateCache.put("dashboard_sidebar_wrapper.html","<aside class=\"main-sidebar\">\n  <section class=\"sidebar\">\n    <div class=\"clearfix\">\n      <a class=\"sidebar-toggle hidden-xs\" data-toggle=\"offcanvas\" role=\"button\">\n        <i class=\"fa fa-arrow-circle-right\" id=\"open\"></i>\n        <i class=\"fa fa-arrow-circle-left\" id=\"close\"></i>\n        <span class=\"sr-only\">Toggle navigation</span>\n      </a>\n    </div>\n    <ul class=\"sidebar-menu\" ng-transclude>\n    </ul>\n  </section>\n</aside>\n");
$templateCache.put("edit_block_modal_form.html","<div id=\"bb\">\n  <div class=\"modal-header\">\n    <button type=\"button\" class=\"close\" ng-click=\"cancel($event)\">&times;</button>\n    <h3 class=\"modal-title\">{{title}}</h3>\n  </div>\n  <form name=\"modal_form\" ng-submit=\"submit(modal_form)\">\n    <div ng-show=\"loading\" class=\"loader\"></div>\n    <div class=\"modal-body\" sf-schema=\"schema\" sf-form=\"form\"\n      sf-model=\"form_model\" sf-options=\"{formDefaults: {feedback: false}}\"\n      ng-hide=\"loading\">\n    </div>\n    <div class=\"modal-footer\">\n      <button class=\"btn btn-danger pull-left\"\n        ng-click=\"cancelEvent($event,\'block\')\">Cancel Block</button>\n      <input type=\"submit\" class=\"btn btn-primary\" ng-disabled=\"loading\"\n      value=\"Save Block\">\n      <button class=\"btn btn-default\" ng-click=\"cancel($event)\">Close</button>\n    </div>\n  </form>\n</div>  ");
$templateCache.put("edit_booking_modal_form.html","<div id=\"bb\">\n  <div class=\"modal-header\">\n    <button type=\"button\" class=\"close\" ng-click=\"cancel($event)\">&times;</button>\n    <h3 class=\"modal-title\">{{title}}</h3>\n  </div>\n  <form name=\"modal_form\" ng-submit=\"submit(modal_form)\">\n    <div ng-show=\"loading\" class=\"loader\"></div>\n    <div class=\"modal-body\" sf-schema=\"schema\" sf-form=\"form\"\n      sf-model=\"form_model\" sf-options=\"{formDefaults: {feedback: false}}\"\n      ng-hide=\"loading\">\n    </div>\n    <div class=\"modal-footer\">\n      <button class=\"btn btn-danger pull-left\"\n        ng-click=\"cancelEvent($event)\">Cancel Booking</button>\n      <input type=\"submit\" class=\"btn btn-primary\" ng-disabled=\"loading\"\n      value=\"Save Booking\">\n      <button class=\"btn btn-default\" ng-click=\"cancel($event)\">Close</button>\n    </div>\n  </form>\n</div>  \n");
$templateCache.put("iframe_page.html","<div bb-frame>\n  <iframe class=\"bb-page-frame\" ng-style=\"adminlte.iframe_style\"\n    seamless=\"seamless\" lte-pin-bottom scrolling=\"no\" ng-src=\"{{frame_src}}\"\n    allowtransparency=\"true\" style=\"display:none\" onload=\"this.style.display = \'block\';\">\n  </iframe>\n</div>\n");
$templateCache.put("resource_calendar_main.html","<div class=\"form-inline calendar-filters\">\n	<div class=\"form-group\">\n		<label>Show&nbsp;&nbsp;</label>\n		<toggle-switch \n			ng-change=\"changeSelectedResources()\"\n	    ng-model=\"showAll\"\n	    on-label=\"all\"\n	    off-label=\"some\"\n	    class=\"switch-primary\">\n	  </toggle-switch>\n	</div>\n	<div class=\"form-group\" ng-hide=\"showAll\">\n		<ui-select multiple ng-model=\"selectedResources.selected\" ng-change=\"changeSelectedResources()\" theme=\"bootstrap\" close-on-select=\"true\" title=\"Choose a person\" style=\"min-width: 300px;\">\n		  <ui-select-match placeholder=\"Select staff or resource...\">{{$item.name}}</ui-select-match>\n		  <ui-select-choices repeat=\"asset in assets | propsFilter: {name: $select.search, email: $select.search}\">\n		    <div ng-bind-html=\"asset.name | highlight: $select.search\"></div>\n		    <small ng-show=\"asset.email\">\n		      email: {{asset.email}}\n		    </small>\n		  </ui-select-choices>\n		</ui-select>\n	</div>\n	<div class=\"form-group\" ng-show=\"loading || calendarLoading\"><i class=\"fa fa-refresh fa-spin\"></i></div>  \n</div>\n\n<div id=\'loading_icon\' ng-show=\"loading\">\n  <div id=\'wait_graphic\'>&nbsp;</div>\n</div>\n<div id=\"uicalendar\" ui-calendar=\"uiCalOptions.calendar\" ng-model=\"eventSources\"\n  ng-if=\"eventSources\" calendar=\"resourceCalendar\"\n  class=\"resource-calendar\"></div>\n");}]);