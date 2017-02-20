'use strict';

angular.module('BBAdminDashboard.calendar.controllers', []);
angular.module('BBAdminDashboard.calendar.services', []);
angular.module('BBAdminDashboard.calendar.directives', []);
angular.module('BBAdminDashboard.calendar.translations', []);

angular.module('BBAdminDashboard.calendar', ['BBAdminDashboard.calendar.controllers', 'BBAdminDashboard.calendar.services', 'BBAdminDashboard.calendar.directives', 'BBAdminDashboard.calendar.translations']);
'use strict';

angular.module('BBAdminDashboard.check-in.controllers', []);
angular.module('BBAdminDashboard.check-in.services', []);
angular.module('BBAdminDashboard.check-in.directives', []);
angular.module('BBAdminDashboard.check-in.translations', []);

angular.module('BBAdminDashboard.check-in', ['BBAdminDashboard.check-in.controllers', 'BBAdminDashboard.check-in.services', 'BBAdminDashboard.check-in.directives', 'BBAdminDashboard.check-in.translations']);
'use strict';

angular.module('BBAdminDashboard.clients.controllers', []);
angular.module('BBAdminDashboard.clients.services', []);
angular.module('BBAdminDashboard.clients.directives', []);
angular.module('BBAdminDashboard.clients.translations', []);

angular.module('BBAdminDashboard.clients', ['BBAdminDashboard.clients.controllers', 'BBAdminDashboard.clients.services', 'BBAdminDashboard.clients.directives', 'BBAdminDashboard.clients.translations']);
'use strict';

angular.module('BBAdminDashboard.config-iframe.controllers', []);
angular.module('BBAdminDashboard.config-iframe.services', []);
angular.module('BBAdminDashboard.config-iframe.directives', []);
angular.module('BBAdminDashboard.config-iframe.translations', []);

angular.module('BBAdminDashboard.config-iframe', ['BBAdminDashboard.config-iframe.controllers', 'BBAdminDashboard.config-iframe.services', 'BBAdminDashboard.config-iframe.directives', 'BBAdminDashboard.config-iframe.translations']);
'use strict';

angular.module('BBAdminDashboard', ['ngStorage', 'ngResource', 'ngTouch', 'ngSanitize', 'ngLocalData', 'ngCookies', 'ngMessages', 'BBAdmin', 'BBAdminServices', 'BBAdminBooking', 'BBAdmin.Directives', 'BBMember', 'ui.calendar', 'ui.bootstrap', 'ui.router', 'ct.ui.router.extras', 'trNgGrid', 'toggle-switch', 'pascalprecht.translate', 'angular-loading-bar', 'ngScrollable', 'toastr', 'BBAdminDashboard.check-in', 'BBAdminDashboard.clients', 'BBAdminDashboard.login', 'BBAdminDashboard.logout', 'BBAdminDashboard.reset-password', 'BBAdminDashboard.calendar', 'BBAdminDashboard.dashboard-iframe', 'BBAdminDashboard.members-iframe', 'BBAdminDashboard.settings-iframe', 'BBAdminDashboard.config-iframe', 'BBAdminDashboard.publish-iframe']);
'use strict';

angular.module('BBAdminDashboard.dashboard-iframe.controllers', []);
angular.module('BBAdminDashboard.dashboard-iframe.services', []);
angular.module('BBAdminDashboard.dashboard-iframe.directives', []);
angular.module('BBAdminDashboard.dashboard-iframe.translations', []);

angular.module('BBAdminDashboard.dashboard-iframe', ['BBAdminDashboard.dashboard-iframe.controllers', 'BBAdminDashboard.dashboard-iframe.services', 'BBAdminDashboard.dashboard-iframe.directives', 'BBAdminDashboard.dashboard-iframe.translations']);
'use strict';

angular.module('BBAdminDashboard.login.controllers', []);
angular.module('BBAdminDashboard.login.services', []);
angular.module('BBAdminDashboard.login.directives', []);
angular.module('BBAdminDashboard.login.translations', []);

angular.module('BBAdminDashboard.login', ['BBAdminDashboard.login.controllers', 'BBAdminDashboard.login.services', 'BBAdminDashboard.login.directives', 'BBAdminDashboard.login.translations']);
'use strict';

angular.module('BBAdminDashboard.logout.controllers', []);
angular.module('BBAdminDashboard.logout.services', []);
angular.module('BBAdminDashboard.logout.directives', []);

angular.module('BBAdminDashboard.logout', ['BBAdminDashboard.logout.controllers', 'BBAdminDashboard.logout.services', 'BBAdminDashboard.logout.directives']);
'use strict';

angular.module('BBAdminDashboard.members-iframe.controllers', []);
angular.module('BBAdminDashboard.members-iframe.services', []);
angular.module('BBAdminDashboard.members-iframe.directives', []);
angular.module('BBAdminDashboard.members-iframe.translations', []);

angular.module('BBAdminDashboard.members-iframe', ['BBAdminDashboard.members-iframe.controllers', 'BBAdminDashboard.members-iframe.services', 'BBAdminDashboard.members-iframe.directives', 'BBAdminDashboard.members-iframe.translations']);
'use strict';

angular.module('BBAdminDashboard.publish-iframe.controllers', []);
angular.module('BBAdminDashboard.publish-iframe.services', []);
angular.module('BBAdminDashboard.publish-iframe.directives', []);
angular.module('BBAdminDashboard.publish-iframe.translations', []);

angular.module('BBAdminDashboard.publish-iframe', ['BBAdminDashboard.publish-iframe.controllers', 'BBAdminDashboard.publish-iframe.services', 'BBAdminDashboard.publish-iframe.directives', 'BBAdminDashboard.publish-iframe.translations']);
'use strict';

angular.module('BBAdminDashboard.reset-password', []);
'use strict';

angular.module('BBAdminDashboard.settings-iframe.controllers', []);
angular.module('BBAdminDashboard.settings-iframe.services', []);
angular.module('BBAdminDashboard.settings-iframe.directives', []);
angular.module('BBAdminDashboard.settings-iframe.translations', []);

angular.module('BBAdminDashboard.settings-iframe', ['BBAdminDashboard.settings-iframe.controllers', 'BBAdminDashboard.settings-iframe.services', 'BBAdminDashboard.settings-iframe.directives', 'BBAdminDashboard.settings-iframe.translations']);
'use strict';

angular.module('BBAdminDashboard.calendar').run(function (RuntimeStates, AdminCalendarOptions, SideNavigationPartials) {
    'ngInject';

    // Choose to opt out of the default routing

    if (AdminCalendarOptions.use_default_states) {

        RuntimeStates.state('calendar', {
            parent: AdminCalendarOptions.parent_state,
            url: "calendar",
            templateUrl: "calendar/index.html",
            controller: 'CalendarPageCtrl'
        }).state('calendar.people', {
            url: "/people/:assets",
            templateUrl: "calendar/people.html"
        }).state('calendar.resources', {
            url: "/resources/:assets",
            templateUrl: "calendar/resources.html"
        });
    }

    if (AdminCalendarOptions.show_in_navigation) {
        SideNavigationPartials.addPartialTemplate('calendar', 'calendar/nav.html');
    }
});
'use strict';

angular.module('BBAdminDashboard.check-in').run(function (RuntimeStates, AdminCheckInOptions, SideNavigationPartials) {
    'ngInject';

    // Choose to opt out of the default routing

    if (AdminCheckInOptions.use_default_states) {

        RuntimeStates.state('checkin', {
            parent: AdminCheckInOptions.parent_state,
            url: "check-in",
            templateUrl: "check-in/index.html",
            controller: 'CheckInPageCtrl'
        });
    }

    if (AdminCheckInOptions.show_in_navigation) {
        SideNavigationPartials.addPartialTemplate('check-in', 'check-in/nav.html');
    }
});
'use strict';

angular.module('BBAdminDashboard.clients').run(function (RuntimeStates, AdminClientsOptions, SideNavigationPartials) {
    'ngInject';

    // Choose to opt out of the default routing

    if (AdminClientsOptions.use_default_states) {

        RuntimeStates.state('clients', {
            parent: AdminClientsOptions.parent_state,
            url: "clients",
            templateUrl: "clients/index.html",
            controller: 'ClientsPageCtrl'
        }).state('clients.new', {
            url: "/new",
            templateUrl: "client_new.html",
            controller: 'ClientsNewPageCtrl'
        }).state('clients.all', {
            url: "/all",
            templateUrl: "clients/listing.html",
            controller: 'ClientsAllPageCtrl'
        }).state('clients.edit', {
            url: "/edit/:id",
            templateUrl: "clients/item.html",
            resolve: {
                client: function client(company, $stateParams, BBModel) {
                    var params = {
                        company: company,
                        id: $stateParams.id
                    };
                    return BBModel.Admin.Client.$query(params);
                }
            },
            controller: 'ClientsEditPageCtrl'
        });
    }

    if (AdminClientsOptions.show_in_navigation) {
        SideNavigationPartials.addPartialTemplate('clients', 'clients/nav.html');
    }
});
'use strict';

angular.module('BBAdminDashboard.config-iframe').run(function (RuntimeStates, AdminConfigIframeOptions, SideNavigationPartials) {
    'ngInject';

    // Choose to opt out of the default routing

    if (AdminConfigIframeOptions.use_default_states) {

        RuntimeStates.state('config', {
            parent: AdminConfigIframeOptions.parent_state,
            url: 'config',
            templateUrl: 'config-iframe/index.html',
            controller: 'ConfigIframePageCtrl',
            deepStateRedirect: {
                default: {
                    state: 'config.business.page',
                    params: {
                        path: 'person'
                    }
                }
            }
        }).state('config.business', {
            url: '/business',
            templateUrl: 'core/tabbed-substates-page.html',
            controller: 'ConfigIframeBusinessPageCtrl',
            deepStateRedirect: {
                default: {
                    state: 'config.business.page',
                    params: {
                        path: 'person'
                    }
                }
            }
        }).state('config.business.page', {
            url: '/page/:path',
            templateUrl: 'core/iframe-page.html',
            controller: 'ConfigSubIframePageCtrl'
        }).state('config.event-settings', {
            url: '/event-settings',
            templateUrl: 'core/tabbed-substates-page.html',
            controller: 'ConfigIframeEventSettingsPageCtrl',
            deepStateRedirect: {
                default: {
                    state: 'config.event-settings.page',
                    params: {
                        path: 'sessions/courses'
                    }
                }
            }
        }).state('config.event-settings.page', {
            url: '/page/:path',
            templateUrl: 'core/iframe-page.html',
            controller: 'ConfigSubIframePageCtrl'
        }).state('config.promotions', {
            url: '/promotions',
            templateUrl: 'core/tabbed-substates-page.html',
            controller: 'ConfigIframePromotionsPageCtrl',
            deepStateRedirect: {
                default: {
                    state: 'config.promotions.page',
                    params: {
                        path: 'price/deal/summary'
                    }
                }
            }
        }).state('config.promotions.page', {
            url: '/page/:path',
            templateUrl: 'core/iframe-page.html',
            controller: 'ConfigSubIframePageCtrl'
        }).state('config.booking-settings', {
            url: '/booking-settings',
            templateUrl: 'core/tabbed-substates-page.html',
            controller: 'ConfigIframeBookingSettingsPageCtrl',
            deepStateRedirect: {
                default: {
                    state: 'config.booking-settings.page',
                    params: {
                        path: 'detail_type'
                    }
                }
            }
        }).state('config.booking-settings.page', {
            url: '/page/:path',
            templateUrl: 'core/iframe-page.html',
            controller: 'ConfigSubIframePageCtrl'
        });
    }

    if (AdminConfigIframeOptions.show_in_navigation) {
        SideNavigationPartials.addPartialTemplate('config-iframe', 'config-iframe/nav.html');
    }
});
'use strict';

angular.module('BBAdminDashboard').config(function ($logProvider, $httpProvider) {
    'ngInject';

    $logProvider.debugEnabled(true);
    $httpProvider.defaults.withCredentials = true;
});
'use strict';

angular.module('BBAdminDashboard').run(function (RuntimeStates, AdminCoreOptions, RuntimeRoutes, AdminLoginService) {
    'ngInject';

    RuntimeRoutes.otherwise('/');

    RuntimeStates.state('root', {
        url: '/',
        templateUrl: "core/layout.html",
        resolve: {
            user: function user($q, BBModel, AdminSsoLogin) {
                var defer = $q.defer();
                BBModel.Admin.Login.$user().then(function (user) {
                    if (user) {
                        return defer.resolve(user);
                    } else {
                        return AdminSsoLogin.ssoLoginPromise().then(function (admin) {
                            BBModel.Admin.Login.$setLogin(admin);
                            return BBModel.Admin.Login.$user().then(function (user) {
                                return defer.resolve(user);
                            }, function (err) {
                                return defer.reject({ reason: 'GET_USER_ERROR', error: err });
                            });
                        }, function (err) {
                            return defer.reject({ reason: 'NOT_LOGGABLE_ERROR' });
                        });
                    }
                }, function (err) {
                    return defer.reject({ reason: 'LOGIN_SERVICE_ERROR', error: err });
                });
                return defer.promise;
            },
            company: function company(user, $q, BBModel) {
                var defer = $q.defer();
                user.$getCompany().then(function (company) {
                    if (company.companies && company.companies.length > 0) {
                        return defer.reject({ reason: 'COMPANY_IS_PARENT' });
                    } else {
                        return defer.resolve(company);
                    }
                }, function (err) {
                    return BBModel.Admin.Login.$logout().then(function () {
                        return defer.reject({ reason: 'GET_COMPANY_ERROR' });
                    }, function (err) {
                        return defer.reject({ reason: 'LOGOUT_ERROR' });
                    });
                });
                return defer.promise;
            }
        },

        controller: 'CorePageController',
        deepStateRedirect: {
            default: {
                state: AdminCoreOptions.default_state
            }
        }
    });
});
'use strict';

angular.module('BBAdminDashboard.dashboard-iframe').run(function (RuntimeStates, AdminDashboardIframeOptions, SideNavigationPartials) {
    'ngInject';

    // Choose to opt out of the default routing

    if (AdminDashboardIframeOptions.use_default_states) {

        RuntimeStates.state('dashboard', {
            parent: AdminDashboardIframeOptions.parent_state,
            url: "dashboard",
            controller: "DashboardIframePageCtrl",
            templateUrl: "dashboard-iframe/index.html",
            deepStateRedirect: {
                default: {
                    state: 'dashboard.page',
                    params: {
                        path: 'view/dashboard/index',
                        fixed: true
                    }
                }
            }
        }).state('dashboard.page', {
            url: "/page/:path",
            controller: 'DashboardSubIframePageCtrl',
            templateUrl: "core/iframe-page.html"
        });
    }

    if (AdminDashboardIframeOptions.show_in_navigation) {
        SideNavigationPartials.addPartialTemplate('dashboard-iframe', 'dashboard-iframe/nav.html');
    }
});
'use strict';

angular.module('BBAdminDashboard.login').run(function (RuntimeStates, AdminLoginOptions) {
    'ngInject';

    // Choose to opt out of the default routing

    if (AdminLoginOptions.use_default_states) {
        RuntimeStates.state('login', {
            url: "/login",
            resolve: {
                user: function user($q, BBModel, AdminSsoLogin) {
                    var defer = $q.defer();
                    BBModel.Admin.Login.$user().then(function (user) {
                        if (user) {
                            return defer.resolve(user);
                        } else {
                            return AdminSsoLogin.ssoLoginPromise().then(function (admin) {
                                BBModel.Admin.Login.$setLogin(admin);
                                return BBModel.Admin.Login.$user().then(function (user) {
                                    return defer.resolve(user);
                                }, function (err) {
                                    return defer.reject({ reason: 'GET_USER_ERROR', error: err });
                                });
                            }, function (err) {
                                return defer.resolve();
                            });
                        }
                    }, function (err) {
                        return defer.reject({ reason: 'LOGIN_SERVICE_ERROR', error: err });
                    });
                    return defer.promise;
                }
            },
            controller: "LoginPageCtrl",
            templateUrl: "login/index.html"
        });
    }
});
'use strict';

angular.module('BBAdminDashboard.logout').config(function ($stateProvider, $urlRouterProvider) {
    'ngInject';

    $stateProvider.state('logout', {
        url: '/logout',
        controller: 'LogoutPageCtrl'
    });
});
'use strict';

angular.module('BBAdminDashboard.members-iframe').run(function (RuntimeStates, AdminMembersIframeOptions, SideNavigationPartials) {
    'ngInject';

    // Choose to opt out of the default routing

    if (AdminMembersIframeOptions.use_default_states) {

        RuntimeStates.state('members', {
            parent: AdminMembersIframeOptions.parent_state,
            url: 'members',
            templateUrl: 'members-iframe/index.html',
            controller: 'MembersIframePageCtrl',
            deepStateRedirect: {
                default: {
                    state: 'members.page',
                    params: {
                        path: 'client'
                    }
                }
            }
        }).state('members.page', {
            url: '/page/:path/:id',
            templateUrl: 'core/boxed-iframe-page.html',
            controller: 'MembersSubIframePageCtrl'
        });
    }

    if (AdminMembersIframeOptions.show_in_navigation) {
        SideNavigationPartials.addPartialTemplate('members-iframe', 'members-iframe/nav.html');
    }
});
'use strict';

angular.module('BBAdminDashboard.publish-iframe').run(function (RuntimeStates, AdminPublishIframeOptions, SideNavigationPartials) {
    'ngInject';

    // Choose to opt out of the default routing

    if (AdminPublishIframeOptions.use_default_states) {

        RuntimeStates.state('publish', {
            parent: AdminPublishIframeOptions.parent_state,
            url: 'publish',
            templateUrl: 'publish-iframe/index.html',
            controller: 'PublishIframePageCtrl',
            deepStateRedirect: {
                default: {
                    state: 'publish.page',
                    params: {
                        path: 'conf/inset/intro'
                    }
                }
            }
        }).state('publish.page', {
            url: '/page/:path',
            templateUrl: 'core/boxed-iframe-page.html',
            controller: 'PublishSubIframePageCtrl'
        });
    }

    if (AdminPublishIframeOptions.show_in_navigation) {
        SideNavigationPartials.addPartialTemplate('publish-iframe', 'publish-iframe/nav.html');
    }
});
'use strict';

angular.module('BBAdminDashboard.reset-password').config(function ($stateProvider, $urlRouterProvider) {
    'ngInject';

    $stateProvider.state('reset-password', {
        url: '/reset-password',
        controller: 'ResetPasswordPageCtrl',
        templateUrl: "reset-password/index.html"
    });
});
'use strict';

angular.module('BBAdminDashboard.settings-iframe').run(function (RuntimeStates, AdminSettingsIframeOptions, SideNavigationPartials) {
    'ngInject';

    // Choose to opt out of the default routing

    if (AdminSettingsIframeOptions.use_default_states) {

        RuntimeStates.state('settings', {
            parent: AdminSettingsIframeOptions.parent_state,
            url: "settings",
            templateUrl: "settings-iframe/index.html",
            deepStateRedirect: {
                default: { state: "settings.page", params: { path: "company/mycompany" } },
                params: true
            }
        }).state('settings.page', {
            url: "/page/:path",
            templateUrl: "core/boxed-iframe-page.html",
            controller: 'SettingsSubIframePageCtrl'
        }).state('settings.basic-settings', {
            url: '/basic-settings',
            templateUrl: 'core/tabbed-substates-page.html',
            controller: 'SettingsIframeBasicSettingsPageCtrl',
            deepStateRedirect: {
                default: {
                    state: 'settings.basic-settings.page',
                    params: {
                        path: 'conf/setting/user_edit'
                    }
                }
            }
        }).state('settings.basic-settings.page', {
            url: '/page/:path',
            templateUrl: 'core/iframe-page.html',
            controller: 'SettingsSubIframePageCtrl'
        }).state('settings.advanced-settings', {
            url: '/advanced-settings',
            templateUrl: 'core/tabbed-substates-page.html',
            controller: 'SettingsIframeAdvancedSettingsPageCtrl',
            deepStateRedirect: {
                default: {
                    state: 'settings.advanced-settings.page',
                    params: {
                        path: 'conf/payment/payment_edit'
                    }
                }
            }
        }).state('settings.advanced-settings.page', {
            url: '/page/:path',
            templateUrl: 'core/iframe-page.html',
            controller: 'SettingsSubIframePageCtrl'
        }).state('settings.integrations', {
            url: '/integrations',
            templateUrl: 'core/tabbed-substates-page.html',
            controller: 'SettingsIframeIntegrationsPageCtrl',
            deepStateRedirect: {
                default: {
                    state: 'settings.integrations.page',
                    params: {
                        path: 'conf/addons/payment'
                    }
                }
            }
        }).state('settings.integrations.page', {
            url: '/page/:path',
            templateUrl: 'core/iframe-page.html',
            controller: 'SettingsSubIframePageCtrl'
        }).state('settings.subscription', {
            url: '/subscription',
            templateUrl: 'core/tabbed-substates-page.html',
            controller: 'SettingsIframeSubscriptionPageCtrl',
            deepStateRedirect: {
                default: {
                    state: 'settings.subscription.page',
                    params: {
                        path: 'subscription/show'
                    }
                }
            }
        }).state('settings.subscription.page', {
            url: '/page/:path',
            templateUrl: 'core/iframe-page.html',
            controller: 'SettingsSubIframePageCtrl'
        });
    }

    if (AdminSettingsIframeOptions.show_in_navigation) {
        SideNavigationPartials.addPartialTemplate('settings-iframe', 'settings-iframe/nav.html');
    }
});
'use strict';

