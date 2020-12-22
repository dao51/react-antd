import React from 'react';  // 导入react
import { Menu } from 'antd';  // 导入菜单组件
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';  // 导入icon
import MenuConfig from './../../config/menuConfig';  // 导入菜单路由文件
import './index.less';

const { SubMenu } = Menu;

export default class NavLeft extends React.Component {
    render() {
        // var redWord = {
        //     color: 'red'
        // }
        // 还可在行内设置<div style={redWord}>
        return (
            <div style={{ color: 'red' }}>
                <div className="logo">
                    <img src="/assets/logo-ant.svg" alt="" />
                    <h1>IReact</h1>
                </div>
                <Menu
                    theme="dark"
                >
                    <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
                        <Menu.Item key="1">Option 1</Menu.Item>
                        <Menu.Item key="2">Option 2</Menu.Item>
                        <Menu.Item key="3">Option 3</Menu.Item>
                        <Menu.Item key="4">Option 4</Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        );
    }
}