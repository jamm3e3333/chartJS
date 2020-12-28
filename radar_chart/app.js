var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx,{
    type: 'radar',
    data: {
        labels: ['Drinking','Eating','Sleeping','Working','Studying'],
        datasets: [{
            lable: 'Radar chart',
            backgroundColor: 'rgba(255, 87, 101,0.7)',
            borderColor: 'red',
            borderWidth: 8,
            //borderDash: [5,15,2,15],
            borderDashOffset: 0,
            borderCapStyle: 'square',
            borderJoinStyle: 'round',
            // lineTension: 0.2, the bigger the more rounded the line is, default is 0 (straight)
            pointBackgroundColor: 'rgb(46, 191, 155)',
            pointBorderColor: 'pink',
            pointBorderWidth: 2,
            pointRadius: 8,
            pointStyle: 'rectRot',
            pointHitRadius: 8,
            pointHoverBackgroundColor: 'rgba(72, 86, 247,0.6)',
            pointHoverBorderColor: 'rgb(145, 72, 247)',
            pointHoverBorderWidth: 3,
            pointHoverRadius: 15,
            data: [80,32,68,15,90]
        }]
    },
    options: {

    }
})