import React, {Component} from 'react';
import './View.css';
import images from "./lib/figures/postmodern/fire.svg";

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
                <object data={images} type="image/svg+xml"></object>
                <br/>
            </div>
        )
    }
}

export default View;