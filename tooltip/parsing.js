const fs = require('fs');

const options = {
    scales: {
        yAxes: [{
            stacked: true
        }]
    },
    tooltips: {
        enabled: true,
        mode: 'index', //'dataset','nearest' - default
        intersect: false,
        position: 'nearest', //average by default
        backgroundColor: 'rgba(255,255,255,0.5)',
        titleFontFamily: 'helvetica',
        titleFontSize: 20,
        titleFontStyle: 'normal',
        titleFontColor: 'black',
        titleSpacing: 2,
        titleAlign: 'center',
        titleMarginBottom: 10,
        bodyFontColor: 'black'

    }
};

optionsJSON = JSON.stringify(options)
fs.writeFileSync('options.json',optionsJSON);
// console.log(optionsJSON);