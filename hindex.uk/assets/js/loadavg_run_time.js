const hyip_graph_total_da=document.currentScript.dataset.hyip_graph_total;
var root = am5.Root.new("chartdiv-total");
root.setThemes([
    am5themes_Animated.new(root)
]);

var chart1 = root.container.children.push(am5xy.XYChart.new(root, {
    panX: true,
    panY: true,
    wheelX: "panX",
    wheelY: "zoomX",
    maxTooltipDistance: 0,
    pinchZoomX: true
    // chart.dateFormatter.inputDateFormat = "yyyy-MM-dd";
}));

var data = [];
data = JSON.parse(hyip_graph_total_da)

var xAxis = chart1.xAxes.push(am5xy.DateAxis.new(root, {
    maxDeviation: 0.2,
    baseInterval: {
        // timeUnit: "hour",
        timeUnit: "minute",
        count: 1
    },
    renderer: am5xy.AxisRendererX.new(root, {}),
    tooltip: am5.Tooltip.new(root, {})
}));

var yAxis = chart1.yAxes.push(am5xy.ValueAxis.new(root, {
    renderer: am5xy.AxisRendererY.new(root, {})
}));

for (let i = 0; i < data.length; i++) {
    // debugger;
    var series = chart1.series.push(am5xy.LineSeries.new(root, {
        name: data[i][0]["hyip"],
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value",
        valueXField: "date",
        legendValueText: "{valueY}",
        tooltip: am5.Tooltip.new(root, {
            pointerOrientation: "horizontal",
            labelText: "{valueY}"
        })
    }));

    date = data[i][0]["date"];
    value = data[i][0]['value'];
    series.data.setAll(data[i]);
    series.appear();
}

var cursor = chart1.set("cursor", am5xy.XYCursor.new(root, {
    behavior: "none"
}));
cursor.lineY.set("visible", false);
chart1.set("scrollbarX", am5.Scrollbar.new(root, {
    orientation: "horizontal"
}));

var legend = chart1.rightAxesContainer.children.push(am5.Legend.new(root, {
    width: 200,
    paddingLeft: 15,
    height: am5.percent(100)
}));

legend.itemContainers.template.events.on("pointerover", function (e) {
    var itemContainer = e.target;

    // As series list is data of a legend, dataContext is series
    var series = itemContainer.dataItem.dataContext;

    chart1.series.each(function (chartSeries) {
        if (chartSeries !== series) {
            chartSeries.strokes.template.setAll({
                strokeOpacity: 0.15,
                stroke: am5.color(0x000000)
            });
        } else {
            chartSeries.strokes.template.setAll({
                strokeWidth: 3
            });
        }
    })
})

legend.itemContainers.template.events.on("pointerout", function (e) {
    var itemContainer = e.target;
    var series = itemContainer.dataItem.dataContext;

    chart1.series.each(function (chartSeries) {
        chartSeries.strokes.template.setAll({
            strokeOpacity: 1,
            strokeWidth: 1,
            stroke: chartSeries.get("fill")
        });
    });
})

legend.itemContainers.template.set("width", am5.p100);
legend.valueLabels.template.setAll({
    width: am5.p100,
    textAlign: "right"
});

legend.data.setAll(chart1.series.values);
chart1.appear(1000, 100);
