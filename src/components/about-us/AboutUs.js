"use client";
import { useEffect, useState } from "react";
import { Avatar, Box, Card, CardContent, Container, Grid, Typography, Skeleton } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../../../node_modules/swiper/swiper-bundle.min.css";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const AboutUs = () => {
    const [testimonials, setTestimonials] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                const response = await fetch("https://f8mrd06dn9.execute-api.ap-south-1.amazonaws.com/api/testimonial");
                const data = await response.json();
                setTestimonials(data.data); // Extracting testimonials
            } catch (error) {
                console.error("Error fetching testimonials:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchTestimonials();
    }, []);

    return (
        <Container maxWidth="lg">
            <Box py={3}>
                <Grid container spacing={3} mb={5}>
                    <Grid item xs={12} md={7} my={4}>
                        <Typography variant="h3" color={'#1E2452'} fontSize={'48px'} fontWeight="bold" gutterBottom>
                            WHAT OUR CUSTOMER SAY ABOUT US?
                        </Typography>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <Box sx={{ width: "80px", height: "5px", backgroundColor: "#FECD1A", mr: 0 }} />
                            <Box sx={{ width: "140px", height: "1px", backgroundColor: "#B1B1B1" }} />
                        </Box>
                    </Grid>

                    <Grid item xs={12}>
                        <Box sx={{ py: 4, position: 'relative' }} className="category2">
                            <Swiper
                                style={{ marginBottom: 10 }}
                                className="mySwiper"
                                navigation={{ nextEl: `.category2-next`, prevEl: `.category2-prev` }}
                                modules={[Navigation]}
                                spaceBetween={20}
                                slidesPerView={2}
                                breakpoints={{
                                    0: { slidesPerView: 1 },
                                    720: { slidesPerView: 2 },
                                    1024: { slidesPerView: 3 },
                                }}
                            >
                                {loading
                                    ? Array.from({ length: 3 }).map((_, index) => (
                                        <SwiperSlide key={index}>
                                            <Grid container spacing={2} alignItems="center" mb={2}>
                                                <Grid item>
                                                    <Skeleton variant="circular" width={50} height={50} />
                                                </Grid>
                                                <Grid item>
                                                    <Skeleton variant="text" width={120} height={20} />
                                                    <Skeleton variant="text" width={150} height={16} />
                                                </Grid>
                                            </Grid>
                                            <Card sx={{ border: "2px solid #FFD700", borderRadius: 2, height: 150 }}>
                                                <CardContent>
                                                    <Skeleton variant="text" width="100%" height={60} />
                                                </CardContent>
                                            </Card>
                                        </SwiperSlide>
                                    ))
                                    : testimonials.map((testimonial, index) => (
                                        <SwiperSlide key={index}>
                                            <Grid container spacing={2} alignItems="center" mb={2}>
                                                <Grid item>
                                                    <Avatar src={testimonial.image} alt={testimonial.name} sx={{ width: 50, height: 50 }} />
                                                </Grid>
                                                <Grid item>
                                                    <Typography variant="subtitle1" fontWeight="bold" color="#001D46">
                                                        {testimonial.name}
                                                    </Typography>
                                                    <Typography variant="body2" color="text.secondary">
                                                        {testimonial.designation}
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                            <Card sx={{ border: "2px solid #FFD700", borderRadius: 2 }}>
                                                <CardContent>
                                                    <Typography variant="body2" color="text.primary" mt={2}>
                                                        {testimonial.message}
                                                    </Typography>
                                                </CardContent>
                                            </Card>
                                        </SwiperSlide>
                                    ))}

                            </Swiper>
                            <button className="category2-prev" style={{ padding: "10px", border: "1px solid #7A7A7A", borderRadius: '50%' }}>
                                <KeyboardArrowLeftIcon sx={{ fontSize: '20px', color: '#7A7A7A' }} />
                            </button>
                            <button className="category2-next" style={{ padding: "10px", border: "1px solid #7A7A7A", borderRadius: '50%' }}>
                                <ChevronRightIcon sx={{ fontSize: '20px', color: '#7A7A7A' }} />
                            </button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default AboutUs;
