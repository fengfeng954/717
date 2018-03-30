import React,{Component} from "react"
import * as Router from "react-router-dom";
import  icon from "../../static/font/iconfont.css";
import * as mod from "./classisf.less";
let {BrowserRouter,Route,Switch,Redirect,Link} = Router

class Classify extends  Component{
constructor(){
		super()
		this.toaction=this.toaction.bind(this)
		this.state={
			action:0
		}
	}	
	render(){
		let arr = ['家乡味道','进口食品','牛奶乳品','休闲零食','生鲜果蔬','米面粮油','调为调料','酒水饮料']
		return <div>
		<header><input type="text"/></header>
		<div className='ti'>
			<div className='right'>
			
				<ul>
					{
						arr.map((item,index) => {
							return <li className={this.state.action==index?'action':''} key={index} onClick={()=>{this.toaction(index)}}>{item}</li>
						})
					}
					
				</ul>
			</div>
			
			<div className='left'></div>
		</div>
	</div>
	}
	toaction(idx){
		this.setState({
			action:idx
		})
	}
}
export default Classify