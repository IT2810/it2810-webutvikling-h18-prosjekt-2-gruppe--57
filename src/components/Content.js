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
        }

    }

    componentDidMount(){
        //setts the tab on load to the first one.
        this.setSelection("0");
    }

    traverse(firstIndex) {
        let returnValue = 3;
        if (firstIndex === 2) {
            returnValue = 1
        } else if (firstIndex === 5) {
            returnValue = 2
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
        let file = JSON.parse(sessionStorage.getItem(SELECTION));
        $.each(file[selectedTab], function (value, index) {
            let valueInt = parseInt(value,10) - 1;
            let indexInt = parseInt(index,10) - 1;
            document.getElementsByTagName('form')[valueInt][indexInt].checked = true;
            if (value === "1") {
                self.setState({optionMusic: "" + selectedTab + "_" + index});
            } else if (value === "2") {
                self.setState({optionPoetry: "" + selectedTab + "_" + index});
            } else if (value === "3") {
                self.setState({optionArt: "" + selectedTab + "_" + index});
            }
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
                                    <label> Preferred music: </label>
                                    <br/>
                                    <input
                                        id="c1_s1"
                                        name="1"
                                        value="1"
                                        type="radio"
                                        onChange={this.handleChange}
                                    />
                                    <label htmlFor="c1_s1">smooth jazz</label>
                                    <br />
                                    <input
                                        id="c1_s2"
                                        name="1"
                                        value="2"
                                        type="radio"
                                        onChange={this.handleChange}
                                    />
                                    <label htmlFor="c1_s2">electronica</label>
                                    <br />    
                                    <input
                                        id="c1_s3"
                                        name="1"
                                        value="3"
                                        type="radio"
                                        onChange={this.handleChange}
                                    />
                                    <label htmlFor="c1_s3">rock</label>
                                </form>
                                <br/>
                                <form>
                                    <label> Preferred poetry: </label>
                                    <br/>
                                    <input
                                        id="c2_s1"
                                        name="2"
                                        value="1"
                                        type="radio"
                                        onChange={this.handleChange}
                                    />
                                    <label htmlFor="c2_s1">romantic</label>
                                    <br/>
                                    <input
                                        id="c2_s2"
                                        name="2"
                                        value="2"
                                        type="radio"
                                        onChange={this.handleChange}
                                    />
                                    <label htmlFor="c2_s2">comedy</label>
                                    <br/>
                                    <input
                                        id="c2_s3"
                                        name="2"
                                        value="3"
                                        type="radio"
                                        onChange={this.handleChange}
                                    />
                                    <label htmlFor="c2_s3">revolutionary</label>
                                </form>
                                <br/>
                                <form>
                                    <label> Preferred art:</label>
                                    <br/>
                                    <input
                                        id="c3_s1"
                                        name="3"
                                        value="1"
                                        type="radio"
                                        onChange={this.handleChange}
                                    />
                                    <label htmlFor="c3_s1">step1</label>
                                    <br/>
                                    <input
                                        id="c3_s2"
                                        name="3"
                                        value="2"
                                        type="radio"
                                        onChange={this.handleChange}
                                    />
                                    <label htmlFor="c3_s2">step2</label>
                                    <br/>
                                    <input
                                        id="c3_s3"
                                        name="3"
                                        value="3"
                                        type="radio"
                                        onChange={this.handleChange}
                                    />
                                    <label htmlFor="c3_s3">step3</label>
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