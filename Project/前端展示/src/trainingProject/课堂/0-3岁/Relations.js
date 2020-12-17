import React from 'react';
import { Carousel, Flex, WhiteSpace, WingBlank } from 'antd-mobile';
import '../../css/relations.css';
import { connect } from 'react-redux';
import { mycourse } from '../../Redux/actionCreators'
class Relations extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ['1', '2', '3', '4', '5'],
            imgHeight: 180,
        }

    }
    componentDidMount() {
        this.props.dispatch(mycourse());
        setTimeout(() => {
            this.setState({
                data: ['https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2859329410,4203365488&fm=26&gp=0.jpg', 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2789156053,4215004908&fm=26&gp=0.jpg', 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=769868473,2512816249&fm=26&gp=0.jpg', 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=147180846,2753261935&fm=26&gp=0.jpg', 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1761151234,1443098729&fm=26&gp=0.jpg'],
            });
        }, 100);
        //发送请求获得课程的信息
        fetch("http://www.shuaishuaide.top:2010/course", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json()).then(data => {
            console.log('课程:', data);
            this.props.dispatch({
                type: 'ADD_COURSE',
                data: data
            })

        });
    }
    render() {
        return (
            <WingBlank>
                <WhiteSpace />
                {/* 轮播图 */}
                <Carousel
                    autoplay={true}
                    infinite
                >
                    {this.state.data.map(val => (
                        <img
                            src={`${val}`}
                            alt=""
                            style={{ width: '100%', verticalAlign: 'top', height: '180px' }}
                            onLoad={() => {
                                window.dispatchEvent(new Event('resize'));
                                this.setState({ imgHeight: 'auto' });
                            }}
                        />
                    ))}
                </Carousel>
                <WhiteSpace />
                {/* 视频列表 */}
                {/* 从数据库获取数据 */}
                <div className='video-list'>
                    {/* 第一排 */}
                    {
                        this.props.getCourse.map((item, idx) => (
                            <Flex className="list">
                                <Flex.Item onClick={() => {
                                    this.props.dispatch({
                                        type:'ADD_CS',
                                        data:item
                                    })
                                    this.props.history.push('/detail/explain');
                                   
                                }}>
                                    <Flex.Item>
                                        <img src={'http://www.shuaishuaide.top:2010/' + item.Cpicture} className="list-img" />
                                    </Flex.Item>
                                    <Flex.Item className="list-text1">
                                        <p>{item.Cname}</p>
                                    </Flex.Item>
                                    <Flex.Item className="list-text2">
                                        <p>
                                            评分：
                                            <span>
                                                <img src={require('../images/xing.png')} className="list-img1" />
                                                <img src={require('../images/xing.png')} className="list-img1" />
                                                <img src={require('../images/xing.png')} className="list-img1" />
                                                <img src={require('../images/xing.png')} className="list-img1" />
                                                <img src={require('../images/xing.png')} className="list-img1" />
                                            </span>
                                        </p>
                                    </Flex.Item>
                                    <Flex.Item>
                                        {item.Cprice == '免费' ? <span style={{ padding: '0.2rem', color: 'red', marginBottom: '0.2rem', fontSize: '1.1rem', fontWeight: 'bold' }}> </span> : <span style={{ padding: '0.2rem', color: 'red', marginBottom: '0.2rem', fontSize: '1.1rem', fontWeight: 'bold' }}>￥</span>}
                                        {item.Cprice}
                                    </Flex.Item>
                                </Flex.Item>
                            </Flex>
                        ))}

                </div>
            </WingBlank>
        );
    }
}
const getStore = (state) => {
    return {
        loginObj: state.loginDucer,
        course: state.myCourse,
        getCourse:state.getCourse,
        getCS:state.getCS
    }
}
export default connect(getStore)(Relations);
