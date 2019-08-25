

function paint() {
// set the dimensions and margins of the graph
d3.select("svg").remove();
var chart = d3.select('#scatter');
var margin = { top: 10, right: 50, bottom: 30, left: 60 },
  width = chart.node().getBoundingClientRect().width - margin.left - margin.right,
  height = chart.node().getBoundingClientRect().height - margin.top - margin.bottom;

var svg = d3.select("#scatter")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform",
    "translate(" + margin.left + "," + margin.top + ")");

d3.csv('assets/data/august2019/creatures.csv', function (error, data) {
  // var data = data;
  // Add X axis
  var x = d3.scaleLinear()
    .domain([0, 100])
    .range([0, width]);
  svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));

  // Add Y axis
  var y = d3.scaleLinear()
    .domain([0, 500])
    .range([height, 0]);
  svg.append("g")
    .call(d3.axisLeft(y));

    var tooltip = d3.select("#scatter").append("div")
                  .attr("class", "tooltip")
                  .style("opacity", 0);

var tipMouseover = function(d) {
// var color = colorScale(d.manufacturer);
color = '#8DACC6';
var html  = "<span style='color:" + color + ";'>" + d.Creature + "</span><br/>" +
            "<b>" + d.Mass + "</b> Grams, <b/>" + d.RestingHeartRate + "</b> bpm";

    tooltip.html(html)
    .style("left", (d3.event.pageX + 15) + "px")
    .style("top", (d3.event.pageY - 28) + "px")
    .transition()
    .duration(200) // ms
    .style("opacity", .9) // started as 0!
          };

// tooltip mouseout event handler
var tipMouseout = function(d) {
  tooltip.transition()
    .duration(300) // ms
    .style("opacity", 0); // don't care about position!
  };

  // Add dots
  svg.append('g')
    .selectAll("dot")
    .data(data)
    .enter()
    .append("circle")
    .attr("cx", function (d) { return x(d.Longevity); })
    .attr("cy", function (d) { return y(d.RestingHeartRate); })
    .attr("r", 5)
    .style("fill", "#69b3a2")
    .on("mouseover", tipMouseover)
    .on("mouseout", tipMouseout);

});

}

window.addEventListener('resize', paint);

paint();




