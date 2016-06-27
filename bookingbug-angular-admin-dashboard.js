(function() {
  'use strict';
  angular.module('BBAdminDashboard.calendar.controllers', []);

  angular.module('BBAdminDashboard.calendar.services', []);

  angular.module('BBAdminDashboard.calendar.directives', []);

  angular.module('BBAdminDashboard.calendar.translations', []);

  angular.module('BBAdminDashboard.calendar', ['BBAdminDashboard.calendar.controllers', 'BBAdminDashboard.calendar.services', 'BBAdminDashboard.calendar.directives', 'BBAdminDashboard.calendar.translations']).run([
    'RuntimeStates', 'AdminCalendarOptions', function(RuntimeStates, AdminCalendarOptions) {
      if (AdminCalendarOptions.use_default_states) {
        return RuntimeStates.state('calendar', {
          parent: AdminCalendarOptions.parent_state,
          url: "/calendar/:assets",
          templateUrl: "calendar_page.html",
          controller: 'CalendarPageCtrl'
        });
      }
    }
  ]);

}).call(this);

(function() {
  'use strict';
  angular.module('BBAdminDashboard.check-in.controllers', []);

  angular.module('BBAdminDashboard.check-in.services', []);

  angular.module('BBAdminDashboard.check-in.directives', []);

  angular.module('BBAdminDashboard.check-in.translations', []);

  angular.module('BBAdminDashboard.check-in', ['BBAdminDashboard.check-in.controllers', 'BBAdminDashboard.check-in.services', 'BBAdminDashboard.check-in.directives', 'BBAdminDashboard.check-in.translations']).run([
    'RuntimeStates', 'AdminCheckInOptions', function(RuntimeStates, AdminCheckInOptions) {
      if (AdminCheckInOptions.use_default_states) {
        return RuntimeStates.state('checkin', {
          parent: AdminCheckInOptions.parent_state,
          url: "/check-in",
          templateUrl: "checkin_page.html",
          controller: 'CheckInPageCtrl'
        });
      }
    }
  ]);

}).call(this);

(function() {
  'use strict';
  angular.module('BBAdminDashboard.clients.controllers', []);

  angular.module('BBAdminDashboard.clients.services', []);

  angular.module('BBAdminDashboard.clients.directives', []);

  angular.module('BBAdminDashboard.clients.translations', []);

  angular.module('BBAdminDashboard.clients', ['BBAdminDashboard.clients.controllers', 'BBAdminDashboard.clients.services', 'BBAdminDashboard.clients.directives', 'BBAdminDashboard.clients.translations']).run([
    'RuntimeStates', 'AdminClientsOptions', function(RuntimeStates, AdminClientsOptions) {
      if (AdminClientsOptions.use_default_states) {
        return RuntimeStates.state('clients', {
          parent: AdminClientsOptions.parent_state,
          url: "/clients",
          templateUrl: "admin_clients.html",
          controller: 'ClientsPageCtrl'
        }).state('clients.new', {
          url: "/new",
          templateUrl: "client_new.html",
          controller: 'ClientsNewPageCtrl'
        }).state('clients.all', {
          url: "/all",
          templateUrl: "all_clients.html",
          controller: 'ClientsAllPageCtrl'
        }).state('clients.edit', {
          url: "/edit/:id",
          templateUrl: "admin_client.html",
          resolve: {
            client: function(company, $stateParams, AdminClientService) {
              var params;
              params = {
                company_id: company.id,
                id: $stateParams.id
              };
              return AdminClientService.query(params);
            }
          },
          controller: 'ClientsEditPageCtrl'
        });
      }
    }
  ]);

}).call(this);

(function() {
  'use strict';
  angular.module('BBAdminDashboard.config-iframe.controllers', []);

  angular.module('BBAdminDashboard.config-iframe.services', []);

  angular.module('BBAdminDashboard.config-iframe.directives', []);

  angular.module('BBAdminDashboard.config-iframe.translations', []);

  angular.module('BBAdminDashboard.config-iframe', ['BBAdminDashboard.config-iframe.controllers', 'BBAdminDashboard.config-iframe.services', 'BBAdminDashboard.config-iframe.directives', 'BBAdminDashboard.config-iframe.translations']).run([
    'RuntimeStates', 'AdminConfigIframeOptions', function(RuntimeStates, AdminConfigIframeOptions) {
      if (AdminConfigIframeOptions.use_default_states) {
        return RuntimeStates.state('config', {
          parent: AdminConfigIframeOptions.parent_state,
          url: "/config",
          templateUrl: "admin_config_page.html",
          controller: "ConfigIframePageCtrl"
        }).state('config.page', {
          url: "/page/:path",
          templateUrl: "iframe_page.html",
          controller: 'ConfigSubIframePageCtrl'
        });
      }
    }
  ]);

}).call(this);

(function() {
  'use strict';
  var BBAdminDashboardDependencies, adminBookingApp;

  angular.module('BBAdminDashboard.controllers', []);

  angular.module('BBAdminDashboard.filters', []);

  angular.module('BBAdminDashboard.services', []);

  angular.module('BBAdminDashboard.directives', []);

  angular.module('BBAdminDashboard.translations', []);

  BBAdminDashboardDependencies = ['ngStorage', 'ngResource', 'ngTouch', 'ngSanitize', 'ngIdle', 'ngLocalData', 'ngInputDate', 'ngCookies', 'BBAdmin', 'BBAdminServices', 'BBAdminBooking', 'BBAdmin.Directives', 'ui.calendar', 'ui.bootstrap', 'ui.router', 'ui.select', 'ct.ui.router.extras', 'trNgGrid', 'xeditable', 'toggle-switch', 'pascalprecht.translate', 'BBAdminDashboard.controllers', 'BBAdminDashboard.filters', 'BBAdminDashboard.services', 'BBAdminDashboard.directives', 'BBAdminDashboard.translations', 'BBAdminDashboard.check-in', 'BBAdminDashboard.clients', 'BBAdminDashboard.departments', 'BBAdminDashboard.login', 'BBAdminDashboard.logout', 'BBAdminDashboard.calendar', 'BBAdminDashboard.dashboard-iframe', 'BBAdminDashboard.members-iframe', 'BBAdminDashboard.settings-iframe', 'BBAdminDashboard.config-iframe', 'BBAdminDashboard.publish-iframe'];

  adminBookingApp = angular.module('BBAdminDashboard', BBAdminDashboardDependencies).config([
    '$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
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
        controller: 'CorePageController'
      });
    }
  ]).config(function($logProvider, $httpProvider) {
    $logProvider.debugEnabled(true);
    return $httpProvider.defaults.withCredentials = true;
  }).constant('idleTimeout', 600).constant('idleStart', 300).value('company_id', null).value('sso_token', false).config(function($idleProvider, idleStart, idleTimeout) {
    $idleProvider.idleDuration(idleStart);
    return $idleProvider.warningDuration(idleTimeout);
  }).config([
    '$translateProvider', 'AdminCoreOptionsProvider', function($translateProvider, AdminCoreOptionsProvider) {
      $translateProvider.useSanitizeValueStrategy('sanitize');
      $translateProvider.useLocalStorage();
      return $translateProvider.registerAvailableLanguageKeys(AdminCoreOptionsProvider.getOption('available_languages'), AdminCoreOptionsProvider.getOption('available_language_associations')).fallbackLanguage(AdminCoreOptionsProvider.getOption('available_languages'));
    }
  ]).run([
    '$translate', 'AdminCoreOptions', function($translate, AdminCoreOptions) {
      var browserLocale;
      $translate.preferredLanguage(AdminCoreOptions.default_language);
      if (AdminCoreOptions.use_browser_language) {
        browserLocale = $translate.negotiateLocale($translate.resolveClientLocale());
        if (_.contains(AdminCoreOptions.available_languages, browserLocale)) {
          return $translate.preferredLanguage(browserLocale);
        }
      }
    }
  ]);

}).call(this);

