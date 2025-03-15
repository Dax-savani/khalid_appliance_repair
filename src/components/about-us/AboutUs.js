"use client"
import { Avatar, Box, Card, CardContent, Container, Grid, Typography, useTheme } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../../../node_modules/swiper/swiper-bundle.min.css";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const testimonials = [
    {
        name: "JHON DOE",
        position: "CEO at FD Store",
        image: "https://via.placeholder.com/50", // Replace with actual image URL
        feedback:
            "Highly satisfied customer testimonials are ads or artwork that display positive statements made about your company from a brand evangelist or a that. The quote is usually accompanied by an image of the person being quoted to make the message feel more relatable to the target audience.",
    },
    {
        name: "JONATHAN SMITH",
        position: "Managing Director at Intercom",
        image: "https://via.placeholder.com/50", // Replace with actual image URL
        feedback:
            "Highly satisfied customer testimonials are ads or artwork that display positive statements made about your company from a brand evangelist or a that. The quote is usually accompanied by an image of the person being quoted to make the message feel more relatable to the target audience.",
    }, {
        name: "JONATHAN SMITH",
        position: "Managing Director at Intercom",
        image: "https://via.placeholder.com/50", // Replace with actual image URL
        feedback:
            "Highly satisfied customer testimonials are ads or artwork that display positive statements made about your company from a brand evangelist or a that. The quote is usually accompanied by an image of the person being quoted to make the message feel more relatable to the target audience.",
    },{
        name: "JONATHAN SMITH",
        position: "Managing Director at Intercom",
        image: "https://via.placeholder.com/50", // Replace with actual image URL
        feedback:
            "Highly satisfied customer testimonials are ads or artwork that display positive statements made about your company from a brand evangelist or a that. The quote is usually accompanied by an image of the person being quoted to make the message feel more relatable to the target audience.",
    },{
        name: "JONATHAN SMITH",
        position: "Managing Director at Intercom",
        image: "https://via.placeholder.com/50", // Replace with actual image URL
        feedback:
            "Highly satisfied customer testimonials are ads or artwork that display positive statements made about your company from a brand evangelist or a that. The quote is usually accompanied by an image of the person being quoted to make the message feel more relatable to the target audience.",
    },{
        name: "JONATHAN SMITH",
        position: "Managing Director at Intercom",
        image: "https://via.placeholder.com/50", // Replace with actual image URL
        feedback:
            "Highly satisfied customer testimonials are ads or artwork that display positive statements made about your company from a brand evangelist or a that. The quote is usually accompanied by an image of the person being quoted to make the message feel more relatable to the target audience.",
    },
];

const AboutUs = () => {

    return (
        <Container maxWidth="lg">
            <Box py={3}>
                <Grid container spacing={3} mb={5}>
                    <Grid item xs={12} md={7} my={4}>
                        <Typography
                            variant="h3"
                            color={'#1E2452'}
                            fontWeight="bold"
                            gutterBottom
                        >
                            WHAT OUR CUSTOMER SAY ABOUT US?
                        </Typography>
                        <Box sx={{display: "flex", alignItems: "center"}}>
                            <Box sx={{width: "80px", height: "5px", backgroundColor: "#FECD1A", mr: 0}}/>
                            <Box sx={{width: "140px", height: "1px", backgroundColor: "#B1B1B1"}}/>
                        </Box>
                    </Grid>

                    <Grid item xs={12}>
                        <Box sx={{py: 4,position:'relative'}} className="category2">
                            <Swiper
                                style={{marginBottom:10}}
                                className="mySwiper"
                                navigation={{
                                    nextEl: `.category2-next`,
                                    prevEl: `.category2-prev`,
                                }}
                                modules={[Navigation]}
                                spaceBetween={20}
                                slidesPerView={2}
                                breakpoints={{
                                    0: {slidesPerView: 1},
                                    720: {slidesPerView: 2},
                                    1024: {slidesPerView: 3},
                                }}
                            >
                                {testimonials.map((testimonial, index) => (
                                    <SwiperSlide key={index}>
                                        <Grid container spacing={2} alignItems="center" mb={2}>
                                            <Grid item>
                                                <Avatar src={testimonial.image} alt={testimonial.name}
                                                        sx={{width: 50, height: 50}}/>
                                            </Grid>
                                            <Grid item>
                                                <Typography variant="subtitle1" fontWeight="bold" color="#001D46">
                                                    {testimonial.name}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    {testimonial.position}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                        <Card sx={{
                                            border: "2px solid #FFD700",
                                            borderRadius: 2,
                                            position: "relative",
                                            overflow: "unset"
                                        }}>
                                            <Box
                                                sx={{
                                                    position: "absolute",
                                                    top: -7,
                                                    left: 20,
                                                    width: 12,
                                                    height: 12,
                                                    backgroundColor: "#FFD700",
                                                    zIndex: -1,
                                                    transform: "rotate(45deg)",
                                                }}
                                            />

                                            <CardContent>
                                                <Typography variant="body2" color="text.primary" mt={2}>
                                                    {testimonial.feedback}
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            <button
                                className="category2-prev"
                                style={{
                                    padding: "10px",
                                    border: "1px solid #7A7A7A",
                                    borderRadius:'50%'
                                }}
                            >
                                <KeyboardArrowLeftIcon sx={{fontSize: '20px', color: '#7A7A7A'}}/>
                            </button>
                            <button
                                className="category2-next"
                                style={{
                                    padding: "10px",
                                    border: "1px solid #7A7A7A",
                                    borderRadius:'50%'
                                }}
                            >
                                <ChevronRightIcon sx={{fontSize: '20px', color: '#7A7A7A'}}/>
                            </button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default AboutUs;
