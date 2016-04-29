(function() {
  'use strict';
  var adminbookingapp;

  adminbookingapp = angular.module('BBAdminDashboard', ['trNgGrid', 'BBAdmin', 'BBAdminServices', 'ui.calendar', 'ngStorage', 'BBAdminBooking', 'BBAdmin.Directives', 'ui.calendar', 'ngResource', 'ui.bootstrap', 'ui.router', 'ct.ui.router.extras', 'ngTouch', 'ngInputDate', 'ngSanitize', 'xeditable', 'ngIdle', 'ngLocalData', 'toggle-switch', 'ui.select']);

  angular.module('BBAdminDashboard').config(function($logProvider, $httpProvider) {
    $logProvider.debugEnabled(true);
    return $httpProvider.defaults.withCredentials = true;
  });

  angular.module('BBAdminDashboard.Directives', []);

  angular.module('BBAdminDashboard.Services', ['ngResource', 'ngSanitize', 'ngLocalData']);

  angular.module('BBAdminDashboard.Controllers', ['ngLocalData', 'ngSanitize']);

  angular.module('BBAdminDashboard').run(function(editableOptions) {
    return editableOptions.theme = 'bs3';
  });

  angular.module('BBAdminDashboard').constant('idleTimeout', 600);

  angular.module('BBAdminDashboard').constant('idleStart', 300);

  angular.module('BBAdminDashboard').config(function($idleProvider, idleStart, idleTimeout) {
    $idleProvider.idleDuration(idleStart);
    return $idleProvider.warningDuration(idleTimeout);
  });

  angular.module('BBAdminDashboard').value('company_id', null);

  angular.module('BBAdminDashboard').value('sso_token', false);

  angular.module('BBAdminDashboard').config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.root_state = "dashboard";
    $urlRouterProvider.otherwise("/" + $stateProvider.root_state);
    return $stateProvider.state('root', {
      template: "<div ui-view></div>",
      resolve: {
        sso: function($q, sso_token, AdminLoginService, $injector) {
          var defer;
          defer = $q.defer();
          AdminLoginService.isLoggedIn().then(function(loggedIn) {
            var AdminSsoLogin;
            if (!loggedIn && sso_token !== false) {
              AdminSsoLogin = $injector.get('AdminSsoLogin');
              return AdminSsoLogin(sso_token, function(admin) {
                AdminLoginService.setLogin(admin);
                return defer.resolve();
              });
            } else {
              return defer.resolve();
            }
          });
          return defer.promise;
        },
        user: function($q, AdminLoginService, $timeout, $state, sso) {
          var defer;
          defer = $q.defer();
          AdminLoginService.user().then(function(user) {
            if (user) {
              return defer.resolve(user);
            } else {
              return $timeout(function() {
                return $state.go('login', {}, {
                  reload: true
                });
              });
            }
          }, function(err) {
            return $timeout(function() {
              return $state.go('login', {}, {
                reload: true
              });
            });
          });
          return defer.promise;
        },
        company: function(user, $q, $timeout, $state) {
          var defer;
          defer = $q.defer();
          user.getCompanyPromise().then(function(company) {
            if (company.companies && company.companies.length > 0) {
              return $timeout(function() {
                return $state.go('departments', {}, {
                  reload: true
                });
              });
            } else {
              return defer.resolve(company);
            }
          }, function(err) {
            return $timeout(function() {
              console.log('failed to get company');
              return $state.go('login', {}, {
                reload: true
              });
            });
          });
          return defer.promise;
        }
      },
      controller: 'bbAdminRootPageController'
    }).state('departments', {
      url: "/departments",
      controller: function($scope, company, departments, AdminLoginService, $state, $timeout) {
        $scope.company = company;
        $scope.departments = departments;
        return $scope.selectDepartment = function(department) {
          return AdminLoginService.setCompany(department.id).then(function(user) {
            return $timeout(function() {
              return $state.go($stateProvider.root_state, {}, {
                reload: true
              });
            });
          });
        };
      },
      templateUrl: "admin_departments_page.html",
      resolve: {
        user: function($q, AdminLoginService, $timeout, $state) {
          var defer;
          defer = $q.defer();
          AdminLoginService.user().then(function(user) {
            if (user) {
              return defer.resolve(user);
            } else {
              return $timeout(function() {
                return $state.go('login', {}, {
                  reload: true
                });
              });
            }
          }, function(err) {
            return $timeout(function() {
              return $state.go('login', {}, {
                reload: true
              });
            });
          });
          return defer.promise;
        },
        company: function(user) {
          return user.getCompanyPromise();
        },
        departments: function(company, $q, $timeout, $state) {
          var defer;
          defer = $q.defer();
          if (company.companies && company.companies.length > 0) {
            defer.resolve(company.companies);
          } else {
            $timeout(function() {
              return $state.go($stateProvider.root_state, {}, {
                reload: true
              });
            });
          }
          return defer.promise;
        }
      }
    }).state('dashboard', {
      parent: "root",
      url: "/dashboard",
      controller: "bbAdminDashboardPageController",
      templateUrl: "admin_dashboard_page.html"
    }).state('dashboard.page', {
      parent: "dashboard",
      url: "/page/:path",
      templateUrl: "iframe_page.html",
      controller: function($scope, $stateParams) {
        return $scope.path = $stateParams.path;
      }
    }).state('view', {
      parent: "root",
      url: "/view",
      templateUrl: "admin_view_page.html"
    }).state('view.page', {
      parent: "view",
      url: "/page/:path",
      templateUrl: "iframe_page.html",
      controller: function($scope, $stateParams) {
        return $scope.path = $stateParams.path;
      }
    }).state('page', {
      parent: "root",
      url: "/page/:path",
      templateUrl: "iframe_page.html",
      controller: function($scope, $stateParams) {
        return $scope.path = $stateParams.path;
      }
    }).state('members', {
      parent: "root",
      url: "/members",
      controller: "bbAdminMembersPageController",
      templateUrl: "admin_members_page.html"
    }).state('members.page', {
      parent: "members",
      url: "/page/:path/:id",
      templateUrl: "iframe_page.html",
      controller: function($scope, $stateParams) {
        $scope.path = $stateParams.path;
        if ($stateParams.id) {
          return $scope.extra_params = "id=" + $stateParams.id;
        } else {
          return $scope.extra_params = "";
        }
      }
    }).state('config', {
      parent: "root",
      url: "/config",
      controller: "bbAdminConfigPageController",
      templateUrl: "admin_config_page.html"
    }).state('config.page', {
      url: "/page/:path",
      templateUrl: "iframe_page.html",
      controller: function($scope, $stateParams) {
        return $scope.path = $stateParams.path;
      }
    }).state('settings', {
      parent: "root",
      url: "/settings",
      templateUrl: "admin_settings_page.html",
      deepStateRedirect: {
        "default": {
          state: "settings.page",
          params: {
            path: "person"
          }
        },
        params: true
      }
    }).state('settings.page', {
      parent: "settings",
      url: "/page/:path",
      templateUrl: "iframe_page.html",
      controller: function($scope, $stateParams) {
        return $scope.path = $stateParams.path;
      }
    }).state('publish', {
      parent: "root",
      url: "/publish",
      controller: "bbAdminPublishPageController",
      templateUrl: "admin_publish_page.html"
    }).state('publish.page', {
      parent: "publish",
      url: "/page/:path",
      templateUrl: "iframe_page.html",
      controller: function($scope, $stateParams) {
        return $scope.path = $stateParams.path;
      }
    }).state('login', {
      url: "/login",
      controller: "bbAdminLoginPageController",
      templateUrl: "admin_login_page.html"
    }).state('logout', {
      url: "/logout",
      controller: function(AdminLoginService, $state, $timeout) {
        AdminLoginService.logout();
        return $timeout(function() {
          return $state.go('login', {}, {
            reload: true
          });
        });
      }
    }).state('checkin', {
      parent: 'root',
      url: "/checkin",
      templateUrl: "checkin_page.html"
    });
  });

}).call(this);

