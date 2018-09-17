import React, {Component} from 'react';

class Sidebar extends Component{
    render(){
        return(
            <div class="wrapper">
                <div class="sidebar">
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