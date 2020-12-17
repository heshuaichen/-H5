import { Flex, WingBlank } from 'antd-mobile'
import React, { Component } from 'react'
import '../css/commdetail.css';
import {connect} from 'react-redux';

class Commdetail extends Component {
    constructor(){
        super()
        this.state = {
            str:''
            
        }
    }
    render() {
        console.log('机构',this.props.getJG);
        //判断是什么机构
        let obj = this.props.getJG;
        let str = ''
        if(obj.Tno){
            //是托育机构
          str = 'T'
        }else if(obj.Yno){
            //是幼儿园
          str = 'Y';
        }else if(obj.Pno){
            //学前机构
            str = 'P'
        }
        let name = str + 'name';
        let picture =str+'picture';
        let local = str + 'local';
        let tel = str + 'tel';
        let introduce = str + 'introduce';
        var path="http://www.shuaishuaide.top:2010/"+obj[picture]
        return (
            <div className='commdetail'>
                <header style={{textAlign:'left'}}><span onClick={()=>{this.props.history.goBack()}}>{'<'}</span>{obj[name]}</header>
                <Flex className='cd-head'>
                    <Flex.Item>
                        <Flex.Item>
                            <img src={path}></img>
                        </Flex.Item>
                        <Flex.Item>
                            {/* <p className='cd-head-name'>{obj.Tname}</p> */}
                            <p className='cd-head-addr'>{obj[local]}</p>
                        </Flex.Item>
                    </Flex.Item>
                </Flex>
                <div style={{float:'right',fontSize:'10px',marginTop:'5px',color:'red',marginRight:'10px'}}>打热线电话报名:</div>
                <div className='cd-addr'>
                    <WingBlank style={{marginTop:'20px'}}>
                    <p style={{position:'relative',top:'10px'}}>{obj[name]}</p>
                    <button className='cd-addr-phone'>
                        <img src={require('./img/phone.png')} style={{marginTop:'12px'}}></img>
                        <span style={{display:'inline-block',position:'relative',top:'-2px'}}>{obj[tel]}</span>
                    </button></WingBlank>
                </div>
               
                <div className='cd-img'>  
                <WingBlank style={{lineHeight:'25px',fontWeight:'bold' ,marginTop:'80px'}}>
                    <p><span>-----</span>机构详情<span>-----</span></p>
                    <div className='cd-word'>
                    <WingBlank>
                    <div className='cd-word-div'>
                        <p style={{paddingBottom:'15px'}}>{obj[introduce]}</p>
                    </div>
                    
                    
                    </WingBlank>
                </div>
                   
                </WingBlank>
                </div>
            </div>
        )
    }
}
const getStore = (state) => {
    return {
      getJG:state.getJG
  
    }
  }
export default connect(getStore)(Commdetail)
