import React,{Component} from "react"
import {BrowserRouter,Route,Switch,Redirect,Link,NavLink} from "react-router-dom";
import  icon from "../../static/font/iconfont.css";
import indexcss from "./index.css";
import Routers from "../../component/routes.jsx";
class Index extends  Component{
	render(){
		let {Router}=this.props
		return <div className='zhu'>
			<div className='wei'>
			<NavLink to="/index/mmobile" activeClassName="active">
				<dl>
					<dt>
						<i className='iconfont icon-shouye'></i>
					</dt>
					<dd>首页</dd>
				</dl>
			</NavLink>
			<NavLink to="/index/classify" activeClassName="active">
				<dl>
					<dt>
						<i className='iconfont icon-fenlei'></i>
					</dt>
					<dd>分类</dd>
				</dl>
			</NavLink>
			<NavLink to="/index/community" activeClassName="active">
				<dl className='yuan'>
					<dt>
						<i className='iconfont icon-dazhongdianping'></i>
					</dt>
					<dd>社区</dd>
				</dl>
			</NavLink>			
			<NavLink to="/index/shopcar" activeClassName="active">
				<dl>
					<dt>
					<span className="span">0</span>
						<i className='iconfont icon-gouwuche'></i>
					</dt>
					<dd>购物车</dd>
				</dl>
			</NavLink>
			<NavLink to="/index/mine" activeClassName="active">
				<dl>
					<dt>
						<i className='iconfont icon-wode'></i>
					</dt>
					<dd>我的</dd>
				</dl>
			</NavLink>			

			</div>
			<Routers Router={Router}></Routers>
		</div>
	}
}
export default Index