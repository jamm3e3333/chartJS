var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx,{
    type: 'scatter',
    data:{
        datasets: [{
            label: 'Scatter chart',
            pointBackgroundColor: ['rgba(164, 66, 245,0.4)','rgba(66, 138, 245,0.4)','rgba(66, 245, 182,0.4)', 
            'rgba(209, 245, 66,0.4)','rgba(245, 72, 66,0.4)'], 
            pointBorderWidth: 3,
            pointRadius: 5,
            data: [
                {
                    x:-2,y:10
                },
                {
                    x:0,y:-5
                },
                {
                    x:2,y:-10
                },
                {
                    x:4,y:0
                },
                {
                    x:6,y:15
                }
                ]
        }]
    },
    options: {
        
    }
})