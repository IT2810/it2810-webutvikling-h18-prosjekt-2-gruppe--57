import React, {Component} from 'react';
import './View.css';
import images from "./lib/figures/postmodern/lul.png";

class View extends Component {
    constructor(props){
        super(props);
        this.state = {art: '',music: ''};
        this.load = this.load.bind(this);
    }

    load(){

    }

    render() {
        return (
            <div className="figure">
                <object src={images}>Hallo</object>

                {/*<img src={images} alt="sadas"></img>*/}
                <br/>
            </div>
        )
    }
}

export default View;