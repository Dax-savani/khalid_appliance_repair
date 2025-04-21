'use client';
import React, { useState } from 'react';
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    Container,
    Box,
    IconButton
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const FAQSection = ({ faqData }) => {
    const [expanded, setExpanded] = useState(null);

    const handleChange = (panel) => (_, isExpanded) => {
        setExpanded(isExpanded ? panel : null);
    };

    return (
        <Container sx={{ py: 6 }}>
            <Typography
                variant="h5"
                sx={{fontWeight: "bold", color: "#1E2A5A", fontSize: {xs: "1.4rem", md: "1.8rem"},mb:4}}
            >
                Frequently Asked Questions
            </Typography>

            <Box sx={{ width: '100%', mx: 'auto' }}>
                {faqData?.map((faq, index) => {
                    const isOpen = expanded === index;
                    return (
                        <Accordion
                            key={index}
                            expanded={isOpen}
                            onChange={handleChange(index)}
                            sx={{
                                mb: 2,
                                borderRadius: 1,
                                boxShadow: 'none',
                                backgroundColor: isOpen ? '#f4f7fb' : '#fff',
                                border: '1px solid #e0e0e0',
                            }}
                        >
                            <AccordionSummary
                                expandIcon={
                                    <IconButton disableRipple>
                                        {isOpen ? (
                                            <RemoveIcon sx={{ color: '#003087' }} />
                                        ) : (
                                            <AddIcon sx={{ color: '#003087' }} />
                                        )}
                                    </IconButton>
                                }
                                aria-controls={`panel${index}-content`}
                                id={`panel${index}-header`}
                                sx={{
                                    px: 2,
                                    py: 1.5,
                                    '& .MuiTypography-root': {
                                        color: '#003087',
                                        fontWeight: 600,
                                        fontSize: '1.3rem',
                                    },
                                }}
                            >
                                <Typography>{faq.question}</Typography>
                            </AccordionSummary>

                            <AccordionDetails
                                sx={{
                                    px: 2,
                                    py: 1.5,
                                    backgroundColor: '#f9f9f9',
                                    borderTop: '1px solid #ddd',
                                    fontSize: '1rem',
                                }}
                            >
                                <Typography variant="body2" color="text.secondary">
                                    {faq.answer}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    );
                })}
            </Box>
        </Container>
    );
};

export default FAQSection;
