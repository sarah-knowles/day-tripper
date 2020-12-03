import React from 'react';

import classes from './BackgroundVideo.module.css';

const BackgroundVideo = () => {
    const videoSource = 'videos/sunny.mp4'
    return (
        <div className={classes.Container} >
            <video autoPlay="autoplay" loop="loop" muted className={classes.Video} >
                <source src={videoSource} type="video/mp4" />
                Your browser does not support this video.
            </video>

            <div className={classes.Content}>
                <div className={classes.SubContent} >
                <h1>today is...</h1>
                </div>
            </div>
        </div>
    )
}

export default BackgroundVideo