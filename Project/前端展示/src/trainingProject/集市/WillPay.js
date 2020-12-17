import React, { Component } from 'react'
import '../css/willPay.css'
import { List, Radio, Flex, WhiteSpace } from 'antd-mobile';
import {connect} from 'react-redux';
const RadioItem = Radio.RadioItem;

class WillPay extends Component {
    constructor(){
        super()
        this.state = {
            value: 0,
            price:0
        }

    }
    onChange = (value) => {
        this.setState({
            value,
        });
    };
    componentDidMount(){
        let num1 = this.props.shopList.Sprice 
      
        let num2 = this.props.shopCount;
       
        let number = num1 * num2;
        let num = number.toFixed(2);
        console.log('price:',num);
        this.setState({
            price:num
        })
    }
    render() {
        const { value } = this.state;
        const data = [
            { value: 0, label: '微信支付' },
            { value: 1, label: '微信好友代付' },
        ];
        return (
            <div className='wp'>
                <Flex className='wp-head'>
                    <Flex style={{ width: '20rem', margin: '0 auto' }}>
                        <svg className="wp-head-icon1" aria-hidden="true" onClick={() => this.props.history.goBack()}>
                            <use xlinkHref="#icon-fanhui2"></use>
                        </svg>
                        <Flex.Item className='wp-head-p'>在线支付</Flex.Item>
                    </Flex>
                </Flex>
                <Flex className='wp-onetwo'>
                    <Flex className='wp-one'>
                        <button>1</button>
                        <Flex.Item className='wp-onetwo-p' >提交订单成功</Flex.Item>
                    </Flex>
                    <Flex className='wp-two'>
                        <button>2</button>
                        <Flex.Item className='wp-onetwo-p'>微信付款</Flex.Item>
                    </Flex>
                </Flex>
                <Flex className='wp-body'>
                    <Flex style={{ wight: '100%'}}>
                        <Flex style={{ wight: '100%'}}>
                            <Flex.Item className='wp-body-p' style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>订单金额</Flex.Item>
                        </Flex>
                        <Flex style={{ wight: '100%'}}>
                        <Flex.Item className='wp-body-price'>￥ {this.state.price}</Flex.Item>
                        </Flex>
                        <Flex style={{ wight: '100%'}}>
                        <Flex.Item className='wp-body-p-2'> 订单提交成功，请在30分钟内完成支付</Flex.Item>
                        </Flex>
                    </Flex>
                    <Flex className='pay'>
                        <List>
                            {data.map(i => (
                                <RadioItem className='pay-list' key={i.value} checked={value === i.value} onChange={() => this.onChange(i.value)}>
                                    {i.label}
                                </RadioItem>
                            ))}
                        </List>
                    </Flex>
                </Flex>
                <Flex style={{ height: '5rem', margin: '0 auto' }}>
                    <button className='pay-button' onClick={() => {
                        this.props.history.push('/payed')
                    }}>去付款</button></Flex>
            </div >
        )
    }
}

const getData = (state) => {
    return ({
        shopList: state.myShop,
        shopCount: state.shopCount
    })
}
export default connect(getData)(WillPay)
