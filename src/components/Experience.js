import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

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
    const [open1, setOpen1] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);

    const handleClickOpen1 = () => {
        setOpen1(true);
    };

    const handleClose1 = () => {
        setOpen1(false);
    };
    const handleClickOpen2 = () => {
        setOpen2(true);
    };

    const handleClose2 = () => {
        setOpen2(false);
    };


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
                        <TimelineConnector style={{ backgroundColor: 'black', height: 80 }} />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography left style={{ color: 'black', fontFamily: 'Source Code Pro', fontSize: 17 }}>
                            2019-PRESENT<br />
                            <Button onClick={handleClickOpen1} style={{ backgroundColor: 'lightgrey', marginTop: 10, fontFamily: 'Source Code Pro' }}>Details</Button>
                        </Typography>
                    </TimelineContent>
                </TimelineItem>

                <Dialog
                    open={open1}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleClose1}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle id="alert-dialog-slide-title">{"Technology Intern @ Krate"}</DialogTitle>
                    <DialogContent>
                        <b>App Dev - Krate's <a href={"https://apps.apple.com/in/app/krate/id1520462951"} target={"_blank"}>iOS</a> and Android App | Stack:</b><br />
                            - React Native<br />
                            - AWS Lambda<br />
                            - AWS API Gateway<br />
                            - Google Firebase<br /><br />
                        <b>Web Dev - Krate's <a href={"https://apps.apple.com/in/app/krate/id1520462951"} target={"_blank"}>Web App</a> (Various Patches and a few new pages)  | Stack:</b><br />
                            - PHP<br />
                            - ReactJS<br />
                            - AWS Lambda and API Gateway<br />
                            - HTML5, CSS, Javascript<br />
                            - MySQL<br />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose1} color="primary">
                            CLOSE
          </Button>
                    </DialogActions>
                </Dialog>
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
                    <Dialog
                        open={open2}
                        TransitionComponent={Transition}
                        keepMounted
                        onClose={handleClose2}
                        aria-labelledby="alert-dialog-slide-title"
                        aria-describedby="alert-dialog-slide-description"
                    >
                        <DialogTitle id="alert-dialog-slide-title">{"NAIRP Developer @ Center of Excellence in Artificial Intelligence, IIT Kharagpur"}</DialogTitle>
                        <DialogContent>
                            <b>NAIRP's Video Streaming Service | Stack:</b><br />
                                - AWS CloudFront<br />
                                - AWS ElementalMediaConvert<br />
                                - AWS Lambda<br />
                                - AWS Step functions<br />
                                - AWS Cloud Formation<br />
                                - ReactJS and Node.JS<br />

                    </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose2} color="primary">
                                CLOSE
          </Button>
                        </DialogActions>
                    </Dialog>
                    <TimelineSeparator>
                        <div style={{ backgroundColor: 'white', width: 70, height: 90, alignSelf: 'center' }}>
                            <img src='https://upload.wikimedia.org/wikipedia/en/1/1c/IIT_Kharagpur_Logo.svg' alt={'Not Available'} width={50} height={60} style={{ margin: 10, marginTop: 14 }} />
                        </div>
                        <TimelineConnector style={{ backgroundColor: 'black' }} />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography style={{ color: 'black', fontFamily: 'Source Code Pro', fontSize: 17 }}>
                            DECEMBER 2019<br />
                            {/* <br /> */}
                            <Button onClick={handleClickOpen2} style={{ backgroundColor: 'lightgrey', marginTop: 10, fontFamily: 'Source Code Pro' }}>Details</Button>

                        </Typography>
                    </TimelineContent>
                </TimelineItem>
                <br />
                <br />
            </Timeline>
        </div>
    );
}
