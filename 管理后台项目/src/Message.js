
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined } from '@ant-design/icons';

import './App.css'
import 'antd/dist/antd.css'
import MessageOne from "./MessageOne";

const { SubMenu } = Menu;
const { Header, Sider } = Layout;

function Message() {

    return(
        <div className="message">
            <Layout>
                <Header className="message-header">
                    <div className="container" >
                        <div className='left'>
                            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['0']} className="left">
                            <Menu.Item key="1">logo</Menu.Item>
                            <Menu.Item key="2">智慧零售业管平台</Menu.Item>
                            <Menu.Item key="3">&</Menu.Item>
                            </Menu>
                        </div>

                        <div className='right'>
                            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['0']} className="right">
                            <Menu.Item key="4">提示</Menu.Item>
                            <Menu.Item key="4">登录人</Menu.Item>
                            <Menu.Item key="5">退出登录</Menu.Item>
                            </Menu>
                        </div>
                    </div>
                </Header>
                <Layout>
                    <Sider width={200} className="site-layout-background">
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{ height: '100%', borderRight: 0 }}
                        >
                            <Menu.Item key="0">首页</Menu.Item>
                            <SubMenu key="sub1" icon={<UserOutlined />} title="销售管理">
                            </SubMenu>
                            <SubMenu key="sub2" icon={<LaptopOutlined />} title="商家管理">
                            </SubMenu>
                            <SubMenu key="sub3" icon={<UserOutlined />} title="项目管理">
                            </SubMenu>
                            <SubMenu key="sub4" icon={<UserOutlined />} title="客户管理">
                            </SubMenu>
                            <SubMenu key="sub5" icon={<UserOutlined />} title="数据分析">
                            </SubMenu>
                            <SubMenu key="sub6" icon={<UserOutlined />} title="系统管理">
                            </SubMenu>
                            <SubMenu key="sub7" icon={<UserOutlined />} title="系统监控">
                            </SubMenu>
                            <SubMenu key="sub8" icon={<UserOutlined />} title="线索管理">
                                <Menu.Item key="5">线索信息管理</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub9" icon={<UserOutlined />} title="积分管理">
                            </SubMenu>
                            <SubMenu key="sub10" icon={<UserOutlined />} title="运营管理">
                            </SubMenu>

                        </Menu>
                    </Sider>
                    {/* 第一板块 */}
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb
                            style={{
                                margin: '16px 0px' ,
                                width: '500px',
                            }}
                        >
                            <Breadcrumb.Item>首页</Breadcrumb.Item>
                            <Breadcrumb.Item>线索信息管理</Breadcrumb.Item>
                        </Breadcrumb>
                        <div className='message-1'>
                            <div>
                                <MessageOne />
                            </div>
                        </div>

                    </Layout>
                </Layout>
            </Layout>
        </div>
    )
}

export default Message