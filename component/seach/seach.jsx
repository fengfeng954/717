import React,{Component} from "react"
import * as Router from "react-router-dom";
import  $http from "../../src/utils/http.js";
import  seachss from "./seach.less";
let {BrowserRouter,Route,Switch,Redirect,Link} = Router

class Seach extends  Component{
constructor(){
		super()
	}
	render(){
		return <div className='seach'>
		<header><input type='text' /> <span>搜索</span></header>
		<section className='one'>
			<p>最紧搜索.....<b></b></p>
			<ul>
				<li></li>
			</ul>
		</section>
		<section className='tow'>
			<p>大家都在搜......</p>
		</section>
		</div>
	}
}
export default Seach