import React from 'react';
import {Box, Container, Grid, Typography} from "@mui/material";
import Experienced from '../../assets/images/about-us/Experienced.png'
import Affordable from '../../assets/images/about-us/Affordable.png'
import Group from '../../assets/images/about-us/Group.png'
import whyChoose from '../../assets/images/about-us/whyChooseUs.png'

function WhyChooseUs(props) {
    const WhyChooseUs = [
        {
        image:Experienced.src,
        title:"EXPERIENCED TEAM",
        desc:"We own an extensive team of qualified professionals with a proven track record of rendering quality work."
    },
        {
        image:Affordable.src,
        title:"AFFORDABLE SERVICE PRICE",
        desc:"As we aim to ensure that the best quality \n" +
            "services are available for everyone, all our \n" +
            "works are priced at genuine, competent rates."
    },
        {
        image:Group.src,
        title:"EXPERIENCED TEAM",
        desc:"Through our 24 hours functionality and free \n" +
            "helpline, we ensure our presence whenever \n" +
            "our customers are in need"
    },
    ]
    return (
        <>
        <Box bgcolor={"#F7F7F8"}>
            <Container>
                <Box py={6} >
                    <Grid container>
                        <Grid item xs={12} md={7} my={4}>
                            <Typography variant="h3" color={"#1E2452"} fontWeight="bold" className={"heading"} gutterBottom>
                                WHY CHOOSE US ?
                            </Typography>
                            <Box sx={{display: "flex", alignItems: "center"}}>
                                <Box sx={{width: "80px", height: "5px", backgroundColor: "#FECD1A", mr: 0}}/>
                                <Box sx={{width: "140px", height: "1px", backgroundColor: "#B1B1B1"}}/>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={8} bgcolor={"white"} position={"relative"} p={{xs:1,md:5}} mt={3}>
                            {WhyChooseUs.map((item,ind) => (
                                <Box display={{sm:"flex"}} key={ind} alignItems={"center"} p={{xs:1.5 ,md:3}}>
                                    <Box mr={3}>
                                        <img src={item.image} alt={"Experienced"}/>
                                    </Box>
                                    <Box>
                                        <Typography variant={'h6'} fontWeight={"bold"} color={"#001D46"}>{item.title}</Typography>
                                        <Box color={'#374C75'} fontSize={12} width={{xs: "100%", md: "60%"}}>
                                            {item.desc}
                                        </Box>
                                    </Box>
                                </Box>
                            ))}
                            <Box height={"35vh"} width={"100%"} display={{xs:"none",md:"block"}} position={"absolute"} top={"50%"} left={"65%"} sx={{transform:'translateY(-50%)'}}>
                                <img src={whyChoose.src} style={{height:"100%"}} alt={"Why Choose Us"}/>
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            <Box height={"50vh"} width={"100%"} display={{xs:"block",md:"none"}} mt={3}>
                                <img src={whyChoose.src} style={{height:"100%",width:"100%",objectFit:"cover"}} alt={"Why" +
                                    " Choose Us"}/>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>

        </>
    );
}

export default WhyChooseUs;