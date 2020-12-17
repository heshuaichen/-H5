import React, { Component } from 'react'
import './login.css'
import { Flex } from 'antd-mobile';
import ReactSimpleVerify from 'react-simple-verify'
import 'react-simple-verify/dist/react-simple-verify.css';
import { Toast, WhiteSpace, WingBlank, Button } from 'antd-mobile';
export default class Login extends Component {
    constructor() {
        super();
        this.state = ({
            name: '',
            password: ''
        })
    }
    getPhone = (e) => {
        //校验手机号
        let value = document.getElementById('phone').value;
        this.setState({
            name: value
        })
    }
    //获取密码
    getPassword = () => {
        let pass = document.getElementById('pass').value;
        this.setState({
            password: pass
        })
    }
    goTo = () => {
        if (this.state.name.length !== 11) {
            Toast.info('手机格式不对!!!', 1);
        } else if (this.state.password.length <= 4) {
            Toast.info('密码不能低于4位!!!', 1);
        } else if (this.state.password.length > 8) {
            Toast.info('密码不能超过8位!!!', 1);
        } else if (this.state.isPass === false) {
            console.log('isPass', this.state.isPass)
            Toast.info('请先进行验证!!!', 1);
        } else {
            //校验通过，向服务器发送请求，检查账号和密码的正确性
            let url = "https://www.shuaishuaide.top:2004/login";
            fetch(url, {
                method: "POST",
                body: JSON.stringify({ name: this.state.name, password: this.state.password }),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => {
                return res.json();
            }).then(data => {
                console.log('data:', data);
                console.log(data.value);
                //对服务器返回的值进行判断
                //1，登录成功
                if (data.name) {
                    Toast.info('登录成功!!!', 1.5);
                    this.props.history.push('/content')

                } else if (data.value === '用户不存在') {
                    Toast.info('用户不存在!!!', 1.5);
                }else if(data.value  === '密码错误'){
                    Toast.info('密码错误!!!', 1.5);

                }
            }).catch(err => {
                console.error(err)
            })
        }
    }

    render() {
        return (
           
        <div className='wrap'>
          <div className='box'>
            <h1>幼儿保教后台管理系统</h1>
            <ul>
                <li>
                    <input type='number' placeholder="请输入用户名" id='phone' onChange={(e)=>this.getPhone(e)}/>
                </li>
                <li>
                    <input type='password' placeholder='请输入密码' id='pass' onChange={(e)=>this.getPassword(e)}/>
                </li>
                <li>
                    <button onClick={this.goTo}>登录</button>
                </li>
            </ul>
        </div>

     </div>
        )
    }
}
