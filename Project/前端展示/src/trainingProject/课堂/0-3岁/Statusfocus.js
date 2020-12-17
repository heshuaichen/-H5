import React, { Component } from 'react'
import '../../css/Statusfocus.css';
import { connect } from 'react-redux';
import { Flex,Icon,SearchBar } from 'antd-mobile';
class Statusfocus extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: -1,
            value: ''
        }
    }
    searchCourse = () => {
        var content = [{ Cname: "您搜索的课程不存在!" }];
        //搜索框
        console.log("value:", this.state.value);
        fetch("http://www.shuaishuaide.top:2015/select/Cbackstage", {
            method: "POST",
            body: JSON.stringify({ value: this.state.value }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json()
        ).then(data => {
            if (data.length !== 0) {
                console.log("data", data)
                this.props.dispatch({
                    type: 'ADD_COURSESEARCH_DATA',
                    courseSearch: data
                });
            } else {
                this.props.dispatch({
                    type: 'ADD_COURSESEARCH_DATA',
                    courseSearch: content
                })
            }

        }
        );

        //历史记录
        let obj = this.props.loginMsg;
        let name = obj.name;
        fetch("http://www.shuaishuaide.top:2015/select/Cbackstage?name=", {
            method: "POST",
            body: JSON.stringify({ name: name, value: this.state.value }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json()
        ).then(data => console.log(data));
        this.state.value = '';
    }
    //清除历史记录
    clearCoursehistory = () => {
        let obj = this.props.loginMsg;
        let name = obj.name;
        fetch("http://www.shuaishuaide.top:2015/select/delCourselist?name=", {
            method: "POST",
            body: JSON.stringify({ name: name }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.text()
        ).then(data =>{
            this.props.dispatch({
                type: 'ADD_COURSEHISTORY_DATA',
                courseHistory: []
            });
        });
    }
    handleChange = (e) => {
        this.setState({
            value: e.target.value,
        });
    }
    handleMouseEnter = (key, item, event) => {
        this.setState({ index: key, value: item.Cname });
        this.refs.input.value = item;
    }
    componentDidMount() {
        //生命周期，在组件加载完成后，让input聚焦 (focus)
        this.refs.input.focus();
        let obj = this.props.loginMsg;
        let name = obj.name;
        console.log("get-name:", name);
        fetch('http://www.shuaishuaide.top:2015/select/Cbackstage?name=' + name, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            return res.json();
        }).then(data =>
            this.props.dispatch({
                type: 'ADD_COURSEHISTORY_DATA',
                courseHistory: data
            })
        )
    }
    render() {
        return (
            < div>
                <Icon type="left"  className="courseSearch-icon" onClick={()=>{this.props.history.push('/home/methods/relations')}}/>
                <div className='container'>
                    <input type="text" ref='input' value={this.state.value} onChange={this.handleChange} className='courseInput' placeholder='搜索课程' />
                    <button onClick={this.searchCourse} className='courseBtn'>搜索</button>
                    {/* 渲染得到的列表值 */}
                    <ul className='courseList-group'>
                        {this.props.courseSearchData.map((item, key) => {
                            return <li onClick={() => {
                                this.props.dispatch({
                                    type: 'ADD_CS',
                                    data: item
                                })
                                this.refs.input.focus();
                                this.props.history.push('/detail/explain');
                                this.props.dispatch({
                                    type: 'ADD_COURSESEARCH_DATA',
                                    courseSearch: []
                                });

                            }} onMouseEnter={(event) => this.handleMouseEnter(key, item, event)} className={key === this.state.index ? 'courseList-group-item-active' : "courseList-group-item"} key={key}>{item.Cname}</li>
                        })}
                    </ul>
                    <div className='strong'>
                        <strong>大家都在搜</strong>
                    </div>
                    {/* 渲染集市首页列表值 */}
                    <ul className='courseList-group'>
                        {this.props.getCourse.map((item, key) => {
                            return <li onClick={() => {
                                this.props.dispatch({
                                    type: 'ADD_CS',
                                    data: item
                                })
                                this.refs.input.focus();
                                this.props.history.push('/detail/explain');
                                this.props.dispatch({
                                    type: 'ADD_COURSESEARCH_DATA',
                                    courseSearch: []
                                });

                            }} onMouseEnter={(event) => this.handleMouseEnter(key, item, event)} className={key === this.state.index ? 'courseList-group-item-active' : "courseList-group-item"} key={key}>{item.Cname}</li>
                        })}
                    </ul>
                    <div className='strong'>
                        <strong>历史记录</strong>
                    </div>

                    <div>
                        {
                            this.props.courseHistoryData.map((item, key) => {
                                if (item.value != '')
                                    return <button className="courseSearch-button">{item.value}</button>
                            })
                        }
                    </div>
                    <div className='strong'>
                        <strong>清除历史记录</strong>
                    </div>
                    <div>
                        <button className="clearCoursehistory-button" onClick={this.clearCoursehistory}>清除</button>
                    </div>
                </div></ div>
        )
    }
}
const getData = (state) => {
    return ({
        getCourse: state.getCourse,
        courseSearchData: state.courseSearchData,
        getCS: state.getCS,
        loginMsg: state.loginMsg,
        courseHistoryData: state.courseHistoryData
    })
}

export default connect(getData)(Statusfocus);






