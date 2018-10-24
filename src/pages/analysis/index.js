import React from 'react'
import {Button, Radio} from 'antd';
import echarts from 'echarts/lib/echarts'
import  'echarts/lib/chart/bar';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import './index.less'

class Analysis extends React.Component {

  state = {
    size: 'default',
    charts: ''
  };

  componentDidMount() {
    this.renderCharts();
    this.windowResize()

  }

  renderCharts = () => {
    let analysisChart = echarts.init(document.getElementById('analysis-charts'));
    analysisChart.setOption({
      title: {text: 'ECharts 入门示例'},
      tooltip: {},
      xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
      },
      yAxis: {},
      series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }]
    });
    this.setState({charts: analysisChart})
  };

  windowResize(){
    window.onresize = () => {
      let {charts} = this.state;
      charts && (charts.resize());
    }
  }

  handleSizeChange = (e) => {
    this.setState({size: e.target.value});
  };

  render() {
    const {size} = this.state;
    return (
        <div className="analysis-page">
          {/*<!-- 图表charts -->*/}
          <div className="chart-panel">
            <div className="btn-container clear">
              <Radio.Group value={size} onChange={this.handleSizeChange} className="right">
                <Radio.Button value="default">柱状图</Radio.Button>
                <Radio.Button value="small">折线图</Radio.Button>
              </Radio.Group>
            </div>
            <div className="charts-container">
              <div id="analysis-charts" className="charts"></div>
            </div>
          </div>
          {/*<!-- table -->*/}
          <div className="table-panel">

          </div>
        </div>
    )
  }
}


export default Analysis