(function() {
  angular.module('BBAdminDashboard').controller('bbAdminConfigPageController', function($scope, $sce, $state, $rootScope, $window) {
    $scope.parent_state = $state.is("config");
    $scope.path = "edit";
    return $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
      $scope.parent_state = false;
      if (toState.name === "config") {
        return $scope.parent_state = true;
      }
    });
  });

}).call(this);

(function() {
  angular.module('BBAdminDashboard').controller('bbAdminDashboardPageController', function($scope, $sce, $state, $rootScope, $window, AdminBookingPopup) {
    $scope.parent_state = $state.is("view");
    $scope.bb.side_menu = "dashboard_menu";
    $scope.path = "view/dashboard/index";
    return $window.addEventListener('message', (function(_this) {
      return function(event) {
        if (event && event.data) {
          if (event.data.type && event.data.type === "booking") {
            return AdminBookingPopup.open({
              size: 'lg',
              company_id: $scope.bb.company.id,
              item_defaults: {
                date: event.data.date,
                time: event.data.iarray * 5,
                person: event.data.person,
                resource: event.data.resource
              }
            });
          }
        }
      };
    })(this));
  });

}).call(this);

(function() {
  angular.module('BBAdminDashboard').controller('bbAdminLoginPageController', function($scope, AdminLoginService, $state, $timeout) {
    if (AdminLoginService.isLoggedIn()) {
      AdminLoginService.logout();
    }
    return $scope.loginSuccess = function(company) {
      $scope.company = company;
      $scope.bb.company = company;
      return $state.go('dashboard');
    };
  });

}).call(this);

(function() {
  angular.module('BBAdminDashboard').controller('bbAdminMembersPageController', function($scope, $sce, $state, $rootScope, $window) {
    $scope.parent_state = $state.is("members");
    $scope.bb.side_menu = "member_menu";
    $scope.path = "client";
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
      $scope.adminlte.fixed_page = toParams.fixed;
      $scope.parent_state = false;
      if (toState.name === "members") {
        $scope.parent_state = true;
        return $scope.clearCurrentClient();
      }
    });
    $scope.setCurrentClient = function(client) {
      console.log("set current", client);
      if (client) {
        $rootScope.client_id = client;
        return $scope.extra_params = "id=" + client;
      } else {
        return $scope.clearCurrentClient();
      }
    };
    $scope.clearCurrentClient = function() {
      $rootScope.client_id = null;
      return $scope.extra_params = "";
    };
    return $window.addEventListener('message', (function(_this) {
      return function(event) {
        if (event && event.data) {
          if (event.data.controller === "client") {
            if (event.data.id) {
              $scope.setCurrentClient(event.data.id);
            }
            if (event.data.action === "single") {
              return $state.go("members.page", {
                path: 'client/single',
                id: event.data.id
              });
            }
          }
        }
      };
    })(this));
  });

}).call(this);

