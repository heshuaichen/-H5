let data=[];
const DataDucer = (state = data,action) => {
    switch (action.type){
        case 'DATA':
            return action.data;
        case 'DEL':
            let arr=[...state];
            arr.splice(action.index,1);
            return arr;
        default:
            return state;
    }
}

export {DataDucer};