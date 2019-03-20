import * as React from 'react';
import { Router, Route, Link,StaticRouter,browserHistor,hashHistory,BrowerRouter} from 'react-router'
import Table from "../page/table";
import IndexLayout from "../page/layout/index";
import DynamicTable from "../page/table/DynamicTable";
import PagingTable from "../page/table/PagingTable";
import HomePage from "../page/home/HomePage";
import LoginForm from "../login";

export default class ProjectRouter extends React.Component{
    updateHandle () {
        console.log('每次router变化之后都会触发')
    }

    render() {
        const {routerType, history} = this.props;
        console.log(routerType);
        /*if (routerType == "StaticRouter") {
            return (
                <StaticRouter history={history}>
                    <Route path="/" component={Index}>
                        <Route path="/table" component={Table}/>
                    </Route>
                </StaticRouter>
            );
        } else if (routerType == "BrowerRouter") {
            return (
                <BrowerRouter history={history} onUpdate={this.updateHandle.bind(this)}>
                    <Route path="/" component={Index}>
                        <Route path="/table" component={Table}/>
                    </Route>
                </BrowerRouter>
            )
        }*/
        return (
            <Router history={hashHistory} onUpdate={this.updateHandle.bind(this)}>
                <Route path="/" component={IndexLayout}>
                    <Route path="/login" component={LoginForm}/>
                    <Route path="/home" component={HomePage}/>
                    <Route path="/table" component={Table}/>
                    <Router path="/table/dynamicTable" component={DynamicTable}/>
                    <Router path="/table/pagingTable" component={PagingTable}/>
                </Route>
            </Router>
        )
    }

}