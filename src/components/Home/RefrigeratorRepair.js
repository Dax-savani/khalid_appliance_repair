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
        <Container maxWidth="lg" sx={{ pb: { xs: 4, md: 6 },  }}>
            {/* Manually Defined Cards Without Using .map() */}
            <Grid container spacing={3} sx={{ marginTop: { xs: 4, md: 6 } }}>
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
                            <Typography variant="h6" fontWeight="bold" sx={{fontSize:'24px',fontWeight:800}} >BEST QUALITY OF FRIGE</Typography>
                            <Typography variant="body2" sx={{fontSize:'20px',fontWeight:500}}>Electrician</Typography>
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
                            <Typography variant="h6" fontWeight="bold" sx={{fontSize:'24px',fontWeight:800}}>REGRIGERATOR REPAIR</Typography>
                            <Typography variant="body2" sx={{fontSize:'20px',fontWeight:500}} >Electrician</Typography>
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
                            <Typography variant="h6" fontWeight="bold" sx={{fontSize:'24px',fontWeight:800}} >INSTALL FRIGE IN OFFICE</Typography>
                            <Typography variant="body2" sx={{fontSize:'20px',fontWeight:500}}>Electrician</Typography>
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
                            <Typography variant="h6" fontWeight="bold" sx={{fontSize:'24px',fontWeight:800}} >REPAIR & INSTALL</Typography>
                            <Typography variant="body2" sx={{fontSize:'20px',fontWeight:500}}>Electrician</Typography>
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
                                    <Typography variant="h6" fontWeight="bold" sx={{fontSize:'24px',fontWeight:800}} >INDORE REPAIR</Typography>
                                    <Typography variant="body2" sx={{fontSize:'20px',fontWeight:500}}>Electrician</Typography>
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
                                    <Typography variant="h6" fontWeight="bold" sx={{fontSize:'24px',fontWeight:800}} >REFRIGERATOR</Typography>
                                    <Typography variant="body2" sx={{fontSize:'20px',fontWeight:500}}>Electrician</Typography>
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