(function () {

    'use strict';

    angular.module('BBAdminDashboard.calendar.directives').component('bbCalendarDatePicker', {
        templateUrl: 'calendar/bb_calendar_date_picker.html',
        bindings: {
            onChangeDate: '&',
            currentDate: '<'
        },
        controller: CalendarDatePickerCtrl,
        controllerAs: '$bbCalendarDatePickerCtrl'
    });

    function CalendarDatePickerCtrl() {
        'ngInject';

        var ctrl = this;

        ctrl.openDatePicker = function ($event) {
            $event.preventDefault();
            ctrl.datePickerOpened = true;
        };

        ctrl.datePickerUpdated = function () {
            if (_.isDate(ctrl.currentDate)) {
                ctrl.onChangeDate({
                    $event: {
                        date: ctrl.currentDate
                    }
                });
            }
        };
    }
})();
'use strict';

/*
 * @ngdoc controller
 * @name BBAdminDashboard.calendar.controllers.controller:CalendarPageCtrl
 *
 * @description
 * Controller for the calendar page
 */
angular.module('BBAdminDashboard.calendar.controllers').controller('CalendarPageCtrl', function ($log, $scope, $state) {
    'ngInject';

    var init = function init() {

        bindToPusherChannel();

        if ($state.current.name === 'calendar') {
            gotToProperState();
        }
    };

    var gotToProperState = function gotToProperState() {

        if ($scope.bb.company.$has('people')) {
            $state.go("calendar.people");
        } else if ($scope.bb.company.$has('resources')) {
            $state.go("calendar.resources");
        }
    };

    var bindToPusherChannel = function bindToPusherChannel() {
        var pusherChannel = $scope.company.getPusherChannel('bookings');

        if (pusherChannel) {
            pusherChannel.bind('create', refetch);
            pusherChannel.bind('update', refetch);
            pusherChannel.bind('destroy', refetch);
        }
    };

    var refetch = _.throttle(function (data) {
        $log.info('== booking push received in bookings == ', data);
        return $scope.$broadcast('refetchBookings', data);
    }, 1000, { leading: false });

    init();
});
'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

angular.module('BBAdminDashboard.calendar.controllers').controller('bbResourceCalendarController', function (AdminBookingPopup, AdminCalendarOptions, AdminCompanyService, AdminMoveBookingPopup, $attrs, BBAssets, BBModel, $bbug, CalendarEventSources, ColorPalette, Dialog, $filter, GeneralOptions, ModalForm, PrePostTime, ProcessAssetsFilter, $q, $rootScope, $scope, $state, TitleAssembler, $translate, $window, uiCalendarConfig) {
    'ngInject';

    /*jshint validthis: true */

    var vm = this;

    var filters = null;

    var company = null;
    var companyServices = [];

    var calOptions = [];

    vm.assets = []; // All options sets (resources, people) go to the same select

    vm.selectedResources = {
        selected: []
    };

    var init = function init() {
        applyFilters();

        prepareCalOptions();
        prepareEventSources();
        prepareUiCalOptions();

        $scope.$watch('selectedResources.selected', selectedResourcesListener);

        $scope.$on('refetchBookings', refetchBookingsHandler);
        $scope.$on('newCheckout', newCheckoutHandler);
        $scope.$on('BBLanguagePicker:languageChanged', languageChangedHandler);
        $scope.$on('CalendarEventSources:timeRangeChanged', timeRangeChangedHandler);

        getCompanyPromise().then(companyListener);

        vm.changeSelectedResources = changeSelectedResources;
        vm.updateDateHandler = updateDateHandler;
    };

    var applyFilters = function applyFilters() {
        filters = {
            requestedAssets: ProcessAssetsFilter($state.params.assets)
        };

        vm.showAll = true;
        if (filters.requestedAssets.length > 0) {
            vm.showAll = false;
        }
    };

    var setTimeToMoment = function setTimeToMoment(date, time) {
        var newDate = moment(time, 'HH:mm');
        newDate.set({
            'year': parseInt(date.get('year')),
            'month': parseInt(date.get('month')),
            'date': parseInt(date.get('date')),
            'second': 0
        });
        return newDate;
    };

    var prepareEventSources = function prepareEventSources() {
        vm.eventSources = [{ events: getEvents }];
    };

    var getEvents = function getEvents(start, end, timezone, callback) {
        vm.loading = true;
        getCompanyPromise().then(function (company) {
            var options = {
                labelAssembler: $scope.labelAssembler ? $scope.labelAssembler : AdminCalendarOptions.bookings_label_assembler,
                blockLabelAssembler: $scope.blockLabelAssembler ? $scope.blockLabelAssembler : AdminCalendarOptions.block_label_assembler,
                externalLabelAssembler: $scope.externalLabelAssembler ? $scope.externalLabelAssembler : AdminCalendarOptions.external_label_assembler,
                noCache: true,
                showAll: vm.showAll,
                type: calOptions.type,
                selectedResources: vm.selectedResources.selected,
                calendarView: uiCalendarConfig.calendars[vm.calendar_name].fullCalendar('getView').type
            };

            if ($scope.model) {
                options.showAll = false;
                options.selectedResources = [$scope.model];
            }

            return CalendarEventSources.getAllCalendarEntries(company, start, end, options).then(function (results) {
                vm.loading = false;
                return callback(results);
            });
        });
    };

    var prepareCalOptions = function prepareCalOptions() {
        calOptions = $scope.$eval($attrs.bbResourceCalendar);
        if (!calOptions) {
            calOptions = {};
        }

        if (!calOptions.defaultView) {
            if ($scope.model) {
                calOptions.defaultView = 'agendaWeek';
            } else {
                calOptions.defaultView = 'timelineDay';
            }
        }

        if (!calOptions.views) {
            if ($scope.model) {
                calOptions.views = 'listDay,timelineDayThirty,agendaWeek,month';
            } else {
                calOptions.views = 'timelineDay,listDay,timelineDayThirty,agendaWeek,month';
            }
        }

        // height = if calOptions.header_height
        //   $bbug($window).height() - calOptions.header_height
        // else
        //   800

        if (calOptions.name) {
            vm.calendar_name = calOptions.name;
        } else {
            vm.calendar_name = "resourceCalendar";
        }

        if (calOptions.cal_slot_duration == null) {
            calOptions.cal_slot_duration = GeneralOptions.calendar_slot_duration;
        }
    };

    var prepareUiCalOptions = function prepareUiCalOptions() {
        vm.uiCalOptions = { // @todo REPLACE ALL THIS WITH VAIABLES FROM THE GeneralOptions Service
            calendar: {
                schedulerLicenseKey: '0598149132-fcs-1443104297',
                eventStartEditable: false,
                eventDurationEditable: false,
                height: 'auto',
                buttonText: {},
                header: {
                    left: 'today,prev,next',
                    center: 'title',
                    right: calOptions.views
                },
                defaultView: calOptions.defaultView,
                views: {
                    listDay: {},
                    agendaWeek: {
                        slotDuration: $filter('minutesToString')(calOptions.cal_slot_duration),
                        groupByDateAndResource: false
                    },
                    month: {
                        eventLimit: 5
                    },
                    timelineDay: {
                        slotDuration: $filter('minutesToString')(calOptions.cal_slot_duration),
                        eventOverlap: false,
                        slotWidth: 25,
                        resourceAreaWidth: '18%'
                    }
                },
                resourceGroupField: 'group',
                resourceLabelText: ' ',
                eventResourceEditable: true,
                selectable: true,
                lazyFetching: false,
                columnFormat: AdminCalendarOptions.column_format,
                resources: fcResources,
                eventDragStop: fcEventDragStop,
                eventDrop: fcEventDrop,
                eventClick: fcEventClick,
                eventRender: fcEventRender,
                eventAfterRender: fcEventAfterRender,
                eventAfterAllRender: fcEventAfterAllRender,
                select: fcSelect,
                viewRender: fcViewRender,
                eventResize: fcEventResize,
                loading: fcLoading
            }
        };
        updateCalendarLanguage();
        updateCalendarTimeRange();
    };

    var updateCalendarLanguage = function updateCalendarLanguage() {
        vm.uiCalOptions.calendar.locale = $translate.use();
        vm.uiCalOptions.calendar.buttonText.today = $translate.instant('ADMIN_DASHBOARD.CALENDAR_PAGE.TODAY');
        vm.uiCalOptions.calendar.views.listDay.buttonText = $translate.instant('ADMIN_DASHBOARD.CALENDAR_PAGE.TODAY');
        vm.uiCalOptions.calendar.views.agendaWeek.buttonText = $translate.instant('ADMIN_DASHBOARD.CALENDAR_PAGE.WEEK');
        vm.uiCalOptions.calendar.views.month.buttonText = $translate.instant('ADMIN_DASHBOARD.CALENDAR_PAGE.MONTH');
        vm.uiCalOptions.calendar.views.timelineDay.buttonText = $translate.instant('ADMIN_DASHBOARD.CALENDAR_PAGE.DAY', { minutes: calOptions.cal_slot_duration });
    };

    var updateCalendarTimeRange = function updateCalendarTimeRange() {
        vm.uiCalOptions.calendar.minTime = AdminCalendarOptions.minTime;
        vm.uiCalOptions.calendar.maxTime = AdminCalendarOptions.maxTime;
    };

    var fcResources = function fcResources(callback) {
        return getCalendarAssets(callback);
    };

    var fcEventDragStop = function fcEventDragStop(event, jsEvent, ui, view) {
        return event.oldResourceIds = event.resourceIds;
    };

    var fcEventDrop = function fcEventDrop(event, delta, revertFunc) {
        // we need a full move cal if either it has a person and resource, or they've dragged over multiple days

        // not blocked and is a change in person/resource, or over multiple days
        if (event.status !== 3 && (event.person_id && event.resource_id || delta.days() > 0)) {
            var start = event.start;
            var end = event.end;

            var item_defaults = {
                date: start.format('YYYY-MM-DD'),
                time: start.hour() * 60 + start.minute()
            };

            if (event.resourceId) {
                var orginal_resource = void 0;
                var newAssetId = event.resourceId.substring(0, event.resourceId.indexOf('_'));
                if (event.resourceId.indexOf('_p') > -1) {
                    item_defaults.person = newAssetId;
                    orginal_resource = event.person_id + '_p';
                } else if (event.resourceId.indexOf('_r') > -1) {
                    item_defaults.resource = newAssetId;
                    orginal_resource = event.resource_id + '_r';
                }
            }

            getCompanyPromise().then(function (company) {
                return AdminMoveBookingPopup.open({
                    min_date: setTimeToMoment(start, AdminCalendarOptions.minTime),
                    max_date: setTimeToMoment(end, AdminCalendarOptions.maxTime),
                    from_datetime: moment(start.toISOString()),
                    to_datetime: moment(end.toISOString()),
                    item_defaults: item_defaults,
                    company_id: company.id,
                    booking_id: event.id,
                    success: function success(model) {
                        var adminBooking = new BBModel.Admin.Booking(event);
                        return refreshBooking(adminBooking);
                    },
                    fail: function fail() {
                        var adminBooking = new BBModel.Admin.Booking(event);
                        refreshBooking(adminBooking);
                        return revertFunc();
                    }
                });
            });
            return;
        }

        // if it's got a person and resource - then it
        return Dialog.confirm({
            title: $translate.instant('ADMIN_DASHBOARD.CALENDAR_PAGE.MOVE_MODAL_HEADING'),
            model: event,
            body: $translate.instant('ADMIN_DASHBOARD.CALENDAR_PAGE.MOVE_MODAL_BODY'),
            success: function success(model) {
                return updateBooking(event);
            },
            fail: function fail() {
                return revertFunc();
            }
        });
    };

    var fcEventClick = function fcEventClick(event, jsEvent, view) {
        var adminBooking = new BBModel.Admin.Booking(event);
        if (adminBooking.$has('edit')) {
            return editBooking(adminBooking);
        }
    };

    var fcEventRender = function fcEventRender(event, element) {
        var _uiCalendarConfig$cal = uiCalendarConfig.calendars[vm.calendar_name].fullCalendar('getView'),
            type = _uiCalendarConfig$cal.type;

        var service = _.findWhere(companyServices, { id: event.service_id });
        if (!$scope.model) {
            // if not a single item view
            var a = void 0,
                link = void 0;
            if (type === "listDay") {
                link = $bbug(element.children()[2]);
                if (link) {
                    a = link.children()[0];
                    if (a) {
                        if (event.person_name && (!calOptions.type || calOptions.type === "person")) {
                            a.innerHTML = event.person_name + " - " + a.innerHTML;
                        } else if (event.resource_name && calOptions.type === "resource") {
                            a.innerHTML = event.resource_name + " - " + a.innerHTML;
                        }
                    }
                }
            } else if (type === "agendaWeek" || type === "month") {
                link = $bbug(element.children()[0]);
                if (link) {
                    a = link.children()[1];
                    if (a) {
                        if (event.person_name && (!calOptions.type || calOptions.type === "person")) {
                            a.innerHTML = event.person_name + "<br/>" + a.innerHTML;
                        } else if (event.resource_name && calOptions.type === "resource") {
                            a.innerHTML = event.resource_name + "<br/>" + a.innerHTML;
                        }
                    }
                }
            }
        }
        if (service && type !== "listDay") {
            element.css('background-color', service.color);
            element.css('color', service.textColor);
            element.css('border-color', service.textColor);
        }
        return element;
    };

    var fcEventAfterRender = function fcEventAfterRender(event, elements, view) {
        if (event.rendering == null || event.rendering !== 'background') {
            return PrePostTime.apply(event, elements, view, $scope);
        }
    };

    var fcEventAfterAllRender = function fcEventAfterAllRender() {
        return $scope.$emit('UICalendar:EventAfterAllRender');
    };

    var fcSelect = function fcSelect(start, end, jsEvent, view, resource) {
        // For some reason clicking on the scrollbars triggers this event therefore we filter based on the jsEvent target
        if (jsEvent && jsEvent.target.className === 'fc-scroller') {
            return;
        }

        view.calendar.unselect();

        if (!calOptions.enforce_schedules || isTimeRangeAvailable(start, end, resource) || Math.abs(start.diff(end, 'days')) === 1 && dayHasAvailability(start)) {
            if (Math.abs(start.diff(end, 'days')) > 0) {
                end.subtract(1, 'days');
                end = setTimeToMoment(end, AdminCalendarOptions.maxTime);
            }

            var item_defaults = {
                date: start.format('YYYY-MM-DD'),
                time: start.hour() * 60 + start.minute()
            };

            if (resource && resource.type === 'person') {
                item_defaults.person = resource.id.substring(0, resource.id.indexOf('_'));
            } else if (resource && resource.type === 'resource') {
                item_defaults.resource = resource.id.substring(0, resource.id.indexOf('_'));
            }

            return getCompanyPromise().then(function (company) {
                return AdminBookingPopup.open({
                    min_date: setTimeToMoment(start, AdminCalendarOptions.minTime),
                    max_date: setTimeToMoment(end, AdminCalendarOptions.maxTime),
                    from_datetime: moment(start.toISOString()),
                    to_datetime: moment(end.toISOString()),
                    item_defaults: item_defaults,
                    first_page: "quick_pick",
                    on_conflict: "cancel()",
                    company_id: company.id
                });
            });
        }
    };

    var fcViewRender = function fcViewRender(view, element) {
        var _newDate$set;

        var date = uiCalendarConfig.calendars[vm.calendar_name].fullCalendar('getDate');
        var newDate = moment().tz(moment.tz.guess());
        newDate.set((_newDate$set = {
            'year': parseInt(date.get('year')),
            'month': parseInt(date.get('month')),
            'date': parseInt(date.get('date')),
            'hour': 0,
            'minute': 0
        }, _defineProperty(_newDate$set, 'minute', 0), _defineProperty(_newDate$set, 'second', 0), _newDate$set));
        return vm.currentDate = newDate.toDate();
    };

    var fcEventResize = function fcEventResize(event, delta, revertFunc, jsEvent, ui, view) {
        event.duration = event.end.diff(event.start, 'minutes');
        return updateBooking(event);
    };

    var fcLoading = function fcLoading(isLoading, view) {
        return vm.calendarLoading = isLoading;
    };

    var isTimeRangeAvailable = function isTimeRangeAvailable(start, end, resource) {
        var st = moment(start.toISOString()).unix();
        var en = moment(end.toISOString()).unix();
        var events = uiCalendarConfig.calendars[vm.calendar_name].fullCalendar('clientEvents', function (event) {
            return event.rendering === 'background' && st >= event.start.unix() && event.end && en <= event.end.unix() && (resource && parseInt(event.resourceId) === parseInt(resource.id) || !resource);
        });
        return events.length > 0;
    };

    var dayHasAvailability = function dayHasAvailability(start) {
        var events = uiCalendarConfig.calendars[vm.calendar_name].fullCalendar('clientEvents', function (event) {
            return event.rendering === 'background' && event.start.year() === start.year() && event.start.month() === start.month() && event.start.date() === start.date();
        });

        return events.length > 0;
    };

    var selectedResourcesListener = function selectedResourcesListener(newValue, oldValue) {
        if (newValue !== oldValue) {
            var assets = [];
            angular.forEach(newValue, function (asset) {
                return assets.push(asset.id);
            });

            var params = $state.params;

            params.assets = assets.join();
            $state.go($state.current.name, params, { notify: false, reload: false });
        }
    };

    var getCalendarAssets = function getCalendarAssets(callback) {
        if ($scope.model) {
            callback([$scope.model]);
            return;
        }

        vm.loading = true;

        getCompanyPromise().then(function (company) {
            if (vm.showAll) {
                BBAssets.getAssets(company).then(function (assets) {
                    if (calOptions.type) {
                        assets = _.filter(assets, function (a) {
                            return a.type === calOptions.type;
                        });
                    }

                    var _iteratorNormalCompletion = true;
                    var _didIteratorError = false;
                    var _iteratorError = undefined;

                    try {
                        for (var _iterator = Array.from(assets)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                            var asset = _step.value;

                            asset.id = asset.identifier;
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return) {
                                _iterator.return();
                            }
                        } finally {
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }

                    vm.loading = false;
                    return callback(assets);
                });
            } else {
                vm.loading = false;
                callback(vm.selectedResources.selected);
            }
        });
    };

    var getBookingTitle = function getBookingTitle(booking) {
        var labelAssembler = $scope.labelAssembler ? $scope.labelAssembler : AdminCalendarOptions.bookings_label_assembler;
        var blockLabelAssembler = $scope.blockLabelAssembler ? $scope.blockLabelAssembler : AdminCalendarOptions.block_label_assembler;

        if (booking.status !== 3 && labelAssembler) {
            return TitleAssembler.getTitle(booking, labelAssembler);
        } else if (booking.status === 3 && blockLabelAssembler) {
            return TitleAssembler.getTitle(booking, blockLabelAssembler);
        }

        return booking.title;
    };

    var refreshBooking = function refreshBooking(booking) {
        booking.$refetch().then(function (response) {
            booking.resourceIds = [];
            booking.resourceId = null;
            if (booking.person_id != null) {
                booking.resourceIds.push(booking.person_id + '_p');
            }
            if (booking.resource_id != null) {
                booking.resourceIds.push(booking.resource_id + '_r');
            }

            booking.title = getBookingTitle(booking);

            return uiCalendarConfig.calendars[vm.calendar_name].fullCalendar('updateEvent', booking);
        });
    };

    var updateBooking = function updateBooking(booking) {
        if (booking.resourceId) {
            var newAssetId = booking.resourceId.substring(0, booking.resourceId.indexOf('_'));
            if (booking.resourceId.indexOf('_p') > -1) {
                booking.person_id = newAssetId;
            } else if (booking.resourceId.indexOf('_r') > -1) {
                booking.resource_id = newAssetId;
            }
        }

        booking.$update().then(function (response) {
            booking.resourceIds = [];
            booking.resourceId = null;
            if (booking.person_id != null) {
                booking.resourceIds.push(booking.person_id + '_p');
            }
            if (booking.resource_id != null) {
                booking.resourceIds.push(booking.resource_id + '_r');
            }

            booking.title = getBookingTitle(booking);

            return uiCalendarConfig.calendars[vm.calendar_name].fullCalendar('updateEvent', booking);
        });
    };

    var editBooking = function editBooking(booking) {
        var templateUrl = void 0,
            title = void 0;
        if (booking.status === 3) {
            templateUrl = 'edit_block_modal_form.html';
            title = 'Edit Block';
        } else {
            templateUrl = 'edit_booking_modal_form.html';
            title = 'Edit Booking';
        }
        ModalForm.edit({
            templateUrl: templateUrl,
            model: booking,
            title: title,
            params: {
                locale: $translate.use()
            },
            success: function success(response) {
                if (typeof response === 'string') {
                    if (response === "move") {
                        var item_defaults = { person: booking.person_id, resource: booking.resource_id };
                        getCompanyPromise().then(function (company) {
                            return AdminMoveBookingPopup.open({
                                item_defaults: item_defaults,
                                company_id: company.id,
                                booking_id: booking.id,
                                success: function success(model) {

                                    return refreshBooking(booking);
                                },
                                fail: function fail() {
                                    return refreshBooking(booking);
                                }
                            });
                        });
                    }
                }
                if (response.is_cancelled) {
                    return uiCalendarConfig.calendars[vm.calendar_name].fullCalendar('removeEvents', [response.id]);
                } else {
                    booking.title = getBookingTitle(booking);
                    return uiCalendarConfig.calendars[vm.calendar_name].fullCalendar('updateEvent', booking);
                }
            }
        });
    };

    var pusherBooking = function pusherBooking(res) {
        if (res.id != null) {
            var booking = _.first(uiCalendarConfig.calendars[vm.calendar_name].fullCalendar('clientEvents', res.id));
            if (booking && booking.$refetch) {
                booking.$refetch().then(function () {
                    booking.title = getBookingTitle(booking);
                    return uiCalendarConfig.calendars[vm.calendar_name].fullCalendar('updateEvent', booking);
                });
            } else {
                uiCalendarConfig.calendars[vm.calendar_name].fullCalendar('refetchEvents');
            }
        }
    };

    var pusherSubscribe = function pusherSubscribe() {
        if (company) {
            var pusher_channel = company.getPusherChannel('bookings');
            if (pusher_channel) {
                pusher_channel.bind('create', pusherBooking);
                pusher_channel.bind('update', pusherBooking);
                pusher_channel.bind('destroy', pusherBooking);
            }
        }
    };

    var updateDateHandler = function updateDateHandler(data) {
        if (uiCalendarConfig.calendars[vm.calendar_name]) {
            var assembledDate = moment.utc();
            assembledDate.set({
                'year': parseInt(data.date.getFullYear()),
                'month': parseInt(data.date.getMonth()),
                'date': parseInt(data.date.getDate()),
                'hour': 0,
                'minute': 0,
                'second': 0
            });
            uiCalendarConfig.calendars[vm.calendar_name].fullCalendar('gotoDate', assembledDate);
        }
    };

    var refetchBookingsHandler = function refetchBookingsHandler() {
        uiCalendarConfig.calendars[vm.calendar_name].fullCalendar('refetchEvents');
    };

    var newCheckoutHandler = function newCheckoutHandler() {
        uiCalendarConfig.calendars[vm.calendar_name].fullCalendar('refetchEvents');
    };

    var languageChangedHandler = function languageChangedHandler() {
        updateCalendarLanguage();
    };

    var timeRangeChangedHandler = function timeRangeChangedHandler() {
        updateCalendarTimeRange();
    };

    var getCompanyPromise = function getCompanyPromise() {
        var defer = $q.defer();
        if (company) {
            defer.resolve(company);
        } else {
            AdminCompanyService.query($attrs).then(function (_company) {
                company = _company;
                return defer.resolve(company);
            });
        }
        return defer.promise;
    };

    var changeSelectedResources = function changeSelectedResources() {
        if (vm.showAll) {
            vm.selectedResources.selected = [];
        }

        uiCalendarConfig.calendars[vm.calendar_name].fullCalendar('refetchResources');
        uiCalendarConfig.calendars[vm.calendar_name].fullCalendar('refetchEvents');
    };

    var assetsListener = function assetsListener(assets) {
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
            for (var _iterator2 = Array.from(assets)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var asset = _step2.value;

                asset.id = asset.identifier;
            }
        } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                    _iterator2.return();
                }
            } finally {
                if (_didIteratorError2) {
                    throw _iteratorError2;
                }
            }
        }

        vm.loading = false;

        if (calOptions.type) {
            assets = _.filter(assets, function (a) {
                return a.type === calOptions.type;
            });
        }
        vm.assets = assets;

        // requestedAssets
        if (filters.requestedAssets.length > 0) {
            angular.forEach(vm.assets, function (asset) {
                var isInArray = _.find(filters.requestedAssets, function (id) {
                    return id === asset.id;
                });

                if (typeof isInArray !== 'undefined') {
                    return vm.selectedResources.selected.push(asset);
                }
            });

            changeSelectedResources();
        }
    };

    /**
     * {Object} company
     */
    var companyListener = function companyListener(company) {
        vm.loading = true;

        BBAssets.getAssets(company).then(assetsListener);

        company.$get('services').then(collectionListener);

        pusherSubscribe();
    };

    /**
     * {Object} baseResourceCollection
     */
    var collectionListener = function collectionListener(collection) {
        collection.$get('services').then(servicesListener);
    };

    /**
     * {Array.<Object>} services
     */
    var servicesListener = function servicesListener(services) {
        companyServices = Array.from(services).map(function (service) {
            return new BBModel.Admin.Service(service);
        });
        ColorPalette.setColors(companyServices);
    };

    init();
});
'use strict';

