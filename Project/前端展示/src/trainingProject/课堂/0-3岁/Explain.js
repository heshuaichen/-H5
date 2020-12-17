import React from 'react'
import { Flex, Toast } from 'antd-mobile';
import '../../css/explain.css';
import { connect } from 'react-redux';
import { shoucangCourse } from '../../Redux/Reducer';
const Explain = (props) => {
    let obj = props.getCS;
    console.log('SC:', props.getCS);
    const getSoucang = () => {
        //发送post请求 name Cno 发送
        let Obj = props.loginMsg;
        console.log("MGS:", obj.Cno);
        if (!Obj.name) {
            props.history.push('/mypage/login');
        } else {

            fetch('http://www.shuaishuaide.top:2011/course_shoucang', {
                method: "POST",
                body: JSON.stringify({ name: Obj.name, Cno: obj.Cno, Pay: 0 }),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => {
                return res.text();
            }).then(data => {
                console.log('收藏课程：', data);
                if (data == 'success') {
                    Toast.info('收藏课程成功!!!', 1);
                    props.dispatch({
                        type: 'ADD_COURSE_LIST',
                        data: obj
                    })
                } else {
                    //提示收藏失败
                    Toast.info('已收藏!!!', 1);
                }
            })
        }
    }

    return <div>
        <Flex>
            <Flex.Item>
                <p className='explain-p1'>{obj.Cname}</p>
                <p style={{ float: 'left', textAlign: 'center', color: '#888888' }}>
                    评分：
                    <img src={require('../images/xing.png')} style={{ width: '16px', height: '16px' }} />
                    <img src={require('../images/xing.png')} style={{ width: '16px', height: '16px' }} />
                    <img src={require('../images/xing.png')} style={{ width: '16px', height: '16px' }} />
                    <img src={require('../images/xing.png')} style={{ width: '16px', height: '16px' }} />
                    <img src={require('../images/xing.png')} style={{ width: '16px', height: '16px' }} />
                </p>


                {/* 收藏按钮的实现 */}
                <p className='shoucang' onClick={() => getSoucang()}>收藏</p>
                <p style={{ float: 'left', color: '#888888' }}>
                    {obj.Cintroduce}
                </p>
            </Flex.Item>
        </Flex>
        <Flex style={{ marginTop: '20px' }}>
            <Flex.Item>
                <p style={{ color: '#575757', fontSize: '14px', fontWeight: 'bold' }}>相关推荐</p>
                <Flex.Item className='suggest'>

                    <a href="http://www.iqiyi.com/v_19ruqdjcto.html">
                        <img src='https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4003498343,3148034325&fm=26&gp=0.jpg' alt='小班数学活动《爆米花》vlog' className="suggest-img" />
                    </a>
                    <div className='suggest-p'>
                        <p className='suggest-p1'>数学活动《爆米花》vlog</p>
                        <p className='suggest-p2'>幼儿园亲子游戏活动</p>
                    </div>
                </Flex.Item>
                <Flex.Item className='suggest'>
                    <a href="http://www.iqiyi.com/v_19ruyyf6to.html">
                        <img src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1607074192935&di=5125811cbf89bccf83390e91902f62f8&imgtype=0&src=http%3A%2F%2F1813.img.pp.sohu.com.cn%2Fimages%2Fblog%2F2011%2F8%2F12%2F13%2F15%2Fe11157851_13278a164e8g214.jpg' alt='科学活动《纸片的力量》vlog' className="suggest-img" />
                    </a>
                    <div className='suggest-p'>
                        <p className='suggest-p1'>科学活动《纸片的力量》vlog</p>
                        <p className='suggest-p2'>幼儿园亲子游戏活动</p>
                    </div>
                </Flex.Item>
                <Flex.Item className='suggest'>
                    <a href="http://www.iqiyi.com/w_19rt74yen1.html">
                        <img src='https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1894982997,1929339121&fm=26&gp=0.jpg' alt='语言活动《摇篮》vlog' className="suggest-img" />
                    </a>
                    <div className='suggest-p'>
                        <p className='suggest-p1'>语言活动《摇篮》vlog</p>
                        <p className='suggest-p2'>幼儿园亲子游戏活动</p>
                    </div>
                </Flex.Item>
            </Flex.Item>
        </Flex>
    </div>
}
const getStore = (state) => {
    return {
        loginObj: state.loginDucer,
        course: state.myCourse,
        getlist: state.getlist,
        getCS: state.getCS,
        loginMsg: state.loginMsg,
    }
}
export default connect(getStore)(Explain);
