'use client';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Box, Button, Typography, CircularProgress } from '@mui/material';

const HeroSection = () => {
    const [slides, setSlides] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://f8mrd06dn9.execute-api.ap-south-1.amazonaws.com/api/slider')
            .then((response) => response.json())
            .then((data) => setSlides(data.data))
            .catch((error) => console.error('Error fetching slider data:', error))
            .finally(() => setLoading(false));
    }, []);

    return (
        <Box sx={{ position: 'relative', width: '100%', height: { xs: '75vh', sm: '70vh', md: '85vh' }, overflow: 'hidden' }}>
            {loading ? (
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                    <CircularProgress color='primary' />
                </Box>
            ) : (
                slides.length > 0 && (
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        navigation
                        autoplay={{ delay: 4000 }}
                        style={{ height: '100%' }}
                        loop
                        className='hero-swiper'
                    >
                        {slides.map((slide, index) => (
                            <SwiperSlide key={index}>
                                <Box
                                    sx={{
                                        position: 'relative',
                                        display: 'flex',
                                        alignItems: 'center',
                                        height: '100%',
                                        px: { xs: 2, sm: 4, md: 10, lg: 30 },
                                        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url('${slide.image}')`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        color: 'white',
                                    }}
                                >
                                    <Box sx={{ padding: 3, borderRadius: 2, width: { xs: '90%', md: '70%' } }}>
                                        <Typography variant='h3' fontWeight='bold' gutterBottom sx={{ fontSize: { xs: '30px', sm: '50px', md: '70px' } }}>
                                            {slide?.title}
                                        </Typography>
                                        <Typography variant='body1' mb={3} sx={{ fontSize: { xs: '14px', sm: '16px', md: '18px' } }}>
                                            {slide?.description}
                                        </Typography>
                                        <Button
                                            variant='contained'
                                            sx={{
                                                backgroundColor: '#ffcc00',
                                                color: '#000',
                                                fontWeight: 'bold',
                                                fontSize: { xs: '12px', sm: '14px', md: '16px' },
                                                display: 'block',
                                                '&:hover': {
                                                    backgroundColor: '#e6b800',
                                                },
                                            }}
                                        >
                                            Learn More
                                        </Button>
                                    </Box>
                                </Box>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )
            )}
        </Box>
    );
};

export default HeroSection;