import React, { useEffect, useState } from 'react';
import '../css/myorder.css';
import { HashRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import Myallorder from './Myallorder';
import Mynopayorder from './Mynopayorder';
import Mypayorder from './Mypayorder';
import Mycancelorder from './Mycancelorder';
import { connect } from 'react-redux';
import { Flex } from 'antd-mobile';
import { getcart } from '../Redux/actionCreators'
const Myorder = (props) => {
    /* if(!props.loginObj.userinfo){
         props.history.push('/mypage/login');
     }
 */
    const getList = () => {
        props.dispatch(getcart());
    }
    useEffect(() => {
        getList();
    }, []);
    return (
        <div>
            <header className="myorder-header" >
                <svg className="myorder-icon1" aria-hidden="true" onClick={() => props.history.push('/mypage')}>
                    <use xlinkHref="#icon-fanhui"></use>
                </svg>
                我的订单
                <svg className="myorder-icon1-2" aria-hidden="true">
                    <use xlinkHref="#icon-shoucang"></use>
                </svg>
            </header>
            <div >
                <nav className='myorder-nav'>
                    <NavLink activeClassName='myorder-active' exact to='/mypage/myorder'>全部</NavLink>
                    <NavLink activeClassName='myorder-active' to='/mypage/myorder/mynopayorder'>待支付</NavLink>
                    <NavLink activeClassName='myorder-active' to='/mypage/myorder/mypayorder'>已支付</NavLink>
                    {/* <NavLink activeClassName='myorder-active' to='/mypage/myorder/mycancelorder'>已取消</NavLink> */}
                </nav>
                <Switch>
                    <Route exact path='/mypage/myorder' component={Myallorder} />
                    <Route path='/mypage/myorder/mynopayorder' component={Mynopayorder} />
                    <Route path='/mypage/myorder/mypayorder' component={Mypayorder} />
                    {/* <Route path='/mypage/myorder/mycancelorder' component={Mycancelorder} /> */}
                </Switch>
            </div>
        </div>
    )
}
const getStore = (state) => {
    return {
        loginObj: state.loginDucer,
        getcart: state.getcart
    }
}
export default connect(getStore)(Myorder);

