
let ComponentConfig={};
//分页
ComponentConfig.defaultPagination={
    defaultCurrent:1,
    defaultPageSize:'10',
    pageSizeOptions:[10,20,50,100],//页面选择
    total:100,//总数
    hideOnSinglePage:false,//
    showTotal:(total)=>{return total+"条"},
    showQuickJumper:true,//是否显示跳转到第几页的输入框（默认为false）
    showSizeChanger:true

}
ComponentConfig.changePagination=(pagination)=>{
    //ES合并对象并去重（重复则保留后者）
    //defaultPagination=Object.assign(defaultPagination,pagination);
    ComponentConfig.defaultPagination={...ComponentConfig.defaultPagination,...pagination};
}
export {ComponentConfig};