angular.module('BBAdminDashboard.calendar.directives').directive('bbNewBooking', function () {
    return {
        restrict: 'AE',
        replace: true,
        scope: true,
        controller: function controller($scope, AdminBookingPopup, $uibModal, $timeout, $rootScope, AdminBookingOptions) {

            return $scope.newBooking = function () {
                return AdminBookingPopup.open({
                    item_defaults: {
                        day_view: AdminBookingOptions.day_view,
                        merge_people: true,
                        merge_resources: true,
                        date: moment($scope.$parent.currentDate).isValid() ? moment($scope.$parent.currentDate).format('YYYY-MM-DD') : moment().format('YYYY-MM-DD')
                    },
                    company_id: $rootScope.bb.company.id,
                    on_conflict: "cancel()",
                    template: 'main'
                });
            };
        }
    };
});
'use strict';

angular.module('BBAdminDashboard.calendar.directives').directive('bbResourceCalendar', function ($compile) {
    'ngInject';

    var link = function link(scope, element, attrs) {

        var init = function init() {
            scope.$on('UICalendar:EventAfterAllRender', addDatePickerToFCToolbar);
        };

        var addDatePickerToFCToolbar = function addDatePickerToFCToolbar() {
            var uiCalElement = angular.element(document.getElementById('uicalendar'));
            var datePicker = uiCalElement.find('bb-calendar-date-picker');
            if (!datePicker.length) {
                var toolbarElement = angular.element(uiCalElement.children()[0]);
                var toolbarLeftElement = angular.element(toolbarElement.children()[0]);
                var datePickerComponent = '<bb-calendar-date-picker on-change-date="vm.updateDateHandler($event)" current-date="vm.currentDate"></bb-calendar-date-picker>';
                var datePickerElement = $compile(datePickerComponent)(scope);
                toolbarLeftElement.append(datePickerElement);
            }
        };

        init();
    };

    return {
        controller: 'bbResourceCalendarController',
        controllerAs: 'vm',
        link: link,
        templateUrl: 'calendar/resource-calendar.html',
        replace: true,
        scope: {
            labelAssembler: '@',
            blockLabelAssembler: '@',
            externalLabelAssembler: '@',
            model: '=?'
        }
    };
});
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
angular.module('BBAdminDashboard.calendar.services').provider('AdminCalendarOptions', [function () {
    // This list of options is meant to grow
    var options = {
        use_default_states: true,
        show_in_navigation: true,
        parent_state: 'root',
        column_format: null,
        bookings_label_assembler: '{service_name} - {client_name}',
        block_label_assembler: 'Blocked',
        external_label_assembler: '{title}',
        minTime: null,
        maxTime: null
    };

    this.setOption = function (option, value) {
        if (options.hasOwnProperty(option)) {
            options[option] = value;
        }
    };

    this.getOption = function (option) {
        if (options.hasOwnProperty(option)) {
            return options[option];
        }
    };
    this.$get = function () {
        return options;
    };
}]);
'use strict';

/*
 * @ngdoc service
 * @name BBAdminDashboard.calendar.services.service:CalendarEventSources
 *
 * @description
 * This services exposes methods to get all event-type information to be shown in the calendar
 */
angular.module('BBAdminDashboard.calendar.services').service('CalendarEventSources', function (AdminScheduleService, BBModel, $exceptionHandler, $q, TitleAssembler, $translate, AdminCalendarOptions, $rootScope) {
    'ngInject';

    var bookingBelongsToSelectedResources = function bookingBelongsToSelectedResources(resources, booking) {
        var belongs = false;
        _.each(resources, function (asset) {
            if (_.contains(booking.resourceIds, asset.id)) {
                return belongs = true;
            }
        });
        return belongs;
    };

    /*
     * @ngdoc method
     * @name getBookingsAndBlocks
     * @methodOf BBAdminDashboard.calendar.services.service:CalendarEventSources
     * @description
     * Returns all bookings and blocks for a certain period of time,
     * filtered by a list of resources if one is provided through the options
     *
     * @param {object} company  The company to be queried for bookings and blocks
     * @param {Moment} start    Moment object containing the start of the requested period
     * @param {Moment} end      Moment object containing the end of the requested period
     * @param {object} options  Object which contains usefull flags and params
     The relevant ones for this method are:
     - {boolean} noCache              skips the cache
     - {boolean} showAll              skip the filter by resource filter
     - {array}   selectedResources    array of selected resource to filter against
     - {string}  labelAssembler       the pattern to use for bookings (see TitleAssembler)
     - {string}  blockLabelAssembler  the pattern to use for blocks (see TitleAssembler)
      * @returns {Promise} Promise which once resolved returns an array of bookings and blocks
     */
    var getBookingsAndBlocks = function getBookingsAndBlocks(company, start, end, options) {
        if (options == null) {
            options = {};
        }
        var deferred = $q.defer();

        var params = {
            company: company,
            start_date: start.format('YYYY-MM-DD'),
            end_date: end.format('YYYY-MM-DD'),
            skip_cache: options.noCache != null && options.noCache ? true : false
        };

        BBModel.Admin.Booking.$query(params).then(function (bookings) {
            var filteredBookings = [];

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = Array.from(bookings.items)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var booking = _step.value;


                    booking.service_name = $translate.instant(booking.service_name);

                    booking.resourceIds = [];
                    if (booking.person_id != null) {
                        booking.resourceIds.push(booking.person_id + '_p');
                    }
                    if (booking.resource_id != null) {
                        booking.resourceIds.push(booking.resource_id + '_r');
                    }

                    // Add to returned results is no specific resources where requested
                    // or event belongs to one of the selected resources
                    if (options.showAll == null || options.showAll != null && options.showAll || bookingBelongsToSelectedResources(options.selectedResources, booking)) {
                        booking.useFullTime();
                        if (booking.$has('edit')) {
                            booking.startEditable = true;
                        }

                        if (booking.status !== 3 && options.labelAssembler != null) {
                            booking.title = TitleAssembler.getTitle(booking, options.labelAssembler);
                        } else if (booking.status === 3 && options.blockLabelAssembler != null) {
                            booking.title = TitleAssembler.getTitle(booking, options.blockLabelAssembler);
                        }

                        //# if we're limiting to peopel or resoures - check this is correct
                        if (!options.type || options.type === "resource" && booking.resource_id || options.type === "person" && booking.person_id) {
                            filteredBookings.push(booking);
                        }
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            return deferred.resolve(filteredBookings);
        }, function (err) {
            return deferred.reject(err);
        });

        return deferred.promise;
    };

    /*
     * @ngdoc method
     * @name getExternalBookings
     * @methodOf BBAdminDashboard.calendar.services.service:CalendarEventSources
     * @description
     * Returns all external bookings for a certain period of time
     *
     * @param {object} company  The company to be queried for bookings and blocks
     * @param {Moment} start    Moment object containing the start of the requested period
     * @param {Moment} end      Moment object containing the end of the requested period
     * @param {object} options  Object which contains usefull flags and params
     The relevant ones for this method are:
     - {string}  externalLabelAssembler  the pattern to use for the title (see TitleAssembler)
      * @returns {Promise} Promise which once resolved returns an array of bookings
     */
    var getExternalBookings = function getExternalBookings(company, start, end, options) {
        if (options == null) {
            options = {};
        }
        var deferred = $q.defer();
        if (company.$has('external_bookings')) {
            var params = {
                start: start.format(),
                end: end.format(),
                no_cache: options.noCache != null && options.noCache ? true : false
            };
            company.$get('external_bookings', params).then(function (collection) {
                var bookings = collection.external_bookings;
                if (bookings) {
                    var _iteratorNormalCompletion2 = true;
                    var _didIteratorError2 = false;
                    var _iteratorError2 = undefined;

                    try {
                        for (var _iterator2 = Array.from(bookings)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                            var booking = _step2.value;

                            booking.resourceIds = [];
                            if (booking.person_id != null) {
                                booking.resourceIds.push(booking.person_id + '_p');
                            }

                            if (booking.resource_id != null) {
                                booking.resourceIds.push(booking.resource_id + '_r');
                            }

                            if (!booking.title) {
                                booking.title = "Blocked";
                            }
                            if (options.externalLabelAssembler != null) {
                                booking.title = TitleAssembler.getTitle(booking, options.externalLabelAssembler);
                            }

                            booking.className = 'status_external';
                            booking.type = 'external';
                            booking.editable = false;
                            booking.startEditable = false;
                            booking.durationEditable = false;
                            booking.resourceEditable = false;
                        }
                    } catch (err) {
                        _didIteratorError2 = true;
                        _iteratorError2 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                                _iterator2.return();
                            }
                        } finally {
                            if (_didIteratorError2) {
                                throw _iteratorError2;
                            }
                        }
                    }

                    return deferred.resolve(bookings);
                } else {
                    return deferred.resolve([]);
                }
            }, function (err) {
                return deferred.reject(err);
            });
        } else {
            deferred.resolve([]);
        }
        return deferred.promise;
    };

    /*
     * @ngdoc method
     * @name getAvailabilityBackground
     * @methodOf BBAdminDashboard.calendar.services.service:CalendarEventSources
     * @description
     * Returns all availability for a certain period of time,
     * filtered by a list of resources if one is provided through the options,
     * and grouped per calendar day if in week or month view
     *
     * @param {object} company  The company to be queried for bookings and blocks
     * @param {Moment} start    Moment object containing the start of the requested period
     * @param {Moment} end      Moment object containing the end of the requested period
     * @param {object} options  Object which contains usefull flags and params
     The relevant ones for this method are:
     - {boolean} noCache              skips the cache
     - {boolean} showAll              skip the filter by resource filter
     - {array}   selectedResources    array of selected resource to filter against
     - {string}  calendarView         identifies which view the calendar is curently displaying (enum: 'timelineDay', 'agendaWeek', 'month')
      * @returns {Promise} Promise which once resolved returns an array of availability background events
     */
    var getAvailabilityBackground = function getAvailabilityBackground(company, start, end, options) {
        if (options == null) {
            options = {};
        }
        var deferred = $q.defer();

        AdminScheduleService.getAssetsScheduleEvents(company, start, end, !options.showAll, options.selectedResources).then(function (availabilities) {

            if (AdminCalendarOptions.minTime == null || AdminCalendarOptions.maxTime == null) {
                setCalendarAvailabilityRange(availabilities);
            }

            if (options.calendarView === 'timelineDay') {
                return deferred.resolve(availabilities);
            } else {
                var overAllAvailabilities = [];

                var _iteratorNormalCompletion3 = true;
                var _didIteratorError3 = false;
                var _iteratorError3 = undefined;

                try {
                    for (var _iterator3 = Array.from(availabilities)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                        var avail = _step3.value;

                        avail.unix_start = moment(avail.start).unix();
                        avail.unix_end = moment(avail.end).unix();
                        avail.delete_me = false;
                    }
                } catch (err) {
                    _didIteratorError3 = true;
                    _iteratorError3 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion3 && _iterator3.return) {
                            _iterator3.return();
                        }
                    } finally {
                        if (_didIteratorError3) {
                            throw _iteratorError3;
                        }
                    }
                }

                var sorted = _.sortBy(availabilities, function (x) {
                    return moment(x.start).unix();
                });

                var id = 0;
                var test_id = 1;

                while (test_id < sorted.length) {
                    var src = sorted[id];
                    var test = sorted[test_id];
                    //console.log(id, test_id, src)
                    if (!src.delete_me) {
                        if (test.unix_end > src.unix_end && test.unix_start < src.unix_end) {
                            src.end = test.end;
                            src.unix_end = test.unix_end;
                            test.delete_me = true;
                            test_id += 1;
                        } else if (test.unix_end <= src.unix_end) {
                            // it's inside - just delete it
                            test.delete_me = true;
                            test_id += 1;
                        } else {
                            id += 1;
                            test_id += 1;
                        }
                    } else {
                        id += 1;
                        test_id = id + 1;
                    }
                }

                var _iteratorNormalCompletion4 = true;
                var _didIteratorError4 = false;
                var _iteratorError4 = undefined;

                try {
                    for (var _iterator4 = Array.from(sorted)[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                        var availability = _step4.value;

                        if (!availability.delete_me) {
                            overAllAvailabilities.push({
                                start: availability.start,
                                end: availability.end,
                                rendering: "background",
                                title: 'Joined availability ' + moment(availability.start).format('YYYY-MM-DD'),
                                allDay: options.calendarView === 'month' ? true : false
                            });
                        }
                    }

                    //console.log overAllAvailabilities

                } catch (err) {
                    _didIteratorError4 = true;
                    _iteratorError4 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion4 && _iterator4.return) {
                            _iterator4.return();
                        }
                    } finally {
                        if (_didIteratorError4) {
                            throw _iteratorError4;
                        }
                    }
                }

                return deferred.resolve(overAllAvailabilities);
            }
        }, function (err) {
            return deferred.reject(err);
        });

        return deferred.promise;
    };

    /**
     * @ngdoc method
     * @name setCalendarAvailabilityRange
     * @methodOf BBAdminDashboard.calendar.services.service:CalendarEventSources
     * @description
     * Sets AdminCalendarOptions availability range to the minTime and maxTime from all schedules
     *
     * @param {array} availabilities  The availabilities to get the min/max time from
     */
    var setCalendarAvailabilityRange = function setCalendarAvailabilityRange(availabilities) {
        var maxTime = void 0,
            minTime = void 0;
        if (availabilities.length === 0) {
            return;
        }
        // set minTime and maxTime to first availabilty and loop through to get earliest start and latest end
        for (var index = 0; index < availabilities.length; index++) {
            var availability = availabilities[index];
            if (availability.start.isBefore(minTime) || index === 0) {
                minTime = availability.start;
            }
            if (availability.end.isAfter(maxTime) || index === 0) {
                maxTime = availability.end;
            }
        }

        // store on AdminCalendarOptions object to read from in resourceCalendar controller prepareUiCalOptions method
        AdminCalendarOptions.minTime = minTime.format('HH:mm');
        AdminCalendarOptions.maxTime = maxTime.format('HH:mm');

        guardMidnightFormat(minTime, maxTime);

        $rootScope.$broadcast('CalendarEventSources:timeRangeChanged');
    };

    /**
     * @ngdoc method
     * @name guardMidnightFormat
     * @methodOf BBAdminDashboard.calendar.services.service:CalendarEventSources
     * @description
     * Formats maxTime from 00:00 to 24:00 when using 24 hour availability
     *
     * @param {Moment} minTime Moment object containing minimum availability time
     * @param {Moment} maxTime Moment object containing maximum availability time
     */
    var guardMidnightFormat = function guardMidnightFormat(minTime, maxTime) {
        if (!minTime.isSame(maxTime, 'day') && AdminCalendarOptions.maxTime === '00:00') {
            AdminCalendarOptions.maxTime = '24:00';
        }
    };

    /**
     * @ngdoc method
     * @name getAllCalendarEntries
     * @methodOf BBAdminDashboard.calendar.services.service:CalendarEventSources
     * @description
     * Returns all event type information to be displayed in the calendar
     *
     * @param {object} company  The company to be queried for bookings and blocks
     * @param {Moment} start    Moment object containing the start of the requested period
     * @param {Moment} end      Moment object containing the end of the requested period
     * @param {object} options  Object which contains usefull flags and params (see above methodds for details)
     *
     * @returns {Promise} Promise which once resolved returns an array of availability background events
     */
    var getAllCalendarEntries = function getAllCalendarEntries(company, start, end, options) {
        if (options == null) {
            options = {};
        }
        var deferred = $q.defer();

        var promises = [getBookingsAndBlocks(company, start, end, options), getExternalBookings(company, start, end, options), getAvailabilityBackground(company, start, end, options)];

        $q.all(promises).then(function (resolutions) {
            var allResults = [];
            angular.forEach(resolutions, function (results, index) {
                return allResults = allResults.concat(results);
            });

            return deferred.resolve(allResults);
        }, function (err) {
            return deferred.reject(err);
        });

        return deferred.promise;
    };

    return {
        getBookingsAndBlocks: getBookingsAndBlocks,
        getExternalBookings: getExternalBookings,
        getAvailabilityBackground: getAvailabilityBackground,
        getAllCalendarEntries: getAllCalendarEntries
    };
});
"use strict";