(function() {
  'use strict';
  angular.module('BBAdminDashboard.dashboard-iframe.controllers', []);

  angular.module('BBAdminDashboard.dashboard-iframe.services', []);

  angular.module('BBAdminDashboard.dashboard-iframe.directives', []);

  angular.module('BBAdminDashboard.dashboard-iframe.translations', []);

  angular.module('BBAdminDashboard.dashboard-iframe', ['BBAdminDashboard.dashboard-iframe.controllers', 'BBAdminDashboard.dashboard-iframe.services', 'BBAdminDashboard.dashboard-iframe.directives', 'BBAdminDashboard.dashboard-iframe.translations']).run([
    'RuntimeStates', 'AdminDashboardIframeOptions', function(RuntimeStates, AdminDashboardIframeOptions) {
      if (AdminDashboardIframeOptions.use_default_states) {
        return RuntimeStates.state('dashboard', {
          parent: AdminDashboardIframeOptions.parent_state,
          url: "/dashboard",
          controller: "DashboardIframePageCtrl",
          templateUrl: "admin_dashboard_page.html"
        }).state('dashboard.page', {
          url: "/page/:path",
          controller: 'DashboardSubIframePageCtrl',
          templateUrl: "iframe_page.html"
        });
      }
    }
  ]);

}).call(this);

(function() {
  'use strict';
  angular.module('BBAdminDashboard.logout.controllers', []);

  angular.module('BBAdminDashboard.logout.services', []);

  angular.module('BBAdminDashboard.logout.directives', []);

  angular.module('BBAdminDashboard.logout', ['BBAdminDashboard.logout.controllers', 'BBAdminDashboard.logout.services', 'BBAdminDashboard.logout.directives']).config([
    '$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
      return $stateProvider.state('logout', {
        url: '/logout',
        controller: 'LogoutPageCtrl'
      });
    }
  ]);

}).call(this);

(function() {
  'use strict';
  angular.module('BBAdminDashboard.members-iframe.controllers', []);

  angular.module('BBAdminDashboard.members-iframe.services', []);

  angular.module('BBAdminDashboard.members-iframe.directives', []);

  angular.module('BBAdminDashboard.members-iframe.translations', []);

  angular.module('BBAdminDashboard.members-iframe', ['BBAdminDashboard.members-iframe.controllers', 'BBAdminDashboard.members-iframe.services', 'BBAdminDashboard.members-iframe.directives', 'BBAdminDashboard.members-iframe.translations']).run([
    'RuntimeStates', 'AdminMembersIframeOptions', function(RuntimeStates, AdminMembersIframeOptions) {
      if (AdminMembersIframeOptions.use_default_states) {
        return RuntimeStates.state('members', {
          parent: AdminMembersIframeOptions.parent_state,
          url: '/members',
          templateUrl: 'admin_members_page.html',
          controller: 'MembersIframePageCtrl'
        }).state('members.page', {
          url: '/page/:path/:id',
          templateUrl: 'iframe_page.html',
          controller: 'MembersSubIframePageCtrl'
        });
      }
    }
  ]);

}).call(this);

(function() {
  'use strict';
  angular.module('BBAdminDashboard.login.controllers', []);

  angular.module('BBAdminDashboard.login.services', []);

  angular.module('BBAdminDashboard.login.directives', []);

  angular.module('BBAdminDashboard.login.translations', []);

  angular.module('BBAdminDashboard.login', ['BBAdminDashboard.login.controllers', 'BBAdminDashboard.login.services', 'BBAdminDashboard.login.directives', 'BBAdminDashboard.login.translations']).run([
    'RuntimeStates', 'AdminLoginOptions', function(RuntimeStates, AdminLoginOptions) {
      if (AdminLoginOptions.use_default_states) {
        return RuntimeStates.state('login', {
          url: "/login",
          controller: "LoginPageCtrl",
          templateUrl: "admin_login_page.html"
        });
      }
    }
  ]);

}).call(this);

(function() {
  'use strict';
  angular.module('BBAdminDashboard.departments.controllers', []);

  angular.module('BBAdminDashboard.departments.services', []);

  angular.module('BBAdminDashboard.departments.directives', []);

  angular.module('BBAdminDashboard.departments.translations', []);

  angular.module('BBAdminDashboard.departments', ['BBAdminDashboard.departments.controllers', 'BBAdminDashboard.departments.services', 'BBAdminDashboard.departments.directives', 'BBAdminDashboard.departments.translations']).config([
    '$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
      return $stateProvider.state('departments', {
        url: "/departments",
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
        },
        controller: 'DepartmentsPageCtrl'
      });
    }
  ]);

}).call(this);

(function() {
  'use strict';
  angular.module('BBAdminDashboard.settings-iframe.controllers', []);

  angular.module('BBAdminDashboard.settings-iframe.services', []);

  angular.module('BBAdminDashboard.settings-iframe.directives', []);

  angular.module('BBAdminDashboard.settings-iframe.translations', []);

  angular.module('BBAdminDashboard.settings-iframe', ['BBAdminDashboard.settings-iframe.controllers', 'BBAdminDashboard.settings-iframe.services', 'BBAdminDashboard.settings-iframe.directives', 'BBAdminDashboard.settings-iframe.translations']).run([
    'RuntimeStates', 'AdminSettingsIframeOptions', function(RuntimeStates, AdminSettingsIframeOptions) {
      if (AdminSettingsIframeOptions.use_default_states) {
        return RuntimeStates.state('settings', {
          parent: AdminSettingsIframeOptions.parent_state,
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
          url: "/page/:path",
          templateUrl: "iframe_page.html",
          controller: 'SettingsSubIframePageCtrl'
        });
      }
    }
  ]);

}).call(this);

(function() {
  'use strict';
  angular.module('BBAdminDashboard.publish-iframe.controllers', []);

  angular.module('BBAdminDashboard.publish-iframe.services', []);

  angular.module('BBAdminDashboard.publish-iframe.directives', []);

  angular.module('BBAdminDashboard.publish-iframe.translations', []);

  angular.module('BBAdminDashboard.publish-iframe', ['BBAdminDashboard.publish-iframe.controllers', 'BBAdminDashboard.publish-iframe.services', 'BBAdminDashboard.publish-iframe.directives', 'BBAdminDashboard.publish-iframe.translations']).run([
    'RuntimeStates', 'AdminPublishIframeOptions', function(RuntimeStates, AdminPublishIframeOptions) {
      if (AdminPublishIframeOptions.use_default_states) {
        return RuntimeStates.state('publish', {
          parent: AdminPublishIframeOptions.parent_state,
          url: '/publish',
          templateUrl: 'admin_publish_page.html',
          controller: 'PublishIframePageCtrl'
        }).state('publish.page', {
          url: '/page/:path',
          templateUrl: 'iframe_page.html',
          controller: 'PublishSubIframePageCtrl'
        });
      }
    }
  ]);

}).call(this);

(function() {
  'use strict';

  /*
  * @ngdoc controller
  * @name BBAdminDashboard.calendar.controllers.controller:CalendarPageCtrl
   *
  * @description
  * Controller for the calendar page
   */
  angular.module('BBAdminDashboard.calendar.controllers').controller('CalendarPageCtrl', [
    '$scope', '$state', function($scope, $state) {
      $scope.adminlte.side_menu = false;
      return $scope.adminlte.heading = null;
    }
  ]);

}).call(this);

(function() {
  'use strict';

  /*
  * @ngdoc service
  * @name BBAdminDashboard.calendar.services.service:AdminCalendarOptions
  *
  * @description
  * Returns a set of admin calendar configuration options
   */

  /*
  * @ngdoc service
  * @name BBAdminDashboard.calendar.services.service:AdminCalendarOptionsProvider
  *
  * @description
  * Provider
  *
  * @example
    <example>
    angular.module('ExampleModule').config ['AdminCalendarOptionsProvider', (AdminCalendarOptionsProvider) ->
      AdminCalendarOptionsProvider.setOption('option', 'value')
    ]
    </example>
   */
  angular.module('BBAdminDashboard.calendar.services').provider('AdminCalendarOptions', [
    function() {
      var options;
      options = {
        use_default_states: true,
        show_in_navigation: true,
        parent_state: 'root',
        column_format: null
      };
      this.setOption = function(option, value) {
        if (options.hasOwnProperty(option)) {
          options[option] = value;
        }
      };
      this.getOption = function(option) {
        if (options.hasOwnProperty(option)) {
          return options[option];
        }
      };
      this.$get = function() {
        return options;
      };
    }
  ]);

}).call(this);

