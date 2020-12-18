import React, { useEffect, useState } from 'react';
import '../css/mynopayorder.css'
import { Flex } from 'antd-mobile';
import { connect } from 'react-redux';
class Mynopayorder extends React.Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
        let obj = this.props.loginMsg;
        let name = obj.name;
        fetch('http://www.shuaishuaide.top:2011/cart/Npay?name=' + name, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            return res.json();
        }).then(data =>
            this.props.dispatch({
                type:'ADD_NPAY',
                Npay:data
            })
        )
    }
    render(){
    let arr=this.props.Npay;
    console.log('待支付：', arr);
    if (!arr) {
        return (
            <div>暂无更多</div>
        )
    } else {
        return (arr.map((item, idx) => {
            console.log(item.Ypay);
            if (item.Ypay === 1) {               
            } else {
                return (
                    <Flex className="myallorder-div">
                        <Flex className="myallorder-div-1">
                            <Flex.Item className="myallorder-p-1">订单编号： {item.Bianhao}</Flex.Item>
                            <Flex.Item className="myallorder-p-2">待支付</Flex.Item>
                            <hr className="myallorder-p-3" />
                            <Flex.Item className="myallorder-p-4" >{item.Stype}</Flex.Item>
                            <Flex.Item className="myallorder-p-5" >{item.Sname}</Flex.Item>
                            <Flex.Item className="myallorder-p-6">应付：</Flex.Item>
                            <Flex.Item className="myallorder-p-7">￥{item.Sprice}</Flex.Item>
                            <Flex.Item className="myallorder-p-8">数量:{item.Count}</Flex.Item>
                            <Flex.Item className="myallorder-p-10" onClick={() =>{
                                //将商品的数据放入
                                this.props.dispatch({
                                    type:'ADD_SHOP',
                                    shop:item
                                });
                                this.props.history.push('/mywillpay')
                            } 
                                
                            }>去支付</Flex.Item>
                        </Flex>
                    </Flex>
                )
            }
        })

        )
    }
    }

}
const getStore = (state) => {
    return {
        shopList:state.myShop,
        loginMsg: state.loginMsg,
        Npay:state.Npay,
        willBuycourse:state.willBuycourse
    }
}
export default connect(getStore)(Mynopayorder);