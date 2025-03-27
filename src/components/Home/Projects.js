'use client';
import React, {useEffect, useState} from "react";
import axios from "axios";
import {Card, CardContent, CardMedia, Container, Grid, Typography} from "@mui/material";
import {useRouter} from "next/navigation";

function Projects() {
    const [projects, setProjects] = useState([]);
    const router = useRouter();
    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/project`);
                setProjects(res.data.data);
            } catch (error) {
                console.error("Error fetching projects:", error);
            }
        };

        fetchProjects();
    }, []);

    return (
        <Container maxWidth="lg" sx={{pb: {xs: 4, md: 6}}}>
            <Grid container spacing={5} justifyContent="center">
                {projects.map((work, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card
                            sx={{
                                position: "relative",
                                borderRadius: 0,
                                boxShadow: 0,
                                overflow: "unset",
                                my: 3,
                                textWrap: "nowrap",
                                cursor: "pointer",
                            }}
                            onClick={() => router.push(`/projects/${work._id}`)}
                        >
                            <CardMedia component="img" height="250" image={work.images[0]} alt={work.title}/>

                            <CardContent
                                sx={{
                                    position: "absolute",
                                    bottom: "-20%",
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
                                <Typography variant="h6" fontWeight="bold" sx={{fontSize: "1.25rem"}}>
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
        </Container>
    );
}

export default Projects;
