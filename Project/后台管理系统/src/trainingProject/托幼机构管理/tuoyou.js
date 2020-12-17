import React from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './tuoyou.css';
class Tuoyou extends React.Component {
    constructor() {
        super();
        this.state = ({
            number: 1
        })
    }
    componentDidMount() {
        fetch("http://www.shuaishuaide.top:2010/creche", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json()).then(data => {
            this.props.dispatch({
                type: 'DATA',
                data: data
            })

        });
    }
    getFetch = (num) => {
        let path = 'http://www.shuaishuaide.top:2010/creche' + '?page=' + num
        console.log('path', path);
        fetch(path, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json()).then(data => {
            this.props.dispatch({
                type: 'DATA',
                data: data
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
                        }} className={this.state.number == 1 ? "tuoyouColor" : ""}>[1]</span>
                        <span onClick={() => {
                            return (this.getFetch(2), this.setState({ number: 2 }))
                        }} className={this.state.number == 2 ? "tuoyouColor" : ""}>[2]</span>
                        <span onClick={() => {
                            return (this.getFetch(3), this.setState({ number: 3 }))
                        }} className={this.state.number == 3 ? "tuoyouColor" : ""}>[3]</span>
                        <span onClick={() => {
                            return (this.getFetch(4), this.setState({ number: 4 }))
                        }} className={this.state.number == 4 ? "tuoyouColor" : ""}>[4]</span>
                    </div>
                </div>
            )

        }
        return (<div>
            <button className='addTuoyou' onClick={() => { this.props.history.push('/addTuoyou') }}> + 添加机构</button>
            <table className="tuoyouTable">
                <thead>
                    <tr className="tuoyouTr">
                        <th className="tuoyouTh">机构名称</th>
                        <th className="tuoyouTh">机构ID</th>
                        <th className="tuoyouTh">机构图片</th>
                        <th className="tuoyouTh">删除机构</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        arr.map((items, idx) => {
                            //图片路径
                            var path = "http://www.shuaishuaide.top:2010/" + items.Tpicture;
                            console.log(path)
                            return (
                                <tr>
                                    <td className="tuoyouTd">{items.Tname}    </td>
                                    <td className="tuoyouTd">{items.Tno}  </td>
                                    <td className="tuoyouTd"><img src={path} className="tuoyouImg" /></td>
                                    <td className="tuoyouTd">
                                        <button onClick={() => {
                                            fetch("http://www.shuaishuaide.top:2010/creche/delete", {
                                                method: "POST",
                                                body: JSON.stringify({ Tno: items.Tno })
                                            }).then(res => {
                                                this.props.dispatch({
                                                    type: 'DEL',
                                                    index: idx
                                                })
                                            })
                                        }} className="tuoyouBtn">删除机构</button>
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
                }} className={this.state.number == 1 ? "tuoyouChangecolor" : ""}>[1]</span>
                <span onClick={() => {
                    return (this.getFetch(2), this.setState({ number: 2 }))
                }} className={this.state.number == 2 ? "tuoyouChangecolor" : ""}>[2]</span>
                <span onClick={() => {
                    return (this.getFetch(3), this.setState({ number: 3 }))
                }} className={this.state.number == 3 ? "tuoyouChangecolor" : ""}>[3]</span>
                <span onClick={() => {
                    return (this.getFetch(4), this.setState({ number: 4 }))
                }} className={this.state.number == 4 ? "tuoyouChangecolor" : ""}>[4]</span>
            </div>
        </div>)

    }
}
const getData = (state) => {
    return {
        data: state.data
    }
}
export default connect(getData)(withRouter(Tuoyou));