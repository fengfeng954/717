import React,{Component} from "react"
import * as Router from "react-router-dom";
let {BrowserRouter,Route,Switch,Redirect,Link} = Router
import style from "./style.less";
import swiperstyle from "../../static/css/swiper-3.3.1.min.css";
import swiper from "../../static/js/swiper-3.3.1.min.js";
import swiperjs from "../../static/js/swiper.js";
import  $http from "../../src/utils/http.js";
import Goodlist from "./goodlist.jsx"
class Mmobile extends  Component{
	constructor(){
		super()
		this.toSeach=this.toSeach.bind(this)
		this.changeTop = this.changeTop.bind(this)
		this.state={
			data:[],
			id:1,
			channel_id:2,
			eFlag:true,
			arr:["家乡味道","进口食品","牛奶乳品","休闲零食","生鲜果蔬","米面粮油","调味调料","酒水饮料"]
		}
	}
	render(){
		return(
			<div className='box' ref="home" onScroll={this.changeTop} >
	            <header>
	          		<div className='loge'>
	          			<img src="../../static/loge.gif"/>
	          		</div>
	          		<div className='inp'>
	          			<i><img src="../../static/fangda.png"/></i>
	          			<input type="text" placeholder="请输入您购买的商品" onFocus={this.toSeach}/>
	          		</div>
	          		<dl>
	          			<dt><img src="../../static/fang.png"/></dt>
	          		</dl>
	            </header>
	            <section ref="doc" ref="home" onScroll={this.changeTop}>
					<div className="swiper-container">
					    <div className="swiper-wrapper">
					        <div className="swiper-slide"><img src="../../static/banner.png"/></div>
					        <div className="swiper-slide"><img src="../../static/banner1.png"/></div>
					        <div className="swiper-slide"><img src="../../static/banner2.jpg"/></div>
							<div className="swiper-slide"><img src="../../static/banner3.png"/></div>
					        <div className="swiper-slide"><img src="../../static/banner4.png"/></div>
					    </div>
					    <div className="swiper-pagination"></div>
					</div>
					<div className='nav'>
						<dl>
							<dt><i><img src="../../static/nav1.png"/></i></dt>
							<dd>牛奶乳品</dd>
						</dl>
						<dl>
							<dt><i><img src="../../static/nav2.png"/></i></dt>
							<dd>家乡味道</dd>
						</dl>
						<dl>
							<dt><i><img src="../../static/nav3.png"/></i></dt>
							<dd>休闲零食</dd>
						</dl>
						<dl>
							<dt><i><img src="../../static/nav4.png"/></i></dt>
							<dd>米面粮油</dd>
						</dl>
						<dl>
							<dt><i><img src="../../static/nav5.png"/></i></dt>
							<dd>调味填料</dd>
						</dl>
						<dl>
							<dt><i><img src="../../static/nav6.png"/></i></dt>
							<dd>酒水饮料</dd>
						</dl>
						<dl>
							<dt><i><img src="../../static/nav7.png"/></i></dt>
							<dd>生鲜果蔬</dd>
						</dl>
						<dl>
							<dt><i><img src="../../static/nav8.png"/></i></dt>
							<dd>进口食品</dd>
						</dl>
					</div>
					<div className="cagetoryList">
						<Goodlist data={this.state.data} history={this.props.history}></Goodlist>
						</div>
	            </section>
       		</div>
			)
	}
	changeTop(){
		if(this.state.channel_id>8)return;
		if(!this.state.eFlag)return;
		let {home,doc} = this.refs
		let homeT = home.scrollTop;
		let homeH = home.offsetHeight;
		let docH = doc.offsetHeight;
		console.log(home.offsetHeight)
		if(docH-(homeT+homeH) < 70){
			this.setState({
				eFlag:false,
				channel_id:++this.state.channel_id
			})
			$http.post("/mall/index/getGoodsChannel",{
				channel_id:this.state.channel_id
			}).then(res=>{
				this.setState({
					data:[...this.state.data,{
						"title":this.state.arr[this.state.channel_id-2],
						"children":JSON.parse(res).data.data
					}],
					eFlag:true
				})
			})
		}
	}
	toSeach(){
		let {history}=this.props
		history.push('/index/seach')
	}
	componentDidMount(){
		$http.post('/mall/index/getGoodsChannel',{channel_id:2})
		.then(res=>{
			this.setState({
				data:[{
					"title":this.state.arr[0],
					"children":JSON.parse(res).data.data
				}]
			})
		})
	}
}
export default Mmobile