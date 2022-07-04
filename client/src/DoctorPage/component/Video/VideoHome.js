import React from 'react';
import "./VideoHome.css";

import { makeStyles } from '@material-ui/core/styles';

import VideoPlayer from './VideoPlayer';
import Sidebar from './Sidebar';
import Notifications from './Notifications';
import VideoNavBar from './VideoNav';

const useStyles = makeStyles(() => ({
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
    },
}));

const VideoHome = () => {
    const classes = useStyles();

    return (
        <div className='Vbody Vall'>
            <VideoNavBar/>
            <div className={classes.wrapper}>
                <VideoPlayer />
                <Sidebar>
                    <Notifications />
                </Sidebar>
            </div>
        </div>
    );
};

export default VideoHome;
