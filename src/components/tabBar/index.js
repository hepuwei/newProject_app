import React from "react"
import {TabBarContainer} from "./styled"
import {TabBarRoute} from "router"
import {withRouter} from "react-router-dom"
@withRouter
class TabBar extends React.Component {
    render(){
        let {path} = this.props;
        return(
            <TabBarContainer>
                <ul>
                    {
                        TabBarRoute.map((item)=>(
                            <li key={item.path} onClick={this.handleClick.bind(this,item.path)} className={path===item.path?'active':''}>
                                <i className="iconfont">{item.icon}</i>
                                <span>{item.text}</span>
                            </li>
                        ))
                    }
                </ul>
                
            </TabBarContainer>
        )
    }
    handleClick(path){
        this.props.history.push(path);
    }
}
export default TabBar;