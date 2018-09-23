import React, { Component } from 'react';
import '../styles/Main.css';
import $ from 'jquery';
import Content from './Content';

class Main extends Component{
    constructor(){
        super();
        this.state =  {
            tab: "0"
        }
    }

    onTab(id2){
        /*console.log("Pressed!"+id2);*/
        this.setState({tab:id2});
        let elements = document.getElementsByTagName("a");
        $.each(elements, function(value){
            if (value === id2){
                elements[value].setAttribute("class","active")
            }else{
                elements[value].setAttribute("class","")
            }
        })

    }


    render(){
        return(
            <div className="mainWrapper">
                <div className="nav">
                    <ul>
                        <li>
                            <a className="active" onClick={() => this.onTab(0)}>Fireplace</a>
                        </li>
                        <li>
                            <a className="" onClick={() => this.onTab(1)}>Savepoint 2</a>
                        </li>
                        <li>
                            <a className="" onClick={() => this.onTab(2)}>Savepoint 3</a>
                        </li>
                        <li>
                            <a className="" onClick={() => this.onTab(3)}>Savepoint 4</a>
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