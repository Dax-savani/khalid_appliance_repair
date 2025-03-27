import React from 'react';
import {Box, Container, Grid, Typography} from "@mui/material";

function Heating(props) {
    return (
        <>
            <Container maxWidth="lg" color={"#374C75"}>
                <Grid container spacing={4} py={6}>
                    <Grid item xs={12} md={7} my={4}>
                        <Typography variant="h3" color={"#001D46"} fontWeight="bold" className={"heading"} gutterBottom>
                            RELIABLE & AFFORDABLE HOME APPLIANCE REPAIRS
                        </Typography>
                        <Box sx={{display: "flex", alignItems: "center"}}>
                            <Box sx={{width: "80px", height: "5px", backgroundColor: "#FECD1A", mr: 0}}/>
                            <Box sx={{width: "140px", height: "1px", backgroundColor: "#B1B1B1"}}/>
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Box>
                            <Typography variant="body1" color="#374C75" sx={{mb: 2}}>
                                At Khalid appliance repair, we take pride in providing top-quality home appliance repair services. With years of experience, our skilled technicians ensure that your appliances run smoothly and efficiently. From refrigerators and washing machines to microwaves and air conditioners, we handle it all with precision and care. Our commitment to reliability, affordability, and customer satisfaction makes us the go-to choice for all your appliance repair needs.
                            </Typography>
                            <Typography variant="body1" color="#374C75">
                                Whether it's a minor fix or a major repair, we strive to deliver prompt and professional service. Our experts use advanced tools and techniques to diagnose and resolve issues, ensuring long-lasting results. We understand the importance of your appliances in daily life, which is why we aim for quick turnarounds without compromising on quality. Trust us to keep your home running effortlessly with our expert repair solutions.
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