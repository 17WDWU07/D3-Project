/*
    Usually with Data Visualisation we never want to use fixed information.
    We want to make our site as easy to use no matter what type/ the number of entries we are working width
    With D3 it is easy to add in data from external sources.
    The function data() is used when we want to pass data into a d3 element.
    This can be used multiple ways. In the example bellow we are telling
    the data to only effect the first 3 elements which it is targeting.
*/

// d3.selectAll('.node')
//     .data([true, true, true])
//     .style('background-color', '#2688d2');


// var styles = ["#2688d2", "#e74c3c", "#27ae60"];
// var styles = [
//         {
//             color: '#2688d2',
//             width: '200px',
//             text: 'Blue Node'
//         },
//         {
//             color: '#e74c3c',
//             width: '300px',
//             text: 'Red Node'
//         },
//         {
//             color: '#27ae60',
//             width: '250px',
//             text: 'Green Node'
//         },
//         {
//             color: '#f1c40f',
//             width: '100px',
//             text: 'Yellow Node'
//         }
// ];


/*
    Whenever we deal with data it will usually get back to us as objects in an array.
    In the function bellow we are creating a random list of colors, widths and text.
*/

var styles = [];
var number = 100;
for (var i = 0; i < number; i++) {
    var width = Math.floor(Math.random() * 100) + "px";
    styles.push({
        color: '#'+(Math.random()*0xFFFFFF<<0).toString(16),
        width: width,
        text: width,
    })
}

/*
    Once we have prepared the data for how we want it.
    Using D3 we can manipate it to create the elements which we need.
    Firstly you need to select the container for where your elements are going to go to.
    Then you want to selectAll of the elements you are about to create.
    It is confusing as you are going to be manipulating elements which arent even created yet.
    Once you bind the data to the elements you want to create. You then want to enter them.
    This is what the .enter() function does. It enters into the newly created elements which get created by the Data
    Think of it as you are entering the data and starting a for loop.
    Until you exit the data, everything underneath will be classified as inside the loop
    so the function bellow is appending a div for each of the entries in the data array
    When we want to use any of the data, we use the function which is shown in the text property.
    d stands for the entry in the array which is relevant to the iteration in the loop.
*/

d3.select('#NodeContainer').selectAll('.newNodes')
    .data(styles)
    .enter().append('div')
        .classed('newNodes', true)
        .text(function(d){
            return d.text
        })
        .style('background-color', function(d){
            return d.color
        })
        .style('width', function(d){
            return d.width
        }).exit();









// d3.selectAll('.node')
//     .data(styles)
//     .style('background-color', function(d){
//         return d.color
//     })
//     .style('width', function(d){
//         return d.width
//     })
