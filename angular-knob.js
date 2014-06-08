angular.module('angular-knob', []).directive('knob', function() {
  return {
    restrict: 'E',
    require: "ngModel",
    template: '<div class="knob"></div>',
    link: function($scope, $element, $attrs, modelCtrl) {
      $element.knob({
        fgColor: $attrs.fgColor,
        change: function(value) {
          $scope.$apply(function() {
            modelCtrl.$setViewValue(value);
          });
        }
      });

      modelCtrl.$render = function() {
        $element.val(this.$viewValue).trigger("change");
      }
    }
  }
})
