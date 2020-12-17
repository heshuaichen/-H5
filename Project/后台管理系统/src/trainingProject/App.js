import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login'
import Content from './content';
import {Provider} from 'react-redux';
import store from './Redux/Store';
import addCourse from './课程管理/addCourse';
//上传
import addTuoyou from './托幼机构管理/addTuoyou';
import addJishi from './集市管理/addJishi';
import addYoueryuan from './幼儿园管理/addYoueryuan';
import addXueqian from './学前机构管理/addXueqian';


const App = ()=>{
    return(
        <Provider store={store}>
        <Router>
            <Switch>
                <Route path='/' exact component={Login} />
                <Route path='/content'  component={Content} />
                <Route path="/addYoueryuan" component={addYoueryuan}/>
                <Route path='/addCourse' component={addCourse} />
                <Route path='/addTuoyou'  component={addTuoyou} />
                <Route path='/addJishi'  component={addJishi} />
                <Route path='/addXueqian'  component={addXueqian} />
            </Switch>
        </Router>
        </Provider>
       
    )
}

export default App;