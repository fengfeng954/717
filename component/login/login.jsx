import React,{Component} from "react"
import * as Router from "react-router-dom";
import  $http from "../../src/utils/http.js";
import  lgin from "./lgin.less";
let {BrowserRouter,Route,Switch,Redirect,Link} = Router

class Login extends  Component{
constructor(){
		super()
		this.tplogin=this.tplogin.bind(this)
	}	
	render(){
		return <div className='reg'>
		<h1>请登陆</h1>
		<p>用户：<input type='text' className='username' ref='username'/></p>
		<p>密码：<input type='password' className='password' ref='password'/></p>
		<p><button onClick={this.tplogin}>登录</button></p>
		</div>
	}
tplogin(){
		$http.post('/user/login',{
            username:this.refs.username.value,
            password:this.refs.password.value
        }).then(res => {
            if (res.success == 1) {
                this.props.history.push("/index/mmobile")
                document.cookie = 'token='+res.token
            } else {
                alert(res.info);
                this.refs.username.value = '';
                this.refs.password.value = '';
            }
        })
	}	
}
export default Login