angular.module('BBAdminDashboard.calendar.services').factory("PrePostTime", function ($compile) {

    return {
        apply: function apply(event, elements, view, scope) {
            return function () {
                var result = [];
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = Array.from(elements)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var e = _step.value;

                        var item = void 0;
                        var element = angular.element(e);
                        var totalDuration = event.duration + event.pre_time + event.post_time;
                        if (event.pre_time) {
                            switch (view.name) {
                                case "agendaWeek":
                                case "agendaDay":
                                    var preHeight = event.pre_time * (element.height() + 2) / totalDuration;
                                    var pre = $compile("<div class='pre' style='height:" + preHeight + "px'></div>")(scope);
                                    element.prepend(pre);
                                    break;
                                case "timelineDay":
                                    var contentDiv = element.children()[0];
                                    var preWidth = event.pre_time * (element.width() + 2) / totalDuration;
                                    pre = $compile("<div class='pre' style='width:" + preWidth + "px'></div>")(scope);
                                    element.prepend(pre);
                                    angular.element(contentDiv).css("padding-left", preWidth + "px");
                                    break;
                            }
                        }
                        if (event.post_time) {
                            switch (view.name) {
                                case "agendaWeek":
                                case "agendaDay":
                                    var postHeight = event.post_time * (element.height() + 2) / totalDuration;
                                    var post = $compile("<div class='post' style='height:" + postHeight + "px'></div>")(scope);
                                    item = element.append(post);
                                    break;
                                case "timelineDay":
                                    var postWidth = event.post_time * (element.width() + 2) / totalDuration;
                                    post = $compile("<div class='post' style='width:" + postWidth + "px'></div>")(scope);
                                    item = element.append(post);
                                    break;
                            }
                        }
                        result.push(item);
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }

                return result;
            }();
        }
    };
});
'use strict';

/*
 * @ngdoc service
 * @name BBAdminDashboard.calendar.services.service:TitleAssembler
 *
 * @description
 * Assembles a string based on a pattern and an object provided according to the following rules
 * ex: '{service_name} - {client_name} - {created_at|date:shortTime}'
 * everything outside  {} will remain as is, inside the {} the first param (required) is the property name
 * second after the '|' (optional) is the filter and third after the ':' (optional) are the options for filter
 * if the requested property is not part of the given object it will be skipped
 */
angular.module('BBAdminDashboard.calendar.services').factory('TitleAssembler', [function () {
    var expression = new RegExp("\\{([a-zA-z_-]+)\\|?([a-zA-z_-]+)?:?([a-zA-z0-9{}_-]+)?\\}", "g");

    return {
        getTitle: function getTitle(object, pattern) {
            // Return null if either the object or the pattern hasnt been passed in
            if (object == null || pattern == null) {
                return null;
            }

            var patternMatches = pattern.match(expression);
            // No pattern matches means there is nothing to replace in the pattern
            // hence simply return the pattern
            if (patternMatches == null || patternMatches.length === 0) {
                return pattern;
            }

            var label = pattern;

            for (var index = 0; index < patternMatches.length; index++) {
                var match = patternMatches[index];
                var parts = match.split(expression);
                // Remove unnecessary empty properties of the array (first/last)
                parts.splice(0, 1);
                parts.pop();

                // If requested property exists replace the placeholder with value otherwise with ''
                if (object.hasOwnProperty(parts[0])) {
                    var replaceWith = object[parts[0]];
                    // if a filter is requested as part of the expression and filter exists
                    if (parts[1] != null && $filter(parts[1]) != null) {
                        // If filter has options as part of the expression use them
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
        }
    };
}]);
'use strict';

/*
 * @ngdoc overview
 * @name BBAdminDashboard.calendar.translations
 *
 * @description
 * Translations for the admin calendar module
 */
angular.module('BBAdminDashboard.calendar.translations').config(['$translateProvider', function ($translateProvider) {
    return $translateProvider.translations('en', {

        'ADMIN_DASHBOARD': {

            'SIDE_NAV': {
                'CALENDAR_PAGE': {
                    'CALENDAR': 'Calendar',
                    'PEOPLE': 'Staff',
                    'RESOURCES': 'Resources'
                }
            },

            'CALENDAR_PAGE': {
                'SHOW': 'Show',
                'ALL': 'all',
                'SOME': 'some',
                'SELECT_STAFF_RESOURCES': 'Select staff or resource...',
                'EMAIL': 'email',
                'TODAY': 'Today',
                'WEEK': 'Week',
                'MONTH': 'Month',
                'DAY': 'Day ({{minutes}}m)',
                'AGENDA': 'Agenda',
                'STAFF': 'Staff',
                'RESOURCES': 'Resources',
                'MOVE_MODAL_HEADING': 'Move',
                'MOVE_MODAL_BODY': 'Are you sure you want to move?',
                'ADD_BOOKING': 'Add Booking'
            }
        }
    });
}]);
'use strict';

/*
 * @ngdoc controller
 * @name BBAdminDashboard.check-in.controllers.controller:CheckInPageCtrl
 *
 * @description
 * Controller for the check-in page
 */
angular.module('BBAdminDashboard.check-in.controllers').controller('CheckInPageCtrl', ['$scope', '$state', '$log', function ($scope, $state, $log) {
    var pusher_channel = $scope.company.getPusherChannel('bookings');
    var refetch = _.throttle(function (data) {
        $log.info('== booking push received in checkin  == ', data);
        return $scope.$broadcast('refetchCheckin', data);
    }, 1000, { leading: false });

    if (pusher_channel) {
        pusher_channel.bind('create', refetch);
        pusher_channel.bind('update', refetch);
        return pusher_channel.bind('destroy', refetch);
    }
}]);
'use strict';

angular.module('BBAdminDashboard.check-in.directives').directive('bbAddWalkin', function () {
    return {
        restrict: 'AE',
        replace: true,
        scope: true,
        link: function link(scope, element, attrs) {},
        controller: function controller($scope, AdminBookingPopup, $timeout) {

            return $scope.walkIn = function () {
                return AdminBookingPopup.open({
                    item_defaults: {
                        pick_first_time: true,
                        merge_people: true,
                        merge_resources: true,
                        date: moment().format('YYYY-MM-DD')
                    },
                    on_conflict: "cancel()",
                    company_id: $scope.bb.company.id
                });
            };
        }
    };
});
'use strict';

angular.module('BBAdminDashboard.check-in.directives').directive('bbCheckinTable', function () {
    return {
        restrict: 'AE',
        replace: false,
        scope: true,
        templateUrl: 'check-in/checkin-table.html',
        controller: 'CheckinsController',
        link: function link(scope, element, attrs) {}
    };
});

angular.module('BBAdminDashboard.check-in.directives').controller('CheckinsController', function ($scope, $rootScope, BusyService, $q, $filter, AdminTimeService, ModalForm, AdminSlotService, $timeout, AlertService, BBModel) {

    $scope.$on('refetchCheckin', function (event, res) {
        return $scope.getAppointments(null, null, null, null, null, true);
    });

    $scope.getAppointments = function (currentPage, filterBy, filterByFields, orderBy, orderByReverse, skipCache) {
        if (skipCache == null) {
            skipCache = true;
        }
        if (filterByFields && filterByFields.name != null) {
            filterByFields.name = filterByFields.name.replace(/\s/g, '');
        }
        if (filterByFields && filterByFields.mobile != null) {
            var mobile = filterByFields.mobile;

            if (mobile.indexOf('0') === 0) {
                filterByFields.mobile = mobile.substring(1);
            }
        }
        var defer = $q.defer();
        var params = {
            company: $scope.company,
            date: moment().format('YYYY-MM-DD'),
            url: $scope.bb.api_url
        };

        if (skipCache) {
            params.skip_cache = true;
        }
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

        BBModel.Admin.Booking.$query(params).then(function (res) {
            $scope.booking_collection = res;
            $scope.bookings = [];
            $scope.bmap = {};
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = Array.from(res.items)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var item = _step.value;

                    if (item.status !== 3) {
                        // not blocked
                        $scope.bookings.push(item.id);
                        $scope.bmap[item.id] = item;
                    }
                }
                // update the items if they've changed
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            $scope.booking_collection.addCallback($scope, function (booking, status) {
                $scope.bookings = [];
                $scope.bmap = {};
                return function () {
                    var result = [];
                    var _iteratorNormalCompletion2 = true;
                    var _didIteratorError2 = false;
                    var _iteratorError2 = undefined;

                    try {
                        for (var _iterator2 = Array.from($scope.booking_collection.items)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                            item = _step2.value;

                            var item1 = void 0;
                            if (item.status !== 3) {
                                // not blocked
                                $scope.bookings.push(item.id);
                                item1 = $scope.bmap[item.id] = item;
                            }
                            result.push(item1);
                        }
                    } catch (err) {
                        _didIteratorError2 = true;
                        _iteratorError2 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                                _iterator2.return();
                            }
                        } finally {
                            if (_didIteratorError2) {
                                throw _iteratorError2;
                            }
                        }
                    }

                    return result;
                }();
            });
            return defer.resolve($scope.bookings);
        }, function (err) {
            return defer.reject(err);
        });
        return defer.promise;
    };

    $scope.setStatus = function (booking, status) {
        var clone = _.clone(booking);
        clone.current_multi_status = status;
        return booking.$update(clone).then(function (res) {
            return $scope.booking_collection.checkItem(res);
        }, function (err) {
            return AlertService.danger({ msg: 'Something went wrong' });
        });
    };

    $scope.edit = function (booking) {
        return booking.$getAnswers().then(function (answers) {
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
                for (var _iterator3 = Array.from(answers.answers)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var answer = _step3.value;

                    booking['question' + answer.question_id] = answer.value;
                }
            } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
                        _iterator3.return();
                    }
                } finally {
                    if (_didIteratorError3) {
                        throw _iteratorError3;
                    }
                }
            }

            return ModalForm.edit({
                model: booking,
                title: 'Booking Details',
                templateUrl: 'edit_booking_modal_form.html',
                success: function success(b) {
                    b = new BBModel.Admin.Booking(b);
                    return $scope.bmap[b.id] = b;
                }
            });
        });
    };

    // Make sure everytime we enter this view we skip the
    // cache to get the latest state of appointments
    return $scope.getAppointments(null, null, null, null, null, true);
});
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
angular.module('BBAdminDashboard.check-in.services').provider('AdminCheckInOptions', [function () {
    // This list of options is meant to grow
    var options = {
        use_default_states: true,
        show_in_navigation: true,
        parent_state: 'root'
    };

    this.setOption = function (option, value) {
        if (options.hasOwnProperty(option)) {
            options[option] = value;
        }
    };

    this.getOption = function (option) {
        if (options.hasOwnProperty(option)) {
            return options[option];
        }
    };
    this.$get = function () {
        return options;
    };
}]);
'use strict';

/*
 * @ngdoc overview
 * @name BBAdminDashboard.check-in.translations
 *
 * @description
 * Translations for the admin check-in module
 */
angular.module('BBAdminDashboard.check-in.translations').config(['$translateProvider', function ($translateProvider) {
    return $translateProvider.translations('en', {

        'ADMIN_DASHBOARD': {

            'SIDE_NAV': {
                'CHECK_IN_PAGE': {
                    'CHECK_IN': 'Check in'
                }
            },

            'CHECK_IN_PAGE': {
                'CHECK_IN': 'Check in',
                'NO_SHOW': 'No Show',
                'WALK_IN': 'Walk in',
                'CUSTOMER': 'Customer',
                'STAFF_MEMBER': 'Staff Member',
                'DUE': 'Due',
                'ARRIVED': 'Arrived',
                'BEEING_SEEN': 'Being Seen',
                'COMPLETED': 'Completed',
                'NO_SHOW_BUTTON': 'Mark No Show',
                'CHECK_IN_BUTTON': 'Check in',
                'SERVE': 'Serve',
                'WAITING_FOR': 'Waiting for {{period}}',
                'BEING_SEEN_FOR': 'Being seen for {{period}}',
                'WAS_DUE': 'Was due {{period}}',
                'COMPLETED_BUTTON': 'Completed'
            }

        }

    });
}]);
'use strict';

/*
 * @ngdoc controller
 * @name BBAdminDashboard.clients.controllers.controller:ClientsAllPageCtrl
 *
 * @description
 * Controller for the clients all page
 */
angular.module('BBAdminDashboard.clients.controllers').controller('ClientsAllPageCtrl', ['$scope', '$state', function ($scope, $state) {
  return $scope.set_current_client(null);
}]);
'use strict';

/*
 * @ngdoc controller
 * @name BBAdminDashboard.clients.controllers.controller:ClientsEditPageCtrl
 *
 * @description
 * Controller for the clients edit page
 */
angular.module('BBAdminDashboard.clients.controllers').controller('ClientsEditPageCtrl', function ($scope, client, $state, company, BBModel) {

    $scope.client = client;
    $scope.historicalStartDate = moment().add(-1, 'years');
    $scope.historicalEndDate = moment();
    // Refresh Client Resource after save
    return $scope.memberSaveCallback = function () {
        var params = {
            company_id: company.id,
            id: $state.params.id,
            flush: true
        };

        return BBModelAdmin.Client.$query(params).then(function (client) {
            return $scope.client = client;
        });
    };
});
'use strict';

/*
 * @ngdoc controller
 * @name BBAdminDashboard.clients.controllers.controller:ClientsNewPageCtrl
 *
 * @description
 * Controller for the clients new page
 */
angular.module('BBAdminDashboard.clients.controllers').controller('ClientsNewPageCtrl', ['$scope', '$state', function ($scope, $state) {}]);
'use strict';

/*
 * @ngdoc controller
 * @name BBAdminDashboard.clients.controllers.controller:ClientsPageCtrl
 *
 * @description
 * Controller for the clients page
 */
angular.module('BBAdminDashboard.clients.controllers').controller('ClientsPageCtrl', ['$scope', '$state', function ($scope, $state) {

    $scope.clientsOptions = { search: null };

    return $scope.set_current_client = function (client) {
        return $scope.current_client = client;
    };
}]);
'use strict';

angular.module('BBAdminDashboard.clients.directives').directive('bbClientsTable', function () {
    return {
        restrict: 'AE',
        replace: true,
        scope: true,
        controller: 'TabletClients',
        link: function link(scope, element, attrs) {}
    };
});

angular.module('BBAdminDashboard.clients.directives').controller('TabletClients', function ($scope, $rootScope, $q, BBModel, AlertService) {

    $scope.clientDef = $q.defer();
    $scope.clientPromise = $scope.clientDef.promise;
    $scope.per_page = 15;
    $scope.total_entries = 0;
    $scope.clients = [];

    return $scope.getClients = function (currentPage, filterBy, filterByFields, orderBy, orderByReverse) {
        var fields = angular.copy(filterByFields);
        //   if fields.name?
        //    fields.name = fields.name.replace(/\s/g, '')
        if (fields.mobile != null) {
            var mobile = fields.mobile;

            if (mobile.indexOf('0') === 0) {
                fields.mobile = mobile.substring(1);
            }
        }

        var clientDef = $q.defer();

        var params = {
            company: $scope.bb.company,
            per_page: $scope.per_page,
            page: currentPage + 1,
            filter_by: filterBy,
            filter_by_fields: fields,
            order_by: orderBy,
            order_by_reverse: orderByReverse
        };
        return BBModel.Admin.Client.$query(params).then(function (clients) {
            $scope.clients = clients.items;
            $scope.total_entries = clients.total_entries;
            return clientDef.resolve(clients.items);
        }, function (err) {
            console.log(err);
            return clientDef.reject(err);
        });
    };
});
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
angular.module('BBAdminDashboard.clients.services').provider('AdminClientsOptions', [function () {
    // This list of options is meant to grow
    var options = {
        use_default_states: true,
        show_in_navigation: true,
        parent_state: 'root'
    };

    this.setOption = function (option, value) {
        if (options.hasOwnProperty(option)) {
            options[option] = value;
        }
    };

    this.getOption = function (option) {
        if (options.hasOwnProperty(option)) {
            return options[option];
        }
    };
    this.$get = function () {
        return options;
    };
}]);
'use strict';

/*
 * @ngdoc overview
 * @name BBAdminDashboard.clients.translations
 *
 * @description
 * Translations for the admin clients module
 */
angular.module('BBAdminDashboard.clients.translations').config(['$translateProvider', function ($translateProvider) {
    return $translateProvider.translations('en', {
        'ADMIN_DASHBOARD': {
            'SIDE_NAV': {
                'CLIENTS_PAGE': {
                    'CLIENTS': 'Customers'
                }
            },
            'CLIENTS_PAGE': {
                'CLIENTS': 'Customers',
                'CLIENT': 'Customer',
                'NAME': 'Name',
                'EMAIL': 'Email',
                'MOBILE': 'Mobile',
                'PHONE': 'Phone',
                'ACTIONS': 'Actions',
                'EDIT': 'Edit',
                'ABOUT': 'About',
                'ADDRESS': 'Address',
                'UPCOMING_BOOKINGS': 'Upcoming Bookings',
                'PAST_BOOKINGS': 'Past Bookings',
                'CUSTOMER_DETAILS': 'Customer Details'
            }
        }
    });
}]);
'use strict';

/*
 * @ngdoc controller
 * @name BBAdminDashboard.config-iframe.controllers.controller:ConfigIframeBookingSettingsPageCtrl
 *
 * @description
 * Controller for the config page
 */
angular.module('BBAdminDashboard.config-iframe.controllers').controller('ConfigIframeBookingSettingsPageCtrl', ['$scope', '$state', '$rootScope', function ($scope, $state, $rootScope) {
    $scope.pageHeader = 'ADMIN_DASHBOARD.CONFIG_IFRAME_PAGE.BOOKING_SETTINGS.TITLE';

    $scope.tabs = [{
        name: 'ADMIN_DASHBOARD.CONFIG_IFRAME_PAGE.BOOKING_SETTINGS.TAB_QUESTIONS',
        icon: 'fa fa-question-circle',
        path: 'config.booking-settings.page({path: "detail_type"})'
    }, {
        name: 'ADMIN_DASHBOARD.CONFIG_IFRAME_PAGE.BOOKING_SETTINGS.TAB_QUESTION_GROUPS',
        icon: 'fa fa-question-circle',
        path: 'config.booking-settings.page({path: "detail_group"})'
    }, {
        name: 'ADMIN_DASHBOARD.CONFIG_IFRAME_PAGE.BOOKING_SETTINGS.TAB_BOOKING_TEXT',
        icon: 'fa fa-file-text',
        path: 'config.booking-settings.page({path: "conf/text/text_edit"})'
    }, {
        name: 'ADMIN_DASHBOARD.CONFIG_IFRAME_PAGE.BOOKING_SETTINGS.TAB_ADDRESSES',
        icon: 'fa fa-building-o',
        path: 'config.booking-settings.page({path: "address"})'
    }, {
        name: 'ADMIN_DASHBOARD.CONFIG_IFRAME_PAGE.BOOKING_SETTINGS.TAB_IMAGES',
        icon: 'fa fa-picture-o',
        path: 'config.booking-settings.page({path: "media/image/all"})'
    }];

    $scope.contentsLoading = false;

    $scope.$on('iframeLoaded', function () {
        $scope.contentsLoading = false;
        return $scope.$apply();
    });

    return $scope.$on('iframeLoading', function () {
        return $scope.contentsLoading = true;
    });
}]);
'use strict';