(function() {
  angular.module('BBAdminDashboard').controller('bbAdminPublishPageController', function($scope, $sce, $state, $rootScope, $window) {
    $scope.parent_state = $state.is("publish");
    $scope.path = "conf";
    return $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
      $scope.parent_state = false;
      if (toState.name === "setting") {
        return $scope.parent_state = true;
      }
    });
  });

}).call(this);

(function() {
  angular.module('BBAdminDashboard').controller('bbAdminRootPageController', function($scope, user, company) {
    $scope.company = company;
    $scope.bb.company = company;
    return moment.tz.setDefault(company.timezone);
  });

}).call(this);

(function() {
  angular.module('BBAdminDashboard').controller('bbAdminSettingsPageController', function($scope, $sce, $state, $rootScope, $window) {
    $scope.parent_state = $state.is("setting");
    $scope.path = "conf";
    return $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
      $scope.parent_state = false;
      if (toState.name === "setting") {
        return $scope.parent_state = true;
      }
    });
  });

}).call(this);

(function() {
  angular.module('BBAdminDashboard').directive('bbAdminDashboard', function() {
    var controller;
    controller = function($scope, $rootScope, $element, $window, $compile, $localStorage, AdminLoginService, $state, AlertService) {
      var api_url;
      api_url = $localStorage.getItem("api_url");
      if (!$scope.bb.api_url && api_url) {
        $scope.bb.api_url = api_url;
      }
      $rootScope.bb = $scope.bb;
      $compile("<span bb-display-mode></span>")($scope, (function(_this) {
        return function(cloned, scope) {
          return $($element).append(cloned);
        };
      })(this));
      $scope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
        AlertService.clear();
        $scope.adminlte.fixed_page = toParams.path && (toParams.path === "view/dashboard/index" || toParams.path === "view%2Fdashboard%2Findex");
        $scope.isLoading = true;
        if (toState.redirectTo) {
          event.preventDefault();
          return $state.go(toState.redirectTo, toParams);
        }
      });
      $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
        return $scope.isLoading = false;
      });
      $scope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
        return $scope.isLoading = false;
      });
      $scope.$on('$stateChangeNotFound', function(event, toState, toParams, fromState, fromParams) {
        return $scope.isLoading = false;
      });
      $scope.logout = function() {
        $scope.isLoading = true;
        return AdminLoginService.logout();
      };
      return $scope.closeAlert = function(alert) {
        return AlertService.closeAlert(alert);
      };
    };
    return {
      restrict: 'AE',
      controller: controller,
      templateUrl: 'admin_dashboard.html'
    };
  });

}).call(this);

(function() {
  'use strict';
  angular.module('BB').directive('lteBody', function() {
    return {
      restrict: 'AE',
      replace: true,
      scope: true,
      link: function(scope, element, attrs) {
        scope.adminlte || (scope.adminlte = {});
        scope.setPageTitle = function(title) {
          return $scope.adminlte.title = title;
        };
        scope.setPageSubtitle = function(subtitle) {
          return $scope.adminlte.subtitle = subtitle;
        };
        return scope.$watch('adminlte.side_menu', function(val) {
          if (val) {
            return element.removeClass('no-side-menu');
          } else {
            return element.addClass('no-side-menu');
          }
        });
      }
    };
  });

  angular.module('BB').directive('lteSideMenu', function() {
    return {
      restrict: 'AE',
      link: function(scope, element, attrs) {
        return scope.adminlte.side_menu = attrs.lteSideMenu;
      }
    };
  });

  angular.module('BB').directive('lteNoSideMenu', function() {
    return {
      restrict: 'AE',
      link: function(scope, element, attrs) {
        if (scope.adminlte) {
          return scope.adminlte.side_menu = null;
        }
      }
    };
  });

  angular.module('BB').directive('lteHeading', function() {
    return {
      restrict: 'AE',
      link: function(scope, element, attrs) {
        return scope.adminlte.heading = attrs.lteHeading;
      }
    };
  });

  angular.module('BBAdminDashboard').directive('bbDashboardSidebarWrapper', function($window) {
    return {
      restrict: 'AE',
      templateUrl: 'dashboard_sidebar_wrapper.html',
      transclude: true,
      link: function(scope, element, attrs) {
        scope.adminlte.side_menu = true;
        if ($window.$.AdminLTE.pushMenu) {
          return $window.$.AdminLTE.pushMenu.activate($window.$.AdminLTE.options.sidebarToggleSelector);
        }
      }
    };
  });

  angular.module('BBAdminDashboard').directive('bbDashboardContentWrapper', function($window, $rootScope) {
    return {
      restrict: 'AE',
      templateUrl: 'dashboard_content_wrapper.html',
      transclude: true,
      link: function(scope, element, attrs) {
        return $window.addEventListener('message', (function(_this) {
          return function(event) {
            if (event.data.height && !scope.adminlte.fixed_page) {
              return scope.$apply(function() {
                scope.adminlte.iframe_style = {
                  height: event.data.height + "px"
                };
                $window.$.AdminLTE.layout.fix();
                return $window.$.AdminLTE.layout.fixSidebar();
              });
            }
          };
        })(this));
      }
    };
  });

  angular.module('BBAdminDashboard').directive('lteFixHeight', function($window) {
    return {
      link: function(scope, element, attrs) {
        if ($window.$.AdminLTE && $window.$.AdminLTE.layout) {
          $window.$.AdminLTE.layout.fix();
          return $window.$.AdminLTE.layout.fixSidebar();
        }
      }
    };
  });

  angular.module('BBAdminDashboard').directive('ltePinBottom', function($window, $bbug) {
    return {
      restrict: 'AE',
      link: function(scope, element, attrs) {
        var padding, pos;
        if (scope.adminlte.fixed_page) {
          scope.adminlte.iframe_style = "";
          pos = $bbug(element).position();
          padding = element.closest('.content').length ? element.closest('.content').css('padding-bottom').replace("px", "") : 0;
          $bbug(element).height(($window.innerHeight - pos.top - padding) + "px");
          return angular.element($window).bind('resize', function() {
            pos = $bbug(element).position();
            return $bbug(element).height(($window.innerHeight - pos.top - padding) + "px");
          });
        }
      }
    };
  });

}).call(this);

