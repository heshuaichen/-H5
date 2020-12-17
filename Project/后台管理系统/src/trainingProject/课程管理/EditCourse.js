import React, { Component } from 'react'
import './editCourse.css'
export default class EditCourse extends Component {
    render() {
        return (
            <div className='ec'>
            <header className='ec-header'>编辑课程</header>
            <form  action="http://shuaishuaide.top:2010/course" method="post" enctype="multipart/form-data" id='myForm' className='ec-form'>
                <div>
                    <span style={{color:'red'}}>* </span>课程名称：<input type='text' placeholder='请输入课程名' name='Cname'/><br />
                </div>
                <div>
                    <span style={{color:'red'}}>* </span>课程编号：<input type='number' placeholder='请输入课程号' name='Cno' /><br />
                </div>
                <div>
                    <span style={{color:'red'}}>* </span>课程价格：<input type='text' placeholder='请输入价格' name='Cprice' ></input><br />
                </div>
                <div>
                    <span style={{color:'red'}}>* </span>课程图片：<input type='file' name='file' multiple="multiple"></input><br></br>
                </div>
                <div>
                    <span style={{position:'relative',bottom:'45px'}}><span style={{color:'red'}}>* </span>课程描述：</span>{/* 文本框只允许输入100个字体 */}
                    <textarea rows='6' cols='50' name='Cintroduce' form='myForm'></textarea>
                </div>
                
                <div>
                    <button className='ec-button'>提交</button>
                </div>
            </form>
            </div>
        )
    }
}
