import React from 'react';
import { Accordion, List } from 'antd-mobile';
import '../../css/methods.css'
class Methods extends React.Component {
  render() {
    return (
      <div style={{ marginTop: 10, marginBottom: 10 }}>
        <Accordion accordion openAnimation={{}} className="my-accordion">
            <Accordion.Panel header="父母情绪小建议">
                <List className="my-list">
                    <List.Item className="list1">1、觉察---学会发现并接纳自己的情绪</List.Item>
                    <List.Item className="list1">2、疏导---找到合理的途径和方式</List.Item>
                    <List.Item className="list1">3、内省---从内在自我反省，找出问题产生的原因，衡量情绪失控的结果是不是自己能承担的</List.Item>
                </List>
            </Accordion.Panel>
            <Accordion.Panel header="宝宝健康小贴士" className="pad">
                <List className="my-list">
                    <List.Item className="list1">1、比起补充食物营养，保证充足的水分供应更重要。</List.Item>
                    <List.Item className="list1">2、宝宝服药时一定要遵医嘱。</List.Item>
                    <List.Item className="list1">3、小心宝宝贫血</List.Item>
                </List>
            </Accordion.Panel>
            <Accordion.Panel header="宝宝卫生小课堂" className="pad">
                <List className="my-list"> 
                    <List.Item>1、定期更换奶瓶。</List.Item> 
                    <List.Item>2、选择新鲜食品，保证食品质量</List.Item>
                </List>
            </Accordion.Panel>
            <Accordion.Panel header="宝宝睡觉小知识" className="pad">
                <List className="my-list"> 
                    <List.Item>1、宝宝睡觉不要开灯</List.Item> 
                    <List.Item>2、可以使用小夜灯，宝宝熟睡后再关掉</List.Item>
                </List>
            </Accordion.Panel>
            <Accordion.Panel header="宝宝生病小常识" className="pad">
                <List className="my-list"> 
                    <List.Item>1、宝宝生没生病观察舌头</List.Item> 
                    <List.Item>2、孩子感冒咳嗽不能吃煎炸烧烤荤腥油腻、生冷饮食</List.Item>
                </List>
            </Accordion.Panel>
        </Accordion>
      </div>
    );
  }
}
export default Methods;