/*
 * @ngdoc controller
 * @name BBAdminDashboard.config-iframe.controllers.controller:ConfigIframeBusinessPageCtrl
 *
 * @description
 * Controller for the config page
 */
angular.module('BBAdminDashboard.config-iframe.controllers').controller('ConfigIframeBusinessPageCtrl', ['$scope', '$state', '$rootScope', function ($scope, $state, $rootScope) {
    $scope.pageHeader = 'ADMIN_DASHBOARD.CONFIG_IFRAME_PAGE.BUSINESS.TITLE';

    $scope.tabs = [{
        name: 'ADMIN_DASHBOARD.CONFIG_IFRAME_PAGE.BUSINESS.TAB_STAFF',
        icon: 'fa fa-male',
        path: 'config.business.page({path: "person"})'
    }, {
        name: 'ADMIN_DASHBOARD.CONFIG_IFRAME_PAGE.BUSINESS.TAB_RESOURCES',
        icon: 'fa fa-diamond',
        path: 'config.business.page({path: "resource"})'
    }, {
        name: 'ADMIN_DASHBOARD.CONFIG_IFRAME_PAGE.BUSINESS.TAB_SERVICES',
        icon: 'fa fa-wrench',
        path: 'config.business.page({path: "service"})'
    }, {
        name: 'ADMIN_DASHBOARD.CONFIG_IFRAME_PAGE.BUSINESS.TAB_WHO_WHAT_WHERE',
        icon: 'fa fa-question-circle',
        path: 'config.business.page({path: "grid"})'
    }, {
        name: 'ADMIN_DASHBOARD.CONFIG_IFRAME_PAGE.BUSINESS.TAB_QUEUES',
        icon: 'fa fa-users',
        path: 'config.business.page({path: "client_queue"})'
    }];

    $scope.contentsLoading = false;

    $scope.$on('iframeLoaded', function () {
        $scope.contentsLoading = false;
        return $scope.$apply();
    });

    return $scope.$on('iframeLoading', function () {
        return $scope.contentsLoading = true;
    });
}]);
'use strict';

/*
 * @ngdoc controller
 * @name BBAdminDashboard.config-iframe.controllers.controller:ConfigIframeEventSettingsPageCtrl
 *
 * @description
 * Controller for the config page
 */
angular.module('BBAdminDashboard.config-iframe.controllers').controller('ConfigIframeEventSettingsPageCtrl', ['$scope', '$state', '$rootScope', function ($scope, $state, $rootScope) {
    $scope.pageHeader = 'ADMIN_DASHBOARD.CONFIG_IFRAME_PAGE.EVENT_SETTINGS.TITLE';

    $scope.tabs = [{
        name: 'ADMIN_DASHBOARD.CONFIG_IFRAME_PAGE.EVENT_SETTINGS.TAB_COURSES',
        icon: 'fa fa-clipboard',
        path: 'config.event-settings.page({path: "sessions/courses"})'
    }, {
        name: 'ADMIN_DASHBOARD.CONFIG_IFRAME_PAGE.EVENT_SETTINGS.TAB_SINGLE_EVENTS',
        icon: 'fa fa-ticket',
        path: 'config.event-settings.page({path: "sessions/events"})'
    }, {
        name: 'ADMIN_DASHBOARD.CONFIG_IFRAME_PAGE.EVENT_SETTINGS.TAB_REGULAR_EVENTS',
        icon: 'fa fa-calendar',
        path: 'config.event-settings.page({path: "sessions/recurring"})'
    }, {
        name: 'ADMIN_DASHBOARD.CONFIG_IFRAME_PAGE.EVENT_SETTINGS.TAB_GROUPS',
        icon: 'fa fa-object-group',
        path: 'config.event-settings.page({path: "sessions/types"})'
    }, {
        name: 'ADMIN_DASHBOARD.CONFIG_IFRAME_PAGE.EVENT_SETTINGS.TAB_TEMPLATES',
        icon: 'fa fa-folder-open',
        path: 'config.event-settings.page({path: "sessions/template"})'
    }];

    $scope.contentsLoading = false;

    $scope.$on('iframeLoaded', function () {
        $scope.contentsLoading = false;
        return $scope.$apply();
    });

    return $scope.$on('iframeLoading', function () {
        return $scope.contentsLoading = true;
    });
}]);
'use strict';

/*
 * @ngdoc controller
 * @name BBAdminDashboard.config-iframe.controllers.controller:ConfigIframePageCtrl
 *
 * @description
 * Controller for the config page
 */
angular.module('BBAdminDashboard.config-iframe.controllers').controller('ConfigIframePageCtrl', ['$scope', '$state', '$rootScope', function ($scope, $state, $rootScope) {

    $scope.parent_state = $state.is("config");
    $scope.path = "edit";

    return $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
        $scope.parent_state = false;
        if (toState.name === "config") {
            return $scope.parent_state = true;
        }
    });
}]);
'use strict';

/*
 * @ngdoc controller
 * @name BBAdminDashboard.config-iframe.controllers.controller:ConfigIframePromotionsPageCtrl
 *
 * @description
 * Controller for the config page
 */
angular.module('BBAdminDashboard.config-iframe.controllers').controller('ConfigIframePromotionsPageCtrl', ['$scope', '$state', '$rootScope', function ($scope, $state, $rootScope) {
    $scope.pageHeader = 'ADMIN_DASHBOARD.CONFIG_IFRAME_PAGE.PROMOTIONS.TITLE';

    $scope.tabs = [{
        name: 'ADMIN_DASHBOARD.CONFIG_IFRAME_PAGE.PROMOTIONS.TAB_DEALS',
        icon: 'fa fa-exclamation-triangle',
        path: 'config.promotions.page({path: "price/deal/summary"})'
    }, {
        name: 'ADMIN_DASHBOARD.CONFIG_IFRAME_PAGE.PROMOTIONS.TAB_COUPONS',
        icon: 'fa fa-money',
        path: 'config.promotions.page({path: "price/coupon"})'
    }, {
        name: 'ADMIN_DASHBOARD.CONFIG_IFRAME_PAGE.PROMOTIONS.TAB_BULK_PURCHASES',
        icon: 'fa fa-th',
        path: 'config.promotions.page({path: "price/block"})'
    }, {
        name: 'ADMIN_DASHBOARD.CONFIG_IFRAME_PAGE.PROMOTIONS.TAB_PACKAGES',
        icon: 'fa fa-gift',
        path: 'config.promotions.page({path: "package"})'
    }];

    $scope.contentsLoading = false;

    $scope.$on('iframeLoaded', function () {
        $scope.contentsLoading = false;
        return $scope.$apply();
    });

    return $scope.$on('iframeLoading', function () {
        return $scope.contentsLoading = true;
    });
}]);
'use strict';

/*
 * @ngdoc controller
 * @name BBAdminDashboard.config-iframe.controllers.controller:ConfigSubIframePageCtrl
 *
 * @description
 * Controller for the config sub page
 */
angular.module('BBAdminDashboard.config-iframe.controllers').controller('ConfigSubIframePageCtrl', ['$scope', '$state', '$stateParams', function ($scope, $state, $stateParams) {
    $scope.path = $stateParams.path;
    $scope.pageHeader = null;

    $scope.$emit('iframeLoading', {});

    return $scope.onIframeLoad = function () {
        return $scope.$emit('iframeLoaded', {});
    };
}]);
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
angular.module('BBAdminDashboard.config-iframe.services').provider('AdminConfigIframeOptions', [function () {
    // This list of options is meant to grow
    var options = {
        use_default_states: true,
        show_in_navigation: true,
        parent_state: 'root'
    };

    this.setOption = function (option, value) {
        if (options.hasOwnProperty(option)) {
            options[option] = value;
        }
    };

    this.getOption = function (option) {
        if (options.hasOwnProperty(option)) {
            return options[option];
        }
    };
    this.$get = function () {
        return options;
    };
}]);
'use strict';

/*
 * @ngdoc overview
 * @name BBAdminDashboard.config-iframe.translations
 *
 * @description
 * Translations for the admin config-iframe module
 */
angular.module('BBAdminDashboard.config-iframe.translations').config(['$translateProvider', function ($translateProvider) {
    return $translateProvider.translations('en', {
        'ADMIN_DASHBOARD': {
            'SIDE_NAV': {
                'CONFIG_IFRAME_PAGE': {
                    'CONFIG': 'Config',
                    'YOUR_BUSINESS': 'Your business',
                    'EVENT_SETTINGS': 'Event settings',
                    'PROMOTIONS': 'Promotions',
                    'BOOKING_SETTINGS': 'Booking settings'
                }
            },
            'CONFIG_IFRAME_PAGE': {
                'BUSINESS': {
                    'TITLE': 'Configure: Business',
                    'TAB_STAFF': 'Staff',
                    'TAB_RESOURCES': 'Resource',
                    'TAB_SERVICES': 'Services',
                    'TAB_WHO_WHAT_WHERE': 'Who / What / Where',
                    'TAB_QUEUES': 'Queues'
                },
                'EVENT_SETTINGS': {
                    'TITLE': 'Event settings',
                    'TAB_COURSES': 'Courses',
                    'TAB_SINGLE_EVENTS': 'Single events',
                    'TAB_REGULAR_EVENTS': 'Regular events',
                    'TAB_GROUPS': 'Groups',
                    'TAB_TEMPLATES': 'Templates'
                },
                'PROMOTIONS': {
                    'TITLE': 'Promotions',
                    'TAB_DEALS': 'Deals',
                    'TAB_COUPONS': 'Coupons',
                    'TAB_BULK_PURCHASES': 'Bulk purchases',
                    'TAB_PACKAGES': 'Packages'
                },
                'BOOKING_SETTINGS': {
                    'TITLE': 'Booking settings',
                    'TAB_QUESTIONS': 'Questions',
                    'TAB_QUESTION_GROUPS': 'Question Groups',
                    'TAB_BOOKING_TEXT': 'Booking text',
                    'TAB_ADDRESSES': 'Addresses',
                    'TAB_IMAGES': 'Images'
                }
            }
        }
    });
}]);
'use strict';

/**
 * @ngdoc controller
 * @name BBAdminDashboard.controller:CorePageController
 * @description
 * Controller for the layout (root state)
 */
var controller = function controller($scope, $state, company, $uibModalStack, $rootScope, GeneralOptions, CompanyStoreService) {
    'ngInject';

    $scope.company = company;
    $scope.bb.company = company;
    $scope.user = $rootScope.user;

    //Set timezone globally per company basis (company contains timezone info)
    moment.tz.setDefault(company.timezone);

    CompanyStoreService.country_code = company.country_code;
    CompanyStoreService.currency_code = company.currency_code;
    CompanyStoreService.time_zone = company.timezone;

    // checks to see if passed in state is part of the active chain
    $scope.isState = function (states) {
        return $state.includes(states);
    };

    $rootScope.$on('$stateChangeStart', function () {
        return $uibModalStack.dismissAll();
    });
};

angular.module('BBAdminDashboard').controller('CorePageController', controller);
'use strict';

/**
 * @ngdoc directive
 * @name BBAdminDashboard.directive:adminIframe
 * @scope
 * @restrict A
 *
 * @description
 * Ensures iframe size is based on iframe content and that the iframe src is whitelisted
 *
 * @param {string}   path         A string that contains the iframe url
 * @param {string}   apiUrl       A string that contains the ApiUrl
 * @param {boolean}  fullHeight   A boolean that enables the iframe to take all available hight in the content area
 * @param {object}   extraParams  An object that contains extra params for the url (optional)
 * @param {function} onLoad       A callback function to be called after the iframed has finished loading (optional)
 */
angular.module('BBAdminDashboard').directive('adminIframe', function ($window, $timeout) {
    return {
        restrict: 'A',
        scope: {
            path: '=',
            apiUrl: '=',
            fullHeight: '=?',
            extraParams: '=?',
            onLoad: '=?'
        },
        templateUrl: 'core/admin-iframe.html',
        controller: ['$scope', '$sce', function ($scope, $sce) {
            return $scope.frameSrc = $sce.trustAsResourceUrl($scope.apiUrl + '/' + unescape($scope.path) + ('?whitelabel=adminlte&uiversion=aphid&' + ($scope.extraParams ? $scope.extraParams : undefined)));
        }],
        link: function link(scope, element, attrs) {
            var calculateFullHeight = function calculateFullHeight(containerHeight) {

                var heightToConsider = 0;
                // Make sure we include the content container's padding in the calculation
                var contentSection = angular.element(document.querySelectorAll('section.content'));
                if (contentSection.length) {
                    contentSection = contentSection[0];
                    heightToConsider = heightToConsider + parseInt($window.getComputedStyle(contentSection, null).getPropertyValue('padding-top'));
                    heightToConsider = heightToConsider + parseInt($window.getComputedStyle(contentSection, null).getPropertyValue('padding-bottom'));
                }

                return containerHeight - heightToConsider;
            };

            // Callback onload of the iframe
            element.find('iframe')[0].onload = function () {
                scope.$emit('iframeLoaded', {});
                if (typeof scope.onLoad === 'function') {
                    // moved this line from template to directive to work with IE & Firefox since onload was called before the iframe was entirely loaded.
                    this.style.display = 'block';
                    return scope.onLoad();
                }
            };

            if (scope.fullHeight) {
                // first load attempt
                element.find('iframe').height(calculateFullHeight(angular.element(document.querySelector('#content-wrapper')).height()) + 'px');

                // This will listen for resize events
                scope.$on('content.changed', function (event, data) {
                    return element.find('iframe').height(calculateFullHeight(data.height) + 'px');
                });
            } else {
                $window.addEventListener('message', function (event) {
                    if (event.data.height) {
                        return element.find('iframe').height(event.data.height + 'px');
                    }
                });
            }
        }
    };
});
'use strict';

/**
 * @ngdoc directive
 * @name BBAdminDashboard.directive:adminSideNav
 * @scope
 * @restrict A
 *
 * @description
 * Ensures iframe size is based on iframe content and that the iframe src is whitelisted
 *
 * @param {string}  path         A string that contains the iframe url
 * @param {string}  apiUrl       A string that contains the ApiUrl
 * @param {object}  extraParams  An object that contains extra params for the url (optional)
 */
angular.module('BBAdminDashboard').directive('adminSideNav', function () {
    return {
        restrict: 'A',
        scope: false,
        templateUrl: 'core/admin-side-nav.html',
        controller: ['$scope', 'SideNavigationPartials', function ($scope, SideNavigationPartials) {
            return $scope.navigation = SideNavigationPartials.getOrderedPartialTemplates();
        }],
        link: function link(scope, element, attrs) {}
    };
});
'use strict';

angular.module('BBAdminDashboard').directive('bbAdminDashboard', function (PageLayout) {
    return {
        restrict: 'AE',
        scope: {
            bb: '=',
            companyId: '@',
            ssoToken: '@'
        },
        template: '<div ui-view></div>',
        controller: ['$scope', '$rootScope', '$element', '$compile', '$localStorage', '$state', 'PageLayout', 'BBModel', 'AdminSsoLogin', 'AdminLoginOptions', function ($scope, $rootScope, $element, $compile, $localStorage, $state, PageLayout, BBModel, AdminSsoLogin, AdminLoginOptions) {

            $rootScope.bb = $scope.bb;

            var api_url = $localStorage.getItem("api_url");
            if (!$scope.bb.api_url && api_url) {
                $scope.bb.api_url = api_url;
            }

            // Set this up globally for everyone
            AdminSsoLogin.apiUrl = $scope.bb.api_url;
            AdminSsoLogin.ssoToken = $scope.ssoToken != null ? $scope.ssoToken : AdminLoginOptions.sso_token;
            AdminSsoLogin.companyId = $scope.companyId != null ? $scope.companyId : AdminLoginOptions.company_id;

            $scope.$on('$stateChangeError', function (evt, to, toParams, from, fromParams, error) {
                switch (error.reason) {
                    case 'NOT_LOGGABLE_ERROR':
                        evt.preventDefault();
                        return $state.go('login');
                    case 'COMPANY_IS_PARENT':
                        evt.preventDefault();
                        return $state.go('login');
                }
            });

            $scope.openSideMenu = function () {
                return PageLayout.sideMenuOn = true;
            };

            $scope.closeSideMenu = function () {
                return PageLayout.sideMenuOn = false;
            };

            $scope.toggleSideMenu = function () {
                return PageLayout.sideMenuOn = !PageLayout.sideMenuOn;
            };
        }],
        link: function link(scope, element, attrs) {

            scope.page = PageLayout;

            return scope.$watch('page', function (newPage, oldPage) {
                if (newPage.sideMenuOn) {
                    element.addClass('sidebar-open');
                    element.removeClass('sidebar-collapse');
                } else {
                    element.addClass('sidebar-collapse');
                    element.removeClass('sidebar-open');
                }

                if (newPage.boxed) {
                    return element.addClass('layout-boxed');
                } else {
                    return element.removeClass('layout-boxed');
                }
            }, true);
        }
    };
});
'use strict';

/**
 * @ngdoc directive
 * @name BBAdminDashboard.directive:bbChildCompanySwitch
 * @scope
 * @restrict A
 *
 * @description
 * Functionality that allows you to switch between child companies
 *
 */

angular.module('BBAdminDashboard').directive('bbChildCompanySwitch', function () {
    return {
        restrict: 'A',
        replace: true,
        scope: true,
        controller: function controller($scope, $state, AdminLoginService) {

            return $scope.logoutChildCompany = function () {
                return (
                    // fetch the id of the parent of the currently logged in child company.
                    $scope.bb.company.$getParent().then(function (parent_company) {
                        return (
                            // set the current company to be the parent.
                            AdminLoginService.setCompany(parent_company.id).then(function (response) {
                                return $state.go('login');
                            }, function (err) {
                                return $scope.formErrors.push({ message: "ADMIN_DASHBOARD.LOGIN_PAGE.ERROR_ISSUE_WITH_COMPANY" });
                            })
                        );
                    }, function (err) {
                        return $scope.formErrors.push({ message: "ADMIN_DASHBOARD.LOGIN_PAGE.ERROR_ISSUE_WITH_COMPANY" });
                    })
                );
            };
        }
    };
});
'use strict';

/**
 * @ngdoc directive
 * @name BBAdminDashboard.directive:bbClassicSwitch
 * @scope
 * @restrict A
 *
 * @description
 * Create a link that switches back to BB Classic mode
 *
 */
angular.module('BBAdminDashboard').directive('bbClassicSwitch', function () {
    return {
        restrict: 'A',
        scope: false,
        link: function link(scope, element, attrs) {
            if (scope.bb.api_url) {
                return attrs.$set('href', scope.bb.api_url + "?dashboard_redirect=true");
            }
        }
    };
});
'use strict';

angular.module('BBAdminDashboard').directive('bbIfLogin', function ($uibModal, $log, $q, $rootScope, AdminCompanyService, $compile, $templateCache, ModalForm, BBModel) {

    var compile = function compile() {
        return {
            pre: function pre(scope, element, attributes) {
                scope.notLoaded = function (sc) {
                    return null;
                };
                scope.setLoaded = function (sc) {
                    return null;
                };
                scope.setPageLoaded = function () {
                    return null;
                };

                $rootScope.start_deferred = $q.defer();
                $rootScope.connection_started = $rootScope.start_deferred.promise;
                this.whenready = $q.defer();
                scope.loggedin = this.whenready.promise;
                return AdminCompanyService.query(attributes).then(function (company) {
                    scope.company = company;
                    if (!scope.bb) {
                        scope.bb = {};
                    }
                    scope.bb.company = company;
                    this.whenready.resolve();
                    return $rootScope.start_deferred.resolve();
                });
            },
            post: function post(scope, element, attributes) {}
        };
    };

    var link = function link(scope, element, attrs) {};
    return {
        compile: compile
        //    controller: 'bbQueuers'
        // templateUrl: 'queuer_table.html'
    };
});
'use strict';

/**
 * @ngdoc directive
 * @name BBAdminDashboard.directive:bodyResize
 * @scope
 * @restrict A
 *
 * @description
 * Toggle side-menu based on window size
 *
 * @param {object}  field   A field object
 */
angular.module('BBAdminDashboard').directive('bodyResize', function ($window, $timeout, AdminCoreOptions, PageLayout) {
    return {
        restrict: 'A',
        link: function link(scope, element) {
            $timeout(function () {
                _sideMenuSetup(true);
            }, 0);
            angular.element($window).bind('resize', function () {
                _sideMenuSetup();
            });

            var _sideMenuSetup = function _sideMenuSetup(firstLoad) {
                if (firstLoad == null) {
                    firstLoad = false;
                }
                if ($window.innerWidth > 768 && (!firstLoad || AdminCoreOptions.sidenav_start_open) && !AdminCoreOptions.deactivate_sidenav) {
                    PageLayout.sideMenuOn = true;
                } else {
                    PageLayout.sideMenuOn = false;
                }
            };
        }
    };
});
'use strict';

