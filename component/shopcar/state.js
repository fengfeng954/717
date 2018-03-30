export default function mapStateToProps(state) {
	let total = false;
	let nums = 0;
	state.cart_list.map((item,index)=>{
		if(item.selectd==true){
			nums+=(item.count*item.discount_price)
			total = true
		}
		if(item.selectd==false){
			 total=false
		}
	})
	return {
		cartList: state.cart_list,
		total,
		nums
	}
}