pacBioTestProject.directive('circle', ['d3Service', function (d3Service) {
    return {
        restrict: 'EA',
        scope: {},
        link: function (scope, element, attrs) {
            d3Service.d3().then(function (d3) {
                //Make an SVG Container
                var svgContainer = d3.select(".well").append("svg")
                    .attr("width", 80)
                    .attr("height", 80);

                //Draw the Circle
                var circle = svgContainer.append("circle")
                    .attr("cx", 30)
                    .attr("cy", 30)
                    .attr("r", 20);
            })
        }
    }
}]);