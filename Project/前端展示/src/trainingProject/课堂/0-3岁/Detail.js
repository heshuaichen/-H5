import React from 'react'
import {HashRouter as Router,Route,Switch,withRouter} from 'react-router-dom';
import { Flex,Icon,SearchBar } from 'antd-mobile';
import ReactPlayer from 'react-player'
import {NavLink} from 'react-router-dom';
import '../../css/detail-header.css';
import Explain from './Explain';
import Content from './Content'
class Detail extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return <div>
            <Flex>
                <Flex.Item>
                    <div>
                        <Icon type="left" size='lg' style={{position:'absolute',color:'rgb(58, 58, 58)',top:'10px'}} onClick={()=>{this.props.history.push('/home/methods/relations')}}/>
                        <p className='course-name'>亲子交往</p>
                    </div>
                    <ReactPlayer 
                        url='https://media.w3.org/2010/05/sintel/trailer_hd.mp4' 
                        className='react-player'
                        controls
                        width='100%'
                        height='100%'
                    />
                </Flex.Item>
            </Flex>            
            <div>
                <nav className='detail-nav'>
                    <NavLink activeClassName='detail-active' exact to='/detail/explain'>详情</NavLink>
                    <NavLink activeClassName='detail-active' to='/detail/explain/content' style={{marginLeft:'0px'}}>内容</NavLink>         
                </nav>                
                <Switch>
                    <Route exact path='/detail/explain' component={Explain} />
                    <Route path='/detail/explain/content' component={Content}/>
                </Switch>
            </div>
        </div>
        

    }
}
export default withRouter(Detail);
