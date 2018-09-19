import React, { Component } from 'react';
import './Main.css';
import Content from './Content.js';

class Main extends Component{
    render(){
        return(
            <div className="mainWrapper">
                <div className="nav">
                    <ul>
                        <li>
                            <a href="#">Savepoint 1</a>
                        </li>
                        <li>
                            <a href="#">Savepoint 2</a>
                        </li>
                        <li>
                            <a href="#">Savepoint 3</a>
                        </li>
                        <li>
                            <a href="#">Savepoint 4</a>
                        </li>
                    </ul>
                </div>
                <div className="contentMain">
                    <Content content={this.props.Content}/>
                </div>
            </div>
        );
    }
}
export default Main;