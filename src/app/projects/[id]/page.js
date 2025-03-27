'use client';
import {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "next/navigation";
import {
    Box,
    CircularProgress,
    Container,
    Divider,
    Grid,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function Page() {
    const {id} = useParams();
    const [projectDetails, setProjectDetails] = useState(null)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/project/${id}`);
                setProjectDetails(res.data.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    if (loading) {
        return (
            <Container maxWidth="lg" sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "80vh" }}>
                <CircularProgress />
            </Container>
        );
    }

    if (!projectDetails) {
        return (
            <Container maxWidth="lg" sx={{ textAlign: "center", py: 4 }}>
                <Typography variant="h6" color="error">No project details found.</Typography>
            </Container>
        );
    }
    return (
        <>
            <Container maxWidth="lg" sx={{py: {xs: 4, md: 6}, px: {xs: 2, md: 4}}}>
                <Box sx={{textAlign: "left"}}>
                    <Typography
                        variant="h5"
                        sx={{fontWeight: "bold", color: "#1E2A5A", fontSize: {xs: "1.4rem", md: "1.8rem"}}}
                    >
                        THE PROBLEM
                    </Typography>
                    <Typography variant="body1" sx={{mt: 1, color: "#4A4A4A", fontSize: {xs: "0.9rem", md: "1rem"}}}>
                        {projectDetails?.problem}
                    </Typography>
                </Box>

                <Divider sx={{my: {xs: 3, md: 4}, borderColor: "rgba(0,0,0,0.1)"}}/>

                <Box sx={{textAlign: "left"}}>
                    <Typography
                        variant="h5"
                        sx={{fontWeight: "bold", color: "#1E2A5A", fontSize: {xs: "1.4rem", md: "1.8rem"}}}
                    >
                        THE SOLUTION
                    </Typography>
                    <Typography variant="body1" sx={{mt: 1, color: "#4A4A4A", fontSize: {xs: "0.9rem", md: "1rem"}}}>
                        {projectDetails?.solution?.description}
                    </Typography>

                    <List sx={{mt: 2}}>
                        {projectDetails?.solution?.keyPoints.map((item, index) => (
                            <ListItem key={index} sx={{alignItems: "center", pl: 0}}>
                                <ListItemIcon sx={{minWidth: "30px"}}>
                                    <CheckCircleIcon sx={{color: "#FFC107", fontSize: 22}}/>
                                </ListItemIcon>
                                <ListItemText
                                    primary={item}
                                    sx={{color: "#4A4A4A", fontSize: {xs: "0.9rem", md: "1rem"}}}
                                />
                            </ListItem>
                        ))}
                    </List>
                </Box>

                <Box sx={{mt: {xs: 4, md: 6}}}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <img src={projectDetails?.images?.at(0)} alt="Repair"
                                 style={{width: "100%", height: '568px'}}/>
                        </Grid>
                        <Grid item xs={6}>
                            <img src={projectDetails?.images?.at(1)} alt="Repairman"
                                 style={{width: "100%", height: '412px'}}/>
                        </Grid>
                        <Grid item xs={6}>
                            <img src={projectDetails?.images?.at(2)} alt="Washing Machine"
                                 style={{width: "100%", height: '412px'}}/>
                        </Grid>
                    </Grid>
                </Box>

                <Box sx={{textAlign: "left", mt: {xs: 4, md: 6}}}>
                    <Typography
                        variant="h5"
                        sx={{fontWeight: "bold", color: "#1E2A5A", fontSize: {xs: "1.4rem", md: "1.8rem"}}}
                    >
                        THE RESULT
                    </Typography>
                    <Typography variant="body1" sx={{mt: 1, color: "#4A4A4A", fontSize: {xs: "0.9rem", md: "1rem"}}}>
                        {projectDetails?.results?.description}
                    </Typography>


                    <List sx={{mt: 2}}>
                        {projectDetails?.results?.keyPoints.map((item, index) => (
                            <ListItem key={index} sx={{alignItems: "center", pl: 0}}>
                                <ListItemIcon sx={{minWidth: "30px"}}>
                                    <CheckCircleIcon sx={{color: "#FFC107", fontSize: 22}}/>
                                </ListItemIcon>
                                <ListItemText
                                    primary={item}
                                    sx={{color: "#4A4A4A", fontSize: {xs: "0.9rem", md: "1rem"}}}
                                />
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Container>
        </>
    );
}

export default Page;
