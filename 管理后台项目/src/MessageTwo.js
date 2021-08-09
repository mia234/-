
import { Button, Menu, Layout, Row, Col } from 'antd';
import './App.css'
import 'antd/dist/antd.css'

const { Content } = Layout;

function MessageTwo() {
    return(
    <div className="messagetwo">
        <Layout>
            <Content
                className="site-layout-background"
                style={{
                    padding:10,
                }}
            >
                <div className=''>
                    <div className='dark-1'>
                        <Menu theme="dark" mode="horizontal" className='dark-1'>
                            <Menu.Item key="1">全部线索（0）</Menu.Item>
                            <Menu.Item key="2">未分发线索（0）</Menu.Item>
                            <Menu.Item key="3">已分发线索（0）</Menu.Item>
                            <Menu.Item key="4">未认领线索（0）</Menu.Item>
                            <Menu.Item key="5">已关闭线索（0）</Menu.Item>
                            <Menu.Item key="6">已转化线索（0）</Menu.Item>

                        </Menu>
                    </div>

                    <div className='import-element'>
                        <Button className='client'>一键导入</Button>
                        <div className='client'> 如需一键导入，请点击此处下载excel模板 </div>
                        <Button className='client'>录入线索</Button>
                        <Button className='client'>删除</Button>
                        <Button className='client'>分发</Button>
                    </div>

                    <div className='text-1  import-element'>
                        已选择 <span className='text-2'> 0 </span> 项
                        <span className='text-3'>  清空 </span>
                    </div>

                    <Row justify='center'>
                        <Col span={1} className="cell"> </Col>
                        <Col span={2} className="cell">线索编号</Col>
                        <Col span={2} className="cell">客户名称*</Col>
                        <Col span={3} className="cell">客户联系人姓名*</Col>
                        <Col span={3} className="cell">客户联系人电话</Col>
                        <Col span={2} className="cell">所属行业*</Col>
                        <Col span={2} className="cell">线索来源*</Col>
                        <Col span={2} className="cell">提交人UM账号*</Col>
                        <Col span={2} className="cell">创建时间</Col>
                        <Col span={2} className="cell">更新时间</Col>
                        <Col span={2} className="cell">线索状态</Col>
                        <Col span={1} className="cell">操作</Col>
                    </Row>

                    <div className="contenm-cell-2">
                        <div className='cell-2' >
                            <span> 暂无数据，快导入数据吧 ! </span>
                        </div>
                    </div>
                </div>
            </Content>
        </Layout>
    </div>
    )
}

export default MessageTwo




