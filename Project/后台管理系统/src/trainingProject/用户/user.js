import React from 'react';
import {connect} from 'react-redux';
import './user.css';
class User extends React.Component {
    constructor() {
        super();
        this.state = ({
            number:1
        })
    }
    componentDidMount(){
        fetch("http://www.shuaishuaide.top:2010/infor", {
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
    //实现分页查找
    getFetch = (num) => {
        let path = 'http://www.shuaishuaide.top:2010/infor'+'?page='+num
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
                        }} className={this.state.number==1?"userColor":""}>[1]</span>
                        <span onClick={() => {
                            return (this.getFetch(2),this.setState({number:2}))
                        }} className={this.state.number==2?"userColor":""}>[2]</span>
                        <span onClick={() => {
                            return (this.getFetch(3),this.setState({number:3}))
                        }} className={this.state.number==3?"userColor":""}>[3]</span>
                        <span onClick={() => {
                            return (this.getFetch(4),this.setState({number:4}))
                        }} className={this.state.number==4?"userColor":""}>[4]</span>
                    </div>
                </div>
            )
            
        }
        return (
            <div>
            <table className="userTable">
                <thead>
                    <tr className="tableTr">
                        <th className="tableTh">ID</th>
                        <th className="tableTh">用户名</th>
                        <th className="tableTh">密码</th>
                        <th className="tableTh">删除</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        arr.map((item, idx) => {
                            return (
                                <tr className="tableTr">
                                    <td className="tableTd">{item.id}    </td>
                                    <td  className="tableTd">{item.name}  </td>
                                    <td  className="tableTd">{item.password}  </td>
                                    <td  className="tableTd">
                                        <button onClick={() => {
                                            fetch("http://www.shuaishuaide.top:2010/infor", {
                                                method: "POST",
                                                body: JSON.stringify({ userId: item.id })
                                            }).then(res => {
                                               this.props.dispatch({
                                                   type:'DEL',
                                                   index:idx
                                               })
                                            })                
                                        }} className="tableBtn">注销用户</button>
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
                }} className={this.state.number==1?"userChangecolor":""}>[1]</span>
                <span onClick={() => {
                    return (this.getFetch(2),this.setState({number:2}))
                }} className={this.state.number==2?"userChangecolor":""}>[2]</span>
                <span onClick={() => {
                    return (this.getFetch(3),this.setState({number:3}))
                }} className={this.state.number==3?"userChangecolor":""}>[3]</span>
                <span onClick={() => {
                    return (this.getFetch(4),this.setState({number:4}))
                }} className={this.state.number==4?"userChangecolor":""}>[4]</span>
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
export default connect(getData)(User);