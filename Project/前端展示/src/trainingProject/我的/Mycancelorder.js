import React, { useEffect, useState } from 'react';
import '../css/mycancelorder.css'
import { Flex} from 'antd-mobile';
import { connect } from 'react-redux';
const Mycancelorder = (props) => {
    let arr = props.orderList
    return (
        <div>
            <Flex className="mycancelorder-div">
                <Flex className="mycancelorder-div-1">
                    <Flex.Item className="mycancelorder-p-1">订单编号： 683298928398</Flex.Item>
                    <Flex.Item className="mycancelorder-p-2">已取消</Flex.Item>
                    <hr className="mycancelorder-p-3" />
                    <Flex.Item className="mycancelorder-p-4" >精品课</Flex.Item>
                    <Flex.Item className="mycancelorder-p-5" >名师精品课</Flex.Item>
                    <Flex.Item className="mycancelorder-p-6">应付：</Flex.Item>
                    <Flex.Item className="mycancelorder-p-7">￥19.9</Flex.Item>
                </Flex>
            </Flex>
            <Flex className="mycancelorder-div">
                <Flex className="mycancelorder-div-1">
                    <Flex.Item className="mycancelorder-p-1">订单编号： 683298928398</Flex.Item>
                    <Flex.Item className="mycancelorder-p-2">已取消</Flex.Item>
                    <hr className="mycancelorder-p-3" />
                    <Flex.Item className="mycancelorder-p-4" >精品课</Flex.Item>
                    <Flex.Item className="mycancelorder-p-5" >名师精品课</Flex.Item>
                    <Flex.Item className="mycancelorder-p-6">应付：</Flex.Item>
                    <Flex.Item className="mycancelorder-p-7">￥19.9</Flex.Item>
                </Flex>
            </Flex>
            <Flex className="mycancelorder-div">
                <Flex className="mycancelorder-div-1">
                    <Flex.Item className="mycancelorder-p-1">订单编号： 683298928398</Flex.Item>
                    <Flex.Item className="mycancelorder-p-2">已取消</Flex.Item>
                    <hr className="mycancelorder-p-3" />
                    <Flex.Item className="mycancelorder-p-4" >精品课</Flex.Item>
                    <Flex.Item className="mycancelorder-p-5" >名师精品课</Flex.Item>
                    <Flex.Item className="mycancelorder-p-6">应付：</Flex.Item>
                    <Flex.Item className="mycancelorder-p-7">￥19.9</Flex.Item>
                </Flex>
            </Flex>
        </div>
    )
}
const getStore = (state) => {
    return {
        orderList: state.orderList
    }
}
export default connect(getStore)(Mycancelorder);