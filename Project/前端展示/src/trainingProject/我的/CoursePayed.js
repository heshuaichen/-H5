import React, { Component } from 'react'
import '../css/payed.css';
import { Flex, Toast } from 'antd-mobile';
import { connect } from 'react-redux'
import { loginMsg } from '../Redux/Reducer';
class CoursePayed extends Component {
    render() {
        return (
            <div className='pd' style={{ height: '667px' }}>
                <div className='pd-head'>
                    在线支付
                </div>
                <Flex className="pd-list">
                    <Flex.Item>
                        <Flex.Item>
                            <img src={require('./images/weixinzhifu.png')} />
                        </Flex.Item>
                        <Flex.Item>
                            <button onClick={() => {
                                //发送update请求，实现更新支付
                                //提交用户的name ，Cno给服务端

                                console.log('buy course:', this.props.willBuycourse);
                                console.log('buy login name:',this.props.loginMsg)
                                let name = this.props.loginMsg.name;
                                let Cno = this.props.willBuycourse.Cno;
                                //发送请求
                                fetch('http://www.shuaishuaide.top:2011/cart/updateCourse', {
                                    method: "POST",
                                    body: JSON.stringify({ name: name, Cno: Cno }),
                                    headers: {
                                        'Content-Type': 'application/json'
                                    }
                                }).then(res => {
                                    return res.text();
                                }).then(data => {
                                    console.log('goumai kecehgn:', data);
                                    if (data) {
                                        //提示加入购物车成功
                                        Toast.info('购买课程成功!!!', 1.8);
                                    } else {
                                        Toast.info('购买课程失败！！！', 1.8);
                                    }
                                })
                                this.props.history.go(-2)
                            }}>完 成</button>
                        </Flex.Item>

                    </Flex.Item>
                </Flex>

            </div>
        )
    }
}
const getData = (state) => {
    return ({
        willBuycourse: state.willBuycourse,
        loginMsg: state.loginMsg

    })
}
export default connect(getData)(CoursePayed)
