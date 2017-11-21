/**
 * Created by HUCC on 2017/11/21.
 */
$(function () {
    //柱形图
    var myChart = echarts.init(document.querySelector(".pic_left"));
    // 指定图表的配置项和数据
    var option = {
      title: {
        text: '2017提莫惨死次数'
      },
      tooltip: {},
      legend: {
        data:['死亡次数']
      },
      xAxis: {
        data: ["1月","2月","3月","4月","5月","6月"]
      },
      yAxis: {},
      series: [{
        name: '死亡次数',
        type: 'bar',
        data: [4000, 2000, 5036, 9501, 8002, 7001]
      }]
    };
    myChart.setOption(option);


    // 
  
  
    var myChart1 = echarts.init(document.querySelector(".pic_right"));
    option1 = {
        title : {
            text: '2017提莫惨死',
            subtext: '纯属虚构',
            x:'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['璐璐击杀','李青击杀','盖伦击杀','瑞雯击杀','亚索击杀']
        },
        series : [
            {
                name: '访问来源',
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                    {value:335, name:'璐璐击杀'},
                    {value:310, name:'李青击杀'},
                    {value:234, name:'盖伦击杀'},
                    {value:135, name:'瑞雯击杀'},
                    {value:1548, name:'亚索击杀'}
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
    
    myChart1.setOption(option1);
  
  });