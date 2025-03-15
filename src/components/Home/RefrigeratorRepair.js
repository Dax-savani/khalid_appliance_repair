import React from "react";
import { Container, Grid, Box, Typography, Button, Card, CardMedia, CardContent } from "@mui/material";
import Electrician1 from '../../assets/images/home/Electrician1.png';
import Electrician2 from '../../assets/images/home/Electrician2.png';
import Electrician3 from '../../assets/images/home/Electrician3.png';
import Electrician4 from '../../assets/images/home/Electrician4.png';
import Electrician5 from '../../assets/images/home/Electrician5.png';
import Electrician6 from '../../assets/images/home/Electrician6.png';

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
                            With years of experience and a team of skilled technicians, we are committed to restoring your refrigerator to perfect working condition.
                        </Typography>
                        <Typography variant="body1" color="textSecondary" sx={{ fontSize: "1rem", lineHeight: 1.6, mt: 2, mr: 12 }}>
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
                                fontSize: "1rem",
                                boxShadow: 'none',
                                '&:hover': { backgroundColor: "black", color: "#FECD1A" },
                                mt: 2
                            }}
                        >
                            READ MORE
                        </Button>
                    </Box>
                </Grid>
            </Grid>

            {/* Manually Defined Cards Without Using .map() */}
            <Grid container spacing={3} sx={{ marginTop: "40px" }}>
                {/* Card 1 */}
                <Grid item xs={12} sm={6} md={4}>
                    <Card sx={{ position: "relative", borderRadius: "0px", overflow: "hidden" }}>
                        <CardMedia component="img" height="225" image={Electrician1.src} alt="BEST QUALITY OF FRIGE" />
                        <CardContent sx={{
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
                        }}>
                            <Typography variant="h6" fontWeight="bold">BEST QUALITY OF FRIGE</Typography>
                            <Typography variant="body2">Electrician</Typography>
                        </CardContent>
                    </Card>

                    <Card sx={{ position: "relative", borderRadius: "0px", overflow: "hidden", mt: 3 }}>
                        <CardMedia component="img" height="225" image={Electrician4.src} alt="REGRIGERATOR REPAIR" />
                        <CardContent sx={{
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
                        }}>
                            <Typography variant="h6" fontWeight="bold">REGRIGERATOR REPAIR</Typography>
                            <Typography variant="body2">Electrician</Typography>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Card 2 */}
                <Grid item xs={12} sm={6} md={4}>
                    <Card sx={{ position: "relative", borderRadius: "0px", overflow: "hidden" }}>
                        <CardMedia component="img" height="318" image={Electrician2.src} alt="INSTALL FRIGE IN OFFICE" />
                        <CardContent sx={{
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
                        }}>
                            <Typography variant="h6" fontWeight="bold">INSTALL FRIGE IN OFFICE</Typography>
                            <Typography variant="body2">Electrician</Typography>
                        </CardContent>
                    </Card>

                    <Card sx={{ position: "relative", borderRadius: "0px", overflow: "hidden", mt: 3 }}>
                        <CardMedia component="img" height="133" image={Electrician5.src} alt="REGRIGERATOR REPAIR" />
                        <CardContent sx={{
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
                        }}>
                            <Typography variant="h6" fontWeight="bold">REPAIR & INSTALL</Typography>
                            <Typography variant="body2">Electrician</Typography>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Card 3 */}
                <Grid item xs={12} sm={12} md={4}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6} md={12}>
                            <Card sx={{ position: "relative", borderRadius: "0px", overflow: "hidden" }}>
                                <CardMedia component="img" height="225" image={Electrician3.src} alt="INDORE REPAIR" />
                                <CardContent sx={{
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
                                }}>
                                    <Typography variant="h6" fontWeight="bold">INDORE REPAIR</Typography>
                                    <Typography variant="body2">Electrician</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={12}>
                            <Card sx={{ position: "relative", borderRadius: "0px", overflow: "hidden"}}>
                                <CardMedia component="img" height="225" image={Electrician6.src} alt="REGRIGERATOR REPAIR" />
                                <CardContent sx={{
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
                                }}>
                                    <Typography variant="h6" fontWeight="bold">REFRIGERATOR</Typography>
                                    <Typography variant="body2">Electrician</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};

export default RefrigeratorRepair;
