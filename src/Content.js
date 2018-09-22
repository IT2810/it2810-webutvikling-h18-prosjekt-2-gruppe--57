import React, {Component} from 'react';
import $ from 'jquery';
import './Content.css';
import PoeATree from './PoeATree';
import View from './View';
import Music from './Music';


let SELECTION = 'selection.json';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {tab: 0, optionMusic: '', optionPoetry: '', optionArt: ''};
        this.handleChange = this.handleChange.bind(this);
        this.storeSelection = this.storeSelection.bind(this);
        this.setSelection = this.setSelection.bind(this);
    }


    //reRendered
    componentWillReceiveProps(nextProps) {
        this.setState({tab: nextProps.tabIndex, optionMusic: '', optionPoetry: '', optionArt: ''});
        if (this.state.tab !== nextProps.tabIndex) {
            this.setSelection(nextProps.tabIndex);
            /*console.log("You changed the tab.... Brutal :O ");*/
        }

    }

    trivers(firstIndex) {
        let returnValue = 1;
        if (firstIndex === 3) {
            returnValue = 2
        } else if (firstIndex === 5) {
            returnValue = 3
        }
        return returnValue
    }

    handleChange(event) {
        const target = event.target;
        const name = target.name;
        const index = this.trivers($(target).index());
        this.storeSelection(this.state.tab, name, index);
             if (name === "1") this.setState({optionMusic:  target.value});
        else if (name === "2") this.setState({optionPoetry: target.value});
        else if (name === "3") this.setState({optionArt:    target.value});
    }

    //store selection for current tab
    storeSelection(selectedTab, selectedCategory, index) {
        let selection = '';
        let file = JSON.parse(sessionStorage.getItem(SELECTION));
        if (!file) {
            selection = ({
                "0": {
                    "1": 1,
                    "2": 1,
                    "3": 1,
                },
                "1": {
                    "1": 1,
                    "2": 1,
                    "3": 1,
                },
                "2": {
                    "1": 1,
                    "2": 1,
                    "3": 1,
                },
                "3": {
                    "1": 1,
                    "2": 1,
                    "3": 1,
                }
            });
        } else selection = file;
        selection[selectedTab][selectedCategory] = index;
        sessionStorage.setItem(SELECTION, JSON.stringify(selection));
    }


    //set previous selection for current tab
    setSelection(selectedTab) {
        console.log("The state i remember: " + selectedTab);
        let file = JSON.parse(sessionStorage.getItem(SELECTION));
        /*console.log(file[selectedTab]);*/
        $.each(file[selectedTab], function  (value, index) {
            let valueInt = parseInt(value)-1;
            let indexInt = parseInt(index)-1;
            /*console.log("value: " + value + " idx: " + index);*/
            document.getElementsByTagName('form')[valueInt][indexInt].checked = true
        })
    };

    render() {
        return (
            <div>
                <div className="contentWrapper">
                    <div className="viewContent">
                    {/*                         
                    <View art={this.state.optionArt}/>
                    */}          
                    <View art="fire.svg" />        
                  </div>
                    <div className="sidebarContent">
                        <div className="wrapper">
                            <div className="sidebar">
                                <form>
                                    <label> Select preferred music:
                                        <br/>
                                        <input
                                            name="1"
                                            value="heavy metal"
                                            type="radio"
                                            onChange={this.handleChange}
                                        />
                                        smooth jazz
                                        <br/>
                                        <input
                                            name="1"
                                            value="smooth jazz"
                                            type="radio"
                                            onChange={this.handleChange}
                                        />
                                        electronica
                                        <br/>
                                        <input
                                            name="1"
                                            value="classical"
                                            type="radio"
                                            onChange={this.handleChange}
                                        />
                                        rock
                                    </label>
                                </form>
                                <br/>
                                <form>
                                    <label> Select preferred poetry:
                                        <br/>
                                        <input
                                            name="2"
                                            value="romantic"
                                            type="radio"
                                            onChange={this.handleChange}
                                        />
                                        romantic
                                        <br/>
                                        <input
                                            name="2"
                                            value="comedy"
                                            type="radio"
                                            onChange={this.handleChange}
                                        />
                                        comedy
                                        <br/>
                                        <input
                                            name="2"
                                            value="revolutionary"
                                            type="radio"
                                            onChange={this.handleChange}
                                        />
                                        revolutionary
                                    </label>
                                </form>
                                <br/>
                                <form>
                                    <label> Select preferred art:
                                        <br/>
                                        <input
                                            name="3"
                                            value="the wonder that is the car"
                                            type="radio"
                                            onChange={this.handleChange}
                                        />
                                        The wonder that is the car
                                        <br/>
                                        <input
                                            name="3"
                                            value="something something we don't understand but seems important"
                                            type="radio"
                                            onChange={this.handleChange}
                                        />
                                        something we don't understand but seems important
                                        <br/>
                                        <input
                                            name="3"
                                            value="this we really dont't understand"
                                            type="radio"
                                            onChange={this.handleChange}
                                        />
                                        this we really don't understand
                                    </label>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="poeATreeContent">
                        <PoeATree text="frankenstein.json"/>
                    </div>
                </div>
                <div className="musicElm">
                    <Music music="dance.mp3"/>
                </div>
            </div>
        );
    }
}

export default Content;