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
            ['Jan', 10],  ['Feb', 23],  ['Mar', 17],  ['April', 18],  ['May', 9],
            ['June', 11],  ['July', 27],  ['Aug', 33],  ['Sep', 40],  ['Oct', 32], ['Nov', 35],
            ['Dec', 30]
        ]
    } else {
        rows = [
            ['Jan', 5],  ['Feb', 15],  ['Mar', 17],  ['April', 12],  ['May', 9],
            ['June', 15],  ['July', 20],  ['Aug', 13],  ['Sep', 30],  ['Oct', 35], ['Nov', 28],
            ['Dec', 20]
        ]
    }

    data.addRows(rows);

    var options = {
        title:"Mentor Student Count",
        titleFontSize:20,
        hAxis: {
            title: 'Month'
        },
        vAxis: {
            title: 'Mentor Count'
        },
        width : 900,
        height : 600,
        backgroundColor: {
            stroke: '#42b9f4',
            strokeWidth: 3
        },
        colors : ['#111111']
    };

    var chart = new google.visualization.LineChart(document.getElementById('mentorstudent-count'));
    chart.draw(data, options);
}

google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawBackgroundColor);

/************************************---------------------------************************************---------------------------*/

$('#filer-change2').click(function(){
    drawBackgroundColor();
});


var drawBackgroundColor =function () {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'X');
    data.addColumn('number', 'Joined');

    // Call to backend for data
    // Dummy data

    if ($('#type').val()=='Students') {
	rows = [
            ['Jan', 5],  ['Feb', 25],  ['Mar', 47],  ['April', 72],  ['May', 119],
            ['June', 151],  ['July', 220],  ['Aug', 313],  ['Sep', 430],  ['Oct', 455], ['Nov', 528],
            ['Dec', 620]
        ]
        
    } else {
        rows = [
            ['Jan', 2],  ['Feb', 13],  ['Mar', 17],  ['April', 18],  ['May', 29],
            ['June', 41],  ['July', 47],  ['Aug', 53],  ['Sep', 60],  ['Oct', 72], ['Nov', 75],
            ['Dec', 80]
        ]
    }

    data.addRows(rows);

    var options = {
        title:"Mentor Student join trends",
        titleFontSize:20,
        hAxis: {
            title: 'Month'
        },
        vAxis: {
            title: 'No. of Mentors/Students joined'
        },
        width : 900,
        height : 600,
        backgroundColor: {
            stroke: '#42b9f4',
            strokeWidth: 3
        },
        colors : ['#111111']
    };

    var chart = new google.visualization.LineChart(document.getElementById('mentorstudent-count2'));
    chart.draw(data, options);
}

google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawBackgroundColor);

/************************************---------------------------************************************---------------------------*/

$('#filer-change3').click(function(){
    drawBackgroundColor();
});


var drawBackgroundColor =function () {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'X');
    data.addColumn('number', 'Joined');

    // Call to backend for data
    // Dummy data

    if ($('#unv').val()=='Purdue University') {
	rows = [
            ['Jan', 5],  ['Feb', 25],  ['Mar', 47],  ['April', 72],  ['May', 119],
            ['June', 151],  ['July', 220],  ['Aug', 313],  ['Sep', 430],  ['Oct', 455], ['Nov', 528],
            ['Dec', 620]
        ]
        
    } else {
        rows = [
            ['Jan', 2],  ['Feb', 13],  ['Mar', 17],  ['April', 18],  ['May', 29],
            ['June', 41],  ['July', 47],  ['Aug', 53],  ['Sep', 60],  ['Oct', 72], ['Nov', 75],
            ['Dec', 80]
        ]
    }

    data.addRows(rows);

    var options = {
        title:"University join trends",
        titleFontSize:20,
        hAxis: {
            title: 'Month'
        },
        vAxis: {
            title: 'University Mentors/Students joined'
        },
        width : 900,
        height : 600,
        backgroundColor: {
            stroke: '#42b9f4',
            strokeWidth: 3
        },
        colors : ['#111111']
    };

    var chart = new google.visualization.LineChart(document.getElementById('mentorstudent-count3'));
    chart.draw(data, options);
}

google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawBackgroundColor);