(function() {
  angular.module('BBAdminDashboard.calendar.services').factory("PrePostTime", [
    '$compile', function($compile) {
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
    }
  ]);

}).call(this);

(function() {
  angular.module('BBAdminDashboard.calendar.directives').directive('bbResourceCalendar', function(uiCalendarConfig, AdminCompanyService, AdminBookingService, AdminPersonService, $q, $sessionStorage, ModalForm, BBModel, AdminBookingPopup, $window, $bbug, ColorPalette, AppConfig, Dialog, $timeout, $compile, $templateCache, BookingCollections, PrePostTime, AdminScheduleService, $filter) {
    var controller, link;
    controller = function($scope, $attrs, BBAssets, ProcessAssetsFilter, $state, GeneralOptions, AdminCalendarOptions) {
      var bookingBelongsToSelectedResource, filters, getCalendarAssets, height, isTimeRangeAvailable, labelAssembly, pusherBooking;
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
                end_date: end.format('YYYY-MM-DD'),
                skip_cache: true
              };
              return AdminBookingService.query(params).then(function(bookings) {
                var b, filteredBookings, i, len, ref;
                $scope.loading = false;
                filteredBookings = [];
                ref = bookings.items;
                for (i = 0, len = ref.length; i < len; i++) {
                  b = ref[i];
                  b.resourceIds = [];
                  if (b.person_id != null) {
                    b.resourceIds.push(b.person_id + '_p');
                  }
                  if (b.resource_id != null) {
                    b.resourceIds.push(b.resource_id + '_r');
                  }
                  b.useFullTime();
                  b.title = labelAssembly(b);
                  if (b.$has('edit')) {
                    b.startEditable = true;
                  }
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
            return $scope.getCompanyPromise().then(function(company) {
              var params;
              if (company.$has('external_bookings')) {
                params = {
                  start: start.format(),
                  end: end.format(),
                  no_cache: true
                };
                return company.$get('external_bookings', params).then(function(collection) {
                  return collection.$get('external_bookings').then(function(bookings) {
                    var b, i, j, len, len1;
                    for (i = 0, len = bookings.length; i < len; i++) {
                      b = bookings[i];
                      b.resourceIds = [];
                      if (b.person_id != null) {
                        b.resourceIds.push(b.person_id + '_p');
                      }
                      if (b.resource_id != null) {
                        b.resourceIds.push(b.resource_id + '_r');
                      }
                      for (j = 0, len1 = bookings.length; j < len1; j++) {
                        b = bookings[j];
                        b.type = 'external';
                      }
                    }
                    return callback(bookings);
                  });
                });
              } else {
                return callback([]);
              }
            });
          }
        }, {
          events: function(start, end, timezone, callback) {
            $scope.loading = true;
            return $scope.getCompanyPromise().then(function(company) {
              return AdminScheduleService.getAssetsScheduleEvents(company, start, end, !$scope.showAll, $scope.selectedResources.selected).then(function(availabilities) {
                var overAllAvailabilities;
                if (uiCalendarConfig.calendars.resourceCalendar.fullCalendar('getView').type === 'timelineDay') {
                  $scope.loading = false;
                  return callback(availabilities);
                } else {
                  overAllAvailabilities = [];
                  angular.forEach(availabilities, function(availability, index) {
                    var dayAvailability;
                    dayAvailability = _.filter(overAllAvailabilities, function(overAllAvailability) {
                      if (moment(overAllAvailability.start).dayOfYear() === moment(availability.start).dayOfYear()) {
                        return true;
                      }
                      return false;
                    });
                    if (dayAvailability.length > 0) {
                      if (moment(availability.start).unix() < moment(dayAvailability[0].start).unix()) {
                        dayAvailability[0].start = availability.start;
                      }
                      if (moment(availability.end).unix() > moment(dayAvailability[0].end).unix()) {
                        return dayAvailability[0].end = availability.end;
                      }
                    } else {
                      return overAllAvailabilities.push({
                        start: availability.start,
                        end: availability.end,
                        rendering: "background",
                        title: "Joined availability " + moment(availability.start).format('YYYY-MM-DD')
                      });
                    }
                  });
                  $scope.loading = false;
                  return callback(overAllAvailabilities);
                }
              });
            });
          }
        }
      ];
      bookingBelongsToSelectedResource = function(booking) {
        var belongs;
        belongs = false;
        _.each($scope.selectedResources.selected, function(asset) {
          if (_.contains(booking.resourceIds, asset.id)) {
            return belongs = true;
          }
        });
        return belongs;
      };
      labelAssembly = function(event) {
        var i, index, label, len, match, myRe, parts, ref, replaceWith;
        if ((($scope.labelAssembler == null) && event.status !== 3) || (($scope.blockLabelAssembler == null) && event.status === 3)) {
          return event.title;
        }
        myRe = new RegExp("\\{([a-zA-z_-]+)\\|?([a-zA-z_-]+)?:?([a-zA-z0-9{}_-]+)?\\}", "g");
        if (event.status === 3) {
          label = $scope.blockLabelAssembler;
        } else {
          label = $scope.labelAssembler;
        }
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
      if ($scope.options.min_time == null) {
        $scope.options.min_time = GeneralOptions.calendar_min_time;
      }
      if ($scope.options.max_time == null) {
        $scope.options.max_time = GeneralOptions.calendar_max_time;
      }
      if ($scope.options.cal_slot_duration == null) {
        $scope.options.cal_slot_duration = GeneralOptions.calendar_slot_duration;
      }
      $scope.uiCalOptions = {
        calendar: {
          schedulerLicenseKey: '0598149132-fcs-1443104297',
          eventStartEditable: false,
          eventDurationEditable: false,
          minTime: $scope.options.min_time,
          maxTime: $scope.options.max_time,
          height: height,
          header: {
            left: 'today,prev,next',
            center: 'title',
            right: 'timelineDay,timelineDayThirty,agendaWeek,month'
          },
          defaultView: 'timelineDay',
          views: {
            agendaWeek: {
              slotDuration: $filter('minutesToString')($scope.options.cal_slot_duration),
              buttonText: 'Week',
              groupByDateAndResource: false
            },
            month: {
              eventLimit: 5,
              buttonText: 'Month'
            },
            timelineDay: {
              slotDuration: $filter('minutesToString')($scope.options.cal_slot_duration),
              eventOverlap: false,
              slotWidth: 25,
              buttonText: 'Day (' + $scope.options.cal_slot_duration + 'm)',
              resourceAreaWidth: '18%'
            }
          },
          resourceGroupField: 'group',
          resourceLabelText: ' ',
          selectable: true,
          lazyFetching: false,
          columnFormat: AdminCalendarOptions.column_format,
          resources: function(callback) {
            return getCalendarAssets(callback);
          },
          eventDragStop: function(event, jsEvent, ui, view) {
            return event.oldResourceIds = event.resourceIds;
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
            if (event.$has('edit')) {
              return $scope.editBooking(event);
            }
          },
          eventRender: function(event, element) {
            var service;
            if (event.status === 3 || event.type === 'external') {
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
            if ((event.rendering == null) || event.rendering !== 'background') {
              return PrePostTime.apply(event, elements, view, $scope);
            }
          },
          select: function(start, end, jsEvent, view, resource) {
            var item_defaults, setTimeToMoment;
            if (jsEvent.target.className === 'fc-scroller') {
              return;
            }
            view.calendar.unselect();
            if (isTimeRangeAvailable(start, end, resource) || Math.abs(start.diff(end, 'days'))) {
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
              if (Math.abs(start.diff(end, 'days')) > 0) {
                end.subtract(1, 'days');
                end = setTimeToMoment(end, $scope.options.max_time);
              }
              item_defaults = {
                date: start.format('YYYY-MM-DD'),
                time: start.hour() * 60 + start.minute()
              };
              if (resource && resource.type === 'person') {
                item_defaults.person = resource.id.substring(0, resource.id.indexOf('_'));
              } else if (resource && resource.type === 'resource') {
                item_defaults.resource = resource.id.substring(0, resource.id.indexOf('_'));
              }
              return $scope.getCompanyPromise().then(function(company) {
                return AdminBookingPopup.open({
                  min_date: setTimeToMoment(start, $scope.options.min_time),
                  max_date: setTimeToMoment(end, $scope.options.max_time),
                  from_datetime: start,
                  to_datetime: end,
                  item_defaults: item_defaults,
                  first_page: "quick_pick",
                  company_id: company.id
                });
              });
            }
          },
          viewRender: function(view, element) {
            var date;
            date = uiCalendarConfig.calendars.resourceCalendar.fullCalendar('getDate');
            return $scope.currentDate = date.format();
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
      isTimeRangeAvailable = function(start, end, resource) {
        var events;
        events = uiCalendarConfig.calendars.resourceCalendar.fullCalendar('clientEvents', function(event) {
          return event.rendering === 'background' && start >= event.start && end <= event.end && ((resource && parseInt(event.resourceId) === parseInt(resource.id)) || !resource);
        });
        return events.length > 0;
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
          var asset, i, len;
          for (i = 0, len = assets.length; i < len; i++) {
            asset = assets[i];
            asset.id = asset.identifier;
          }
          $scope.loading = false;
          $scope.assets = assets;
          if (filters.requestedAssets.length > 0) {
            $scope.showAll = false;
            angular.forEach($scope.assets, function(asset) {
              var isInArray;
              isInArray = _.find(filters.requestedAssets, function(id) {
                return id === asset.id;
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
      getCalendarAssets = function(callback) {
        $scope.loading = true;
        return $scope.getCompanyPromise().then(function(company) {
          if ($scope.showAll) {
            return BBAssets(company).then(function(assets) {
              var asset, i, len;
              for (i = 0, len = assets.length; i < len; i++) {
                asset = assets[i];
                asset.id = asset.identifier;
              }
              $scope.loading = false;
              return callback(assets);
            });
          } else {
            $scope.loading = false;
            return callback($scope.selectedResources.selected);
          }
        });
      };
      $scope.updateBooking = function(booking) {
        var newAssetId;
        newAssetId = booking.resourceId.substring(0, booking.resourceId.indexOf('_'));
        if (booking.resourceId.indexOf('_p') > -1) {
          booking.person_id = newAssetId;
        } else if (booking.resourceId.indexOf('_r') > -1) {
          booking.resource_id = newAssetId;
        }
        return booking.$update().then(function(response) {
          booking.resourceIds = [];
          booking.resourceId = null;
          if (booking.person_id != null) {
            booking.resourceIds.push(booking.person_id + '_p');
          }
          if (booking.resource_id != null) {
            booking.resourceIds.push(booking.resource_id + '_r');
          }
          return uiCalendarConfig.calendars.resourceCalendar.fullCalendar('updateEvent', booking);
        });
      };
      $scope.editBooking = function(booking) {
        var templateUrl, title;
        if (booking.status === 3) {
          templateUrl = 'edit_block_modal_form.html';
          title = 'Edit Block';
        } else {
          templateUrl = 'edit_booking_modal_form.html';
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
                return uiCalendarConfig.calendars.resourceCalendar.fullCalendar('updateEvent', booking);
              }
            };
          })(this)
        });
      };
      pusherBooking = function(res) {
        var booking;
        if (res.id != null) {
          booking = _.first(uiCalendarConfig.calendars.resourceCalendar.fullCalendar('clientEvents', res.id));
          if (booking && booking.$refetch) {
            return booking.$refetch().then(function() {
              return uiCalendarConfig.calendars.resourceCalendar.fullCalendar('updateEvent', booking);
            });
          } else {
            return uiCalendarConfig.calendars.resourceCalendar.fullCalendar('refetchEvents');
          }
        }
      };
      $scope.pusherSubscribe = (function(_this) {
        return function() {
          var pusher_channel;
          if ($scope.company) {
            pusher_channel = $scope.company.getPusherChannel('bookings');
            pusher_channel.bind('create', pusherBooking);
            pusher_channel.bind('update', pusherBooking);
            return pusher_channel.bind('destroy', pusherBooking);
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
        uiCalElement = angular.element(document.getElementById('uicalendar'));
        toolbarElement = angular.element(uiCalElement.children()[0]);
        toolbarLeftElement = angular.element(toolbarElement.children()[0]);
        datePickerElement = $compile($templateCache.get('calendar_date_picker.html'))(scope);
        return toolbarLeftElement.append(datePickerElement);
      }, 0);
    };
    return {
      controller: controller,
      link: link,
      templateUrl: 'resource_calendar_main.html',
      replace: true,
      scope: {
        labelAssembler: '@',
        blockLabelAssembler: '@'
      }
    };
  });

}).call(this);

(function() {
  'use strict';

  /*
  * @ngdoc overview
  * @name BBAdminDashboard.calendar.translations
   *
  * @description
  * Translations for the admin calendar module
   */
  angular.module('BBAdminDashboard.calendar.translations').config([
    '$translateProvider', function($translateProvider) {
      return $translateProvider.translations('en', {
        'TEXT_2': 'Hello there!'
      });
    }
  ]);

}).call(this);

(function() {
  angular.module('BBAdminDashboard.check-in.directives').directive('bbCheckinTable', function() {
    return {
      restrict: 'AE',
      replace: false,
      scope: true,
      templateUrl: 'checkin_table.html',
      controller: 'CheckinsController',
      link: function(scope, element, attrs) {}
    };
  });

  angular.module('BBAdminDashboard.check-in.directives').controller('CheckinsController', function($scope, $rootScope, BusyService, $q, $filter, AdminTimeService, AdminBookingService, AdminSlotService, $timeout, AlertService) {
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
        var clone;
        clone = _.clone(booking);
        clone.current_multi_status = status;
        return booking.$update(clone).then(function(res) {
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
  'use strict';

  /*
  * @ngdoc service
  * @name BBAdminDashboard.check-in.services.service:AdminCheckInOptions
  *
  * @description
  * Returns a set of admin calendar configuration options
   */

  /*
  * @ngdoc service
  * @name BBAdminDashboard.check-in.services.service:AdminCheckInOptionsProvider
  *
  * @description
  * Provider
  *
  * @example
    <example>
    angular.module('ExampleModule').config ['AdminCheckInOptionsProvider', (AdminCheckInOptionsProvider) ->
      AdminCheckInOptionsProvider.setOption('option', 'value')
    ]
    </example>
   */
  angular.module('BBAdminDashboard.check-in.services').provider('AdminCheckInOptions', [
    function() {
      var options;
      options = {
        use_default_states: true,
        show_in_navigation: true,
        parent_state: 'root'
      };
      this.setOption = function(option, value) {
        if (options.hasOwnProperty(option)) {
          options[option] = value;
        }
      };
      this.getOption = function(option) {
        if (options.hasOwnProperty(option)) {
          return options[option];
        }
      };
      this.$get = function() {
        return options;
      };
    }
  ]);

}).call(this);

(function() {
  'use strict';

  /*
  * @ngdoc overview
  * @name BBAdminDashboard.check-in.translations
   *
  * @description
  * Translations for the admin check-in module
   */
  angular.module('BBAdminDashboard.check-in.translations').config([
    '$translateProvider', function($translateProvider) {
      return $translateProvider.translations('en', {
        'TEXT_1': 'Hello here!'
      });
    }
  ]);

}).call(this);

(function() {
  'use strict';

  /*
  * @ngdoc controller
  * @name BBAdminDashboard.clients.controllers.controller:ClientsAllPageCtrl
   *
  * @description
  * Controller for the clients all page
   */
  angular.module('BBAdminDashboard.clients.controllers').controller('ClientsAllPageCtrl', [
    '$scope', '$state', function($scope, $state) {
      return $scope.set_current_client(null);
    }
  ]);

}).call(this);

(function() {
  'use strict';

  /*
  * @ngdoc controller
  * @name BBAdminDashboard.clients.controllers.controller:ClientsEditPageCtrl
   *
  * @description
  * Controller for the clients edit page
   */
  angular.module('BBAdminDashboard.clients.controllers').controller('ClientsEditPageCtrl', [
    '$scope', 'client', '$state', 'company', 'AdminClientService', function($scope, client, $state, company, AdminClientService) {
      $scope.client = client;
      $scope.historicalStartDate = moment().add(-1, 'years');
      $scope.historicalEndDate = moment();
      return $scope.memberSaveCallback = function() {
        var params;
        params = {
          company_id: company.id,
          id: $state.params.id,
          flush: true
        };
        return AdminClientService.query(params).then(function(client) {
          return $scope.client = client;
        });
      };
    }
  ]);

}).call(this);

(function() {
  'use strict';

  /*
  * @ngdoc controller
  * @name BBAdminDashboard.clients.controllers.controller:ClientsNewPageCtrl
   *
  * @description
  * Controller for the clients new page
   */
  angular.module('BBAdminDashboard.clients.controllers').controller('ClientsNewPageCtrl', ['$scope', '$state', function($scope, $state) {}]);

}).call(this);

(function() {
  'use strict';

  /*
  * @ngdoc controller
  * @name BBAdminDashboard.clients.controllers.controller:ClientsPageCtrl
   *
  * @description
  * Controller for the clients page
   */
  angular.module('BBAdminDashboard.clients.controllers').controller('ClientsPageCtrl', [
    '$scope', '$state', function($scope, $state) {
      $scope.adminlte.heading = null;
      $scope.clientsOptions = {
        search: null
      };
      $scope.adminlte.side_menu = true;
      return $scope.set_current_client = function(client) {
        return $scope.current_client = client;
      };
    }
  ]);

}).call(this);

(function() {
  'use strict';

  /*
  * @ngdoc service
  * @name BBAdminDashboard.clients.services.service:AdminClientsOptions
  *
  * @description
  * Returns a set of admin calendar configuration options
   */

  /*
  * @ngdoc service
  * @name BBAdminDashboard.clients.services.service:AdminClientsOptionsProvider
  *
  * @description
  * Provider
  *
  * @example
    <example>
    angular.module('ExampleModule').config ['AdminClientsOptionsProvider', (AdminClientsOptionsProvider) ->
      AdminClientsOptionsProvider.setOption('option', 'value')
    ]
    </example>
   */
  angular.module('BBAdminDashboard.clients.services').provider('AdminClientsOptions', [
    function() {
      var options;
      options = {
        use_default_states: true,
        show_in_navigation: true,
        parent_state: 'root'
      };
      this.setOption = function(option, value) {
        if (options.hasOwnProperty(option)) {
          options[option] = value;
        }
      };
      this.getOption = function(option) {
        if (options.hasOwnProperty(option)) {
          return options[option];
        }
      };
      this.$get = function() {
        return options;
      };
    }
  ]);

}).call(this);

(function() {
  'use strict';

  /*
  * @ngdoc controller
  * @name BBAdminDashboard.check-in.controllers.controller:CheckInPageCtrl
   *
  * @description
  * Controller for the check-in page
   */
  angular.module('BBAdminDashboard.check-in.controllers').controller('CheckInPageCtrl', [
    '$scope', '$state', function($scope, $state) {
      return $scope.adminlte.heading = '';
    }
  ]);

}).call(this);

(function() {
  'use strict';

  /*
  * @ngdoc overview
  * @name BBAdminDashboard.clients.translations
   *
  * @description
  * Translations for the admin clients module
   */
  angular.module('BBAdminDashboard.clients.translations').config([
    '$translateProvider', function($translateProvider) {
      return $translateProvider.translations('en', {
        'TEXT_1': 'Hello here!'
      });
    }
  ]);

}).call(this);

(function() {
  'use strict';

  /*
  * @ngdoc controller
  * @name BBAdminDashboard.config-iframe.controllers.controller:ConfigIframePageCtrl
   *
  * @description
  * Controller for the config page
   */
  angular.module('BBAdminDashboard.config-iframe.controllers').controller('ConfigIframePageCtrl', [
    '$scope', '$state', '$rootScope', function($scope, $state, $rootScope) {
      $scope.parent_state = $state.is("config");
      $scope.path = "edit";
      return $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
        $scope.parent_state = false;
        if (toState.name === "config") {
          return $scope.parent_state = true;
        }
      });
    }
  ]);

}).call(this);

(function() {
  'use strict';

  /*
  * @ngdoc controller
  * @name BBAdminDashboard.config-iframe.controllers.controller:ConfigSubIframePageCtrl
   *
  * @description
  * Controller for the config sub page
   */
  angular.module('BBAdminDashboard.config-iframe.controllers').controller('ConfigSubIframePageCtrl', [
    '$scope', '$state', '$stateParams', function($scope, $state, $stateParams) {
      return $scope.path = $stateParams.path;
    }
  ]);

}).call(this);

(function() {
  'use strict';

  /*
  * @ngdoc service
  * @name BBAdminDashboard.config-iframe.services.service:AdminConfigIframeOptions
  *
  * @description
  * Returns a set of admin calendar configuration options
   */

  /*
  * @ngdoc service
  * @name BBAdminDashboard.config-iframe.services.service:AdminConfigIframeOptionsProvider
  *
  * @description
  * Provider
  *
  * @example
    <example>
    angular.module('ExampleModule').config ['AdminConfigIframeOptionsProvider', (AdminConfigIframeOptionsProvider) ->
      AdminConfigIframeOptionsProvider.setOption('option', 'value')
    ]
    </example>
   */
  angular.module('BBAdminDashboard.config-iframe.services').provider('AdminConfigIframeOptions', [
    function() {
      var options;
      options = {
        use_default_states: true,
        show_in_navigation: true,
        parent_state: 'root'
      };
      this.setOption = function(option, value) {
        if (options.hasOwnProperty(option)) {
          options[option] = value;
        }
      };
      this.getOption = function(option) {
        if (options.hasOwnProperty(option)) {
          return options[option];
        }
      };
      this.$get = function() {
        return options;
      };
    }
  ]);

}).call(this);

(function() {
  'use strict';

  /*
  * @ngdoc overview
  * @name BBAdminDashboard.config-iframe.translations
   *
  * @description
  * Translations for the admin config-iframe module
   */
  angular.module('BBAdminDashboard.config-iframe.translations').config([
    '$translateProvider', function($translateProvider) {
      return $translateProvider.translations('en', {
        'TEXT_1': 'Hello here!'
      });
    }
  ]);

}).call(this);

(function() {
  'use strict';

  /*
  * @ngdoc controller
  * @name BBAdminDashboard.controllers.controller:CorePageController
   *
  * @description
  * Controller for the layout (root state)
   */
  angular.module('BBAdminDashboard.controllers').controller('CorePageController', [
    '$scope', '$state', 'company', function($scope, $state, company) {
      $scope.company = company;
      $scope.bb.company = company;
      return moment.tz.setDefault(company.timezone);
    }
  ]);

}).call(this);

(function() {
  'use strict';
  angular.module('BBAdminDashboard.directives').directive('lteBody', function() {
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

  angular.module('BBAdminDashboard.directives').directive('lteSideMenu', function() {
    return {
      restrict: 'AE',
      link: function(scope, element, attrs) {
        return scope.adminlte.side_menu = attrs.lteSideMenu;
      }
    };
  });

  angular.module('BBAdminDashboard.directives').directive('lteNoSideMenu', function() {
    return {
      restrict: 'AE',
      link: function(scope, element, attrs) {
        if (scope.adminlte) {
          return scope.adminlte.side_menu = null;
        }
      }
    };
  });

  angular.module('BBAdminDashboard.directives').directive('lteHeading', function() {
    return {
      restrict: 'AE',
      link: function(scope, element, attrs) {
        return scope.adminlte.heading = attrs.lteHeading;
      }
    };
  });

  angular.module('BBAdminDashboard.directives').directive('bbDashboardSidebarWrapper', function($window) {
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

  angular.module('BBAdminDashboard.directives').directive('bbDashboardContentWrapper', function($window, $rootScope) {
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

  angular.module('BBAdminDashboard.directives').directive('lteFixHeight', function($window) {
    return {
      link: function(scope, element, attrs) {
        if ($window.$.AdminLTE && $window.$.AdminLTE.layout) {
          $window.$.AdminLTE.layout.fix();
          return $window.$.AdminLTE.layout.fixSidebar();
        }
      }
    };
  });

  angular.module('BBAdminDashboard.directives').directive('ltePinBottom', function($window, $bbug) {
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
  angular.module('BBAdminDashboard.directives').directive('bbAdminDashboard', function() {
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
  angular.module('BBAdminDashboard.directives').directive('bbFrame', function() {
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
  angular.module('BBAdminDashboard.directives').directive('bbIfLogin', function($modal, $log, $q, $rootScope, AdminCompanyService, $compile, $templateCache, ModalForm, BBModel) {
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


/*
* @ngdoc filter
* @name BBAdminDashboard.filters.filter:minutesToString
* @description
* Converts a number to the desired format (default is hour minute(HH:mm))
 */

(function() {
  angular.module('BBAdminDashboard.filters').filter('minutesToString', function() {
    return function(minutes, format) {
      if (format == null) {
        format = 'HH:mm';
      }
      return moment(moment.duration(minutes, 'minutes')._data).format(format);
    };
  });

}).call(this);


/*
* @ngdoc filter
* @name BBAdminDashboard.filters.filter:propsFilter
* @description
* Does an OR operation
 */

(function() {
  angular.module('BBAdminDashboard.filters').filter('propsFilter', function() {
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
            if ((item[prop] != null) && item[prop].toString().toLowerCase().indexOf(text) !== -1) {
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
  'use strict';

  /*
  * @ngdoc service
  * @name BBAdminDashboard.services.service:AdminCoreOptions
  *
  * @description
  * Returns a set of General configuration options
   */

  /*
  * @ngdoc service
  * @name BBAdminDashboard.services.service:AdminCoreOptionsProvider
  *
  * @description
  * Provider
  *
  * @example
    <example>
    angular.module('ExampleModule').config ['AdminCoreOptionsProvider', (AdminCoreOptionsProvider) ->
      AdminCoreOptionsProvider.setOption('option', 'value')
    ]
    </example>
   */
  angular.module('BBAdminDashboard.services').provider('AdminCoreOptions', [
    function() {
      var options;
      options = {
        default_language: 'en',
        use_browser_language: true,
        available_languages: ['en', 'es'],
        available_language_associations: {
          'en_*': 'en'
        }
      };
      this.setOption = function(option, value) {
        if (options.hasOwnProperty(option)) {
          options[option] = value;
        }
      };
      this.getOption = function(option) {
        if (options.hasOwnProperty(option)) {
          return options[option];
        }
      };
      this.$get = function() {
        return options;
      };
    }
  ]);

}).call(this);


/***
* @ngdoc service
* @name BBAdminDashboard.services.service:AdminSsoLogin
*
* @description
* Responsible for loging in the admin user via the sso token
*
* @property {string} sso_token The sso_token to be used
* @property {function} callback (optional) funtion to be called after the successfull login, receives UserAdmin (BaseResource) obj as input
 */

(function() {
  angular.module('BBAdminDashboard.services').factory('AdminSsoLogin', [
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


/***
* @ngdoc service
* @name BBAdminDashboard.services.service:AdminSsoLoginUrl
*
* @description
* Returns the complete url for admin sso login
 */

(function() {
  angular.module('BBAdminDashboard.services').factory('AdminSsoLoginUrl', [
    '$rootScope', 'company_id', '$exceptionHandler', function($rootScope, company_id, $exceptionHandler) {
      if ($rootScope.bb.companyId == null) {
        $rootScope.bb.companyId |= company_id;
      }
      if (!$rootScope.bb.companyId) {
        $exceptionHandler(new Error('Angular value "company_id" is undefined! '), '', true);
      }
      return $rootScope.bb.api_url + "/api/v1/login/admin_sso/" + $rootScope.bb.companyId;
    }
  ]);

}).call(this);


/***
* @ngdoc service
* @name BBAdminDashboard.services.service:BusyService
*
* @description
* 
*
 */

(function() {
  angular.module('BBAdminDashboard.services').factory("BusyService", [
    '$q', '$log', '$rootScope', 'AlertService', 'ErrorService', function($q, $log, $rootScope, AlertService, ErrorService) {
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
    }
  ]);

}).call(this);

(function() {
  'use strict';

  /*
  * @ngdoc service
  * @name BBAdminDashboard.services.service:RuntimeStates
  *
  * @description
  * Returns an instance of $stateProvider that allows late state binding (on runtime)
   */

  /*
  * @ngdoc service
  * @name BBAdminDashboard.services.service:RuntimeStatesProvider
  *
  * @description
  * Provider
  *
  * @example
    <example>
    angular.module('ExampleModule').config ['RuntimeStatesProvider', '$stateProvider', (RuntimeStatesProvider, $stateProvider) ->
      RuntimeStatesProvider.setProvider($stateProvider)
    ]
    </example>
   */
  angular.module('BBAdminDashboard.services').provider('RuntimeStates', [
    '$stateProvider', function($stateProvider) {
      var stateProvider;
      stateProvider = $stateProvider;
      this.setProvider = function(provider) {
        return stateProvider = provider;
      };
      this.$get = function() {
        return stateProvider;
      };
    }
  ]);

}).call(this);

(function() {
  'use strict';

  /*
  * @ngdoc service
  * @name BBAdminDashboard.services.service:TemplateService
  *
  * @description
  * Checks if a custom version of the requested template exists in the templateCache,
  * otherwise returns the default version (which should be compiled with the module)
   */
  angular.module('BBAdminDashboard.services').factory('TemplateService', [
    '$templateCache', '$exceptionHandler', function($templateCache, $exceptionHandler) {
      return {
        get: function(template) {
          if ($templateCache.get(template) != null) {
            return $templateCache.get(template);
          } else if ($templateCache.get('/default' + template) != null) {
            return $templateCache.get('/default' + template);
          } else {
            return $exceptionHandler(new Error('Template "' + template + '" not found'), '', true);
          }
        }
      };
    }
  ]);

}).call(this);

(function() {
  'use strict';

  /*
  * @ngdoc overview
  * @name BBAdminDashboard.translations
   *
  * @description
  * Translations for the admin core module
   */
  angular.module('BBAdminDashboard.translations').config([
    '$translateProvider', function($translateProvider) {
      return $translateProvider.translations('en', {
        'TEXT_1': 'Hello here!'
      });
    }
  ]);

}).call(this);

(function() {
  'use strict';

  /*
  * @ngdoc overview
  * @name BBAdminDashboard.translations
   *
  * @description
  * Translations for the admin core module
   */
  angular.module('BBAdminDashboard.translations').config([
    '$translateProvider', function($translateProvider) {
      return $translateProvider.translations('es', {
        'TEXT_2': 'Hello ombre!'
      });
    }
  ]);

}).call(this);

(function() {
  'use strict';

  /*
  * @ngdoc controller
  * @name BBAdminDashboard.dashboard-iframe.controllers.controller:DashboardIframePageCtrl
   *
  * @description
  * Controller for the dashboard page
   */
  angular.module('BBAdminDashboard.dashboard-iframe.controllers').controller('DashboardIframePageCtrl', [
    '$scope', '$state', '$window', 'AdminBookingPopup', function($scope, $state, $window, AdminBookingPopup) {
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
    }
  ]);

}).call(this);

(function() {
  'use strict';

  /*
  * @ngdoc controller
  * @name BBAdminDashboard.dashboard-iframe.controllers.controller:DashboardSubIframePageCtrl
   *
  * @description
  * Controller for the dashboard sub page
   */
  angular.module('BBAdminDashboard.dashboard-iframe.controllers').controller('DashboardSubIframePageCtrl', [
    '$scope', '$state', '$stateParams', function($scope, $state, $stateParams) {
      return $scope.path = $stateParams.path;
    }
  ]);

}).call(this);

(function() {
  'use strict';

  /*
  * @ngdoc service
  * @name BBAdminDashboard.dashboard-iframe.services.service:AdminDashboardIframeOptions
  *
  * @description
  * Returns a set of admin calendar configuration options
   */

  /*
  * @ngdoc service
  * @name BBAdminDashboard.dashboard-iframe.services.service:AdminDashboardIframeOptionsProvider
  *
  * @description
  * Provider
  *
  * @example
    <example>
    angular.module('ExampleModule').config ['AdminDashboardIframeOptionsProvider', (AdminDashboardIframeOptionsProvider) ->
      AdminDashboardIframeOptionsProvider.setOption('option', 'value')
    ]
    </example>
   */
  angular.module('BBAdminDashboard.dashboard-iframe.services').provider('AdminDashboardIframeOptions', [
    function() {
      var options;
      options = {
        use_default_states: true,
        show_in_navigation: true,
        parent_state: 'root'
      };
      this.setOption = function(option, value) {
        if (options.hasOwnProperty(option)) {
          options[option] = value;
        }
      };
      this.getOption = function(option) {
        if (options.hasOwnProperty(option)) {
          return options[option];
        }
      };
      this.$get = function() {
        return options;
      };
    }
  ]);

}).call(this);

(function() {
  'use strict';

  /*
  * @ngdoc overview
  * @name BBAdminDashboard.dashboard-iframe.translations
   *
  * @description
  * Translations for the admin dashboard-iframe module
   */
  angular.module('BBAdminDashboard.dashboard-iframe.translations').config([
    '$translateProvider', function($translateProvider) {
      return $translateProvider.translations('en', {
        'TEXT_1': 'Hello here!'
      });
    }
  ]);

}).call(this);

(function() {
  'use strict';

  /*
  * @ngdoc controller
  * @name BBAdminDashboard.logout.controllers.controller:LogoutPageCtrl
   *
  * @description
  * Controller for the logout page
   */
  angular.module('BBAdminDashboard.logout.controllers').controller('LogoutPageCtrl', [
    '$scope', '$state', 'AdminLoginService', '$timeout', function($scope, $state, AdminLoginService, $timeout) {
      AdminLoginService.logout();
      return $timeout(function() {
        return $state.go('login', {}, {
          reload: true
        });
      });
    }
  ]);

}).call(this);

(function() {
  'use strict';

  /*
  * @ngdoc controller
  * @name BBAdminDashboard.members-iframe.controllers.controller:MembersIframePageCtrl
   *
  * @description
  * Controller for the members page
   */
  angular.module('BBAdminDashboard.members-iframe.controllers').controller('MembersIframePageCtrl', [
    '$scope', '$state', '$rootScope', '$window', function($scope, $state, $rootScope, $window) {
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
    }
  ]);

}).call(this);

(function() {
  'use strict';

  /*
  * @ngdoc controller
  * @name BBAdminDashboard.members-iframe.controllers.controller:MembersSubIframePageCtrl
   *
  * @description
  * Controller for the members sub page
   */
  angular.module('BBAdminDashboard.members-iframe.controllers').controller('MembersSubIframePageCtrl', [
    '$scope', '$state', '$stateParams', function($scope, $state, $stateParams) {
      $scope.path = $stateParams.path;
      if ($stateParams.id) {
        return $scope.extra_params = "id=" + $stateParams.id;
      } else {
        return $scope.extra_params = "";
      }
    }
  ]);

}).call(this);

(function() {
  'use strict';

  /*
  * @ngdoc service
  * @name BBAdminDashboard.members-iframe.services.service:AdminMembersIframeOptions
  *
  * @description
  * Returns a set of General configuration options
   */

  /*
  * @ngdoc service
  * @name BBAdminDashboard.members-iframe.services.service:AdminMembersIframeOptionsProvider
  *
  * @description
  * Provider
  *
  * @example
    <example>
    angular.module('ExampleModule').config ['AdminMembersIframeOptionsProvider', (AdminMembersIframeOptionsProvider) ->
      AdminMembersIframeOptionsProvider.setOption('option', 'value')
    ]
    </example>
   */
  angular.module('BBAdminDashboard.members-iframe.services').provider('AdminMembersIframeOptions', [
    function() {
      var options;
      options = {
        use_default_states: true,
        show_in_navigation: true,
        parent_state: 'root'
      };
      this.setOption = function(option, value) {
        if (options.hasOwnProperty(option)) {
          options[option] = value;
        }
      };
      this.getOption = function(option) {
        if (options.hasOwnProperty(option)) {
          return options[option];
        }
      };
      this.$get = function() {
        return options;
      };
    }
  ]);

}).call(this);

(function() {
  'use strict';

  /*
  * @ngdoc overview
  * @name BBAdminDashboard.members-iframe.translations
   *
  * @description
  * Translations for the admin members module
   */
  angular.module('BBAdminDashboard.members-iframe.translations').config([
    '$translateProvider', function($translateProvider) {
      return $translateProvider.translations('en', {
        'TEXT_1': 'Hello here!'
      });
    }
  ]);

}).call(this);

(function() {
  'use strict';

  /*
  * @ngdoc controller
  * @name BBAdminDashboard.login.controllers.controller:LoginPageCtrl
   *
  * @description
  * Controller for the login page
   */
  angular.module('BBAdminDashboard.login.controllers').controller('LoginPageCtrl', [
    '$scope', '$state', 'AdminLoginService', function($scope, $state, AdminLoginService) {
      if (AdminLoginService.isLoggedIn()) {
        AdminLoginService.logout();
      }
      return $scope.loginSuccess = function(company) {
        $scope.company = company;
        $scope.bb.company = company;
        return $state.go('calendar');
      };
    }
  ]);

}).call(this);

(function() {
  'use strict';

  /*
  * @ngdoc service
  * @name BBAdminDashboard.login.services.service:AdminLoginOptions
  *
  * @description
  * Returns a set of admin calendar configuration options
   */

  /*
  * @ngdoc service
  * @name BBAdminDashboard.login.services.service:AdminLoginOptionsProvider
  *
  * @description
  * Provider
  *
  * @example
    <example>
    angular.module('ExampleModule').config ['AdminLoginOptionsProvider', (AdminLoginOptionsProvider) ->
      AdminLoginOptionsProvider.setOption('option', 'value')
    ]
    </example>
   */
  angular.module('BBAdminDashboard.login.services').provider('AdminLoginOptions', [
    function() {
      var options;
      options = {
        use_default_states: true,
        show_in_navigation: true,
        parent_state: 'root'
      };
      this.setOption = function(option, value) {
        if (options.hasOwnProperty(option)) {
          options[option] = value;
        }
      };
      this.getOption = function(option) {
        if (options.hasOwnProperty(option)) {
          return options[option];
        }
      };
      this.$get = function() {
        return options;
      };
    }
  ]);

}).call(this);

(function() {
  'use strict';

  /*
  * @ngdoc overview
  * @name BBAdminDashboard.login.translations
   *
  * @description
  * Translations for the admin login module
   */
  angular.module('BBAdminDashboard.login.translations').config([
    '$translateProvider', function($translateProvider) {
      return $translateProvider.translations('en', {
        'TEXT_1': 'Hello here!'
      });
    }
  ]);

}).call(this);

(function() {
  'use strict';

  /*
  * @ngdoc controller
  * @name BBAdminDashboard.departments.controllers.controller:DepartmentsPageCtrl
   *
  * @description
  * Controller for the departments page
   */
  angular.module('BBAdminDashboard.departments.controllers').controller('DepartmentsPageCtrl', [
    '$scope', 'company', 'departments', 'AdminLoginService', '$state', '$timeout', function($scope, company, departments, AdminLoginService, $state, $timeout) {
      $scope.company = company;
      $scope.departments = departments;
      return $scope.selectDepartment = function(department) {
        return AdminLoginService.setCompany(department.id).then(function(user) {
          return $timeout(function() {
            return $state.go('calendar', {}, {
              reload: true
            });
          });
        });
      };
    }
  ]);

}).call(this);

(function() {
  'use strict';

  /*
  * @ngdoc service
  * @name BBAdminDashboard.departments.services.service:AdminDepartmentsOptions
  *
  * @description
  * Returns a set of admin calendar configuration options
   */

  /*
  * @ngdoc service
  * @name BBAdminDashboard.departments.services.service:AdminDepartmentsOptionsProvider
  *
  * @description
  * Provider
  *
  * @example
    <example>
    angular.module('ExampleModule').config ['AdminDepartmentsOptionsProvider', (AdminDepartmentsOptionsProvider) ->
      AdminDepartmentsOptionsProvider.setOption('option', 'value')
    ]
    </example>
   */
  angular.module('BBAdminDashboard.departments.services').provider('AdminDepartmentsOptions', [
    function() {
      var options;
      options = {
        use_default_states: true,
        show_in_navigation: true,
        parent_state: 'bb-admin'
      };
      this.setOption = function(option, value) {
        if (options.hasOwnProperty(option)) {
          options[option] = value;
        }
      };
      this.getOption = function(option) {
        if (options.hasOwnProperty(option)) {
          return options[option];
        }
      };
      this.$get = function() {
        return options;
      };
    }
  ]);

}).call(this);

(function() {
  'use strict';

  /*
  * @ngdoc overview
  * @name BBAdminDashboard.departments.translations
   *
  * @description
  * Translations for the admin departments module
   */
  angular.module('BBAdminDashboard.departments.translations').config([
    '$translateProvider', function($translateProvider) {
      return $translateProvider.translations('en', {
        'TEXT_1': 'Hello here!'
      });
    }
  ]);

}).call(this);

(function() {
  'use strict';

  /*
  * @ngdoc controller
  * @name BBAdminDashboard.settings-iframe.controllers.controller:SettingsIframePageCtrl
   *
  * @description
  * Controller for the settings page
   */
  angular.module('BBAdminDashboard.settings-iframe.controllers').controller('SettingsIframePageCtrl', [
    '$scope', '$state', '$rootScope', function($scope, $state, $rootScope) {
      $scope.parent_state = $state.is("setting");
      $scope.path = "conf";
      return $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
        $scope.parent_state = false;
        if (toState.name === "setting") {
          return $scope.parent_state = true;
        }
      });
    }
  ]);

}).call(this);

(function() {
  'use strict';

  /*
  * @ngdoc controller
  * @name BBAdminDashboard.settings-iframe.controllers.controller:SettingsSubIframePageCtrl
   *
  * @description
  * Controller for the settings sub page
   */
  angular.module('BBAdminDashboard.settings-iframe.controllers').controller('SettingsSubIframePageCtrl', [
    '$scope', '$state', '$stateParams', function($scope, $state, $stateParams) {
      $scope.path = $stateParams.path;
      if ($stateParams.id) {
        return $scope.extra_params = "id=" + $stateParams.id;
      } else {
        return $scope.extra_params = "";
      }
    }
  ]);

}).call(this);

(function() {
  'use strict';

  /*
  * @ngdoc service
  * @name BBAdminDashboard.settings-iframe.services.service:AdminSettingsIframeOptions
  *
  * @description
  * Returns a set of General configuration options
   */

  /*
  * @ngdoc service
  * @name BBAdminDashboard.settings-iframe.services.service:AdminSettingsIframeOptionsProvider
  *
  * @description
  * Provider
  *
  * @example
    <example>
    angular.module('ExampleModule').config ['AdminSettingsIframeOptionsProvider', (AdminSettingsIframeOptionsProvider) ->
      AdminSettingsIframeOptionsProvider.setOption('option', 'value')
    ]
    </example>
   */
  angular.module('BBAdminDashboard.settings-iframe.services').provider('AdminSettingsIframeOptions', [
    function() {
      var options;
      options = {
        use_default_states: true,
        show_in_navigation: true,
        parent_state: 'root'
      };
      this.setOption = function(option, value) {
        if (options.hasOwnProperty(option)) {
          options[option] = value;
        }
      };
      this.getOption = function(option) {
        if (options.hasOwnProperty(option)) {
          return options[option];
        }
      };
      this.$get = function() {
        return options;
      };
    }
  ]);

}).call(this);

(function() {
  'use strict';

  /*
  * @ngdoc overview
  * @name BBAdminDashboard.settings-iframe.translations
   *
  * @description
  * Translations for the admin settings-iframe module
   */
  angular.module('BBAdminDashboard.settings-iframe.translations').config([
    '$translateProvider', function($translateProvider) {
      return $translateProvider.translations('en', {
        'TEXT_1': 'Hello here!'
      });
    }
  ]);

}).call(this);

(function() {
  'use strict';

  /*
  * @ngdoc controller
  * @name BBAdminDashboard.publish-iframe.controllers.controller:PublishIframePageCtrl
   *
  * @description
  * Controller for the publish page
   */
  angular.module('BBAdminDashboard.publish-iframe.controllers').controller('PublishIframePageCtrl', [
    '$scope', '$state', '$rootScope', function($scope, $state, $rootScope) {
      $scope.parent_state = $state.is("publish");
      $scope.path = "conf";
      return $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
        $scope.parent_state = false;
        if (toState.name === "setting") {
          return $scope.parent_state = true;
        }
      });
    }
  ]);

}).call(this);

(function() {
  'use strict';

  /*
  * @ngdoc controller
  * @name BBAdminDashboard.publish-iframe.controllers.controller:PublishSubIframePageCtrl
   *
  * @description
  * Controller for the publish sub page
   */
  angular.module('BBAdminDashboard.publish-iframe.controllers').controller('PublishSubIframePageCtrl', [
    '$scope', '$state', '$stateParams', function($scope, $state, $stateParams) {
      return $scope.path = $stateParams.path;
    }
  ]);

}).call(this);

(function() {
  'use strict';

  /*
  * @ngdoc service
  * @name BBAdminDashboard.publish-iframe.services.service:AdminPublishIframeOptions
  *
  * @description
  * Returns a set of General configuration options
   */

  /*
  * @ngdoc service
  * @name BBAdminDashboard.publish-iframe.services.service:AdminPublishIframeOptionsProvider
  *
  * @description
  * Provider
  *
  * @example
    <example>
    angular.module('ExampleModule').config ['AdminPublishIframeOptionsProvider', (AdminPublishIframeOptionsProvider) ->
      AdminPublishIframeOptionsProvider.setOption('option', 'value')
    ]
    </example>
   */
  angular.module('BBAdminDashboard.publish-iframe.services').provider('AdminPublishIframeOptions', [
    function() {
      var options;
      options = {
        use_default_states: true,
        show_in_navigation: true,
        parent_state: 'root'
      };
      this.setOption = function(option, value) {
        if (options.hasOwnProperty(option)) {
          options[option] = value;
        }
      };
      this.getOption = function(option) {
        if (options.hasOwnProperty(option)) {
          return options[option];
        }
      };
      this.$get = function() {
        return options;
      };
    }
  ]);

}).call(this);

(function() {
  'use strict';

  /*
  * @ngdoc overview
  * @name BBAdminDashboard.publish-iframe.translations
   *
  * @description
  * Translations for the admin publish-iframe module
   */
  angular.module('BBAdminDashboard.publish-iframe.translations').config([
    '$translateProvider', function($translateProvider) {
      return $translateProvider.translations('en', {
        'TEXT_1': 'Hello here!'
      });
    }
  ]);

}).call(this);
