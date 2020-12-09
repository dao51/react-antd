import React from 'react'  // 导入react
import {Row, Col} from 'antd'
import Header from './components/Header'
import Footer from './components/Footer'
import NavLeft from './components/NavLeft'

export default class Admin extends React.Component {  // 导出继承react组件的对象Admin
    render() { // react生命周期方法
        return (  // return 根节点 有且只有一个
            <div>
                <Row>
                    <Col span="3">
                        <NavLeft></NavLeft>
                    </Col>
                    <Col span="21">
                        <Header>
                        </Header>
                        <Row>content</Row>
                        <Footer>
                        </Footer>
                    </Col>
                </Row>
            </div>
        );
    }
}