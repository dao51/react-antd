import React from 'react';  // 导入react
import { Menu } from 'antd';  // 导入菜单组件
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';  // 导入icon
import MenuConfig from './../../config/menuConfig';  // 导入菜单路由文件
import './index.less';

const { SubMenu } = Menu;

export default class NavLeft extends React.Component {
    componentWillMount() { // 生命周期钩子函数：组件加载时只调用，以后组件更新不调用，整个生命周期只调用一次，此时可以修改state
        // React17删除componentWillMount、componentWillReceivePorps，componentWillUpdate，旧版本可用这些钩子函数
        const menuTreeNode = this.renderMenu(MenuConfig);

        this.setState({  // 设置虚拟Dom状态，必须使用其来修改数据，不可直接修改数据
            menuTreeNode
        })
    }


    // 菜单渲染
    renderMenu = (data) => {

    }

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
                    {/* 设置渲染数据 */}
                    { this.state.menuTreeNode }
                </Menu>
            </div>
        );
    }
}