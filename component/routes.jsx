import React,{Component} from "react"
import * as Router from "react-router-dom";
let {BrowserRouter,Route,Switch,Redirect,Link} = Router
class Routes extends Component {
	render(){
		let {Router}=this.props
		return (
			Router.map((item,index) => {
				return <Route key={index} path={item.path} render={(router)=>{
						return <item.component {...router} Router={item.children}></item.component>
				}}></Route>
			})
			)
	}
}
export default Routes