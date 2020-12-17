import React from 'react'

class addXueqian extends React.Component {
    constructor() {
        super();
    }
    
    render() {
        //获取表单对象
        return (
            <div className='ac'>
            <header className='ac-header'>添加学前机构</header>
            <form  action="http://shuaishuaide.top:2010/preschool" method="post" enctype="multipart/form-data" id='myForm' className='ac-form'>
                <div>
                    <span style={{color:'red'}}>* </span>机构编号：<input type='number' placeholder='请输入机构编号' name='Pno'/><br />
                </div>
                <div>
                    <span style={{color:'red'}}>* </span>机构名称：<input type='text' placeholder='请输入机构名称' name='Pname' /><br />
                </div>
                <div>
                    <span style={{color:'red'}}>* </span>机构位置：<input type='text' placeholder='请输入机构位置' name='Plocal' ></input><br />
                </div>
                <div>
                    <span style={{color:'red'}}>* </span>机构学费：<input type='text' placeholder='请输入机构学费' name='Pprice' ></input><br />
                </div>
                <div>
                    <span style={{color:'red'}}>* </span>机构电话：<input type='text' placeholder='请输入机构电话' name='Ptel' ></input><br />
                </div>
                <div>
                    <span style={{color:'red'}}>* </span>报名人数：<input type='number' placeholder='请输入报名人数' name='Pregister' ></input><br />
                </div>
                <div>
                    <span style={{color:'red'}}>* </span>招收人数：<input type='number' placeholder='请输入招收人数' name='Precruit' ></input><br />
                </div>
                <div>
                    <span style={{color:'red'}}>* </span>机构图片：<input type='file' name='file' multiple="multiple"></input><br></br>
                </div>
                
                <div>
                    
                    <span style={{position:'relative',bottom:'45px'}}><span style={{color:'red'}}>* </span>机构描述：</span>{/* 文本框只允许输入100个字体 */}
                    <textarea rows='6' cols='50' name='Tintroduce' form='myForm'></textarea>
                </div>
                
                <div>
                    <button className='ac-button'>提交</button>
                </div>
            </form>
            </div>
        )   
    }
}
export default addXueqian;