(function() {
  angular.module('BBAdminDashboard').directive('bbCheckinTable', function() {
    return {
      restrict: 'AE',
      replace: false,
      scope: true,
      templateUrl: 'checkin_table.html',
      controller: 'CheckinsController',
      link: function(scope, element, attrs) {}
    };
  });

  angular.module('BBAdminDashboard').controller('CheckinsController', function($scope, $rootScope, BusyService, $q, $filter, AdminTimeService, AdminBookingService, AdminSlotService, $timeout, AlertService) {
    $scope.getAppointments = function(currentPage, filterBy, filterByFields, orderBy, orderByReverse) {
      var defer, mobile, params;
      if (filterByFields && (filterByFields.name != null)) {
        filterByFields.name = filterByFields.name.replace(/\s/g, '');
      }
      if (filterByFields && (filterByFields.mobile != null)) {
        mobile = filterByFields.mobile;
        if (mobile.indexOf('0') === 0) {
          filterByFields.mobile = mobile.substring(1);
        }
      }
      defer = $q.defer();
      params = {
        company: $scope.company,
        date: moment().format('YYYY-MM-DD'),
        url: $scope.bb.api_url
      };
      if (filterBy) {
        params.filter_by = filterBy;
      }
      if (filterByFields) {
        params.filter_by_fields = filterByFields;
      }
      if (orderBy) {
        params.order_by = orderBy;
      }
      if (orderByReverse) {
        params.order_by_reverse = orderByReverse;
      }
      AdminBookingService.query(params).then((function(_this) {
        return function(res) {
          var i, item, len, ref;
          $scope.booking_collection = res;
          $scope.bookings = [];
          $scope.bmap = {};
          ref = res.items;
          for (i = 0, len = ref.length; i < len; i++) {
            item = ref[i];
            if (item.status !== 3) {
              $scope.bookings.push(item.id);
              $scope.bmap[item.id] = item;
            }
          }
          $scope.booking_collection.addCallback($scope, function(booking, status) {
            var j, len1, ref1, results;
            $scope.bookings = [];
            $scope.bmap = {};
            ref1 = $scope.booking_collection.items;
            results = [];
            for (j = 0, len1 = ref1.length; j < len1; j++) {
              item = ref1[j];
              if (item.status !== 3) {
                $scope.bookings.push(item.id);
                results.push($scope.bmap[item.id] = item);
              } else {
                results.push(void 0);
              }
            }
            return results;
          });
          return defer.resolve($scope.bookings);
        };
      })(this), function(err) {
        return defer.reject(err);
      });
      return defer.promise;
    };
    $scope.setStatus = (function(_this) {
      return function(booking, status) {
        booking.current_multi_status = status;
        return booking.$update(booking).then(function(res) {
          return $scope.booking_collection.checkItem(res);
        }, function(err) {
          return AlertService.danger({
            msg: 'Something went wrong'
          });
        });
      };
    })(this);
    this.checker = (function(_this) {
      return function() {
        return $timeout(function() {
          return _this.checker();
        }, 1000);
      };
    })(this);
    $scope.getAppointments();
    return this.checker();
  });

}).call(this);

(function() {
  angular.module('BBAdminDashboard').directive('bbFrame', function() {
    return {
      restrict: 'AE',
      replace: true,
      controller: function($scope, $sce) {
        return $scope.frame_src = $sce.trustAsResourceUrl($scope.bb.api_url + '/' + unescape($scope.path) + ("?whitelabel=adminlte&uiversion=aphid&" + ($scope.extra_params ? $scope.extra_params : void 0)));
      }
    };
  });

}).call(this);

