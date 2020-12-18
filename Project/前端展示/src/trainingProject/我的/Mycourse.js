import React, { useEffect, useState, Component } from 'react'
import { Flex, Toast } from 'antd-mobile';
import '../css/mycourse.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { data } from 'jquery';
class Mycourse extends React.Component {
    constructor() {
        super();
    }
    componentDidMount() {
        let name = this.props.loginMsg.name
        if (!name) {
            this.props.history.push('/mypage/login');
        } else {
            console.log('我的课程 name:', name);
            let path = "http://www.shuaishuaide.top:2011/courselist?name=" + name
            fetch(path, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => res.json()).then(data => {
                this.props.dispatch({
                    type: 'ADD_LIST',
                    data: data
                })

            });
        }
    }

    delCourse = (index, Cno) => {
        console.log('dle login name:', this.props.loginMsg)
        let name = this.props.loginMsg.name;
        //发送请求
        fetch('http://www.shuaishuaide.top:2011/cart/deleteCourse', {
            method: "POST",
            body: JSON.stringify({ name: name, Cno: Cno }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            return res.text();
        }).then(data => {
            if (data) {
                //提示加入购物车成功
                Toast.info('删除课程成功!!!', 1.8);
                this.props.dispatch({
                    type: 'DEL_ITEM',
                    index: index
                })
            } else {
                Toast.info('删除课程失败！！！', 1.8);
            }
        })
    }

    render() {
        if (this.props.myCourse_list.length < 1) {
            //
            return <div>暂无更多的数据</div>
        } else {
            let arr = this.props.myCourse_list;
            let str = ''
            console.log('arr data:', arr);
            return (
                <div>
                    <header className="mycourse-header">
                        <svg className="mycours-icon1" aria-hidden="true" onClick={() => this.props.history.push('/mypage')}>
                            <use xlinkHref="#icon-fanhui"></use>
                        </svg>
                        我的课程
                        <svg className="mycours-icon1-2" aria-hidden="true">
                            <use xlinkHref="#icon-shoucang"></use>
                        </svg>
                    </header>
                    <Flex style={{ width: '100%', height: '3rem' }} ></Flex>
                    {
                        arr.map((item, index) => {
                            console.log('items:', item[0].Pay);
                            if (item[0].Pay =='0') {
                                str = '购买课程'
                            } else {
                                str = '已购买课程'
                            }
                            return (<Flex className="mycourse-list">
                                <Flex ><img className="mycourse-image" src={'http://www.shuaishuaide.top:2010/' + item[0].Cpicture}  ></img></Flex>
                                <Flex className="mycourse-detail">
                                    <Flex.Item className="mycourse-list-p" >亲子交往</Flex.Item>
                                    <Flex.Item className="mycourse-list-p-2" title={item.Cname}>{item[0].Cname}</Flex.Item>
                                    <Flex className="mycourse-detail-div">
                                        <Flex.Item className="mycourse-list-p-3" title={item.Cintroduce}>{item[0].Cintroduce}</Flex.Item>
                                    </Flex>
                                    <Flex.Item className="mycourse-list-p-4" onClick={() => {
                                        console.log('wipp pay:', item[0]);
                                        if (str === '已购买课程') { 
                                            return Toast.info('已经购买过了！！！！', 1)
                                        } else {
                                            //跳转到课程的支付页面
                                            //将要购买的课程信息发送给支付界面
                                            this.props.dispatch({
                                                type: 'BUY_COURSE',
                                                data: item[0]
                                            })
                                            this.props.history.push('/mycourse/buyCourse')
                                        }

                                    }}>{str}</Flex.Item>
                                    <Flex.Item className="mycourse-list-p-5" onClick={() => this.delCourse(index, item[0].Cno)
                                    }>删除课程</Flex.Item>
                                </Flex>
                            </Flex>
                            )
                        })
                    }
                </div>
            )
        }




    }

}
const getStore = (state) => {
    return {
        loginObj: state.loginDucer,
        getlist: state.getlist,
        loginMsg: state.loginMsg,
        willBuycourse: state.willBuycourse,
        myCourse_list: state.myCourse_list

    }
}

export default connect(getStore)(withRouter(withRouter(Mycourse)));
