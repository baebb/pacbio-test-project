pacBioTestProject.directive('circle', ['d3Service', function (d3Service) {
    return {
        restrict: 'EA',
        scope: {},
        link: function (scope, element, attrs) {
            d3Service.d3().then(function (d3) {
            //console.log(element[0]);
                //Make an SVG Container
                var svgContainer = d3.select("circle").append("svg")
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