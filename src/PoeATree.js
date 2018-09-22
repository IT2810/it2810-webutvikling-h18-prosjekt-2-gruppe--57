import React, {Component} from 'react';
import './PoeATree.css';

class PoeATree extends Component {
    constructor(props){
        super(props);
        this.state = {name: this.props.text,content:'', error:false, isLoaded:false};
    }
    
    componentWillReceiveProps() {
        let filename = this.state.name;
        let file = sessionStorage.getItem(filename);
        if(!file){
            fetch('/lib/text/'+filename)
                .then(response => {
                    if(response.ok){
                        response = response.json();
                        this.setState({
                            content: result.content,
                            isLoaded: true
                        });
                    }else{
                        this.setState({
                            error: true
                        });
                    }
                });

        }else{
            this.setState({
                content: file.json().content,
                isLoaded:true
            });
        }
        this.forceUpdate();
      
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