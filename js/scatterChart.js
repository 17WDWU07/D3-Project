// var data = [
//     {
//         age: 12,
//         weight :54
//     },
//     {
//         age: 54,
//         weight: 100
//     },
//     {
//         age: 34,
//         weight: 75
//     },
//     {
//         age: 62,
//         weight: 11
//     },
//     {
//         age: 87,
//         weight: 56
//     },
//     {
//         age: 23,
//         weight: 76
//     },
//     {
//         age: 34,
//         weight: 25
//     },
//     {
//         age: 8,
//         weight: 50
//     },
//     {
//         age: 32,
//         weight: 78
//     },
//     {
//         age: 92,
//         weight: 53
//     }
// ];

var data;
d3.json("js/ageWeight.json", function(error, jsonData){
    if(error){
        console.log("something has gone wrong");
        return;
    }
    data = jsonData;


    var height = 400,
        width = 600;

    var yMax = 0;
    var xMax = 0;
    for (var i = 0; i < data.length; i++) {
        if(data[i].age > yMax){
            yMax = data[i].age
        }
        if(data[i].weight > xMax){
            xMax = data[i].weight
        }
    }


    var yScale = d3.scaleLinear()
        .domain([0, yMax])
        .range([0, height])

    var xScale = d3.scaleLinear()
        .domain([0, xMax])
        .range([0, width])

    var color = d3.scaleLinear()
        .domain([0, xMax/2, xMax])
        .range(['#3498db', '#f1c40f','#e74c3c'])

    d3.select('body').append('svg')
        .attr('width', width)
        .attr('height', height)
        .style('background-color', '#7f8c8d')
        .selectAll('circle')
            .data(data)
            .enter().append('circle')
                .classed('circle', true)
                .style('fill', function(d, i){
                    return color(d.weight)
                })
                .attr('r', '8')
                .attr('cx', function(d){
                    return xScale(d.weight)
                })
                .attr('cy', function(d){
                    return height - yScale(d.age)
                })
                .on('mouseover', function(d){
                    d3.select(this)
                        .style('opacity', .5)
                })
                .on('mouseout', function(d){
                    d3.select(this)
                        .style('opacity', 1)
                })
                .exit()









});
