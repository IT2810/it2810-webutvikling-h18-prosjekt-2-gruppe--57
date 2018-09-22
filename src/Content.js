import React, { Component } from 'react';
import $ from 'jquery';
import './Content.css';
import PoeATree from './PoeATree'; 
import View from './View';
import jazz from "./lib/music/jazz.mp3"
import rock from './lib/music/rock.mp3'
import electronic from './lib/music/electronic.mp3'

let SELECTION = 'selection.json';
let URL = '';
class Content extends Component{
    constructor(props) {
        super(props);
        this.state = { tab: this.props.tabIndex ,optionMusic: '', optionPoetry: '', optionArt: '' };
        this.handleChange = this.handleChange.bind(this);
        this.storeSelection = this.storeSelection.bind(this);
        this.getSelection = this.getSelection.bind(this);
        this.getFile = this.getFile.bind(this);
    }


    //reRendered
    componentWillReceiveProps(nextProps) {
        //let {music, poetry, art} = getSelection();
        this.setState({ tab: nextProps.tabIndex ,optionMusic: '', optionPoetry: '', optionArt: '' });
    }

    handleChange(event) {
        const target = event.target;
        const name = target.name;
        const index = $(target).index();
        this.storeSelection(this.state.tab,name,index);
        this.getFile(target.value);
        if (name === "category1") this.setState({ optionMusic: target.value });
        else if (name === "category2") this.setState({ optionPoetry: target.value });
        else if (name === "category3") this.setState({ optionArt: target.value });
    }

    //store selection for current tab
    storeSelection(selectedTab,selectedCategory,index){
        let selection = '';
        let file = sessionStorage.getItem(SELECTION);
        if(!file){
            selection = JSON.stringify({
                "0":{
                    "category1" : 1,
                    "category2" : 1,
                    "category3" : 1,
                },
                "1":{
                    "category1" : 1,
                    "category2" : 1,
                    "category3" : 1,
                },
                "2":{
                    "category1" : 1,
                    "category2" : 1,
                    "category3" : 1,
                },
                "3":{
                    "category1" : 1,
                    "category2" : 1,
                    "category3" : 1,
            }});
        }else selection = file;
        console.log(selection); 
        selection[selectedTab][selectedCategory] = index; 
        sessionStorage.setItem(SELECTION,selection);
    }

    //get previous selection for current tab 
    getSelection(selectedTab){
        let file = sessionStorage.getItem(SELECTION);
        
    }

    //checks if file is stored in sessionStorage 
    //retrieves it if not
    //needs to run before changing state as children will only read locally
    getFile(name){
        let file = sessionStorage.getItem(name);
        if(!file){
            fetch(URL + '/' + name)
                .then(response => {
                    if(response.ok){
                        sessionStorage.setItem(name, response);
                    }
                    else{
                        throw new Error('Error, could not fetch data'); 
                    }
                    
                });
        }
    }


    render(){
        return(
            <div>
                <div className="contentWrapper">
                    <h1 className="id">this is the current page: {this.state.tab}</h1>
                    <div className="viewContent">
                        <View art={this.state.optionArt} music={this.state.optionMusic} />
                    </div>
                    <div className="sidebarContent">
                        <div className="wrapper">
                            <div className="sidebar">
                                <form>
                                    <label> Select preferred music:
                                        <br />
                                        <input
                                            name="category1"
                                            value="heavy metal"
                                            type="radio"
                                            onChange={this.handleChange}
                                        />
                                        smooth jazz
                                        <br />
                                        <input
                                            name="category1"
                                            value="smooth jazz"
                                            type="radio"
                                            onChange={this.handleChange}
                                        />
                                        electronica
                                        <br />
                                        <input
                                            name="category1"
                                            value="classical"
                                            type="radio"
                                            onChange={this.handleChange}
                                        />
                                        rock
                                    </label>
                                </form>
                                <br />
                                <form>
                                    <label> Select preferred poetry:
                                        <br />
                                        <input
                                            name="category2"
                                            value="romantic"
                                            type="radio"
                                            onChange={this.handleChange}
                                        />
                                        romantic
                                        <br />
                                        <input
                                            name="category2"
                                            value="comedy"
                                            type="radio"
                                            onChange={this.handleChange}
                                        />
                                        comedy
                                        <br />
                                        <input
                                            name="category2"
                                            value="revolutionary"
                                            type="radio"
                                            onChange={this.handleChange}
                                        />
                                        revolutionary
                                    </label>
                                </form>
                                <br />
                                <form>
                                    <label> Select preferred art:
                                        <br />
                                        <input
                                            name="category3"
                                            value="the wonder that is the car"
                                            type="radio"
                                            onChange={this.handleChange}
                                        />
                                        The wonder that is the car
                                        <br />
                                        <input
                                            name="category3"
                                            value="something something we don't understand but seems important"
                                            type="radio"
                                            onChange={this.handleChange}
                                        />
                                        something we don't understand but seems important
                                        <br />
                                        <input
                                            name="category3"
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
                        <PoeATree text={this.state.optionPoetry}/>
                    </div>
                </div>
                <div className="musicElm">
                    <audio src={jazz}></audio>
                    <p>music from bensound.com</p>
                </div>
            </div>
        );
    }
}
export default Content;