import React, {Component} from 'react';
import $ from 'jquery';
import '../styles/Content.css';
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
        this.makeFile();
        /*this.setSelection("0");*/
    }


    //reRendered
    componentWillReceiveProps(nextProps) {
        this.setState({tab: nextProps.tabIndex});
        if (this.state.tab !== nextProps.tabIndex) {
            this.setSelection(nextProps.tabIndex);
            /*console.log("You changed the tab.... Brutal :O ");*/
        }

    }

    componentDidMount(){
        //setts the tab on load to the first one.
        this.setSelection("0");
    }

    traverse(firstIndex) {
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
        const index = this.traverse($(target).index());
        this.storeSelection(this.state.tab, name, index);
        if (name === "1") this.setState({optionMusic: "" + this.state.tab + "_" + target.value});
        else if (name === "2") this.setState({optionPoetry: "" + this.state.tab + "_" + target.value});
        else if (name === "3") this.setState({optionArt: "" + this.state.tab + "_" + target.value});
    }

    makeFile() {
        let file = JSON.parse(sessionStorage.getItem(SELECTION));
        if (!file) {
            let selection = ({
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
            sessionStorage.setItem(SELECTION, JSON.stringify(selection));
        }
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
        var self = this;
        console.log("The state i remember: " + selectedTab);
        let file = JSON.parse(sessionStorage.getItem(SELECTION));
        /*console.log(file[selectedTab]);*/
        $.each(file[selectedTab], function (value, index) {
            let valueInt = parseInt(value) - 1;
            let indexInt = parseInt(index) - 1;
            console.log("value: " + value + " idx: " + index);
            document.getElementsByTagName('form')[valueInt][indexInt].checked = true;
            if (value === "1") {
                self.setState({optionMusic: "" + selectedTab + "_" + index});
            } else if (value === "2") {
                self.setState({optionPoetry: "" + selectedTab + "_" + index});
            } else if (value === "3") {
                self.setState({optionArt: "" + selectedTab + "_" + index});
            }
            console.log(self.state)
        })
    };

    render() {
        return (
            <div>
                <div className="contentWrapper">
                    <div className="viewContent">
                        <View art={this.state.optionArt}/>
                    </div>
                    <div className="sidebarContent">
                        <div className="wrapper">
                            <div className="sidebar">
                                <form>
                                    <label> Select preferred music:
                                        <br/>
                                        <input
                                            name="1"
                                            value="1"
                                            type="radio"
                                            onChange={this.handleChange}
                                        />
                                        smooth jazz
                                        <br/>
                                        <input
                                            name="1"
                                            value="2"
                                            type="radio"
                                            onChange={this.handleChange}
                                        />
                                        electronica
                                        <br/>
                                        <input
                                            name="1"
                                            value="3"
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
                                            value="1"
                                            type="radio"
                                            onChange={this.handleChange}
                                        />
                                        romantic
                                        <br/>
                                        <input
                                            name="2"
                                            value="2"
                                            type="radio"
                                            onChange={this.handleChange}
                                        />
                                        comedy
                                        <br/>
                                        <input
                                            name="2"
                                            value="3"
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
                                            value="1"
                                            type="radio"
                                            onChange={this.handleChange}
                                        />
                                        The wonder that is the car
                                        <br/>
                                        <input
                                            name="3"
                                            value="2"
                                            type="radio"
                                            onChange={this.handleChange}
                                        />
                                        something we don't understand but seems important
                                        <br/>
                                        <input
                                            name="3"
                                            value="3"
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
                        <PoeATree text={this.state.optionPoetry}/>
                    </div>
                </div>
                <div className="musicElm">
                    <Music music={this.state.optionMusic}/>
                </div>
            </div>
        );
    }
}

export default Content;