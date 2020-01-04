import React,{Fragment} from "react"
import TabBar from "components/tabBar";

class Layout extends React.Component{
    render(){
        return(
            <Fragment>
                {this.props.children}
                 {/* 内容区 */}
                <TabBar path={this.props.path}/>
            </Fragment>
        )
    }
}


export default Layout;


/**
 * 组件标签内部嵌套的内容如何显示
 * {this.props.children}
 */