(function() {
  angular.module('BBAdminDashboard').directive('bbIfLogin', function($modal, $log, $q, $rootScope, AdminCompanyService, $compile, $templateCache, ModalForm, BBModel) {
    var compile, link;
    compile = function() {
      return {
        pre: function(scope, element, attributes) {
          scope.notLoaded = function(sc) {
            return null;
          };
          scope.setLoaded = function(sc) {
            return null;
          };
          scope.setPageLoaded = function() {
            return null;
          };
          $rootScope.start_deferred = $q.defer();
          $rootScope.connection_started = $rootScope.start_deferred.promise;
          this.whenready = $q.defer();
          scope.loggedin = this.whenready.promise;
          return AdminCompanyService.query(attributes).then(function(company) {
            scope.company = company;
            scope.bb || (scope.bb = {});
            scope.bb.company = company;
            this.whenready.resolve();
            return $rootScope.start_deferred.resolve();
          });
        },
        post: function(scope, element, attributes) {}
      };
    };
    link = function(scope, element, attrs) {};
    return {
      compile: compile
    };
  });

}).call(this);

(function() {
  angular.module('BBAdminDashboard').directive('bbResourceCalendar', function(uiCalendarConfig, AdminCompanyService, AdminBookingService, AdminPersonService, $q, $sessionStorage, ModalForm, BBModel, AdminBookingPopup, $window, $bbug, ColorPalette, AppConfig, Dialog, $timeout, $compile, $templateCache, BookingCollections, PrePostTime, AdminScheduleService, $filter) {
    var controller, link;
    controller = function($scope, $attrs, BBAssets, ProcessAssetsFilter, $state) {
      var bookingBelongsToSelectedResource, filters, height, labelAssembly;
      filters = {
        requestedAssets: ProcessAssetsFilter($state.params.assets)
      };
      $scope.eventSources = [
        {
          events: function(start, end, timezone, callback) {
            $scope.loading = true;
            return $scope.getCompanyPromise().then(function(company) {
              var params;
              params = {
                company: company,
                start_date: start.format('YYYY-MM-DD'),
                end_date: end.format('YYYY-MM-DD')
              };
              return AdminBookingService.query(params).then(function(bookings) {
                var b, filteredBookings, i, len, ref;
                $scope.loading = false;
                filteredBookings = [];
                ref = bookings.items;
                for (i = 0, len = ref.length; i < len; i++) {
                  b = ref[i];
                  b.resourceId = b.person_id;
                  b.useFullTime();
                  b.title = labelAssembly(b);
                  if ($scope.showAll) {
                    filteredBookings.push(b);
                  } else if (!$scope.showAll && bookingBelongsToSelectedResource(b)) {
                    filteredBookings.push(b);
                  }
                }
                $scope.bookings = filteredBookings;
                return callback($scope.bookings);
              });
            });
          }
        }, {
          events: function(start, end, timezone, callback) {
            $scope.loading = true;
            return $scope.getCompanyPromise().then(function(company) {
              return AdminScheduleService.getAssetsScheduleEvents(company, start, end, !$scope.showAll, $scope.selectedResources.selected).then(function(availabilities) {
                $scope.loading = false;
                return callback(availabilities);
              });
            });
          }
        }
      ];
      bookingBelongsToSelectedResource = function(booking) {
        var belongs;
        belongs = false;
        _.each($scope.selectedResources.selected, function(asset) {
          if (parseInt(asset.id) === parseInt(booking.person_id) || parseInt(asset.id) === parseInt(booking.resourceId)) {
            return belongs = true;
          }
        });
        return belongs;
      };
      labelAssembly = function(event) {
        var i, index, label, len, match, myRe, parts, ref, replaceWith;
        if (($scope.labelAssembler == null) || event.status === 3) {
          return event.title;
        }
        myRe = new RegExp("\\{([a-zA-z_-]+)\\|?([a-zA-z_-]+)?:?([a-zA-z0-9{}_-]+)?\\}", "g");
        label = $scope.labelAssembler;
        ref = $scope.labelAssembler.match(myRe);
        for (index = i = 0, len = ref.length; i < len; index = ++i) {
          match = ref[index];
          parts = match.split(myRe);
          parts.splice(0, 1);
          parts.pop();
          if (event.hasOwnProperty(parts[0])) {
            replaceWith = event[parts[0]];
            if ((parts[1] != null) && ($filter(parts[1]) != null)) {
              if (parts[2] != null) {
                replaceWith = $filter(parts[1])(replaceWith, $scope.$eval(parts[2]));
              } else {
                replaceWith = $filter(parts[1])(replaceWith);
              }
            }
            label = label.replace(match, replaceWith);
          } else {
            label = label.replace(match, '');
          }
        }
        return label;
      };
      $scope.options = $scope.$eval($attrs.bbResourceCalendar);
      $scope.options || ($scope.options = {});
      height = $scope.options.header_height ? $bbug($window).height() - $scope.options.header_height : 800;
      if ($scope.options.minTime == null) {
        $scope.options.minTime = "09:00";
      }
      if ($scope.options.maxTime == null) {
        $scope.options.maxTime = "18:00";
      }
      $scope.uiCalOptions = {
        calendar: {
          schedulerLicenseKey: '0598149132-fcs-1443104297',
          eventStartEditable: true,
          eventDurationEditable: false,
          minTime: $scope.options.minTime,
          maxTime: $scope.options.maxTime,
          height: height,
          header: {
            left: 'today,prev,next',
            center: 'title',
            right: 'timelineDay,timelineDayThirty,agendaWeek,month'
          },
          defaultView: 'timelineDay',
          views: {
            agendaWeek: {
              slotDuration: $scope.options.slotDuration || "00:05",
              buttonText: 'Week',
              groupByDateAndResource: false
            },
            month: {
              eventLimit: 5,
              buttonText: 'Month'
            },
            timelineDay: {
              slotDuration: $scope.options.slotDuration || "00:05",
              eventOverlap: false,
              slotWidth: 25,
              buttonText: 'Day (5m)',
              resourceAreaWidth: '18%'
            },
            timelineDayThirty: {
              type: 'timeline',
              slotDuration: "00:30",
              eventOverlap: false,
              slotWidth: 25,
              buttonText: 'Day (30m)',
              resourceAreaWidth: '18%'
            }
          },
          resourceLabelText: 'Staff',
          selectable: true,
          resources: function(callback) {
            return $scope.getCalendarAssets(callback);
          },
          eventDrop: function(event, delta, revertFunc) {
            return Dialog.confirm({
              model: event,
              body: "Are you sure you want to move this booking?",
              success: (function(_this) {
                return function(model) {
                  return $scope.updateBooking(event);
                };
              })(this),
              fail: function() {
                return revertFunc();
              }
            });
          },
          eventClick: function(event, jsEvent, view) {
            return $scope.editBooking(event);
          },
          eventRender: function(event, element) {
            var service;
            if (event.status === 3) {
              element.find('.fc-bg').css({
                'background-color': '#000'
              });
            }
            service = _.findWhere($scope.services, {
              id: event.service_id
            });
            if (service) {
              element.css('background-color', service.color);
              element.css('color', service.textColor);
              return element.css('border-color', service.textColor);
            }
          },
          eventAfterRender: function(event, elements, view) {
            PrePostTime.apply(event, elements, view, $scope);
            if ((event.rendering == null) || event.rendering !== 'background') {
              return elements.draggable();
            }
          },
          select: function(start, end, jsEvent, view, resource) {
            var rid;
            view.calendar.unselect();
            rid = null;
            if (resource) {
              rid = resource.id;
            }
            return $scope.getCompanyPromise().then(function(company) {
              var setTimeToMoment;
              setTimeToMoment = function(date, time) {
                var newDate;
                newDate = moment(time, 'HH:mm');
                newDate.set({
                  'year': parseInt(date.get('year')),
                  'month': parseInt(date.get('month')),
                  'date': parseInt(date.get('date')),
                  'second': 0
                });
                return newDate;
              };
              return AdminBookingPopup.open({
                min_date: setTimeToMoment(start, $scope.options.minTime),
                max_date: setTimeToMoment(end, $scope.options.maxTime),
                from_datetime: start,
                to_datetime: end,
                item_defaults: {
                  date: start.format('YYYY-MM-DD'),
                  time: start.hour() * 60 + start.minute(),
                  person: rid
                },
                first_page: "quick_pick",
                company_id: company.id
              });
            });
          },
          viewRender: function(view, element) {
            var date;
            return date = uiCalendarConfig.calendars.resourceCalendar.fullCalendar('getDate');
          },
          eventResize: function(event, delta, revertFunc, jsEvent, ui, view) {
            event.duration = event.end.diff(event.start, 'minutes');
            return $scope.updateBooking(event);
          },
          loading: function(isLoading, view) {
            return $scope.calendarLoading = isLoading;
          }
        }
      };
      $scope.getCompanyPromise = function() {
        var defer;
        defer = $q.defer();
        if ($scope.company) {
          defer.resolve($scope.company);
        } else {
          AdminCompanyService.query($attrs).then(function(company) {
            $scope.company = company;
            return defer.resolve($scope.company);
          });
        }
        return defer.promise;
      };
      $scope.assets = [];
      $scope.showAll = true;
      $scope.selectedResources = {
        selected: []
      };
      $scope.changeSelectedResources = function() {
        if ($scope.showAll) {
          $scope.selectedResources.selected = [];
        }
        uiCalendarConfig.calendars.resourceCalendar.fullCalendar('refetchResources');
        return uiCalendarConfig.calendars.resourceCalendar.fullCalendar('refetchEvents');
      };
      $scope.getCompanyPromise().then(function(company) {
        $scope.loading = true;
        return BBAssets(company).then(function(assets) {
          $scope.loading = false;
          $scope.assets = assets;
          if (filters.requestedAssets.length > 0) {
            $scope.showAll = false;
            angular.forEach($scope.assets, function(asset) {
              var isInArray;
              isInArray = _.find(filters.requestedAssets, function(id) {
                return parseInt(id) === asset.id;
              });
              if (typeof isInArray !== 'undefined') {
                return $scope.selectedResources.selected.push(asset);
              }
            });
            return $scope.changeSelectedResources();
          }
        });
      });
      $scope.$watch('selectedResources.selected', function(newValue, oldValue) {
        var assets, params;
        if (newValue !== oldValue) {
          assets = [];
          angular.forEach(newValue, function(asset) {
            return assets.push(asset.id);
          });
          params = $state.params;
          params.assets = assets.join();
          return $state.go($state.current.name, params, {
            notify: false,
            reload: false
          });
        }
      });
      $scope.getCalendarAssets = function(callback) {
        $scope.loading = true;
        return $scope.getCompanyPromise().then(function(company) {
          if ($scope.showAll) {
            return BBAssets(company).then(function(assets) {
              $scope.loading = false;
              return callback($scope.assets);
            });
          } else {
            $scope.loading = false;
            return callback($scope.selectedResources.selected);
          }
        });
      };
      $scope.updateBooking = function(booking) {
        booking.person_id = booking.resourceId;
        return booking.$update().then(function(response) {
          booking.resourceId = booking.person_id;
          return uiCalendarConfig.calendars.resourceCalendar.fullCalendar('updateEvent', booking);
        });
      };
      $scope.editBooking = function(booking) {
        var templateUrl, title;
        if (booking.status === 3) {
          templateUrl = 'edit_block_modal_form.html';
          title = 'Edit Block';
        } else {
          templateUrl = 'edit_block_modal_form.html';
          title = 'Edit Booking';
        }
        return ModalForm.edit({
          templateUrl: templateUrl,
          model: booking,
          title: title,
          success: (function(_this) {
            return function(response) {
              if (response.is_cancelled) {
                return uiCalendarConfig.calendars.resourceCalendar.fullCalendar('removeEvents', [response.id]);
              } else {
                booking.resourceId = booking.person_id;
                return uiCalendarConfig.calendars.resourceCalendar.fullCalendar('updateEvent', booking);
              }
            };
          })(this)
        });
      };
      $scope.pusherSubscribe = (function(_this) {
        return function() {
          if ($scope.company) {
            return $scope.company.pusherSubscribe(function(res) {
              var booking;
              if (res.id != null) {
                booking = _.first(uiCalendarConfig.calendars.resourceCalendar.fullCalendar('clientEvents', res.id));
                if (booking) {
                  return booking.$refetch().then(function() {
                    return uiCalendarConfig.calendars.resourceCalendar.fullCalendar('updateEvent', booking);
                  });
                } else {
                  return $scope.company.$get('bookings', {
                    id: res.id
                  }).then(function(response) {
                    booking = new BBModel.Admin.Booking(response);
                    BookingCollections.checkItems(booking);
                    return uiCalendarConfig.calendars.resourceCalendar.fullCalendar('refetchEvents');
                  });
                }
              }
            }, {
              encrypted: false
            });
          }
        };
      })(this);
      $scope.openDatePicker = function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        return $scope.datePickerOpened = true;
      };
      $scope.updateDate = function(date) {
        if (uiCalendarConfig.calendars.resourceCalendar) {
          return uiCalendarConfig.calendars.resourceCalendar.fullCalendar('gotoDate', date);
        }
      };
      $scope.lazyUpdateDate = _.debounce($scope.updateDate, 400);
      $scope.datePickerOptions = {
        showButtonBar: false
      };
      $scope.$watch('currentDate', function(newDate, oldDate) {
        return $scope.lazyUpdateDate(newDate);
      });
      $scope.$on('refetchBookings', function() {
        return uiCalendarConfig.calendars.resourceCalendar.fullCalendar('refetchEvents');
      });
      return $scope.$on('newCheckout', function() {
        return uiCalendarConfig.calendars.resourceCalendar.fullCalendar('refetchEvents');
      });
    };
    link = function(scope, element, attrs) {
      scope.getCompanyPromise().then(function(company) {
        return company.$get('services').then(function(collection) {
          return collection.$get('services').then(function(services) {
            var s;
            scope.services = (function() {
              var i, len, results;
              results = [];
              for (i = 0, len = services.length; i < len; i++) {
                s = services[i];
                results.push(new BBModel.Admin.Service(s));
              }
              return results;
            })();
            return ColorPalette.setColors(scope.services);
          });
        });
      });
      scope.getCompanyPromise().then(function(company) {
        return scope.pusherSubscribe();
      });
      return $timeout(function() {
        var datePickerElement, toolbarElement, toolbarLeftElement, uiCalElement;
        uiCalElement = angular.element(element.children()[2]);
        toolbarElement = angular.element(uiCalElement.children()[0]);
        toolbarLeftElement = angular.element(toolbarElement.children()[0]);
        scope.currentDate = moment().format();
        datePickerElement = $compile($templateCache.get('calendar_date_picker.html'))(scope);
        return toolbarLeftElement.append(datePickerElement);
      }, 0);
    };
    return {
      controller: controller,
      link: link,
      templateUrl: 'resource_calendar_main.html',
      scope: {
        labelAssembler: '@'
      }
    };
  });

}).call(this);


