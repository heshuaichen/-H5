import React from 'react'
import '../../css/content.css';
import { Flex } from 'antd-mobile'
const Content =(props)=>{
    console.log(props.playing);
    return <div>
        <Flex>
            <Flex.Item className='content01'>
                <div className='content-count'>01</div>
                <div className='content-p'>
                    <p className='content-p1'>亲子沟通注意事项1</p>
                    <p className="content-p2">时长30:00</p>
                </div>
                <div className='content-icon'>       
                    <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1571253285,405268937&fm=26&gp=0.jpg" className="content-icon1"/>
                </div>
            </Flex.Item>
        </Flex>
        <Flex>
            <Flex.Item className='content01'>
                <div className='content-count'>01</div>
                <div className='content-p'>
                    <p className='content-p1'>亲子沟通注意事项1</p>
                    <p className="content-p2">时长30:00</p>
                </div>
                <div className='content-icon'>
                    <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3190487083,3210537095&fm=26&gp=0.jpg" className="content-icon1"/>
                </div>
            </Flex.Item>
        </Flex>
        <Flex>
            <Flex.Item className='content01'>
                <div className='content-count'>01</div>
                <div className='content-p'>
                    <p className='content-p1'>亲子沟通注意事项1</p>
                    <p className="content-p2">时长30:00</p>
                </div>
                <div className='content-icon'>
                    <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3190487083,3210537095&fm=26&gp=0.jpg" className="content-icon1"/>
                </div>
            </Flex.Item>
        </Flex>
        <Flex>
            <Flex.Item className='content01'>
                <div className='content-count'>01</div>
                <div className='content-p'>
                    <p className='content-p1'>亲子沟通注意事项1</p>
                    <p className="content-p2">时长30:00</p>
                </div>
                <div className='content-icon'>
                    <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3190487083,3210537095&fm=26&gp=0.jpg" className="content-icon1"/>
                </div>
            </Flex.Item>
        </Flex>
    </div>
}
export default Content;