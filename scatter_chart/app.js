var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx,{
    type: 'scatter',
    data:{
        datasets: [{
            label: 'Scatter chart',
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