import React, { useEffect, useState } from 'react';
import '../css/mypayorder.css'
import { Flex } from 'antd-mobile';
import {connect} from 'react-redux';

class Mypayorder extends React.Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
        let obj = this.props.loginMsg;
        let name = obj.name;
        fetch('http://www.shuaishuaide.top:2011/cart/ypay?name=' + name, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            return res.json();
        }).then(data =>
            this.props.dispatch({
                type:'ADD_YPAY',
                Ypay:data
            })
        )
    }
    render(){
    let arr = this.props.Ypay;
    if(!arr){
        return(
            <div>暂时无已支付的数据</div>
        )
    }else{
        return(
            arr.map((item,idx) => {
                if(item.Ypay==0){
                }else{
                    return(
                        <Flex className="mynopayorder-div">
                        <Flex className="mypayorder-div-1">
                            <Flex.Item className="mypayorder-p-1">订单编号： {item.Bianhao}</Flex.Item>
                            <Flex.Item className="mypayorder-p-2">已支付</Flex.Item>
                            <hr className="mypayorder-p-3" />
                            <Flex.Item className="mypayorder-p-4" >{item.Stype}</Flex.Item>
                            <Flex.Item className="mypayorder-p-5" >{item.Sname}</Flex.Item>
                            <Flex.Item className="mypayorder-p-6">应付：</Flex.Item>
                            <Flex.Item className="mypayorder-p-7">￥{(item.Sprice*item.Count).toFixed(2)}</Flex.Item>
                            <Flex.Item className="mypayorder-p-10">分享商品</Flex.Item>
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
        orderList: state.orderList,
        loginMsg: state.loginMsg,
        Ypay:state.Ypay
    }
}
export default connect(getStore)(Mypayorder);