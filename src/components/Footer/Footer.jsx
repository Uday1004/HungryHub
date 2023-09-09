import React from 'react';
import { Container, Grid, IconButton, Link, Typography } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn, GitHub } from '@mui/icons-material';
import './footer.css';

export default function Footer() {
    return (
        <footer className='footer'>
            <section className='social-links'>
                <Container>
                    <Grid container alignItems='center'>
                        <Grid item xs={12} sm={6} md={6}>
                            <Typography variant='body1'>Get connected with us on social networks:</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <div className='social-icons'>
                                <IconButton href='#'>
                                    <Facebook />
                                </IconButton>
                                <IconButton href='#'>
                                    <Twitter />
                                </IconButton>
                                <IconButton href='#'>
                                    <Instagram />
                                </IconButton>
                                <IconButton href='#'>
                                    <LinkedIn />
                                </IconButton>
                                <IconButton href='#'>
                                    <GitHub />
                                </IconButton>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </section>

            <section className='footer-content'>
                <Container>
                    <Grid container spacing={8}>
                        <Grid item xs={12} sm={6} md={3}>
                            <Typography variant='h6' className='footer-heading'>
                                <i className='fas fa-gem'></i>
                                Company name
                            </Typography>
                            <Typography variant='body2'>
                                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit.
                            </Typography>
                        </Grid>

                        <Grid item xs={12} sm={6} md={2}>
                            <Typography variant='h6' className='footer-heading'>
                                Products
                            </Typography>
                            <Typography variant='body2' className='tool-head'>
                                <Link href='#!'>Angular</Link>
                            </Typography>
                            <Typography variant='body2' className='tool-head'>
                                <Link href='#!'>React</Link>
                            </Typography>
                            <Typography variant='body2' className='tool-head'>
                                <Link href='#!'>Vue</Link>
                            </Typography>
                            <Typography variant='body2' className='tool-head'>
                                <Link href='#!'>Laravel</Link>
                            </Typography>
                        </Grid>

                        <Grid item xs={12} sm={6} md={3}>
                            <Typography variant='h6' className='footer-heading'>
                                Useful links
                            </Typography>
                            <Typography variant='body2' className='tool-head'>
                                <Link href='#!'>Pricing</Link>
                            </Typography>
                            <Typography variant='body2' className='tool-head'>
                                <Link href='#!'>Settings</Link>
                            </Typography>
                            <Typography variant='body2' className='tool-head'>
                                <Link href='#!'>Orders</Link>
                            </Typography>
                            <Typography variant='body2' className='tool-head'>
                                <Link href='#!'>Help</Link>
                            </Typography>
                        </Grid>

                        <Grid item xs={12} sm={6} md={3}>
                            <Typography variant='h6' className='footer-heading'>
                                Contact
                            </Typography>
                            <Typography variant='body2' className='tool-head'>
                                <i className='fas fa-home'></i> Indore , 452011 , India
                            </Typography>
                            <Typography variant='body2' className='tool-head'>
                                <i className='fas fa-envelope'></i> Hungry_Hub.com
                            </Typography>
                            <Typography variant='body2' className='tool-head'>
                                <i className='fas fa-phone'></i> udaysolanki530@gmail.com
                            </Typography>
                            <Typography variant='body2' className='tool-head'>
                                <i className='fas fa-print'></i> sandeepprajapat200@gmail.com
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </section>

            <div className='copyright'>
                <Container>
                    <Typography variant='body2' className='footer-link'>
                        © 2021 Copyright:
                        <Link href='/' color='inherit'>
                            Hungry_Hub.com
                        </Link>
                    </Typography>
                </Container>
            </div>
        </footer>
    );
}
