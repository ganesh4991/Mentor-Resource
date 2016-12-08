/**
 * Created by ganeshramiyer on 11/2/16.
 */
var name = "John Smith";
$("#userName").text(name);


$('#filer-change').click(function(){
    drawBackgroundColor();
});


var drawBackgroundColor =function () {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'X');
    data.addColumn('number', 'Connections');

    // Call to backend for data
    // Dummy data

    if ($('#year').val()=='2015') {
        rows = [
            ['Jan', 10],  ['Feb', 15],  ['Mar', 17],  ['April', 21],  ['May', 25],
            ['June', 27],  ['July', 30],  ['Aug', 33],  ['Sep', 37],  ['Oct', 39], ['Nov', 42],
            ['Dec', 45]
        ]
    } else {
        rows = [
            ['Jan', 5],  ['Feb', 8],  ['Mar', 12],  ['April', 15],  ['May', 19],
            ['June', 26],  ['July', 31],  ['Aug', 34],  ['Sep', 39],  ['Oct', 42], ['Nov', 48],
            ['Dec', 55]
        ]
    }

    data.addRows(rows);

    var options = {
        title:"Mentor Student Count",
        titleFontSize:15,
        hAxis: {
            title: 'Month'
        },
        vAxis: {
            title: 'Mentor Count'
        },
        backgroundColor: {
            stroke: '#42b9f4',
            strokeWidth: 3
        }
    };

    var chart = new google.visualization.LineChart(document.getElementById('mentorstudent-count'));
    chart.draw(data, options);
}

google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawBackgroundColor);
