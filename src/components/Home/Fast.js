import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'

const Fast = () => {
    return (
        <Container maxWidth="lg" sx={{ pt: { xs: 4, md: 6 }, mt: 4 }}>
            <Grid container spacing={4} alignItems="center">
                <Grid item xs={12} md={6}>
                    <Typography variant="h3" fontWeight="bold" sx={{ fontFamily: "Arial, sans-serif", color: '#001D46', fontSize: '48px' }} gutterBottom>
                        FAST, RELIABLE, AND AFFORDABLE REFRIGERATOR REPAIR
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                        <Box sx={{ width: "80px", height: "5px", backgroundColor: "#FECD1A", mr: 0 }} />
                        <Box sx={{ width: "140px", height: "1px", backgroundColor: "gray" }} />
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box>
                        <Typography variant="body1" color="textSecondary" sx={{ fontSize: "16px", color: '#374C75', lineHeight: 1.6 }} >
                            At [Your Company Name], we take pride in being your trusted partner for reliable and affordable fridge repair services.
                            With years of experience and a team of skilled technicians, we are committed to restoring your refrigerator to perfect working condition.
                        </Typography>
                        <Typography variant="body1" color="textSecondary" sx={{ fontSize: "16px", color: '#374C75', lineHeight: 1.6, mt: 2, mr: 12 }}>
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
                                fontSize: "14px",
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
        </Container>
    )
}

export default Fast
