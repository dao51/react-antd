import React from 'react'
import {Card, Table, Modal, Button, message, Badge} from 'antd'
import axios from '../../axios/index'

export default class HighTables extends React.Component{
    state = {
        dataSource: []
    }  
    params = {
        page: 1
    }
    componentDidMount(){
        const dataSource = [   //数据源
            {
                id: '0',
                userName: 'Elena',
                sex: '1',
                state: '1',
                interest: '1',
                birthday: '2019-01-01',
                address: '西虹市海淀区桃花公园',
                time: '07:00'
            },
            {
                id: '1',
                userName: 'Mary',
                sex: '1',
                state: '2',
                interest: '3',
                birthday: '2019-01-01',
                address: '西虹市海淀区桃花公园',
                time: '07:00'
            },
            {
                id: '2',
                userName: 'Tom',
                sex: '2',
                state: '3',
                interest: '4',
                birthday: '2019-01-01',
                address: '西虹市海淀区桃花公园',
                time: '07:00'
            }
        ]
        dataSource.map((item, index) => {
            item.key = index;
        })
        this.setState({
            dataSource
        })
        // this.request();
    }
    //动态获取mock数据
    request = () => {
        // let _this = this;
        axios.ajax({
            url: '/table/list',
            data:{
                params:{
                    page: this.params.page
                },
                isShowLoading: false
            }
        }).then((res) => {
            if(res.code === 0){
            res.list.map((item, index) => {
                item.key = index
            })
            this.setState({
                dataSource: res.list
            })
            }
        })
    } 


    render(){
        const columns = [
                {
                    title: 'id',   //表头标题
                    key: 'id',
                    width: 80,
                    dataIndex: 'id' //数据源
                },
                {
                    title: '用户名',
                    key: 'userName',
                    width: 80,
                    dataIndex: 'userName'
                },
                {
                    title: '性别',
                    dataIndex: 'sex',
                    key: 'sex',
                    width: 80,
                    render(sex){
                        return sex === 1 ? '男' : '女'
                    }
                },
                {
                    title: '状态',
                    dataIndex: 'state',
                    key: 'state',
                    width: 80,
                    render(state){
                        let config = {
                            '1': '咸鱼一条',
                            '2': '人民公仆',
                            '3': '医院护士',
                            '4': '科技公司FE',
                            '5': '创业者'
                        }
                        return config[state]
                    }
                },
                {
                    title: '爱好',
                    dataIndex: 'interest',
                    key: 'interest',
                    width: 80,
                    render(abc){
                        let config = {
                            '1': '游泳',
                            '2': '打篮球',
                            '3': '踢足球',
                            '4': '跑步',
                            '5': '爬山',
                            '6': '骑行',
                            '7': '桌球',
                            '8': '麦霸'
                        }
                        return config[abc]
                    }
                },
                {
                    title: '生日',
                    dataIndex: 'birthday',
                    key: 'birthday',
                    width: 120,
                },
                {
                    title: '地址',
                    dataIndex: 'address',
                    key: 'address',
                    width: 120,
                },
                {
                    title: '早起时间',
                    dataIndex: 'time',
                    key: 'time',
                    width: 80
                }       
       ]
        const columns2 = [
                {
                    title: 'id',   //表头标题
                    key: 'id',
                    width: 80,
                    fixed: 'left',
                    dataIndex: 'id' //数据源
                },
                {
                    title: '用户名',
                    key: 'userName',
                    width: 80,
                    fixed: 'left',
                    dataIndex: 'userName'
                },
                {
                    title: '性别',
                    dataIndex: 'sex',
                    key: 'sex',
                    width: 80,
                    render(sex){
                        return sex === 1 ? '男' : '女'
                    }
                },
                {
                    title: '状态',
                    dataIndex: 'state',
                    key: 'state',
                    width: 80,
                    render(state){
                        let config = {
                            '1': '咸鱼一条',
                            '2': '人民公仆',
                            '3': '医院护士',
                            '4': '科技公司FE',
                            '5': '创业者'
                        }
                        return config[state]
                    }
                },
                {
                    title: '爱好',
                    dataIndex: 'interest',
                    key: 'interest',
                    width: 80,
                    render(abc){
                        let config = {
                            '1': '游泳',
                            '2': '打篮球',
                            '3': '踢足球',
                            '4': '跑步',
                            '5': '爬山',
                            '6': '骑行',
                            '7': '桌球',
                            '8': '麦霸'
                        }
                        return config[abc]
                    }
                },
                {
                    title: '生日',
                    dataIndex: 'birthday',
                    key: 'birthday',
                    width: 120,
                },
                {
                    title: '地址',
                    dataIndex: 'address',
                    key: 'address',
                    width: 120,
                },
                {
                    title: '早起时间',
                    dataIndex: 'time',
                    key: 'time',
                    width: 120
                }, {
                    title: '生日',
                    dataIndex: 'birthday',
                    key: 'birthday2',
                    width: 120,
                },
                {
                    title: '地址',
                    dataIndex: 'address',
                    key: 'address2',
                    width: 120,
                },
                {
                    title: '早起时间',
                    dataIndex: 'time',
                    key: 'time2',
                    width: 120
                }             
        ] 
       return (
         <div>
             <Card title="头部固定">
                <Table 
                    bordered
                    columns={columns}
                    dataSource={this.state.dataSource}
                    pagination={false}
                    scroll={{y: 240}}
                />
             </Card>
             <Card title="左侧固定" style={{margin: '10px 0'}}>
                <Table 
                    bordered
                    columns={columns2}
                    dataSource={this.state.dataSource}
                    pagination={false}
                    scroll={{x: 1130}}
                />
             </Card>
         </div>  
       )
   }
}