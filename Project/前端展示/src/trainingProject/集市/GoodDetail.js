import { Flex, Icon, WhiteSpace, Button, TabBar, Toast } from 'antd-mobile'
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import '../css/gooddetail.css';
import { connect } from 'react-redux';

class GoodDetail extends Component {
    constructor() {
        super();
        this.state = {
            count: 1,
            isAdd: false
        }
    }
    getArry = () => {
        //点击加入购物车:提交用户id 商品id 待支付
        //当购买成功以后发送update请求，将用户名，商品id  提交给后台

        //先判断使用是否已经登录了
        let obj = this.props.loginMsg;
        if (!obj.name) {
            //跳转到登录页
            this.props.history.push('/mypage/login');
        } else {

            //判断是否加入了购物车，已经加入就不操作了
            if (this.state.isAdd === true) {
                Toast.info('已经加入购物车!!!', 1);
            } else {
                let name = obj.name
                fetch('http://www.shuaishuaide.top:2011/cart', {
                    method: "POST",
                    body: JSON.stringify({ name: name, Sno: this.props.shopList.Sno }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(res => {
                    return res.text();
                }).then(data => {
                    if (data == 'success') {
                        this.setState({
                            isAdd: true
                        })
                        Toast.info('加入购物车成功!!!', 1);
                    }
                })
            }
        }
    }
    render() {
        let obj = this.props.shopList;
        console.log('obj', obj)
        let path = "http://www.shuaishuaide.top:2010/" + obj.Spicture;
        console.log('path', path);
        return (
            <div>
                <Flex>
                    <Flex.Item >
                        <Flex.Item>
                            <Icon type="left" style={{ position: 'absolute', width: '30px', height: '30px', top: '10px' }} onClick={() => { this.props.history.push('/shopping') }}></Icon>
                            <p className="gd-title">商品详情</p>
                        </Flex.Item>
                        <Flex.Item className='gd-img'>
                            <img src={path} />
                        </Flex.Item>
                    </Flex.Item>
                </Flex>
                <div className='gd-price'>
                    <p>￥<span>{this.props.shopList.Sprice}</span></p>
                </div>
                <div className='gd-detail'>
                    <p className='gd-name'>{this.props.shopList.Sname}</p>
                    <p className='gd-num' ><span onClick={
                        () => {
                            // console.log('decont');
                            let num1 = this.state.count - 1
                            if (num1 <= 0) {
                                return;
                            } else {
                                this.setState({
                                    count: num1
                                })
                            }
                        }
                    }>-</span><button>{this.state.count}</button>
                        <span
                            onClick={() => {
                                // console.log('add');
                                let num = this.state.count + 1;
                                this.setState({
                                    count: num
                                })
                            }}>+</span></p>
                </div>
                <div className='gd-detail-body'>
                    <p style={{ textAlign: "center", fontSize: '16px', marginLeft: '0' }}>
                        <span className='hengge'>-------</span>
                        商品详情
                        <span className='hengge'>-------</span>
                    </p>
                    <div className='details'>
                        <div>
                            <p>商品名称:{this.props.shopList.Sname}</p>
                            <p>商品编号：{this.props.shopList.Sno}</p>
                            <p>类型：{this.props.shopList.Stype}</p>
                            <p>商品简介：{this.props.shopList.Sintroduce}</p>
                        </div>
                    </div>
                </div>
                <WhiteSpace />
                <div className='gd-detail-img'>
                    <p style={{ textAlign: "center", fontSize: '16px', marginLeft: '0' }}>
                        <span className='hengge'>-------</span>
                        图文详情
                        <span className='hengge'>-------</span>
                    </p>
                    <div className='details-img'>
                        <img src=''></img>
                    </div>
                </div>
                <Flex style={{ position: 'fixed', bottom: "0px", width: "100%", backgroundColor: '#fff' }}>
                    <Flex.Item>
                        <TabBar
                            unselectedTintColor="#949494"
                            tintColor="grey"
                            barTintColor="white"
                            tabBarPosition="bottom"
                        >
                            <TabBar.Item
                                icon={
                                    <i className='iconfont icon-kefu'></i>
                                }
                                title="客服"
                                key="kefu"
                                selected={this.state.selectedTab === 'blueTab'}
                                data-seed="logId"
                                onPress={() => Toast.info('还没有客服哟，敬请期待!!!', 1)}
                            >
                            </TabBar.Item>
                            <TabBar.Item
                                icon={
                                    <i className='iconfont icon-aui-icon-cart'></i>
                                }
                                title="购物车"
                                key="cart"
                                selected={this.state.selectedTab === 'redTab'}
                                data-seed="logId1"
                                onPress={() => {
                                    let name = this.props.loginMsg.name;
                                    if (!name) {
                                        //跳转到登录页
                                        this.props.history.push('/mypage/login');
                                    } else { this.props.history.push('/mypage/myorder') }
                                }}
                            >
                            </TabBar.Item>
                        </TabBar>
                    </Flex.Item>
                    <Flex.Item style={{ margin: 0 }}>
                        <Button style={{ borderRadius: 0, backgroundColor: "orange" }} type="warning" onClick={this.getArry}>加入购物车</Button>
                    </Flex.Item>
                    <Flex.Item style={{ margin: 0 }}>
                        <Button style={{ borderRadius: 0, backgroundColor: "red" }} type="warning" onClick={() => {
                            let name = this.props.loginMsg.name;
                            if (!name) {
                                //跳转到登录页
                                this.props.history.push('/mypage/login');
                            } else {
                                console.log('conut:', this.state.count);
                                this.props.dispatch({
                                    type: 'ADD_COUNT',
                                    count: this.state.count
                                })
                                this.props.history.push('/willpay')

                            }
                        }}>立即购买</Button>
                    </Flex.Item>
                </Flex>
                <div className='empty'></div>
            </div>
        )
    }
}
const getData = (state) => {
    return ({
        shopList: state.myShop,
        loginMsg: state.loginMsg,
        shopCount: state.shopCount
    })
}
export default connect(getData)(withRouter(GoodDetail))