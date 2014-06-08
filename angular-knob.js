angular.module('angular-knob', []).directive('knob', function() {
  return {
    restrict: 'E',
    scope: {
      value: "="
    },
    template: '<div class="knob"></div>',
    link: function($scope, $element, $attrs) {
      $element.knob({
        fgColor: $attrs.fgColor,
        change: function(value) {
          $scope.$apply(function() {
            $scope.value = value;
          });
        }
      });

      $scope.$watch("value", function(newValue, oldValue) {
        $element.val(newValue).trigger('change');
      });
    }
  }
})