/**
 * @ngdoc directive
 * @name BBAdminDashboard.directive:contentHeight
 * @scope
 * @restrict A
 *
 * @description
 * Fix the contentContainer height (dependant on whether to include the header or the footer in the calculations)
 * Emits & boradcasts 'content.changed' event
 *
 * @param {boolean}  includeHeader  (optional) include the header in the calculation of the content height
 * @param {boolean}  includeFooter  (optional) include the footer in the calculation of the content height
 */
angular.module('BBAdminDashboard').directive('contentHeight', function ($window, $timeout) {
    return {
        restrict: 'A',
        link: function link(scope, element, attributes) {

            var includeFooter = true;
            var includeHeader = true;

            if (attributes.includeHeader != null) {
                includeHeader = attributes.includeHeader;
            }
            if (attributes.includeFooter != null) {
                includeFooter = attributes.includeFooter;
            }

            $timeout(function () {
                _contentHeightSetup();
            }, 10);
            angular.element($window).bind('resize', function () {
                _contentHeightSetup();
            });

            var _contentHeightSetup = function _contentHeightSetup() {
                var height = $window.innerHeight;
                //subtrackt the header height
                if (includeHeader === true) {
                    height = height - angular.element(document).find('header')[0].offsetHeight;
                }
                //subtrackt the footer height
                if (includeFooter === true) {
                    height = height - angular.element(document).find('footer')[0].offsetHeight;
                }

                element.css({
                    height: height + 'px'
                });
                //inform parents and children (custom-scrollbars, full-height iframes etc) that height has changed
                scope.$emit('content.changed', { height: height });
                scope.$broadcast('content.changed', { height: height });
            };
        }
    };
});
'use strict';

/**
 * @ngdoc filter
 * @name BBAdminDashboard.filters.filter:minutesToString
 * @description
 * Converts a number to the desired format (default is hour minute(HH:mm))
 */
angular.module('BBAdminDashboard').filter('minutesToString', function () {
    return function (minutes, format) {
        if (format == null) {
            format = 'HH:mm';
        }
        return moment(moment.duration(minutes, 'minutes')._data).format(format);
    };
});
'use strict';

/**
 * @ngdoc service
 * @name BBAdminDashboard.AdminCoreOptions
 *
 * @description
 * Returns a set of General configuration options
 */

/**
 * @ngdoc service
 * @name BBAdminDashboard.AdminCoreOptionsProvider
 *
 * @description
 *
 * @example
 <pre>

 config = (AdminCoreOptionsProvider) ->
 'ngInject'

 AdminCoreOptionsProvider.setOption('option', 'value')

 return

 angular.module('ExampleModule').config config
 </pre>
 */

angular.module('BBAdminDashboard').provider('AdminCoreOptions', function () {
    'ngInject';

    var options = {
        default_state: 'calendar',
        deactivate_sidenav: false,
        deactivate_boxed_layout: false,
        sidenav_start_open: true,
        boxed_layout_start: false,
        side_navigation: [{
            group_name: 'SIDE_NAV_BOOKINGS',
            items: ['calendar', 'clients', 'check-in', 'dashboard-iframe', 'members-iframe']
        }, {
            group_name: 'SIDE_NAV_CONFIG',
            items: ['config-iframe', 'publish-iframe', 'settings-iframe']
        }]
    };

    this.setOption = function (option, value) {
        if (options.hasOwnProperty(option)) {
            options[option] = value;
        }
    };

    this.getOption = function (option) {
        if (options.hasOwnProperty(option)) {
            return options[option];
        }
    };

    this.$get = function () {
        return options;
    };
});
'use strict';

/**
 * @ngdoc service
 * @name BBAdminDashboard.AdminSsoLogin
 *
 * @description
 * Responsible for loging in the admin user via the sso token
 *
 */
angular.module('BBAdminDashboard').factory('AdminSsoLogin', function (halClient, $q) {
    return {
        ssoToken: null,
        companyId: null,
        apiUrl: null,
        ssoLoginPromise: function ssoLoginPromise(ssoToken, companyId, apiUrl) {
            if (ssoToken == null) {
                ssoToken = this.ssoToken;
            }
            if (companyId == null) {
                companyId = this.companyId;
            }
            if (apiUrl == null) {
                apiUrl = this.apiUrl;
            }
            var defer = $q.defer();

            // if something is missing reject the promise
            if (ssoToken == null || companyId == null || apiUrl == null) {
                defer.reject();
                return defer.promise;
            }

            var data = {
                token: ssoToken
            };
            halClient.$post(apiUrl + '/api/v1/login/admin_sso/' + companyId, {}, data).then(function (login) {
                var params = { auth_token: login.auth_token };
                return login.$get('administrator', params).then(function (admin) {
                    return defer.resolve(admin);
                }, function (err) {
                    return defer.reject(err);
                });
            }, function (err) {
                return defer.reject(err);
            });
            return defer.promise;
        }
    };
});
'use strict';

/**
 * @ngdoc service
 * @name BBAdminDashboard.AdminSsoLoginUrl
 *
 * @description
 * Returns the complete url for admin sso login
 */
angular.module('BBAdminDashboard').factory('AdminSsoLoginUrl', ['$rootScope', 'company_id', '$exceptionHandler', function ($rootScope, company_id, $exceptionHandler) {
    // Make sure we dont override the company id if its already set
    if ($rootScope.bb.companyId == null) {
        $rootScope.bb.companyId |= company_id;
    }

    if (!$rootScope.bb.companyId) {
        $exceptionHandler(new Error('Angular value "company_id" is undefined! '), '', true);
    }

    return $rootScope.bb.api_url + '/api/v1/login/admin_sso/' + $rootScope.bb.companyId;
}]);
'use strict';

/**
 * @ngdoc service
 * @name BBAdminDashboard.BusyService
 *
 * @description
 */
