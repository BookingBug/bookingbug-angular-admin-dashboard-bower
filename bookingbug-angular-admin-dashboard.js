(function() {
  'use strict';
  var adminbookingapp;

  adminbookingapp = angular.module('BBAdminDashboard', ['trNgGrid', 'BBAdmin', 'BBAdminServices', 'ui.calendar', 'ngStorage', 'BBAdminBooking']);

  angular.module('BBAdminDashboard').config(function($logProvider) {
    return $logProvider.debugEnabled(true);
  });

  angular.module('BBAdminDashboard.Directives', []);

  angular.module('BBAdminDashboard.Services', ['ngResource', 'ngSanitize', 'ngLocalData']);

  angular.module('BBAdminDashboard.Controllers', ['ngLocalData', 'ngSanitize']);

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
