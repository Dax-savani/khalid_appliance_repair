import React from 'react';
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    Container,
    Box,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const faqData = [
    {
        question: "Can you tell me more information about your products?",
        answer: "Please feel free to email us for more information! We try to only advertise products available on site at that time, however sometimes this isn't..."
    },
    {
        question: "Extracting the is simply dummy text of the printing and typesetting?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
    },
    {
        question: "Is Skinnydip make up and beauty certified by Cruelty?",
        answer: "All our products are certified cruelty-free and never tested on animals. We're proud to be PETA-certified."
    },
    {
        question: "Simply dummy is text of the printing?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
    },
    {
        question: "When is a FAQ page appropriate?",
        answer: "A FAQ page is appropriate whenever you want to provide quick answers to common customer inquiries and improve user experience."
    },
];

const FAQSection = () => {
    return (
        <Container sx={{ py: 4 }}>
            <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', mb: 4 }}>
                Frequently Asked Questions
            </Typography>

            <Box sx={{ width: '100%' }}>
                {faqData.map((faq, index) => (
                    <Accordion key={index} sx={{ mb: 2, boxShadow: 1 }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`panel${index}-content`}
                            id={`panel${index}-header`}
                        >
                            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                                {faq.question}
                            </Typography>
                        </AccordionSummary>

                        <AccordionDetails>
                            <Typography variant="body2" color="text.secondary">
                                {faq.answer}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </Box>
        </Container>
    );
};

export default FAQSection;