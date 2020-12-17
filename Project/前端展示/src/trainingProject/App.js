import React from 'react';
import  {Provider}  from 'react-redux';
import {HashRouter as Router, Route, Switch } from 'react-router-dom';
import Mytab from './Mytab';
import store from './Redux/Store';
// 课堂相关组件
import Home from './课堂/0-3岁/Home'
import Statusfocus from './课堂/0-3岁/Statusfocus';
import Detail from './课堂/0-3岁/Detail';

// 社区相关的组件
import Community from './社区/community';

import Search from './集市/Search';
import Shopping from './集市/Shopping';
import Course from './课堂/Course';
import Mypage from './我的/Mypage';
import Myorder from './我的/Myorder';
import Mycourse from './我的/Mycourse';
import CourseWillPay from './我的/CourseWillPay';
import GoodDetail from './集市/GoodDetail';
import WillPay from './集市/WillPay';
import Payed from './集市/Payed';
import Login from './登录页/Login';
import Zhuce from './登录页/Zhuce';
import Newpwd from './登录页/Newpwd';
import Zhu_login from './登录页/Zhe_login';
import Commlist from './社区/Commlist';
import Commdetail from './社区/Commdetail';
import CoursePayed from './我的/CoursePayed';
import Mywillpay from './我的/Mywillpay'
const App = ()=>{
    return(<Provider store={store}>
        <Router>
            <Switch>
                <Route path='/' exact component={Community} />
                <Route path='/shopping' component={Shopping} />
            </Switch>
            <Switch>
                <Route exact path='/mypage' component={Mypage}/>
                <Route path='/mypage/myorder' component={Myorder}/>
                <Route path='/mypage/mycourse' component={Mycourse}/>
                <Route path='/mywillpay' component={Mywillpay}/>
            </Switch>
            <Switch>
                <Route path='/payed' component={Payed} />
                <Route path='/willpay' component={WillPay}/>
                <Route path='/gooddetail' component={GoodDetail}/>
                <Route path='/shopping-search' component={Search}/>
                 <Mytab />
            </Switch>
            {/* 社区相关的路由 */}
            <Switch>
                <Route path='/community/list/:type' component={Commlist} />      
                <Route path='/community/detail' component={Commdetail} />           
            </Switch>
            {/* 课堂相关路由 */}
            <Switch>
                <Route exact path='/course' component={Course} />
                <Route path='/home/methods' component={Home}/>
                <Route path='/home/statusfocus' component={Statusfocus} />
                <Route path='/detail/explain' component={Detail} />
                <Route path='/mycourse/buyCourse' component={CourseWillPay} />
                <Route path='/mycourse/buyed' component={CoursePayed} />
                
            </Switch>
            {/* 登录页相关路由 */}
            <Switch>
                <Route path='/mypage/login' component={Login} />
                <Route path='/mypage/zhuce' component={Zhuce} />
                <Route path='/mypage/newpwd' component={Newpwd} />
                <Route path='/mypage/zhe_login' component={Zhu_login} />
            </Switch>
        </Router>
        </Provider>
    )
}

export default App;