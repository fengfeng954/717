import {UPDATE_GOODS_COUNT,UPDATA_COUNT,CHECKED_LIST,CHECKED_ALL} from "../../src/store/reducers.js"
import $http from "../../src/utils/http.js"
import {getCookie} from "../../src/utils/utils.js"
export default function mapDispatchToprops(dispatch){
	return{
		//获取购物车列表信息
		fetchCart(){
			$http.post("/countCart",{token:getCookie("token")})
			.then(res=>{
				if(res){
					dispatch({
						type:UPDATE_GOODS_COUNT,
						data:res
					})
				}
			});
		},
		//更新数量
		updataCount(count,id){
			dispatch({
				type:UPDATA_COUNT,
				data:count,
				id
			})
		},
		checkList(selectd,id){
			dispatch({
				type:CHECKED_LIST,
				data:selectd,
				id
			})
		},
		checkAll(str){
			dispatch({
				type:CHECKED_ALL,
				str:str
			})
		},
	}
}