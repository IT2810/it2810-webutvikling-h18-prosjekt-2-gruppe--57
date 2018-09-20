import React,{Component} from 'react';
import './music.css'

class Music extends Component {
    render() {
        return(
            <div>
                <audio src="lib/music/jazz.mp3" type="mp3" controls> </audio>
            </div>
        );
    }
}

export default Music;