angular.module('BBAdminDashboard').factory("BusyService", function ($q, $log, $rootScope, AlertService, ErrorService) {

    return {
        notLoaded: function notLoaded(cscope) {
            cscope.$emit('show:loader', cscope);
            cscope.isLoaded = false;
            // then look through all the scopes for the 'loading' scope, which is the
            // scope which has a 'scopeLoaded' property and set it to false, which makes
            // the ladoing gif show;
            while (cscope) {
                if (cscope.hasOwnProperty('scopeLoaded')) {
                    cscope.scopeLoaded = false;
                }
                cscope = cscope.$parent;
            }
        },
        setLoaded: function setLoaded(cscope) {
            cscope.$emit('hide:loader', cscope);
            // set the scope loaded to true...
            cscope.isLoaded = true;
            // then walk up the scope chain looking for the 'loading' scope...
            var loadingFinished = true;

            while (cscope) {
                if (cscope.hasOwnProperty('scopeLoaded')) {
                    // then check all the scope objects looking to see if any scopes are
                    // still loading
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
        setPageLoaded: function setPageLoaded(scope) {
            return null;
        },
        setLoadedAndShowError: function setLoadedAndShowError(scope, err, error_string) {
            $log.warn(err, error_string);
            this.setLoaded(scope);
            if (err.status === 409) {
                if (err.data.error === 'Rule checking failed') {
                    return AlertService.danger(ErrorService.createCustomError(err.data.message));
                } else {
                    return AlertService.danger(ErrorService.getError('ITEM_NO_LONGER_AVAILABLE'));
                }
            } else if (err.data && err.data.error === "Number of Bookings exceeds the maximum") {
                return AlertService.danger(ErrorService.getError('MAXIMUM_TICKETS'));
            } else {
                return AlertService.danger(ErrorService.getError('GENERIC'));
            }
        },


        // go around schild scopes - return false if *any* child scope is marked as
        // isLoaded = false
        areScopesLoaded: function areScopesLoaded(cscope) {
            if (cscope.hasOwnProperty('isLoaded') && !cscope.isLoaded) {
                return false;
            } else {
                var child = cscope.$$childHead;
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
'use strict';

/**
 * @ngdoc service
 * @name BBAdminDashboard.PageLayout
 *
 * @description
 * This service exposes layout functionality variables
 *
 */
angular.module('BBAdminDashboard').factory('PageLayout', ['AdminCoreOptions', function (AdminCoreOptions) {
    return {
        hideSideMenuControl: this.hideSideMenuControl ? this.hideSideMenuControl : AdminCoreOptions.deactivate_sidenav,
        hideBoxedLayoutControl: this.hideBoxedLayoutControl ? this.hideBoxedLayoutControl : AdminCoreOptions.deactivate_boxed_layout,
        sideMenuOn: this.sideMenuOn ? this.sideMenuOn : AdminCoreOptions.sidenav_start_open && !AdminCoreOptions.deactivate_sidenav,
        boxed: this.boxed ? this.boxed : AdminCoreOptions.boxed_layout_start
    };
}]);
'use strict';

/**
 * @ngdoc service
 * @name BBAdminDashboard.RuntimeRoutes
 *
 * @description
 * Returns an instance of $routeProvider that allows late route binding (on runtime)
 */

/**
 * @ngdoc service
 * @name BBAdminDashboard.RuntimeRoutesProvider
 *
 * @description
 * Provider
 *
 * @example
 <pre>
 angular.module('ExampleModule').config ['RuntimeRoutesProvider', '$routeProvider', (RuntimeRoutesProvider, $routeProvider) ->
 RuntimeRoutesProvider.setProvider($routeProvider)
 ]
 </pre>
 */
angular.module('BBAdminDashboard').provider('RuntimeRoutes', ['$urlRouterProvider', function ($urlRouterProvider) {
  var routeProvider = $urlRouterProvider;
  this.setProvider = function (provider) {
    return routeProvider = provider;
  };
  this.$get = function () {
    return routeProvider;
  };
}]);
'use strict';

/**
 * @ngdoc service
 * @name BBAdminDashboard.RuntimeStates
 *
 * @description
 * Returns an instance of $stateProvider that allows late state binding (on runtime)
 */

/**
 * @ngdoc service
 * @name BBAdminDashboard.RuntimeStatesProvider
 *
 * @description
 * Provider
 *
 * @example
 <pre>
 angular.module('ExampleModule').config ['RuntimeStatesProvider', '$stateProvider', (RuntimeStatesProvider, $stateProvider) ->
 RuntimeStatesProvider.setProvider($stateProvider)
 ]
 </pre>
 */
angular.module('BBAdminDashboard').provider('RuntimeStates', ['$stateProvider', function ($stateProvider) {
  var stateProvider = $stateProvider;
  this.setProvider = function (provider) {
    return stateProvider = provider;
  };
  this.$get = function () {
    return stateProvider;
  };
}]);
'use strict';

/**
 * @ngdoc service
 * @name BBAdminDashboard.SideNavigationPartials
 *
 * @description
 * This service assembles the navigation partials for the side-navigation
 *
 */
angular.module('BBAdminDashboard').factory('SideNavigationPartials', ['AdminCoreOptions', function (AdminCoreOptions) {
    var templatesArray = [];

    return {
        addPartialTemplate: function addPartialTemplate(identifier, partial) {
            if (!_.find(templatesArray, function (item) {
                return item.module === identifier;
            })) {
                templatesArray.push({
                    module: identifier,
                    navPartial: partial
                });
            }
        },
        getPartialTemplates: function getPartialTemplates() {
            return templatesArray;
        },
        getOrderedPartialTemplates: function getOrderedPartialTemplates(flat) {
            if (flat == null) {
                flat = false;
            }
            var orderedList = [];
            var flatOrderedList = [];

            angular.forEach(AdminCoreOptions.side_navigation, function (group, index) {
                if (angular.isArray(group.items) && group.items.length) {
                    var newGroup = {
                        group_name: group.group_name,
                        items: []
                    };

                    angular.forEach(group.items, function (item, index) {
                        var existing = _.find(templatesArray, function (template) {
                            return template.module === item;
                        });

                        if (existing) {
                            flatOrderedList.push(existing);
                            return newGroup.items.push(existing);
                        }
                    });

                    return orderedList.push(newGroup);
                }
            });

            var orphanItems = [];

            angular.forEach(templatesArray, function (partial, index) {
                var existing = _.find(flatOrderedList, function (item) {
                    return item.module === partial.module;
                });

                if (!existing) {
                    flatOrderedList.push(partial);
                    return orphanItems.push(partial);
                }
            });

            if (orphanItems.length) {
                orderedList.push({
                    group_name: '&nbsp;',
                    items: orphanItems
                });
            }

            if (flat) {
                return flatOrderedList;
            } else {
                return orderedList;
            }
        }
    };
}]);
'use strict';

/**
 * @ngdoc service
 * @name BBAdminDashboard.TemplateService
 *
 * @description
 * Checks if a custom version of the requested template exists in the templateCache,
 * otherwise returns the default version (which should be compiled with the module)
 */
angular.module('BBAdminDashboard').factory('TemplateService', function ($templateCache, $exceptionHandler) {
    return {
        get: function get(template) {
            if ($templateCache.get(template) != null) {
                return $templateCache.get(template);
            } else if ($templateCache.get('/default' + template) != null) {
                return $templateCache.get('/default' + template);
            } else {
                return $exceptionHandler(new Error('Template "' + template + '" not found'), '', true);
            }
        }
    };
});
'use strict';

/**
 * @ngdoc overview
 * @name BBAdminDashboard.translations
 * @description
 * Translations for the admin core module
 */

angular.module('BBAdminDashboard').config(function ($translateProvider) {
    'ngInject';

    var translations = {
        SIDE_NAV_BOOKINGS: "BOOKINGS",
        SIDE_NAV_CONFIG: "CONFIGURATION",
        ADMIN_DASHBOARD: {
            CORE: {
                GREETING: 'Hi',
                LOGOUT: 'Logout',
                VERSION: 'Version',
                COPYRIGHT: 'Copyright',
                SWITCH_TO_CLASSIC: 'Switch to Classic'
            }
        }
    };

    $translateProvider.translations('en', translations);
});
'use strict';

/*
 * @ngdoc controller
 * @name BBAdminDashboard.dashboard-iframe.controllers.controller:DashboardIframePageCtrl
 *
 * @description
 * Controller for the dashboard page
 */
angular.module('BBAdminDashboard.dashboard-iframe.controllers').controller('DashboardIframePageCtrl', ['$scope', '$state', '$window', 'AdminBookingPopup', function ($scope, $state, $window, AdminBookingPopup) {
    $scope.parent_state = $state.is("view");
    $scope.bb.side_menu = "dashboard_menu";
    $scope.path = "view/dashboard/index";
    return $window.addEventListener('message', function (event) {
        if (event && event.data) {
            if (event.data.type && event.data.type === "booking") {
                return AdminBookingPopup.open({
                    size: 'lg',
                    company_id: $scope.bb.company.id,
                    on_conflict: "cancel()",
                    item_defaults: {
                        date: event.data.date,
                        time: event.data.iarray * 5,
                        person: event.data.person,
                        resource: event.data.resource
                    }
                });
            }
        }
    });
}]);
'use strict';

/*
 * @ngdoc controller
 * @name BBAdminDashboard.dashboard-iframe.controllers.controller:DashboardSubIframePageCtrl
 *
 * @description
 * Controller for the dashboard sub page
 */
angular.module('BBAdminDashboard.dashboard-iframe.controllers').controller('DashboardSubIframePageCtrl', ['$scope', '$state', '$stateParams', function ($scope, $state, $stateParams) {
    $scope.path = $stateParams.path;

    if ($scope.path === 'view/dashboard/index') {
        return $scope.fullHeight = true;
    }
}]);
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
angular.module('BBAdminDashboard.dashboard-iframe.services').provider('AdminDashboardIframeOptions', [function () {
    // This list of options is meant to grow
    var options = {
        use_default_states: true,
        show_in_navigation: true,
        parent_state: 'root'
    };

    this.setOption = function (option, value) {
        if (options.hasOwnProperty(option)) {
            options[option] = value;
        }
    };

    this.getOption = function (option) {
        if (options.hasOwnProperty(option)) {
            return options[option];
        }
    };
    this.$get = function () {
        return options;
    };
}]);
'use strict';

/*
 * @ngdoc overview
 * @name BBAdminDashboard.dashboard-iframe.translations
 *
 * @description
 * Translations for the admin dashboard-iframe module
 */
angular.module('BBAdminDashboard.dashboard-iframe.translations').config(['$translateProvider', function ($translateProvider) {
    return $translateProvider.translations('en', {
        'ADMIN_DASHBOARD': {
            'SIDE_NAV': {
                'DASHBOARD_IFRAME_PAGE': {
                    'DASHBOARD': 'Dashboard',
                    'UPCOMING_RECENT': 'Upcoming &amp; Recent',
                    'SEARCH': 'Search',
                    'BULK_BOOKINGS': 'Bulk bookings',
                    'INSIGHTS': 'Insights'
                }
            }
        }
    });
}]);
'use strict';

/*
 * @ngdoc controller
 * @name BBAdminDashboard.login.controllers.controller:LoginPageCtrl
 *
 * @description
 * Controller for the login page
 */
angular.module('BBAdminDashboard.login.controllers').controller('LoginPageCtrl', ['$scope', '$state', 'AdminLoginService', 'AdminCoreOptions', 'user', function ($scope, $state, AdminLoginService, AdminCoreOptions, user) {
    $scope.user = user;

    return $scope.loginSuccess = function (company) {
        $scope.company = company;
        $scope.bb.company = company;
        return $state.go(AdminCoreOptions.default_state);
    };
}]);
'use strict';

/*
 * @ngdoc directive
 * @name BBAdminDashboard.login.directives.directive:adminDashboardLogin
 * @scope
 * @restrict A
 *
 * @description
 * Admin login journey directive
 *
 * @param {object}  field   A field object
 */
angular.module('BBAdminDashboard.login.directives').directive('adminDashboardLogin', function () {
    return {
        restrict: 'AE',
        replace: true,
        scope: {
            onSuccess: '=',
            onCancel: '=',
            onError: '=',
            bb: '=',
            user: '=?'
        },
        templateUrl: 'login/admin-dashboard-login.html',
        controller: function controller($scope, $rootScope, BBModel, $q, $localStorage, $state, AdminLoginOptions) {
            'ngInject';

            $scope.template_vars = {
                show_api_field: AdminLoginOptions.show_api_field,
                show_login: true,
                show_pick_company: false,
                show_pick_department: false,
                show_loading: false
            };

            $scope.login_data = {
                email: null,
                password: null,
                selected_admin: null,
                selected_company: null,
                site: $localStorage.getItem("api_url")
            };

            $scope.formErrors = [];

            var formErrorExists = function formErrorExists(message) {
                // iterate through the formErrors array
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = Array.from($scope.formErrors)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var obj = _step.value;

                        // check if the message passed in matches any pre-existing ones.
                        if (obj.message.match(message)) {
                            return true;
                        }
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }

                return false;
            };

            var companySelection = function companySelection(user) {
                // if user is admin
                if (user.$has('administrators')) {
                    return user.$getAdministrators().then(function (administrators) {
                        $scope.administrators = administrators;

                        // if user is admin in more than one company show select company
                        if (administrators.length > 1) {
                            $scope.template_vars.show_loading = false;
                            $scope.template_vars.show_login = false;
                            return $scope.template_vars.show_pick_company = true;
                        } else if (administrators.length === 1) {
                            // else automatically select the first admin
                            var params = {
                                email: $scope.login_data.email,
                                password: $scope.login_data.password
                            };

                            $scope.login_data.selected_admin = _.first(administrators);
                            return $scope.login_data.selected_admin.$post('login', {}, params).then(function (login) {
                                return $scope.login_data.selected_admin.$getCompany().then(function (company) {
                                    $scope.template_vars.show_loading = false;
                                    // if there are departments show department selector
                                    if (company.companies && company.companies.length > 0) {
                                        $scope.template_vars.show_pick_department = true;
                                        return $scope.departments = company.companies;
                                    } else {
                                        // else select that company directly and move on
                                        $scope.login_data.selected_company = company;
                                        BBModel.Admin.Login.$setLogin($scope.login_data.selected_admin);
                                        return BBModel.Admin.Login.$setCompany($scope.login_data.selected_company.id).then(function (user) {
                                            return $scope.onSuccess($scope.login_data.selected_company);
                                        });
                                    }
                                });
                            });
                        } else {
                            $scope.template_vars.show_loading = false;
                            var message = "ADMIN_DASHBOARD.LOGIN_PAGE.ERROR_INCORRECT_CREDS";
                            if (!formErrorExists(message)) {
                                return $scope.formErrors.push({ message: message });
                            }
                        }
                    });

                    // else if there is an associated company
                } else if (user.$has('company')) {
                    $scope.login_data.selected_admin = user;

                    return user.$getCompany().then(function (company) {
                        // if departments are available show departments selector
                        if (company.companies && company.companies.length > 0) {
                            $scope.template_vars.show_loading = false;
                            $scope.template_vars.show_pick_department = true;
                            $scope.template_vars.show_login = false;
                            return $scope.departments = company.companies;
                        } else {
                            // else select that company directly and move on
                            $scope.login_data.selected_company = company;
                            BBModel.Admin.Login.$setLogin($scope.login_data.selected_admin);
                            return BBModel.Admin.Login.$setCompany($scope.login_data.selected_company.id).then(function (user) {
                                return $scope.onSuccess($scope.login_data.selected_company);
                            });
                        }
                    }, function (err) {
                        $scope.template_vars.show_loading = false;
                        var message = "ADMIN_DASHBOARD.LOGIN_PAGE.ERROR_ISSUE_WITH_COMPANY";
                        if (!formErrorExists(message)) {
                            return $scope.formErrors.push({ message: message });
                        }
                    });
                } else {
                    $scope.template_vars.show_loading = false;
                    var message = "ADMIN_DASHBOARD.LOGIN_PAGE.ERROR_ACCOUNT_ISSUES";
                    if (!formErrorExists(message)) {
                        return $scope.formErrors.push({ message: message });
                    }
                }
            };

            // If a User is available at this stages SSO login is implied
            if ($scope.user) {
                $scope.template_vars.show_pick_department = true;
                $scope.template_vars.show_login = false;
                companySelection($scope.user);
            }

            $scope.login = function (isValid) {
                if (isValid) {
                    $scope.template_vars.show_loading = true;

                    //if the site field is used set the api url to the submmited url
                    if (AdminLoginOptions.show_api_field) {
                        // strip trailing spaces from the url to avoid calling an invalid endpoint
                        // since all service calls to api end-points begin with '/', e.g '/api/v1/...'
                        $scope.login_data.site = $scope.login_data.site.replace(/\/+$/, '');
                        if ($scope.login_data.site.indexOf("http") === -1) {
                            $scope.login_data.site = 'https://' + $scope.login_data.site;
                        }
                        $scope.bb.api_url = $scope.login_data.site;
                        $rootScope.bb.api_url = $scope.login_data.site;
                        $localStorage.setItem("api_url", $scope.login_data.site);
                    }

                    var params = {
                        email: $scope.login_data.email,
                        password: $scope.login_data.password
                    };
                    return BBModel.Admin.Login.$login(params).then(function (user) {
                        return companySelection(user);
                    }, function (err) {
                        $scope.template_vars.show_loading = false;
                        var message = "ADMIN_DASHBOARD.LOGIN_PAGE.ERROR_INCORRECT_CREDS";
                        if (!formErrorExists(message)) {
                            return $scope.formErrors.push({ message: message });
                        }
                    });
                }
            };

            $scope.goToResetPassword = function () {
                return $state.go('reset-password');
            };

            $scope.pickCompany = function () {
                $scope.template_vars.show_loading = true;
                $scope.template_vars.show_pick_department = false;

                var params = {
                    email: $scope.login_data.email,
                    password: $scope.login_data.password
                };

                return $scope.login_data.selected_admin.$post('login', {}, params).then(function (login) {
                    return $scope.login_data.selected_admin.$getCompany().then(function (company) {
                        $scope.template_vars.show_loading = false;

                        if (company.companies && company.companies.length > 0) {
                            $scope.template_vars.show_pick_department = true;
                            return $scope.departments = company.companies;
                        } else {
                            return $scope.login_data.selected_company = company;
                        }
                    });
                });
            };

            return $scope.selectCompanyDepartment = function (isValid) {
                $scope.template_vars.show_loading = true;
                if (isValid) {
                    $scope.bb.company = $scope.login_data.selected_company;
                    BBModel.Admin.Login.$setLogin($scope.login_data.selected_admin);
                    return BBModel.Admin.Login.$setCompany($scope.login_data.selected_company.id).then(function (user) {
                        return $scope.onSuccess($scope.login_data.selected_company);
                    });
                }
            };
        }
    };
});
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
angular.module('BBAdminDashboard.login.services').provider('AdminLoginOptions', [function () {
    // This list of options is meant to grow
    var options = {
        show_api_field: false,
        use_default_states: true,
        show_in_navigation: true,
        parent_state: 'root',
        sso_token: null,
        company_id: null

    };

    this.setOption = function (option, value) {
        if (options.hasOwnProperty(option)) {
            options[option] = value;
        }
    };

    this.getOption = function (option) {
        if (options.hasOwnProperty(option)) {
            return options[option];
        }
    };
    this.$get = function () {
        return options;
    };
}]);
'use strict';

/*
 * @ngdoc service
 * @name BBAdminDashboard.login.services.service:SideNavigationPartials
 *
 * @description
 * This service contains the logged in user's information
 *
 */
angular.module('BBAdminDashboard.login.services').factory('LoggedAdmin', ['AdminLoginOptions', '$q', function (AdminLoginOptions, $q) {
    var loggedAdmin = {
        user: null,
        adminAccountsArray: null,
        departmentsArray: null,
        currentCompany: null
    };

    return {
        setUser: function setUser(user) {
            loggedAdmin.user = user;
        },
        getUser: function getUser() {
            return loggedAdmin.user;
        },
        setCurrentCompany: function setCurrentCompany(company) {
            loggedAdmin.currentCompany = company;
            // if current company changes departments have to be refetched
            loggedAdmin.departmentsArray = null;
        },
        getCurrentCompany: function getCurrentCompany() {
            var deferred = $q.defer();

            if (loggedAdmin.currentCompany != null) {
                deferred.resolve(loggedAdmin.currentCompany);
                return deferred.promise;
            }

            if (loggedAdmin.user == null) {
                deferred.reject(new Error('LOGGED_ADMIN.ERROR_NO_USER_PROVIDED'));
                return deferred.promise;
            }

            if (loggedAdmin.user.$has('company')) {
                loggedAdmin.user.getCompanyPromise().then(function (company) {
                    loggedAdmin.currentCompany = company;
                    return deferred.resolve(loggedAdmin.currentCompany);
                }, function (err) {
                    return deferred.reject(new Error('LOGGED_ADMIN.ERROR_ISSUE_WITH_COMPANY'));
                });
            }

            return deferred.promise;
        },
        getAdminAccounts: function getAdminAccounts() {
            var deferred = $q.defer();

            if (loggedAdmin.adminAccountsArray != null) {
                deferred.resolve(loggedAdmin.adminAccountsArray);
                return deferred.promise;
            }

            if (loggedAdmin.user == null) {
                deferred.reject(new Error('LOGGED_ADMIN.ERROR_NO_USER_PROVIDED'));
                return deferred.promise;
            }

            if (loggedAdmin.user.$has('administrators')) {
                loggedAdmin.user.getAdministratorsPromise().then(function (adminAccounts) {
                    loggedAdmin.adminAccountsArray = administrators;
                    return deferred.resolve(loggedAdmin.adminAccountsArray);
                }, function (err) {
                    return deferred.reject(new Error('LOGGED_ADMIN.ERROR_COULD_NOT_GET_ADMINS'));
                });
            } else {
                loggedAdmin.adminAccountsArray = [];
                deferred.resolve(loggedAdmin.adminAccountsArray);
            }

            return deferred.promise;
        },
        getDepartments: function getDepartments() {
            var deferred = $q.defer();

            if (loggedAdmin.departmentsArray != null) {
                deferred.resolve(loggedAdmin.departmentsArray);
                return deferred.promise;
            }

            if (loggedAdmin.user == null) {
                deferred.reject(new Error('LOGGED_ADMIN.ERROR_NO_USER_PROVIDED'));
                return deferred.promise;
            }

            this.getCurrentCompany().then(function (company) {
                if (company.companies && company.companies.length > 0) {
                    loggedAdmin.departmentsArray = company.companies;
                    return deferred.resolve(loggedAdmin.departmentsArray);
                } else {
                    loggedAdmin.departmentsArray = [];
                    return deferred.resolve(loggedAdmin.departmentsArray);
                }
            }, function (err) {
                return deferred.reject(err);
            });

            return deferred.promise;
        }
    };
}]);
'use strict';

/*
 * @ngdoc overview
 * @name BBAdminDashboard.login.translations
 *
 * @description
 * Translations for the admin login module
 */
angular.module('BBAdminDashboard.login.translations').config(['$translateProvider', function ($translateProvider) {
    return $translateProvider.translations('en', {
        'ADMIN_DASHBOARD': {
            'LOGIN_PAGE': {
                'COMPANIES': 'Companies',
                'DEPARTMENTS': 'Departments',
                'FORGOT_PASSWORD': 'Forgot your password?',
                'HEADING': 'Login to view your account',
                'LOGIN': ' Login',
                'PASSWORD': 'Password',
                'SITE': 'Site',
                'SEARCH_COMPANY_PLACEHOLDER': 'Select or search a company in the list...',
                'SEARCH_DEPARTMENT_PLACEHOLDER': 'Select or search a department in the list...',
                'SELECT': 'Select',
                'SELECT_COMPANY': 'Select company',
                'USERNAME': 'Username',
                'ERROR_ISSUE_WITH_COMPANY': 'Sorry, there seems to be a problem with the company associated with this account',
                'ERROR_INCORRECT_CREDS': 'Sorry, either your email or password was incorrect',
                'ERROR_ACCOUNT_ISSUES': 'Sorry, there seems to be a problem with this account',
                'ERROR_REQUIRED': 'This field is required.'
            }
        }
    });
}]);
'use strict';

/*
 * @ngdoc controller
 * @name BBAdminDashboard.logout.controllers.controller:LogoutPageCtrl
 *
 * @description
 * Controller for the logout page
 */
angular.module('BBAdminDashboard.logout.controllers').controller('LogoutPageCtrl', function (AdminSsoLogin, BBModel, $scope, $state, $sessionStorage) {
    BBModel.Admin.Login.$logout().then(function () {
        $sessionStorage.removeItem("user");
        $sessionStorage.removeItem("auth_token");

        AdminSsoLogin.ssoToken = null;
        AdminSsoLogin.companyId = null;

        $state.go('login', {}, { reload: true });
    });
});
'use strict';

/*
 * @ngdoc controller
 * @name BBAdminDashboard.members-iframe.controllers.controller:MembersIframePageCtrl
 *
 * @description
 * Controller for the members page
 */
angular.module('BBAdminDashboard.members-iframe.controllers').controller('MembersIframePageCtrl', ['$scope', '$state', '$rootScope', '$window', function ($scope, $state, $rootScope, $window) {

    $scope.parent_state = $state.is("members");

    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
        $scope.parent_state = false;
        if (toState.name === "members") {
            $scope.parent_state = true;
            return $scope.clearCurrentClient();
        }
    });

    $scope.setCurrentClient = function (client) {
        if (client) {
            $rootScope.client_id = client;
            return $scope.extra_params = 'id=' + client;
        } else {
            return $scope.clearCurrentClient();
        }
    };

    $scope.clearCurrentClient = function () {
        $rootScope.client_id = null;
        return $scope.extra_params = "";
    };

    return $window.addEventListener('message', function (event) {
        if (event && event.data) {
            if (event.data.controller === "client") {
                if (event.data.id) {
                    $scope.setCurrentClient(event.data.id);
                }
                if (event.data.action === "single") {
                    return $state.go("members.page", { path: 'client/single', id: event.data.id });
                }
            }
        }
    });
}]);
'use strict';

/*
 * @ngdoc controller
 * @name BBAdminDashboard.members-iframe.controllers.controller:MembersSubIframePageCtrl
 *
 * @description
 * Controller for the members sub page
 */
angular.module('BBAdminDashboard.members-iframe.controllers').controller('MembersSubIframePageCtrl', ['$scope', '$state', '$stateParams', function ($scope, $state, $stateParams) {
    $scope.path = $stateParams.path;
    if ($stateParams.id) {
        $scope.extra_params = 'id=' + $stateParams.id;
    } else {
        $scope.extra_params = "";
    }

    $scope.loading = true;
    return $scope.$on('iframeLoaded', function () {
        $scope.loading = false;
        return $scope.$apply();
    });
}]);
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
angular.module('BBAdminDashboard.members-iframe.services').provider('AdminMembersIframeOptions', [function () {
    // This list of options is meant to grow
    var options = {
        use_default_states: true,
        show_in_navigation: true,
        parent_state: 'root'
    };

    this.setOption = function (option, value) {
        if (options.hasOwnProperty(option)) {
            options[option] = value;
        }
    };

    this.getOption = function (option) {
        if (options.hasOwnProperty(option)) {
            return options[option];
        }
    };
    this.$get = function () {
        return options;
    };
}]);
'use strict';

/*
 * @ngdoc overview
 * @name BBAdminDashboard.members-iframe.translations
 *
 * @description
 * Translations for the admin members module
 */
angular.module('BBAdminDashboard.members-iframe.translations').config(['$translateProvider', function ($translateProvider) {
    return $translateProvider.translations('en', {
        'ADMIN_DASHBOARD': {
            'SIDE_NAV': {
                'MEMBERS_IFRAME_PAGE': {
                    'MEMBERS': 'Members',
                    'ALL_CLIENTS': 'All clients',
                    'QUESTIONS': 'Questions',
                    'EXPORT_TO_MAILCHIMP': 'Export to Mailchimp'
                }
            }
        }
    });
}]);
'use strict';

/*
 * @ngdoc controller
 * @name BBAdminDashboard.publish-iframe.controllers.controller:PublishIframePageCtrl
 *
 * @description
 * Controller for the publish page
 */
angular.module('BBAdminDashboard.publish-iframe.controllers').controller('PublishIframePageCtrl', ['$scope', '$state', '$rootScope', function ($scope, $state, $rootScope) {

    $scope.parent_state = $state.is("publish");
    $scope.path = "conf";

    return $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
        $scope.parent_state = false;
        if (toState.name === "setting") {
            return $scope.parent_state = true;
        }
    });
}]);
'use strict';

/*
 * @ngdoc controller
 * @name BBAdminDashboard.publish-iframe.controllers.controller:PublishSubIframePageCtrl
 *
 * @description
 * Controller for the publish sub page
 */
angular.module('BBAdminDashboard.publish-iframe.controllers').controller('PublishSubIframePageCtrl', ['$scope', '$state', '$stateParams', function ($scope, $state, $stateParams) {
    $scope.path = $stateParams.path;

    $scope.loading = true;
    return $scope.$on('iframeLoaded', function () {
        $scope.loading = false;
        return $scope.$apply();
    });
}]);
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
angular.module('BBAdminDashboard.publish-iframe.services').provider('AdminPublishIframeOptions', [function () {
    // This list of options is meant to grow
    var options = {
        use_default_states: true,
        show_in_navigation: true,
        parent_state: 'root'
    };

    this.setOption = function (option, value) {
        if (options.hasOwnProperty(option)) {
            options[option] = value;
        }
    };

    this.getOption = function (option) {
        if (options.hasOwnProperty(option)) {
            return options[option];
        }
    };
    this.$get = function () {
        return options;
    };
}]);
'use strict';

/*
 * @ngdoc overview
 * @name BBAdminDashboard.publish-iframe.translations
 *
 * @description
 * Translations for the admin publish-iframe module
 */
angular.module('BBAdminDashboard.publish-iframe.translations').config(['$translateProvider', function ($translateProvider) {
    return $translateProvider.translations('en', {
        'ADMIN_DASHBOARD': {
            'SIDE_NAV': {
                'PUBLISH_IRAME_PAGE': {
                    'PUBLISH': 'Publish',
                    'PUBLISH_BUSINESS': 'Publish business',
                    'PUBLIC_SITE': 'Public site',
                    'CUSTOMISE_WIDGETS': 'Customise widgets',
                    'SINGLE_WIDGET': 'Single widget',
                    'BOOK_NOW_BUTTONS': '\'Book Now\' buttons',
                    'OTHER_TOOLS': 'Other tools'
                }
            }
        }
    });
}]);
'use strict';

/*
 * @ngdoc controller
 * @name BBAdminDashboard.reset-password.controller:ResetPasswordCtrl
 *
 * @description
 * Controller for the reset password functionality
 */

var ResetPasswordCtrl = function ResetPasswordCtrl($scope, $state, AdminLoginOptions, AdminLoginService, QueryStringService, ResetPasswordService, ResetPasswordSchemaFormService) {
    'ngInject';

    var $resetPasswordCtrl = this;

    var init = function init() {

        if ($scope.baseUrl == null) {
            $scope.baseUrl = $resetPasswordCtrl.resetPasswordSite;
        }

        $resetPasswordCtrl.showApiField = AdminLoginOptions.show_api_field;
        $resetPasswordCtrl.resetPasswordSuccess = false;
        $resetPasswordCtrl.showLoading = false;

        if ($resetPasswordCtrl.showApiField) {
            $resetPasswordCtrl.resetPasswordSite = angular.copy($scope.bb.api_url);
        }

        $resetPasswordCtrl.formErrors = [];

        // decide which template to show
        if (QueryStringService('reset_password_token') != null && QueryStringService('reset_password_token') !== 'undefined' && QueryStringService('reset_password_token') !== '') {
            $resetPasswordCtrl.resetPasswordTemplate = 'reset-password/reset-password-by-token.html';
            fetchSchemaForm();
        } else {
            $resetPasswordCtrl.resetPasswordTemplate = 'reset-password/reset-password.html';
        }
    };

    // formErrors helper method
    var formErrorExists = function formErrorExists(message) {
        // iterate through the formErrors array
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = Array.from($resetPasswordCtrl.formErrors)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var obj = _step.value;

                // check if the message passed in matches any pre-existing ones.
                if (obj.message.match(message)) {
                    return true;
                }
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }

        return false;
    };

    // fetch Schema Form helper method
    var fetchSchemaForm = function fetchSchemaForm() {
        ResetPasswordSchemaFormService.getSchemaForm($scope.baseUrl).then(function (response) {

            $resetPasswordCtrl.resetPasswordSchema = angular.copy(response.data.schema);

            ResetPasswordSchemaFormService.setPasswordPattern($resetPasswordCtrl.resetPasswordSchema.properties.password.pattern);
            return $resetPasswordCtrl.reset_password_pattern = ResetPasswordSchemaFormService.getPasswordPattern();
        }, function (err) {
            ResetPasswordSchemaFormService.setPasswordPattern('^(?=[^\\s]*[^a-zA-Z])(?=[^\\s]*[a-zA-Z])[^\\s]{7,25}$');
            return $resetPasswordCtrl.reset_password_pattern = ResetPasswordSchemaFormService.getPasswordPattern();
        });
    };

    $resetPasswordCtrl.goBackToLogin = function () {
        $state.go('login');
    };

    $resetPasswordCtrl.sendResetPassword = function (email, resetPasswordSite) {
        $resetPasswordCtrl.showLoading = true;

        //if the site field is used, set the api url to the submmited url
        if ($resetPasswordCtrl.showApiField && resetPasswordSite !== '') {
            // strip trailing spaces from the url to avoid calling an invalid endpoint
            // since all service calls to api end-points begin with '/', e.g '/api/v1/...'
            $resetPasswordCtrl.resetPasswordSite = resetPasswordSite.replace(/\/+$/, '');
            if ($resetPasswordCtrl.resetPasswordSite.indexOf("http") === -1) {
                $resetPasswordCtrl.resetPasswordSite = 'https://' + $resetPasswordCtrl.resetPasswordSite;
            }
            $scope.baseUrl = $resetPasswordCtrl.resetPasswordSite;
        }

        ResetPasswordService.postRequest(email, $scope.baseUrl).then(function (response) {
            $resetPasswordCtrl.resetPasswordSuccess = true;
            return $resetPasswordCtrl.showLoading = false;
        }, function (err) {
            $resetPasswordCtrl.resetPasswordSuccess = false;
            $resetPasswordCtrl.showLoading = false;
            var message = "ADMIN_DASHBOARD.RESET_PASSWORD_PAGE.FORM_SUBMIT_FAIL_MSG";
            if (!formErrorExists(message)) {
                return $resetPasswordCtrl.formErrors.push({ message: message });
            }
        });
    };

    $resetPasswordCtrl.submitSchemaForm = function (password) {
        $resetPasswordCtrl.showLoading = true;

        ResetPasswordSchemaFormService.postSchemaForm(password, $scope.baseUrl).then(function (response) {
            $resetPasswordCtrl.resetPasswordSuccess = true;

            // password reset successful, so auto-login
            var loginForm = { "email": response.data.email, "password": password };

            return AdminLoginService.login(loginForm).then(function (response) {
                return $state.go('login');
            }, function (err) {
                $resetPasswordCtrl.showLoading = false;
                return $resetPasswordCtrl.formErrors.push({ message: "ADMIN_DASHBOARD.LOGIN_PAGE.ERROR_ISSUE_WITH_COMPANY" });
            });
        }, function (err) {
            $resetPasswordCtrl.resetPasswordSuccess = false;
            $resetPasswordCtrl.showLoading = false;
            var message = "ADMIN_DASHBOARD.RESET_PASSWORD_PAGE.FORM_SUBMIT_FAIL_MSG";
            if (!formErrorExists(message)) {
                return $resetPasswordCtrl.formErrors.push({ message: message });
            }
        });
    };

    init();
};

angular.module('BBAdminDashboard.reset-password').controller('ResetPasswordCtrl', ResetPasswordCtrl);
'use strict';

/*
 * @ngdoc controller
 * @name BBAdminDashboard.reset-password.controller:ResetPasswordPageCtrl
 *
 * @description
 * Controller for the reset password page
 */

var ResetPasswordPageCtrl = function ResetPasswordPageCtrl($scope) {
    'ngInject';

    var init = function init() {

        if ($scope.bb.api_url != null && $scope.bb.api_url !== '') {
            $scope.baseUrl = angular.copy($scope.bb.api_url);
        }
    };

    init();
};

angular.module('BBAdminDashboard.reset-password').controller('ResetPasswordPageCtrl', ResetPasswordPageCtrl);
'use strict';

/*
 * @ngdoc directive
 * @name BBAdminDashboard.reset-password.directive:adminDashboardResetPassword
 * @scope
 * @restrict A
 *
 * @description
 * Admin Dashboard ResetPassword journey directive
 */

var adminDashboardResetPassword = function adminDashboardResetPassword() {

    var directive = {
        restrict: 'AE',
        replace: true,
        scope: true,
        template: '<div ng-include="$resetPasswordCtrl.resetPasswordTemplate"></div>',
        controller: 'ResetPasswordCtrl',
        controllerAs: '$resetPasswordCtrl'
    };

    return directive;
};

angular.module('BBAdminDashboard.reset-password').directive('adminDashboardResetPassword', adminDashboardResetPassword);
'use strict';

/*
 * @ngdoc service
 * @name BBAdminDashboard.reset-password.service:ResetPasswordSchemaFormService
 *
 * @description
 * This service enables the user to fetch/submit a schema form from/to the server and also post the new password.
 */

var ResetPasswordSchemaFormService = function ResetPasswordSchemaFormService($q, $http, QueryStringService) {
    'ngInject';

    var passwordPattern = '';

    var setPasswordPattern = function setPasswordPattern(pattern) {
        var password_pattern = void 0;
        return password_pattern = pattern;
    };

    var getPasswordPattern = function getPasswordPattern() {
        return passwordPattern;
    };

    var getSchemaForm = function getSchemaForm(baseUrl) {
        var deferred = $q.defer();
        var src = baseUrl + "/api/v1/login/admin/reset_password_schema";

        $http.get(src, {}).then(function (response) {
            return deferred.resolve(response);
        }, function (err) {
            return deferred.reject(err);
        });
        return deferred.promise;
    };

    var postSchemaForm = function postSchemaForm(password, baseUrl) {
        var deferred = $q.defer();
        var src = baseUrl + "/api/v1/login/admin/reset_password";

        var resetPasswordToken = QueryStringService('reset_password_token');

        var body = { "password": password, "reset_password_token": resetPasswordToken };

        $http.put(src, body).then(function (response) {
            return deferred.resolve(response);
        }, function (err) {
            return deferred.reject(err);
        });
        return deferred.promise;
    };

    return {
        setPasswordPattern: setPasswordPattern,
        getPasswordPattern: getPasswordPattern,
        getSchemaForm: getSchemaForm,
        postSchemaForm: postSchemaForm
    };
};

angular.module('BBAdminDashboard.reset-password').factory('ResetPasswordSchemaFormService', ResetPasswordSchemaFormService);
'use strict';

/*
 * @ngdoc service
 * @name BBAdminDashboard.reset-password.service:ResetPasswordService
 *
 * @description
 * This service enables the user to send a request to reset he's password
 */

var ResetPasswordService = function ResetPasswordService($q, $window, $http) {
    'ngInject';

    var postRequest = function postRequest(email, baseUrl) {
        var deferred = $q.defer();

        var url = baseUrl + "/api/v1/login/admin/reset_password_email";

        var path = $window.location.pathname + '#/reset-password';

        var body = { "email": email, "path": path };

        $http.post(url, body).then(function (response) {
            return deferred.resolve(response);
        }, function (err) {
            return deferred.reject(err);
        });
        return deferred.promise;
    };

    return {
        postRequest: postRequest
    };
};

angular.module('BBAdminDashboard.reset-password').factory('ResetPasswordService', ResetPasswordService);
'use strict';

/*
 * @ngdoc overview
 * @name BBAdminDashboard.reset-password.translations
 *
 * @description
 * Translations for the admin reset-password module
 */
angular.module('BBAdminDashboard.reset-password').config(['$translateProvider', function ($translateProvider) {
    return $translateProvider.translations('en', {
        'ADMIN_DASHBOARD': {
            'RESET_PASSWORD_PAGE': {
                'BACK_BTN': 'Back',
                'CONFIRM_NEW_PASSWORD_LBL': 'Confirm New Password',
                'EMAIL_LBL': 'Email',
                'ENTER_NEW_PASSWORD': 'Enter your new password',
                'ENTER_EMAIL': 'Enter your email address',
                'ERROR_API_MISSING': 'API url has not been set correctly.',
                'ERROR_EMAIL_INVALID': 'Please enter a valid email.',
                'ERROR_PASSWORD_MATCH': 'This needs to be the same as the new password.',
                'ERROR_PASSWORD_PATTERN': 'Password must be between 7 and 25 characters and contain at least one letter and one number.',
                'ERROR_REQUIRED': 'This field is required.',
                'FORGOT_PASSWORD': 'Forgot your password?',
                'FORM_SUBMIT_FAIL': 'Password Reset request failed',
                'FORM_SUBMIT_SUCCESS': 'Password Reset request submitted',
                'FORM_SUBMIT_FAIL_MSG': "Sorry we couldn't update your password successfully. Please try again or contact our support team.",
                'FORM_SUBMIT_SUCCESS_MSG': 'Thank you for resetting your password. You will receive an email shortly with instructions to complete this process.',
                'NEW_PASSWORD_LBL': 'New Password',
                'PASSWORD': 'Password',
                'PASSWORD_RESET_SUCCESS': 'Password Reset complete',
                'PASSWORD_RESET_SUCCESS_MSG': 'Your password has now been successfully updated.',
                'RESET_PASSWORD_BTN': 'Reset Password',
                'SITE_LBL': 'Site'
            }
        }
    });
}]);
'use strict';

/*
 * @ngdoc controller
 * @name BBAdminDashboard.settings-iframe.controllers.controller:SettingsIframeAdvancedSettingsPageCtrl
 *
 * @description
 * Controller for the settings page
 */
angular.module('BBAdminDashboard.settings-iframe.controllers').controller('SettingsIframeAdvancedSettingsPageCtrl', ['$scope', '$state', '$rootScope', function ($scope, $state, $rootScope) {
    $scope.pageHeader = 'ADMIN_DASHBOARD.SETTINGS_IFRAME_PAGE.ADVANCED_SETTINGS.TITLE';

    $scope.tabs = [{
        name: 'ADMIN_DASHBOARD.SETTINGS_IFRAME_PAGE.ADVANCED_SETTINGS.TAB_ONLINE_PAYMENTS',
        icon: 'fa fa-credit-card',
        path: 'settings.advanced-settings.page({path: "conf/payment/payment_edit"})'
    }, {
        name: 'ADMIN_DASHBOARD.SETTINGS_IFRAME_PAGE.ADVANCED_SETTINGS.TAB_ACCOUNTING_INTEGRATIONS',
        icon: 'fa fa-pencil-square-o',
        path: 'settings.advanced-settings.page({path: "conf/accounting/accounting_integration"})'
    }, {
        name: 'ADMIN_DASHBOARD.SETTINGS_IFRAME_PAGE.ADVANCED_SETTINGS.TAB_BUSINESS_QUESTIONS',
        icon: 'fa fa-question',
        path: 'settings.advanced-settings.page({path: "conf/extra_question"})'
    }, {
        name: 'ADMIN_DASHBOARD.SETTINGS_IFRAME_PAGE.ADVANCED_SETTINGS.TAB_API_SETTINGS',
        icon: 'fa fa-code',
        path: 'settings.advanced-settings.page({path: "conf/developer/parameter"})'
    }];

    $scope.contentsLoading = false;

    $scope.$on('iframeLoaded', function () {
        $scope.contentsLoading = false;
        return $scope.$apply();
    });

    return $scope.$on('iframeLoading', function () {
        return $scope.contentsLoading = true;
    });
}]);
'use strict';

/*
 * @ngdoc controller
 * @name BBAdminDashboard.settings-iframe.controllers.controller:SettingsIframeBasicSettingsPageCtrl
 *
 * @description
 * Controller for the settings page
 */
angular.module('BBAdminDashboard.settings-iframe.controllers').controller('SettingsIframeBasicSettingsPageCtrl', ['$scope', '$state', '$rootScope', function ($scope, $state, $rootScope) {
    $scope.pageHeader = 'ADMIN_DASHBOARD.SETTINGS_IFRAME_PAGE.BASIC_SETTINGS.TITLE';

    $scope.tabs = [{
        name: 'ADMIN_DASHBOARD.SETTINGS_IFRAME_PAGE.BASIC_SETTINGS.TAB_BUSINESS',
        icon: 'fa fa-globe',
        path: 'settings.basic-settings.page({path: "conf/setting/user_edit"})'
    }, {
        name: 'ADMIN_DASHBOARD.SETTINGS_IFRAME_PAGE.BASIC_SETTINGS.TAB_SERVICES',
        icon: 'fa fa-wrench',
        path: 'settings.basic-settings.page({path: "conf/setting/service_edit"})'
    }, {
        name: 'ADMIN_DASHBOARD.SETTINGS_IFRAME_PAGE.BASIC_SETTINGS.TAB_EVENTS',
        icon: 'fa fa-ticket',
        path: 'settings.basic-settings.page({path: "conf/setting/session_edit"})'
    }, {
        name: 'ADMIN_DASHBOARD.SETTINGS_IFRAME_PAGE.BASIC_SETTINGS.TAB_RESOURCES',
        icon: 'fa fa-archive',
        path: 'settings.basic-settings.page({path: "conf/setting/resource_edit"})'
    }, {
        name: 'ADMIN_DASHBOARD.SETTINGS_IFRAME_PAGE.BASIC_SETTINGS.TAB_WIDGET',
        icon: 'fa fa-calendar-times-o',
        path: 'settings.basic-settings.page({path: "conf/setting/widget_edit"})'
    }, {
        name: 'ADMIN_DASHBOARD.SETTINGS_IFRAME_PAGE.BASIC_SETTINGS.TAB_BOOKINGS',
        icon: 'fa fa-book',
        path: 'settings.basic-settings.page({path: "conf/setting/booking_edit"})'
    }, {
        name: 'ADMIN_DASHBOARD.SETTINGS_IFRAME_PAGE.BASIC_SETTINGS.TAB_NOTIFICATIONS',
        icon: 'fa fa-envelope',
        path: 'settings.basic-settings.page({path: "conf/setting/notifier_edit"})'
    }, {
        name: 'ADMIN_DASHBOARD.SETTINGS_IFRAME_PAGE.BASIC_SETTINGS.TAB_PRICING',
        icon: 'fa fa-credit-card',
        path: 'settings.basic-settings.page({path: "conf/setting/pricing_edit"})'
    }, {
        name: 'ADMIN_DASHBOARD.SETTINGS_IFRAME_PAGE.BASIC_SETTINGS.TAB_TERMINOLOGY',
        icon: 'fa fa-language',
        path: 'settings.basic-settings.page({path: "conf/language/user_edit"})'
    }, {
        name: 'ADMIN_DASHBOARD.SETTINGS_IFRAME_PAGE.BASIC_SETTINGS.TAB_CUSTOM_TCS',
        icon: 'fa fa-pencil-square-o',
        path: 'settings.basic-settings.page({path: "conf/text/terms_conditions"})'
    }, {
        name: 'ADMIN_DASHBOARD.SETTINGS_IFRAME_PAGE.BASIC_SETTINGS.TAB_EXTRA_FEATURES',
        icon: 'fa fa-trophy',
        path: 'settings.basic-settings.page({path: "conf/setting/features_edit"})'
    }];

    $scope.contentsLoading = false;

    $scope.$on('iframeLoaded', function () {
        $scope.contentsLoading = false;
        return $scope.$apply();
    });

    return $scope.$on('iframeLoading', function () {
        return $scope.contentsLoading = true;
    });
}]);
'use strict';

/*
 * @ngdoc controller
 * @name BBAdminDashboard.settings-iframe.controllers.controller:SettingsIframeIntegrationsPageCtrl
 *
 * @description
 * Controller for the settings page
 */
angular.module('BBAdminDashboard.settings-iframe.controllers').controller('SettingsIframeIntegrationsPageCtrl', ['$scope', '$state', '$rootScope', function ($scope, $state, $rootScope) {
    $scope.pageHeader = 'ADMIN_DASHBOARD.SETTINGS_IFRAME_PAGE.INTEGRATIONS.TITLE';

    $scope.tabs = [{
        name: 'ADMIN_DASHBOARD.SETTINGS_IFRAME_PAGE.INTEGRATIONS.TAB_PAYMENT',
        icon: 'fa fa-credit-card',
        path: 'settings.integrations.page({path: "conf/addons/payment"})'
    }, {
        name: 'ADMIN_DASHBOARD.SETTINGS_IFRAME_PAGE.INTEGRATIONS.TAB_ACCOUNTING',
        icon: 'fa fa-pencil-square-o',
        path: 'settings.integrations.page({path: "conf/addons/accounting"})'
    }, {
        name: 'ADMIN_DASHBOARD.SETTINGS_IFRAME_PAGE.INTEGRATIONS.TAB_OTHER',
        icon: 'fa fa-question',
        path: 'settings.integrations.page({path: "conf/addons/other"})'
    }];

    $scope.contentsLoading = false;

    $scope.$on('iframeLoaded', function () {
        $scope.contentsLoading = false;
        return $scope.$apply();
    });

    return $scope.$on('iframeLoading', function () {
        return $scope.contentsLoading = true;
    });
}]);
'use strict';

/*
 * @ngdoc controller
 * @name BBAdminDashboard.settings-iframe.controllers.controller:SettingsIframePageCtrl
 *
 * @description
 * Controller for the settings page
 */
angular.module('BBAdminDashboard.settings-iframe.controllers').controller('SettingsIframePageCtrl', ['$scope', '$state', '$rootScope', function ($scope, $state, $rootScope) {

    $scope.parent_state = $state.is("setting");
    $scope.path = "conf";

    return $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
        $scope.parent_state = false;
        if (toState.name === "setting") {
            return $scope.parent_state = true;
        }
    });
}]);
'use strict';

