import React from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './jishi.css'

class Jishi extends React.Component {
    constructor() {
        super();
        this.state = ({
            number: 1
        })
    }
    componentDidMount() {
        fetch("http://www.shuaishuaide.top:2010/shop", {
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
        let path = 'http://www.shuaishuaide.top:2010/shop' + '?page=' + num
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
                        }} className={this.state.number == 1 ? "jishiColor" : ""}>[1]</span>
                        <span onClick={() => {
                            return (this.getFetch(2), this.setState({ number: 2 }))
                        }} className={this.state.number == 2 ? "jishiColor" : ""}>[2]</span>
                        <span onClick={() => {
                            return (this.getFetch(3), this.setState({ number: 3 }))
                        }} className={this.state.number == 3 ? "jishiColor" : ""}>[3]</span>
                        <span onClick={() => {
                            return (this.getFetch(4), this.setState({ number: 4 }))
                        }} className={this.state.number == 4 ? "jishiColor" : ""}>[4]</span>
                    </div>
                </div>
            )

        }

        return (<div>
            <button className='addJishi' onClick={() => { this.props.history.push('/addJishi') }}> + 添加商品</button>
            <table className="jishiTable">
                <thead>
                    <tr className="jishiTr">
                        <th className="jishiTh">商品名称</th>
                        <th className="jishiTh">商品价格</th>
                        <th className="jishiTh">商品图片</th>
                        <th className="jishiTh">删除商品</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        arr.map((items, idx) => {
                            //图片路径
                            var path = "http://www.shuaishuaide.top:2010/" + items.Spicture;
                            console.log(path)
                            return (
                                <tr>
                                    <td className="jishiTd">{items.Sname}    </td>
                                    <td className="jishiTd">{items.Sprice}  </td>
                                    <td className="jishiTd"><img src={path} className="jishiImg" /></td>
                                    <td className="jishiTd">
                                        <button onClick={() => {
                                            fetch("http://www.shuaishuaide.top:2010/shop/delete", {
                                                method: "POST",
                                                body: JSON.stringify({ Sno: items.Sno })
                                            }).then(res => {
                                                //删除课程
                                                this.props.dispatch({
                                                    type: 'DEL',
                                                    index: idx
                                                })
                                            })
                                        }} className="jishiBtn">删除商品</button>
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
                }} className={this.state.number == 1 ? "jishiChangecolor" : ""}>[1]</span>
                <span onClick={() => {
                    return (this.getFetch(2), this.setState({ number: 2 }))
                }} className={this.state.number == 2 ? "jishiChangecolor" : ""}>[2]</span>
                <span onClick={() => {
                    return (this.getFetch(3), this.setState({ number: 3 }))
                }} className={this.state.number == 3 ? "jishiChangecolor" : ""}>[3]</span>
                <span onClick={() => {
                    return (this.getFetch(4), this.setState({ number: 4 }))
                }} className={this.state.number == 4 ? "jishiChangecolor" : ""}>[4]</span>
            </div>
        </div>)
    }
}
const getData = (state) => {
    return {
        data: state.data
    }
}
export default connect(getData)(withRouter(Jishi));