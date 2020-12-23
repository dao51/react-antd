import React from 'react';  // 导入react
import { Row, Col } from 'antd';  // 导入菜单组件
import './index.less';
import Utils from './../../utils/utils';
import axios from '../../axios';

export default class Header extends React.Component {
    constructor(props) {  // 构造函数
        super(props)   // 继承属性

        this.state = { // 初始数据
            userName: '',
            sysTime: '',
            dayPictureUrl: '',
            weather: '',
        }
    }

    componentDidMount() { 
        this.setState({  
            userName: 'Alvin',
        })

        setInterval(() => {
            let sysTime = Utils.formatDate(new Date().getTime());
            this.setState({  
                sysTime: sysTime,
            })
        }, 1000);
        // this.getWeatherAPIDate();  // 百度天气api变更后，原有功能无法使用
    }
    // 获取天气API数据
    getWeatherAPIDate() {
        let city = encodeURIComponent('上海');
        axios.jsonp({
            url: 'http://api.map.baidu.com/telematics/v3/weather?location='+city+'&output=json&ak=3p49MVra6urFRGOT9s8UBWr2'
        }).then((res) => {
            if(res.status === 'success'){
                let data = res.result[0].weather_data[0];
                console.log('weather', data)
                this.setState({
                    dayPictureUrl:data.dayPictureUrl,
                    weather:data.weather
                })
            } 
        })
    }

    render() {
        return (
            <div className="header">
                <Row className="header-top">
                    <Col span="24">
                        <span>欢迎{this.state.userName}</span>
                        <a href="#">退出</a>
                    </Col>
                </Row>
                <Row className="breadcrumb">
                    <Col span="4" className="breadcrumb-title">
                        首页
                    </Col>
                    <Col span="20" className="weather">
                        <span className="date">{this.state.sysTime}</span>
                        <span className="weather-img">
                            <img src={this.state.dayPictureUrl} alt="" />
                        </span>
                        <span className="weather-detail">{this.state.weather}</span>
                    </Col>
                </Row>
            </div>
        );
    }
}