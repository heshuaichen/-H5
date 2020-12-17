import { getAllByPlaceholderText } from '@testing-library/react';
import React, { Component } from 'react'
import { Flex } from 'antd-mobile';
import '../css/login.css';
import { connect } from 'react-redux';
import { Toast, WhiteSpace, WingBlank, Button } from 'antd-mobile';
class Login extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            password: '',
        }
    }
    //手机号码验证
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

    login = () => {
        //校验手机号和密码的合理性
        if (this.state.name.length !== 11) {
            Toast.info('手机格式不对!!!', 1);
        }
        if (this.state.password.length <= 4) {
            Toast.info('密码不能低于4位!!!', 1);
        }
        if (this.state.password.length > 8) {
            Toast.info('密码不能超过8位!!!', 1);
        }
        //校验通过，向服务器发送请求，检查账号和密码的正确性
        let url = "https://www.shuaishuaide.top:2004/login";
        fetch(url, {
            method: "POST",
            body: JSON.stringify({ name: this.state.name, password: this.state.password }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            return res.text();
        }).then(data => {
            //对服务器返回的值进行判断
            //1，登录成功
            let obj = JSON.parse(data);
            console.log('obj:', obj);
            if (obj.id) {
                //登录成功的话 ,用dispatch方法 对userinfo进行更改
                Toast.loading('Loading...', 2, () => {
                    Toast.success('登录成功!!!', 1);
                    //存储后台返回的登录用户的详细信息
                    this.props.dispatch({
                        type: 'ADD_MSG',
                        obj: obj
                    })
                    this.props.history.goBack();
                })


            } else if (obj.value === '用户不存在') {
                Toast.fail('用户名不存在!!!', 1);
            } else if (obj.value === '密码错误') {
                Toast.fail('密码错误!!!', 1);

            }
        }).catch(err => {
            console.error(err)
        })



    }
    render() {
        return (
            <div className='login' style={{ width: '100%' }}>
                <Flex style={{ width: '16rem', margin: '0 auto' }}>
                    <svg className="login-header-icon1" aria-hidden="true" onClick={() => this.props.history.push('/mypage')}>
                        <use xlinkHref="#icon-fanhui1"></use>
                    </svg></Flex>
                <Flex className='lg-header'>

                    <Flex style={{ width: '100%', height: '10rem' }}>
                        <img src={require('./image/logo.png')} />
                    </Flex>
                    <Flex.Item className='lg-header-p'>保教服务平台</Flex.Item>
                </Flex>
                <Flex className='lg-input'>
                    <Flex className='lg-input-type-1'>
                        <input type='tel' placeholder='请输入手机号' id='phone' onChange={this.getPhone} />
                    </Flex>
                    <Flex className='lg-input-type-2'>
                        <input type='password' placeholder='请输入密码' id='pass' onChange={this.getPassword} />
                    </Flex>
                </Flex>
                <Flex.Item className='forgetpw' onClick={() => { this.props.history.push('/mypage/newpwd') }}>忘记密码</Flex.Item>
                <Flex style={{ width: '100%' }}>
                    <button className='login-button' onClick={this.login}>登 录</button>
                </Flex>
                <Flex.Item className='lg-zc'>没有账号？<span onClick={() => { this.props.history.push('/mypage/zhuce') }}>注册</span></Flex.Item>

            </div>
        )
    }
}
const getStore = (state) => {
    console.log('login:', state.loginDucer);
    return {
        loginObj: state.loginDucer,
        loginMsg: state.loginMsg
    }
}
export default connect(getStore)(Login);
