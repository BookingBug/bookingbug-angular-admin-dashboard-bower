(function() {
  'use strict';
  var adminbookingapp;

  adminbookingapp = angular.module('BBAdminDashboard', ['trNgGrid', 'BBAdmin', 'BBAdminServices', 'ui.calendar', 'ngStorage', 'BBAdminBooking', 'BBAdminDashboard', 'BBAdmin.Directives', 'ui.calendar', 'ngResource', 'ui.bootstrap', 'ui.router', 'ngTouch', 'ngInputDate', 'ngSanitize', 'xeditable', 'ngIdle', 'ngLocalData']);

  angular.module('BBAdminDashboard').config(function($logProvider) {
    return $logProvider.debugEnabled(true);
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

  angular.module('BBAdminDashboard').config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/dashboard");
    return $stateProvider.state('root', {
      template: "<div ui-view></div>",
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
              return $state.go('dashboard', {}, {
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
              return $state.go('dashboard', {}, {
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
      templateUrl: "admin_settings_page.html"
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
    return $scope.bb.company = company;
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
            return $bbug(element).height(($window.innerHeight - pos.top(-padding)) + "px");
          });
        }
      }
    };
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
  angular.module('BBAdminDashboard').directive('bbResourceCalendar', function(uiCalendarConfig, AdminCompanyService, AdminBookingService, AdminPersonService, $q, $sessionStorage, ModalForm, BBModel, AdminBookingPopup, $window, $bbug, ColorPalette, AppConfig, Dialog, $interval, $http, $timeout, $compile, $templateCache, BookingCollections) {
    var controller, link;
    controller = function($scope, $attrs) {
      var height;
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
                var b, i, len, ref;
                $scope.loading = false;
                ref = bookings.items;
                for (i = 0, len = ref.length; i < len; i++) {
                  b = ref[i];
                  b.resourceId = b.person_id;
                }
                $scope.bookings = bookings.items;
                return callback($scope.bookings);
              });
            });
          }
        }
      ];
      $scope.options = $scope.$eval($attrs.bbResourceCalendar);
      $scope.options || ($scope.options = {});
      height = $scope.options.header_height ? $bbug($window).height() - $scope.options.header_height : 800;
      $scope.uiCalOptions = {
        calendar: {
          eventStartEditable: true,
          eventDurationEditable: false,
          height: height,
          header: {
            left: 'today,prev,next',
            center: 'title',
            right: 'timelineDay,agendaWeek,month'
          },
          defaultView: 'timelineDay',
          views: {
            agendaWeek: {
              slotDuration: $scope.options.slotDuration || "00:05"
            },
            month: {
              eventLimit: 5
            },
            timelineDay: {
              slotDuration: $scope.options.slotDuration || "00:05",
              eventOverlap: false,
              slotWidth: 44
            }
          },
          resourceLabelText: 'Staff',
          selectable: true,
          resources: function(callback) {
            return $scope.getPeople(callback);
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
          resourceRender: function(resource, resourceTDs, dataTDs) {
            var dataTD, i, j, len, len1, resourceTD, results;
            for (i = 0, len = resourceTDs.length; i < len; i++) {
              resourceTD = resourceTDs[i];
              resourceTD.style.height = "44px";
              resourceTD.style.verticalAlign = "middle";
            }
            results = [];
            for (j = 0, len1 = dataTDs.length; j < len1; j++) {
              dataTD = dataTDs[j];
              results.push(dataTD.style.height = "44px");
            }
            return results;
          },
          eventRender: function(event, element) {
            var service;
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
            var element, i, len;
            if (view.type === "timelineDay") {
              for (i = 0, len = elements.length; i < len; i++) {
                element = elements[i];
                element.style.height = "27px";
              }
            }
            return elements.draggable();
          },
          select: function(start, end, jsEvent, view, resource) {
            var rid;
            view.calendar.unselect();
            rid = null;
            if (resource) {
              rid = resource.id;
            }
            return AdminBookingPopup.open({
              item_defaults: {
                date: start.format('YYYY-MM-DD'),
                time: start.hour() * 60 + start.minute(),
                person: rid
              }
            });
          },
          viewRender: function(view, element) {
            var date;
            date = uiCalendarConfig.calendars.resourceCalendar.fullCalendar('getDate');
            return $scope.currentDate = moment(date).format('YYYY-MM-DD');
          },
          eventResize: function(event, delta, revertFunc, jsEvent, ui, view) {
            event.duration = event.end.diff(event.start, 'minutes');
            return $scope.updateBooking(event);
          }
        }
      };
      $scope.getPeople = function(callback) {
        $scope.loading = true;
        return $scope.getCompanyPromise().then(function(company) {
          var params;
          params = {
            company: company
          };
          return AdminPersonService.query(params).then(function(people) {
            var i, len, p, ref;
            $scope.loading = false;
            $scope.people = _.sortBy(people, 'name');
            ref = $scope.people;
            for (i = 0, len = ref.length; i < len; i++) {
              p = ref[i];
              p.title = p.name;
            }
            uiCalendarConfig.calendars.resourceCalendar.fullCalendar('refetchEvents');
            return callback($scope.people);
          });
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
        return ModalForm.edit({
          templateUrl: 'edit_booking_modal_form.html',
          model: booking,
          title: 'Edit Booking',
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
      return $scope.$watch('currentDate', function(newDate, oldDate) {
        return $scope.lazyUpdateDate(newDate);
      });
    };
    link = function(scope, element, attrs) {
      scope.getCompanyPromise = function() {
        var defer;
        defer = $q.defer();
        if (scope.company) {
          defer.resolve(scope.company);
        } else {
          AdminCompanyService.query(attrs).then(function(company) {
            scope.company = company;
            return defer.resolve(scope.company);
          });
        }
        return defer.promise;
      };
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
        uiCalElement = angular.element(element.children()[1]);
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
      templateUrl: 'resource_calendar_main.html'
    };
  });

}).call(this);
