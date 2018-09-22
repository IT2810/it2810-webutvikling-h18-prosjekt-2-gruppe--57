import React,{Component} from 'react';
import './music.css'

class Music extends Component {
    constructor(props){
        super(props);
        this.state = {name:'lib/music/'+this.props.music}
    }
    
    render() {
        return(
            <div>
                <audio src={this.state.name} type="mp3" controls> </audio>
            </div>
        );
    }
}

export default Music;