/*
* @ngdoc filter
* @name BB.Filters.filter:propsFilter
* @description
* Does an OR operation
 */

(function() {
  angular.module('BB.Filters').filter('propsFilter', function() {
    return function(items, props) {
      var keys, out;
      out = [];
      if (angular.isArray(items)) {
        keys = Object.keys(props);
        items.forEach(function(item) {
          var i, itemMatches, prop, text;
          itemMatches = false;
          i = 0;
          while (i < keys.length) {
            prop = keys[i];
            text = props[prop].toLowerCase();
            if (item[prop].toString().toLowerCase().indexOf(text) !== -1) {
              itemMatches = true;
              break;
            }
            i++;
          }
          if (itemMatches) {
            out.push(item);
          }
        });
      } else {
        out = items;
      }
      return out;
    };
  });

}).call(this);

(function() {
  angular.module('BB').factory("BusyService", function($q, $log, $rootScope, BBModel, AlertService, ErrorService) {
    return {
      notLoaded: function(cscope) {
        cscope.$emit('show:loader', cscope);
        cscope.isLoaded = false;
        while (cscope) {
          if (cscope.hasOwnProperty('scopeLoaded')) {
            cscope.scopeLoaded = false;
          }
          cscope = cscope.$parent;
        }
      },
      setLoaded: function(cscope) {
        var loadingFinished;
        cscope.$emit('hide:loader', cscope);
        cscope.isLoaded = true;
        loadingFinished = true;
        while (cscope) {
          if (cscope.hasOwnProperty('scopeLoaded')) {
            if ($scope.areScopesLoaded(cscope)) {
              cscope.scopeLoaded = true;
            } else {
              loadingFinished = false;
            }
          }
          cscope = cscope.$parent;
        }
        if (loadingFinished) {
          return $rootScope.$broadcast('loading:finished');
        }
      },
      setPageLoaded: function(scope) {
        return null;
      },
      setLoadedAndShowError: function(scope, err, error_string) {
        $log.warn(err, error_string);
        this.setLoaded(scope);
        if (err.status === 409) {
          return AlertService.danger(ErrorService.getError('ITEM_NO_LONGER_AVAILABLE'));
        } else if (err.data && err.data.error === "Number of Bookings exceeds the maximum") {
          return AlertService.danger(ErrorService.getError('MAXIMUM_TICKETS'));
        } else {
          return AlertService.danger(ErrorService.getError('GENERIC'));
        }
      },
      areScopesLoaded: function(cscope) {
        var child;
        if (cscope.hasOwnProperty('isLoaded') && !cscope.isLoaded) {
          return false;
        } else {
          child = cscope.$$childHead;
          while (child) {
            if (!$scope.areScopesLoaded(child)) {
              return false;
            }
            child = child.$$nextSibling;
          }
          return true;
        }
      }
    };
  });

}).call(this);

