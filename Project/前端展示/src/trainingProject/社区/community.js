import React from 'react';

import { Carousel, Flex, WhiteSpace} from 'antd-mobile';
import '../css/community.css'
import { SearchBar, WingBlank } from 'antd-mobile';
import {connect} from 'react-redux';
class Community extends React.Component {
  state = {
    data: ['1', '2', '3','4','5','6','7','8'],
    imgHeight: 176,
    arrT:[],
    arrY:[],
    arrX:[]
  }
  componentDidMount() {
   
    setTimeout(() => {
     
      this.setState({
        data:['https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=114980447,1468637179&fm=26&gp=0.jpg','https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1607074212758&di=8c40cb29021eadfcbf9c808f11df0046&imgtype=0&src=http%3A%2F%2Fimg.91jm.com%2F2015%2F03%2F93uMcYDa9K8D.jpg','https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1607074234612&di=23ee8ff0d2339167c0cf66bfd15f2c27&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20200109%2Fd77fda2052a647da873fcfa50e9652f3.jpeg',]
      });
    }, 100)
    fetch("http://www.shuaishuaide.top:2010/creche", {
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json()).then(data => {
      console.log('托幼:', data);
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
            console.log('幼儿园:', data);
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
            console.log('学前机构:', data);
            this.setState({
              arrX:data
            })

        });
  }
  

  render() {
    return (
        <div className='com'>
          <Flex>
            <Flex.Item><header>育儿社区</header></Flex.Item>
          </Flex>
          <div className='com-car'>
            <div style={{height:'20px'}}></div>
        <WingBlank>
        <Carousel
          autoplay
          infinite
          // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          // afterChange={index => console.log('slide to', index)}
        >
          {this.state.data.map(val => (
            <a
              key={val}
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={`${val}`}
                alt=""
                style={{ width: '100%', verticalAlign: 'top',height:'177px'}}
                onLoad={() => {
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
      </WingBlank>
      </div>
      <div className='com-body'>
        <WingBlank>
        {/* 托育机构 */}
        <div className='com-k'>
          
          <Flex justify='between'>
            <Flex.Item style={{marginLeft:'12px'}}><img src={require('./img/time.png')}></img><span>托幼机构</span></Flex.Item>
            <Flex.Item><span className='com-more' onClick={()=>{this.props.history.push('/community/list/tuoyu')}}>更多 {'>'}</span> </Flex.Item>
          </Flex>
          {
            // console.log('s:',this.state.arrT),
            this.state.arrT.map((item,i)=>{
              var path = "http://www.shuaishuaide.top:2010/" + item.Tpicture;
              if(i>=3) return;
              return(
                <Flex wrap='wrap' className='com-inst' onClick={()=>{
                  this.props.dispatch({
                    type:'ADD_JG',
                    data:item
                  })
                  this.props.history.push('/community/detail')

                  }} key={i}>
                  <div><img src={path}></img></div>
                  <Flex.Item style={{position:'relative'}}>
                    <p style={{fontSize:'16px'}}>{item.Tname}</p>
                    <button className='com-inst-un'>已有{item.Tregister}个宝宝报名</button>
                    <span style={{fontSize:'10px'}}>仅剩{item.Trecruit-item.Tregister}个名额</span>
                    <p style={{marginTop:'40px'}}>￥{item.Tprice}</p> 
                    <s style={{fontSize:'12px',marginLeft:'0'}}>￥{Number(item.Tprice)+500}</s>
                    {/* <button className='com-inst-bm'>去报名</button> */}
                  </Flex.Item>
                </Flex>
              )
            })
          }
          
        </div>
        
        {/* 幼儿园 */}
        <div className='com-k'>
          <Flex justify='between'>
            <Flex.Item style={{marginLeft:'12px'}}><img src={require('./img/time.png')}></img><span>幼儿园</span></Flex.Item>
            <Flex.Item><span className='com-more' onClick={()=>{this.props.history.push('/community/list/youeryuan')}}>更多 {'>'}</span> </Flex.Item>
          </Flex>
          {
            this.state.arrY.map((item,i)=>{
              var path = "http://www.shuaishuaide.top:2010/" + item.Ypicture;
              if(i>=3) return;
              return(
                <Flex wrap='wrap' className='com-inst' onClick={()=>{
                  this.props.dispatch({
                    type:'ADD_JG',
                    data:item
                  })
                  this.props.history.push('/community/detail')}} key={i}>
                <div><img src={path}></img></div>
                <Flex.Item style={{position:'relative'}}>
                  <p style={{fontSize:'16px'}}>{item.Yname}</p>
                  <button className='com-inst-un'>已有{item.Yregister}个宝宝报名</button>
                  <span style={{fontSize:'10px'}}>仅剩{item.Yrecruit-item.Yregister}个名额</span>
                  <p style={{marginTop:'40px'}}>￥{item.Yprice}</p> 
                  <s style={{fontSize:'12px',marginLeft:'0'}}>￥{Number(item.Yprice)+500}</s>
                  {/* <button className='com-inst-bm'>去报名</button> */}
                </Flex.Item>
              </Flex>
            )
            })
          }
        </div>

        {/* 学前机构 */}
        <div className='com-k'>
          <Flex justify='between'>
            <Flex.Item style={{marginLeft:'12px'}}><img src={require('./img/time.png')}></img><span>学前机构</span></Flex.Item>
            <Flex.Item><span className='com-more' onClick={()=>{this.props.history.push('/community/list/xueqian')}}>更多 {'>'}</span> </Flex.Item>
          </Flex>
          {
            this.state.arrX.map((item,i)=>{
              var path = "http://www.shuaishuaide.top:2010/" + item.Ppicture;
              if(i>=3) return;
              return(
                <Flex wrap='wrap' className='com-inst' onClick={()=>{
                  this.props.dispatch({
                    type:'ADD_JG',
                    data:item
                  })
                  this.props.history.push('/community/detail')}} key={i}>
                <div><img src={path}></img></div>
                <Flex.Item style={{position:'relative'}}>
                  <p style={{fontSize:'16px'}}>{item.Pname}</p>
                  <button className='com-inst-un'>已有{item.Pregister}个宝宝报名</button>
                  <span style={{fontSize:'10px'}}>仅剩{Number(item.Precruit)-Number(item.Pregister)}个名额</span>
                  <p style={{marginTop:'40px'}}>￥{item.Pprice}</p> 
                  <s style={{fontSize:'12px',marginLeft:'0'}}>￥{Number(item.Pprice)+500}</s>
                  {/* <button className='com-inst-bm'>去报名</button> */}
            </Flex.Item>
              </Flex>
            )
            })
          }
        </div>
        
        </WingBlank>
      </div>  
      
      </div>
      );
  }

}
const getStore = (state) => {
  return {
    getJG:state.getJG

  }
}
export default connect(getStore)(Community);









