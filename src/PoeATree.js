import React, {Component} from 'react';
import './PoeATree.css';

class PoeATree extends Component {
    constructor(props){
        super(props);
        this.state = {content:[], error:false};
    }
    
    //Loads selected file from sessionStorage
    //Caching is done by Content
    componentWillReceiveProps() {
        let filename = this.props.text;
        let file = sessionStorage.getItem(filename);
        if(!file){
            this.setState({
                error:true
            });
        }else{
            this.setState({
                content: file.content
            });
        }
      
    }

    
    render(){
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