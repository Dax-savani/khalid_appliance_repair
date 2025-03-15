import React from "react";
import { Container, Grid, Box, Typography, Button, Card, CardMedia, CardContent } from "@mui/material";
import WASHING1 from '../../assets/images/home/w1.png';
import WASHING2 from '../../assets/images/home/w2.png';
import WASHING3 from '../../assets/images/home/w3.png';

const featuredWorks = [
    { title: "WASHING MACHINE REPAIR", image: WASHING1 },
    { title: "WASHING MACHINE REPAIR", image: WASHING2 },
    { title: "WASHER TECH REPAIR", image: WASHING3 },
];

const FeaturedWorks = () => {
    return (
        <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 }, textAlign: "center" }}>
            {/* Title Section */}
            <Typography variant="h4" fontWeight="bold" sx={{ color: "#0D1B2A" }}>
                OUR FEATURED WORKS
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: 'center', mt: 1, mb: 4 }}>
                <Box sx={{ width: "70px", height: "1px", backgroundColor: "gray" }} />
                <Box sx={{ width: "60px", height: "5px", backgroundColor: "#FECD1A" }} />
                <Box sx={{ width: "70px", height: "1px", backgroundColor: "gray" }} />
            </Box>

            {/* Featured Works Grid */}
            <Grid container spacing={3} justifyContent="center">
                {featuredWorks.map((work, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card sx={{ position: "relative", borderRadius: "0px", overflow: "hidden", boxShadow: 0 }}>
                            {/* Image */}
                            <CardMedia component="img" height="250" image={work.image.src} alt={work.title} />

                            {/* Text Box (Absolute Positioning) */}
                            <CardContent
                                sx={{
                                    position: "absolute",
                                    bottom: 0,
                                    left: 0,
                                    width: "100%",
                                    backgroundColor: "white",
                                    color: "#001D46",
                                    padding: "12px 16px",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "flex-start",
                                    boxShadow: "0px -5px 10px rgba(0, 0, 0, 0.1)"
                                }}
                            >
                                <Typography variant="h6" fontWeight="bold">{work.title}</Typography>
                                <Typography variant="body2" sx={{ color: "#174C97", display: "flex", alignItems: "center", fontWeight: "bold" }}>
                                    CASE STUDY →
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {/* View All Button */}
            <Box sx={{ mt: 4 }}>
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: "#FFC107",
                        color: "black",
                        fontWeight: "bold",
                        px: 4,
                        py: 1.2,
                        fontSize: "1rem",
                        boxShadow: "none",
                        '&:hover': { backgroundColor: "black", color: "#FFC107" },
                    }}
                >
                    VIEW ALL CASE STUDIES
                </Button>
            </Box>
        </Container>
    );
};

export default FeaturedWorks;
