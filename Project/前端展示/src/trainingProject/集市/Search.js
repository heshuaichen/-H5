import React, { Component } from 'react'
import '../css/search.css'
import { connect } from 'react-redux';
import { Flex,Icon,SearchBar } from 'antd-mobile';
class MySearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: -1,
            value: ''
        }
    }
    searchShop = () => {
        var content = [{ Sname: '您搜索的好物不存在!' }]
        //搜索框
        console.log("value:", this.state.value);
        fetch("http://www.shuaishuaide.top:2015/select/shop", {
            method: "POST",
            body: JSON.stringify({ value: this.state.value }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json()
        ).then(data => {
            if (data.length !== 0) {
                this.props.dispatch({
                    type: 'ADD_SHOPSEARCH_DATA',
                    shopSearch: data
                });
            } else {
                this.props.dispatch({
                    type: 'ADD_SHOPSEARCH_DATA',
                    shopSearch: content
                });
            }

        }
        );

        //历史记录
        let obj = this.props.loginMsg;
        let name = obj.name;
        fetch("http://www.shuaishuaide.top:2015/select/shop?name=", {
            method: "POST",
            body: JSON.stringify({ name: name, value: this.state.value }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json()
        ).then(data => console.log(data));
        this.state.value = '';
    }
    handleChange = (e) => {
        this.setState({
            value: e.target.value,
        });
    }
    handleMouseEnter = (key, item, event) => {
        this.setState({ index: key, value: item.Sname });
        this.refs.input.value = item;
    }
    componentDidMount() {
        //生命周期，在组件加载完成后，让input聚焦 (focus)
        this.refs.input.focus();
        let obj = this.props.loginMsg;
        let name = obj.name;
        console.log("get-name:", name);
        fetch('http://www.shuaishuaide.top:2015/select/shop?name=' + name, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            return res.json();
        }).then(data =>
            this.props.dispatch({
                type: 'ADD_SHOPHISTORY_DATA',
                shopHistory: data
            })
        )
    }

    //清除历史记录
    clearShophistory = () => {
        let obj = this.props.loginMsg;
        let name = obj.name;
        fetch("http://www.shuaishuaide.top:2015/select/delShoplist?name=", {
            method: "POST",
            body: JSON.stringify({ name: name }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.text()
        ).then(data => {
            this.props.dispatch({
                type: 'ADD_SHOPHISTORY_DATA',
                shopHistory: []
            });
        }
        );
    }
    render() {
        return (
            < div>
                <div className='container'>
                    <Icon type="left"  className="shopSearch-icon" onClick={()=>{this.props.history.push('/shopping')}}/>
                    <input type="text" ref='input' value={this.state.value} onChange={this.handleChange} className='shopInput' placeholder='好物搜索框' />
                    <button onClick={this.searchShop} className='shopBtn'>搜索</button>
                    {/* 渲染得到的列表值 */}
                    <ul className='shopList-group'>
                        {this.props.shopSearchData.map((item, key) => {
                            return <li onClick={() => {
                                this.props.dispatch({
                                    type: 'ADD_SHOP',
                                    shop: item
                                })
                                this.refs.input.focus();
                                this.props.history.push('/gooddetail');
                                this.props.dispatch({
                                    type: 'ADD_SHOPSEARCH_DATA',
                                    shopSearch: []
                                });
                            }} onMouseEnter={(event) => this.handleMouseEnter(key, item, event)} className={key === this.state.index ? 'shopList-group-item-active' : "shopList-group-item"} key={key}>{item.Sname}</li>
                        })}
                    </ul>
                    <div className='strong'>
                        <strong>大家都在搜</strong>
                    </div>
                    {/* 渲染集市首页列表值 */}
                    <ul className='shopList-group'>
                        {this.props.shopData.map((item, key) => {
                            return <li onClick={() => {
                                this.props.dispatch({
                                    type: 'ADD_SHOP',
                                    shop: item
                                })
                                this.refs.input.focus();
                                this.props.history.push('/gooddetail');
                                this.props.dispatch({
                                    type: 'ADD_SHOPSEARCH_DATA',
                                    shopSearch: []
                                });

                            }} onMouseEnter={(event) => this.handleMouseEnter(key, item, event)} className={key === this.state.index ? 'shopList-group-item-active' : "shopList-group-item"} key={key}>{item.Sname}</li>
                        })}
                    </ul>
                    <div className='strong'>
                        <strong>历史记录</strong>
                    </div>

                    <div>
                        {
                            this.props.shopHistoryData.map((item, key) => {
                                if (item.value != '')
                                    return <button className="shopSearch-button">{item.value}</button>
                            })
                        }
                    </div>
                    <div className='strong'>
                        <strong>清除历史记录</strong>
                    </div>
                    <div>
                        <button className="clearShophistory-button" onClick={this.clearShophistory}>清除</button>
                    </div>
                </div>
            </div>
        )
    }
}
const getData = (state) => {
    return ({
        shopList: state.myShop,
        shopSearchData: state.shopSearchData,
        shopData: state.shopData,
        loginMsg: state.loginMsg,
        shopHistoryData: state.shopHistoryData
    })
}

export default connect(getData)(MySearch);
