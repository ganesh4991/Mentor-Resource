$("#filer-change").click(function(){
    var graph = $("#select-graph").val();
    var schoolyear = $("#grade").val();
    if (graph.includes("student")) {
        careerpath_graph(schoolyear);
    } else {
        schoolwork_graph();
    }
});

var careerpath_graph = function (grade) {
    console.log("Careerpath_graph called");
    var data = null;
    var options = null;
    if (grade.includes("all")) {
        google.charts.load('current', {packages: ['corechart', 'bar']});
        google.charts.setOnLoadCallback(drawBasic);

        function drawBasic() {
            data = new google.visualization.DataTable();
            data.addColumn('string', 'Distribution');
            data.addColumn('number', 'Count');
            data.addRows([
                ['Strongly Agree', 40],
                ['Strongly Disagree', 35]
            ]);

            options = {
                title: 'Career Path Knowledge Improvement - All',
                titleFontSize:15,
                hAxis: {
                    title: 'Distribution'
                },
                vAxis: {
                    title: 'Count',
                    minValue: 0
                }
            };


            var chart = new google.visualization.ColumnChart(
                document.getElementById('mentorstudent-count'));

            chart.draw(data, options);

        }
    } else if (grade.includes("fresh")) {
        google.charts.load('current', {packages: ['corechart', 'bar']});
        google.charts.setOnLoadCallback(drawBasic);

        function drawBasic() {
            data = new google.visualization.DataTable();
            data.addColumn('string', 'Distribution');
            data.addColumn('number', 'Count');
            data.addRows([
                ['Strongly Agree', 10],
                ['Strongly Disagree', 8]
            ]);

            options = {
                title: 'Career Path Knowledge Improvement - Freshman',
                titleFontSize:15,
                hAxis: {
                    title: 'Distribution'
                },
                vAxis: {
                    title: 'Count',
                    minValue: 0
                }
            };

        }

        var chart = new google.visualization.ColumnChart(
            document.getElementById('mentorstudent-count'));

        chart.draw(data, options);
    }

}


var schoolwork_graph = function () {
    console.log("Schoolwork called");
    google.charts.load('current', {packages: ['corechart', 'bar']});
    google.charts.setOnLoadCallback(drawBasic);

    function drawBasic() {

        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Distribution');
        data.addColumn('number', 'Count');
        data.addRows([
            ['Strongly Agree', 40],
            ['Agree', 30],
            ['No Opinion', 15],
            ['Disagree', 23],
            ['Strongly Disagree', 12]
        ]);

        var options = {
            title: 'School Work Relevance Improvement',
            titleFontSize:15,
            hAxis: {
                title: 'Distribution'
            },
            vAxis: {
                title: 'Count',
                minValue: 0
            }
        };

        var chart = new google.visualization.ColumnChart(
            document.getElementById('mentorstudent-count'));

        chart.draw(data, options);
    }
}

schoolwork_graph();