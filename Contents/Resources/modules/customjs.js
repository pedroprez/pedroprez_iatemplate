/* document.addEventListener("DOMContentLoaded", function(){
    document.body.addEventListener('ia-writer-change', function(event) {
        var elements = document.getElementsByClassName('flow')
        for (var i = 0, l = elements.length; i < l; i++) {
            // only get the first one in the array, because the previous one has been removed or replaced
            var element = elements[0]
            var code = element.innerText
            var chart = flowchart.parse(code)

            // Create a new div for displaying chart
            var div_new = document.createElement('div')
            var div_new_id = 'flowchart_' + i
            div_new.setAttribute('id', div_new_id)
            element.parentNode.replaceChild(div_new, element)
            chart.drawSVG(div_new_id,{
                'maxWidth': 10,//ensures the flowcharts fits within a certian width
                //'scale':0.8
            })
        }
    });
}); */

window.addEventListener('load', function() {

    var processChart = function() {
        var elements = document.getElementsByClassName('chartgraf')
        for (var i = 0, l = elements.length; i < l; i++) {
            // only get the first one in the array, because the previous one has been removed or replaced
            var element = elements[0]
            var source = element.textContent.replace(/(['"])?([a-zA-Z0-9_]+)(['"])?:/g, '"$2": ');

            // Create a new div for displaying chart
            var can_new = document.createElement('CANVAS')
            var can_new_id = 'chartgraf_' + i
            can_new.setAttribute('id', can_new_id)
            element.parentNode.replaceChild(can_new, element)

            //Generate Graphic
            var ctx = document.getElementById('myChart').getContext('2d');
            var mychart = new Chart(ctx, JSON.parse(source.trim()));
        }
    }
    var processFlowchart = function() {
        var elements = document.getElementsByClassName('flow')
        for (var i = 0, l = elements.length; i < l; i++) {
            // only get the first one in the array, because the previous one has been removed or replaced
            var element = elements[0]
            var code = element.innerText
            var chart = flowchart.parse(code)

            // Create a new div for displaying chart
            var div_new = document.createElement('div')
            var div_new_id = 'flowchart_' + i
            div_new.setAttribute('id', div_new_id)
            element.parentNode.replaceChild(div_new, element)
            chart.drawSVG(div_new_id,{
                'maxWidth': 10,//ensures the flowcharts fits within a certian width
                //'scale':0.8
            })
        }
    }
    var refresh = function() {
        processFlowchart()
        processChart()
    }
    //refresh()
    document.body.addEventListener('ia-writer-change', refresh)
    refresh()
},
    false // Wait 
);