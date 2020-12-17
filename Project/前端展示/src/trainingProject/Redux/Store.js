import { createStore, compose, combineReducers, applyMiddleware } from 'redux'
import { courseHistoryData, loginDucer } from './Reducer';
import { myCourse } from './Reducer';
import thunk from 'redux-thunk';
import {myShop} from './Reducer';
import {loginMsg} from './Reducer';
import {shopData} from './Reducer';
import {shopCount} from './Reducer';
import {orderList} from './Reducer';
import {getCourse} from './Reducer';
import {getCS} from './Reducer';
import {getJG} from './Reducer';
import {shoucangCourse} from './Reducer'
import {shopSearchData} from './Reducer';
import {shopHistoryData} from './Reducer';
import {courseSearchData} from './Reducer';
import {willBuycourse} from './Reducer';
import {myCourse_list} from './Reducer';
import {Npay} from './Reducer';
import {Ypay} from './Reducer';
import {Allpay} from './Reducer';

let rootReducer = combineReducers({
    loginDucer:loginDucer,
    myCourse:myCourse,
    myShop:myShop,
    loginMsg:loginMsg,
    shopData:shopData,
    shopCount:shopCount,
    orderList:orderList,
    getCourse:getCourse,
    getCS:getCS,
    getJG:getJG,
    shoucangCourse:shoucangCourse,
    shopSearchData:shopSearchData,
    shopHistoryData:shopHistoryData,
    courseSearchData:courseSearchData,
    courseHistoryData:courseHistoryData,
    willBuycourse:willBuycourse,
    myCourse_list:myCourse_list,
    Npay:Npay,
    Ypay:Ypay,
    Allpay,Allpay

})
const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk)
    )
);
export default store;