import { Flex, WingBlank } from 'antd-mobile'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../css/commlist.css'
class Commlist extends Component {
    constructor(){
        super()
        this. state={
            typeurl:'',
            arrT:[],
            arrY:[],
            arrX:[],
        }
    }
   
    componentDidMount(){
        fetch("http://www.shuaishuaide.top:2010/creche", {
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json()).then(data => {
      this.setState({
        arrT:data
      })
    });
    fetch("http://www.shuaishuaide.top:2010/kind", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json()).then(data => {
           this.setState({
               arrY:data
           })
        });
        fetch("http://www.shuaishuaide.top:2010/preschool", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json()).then(data => {
            this.setState({
              arrX:data
            })

        });
    }
    render() {

        var type=this.props.match.params.type;
        let arr = [];
        let str = ''
        if(type==='tuoyu'){
            type='托幼机构';
            arr = this.state.arrT; 
            str = 'T'           
        } 
        else if(type=='youeryuan') {
            type='幼儿园';
            arr = this.state.arrY;
            str = 'Y';
        }
        else if(type=='xueqian') {
            type='学前机构';
            arr = this.state.arrX;
            str = 'P';
        }
        else {
            type='未知机构'
        }
        let name = str + 'name';
        let price = str + 'price';
        let picture = str + 'picture';
        console.log('更多:',this.state.arrX);
        console.log('arr list   :',arr);
        return (
            <div className='commlist'>
                <header style={{textAlign:'left'}} onClick={()=>{this.props.history.push('/')}}>{'<'} {type}</header>
                <WingBlank>
                {
                    arr.map((item,i)=>{
                        var path = "http://www.shuaishuaide.top:2010/" + item[picture]
                        return(
                            <Flex wrap='wrap' className='cl-inst'  onClick={()=>{this.props.history.push('/community/detail')}}>
                   
                                <img src={path}/>
                                <Flex.Item style={{fontSize:'12px'}}>
                                    <p style={{fontSize:'16px'}}>{item[name]}</p>
                                    <p style={{color:'#9B9B9B',margin:'5px 0 5px 0'}}>培养多维度思考，国际化视野幼儿</p> 
                                    <p style={{color:'red',fontWeight:'bold'}}>12.15-12.24抢付定金，享优惠</p>
                                    <p style={{color:'red',marginTop:'30px'}}>￥{item[price]}</p>
                                    <s style={{color:'#656565'}}>￥{Number(item[price])+500}</s>
                                    <button className='cl-inst-bm' onClick={() => {
                                        this.props.dispatch({
                                            type:'ADD_JG',
                                            data:item
                                        })
                                    }}>去报名</button>
                                </Flex.Item>
                            </Flex> 
                        )
                    })
                }
                </WingBlank>
            </div>
        )
    }
}

const getStore = (state) => {
    return {
      getJG:state.getJG
  
    }
  }
export default connect(getStore)(Commlist)