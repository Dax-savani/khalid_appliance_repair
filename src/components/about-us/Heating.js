import React from 'react';
import {Box, Container, Grid, Typography} from "@mui/material";

function Heating() {
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
                            At Khalid Appliance Repair, our mission is to provide reliable, efficient, and affordable appliance repair services that keep homes running smoothly. We are committed to delivering high-quality solutions with professionalism and care, ensuring customer satisfaction at every step.
                        </Typography>
                        <Typography variant="body1" color="#374C75" sx={{mt: 1}}>
                            With a focus on precision and excellence, we strive to restore functionality to your appliances quickly and effectively. Our expert technicians use advanced tools and techniques to diagnose and fix issues, offering lasting results you can trust.
                        </Typography>
                    </Grid>

                    {/* OUR VISION */}
                    <Grid item xs={12} md={6}>
                        <Typography variant="h6" fontWeight="bold" color="#001D46" gutterBottom>
                            OUR VISION
                        </Typography>
                        <Typography variant="body1" color="#374C75">
                            Our vision is to be the most trusted and preferred home appliance repair service provider, known for our expertise, integrity, and commitment to excellence. We aim to set industry standards through innovation, reliability, and customer-first service.
                        </Typography>
                        <Typography variant="body1" color="#374C75" sx={{mt: 1}}>
                            By continuously improving our skills and expanding our services, we aspire to enhance the lives of our customers by ensuring their appliances operate at peak performance. Our goal is to make every home a place of convenience and comfort.
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}

export default Heating;