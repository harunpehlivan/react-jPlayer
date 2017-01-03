import React from "react";
import {JPlayer, Media, Gui, Progress, SeekBar, PlaybackBar, Buffer, BrowserUnsupported, Poster, Audio, Title, FullScreen,
     Mute, Play, PlayBar, Repeat, PlaybackRateBar, PlaybackRateBarValue, VolumeBar, VolumeBarValue, Duration, CurrentTime} from "../../../src/index";

class AudioPlayer extends React.Component {
    render() {
        return (
            <JPlayer className="jp-default" id={this.props.id}>
                <Gui>
                    <Media>
                        <Audio>
                            <track src="subtitles_en.vtt" kind="subtitles" srcLang="en" label="English" />
                        </Audio>
                    </Media>
                    <div className="jp-poster-container">
                        <Poster />
                        <Title />
                    </div>
                    <div className="jp-controls">
                        <Play><i className="fa">{/*Icon set in css*/}</i></Play>
                        <FullScreen><i className="fa fa-expand"></i></FullScreen>
                        <Repeat><i className="fa fa-repeat"></i></Repeat>
                        <PlaybackRateBar><PlaybackRateBarValue /></PlaybackRateBar>
                        <div className="jp-volume-controls">
                            <Mute><i className="fa">{/*Icon set in css*/}</i></Mute>
                            <VolumeBar><VolumeBarValue /></VolumeBar>
                        </div>
                        <Progress>
                            <SeekBar>
                                <PlayBar />
                                <Buffer />
                                <CurrentTime />
                                <Duration />  
                            </SeekBar>  
                        </Progress>
                    </div>
                </Gui>             
                <BrowserUnsupported /> 
            </JPlayer>
        );
    }
}

AudioPlayer.options = {
    id: "audio-player",
    smoothPlayBar: false,
    muted: true,
    globalVolume: false,
    autoplay: false,
    logErrors: true,
    keyEnabled: true,
    media: {
        title: "Cro Magnon Man",
        artist: "The Stark Palace",
        mp3: "http://jplayer.org/audio/mp3/Miaow-07-Bubble.mp3",
        poster: "http://wallpapercave.com/wp/Mb4UPsY.png",
        free: true
    }
};

export default AudioPlayer;