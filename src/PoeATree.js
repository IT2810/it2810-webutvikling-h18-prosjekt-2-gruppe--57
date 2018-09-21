import React, {Component} from 'react';
import './PoeATree.css';

class PoeATree extends Component {
    constructor(props){
        super(props);
        console.log(props.text);
        this.state = {content:[]};
    }
    
    componentDidMount() {
        let filename = this.props.text;
        let file = sessionStorage.getItem(filename);
        /*this.setState({
            content: file.content
        });*/
    }

    
    render(){
        return (
            <div className="PoeATree">
                <p>
                    {this.state.content}
                </p>
            </div>
        );
    }
}
export default PoeATree;