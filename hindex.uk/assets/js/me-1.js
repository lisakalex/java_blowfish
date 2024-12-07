// const hyip_pie_da=document.currentScript.dataset.hyip_pie;
const hyip_rgaph_da = document.currentScript.dataset.hyip_rgaph;
debugger
// (async () => {

// const data = await fetch(
//     // 'https://demo-live-data.highcharts.com/aapl-c.json'
//     // 'http://hindex-local.uk/test/aapl-c.json'
// 'http://hindex-local.uk/test/large-dataset-1.json'
// ).then(response => response.json());
// Create the chart
// window.load(function () {
    // Animate loader off screen
//     $(".se-pre-con").fadeOut("slow");
// });

    Highcharts.stockChart('container', {
        rangeSelector: {
            selected: 1
        },

        title: {
            text: 'AAPL Stock Price huy'
        },

        series: [{
            name: 'AAPL',
            data: hyip_rgaph_da,
            tooltip: {
                valueDecimals: 2
            }
        }]
    });
// });
// })();
// const hyip_graph_total_da=document.currentScript.dataset.hyip_graph_total;
// debugger;
//hyip_pie xxxxxxxxxxxxxxxxxxxxxxxx
// Create root element
// https://www.amcharts.com/docs/v5/getting-started/#Root_element
// var root = am5.Root.new("chartdiv-pie");
//
// // Set themes
// // https://www.amcharts.com/docs/v5/concepts/themes/
// root.setThemes([
//     am5themes_Animated.new(root)
// ]);
//
// // Create chart
// // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/
// var chart = root.container.children.push(
//     am5percent.PieChart.new(root, {
//         endAngle: 270
//     })
// );
//
// // Create series
// // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Series
// var series = chart.series.push(
//     am5percent.PieSeries.new(root, {
//         valueField: "value",
//         categoryField: "category",
//         endAngle: 270
//     })
// );
//
// series.states.create("hidden", {
//     endAngle: -90
// });
//
// // Set data
// // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Setting_data
// series.data.setAll(JSON.parse(hyip_pie_da)
// );
//
// series.appear(1000, 100);

//hyip_rgaph xxxxxxxxxxxxxxxxxxxxxxxx

