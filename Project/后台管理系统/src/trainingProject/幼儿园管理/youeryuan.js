import React from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './youeryuan.css';
class Youeryuan extends React.Component {
    constructor() {
        super();
        this.state = ({
            number:1
        })
    }
    componentDidMount() {
        fetch("http://www.shuaishuaide.top:2010/kind", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json()).then(data => {
            console.log('幼儿园:', data);
            this.props.dispatch({
                type:'DATA',
                data:data
            })

        });
    }
    getFetch = (num) => {
        let path = 'http://www.shuaishuaide.top:2010/kind'+'?page='+num
        console.log('path',path);
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
        if(arr.length <1 && this.state.number !==1){
            return(
                <div>
                    <div style={{textAlign:'center',fontWeight:'bold',marginTop:'15%'}}>当前页暂无数据，可选择返回上一页</div>
                <div className='footB'>
                    <span onClick={() => {
                        return (this.getFetch(1), this.setState({number:1}))
                    }} className={this.state.number==1?"youeryuanColor":""}>[1]</span>
                    <span onClick={() => {
                        return (this.getFetch(2),this.setState({number:2}))
                    }} className={this.state.number==2?"youeryuanColor":""}>[2]</span>
                    <span onClick={() => {
                        return (this.getFetch(3),this.setState({number:3}))
                    }} className={this.state.number==3?"youeryuanColor":""}>[3]</span>
                    <span onClick={() => {
                        return (this.getFetch(4),this.setState({number:4}))
                    }} className={this.state.number==4?"youeryuanColor":""}>[4]</span>
                </div>
            </div>
            )
            
        }
        return(<div>
            <button className='addYoueryuan' onClick={()=>{this.props.history.push('/addYoueryuan')}}> + 添加机构</button>            
            <table className="youeryuanTable">
                <thead>
                    <tr className="youeryuanTr">
                        <th className="youeryuanTh">机构名称</th>
                        <th className="youeryuanTh">机构ID</th>
                        <th className="youeryuanTh">机构图片</th>
                        <th className="youeryuanTh">删除机构</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        arr.map((items, idx) => {
                            //图片路径
                            var path = "http://www.shuaishuaide.top:2010/" + items.Ypicture;
                            console.log(path)
                            return (
                                <tr>
                                    <td className="youeryuanTd">{items.Yname}    </td>
                                    <td className="youeryuanTd">{items.Yno}  </td>
                                    <td className="youeryuanTd"><img src={path} className="youeryuanImg"/></td>
                                    <td className="youeryuanTd">
                                        <button onClick={() => {
                                            fetch("http://www.shuaishuaide.top:2010/kind/delete", {
                                                method: "POST",
                                                body: JSON.stringify({ Yno: items.Yno })
                                            }).then(res => {
                                               this.props.dispatch({
                                                   type:'DEL',
                                                   index:idx
                                               })
                                            })
                                        }} className="youeryuanBtn">删除机构</button>
                                    </td>
                                        
                                    </tr>
                    
                                )
                    
                            })
                    }
                </tbody>
            </table>
            <div className='footBtn'>
                <span onClick={() => {
                    return (this.getFetch(1), this.setState({number:1}))
                }} className={this.state.number==1?"youeryuanChangecolor":""}>[1]</span>
                <span onClick={() => {
                    return (this.getFetch(2),this.setState({number:2}))
                }} className={this.state.number==2?"youeryuanChangecolor":""}>[2]</span>
                <span onClick={() => {
                    return (this.getFetch(3),this.setState({number:3}))
                }} className={this.state.number==3?"youeryuanChangecolor":""}>[3]</span>
                <span onClick={() => {
                    return (this.getFetch(4),this.setState({number:4}))
                }} className={this.state.number==4?"youeryuanChangecolor":""}>[4]</span>
            </div>
        </div>)
    }
}
const getData = (state) => {
    return {
        data: state.data
    }
}
export default connect(getData)(withRouter(Youeryuan))