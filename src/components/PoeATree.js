import React, {Component} from 'react';
import '../styles/PoeATree.css';

class PoeATree extends Component {
    constructor(props){
        super(props);
        this.state = {name: this.props.text,content:'', error:false, isLoaded:false};
        this.store = this.store.bind(this);
    }

    componentWillReceiveProps(newProps) {
        let filename = newProps.text;
        let file = sessionStorage.getItem(filename);
        console.log(filename);
        if (!file || filename === '') {
            fetch('lib/text/' + filename + "_2.json")
                .then(response => response.json())
                .then(cont => this.store(filename+"_2",cont));
        } else {
            this.setState({
                content: file.content,
                isLoaded: true
            });
        }
    }

    store(name, cont){
        sessionStorage.setItem(name,cont);
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