import React from 'react';
import ReactDOM from 'react-dom';
import "antd/dist/antd.css";
import { LocaleProvider,ConfigProvider  } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import ProjectRouter from "./router/projectRouter"
import * as serviceWorker from './serviceWorker';
moment.locale('zh-cn');

ReactDOM.render(<LocaleProvider locale={zh_CN}><ConfigProvider><ProjectRouter/></ConfigProvider></LocaleProvider>, document.getElementById('root'));

//模块热替换(HMR)
if (module.hot) {
    module.hot.accept();
}
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
