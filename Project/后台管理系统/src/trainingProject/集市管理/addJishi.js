import React from 'react'

class addJishi extends React.Component {
    constructor() {
        super();
    }
    
    render() {
        //获取表单对象
        return (
            <div className='ac'>
            <header className='ac-header'>添加商品</header>
            <form  action="http://shuaishuaide.top:2010/shop" method="post" enctype="multipart/form-data" id='myForm' className='ac-form'>
                <div>
                    <span style={{color:'red'}}>* </span>商品编码：<input type='number' placeholder='请输入商品编号' name='Sno'/><br />
                </div>
                <div>
                    <span style={{color:'red'}}>* </span>商品名称：<input type='text' placeholder='请输入商品名称' name='Sname' /><br />
                </div>
                <div>
                    <span style={{color:'red'}}>* </span>商品价格：<input type='text' placeholder='请输入商品价格' name='Sprice' ></input><br />
                </div>
                <div>
                    <span style={{color:'red'}}>* </span>商品类型：<input type='text' placeholder='请输入商品类型' name='Stype' ></input><br />
                </div>
                <div>
                    <span style={{color:'red'}}>* </span>适用年龄：<input type='text' placeholder='请输入使用年龄' name='Sage' ></input><br />
                </div>
                <div>
                    <span style={{color:'red'}}>* </span>商品图片：<input type='file' name='file' multiple="multiple"></input><br></br>
                </div>
                
                <div>
                    <span style={{position:'relative',bottom:'45px'}}><span style={{color:'red'}}>* </span>商品描述：</span>{/* 文本框只允许输入100个字体 */}
                    <textarea rows='6' cols='50' name='Sintroduce' form='myForm'></textarea>
                </div>
                
                <div>
                    <button className='ac-button'>提交</button>
                </div>
            </form>
            </div>
        )
    }
}
export default addJishi;