import * as React from 'react';
import { Table ,Pagination } from 'antd';
import {ComponentConfig} from "../../config/ComponentConfig";

const columns = [{
    title: 'Name',
    dataIndex: 'name',
    render: text => <a href="javascript:;">{text}</a>,
}, {
    title: 'Age',
    dataIndex: 'age',
}, {
    title: 'Address',
    dataIndex: 'address',
}];
const data = [{
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
}, {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
}, {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
}, {
    key: '4',
    name: 'Disabled User',
    age: 99,
    address: 'Sidney No. 1 Lake Park',
}];

// rowSelection object indicates the need for row selection
const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User', // Column configuration not to be checked
        name: record.name,
    }),
};
/*const pagination={
    defaultCurrent:1,
    defaultPageSize:'10',
    pageSizeOptions:[10,20,50,100],//页面选择
    total:100,//总数
    hideOnSinglePage:false,//
    showTotal:(total)=>{return total+"条"},
    showQuickJumper:true,//是否显示跳转到第几页的输入框（默认为false）
    showSizeChanger:true

}*/
export default class PagingTable extends React.Component{


    showTotal(total) {
        return `Total ${total} items`;
    }
    render() {
        return(
            <Table rowSelection={rowSelection} columns={columns} dataSource={data} pagination={ComponentConfig.defaultPagination} />
        );
    }

}