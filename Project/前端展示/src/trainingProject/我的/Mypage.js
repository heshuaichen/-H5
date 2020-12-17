import React, { useEffect, useState } from 'react'
import { Flex } from 'antd-mobile';
import { connect } from 'react-redux'
import '../css/mypage.css'
import { loginDucer, loginMsg, orderList } from '../Redux/Reducer';

const Mypage = (props) => {
    console.log(props);
    //获取订单信息
    const getARR = () => {
        let obj = props.loginMsg;
        if (!obj.name) {
            //跳转到登录页
            props.history.push('/mypage/zhe_login');
        } else {
            let name = obj.name;
            let path = 'http://www.shuaishuaide.top:2011/cart?name=' + name
            fetch(path, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => {
                return res.json();
            }).then(data => {
                console.log('订单列表:', data);
                props.dispatch({
                    type: 'ADD_ORDER',
                    data: data
                })
            })
            props.history.push('/mypage/myorder');
        }
    }
    const [fileUrl, setFileUrl] = useState('https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2583908497,2344685288&fm=26&gp=0.jpg');
    return (
        <div>
            <Flex className="backgroundcl-my">
                <Flex className="btn-1-my">
                    <svg className="icon-my1" aria-hidden="true">
                        <use xlinkHref="#icon-xiaoxitongzhitixinglingshenglingdang"></use>
                    </svg>
                    <svg className="icon-my11" aria-hidden="true">
                        <use xlinkHref="#icon-shezhi"></use>
                    </svg>
                </Flex>
                <Flex className="btn-2-my">
                    <Flex className="btn-2-photo-my">
                        <input type="file" accept="image/*" id="file" className="file" id="inputimage"
                            style={{ display: 'none' }}
                            onChange={(e) => {
                                const imageFile = e.target.files[0];
                                const imageUrl = URL.createObjectURL(imageFile);
                                setFileUrl(imageUrl)
                                props.history.go(0)
                            }}
                        />
                        <Flex className="btn-2-photo-my-1" onClick={() => {
                            document.getElementById('inputimage').click();
                        }}><img src={fileUrl} className="btn-2-photo-my-1" /> </Flex>
                    </Flex>
                    <Flex className="div-name-my">
                        <Flex.Item className="name-my">
                            {
                                props.loginMsg.name
                                    ?
                                    props.loginMsg.name
                                    : '未登录'
                            }
                        </Flex.Item>
                    </Flex>
                </Flex>
            </Flex>
            <Flex className="listshow-my">
                <Flex className="listshow-son-my-1" onClick={() => getARR()}>
                    <Flex className="icon-my2-div">
                        <svg className="icon-my2-1" aria-hidden="true">
                            <use className="icon-my2-11" xlinkHref="#icon-xianhuocaigoudingdanluzhisvg"></use>
                        </svg>
                    </Flex>
                    <Flex className="listname-my-div">

                        <Flex.Item className="listname-my" >我的订单</Flex.Item>
                        <Flex className="listname-my-div">
                            <Flex.Item className="listname-2-my">查看购买订单</Flex.Item>
                        </Flex>
                    </Flex>
                </Flex>
                <Flex className="listshow-son-my-2" onClick={() => props.history.push('/mypage/mycourse')}>
                    <Flex className="icon-my2-div-2">
                        <svg className="icon-my2-1" aria-hidden="true">
                            <use className="icon-my2-11" xlinkHref="#icon-kecheng"></use>
                        </svg>
                    </Flex>
                    <Flex className="listname-my-div">
                        <Flex.Item className="listname-my-2">我的课程</Flex.Item>
                        <Flex className="listname-my-div">
                            <Flex.Item className="listname-2-my-2">加入的课程都在这呦</Flex.Item>
                        </Flex>
                    </Flex>
                </Flex>
                <Flex className="listshow-son-my-3">
                    <Flex className="icon-my2-div">
                        <svg className="icon-my2-1" aria-hidden="true">
                            <use className="icon-my2-11" xlinkHref="#icon-qizhi"></use>
                        </svg>
                    </Flex>
                    <Flex className="listname-my-div">
                        <Flex.Item className="listname-my">我的报名</Flex.Item>

                        <Flex className="listname-my-div"><Flex.Item className="listname-2-my">我参与的专题活动</Flex.Item>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
            <div className="listshow-list-my">

                <p className="listshow-list-p-my">
                    <svg className="icon-my4-1" aria-hidden="true">
                        <use xlinkHref="#icon-youhuiquan"></use>
                    </svg>
                    我的优惠券
                <svg className="icon-my3" aria-hidden="true">
                        <use xlinkHref="#icon-iconfonti"></use>
                    </svg>
                </p>

                <p className="listshow-list-p-my">
                    <svg className="icon-my4-1" aria-hidden="true">
                        <use xlinkHref="#icon-qianbao"></use>
                    </svg>
                    我的账户余额
                <svg className="icon-my3" aria-hidden="true">
                        <use xlinkHref="#icon-iconfonti"></use>
                    </svg>
                </p>

                <p className="listshow-list-p-my">
                    <svg className="icon-my4-1" aria-hidden="true">
                        <use xlinkHref="#icon-shoutibao"></use>
                    </svg>
                     我的团购
                <svg className="icon-my3" aria-hidden="true">
                        <use xlinkHref="#icon-iconfonti"></use>
                    </svg>
                </p>
                <p className="listshow-list-p-my">
                    <svg className="icon-my4-1" aria-hidden="true">
                        <use xlinkHref="#icon-fenxiang"></use>
                    </svg>
                我的推广
                <svg className="icon-my3" aria-hidden="true">
                        <use xlinkHref="#icon-iconfonti"></use>
                    </svg>
                </p>
            </div>
            <div className="login-my">
                <p className="login-p-my" onClick={() => {
                    //实现点击跳转，如果是未登录，跳转到登录页面，如果是已经登录，不进行跳转
                    if (!props.loginMsg.name) {
                        console.log('未登录');

                        props.dispatch({
                            type: 'DEL_MSG',
                        })
                        // props.history.push('/mypage/login');
                        props.history.push('/mypage/zhe_login');

                    } else {
                        //登录成功了 点击退出登录
                        props.dispatch({
                            type: 'DEL_MSG',
                        })

                    }

                }}>{
                        props.loginMsg.name
                            ?
                            '退出登录'
                            : '登录'
                    }
                </p>
            </div>

        </div>
    )
}
const getStore = (state) => {
    return {
        loginMsg: state.loginMsg,
        orderList: state.orderList
    }
}
export default connect(getStore)(Mypage);

