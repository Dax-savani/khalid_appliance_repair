import React from "react";
import {Container, Typography, Box, List, ListItem, ListItemIcon, ListItemText, Divider, Grid} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import img1 from '../../assets/images/projects/washer-repair-3 1.png';
import img2 from '../../assets/images/projects/washing-machine-repair-near-me 1.png';
import img3 from '../../assets/images/projects/Washing-machine-Repair-2 1.png';

const ProjectDetails = () => {
    return (
        <Container maxWidth="lg" sx={{py: {xs: 4, md: 6}, px: {xs: 2, md: 4}}}>
            {/* Problem Section */}
            <Box sx={{textAlign: "left"}}>
                <Typography
                    variant="h5"
                    sx={{fontWeight: "bold", color: "#1E2A5A", fontSize: {xs: "1.4rem", md: "1.8rem"}}}
                >
                    THE PROBLEM
                </Typography>
                <Typography variant="body1" sx={{mt: 1, color: "#4A4A4A", fontSize: {xs: "0.9rem", md: "1rem"}}}>
                    Nostrud exercitation ullamco sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis laboris nisi ut aliquip ex ea commodo consequat.
                </Typography>
                <Typography variant="body1" sx={{mt: 2, color: "#4A4A4A", fontSize: {xs: "0.9rem", md: "1rem"}}}>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident.
                </Typography>
            </Box>

            {/* Divider */}
            <Divider sx={{my: {xs: 3, md: 4}, borderColor: "rgba(0,0,0,0.1)"}}/>

            {/* Solution Section */}
            <Box sx={{textAlign: "left"}}>
                <Typography
                    variant="h5"
                    sx={{fontWeight: "bold", color: "#1E2A5A", fontSize: {xs: "1.4rem", md: "1.8rem"}}}
                >
                    THE SOLUTION
                </Typography>
                <Typography variant="body1" sx={{mt: 1, color: "#4A4A4A", fontSize: {xs: "0.9rem", md: "1rem"}}}>
                    Tempor incididunt ut labore sit amet, consectetur adipiscing elit, sed do eiusmod et dolore magna
                    aliqua. Ut enim ad minim veniam.
                </Typography>
                <Typography variant="body1" sx={{mt: 2, color: "#4A4A4A", fontSize: {xs: "0.9rem", md: "1rem"}}}>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident.
                </Typography>

                {/* Solution List */}
                <List sx={{mt: 2}}>
                    {["Where Ever Home is – is where we will be able to provide Service",
                        "Ut nulla tellus, eleifend euismod pellentesque vel, sagittis vel justo",
                        "Special arrangements with renowned vehicle dealers.",
                        "Fastest Turn Around Time in the industry"].map((item, index) => (
                        <ListItem key={index} sx={{alignItems: "center", pl: 0}}>
                            <ListItemIcon sx={{minWidth: "30px"}}>
                                <CheckCircleIcon sx={{color: "#FFC107", fontSize: 22}}/>
                            </ListItemIcon>
                            <ListItemText
                                primary={item}
                                sx={{color: "#4A4A4A", fontSize: {xs: "0.9rem", md: "1rem"}}}
                            />
                        </ListItem>
                    ))}
                </List>
            </Box>

            {/* Images Section */}
            <Box sx={{  mt: { xs: 4, md: 6 } }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <img src={img1.src} alt="Repair" style={{width: "100%"}}/>
                    </Grid>
                    <Grid item xs={6}>
                        <img src={img2.src} alt="Repairman" style={{width: "100%"}}/>
                    </Grid>
                    <Grid item xs={6}>
                        <img src={img3.src} alt="Washing Machine" style={{width: "100%"}}/>
                    </Grid>
                </Grid>
            </Box>

            {/* Result Section */}
            <Box sx={{ textAlign: "left", mt: { xs: 4, md: 6 } }}>
                <Typography
                    variant="h5"
                    sx={{ fontWeight: "bold", color: "#1E2A5A", fontSize: { xs: "1.4rem", md: "1.8rem" } }}
                >
                    THE RESULT
                </Typography>
                <Typography variant="body1" sx={{ mt: 1, color: "#4A4A4A", fontSize: { xs: "0.9rem", md: "1rem" } }}>
                    Magna aliqua dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Typography>
                <Typography variant="body1" sx={{ mt: 2, color: "#4A4A4A", fontSize: { xs: "0.9rem", md: "1rem" } }}>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                    nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                </Typography>

                {/* Result List */}
                <List sx={{ mt: 2 }}>
                    {[
                        "Wherever home is – is where we will be able to provide service",
                        "Ut nulla tellus, eleifend euismod pellentesque vel, sagittis vel justo",
                        "Special arrangements with renowned vehicle dealers."
                    ].map((item, index) => (
                        <ListItem key={index} sx={{ alignItems: "center", pl: 0 }}>
                            <ListItemIcon sx={{ minWidth: "30px" }}>
                                <CheckCircleIcon sx={{ color: "#FFC107", fontSize: 22 }} />
                            </ListItemIcon>
                            <ListItemText
                                primary={item}
                                sx={{ color: "#4A4A4A", fontSize: { xs: "0.9rem", md: "1rem" } }}
                            />
                        </ListItem>
                    ))}
                </List>
            </Box>


        </Container>
    );
};

export default ProjectDetails;
