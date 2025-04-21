"use client";

import dynamic from "next/dynamic";
import { useForm } from 'react-hook-form';
import 'leaflet/dist/leaflet.css';
import { TextField, Button, Container, Typography, Box, Grid, Paper } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailIcon from '@mui/icons-material/Mail';
import axios from "axios";
import '../../utils/leafletConfig';

const MapContainer = dynamic(() => import("react-leaflet").then((mod) => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import("react-leaflet").then((mod) => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import("react-leaflet").then((mod) => mod.Marker), { ssr: false });
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), { ssr: false });

function GetInTouch() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log("Form Data Submitted:", data);
        try{
          const res = axios.post(`${process.env.NEXT_PUBLIC_API_URL}/contact`,data)
            console.log(res,"llllllll")
        }catch (e){
            console.log(e)
        }
    };

    return (
        <Box sx={{backgroundColor:'#F7F7F8'}}>
            <Container maxWidth="xl" sx={{ py: 10, px: 2 }}>
                <Typography variant="h4" align="center" gutterBottom sx={{ pb: 1, fontWeight: 'bold', color: '#1E2452' }}>GET IN TOUCH</Typography>
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: 'center', mt: 1, mb: 4 }}>
                    <Box sx={{ width: "70px", height: "1px", backgroundColor: "gray" }} />
                    <Box sx={{ width: "60px", height: "5px", backgroundColor: "#FECD1A" }} />
                    <Box sx={{ width: "70px", height: "1px", backgroundColor: "gray" }} />
                </Box>
                <Grid container spacing={4} justifyContent="center" alignItems="center" sx={{ mt: 3 }}>
                    {/* Left Section - Form */}
                    <Grid item xs={12} md={6} lg={6}>
                        <Paper elevation={3} sx={{ p: { xs: 2, sm: 4 }, borderRadius: 0, border: '0.5px solid #000' }}>
                            <Typography variant="h5" gutterBottom fontWeight="bold" color='#001D46'>CONTACT US</Typography>
                            <Typography color='#374C75' my={2} mr={11}>
                                Nexus gravida est risus lorem sed. Velit nunc amet vestibulum neque enim.
                            </Typography>
                            <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            label="Your Full Name"
                                            {...register("fullname", { required: "Fullname is required" })}
                                            error={!!errors.fullname}
                                            helperText={errors.fullname?.message}
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            label="Your Mobile Number"
                                            type="tel"
                                            {...register("contact", { required: "Contact Number is required" })}
                                            error={!!errors.contact}
                                            helperText={errors.contact?.message}
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            label="Your Email Address"
                                            type="email"
                                            {...register("email", { required: "Email Address is required" })}
                                            error={!!errors.email}
                                            helperText={errors.email?.message}
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            label="Service Type"
                                            {...register("serviceType", { required: "Service Type is required" })}
                                            error={!!errors.serviceType}
                                            helperText={errors.serviceType?.message}
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            label="Write Something Here……"
                                            multiline
                                            rows={4}
                                            {...register("message", { required: "Message is required" })}
                                            error={!!errors.message}
                                            helperText={errors.message?.message}
                                            fullWidth
                                        />
                                    </Grid>
                                </Grid>
                                <Button type="submit" variant="contained" fullWidth sx={{ backgroundColor: '#FFC107', color: '#000', mt: 2, boxShadow: 'none' }}>SUBMIT NOW</Button>
                            </Box>
                        </Paper>
                    </Grid>

                    {/* Right Section - Address & Map */}
                    <Grid item xs={12} md={6} lg={5}>
                        <Typography variant="h5" gutterBottom fontWeight="bold" color='#001D46' my={3}>SERVICE AREA</Typography>
                        <Typography sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#374C75', mb: 2 }}>
                            <LocationOnIcon sx={{ mr: 1 }} /> Al Majaz, Sharjah, UAE
                        </Typography>
                        <Typography sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#374C75', mb: 2 }}>
                            <LocalPhoneIcon sx={{ mr: 1 }} />  +971-789-918-5736
                        </Typography>
                        <Typography sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#374C75', mb: 2 }}>
                            <MailIcon sx={{ mr: 1 }} /> yournain@gmail.com
                        </Typography>
                        <Box mt={3} sx={{ width: '100%', height: { xs: '250px', sm: '300px' }, borderRadius: 0, border: '1px solid #000', overflow: 'hidden' }}>
                            {/* ✅ Map loads only on Client Side */}
                            <MapContainer center={[25.335, 55.392]} zoom={13} style={{ height: '100%', width: '100%' }}>
                                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                                <Marker position={[25.335, 55.392]}>
                                    <Popup>Service area</Popup>
                                </Marker>
                            </MapContainer>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default GetInTouch;
