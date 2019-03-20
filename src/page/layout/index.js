import * as React from "react";

import {Layout, Menu, Breadcrumb, Icon,Row,Col,Avatar,Button,Drawer } from 'antd';
import { Link} from 'react-router';
import { BackTop } from 'antd';
// import {JsUtil} from "../../component/JsUtil";
import $ from 'jquery';
const {Header, Content, Footer, Sider} = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const systemMap=[
    {},
    {}
];
export default class IndexLayout extends React.Component{
    componentDidMount() {
        //获取城市ajax
        $.ajax({
            url: 'http://api.map.baidu.com/location/ip?ak=ia6HfFL660Bvh43exmH9LrI6',
            type: 'POST',
            dataType: 'jsonp',
            success:function(data) {
                $('#cityShow').html(data.content.address_detail.province + "," + data.content.address_detail.city)
            }
        });
    }


    state = {
        collapsed: false,
    };

    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({ collapsed });
    }
    time()
    {
        let dt = new Date();
        var year=dt.getFullYear();
        var month=dt.getMonth()+1;
        var day=dt.getDate();
        var h=dt.getHours();
        var m=dt.getMinutes();
        var s=dt.getSeconds();
        document.getElementById("timeShow").innerHTML =  year+"年"+month+"月"+day+"日"+h+"时"+m+"分"+s+"秒";
    }
    state = { visible: false };

    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };
    render() {
        setInterval(this.time,1000);
        return(

            <Layout style={{ minHeight: '100vh' }}>
                <Button style={{position:"absolute",right:"17px",top:"73px"}} onClick={this.showDrawer}><Icon type="setting" /></Button>
                <Drawer
                    title="系统配置"
                    placement="right"
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                >
                </Drawer>
                <script src="http://pv.sohu.com/cityjson?ie=utf-8"></script>
                <Sider
                    collapsible
                    collapsed={this.state.collapsed}
                    onCollapse={this.onCollapse}
                >
                    <div className="logo" />
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="1">
                            <Icon type="pie-chart" />
                            项目简介
                            <Link to="/home"/>
                        </Menu.Item>
                        <SubMenu
                            key="sub1"
                            title={<span><Icon type="team" /><span>Table</span></span>}
                        >
                            <Menu.Item key="6">动态控制表格<Link to="/table/dynamicTable"/></Menu.Item>
                            <Menu.Item key="8">分页表格<Link to="/table/pagingTable"/></Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub2"
                            title={<span><Icon type="team" /><span>特殊页面</span></span>}
                        >
                            <Menu.Item key="11">登录<Link to="/login"/></Menu.Item>
                            <Menu.Item key="12">404页面<Link to="/table/pagingTable"/></Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub3"
                            title={<span><Icon type="user" /><span>User</span></span>}
                        >
                            <MenuItemGroup key="g1" title="Item 1">
                                <Menu.Item key="13">Option 1</Menu.Item>
                                <Menu.Item key="14">Option 2</Menu.Item>
                            </MenuItemGroup>
                            <MenuItemGroup key="g2" title="Item 2">
                                <Menu.Item key="15">Option 3</Menu.Item>
                                <Menu.Item key="16">Option 4</Menu.Item>
                            </MenuItemGroup>
                        </SubMenu>
                        <Menu.Item key="9">
                            <Icon type="file" />
                            <span>File</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }} >
                        <Row gutter="24">
                            <Col span="12">
                            </Col>
                            <Col span="12" style={{textAlign:"right"}}>
                                <span id="timeShow" style={{marginRight:"6px"}}></span>
                                <span id="cityShow" style={{marginRight:"20px"}}></span>
                                <Avatar icon="user" style={{marginRight:"10px"}}/>
                                <span id="username" style={{marginRight:"20px"}}>李四</span>
                                <Button onClick={this.enterLoading} style={{backgroundColor:"rgb(204, 204, 204)",marginRight:"30px"}}>
                                    <Icon type="logout"/>
                                    退出登录
                                </Button>
                            </Col>
                        </Row>

                    </Header>
                    <Content style={{ margin: '0 16px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>User</Breadcrumb.Item>
                            <Breadcrumb.Item>Bill</Breadcrumb.Item>
                        </Breadcrumb>
                        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                            {this.props.children}
                        </div>
                        <BackTop visibilityHeight={200}/>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        Ant Design ©2018 Created by Ant UED
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}