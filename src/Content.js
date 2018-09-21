import React, { Component } from 'react';
import './Content.css';
import PoeATree from './PoeATree';
import View from './View';
import jazz from "./lib/music/jazz/jazztrio.mp3"
import rock from './lib/music/rock/rock.mp3'
import electronic from './lib/music/electronic/electronic.mp3'


class Content extends Component{
    constructor(props) {
        super(props);
        this.state = { tab: this.props.tabIndex ,optionMusic: '', optionPoetry: '', optionArt: '' };
        this.handleChange = this.handleChange.bind(this);
    }


    //reRendered
    componentWillReceiveProps(nextProps) {
        this.setState({ tab: nextProps.tabIndex ,optionMusic: '', optionPoetry: '', optionArt: '' });
        //get from cached file.
    }

    handleChange(event) {
        const target = event.target;
        const name = target.name;
        if (name === "music") this.setState({ optionMusic: target.value });
        else if (name === "poetry") this.setState({ optionPoetry: target.value });
        else if (name === "art") this.setState({ optionArt: target.value });
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
                                            name="music"
                                            value="heavy metal"
                                            type="radio"
                                            onChange={this.handleChange}
                                        />
                                        smooth jazz
                                        <br />
                                        <input
                                            name="music"
                                            value="smooth jazz"
                                            type="radio"
                                            onChange={this.handleChange}
                                        />
                                        electronica
                                        <br />
                                        <input
                                            name="music"
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
                                            name="text"
                                            value="romantic"
                                            type="radio"
                                            onChange={this.handleChange}
                                        />
                                        romantic
                                        <br />
                                        <input
                                            name="text"
                                            value="comedy"
                                            type="radio"
                                            onChange={this.handleChange}
                                        />
                                        comedy
                                        <br />
                                        <input
                                            name="text"
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
                                            name="figures"
                                            value="the wonder that is the car"
                                            type="radio"
                                            onChange={this.handleChange}
                                        />
                                        The wonder that is the car
                                        <br />
                                        <input
                                            name="figures"
                                            value="something something we don't understand but seems important"
                                            type="radio"
                                            onChange={this.handleChange}
                                        />
                                        something we don't understand but seems important
                                        <br />
                                        <input
                                            name="figures"
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