// var this_js_script = $('script[src*=me]');
// Themes begin
// am4core.useTheme(am4themes_animated);
// // Themes end
//
// // Create chart instance
// var chart = am4core.create("chartdiv", am4charts.XYChart);
//
// // Add data
// // chart.data = JSON.parse('<?= $hyip_rgaph ?>');
// // debugger;
// chart.data = JSON.parse(hyip_rgaph_da);
//
// // Set input format for the dates
// chart.dateFormatter.inputDateFormat = "yyyy-MM-dd";
//
// // Create axes
// var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
// var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
//
// // Create series
// var series = chart.series.push(new am4charts.LineSeries());
// series.dataFields.valueY = "value";
// series.dataFields.dateX = "date";
// series.tooltipText = "{value}"
// series.strokeWidth = 2;
// series.minBulletDistance = 15;
//
// // Drop-shaped tooltips
// series.tooltip.background.cornerRadius = 20;
// series.tooltip.background.strokeOpacity = 0;
// series.tooltip.pointerOrientation = "vertical";
// series.tooltip.label.minWidth = 40;
// series.tooltip.label.minHeight = 40;
// series.tooltip.label.textAlign = "middle";
// series.tooltip.label.textValign = "middle";
//
// // Make bullets grow on hover
// var bullet = series.bullets.push(new am4charts.CircleBullet());
// bullet.circle.strokeWidth = 2;
// bullet.circle.radius = 4;
// bullet.circle.fill = am4core.color("#fff");
//
// var bullethover = bullet.states.create("hover");
// bullethover.properties.scale = 1.3;
//
// // Make a panning cursor
// chart.cursor = new am4charts.XYCursor();
// chart.cursor.behavior = "panXY";
// chart.cursor.xAxis = dateAxis;
// chart.cursor.snapToSeries = series;
//
// // Create vertical scrollbar and place it before the value axis
// //                     chart.scrollbarY = new am4core.Scrollbar();
// //                     chart.scrollbarY.parent = chart.leftAxesContainer;
// //                     chart.scrollbarY.toBack();
//
// // Create a horizontal scrollbar with previe and place it underneath the date axis
// chart.scrollbarX = new am4charts.XYChartScrollbar();
// chart.scrollbarX.series.push(series);
// chart.scrollbarX.parent = chart.bottomAxesContainer;
//
// dateAxis.start = 0.79;
// dateAxis.keepSelection = true;
//
// // chart total xxxxxxxxxxxxxxxxxxxxxxxx
// // Create root element
// // https://www.amcharts.com/docs/v5/getting-started/#Root_element
// var root = am5.Root.new("chartdiv-total");
//
//
// // Set themes
// // https://www.amcharts.com/docs/v5/concepts/themes/
// root.setThemes([
//     am5themes_Animated.new(root)
// ]);
//
// // debugger;
// // Create chart
// // https://www.amcharts.com/docs/v5/charts/xy-chart/
// var chart1 = root.container.children.push(am5xy.XYChart.new(root, {
//     panX: true,
//     panY: true,
//     wheelX: "panX",
//     wheelY: "zoomX",
//     maxTooltipDistance: 0,
//     pinchZoomX: true
//     // chart.dateFormatter.inputDateFormat = "yyyy-MM-dd";
// }));
//
// // chart.dateFormatter.inputDateFormat = "yyyy-MM-dd";
// // var date = new Date();
// // date.setHours(0, 0, 0, 0);
// // var value = 100;
//
// // function generateData() {
// //     value = Math.round((Math.random() * 10 - 4.2) + value);
// //     am5.time.add(date, "day", 1);
// //     // debugger;
// //     return {
// //         date: date.getTime(),
// //         value: value
// //     };
// //
// // }
// //
// // function generateDatas(count) {
// //     // var data = [];
// //     for (var i = 0; i < count; ++i) {
// //         data.push(generateData());
// //         // debugger;
// //     }
// //     return data;
// // }
//
// // var data = [];
// // data.push([
// //     {
// //         "date": 1677456000000,
// //         "value": -2
// //     },
// //     {
// //         "date": 1677542400000,
// //         "value": 3.json
// //     },
// //     {
// //         "date": 1677628800000,
// //         "value": 8
// //     },
// //     {
// //         "date": 1677715200000,
// //         "value": 6
// //     }
// // ]);
// // data.push([
// //     {
// //         "date": 1677456000000,
// //         "value": -3.json
// //     },
// //     {
// //         "date": 1677542400000,
// //         "value": 5
// //     },
// //     {
// //         "date": 1677628800000,
// //         "value": 6
// //     },
// //     {
// //         "date": 1677715200000,
// //         "value": 9
// //     }
// // ]);
// var data = [];
// data = JSON.parse(hyip_graph_total_da)
//
//
// //debugger;
//
//
// // Create axes
// // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
// var xAxis = chart1.xAxes.push(am5xy.DateAxis.new(root, {
//     maxDeviation: 0.2,
//     baseInterval: {
//         timeUnit: "day",
//         count: 1
//     },
//     renderer: am5xy.AxisRendererX.new(root, {}),
//     tooltip: am5.Tooltip.new(root, {})
// }));
//
// var yAxis = chart1.yAxes.push(am5xy.ValueAxis.new(root, {
//     renderer: am5xy.AxisRendererY.new(root, {})
// }));
//
//
// // debugger;
// // Add series
// // https://www.amcharts.com/docs/v5/charts/xy-chart/series/loadavg
// for (let i = 0; i < data.length; i++) {
//     // debugger;
//     var series = chart1.series.push(am5xy.LineSeries.new(root, {
//         name: data[i][0]["hyip"],
//         xAxis: xAxis,
//         yAxis: yAxis,
//         valueYField: "value",
//         valueXField: "date",
//         legendValueText: "{valueY}",
//         tooltip: am5.Tooltip.new(root, {
//             pointerOrientation: "horizontal",
//             labelText: "{valueY}"
//         })
//     }));
//     // debugger;
//     // date = new Date();
//     // date.setHours(0, 0, 0, 0);
//     // value = 0;
//     // var data = generateDatas(100);
//     // series.data.setAll(data);
//
//     date = data[i][0]["date"];
//     // date.setHours(0, 0, 0, 0);
//     value = data[i][0]['value'];
//     series.data.setAll(data[i]);
//
//     // Make stuff animate on load
//     // https://www.amcharts.com/docs/v5/concepts/animations/
//     series.appear();
//     // debugger;
// }
//
// // for (let i = 0; i < da.length; i++)
// //     console.log(i + ". " + da[i]);
// //
// // document.getElementById("demo").innerHTML = da.toString();
//
// // Add cursor
// // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
// var cursor = chart1.set("cursor", am5xy.XYCursor.new(root, {
//     behavior: "none"
// }));
// cursor.lineY.set("visible", false);
//
//
// // Add scrollbar
// // https://www.amcharts.com/docs/v5/charts/xy-chart/scrollbars/
// chart1.set("scrollbarX", am5.Scrollbar.new(root, {
//     orientation: "horizontal"
// }));
//
// // chart.set("scrollbarY", am5.Scrollbar.new(root, {
// //     orientation: "vertical"
// // }));
//
//
// // Add legend
// // https://www.amcharts.com/docs/v5/charts/xy-chart/legend-xy-series/
// var legend = chart1.rightAxesContainer.children.push(am5.Legend.new(root, {
//     width: 200,
//     paddingLeft: 15,
//     height: am5.percent(100)
// }));
//
// // When legend item container is hovered, dim all the series except the hovered one
// legend.itemContainers.template.events.on("pointerover", function (e) {
//     var itemContainer = e.target;
//
//     // As series list is data of a legend, dataContext is series
//     var series = itemContainer.dataItem.dataContext;
//
//     chart1.series.each(function (chartSeries) {
//         if (chartSeries !== series) {
//             chartSeries.strokes.template.setAll({
//                 strokeOpacity: 0.15,
//                 stroke: am5.color(0x000000)
//             });
//         } else {
//             chartSeries.strokes.template.setAll({
//                 strokeWidth: 3
//             });
//         }
//     })
// })
//
// // When legend item container is unhovered, make all series as they are
// legend.itemContainers.template.events.on("pointerout", function (e) {
//     var itemContainer = e.target;
//     var series = itemContainer.dataItem.dataContext;
//
//     chart1.series.each(function (chartSeries) {
//         chartSeries.strokes.template.setAll({
//             strokeOpacity: 1,
//             strokeWidth: 1,
//             stroke: chartSeries.get("fill")
//         });
//     });
// })
//
// legend.itemContainers.template.set("width", am5.p100);
// legend.valueLabels.template.setAll({
//     width: am5.p100,
//     textAlign: "right"
// });
//
// // It's is important to set legend data after all the events are set on template, otherwise events won't be copied
// legend.data.setAll(chart1.series.values);
//
//
// // Make stuff animate on load
// // https://www.amcharts.com/docs/v5/concepts/animations/
// chart1.appear(1000, 100);
