import React,{Component} from "react"
import {BrowserRouter,Route,Switch,Redirect,Link} from "react-router-dom";
import Mmobile from "../component/home/mmobile.jsx"
import Router from "./router/router.js";
import Routers from "../component/routes.jsx";
import  icon from "../static/font/iconfont.css";
import indexcss from "../component/index/index.css";
class App extends Component{
	render(){
		return (
			<BrowserRouter>
					<Switch>
						<Redirect exact from="/" to="index/mmobile"></Redirect>
						<Routers Router={Router.rules}></Routers>
					</Switch>
			</BrowserRouter>
		)
	}
}
export default App