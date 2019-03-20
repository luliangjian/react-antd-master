const JsUtil={};
//http请求
JsUtil.HttpSend=function (url,type) {
    if(url){
        if(!type) type="get";//默认get请求
        var xmlHttp;
        if(window.XMLHttpRequest){
            xmlHttp=new XMLHttpRequest();
            xmlHttp.open(url,type);
            xmlHttp.send();
            xmlHttp.onreadystatechange=function (e) {
                console.log(xmlHttp.responseText)
                return xmlHttp.responseText;
            }
        }


    }
    return null;
}
export {JsUtil}
/*var message=JsUtil.HttpSend("http://pv.sohu.com/cityjson?ie=utf-8");
console.log(message)*/
// 这种方法适合用于参数较多的情况，使用了Jquery的扩展：
/*
function example(setting){
    var defaultSetting={
        name:'小红',
        age:'30',
        sex:'女',
        phone:'100866',
        QQ:'100866',
        birthday:'1949.10.01'
    };
    $.extend(defaultSetting,settings);
    var message='姓名：'+defaultSetting.name
        +'，性别：'+defaultSetting.sex
        +'，年龄：'+defaultSetting.age
        +'，电话：'+defaultSetting.phone
        +'，QQ：'+defaultSetting.QQ
        +'，生日：'+defaultSetting.birthday
        +'。';
    alert(message);
} */
