import React from 'react';
import Button from '@material-ui/core/Button';
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
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function Projects() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Grid container spacing={4}>
            <Grid item xs={11} sm={11} md={5} lg={5}>
                <Card elevation={10} style={{backgroundColor:'lightgrey'}}>
                    <CardContent>
                        <Typography style={{fontFamily:'Source Code Pro', color:'black', fontSize:12}}>
                            APP DEB + API DEV + CLOUD ARCHITECTURE
                        </Typography>
                        <Typography style={{fontFamily:'Source Code Pro', color:'black', fontWeight:'bold'}} variant="h5" component="h2">
                            Social EGG
                            </Typography>
                        <Typography style={{color:'black', fontSize:14,marginTop:5, fontFamily:'Source Code Pro'}}>
                        An integrated approach to information, SocialEGG lets you find news and videos alike, so it's a one-stop solution for all your news needs. Swipe your way through the ocean of information, with your preferences being learned with every swipe.
                        </Typography>
            <Button onClick={()=> window.open("http://app.socialegg.in", "_blank")} style={{ backgroundColor: 'black', marginRight: 20, marginTop:10,fontFamily:'Source Code Pro', color:'white' }}>Download App</Button>
            <Button onClick={handleClose} style={{ backgroundColor: 'black', marginRight: 20, marginTop:10,fontFamily:'Source Code Pro', color:'white' }}>Learn more</Button>
                    </CardContent>
                </Card>
                <Dialog
                    open={open}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle id="alert-dialog-slide-title">{"Use Google's location service?"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-slide-description">
                            Let Google help apps determine location. This means sending anonymous location data to
                            Google, even when no apps are running.
          </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            CLOSE
          </Button>
                    </DialogActions>
                </Dialog>
            </Grid>
            <Grid item xs={11} sm={11} md={5} lg={5}>
                <Card elevation={10} style={{backgroundColor:'lightgrey'}}>
                    <CardContent>
                        <Typography style={{fontFamily:'Source Code Pro', color:'black', fontSize:12}}>
                            WEB DEV + API DEV
                        </Typography>
                        <Typography style={{fontFamily:'Source Code Pro', color:'black', fontWeight:'bold'}} variant="h5" component="h2">
                            Social EGG Web App
                            </Typography>
                        <Typography style={{color:'black', fontSize:14,marginTop:5, fontFamily:'Source Code Pro'}}>
                        Get periodic/real-time notifications comprising all the news articles mentioning the topics you care about.                        </Typography>
            <Button onClick={()=> window.open("https://socialegg.in", "_blank")} style={{ backgroundColor: 'black', marginRight: 20, marginTop:10,fontFamily:'Source Code Pro', color:'white' }}>Go to App</Button>
            <Button onClick={handleClose} style={{ backgroundColor: 'black', marginRight: 20, marginTop:10,fontFamily:'Source Code Pro', color:'white' }}>Learn more</Button>
                    </CardContent>
                </Card>
                <Dialog
                    open={open}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle id="alert-dialog-slide-title">{"Use Google's location service?"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-slide-description">
                            Let Google help apps determine location. This means sending anonymous location data to
                            Google, even when no apps are running.
          </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            CLOSE
          </Button>
                    </DialogActions>
                </Dialog>
            </Grid>
        </Grid>
    );
}
