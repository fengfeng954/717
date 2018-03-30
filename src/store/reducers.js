import {combineReducers} from "redux";
export const ADD_CART = "ADD_CART";
export const DELETE_CAPR = "DELETE_CAPR";
export const UPDATE_GOODS_COUNT = "UPDATE_GOODS_COUNT";
export const UPDATA_COUNT = "UPDATA_COUNT";
export const CHECKED_LIST = "CHECKED_LIST";
export const CHECKED_ALL = "CHECKED_ALL";
let inintState = {
	cart_list: []
}

function cart_list(state = inintState.cart_list, action) {
	switch (action.type) {
		case ADD_CART:
			return [...state, action.data];
			break;
		case UPDATE_GOODS_COUNT:
			return action.data
			break;
		case UPDATA_COUNT:
			let arr = [...state];
			arr.map((item,index)=>{
				if(item.goods_id == action.id){
					item.count = action.data
				}
			})
			return arr
			break;
		case CHECKED_LIST:
			let all = [...state];
			all.map((item,index)=>{
				if(item.goods_id == action.id){
					item.selectd = action.data
				}
			})
			return all
			break;
		case CHECKED_ALL:
			let all2 = [...state];
			let str = action.str;
			all2.map((item,index)=>{
				if(item.goods_id){
					item.selectd = str=="all"?0:1
				}
			})
			return all2
			break;
		default: return state
	}
	return state
}
export default combineReducers({
	cart_list
})