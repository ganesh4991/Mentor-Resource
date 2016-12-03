$("#filer-change").click(function(){
    var graph = $("#select-graph").val();
    var schoolyear = $("#grade").val();
    if (graph.includes("student")) {
        careerpath_graph();
    } else {
        schoolwork_graph();
    }
});

var careerpath_graph = function () {
    console.log("Careerpath_graph called");
    google.charts.load('current', {packages: ['corechart', 'bar']});
    google.charts.setOnLoadCallback(drawBasic);

    function drawBasic() {

        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Distribution');
        data.addColumn('number', 'Count');
		data.addColumn ('string', 'Grade')
        data.addRows([
            ['Strongly Agree', 'Freshman' 40],
            ['Strongly Disagree', 'Freshman' 35],
			['Strongly Agree', 'Sophomore' 35],
            ['Strongly Disagree', 'Sophomore' 23],
			['Strongly Agree', 'Junior' 54],
            ['Strongly Disagree', 'Junior' 45],
			['Strongly Agree', 'Senior' 45],
            ['Strongly Disagree', 'Senior' 35],
			
            
        ]);

        var options = {
            title: 'Career Path Knowledge Improvement',
            hAxis: {
                title: 'Distribution'
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


var schoolwork_graph = function () {
    console.log("Schoolwork called");
    google.charts.load('current', {packages: ['corechart', 'bar']});
    google.charts.setOnLoadCallback(drawBasic);

    function drawBasic() {

        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Distribution');
        data.addColumn('number', 'Count');
		data.addColumn ('string', 'Grade')
        data.addRows([
            ['Strongly Agree', 'Freshman' 40],
            ['Strongly Disagree', 'Freshman' 35],
			['Strongly Agree', 'Sophomore' 35],
            ['Strongly Disagree', 'Sophomore' 23],
			['Strongly Agree', 'Junior' 54],
            ['Strongly Disagree', 'Junior' 45],
			['Strongly Agree', 'Senior' 45],
            ['Strongly Disagree', 'Senior' 35],
        ]);

        var options = {
            title: 'School Work Relevance Improvement',
            hAxis: {
                title: 'Distribution'
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
