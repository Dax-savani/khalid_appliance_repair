import React from 'react';
import {Box, Container, Grid, Typography} from "@mui/material";

function Heating(props) {
    return (
        <>
            <Container maxWidth="lg" color={"#374C75"}>
                <Grid container spacing={4} py={5}>
                    <Grid item xs={12} md={7} my={4}>
                        <Typography variant="h3" color={"#1E2452"} fontWeight="bold" className={"heading"} gutterBottom>
                            HEATING AND AIR CONDITIONING REPAIR AND INSTALLATION COMPANY
                        </Typography>
                        <Box sx={{display: "flex", alignItems: "center"}}>
                            <Box sx={{width: "80px", height: "5px", backgroundColor: "#FECD1A", mr: 0}}/>
                            <Box sx={{width: "140px", height: "1px", backgroundColor: "#B1B1B1"}}/>
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Box>
                            <Typography variant="body1" color="#374C75" sx={{mb: 2}}>
                                Ac vulputate morbi sit amet, consectetur adipiscing elit. Pellentesque
                                accumsan bibendum bibendum diam et. Ac vulputate morbi egestas porta
                                posuere curabitur. Pellentesque accumsan bibendum bibendum diam et. Ac
                                vulputate morbi egestas porta posuere curabitur.
                            </Typography>
                            <Typography variant="body1" color="#374C75">
                                When an unknown printer took a galley of type and scrambled it to make
                                a type specimen book. It has survived not only five centuries, but
                                also the leap into electronic typesetting, remaining essentially
                                unchanged.
                            </Typography>
                        </Box>
                    </Grid>

                    {/* Mission & Vision Section */}
                    {/* OUR MISSION */}
                    <Grid item xs={12} md={6}>
                        <Typography variant="h6" fontWeight="bold" color="#001D46" gutterBottom>
                            OUR MISSION
                        </Typography>
                        <Typography variant="body1" color="#374C75">
                            Bibendum bibendum diam sit amet, consectetur adipiscing elit. Pellentesque
                            accumsan bibendum bibendum diam et. Ac vulputate morbi egestas porta posuere
                            curabitur.
                        </Typography>
                        <Typography variant="body1" color="#374C75" sx={{mt: 1}}>
                            Pellentesque accumsan bibendum bibendum diam et. Ac vulputate morbi egestas
                            porta posuere curabitur.
                        </Typography>
                    </Grid>

                    {/* OUR VISION */}
                    <Grid item xs={12} md={6}>
                        <Typography variant="h6" fontWeight="bold" color="#001D46" gutterBottom>
                            OUR VISION
                        </Typography>
                        <Typography variant="body1" color="#374C75">
                            Ac vulputate morbi egestas amet, consectetur adipiscing elit.
                            Pellentesque accumsan bibendum bibendum diam et. Ac vulputate morbi
                            egestas porta posuere curabitur.
                        </Typography>
                        <Typography variant="body1" color="#374C75" sx={{mt: 1}}>
                            Pellentesque accumsan bibendum bibendum diam et. Ac vulputate morbi egestas
                            porta posuere curabitur.
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}

export default Heating;