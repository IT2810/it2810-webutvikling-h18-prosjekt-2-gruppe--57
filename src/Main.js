import React, { Component } from 'react';
import './Main.css';
import Content from './Content.js';
import View from './View.js';
import Sidebar from './Sidebar.js';
import Music from "./music";

class Main extends Component{
    render(){
        return(
            <div className="wrapper">
                <div className="nav">
                    <ul>
                        <li>
                            <a href="#">Display1</a>
                        </li>
                        <li>
                            <a href="#">Display2</a>
                        </li>
                        <li>
                            <a href="#">Display3</a>
                        </li>
                        <li>
                            <a href="#">Display4</a>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                    </ul>
                </div>
                <Content/>
                <View />
                <Music/>
                <Sidebar />
            </div>
        );
    }
}
export default Main;