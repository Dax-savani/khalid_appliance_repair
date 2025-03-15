"use client";

import { useForm } from 'react-hook-form';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { TextField, Button, Container, Typography, Box, Grid, Paper } from '@mui/material';

function Page() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log("Form Data Submitted:", data);
    };

    return (
        <Container maxWidth="xl" sx={{ py: 4, px: 2 }}>
            <Typography variant="h4" align="center" gutterBottom sx={{ borderBottom: '3px solid #FFC107', pb: 1, fontWeight: 'bold' }}>GET IN TOUCH</Typography>
            <Grid container spacing={4} justifyContent="center" alignItems="center" sx={{ mt: 3 }}>
                {/* Left Section - Form */}
                <Grid item xs={12} md={6} lg={6}>
                    <Paper elevation={3} sx={{ p: { xs: 2, sm: 4 }, borderRadius: 2 }}>
                        <Typography variant="h5" gutterBottom fontWeight="bold">CONTACT US</Typography>
                        <Typography paragraph>
                            Nexus gravida est risus lorem sed. Velit nunc amet vestibulum neque enim.
                        </Typography>
                        <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        label="Your Full Name"
                                        {...register("fullName", { required: "Full Name is required" })}
                                        error={!!errors.fullName}
                                        helperText={errors.fullName?.message}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        label="Your Mobile Number"
                                        type="tel"
                                        {...register("mobileNumber", { required: "Mobile Number is required" })}
                                        error={!!errors.mobileNumber}
                                        helperText={errors.mobileNumber?.message}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        label="Your Email Address"
                                        type="email"
                                        {...register("emailAddress", { required: "Email Address is required" })}
                                        error={!!errors.emailAddress}
                                        helperText={errors.emailAddress?.message}
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
                            <Button type="submit" variant="contained" fullWidth sx={{ backgroundColor: '#FFC107', color: '#000', fontWeight: 'bold', mt: 2 }}>SUBMIT NOW</Button>
                        </Box>
                    </Paper>
                </Grid>

                {/* Right Section - Address & Map */}
                <Grid item xs={12} md={6} lg={5}>
                    <Paper elevation={3} sx={{ p: { xs: 2, sm: 4 }, borderRadius: 2, height: '100%' }}>
                        <Typography variant="h5" gutterBottom fontWeight="bold">OUR OFFICE ADDRESS</Typography>
                        <Typography sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            📍 0000, This Society, landmark, city, state - pincode.
                        </Typography>
                        <Typography sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            📞 789-918-5736
                        </Typography>
                        <Typography sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            ✉️ yournain@gmail.com
                        </Typography>
                        <Box mt={3} sx={{ width: '100%', height: { xs: '250px', sm: '300px' }, borderRadius: 2, overflow: 'hidden' }}>
                            <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '100%', width: '100%' }}>
                                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                                <Marker position={[51.505, -0.09]}>
                                    <Popup>Our Office Location</Popup>
                                </Marker>
                            </MapContainer>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Page;