(function() {
  angular.module('BBAdminDashboard').factory("PrePostTime", function($compile) {
    return {
      apply: function(event, elements, view, scope) {
        var contentDiv, e, element, i, len, post, postHeight, postWidth, pre, preHeight, preWidth, results, totalDuration;
        results = [];
        for (i = 0, len = elements.length; i < len; i++) {
          e = elements[i];
          element = angular.element(e);
          totalDuration = event.duration + event.pre_time + event.post_time;
          if (event.pre_time) {
            switch (view.name) {
              case "agendaWeek":
              case "agendaDay":
                preHeight = event.pre_time * (element.height() + 2) / totalDuration;
                pre = $compile("<div class='pre' style='height:" + preHeight + "px'></div>")(scope);
                element.prepend(pre);
                break;
              case "timelineDay":
                contentDiv = element.children()[0];
                preWidth = event.pre_time * (element.width() + 2) / totalDuration;
                pre = $compile("<div class='pre' style='width:" + preWidth + "px'></div>")(scope);
                element.prepend(pre);
                angular.element(contentDiv).css("padding-left", preWidth + "px");
            }
          }
          if (event.post_time) {
            switch (view.name) {
              case "agendaWeek":
              case "agendaDay":
                postHeight = event.post_time * (element.height() + 2) / totalDuration;
                post = $compile("<div class='post' style='height:" + postHeight + "px'></div>")(scope);
                results.push(element.append(post));
                break;
              case "timelineDay":
                postWidth = event.post_time * (element.width() + 2) / totalDuration;
                post = $compile("<div class='post' style='width:" + postWidth + "px'></div>")(scope);
                results.push(element.append(post));
                break;
              default:
                results.push(void 0);
            }
          } else {
            results.push(void 0);
          }
        }
        return results;
      }
    };
  });

}).call(this);


