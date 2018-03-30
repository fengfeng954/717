import React, {Component} from "react"
import settingLess  from "./setting.less";
import {loginOut} from "../../src/utils/utils.js"
class Setting extends Component{
	constructor(){
		super()
		this.state={
			info:"",
			alertFlag:"",
			from:""
		}
		this.goBack = this.goBack.bind(this);
		this.quitLogin = this.quitLogin.bind(this);
	}
	render(){
		return (
			<div id="setting">
				<div className="setting_tit">
					<h3>设置</h3>
					<span onClick={this.goBack}>{"<"}</span>
				</div>
				<div className="set_list">
					<ul>
						<li>
							<p>我的头像</p>
							<p>
								<span></span>
							</p>
						</li>
						<li>
							<p>用户名</p>
							<p>
								<span></span>
							</p>
						</li>
						<li>
							<p>我的二维码名片</p>
							<p>
								<span></span>
							</p>
						</li>
						<li>
							<p>绑定手机号</p>
							<p>
								<span></span>
							</p>
						</li>
					</ul>
					<p className="quitBtn" onClick={this.quitLogin}>退出登录</p>
				</div>
			</div>
		)
	}
	goBack(){
		this.props.history.push(this.props.location.state.from)
	}
	quitLogin(){
		let info = {
			code_num:2,
			code_info:"确定要退出登陆吗?"
		}
		this.setState({
			info,
			alertFlag:true,
			from:this.props.location.state.from
		})
	}
}
export default Setting;