import React, { Component } from 'react'
import '../css/payed.css';
import { Flex,Toast } from 'antd-mobile';
import { connect } from 'react-redux'
class Payed extends Component {
    render() {
        return (
            <div className='pd' style={{ height: '667px' }}>
                <div className='pd-head'>
                    在线支付
                </div>
                <Flex className="pd-list">
                    <Flex.Item>
                        <Flex.Item>
                            <img src={require('./img/weixinzhifu.png')} />
                        </Flex.Item>
                        <Flex.Item>
                            <button onClick={() => {
                                //发送update请求，实现更新支付
                                //提交用户的name ，Sno给服务端
                                let sno = this.props.shopList.Sno;
                                let name = this.props.loginMsg.name;
                                let count = this.props.shopCount;
                                console.log('count:',count);
                                //发送请求
                                fetch('http://www.shuaishuaide.top:2011/cart/update', {
                                    method: "POST",
                                    body: JSON.stringify({ name: name, Sno: sno, Ypay:1,Count:count}),
                                    headers: {
                                        'Content-Type': 'application/json'
                                    }
                                }).then(res => {
                                    return res.text();
                                }).then(data => {
                                    console.log('已购买:', data)
                                    if (data) {
                                        //提示加入购物车成功
                                        Toast.info('购买成功!!!', 1.8);
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
        shopList: state.myShop,
        loginMsg: state.loginMsg,
        shopCount:state.shopCount
    })
}
export default connect(getData)(Payed)
