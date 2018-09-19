import React, {Component} from 'react';
import './Sidebar.css';

class Sidebar extends Component{
    constructor(props){
        super(props);
        this.state = {optionMusic: '', optionPoetry:'', optionArt: ''};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        const target = event.target;
        const name = target.name;
        if(name === "music") this.setState({optionMusic: target.value});
        else if(name === "poetry") this.setState({optionPoetry: target.value});
        else if (name === "art") this.setState({optionArt: target.value});
        console.log(this.state);
    }
    render(){
        return(

        );
    }
}
export default Sidebar;