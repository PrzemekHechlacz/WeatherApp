import React from "react";
import './Aplication.css'
import YouTube from 'react-youtube';


const Aplication = () => {
    const opts = {
        height: '150',
        width: '300',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
    
      const onReady = (event) => {
        // access to player in all event handlers via event.target
        event.target.stopVideo();
      };

    return (

<div className="aplication-div">
<YouTube videoId="seNmmkB3PYI" opts={opts} onReady={onReady} />;
    
    </div>
    )
}

export default Aplication