import * as React from "react";
import { Link, Router, Route,Redirect} from 'react-router';
import {
    Form, Icon, Input, Button, Checkbox,
} from 'antd';

class Login extends React.Component{

    constructor(props){
        super(props)
        this.state={
            loginAuthenticated:false
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }
    //登录校验
    loginCheck=()=>{
        console.log("登录通过------------")
        this.setState({loginAuthenticated:true});
    }
    /*componentDidMount() {
        this.loginCheck();
    }*/

    render() {
        //const { from } = this.props.location.state || { from: { pathname: "/" } };
        const {loginAuthenticated}=this.state;
        //判断是否登录
        if(loginAuthenticated){
            return (<Redirect to="/home"/>);
        }
        // 未登录则提示登录
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item>
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(
                        <Checkbox>Remember me</Checkbox>
                    )}
                    <a className="login-form-forgot" href="">Forgot password</a>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                    Or <a href="">register now!</a>
                </Form.Item>
            </Form>
        );

    }

}
const LoginForm = Form.create({ name: 'normal_login' })(Login);
export default class LoginPage extends React.Component{
    render() {
        return(
            <LoginForm/>
        )
    }
}