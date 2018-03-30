import React,{Component} from "react"
import icon from "../../static/font/iconfont.css";
import $http from "../../src/utils/http.js";
class GoodsItem extends Component{
	render(){
		return <dl>
			<dt><img src=""/></dt>
			<dd>
				<p className="goods-detail"></p>
				<p className="goods-price"><span>230</span><span className='iconfont icon-gouwuche' ></span></p>
			</dd>
		</dl>
	}
}