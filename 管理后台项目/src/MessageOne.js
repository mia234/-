
import {Input, Layout,  Button, Tooltip, Row, Col } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import CheckBox from "./CheckBox";
import CheckBox2 from "./CheckBox2";
import MessageTwo from "./MessageTwo";

import 'antd/dist/antd.css'
import './MessageOne.css'
import './App.css'

const { Content, Footer } = Layout;


function MessageOne() {

    return(
        <div>
            <div className="inputOne">
                <Layout>
                <Content
                    className="site-layout-background"
                    style={{
                        padding: 15,
                        margin: 0,
                        // minHeight: 10,
                    }}
                >
                <div className='conment'>
                    <Row>
                        <Col span={12}> 客户名称：<Input placeholder="请输入客户名称"/> </Col>
                        <Col span={12}> 客户联系人：<Input placeholder="请输入客户联系人名字"/> </Col>
                    </Row>

                    <Row>
                        <Col span={12}> 提交人：<Input placeholder="请选择线索提交人"/> </Col>
                        <Col span={12}> 线索创建时间：<Input placeholder="开始时间——结束时间"/> </Col>
                    </Row>

                    <div className='shurukuang-2'>
                        <CheckBox />
                        <CheckBox2 />
                    </div>
                </div>
                <div>
                    <Tooltip title="search">
                    </Tooltip>
                    <div className={'search-button'}>
                        <Button icon={<SearchOutlined />}>Search</Button>
                        <Button> 重置 </Button>
                    </div>

                </div>

                </Content>
                </Layout>
            </div>

            <div className="inputOne-1">
                <Layout>
                    <MessageTwo />
                    <Footer>
                        <div className="comten">
                            <div className="foot">
                                <div className="foot-1" >联系我们：</div>
                                <div className="foot-1" >企业微信</div>
                                <div className="foot-1" >邮件联系</div>
                                <div className="foot-1" >我要反馈</div>
                            </div>

                            <div className="foot-2-1">
                                <div className="foot-2" >相关链接:</div>
                                <div className="foot-2" >合同管理BCP</div>
                                <div className="foot-2" >项目交付PMS</div>
                                <div className="foot-2" >磐石系统</div>
                                <div className="foot-2" >销售易</div>
                                <div className="foot-2" >汇金计费</div>
                                <div className="foot-2" >知识库</div>
                            </div>
                        </div>
                    </Footer>
                </Layout>
            </div>
        </div>
        )
}

export default MessageOne