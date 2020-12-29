var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx,{
    type: 'doughnut',
    data: {
        labels: ['January','February','March','April'],
        datasets: [{
            label: 'Donut Chart',
            backgroundColor: ['pink','yellow','#61c8ff','lightblue'],
            borderAlign: 'innner',
            borderColor: 'white',
            borderWidth: 4,
            hoverBackgroundColor: 'black',
            hoverBorderColor: 'white',
            hoverBorderWidth: 4,
            data: [20,20,15,45]
        }]
    },
    options: {
        cutoutPercentage: 60,
        rotation: 0.8*Math.PI,
        circumference: 1.4*Math.PI,
        animation: {
            animateRotate: true,
            animateScale: true
        }
    }
})