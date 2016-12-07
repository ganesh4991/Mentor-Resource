$("#filer-change").click(function(){
    var graph = $("#select-graph").val();
    var grade = $("#grade").val();
    var age = $("#mentor-filter").val();
    if (graph.includes("student")) {
        student_graph();
    } else {
        mentor_graph();
    }
});

var student_graph = function () {
    console.log("Studnet called");
    google.charts.load('current', {packages: ['corechart', 'bar']});
    google.charts.setOnLoadCallback(drawBasic);

    function drawBasic() {

        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Grade');
        data.addColumn('number', 'Count');
        data.addRows([
            ['Freshman', 15],
            ['Sophomore', 23],
            ['Junior', 38],
            ['Senior', 52]
        ]);

        var options = {
            title: 'Student Grade Count',
            titleFontSize:15,
            hAxis: {
                title: 'Grade'
            },
            vAxis: {
                title: 'Count'
            }
        };

        var chart = new google.visualization.ColumnChart(
            document.getElementById('mentorstudent-count'));

        chart.draw(data, options);
    }
}


var mentor_graph = function () {
    console.log("Mentor called");
    google.charts.load('current', {packages: ['corechart', 'bar']});
    google.charts.setOnLoadCallback(drawBasic);

    function drawBasic() {

        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Industry');
        data.addColumn('number', 'Count');
        data.addRows([
            ['Management', 6],
            ['Engineer', 15],
            ['Computer Science', 12],
            ['Graphic Design', 8],
            ['Arts', 4]
        ]);

        var options = {
            title: 'Mentor Industry Count',
            titleFontSize:15,
            hAxis: {
                title: 'Industry'
            },
            vAxis: {
                title: 'Count'
            }
        };

        var chart = new google.visualization.ColumnChart(
            document.getElementById('mentorstudent-count'));

        chart.draw(data, options);
    }
}

student_graph();