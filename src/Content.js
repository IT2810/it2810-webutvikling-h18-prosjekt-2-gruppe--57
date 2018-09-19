import React, { Component } from 'react';
import './Content.css';
import View from './View.js';
import Sidebar from './Sidebar.js';
import PoeAThree from './PoeATree.js';

class Content extends Component{
    render(){
        return(
            <div className="contentWrapper">
                <div className="viewContent">
                    <View view={this.props.View}/>
                </div>
                <div className="sidebarContent">
                    <Sidebar Sidebar={this.props.Sidebar}/>
                </div>
                <div className="poeATreeContent">
                    <PoeAThree PoeAThree={this.props.PoeAThree}/>
                </div>
            </div>
        );
    }
}
export default Content;