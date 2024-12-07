const imp = document.currentScript.dataset.imp;
const top_ten_pie = document.currentScript.dataset.top_ten_pie;
const top_ten = document.currentScript.dataset.top_ten;
const imp_data = JSON.parse(imp);
// debugger
Highcharts.stockChart('imp', {
    chart: {
        type: 'spline'
    },
    rangeSelector: {
        selected: 1
    },

    title: {
        text: ''
    },
    series: [{
        name: 'IMP',
        data: imp_data,
        tooltip: {
            valueDecimals: 2
        }
    }]
});

const top_ten_pie_data = JSON.parse(top_ten_pie);

Highcharts.chart('top-ten-pie', {
    chart: {
        type: 'pie'
    },
    title: {
        text: ''
    },
    tooltip: {
        // valueSuffix: '%'
        valueSuffix: ' rate'
    },
    subtitle: {
        text:
            ''
    },
    plotOptions: {
        series: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: [{
                enabled: true,
                distance: 20
            }, {
                enabled: true,
                distance: -40,
                format: '{point.percentage:.1f}%',
                style: {
                    fontSize: '1.2em',
                    textOutline: 'none',
                    opacity: 0.7
                },
                filter: {
                    operator: '>',
                    property: 'percentage',
                    // property: 'value',
                    value: 10
                }
            }]
        }
    },
    series: [
        {
            name: 'Percentage',
            colorByPoint: true,
            data: top_ten_pie_data
            // data: [
            //     {
            //         name: 'Water',
            //         y: 55.02
            //     },
            //     {
            //         name: 'Fat',
            //         sliced: true,
            //         selected: true,
            //         y: 26.71
            //     },
            //     {
            //         name: 'Carbohydrates',
            //         y: 1.09
            //     },
            //     {
            //         name: 'Protein',
            //         y: 15.5
            //     },
            //     {
            //         name: 'Ash',
            //         y: 1.68
            //     }
            // ]
        }
    ]
});

const series = JSON.parse(top_ten);

Highcharts.stockChart('top-ten', {
    chart: {
        type: 'spline'
    },
    rangeSelector: {
        selected: 4
    },
    yAxis: {
        labels: {
            format: '{#if (gt value 0)}+{/if}{value}%'
        },
        plotLines: [{
            value: 0,
            width: 2,
            color: 'silver'
        }]
    },

    plotOptions: {
        series: {
            // compare: 'percent',
            compare: 'value',
            showInNavigator: true
        }
    },

    tooltip: {
        pointFormat: '<span style="color:{series.color}">' +
            '{series.name}</span>: <b>{point.y}</b> ' +
            '({point.change}%)<br/>',
        valueDecimals: 2,
        split: true
    },

    series
});
