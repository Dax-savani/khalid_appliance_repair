import React from "react";
import { Container, Grid, Box, Typography } from "@mui/material";
import BoltIcon from "@mui/icons-material/Bolt";
import DescriptionIcon from "@mui/icons-material/Description";
import SettingsIcon from "@mui/icons-material/Settings";
import BuildIcon from "@mui/icons-material/Build";

const services = [
    { title: "INSTALLATION", icon: <BoltIcon sx={{ fontSize: 50 }} /> },
    { title: "FACILITIES", icon: <DescriptionIcon sx={{ fontSize: 50 }} /> },
    { title: "ENERGY", icon: <SettingsIcon sx={{ fontSize: 50 }} /> },
    { title: "REPAIR", icon: <BuildIcon sx={{ fontSize: 50 }} /> },
];

const ServiceCards = () => {
    return (
        <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
            <Grid container spacing={3} justifyContent="center">
                {services.map((service, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                        <Box
                            sx={{
                                p: 3,
                                border: "2px solid rgba(0, 44, 95, 0.2)",
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
                                    backgroundColor: "rgba(0, 44, 95, 0.05)",
                                    alignSelf: "center",
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
                                Cras sed augue a dolor scelerisque eleifend non sed elit....
                            </Typography>

                            {/* Learn More */}
                            <Typography
                                variant="body2"
                                sx={{
                                    mt: 2,
                                    fontWeight: "bold",
                                    color: "#002C5F",
                                    cursor: "pointer",
                                    "&:hover": {
                                        textDecoration: "underline",
                                    },
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

export default ServiceCards;
