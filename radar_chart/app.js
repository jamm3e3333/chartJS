var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx,{
    type: 'radar',
    data: {
        labels: ['Drinking','Eating','Sleeping','Working','Studying'],
        datasets: [{
            lable: 'Radar chart',
            backgroundColor: 'rgba(0, 141, 207,0.7)',
            borderColor: 'blue',
            borderWidth: 3,
            data: [80,32,68,15,90]
        }]
    },
    options: {

    }
})