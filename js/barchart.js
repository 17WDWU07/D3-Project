var barData = [12,56,12,84,15,45,15,97,100,2,16,45];
var height = 400,
    width = 600,
    barWidth = 50,
    barOffset = 5;

d3.select('body').append('svg')
    .attr('width', width)
    .attr('height', height)
    .style('background-color', '#7f8c8d')
    .selectAll('rect')
        .data(barData)
        .enter().append('rect')
            .classed('bar', true)
            .style('fill', '#c0392b')
            .attr('width', barWidth)
            .attr('height', function(d){
                return d
            })
            .attr('x', function(d,i){
                return i * (barWidth+barOffset)
            })
            .attr('y', function(d){
                return height - d
            }).exit()







console.log("working");
