import React,{Component} from "react";
import {Link} from "react-router-dom";
import goodlistLess from "./goodlist.less"
import  $http from "../../src/utils/http.js";
import {getCookie} from "../../src/utils/utils.js";
import {connect} from "react-redux";
class Goodlist extends Component{
	constructor(){
		super()
		this.state={
			flag:false,
			newInfo:"",
			alertFlag:true,
			from:""
		}
		this.toDetail = this.toDetail.bind(this)
	}
	render(){
		let {data} = this.props;
		return (
			<div id="good_list">
				{
					data.map((data1,index)=>{
					return 	<div className="good_cot" key={index}>
							<div className="good_cot_tit">
								<h3>{data1.title}<span className='span1'>更多></span></h3>
							</div>
							<div className="good_cot_ctr">
								{
									data1.children.map((item,idx)=>{
										return  <dl onClick={()=>{this.toDetail(item.goods_id)}} key={idx}>
													<dt><img src={"http://www.lb717.com//"+item.obj_data} /></dt>
													<dd>
														<p>{item.goods_name}</p>
														<p>
															<span>￥<label>{item.discount_price}</label></span>
															<i className="iconfont icon-gouwuche" onClick={(ev)=>{this.addCart(ev,item)}}></i>
														</p>
													</dd>
											</dl>
									})
								}
							</div>
						</div>
					})
				}
			</div>
		)
	}
	toDetail(goods_id){
		this.props.history.push("/detail?goods_id="+goods_id,{
			goods_id:goods_id
		})
	}
addCart(ev,item){
		ev.stopPropagation();
		if(document.cookie){
			//添加购物车
			$http.post("/addCart",{
				info:item,
				token:getCookie("token")
			}).then(res=>{
				if(res.code_num==1){
					this.setState({
						newInfo:res,
						flag:true
					})
					//关闭提示框
					setTimeout(()=>{
						this.setState({
							flag:false
						})
					},1000)
					
				}
			})
		}else{
			let hintInfo = {
				code_info:"登录超时，请重新登录！",
				code_num:2
			}
			// this.props.history.push("/login",{
			// 	from: this.props.history.location.pathname
			// })
		}
	}
}
function mapStateToProps(){
	return {}
}
export default  connect(mapStateToProps)(Goodlist)