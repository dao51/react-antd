import React from 'react'  // 导入react
import { Row, Col } from 'antd';  // 导入菜单组件
import './index.less';
import Utils from './../../utils/utils';

export default class Header extends React.Component {
    constructor(props) {  // 构造函数
        super(props)   // 继承属性

        this.state = { // 初始数据
            userName: '',
            sysTime: '',
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
                        <span className="weather-detail">晴转多云</span>
                    </Col>
                </Row>
            </div>
        );
    }
}