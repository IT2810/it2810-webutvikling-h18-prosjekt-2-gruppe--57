import React, {Component} from 'react';
import './View.css';
import images from "./lib/figures/postmodern/fire.svg";

class View extends Component {
    constructor(props){
        super(props);
        this.state = {art: this.props.initialArt};
        this.load = this.load.bind(this);
    }

    load(){
        let name = this.state.art;
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


    componentWillReceiveProps() {
        this.load()
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