document.write("<script language=javascript src='js/echarts.min.js'></script>");

var lineOption = function (options) {
    return {
        xAxis: {
            data: options.dataAxis,
            boundaryGap: false,
            axisLabel: {//坐标轴刻度标签
                interval: 0,
                textStyle: {
                    color: '#000',
                    fontSize: 10
                }
            },
            axisTick: {//坐标轴刻度
                show: true,
                alignWithLabel: true
            },
            axisLine: {//坐标轴轴线
                show: true
            },
            type: "category"
        },
        yAxis: {
            show: true,
            type: 'value',
            data: options.data,
            axisTick: {
                show: true,
                alignWithLabel: true
            },
            axisLine: {
                show: true,
                onZero: true
            },
            axisLabel: {
                textStyle: {
                    color: '#999'
                }
            }
        },
        series: [
            {
                type: 'line',
                symbol: 'circle',
                symbolSize: 5,
                markPoint: {
                    silent: true,
                    symbol: "circle",
                    symbolSize: 5
                },
                itemStyle: {
                    normal: {
                        color: 'white'
                    }
                },
                lineStyle: {
                    normal: {
                        color: '#27aed5',
                        width: 1.5
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {offset: 0, color: 'rgba(39,174,213,1)'},
                            {offset: 1, color: 'rgba(39,174,213,0)'}
                        ])
                    }
                }
            }
        ]
    };
};


var barOption = function (options) {
    return {
        show: true,
        grid: {
            top: '10%',
            bottom: '10%',
            right: '10'
        },
//        dataZoom: {
//            type: 'inside',
//            filterMode: 'none'
//        },
        xAxis: {
            data: options.dataAxis,
            axisLabel: {//坐标轴刻度标签
                interval: 0,
                textStyle: {
                    color: '#000',
                    fontSize: 10
                }
            },
            axisTick: {//坐标轴刻度
                show: false
            },
            axisLine: {//坐标轴轴线
                show: true
            },
            type: 'category'
        },
        yAxis: {
            show: true,
            max:100,
            min:0,
            position: 'left',
            axisTick: {
                show: true
            },
            axisLine: {
                show: true
            },
            axisLabel: {
                interval: 0,
                textStyle: {
                    color: '#000',
                    fontSize: 10
                }
            },
            type: 'value'
        },
        series: [
            {
                type: 'bar',
                barWidth: 10,
                label: {
                   normal: {
                             show: true,
                             position: 'top',
                             distance: 5,
                             color: '#000000',
                             fontSize: 10
                                       }
                },
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {offset: 0, color: 'rgba(14,168,170,1)'},
                            {offset: 1, color: 'rgba(14,168,170,0)'}
                        ])
                    }
                },
                data: options.data
            }
        ]
    };
};


var gaugeOption = function (options) {

    return {
        tooltip: {
            formatter: "{a} <br/>{b} : {c}%"
        },
        toolbox: {
            feature: {
                restore: {},
                saveAsImage: {}
            }
        },
        series: [
            {
                name: '驾驶行为分析',
                type: 'gauge',
                detail: {formatter: '{value}%'},
                data: [{value: options.data, name: '分析得分'}]
            }
        ]
    };


};

function initChart(ids, option) {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(ids);
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    return myChart;
}

function updateChart(chart, option) {
    chart.setOption(option);
}

