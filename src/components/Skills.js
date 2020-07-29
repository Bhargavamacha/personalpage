import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
function Skills() {
    return (

        <div>
            <Grid container spacing={4}>
                <Grid item xs={6} sm={6} md={4} lg={3}>
                    <Box position="relative" display="inline-flex">
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <CircularProgress variant="static" value={100} size={130} style={{ color: '#6dc981' }} />
                            <CircularProgress variant="static" value={70} size={130} style={{ color: 'darkgreen', position: 'absolute' }} />
                        </div>
                        <Box
                            top={0}
                            left={0}
                            bottom={0}
                            right={0}
                            position="absolute"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                        >
                            <Typography style={{ fontFamily: 'Source Code Pro', textAlign: 'center', fontSize: 14 }} >AWS</Typography>

                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={6} sm={6} md={4} lg={3}>
                    <Box position="relative" display="inline-flex">
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <CircularProgress variant="static" value={100} size={130} style={{ color: '#6dc981' }} />
                            <CircularProgress variant="static" value={70} size={130} style={{ color: 'darkgreen', position: 'absolute' }} />
                        </div>
                        <Box
                            top={0}
                            left={0}
                            bottom={0}
                            right={0}
                            position="absolute"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                        >
                            <Typography style={{ fontFamily: 'Source Code Pro', textAlign: 'center', fontSize: 14 }} >GOOGLE<br />CLOUD</Typography>

                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={6} sm={6} md={4} lg={3}>
                    <Box position="relative" display="inline-flex">
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <CircularProgress variant="static" value={100} size={130} style={{ color: '#6dc981' }} />
                            <CircularProgress variant="static" value={36} size={130} style={{ color: 'darkgreen', position: 'absolute' }} />
                        </div>
                        <Box
                            top={0}
                            left={0}
                            bottom={0}
                            right={0}
                            position="absolute"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                        >
                            <Typography style={{ fontFamily: 'Source Code Pro', textAlign: 'center', fontSize: 14 }} >MICROSOFT<br />AZURE</Typography>

                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={6} sm={6} md={4} lg={3}>
                    <Box position="relative" display="inline-flex">
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <CircularProgress variant="static" value={100} size={130} style={{ color: '#6dc981' }} />
                            <CircularProgress variant="static" value={40} size={130} style={{ color: 'darkgreen', position: 'absolute' }} />
                        </div>
                        <Box
                            top={0}
                            left={0}
                            bottom={0}
                            right={0}
                            position="absolute"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                        >
                            <Typography style={{ fontFamily: 'Source Code Pro', textAlign: 'center', fontSize: 14 }} >NETWORKING</Typography>

                        </Box>
                    </Box>
                </Grid>
                {/* next */}
                <br />
                <Grid item xs={6} sm={6} md={4} lg={3}>
                    <Box position="relative" display="inline-flex">
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <CircularProgress variant="static" value={100} size={130} style={{ color: '#6dc981' }} />
                            <CircularProgress variant="static" value={60} size={130} style={{ color: 'darkgreen', position: 'absolute' }} />
                        </div>
                        <Box
                            top={0}
                            left={0}
                            bottom={0}
                            right={0}
                            position="absolute"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                        >
                            <Typography style={{ fontFamily: 'Source Code Pro', textAlign: 'center', fontSize: 15 }}>PYTHON</Typography>

                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={6} sm={6} md={4} lg={3}>
                    <Box position="relative" display="inline-flex">
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <CircularProgress variant="static" value={100} size={130} style={{ color: '#6dc981' }} />
                            <CircularProgress bo variant="static" value={40} size={130} style={{ color: 'darkgreen', position: 'absolute' }} />
                        </div>
                        <Box
                            top={0}
                            left={0}
                            bottom={0}
                            right={0}
                            position="absolute"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                        >
                            <Typography style={{ fontFamily: 'Source Code Pro', textAlign: 'center', fontSize: 15 }} >C/C++</Typography>

                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={6} sm={6} md={4} lg={3}>
                    <Box position="relative" display="inline-flex">
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <CircularProgress variant="static" value={100} size={130} style={{ color: '#6dc981' }} />
                            <CircularProgress variant="static" value={80} size={130} style={{ color: 'darkgreen', position: 'absolute' }} />
                        </div>
                        <Box
                            top={0}
                            left={0}
                            bottom={0}
                            right={0}
                            position="absolute"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                        >
                            <Typography style={{ fontFamily: 'Source Code Pro', textAlign: 'center', fontSize: 15 }} >APP DEV</Typography>

                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={6} sm={6} md={4} lg={3}>
                    <Box position="relative" display="inline-flex">
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <CircularProgress variant="static" value={100} size={130} style={{ color: '#6dc981' }} />
                            <CircularProgress variant="static" value={80} size={130} style={{ color: 'darkgreen', position: 'absolute' }} />
                        </div>
                        <Box
                            top={0}
                            left={0}
                            bottom={0}
                            right={0}
                            position="absolute"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                        >
                            <Typography style={{ fontFamily: 'Source Code Pro', textAlign: 'center', fontSize: 15 }} >WEB DEV</Typography>

                        </Box>
                    </Box>
                </Grid>
                {/* next */}
            </Grid>
            <br />
            <br />
        </div >
    );
}

export default Skills;
