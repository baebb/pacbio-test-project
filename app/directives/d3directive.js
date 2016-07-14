//pacBioTestProject.directive('circle', ['d3Service', function (d3Service) {
//    return {
//        restrict: 'EA',
//        scope: {},
//        link: function (scope, element, attrs) {
//            d3Service.d3().then(function (d3) {
//                //Make an SVG Container
//                var svgContainer = d3.select(".cell").append("svg")
//                    .attr("width", 200)
//                    .attr("height", 200);
//
//                //Draw the Circle
//                var circle = svgContainer.append("circle")
//                    .attr("cx", 30)
//                    .attr("cy", 30)
//                    .attr("r", 20);
//            })
//        }
//    }
//}]);

pacBioTestProject.directive('d3Bars', ['d3Service', function (d3Service) {
    return {
        restrict: 'EA',
        scope: {},
        link: function (scope, element, attrs) {
            d3Service.d3().then(function (d3) {
                //Make an SVG Container
                var svgContainer = d3.select(".cell").append("svg")
                    .attr("width", 200)
                    .attr("height", 200);

                //Draw the Circle
                var circle = svgContainer.append("circle")
                    .attr("cx", 30)
                    .attr("cy", 30)
                    .attr("r", 20);
            });
        }
    };
  }]);