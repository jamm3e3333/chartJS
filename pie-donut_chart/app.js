var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx,{
    type: 'doughnut',
    data: {
        labels: ['January','February','March','April'],
        datasets: [{
            label: 'Donut Chart',
            backgroundColor: ['pink','yellow','#61c8ff','lightblue'],
            borderAlign: 'innner',
            borderColor: 'lightseagreen',
            borderWidth: 2,
            hoverBackgroundColor: 'rgba(97, 255, 121,0.4)',
            hoverBorderColor: 'rgba(97, 255, 194)',
            data: ['20','20','15','45']
        }]
    },
    options: {
        cutoutPercentage: 65,
        rotation: -0.25*Math.PI,
        circumference: 2*Math.PI,
        animation: {
            animateRotate: true,
            animateScale: true
        }
    }
})