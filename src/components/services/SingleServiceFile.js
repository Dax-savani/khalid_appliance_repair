'use client';
import React, {useEffect, useState} from 'react';
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
import img1 from "@/assets/images/projects/washer-repair-3 1.png";
import img2 from "@/assets/images/projects/washing-machine-repair-near-me 1.png";
import img3 from "@/assets/images/projects/Washing-machine-Repair-2 1.png";
import axios from "axios";
import FAQSection from "@/components/Projects/ProjectFAQ";

function SingleServiceFile({params}) {
    const [singleData, setSingleData] = useState(null)
    const [loading, setLoading] = useState(true);

    const fetchSingleData = async () => {
        try {
            setLoading(true);
            const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/service/${JSON.parse(params?.value)?.id}`);
            setSingleData(res.data.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchSingleData();
    }, []);
    if (loading) {
        return (
            <Container maxWidth="lg" sx={{py: 6,display: 'flex',alignItems: 'center',justifyContent: 'center', textAlign: "center",height: "100vh"}}>
                <CircularProgress/>
            </Container>
        );
    }
    return (
        <>
            <Container maxWidth="lg" sx={{py: {xs: 4, md: 6}, px: {xs: 2, md: 4}}}>
                {/* Problem Section */}
                <Box sx={{textAlign: "left"}}>
                    <Typography
                        variant="h5"
                        sx={{fontWeight: "bold", color: "#1E2A5A", fontSize: {xs: "1.4rem", md: "1.8rem"}}}
                    >
                        {singleData?.title}
                    </Typography>
                    <Typography variant="body1" sx={{mt: 2, color: "#4A4A4A", fontSize: {xs: "0.9rem", md: "1rem"}}}>
                        {singleData?.description}
                    </Typography>
                </Box>

                <Divider sx={{my: {xs: 3, md: 4}, borderColor: "rgba(0,0,0,0.1)"}}/>

                <Box sx={{textAlign: "left"}}>
                    <Typography
                        variant="h5"
                        sx={{fontWeight: "bold", color: "#1E2A5A", fontSize: {xs: "1.4rem", md: "1.8rem"}}}
                    >
                        {singleData?.subTitle}
                    </Typography>
                    <List sx={{mt: 2}}>
                        {singleData?.keyPoints?.map((item, index) => (
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
                            <img src={singleData?.images?.at(0)} alt="Repair" style={{width: "100%", height: '568px'}}/>
                        </Grid>
                        <Grid item xs={6}>
                            <img src={singleData?.images?.at(1)} alt="Repairman"
                                 style={{width: "100%", height: '412px'}}/>
                        </Grid>
                        <Grid item xs={6}>
                            <img src={singleData?.images?.at(2)} alt="Washing Machine"
                                 style={{width: "100%", height: '412px'}}/>
                        </Grid>
                    </Grid>
                </Box>

                <Typography variant="body1" sx={{mt: 1, color: "#4A4A4A", fontSize: {xs: "0.9rem", md: "1rem"}}}>
                    {singleData?.subDescription}
                </Typography>


            </Container>
            <FAQSection faqData={singleData?.faqs}/>
        </>
    );
}

export default SingleServiceFile;