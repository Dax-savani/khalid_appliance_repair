import React from "react";
import {Box, Typography} from "@mui/material";

function HeroSection({image,title}) {
    return (
        <Box
            sx={{
                position: "relative",
                height: "60vh",
                width: "100%",
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                "::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                },
            }}
        >
            <Box
                sx={{
                    position: "absolute",
                    left: {xs: "5%", sm: "8%", md: "10%"},
                    top: "50%",
                    transform: "translateY(-50%)",
                }}
            >
                <Typography
                    variant="h2"
                    fontWeight="bold"
                    color="white"
                    sx={{
                        fontSize: {xs: "36px", sm: "55px", md: "76px", lg: "86px"},
                        lineHeight: 1.2,
                    }}
                >
                    {title}
                </Typography>

                <Box
                    sx={{
                        position: "relative",
                        width: {xs: "150px", sm: "180px", md: "200px"},
                        height: "5px",
                        borderBottom: "1px solid #B1B1B1",
                        mt: 1,
                        "&::after": {
                            content: '""',
                            position: "absolute",
                            width: "40%",
                            height: "100%",
                            borderBottom: "5px solid #FECD1A",
                            top: "50%",
                            transform: "translateY(-50%)",
                            left: 0,
                        },
                    }}
                ></Box>
            </Box>
        </Box>
    );
}

export default HeroSection;
