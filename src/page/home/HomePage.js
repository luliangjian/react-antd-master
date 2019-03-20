import * as React from 'react';
import { Carousel,Row,Col,Card,Statistic,Icon,List,Avatar }  from "antd";
import "../../css/home.css";
const homeimg5=require("../../img/home/home_img5.jpg");

/*
*user:luliangjian
*Date:2019/3/9 16:06
*Description:
*/
const data = [
    {
        title: 'Title 1',
    },
    {
        title: 'Title 2',
    },
    {
        title: 'Title 3',
    },
    {
        title: 'Title 4',
    },
];

export default class HomePage extends React.Component {

    render() {
        return (
            <div style={{ background: '#ECECEC', padding: '30px' }}>
                <Row>
                    <Carousel autoplay>
                        <div className="div_home_img"><img src={homeimg5}/></div>
                        <div className="div_home_img"><img src={homeimg5}/></div>
                        <div className="div_home_img"><img src={homeimg5}/></div>
                        <div className="div_home_img"><img src={homeimg5}/></div>
                    </Carousel>
                </Row>
                <Row>
                    <List
                        grid={{ gutter: 16, column: 4 }}
                        dataSource={data}
                        renderItem={item => (
                            <List.Item>
                                <Card title={item.title}>Card content</Card>
                            </List.Item>
                        )}
                    />
                </Row>
                <Row gutter={24}>
                    <Col span={12}>
                        <Card>
                            <Statistic
                                title="Active"
                                value={11.28}
                                precision={2}
                                valueStyle={{ color: '#3f8600' }}
                                prefix={<Icon type="arrow-up" />}
                                suffix="%"
                            />
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card>
                            <Statistic
                                title="Idle"
                                value={9.3}
                                precision={2}
                                valueStyle={{ color: '#cf1322' }}
                                prefix={<Icon type="arrow-down" />}
                                suffix="%"
                            />
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Card>
                        <List
                            itemLayout="horizontal"
                            dataSource={data}
                            renderItem={item => (
                                <List.Item>
                                    <List.Item.Meta
                                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                        title={<a href="https://ant.design">{item.title}</a>}
                                        description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                                    />
                                </List.Item>
                            )}
                        />
                    </Card>
                </Row>
            </div>

        );
    }

}