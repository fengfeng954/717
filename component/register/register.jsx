import React,{Component} from "react"
import * as Router from "react-router-dom";
import  $http from "../../src/utils/http.js";
import  res from "./reg.less";
let {BrowserRouter,Route,Switch,Redirect,Link} = Router

class Register extends  Component{
	constructor(){
		super()
		this.tpRegister=this.tpRegister.bind(this)
	}
	render(){
		return <div className='reg'>
		<h1>欢迎注册</h1>
		<p>用户：<input type='text' className='username' ref='username'/></p>
		<p>密码;<input type='password' className='password' ref='password'/></p>
		<p><button onClick={this.tpRegister}>注册</button></p>
		</div>
	}
	tpRegister(){
		let {username,password}=this.refs;
		$http.post('/user/reg',{
			username:username.value,
			password:password.value
		}).then(res=>{
			 if (res.code == 1) {
                this.props.history.push('/login')
            }
		})
	}
}
export default Register