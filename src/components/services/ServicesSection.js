import React from "react";
import { Container, Grid, Box, Typography } from "@mui/material";
import KeyOffIcon from '@mui/icons-material/KeyOff';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import HomeIcon from '@mui/icons-material/Home';
import DescriptionIcon from '@mui/icons-material/Description';
import SettingsInputSvideoIcon from '@mui/icons-material/SettingsInputSvideo';
import SettingsIcon from '@mui/icons-material/Settings';

const services = [
    { title: "HVAC MAITENANCE AND REPAIRS", icon: <KeyOffIcon sx={{ fontSize: 50 }} /> },
    { title: "INSTALLATION & PROJECT MANAGEMENT", icon: <MiscellaneousServicesIcon sx={{ fontSize: 50 }} /> },
    { title: "INDOOR AIRS QUALITY TESTING", icon: <HomeIcon sx={{ fontSize: 50 }} /> },
    { title: "HVAC ELIGANT DESIGNS & FACILITIES", icon: <DescriptionIcon sx={{ fontSize: 50 }} /> },
    { title: "POWERFULL ENERGY & EFFICIUIENCY", icon: <SettingsInputSvideoIcon sx={{ fontSize: 50 }} /> },
    { title: "HVAC CLEANING & OPTIMAZATION", icon: <SettingsIcon sx={{ fontSize: 50 }} /> },
];

const ServicesSection = () => {
    return (
        <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
            <Grid container spacing={3} justifyContent="center">
                {services.map((service, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Box
                            sx={{
                                p: 3,
                                border: "2px solid #DADADA",
                                bgcolor: "#F7F7F8",
                                transition: "all 0.3s ease",
                                textAlign: "left",
                                display: "flex",
                                flexDirection: "column",
                                height: "350px",
                                justifyContent: "space-between",
                                "&:hover": {
                                    borderColor: "#FFC107",
                                },
                                "&:hover .icon": {
                                    color: "#FFC107",
                                },
                                "&:hover .heading": {
                                    color: "#FFC107",
                                },
                                "&:hover .learn-more": {
                                    color: "#FFC107",
                                },
                            }}
                        >
                            {/* Icon with Rounded Background */}
                            <Box
                                sx={{
                                    width: 90,
                                    height: 90,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    mb: 1.5,
                                    borderRadius: "50%",
                                    backgroundColor: "#fff",
                                    alignSelf: "start",
                                    transition: "all 0.3s ease",
                                }}
                            >
                                <Box className="icon" sx={{ color: "#002C5F", transition: "color 0.3s ease" }}>
                                    {service.icon}
                                </Box>
                            </Box>

                            {/* Title */}
                            <Typography
                                variant="h6"
                                className="heading"
                                sx={{
                                    fontWeight: "bold",
                                    color: "#002C5F",
                                    textTransform: "uppercase",
                                    fontSize: "1.4rem", // Same font size as before
                                    transition: "color 0.3s ease",
                                }}
                            >
                                {service.title}
                            </Typography>

                            {/* Description */}
                            <Typography variant="body2" sx={{ color: "text.secondary", mt: 1 }}>
                                Sed do eiusmod tempor incididunt ut labore aliqua. Pellentesque accumsan bibendum bibendum diam et elit.
                            </Typography>

                            {/* Learn More */}
                            <Typography
                                variant="body2"
                                className="heading"
                                sx={{
                                    mt: 2,
                                    fontWeight: "bold",
                                    color: "#002C5F",
                                    cursor: "pointer"
                                }}
                            >
                                LEARN MORE →
                            </Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default ServicesSection;
