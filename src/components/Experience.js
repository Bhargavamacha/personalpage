import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import HotelIcon from '@material-ui/icons/Hotel';
import RepeatIcon from '@material-ui/icons/Repeat';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'
const useStyles = makeStyles((theme) => ({
    paper: {
        padding: '6px 16px',
    },
    secondaryTail: {
        backgroundColor: theme.palette.secondary.main,
    },
}));

export default function Experience() {
    const classes = useStyles();

    return (
        <div>
            <Timeline align="alternate">
                <TimelineItem>
                    <TimelineOppositeContent>
                        <Paper elevation={10} className={classes.paper}>
                            <Typography style={{ color: 'black', fontFamily: 'Source Code Pro', fontSize: 17 }}>
                                Technology Intern @ Krate
            </Typography>
                            <Typography style={{ color: 'grey', fontFamily: 'Source Code Pro', fontSize: 14 }}>
                                Web Dev | App Dev | Cloud Architecture 
                            </Typography>
                        </Paper>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <div style={{ backgroundColor: 'black', width: 70, height: 90, alignSelf: 'center' }}>
                            <img src='https://krate.in/images/ft_logo.png' alt={'Not Available'} width={50} height={70} style={{ margin: 10 }} />
                        </div>
                        <TimelineConnector style={{ backgroundColor: 'black', height:80 }} />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography left style={{ color: 'black', fontFamily: 'Source Code Pro', fontSize: 17 }}>
                            2019-PRESENT<br />
                            <Button style={{ backgroundColor: 'lightgrey', marginTop: 10, fontFamily: 'Source Code Pro' }}>Details</Button>
                        </Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent>
                        <Paper elevation={10} className={classes.paper}>
                            <Typography style={{ color: 'black', fontFamily: 'Source Code Pro', fontSize: 17 }}>
                                NAIRP Developer @ Center of Excellence in Artificial Intelligence, IIT Kharagpur
            </Typography>
                            <Typography style={{ color: 'grey', fontFamily: 'Source Code Pro', fontSize: 14 }}>Developed a workflow for streaming video lectures
</Typography>
                        </Paper>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <div style={{ backgroundColor: 'white', width: 70, height: 90, alignSelf: 'center' }}>
                            <img src='https://upload.wikimedia.org/wikipedia/en/1/1c/IIT_Kharagpur_Logo.svg' alt={'Not Available'} width={50} height={60} style={{ margin: 10, marginTop:14 }} />
                        </div>
                        <TimelineConnector style={{ backgroundColor: 'black' }} />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography style={{ color: 'black', fontFamily: 'Source Code Pro', fontSize: 17 }}>
                            DECEMBER 2019<br />
                            {/* <br /> */}
                            <Button style={{ backgroundColor: 'lightgrey', marginTop: 10, fontFamily: 'Source Code Pro' }}>Details</Button>

                        </Typography>
                    </TimelineContent>
                </TimelineItem>
                <br />
                <br />
            </Timeline>
        </div>
    );
}
