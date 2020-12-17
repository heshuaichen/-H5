import React, { useEffect, useState } from 'react';
import '../css/myallorder.css'
import { Flex, Toast } from 'antd-mobile';
import { connect } from 'react-redux';
class Myallorder extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount(){
        let obj = this.props.loginMsg;
        let name = obj.name;
        fetch('http://www.shuaishuaide.top:2011/cart/getlist?name=' + name, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            return res.json();
        }).then(data =>{
            console.log('全部订单：',data);
            this.props.dispatch({
                type:'ADD_ALLPAY',
                Allpay:data
            })
        }
            
        )
    }
    getData = (sno, idx) => {
        let name = this.props.loginMsg.name
        console.log('name:', name);
        if(!name || !sno){
         return Toast.info('sno 不存在')
        }
        let url = "http://www.shuaishuaide.top:2011/cart/getlist";
        fetch(url, {
            method: "POST",
            body: JSON.stringify({ Sno: sno, name: name }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            return res.text();
        }).then(data => {
            console.log('删除订单:', data);
            this.props.dispatch({
                type: 'DEL_ALLPAY',
                index: idx
            })
        })
    }

    getList = () => {
        let arr = this.props.Allpay;
        console.log('arrlist:', arr);

        if (!arr) {
            return (
                <div>暂无更多</div>
            )
        }
        if(arr.length>=1) {
            return (arr.map((item, idx) => {
                console.log('item:', item);
                let isPay = '';
                let str = ''
                if (item.Ypay === 1) {
                    isPay = '已支付';
                    str = '已支付';
                } else {
                    isPay = '未支付';
                    str = '去支付';
                }
                return (
                    <Flex className="myallorder-div">
                        <Flex className="myallorder-div-1">
                            <Flex.Item className="myallorder-p-1">订单编号： {item.Bianhao}</Flex.Item>
                            <Flex.Item className="myallorder-p-2">{isPay}</Flex.Item>
                            <hr className="myallorder-p-3" />
                            <Flex.Item className="myallorder-p-4" >{item.Stype}</Flex.Item>
                            <Flex.Item className="myallorder-p-5" >{item.Sname}</Flex.Item>
                            <Flex.Item className="myallorder-p-6">应付：</Flex.Item>
                            <Flex.Item className="myallorder-p-7">￥{(item.Sprice*item.Count).toFixed(2)}</Flex.Item>
                            <Flex.Item className="myallorder-p-8">数量:{item.Count}</Flex.Item>
                            <Flex.Item className="myallorder-p-9" onClick={() => {
                                console.log('items sno:', item.Sno);                               
                                this.getData(item.Sno, idx)
                            }}>取消订单</Flex.Item>
                            <Flex.Item className="myallorder-p-10" onClick={() =>{
                                if(str == '去支付'){
                                    this.props.dispatch({
                                        type:'ADD_SHOP',
                                        shop:item
                                    })
                                    this.props.history.push('/mywillpay')
                                }
                            }}>{str}</Flex.Item>
                        </Flex>
                    </Flex>
                )
            })
           )

    }

    }
    render() {
        return (
            <div>{this.getList()}</div>
        )
    }
}

const getStore = (state) => {
    return {
        Allpay:state.Allpay,
        loginMsg: state.loginMsg,
        shopList:state.myShop
    }
}
export default connect(getStore)(Myallorder)

