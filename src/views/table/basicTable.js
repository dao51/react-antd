import React from 'react';
import {Card, Table} from 'antd';

export default class BasicTables extends React.Component{
    // 声明state，否则报错
    state = {
        dataSource: []
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
        this.setState({
            dataSource
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
             },
             {
                title: '状态',
                dataIndex: 'state',
             },
             {
                title: '爱好',
                dataIndex: 'interest',
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
            </div>
        )
    }
}