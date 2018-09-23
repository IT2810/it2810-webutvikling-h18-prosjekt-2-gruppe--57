import React,{Component} from 'react';
import '../styles/Music.css'

class Music extends Component {
    constructor(props){
        super(props);
        this.state = {name:'lib/music/'+this.props.music+'_1.mp3'}
    }

    componentWillReceiveProps(newProps){
        this.setState({
            name:'lib/music/'+newProps.music+'_1.mp3'
        });
    }
    
    render() {
        return(
            <div>
                <audio src={this.state.name} type="mp3" autoPlay loop> </audio>
            </div>
        );
    }
}

export default Music;