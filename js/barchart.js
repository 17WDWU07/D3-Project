var barData = [0,12,56,12,84,15,45,15,97,100,2,16,45,120, 200, 50];
var height = 400,
    width = 600,
    barWidth = 50,
    barOffset = 5;

var yScale = d3.scaleLinear()
    .domain([0, d3.max(barData)])
    .range([0, height])

var xScale = d3.scaleBand()
    .domain(d3.range(0, barData.length))
    .range([0, width])

d3.select('body').append('svg')
    .attr('width', width)
    .attr('height', height)
    .style('background-color', '#7f8c8d')
    .selectAll('rect')
        .data(barData)
        .enter().append('rect')
            .classed('bar', true)
            .style('fill', '#c0392b')
            .attr('width', xScale.bandwidth())
            .attr('height', function(d){
                return yScale(d)
            })
            .attr('x', function(d,i){
                return xScale(i)
            })
            .attr('y', function(d){
                return height - yScale(d)
            }).exit()







console.log("working");