/***
* @ngdoc service
* @name BB:AdminSsoLoginUrl
*
* @description
* Returns the complete url for admin sso login
 */

(function() {
  angular.module('BB').factory('AdminSsoLoginUrl', [
    '$rootScope', 'company_id', '$exceptionHandler', function($rootScope, company_id, $exceptionHandler) {
      if ($rootScope.bb.companyId == null) {
        $rootScope.bb.companyId |= company_id;
      }
      if (!$rootScope.bb.companyId) {
        $exceptionHandler(new Error('Angular value "company_id" is undefined! '));
      }
      return $rootScope.bb.api_url + "/api/v1/login/admin_sso/" + $rootScope.bb.companyId;
    }
  ]);


  /***
  * @ngdoc service
  * @name BB:AdminSsoLogin
  *
  * @description
  * Responsible for loging in the admin user via the sso token
  *
  * @property {string} sso_token The sso_token to be used
  * @property {function} callback (optional) funtion to be called after the successfull login, receives UserAdmin (BaseResource) obj as input
   */

  angular.module('BB').factory('AdminSsoLogin', [
    'halClient', 'AdminSsoLoginUrl', function(halClient, AdminSsoLoginUrl) {
      return function(sso_token, callback) {
        var data;
        data = {
          token: sso_token
        };
        return halClient.$post(AdminSsoLoginUrl, {}, data).then(function(login) {
          var params;
          params = {
            auth_token: login.auth_token
          };
          return login.$get('administrator', params).then(function(admin) {
            if (typeof callback === 'function') {
              return callback(admin);
            }
          });
        });
      };
    }
  ]);

}).call(this);
