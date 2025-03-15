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
        <Container maxWidth="lg" sx={{ py: 6, textAlign: "center" }}>
            {/* Title Section */}
            <Typography variant="h4" fontWeight="bold" sx={{ color: "#0D1B2A", fontSize: "2.5rem", mb: 2 }}>
                OUR FEATURED WORKS
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mb: 4 }}>
                <Box sx={{ width: 70, height: 1, backgroundColor: "gray" }} />
                <Box sx={{ width: 60, height: 5, backgroundColor: "#FECD1A", mx: 1 }} />
                <Box sx={{ width: 70, height: 1, backgroundColor: "gray" }} />
            </Box>

            {/* Featured Works Grid */}
            <Grid container spacing={5} justifyContent="center">
                {featuredWorks.map((work, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card sx={{ position: "relative", borderRadius: 0, boxShadow: 0, overflow: "unset",my:3,textWrap: "nowrap" }}>
                            {/* Image */}
                            <CardMedia component="img" height="250" image={work.image.src} alt={work.title} />

                            {/* Text Box (Absolute Positioning) */}
                            <CardContent
                                sx={{
                                    position: "absolute",
                                    bottom: '-20%',
                                    left: 25,
                                    width: "100%",
                                    backgroundColor: "#F7F7F8",
                                    color: "#001D46",
                                     display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    alignItems: "flex-start",
                                }}
                            >
                                <Typography variant="h6" fontWeight="bold" sx={{ fontSize: "1.25rem" }}>
                                    {work.title}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        color: "#174C97",
                                        display: "flex",
                                        alignItems: "center",
                                        fontWeight: "bold",
                                        fontSize: "1rem",
                                    }}
                                >
                                    CASE STUDY →
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {/* View All Button */}
            <Box sx={{ mt: 10 }}>
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: "#FFC107",
                        color: "black",
                        fontWeight: "bold",
                        px: 4,
                        py: 1.2,
                        fontSize: "1.125rem",
                        boxShadow: "none",
                        "&:hover": { backgroundColor: "black", color: "#FFC107" },
                    }}
                >
                    VIEW ALL CASE STUDIES
                </Button>
            </Box>
        </Container>
    );
};

export default FeaturedWorks;
