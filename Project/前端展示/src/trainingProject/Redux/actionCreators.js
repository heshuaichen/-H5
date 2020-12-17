const mycourse = () => {
    return (dispatch) => {
        let url = 'http://www.shuaishuaide.top:2010/course';
        fetch(url, {
            method: 'get',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(data => {
                dispatch({
                    type: 'MYCOURSE',
                    course: data
                })
            }
            )
    }
}
export { mycourse };
const getlist = () => {
    return (dispatch) => {
        let url = 'http://www.shuaishuaide.top:2011/cart/getlist';
        fetch(url, {
            method: 'get',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(data => {
                dispatch({
                    type: 'GETLIST',
                    getlist: data
                })
            }
            )
    }
}
export { getlist };
const getcart = () => {
    return (dispatch) => {
        let url = 'http://www.shuaishuaide.top:2011/cart';
        fetch(url, {
            method: 'get',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(data => {
                dispatch({
                    type: 'GETCART',
                    getcart: data
                })
            }
            )
    }
}
export { getcart };
const update = () => {
    return (dispatch) => {
        let url = 'http://www.shuaishuaide.top:2011/cart/update';
        fetch(url, {
            method: 'get',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(data => {
                dispatch({
                    type: 'GETCART',
                    update: data
                })
            }
            )
    }
}
export { update };