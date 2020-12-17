import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './course.css';

class Course extends React.Component {
    constructor() {
        super();
        this.state = ({
            data: [],
            number: 1,
            value:""
        })
    }
    componentDidMount() {
        fetch("http://www.shuaishuaide.top:2010/course", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json()).then(data => {
            console.log('course:', data);
            this.props.dispatch({
                type:'DATA',
                data:data
            })
           
        });
    }
    handleChange = (e)=>{
        this.setState({
            value : e.target.value
        })
    }
    searchBtn = () => {
        console.log("value:",this.state.value);
        fetch("http://www.shuaishuaide.top:2012/select/course", {
            method: "POST",
            body: JSON.stringify({ value: this.state.value }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => console.log(res))
    }

    getFetch = (num) => {
        let path = 'http://www.shuaishuaide.top:2010/course' + '?page=' + num
        console.log('path', path);
        fetch(path, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json()).then(data => {
            this.props.dispatch({
                type:'DATA',
                data:data
            })
        });
    }
    render() {
        const arr = this.props.data;
        if (arr.length < 1 && this.state.number == 1) {
            return (
                <div>当前暂无数据</div>
            )
        }
        //当点击其他页，但是没有数据显示的时候 出现的效果
        if (arr.length < 1 && this.state.number !== 1) {
            return (
                <div>
                    <div style={{ textAlign: 'center', fontWeight: 'bold', marginTop: '15%' }}>当前页暂无数据，可选择返回上一页</div>
                    <div className='footB'>
                        <span onClick={() => {
                            return (this.getFetch(1), this.setState({ number: 1 }))
                        }} className={this.state.number == 1 ? "defaultColor" : ""}>[1]</span>
                        <span onClick={() => {
                            return (this.getFetch(2), this.setState({ number: 2 }))
                        }} className={this.state.number == 2 ? "defaultColor" : ""}>[2]</span>
                        <span onClick={() => {
                            return (this.getFetch(3), this.setState({ number: 3 }))
                        }} className={this.state.number == 3 ? "defaultColor" : ""}>[3]</span>
                        <span onClick={() => {
                            return (this.getFetch(4), this.setState({ number: 4 }))
                        }} className={this.state.number == 4 ? "defaultColor" : ""}>[4]</span>
                    </div>
                </div>
            )

        }
        return (
            <div>
                <button className='addcourse' onClick={() => { this.props.history.push('/addCourse') }}> + 添加课程</button>
                {/* <input type="search" placeholder="搜索好物" onChange={this.handleChange}/>
                <button className="SearchBtn" onClick={this.searchBtn}>搜索</button> */}
                <table className="courseTable">
                    <thead>
                        <tr>
                            <th className="courseTh">课程名</th>
                            <th className="courseTh">课程号</th>
                            <th className="courseTh">课程价格</th>
                            
                            <th className="courseTh">图片</th>
                            <th className="courseTh">删除</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            arr.map((items, idx) => {
                                //图片路径
                                var path = "http://www.shuaishuaide.top:2010/" + items.Cpicture;
                                console.log(path)
                                return (
                                    <tr>
                                        <td className="courseTd">{items.Cname}</td>
                                        <td className="courseTd">{items.Cno}</td>
                                        <td className="courseTd">{items.Cprice}</td>
                                        <td className="courseTd"><img src={path} className="courseImg" /></td>
                                        <td className="courseTd">
                                            <button onClick={() => {
                                                fetch("http://www.shuaishuaide.top:2010/course/delete", {
                                                    method: "POST",
                                                    body: JSON.stringify({ Cno: items.Cno })
                                                }).then(res => {
                                                   this.props.dispatch({
                                                       type:'DEL',
                                                       index:idx
                                                   })
                                                })
                                            }} className="courseBtn">删除课程</button>
                                        </td>

                                    </tr>
                                )
                            })

                        }
                    </tbody>
                </table>
                <div className='footBtn'>
                    <span onClick={() => {
                        return (this.getFetch(1), this.setState({ number: 1 }))
                    }} className={this.state.number == 1 ? "spanColor" : ''}>[1]</span>
                    <span onClick={() => {
                        return (this.getFetch(2), this.setState({ number: 2 }))
                    }} className={this.state.number == 2 ? "spanColor" : ''}>[2]</span>
                    <span onClick={() => {
                        return (this.getFetch(3), this.setState({ number: 3 }))
                    }} className={this.state.number == 3 ? "spanColor" : ''}>[3]</span>
                    <span onClick={() => {
                        return (this.getFetch(4), this.setState({ number: 4 }))
                    }} className={this.state.number == 4 ? "spanColor" : ''}>[4]</span>
                </div>
            </div>
        )

    }
}
const getData = (state) =>{
    return {
        data:state.data
    } 
}
export default connect(getData)(withRouter(Course));