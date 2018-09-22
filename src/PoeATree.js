import React, {Component} from 'react';
import './PoeATree.css';

class PoeATree extends Component {
    constructor(props){
        super(props);
        this.state = {name: this.props.text,content:'', error:false, isLoaded:false};
        this.store = this.store.bind(this);
    }
    
    componentDidMount() {
        let filename = this.state.name;
        let file = sessionStorage.getItem(filename);
        if (!file) {
            fetch('/lib/text/' + filename)
                .then(response => response.json())  
                .then(cont => this.store(filename,cont));
        } else {
            this.setState({
                content: JSON.parse(file).content,
                isLoaded: true
            });
        }
      
    }

    store(name, cont){
        sessionStorage.setItem(name,JSON.stringify(cont));
        this.setState({
            content: cont.content,
            isLoaded:true
        });
    }
    
    render(){
        if(!this.state.isLoaded){
            return(
                <div className="PoeATree">
                <p>Loading...</p>
                </div>
            )
        }
        if(this.state.error){
            return(
                <div className="PoeATree">
                <p> An error occured during loading </p>
                </div>
            );
        }else{
            return (
                <div className="PoeATree">
                    <p>
                        {this.state.content}
                    </p>
                </div>
            );
        }
        
    }
}
export default PoeATree;