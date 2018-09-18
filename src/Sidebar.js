import React, {Component} from 'react';
import './Sidebar.css';

class Sidebar extends Component{
    render(){
        return(
            <div className="wrapper">
                <div className="sidebar">
                    <ul>
                        <ul> Category1
                            <li>Option1</li>
                            <li>Option2</li>
                            <li>Option3</li>
                        </ul>
                        <ul> Category2
                            <li>Option1</li>
                            <li>Option2</li>
                            <li>Option3</li>
                        </ul>
                        <ul> Category3
                            <li>Option1</li>
                            <li>Option2</li>
                            <li>Option3</li>
                        </ul>
                    </ul>
                </div>
            </div>
        );
    }
}