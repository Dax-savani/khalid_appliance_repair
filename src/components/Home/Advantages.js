import React from "react";
import { Container, Box, Typography, Grid, Divider } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import img from "../../assets/images/home/1.png";

const advantages = [
    "Warranties & Guarantees",
    "Online Schedule",
    "Exceed Expectation",
    "Financing Available",
];

const Advantages = () => {
    return (
        <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
            <Grid container spacing={4} alignItems="center">
                {/* Image Section */}
                <Grid item xs={12} md={6}>
                    <Box
                        component="img"
                        src={img.src}
                        alt="Refrigerator Repair"
                        sx={{
                            width: "100%",
                            borderRadius: 2,
                            boxShadow: 3,
                        }}
                    />
                </Grid>

                {/* Text Section */}
                <Grid item xs={12} md={6}>
                    {/* Title with Yellow Underline */}
                    <Box sx={{ display: "inline-block", mb: 1 }}>
                        <Typography
                            variant="subtitle1"
                            sx={{
                                fontWeight: "bold",
                                fontSize: { xs: "16px", md: "18px" },
                                textTransform: "uppercase",
                                color: "primary.main",
                            }}
                        >
                            WELCOME TO OUR COMPANY
                        </Typography>
                        <Divider sx={{ width: "100%", height: "4px", backgroundColor: "#FFC107", mt: "4px" }} />
                    </Box>

                    <Typography
                        variant="h4"
                        className="heading"
                        sx={{
                            fontWeight: "bold",
                            fontSize: { xs: "24px", md: "32px" },
                            lineHeight: 1.3,
                        }}
                    >
                        Fast, Reliable, and Affordable Refrigerator Repair
                    </Typography>
                    <Typography
                        variant="body1"
                        color="text.secondary"
                        mt={2}
                        sx={{ fontFamily: "Roboto, sans-serif", fontSize: { xs: "14px", md: "16px" } }}
                    >
                        Here's a refined version of your Welcome to Our Company section for your fridge repair website. Let me know if you'd like any changes!
                    </Typography>

                    {/* Advantages List */}
                    <Grid container spacing={2} mt={3}>
                        {advantages.map((adv, index) => (
                            <Grid
                                item
                                xs={12}
                                sm={6}
                                key={index}
                                sx={{ display: "flex", alignItems: "center" }}
                            >
                                <StarIcon sx={{ color: "#FFC107", mr: 1 }} />
                                <Typography
                                    variant="body1"
                                    fontWeight="bold"
                                    sx={{ fontSize: { xs: "14px", md: "16px" } }}
                                >
                                    {adv}
                                </Typography>
                            </Grid>
                        ))}
                    </Grid>

                    {/* CEO Info */}
                    <Box mt={3}>
                        <Typography variant="body1" fontWeight="bold">
                            ABC ABC
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            CEO & Founder of My Company
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Advantages;
