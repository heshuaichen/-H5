import React from 'react'
import { TabBar } from 'antd-mobile'
import { withRouter } from 'react-router-dom';

class Mytab extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { pathname } = this.props.location;
    if (pathname.split('/').length > 2) {
      return null;
    }
    return (
      <div style={{ position: 'fixed', width: '100%', bottom: 0 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
        >
          <TabBar.Item
            title="社区"
            key="comm"
            icon={
              <i className='iconfont icon-community'></i>
            }
            selectedIcon={
              <i className='iconfont icon-community'></i>
            }
            selected={pathname === '/'}
            onPress={() => {
              this.props.history.push('/');
            }}
            data-seed="logId"
          >
          </TabBar.Item>
          <TabBar.Item
            icon={
              <i className='iconfont icon-gouwu'></i>
            }
            selectedIcon={
              <i className='iconfont icon-gouwu1'></i>
            }
            title="集市"
            key="shopping"
            selected={pathname === '/shopping'}
            onPress={() => {
              this.props.history.push('/shopping')
            }}
            data-seed="logId1"
          >
          </TabBar.Item>
          <TabBar.Item
            icon={
              <i className='iconfont icon-yingyangketang' ></i>
            }
            selectedIcon={
              <i className='iconfont icon-yingyangketang'></i>
            }
            title="课堂"
            key="course"
            selected={pathname === '/course'}
            onPress={() => {
              this.props.history.push('/course')
            }}
          >
          </TabBar.Item>
          <TabBar.Item
            icon={<i className='iconfont icon-wode'></i>}
            selectedIcon={
              <i className='iconfont icon-wodedangxuan'></i>
            }
            title="我的"
            key="mypage"
            selected={pathname === '/mypage'}
            onPress={() => {
              this.props.history.push('/mypage')
            }}
          >
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}
export default withRouter(Mytab);