import React, { Component } from 'react'
import '../css/shopping.css'
import { Flex, SearchBar, } from 'antd-mobile';
import Mytab from '../Mytab';
import { connect } from 'react-redux';
import { shopData } from '../Redux/Reducer';

class Shopping extends Component {
    constructor() {
        super()
        this.state = ({
            data: []
        })
    }
    componentDidMount() {
        fetch("http://www.shuaishuaide.top:2010/shop", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json()).then(data => {
            console.log('集市:', data);
            this.props.dispatch({
                type: 'ADD_SHOP_DATA',
                shop: data
            })
        });
    }
    render() {
        const arr = this.props.shopData;
        if (arr.length < 1) {
            return (
                <div>当前暂无数据</div>
            )
        }
        return (
            <div>
                <Mytab />
                <header>
                    保教集市
                </header>
                <div className='search'>
                    <SearchBar placeholder="搜索好物" maxLength={8} onFocus={() => { this.props.history.push('/shopping-search') }} />
                </div>
                <div className='wrap'>
                    {
                        arr.map((item, i) => {
                            let path = "http://www.shuaishuaide.top:2010/" + item.Spicture;
                            return (<div className='box' onClick={() => {
                                this.props.dispatch({
                                    type: 'ADD_SHOP',
                                    shop: item
                                })
                                this.props.history.push('/gooddetail')
                            }}>
                                <div><img src={path} /></div>
                                <span className='left'>{item.Sage}</span>
                                <span className='right'>{item.Stype}</span>
                                <div className="shopSname">{item.Sname}</div>

                                <div style={{ color: 'red' }}>￥ {item.Sprice}
                                </div>
                            </div>)
                        }
                        )
                    }
                </div>
                <div className='empty' style={{ top: '800px', position: "relative" }}></div>
            </div>

        )
    }
}
const getData = (state) => {
    console.log(state.shopData);
    return ({
        shopList: state.myShop,
        shopData: state.shopData
    })
}
export default connect(getData)(Shopping);
