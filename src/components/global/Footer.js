import React from "react";
import { Container, Grid, Box, Typography, Link, IconButton, Divider } from "@mui/material";
import { LinkedIn, Facebook, Twitter } from "@mui/icons-material";
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
    return (
        <Box sx={{ backgroundColor: "#101c44", color: "white", py: 5 }}>
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    {/* About Company Section */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" fontWeight="bold">ABOUT COMPANY</Typography>
                        <Typography variant="body2" sx={{ mt: 2 }}>
                            Pellentesque accumsan bibendum bibendum diam et, this is the consectetur adipiscing.
                        </Typography>
                        <Box sx={{ mt: 2, display: "flex", gap: 1 }}>
                            {[Facebook, LinkedIn, InstagramIcon, Twitter].map((Icon, index) => (
                                <IconButton
                                    key={index}
                                    sx={{
                                        backgroundColor: "#2E3B5E",
                                        color: "white",
                                        "&:hover": {
                                            backgroundColor: "#FECD1A",
                                            color: "#101c44",
                                        },
                                    }}
                                >
                                    <Icon />
                                </IconButton>
                            ))}
                        </Box>
                    </Grid>

                    {/* Office Section */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" fontWeight="bold">OFFICE -</Typography>
                        <Typography variant="body2" sx={{ mt: 2 }}>
                            Billing address: 20 Pembina Rd #240, Sherwood Park, AB T8H 0M2
                        </Typography>
                        <Typography variant="h6" fontWeight="bold" sx={{ mt: 2, mb: 1 }}>CALL US -</Typography>
                        <Typography variant="body2" sx={{ mb: 1 }}>Cell: 000-000-0000</Typography>
                        <Typography variant="body2" sx={{ mb: 1 }}>Office: 000-000-0000</Typography>
                    </Grid>

                    {/* Quick Links */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" fontWeight="bold">QUICK LINKS</Typography>
                        <Box sx={{ mt: 2 }}>
                            {["About Us", "Blog Classic", "Projects", "Services", "Contact Us", "Project Details"].map((text, i) => (
                                <Link key={i} href="#" color="inherit" underline="none" display="block" sx={{ mb: 1 }}>
                                    {text}
                                </Link>
                            ))}
                        </Box>
                    </Grid>

                    {/* Quick Services */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" fontWeight="bold">QUICK SERVICES</Typography>
                        <Box sx={{ mt: 2 }}>
                            {[
                                "HVAC Maintenance And Repair",
                                "Installation & Project Management",
                                "Indoor Air Quality Testing",
                                "HVAC Design & Facilities",
                                "Powerful Energy & Efficiency",
                                "HVAC Cleaning & Optimization",
                            ].map((service, i) => (
                                <Link key={i} href="#" color="inherit" underline="none" display="block" sx={{ mb: 1 }}>
                                    {service}
                                </Link>
                            ))}
                        </Box>
                    </Grid>
                </Grid>

                {/* Divider */}
                <Divider sx={{ backgroundColor: "gray", my: 3 }} />

                {/* Copyright & Policy Links */}
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexWrap: "wrap",
                        flexDirection: { xs: "column", sm: "row" },
                        textAlign: { xs: "center", sm: "left" },
                        pt: 2,
                        gap: 1,
                    }}
                >
                    <Typography variant="body2">
                        Copyright © 2023, AC Repair Refrigeration Inc. All rights reserved.
                    </Typography>

                    <Box sx={{ display: "flex", gap: 2 }}>
                        {["Privacy Policy", "Terms Of Use"].map((text, i) => (
                            <Link key={i} href="#" color="inherit" underline="none">
                                {text}
                            </Link>
                        ))}
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
