import React, { Component } from 'react';
import './Main.css';
import Content from './Content.js';

class Main extends Component{
    constructor(){
        super();
        this.state =  {
            tab: "0"
        }
    }

    onTab(id2){
        console.log("Pressed!"+id2);
        this.setState({tab:id2});
    }


    render(){
        return(
            <div className="mainWrapper">
                <div className="nav">
                    <ul>
                        <li>
                            <a onClick={() => this.onTab(1)}>Savepoint 1</a>
                        </li>
                        <li>
                            <a onClick={() => this.onTab(2)}>Savepoint 2</a>
                        </li>
                        <li>
                            <a onClick={() => this.onTab(3)}>Savepoint 3</a>
                        </li>
                        <li>
                            <a onClick={() => this.onTab(4)}>Savepoint 4</a>
                        </li>
                    </ul>
                </div>
                <div className="contentMain">
                    <Content tabIndex={this.state.tab}/>
                </div>
            </div>
        );
    }
}
export default Main;