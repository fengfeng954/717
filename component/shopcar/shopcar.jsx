import React,{Component} from "react"
import * as Router from "react-router-dom";
import {connect} from "react-redux";
import mapStateToProps from "./state.js";
import mapDispatchToprops from "./dispatch.js"
import ss from "./shopCar.less"
import CartItem from "./cartItem.jsx"
let {BrowserRouter,Route,Switch,Redirect,Link} = Router

class Shopcar extends  Component{
	constructor(){
		super()
		this.state = {
			str:"none",
		}
	}
	render(){
		let {cartList,checkAll,total} = this.props
		return (
			<div id="shopCar">
				<div className="shopCar_tit">
					<h3>购物车</h3>
					<span>编辑</span>
				</div>
				<div className="shopCar_cot">
					<div className="cartList">
					{
						cartList.map((item,index)=>{
							return <CartItem item={item} key={index}></CartItem>
						})
					}
					</div>
				</div>
				<div className="shopCar_bot">
					<ul>
						<li>
							<span className={ total?"selectOn":""} onClick={()=>{
								this.setState({
									str:this.state.str=="all"?"none":"all"
								});
								checkAll(this.state.str)}}></span>
							<span>全选</span>
						</li>
						<li>
							<span>合计:</span>
							<span>￥</span>
							<b>{this.props.nums}</b>
						</li>
						<li>
							<p>结算</p>
						</li>
					</ul>
				</div>
			</div>
		)
	}
	componentDidMount(){
		this.props.fetchCart()
	}
}
export default connect(mapStateToProps,mapDispatchToprops)(Shopcar)