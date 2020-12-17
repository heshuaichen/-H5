import React, { Component } from 'react'
import '../css/newpwd.css'
import { Flex } from 'antd-mobile';
import ReactSimpleVerify from 'react-simple-verify'
import 'react-simple-verify/dist/react-simple-verify.css';
import { Toast, WhiteSpace, WingBlank, Button } from 'antd-mobile';
export default class Newpwd extends Component {
    constructor(){
        super();
        this.state=({
            isPass:false,
            name:'',
            password:''
        })
    }
    success = () => {
        console.log('aaa');
        this.setState({
            isPass:true
        })
    }
    getPhone = (e) => {
        //校验手机号
        let value = document.getElementById('phone').value;
        this.setState({
            name:value
        })
    }
    //获取密码
    getPassword = () => {
        let pass = document.getElementById('pass').value;
        this.setState({
            password:pass 
        })
    }
    zhuce = () => {
        console.log('zhuce');
        if(this.state.name.length !==11){
            Toast.info('手机格式不对!!!', 1);
        }else if(this.state.password.length <=4){
            Toast.info('密码不能低于4位!!!', 1);
        }else if(this.state.password.length > 8){
            Toast.info('密码不能超过8位!!!', 1);
        }else if(this.state.isPass===false){
            console.log('isPass',this.state.isPass)
            Toast.info('请先进行验证!!!', 1);
        }else{
            //校验通过，向服务器发送请求，检查账号和密码的正确性
        let url = "https://www.shuaishuaide.top:2004/newpwd";
        fetch(url, {
            method: "POST",
            body: JSON.stringify({name:this.state.name,password:this.state.password}),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            return res.text();
        }).then(data => {
            console.log('data:',data);
            //对服务器返回的值进行判断
            //1，登录成功
            if(data === '更改成功'){
                Toast.info('重置密码成功!!!', 1.5);

                this.props.history.push('/mypage/zhe_login');
             
            }else if(data === '用户不存在'){
                Toast.info('用户不存在!!!', 1.5);
                this.props.history.push('/mypage/zhe_login')
            }
        }).catch(err => {
            console.error(err)
        })
    }
    }
    
    render() {
        return (
            <div className='zc'>
                <Flex className='zc-header'>
                    <Flex style={{ width: '20rem', margin: '0 auto' }}>
                        <svg className="zc-header-icon1" aria-hidden="true" onClick={() => this.props.history.push('/mypage/zhe_login')}>
                            <use xlinkHref="#icon-fanhui"></use>
                        </svg>
                        <Flex.Item className='zc-header-p' >重置密码</Flex.Item>
                    </Flex>
                </Flex>
                <Flex className='lg-input'>
                    <Flex className='lg-input-type-1'>
                        <input type='tel' placeholder='请输入手机号' id='phone' onChange={this.getPhone} />
                    </Flex>
                    <Flex className='lg-input-type-2'>
                        <input type='password' placeholder='请输入新密码' id='pass' onChange={this.getPassword} />
                    </Flex>
                </Flex>
                <Flex className='zc-two' style={{ width: '16.8rem', margin: '0 auto' }}>
                    <ReactSimpleVerify ref="verify" success={this.success} />
                </Flex>
                <Flex style={{ width: '16rem', margin: '0 auto' }}>
                    <button className='zc-button' onClick={this.zhuce}>确定</button>
                </Flex>
            </div>
        )
    }
}
