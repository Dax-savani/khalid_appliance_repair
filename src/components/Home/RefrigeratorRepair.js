import React from "react";
import { Container, Grid, Box, Typography, Button, Card, CardMedia, CardContent } from "@mui/material";
import Electrician1 from '../../assets/images/home/Electrician1.png'
import Electrician2 from '../../assets/images/home/Electrician2.png'
import Electrician3 from '../../assets/images/home/Electrician3.png'
import Electrician4 from '../../assets/images/home/Electrician4.png'
import Electrician5 from '../../assets/images/home/Electrician5.png'
import Electrician6 from '../../assets/images/home/Electrician6.png'

const services = [
    { title: "BEST QUALITY OF FRIGE", image: Electrician1 },
    { title: "INSTALL FRIGE IN OFFICE", image: Electrician2 },
    { title: "INDORE REPAIR", image: Electrician3 },
    { title: "REGRIGERATOR REPAIR", image: Electrician4 },
    { title: "REPAIR & INSTALL", image: Electrician5 },
    { title: "REFRIGERATOR", image: Electrician6 },
];

const RefrigeratorRepair = () => {
    return (
        <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
            <Grid container spacing={4} alignItems="center">
                <Grid item xs={12} md={6}>
                    <Typography variant="h3" fontWeight="bold" sx={{ fontFamily: "Arial, sans-serif" }} gutterBottom>
                        FAST, RELIABLE, AND AFFORDABLE REFRIGERATOR REPAIR
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                        <Box sx={{ width: "80px", height: "5px", backgroundColor: "#FECD1A", mr: 0 }} />
                        <Box sx={{ width: "140px", height: "1px", backgroundColor: "gray" }} />
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box>
                        <Typography variant="body1" color="textSecondary" sx={{ fontSize: "1rem", lineHeight: 1.6 }} >
                            At [Your Company Name], we take pride in being your trusted partner for reliable and affordable fridge repair services.
                            With years of experience and a team of skilled technicians. we are committed to restoring your refrigerator to perfect working condition.
                        </Typography>
                        <Typography variant="body1" color="textSecondary" sx={{ fontSize: "1rem", lineHeight: 1.6, mt: 2, mr:12 }} >
                            We are committed to restoring your refrigerator to perfect working condition.
                        </Typography>
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: "#FECD1A",
                                color: "black",
                                fontWeight: "bold",
                                px: 4,
                                py: 1,
                                fontSize: "1rem", boxShadow: 'none',
                                '&:hover': { backgroundColor: "black", color: "#FECD1A" },
                                mt: 2
                            }}
                        >
                            READ MORE
                        </Button>
                    </Box>
                </Grid>
            </Grid>

            <Grid container spacing={3} sx={{ marginTop: "40px" }}>
                {services.map((service, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card sx={{ position: "relative", borderRadius: "0px", overflow: "hidden" }}>
                            <CardMedia component="img" height="250" image={service.image.src} alt={service.title} />
                            <CardContent
                                sx={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    width: "100%",
                                    height: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    backgroundColor: "rgba(0,0,0,0.3)",
                                    color: "white",
                                    transition: "all 0.3s ease",
                                    textAlign: "center",
                                    '&:hover': { color: "#FECD1A", backgroundColor: "rgba(0,0,0,0.6)" }
                                }}
                            >
                                <Typography variant="h6" fontWeight="bold" sx={{ fontSize: "1.3rem" }}>
                                    {service.title}
                                </Typography>
                                <Typography variant="body2" sx={{ fontSize: "1rem" }}>Electrician</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default RefrigeratorRepair;