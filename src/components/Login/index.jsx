import React from 'react'
import "./Login.css"
import { Form, Input, Button } from 'antd';


const Login = () => {

    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };

    const tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
        
    };

    return (
        
        <div className="Login">
            <div className="login-form">
                <h2>Введите Ваш логин и пароль</h2>
                <Form

                    {...layout}
                    name="basic"
                    initialValues={{ remember: true }}
                >
                    <Form.Item
                        label="Email"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <div >
                        <Form.Item {...tailLayout} className="third-block">
                            <Button style={{backgroundColor: "rgb(154, 87, 202)", border: "none", marginRight: "10px"}} type="primary" htmlType="submit" className="btn">
                                Вход
                            </Button>
                            <a className="forget-password" href="#">Забыли пароль</a>
                        </Form.Item>
                    </div>
                </Form>
            </div>
        </div>
    )
}
export default Login