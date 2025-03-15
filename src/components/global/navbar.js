'use client'
import React, { useState } from "react";
import {
    AppBar,
    Toolbar,
    Box,
    Typography,
    Button,
    IconButton,
    Container,
    Drawer,
    List,
    ListItem,
    ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ScheduleIcon from "@mui/icons-material/EventAvailable";
import QuoteIcon from "@mui/icons-material/Layers";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
    const router = useRouter()
    const pathname = usePathname();

    const navItems = [
        { name: "HOME", path: "/" },
        { name: "ABOUT US", path: "/about-us" },
        { name: "SERVICES", path: "/services" },
        { name: "PROJECTS", path: "/projects" },
        { name: "SHOP", path: "/shop" },
        { name: "BLOG", path: "/blog" },
        { name: "CONTACT US", path: "/contact" }
    ];

    return (
        <Box>
            {/* Top Bar */}
            <AppBar position="static"
                sx={{ backgroundColor: "#0b1e4d", height: '70px', color: "#fff", padding: "5px 0" }}>
                <Container>
                    <Toolbar sx={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
                        {/* Left Side (Time Info) */}
                        <Typography
                            variant="body2"
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 1,
                                fontSize: { xs: "10px", sm: "12px", md: "13px" },
                            }}
                        >
                            <AccessTimeIcon fontSize="small" />
                            It's Friday, 3:00pm & We are Open Till 6:00pm
                        </Typography>

                        {/* Right Side (Buttons & Social Icons) */}
                        <Box sx={{ display: "flex", alignItems: "center", gap: 1, flexWrap: "wrap" }}>
                            <Button startIcon={<ScheduleIcon />} sx={{
                                color: "#fff",
                                textTransform: "none",
                                fontSize: { xs: "10px", sm: "12px", md: "13px" }
                            }}>
                                Schedule a Service
                            </Button>
                            <Typography sx={{ color: "#fff", fontWeight: "bold" }}>|</Typography>
                            <Button startIcon={<QuoteIcon />} sx={{
                                color: "#fff",
                                textTransform: "none",
                                fontSize: { xs: "10px", sm: "12px", md: "13px" }
                            }}>
                                Request a Quote
                            </Button>
                            <Typography sx={{ color: "#fff", fontWeight: "bold", display: { xs: 'none', sm: 'block' } }}>|</Typography>
                            <IconButton sx={{ paddingInline: '3px', display: { xs: 'none', sm: 'block' }, color: "#fff" }}>
                                <FacebookIcon />
                            </IconButton>
                            <IconButton sx={{ paddingInline: '3px', display: { xs: 'none', sm: 'block' }, color: "#fff" }}>
                                <TwitterIcon />
                            </IconButton>
                            <IconButton sx={{ paddingInline: '3px', display: { xs: 'none', sm: 'block' }, color: "#fff" }}>
                                <InstagramIcon />
                            </IconButton>
                            <IconButton sx={{ paddingInline: '3px', display: { xs: 'none', sm: 'block' }, color: "#fff" }}>
                                <PinterestIcon />
                            </IconButton>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>

            {/* Main Navbar */}
            <AppBar position="static" elevation={0} sx={{ backgroundColor: "#fff", color: "#000", padding: "10px 0" }}>
                <Container>
                    <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                        {/* Logo */}
                        <Box
                            sx={{
                                width: 50,
                                height: 50,
                                backgroundColor: "#000",
                                borderRadius: "50%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                color: "#fff",
                                fontWeight: "bold",
                                fontSize: "12px",
                            }}
                        >
                            REPAIR
                        </Box>

                        {/* Desktop Navbar Links */}
                        <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: 'center', justifyContent: 'center', gap: { sm: 3, md: 5 } }}>
                            {navItems.map((item, index) => (
                                <Typography
                                    onClick={() => router.push(item.path)}
                                    key={index}
                                    sx={{
                                        fontSize: { xs: "12px", md: "14px" },
                                        fontWeight: '500',
                                        cursor: "pointer",
                                        color: pathname === item.path ? "#ffcc00" : "#000",
                                        transition: "color 0.3s ease-in-out",
                                        "&:hover": { color: "#ffcc00" },
                                    }}
                                >
                                    {item.name}
                                </Typography>
                            ))}
                        </Box>
                        {/* Mobile Menu Button */}
                        <IconButton onClick={handleDrawerToggle} sx={{ display: { xs: "block", md: "none" } }}>
                            <MenuIcon />
                        </IconButton>

                        {/* Contact Button (Hidden on Mobile) */}
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: "#ffcc00",
                                color: "#000",
                                fontWeight: "bold",
                                fontSize: { xs: "10px", sm: "12px", md: "13px" },
                                display: { xs: "none", md: "block" },
                                "&:hover": {
                                    backgroundColor: "#e6b800",
                                },
                            }}
                        >
                            CONTACT NOW
                        </Button>
                    </Toolbar>
                </Container>
            </AppBar>

            {/* Mobile Drawer */}
            <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
                <List sx={{ width: 250 }}>
                    {navItems.map((item, index) => (
                        <ListItem button key={index} onClick={handleDrawerToggle}>
                            <ListItemText
                                onClick={() => router.push(item.path)}
                                primary={item.name}
                                sx={{
                                    textAlign: "center",
                                    fontWeight: 500,
                                    "&:hover": { color: "#ffcc00" },
                                }}
                            />
                        </ListItem>
                    ))}
                    <ListItem>
                        <Button
                            fullWidth
                            variant="contained"
                            sx={{
                                backgroundColor: "#ffcc00",
                                color: "#000",
                                fontWeight: "bold",
                                "&:hover": {
                                    backgroundColor: "#e6b800",
                                },
                            }}
                        >
                            CONTACT NOW
                        </Button>
                    </ListItem>
                </List>
            </Drawer>
        </Box>
    );
};

export default Navbar;
