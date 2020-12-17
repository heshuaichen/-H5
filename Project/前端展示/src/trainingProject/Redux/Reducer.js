
const value = sessionStorage.getItem('userinfo');
const loginDucer = (state = { userinfo: value }, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { userinfo: action.username };
        case 'UNLOGIN':
            return { userinfo: '' };
        default:
            return state;
    }
}
export { loginDucer };

const myCourse = (state = [], action) => {
    switch (action.type) {
        case 'MYCOURSE':
            return action.course;
        case 'MYCOURSEADD':
            let arr2 = [...state];//已收藏的课程
            let arr3 = [...state];//全部的课程
            let arr4;//新收藏的课程
            arr3.forEach(item => {
                if (item.Cno == action.Cno) {
                    arr4 = item;
                }
            });
            arr2.push(arr4);
            console.log(arr2);
            let url2 = "http://www.shuaishuaide.top:2010/course";
            fetch(url2, {
                method: "POST",
                data: JSON.stringify(arr2),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            return arr2;
        case 'MYCOURSEDEL':
            let arr = [...state];
            arr.splice(action.index, 1);
            let url = "http://www.shuaishuaide.top:2010/course";
            fetch(url, {
                method: "POST",
                data: JSON.stringify({ arr }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            return arr;
        default:
            return state;
    }
}
export { myCourse };

//集市 点击过后传递的商品数据
const myShop = (state = [], action) => {
    switch (action.type) {
        case 'ADD_SHOP':
            return action.shop;
        case 'DEL_SHOP':
            let arr = [...state];
            arr.splice(action.index, 1);
            return arr;    
        default:
            return state;
    }

}
export {myShop}

//请求得到的集市商品数据
const shopData = (state = [], action) => {
    switch (action.type) {
        case 'ADD_SHOP_DATA':
            return action.shop;
        case 'DEL_SHOP':
            let arr = [...state];
            arr.splice(action.index, 1);
            return arr;    
        default:
            return state;
    }

}
export {shopData}

//实时获得购买的商品数量
const shopCount= (state = 1, action) => {
    switch (action.type) {
        case 'ADD_COUNT':
            return action.count;
        case 'DEL_COUNT':
            let arr = [...state];
            arr.splice(action.index, 1);
            return arr;    
        default:
            return state;
    }

}
export {shopCount}



//登录成功获得的用户信息
const loginMsg = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_MSG':
            return action.obj;
        case 'DEL_MSG':
            return {}
        default:
            return state;
    }

}
export {loginMsg}

//获得订单的列表数据
const orderList= (state = [], action) => {
    switch (action.type) {
        case 'ADD_ORDER':
            return action.data;
        case 'DEL_ORDER':
            let arr = [...state];
            arr.splice(action.index, 1);
            return arr;  
        default:
            return state;
    }

}
export {orderList}

//获得课程的信息列表
const getCourse= (state = [], action) => {
    switch (action.type) {
        case 'ADD_COURSE':
            return action.data;
        case 'DEL_COURSE':
            let arr = [...state];
            arr.splice(action.index, 1);
            return arr;  
        default:
            return state;
    }

}
export {getCourse}

//实时获得点击过后的那个课程的信息
const getCS= (state = [], action) => {
    switch (action.type) {
        case 'ADD_CS':
            return action.data;
        default:
            return state;
    }

}
export {getCS}

//实时获得点击过后的机构的信息
const getJG= (state = [], action) => {
    switch (action.type) {
        case 'ADD_JG':
            return action.data;
        default:
            return state;
    }

}
export {getJG}

//课程点击收藏 放入课程收藏列表
const shoucangCourse= (state = [], action) => {
    switch (action.type) {
        case 'ADD_COURSE_LIST':
            return [...state,action.data];
        case 'DEL_COURSE_LIST':
            let arr = [...state];
            arr.splice(action.index, 1);
            return arr;  
        default:
            return state;
    }

}
export {shoucangCourse}



//集市请求得到的数据
const shopSearchData = (state = [], action) => {
    switch (action.type) {
        case 'ADD_SHOPSEARCH_DATA':
            return action.shopSearch;    
        default:
            return state;
    }

}
export {shopSearchData};

//获得用户集市模块的历史记录
const shopHistoryData = (state = [], action) => {
    switch (action.type) {
        case 'ADD_SHOPHISTORY_DATA':
            return action.shopHistory;    
        default:
            return state;
    }

}
export {shopHistoryData};


//课堂请求得到的数据
const courseSearchData = (state = [], action) => {
    switch (action.type) {
        case 'ADD_COURSESEARCH_DATA':
            return action.courseSearch;    
        default:
            return state;
    }

}
export {courseSearchData};

//获得用户课堂模块的历史记录
const courseHistoryData = (state = [], action) => {
    switch (action.type) {
        case 'ADD_COURSEHISTORY_DATA':
            return action.courseHistory;    
        default:
            return state;
    }

}
export {courseHistoryData};

//我的课程 点击购买课程获得该要买的课程的信息
const willBuycourse = (state = {}, action) => {
    switch (action.type) {
        case 'BUY_COURSE':
            return action.data; 
    default:
        return state; 
    } 
} 
export {willBuycourse};

//我的课程列表
const myCourse_list= (state = [], action) => {
    switch (action.type) {
        case 'ADD_LIST':
            return action.data;
        case 'DEL_ITEM':
            let arr = [...state];
            arr.splice(action.index, 1);
            return arr;  
        default:
            return state;
    }
}
export {myCourse_list}


//订单的未支付请求数据
const Npay =(state=[],action)=>{
    switch(action.type){
        case 'ADD_NPAY':
            return action.Npay
        default:
            return state;
    }
}
export {Npay};

//订单的未支付请求数据
const Ypay =(state=[],action)=>{
    switch(action.type){
        case 'ADD_YPAY':
            return action.Ypay
        default:
            return state;
    }
}
export {Ypay};

//全部订单请求数据
const Allpay =(state=[],action)=>{
    switch(action.type){
        case 'ADD_ALLPAY':
            return action.Allpay
        case 'DEL_ALLPAY':
            let arr = [...state];
            arr.splice(action.index, 1);
            return arr; 
        default:
            return state;
    }
}
export {Allpay};