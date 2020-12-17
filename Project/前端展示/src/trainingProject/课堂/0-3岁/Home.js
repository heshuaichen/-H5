import React from 'react';
import {HashRouter as Router,Route,Switch} from 'react-router-dom';
import { Flex,Icon,SearchBar } from 'antd-mobile';
import Header from './Header';
import routes from './router-config'

const Home =(props)=>{
    return <div>
        <Flex>
            <Flex.Item>
                <Icon type="left" style={{position:'absolute',marginTop:'10px'}} onClick={()=>{props.history.push('/course')}}/>
                {/* 搜索框 */}
                <SearchBar placeholder="寻找课程" maxLength={5} style={{width:'85%',float:"left",marginLeft:'5%',backgroundColor:'#F5F5F5'}} onFocus={()=>{props.history.push("/home/statusfocus")}}/>                   
            </Flex.Item>
        </Flex>
        <Header/>
        <Switch>
            {
                routes.map((route)=>{
                    return(
                        <Route {...route}/>
                    )
                    
                })
            }
        </Switch>
    </div>
}
export default Home;