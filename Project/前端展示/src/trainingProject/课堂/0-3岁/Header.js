import React from 'react';
import {NavLink,withRouter} from 'react-router-dom';
import '../../css/header.css';
class Home extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return <div>
            {/* 导航标签 */}
            <header className='courseHeader'>
                <nav className='course-nav'>
                    <NavLink activeClassName='course-active' exact to='/home/methods'>育儿方法</NavLink>
                    <NavLink activeClassName='course-active' to='/home/methods/relations'>亲子交往</NavLink>
                    <NavLink activeClassName='course-active' to='/home/methods/answers'>答疑解难</NavLink>               
                </nav>
                
            </header>
        </div>
    }
}
export default withRouter(Home);