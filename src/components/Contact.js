import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
export default function Contact() {
    return (
        <div>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <TextField id="filled-basic" label="Name" variant="filled" style={{width:window.innerWidth>600?window.innerWidth/5:300}} />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <TextField inputMode={"email"} id="filled-basic" label="E-Mail" variant="filled" style={{width:window.innerWidth>600?window.innerWidth/5:300}} />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <TextField rows={10} id="filled-basic" multiline label="Message" variant="filled" style={{width:window.innerWidth>600?window.innerWidth/2:300}} />
                </Grid>
            </Grid>
            <Button style={{ backgroundColor: 'black', marginTop: 20, fontFamily: 'Source Code Pro', color:'white' }}>SEND MESSAGE </Button>
        </div>
    );
}
