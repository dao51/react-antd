import React from 'react'
import moment from 'moment'
import {Card,Form,Input,Button,Checkbox,Radio,InputNumber,Select,Switch,DatePicker,TimePicker,Upload,message} from 'antd'
import { UploadOutlined } from '@ant-design/icons';

const FormItem = Form.Item
const RadioGroup = Radio.Group
const Option = Select.Option;
const TextArea = Input.TextArea

export default class FormRegister extends React.Component {
    
    render(){
        return (
            <div>
                <Card title="注册表单">
                    <RegisterForm/>
                </Card>
            </div>
        )
    }
}

const RegisterForm = () => {
    const [form] = Form.useForm();

    const onFinish = values => {
        message.success(`${values.userName} 恭喜你，您通过本次表单组件学习，当前密码为：${values.userPwd}`)
    }
   
    const normFile = (e) => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
          return e;
        }
        return e && e.fileList;
      };
    const formItemLayout = {
        labelCol: {
            xs: 24,
            sm: 4
        },
        wrapperCol: {
            xs: 24,
            sm: 12
        }
    }
    const offsetLayout = {
        wrapperCol: {
            xs: 24,
            sm: {
                span:12, 
                offset:4
            }
        }
    }
    const rowObject = {
        minRows: 4, 
        maxRows: 6   
    }

    return (
        <Form 
            form={form}
            layout="horizontal"
            onFinish={onFinish}
        >
            <FormItem 
                label="用户名"
                name="userName"
                {...formItemLayout}
                initialValue="Elena"
                rules={[
                    {
                        required: true,
                        message:'用户名不能为空'
                    }
                ]}
            >
                <Input placeholder="请输入用户名"/>
            </FormItem>
            <FormItem 
                label="密码"
                name="userPwd"
                {...formItemLayout}
                initialValue="123456"
                rules={[
                    {
                        required: true,
                        message:'密码不能为空'
                    }
                ]}
            >
                <Input type="password" placeholder="请输入密码"/>
            </FormItem>
            <FormItem 
                label="性别"
                name="sex"
                {...formItemLayout}
                initialValue="1"
            >
                <RadioGroup>
                    <Radio value="1">女</Radio>
                    <Radio value="2">男</Radio>
                </RadioGroup>
            </FormItem>
            <FormItem 
                label="年龄"
                name="age"
                {...formItemLayout}
                initialValue="18"
            >
                <InputNumber />
            </FormItem>
            <FormItem 
                label="当前状态"
                name="state"
                {...formItemLayout}
                initialValue="1"
            >
                <Select>
                    <Option value="1">咸鱼一条</Option>
                    <Option value="2">人民公仆</Option>
                    <Option value="3">浙传才女一枚</Option>
                    <Option value="4">科技公司FE</Option>
                    <Option value="5">创业者</Option>
                </Select>
            </FormItem>
            <FormItem 
                label="爱好"
                name="states"
                {...formItemLayout}
                initialValue={['1','3','5']}
            >
                <Select mode="multiple">
                    <Option value="1">旅行</Option>
                    <Option value="2">读书</Option>
                    <Option value="3">剪辑</Option>
                    <Option value="4">拍照</Option>
                    <Option value="5">看电影</Option>
                </Select>
            </FormItem>
            <FormItem 
                label="是否已婚"
                name="isMarried"
                {...formItemLayout}
                valuePropName="checked"
                initialValue="true"
            >
                <Switch />
            </FormItem>
            <FormItem 
                label="生日"
                name="birthday"
                {...formItemLayout}
                initialValue={moment('2019-1-1 11:14:59')}
            >
                <DatePicker 
                    showTime
                    format="YYYY-MM-DD HH:mm:ss"
                />
            </FormItem>
            <FormItem 
                label="联系地址"
                name="address"
                {...formItemLayout}
                initialValue="西虹市海淀区桃花公园"
            >
                <TextArea 
                    autosize={rowObject}
                />
            </FormItem>
            <FormItem 
                label="早起时间"
                name="time"
                {...formItemLayout}
            >
                <TimePicker />
            </FormItem>
            <FormItem 
                label="头像"
                name="userImg"
                {...formItemLayout}
                getValueFromEvent={normFile}
                extra="点击上传按钮进行上传"
            >
                <Upload
                    listType="picture"
                    action="//jsonplaceholder.typicode.com/posts/"
                >
                    <Button icon={<UploadOutlined />}>上传</Button>
                </Upload>
            </FormItem>
            <FormItem 
                name="remember"
                {...offsetLayout}
            >
                <Checkbox>我已阅读过<a href="#">慕课协议</a></Checkbox>
            </FormItem>
            <FormItem {...offsetLayout}>
                    <Button type="primary" htmlType="submit">提交</Button>
                    <Button style={{marginLeft:10}} onClick={() => {form.resetFields()}}>重置</Button>
            </FormItem>
        </Form>
    );
}