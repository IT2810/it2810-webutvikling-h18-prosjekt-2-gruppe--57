import React, {Component} from 'react';
import './View.css';
import images from "./lib/figures/postmodern/fire.svg";

class View extends Component {
    constructor(props){
        super(props);
        this.state = {art: 'fire.svg',content:'',isLoaded:false,error:false};
        this.store = this.store.bind(this);
    }

    componentDidMount(){
        let name = this.state.art;
        let file = sessionStorage.getItem(name);
        if(!file){
            fetch('/lib/images/'+name)
                .then(response => response.text())
                .then(cont => this.store(name,cont));
        }else{
            this.setState({
                content: file,
                isLoaded: true
            });
        }
    }

    store(name,cont){
        sessionStorage.setItem(name,cont);
        this.setState({
            content: cont,
            isLoaded: true
        });
    }

    render() {
        if(!this.state.isLoaded){
            return (
                <div className="figure">
                    <p>Loading...</p>
                </div>
            );
        }
        else if(this.state.error){
            return (
                <div className="figure">
                    <p>An error occurred fetching data</p>
                </div>
            );
        }
        else{
            return (
                <div className="figure">
                    <div dangerouslySetInnerHTML={{ __html: this.state.content}} />;
                </div>
            );
        }
    }
}

export default View;