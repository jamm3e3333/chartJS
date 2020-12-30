var image = document.getElementById('source');
var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','October','November','December'],
        datasets: [
        {
            label: 'My profits',
            backgroundColor: 'rgba(0, 212, 183,0.5)',
            borderColor: 'blue',
            pointStyle: 'line',
            data: [-2, 3, 7, 2, 0, -10, 8,13,2,8,-3,6]
        },
        {
            label: 'My prize',
            backgroundColor: 'rgba(133, 237, 85,0.5)',
            borderColor: 'lightseagreen',
            pointStyle: 'rectRot',
            data: [4, 6, 2, 15, 2, -6, 1,18,14,2,-6,2]
        },
        {
            label: 'My cost',
            backgroundColor: 'rgba(85, 164, 237,0.5)',
            borderColor: 'lightseablue',
            pointStyle: image,
            data: [0, 7, 4, 4, 1, 5, 5,3,1,6,-3,1]
        }
    ]},
    // Configuration options go here
    options: {
        scales: {
            yAxes: [{
                stacked: true
            }]
        },
        title: {
            display: true,
            text: 'Monthly profits',
            position: 'bottom',
            fontSize: 25,
            fontFamily: 'Helvetica',
            fontColor: 'lightseagreen',
            fontStyle: 'bold',
            padding: 8,
            lineHeight: 1.2
        },
        legendCallback: function(chart){
            var text = [];
            text.push('<ul class="list-inLine">');
            for(i = 0; i < chart.data.datasets.length; i++){
                text.push('<li class="row-xxl text-white list-inLine-item btn" style="background:'+chart.data.datasets[i].backgroundColor+'">');
                text.push(chart.data.datasets[i].label);
                text.push('</li>');
            }
            text.push('</ul>');
            return text.join("");
        },
        legend: {
            display: false,
            position: 'right',
            reverse: true,
            boxWidth: 3,
            //onClick: alertBox,
            onHover: changeFontColor,
            labels: {
                boxWidth: 30,
                fontSize: 16,
                fontStyle: 'italic',
                fontColor: 'lightseagreen',
                padding: 30,
                usePointStyle: true
            }
        }
    }
});

document.getElementById('chartjs-legend').innerHTML = chart.generateLegend();


function changeFontColor(){
    chart.options.legend.labels.fontColor = 'grey';
}

function alertBox(){
    alert('This Works now.');
}

