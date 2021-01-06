import React from 'react';
import {Card, Table, Modal} from 'antd';
import axios from './../../axios/index'

export default class BasicTables extends React.Component{
    // 声明state，否则报错
    state = {
        dataSource: [],
        dataSource2: []
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

        this.request();
    }

    //动态获取mock数据
    request = () => {
        axios.ajax({
            url: '/table/list',
            data: {
                params: {
                    page: 1
                },
                isShowLoading: false
            }
        }).then((res) => {
            if(res.code == 0) {
                res.list.map((item, index) => {
                    item.key = index
                })
                this.setState({
                    dataSource2: res.result
                })
            }
        })
    }

    onRowClick = (record, index) => {
        let selectKey = [index];
        Modal.info({
            title: '信息',
            content: `用户名：${record.userName},用户爱好：${record.interest}`
        });
        this.setState({
            selectedRowKeys: selectKey,
            selectedItem: record
        })
    }

    render(){
        const columns = [
             {
                 title: 'id',   //表头标题
                 dataIndex: 'id' //数据源
             },
             {
                 title: '用户名',
                 dataIndex: 'userName'
             },
             {
                title: '性别',
                dataIndex: 'sex',
                render(sex){
                    return sex === 1 ? '男' : '女'
                }
             },
             {
                title: '状态',
                dataIndex: 'state',
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
                dataIndex: 'birthday'
             },
             {
                title: '地址',
                dataIndex: 'address'
             },
             {
                title: '早起时间',
                dataIndex: 'time'
             }       
        ]

        const selectedRowKeys = this.state.selectedRowKeys;
        const rowSelection = {
            type: 'radio',
            selectedRowKeys
        }

        return (
            <div>
                <Card title="基础表格">
                    <Table 
                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource}
                        pagination={false}
                    />
                </Card>
                <Card title="动态数据表格" style={{margin: '10px 0'}}>
                    <Table 
                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource2}
                        pagination={false}
                    />
                </Card>
                <Card title="Mock-单选" style={{margin: '10px 0'}}>
                    <Table 
                        bordered
                        rowSelection={rowSelection}
                        onRow={(record, index) => {
                            return {
                                onClick: () => { 
                                    this.onRowClick(record, index)
                                }  //点击行
                            }
                        }}
                        columns={columns}
                        dataSource={this.state.dataSource}
                        pagination={false}
                    />
                </Card>
            </div>
        )
    }
}