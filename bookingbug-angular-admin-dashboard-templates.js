angular.module("BB").run(["$templateCache", function($templateCache) {$templateCache.put("resource_calendar_main.html","<div ui-calendar=\"options.calendar\" ng-model=\"eventSources\"\r\n  ng-if=\"eventSources\" calendar=\"resourceCalendar\"\r\n  class=\"resource-calendar\"></div>\r\n");}]);