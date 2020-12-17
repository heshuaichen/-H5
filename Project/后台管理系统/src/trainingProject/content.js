import { Flex } from 'antd-mobile';
import React, { useEffect } from 'react';
import './content.css'
import { connect } from 'react-redux';
import User from './用户/user';
import Course from './课程管理/course';
import Jishi from './集市管理/jishi';
import Youeryuan from './幼儿园管理/youeryuan';
import Tuoyou from './托幼机构管理/tuoyou';
import Xueqian from './学前机构管理/xueqian';

class Content extends React.Component {
    constructor() {
        super()
        this.state = ({
            showIndex: 1
        })

    }
    getComponent = () => {
        // 右边部分只显示当前被点击过后的最新的数据
        var arr = ['',<Course/>,<Jishi/>,<Youeryuan/>,<Tuoyou/>,<Xueqian/>,<User/>];
        return arr[this.state.showIndex];
    }
    render() {
        return (
            <div>
                <p className='head'>幼儿保教后台管理系统</p>
                <div className="content">
                    <div className='left'>
                        <p style={{ color: 'mediumseagreen', fontWeight: "bold", marginLeft: '10px',fontSize:'18px',marginTop:'10px' }}>功能菜单</p>
                        <ul className='ls'>
                             <li onClick={(e)=>{this.setState({showIndex:1})}} className={this.state.showIndex==1?"changeColor":''} ><img src='课程.png' className="contentImg"/><span>课程管理</span></li>
                             <li onClick={(e)=>this.setState({ showIndex:2})} className={this.state.showIndex==2?"changeColor":''} ><img src='集市.png' className="contentImg"/><span>集市管理</span></li>
                            <li onClick={() => this.setState({ showIndex: 3 })} className={this.state.showIndex==3?"changeColor":''}><img src='幼儿园.png' className="contentImg"/><span>幼儿园管理</span></li>
                            <li onClick={() => this.setState({ showIndex: 4 })} className={this.state.showIndex==4?"changeColor":''}><img src='机构.png' className="contentImg"/><span>托幼机构管理</span></li>
                            <li onClick={() => this.setState({ showIndex: 5 })} className={this.state.showIndex==5?"changeColor":''}><img src='学期.png' className="contentImg"/><span>学前机构管理</span></li>
                            <li onClick={() => this.setState({ showIndex: 6 })} className={this.state.showIndex==6?"changeColor":''}><img src='用户.png' className="contentImg"/><span>用户管理</span></li>
                        </ul>
                    </div>
                    <div className='right'>
                        {
                            this.getComponent()
                        }
                    </div>
                </div>

            </div>


        )
    }
}
const getData = (state) => {
    return {
        data: state.data
    }
}
export default connect(getData)(Content);

