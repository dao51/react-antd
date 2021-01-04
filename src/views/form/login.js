import React from 'react'
import {Card, Form, Input, Button, message, Checkbox} from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons';

export default class FormLogin extends React.Component{
    render(){
        return (
            <div>
                <Card title="登录行内表单">
                    <InlineForm/>
                </Card>
                <Card title="登录水平表单" style={{marginTop:10}}>
                    <DefaultForm/>
                </Card>
            </div>
        )
    }
}

const InlineForm = () => {
    return (
        <Form layout="inline">
            <Form.Item>
                <Input placeholder="请输入用户名"/>
            </Form.Item>
            <Form.Item>
                <Input placeholder="请输入密码"/>
            </Form.Item>
            <Form.Item>
                <Button type="primary">登录</Button>
            </Form.Item>
        </Form>
    );
  };

  const DefaultForm = () => {
    // 表单校验，v3版本需要通过监听 onSubmit 事件手工触发 validateFields。v4版直接使用 onFinish 事件，该事件仅当校验通过后才会执行
    const onFinish = values => {
        console.log('表单数据: ', values);
        message.success(`${values.userName} 恭喜你，您通过本次表单组件学习，当前密码为：${values.userPwd}`)
    }

    return (
        <Form layout="horizontal" style={{width:300}} initialValues={{remember: true,}} onFinish={onFinish}>
            <Form.Item 
                name='userName'
                initialValue='Elena'
                rules={
                    [
                        {
                            required: true,
                            message:'用户名不能为空'
                        },
                        {
                            min:5, max:10,
                            message: '长度不在范围内'
                        },
                        {
                            pattern: new RegExp('^\\w+$','g'),
                            message: '用户名必须为字母或数字'
                        }
                    ]
                }
            > 
                <Input prefix={<UserOutlined/>} placeholder="请输入用户名"/> 
            </Form.Item>
            <Form.Item
                name="userPwd"
                initialValue="123456"
                rules={
                    [
                        {
                            required: true,
                            message:'密码不能为空'
                        },
                        {
                            min:6, max:8,
                            message: '长度不在范围内'
                        }
                    ]
                }
            >
                <Input prefix={<LockOutlined/>} type="password" placeholder="请输入密码"/>
            </Form.Item>
            <Form.Item 
                name="remember"
                valuePropName="checked"
            >
                <Checkbox>记住密码</Checkbox>
                <a href="#" style={{float:'right'}}>忘记密码</a>
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">登录</Button>
            </Form.Item>
        </Form>
    );
  };