/*
 * @ngdoc controller
 * @name BBAdminDashboard.settings-iframe.controllers.controller:SettingsIframeSubscriptionPageCtrl
 *
 * @description
 * Controller for the settings page
 */
angular.module('BBAdminDashboard.settings-iframe.controllers').controller('SettingsIframeSubscriptionPageCtrl', ['$scope', '$state', '$rootScope', function ($scope, $state, $rootScope) {
    $scope.pageHeader = 'ADMIN_DASHBOARD.SETTINGS_IFRAME_PAGE.SUBSCRIPTION.TITLE';

    $scope.tabs = [{
        name: 'ADMIN_DASHBOARD.SETTINGS_IFRAME_PAGE.SUBSCRIPTION.TAB_STATUS',
        icon: null,
        path: 'settings.subscription.page({path: "subscription/show"})'
    }, {
        name: 'ADMIN_DASHBOARD.SETTINGS_IFRAME_PAGE.SUBSCRIPTION.TAB_PAYMENT_HISTORY',
        icon: null,
        path: 'settings.subscription.page({path: "payment_event"})'
    }, {
        name: 'ADMIN_DASHBOARD.SETTINGS_IFRAME_PAGE.SUBSCRIPTION.TAB_INVOICES',
        icon: null,
        path: 'settings.subscription.page({path: "payment_invoice"})'
    }];

    $scope.contentsLoading = false;

    $scope.$on('iframeLoaded', function () {
        $scope.contentsLoading = false;
        return $scope.$apply();
    });

    return $scope.$on('iframeLoading', function () {
        return $scope.contentsLoading = true;
    });
}]);
'use strict';

/*
 * @ngdoc controller
 * @name BBAdminDashboard.settings-iframe.controllers.controller:SettingsSubIframePageCtrl
 *
 * @description
 * Controller for the settings sub page
 */
angular.module('BBAdminDashboard.settings-iframe.controllers').controller('SettingsSubIframePageCtrl', ['$scope', '$state', '$stateParams', function ($scope, $state, $stateParams) {
    $scope.path = $stateParams.path;
    if ($stateParams.id) {
        $scope.extra_params = 'id=' + $stateParams.id;
    } else {
        $scope.extra_params = "";
    }

    $scope.pageHeader = null;

    // For iframe content in a tabbed context
    $scope.$emit('iframeLoading', {});
    $scope.onIframeLoad = function () {
        return $scope.$emit('iframeLoaded', {});
    };

    // For iframe content in a stand-alone context
    $scope.loading = true;
    return $scope.$on('iframeLoaded', function () {
        $scope.loading = false;
        return $scope.$apply();
    });
}]);
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
angular.module('BBAdminDashboard.settings-iframe.services').provider('AdminSettingsIframeOptions', [function () {
    // This list of options is meant to grow
    var options = {
        use_default_states: true,
        show_in_navigation: true,
        parent_state: 'root'
    };

    this.setOption = function (option, value) {
        if (options.hasOwnProperty(option)) {
            options[option] = value;
        }
    };

    this.getOption = function (option) {
        if (options.hasOwnProperty(option)) {
            return options[option];
        }
    };
    this.$get = function () {
        return options;
    };
}]);
'use strict';

/*
 * @ngdoc overview
 * @name BBAdminDashboard.settings-iframe.translations
 *
 * @description
 * Translations for the admin settings-iframe module
 */
angular.module('BBAdminDashboard.settings-iframe.translations').config(['$translateProvider', function ($translateProvider) {
    return $translateProvider.translations('en', {
        'ADMIN_DASHBOARD': {
            'SIDE_NAV': {
                'SETTINGS_IFRAME_PAGE': {
                    'ACCOUNT_SETTINGS': 'Account settings',
                    'MY_BUSINESS': 'My business',
                    'BASIC_SETTINGS': 'Basic settings',
                    'ADVANCED_SETTINGS': 'Advanced settings',
                    'INTEGRATIONS': 'Integrations',
                    'IMAGES': 'Images',
                    'USERS_ADMINS': 'Users &amp; Admins',
                    'ANNOUNCEMENTS': 'Announcements',
                    'SUBSCRIPTION': 'Subscription'
                }
            },
            'SETTINGS_IFRAME_PAGE': {
                'BASIC_SETTINGS': {
                    'TITLE': 'Settings',
                    'TAB_BUSINESS': 'Business',
                    'TAB_SERVICES': 'Services',
                    'TAB_STAFF': 'Staff',
                    'TAB_EVENTS': 'Events',
                    'TAB_RESOURCES': 'Resources',
                    'TAB_WIDGET': 'Widget',
                    'TAB_BOOKINGS': 'Bookings',
                    'TAB_NOTIFICATIONS': 'Notifications',
                    'TAB_PRICING': 'Pricing',
                    'TAB_TERMINOLOGY': 'Terminology',
                    'TAB_CUSTOM_TCS': 'Custom T&amp;Cs',
                    'TAB_EXTRA_FEATURES': 'Extra features'
                },
                'ADVANCED_SETTINGS': {
                    'TITLE': 'Advanced settings',
                    'TAB_ONLINE_PAYMENTS': 'Online payments',
                    'TAB_ACCOUNTING_INTEGRATIONS': 'Accounting Integrations',
                    'TAB_BUSINESS_QUESTIONS': 'Business Questions',
                    'TAB_API_SETTINGS': 'API settings'
                },
                'INTEGRATIONS': {
                    'TITLE': 'Integrations',
                    'TAB_PAYMENT': 'Payment',
                    'TAB_ACCOUNTING': 'Accounting',
                    'TAB_OTHER': 'Other'
                },
                'SUBSCRIPTION': {
                    'TITLE': 'Subscription',
                    'TAB_STATUS': 'Status',
                    'TAB_PAYMENT_HISTORY': 'Payment history',
                    'TAB_INVOICES': 'Invoices'
                }
            }
        }
    });
}]);