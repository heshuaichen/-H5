import React from 'react';
import { Flex ,Icon,TabBar} from 'antd-mobile';
import '../css/course.css'
class Course extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        console.log(this.props.location.href)
        return <div>
            <Flex>
                <Flex.Item>
                    <p className='title'>精品课</p>
                </Flex.Item>                
            </Flex>
            <Flex>
                <Flex.Item>
                    <button className='btn' onClick={()=>this.props.history.push('/home/methods')}>0-3岁</button>
                    <button className='btn'>3-6岁</button>
                    <button className='btn'>更多分类</button>
                </Flex.Item>
            </Flex>
            <Flex>
                <Flex.Item>       
                    {/* 点击实现自动弹出添加QQ好友邀请窗口,使用window.location实现       */}
                    <div className='invitation' onClick={()=>{
                        window.location.href="tencent://message/?uin=我们的QQ号码&Site=网站名称&Menu=yes"
                    }}>
                        <img src={require('./images/dianzan.png')} style={{width:'20px',height:'20px',marginLeft:'20px',float:'left',marginTop:'10px'}}/>                      
                        <span style={{fontSize:'14px',width:'200px',marginLeft:'20px'}}>邀请小伙伴一起学习赠送免费课程</span>
                        <span style={{width:'60px',fontSize:'12px',color:'#FF552B',marginLeft:'10px'}} >去邀请&gt;</span>
                    </div>
                </Flex.Item>
            </Flex>
            <Flex>
                <Flex.Item>
                    <div className='class1'>
                        <div className='top1'>
                            <img src={require('./images/img1.png')} style={{width:'18px',height:'18px',float:'left',marginLeft:'10px',marginTop:'5px'}} className='img1'/>
                            <span style={{fontSize:'16px',fontWeight:'bold',width:'100px'}} className='span1'>育儿方法</span>
                            <span style={{fontSize:'12px',marginLeft:'10px',color:'#999999'}} className='span2'>适合刚有宝宝的妈妈</span>
                        </div>  
                        <div className='content1' onClick={()=>this.props.history.push('/home/methods')}>
                            <img src='https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3264356227,2639352617&fm=26&gp=0.jpg' style={{width:'115px',height:'115px',marginLeft:'10px',float:'left'}}/>                            
                            <div className='text'>
                                <div className='text1'>育儿妙招</div>
                                <div className='text2'>育儿方法对婴幼儿的早期发展和成长有着重要作用</div>
                                <div className='text3'>
                                    <span style={{width:'60px',fontSize:'12px',color:'#999999',float:'left',marginLeft:'15px'}}>难度：中等</span>
                                </div>
                                <div className='text4'>
                                    <button className='btn1'>营养搭配</button>
                                    <button className='btn1'>卫生保健</button>
                                </div>
                            </div>
                        </div>  
                    </div> 
                    <div className='class1'>
                        <div className='top1'>
                            <img src={require('./images/img1.png')} style={{width:'18px',height:'18px',float:'left',marginLeft:'10px',marginTop:'5px'}} className='img1'/>
                            <span style={{fontSize:'16px',fontWeight:'bold',width:'100px'}} className='span1'>亲子交往</span>
                            <span style={{fontSize:'12px',marginLeft:'10px',color:'#999999'}} className='span2'>适合增进亲子关系</span>
                        </div>  
                        <div className='content1' onClick={()=>this.props.history.push('/home/methods/relations')}>
                            <img src='https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1549964229,489435911&fm=26&gp=0.jpg' style={{width:'115px',height:'115px',marginLeft:'15px',float:'left'}}/>
                            
                            <div className='text'>
                                <div className='text1'>亲子课堂</div>
                                <div className='text2'>亲子交往是儿童早期生活中最主要的社会关系</div>
                                <div className='text3'>
                                    <span style={{width:'60px',fontSize:'12px',color:'#999999',float:'left',marginLeft:'10px'}}>难度：较难</span>
                                </div>
                                <div className='text4'>
                                    <button className='btn1'>温情时刻</button>
                                    <button className='btn1'>亲子互动</button>
                                </div>
                            </div>
                        </div>  
                    </div>    
                    <div className='class1'>
                        <div className='top1'>
                            <img src={require('./images/img1.png')} style={{width:'18px',height:'18px',float:'left',marginLeft:'10px',marginTop:'5px'}} className='img1'/>
                            <span style={{fontSize:'16px',fontWeight:'bold',width:'100px'}} className='span1'>答疑解惑</span>
                            <span style={{fontSize:'12px',marginLeft:'10px',color:'#999999'}} className='span2'>解答育儿中的问题</span>
                        </div>  
                        <div className='content1' onClick={()=>this.props.history.push('/home/methods/answers')}>
                            <img src='https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2069636712,3537594880&fm=26&gp=0.jpg' style={{width:'115px',height:'115px',marginLeft:'10px',float:'left'}}/>
                            
                            <div className='text'>
                                <div className='text1'>隐藏攻略</div>
                                <div className='text2'>为亲子交往提供更多隐藏攻略</div>
                                <div className='text3'>
                                    <span style={{width:'60px',fontSize:'12px',color:'#999999',float:'left',marginLeft:'15px'}}>难度：困难</span>
                                </div>
                                <div className='text4'>
                                    <button className='btn1'>成长困惑</button>
                                    <button className='btn1'>亲子关系</button>
                                </div>
                            </div>
                        </div>  
                    </div>
                    <div style={{height:'100px'}}></div>                         
                </Flex.Item>
            </Flex>
        </div>
    }
}
export default Course;