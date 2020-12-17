import React from 'react';
import {NavLink,withRouter} from 'react-router-dom';
import '../../css/detail-header.css';
class Detailheader extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return <div>
            {/* 导航标签 */}
            <header className='detailHeader'>
                <nav className='detail-nav'>
                    <NavLink activeClassName='detail-active' exact to='/'>详情</NavLink>
                    <NavLink activeClassName='detail-active' to='/content'>内容</NavLink>         
                </nav>
                
            </header>
        </div>
    }
}
export default withRouter(Detailheader);